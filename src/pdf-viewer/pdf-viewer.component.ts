/**
 * Created by vadimdez on 21/06/16.
 */
import { Component, Input, ElementRef } from '@angular/core';
import PDFJS from 'pdfjs-dist';

@Component({
  selector: 'pdf-viewer',
  template: '<div class="ng2-pdf-viewer-container"><canvas></canvas></div>'
})

export class PdfViewerComponent {

  @Input('original-size') originalSize: boolean = false;
  @Input('show-all') showAll: boolean = true;
  private _src: string;
  private _pdf: any;
  private _page: number = 1;

  constructor(private element: ElementRef) {}

  @Input()
  set src(_src) {
    this._src = _src;

    this.fn();
  }

  @Input()
  set page(_page) {
    _page = parseInt(_page, 10);

    if (this._pdf && this.isValidPageNumber(_page)) {
      this._page = _page;
      this.renderPage(_page);
    }
  }

  private fn() {
    PDFJS.getDocument(this._src).then((pdf: any) => {
      this._pdf = pdf;

      if (!this.isValidPageNumber(this._page)) {
        this._page = 1;
      }

      if (!this.showAll) {
        return this.renderPage(this._page);
      }

      return this.renderMultiplePages();
    });
  }

  private renderMultiplePages() {
    let container = this.element.nativeElement.querySelector('div');
    this.element.nativeElement.querySelector('canvas').hidden = true;
    let i = 1;

    const renderPage = (page: any) => {
      let viewport = page.getViewport(1);
      let canvas: HTMLCanvasElement = document.createElement('canvas');
      let context = canvas.getContext('2d');

      if (!this.originalSize) {
        viewport = page.getViewport(this.element.nativeElement.offsetWidth / viewport.width);
      }

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      page.render({
        canvasContext: context,
        viewport: viewport
      });

      container.appendChild(canvas);

      if (i < this._pdf.numPages) {
        i++;
        this._pdf.getPage(i).then(renderPage);
      }
    };

    this._pdf.getPage(i).then(renderPage);
  }

  private isValidPageNumber(page: number) {
    return this._pdf.numPages >= page && page >= 1;
  }

  private renderPage(initialPage: number) {
    this._pdf.getPage(initialPage).then((page: any) => {
      let viewport = page.getViewport(1);
      let canvas = this.element.nativeElement.querySelector('canvas');
      let context = canvas.getContext('2d');

      canvas.hidden = false;

      if (!this.originalSize) {
        viewport = page.getViewport(this.element.nativeElement.offsetWidth / viewport.width);
      }

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      page.render({
        canvasContext: context,
        viewport: viewport
      });
    });
  }
}