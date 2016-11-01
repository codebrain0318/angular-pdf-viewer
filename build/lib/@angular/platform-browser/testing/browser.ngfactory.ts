/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '@angular/platform-browser/testing/browser';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '@angular/core/src/application_init';
import * as import7 from '@angular/core/src/testability/testability';
import * as import8 from '@angular/core/src/application_ref';
import * as import9 from '@angular/core/src/linker/compiler';
import * as import10 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import11 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import12 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import13 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import14 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import15 from '@angular/core/src/linker/view_utils';
import * as import16 from '@angular/platform-browser/src/browser/title';
import * as import17 from '@angular/core/src/di/injector';
import * as import18 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import19 from '@angular/platform-browser/src/dom/events/key_events';
import * as import20 from '@angular/platform-browser/src/dom/animation_driver';
import * as import21 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import22 from '@angular/platform-browser/testing/browser_util';
import * as import23 from '@angular/core/src/console';
import * as import24 from '@angular/core/src/i18n/tokens';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from '@angular/core/src/error_handler';
import * as import27 from '@angular/core/src/application_tokens';
import * as import28 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import29 from '@angular/core/src/render/api';
import * as import30 from '@angular/core/src/security';
import * as import31 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import32 from '@angular/core/src/change_detection/differs/keyvalue_differs';
class BrowserTestingModuleInjector extends import0.NgModuleInjector<import1.BrowserTestingModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _BrowserTestingModule_3:import1.BrowserTestingModule;
  __LOCALE_ID_4:any;
  __NgLocalization_5:import5.NgLocaleLocalization;
  _NgZone_6:any;
  _ErrorHandler_7:any;
  _ApplicationInitStatus_8:import6.ApplicationInitStatus;
  _Testability_9:import7.Testability;
  _ApplicationRef__10:import8.ApplicationRef_;
  __ApplicationRef_11:any;
  __Compiler_12:import9.Compiler;
  __APP_ID_13:any;
  __DOCUMENT_14:any;
  __HAMMER_GESTURE_CONFIG_15:import10.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_16:any[];
  __EventManager_17:import11.EventManager;
  __DomSharedStylesHost_18:import12.DomSharedStylesHost;
  __AnimationDriver_19:any;
  __DomRootRenderer_20:import13.DomRootRenderer_;
  __RootRenderer_21:any;
  __DomSanitizer_22:import14.DomSanitizerImpl;
  __Sanitizer_23:any;
  __ViewUtils_24:import15.ViewUtils;
  __IterableDiffers_25:any;
  __KeyValueDiffers_26:any;
  __SharedStylesHost_27:any;
  __Title_28:import16.Title;
  constructor(parent:import17.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _LOCALE_ID_4():any {
    if ((this.__LOCALE_ID_4 == (null as any))) { (this.__LOCALE_ID_4 = 'en-US'); }
    return this.__LOCALE_ID_4;
  }
  get _NgLocalization_5():import5.NgLocaleLocalization {
    if ((this.__NgLocalization_5 == (null as any))) { (this.__NgLocalization_5 = new import5.NgLocaleLocalization(this._LOCALE_ID_4)); }
    return this.__NgLocalization_5;
  }
  get _ApplicationRef_11():any {
    if ((this.__ApplicationRef_11 == (null as any))) { (this.__ApplicationRef_11 = this._ApplicationRef__10); }
    return this.__ApplicationRef_11;
  }
  get _Compiler_12():import9.Compiler {
    if ((this.__Compiler_12 == (null as any))) { (this.__Compiler_12 = new import9.Compiler()); }
    return this.__Compiler_12;
  }
  get _APP_ID_13():any {
    if ((this.__APP_ID_13 == (null as any))) { (this.__APP_ID_13 = 'a'); }
    return this.__APP_ID_13;
  }
  get _DOCUMENT_14():any {
    if ((this.__DOCUMENT_14 == (null as any))) { (this.__DOCUMENT_14 = import4._document()); }
    return this.__DOCUMENT_14;
  }
  get _HAMMER_GESTURE_CONFIG_15():import10.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_15 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_15 = new import10.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_15;
  }
  get _EVENT_MANAGER_PLUGINS_16():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_16 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_16 = [
      new import18.DomEventsPlugin(),
      new import19.KeyEventsPlugin(),
      new import10.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_15)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_16;
  }
  get _EventManager_17():import11.EventManager {
    if ((this.__EventManager_17 == (null as any))) { (this.__EventManager_17 = new import11.EventManager(this._EVENT_MANAGER_PLUGINS_16,this._NgZone_6)); }
    return this.__EventManager_17;
  }
  get _DomSharedStylesHost_18():import12.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_18 == (null as any))) { (this.__DomSharedStylesHost_18 = new import12.DomSharedStylesHost(this._DOCUMENT_14)); }
    return this.__DomSharedStylesHost_18;
  }
  get _AnimationDriver_19():any {
    if ((this.__AnimationDriver_19 == (null as any))) { (this.__AnimationDriver_19 = import20.AnimationDriver.NOOP); }
    return this.__AnimationDriver_19;
  }
  get _DomRootRenderer_20():import13.DomRootRenderer_ {
    if ((this.__DomRootRenderer_20 == (null as any))) { (this.__DomRootRenderer_20 = new import13.DomRootRenderer_(this._DOCUMENT_14,this._EventManager_17,this._DomSharedStylesHost_18,this._AnimationDriver_19)); }
    return this.__DomRootRenderer_20;
  }
  get _RootRenderer_21():any {
    if ((this.__RootRenderer_21 == (null as any))) { (this.__RootRenderer_21 = import21._createConditionalRootRenderer(this._DomRootRenderer_20,this.parent.get(import21.NgProbeToken))); }
    return this.__RootRenderer_21;
  }
  get _DomSanitizer_22():import14.DomSanitizerImpl {
    if ((this.__DomSanitizer_22 == (null as any))) { (this.__DomSanitizer_22 = new import14.DomSanitizerImpl()); }
    return this.__DomSanitizer_22;
  }
  get _Sanitizer_23():any {
    if ((this.__Sanitizer_23 == (null as any))) { (this.__Sanitizer_23 = this._DomSanitizer_22); }
    return this.__Sanitizer_23;
  }
  get _ViewUtils_24():import15.ViewUtils {
    if ((this.__ViewUtils_24 == (null as any))) { (this.__ViewUtils_24 = new import15.ViewUtils(this._RootRenderer_21,this._APP_ID_13,this._Sanitizer_23)); }
    return this.__ViewUtils_24;
  }
  get _IterableDiffers_25():any {
    if ((this.__IterableDiffers_25 == (null as any))) { (this.__IterableDiffers_25 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_25;
  }
  get _KeyValueDiffers_26():any {
    if ((this.__KeyValueDiffers_26 == (null as any))) { (this.__KeyValueDiffers_26 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_26;
  }
  get _SharedStylesHost_27():any {
    if ((this.__SharedStylesHost_27 == (null as any))) { (this.__SharedStylesHost_27 = this._DomSharedStylesHost_18); }
    return this.__SharedStylesHost_27;
  }
  get _Title_28():import16.Title {
    if ((this.__Title_28 == (null as any))) { (this.__Title_28 = new import16.Title()); }
    return this.__Title_28;
  }
  createInternal():import1.BrowserTestingModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._BrowserTestingModule_3 = new import1.BrowserTestingModule();
    this._NgZone_6 = import22.createNgZone();
    this._ErrorHandler_7 = import4.errorHandler();
    this._ApplicationInitStatus_8 = new import6.ApplicationInitStatus(this.parent.get(import6.APP_INITIALIZER,(null as any)));
    this._Testability_9 = new import7.Testability(this._NgZone_6);
    this._ApplicationRef__10 = new import8.ApplicationRef_(this._NgZone_6,this.parent.get(import23.Console),this,this._ErrorHandler_7,this,this._ApplicationInitStatus_8,this.parent.get(import7.TestabilityRegistry,(null as any)),this._Testability_9);
    return this._BrowserTestingModule_3;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import1.BrowserTestingModule)) { return this._BrowserTestingModule_3; }
    if ((token === import24.LOCALE_ID)) { return this._LOCALE_ID_4; }
    if ((token === import5.NgLocalization)) { return this._NgLocalization_5; }
    if ((token === import25.NgZone)) { return this._NgZone_6; }
    if ((token === import26.ErrorHandler)) { return this._ErrorHandler_7; }
    if ((token === import6.ApplicationInitStatus)) { return this._ApplicationInitStatus_8; }
    if ((token === import7.Testability)) { return this._Testability_9; }
    if ((token === import8.ApplicationRef_)) { return this._ApplicationRef__10; }
    if ((token === import8.ApplicationRef)) { return this._ApplicationRef_11; }
    if ((token === import9.Compiler)) { return this._Compiler_12; }
    if ((token === import27.APP_ID)) { return this._APP_ID_13; }
    if ((token === import28.DOCUMENT)) { return this._DOCUMENT_14; }
    if ((token === import10.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_15; }
    if ((token === import11.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_16; }
    if ((token === import11.EventManager)) { return this._EventManager_17; }
    if ((token === import12.DomSharedStylesHost)) { return this._DomSharedStylesHost_18; }
    if ((token === import20.AnimationDriver)) { return this._AnimationDriver_19; }
    if ((token === import13.DomRootRenderer)) { return this._DomRootRenderer_20; }
    if ((token === import29.RootRenderer)) { return this._RootRenderer_21; }
    if ((token === import14.DomSanitizer)) { return this._DomSanitizer_22; }
    if ((token === import30.Sanitizer)) { return this._Sanitizer_23; }
    if ((token === import15.ViewUtils)) { return this._ViewUtils_24; }
    if ((token === import31.IterableDiffers)) { return this._IterableDiffers_25; }
    if ((token === import32.KeyValueDiffers)) { return this._KeyValueDiffers_26; }
    if ((token === import12.SharedStylesHost)) { return this._SharedStylesHost_27; }
    if ((token === import16.Title)) { return this._Title_28; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__10.ngOnDestroy();
  }
}
export const BrowserTestingModuleNgFactory:import0.NgModuleFactory<import1.BrowserTestingModule> = new import0.NgModuleFactory(BrowserTestingModuleInjector,import1.BrowserTestingModule);