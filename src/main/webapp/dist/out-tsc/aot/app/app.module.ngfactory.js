/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/material/core/ripple/ripple';
import * as import6 from '@angular/material/button/button';
import * as import7 from '@angular/material/card/card';
import * as import8 from '@angular/material/checkbox/checkbox';
import * as import9 from '@angular/material/core/line/line';
import * as import10 from '@angular/material/grid-list/grid-list';
import * as import11 from '@angular/forms/src/directives';
import * as import12 from '@angular/forms/src/form_providers';
import * as import13 from '@angular/material/input/input';
import * as import14 from '@angular/material/list/list';
import * as import15 from '@angular/material/progress-bar/progress-bar';
import * as import16 from '@angular/material/progress-circle/progress-circle';
import * as import17 from '@angular/material/select/index';
import * as import18 from '@angular/material/sidenav/sidenav';
import * as import19 from '@angular/material/core/portal/portal-directives';
import * as import20 from '@angular/material/tabs/tabs';
import * as import21 from '@angular/material/toolbar/toolbar';
import * as import22 from '@angular/material/core/rtl/dir';
import * as import23 from '@angular/material/core/a11y/index';
import * as import24 from '@angular/material/button-toggle/button-toggle';
import * as import25 from '@angular/material/core/overlay/overlay-directives';
import * as import26 from '@angular/material/dialog/dialog';
import * as import27 from '@angular/http/src/http_module';
import * as import28 from '@angular/material/icon/icon';
import * as import29 from '@angular/material/menu/menu';
import * as import30 from '@angular/material/radio/radio';
import * as import31 from '@angular/material/slider/slider';
import * as import32 from '@angular/material/slide-toggle/slide-toggle';
import * as import33 from '@angular/material/snack-bar/snack-bar';
import * as import34 from '@angular/material/tooltip/tooltip';
import * as import35 from '@angular/material/module';
import * as import36 from '@angular/common/src/localization';
import * as import37 from '@angular/core/src/application_init';
import * as import38 from '@angular/core/src/testability/testability';
import * as import39 from '@angular/core/src/application_ref';
import * as import40 from '@angular/core/src/linker/compiler';
import * as import41 from '@angular/material/core/gestures/MdGestureConfig';
import * as import42 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import43 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import44 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import45 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import46 from '@angular/core/src/linker/view_utils';
import * as import47 from '@angular/platform-browser/src/browser/title';
import * as import48 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import49 from '@angular/http/src/backends/browser_xhr';
import * as import50 from '@angular/http/src/base_response_options';
import * as import51 from '@angular/http/src/backends/xhr_backend';
import * as import52 from '@angular/http/src/base_request_options';
import * as import53 from '@angular/material/core/a11y/live-announcer';
import * as import54 from '@angular/material/core/a11y/interactivity-checker';
import * as import55 from '@angular/material/core/coordination/unique-selection-dispatcher';
import * as import56 from '@angular/material/core/overlay/overlay-container';
import * as import57 from '@angular/material/core/overlay/position/viewport-ruler';
import * as import58 from '@angular/material/core/overlay/position/overlay-position-builder';
import * as import59 from '@angular/material/core/overlay/overlay';
import * as import60 from '@angular/material/icon/icon-registry';
import * as import62 from '../node_modules/@angular/material/dialog/dialog-container.ngfactory';
import * as import63 from '../node_modules/@angular/material/snack-bar/snack-bar-container.ngfactory';
import * as import64 from '../node_modules/@angular/material/snack-bar/simple-snack-bar.ngfactory';
import * as import65 from '../node_modules/@angular/material/tooltip/tooltip.ngfactory';
import * as import66 from './app.component.ngfactory';
import * as import67 from '@angular/core/src/application_tokens';
import * as import68 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import69 from '@angular/platform-browser/src/dom/events/key_events';
import * as import70 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import71 from '@angular/core/src/zone/ng_zone';
import * as import72 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import73 from '@angular/core/src/console';
import * as import74 from '@angular/core/src/i18n/tokens';
import * as import75 from '@angular/core/src/error_handler';
import * as import76 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import77 from '@angular/platform-browser/src/dom/animation_driver';
import * as import78 from '@angular/core/src/render/api';
import * as import79 from '@angular/core/src/security';
import * as import80 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import81 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import82 from '@angular/http/src/interfaces';
import * as import83 from '@angular/http/src/http';
var SitesRunAppModuleInjector = (function (_super) {
    __extends(SitesRunAppModuleInjector, _super);
    function SitesRunAppModuleInjector(parent) {
        _super.call(this, parent, [
            import62.MdDialogContainerNgFactory,
            import63.MdSnackBarContainerNgFactory,
            import64.SimpleSnackBarNgFactory,
            import65.TooltipComponentNgFactory,
            import66.SitesRunAppComponentNgFactory
        ], [import66.SitesRunAppComponentNgFactory]);
    }
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_LOCALE_ID_35", {
        get: function () {
            if ((this.__LOCALE_ID_35 == null)) {
                (this.__LOCALE_ID_35 = 'en-US');
            }
            return this.__LOCALE_ID_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_NgLocalization_36", {
        get: function () {
            if ((this.__NgLocalization_36 == null)) {
                (this.__NgLocalization_36 = new import36.NgLocaleLocalization(this._LOCALE_ID_35));
            }
            return this.__NgLocalization_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_ApplicationRef_41", {
        get: function () {
            if ((this.__ApplicationRef_41 == null)) {
                (this.__ApplicationRef_41 = this._ApplicationRef__40);
            }
            return this.__ApplicationRef_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_Compiler_42", {
        get: function () {
            if ((this.__Compiler_42 == null)) {
                (this.__Compiler_42 = new import40.Compiler());
            }
            return this.__Compiler_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_APP_ID_43", {
        get: function () {
            if ((this.__APP_ID_43 == null)) {
                (this.__APP_ID_43 = import67._appIdRandomProviderFactory());
            }
            return this.__APP_ID_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_DOCUMENT_44", {
        get: function () {
            if ((this.__DOCUMENT_44 == null)) {
                (this.__DOCUMENT_44 = import4._document());
            }
            return this.__DOCUMENT_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_45", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_45 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_45 = new import41.MdGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_46", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_46 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_46 = [
                    new import68.DomEventsPlugin(),
                    new import69.KeyEventsPlugin(),
                    new import70.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_45)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_EventManager_47", {
        get: function () {
            if ((this.__EventManager_47 == null)) {
                (this.__EventManager_47 = new import42.EventManager(this._EVENT_MANAGER_PLUGINS_46, this.parent.get(import71.NgZone)));
            }
            return this.__EventManager_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_DomSharedStylesHost_48", {
        get: function () {
            if ((this.__DomSharedStylesHost_48 == null)) {
                (this.__DomSharedStylesHost_48 = new import43.DomSharedStylesHost(this._DOCUMENT_44));
            }
            return this.__DomSharedStylesHost_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_AnimationDriver_49", {
        get: function () {
            if ((this.__AnimationDriver_49 == null)) {
                (this.__AnimationDriver_49 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_DomRootRenderer_50", {
        get: function () {
            if ((this.__DomRootRenderer_50 == null)) {
                (this.__DomRootRenderer_50 = new import44.DomRootRenderer_(this._DOCUMENT_44, this._EventManager_47, this._DomSharedStylesHost_48, this._AnimationDriver_49));
            }
            return this.__DomRootRenderer_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_RootRenderer_51", {
        get: function () {
            if ((this.__RootRenderer_51 == null)) {
                (this.__RootRenderer_51 = import72._createConditionalRootRenderer(this._DomRootRenderer_50, this.parent.get(import72.NgProbeToken, null)));
            }
            return this.__RootRenderer_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_DomSanitizer_52", {
        get: function () {
            if ((this.__DomSanitizer_52 == null)) {
                (this.__DomSanitizer_52 = new import45.DomSanitizerImpl());
            }
            return this.__DomSanitizer_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_Sanitizer_53", {
        get: function () {
            if ((this.__Sanitizer_53 == null)) {
                (this.__Sanitizer_53 = this._DomSanitizer_52);
            }
            return this.__Sanitizer_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_ViewUtils_54", {
        get: function () {
            if ((this.__ViewUtils_54 == null)) {
                (this.__ViewUtils_54 = new import46.ViewUtils(this._RootRenderer_51, this._APP_ID_43, this._Sanitizer_53));
            }
            return this.__ViewUtils_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_IterableDiffers_55", {
        get: function () {
            if ((this.__IterableDiffers_55 == null)) {
                (this.__IterableDiffers_55 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_KeyValueDiffers_56", {
        get: function () {
            if ((this.__KeyValueDiffers_56 == null)) {
                (this.__KeyValueDiffers_56 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_SharedStylesHost_57", {
        get: function () {
            if ((this.__SharedStylesHost_57 == null)) {
                (this.__SharedStylesHost_57 = this._DomSharedStylesHost_48);
            }
            return this.__SharedStylesHost_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_Title_58", {
        get: function () {
            if ((this.__Title_58 == null)) {
                (this.__Title_58 = new import47.Title());
            }
            return this.__Title_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_RadioControlRegistry_59", {
        get: function () {
            if ((this.__RadioControlRegistry_59 == null)) {
                (this.__RadioControlRegistry_59 = new import48.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_BrowserXhr_60", {
        get: function () {
            if ((this.__BrowserXhr_60 == null)) {
                (this.__BrowserXhr_60 = new import49.BrowserXhr());
            }
            return this.__BrowserXhr_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_ResponseOptions_61", {
        get: function () {
            if ((this.__ResponseOptions_61 == null)) {
                (this.__ResponseOptions_61 = new import50.BaseResponseOptions());
            }
            return this.__ResponseOptions_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_XSRFStrategy_62", {
        get: function () {
            if ((this.__XSRFStrategy_62 == null)) {
                (this.__XSRFStrategy_62 = import27._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_62;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_XHRBackend_63", {
        get: function () {
            if ((this.__XHRBackend_63 == null)) {
                (this.__XHRBackend_63 = new import51.XHRBackend(this._BrowserXhr_60, this._ResponseOptions_61, this._XSRFStrategy_62));
            }
            return this.__XHRBackend_63;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_RequestOptions_64", {
        get: function () {
            if ((this.__RequestOptions_64 == null)) {
                (this.__RequestOptions_64 = new import52.BaseRequestOptions());
            }
            return this.__RequestOptions_64;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_Http_65", {
        get: function () {
            if ((this.__Http_65 == null)) {
                (this.__Http_65 = import27.httpFactory(this._XHRBackend_63, this._RequestOptions_64));
            }
            return this.__Http_65;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_MdLiveAnnouncer_66", {
        get: function () {
            if ((this.__MdLiveAnnouncer_66 == null)) {
                (this.__MdLiveAnnouncer_66 = new import53.MdLiveAnnouncer(this.parent.get(import53.LIVE_ANNOUNCER_ELEMENT_TOKEN, null)));
            }
            return this.__MdLiveAnnouncer_66;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_InteractivityChecker_67", {
        get: function () {
            if ((this.__InteractivityChecker_67 == null)) {
                (this.__InteractivityChecker_67 = new import54.InteractivityChecker());
            }
            return this.__InteractivityChecker_67;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_MdUniqueSelectionDispatcher_68", {
        get: function () {
            if ((this.__MdUniqueSelectionDispatcher_68 == null)) {
                (this.__MdUniqueSelectionDispatcher_68 = new import55.MdUniqueSelectionDispatcher());
            }
            return this.__MdUniqueSelectionDispatcher_68;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_OverlayContainer_69", {
        get: function () {
            if ((this.__OverlayContainer_69 == null)) {
                (this.__OverlayContainer_69 = new import56.OverlayContainer());
            }
            return this.__OverlayContainer_69;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_ViewportRuler_70", {
        get: function () {
            if ((this.__ViewportRuler_70 == null)) {
                (this.__ViewportRuler_70 = new import57.ViewportRuler());
            }
            return this.__ViewportRuler_70;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_OverlayPositionBuilder_71", {
        get: function () {
            if ((this.__OverlayPositionBuilder_71 == null)) {
                (this.__OverlayPositionBuilder_71 = new import58.OverlayPositionBuilder(this._ViewportRuler_70));
            }
            return this.__OverlayPositionBuilder_71;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_Overlay_72", {
        get: function () {
            if ((this.__Overlay_72 == null)) {
                (this.__Overlay_72 = new import59.Overlay(this._OverlayContainer_69, this, this._OverlayPositionBuilder_71));
            }
            return this.__Overlay_72;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_MdDialog_73", {
        get: function () {
            if ((this.__MdDialog_73 == null)) {
                (this.__MdDialog_73 = new import26.MdDialog(this._Overlay_72, this));
            }
            return this.__MdDialog_73;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_MdIconRegistry_74", {
        get: function () {
            if ((this.__MdIconRegistry_74 == null)) {
                (this.__MdIconRegistry_74 = new import60.MdIconRegistry(this._Http_65));
            }
            return this.__MdIconRegistry_74;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesRunAppModuleInjector.prototype, "_MdSnackBar_75", {
        get: function () {
            if ((this.__MdSnackBar_75 == null)) {
                (this.__MdSnackBar_75 = new import33.MdSnackBar(this._Overlay_72, this._MdLiveAnnouncer_66));
            }
            return this.__MdSnackBar_75;
        },
        enumerable: true,
        configurable: true
    });
    SitesRunAppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._MdRippleModule_3 = new import5.MdRippleModule();
        this._MdButtonModule_4 = new import6.MdButtonModule();
        this._MdCardModule_5 = new import7.MdCardModule();
        this._MdCheckboxModule_6 = new import8.MdCheckboxModule();
        this._MdLineModule_7 = new import9.MdLineModule();
        this._MdGridListModule_8 = new import10.MdGridListModule();
        this._InternalFormsSharedModule_9 = new import11.InternalFormsSharedModule();
        this._FormsModule_10 = new import12.FormsModule();
        this._MdInputModule_11 = new import13.MdInputModule();
        this._MdListModule_12 = new import14.MdListModule();
        this._MdProgressBarModule_13 = new import15.MdProgressBarModule();
        this._MdProgressCircleModule_14 = new import16.MdProgressCircleModule();
        this._MdSelectModule_15 = new import17.MdSelectModule();
        this._MdSidenavModule_16 = new import18.MdSidenavModule();
        this._PortalModule_17 = new import19.PortalModule();
        this._MdTabsModule_18 = new import20.MdTabsModule();
        this._MdToolbarModule_19 = new import21.MdToolbarModule();
        this._RtlModule_20 = new import22.RtlModule();
        this._A11yModule_21 = new import23.A11yModule();
        this._MdButtonToggleModule_22 = new import24.MdButtonToggleModule();
        this._OverlayModule_23 = new import25.OverlayModule();
        this._MdDialogModule_24 = new import26.MdDialogModule();
        this._HttpModule_25 = new import27.HttpModule();
        this._MdIconModule_26 = new import28.MdIconModule();
        this._MdMenuModule_27 = new import29.MdMenuModule();
        this._MdRadioModule_28 = new import30.MdRadioModule();
        this._MdSliderModule_29 = new import31.MdSliderModule();
        this._MdSlideToggleModule_30 = new import32.MdSlideToggleModule();
        this._MdSnackBarModule_31 = new import33.MdSnackBarModule();
        this._MdTooltipModule_32 = new import34.MdTooltipModule();
        this._MaterialRootModule_33 = new import35.MaterialRootModule();
        this._SitesRunAppModule_34 = new import1.SitesRunAppModule();
        this._ErrorHandler_37 = import4.errorHandler();
        this._ApplicationInitStatus_38 = new import37.ApplicationInitStatus(this.parent.get(import37.APP_INITIALIZER, null));
        this._Testability_39 = new import38.Testability(this.parent.get(import71.NgZone));
        this._ApplicationRef__40 = new import39.ApplicationRef_(this.parent.get(import71.NgZone), this.parent.get(import73.Console), this, this._ErrorHandler_37, this, this._ApplicationInitStatus_38, this.parent.get(import38.TestabilityRegistry, null), this._Testability_39);
        return this._SitesRunAppModule_34;
    };
    SitesRunAppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.MdRippleModule)) {
            return this._MdRippleModule_3;
        }
        if ((token === import6.MdButtonModule)) {
            return this._MdButtonModule_4;
        }
        if ((token === import7.MdCardModule)) {
            return this._MdCardModule_5;
        }
        if ((token === import8.MdCheckboxModule)) {
            return this._MdCheckboxModule_6;
        }
        if ((token === import9.MdLineModule)) {
            return this._MdLineModule_7;
        }
        if ((token === import10.MdGridListModule)) {
            return this._MdGridListModule_8;
        }
        if ((token === import11.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_9;
        }
        if ((token === import12.FormsModule)) {
            return this._FormsModule_10;
        }
        if ((token === import13.MdInputModule)) {
            return this._MdInputModule_11;
        }
        if ((token === import14.MdListModule)) {
            return this._MdListModule_12;
        }
        if ((token === import15.MdProgressBarModule)) {
            return this._MdProgressBarModule_13;
        }
        if ((token === import16.MdProgressCircleModule)) {
            return this._MdProgressCircleModule_14;
        }
        if ((token === import17.MdSelectModule)) {
            return this._MdSelectModule_15;
        }
        if ((token === import18.MdSidenavModule)) {
            return this._MdSidenavModule_16;
        }
        if ((token === import19.PortalModule)) {
            return this._PortalModule_17;
        }
        if ((token === import20.MdTabsModule)) {
            return this._MdTabsModule_18;
        }
        if ((token === import21.MdToolbarModule)) {
            return this._MdToolbarModule_19;
        }
        if ((token === import22.RtlModule)) {
            return this._RtlModule_20;
        }
        if ((token === import23.A11yModule)) {
            return this._A11yModule_21;
        }
        if ((token === import24.MdButtonToggleModule)) {
            return this._MdButtonToggleModule_22;
        }
        if ((token === import25.OverlayModule)) {
            return this._OverlayModule_23;
        }
        if ((token === import26.MdDialogModule)) {
            return this._MdDialogModule_24;
        }
        if ((token === import27.HttpModule)) {
            return this._HttpModule_25;
        }
        if ((token === import28.MdIconModule)) {
            return this._MdIconModule_26;
        }
        if ((token === import29.MdMenuModule)) {
            return this._MdMenuModule_27;
        }
        if ((token === import30.MdRadioModule)) {
            return this._MdRadioModule_28;
        }
        if ((token === import31.MdSliderModule)) {
            return this._MdSliderModule_29;
        }
        if ((token === import32.MdSlideToggleModule)) {
            return this._MdSlideToggleModule_30;
        }
        if ((token === import33.MdSnackBarModule)) {
            return this._MdSnackBarModule_31;
        }
        if ((token === import34.MdTooltipModule)) {
            return this._MdTooltipModule_32;
        }
        if ((token === import35.MaterialRootModule)) {
            return this._MaterialRootModule_33;
        }
        if ((token === import1.SitesRunAppModule)) {
            return this._SitesRunAppModule_34;
        }
        if ((token === import74.LOCALE_ID)) {
            return this._LOCALE_ID_35;
        }
        if ((token === import36.NgLocalization)) {
            return this._NgLocalization_36;
        }
        if ((token === import75.ErrorHandler)) {
            return this._ErrorHandler_37;
        }
        if ((token === import37.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_38;
        }
        if ((token === import38.Testability)) {
            return this._Testability_39;
        }
        if ((token === import39.ApplicationRef_)) {
            return this._ApplicationRef__40;
        }
        if ((token === import39.ApplicationRef)) {
            return this._ApplicationRef_41;
        }
        if ((token === import40.Compiler)) {
            return this._Compiler_42;
        }
        if ((token === import67.APP_ID)) {
            return this._APP_ID_43;
        }
        if ((token === import76.DOCUMENT)) {
            return this._DOCUMENT_44;
        }
        if ((token === import70.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_45;
        }
        if ((token === import42.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_46;
        }
        if ((token === import42.EventManager)) {
            return this._EventManager_47;
        }
        if ((token === import43.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_48;
        }
        if ((token === import77.AnimationDriver)) {
            return this._AnimationDriver_49;
        }
        if ((token === import44.DomRootRenderer)) {
            return this._DomRootRenderer_50;
        }
        if ((token === import78.RootRenderer)) {
            return this._RootRenderer_51;
        }
        if ((token === import45.DomSanitizer)) {
            return this._DomSanitizer_52;
        }
        if ((token === import79.Sanitizer)) {
            return this._Sanitizer_53;
        }
        if ((token === import46.ViewUtils)) {
            return this._ViewUtils_54;
        }
        if ((token === import80.IterableDiffers)) {
            return this._IterableDiffers_55;
        }
        if ((token === import81.KeyValueDiffers)) {
            return this._KeyValueDiffers_56;
        }
        if ((token === import43.SharedStylesHost)) {
            return this._SharedStylesHost_57;
        }
        if ((token === import47.Title)) {
            return this._Title_58;
        }
        if ((token === import48.RadioControlRegistry)) {
            return this._RadioControlRegistry_59;
        }
        if ((token === import49.BrowserXhr)) {
            return this._BrowserXhr_60;
        }
        if ((token === import50.ResponseOptions)) {
            return this._ResponseOptions_61;
        }
        if ((token === import82.XSRFStrategy)) {
            return this._XSRFStrategy_62;
        }
        if ((token === import51.XHRBackend)) {
            return this._XHRBackend_63;
        }
        if ((token === import52.RequestOptions)) {
            return this._RequestOptions_64;
        }
        if ((token === import83.Http)) {
            return this._Http_65;
        }
        if ((token === import53.MdLiveAnnouncer)) {
            return this._MdLiveAnnouncer_66;
        }
        if ((token === import54.InteractivityChecker)) {
            return this._InteractivityChecker_67;
        }
        if ((token === import55.MdUniqueSelectionDispatcher)) {
            return this._MdUniqueSelectionDispatcher_68;
        }
        if ((token === import56.OverlayContainer)) {
            return this._OverlayContainer_69;
        }
        if ((token === import57.ViewportRuler)) {
            return this._ViewportRuler_70;
        }
        if ((token === import58.OverlayPositionBuilder)) {
            return this._OverlayPositionBuilder_71;
        }
        if ((token === import59.Overlay)) {
            return this._Overlay_72;
        }
        if ((token === import26.MdDialog)) {
            return this._MdDialog_73;
        }
        if ((token === import60.MdIconRegistry)) {
            return this._MdIconRegistry_74;
        }
        if ((token === import33.MdSnackBar)) {
            return this._MdSnackBar_75;
        }
        return notFoundResult;
    };
    SitesRunAppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__40.ngOnDestroy();
    };
    return SitesRunAppModuleInjector;
}(import0.NgModuleInjector));
export var SitesRunAppModuleNgFactory = new import0.NgModuleFactory(SitesRunAppModuleInjector, import1.SitesRunAppModule);
//# sourceMappingURL=/Users/yuelindu/Projects/SitesRun/src/main/webapp/src/aot/app/app.module.ngfactory.js.map