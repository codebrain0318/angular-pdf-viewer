/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
export class Wrapper_FormGroupDirective {
  context:import0.FormGroupDirective;
  changed:boolean;
  changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.changes = {};
    this.context = new import0.FormGroupDirective(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
  }
  check_form(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.form = currValue;
      this.changes['form'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this.changes);
      this.changes = {};
    } }
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}