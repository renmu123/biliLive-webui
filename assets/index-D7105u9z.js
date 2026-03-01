import { t as templateRef, u as useFileDialog, a as useStorage } from "./index-bqczNda1.js";
import { d as defineComponent, l as h, m as cB, n as cM, p as c, q as cE, s as cNotM, v as useConfig, r as ref, x as computed, y as useTheme, z as collapseLight, A as useRtl, C as useThemeClass, D as createInjectionKey, E as provide, G as call, N as NFadeInExpandTransition, H as withDirectives, I as useFalseUntilTruthy, J as toRef, K as vShow, L as resolveSlotWithProps, M as NBaseIcon, O as resolveWrappedSlotWithProps, P as createId, Q as useMemo, R as throwError, S as inject, T as Scrollbar, U as layoutLight, V as useReactivated, W as render, X as keysOf, F as Fragment, Y as keep, Z as VResizeObserver, $ as menuLight, a0 as watchEffect, a1 as mergeProps, c as createElementBlock, e as createBaseVNode, o as openBlock, b as createStaticVNode, a2 as mergeModels, a3 as useModel, a4 as storeToRefs, a5 as watch, a as createVNode, g as createBlock, h as createCommentVNode, w as withCtx, j as createTextVNode, f as unref, B as Button, a6 as renderList, a7 as normalizeClass, t as toDisplayString, a8 as nextTick, a9 as __unplugin_components_3$2, i as isRef, _ as __unplugin_components_4, aa as useThemeStore, ab as toRaw, ac as useRoute, u as useRouter, ad as RouterLink, ae as onMounted, af as normalizeStyle, ag as resolveComponent, ah as resolveDynamicComponent, ai as KeepAlive } from "./index-gjuLIDoI.js";
import { _ as _sfc_main$i } from "./Tip.vue_vue_type_script_setup_true_lang-x9PvGp7f.js";
import { u as useDanmuPreset, a as useUserInfoStore, c as cloneDeep, b as uuid, s as sha256, f as formatTime, t as task, d as useAppConfig, v as videoPreset, e as ffmpegPreset, g as deepRaw, h as useQueueStore } from "./index-BpXg0f34.js";
import { f as formatWebhookPartTitle, a as formatWebhookTitle } from "./bili-CUSHIAIC.js";
import { u as uploadTitleTemplate } from "./index-ad3zSNQt.js";
import { _ as __unplugin_components_2$1, a as __unplugin_components_5 } from "./FormItem-Kj27K3vk.js";
import { _ as __unplugin_components_0$1 } from "./InputNumber-CaUnxb7j.js";
import { _ as __unplugin_components_1$2, a as __unplugin_components_2$2 } from "./Checkbox-pQXdXXSK.js";
import { _ as __unplugin_components_1$3 } from "./Switch-ChpQMtl0.js";
import { _ as __unplugin_components_0$2 } from "./Cascader-C6rHCto0.js";
import { V as VOverflow, _ as __unplugin_components_0$3, a as __unplugin_components_2$3, b as __unplugin_components_8 } from "./Select-xWcqChuz.js";
import { _ as __unplugin_components_3$1 } from "./ColorPicker-27Ny6g16.js";
import { _ as __unplugin_components_7 } from "./TimePicker-6LkPrZvv.js";
import { _ as __unplugin_components_1$4 } from "./Divider-CcENGeqI.js";
import { a as useMergedState, u as useNotification } from "./use-notification-LRtjAvoZ.js";
import { _ as __unplugin_components_0$4 } from "./Input--Gp3P9gj.js";
import { _ as _export_sfc, c as config, a as commonjsGlobal } from "./_plugin-vue_export-helper-B1lyReKF.js";
import { u as useConfirm } from "./index-BZWV_urK.js";
import { N as NotificationType } from "./enum-CaeekUf_.js";
import { _ as __unplugin_components_3$3 } from "./Space-BBiSHRV-.js";
import { s as showDirectoryDialog, a as showFileDialog } from "./fileSystem-C22lY_44.js";
import { f as fadeInHeightExpandTransition, v as videoFormatOptions, t as textInfo, r as recorderTypeOptions, a as recorderDebugLevelOptions, b as biliQualityOptions, c as biliStreamFormatOptions, s as streamCodecOptions, d as douyuQualityOptions, e as douyuSourceOptions, h as huyaQualityOptions, g as douyinStreamFormatOptions, i as huyaSourceOptions, j as huyaApiTypeOptions, k as douyinQualityOptions, l as douyinApiTypeOptions, m as eventBus } from "./eventBus-DsCIKawu.js";
import { _ as __unplugin_components_6, a as __unplugin_components_4$1 } from "./Tabs-DlbHH19P.js";
import { F as FolderOpenOutline } from "./FolderOpenOutline-K-p0ASPr.js";
import { f as formatLength, u as useCompitable, N as NIcon } from "./Icon-D2Zo6Coc.js";
import { s as syncApi } from "./sync-CUfd7gwV.js";
import { u as useNotice } from "./useNotice-BnaW_JYm.js";
import { _ as __unplugin_components_1$5 } from "./text-CwQ4I63s.js";
import { _ as __unplugin_components_5$1, a as __unplugin_components_3$4 } from "./RadioGroup-Bd7Skk-n.js";
import { C as ChevronRightIcon } from "./ChevronRight-CONDXL5I.js";
import { h as happensIn, c as createTreeMate } from "./create-DfXrl36C.js";
import { c as common, e as exportLogs, g as getLogContent } from "./common-Da25N27f.js";
import { _ as __unplugin_components_7$1 } from "./Spin-CLVf7OzA.js";
import { R as Refresh } from "./Refresh-DyHNI3m5.js";
import { _ as __unplugin_components_8$1 } from "./VirtualList-xClg8xzT.js";
import { N as NTooltip } from "./Tooltip-aQpp0WSp.js";
import { _ as __unplugin_components_1$1 } from "./Dropdown-DBKZZG83.js";
import "./Popover-T5GorXob.js";
import "./_getTag-NYFG1GAg.js";
import "./HelpCircleOutline-JWqllQs0.js";
import "./create-ref-setter-DXkZaMbS.js";
import "./showDirectoryDialog-CUR2gD_Z.js";
const ChevronDownFilledIcon = defineComponent({
  name: "ChevronDownFilled",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",
      fill: "currentColor"
    }));
  }
});
const ChevronLeftIcon = defineComponent({
  name: "ChevronLeft",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",
      fill: "currentColor"
    }));
  }
});
const style$4 = cB("collapse", "width: 100%;", [cB("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [cM("disabled", [cE("header", "cursor: not-allowed;", [cE("header-main", `
 color: var(--n-title-text-color-disabled);
 `), cB("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), cB("collapse-item", "margin-left: 32px;"), c("&:first-child", "margin-top: 0;"), c("&:first-child >", [cE("header", "padding-top: 0;")]), cM("left-arrow-placement", [cE("header", [cB("collapse-item-arrow", "margin-right: 4px;")])]), cM("right-arrow-placement", [cE("header", [cB("collapse-item-arrow", "margin-left: 4px;")])]), cE("content-wrapper", [cE("content-inner", "padding-top: 16px;"), fadeInHeightExpandTransition({
  duration: "0.15s"
})]), cM("active", [cE("header", [cM("active", [cB("collapse-item-arrow", "transform: rotate(90deg);")])])]), c("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), cNotM("disabled", [cM("trigger-area-main", [cE("header", [cE("header-main", "cursor: pointer;"), cB("collapse-item-arrow", "cursor: default;")])]), cM("trigger-area-arrow", [cE("header", [cB("collapse-item-arrow", "cursor: pointer;")])]), cM("trigger-area-extra", [cE("header", [cE("header-extra", "cursor: pointer;")])])]), cE("header", `
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `, [cE("header-main", `
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), cE("header-extra", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cB("collapse-item-arrow", `
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]);
const collapseProps = Object.assign(Object.assign({}, useTheme.props), {
  defaultExpandedNames: {
    type: [Array, String],
    default: null
  },
  expandedNames: [Array, String],
  arrowPlacement: {
    type: String,
    default: "left"
  },
  accordion: {
    type: Boolean,
    default: false
  },
  displayDirective: {
    type: String,
    default: "if"
  },
  triggerAreas: {
    type: Array,
    default: () => ["main", "extra", "arrow"]
  },
  onItemHeaderClick: [Function, Array],
  "onUpdate:expandedNames": [Function, Array],
  onUpdateExpandedNames: [Function, Array],
  // deprecated
  onExpandedNamesChange: {
    type: [Function, Array],
    validator: () => {
      return true;
    },
    default: void 0
  }
});
const collapseInjectionKey = createInjectionKey("n-collapse");
const __unplugin_components_12 = defineComponent({
  name: "Collapse",
  props: collapseProps,
  setup(props, {
    slots
  }) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const uncontrolledExpandedNamesRef = ref(props.defaultExpandedNames);
    const controlledExpandedNamesRef = computed(() => props.expandedNames);
    const mergedExpandedNamesRef = useMergedState(controlledExpandedNamesRef, uncontrolledExpandedNamesRef);
    const themeRef = useTheme("Collapse", "-collapse", style$4, collapseLight, props, mergedClsPrefixRef);
    function doUpdateExpandedNames(names) {
      const {
        "onUpdate:expandedNames": _onUpdateExpandedNames,
        onUpdateExpandedNames,
        onExpandedNamesChange
      } = props;
      if (onUpdateExpandedNames) {
        call(onUpdateExpandedNames, names);
      }
      if (_onUpdateExpandedNames) {
        call(_onUpdateExpandedNames, names);
      }
      if (onExpandedNamesChange) {
        call(onExpandedNamesChange, names);
      }
      uncontrolledExpandedNamesRef.value = names;
    }
    function doItemHeaderClick(info) {
      const {
        onItemHeaderClick
      } = props;
      if (onItemHeaderClick) {
        call(onItemHeaderClick, info);
      }
    }
    function toggleItem(collapse, name, event) {
      const {
        accordion
      } = props;
      const {
        value: expandedNames
      } = mergedExpandedNamesRef;
      if (accordion) {
        if (collapse) {
          doUpdateExpandedNames([name]);
          doItemHeaderClick({
            name,
            expanded: true,
            event
          });
        } else {
          doUpdateExpandedNames([]);
          doItemHeaderClick({
            name,
            expanded: false,
            event
          });
        }
      } else {
        if (!Array.isArray(expandedNames)) {
          doUpdateExpandedNames([name]);
          doItemHeaderClick({
            name,
            expanded: true,
            event
          });
        } else {
          const activeNames = expandedNames.slice();
          const index = activeNames.findIndex((activeName) => name === activeName);
          if (~index) {
            activeNames.splice(index, 1);
            doUpdateExpandedNames(activeNames);
            doItemHeaderClick({
              name,
              expanded: false,
              event
            });
          } else {
            activeNames.push(name);
            doUpdateExpandedNames(activeNames);
            doItemHeaderClick({
              name,
              expanded: true,
              event
            });
          }
        }
      }
    }
    provide(collapseInjectionKey, {
      props,
      mergedClsPrefixRef,
      expandedNamesRef: mergedExpandedNamesRef,
      slots,
      toggleItem
    });
    const rtlEnabledRef = useRtl("Collapse", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          titleFontWeight,
          dividerColor,
          titlePadding,
          titleTextColor,
          titleTextColorDisabled,
          textColor,
          arrowColor,
          fontSize,
          titleFontSize,
          arrowColorDisabled,
          itemMargin
        }
      } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-divider-color": dividerColor,
        "--n-title-padding": titlePadding,
        "--n-title-font-size": titleFontSize,
        "--n-title-text-color": titleTextColor,
        "--n-title-text-color-disabled": titleTextColorDisabled,
        "--n-title-font-weight": titleFontWeight,
        "--n-arrow-color": arrowColor,
        "--n-arrow-color-disabled": arrowColorDisabled,
        "--n-item-margin": itemMargin
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("collapse", void 0, cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedTheme: themeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${this.mergedClsPrefix}-collapse`, this.rtlEnabled && `${this.mergedClsPrefix}-collapse--rtl`, this.themeClass],
      style: this.cssVars
    }, this.$slots);
  }
});
const NCollapseItemContent = defineComponent({
  name: "CollapseItemContent",
  props: {
    displayDirective: {
      type: String,
      required: true
    },
    show: Boolean,
    clsPrefix: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const onceTrueRef = useFalseUntilTruthy(toRef(props, "show"));
    return {
      onceTrue: onceTrueRef
    };
  },
  render() {
    return h(NFadeInExpandTransition, null, {
      default: () => {
        const {
          show,
          displayDirective,
          onceTrue,
          clsPrefix
        } = this;
        const useVShow = displayDirective === "show" && onceTrue;
        const contentNode = h("div", {
          class: `${clsPrefix}-collapse-item__content-wrapper`
        }, h("div", {
          class: `${clsPrefix}-collapse-item__content-inner`
        }, this.$slots));
        return useVShow ? withDirectives(contentNode, [[vShow, show]]) : show ? contentNode : null;
      }
    });
  }
});
const collapseItemProps = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
};
const __unplugin_components_11 = defineComponent({
  name: "CollapseItem",
  props: collapseItemProps,
  setup(props) {
    const {
      mergedRtlRef
    } = useConfig(props);
    const randomName = createId();
    const mergedNameRef = useMemo(() => {
      var _a;
      return (_a = props.name) !== null && _a !== void 0 ? _a : randomName;
    });
    const NCollapse = inject(collapseInjectionKey);
    if (!NCollapse) {
      throwError("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
    }
    const {
      expandedNamesRef,
      props: collapseProps2,
      mergedClsPrefixRef,
      slots: collapseSlots
    } = NCollapse;
    const collapsedRef = computed(() => {
      const {
        value: expandedNames
      } = expandedNamesRef;
      if (Array.isArray(expandedNames)) {
        const {
          value: name
        } = mergedNameRef;
        return !~expandedNames.findIndex((expandedName) => expandedName === name);
      } else if (expandedNames) {
        const {
          value: name
        } = mergedNameRef;
        return name !== expandedNames;
      }
      return true;
    });
    const rtlEnabledRef = useRtl("Collapse", mergedRtlRef, mergedClsPrefixRef);
    return {
      rtlEnabled: rtlEnabledRef,
      collapseSlots,
      randomName,
      mergedClsPrefix: mergedClsPrefixRef,
      collapsed: collapsedRef,
      triggerAreas: toRef(collapseProps2, "triggerAreas"),
      mergedDisplayDirective: computed(() => {
        const {
          displayDirective
        } = props;
        if (displayDirective) {
          return displayDirective;
        } else {
          return collapseProps2.displayDirective;
        }
      }),
      arrowPlacement: computed(() => {
        return collapseProps2.arrowPlacement;
      }),
      handleClick(e) {
        let happensInArea = "main";
        if (happensIn(e, "arrow")) happensInArea = "arrow";
        if (happensIn(e, "extra")) happensInArea = "extra";
        if (!collapseProps2.triggerAreas.includes(happensInArea)) {
          return;
        }
        if (NCollapse && !props.disabled) {
          NCollapse.toggleItem(collapsedRef.value, mergedNameRef.value, e);
        }
      }
    };
  },
  render() {
    const {
      collapseSlots,
      $slots,
      arrowPlacement,
      collapsed,
      mergedDisplayDirective,
      mergedClsPrefix,
      disabled,
      triggerAreas
    } = this;
    const headerNode = resolveSlotWithProps($slots.header, {
      collapsed
    }, () => [this.title]);
    const headerExtraSlot = $slots["header-extra"] || collapseSlots["header-extra"];
    const arrowSlot = $slots.arrow || collapseSlots.arrow;
    return h("div", {
      class: [`${mergedClsPrefix}-collapse-item`, `${mergedClsPrefix}-collapse-item--${arrowPlacement}-arrow-placement`, disabled && `${mergedClsPrefix}-collapse-item--disabled`, !collapsed && `${mergedClsPrefix}-collapse-item--active`, triggerAreas.map((area) => {
        return `${mergedClsPrefix}-collapse-item--trigger-area-${area}`;
      })]
    }, h("div", {
      class: [`${mergedClsPrefix}-collapse-item__header`, !collapsed && `${mergedClsPrefix}-collapse-item__header--active`]
    }, h("div", {
      class: `${mergedClsPrefix}-collapse-item__header-main`,
      onClick: this.handleClick
    }, arrowPlacement === "right" && headerNode, h("div", {
      class: `${mergedClsPrefix}-collapse-item-arrow`,
      key: this.rtlEnabled ? 0 : 1,
      "data-arrow": true
    }, resolveSlotWithProps(arrowSlot, {
      collapsed
    }, () => {
      var _a;
      return [h(NBaseIcon, {
        clsPrefix: mergedClsPrefix
      }, {
        default: (_a = collapseSlots.expandIcon) !== null && _a !== void 0 ? _a : () => this.rtlEnabled ? h(ChevronLeftIcon, null) : h(ChevronRightIcon, null)
      })];
    })), arrowPlacement === "left" && headerNode), resolveWrappedSlotWithProps(headerExtraSlot, {
      collapsed
    }, (children) => h("div", {
      class: `${mergedClsPrefix}-collapse-item__header-extra`,
      onClick: this.handleClick,
      "data-extra": true
    }, children))), h(NCollapseItemContent, {
      clsPrefix: mergedClsPrefix,
      displayDirective: mergedDisplayDirective,
      show: !collapsed
    }, $slots));
  }
});
const layoutSiderInjectionKey = createInjectionKey("n-layout-sider");
const positionProp = {
  type: String,
  default: "static"
};
const style$3 = cB("layout", `
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`, [cB("layout-scroll-container", `
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `), cM("absolute-positioned", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);
const layoutProps = {
  embedded: Boolean,
  position: positionProp,
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  scrollbarProps: Object,
  onScroll: Function,
  contentClass: String,
  contentStyle: {
    type: [String, Object],
    default: ""
  },
  hasSider: Boolean,
  siderPlacement: {
    type: String,
    default: "left"
  }
};
const layoutInjectionKey = createInjectionKey("n-layout");
function createLayoutComponent(isContent) {
  return defineComponent({
    name: "Layout",
    props: Object.assign(Object.assign({}, useTheme.props), layoutProps),
    setup(props) {
      const scrollableElRef = ref(null);
      const scrollbarInstRef = ref(null);
      const {
        mergedClsPrefixRef,
        inlineThemeDisabled
      } = useConfig(props);
      const themeRef = useTheme("Layout", "-layout", style$3, layoutLight, props, mergedClsPrefixRef);
      function scrollTo(options, y) {
        if (props.nativeScrollbar) {
          const {
            value: scrollableEl
          } = scrollableElRef;
          if (scrollableEl) {
            if (y === void 0) {
              scrollableEl.scrollTo(options);
            } else {
              scrollableEl.scrollTo(options, y);
            }
          }
        } else {
          const {
            value: scrollbarInst
          } = scrollbarInstRef;
          if (scrollbarInst) {
            scrollbarInst.scrollTo(options, y);
          }
        }
      }
      provide(layoutInjectionKey, props);
      let scrollX = 0;
      let scrollY = 0;
      const handleNativeElScroll = (e) => {
        var _a;
        const target = e.target;
        scrollX = target.scrollLeft;
        scrollY = target.scrollTop;
        (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
      };
      useReactivated(() => {
        if (props.nativeScrollbar) {
          const el = scrollableElRef.value;
          if (el) {
            el.scrollTop = scrollY;
            el.scrollLeft = scrollX;
          }
        }
      });
      const hasSiderStyle = {
        display: "flex",
        flexWrap: "nowrap",
        width: "100%",
        flexDirection: "row"
      };
      const exposedMethods = {
        scrollTo
      };
      const cssVarsRef = computed(() => {
        const {
          common: {
            cubicBezierEaseInOut
          },
          self: self2
        } = themeRef.value;
        return {
          "--n-bezier": cubicBezierEaseInOut,
          "--n-color": props.embedded ? self2.colorEmbedded : self2.color,
          "--n-text-color": self2.textColor
        };
      });
      const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout", computed(() => {
        return props.embedded ? "e" : "";
      }), cssVarsRef, props) : void 0;
      return Object.assign({
        mergedClsPrefix: mergedClsPrefixRef,
        scrollableElRef,
        scrollbarInstRef,
        hasSiderStyle,
        mergedTheme: themeRef,
        handleNativeElScroll,
        cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
        themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
        onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
      }, exposedMethods);
    },
    render() {
      var _a;
      const {
        mergedClsPrefix,
        hasSider
      } = this;
      (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
      const hasSiderStyle = hasSider ? this.hasSiderStyle : void 0;
      const layoutClass = [this.themeClass, isContent, `${mergedClsPrefix}-layout`, `${mergedClsPrefix}-layout--${this.position}-positioned`];
      return h("div", {
        class: layoutClass,
        style: this.cssVars
      }, this.nativeScrollbar ? h("div", {
        ref: "scrollableElRef",
        class: [`${mergedClsPrefix}-layout-scroll-container`, this.contentClass],
        style: [this.contentStyle, hasSiderStyle],
        onScroll: this.handleNativeElScroll
      }, this.$slots) : h(Scrollbar, Object.assign({}, this.scrollbarProps, {
        onScroll: this.onScroll,
        ref: "scrollbarInstRef",
        theme: this.mergedTheme.peers.Scrollbar,
        themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
        contentClass: this.contentClass,
        contentStyle: [this.contentStyle, hasSiderStyle]
      }), this.$slots));
    }
  });
}
const __unplugin_components_3 = createLayoutComponent(false);
const style$2 = cB("layout-footer", `
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`, [cM("absolute-positioned", `
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `), cM("bordered", `
 border-top: solid 1px var(--n-border-color);
 `)]);
const layoutFooterProps = Object.assign(Object.assign({}, useTheme.props), {
  inverted: Boolean,
  position: positionProp,
  bordered: Boolean
});
const __unplugin_components_1 = defineComponent({
  name: "LayoutFooter",
  props: layoutFooterProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Layout", "-layout-footer", style$2, layoutLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: self2
      } = themeRef.value;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut
      };
      if (props.inverted) {
        vars["--n-color"] = self2.footerColorInverted;
        vars["--n-text-color"] = self2.textColorInverted;
        vars["--n-border-color"] = self2.footerBorderColorInverted;
      } else {
        vars["--n-color"] = self2.footerColor;
        vars["--n-text-color"] = self2.textColor;
        vars["--n-border-color"] = self2.footerBorderColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout-footer", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${mergedClsPrefix}-layout-footer`, this.themeClass, this.position && `${mergedClsPrefix}-layout-footer--${this.position}-positioned`, this.bordered && `${mergedClsPrefix}-layout-footer--bordered`],
      style: this.cssVars
    }, this.$slots);
  }
});
const style$1 = cB("layout-sider", `
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`, [cM("bordered", [cE("border", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]), cE("left-placement", [cM("bordered", [cE("border", `
 right: 0;
 `)])]), cM("right-placement", `
 justify-content: flex-start;
 `, [cM("bordered", [cE("border", `
 left: 0;
 `)]), cM("collapsed", [cB("layout-toggle-button", [cB("base-icon", `
 transform: rotate(180deg);
 `)]), cB("layout-toggle-bar", [c("&:hover", [cE("top", {
  transform: "rotate(-12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(12deg) scale(1.15) translateY(2px)"
})])])]), cB("layout-toggle-button", `
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `, [cB("base-icon", `
 transform: rotate(0);
 `)]), cB("layout-toggle-bar", `
 left: -28px;
 transform: rotate(180deg);
 `, [c("&:hover", [cE("top", {
  transform: "rotate(12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(-12deg) scale(1.15) translateY(2px)"
})])])]), cM("collapsed", [cB("layout-toggle-bar", [c("&:hover", [cE("top", {
  transform: "rotate(-12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(12deg) scale(1.15) translateY(2px)"
})])]), cB("layout-toggle-button", [cB("base-icon", `
 transform: rotate(0);
 `)])]), cB("layout-toggle-button", `
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `, [cB("base-icon", `
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]), cB("layout-toggle-bar", `
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `, [cE("top, bottom", `
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `), cE("bottom", `
 position: absolute;
 top: 34px;
 `), c("&:hover", [cE("top", {
  transform: "rotate(12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(-12deg) scale(1.15) translateY(2px)"
})]), cE("top, bottom", {
  backgroundColor: "var(--n-toggle-bar-color)"
}), c("&:hover", [cE("top, bottom", {
  backgroundColor: "var(--n-toggle-bar-color-hover)"
})])]), cE("border", `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `), cB("layout-sider-scroll-container", `
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `), cM("show-content", [cB("layout-sider-scroll-container", {
  opacity: 1
})]), cM("absolute-positioned", `
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]);
const ToggleBar = defineComponent({
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      onClick: this.onClick,
      class: `${clsPrefix}-layout-toggle-bar`
    }, h("div", {
      class: `${clsPrefix}-layout-toggle-bar__top`
    }), h("div", {
      class: `${clsPrefix}-layout-toggle-bar__bottom`
    }));
  }
});
const ToggleButton = defineComponent({
  name: "LayoutToggleButton",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-layout-toggle-button`,
      onClick: this.onClick
    }, h(NBaseIcon, {
      clsPrefix
    }, {
      default: () => h(ChevronRightIcon, null)
    }));
  }
});
const layoutSiderProps = {
  position: positionProp,
  bordered: Boolean,
  collapsedWidth: {
    type: Number,
    default: 48
  },
  width: {
    type: [Number, String],
    default: 272
  },
  contentClass: String,
  contentStyle: {
    type: [String, Object],
    default: ""
  },
  collapseMode: {
    type: String,
    default: "transform"
  },
  collapsed: {
    type: Boolean,
    default: void 0
  },
  defaultCollapsed: Boolean,
  showCollapsedContent: {
    type: Boolean,
    default: true
  },
  showTrigger: {
    type: [Boolean, String],
    default: false
  },
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  inverted: Boolean,
  scrollbarProps: Object,
  triggerClass: String,
  triggerStyle: [String, Object],
  collapsedTriggerClass: String,
  collapsedTriggerStyle: [String, Object],
  "onUpdate:collapsed": [Function, Array],
  onUpdateCollapsed: [Function, Array],
  onAfterEnter: Function,
  onAfterLeave: Function,
  // deprecated
  onExpand: [Function, Array],
  onCollapse: [Function, Array],
  onScroll: Function
};
const __unplugin_components_2 = defineComponent({
  name: "LayoutSider",
  props: Object.assign(Object.assign({}, useTheme.props), layoutSiderProps),
  setup(props) {
    const layoutProps2 = inject(layoutInjectionKey);
    const scrollableElRef = ref(null);
    const scrollbarInstRef = ref(null);
    const uncontrolledCollapsedRef = ref(props.defaultCollapsed);
    const mergedCollapsedRef = useMergedState(toRef(props, "collapsed"), uncontrolledCollapsedRef);
    const styleMaxWidthRef = computed(() => {
      return formatLength(mergedCollapsedRef.value ? props.collapsedWidth : props.width);
    });
    const scrollContainerStyleRef = computed(() => {
      if (props.collapseMode !== "transform") return {};
      return {
        minWidth: formatLength(props.width)
      };
    });
    const siderPlacementRef = computed(() => {
      return layoutProps2 ? layoutProps2.siderPlacement : "left";
    });
    function scrollTo(options, y) {
      if (props.nativeScrollbar) {
        const {
          value: scrollableEl
        } = scrollableElRef;
        if (scrollableEl) {
          if (y === void 0) {
            scrollableEl.scrollTo(options);
          } else {
            scrollableEl.scrollTo(options, y);
          }
        }
      } else {
        const {
          value: scrollbarInst
        } = scrollbarInstRef;
        if (scrollbarInst) {
          scrollbarInst.scrollTo(options, y);
        }
      }
    }
    function handleTriggerClick() {
      const {
        "onUpdate:collapsed": _onUpdateCollapsed,
        onUpdateCollapsed,
        // deprecated
        onExpand,
        onCollapse
      } = props;
      const {
        value: collapsed
      } = mergedCollapsedRef;
      if (onUpdateCollapsed) {
        call(onUpdateCollapsed, !collapsed);
      }
      if (_onUpdateCollapsed) {
        call(_onUpdateCollapsed, !collapsed);
      }
      uncontrolledCollapsedRef.value = !collapsed;
      if (collapsed) {
        if (onExpand) call(onExpand);
      } else {
        if (onCollapse) call(onCollapse);
      }
    }
    let scrollX = 0;
    let scrollY = 0;
    const handleNativeElScroll = (e) => {
      var _a;
      const target = e.target;
      scrollX = target.scrollLeft;
      scrollY = target.scrollTop;
      (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    useReactivated(() => {
      if (props.nativeScrollbar) {
        const el = scrollableElRef.value;
        if (el) {
          el.scrollTop = scrollY;
          el.scrollLeft = scrollX;
        }
      }
    });
    provide(layoutSiderInjectionKey, {
      collapsedRef: mergedCollapsedRef,
      collapseModeRef: toRef(props, "collapseMode")
    });
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Layout", "-layout-sider", style$1, layoutLight, props, mergedClsPrefixRef);
    function handleTransitionend(e) {
      var _a, _b;
      if (e.propertyName === "max-width") {
        if (mergedCollapsedRef.value) {
          (_a = props.onAfterLeave) === null || _a === void 0 ? void 0 : _a.call(props);
        } else {
          (_b = props.onAfterEnter) === null || _b === void 0 ? void 0 : _b.call(props);
        }
      }
    }
    const exposedMethods = {
      scrollTo
    };
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: self2
      } = themeRef.value;
      const {
        siderToggleButtonColor,
        siderToggleButtonBorder,
        siderToggleBarColor,
        siderToggleBarColorHover
      } = self2;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-toggle-button-color": siderToggleButtonColor,
        "--n-toggle-button-border": siderToggleButtonBorder,
        "--n-toggle-bar-color": siderToggleBarColor,
        "--n-toggle-bar-color-hover": siderToggleBarColorHover
      };
      if (props.inverted) {
        vars["--n-color"] = self2.siderColorInverted;
        vars["--n-text-color"] = self2.textColorInverted;
        vars["--n-border-color"] = self2.siderBorderColorInverted;
        vars["--n-toggle-button-icon-color"] = self2.siderToggleButtonIconColorInverted;
        vars.__invertScrollbar = self2.__invertScrollbar;
      } else {
        vars["--n-color"] = self2.siderColor;
        vars["--n-text-color"] = self2.textColor;
        vars["--n-border-color"] = self2.siderBorderColor;
        vars["--n-toggle-button-icon-color"] = self2.siderToggleButtonIconColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout-sider", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
    return Object.assign({
      scrollableElRef,
      scrollbarInstRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      styleMaxWidth: styleMaxWidthRef,
      mergedCollapsed: mergedCollapsedRef,
      scrollContainerStyle: scrollContainerStyleRef,
      siderPlacement: siderPlacementRef,
      handleNativeElScroll,
      handleTransitionend,
      handleTriggerClick,
      inlineThemeDisabled,
      cssVars: cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedMethods);
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      mergedCollapsed,
      showTrigger
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("aside", {
      class: [`${mergedClsPrefix}-layout-sider`, this.themeClass, `${mergedClsPrefix}-layout-sider--${this.position}-positioned`, `${mergedClsPrefix}-layout-sider--${this.siderPlacement}-placement`, this.bordered && `${mergedClsPrefix}-layout-sider--bordered`, mergedCollapsed && `${mergedClsPrefix}-layout-sider--collapsed`, (!mergedCollapsed || this.showCollapsedContent) && `${mergedClsPrefix}-layout-sider--show-content`],
      onTransitionend: this.handleTransitionend,
      style: [this.inlineThemeDisabled ? void 0 : this.cssVars, {
        maxWidth: this.styleMaxWidth,
        width: formatLength(this.width)
      }]
    }, !this.nativeScrollbar ? h(Scrollbar, Object.assign({}, this.scrollbarProps, {
      onScroll: this.onScroll,
      ref: "scrollbarInstRef",
      style: this.scrollContainerStyle,
      contentStyle: this.contentStyle,
      contentClass: this.contentClass,
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      // here is a hack, since in light theme the scrollbar color is dark,
      // we need to invert it in light color...
      builtinThemeOverrides: this.inverted && this.cssVars.__invertScrollbar === "true" ? {
        colorHover: "rgba(255, 255, 255, .4)",
        color: "rgba(255, 255, 255, .3)"
      } : void 0
    }), this.$slots) : h("div", {
      class: [`${mergedClsPrefix}-layout-sider-scroll-container`, this.contentClass],
      onScroll: this.handleNativeElScroll,
      style: [this.scrollContainerStyle, {
        overflow: "auto"
      }, this.contentStyle],
      ref: "scrollableElRef"
    }, this.$slots), showTrigger ? showTrigger === "bar" ? h(ToggleBar, {
      clsPrefix: mergedClsPrefix,
      class: mergedCollapsed ? this.collapsedTriggerClass : this.triggerClass,
      style: mergedCollapsed ? this.collapsedTriggerStyle : this.triggerStyle,
      onClick: this.handleTriggerClick
    }) : h(ToggleButton, {
      clsPrefix: mergedClsPrefix,
      class: mergedCollapsed ? this.collapsedTriggerClass : this.triggerClass,
      style: mergedCollapsed ? this.collapsedTriggerStyle : this.triggerStyle,
      onClick: this.handleTriggerClick
    }) : null, this.bordered ? h("div", {
      class: `${mergedClsPrefix}-layout-sider__border`
    }) : null);
  }
});
const menuInjectionKey = createInjectionKey("n-menu");
const submenuInjectionKey = createInjectionKey("n-submenu");
const menuItemGroupInjectionKey = createInjectionKey("n-menu-item-group");
const hoverStyleChildren = [c("&::before", "background-color: var(--n-item-color-hover);"), cE("arrow", `
 color: var(--n-arrow-color-hover);
 `), cE("icon", `
 color: var(--n-item-icon-color-hover);
 `), cB("menu-item-content-header", `
 color: var(--n-item-text-color-hover);
 `, [c("a", `
 color: var(--n-item-text-color-hover);
 `), cE("extra", `
 color: var(--n-item-text-color-hover);
 `)])];
const horizontalHoverStyleChildren = [cE("icon", `
 color: var(--n-item-icon-color-hover-horizontal);
 `), cB("menu-item-content-header", `
 color: var(--n-item-text-color-hover-horizontal);
 `, [c("a", `
 color: var(--n-item-text-color-hover-horizontal);
 `), cE("extra", `
 color: var(--n-item-text-color-hover-horizontal);
 `)])];
const style = c([cB("menu", `
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `, [cM("horizontal", `
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `, [cB("submenu", "margin: 0;"), cB("menu-item", "margin: 0;"), cB("menu-item-content", `
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `, [c("&::before", "display: none;"), cM("selected", "border-bottom: 2px solid var(--n-border-color-horizontal)")]), cB("menu-item-content", [cM("selected", [cE("icon", "color: var(--n-item-icon-color-active-horizontal);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active-horizontal);
 `, [c("a", "color: var(--n-item-text-color-active-horizontal);"), cE("extra", "color: var(--n-item-text-color-active-horizontal);")])]), cM("child-active", `
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `, [cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-horizontal);
 `, [c("a", `
 color: var(--n-item-text-color-child-active-horizontal);
 `), cE("extra", `
 color: var(--n-item-text-color-child-active-horizontal);
 `)]), cE("icon", `
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]), cNotM("disabled", [cNotM("selected, child-active", [c("&:focus-within", horizontalHoverStyleChildren)]), cM("selected", [hoverStyle(null, [cE("icon", "color: var(--n-item-icon-color-active-hover-horizontal);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover-horizontal);
 `, [c("a", "color: var(--n-item-text-color-active-hover-horizontal);"), cE("extra", "color: var(--n-item-text-color-active-hover-horizontal);")])])]), cM("child-active", [hoverStyle(null, [cE("icon", "color: var(--n-item-icon-color-child-active-hover-horizontal);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `, [c("a", "color: var(--n-item-text-color-child-active-hover-horizontal);"), cE("extra", "color: var(--n-item-text-color-child-active-hover-horizontal);")])])]), hoverStyle("border-bottom: 2px solid var(--n-border-color-horizontal);", horizontalHoverStyleChildren)]), cB("menu-item-content-header", [c("a", "color: var(--n-item-text-color-horizontal);")])])]), cNotM("responsive", [cB("menu-item-content-header", `
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), cM("collapsed", [cB("menu-item-content", [cM("selected", [c("&::before", `
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]), cB("menu-item-content-header", "opacity: 0;"), cE("arrow", "opacity: 0;"), cE("icon", "color: var(--n-item-icon-color-collapsed);")])]), cB("menu-item", `
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `), cB("menu-item-content", `
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [c("> *", "z-index: 1;"), c("&::before", `
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), cM("disabled", `
 opacity: .45;
 cursor: not-allowed;
 `), cM("collapsed", [cE("arrow", "transform: rotate(0);")]), cM("selected", [c("&::before", "background-color: var(--n-item-color-active);"), cE("arrow", "color: var(--n-arrow-color-active);"), cE("icon", "color: var(--n-item-icon-color-active);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active);
 `, [c("a", "color: var(--n-item-text-color-active);"), cE("extra", "color: var(--n-item-text-color-active);")])]), cM("child-active", [cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active);
 `, [c("a", `
 color: var(--n-item-text-color-child-active);
 `), cE("extra", `
 color: var(--n-item-text-color-child-active);
 `)]), cE("arrow", `
 color: var(--n-arrow-color-child-active);
 `), cE("icon", `
 color: var(--n-item-icon-color-child-active);
 `)]), cNotM("disabled", [cNotM("selected, child-active", [c("&:focus-within", hoverStyleChildren)]), cM("selected", [hoverStyle(null, [cE("arrow", "color: var(--n-arrow-color-active-hover);"), cE("icon", "color: var(--n-item-icon-color-active-hover);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover);
 `, [c("a", "color: var(--n-item-text-color-active-hover);"), cE("extra", "color: var(--n-item-text-color-active-hover);")])])]), cM("child-active", [hoverStyle(null, [cE("arrow", "color: var(--n-arrow-color-child-active-hover);"), cE("icon", "color: var(--n-item-icon-color-child-active-hover);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover);
 `, [c("a", "color: var(--n-item-text-color-child-active-hover);"), cE("extra", "color: var(--n-item-text-color-child-active-hover);")])])]), cM("selected", [hoverStyle(null, [c("&::before", "background-color: var(--n-item-color-active-hover);")])]), hoverStyle(null, hoverStyleChildren)]), cE("icon", `
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `), cE("arrow", `
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `), cB("menu-item-content-header", `
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `, [c("a", `
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `, [c("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cE("extra", `
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]), cB("submenu", `
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `, [cB("menu-item-content", `
 height: var(--n-item-height);
 `), cB("submenu-children", `
 overflow: hidden;
 padding: 0;
 `, [fadeInHeightExpandTransition({
  duration: ".2s"
})])]), cB("menu-item-group", [cB("menu-item-group-title", `
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]), cB("menu-tooltip", [c("a", `
 color: inherit;
 text-decoration: none;
 `)]), cB("menu-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);
function hoverStyle(props, children) {
  return [cM("hover", props, children), c("&:hover", props, children)];
}
const NMenuOptionContent = defineComponent({
  name: "MenuOptionContent",
  props: {
    collapsed: Boolean,
    disabled: Boolean,
    title: [String, Function],
    icon: Function,
    extra: [String, Function],
    showArrow: Boolean,
    childActive: Boolean,
    hover: Boolean,
    paddingLeft: Number,
    selected: Boolean,
    maxIconSize: {
      type: Number,
      required: true
    },
    activeIconSize: {
      type: Number,
      required: true
    },
    iconMarginRight: {
      type: Number,
      required: true
    },
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function,
    tmNode: {
      type: Object,
      required: true
    },
    isEllipsisPlaceholder: Boolean
  },
  setup(props) {
    const {
      props: menuProps2
    } = inject(menuInjectionKey);
    return {
      menuProps: menuProps2,
      style: computed(() => {
        const {
          paddingLeft
        } = props;
        return {
          paddingLeft: paddingLeft && `${paddingLeft}px`
        };
      }),
      iconStyle: computed(() => {
        const {
          maxIconSize,
          activeIconSize,
          iconMarginRight
        } = props;
        return {
          width: `${maxIconSize}px`,
          height: `${maxIconSize}px`,
          fontSize: `${activeIconSize}px`,
          marginRight: `${iconMarginRight}px`
        };
      })
    };
  },
  render() {
    const {
      clsPrefix,
      tmNode,
      menuProps: {
        renderIcon,
        renderLabel,
        renderExtra,
        expandIcon
      }
    } = this;
    const icon = renderIcon ? renderIcon(tmNode.rawNode) : render(this.icon);
    return h("div", {
      onClick: (e) => {
        var _a;
        (_a = this.onClick) === null || _a === void 0 ? void 0 : _a.call(this, e);
      },
      role: "none",
      class: [`${clsPrefix}-menu-item-content`, {
        [`${clsPrefix}-menu-item-content--selected`]: this.selected,
        [`${clsPrefix}-menu-item-content--collapsed`]: this.collapsed,
        [`${clsPrefix}-menu-item-content--child-active`]: this.childActive,
        [`${clsPrefix}-menu-item-content--disabled`]: this.disabled,
        [`${clsPrefix}-menu-item-content--hover`]: this.hover
      }],
      style: this.style
    }, icon && h("div", {
      class: `${clsPrefix}-menu-item-content__icon`,
      style: this.iconStyle,
      role: "none"
    }, [icon]), h("div", {
      class: `${clsPrefix}-menu-item-content-header`,
      role: "none"
    }, this.isEllipsisPlaceholder ? this.title : renderLabel ? renderLabel(tmNode.rawNode) : render(this.title), this.extra || renderExtra ? h("span", {
      class: `${clsPrefix}-menu-item-content-header__extra`
    }, " ", renderExtra ? renderExtra(tmNode.rawNode) : render(this.extra)) : null), this.showArrow ? h(NBaseIcon, {
      ariaHidden: true,
      class: `${clsPrefix}-menu-item-content__arrow`,
      clsPrefix
    }, {
      default: () => expandIcon ? expandIcon(tmNode.rawNode) : h(ChevronDownFilledIcon, null)
    }) : null);
  }
});
const ICON_MARGIN_RIGHT = 8;
function useMenuChild(props) {
  const NMenu = inject(menuInjectionKey);
  const {
    props: menuProps2,
    mergedCollapsedRef
  } = NMenu;
  const NSubmenu2 = inject(submenuInjectionKey, null);
  const NMenuOptionGroup2 = inject(menuItemGroupInjectionKey, null);
  const horizontalRef = computed(() => {
    return menuProps2.mode === "horizontal";
  });
  const dropdownPlacementRef = computed(() => {
    if (horizontalRef.value) {
      return menuProps2.dropdownPlacement;
    }
    if ("tmNodes" in props) return "right-start";
    return "right";
  });
  const maxIconSizeRef = computed(() => {
    var _a;
    return Math.max((_a = menuProps2.collapsedIconSize) !== null && _a !== void 0 ? _a : menuProps2.iconSize, menuProps2.iconSize);
  });
  const activeIconSizeRef = computed(() => {
    var _a;
    if (!horizontalRef.value && props.root && mergedCollapsedRef.value) {
      return (_a = menuProps2.collapsedIconSize) !== null && _a !== void 0 ? _a : menuProps2.iconSize;
    } else {
      return menuProps2.iconSize;
    }
  });
  const paddingLeftRef = computed(() => {
    if (horizontalRef.value) return void 0;
    const {
      collapsedWidth,
      indent,
      rootIndent
    } = menuProps2;
    const {
      root,
      isGroup
    } = props;
    const mergedRootIndent = rootIndent === void 0 ? indent : rootIndent;
    if (root) {
      if (mergedCollapsedRef.value) {
        return collapsedWidth / 2 - maxIconSizeRef.value / 2;
      }
      return mergedRootIndent;
    }
    if (NMenuOptionGroup2 && typeof NMenuOptionGroup2.paddingLeftRef.value === "number") {
      return indent / 2 + NMenuOptionGroup2.paddingLeftRef.value;
    }
    if (NSubmenu2 && typeof NSubmenu2.paddingLeftRef.value === "number") {
      return (isGroup ? indent / 2 : indent) + NSubmenu2.paddingLeftRef.value;
    }
    return 0;
  });
  const iconMarginRightRef = computed(() => {
    const {
      collapsedWidth,
      indent,
      rootIndent
    } = menuProps2;
    const {
      value: maxIconSize
    } = maxIconSizeRef;
    const {
      root
    } = props;
    if (horizontalRef.value) return ICON_MARGIN_RIGHT;
    if (!root) return ICON_MARGIN_RIGHT;
    if (!mergedCollapsedRef.value) return ICON_MARGIN_RIGHT;
    const mergedRootIndent = rootIndent === void 0 ? indent : rootIndent;
    return mergedRootIndent + maxIconSize + ICON_MARGIN_RIGHT - (collapsedWidth + maxIconSize) / 2;
  });
  return {
    dropdownPlacement: dropdownPlacementRef,
    activeIconSize: activeIconSizeRef,
    maxIconSize: maxIconSizeRef,
    paddingLeft: paddingLeftRef,
    iconMarginRight: iconMarginRightRef,
    NMenu,
    NSubmenu: NSubmenu2
  };
}
const useMenuChildProps = {
  internalKey: {
    type: [String, Number],
    required: true
  },
  root: Boolean,
  isGroup: Boolean,
  level: {
    type: Number,
    required: true
  },
  title: [String, Function],
  extra: [String, Function]
};
const NMenuDivider = defineComponent({
  name: "MenuDivider",
  setup() {
    const NMenu = inject(menuInjectionKey);
    const {
      mergedClsPrefixRef,
      isHorizontalRef
    } = NMenu;
    return () => isHorizontalRef.value ? null : h("div", {
      class: `${mergedClsPrefixRef.value}-menu-divider`
    });
  }
});
const menuItemProps = Object.assign(Object.assign({}, useMenuChildProps), {
  tmNode: {
    type: Object,
    required: true
  },
  disabled: Boolean,
  icon: Function,
  onClick: Function
});
const menuItemPropKeys = keysOf(menuItemProps);
const NMenuOption = defineComponent({
  name: "MenuOption",
  props: menuItemProps,
  setup(props) {
    const MenuChild = useMenuChild(props);
    const {
      NSubmenu: NSubmenu2,
      NMenu
    } = MenuChild;
    const {
      props: menuProps2,
      mergedClsPrefixRef,
      mergedCollapsedRef
    } = NMenu;
    const submenuDisabledRef = NSubmenu2 ? NSubmenu2.mergedDisabledRef : {
      value: false
    };
    const mergedDisabledRef = computed(() => {
      return submenuDisabledRef.value || props.disabled;
    });
    function doClick(e) {
      const {
        onClick
      } = props;
      if (onClick) onClick(e);
    }
    function handleClick(e) {
      if (!mergedDisabledRef.value) {
        NMenu.doSelect(props.internalKey, props.tmNode.rawNode);
        doClick(e);
      }
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      dropdownPlacement: MenuChild.dropdownPlacement,
      paddingLeft: MenuChild.paddingLeft,
      iconMarginRight: MenuChild.iconMarginRight,
      maxIconSize: MenuChild.maxIconSize,
      activeIconSize: MenuChild.activeIconSize,
      mergedTheme: NMenu.mergedThemeRef,
      menuProps: menuProps2,
      dropdownEnabled: useMemo(() => {
        return props.root && mergedCollapsedRef.value && menuProps2.mode !== "horizontal" && !mergedDisabledRef.value;
      }),
      selected: useMemo(() => {
        if (NMenu.mergedValueRef.value === props.internalKey) return true;
        return false;
      }),
      mergedDisabled: mergedDisabledRef,
      handleClick
    };
  },
  render() {
    const {
      mergedClsPrefix,
      mergedTheme,
      tmNode,
      menuProps: {
        renderLabel,
        nodeProps
      }
    } = this;
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(tmNode.rawNode);
    return h("div", Object.assign({}, attrs, {
      role: "menuitem",
      class: [`${mergedClsPrefix}-menu-item`, attrs === null || attrs === void 0 ? void 0 : attrs.class]
    }), h(NTooltip, {
      theme: mergedTheme.peers.Tooltip,
      themeOverrides: mergedTheme.peerOverrides.Tooltip,
      trigger: "hover",
      placement: this.dropdownPlacement,
      disabled: !this.dropdownEnabled || this.title === void 0,
      internalExtraClass: ["menu-tooltip"]
    }, {
      default: () => renderLabel ? renderLabel(tmNode.rawNode) : render(this.title),
      trigger: () => h(NMenuOptionContent, {
        tmNode,
        clsPrefix: mergedClsPrefix,
        paddingLeft: this.paddingLeft,
        iconMarginRight: this.iconMarginRight,
        maxIconSize: this.maxIconSize,
        activeIconSize: this.activeIconSize,
        selected: this.selected,
        title: this.title,
        extra: this.extra,
        disabled: this.mergedDisabled,
        icon: this.icon,
        onClick: this.handleClick
      })
    }));
  }
});
const menuItemGroupProps = Object.assign(Object.assign({}, useMenuChildProps), {
  tmNode: {
    type: Object,
    required: true
  },
  tmNodes: {
    type: Array,
    required: true
  }
});
const menuItemGroupPropKeys = keysOf(menuItemGroupProps);
const NMenuOptionGroup = defineComponent({
  name: "MenuOptionGroup",
  props: menuItemGroupProps,
  setup(props) {
    provide(submenuInjectionKey, null);
    const MenuChild = useMenuChild(props);
    provide(menuItemGroupInjectionKey, {
      paddingLeftRef: MenuChild.paddingLeft
    });
    const {
      mergedClsPrefixRef,
      props: menuProps2
    } = inject(menuInjectionKey);
    return function() {
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      const paddingLeft = MenuChild.paddingLeft.value;
      const {
        nodeProps
      } = menuProps2;
      const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(props.tmNode.rawNode);
      return h("div", {
        class: `${mergedClsPrefix}-menu-item-group`,
        role: "group"
      }, h("div", Object.assign({}, attrs, {
        class: [`${mergedClsPrefix}-menu-item-group-title`, attrs === null || attrs === void 0 ? void 0 : attrs.class],
        style: [(attrs === null || attrs === void 0 ? void 0 : attrs.style) || "", paddingLeft !== void 0 ? `padding-left: ${paddingLeft}px;` : ""]
      }), render(props.title), props.extra ? h(Fragment, null, " ", render(props.extra)) : null), h("div", null, props.tmNodes.map((tmNode) => itemRenderer(tmNode, menuProps2))));
    };
  }
});
function isIgnoredNode(rawNode) {
  return rawNode.type === "divider" || rawNode.type === "render";
}
function isDividerNode(rawNode) {
  return rawNode.type === "divider";
}
function itemRenderer(tmNode, menuProps2) {
  const {
    rawNode
  } = tmNode;
  const {
    show
  } = rawNode;
  if (show === false) {
    return null;
  }
  if (isIgnoredNode(rawNode)) {
    if (isDividerNode(rawNode)) {
      return h(NMenuDivider, Object.assign({
        key: tmNode.key
      }, rawNode.props));
    }
    return null;
  }
  const {
    labelField
  } = menuProps2;
  const {
    key,
    level,
    isGroup
  } = tmNode;
  const props = Object.assign(Object.assign({}, rawNode), {
    title: rawNode.title || rawNode[labelField],
    extra: rawNode.titleExtra || rawNode.extra,
    key,
    internalKey: key,
    // since key can't be used as a prop
    level,
    root: level === 0,
    isGroup
  });
  if (tmNode.children) {
    if (tmNode.isGroup) {
      return h(NMenuOptionGroup, keep(props, menuItemGroupPropKeys, {
        tmNode,
        tmNodes: tmNode.children,
        key
      }));
    }
    return h(NSubmenu, keep(props, submenuPropKeys, {
      key,
      rawNodes: rawNode[menuProps2.childrenField],
      tmNodes: tmNode.children,
      tmNode
    }));
  } else {
    return h(NMenuOption, keep(props, menuItemPropKeys, {
      key,
      tmNode
    }));
  }
}
const submenuProps = Object.assign(Object.assign({}, useMenuChildProps), {
  rawNodes: {
    type: Array,
    default: () => []
  },
  tmNodes: {
    type: Array,
    default: () => []
  },
  tmNode: {
    type: Object,
    required: true
  },
  disabled: Boolean,
  icon: Function,
  onClick: Function,
  domId: String,
  virtualChildActive: {
    type: Boolean,
    default: void 0
  },
  isEllipsisPlaceholder: Boolean
});
const submenuPropKeys = keysOf(submenuProps);
const NSubmenu = defineComponent({
  name: "Submenu",
  props: submenuProps,
  setup(props) {
    const MenuChild = useMenuChild(props);
    const {
      NMenu,
      NSubmenu: NSubmenu2
    } = MenuChild;
    const {
      props: menuProps2,
      mergedCollapsedRef,
      mergedThemeRef
    } = NMenu;
    const mergedDisabledRef = computed(() => {
      const {
        disabled
      } = props;
      if (NSubmenu2 === null || NSubmenu2 === void 0 ? void 0 : NSubmenu2.mergedDisabledRef.value) return true;
      if (menuProps2.disabled) return true;
      return disabled;
    });
    const dropdownShowRef = ref(false);
    provide(submenuInjectionKey, {
      paddingLeftRef: MenuChild.paddingLeft,
      mergedDisabledRef
    });
    provide(menuItemGroupInjectionKey, null);
    function doClick() {
      const {
        onClick
      } = props;
      if (onClick) onClick();
    }
    function handleClick() {
      if (!mergedDisabledRef.value) {
        if (!mergedCollapsedRef.value) {
          NMenu.toggleExpand(props.internalKey);
        }
        doClick();
      }
    }
    function handlePopoverShowChange(value) {
      dropdownShowRef.value = value;
    }
    return {
      menuProps: menuProps2,
      mergedTheme: mergedThemeRef,
      doSelect: NMenu.doSelect,
      inverted: NMenu.invertedRef,
      isHorizontal: NMenu.isHorizontalRef,
      mergedClsPrefix: NMenu.mergedClsPrefixRef,
      maxIconSize: MenuChild.maxIconSize,
      activeIconSize: MenuChild.activeIconSize,
      iconMarginRight: MenuChild.iconMarginRight,
      dropdownPlacement: MenuChild.dropdownPlacement,
      dropdownShow: dropdownShowRef,
      paddingLeft: MenuChild.paddingLeft,
      mergedDisabled: mergedDisabledRef,
      mergedValue: NMenu.mergedValueRef,
      childActive: useMemo(() => {
        var _a;
        return (_a = props.virtualChildActive) !== null && _a !== void 0 ? _a : NMenu.activePathRef.value.includes(props.internalKey);
      }),
      collapsed: computed(() => {
        if (menuProps2.mode === "horizontal") return false;
        if (mergedCollapsedRef.value) {
          return true;
        }
        return !NMenu.mergedExpandedKeysRef.value.includes(props.internalKey);
      }),
      dropdownEnabled: computed(() => {
        return !mergedDisabledRef.value && (menuProps2.mode === "horizontal" || mergedCollapsedRef.value);
      }),
      handlePopoverShowChange,
      handleClick
    };
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      menuProps: {
        renderIcon,
        renderLabel
      }
    } = this;
    const createSubmenuItem = () => {
      const {
        isHorizontal,
        paddingLeft,
        collapsed,
        mergedDisabled,
        maxIconSize,
        activeIconSize,
        title,
        childActive,
        icon,
        handleClick,
        menuProps: {
          nodeProps
        },
        dropdownShow,
        iconMarginRight,
        tmNode,
        mergedClsPrefix: mergedClsPrefix2,
        isEllipsisPlaceholder,
        extra
      } = this;
      const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(tmNode.rawNode);
      return h("div", Object.assign({}, attrs, {
        class: [`${mergedClsPrefix2}-menu-item`, attrs === null || attrs === void 0 ? void 0 : attrs.class],
        role: "menuitem"
      }), h(NMenuOptionContent, {
        tmNode,
        paddingLeft,
        collapsed,
        disabled: mergedDisabled,
        iconMarginRight,
        maxIconSize,
        activeIconSize,
        title,
        extra,
        showArrow: !isHorizontal,
        childActive,
        clsPrefix: mergedClsPrefix2,
        icon,
        hover: dropdownShow,
        onClick: handleClick,
        isEllipsisPlaceholder
      }));
    };
    const createSubmenuChildren = () => {
      return h(NFadeInExpandTransition, null, {
        default: () => {
          const {
            tmNodes,
            collapsed
          } = this;
          return !collapsed ? h("div", {
            class: `${mergedClsPrefix}-submenu-children`,
            role: "menu"
          }, tmNodes.map((item) => itemRenderer(item, this.menuProps))) : null;
        }
      });
    };
    return this.root ? h(__unplugin_components_1$1, Object.assign({
      size: "large",
      trigger: "hover"
    }, (_a = this.menuProps) === null || _a === void 0 ? void 0 : _a.dropdownProps, {
      themeOverrides: this.mergedTheme.peerOverrides.Dropdown,
      theme: this.mergedTheme.peers.Dropdown,
      builtinThemeOverrides: {
        fontSizeLarge: "14px",
        optionIconSizeLarge: "18px"
      },
      value: this.mergedValue,
      disabled: !this.dropdownEnabled,
      placement: this.dropdownPlacement,
      keyField: this.menuProps.keyField,
      labelField: this.menuProps.labelField,
      childrenField: this.menuProps.childrenField,
      onUpdateShow: this.handlePopoverShowChange,
      options: this.rawNodes,
      onSelect: this.doSelect,
      inverted: this.inverted,
      renderIcon,
      renderLabel
    }), {
      default: () => h("div", {
        class: `${mergedClsPrefix}-submenu`,
        role: "menu",
        "aria-expanded": !this.collapsed,
        id: this.domId
      }, createSubmenuItem(), this.isHorizontal ? null : createSubmenuChildren())
    }) : h("div", {
      class: `${mergedClsPrefix}-submenu`,
      role: "menu",
      "aria-expanded": !this.collapsed,
      id: this.domId
    }, createSubmenuItem(), createSubmenuChildren());
  }
});
const menuProps = Object.assign(Object.assign({}, useTheme.props), {
  options: {
    type: Array,
    default: () => []
  },
  collapsed: {
    type: Boolean,
    default: void 0
  },
  collapsedWidth: {
    type: Number,
    default: 48
  },
  iconSize: {
    type: Number,
    default: 20
  },
  collapsedIconSize: {
    type: Number,
    default: 24
  },
  rootIndent: Number,
  indent: {
    type: Number,
    default: 32
  },
  labelField: {
    type: String,
    default: "label"
  },
  keyField: {
    type: String,
    default: "key"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  disabledField: {
    type: String,
    default: "disabled"
  },
  defaultExpandAll: Boolean,
  defaultExpandedKeys: Array,
  expandedKeys: Array,
  value: [String, Number],
  defaultValue: {
    type: [String, Number],
    default: null
  },
  mode: {
    type: String,
    default: "vertical"
  },
  watchProps: {
    type: Array,
    default: void 0
  },
  disabled: Boolean,
  show: {
    type: Boolean,
    default: true
  },
  inverted: Boolean,
  "onUpdate:expandedKeys": [Function, Array],
  onUpdateExpandedKeys: [Function, Array],
  onUpdateValue: [Function, Array],
  "onUpdate:value": [Function, Array],
  expandIcon: Function,
  renderIcon: Function,
  renderLabel: Function,
  renderExtra: Function,
  dropdownProps: Object,
  accordion: Boolean,
  nodeProps: Function,
  dropdownPlacement: {
    type: String,
    default: "bottom"
  },
  responsive: Boolean,
  // deprecated
  items: Array,
  onOpenNamesChange: [Function, Array],
  onSelect: [Function, Array],
  onExpandedNamesChange: [Function, Array],
  expandedNames: Array,
  defaultExpandedNames: Array
});
const __unplugin_components_0 = defineComponent({
  name: "Menu",
  inheritAttrs: false,
  props: menuProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Menu", "-menu", style, menuLight, props, mergedClsPrefixRef);
    const layoutSider = inject(layoutSiderInjectionKey, null);
    const mergedCollapsedRef = computed(() => {
      var _a;
      const {
        collapsed
      } = props;
      if (collapsed !== void 0) return collapsed;
      if (layoutSider) {
        const {
          collapseModeRef,
          collapsedRef
        } = layoutSider;
        if (collapseModeRef.value === "width") {
          return (_a = collapsedRef.value) !== null && _a !== void 0 ? _a : false;
        }
      }
      return false;
    });
    const treeMateRef = computed(() => {
      const {
        keyField,
        childrenField,
        disabledField
      } = props;
      return createTreeMate(props.items || props.options, {
        getIgnored(node) {
          return isIgnoredNode(node);
        },
        getChildren(node) {
          return node[childrenField];
        },
        getDisabled(node) {
          return node[disabledField];
        },
        getKey(node) {
          var _a;
          return (_a = node[keyField]) !== null && _a !== void 0 ? _a : node.name;
        }
      });
    });
    const treeKeysLevelOneRef = computed(() => new Set(treeMateRef.value.treeNodes.map((e) => e.key)));
    const {
      watchProps
    } = props;
    const uncontrolledValueRef = ref(null);
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultValue")) {
      watchEffect(() => {
        uncontrolledValueRef.value = props.defaultValue;
      });
    } else {
      uncontrolledValueRef.value = props.defaultValue;
    }
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const uncontrolledExpandedKeysRef = ref([]);
    const initUncontrolledExpandedKeys = () => {
      uncontrolledExpandedKeysRef.value = props.defaultExpandAll ? treeMateRef.value.getNonLeafKeys() : props.defaultExpandedNames || props.defaultExpandedKeys || treeMateRef.value.getPath(mergedValueRef.value, {
        includeSelf: false
      }).keyPath;
    };
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultExpandedKeys")) {
      watchEffect(initUncontrolledExpandedKeys);
    } else {
      initUncontrolledExpandedKeys();
    }
    const controlledExpandedKeysRef = useCompitable(props, ["expandedNames", "expandedKeys"]);
    const mergedExpandedKeysRef = useMergedState(controlledExpandedKeysRef, uncontrolledExpandedKeysRef);
    const tmNodesRef = computed(() => treeMateRef.value.treeNodes);
    const activePathRef = computed(() => {
      return treeMateRef.value.getPath(mergedValueRef.value).keyPath;
    });
    provide(menuInjectionKey, {
      props,
      mergedCollapsedRef,
      mergedThemeRef: themeRef,
      mergedValueRef,
      mergedExpandedKeysRef,
      activePathRef,
      mergedClsPrefixRef,
      isHorizontalRef: computed(() => props.mode === "horizontal"),
      invertedRef: toRef(props, "inverted"),
      doSelect,
      toggleExpand
    });
    function doSelect(value, item) {
      const {
        "onUpdate:value": _onUpdateValue,
        onUpdateValue,
        onSelect
      } = props;
      if (onUpdateValue) {
        call(onUpdateValue, value, item);
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value, item);
      }
      if (onSelect) {
        call(onSelect, value, item);
      }
      uncontrolledValueRef.value = value;
    }
    function doUpdateExpandedKeys(value) {
      const {
        "onUpdate:expandedKeys": _onUpdateExpandedKeys,
        onUpdateExpandedKeys,
        onExpandedNamesChange,
        onOpenNamesChange
      } = props;
      if (_onUpdateExpandedKeys) {
        call(_onUpdateExpandedKeys, value);
      }
      if (onUpdateExpandedKeys) {
        call(onUpdateExpandedKeys, value);
      }
      if (onExpandedNamesChange) {
        call(onExpandedNamesChange, value);
      }
      if (onOpenNamesChange) {
        call(onOpenNamesChange, value);
      }
      uncontrolledExpandedKeysRef.value = value;
    }
    function toggleExpand(key) {
      const currentExpandedKeys = Array.from(mergedExpandedKeysRef.value);
      const index = currentExpandedKeys.findIndex((expanededKey) => expanededKey === key);
      if (~index) {
        currentExpandedKeys.splice(index, 1);
      } else {
        if (props.accordion) {
          if (treeKeysLevelOneRef.value.has(key)) {
            const closeKeyIndex = currentExpandedKeys.findIndex((e) => treeKeysLevelOneRef.value.has(e));
            if (closeKeyIndex > -1) {
              currentExpandedKeys.splice(closeKeyIndex, 1);
            }
          }
        }
        currentExpandedKeys.push(key);
      }
      doUpdateExpandedKeys(currentExpandedKeys);
    }
    const showOption = (key) => {
      const selectedKeyPath = treeMateRef.value.getPath(key !== null && key !== void 0 ? key : mergedValueRef.value, {
        includeSelf: false
      }).keyPath;
      if (!selectedKeyPath.length) return;
      const currentExpandedKeys = Array.from(mergedExpandedKeysRef.value);
      const nextExpandedKeys = /* @__PURE__ */ new Set([...currentExpandedKeys, ...selectedKeyPath]);
      if (props.accordion) {
        treeKeysLevelOneRef.value.forEach((firstLevelKey) => {
          if (nextExpandedKeys.has(firstLevelKey) && !selectedKeyPath.includes(firstLevelKey)) {
            nextExpandedKeys.delete(firstLevelKey);
          }
        });
      }
      doUpdateExpandedKeys(Array.from(nextExpandedKeys));
    };
    const cssVarsRef = computed(() => {
      const {
        inverted
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: self2
      } = themeRef.value;
      const {
        borderRadius,
        borderColorHorizontal,
        fontSize,
        itemHeight,
        dividerColor
      } = self2;
      const vars = {
        "--n-divider-color": dividerColor,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": fontSize,
        "--n-border-color-horizontal": borderColorHorizontal,
        "--n-border-radius": borderRadius,
        "--n-item-height": itemHeight
      };
      if (inverted) {
        vars["--n-group-text-color"] = self2.groupTextColorInverted;
        vars["--n-color"] = self2.colorInverted;
        vars["--n-item-text-color"] = self2.itemTextColorInverted;
        vars["--n-item-text-color-hover"] = self2.itemTextColorHoverInverted;
        vars["--n-item-text-color-active"] = self2.itemTextColorActiveInverted;
        vars["--n-item-text-color-child-active"] = self2.itemTextColorChildActiveInverted;
        vars["--n-item-text-color-child-active-hover"] = self2.itemTextColorChildActiveInverted;
        vars["--n-item-text-color-active-hover"] = self2.itemTextColorActiveHoverInverted;
        vars["--n-item-icon-color"] = self2.itemIconColorInverted;
        vars["--n-item-icon-color-hover"] = self2.itemIconColorHoverInverted;
        vars["--n-item-icon-color-active"] = self2.itemIconColorActiveInverted;
        vars["--n-item-icon-color-active-hover"] = self2.itemIconColorActiveHoverInverted;
        vars["--n-item-icon-color-child-active"] = self2.itemIconColorChildActiveInverted;
        vars["--n-item-icon-color-child-active-hover"] = self2.itemIconColorChildActiveHoverInverted;
        vars["--n-item-icon-color-collapsed"] = self2.itemIconColorCollapsedInverted;
        vars["--n-item-text-color-horizontal"] = self2.itemTextColorHorizontalInverted;
        vars["--n-item-text-color-hover-horizontal"] = self2.itemTextColorHoverHorizontalInverted;
        vars["--n-item-text-color-active-horizontal"] = self2.itemTextColorActiveHorizontalInverted;
        vars["--n-item-text-color-child-active-horizontal"] = self2.itemTextColorChildActiveHorizontalInverted;
        vars["--n-item-text-color-child-active-hover-horizontal"] = self2.itemTextColorChildActiveHoverHorizontalInverted;
        vars["--n-item-text-color-active-hover-horizontal"] = self2.itemTextColorActiveHoverHorizontalInverted;
        vars["--n-item-icon-color-horizontal"] = self2.itemIconColorHorizontalInverted;
        vars["--n-item-icon-color-hover-horizontal"] = self2.itemIconColorHoverHorizontalInverted;
        vars["--n-item-icon-color-active-horizontal"] = self2.itemIconColorActiveHorizontalInverted;
        vars["--n-item-icon-color-active-hover-horizontal"] = self2.itemIconColorActiveHoverHorizontalInverted;
        vars["--n-item-icon-color-child-active-horizontal"] = self2.itemIconColorChildActiveHorizontalInverted;
        vars["--n-item-icon-color-child-active-hover-horizontal"] = self2.itemIconColorChildActiveHoverHorizontalInverted;
        vars["--n-arrow-color"] = self2.arrowColorInverted;
        vars["--n-arrow-color-hover"] = self2.arrowColorHoverInverted;
        vars["--n-arrow-color-active"] = self2.arrowColorActiveInverted;
        vars["--n-arrow-color-active-hover"] = self2.arrowColorActiveHoverInverted;
        vars["--n-arrow-color-child-active"] = self2.arrowColorChildActiveInverted;
        vars["--n-arrow-color-child-active-hover"] = self2.arrowColorChildActiveHoverInverted;
        vars["--n-item-color-hover"] = self2.itemColorHoverInverted;
        vars["--n-item-color-active"] = self2.itemColorActiveInverted;
        vars["--n-item-color-active-hover"] = self2.itemColorActiveHoverInverted;
        vars["--n-item-color-active-collapsed"] = self2.itemColorActiveCollapsedInverted;
      } else {
        vars["--n-group-text-color"] = self2.groupTextColor;
        vars["--n-color"] = self2.color;
        vars["--n-item-text-color"] = self2.itemTextColor;
        vars["--n-item-text-color-hover"] = self2.itemTextColorHover;
        vars["--n-item-text-color-active"] = self2.itemTextColorActive;
        vars["--n-item-text-color-child-active"] = self2.itemTextColorChildActive;
        vars["--n-item-text-color-child-active-hover"] = self2.itemTextColorChildActiveHover;
        vars["--n-item-text-color-active-hover"] = self2.itemTextColorActiveHover;
        vars["--n-item-icon-color"] = self2.itemIconColor;
        vars["--n-item-icon-color-hover"] = self2.itemIconColorHover;
        vars["--n-item-icon-color-active"] = self2.itemIconColorActive;
        vars["--n-item-icon-color-active-hover"] = self2.itemIconColorActiveHover;
        vars["--n-item-icon-color-child-active"] = self2.itemIconColorChildActive;
        vars["--n-item-icon-color-child-active-hover"] = self2.itemIconColorChildActiveHover;
        vars["--n-item-icon-color-collapsed"] = self2.itemIconColorCollapsed;
        vars["--n-item-text-color-horizontal"] = self2.itemTextColorHorizontal;
        vars["--n-item-text-color-hover-horizontal"] = self2.itemTextColorHoverHorizontal;
        vars["--n-item-text-color-active-horizontal"] = self2.itemTextColorActiveHorizontal;
        vars["--n-item-text-color-child-active-horizontal"] = self2.itemTextColorChildActiveHorizontal;
        vars["--n-item-text-color-child-active-hover-horizontal"] = self2.itemTextColorChildActiveHoverHorizontal;
        vars["--n-item-text-color-active-hover-horizontal"] = self2.itemTextColorActiveHoverHorizontal;
        vars["--n-item-icon-color-horizontal"] = self2.itemIconColorHorizontal;
        vars["--n-item-icon-color-hover-horizontal"] = self2.itemIconColorHoverHorizontal;
        vars["--n-item-icon-color-active-horizontal"] = self2.itemIconColorActiveHorizontal;
        vars["--n-item-icon-color-active-hover-horizontal"] = self2.itemIconColorActiveHoverHorizontal;
        vars["--n-item-icon-color-child-active-horizontal"] = self2.itemIconColorChildActiveHorizontal;
        vars["--n-item-icon-color-child-active-hover-horizontal"] = self2.itemIconColorChildActiveHoverHorizontal;
        vars["--n-arrow-color"] = self2.arrowColor;
        vars["--n-arrow-color-hover"] = self2.arrowColorHover;
        vars["--n-arrow-color-active"] = self2.arrowColorActive;
        vars["--n-arrow-color-active-hover"] = self2.arrowColorActiveHover;
        vars["--n-arrow-color-child-active"] = self2.arrowColorChildActive;
        vars["--n-arrow-color-child-active-hover"] = self2.arrowColorChildActiveHover;
        vars["--n-item-color-hover"] = self2.itemColorHover;
        vars["--n-item-color-active"] = self2.itemColorActive;
        vars["--n-item-color-active-hover"] = self2.itemColorActiveHover;
        vars["--n-item-color-active-collapsed"] = self2.itemColorActiveCollapsed;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("menu", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
    const ellipsisNodeId = createId();
    const overflowRef = ref(null);
    const counterRef = ref(null);
    let isFirstResize = true;
    const onResize = () => {
      var _a;
      if (isFirstResize) {
        isFirstResize = false;
      } else {
        (_a = overflowRef.value) === null || _a === void 0 ? void 0 : _a.sync({
          showAllItemsBeforeCalculate: true
        });
      }
    };
    function getCounter() {
      return document.getElementById(ellipsisNodeId);
    }
    const ellipsisFromIndexRef = ref(-1);
    function onUpdateCount(count) {
      ellipsisFromIndexRef.value = props.options.length - count;
    }
    function onUpdateOverflow(overflow) {
      if (!overflow) {
        ellipsisFromIndexRef.value = -1;
      }
    }
    const ellipsisOptionRef = computed(() => {
      const ellipsisFromIndex = ellipsisFromIndexRef.value;
      const option = {
        children: ellipsisFromIndex === -1 ? [] : props.options.slice(ellipsisFromIndex)
      };
      return option;
    });
    const ellipsisTreeMateRef = computed(() => {
      const {
        childrenField,
        disabledField,
        keyField
      } = props;
      return createTreeMate([ellipsisOptionRef.value], {
        getIgnored(node) {
          return isIgnoredNode(node);
        },
        getChildren(node) {
          return node[childrenField];
        },
        getDisabled(node) {
          return node[disabledField];
        },
        getKey(node) {
          var _a;
          return (_a = node[keyField]) !== null && _a !== void 0 ? _a : node.name;
        }
      });
    });
    const emptyTmNodeRef = computed(() => {
      return createTreeMate([{}]).treeNodes[0];
    });
    function renderCounter() {
      var _a;
      if (ellipsisFromIndexRef.value === -1) {
        return h(NSubmenu, {
          root: true,
          level: 0,
          key: "__ellpisisGroupPlaceholder__",
          internalKey: "__ellpisisGroupPlaceholder__",
          title: "···",
          tmNode: emptyTmNodeRef.value,
          domId: ellipsisNodeId,
          isEllipsisPlaceholder: true
        });
      }
      const tmNode = ellipsisTreeMateRef.value.treeNodes[0];
      const activePath = activePathRef.value;
      const childActive = !!((_a = tmNode.children) === null || _a === void 0 ? void 0 : _a.some((tmNode2) => {
        return activePath.includes(tmNode2.key);
      }));
      return h(NSubmenu, {
        level: 0,
        root: true,
        key: "__ellpisisGroup__",
        internalKey: "__ellpisisGroup__",
        title: "···",
        virtualChildActive: childActive,
        tmNode,
        domId: ellipsisNodeId,
        rawNodes: tmNode.rawNode.children || [],
        tmNodes: tmNode.children || [],
        isEllipsisPlaceholder: true
      });
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      controlledExpandedKeys: controlledExpandedKeysRef,
      uncontrolledExpanededKeys: uncontrolledExpandedKeysRef,
      mergedExpandedKeys: mergedExpandedKeysRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      activePath: activePathRef,
      tmNodes: tmNodesRef,
      mergedTheme: themeRef,
      mergedCollapsed: mergedCollapsedRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      overflowRef,
      counterRef,
      updateCounter: () => {
      },
      onResize,
      onUpdateOverflow,
      onUpdateCount,
      renderCounter,
      getCounter,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      showOption,
      deriveResponsiveState: onResize
    };
  },
  render() {
    const {
      mergedClsPrefix,
      mode,
      themeClass,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const renderMenuItemNodes = () => this.tmNodes.map((tmNode) => itemRenderer(tmNode, this.$props));
    const horizontal = mode === "horizontal";
    const finalResponsive = horizontal && this.responsive;
    const renderMainNode = () => h("div", mergeProps(this.$attrs, {
      role: mode === "horizontal" ? "menubar" : "menu",
      class: [`${mergedClsPrefix}-menu`, themeClass, `${mergedClsPrefix}-menu--${mode}`, finalResponsive && `${mergedClsPrefix}-menu--responsive`, this.mergedCollapsed && `${mergedClsPrefix}-menu--collapsed`],
      style: this.cssVars
    }), finalResponsive ? h(VOverflow, {
      ref: "overflowRef",
      onUpdateOverflow: this.onUpdateOverflow,
      getCounter: this.getCounter,
      onUpdateCount: this.onUpdateCount,
      updateCounter: this.updateCounter,
      style: {
        width: "100%",
        display: "flex",
        overflow: "hidden"
      }
    }, {
      default: renderMenuItemNodes,
      counter: this.renderCounter
    }) : renderMenuItemNodes());
    return finalResponsive ? h(VResizeObserver, {
      onResize: this.onResize
    }, {
      default: renderMainNode
    }) : renderMainNode();
  }
});
const _hoisted_1$p = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const Add = defineComponent({
  name: "Add",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$p,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M256 112v288"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M400 256H112"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$o = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const BuildIcon = defineComponent({
  name: "BuildOutline",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$o,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M393.87 190a32.1 32.1 0 0 1-45.25 0l-26.57-26.57a32.09 32.09 0 0 1 0-45.26L382.19 58a1 1 0 0 0-.3-1.64c-38.82-16.64-89.15-8.16-121.11 23.57c-30.58 30.35-32.32 76-21.12 115.84a31.93 31.93 0 0 1-9.06 32.08L64 380a48.17 48.17 0 1 0 68 68l153.86-167a31.93 31.93 0 0 1 31.6-9.13c39.54 10.59 84.54 8.6 114.72-21.19c32.49-32 39.5-88.56 23.75-120.93a1 1 0 0 0-1.6-.26z",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-miterlimit": "10",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "circle",
          {
            cx: "96",
            cy: "416",
            r: "16",
            fill: "currentColor"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$n = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const QueueIcon = defineComponent({
  name: "GitPullRequestOutline",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$n, _cache[0] || (_cache[0] = [createStaticVNode('<circle cx="128" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 144v224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M288 160l-64-64l64-64"></path><circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="384" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path d="M240 96h84a60 60 0 0 1 60 60v212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>', 6)]));
  }
});
const _hoisted_1$m = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const HomeIcon = defineComponent({
  name: "HomeOutline",
  render: function render5(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$m,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            d: "M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M400 179V64h-48v69"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$l = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const InfoIcon = defineComponent({
  name: "InformationCircleOutline",
  render: function render6(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$l,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184s184-82.39 184-184S349.61 64 248 64z",
            fill: "none",
            stroke: "currentColor",
            "stroke-miterlimit": "10",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M220 220h32v116"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-miterlimit": "10",
            "stroke-width": "32",
            d: "M208 340h88"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            d: "M248 130a26 26 0 1 0 26 26a26 26 0 0 0-26-26z",
            fill: "currentColor"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$k = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const LogOutOutline = defineComponent({
  name: "LogOutOutline",
  render: function render7(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$k,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M368 336l80-80l-80-80"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M176 256h256"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$j = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const SettingIcon = defineComponent({
  name: "SettingsOutline",
  render: function render8(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$j,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$i = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const DashboardIcon = defineComponent({
  name: "DashboardOutlined",
  render: function render9(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$i,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z",
            fill: "currentColor"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$h = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const LiveTvRound = defineComponent({
  name: "LiveTvRound",
  render: function render10(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$h,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M10.5 17.15l3.98-2.28c.67-.38.67-1.35 0-1.74l-3.98-2.28c-.67-.38-1.5.11-1.5.87v4.55c0 .77.83 1.26 1.5.88zM21 6h-7.59l2.94-2.94c.2-.2.2-.51 0-.71s-.51-.2-.71 0L12 5.99L8.36 2.35c-.2-.2-.51-.2-.71 0s-.2.51 0 .71L10.59 6H3a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8a2 2 0 0 0-2-2zm-1 14H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z",
            fill: "currentColor"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$g = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 20 20"
};
const VideoClip20Regular = defineComponent({
  name: "VideoClip20Regular",
  render: function render11(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$g,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "g",
          {
            fill: "none"
          },
          [
            createBaseVNode("path", {
              d: "M8.765 7.076A.5.5 0 0 0 8 7.5v5.15a.5.5 0 0 0 .776.417l4-2.649a.5.5 0 0 0-.01-.84l-4-2.502zM4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 15.5 3h-11zM3 5.5A1.5 1.5 0 0 1 4.5 4h11A1.5 1.5 0 0 1 17 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5v-9z",
              fill: "currentColor"
            })
          ],
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const defaultUserAvatar = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcwMjFENDNFRDI5NzExRTVCNzAyODZCQTI5MDE1NkEyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcwMjFENDNERDI5NzExRTVCNzAyODZCQTI5MDE1NkEyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJCNTQzREM0QjY5NDk5MDdDQjMzQjk0Qzc2RTkzQUFEQyIgc3RSZWY6ZG9jdW1lbnRJRD0iQjU0M0RDNEI2OTQ5OTA3Q0IzM0I5NEM3NkU5M0FBREMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCABAAEADASIAAhEBAxEB/8QAaAAAAwEBAQAAAAAAAAAAAAAAAAMEAgEHAQEAAAAAAAAAAAAAAAAAAAAAEAACAgEDAgMIAgMAAAAAAAABAgADESESBDETQVEiYXGBoTJCQxRiJHKSMxEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9Air+RTxwrXOEV2CKT03N0EbJx2xzm0fuNUPV+ParHT/AC9UCick78TBd+M/69lrq9rgb923Q4VvSCR44mjw+MzXM6b/ANgAWhyWDBdANrEgD3QHTsT+pR3VuVdtiIa0KkgBT4bfp+Uyq8uoUpuHIGSLrXOx8fawVV2k+fSBRCTWctqajbbRYAHCYQCwkE7Q+EJO3z8ZRA7J73C8rjL3u2WLgU4z3cLn4besoiTvPKXVO2qE7fybiRgj+OAYDoQhAIQhAi7rcjlHi2FuO9LC1FVhuuqGm5sDRS3hnOmstkvJrWy0ItbLc9boOWgGalbH3E5yTjAEfWhStELFyqhSzdWwMZMDcRt/ulu1+IDv5/l9GPnHybjtXZfyLUZzhhSytooNYydn+2pgUwhCAQhCBPWEHMvID7yte4n/AJ49eNnt8/hKIhX/ALj1m0HNastONVwWBfPt0Hwj4GLLK6q2tsYJWgLMx6ADUmZ4y2rQgus7tmMtZjbnOvSc5a2txrBSiW2Eemuz6G9hjoBCEIBCEICH3ryamWtSjKy2WkgOvQoB5g6x8n5qqaA7VNea3R0RPq3KwwR7pRA//9k=";
const _hoisted_1$f = ["title", "onClick"];
const _hoisted_2$a = ["title", "onClick"];
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "CommonWebhookSetting",
  props: /* @__PURE__ */ mergeModels({
    biliupPresetsOptions: {},
    ffmpegOptions: {},
    type: {},
    globalValue: {},
    syncConfigs: {}
  }, {
    "data": {
      default: () => ({
        syncId: "",
        open: true,
        minSize: 0,
        title: "",
        danmu: false,
        autoPartMerge: false,
        hotProgress: false,
        useLiveCover: false,
        partTitleTemplate: "",
        videoHandleTime: ["00:00:00", "23:59:59"],
        uploadHandleTime: ["00:00:00", "23:59:59"],
        afterUploadDeletAction: "none"
      })
    },
    "dataModifiers": {},
    "globalFieldsObj": {
      type: Object,
      default: () => {
      }
    },
    "globalFieldsObjModifiers": {}
  }),
  emits: ["update:data", "update:globalFieldsObj"],
  setup(__props) {
    const props = __props;
    const data = useModel(__props, "data");
    const globalFieldsObj = useModel(__props, "globalFieldsObj");
    const notice = useNotification();
    const { danmuPresetsOptions } = storeToRefs(useDanmuPreset());
    const { userList } = storeToRefs(useUserInfoStore());
    const uploadAfterActionOptions = [
      { label: "无操作", value: "none" },
      { label: "上传后删除", value: "delete" },
      { label: "审核通过后删除", value: "deleteAfterCheck" }
    ];
    const userOptins = computed(() => {
      return [
        {
          value: "",
          label: "无"
        },
        ...userList.value.map((user) => ({
          value: user.uid,
          label: `${user.name}(${user.uid})`
        }))
      ];
    });
    const titleList = ref(uploadTitleTemplate);
    const titleTip = computed(() => {
      const base = `推荐在上传预设设置模板标题，但如果预设标题中不存在占位符，依然使用webhook配置。<br/>
  支持{{title}},{{user}},{{now}}等占位符，如【{{user}}】{{title}}-{{now}}<br/>
  更多模板引擎等高级用法见文档<br/>`;
      return titleList.value.map((item) => {
        return `${item.label}：${item.value}<br/>`;
      }).reduce((prev, cur) => prev + cur, base);
    });
    const titleInput = templateRef("titleInput");
    const setTitleVar = async (value) => {
      if (globalFieldsObj.value.title) return;
      const input = titleInput.value?.inputElRef;
      if (input) {
        const start = input.selectionStart ?? data.value.title.length;
        const end = input.selectionEnd ?? data.value.title.length;
        const oldValue = data.value.title;
        data.value.title = oldValue.slice(0, start) + value + oldValue.slice(end);
        input.focus();
        await nextTick();
        input.setSelectionRange(start + value.length, start + value.length);
      } else {
        data.value.title += value;
      }
    };
    const partTitleList = ref([
      {
        label: "标题",
        value: "{{title}}"
      },
      {
        value: "{{user}}",
        label: "主播名"
      },
      {
        value: "{{roomId}}",
        label: "房间号"
      },
      {
        label: "文件名",
        value: "{{filename}}"
      },
      {
        label: "序号",
        value: "{{index}}"
      },
      {
        label: "弹幕版or纯享版",
        value: "{{hasDanmaStr}}"
      },
      {
        value: "{{yyyy}}",
        label: "年"
      },
      {
        value: "{{MM}}",
        label: "月（补零）"
      },
      {
        value: "{{dd}}",
        label: "日（补零）"
      },
      {
        value: "{{HH}}",
        label: "时（补零）"
      },
      {
        value: "{{mm}}",
        label: "分（补零）"
      },
      {
        value: "{{ss}}",
        label: "秒（补零）"
      }
    ]);
    const partTitleTip = computed(() => {
      const base = `更多模板引擎等高级用法见文档<br/>`;
      return partTitleList.value.map((item) => {
        return `${item.label}：${item.value}<br/>`;
      }).reduce((prev, cur) => prev + cur, base);
    });
    const partTitleInput = templateRef("partTitleInput");
    const setPartTitleVar = async (value) => {
      if (globalFieldsObj.value.partTitleTemplate) return;
      const input = partTitleInput.value?.inputElRef;
      if (input) {
        const start = input.selectionStart ?? data.value.partTitleTemplate.length;
        const end = input.selectionEnd ?? data.value.partTitleTemplate.length;
        const oldValue = data.value.partTitleTemplate;
        data.value.partTitleTemplate = oldValue.slice(0, start) + value + oldValue.slice(end);
        input.focus();
        await nextTick();
        input.setSelectionRange(start + value.length, start + value.length);
      } else {
        data.value.partTitleTemplate += value;
      }
    };
    const previewPartTitle = async (template) => {
      const data2 = await formatWebhookPartTitle(template);
      notice.info({
        title: data2,
        duration: 3e3
      });
    };
    const isRoom = computed(() => props.type === "room");
    watch(
      () => globalFieldsObj.value,
      () => {
        for (const key in globalFieldsObj.value) {
          const value = globalFieldsObj.value[key];
          if (value) {
            data.value[key] = props.globalValue[key];
          }
        }
      },
      {
        deep: true
      }
    );
    const previewTitle = async (template) => {
      const data2 = await formatWebhookTitle(template);
      notice.info({
        title: data2,
        duration: 3e3
      });
    };
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$i;
      const _component_n_input_number = __unplugin_components_0$1;
      const _component_n_checkbox = __unplugin_components_1$2;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_n_switch = __unplugin_components_1$3;
      const _component_n_cascader = __unplugin_components_0$2;
      const _component_n_button = Button;
      const _component_n_select = __unplugin_components_0$3;
      const _component_n_color_picker = __unplugin_components_3$1;
      const _component_n_time_picker = __unplugin_components_7;
      const _component_n_input = __unplugin_components_0$4;
      const _component_n_divider = __unplugin_components_1$4;
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[105] || (_cache[105] = createBaseVNode("h2", null, "文件处理", -1)),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              text: "最小处理文件",
              tip: "小于这个大小的视频不会被之后的流程处理，用于过滤因网络问题导致的分段录播"
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_input_number, {
              value: data.value.minSize,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => data.value.minSize = $event),
              placeholder: "单位MB",
              min: "0",
              disabled: globalFieldsObj.value.minSize
            }, {
              suffix: withCtx(() => _cache[61] || (_cache[61] = [
                createTextVNode(" M ")
              ])),
              _: 1
            }, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.minSize,
              "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => globalFieldsObj.value.minSize = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[62] || (_cache[62] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              text: "转封装为mp4",
              tip: "将视频文件转换为mp4封装格式，开启后，之后的源文件指向的都是转封装的视频"
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.convert2Mp4,
              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => data.value.convert2Mp4 = $event),
              disabled: globalFieldsObj.value.convert2Mp4
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.convert2Mp4,
              "onUpdate:checked": _cache[3] || (_cache[3] = ($event) => globalFieldsObj.value.convert2Mp4 = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[63] || (_cache[63] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        data.value.convert2Mp4 ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              text: "封装后删除源文件（废弃）",
              tip: "该选项已废弃，请使用「处理后操作」中的「删除转封装为mp4的原文件」"
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.removeSourceAferrConvert2Mp4,
              "onUpdate:value": _cache[4] || (_cache[4] = ($event) => data.value.removeSourceAferrConvert2Mp4 = $event),
              disabled: globalFieldsObj.value.removeSourceAferrConvert2Mp4
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.removeSourceAferrConvert2Mp4,
              "onUpdate:checked": _cache[5] || (_cache[5] = ($event) => globalFieldsObj.value.removeSourceAferrConvert2Mp4 = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[64] || (_cache[64] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              text: "弹幕压制",
              tip: "将弹幕文件硬编码到视频中，如果你开启了该选项，那么必然要选择视频以及弹幕预设"
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.danmu,
              "onUpdate:value": _cache[6] || (_cache[6] = ($event) => data.value.danmu = $event),
              disabled: globalFieldsObj.value.danmu
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.danmu,
              "onUpdate:checked": _cache[7] || (_cache[7] = ($event) => globalFieldsObj.value.danmu = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[65] || (_cache[65] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              text: "视频预设",
              tip: "如果只选择视频预设却未打开弹幕压制，将只会对视频进行转码，<b>确保这是你需要的选项</b>"
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_cascader, {
              value: data.value.ffmpegPreset,
              "onUpdate:value": _cache[8] || (_cache[8] = ($event) => data.value.ffmpegPreset = $event),
              placeholder: "请选择预设",
              "expand-trigger": "click",
              options: _ctx.ffmpegOptions,
              "check-strategy": "child",
              "show-path": false,
              filterable: true,
              disabled: globalFieldsObj.value.ffmpegPreset,
              style: { "margin-right": "10px", "width": "200px" },
              clearable: ""
            }, null, 8, ["value", "options", "disabled"]),
            data.value.ffmpegPreset && !globalFieldsObj.value.ffmpegPreset ? (openBlock(), createBlock(_component_n_button, {
              key: 0,
              text: "",
              onClick: _cache[9] || (_cache[9] = ($event) => data.value.ffmpegPreset = null)
            }, {
              default: withCtx(() => _cache[66] || (_cache[66] = [
                createTextVNode("清除")
              ])),
              _: 1
            })) : createCommentVNode("", true),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 1,
              checked: globalFieldsObj.value.ffmpegPreset,
              "onUpdate:checked": _cache[10] || (_cache[10] = ($event) => globalFieldsObj.value.ffmpegPreset = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[67] || (_cache[67] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              text: "弹幕预设",
              tip: "如果只选择弹幕预设却未打开弹幕压制，将只会对弹幕进行处理，<b>确保这是你需要的选项</b>"
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_select, {
              value: data.value.danmuPreset,
              "onUpdate:value": _cache[11] || (_cache[11] = ($event) => data.value.danmuPreset = $event),
              options: unref(danmuPresetsOptions),
              placeholder: "选择预设",
              disabled: globalFieldsObj.value.danmuPreset,
              style: { "margin-right": "10px", "width": "200px" },
              clearable: ""
            }, null, 8, ["value", "options", "disabled"]),
            data.value.danmuPreset && !globalFieldsObj.value.danmuPreset ? (openBlock(), createBlock(_component_n_button, {
              key: 0,
              text: "",
              onClick: _cache[12] || (_cache[12] = ($event) => data.value.danmuPreset = null)
            }, {
              default: withCtx(() => _cache[68] || (_cache[68] = [
                createTextVNode("清除")
              ])),
              _: 1
            })) : createCommentVNode("", true),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 1,
              checked: globalFieldsObj.value.danmuPreset,
              "onUpdate:checked": _cache[13] || (_cache[13] = ($event) => globalFieldsObj.value.danmuPreset = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[69] || (_cache[69] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        data.value.danmu && data.value.ffmpegPreset && data.value.danmuPreset ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_component_n_form_item, { label: "高能进度条" }, {
            default: withCtx(() => [
              createVNode(_component_n_switch, {
                value: data.value.hotProgress,
                "onUpdate:value": _cache[14] || (_cache[14] = ($event) => data.value.hotProgress = $event),
                disabled: globalFieldsObj.value.hotProgress
              }, null, 8, ["value", "disabled"]),
              unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                key: 0,
                checked: globalFieldsObj.value.hotProgress,
                "onUpdate:checked": _cache[15] || (_cache[15] = ($event) => globalFieldsObj.value.hotProgress = $event),
                class: "global-checkbox"
              }, {
                default: withCtx(() => _cache[70] || (_cache[70] = [
                  createTextVNode("全局")
                ])),
                _: 1
              }, 8, ["checked"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          data.value.hotProgress ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "采样间隔",
                  tip: "每隔一段时间对弹幕进行一次汇总计算，影响波峰"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: data.value.hotProgressSample,
                  "onUpdate:value": _cache[16] || (_cache[16] = ($event) => data.value.hotProgressSample = $event),
                  placeholder: "单位秒",
                  min: "1",
                  disabled: globalFieldsObj.value.hotProgressSample
                }, {
                  suffix: withCtx(() => _cache[71] || (_cache[71] = [
                    createTextVNode(" 秒 ")
                  ])),
                  _: 1
                }, 8, ["value", "disabled"]),
                unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                  key: 0,
                  checked: globalFieldsObj.value.hotProgressSample,
                  "onUpdate:checked": _cache[17] || (_cache[17] = ($event) => globalFieldsObj.value.hotProgressSample = $event),
                  class: "global-checkbox"
                }, {
                  default: withCtx(() => _cache[72] || (_cache[72] = [
                    createTextVNode("全局")
                  ])),
                  _: 1
                }, 8, ["checked"])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[73] || (_cache[73] = [
                createBaseVNode("span", { class: "inline-flex" }, " 高度 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: data.value.hotProgressHeight,
                  "onUpdate:value": _cache[18] || (_cache[18] = ($event) => data.value.hotProgressHeight = $event),
                  placeholder: "单位像素",
                  min: "10",
                  disabled: globalFieldsObj.value.hotProgressHeight
                }, {
                  suffix: withCtx(() => _cache[74] || (_cache[74] = [
                    createTextVNode(" 像素 ")
                  ])),
                  _: 1
                }, 8, ["value", "disabled"]),
                unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                  key: 0,
                  checked: globalFieldsObj.value.hotProgressHeight,
                  "onUpdate:checked": _cache[19] || (_cache[19] = ($event) => globalFieldsObj.value.hotProgressHeight = $event),
                  class: "global-checkbox"
                }, {
                  default: withCtx(() => _cache[75] || (_cache[75] = [
                    createTextVNode("全局")
                  ])),
                  _: 1
                }, 8, ["checked"])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[76] || (_cache[76] = [
                createBaseVNode("span", { class: "inline-flex" }, " 默认颜色 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_color_picker, {
                  value: data.value.hotProgressColor,
                  "onUpdate:value": _cache[20] || (_cache[20] = ($event) => data.value.hotProgressColor = $event),
                  disabled: globalFieldsObj.value.hotProgressColor,
                  style: { "margin-right": "10px" }
                }, null, 8, ["value", "disabled"]),
                unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                  key: 0,
                  checked: globalFieldsObj.value.hotProgressColor,
                  "onUpdate:checked": _cache[21] || (_cache[21] = ($event) => globalFieldsObj.value.hotProgressColor = $event),
                  class: "global-checkbox"
                }, {
                  default: withCtx(() => _cache[77] || (_cache[77] = [
                    createTextVNode("全局")
                  ])),
                  _: 1
                }, 8, ["checked"])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[78] || (_cache[78] = [
                createBaseVNode("span", { class: "inline-flex" }, " 覆盖颜色 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_color_picker, {
                  value: data.value.hotProgressFillColor,
                  "onUpdate:value": _cache[22] || (_cache[22] = ($event) => data.value.hotProgressFillColor = $event),
                  disabled: globalFieldsObj.value.hotProgressFillColor,
                  style: { "margin-right": "10px" }
                }, null, 8, ["value", "disabled"]),
                unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                  key: 0,
                  checked: globalFieldsObj.value.hotProgressFillColor,
                  "onUpdate:checked": _cache[23] || (_cache[23] = ($event) => globalFieldsObj.value.hotProgressFillColor = $event),
                  class: "global-checkbox"
                }, {
                  default: withCtx(() => _cache[79] || (_cache[79] = [
                    createTextVNode("全局")
                  ])),
                  _: 1
                }, 8, ["checked"])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ], 64)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              text: "同步器",
              tip: "选择要使用的同步器，用于将视频同步到网盘"
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_select, {
              value: data.value.syncId,
              "onUpdate:value": _cache[24] || (_cache[24] = ($event) => data.value.syncId = $event),
              options: props.syncConfigs,
              "label-field": "name",
              "value-field": "id",
              disabled: globalFieldsObj.value.syncId,
              style: { "margin-right": "10px", "width": "200px" },
              clearable: ""
            }, null, 8, ["value", "options", "disabled"]),
            data.value.syncId && !globalFieldsObj.value.syncId ? (openBlock(), createBlock(_component_n_button, {
              key: 0,
              text: "",
              onClick: _cache[25] || (_cache[25] = ($event) => data.value.syncId = null)
            }, {
              default: withCtx(() => _cache[80] || (_cache[80] = [
                createTextVNode("清除")
              ])),
              _: 1
            })) : createCommentVNode("", true),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 1,
              checked: globalFieldsObj.value.syncId,
              "onUpdate:checked": _cache[26] || (_cache[26] = ($event) => globalFieldsObj.value.syncId = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[81] || (_cache[81] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              text: "处理后操作",
              tip: "转换以及同步操作后都会执行本步骤，如果你未操作相关文件，也请不要选择相关文件删除"
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_select, {
              value: data.value.afterConvertAction,
              "onUpdate:value": _cache[27] || (_cache[27] = ($event) => data.value.afterConvertAction = $event),
              options: [
                { label: "删除不符合最小处理大小的文件", value: "removeSmallFile" },
                // { label: '删除FLV修复后的原文件', value: 'removeAfterFlvRepair' },
                { label: "删除转封装为mp4的原文件", value: "removeAfterConvert2Mp4" },
                { label: "删除视频处理或同步后的原文件", value: "removeVideo" },
                { label: "删除弹幕转换或同步后的原文件", value: "removeXml" }
              ],
              multiple: "",
              disabled: globalFieldsObj.value.afterConvertAction,
              style: { "margin-right": "10px" },
              placeholder: "主要用来删除文件，不选就是不做处理"
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.afterConvertAction,
              "onUpdate:checked": _cache[28] || (_cache[28] = ($event) => globalFieldsObj.value.afterConvertAction = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[82] || (_cache[82] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              text: "限制处理时间",
              tip: "开启后，只会在某段时间执行处理，仅限视频"
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.limitVideoConvertTime,
              "onUpdate:value": _cache[29] || (_cache[29] = ($event) => data.value.limitVideoConvertTime = $event),
              disabled: globalFieldsObj.value.limitVideoConvertTime
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.limitVideoConvertTime,
              "onUpdate:checked": _cache[30] || (_cache[30] = ($event) => globalFieldsObj.value.limitVideoConvertTime = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[83] || (_cache[83] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        data.value.limitVideoConvertTime ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
          label: withCtx(() => _cache[84] || (_cache[84] = [
            createBaseVNode("span", { class: "inline-flex" }, " 允许处理时间段 ", -1)
          ])),
          default: withCtx(() => [
            createVNode(_component_n_time_picker, {
              "formatted-value": data.value.videoHandleTime[0],
              "onUpdate:formattedValue": _cache[31] || (_cache[31] = ($event) => data.value.videoHandleTime[0] = $event),
              disabled: globalFieldsObj.value.videoHandleTime
            }, null, 8, ["formatted-value", "disabled"]),
            _cache[86] || (_cache[86] = createTextVNode(" ~ ")),
            createVNode(_component_n_time_picker, {
              "formatted-value": data.value.videoHandleTime[1],
              "onUpdate:formattedValue": _cache[32] || (_cache[32] = ($event) => data.value.videoHandleTime[1] = $event),
              disabled: globalFieldsObj.value.videoHandleTime
            }, null, 8, ["formatted-value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.videoHandleTime,
              "onUpdate:checked": _cache[33] || (_cache[33] = ($event) => globalFieldsObj.value.videoHandleTime = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[85] || (_cache[85] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        _cache[106] || (_cache[106] = createBaseVNode("h2", null, "上传配置", -1)),
        createVNode(_component_n_form_item, { label: "上传账号" }, {
          default: withCtx(() => [
            createVNode(_component_n_select, {
              value: data.value.uid,
              "onUpdate:value": _cache[34] || (_cache[34] = ($event) => data.value.uid = $event),
              options: unref(userOptins),
              placeholder: "请选择账号",
              disabled: globalFieldsObj.value.uid,
              style: { "margin-right": "10px" }
            }, null, 8, ["value", "options", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.uid,
              "onUpdate:checked": _cache[35] || (_cache[35] = ($event) => globalFieldsObj.value.uid = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[87] || (_cache[87] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, { label: "预设" }, {
          default: withCtx(() => [
            createVNode(_component_n_select, {
              value: data.value.uploadPresetId,
              "onUpdate:value": _cache[36] || (_cache[36] = ($event) => data.value.uploadPresetId = $event),
              options: props.biliupPresetsOptions,
              placeholder: "请选择",
              disabled: globalFieldsObj.value.uploadPresetId,
              style: { "margin-right": "10px" }
            }, null, 8, ["value", "options", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.uploadPresetId,
              "onUpdate:checked": _cache[37] || (_cache[37] = ($event) => globalFieldsObj.value.uploadPresetId = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[88] || (_cache[88] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              tip: unref(titleTip),
              text: "视频标题"
            }, null, 8, ["tip"])
          ]),
          feedback: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(titleList), (item) => {
              return openBlock(), createElementBlock("span", {
                key: item.value,
                title: item.label,
                class: normalizeClass(["title-var", {
                  disabled: globalFieldsObj.value.title
                }]),
                onClick: ($event) => setTitleVar(item.value)
              }, toDisplayString(item.value), 11, _hoisted_1$f);
            }), 128))
          ]),
          default: withCtx(() => [
            createVNode(_component_n_input, {
              ref_key: "titleInput",
              ref: titleInput,
              value: data.value.title,
              "onUpdate:value": _cache[38] || (_cache[38] = ($event) => data.value.title = $event),
              placeholder: "请输入视频标题,支持{{title}},{{user}},{{now}}等占位符",
              clearable: "",
              disabled: globalFieldsObj.value.title,
              style: { "margin-right": "10px" },
              spellcheck: "false"
            }, null, 8, ["value", "disabled"]),
            createVNode(_component_n_button, {
              style: { "margin-right": "10px" },
              onClick: _cache[39] || (_cache[39] = ($event) => previewTitle(data.value.title))
            }, {
              default: withCtx(() => _cache[89] || (_cache[89] = [
                createTextVNode("预览")
              ])),
              _: 1
            }),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.title,
              "onUpdate:checked": _cache[40] || (_cache[40] = ($event) => globalFieldsObj.value.title = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[90] || (_cache[90] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, { style: { "margin-top": "15px" } }, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              text: "使用直播封面",
              tip: "使用直播封面作为视频封面，默认寻找视频目录下文件名为'视频文件名+.cover.jpg|.jpg的文件"
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.useLiveCover,
              "onUpdate:value": _cache[41] || (_cache[41] = ($event) => data.value.useLiveCover = $event),
              disabled: globalFieldsObj.value.useLiveCover
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.useLiveCover,
              "onUpdate:checked": _cache[42] || (_cache[42] = ($event) => globalFieldsObj.value.useLiveCover = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[91] || (_cache[91] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              text: "断播续传",
              tip: "开启后，会将某主播一场直播上传到同一个视频中"
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.autoPartMerge,
              "onUpdate:value": _cache[43] || (_cache[43] = ($event) => data.value.autoPartMerge = $event),
              disabled: globalFieldsObj.value.autoPartMerge
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.autoPartMerge,
              "onUpdate:checked": _cache[44] || (_cache[44] = ($event) => globalFieldsObj.value.autoPartMerge = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[92] || (_cache[92] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        data.value.autoPartMerge ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createVNode(_component_Tip, {
                text: "分p间隔时间",
                tip: "检测直播是否为同一场的时间间隔，避免因网络中断原因出现错误分P"
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_n_input_number, {
                value: data.value.partMergeMinute,
                "onUpdate:value": _cache[45] || (_cache[45] = ($event) => data.value.partMergeMinute = $event),
                placeholder: "请输入分钟",
                min: "0.1",
                disabled: globalFieldsObj.value.partMergeMinute
              }, {
                suffix: withCtx(() => _cache[93] || (_cache[93] = [
                  createTextVNode(" 分钟 ")
                ])),
                _: 1
              }, 8, ["value", "disabled"]),
              unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                key: 0,
                checked: globalFieldsObj.value.partMergeMinute,
                "onUpdate:checked": _cache[46] || (_cache[46] = ($event) => globalFieldsObj.value.partMergeMinute = $event),
                class: "global-checkbox"
              }, {
                default: withCtx(() => _cache[94] || (_cache[94] = [
                  createTextVNode("全局")
                ])),
                _: 1
              }, 8, ["checked"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createVNode(_component_Tip, {
                tip: unref(partTitleTip),
                text: "分P标题"
              }, null, 8, ["tip"])
            ]),
            feedback: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(partTitleList), (item) => {
                return openBlock(), createElementBlock("span", {
                  key: item.value,
                  title: item.label,
                  class: normalizeClass(["title-var", {
                    disabled: globalFieldsObj.value.partTitleTemplate
                  }]),
                  onClick: ($event) => setPartTitleVar(item.value)
                }, toDisplayString(item.value), 11, _hoisted_2$a);
              }), 128))
            ]),
            default: withCtx(() => [
              createVNode(_component_n_input, {
                ref_key: "partTitleInput",
                ref: partTitleInput,
                value: data.value.partTitleTemplate,
                "onUpdate:value": _cache[47] || (_cache[47] = ($event) => data.value.partTitleTemplate = $event),
                placeholder: "请输入分P标题",
                clearable: "",
                disabled: globalFieldsObj.value.partTitleTemplate,
                style: { "margin-right": "10px" },
                spellcheck: "false"
              }, null, 8, ["value", "disabled"]),
              createVNode(_component_n_button, {
                style: { "margin-right": "10px" },
                onClick: _cache[48] || (_cache[48] = ($event) => previewPartTitle(data.value.partTitleTemplate))
              }, {
                default: withCtx(() => _cache[95] || (_cache[95] = [
                  createTextVNode("预览")
                ])),
                _: 1
              }),
              unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                key: 0,
                checked: globalFieldsObj.value.partTitleTemplate,
                "onUpdate:checked": _cache[49] || (_cache[49] = ($event) => globalFieldsObj.value.partTitleTemplate = $event),
                class: "global-checkbox"
              }, {
                default: withCtx(() => _cache[96] || (_cache[96] = [
                  createTextVNode("全局")
                ])),
                _: 1
              }, 8, ["checked"])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 64)) : createCommentVNode("", true),
        createVNode(_component_n_form_item, { style: { "margin-top": "15px" } }, {
          label: withCtx(() => _cache[97] || (_cache[97] = [
            createTextVNode(" 上传后操作 ")
          ])),
          default: withCtx(() => [
            createVNode(_component_n_select, {
              value: data.value.afterUploadDeletAction,
              "onUpdate:value": _cache[50] || (_cache[50] = ($event) => data.value.afterUploadDeletAction = $event),
              options: uploadAfterActionOptions,
              disabled: globalFieldsObj.value.afterUploadDeletAction,
              style: { "margin-right": "10px" }
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.afterUploadDeletAction,
              "onUpdate:checked": _cache[51] || (_cache[51] = ($event) => globalFieldsObj.value.afterUploadDeletAction = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[98] || (_cache[98] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              text: "限制上传时间",
              tip: "开启后，支持只在某段时间执行上传操作"
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.limitUploadTime,
              "onUpdate:value": _cache[52] || (_cache[52] = ($event) => data.value.limitUploadTime = $event),
              disabled: globalFieldsObj.value.limitUploadTime
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.limitUploadTime,
              "onUpdate:checked": _cache[53] || (_cache[53] = ($event) => globalFieldsObj.value.limitUploadTime = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[99] || (_cache[99] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        data.value.limitUploadTime ? (openBlock(), createBlock(_component_n_form_item, { key: 4 }, {
          label: withCtx(() => _cache[100] || (_cache[100] = [
            createBaseVNode("span", { class: "inline-flex" }, " 允许上传时间段 ", -1)
          ])),
          default: withCtx(() => [
            createVNode(_component_n_time_picker, {
              "formatted-value": data.value.uploadHandleTime[0],
              "onUpdate:formattedValue": _cache[54] || (_cache[54] = ($event) => data.value.uploadHandleTime[0] = $event),
              disabled: globalFieldsObj.value.uploadHandleTime
            }, null, 8, ["formatted-value", "disabled"]),
            _cache[102] || (_cache[102] = createTextVNode(" ~ ")),
            createVNode(_component_n_time_picker, {
              "formatted-value": data.value.uploadHandleTime[1],
              "onUpdate:formattedValue": _cache[55] || (_cache[55] = ($event) => data.value.uploadHandleTime[1] = $event),
              disabled: globalFieldsObj.value.uploadHandleTime
            }, null, 8, ["formatted-value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.uploadHandleTime,
              "onUpdate:checked": _cache[56] || (_cache[56] = ($event) => globalFieldsObj.value.uploadHandleTime = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[101] || (_cache[101] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        data.value.uid ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
          createVNode(_component_n_divider),
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createVNode(_component_Tip, {
                text: "上传非弹幕版",
                tip: "如果你没有压制弹幕版，请不要勾选该设置！用于在上传弹幕版后同时上传一份非弹幕版本，大部分配置与上面的共用，不含「上传后操作」选项\n            <br/>视频标题去上传预设中配置，标题模板不要与弹幕版完全一致，不然b站可能会上传错误"
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_n_switch, {
                value: data.value.uploadNoDanmu,
                "onUpdate:value": _cache[57] || (_cache[57] = ($event) => data.value.uploadNoDanmu = $event),
                disabled: globalFieldsObj.value.uploadNoDanmu
              }, null, 8, ["value", "disabled"]),
              unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                key: 0,
                checked: globalFieldsObj.value.uploadNoDanmu,
                "onUpdate:checked": _cache[58] || (_cache[58] = ($event) => globalFieldsObj.value.uploadNoDanmu = $event),
                class: "global-checkbox"
              }, {
                default: withCtx(() => _cache[103] || (_cache[103] = [
                  createTextVNode("全局")
                ])),
                _: 1
              }, 8, ["checked"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          data.value.uploadNoDanmu ? (openBlock(), createBlock(_component_n_form_item, {
            key: 0,
            label: "非弹幕版上传预设"
          }, {
            default: withCtx(() => [
              createVNode(_component_n_select, {
                value: data.value.noDanmuVideoPreset,
                "onUpdate:value": _cache[59] || (_cache[59] = ($event) => data.value.noDanmuVideoPreset = $event),
                options: props.biliupPresetsOptions,
                placeholder: "请选择",
                disabled: globalFieldsObj.value.noDanmuVideoPreset,
                style: { "margin-right": "10px" }
              }, null, 8, ["value", "options", "disabled"]),
              unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                key: 0,
                checked: globalFieldsObj.value.noDanmuVideoPreset,
                "onUpdate:checked": _cache[60] || (_cache[60] = ($event) => globalFieldsObj.value.noDanmuVideoPreset = $event),
                class: "global-checkbox"
              }, {
                default: withCtx(() => _cache[104] || (_cache[104] = [
                  createTextVNode("全局")
                ])),
                _: 1
              }, 8, ["checked"])) : createCommentVNode("", true)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const CommonSetting = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-7345a390"]]);
const _hoisted_1$e = { class: "inline-flex" };
const _hoisted_2$9 = { class: "inline-flex" };
const _hoisted_3$6 = { class: "footer" };
const _hoisted_4$6 = { class: "inline-flex" };
const _hoisted_5$6 = { class: "footer" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "RoomSettingDialog",
  props: /* @__PURE__ */ mergeModels({
    type: {},
    biliupPresetsOptions: {},
    ffmpegOptions: {},
    globalValue: {},
    syncConfigs: {}
  }, {
    "visible": {
      type: Boolean,
      default: false
    },
    "visibleModifiers": {},
    "data": {
      default: () => {
      }
    },
    "dataModifiers": {},
    "globalFieldsObj": {
      type: Object,
      default: () => {
      }
    },
    "globalFieldsObjModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["save", "delete"], ["update:visible", "update:data", "update:globalFieldsObj"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const roomDetailVisible = useModel(__props, "visible");
    const data = useModel(__props, "data");
    const globalFieldsObj = useModel(__props, "globalFieldsObj");
    const confirm = useConfirm();
    const emits = __emit;
    const notice = useNotification();
    const saveRoomDetail = async () => {
      if (!data.value.id) {
        notice.error({
          title: "请输入房间号",
          duration: 1e3
        });
        return;
      }
      if (props.type === "add" && !/^\d+$/.test(data.value.id)) {
        const [status] = await confirm.warning({
          content: "确认输入的房间号是否正确？非直播间链接，短号等"
        });
        if (!status) return;
      }
      data.value.noGlobal = Object.entries(globalFieldsObj.value).filter(([, value]) => {
        return !value;
      }).map(([key]) => key);
      emits("save", data.value);
      roomDetailVisible.value = false;
    };
    const deleteRoom = async () => {
      const [status] = await confirm.warning({
        content: "是否确认删除？"
      });
      if (!status) return;
      emits("delete", data.value.id);
      roomDetailVisible.value = false;
    };
    const copyData = ref({});
    const copyVisible = ref(false);
    const copyRoom = () => {
      const cloneData = cloneDeep(data.value);
      cloneData.id = "";
      cloneData.remark = "";
      copyData.value = cloneData;
      copyVisible.value = true;
    };
    const saveCopyRoom = async () => {
      if (!copyData.value.id) {
        notice.error({
          title: "请输入房间号",
          duration: 1e3
        });
        return;
      }
      if (!/^\d+$/.test(copyData.value.id)) {
        const [status] = await confirm.warning({
          content: "确认输入的房间号是否正确？非直播间链接，短号等"
        });
        if (!status) return;
      }
      console.log("copyData.value", copyData.value);
      emits("save", copyData.value);
      roomDetailVisible.value = false;
      copyVisible.value = false;
    };
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_0$4;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_Tip = _sfc_main$i;
      const _component_n_switch = __unplugin_components_1$3;
      const _component_n_form = __unplugin_components_5;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_4;
      const _component_n_modal = __unplugin_components_3$2;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_n_modal, {
          show: roomDetailVisible.value,
          "onUpdate:show": _cache[6] || (_cache[6] = ($event) => roomDetailVisible.value = $event),
          "mask-closable": false
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              bordered: false,
              size: "small",
              role: "dialog",
              "aria-modal": "true",
              style: { "width": "800px" }
            }, {
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_3$6, [
                  props.type === "edit" ? (openBlock(), createBlock(_component_n_button, {
                    key: 0,
                    text: "",
                    type: "error",
                    class: "btn",
                    onClick: deleteRoom
                  }, {
                    default: withCtx(() => _cache[13] || (_cache[13] = [
                      createTextVNode(" 删除 ")
                    ])),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_n_button, {
                    class: "btn",
                    onClick: _cache[5] || (_cache[5] = ($event) => roomDetailVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[14] || (_cache[14] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  props.type !== "add" ? (openBlock(), createBlock(_component_n_button, {
                    key: 1,
                    type: "info",
                    class: "btn",
                    onClick: copyRoom
                  }, {
                    default: withCtx(() => _cache[15] || (_cache[15] = [
                      createTextVNode(" 复制 ")
                    ])),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_n_button, {
                    type: "primary",
                    class: "btn",
                    onClick: saveRoomDetail
                  }, {
                    default: withCtx(() => _cache[16] || (_cache[16] = [
                      createTextVNode(" 确认 ")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_form, {
                  "label-placement": "left",
                  "label-width": 130
                }, {
                  default: withCtx(() => [
                    props.type === "add" ? (openBlock(), createBlock(_component_n_form_item, {
                      key: 0,
                      label: "房间号"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: data.value.id,
                          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => data.value.id = $event),
                          placeholder: "请输入房间号"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createBaseVNode("span", _hoisted_1$e, [
                          _cache[11] || (_cache[11] = createTextVNode(" 开启 ")),
                          createVNode(_component_Tip, { tip: "直播间是否开启webhook，覆盖黑名单配置" })
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: data.value.open,
                          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => data.value.open = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createBaseVNode("span", _hoisted_2$9, [
                          _cache[12] || (_cache[12] = createTextVNode(" 备注 ")),
                          createVNode(_component_Tip, { tip: "仅用于提示" })
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: data.value.remark,
                          "onUpdate:value": _cache[2] || (_cache[2] = ($event) => data.value.remark = $event),
                          placeholder: "请输入备注",
                          clearable: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(CommonSetting, {
                      data: data.value,
                      "onUpdate:data": _cache[3] || (_cache[3] = ($event) => data.value = $event),
                      "global-fields-obj": globalFieldsObj.value,
                      "onUpdate:globalFieldsObj": _cache[4] || (_cache[4] = ($event) => globalFieldsObj.value = $event),
                      "biliup-presets-options": props.biliupPresetsOptions,
                      "ffmpeg-options": props.ffmpegOptions,
                      "global-value": props.globalValue,
                      syncConfigs: props.syncConfigs,
                      type: "room"
                    }, null, 8, ["data", "global-fields-obj", "biliup-presets-options", "ffmpeg-options", "global-value", "syncConfigs"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(_component_n_modal, {
          show: unref(copyVisible),
          "onUpdate:show": _cache[10] || (_cache[10] = ($event) => isRef(copyVisible) ? copyVisible.value = $event : null),
          "mask-closable": false
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              bordered: false,
              size: "small",
              role: "dialog",
              "aria-modal": "true",
              style: { "width": "400px" }
            }, {
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_5$6, [
                  createVNode(_component_n_button, {
                    class: "btn",
                    onClick: _cache[9] || (_cache[9] = ($event) => copyVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[18] || (_cache[18] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    class: "btn",
                    onClick: saveCopyRoom
                  }, {
                    default: withCtx(() => _cache[19] || (_cache[19] = [
                      createTextVNode(" 确认 ")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_form, {
                  "label-placement": "left",
                  "label-width": "auto"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, { label: "房间号" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(copyData).id,
                          "onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(copyData).id = $event),
                          placeholder: "请输入房间号"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createBaseVNode("span", _hoisted_4$6, [
                          _cache[17] || (_cache[17] = createTextVNode(" 备注 ")),
                          createVNode(_component_Tip, { tip: "仅用于提示" })
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(copyData).remark,
                          "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(copyData).remark = $event),
                          placeholder: "请输入备注",
                          clearable: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
});
const RoomSettingDialog = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-ba2bea4a"]]);
const _hoisted_1$d = { class: "inline-flex" };
const _hoisted_2$8 = { class: "inline-flex" };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "NotificationSetting",
  props: {
    "data": {
      default: () => {
      }
    },
    "dataModifiers": {}
  },
  emits: ["update:data"],
  setup(__props) {
    const config$1 = useModel(__props, "data");
    const typeOptions = [
      { value: NotificationType.system, label: "系统通知" },
      { value: NotificationType.mail, label: "邮箱" },
      { value: NotificationType.tg, label: "tg bot" },
      { value: NotificationType.server, label: "server酱" },
      { value: NotificationType.ntfy, label: "ntfy" },
      { value: NotificationType.allInOne, label: "push all in cloud" },
      { value: NotificationType.customHttp, label: "自定义HTTP" }
    ];
    const notice = useNotification();
    const notifyTest = async () => {
      await config.notifyTest(
        "我是一条测试信息",
        "我是一条测试信息",
        cloneDeep(config$1.value),
        config$1.value.notification.setting.type
      );
      notice.info({
        title: "已尝试发送测试信息，请注意查收",
        duration: 2e3
      });
    };
    return (_ctx, _cache) => {
      const _component_n_select = __unplugin_components_0$3;
      const _component_n_button = Button;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_Tip = _sfc_main$i;
      const _component_n_input = __unplugin_components_0$4;
      const _component_n_switch = __unplugin_components_1$3;
      const _component_n_divider = __unplugin_components_1$4;
      const _component_n_checkbox = __unplugin_components_1$2;
      const _component_n_space = __unplugin_components_3$3;
      const _component_n_checkbox_group = __unplugin_components_2$2;
      const _component_n_input_number = __unplugin_components_0$1;
      const _component_n_form = __unplugin_components_5;
      return openBlock(), createBlock(_component_n_form, {
        "label-placement": "left",
        "label-width": 120
      }, {
        default: withCtx(() => [
          createVNode(_component_n_form_item, { label: "通知类型" }, {
            default: withCtx(() => [
              createVNode(_component_n_select, {
                value: config$1.value.notification.setting.type,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => config$1.value.notification.setting.type = $event),
                options: typeOptions,
                placeholder: "请选择通知类型",
                clearable: ""
              }, null, 8, ["value"]),
              config$1.value.notification.setting.type ? (openBlock(), createBlock(_component_n_button, {
                key: 0,
                type: "primary",
                style: { "margin-left": "10px" },
                onClick: notifyTest
              }, {
                default: withCtx(() => _cache[29] || (_cache[29] = [
                  createTextVNode(" 测试 ")
                ])),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          config$1.value.notification.setting.type === unref(NotificationType).mail ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_1$d, [
                  _cache[30] || (_cache[30] = createBaseVNode("span", null, " 服务器地址 ", -1)),
                  createVNode(_component_Tip, { tip: "请自行查询并配置服务商的smtp服务器" })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.mail.host,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => config$1.value.notification.setting.mail.host = $event),
                  placeholder: "请输入服务器地址"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[31] || (_cache[31] = [
                createBaseVNode("span", { class: "inline-flex" }, " 端口号 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.mail.port,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => config$1.value.notification.setting.mail.port = $event),
                  placeholder: "请输入端口号"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[32] || (_cache[32] = [
                createBaseVNode("span", { class: "inline-flex" }, " TLS ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_switch, {
                  value: config$1.value.notification.setting.mail.secure,
                  "onUpdate:value": _cache[3] || (_cache[3] = ($event) => config$1.value.notification.setting.mail.secure = $event)
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[33] || (_cache[33] = [
                createBaseVNode("span", { class: "inline-flex" }, " 邮箱账户 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.mail.user,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => config$1.value.notification.setting.mail.user = $event),
                  placeholder: "请输入邮箱账户"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[34] || (_cache[34] = [
                createBaseVNode("span", { class: "inline-flex" }, " 授权码 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.mail.pass,
                  "onUpdate:value": _cache[5] || (_cache[5] = ($event) => config$1.value.notification.setting.mail.pass = $event),
                  placeholder: "请输入授权码",
                  type: "password",
                  "show-password-on": "click"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[35] || (_cache[35] = [
                createBaseVNode("span", { class: "inline-flex" }, " 收件人邮箱 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.mail.to,
                  "onUpdate:value": _cache[6] || (_cache[6] = ($event) => config$1.value.notification.setting.mail.to = $event),
                  placeholder: "请输入收件人邮箱"
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ], 64)) : config$1.value.notification.setting.type === unref(NotificationType).server ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
            label: withCtx(() => [
              createBaseVNode("span", _hoisted_2$8, [
                _cache[36] || (_cache[36] = createTextVNode(" key ")),
                createVNode(_component_Tip, { tip: "详情请参考官网：https://sct.ftqq.com/" })
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n_input, {
                value: config$1.value.notification.setting.server.key,
                "onUpdate:value": _cache[7] || (_cache[7] = ($event) => config$1.value.notification.setting.server.key = $event),
                type: "password",
                placeholder: "请输入server酱key",
                "show-password-on": "click"
              }, null, 8, ["value"])
            ]),
            _: 1
          })) : config$1.value.notification.setting.type === unref(NotificationType).tg ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[37] || (_cache[37] = [
                createBaseVNode("span", { class: "inline-flex" }, " token ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.tg.key,
                  "onUpdate:value": _cache[8] || (_cache[8] = ($event) => config$1.value.notification.setting.tg.key = $event),
                  placeholder: "请输入tg bot的token",
                  type: "password",
                  "show-password-on": "click"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[38] || (_cache[38] = [
                createBaseVNode("span", { class: "inline-flex" }, " chat_id ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.tg.chat_id,
                  "onUpdate:value": _cache[9] || (_cache[9] = ($event) => config$1.value.notification.setting.tg.chat_id = $event),
                  placeholder: "请输入chat_id"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "反代url",
                  tip: "默认使用官方api，如：https://api.telegram.org，带上协议，无须后缀"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.tg.proxyUrl,
                  "onUpdate:value": _cache[10] || (_cache[10] = ($event) => config$1.value.notification.setting.tg.proxyUrl = $event),
                  placeholder: "默认使用官方api"
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ], 64)) : config$1.value.notification.setting.type === unref(NotificationType).ntfy ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[39] || (_cache[39] = [
                createBaseVNode("span", { class: "inline-flex" }, " 服务器地址 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.ntfy.url,
                  "onUpdate:value": _cache[11] || (_cache[11] = ($event) => config$1.value.notification.setting.ntfy.url = $event),
                  placeholder: "请输入服务器地址"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[40] || (_cache[40] = [
                createBaseVNode("span", { class: "inline-flex" }, " topic ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.ntfy.topic,
                  "onUpdate:value": _cache[12] || (_cache[12] = ($event) => config$1.value.notification.setting.ntfy.topic = $event),
                  placeholder: "请输入topic"
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ], 64)) : config$1.value.notification.setting.type === unref(NotificationType).allInOne ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "项目：https://github.com/CaoMeiYouRen/push-all-in-cloud，包含/push",
                  text: "服务器地址"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.allInOne.server,
                  "onUpdate:value": _cache[13] || (_cache[13] = ($event) => config$1.value.notification.setting.allInOne.server = $event),
                  placeholder: "请输入服务器地址"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[41] || (_cache[41] = [
                createBaseVNode("span", { class: "inline-flex" }, " Push Key ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.allInOne.key,
                  "onUpdate:value": _cache[14] || (_cache[14] = ($event) => config$1.value.notification.setting.allInOne.key = $event),
                  placeholder: "请输入push key",
                  type: "password",
                  "show-password-on": "click"
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ], 64)) : config$1.value.notification.setting.type === unref(NotificationType).customHttp ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "支持{{title}}和{{desc}}占位符，GET请求会自动URL编码",
                  text: "请求URL"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.customHttp.url,
                  "onUpdate:value": _cache[15] || (_cache[15] = ($event) => config$1.value.notification.setting.customHttp.url = $event),
                  placeholder: "请输入请求URL"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[42] || (_cache[42] = [
                createBaseVNode("span", { class: "inline-flex" }, " 请求方法 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: config$1.value.notification.setting.customHttp.method,
                  "onUpdate:value": _cache[16] || (_cache[16] = ($event) => config$1.value.notification.setting.customHttp.method = $event),
                  options: [
                    { value: "GET", label: "GET" },
                    { value: "POST", label: "POST" },
                    { value: "PUT", label: "PUT" }
                  ],
                  placeholder: "请选择请求方法"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "POST/PUT请求的请求体，默认为json，支持{{title}}和{{desc}}占位符",
                  text: "请求体"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.customHttp.body,
                  "onUpdate:value": _cache[17] || (_cache[17] = ($event) => config$1.value.notification.setting.customHttp.body = $event),
                  type: "textarea",
                  placeholder: "请输入请求体"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "自定义请求头，每行一个，格式为key: value",
                  text: "请求头"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.customHttp.headers,
                  "onUpdate:value": _cache[18] || (_cache[18] = ($event) => config$1.value.notification.setting.customHttp.headers = $event),
                  type: "textarea",
                  placeholder: "请输入请求头"
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ], 64)) : createCommentVNode("", true),
          createVNode(_component_n_divider),
          createVNode(_component_n_form_item, { label: "ffmpeg任务" }, {
            default: withCtx(() => [
              createVNode(_component_n_checkbox_group, {
                value: config$1.value.notification.task.ffmpeg,
                "onUpdate:value": _cache[19] || (_cache[19] = ($event) => config$1.value.notification.task.ffmpeg = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                    default: withCtx(() => [
                      createVNode(_component_n_checkbox, {
                        value: "success",
                        label: "成功"
                      }),
                      createVNode(_component_n_checkbox, {
                        value: "failure",
                        label: "失败"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, { label: "弹幕转换任务" }, {
            default: withCtx(() => [
              createVNode(_component_n_checkbox_group, {
                value: config$1.value.notification.task.danmu,
                "onUpdate:value": _cache[20] || (_cache[20] = ($event) => config$1.value.notification.task.danmu = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                    default: withCtx(() => [
                      createVNode(_component_n_checkbox, {
                        value: "success",
                        label: "成功"
                      }),
                      createVNode(_component_n_checkbox, {
                        value: "failure",
                        label: "失败"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, { label: "上传任务" }, {
            default: withCtx(() => [
              createVNode(_component_n_checkbox_group, {
                value: config$1.value.notification.task.upload,
                "onUpdate:value": _cache[21] || (_cache[21] = ($event) => config$1.value.notification.task.upload = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                    default: withCtx(() => [
                      createVNode(_component_n_checkbox, {
                        value: "success",
                        label: "成功"
                      }),
                      createVNode(_component_n_checkbox, {
                        value: "failure",
                        label: "失败"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, { label: "B站下载任务" }, {
            default: withCtx(() => [
              createVNode(_component_n_checkbox_group, {
                value: config$1.value.notification.task.download,
                "onUpdate:value": _cache[22] || (_cache[22] = ($event) => config$1.value.notification.task.download = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                    default: withCtx(() => [
                      createVNode(_component_n_checkbox, {
                        value: "success",
                        label: "成功"
                      }),
                      createVNode(_component_n_checkbox, {
                        value: "failure",
                        label: "失败"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, { label: "斗鱼下载任务" }, {
            default: withCtx(() => [
              createVNode(_component_n_checkbox_group, {
                value: config$1.value.notification.task.douyuDownload,
                "onUpdate:value": _cache[23] || (_cache[23] = ($event) => config$1.value.notification.task.douyuDownload = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                    default: withCtx(() => [
                      createVNode(_component_n_checkbox, {
                        value: "success",
                        label: "成功"
                      }),
                      createVNode(_component_n_checkbox, {
                        value: "failure",
                        label: "失败"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, { label: "稿件审核状态" }, {
            default: withCtx(() => [
              createVNode(_component_n_checkbox_group, {
                value: config$1.value.notification.task.mediaStatusCheck,
                "onUpdate:value": _cache[24] || (_cache[24] = ($event) => config$1.value.notification.task.mediaStatusCheck = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                    default: withCtx(() => [
                      createVNode(_component_n_checkbox, {
                        value: "success",
                        label: "通过"
                      }),
                      createVNode(_component_n_checkbox, {
                        value: "failure",
                        label: "失败"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, { label: "同步任务" }, {
            default: withCtx(() => [
              createVNode(_component_n_checkbox_group, {
                value: config$1.value.notification.task.sync,
                "onUpdate:value": _cache[25] || (_cache[25] = ($event) => config$1.value.notification.task.sync = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                    default: withCtx(() => [
                      createVNode(_component_n_checkbox, {
                        value: "success",
                        label: "成功"
                      }),
                      createVNode(_component_n_checkbox, {
                        value: "failure",
                        label: "失败"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, { label: "直播通知" }, {
            default: withCtx(() => [
              createVNode(_component_n_select, {
                value: config$1.value.notification.taskNotificationType.liveStart,
                "onUpdate:value": _cache[26] || (_cache[26] = ($event) => config$1.value.notification.taskNotificationType.liveStart = $event),
                options: typeOptions,
                placeholder: "请选择通知类型，不选则使用全局通知类型",
                clearable: "",
                style: { "width": "200px" }
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createVNode(_component_Tip, {
                tip: "检测目录的磁盘空间，如果低于阈值则发送通知，两个小时检查一次",
                text: "硬盘容量检测"
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_n_checkbox_group, {
                value: config$1.value.notification.task.diskSpaceCheck.values,
                "onUpdate:value": _cache[27] || (_cache[27] = ($event) => config$1.value.notification.task.diskSpaceCheck.values = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                    default: withCtx(() => [
                      createVNode(_component_n_checkbox, {
                        value: "bilirecorder",
                        label: "录播姬工作目录"
                      }),
                      createVNode(_component_n_checkbox, {
                        value: "bililiveTools",
                        label: "直播录制目录"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"]),
              createVNode(_component_n_input_number, {
                value: config$1.value.notification.task.diskSpaceCheck.threshold,
                "onUpdate:value": _cache[28] || (_cache[28] = ($event) => config$1.value.notification.task.diskSpaceCheck.threshold = $event),
                step: "1",
                min: "1"
              }, {
                suffix: withCtx(() => _cache[43] || (_cache[43] = [
                  createTextVNode(" GB ")
                ])),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const NotificationSetting = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-2ace07a6"]]);
const _hoisted_1$c = { class: "" };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "BiliSetting",
  props: {
    "data": {
      default: () => {
      }
    },
    "dataModifiers": {}
  },
  emits: ["update:data"],
  setup(__props) {
    const config2 = useModel(__props, "data");
    const lineOptions = [
      { label: "自动", value: "auto" },
      { label: "cs-bda2", value: "cs-bda2" },
      { label: "cs-bldsa", value: "cs-bldsa" },
      { label: "cs-tx", value: "cs-tx" },
      { label: "cs-qn", value: "cs-qn" },
      { label: "cs-cnbldsa", value: "cs-cnbldsa" },
      { label: "cs-akbd", value: "cs-akbd" },
      { label: "cs-estx", value: "cs-estx" },
      { label: "cs-cnbd", value: "cs-cnbd" },
      { label: "cs-cntx", value: "cs-cntx" },
      { label: "cs-andsa", value: "cs-andsa" },
      { label: "cs-anbd", value: "cs-anbd" },
      { label: "cs-antx", value: "cs-antx" },
      { label: "cs-atdsa", value: "cs-atdsa" },
      { label: "cs-atbd", value: "cs-atbd" },
      { label: "cs-attx", value: "cs-attx" },
      {
        type: "group",
        key: "outdated",
        label: "可能已失效线路（仅供测试）",
        children: [
          { label: "cs-txa", value: "cs-txa" },
          { label: "cs-alia", value: "cs-alia" },
          { label: "jd-bldsa", value: "jd-bldsa" },
          { label: "jd-bd", value: "jd-bd" },
          { label: "jd-tx", value: "jd-tx" },
          { label: "jd-txa", value: "jd-txa" },
          { label: "jd-alia", value: "jd-alia" }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$i;
      const _component_n_select = __unplugin_components_0$3;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_n_input_number = __unplugin_components_0$1;
      const _component_n_switch = __unplugin_components_1$3;
      const _component_n_form = __unplugin_components_5;
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createVNode(_component_n_form, {
          "label-placement": "left",
          "label-width": 150
        }, {
          default: withCtx(() => [
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "线路",
                  tip: "上传线路，自动会使用B站接口返回的第一个线路，如果上传失败请手动选择线路，切换后请上传测试线路能否实际使用。<br/>qn线路可能对海外机器有特效<br/>访问查询：<a href='https://member.bilibili.com/preupload?r=ping' target='_blank'>https://member.bilibili.com/preupload?r=ping</a>",
                  placement: "bottom"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: config2.value.biliUpload.line,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => config2.value.biliUpload.line = $event),
                  options: lineOptions,
                  filterable: "",
                  tag: ""
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "重试次数",
                  tip: "如果你经常上传失败，那么试试拉大参数吧"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.biliUpload.retryTimes,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => config2.value.biliUpload.retryTimes = $event),
                  min: "0",
                  max: "30"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[10] || (_cache[10] = [
                createBaseVNode("span", { class: "inline-flex" }, " 重试延迟 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.biliUpload.retryDelay,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => config2.value.biliUpload.retryDelay = $event),
                  min: "0",
                  max: "10000",
                  step: "1000"
                }, {
                  suffix: withCtx(() => _cache[11] || (_cache[11] = [
                    createTextVNode("毫秒")
                  ])),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "并发",
                  tip: "单个分P内上传并发数，并非全局最大上传任务限制"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.biliUpload.concurrency,
                  "onUpdate:value": _cache[3] || (_cache[3] = ($event) => config2.value.biliUpload.concurrency = $event),
                  min: "1",
                  max: "128"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "限速",
                  tip: "0为不限速，仅为单个上传任务的限速，并非全局"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.biliUpload.limitRate,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => config2.value.biliUpload.limitRate = $event),
                  min: "0",
                  step: "1024"
                }, {
                  suffix: withCtx(() => _cache[12] || (_cache[12] = [
                    createTextVNode("KB")
                  ])),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "稿件检查间隔",
                  tip: "用于自动评论及上传审核的检查稿件间隔时间，请勿设置过短以免触发风控"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.biliUpload.checkInterval,
                  "onUpdate:value": _cache[5] || (_cache[5] = ($event) => config2.value.biliUpload.checkInterval = $event),
                  min: "60",
                  step: "60",
                  placeholder: "请输入检查间隔"
                }, {
                  suffix: withCtx(() => _cache[13] || (_cache[13] = [
                    createTextVNode("秒")
                  ])),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "投稿最短间隔",
                  tip: "默认没有间隔，上传和编辑都会被算入，主要用于对抗风控~"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.biliUpload.minUploadInterval,
                  "onUpdate:value": _cache[6] || (_cache[6] = ($event) => config2.value.biliUpload.minUploadInterval = $event),
                  min: "0",
                  step: "10",
                  placeholder: "请输入检查间隔"
                }, {
                  suffix: withCtx(() => _cache[14] || (_cache[14] = [
                    createTextVNode("分钟")
                  ])),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "缓存投稿失败视频",
                  tip: "将上传完成的视频缓存到本地，如果出现投稿失败，可以直接复用视频ID，避免视频重新上传"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_switch, {
                  value: config2.value.biliUpload.useUploadPartPersistence,
                  "onUpdate:value": _cache[7] || (_cache[7] = ($event) => config2.value.biliUpload.useUploadPartPersistence = $event)
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "使用必剪api",
                  tip: "开启后，投稿使用必剪接口，编辑仍然使用web接口，用于解决部分风控"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_switch, {
                  value: config2.value.biliUpload.useBCutAPI,
                  "onUpdate:value": _cache[8] || (_cache[8] = ($event) => config2.value.biliUpload.useBCutAPI = $event)
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "自动更新帐号授权",
                  tip: "一天检查一次，过期时间在十天以下时会尝试自动更新，如果因某些情况授权已失效，会更新失败"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_switch, {
                  value: config2.value.biliUpload.accountAutoCheck,
                  "onUpdate:value": _cache[9] || (_cache[9] = ($event) => config2.value.biliUpload.accountAutoCheck = $event)
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const BiliSetting = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-0e0178ad"]]);
const _hoisted_1$b = { class: "" };
const _hoisted_2$7 = ["title", "onClick"];
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "RecordSetting",
  props: {
    "data": {
      default: () => {
      }
    },
    "dataModifiers": {}
  },
  emits: ["update:data"],
  setup(__props) {
    const config2 = useModel(__props, "data");
    const { userList } = storeToRefs(useUserInfoStore());
    const selectFolder = async () => {
      let file = await showDirectoryDialog({
        defaultPath: config2.value.recorder.savePath
      });
      if (!file) return;
      config2.value.recorder.savePath = file;
    };
    const titleList = ref([
      {
        value: "{platform}",
        label: "平台"
      },
      {
        value: "{channelId}",
        label: "房间号"
      },
      {
        value: "{remarks}",
        label: "备注"
      },
      {
        value: "{owner}",
        label: "主播名"
      },
      {
        value: "{title}",
        label: "标题"
      },
      {
        value: "{year}",
        label: "年"
      },
      {
        value: "{month}",
        label: "月"
      },
      {
        value: "{date}",
        label: "日"
      },
      {
        value: "{hour}",
        label: "时"
      },
      {
        value: "{min}",
        label: "分"
      },
      {
        value: "{sec}",
        label: "秒"
      },
      {
        value: "{ms}",
        label: "毫秒"
      }
    ]);
    const titleTip = computed(() => {
      const base = `<b>谨慎修改，可能会导致无法录制</b><br/>支持ejs引擎，更多参数见文档<br/>`;
      return titleList.value.map((item) => {
        return `${item.label}：${item.value}<br/>`;
      }).reduce((prev, cur) => prev + cur, base);
    });
    const titleInput = templateRef("titleInput");
    const setTitleVar = async (value) => {
      if (!allowEdit.value) return;
      const input = titleInput.value?.inputElRef;
      if (input) {
        const start = input.selectionStart ?? config2.value.recorder.nameRule.length;
        const end = input.selectionEnd ?? config2.value.recorder.nameRule.length;
        const oldValue = config2.value.recorder.nameRule;
        config2.value.recorder.nameRule = oldValue.slice(0, start) + value + oldValue.slice(end);
        input.focus();
        await nextTick();
        input.setSelectionRange(start + value.length, start + value.length);
      } else {
        config2.value.recorder.nameRule += value;
      }
    };
    const confirm = useConfirm();
    const allowEdit = ref(false);
    watch(allowEdit, async (val) => {
      if (val) {
        const [status] = await confirm.warning({
          content: "修改前确保知道此项参数含义，文件名中至少存在时分秒，谨慎修改，可能会导致无法录制"
        });
        if (!status) {
          allowEdit.value = false;
        }
      }
    });
    const handleNameRuleBlur = async () => {
      if (config2.value.recorder.nameRule.includes(":")) {
        const [status] = await confirm.warning({
          content: "你的文件命名规则中可能包含了冒号(:)，该符合无法作为文件名，是否替换为空格？"
        });
        if (!status) {
          return;
        }
        config2.value.recorder.nameRule = config2.value.recorder.nameRule.replaceAll(":", " ");
      }
    };
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_0$4;
      const _component_n_icon = NIcon;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_Tip = _sfc_main$i;
      const _component_n_checkbox = __unplugin_components_1$2;
      const _component_n_input_number = __unplugin_components_0$1;
      const _component_n_switch = __unplugin_components_1$3;
      const _component_n_select = __unplugin_components_0$3;
      const _component_n_tab_pane = __unplugin_components_4$1;
      const _component_n_tabs = __unplugin_components_6;
      const _component_n_form = __unplugin_components_5;
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        _cache[43] || (_cache[43] = createBaseVNode("div", { style: { "display": "flex", "gap": "10px", "align-items": "center" } }, [
          createBaseVNode("h2", null, "录制配置"),
          createBaseVNode("p", null, "此项大部分配置不即时生效，需重新开始一个录制方可生效")
        ], -1)),
        createVNode(_component_n_form, {
          "label-placement": "left",
          "label-width": 145
        }, {
          default: withCtx(() => [
            createVNode(_component_n_tabs, {
              type: "segment",
              style: { "margin-top": "10px" },
              class: "tabs"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_tab_pane, {
                  class: "tab-pane",
                  name: "common-setting",
                  tab: "基础设置",
                  "display-directive": "show:lazy"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => _cache[35] || (_cache[35] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 保存文件夹 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: config2.value.recorder.savePath,
                          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => config2.value.recorder.savePath = $event),
                          placeholder: "请选择要保存的文件夹"
                        }, null, 8, ["value"]),
                        createVNode(_component_n_icon, {
                          style: { "margin-left": "10px" },
                          size: "26",
                          class: "pointer",
                          onClick: selectFolder
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(FolderOpenOutline))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          tip: unref(titleTip),
                          text: "文件命名规则"
                        }, null, 8, ["tip"])
                      ]),
                      feedback: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(titleList), (item) => {
                          return openBlock(), createElementBlock("span", {
                            key: item.value,
                            title: item.label,
                            class: "title-var",
                            onClick: ($event) => setTitleVar(item.value)
                          }, toDisplayString(item.value), 9, _hoisted_2$7);
                        }), 128))
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          ref_key: "titleInput",
                          ref: titleInput,
                          disabled: !unref(allowEdit),
                          value: config2.value.recorder.nameRule,
                          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => config2.value.recorder.nameRule = $event),
                          placeholder: "请输入文件命名规则",
                          clearable: "",
                          spellcheck: "false",
                          onBlur: handleNameRuleBlur
                        }, null, 8, ["disabled", "value"]),
                        createVNode(_component_n_checkbox, {
                          checked: unref(allowEdit),
                          "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => isRef(allowEdit) ? allowEdit.value = $event : null),
                          style: { "margin": "0 10px" }
                        }, null, 8, ["checked"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          tip: "每隔设置的时间对所有监听直播间进行状态检查，太快容易被风控~",
                          text: "检查间隔"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input_number, {
                          value: config2.value.recorder.checkInterval,
                          "onUpdate:value": _cache[3] || (_cache[3] = ($event) => config2.value.recorder.checkInterval = $event),
                          min: "10",
                          step: "10",
                          style: { "width": "220px" }
                        }, {
                          suffix: withCtx(() => _cache[36] || (_cache[36] = [
                            createTextVNode("秒")
                          ])),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          tip: "同时最多运行的检查任务数量，和 检查间隔 共同构成了录制的循环检查周期",
                          text: "并发数"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input_number, {
                          value: config2.value.recorder.maxThreadCount,
                          "onUpdate:value": _cache[4] || (_cache[4] = ($event) => config2.value.recorder.maxThreadCount = $event),
                          min: "1",
                          max: "10",
                          step: "1",
                          style: { "width": "220px" }
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          tip: "检查任务完成后的等待时间",
                          text: "等待时间"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input_number, {
                          value: config2.value.recorder.waitTime,
                          "onUpdate:value": _cache[5] || (_cache[5] = ($event) => config2.value.recorder.waitTime = $event),
                          min: "0",
                          step: "1",
                          style: { "width": "220px" }
                        }, {
                          suffix: withCtx(() => _cache[37] || (_cache[37] = [
                            createTextVNode("毫秒")
                          ])),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          tip: "0为不分段，默认为时间分段，单位分钟。<br/>如果以B,KB,MB,GB结尾，会尝试使用文件大小分段，<b>不推荐在ffmpeg引擎时使用</b>",
                          text: "分段"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: config2.value.recorder.segment,
                          "onUpdate:value": _cache[6] || (_cache[6] = ($event) => config2.value.recorder.segment = $event),
                          placeholder: "请输入分段参数"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => _cache[38] || (_cache[38] = [
                        createBaseVNode("span", null, " 保存封面 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: config2.value.recorder.saveCover,
                          "onUpdate:value": _cache[7] || (_cache[7] = ($event) => config2.value.recorder.saveCover = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: unref(textInfo).common.format.text,
                          tip: unref(textInfo).common.format.tip
                        }, null, 8, ["text", "tip"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.videoFormat,
                          "onUpdate:value": _cache[8] || (_cache[8] = ($event) => config2.value.recorder.videoFormat = $event),
                          options: unref(videoFormatOptions),
                          style: { "width": "220px" }
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: unref(textInfo).common.recorderType.text,
                          tip: unref(textInfo).common.recorderType.tip
                        }, null, 8, ["text", "tip"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.recorderType,
                          "onUpdate:value": _cache[9] || (_cache[9] = ($event) => config2.value.recorder.recorderType = $event),
                          options: unref(recorderTypeOptions),
                          style: { "width": "220px" }
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          tip: unref(textInfo).douyu.qualityRetry.tip,
                          text: unref(textInfo).douyu.qualityRetry.text
                        }, null, 8, ["tip", "text"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input_number, {
                          value: config2.value.recorder.qualityRetry,
                          "onUpdate:value": _cache[10] || (_cache[10] = ($event) => config2.value.recorder.qualityRetry = $event),
                          min: "-1",
                          step: "1"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          tip: "录制结束后，立即尝试重新检查，避免下一个检查周期到来时才进行检查，导致缺少部分时间。<br/>\n                每场直播最多进行五十次重试。",
                          text: "录制结束立即重试"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: config2.value.recorder.recordRetryImmediately,
                          "onUpdate:value": _cache[11] || (_cache[11] = ($event) => config2.value.recorder.recordRetryImmediately = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          tip: "如果你遇到特定直播间的录制问题，请打开此开关",
                          text: "调试模式"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.debugLevel,
                          "onUpdate:value": _cache[12] || (_cache[12] = ($event) => config2.value.recorder.debugLevel = $event),
                          options: unref(recorderDebugLevelOptions),
                          style: { "width": "220px" }
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    _cache[42] || (_cache[42] = createBaseVNode("h3", null, "弹幕", -1)),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => _cache[39] || (_cache[39] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 弹幕录制 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: config2.value.recorder.disableProvideCommentsWhenRecording,
                          "onUpdate:value": _cache[13] || (_cache[13] = ($event) => config2.value.recorder.disableProvideCommentsWhenRecording = $event),
                          "checked-value": false,
                          "unchecked-value": true
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    !config2.value.recorder.disableProvideCommentsWhenRecording ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                      label: withCtx(() => _cache[40] || (_cache[40] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 保存礼物 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: config2.value.recorder.saveGiftDanma,
                          "onUpdate:value": _cache[14] || (_cache[14] = ($event) => config2.value.recorder.saveGiftDanma = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    !config2.value.recorder.disableProvideCommentsWhenRecording ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
                      label: withCtx(() => _cache[41] || (_cache[41] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 高能弹幕(SC) ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: config2.value.recorder.saveSCDanma,
                          "onUpdate:value": _cache[15] || (_cache[15] = ($event) => config2.value.recorder.saveSCDanma = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "服务端时间戳",
                          tip: "使用服务端返回的弹幕时间戳而非本地收到的时间戳，用于处理某些主播的弹幕时间戳不准确的问题"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: config2.value.recorder.useServerTimestamp,
                          "onUpdate:value": _cache[16] || (_cache[16] = ($event) => config2.value.recorder.useServerTimestamp = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_n_tab_pane, {
                  class: "tab-pane",
                  name: "bilibili",
                  tab: "B站",
                  "display-directive": "show:lazy"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: unref(textInfo).bili.uid.text
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(textInfo).bili.uid.tip), 1)
                          ]),
                          _: 1
                        }, 8, ["text"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.bilibili.uid,
                          "onUpdate:value": _cache[17] || (_cache[17] = ($event) => config2.value.recorder.bilibili.uid = $event),
                          options: unref(userList),
                          "label-field": "name",
                          "value-field": "uid",
                          clearable: ""
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: unref(textInfo).bili.quality.text,
                          tip: unref(textInfo).bili.quality.tip
                        }, null, 8, ["text", "tip"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.bilibili.quality,
                          "onUpdate:value": _cache[18] || (_cache[18] = ($event) => config2.value.recorder.bilibili.quality = $event),
                          options: unref(biliQualityOptions)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: unref(textInfo).bili.formatName.text,
                          tip: unref(textInfo).bili.formatName.tip
                        }, null, 8, ["text", "tip"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.bilibili.formatName,
                          "onUpdate:value": _cache[19] || (_cache[19] = ($event) => config2.value.recorder.bilibili.formatName = $event),
                          options: unref(biliStreamFormatOptions)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: unref(textInfo).bili.codecName.text,
                          tip: unref(textInfo).bili.codecName.tip
                        }, null, 8, ["text", "tip"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.bilibili.codecName,
                          "onUpdate:value": _cache[20] || (_cache[20] = ($event) => config2.value.recorder.bilibili.codecName = $event),
                          options: unref(streamCodecOptions)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    config2.value.recorder.bilibili.formatName !== "flv_only" ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          tip: unref(textInfo).bili.useM3U8Proxy.tip,
                          text: unref(textInfo).bili.useM3U8Proxy.text
                        }, null, 8, ["tip", "text"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: config2.value.recorder.bilibili.useM3U8Proxy,
                          "onUpdate:value": _cache[21] || (_cache[21] = ($event) => config2.value.recorder.bilibili.useM3U8Proxy = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          tip: unref(textInfo).bili.customHost.tip,
                          text: unref(textInfo).bili.customHost.text
                        }, null, 8, ["tip", "text"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: config2.value.recorder.bilibili.customHost,
                          "onUpdate:value": _cache[22] || (_cache[22] = ($event) => config2.value.recorder.bilibili.customHost = $event),
                          placeholder: "例如：cn-jsyz-ct-03-32.bilivideo.com",
                          clearable: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          tip: "使用批量检查直播状态接口，如果你录制了大量的直播间，可以尝试开启此选项，减少被风控的可能性",
                          text: "批量查询接口"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: config2.value.recorder.bilibili.useBatchQuery,
                          "onUpdate:value": _cache[23] || (_cache[23] = ($event) => config2.value.recorder.bilibili.useBatchQuery = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_n_tab_pane, {
                  class: "tab-pane",
                  name: "douyu",
                  tab: "斗鱼",
                  "display-directive": "show:lazy"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: unref(textInfo).douyu.quality.text,
                          tip: unref(textInfo).douyu.quality.tip
                        }, null, 8, ["text", "tip"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.douyu.quality,
                          "onUpdate:value": _cache[24] || (_cache[24] = ($event) => config2.value.recorder.douyu.quality = $event),
                          options: unref(douyuQualityOptions)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "线路",
                          tip: "如果设置的不存在，会采用默认"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.douyu.source,
                          "onUpdate:value": _cache[25] || (_cache[25] = ($event) => config2.value.recorder.douyu.source = $event),
                          options: unref(douyuSourceOptions)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_n_tab_pane, {
                  class: "tab-pane",
                  name: "huya",
                  tab: "虎牙",
                  "display-directive": "show:lazy"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: unref(textInfo).huya.quality.text,
                          tip: unref(textInfo).huya.quality.tip
                        }, null, 8, ["text", "tip"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.huya.quality,
                          "onUpdate:value": _cache[26] || (_cache[26] = ($event) => config2.value.recorder.huya.quality = $event),
                          options: unref(huyaQualityOptions)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: unref(textInfo).douyin.formatName.text,
                          tip: unref(textInfo).douyin.formatName.tip
                        }, null, 8, ["text", "tip"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.huya.formatName,
                          "onUpdate:value": _cache[27] || (_cache[27] = ($event) => config2.value.recorder.huya.formatName = $event),
                          options: unref(douyinStreamFormatOptions)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, { text: "线路" })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.huya.source,
                          "onUpdate:value": _cache[28] || (_cache[28] = ($event) => config2.value.recorder.huya.source = $event),
                          options: unref(huyaSourceOptions)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: unref(textInfo).huya.api.text,
                          tip: unref(textInfo).huya.api.tip
                        }, null, 8, ["text", "tip"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.huya.api,
                          "onUpdate:value": _cache[29] || (_cache[29] = ($event) => config2.value.recorder.huya.api = $event),
                          options: unref(huyaApiTypeOptions)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_n_tab_pane, {
                  class: "tab-pane",
                  name: "douyin",
                  tab: "抖音",
                  "display-directive": "show:lazy"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: unref(textInfo).douyin.quality.text,
                          tip: unref(textInfo).douyin.quality.tip
                        }, null, 8, ["text", "tip"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.douyin.quality,
                          "onUpdate:value": _cache[30] || (_cache[30] = ($event) => config2.value.recorder.douyin.quality = $event),
                          options: unref(douyinQualityOptions)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: unref(textInfo).douyin.formatName.text,
                          tip: unref(textInfo).douyin.formatName.tip
                        }, null, 8, ["text", "tip"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.douyin.formatName,
                          "onUpdate:value": _cache[31] || (_cache[31] = ($event) => config2.value.recorder.douyin.formatName = $event),
                          options: unref(douyinStreamFormatOptions)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: unref(textInfo).douyin.api.text,
                          tip: unref(textInfo).douyin.api.tip
                        }, null, 8, ["text", "tip"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: config2.value.recorder.douyin.api,
                          "onUpdate:value": _cache[32] || (_cache[32] = ($event) => config2.value.recorder.douyin.api = $event),
                          options: unref(douyinApiTypeOptions)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "Cookie",
                          tip: "用于录制会员直播"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: config2.value.recorder.douyin.cookie,
                          "onUpdate:value": _cache[33] || (_cache[33] = ($event) => config2.value.recorder.douyin.cookie = $event),
                          type: "password"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "双屏直播流",
                          tip: "开启后如果是双屏直播，那么就使用拼接的流"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: config2.value.recorder.douyin.doubleScreen,
                          "onUpdate:value": _cache[34] || (_cache[34] = ($event) => config2.value.recorder.douyin.doubleScreen = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const RecordSetting = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-1707997f"]]);
const _hoisted_1$a = { class: "" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "TaskSetting",
  props: {
    "data": {
      default: () => {
      }
    },
    "dataModifiers": {}
  },
  emits: ["update:data"],
  setup(__props) {
    const config2 = useModel(__props, "data");
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$i;
      const _component_n_input_number = __unplugin_components_0$1;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_n_form = __unplugin_components_5;
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createBaseVNode("h2", null, [
          _cache[5] || (_cache[5] = createTextVNode("并发处理数")),
          createVNode(_component_Tip, { tip: `-1为无限` })
        ]),
        createVNode(_component_n_form, {
          "label-placement": "left",
          "label-width": 140
        }, {
          default: withCtx(() => [
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[6] || (_cache[6] = [
                createBaseVNode("span", { class: "inline-flex" }, " ffmpeg任务 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.task.ffmpegMaxNum,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => config2.value.task.ffmpegMaxNum = $event),
                  min: "-1",
                  max: "65535"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[7] || (_cache[7] = [
                createBaseVNode("span", { class: "inline-flex" }, " 斗鱼下载", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.task.douyuDownloadMaxNum,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => config2.value.task.douyuDownloadMaxNum = $event),
                  min: "-1",
                  max: "65535"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[8] || (_cache[8] = [
                createBaseVNode("span", { class: "inline-flex" }, " Bilibili上传 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.task.biliUploadMaxNum,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => config2.value.task.biliUploadMaxNum = $event),
                  min: "-1",
                  max: "65535"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[9] || (_cache[9] = [
                createBaseVNode("span", { class: "inline-flex" }, " Bilibili下载 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.task.biliDownloadMaxNum,
                  "onUpdate:value": _cache[3] || (_cache[3] = ($event) => config2.value.task.biliDownloadMaxNum = $event),
                  min: "-1",
                  max: "65535"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[10] || (_cache[10] = [
                createBaseVNode("span", { class: "inline-flex" }, " 同步任务 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.task.syncMaxNum,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => config2.value.task.syncMaxNum = $event),
                  min: "-1",
                  max: "65535"
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const TaskSetting = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-4577cd37"]]);
const _hoisted_1$9 = { class: "" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VideoSetting",
  props: {
    "data": {
      default: () => {
      }
    },
    "dataModifiers": {}
  },
  emits: ["update:data"],
  setup(__props) {
    const config2 = useModel(__props, "data");
    const selectFolder = async () => {
      let file = await showDirectoryDialog({
        defaultPath: config2.value.video.subSavePath
      });
      if (!file) return;
      config2.value.video.subSavePath = file;
    };
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_0$4;
      const _component_n_icon = NIcon;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_Tip = _sfc_main$i;
      const _component_n_input_number = __unplugin_components_0$1;
      const _component_n_form = __unplugin_components_5;
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createVNode(_component_n_form, {
          "label-placement": "left",
          "label-width": 150
        }, {
          default: withCtx(() => [
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[2] || (_cache[2] = [
                createBaseVNode("span", { class: "inline-flex" }, " 保存文件夹 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config2.value.video.subSavePath,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => config2.value.video.subSavePath = $event),
                  placeholder: "请选择要保存的文件夹"
                }, null, 8, ["value"]),
                createVNode(_component_n_icon, {
                  style: { "margin-left": "10px" },
                  size: "26",
                  class: "pointer",
                  onClick: selectFolder
                }, {
                  default: withCtx(() => [
                    createVNode(unref(FolderOpenOutline))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "检查间隔",
                  tip: "设置太短没什么用"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.video.subCheckInterval,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => config2.value.video.subCheckInterval = $event),
                  min: "0",
                  step: "30"
                }, {
                  suffix: withCtx(() => _cache[3] || (_cache[3] = [
                    createTextVNode("分钟")
                  ])),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const VideoSetting = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-bf6be727"]]);
const _hoisted_1$8 = { class: "" };
const _hoisted_2$6 = { style: { "display": "flex", "gap": "10px", "align-items": "center" } };
const _hoisted_3$5 = { style: { "display": "inline-flex", "align-items": "center" } };
const _hoisted_4$5 = { class: "sync-config-list" };
const _hoisted_5$5 = { class: "add-card" };
const _hoisted_6$4 = { style: { "display": "flex", "justify-content": "space-between", "align-items": "center", "width": "100%" } };
const _hoisted_7$4 = { style: { "text-align": "right", "width": "100%" } };
const _hoisted_8$3 = { key: 4 };
const _hoisted_9$3 = { class: "footer" };
const _hoisted_10$3 = { class: "footer" };
const _hoisted_11$3 = { key: 0 };
const _hoisted_12$2 = { class: "footer" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "SyncSetting",
  props: {
    "data": {
      default: () => ({
        sync: {
          baiduPCS: { execPath: "", targetPath: "" },
          aliyunpan: { execPath: "", targetPath: "" },
          syncConfigs: []
        }
      })
    },
    "dataModifiers": {}
  },
  emits: ["update:data"],
  setup(__props) {
    const config2 = useModel(__props, "data");
    const isWeb = computed(() => window.isWeb);
    const selectFolder = async (type) => {
      if (["aliyunpan", "baiduPCS"].includes(type)) {
        let file = await showFileDialog({
          extensions: ["*"]
        });
        if (!file || file.length === 0) return;
        config2.value.sync[type].execPath = file[0];
      } else {
        throw new Error("选择类型错误");
      }
    };
    const notice = useNotice();
    const loginVisible = ref(false);
    const cookies = ref("");
    const alistData = ref({
      username: "",
      password: ""
    });
    const pan123Data = ref({
      clientId: "",
      clientSecret: ""
    });
    const loginType = ref("baiduPCS");
    const login = async (type) => {
      if (["aliyunpan", "baiduPCS"].includes(type)) {
        if (!config2.value.sync[type].execPath) {
          notice.error("请先选择可执行文件");
          return;
        }
      }
      cookies.value = "";
      loginType.value = type;
      if (type === "aliyunpan") {
        notice.info("请求中，请稍等~");
        const content = await syncApi.aliyunpanLogin({
          execPath: config2.value.sync.aliyunpan.execPath,
          type: "getUrl"
        });
        cookies.value = content;
      } else if (type === "alist") {
        alistData.value = {
          username: config2.value.sync.alist.username,
          password: ""
        };
      } else if (type === "pan123") {
        pan123Data.value = {
          clientId: config2.value.sync.pan123.clientId,
          clientSecret: ""
        };
      }
      loginVisible.value = true;
    };
    const sha256ForAlist = (password) => {
      return sha256(`${password}-https://github.com/alist-org/alist`);
    };
    const loginConfirm = async () => {
      if (loginType.value === "baiduPCS") {
        if (!cookies.value) {
          notice.error("请先输入cookie");
          return;
        }
        await syncApi.baiduPCSLogin({
          cookie: cookies.value,
          execPath: config2.value.sync.baiduPCS.execPath
        });
      } else if (loginType.value === "aliyunpan") {
        await syncApi.aliyunpanLogin({
          execPath: config2.value.sync.aliyunpan.execPath,
          type: "confirm"
        });
      } else if (loginType.value === "alist") {
        await syncApi.syncTestLogin({
          apiUrl: config2.value.sync.alist.apiUrl,
          username: alistData.value.username,
          password: sha256ForAlist(alistData.value.password),
          type: "alist"
        });
        config2.value.sync.alist.hashPassword = sha256ForAlist(alistData.value.password);
        config2.value.sync.alist.username = alistData.value.username;
      } else if (loginType.value === "pan123") {
        await syncApi.pan123Login({
          clientId: pan123Data.value.clientId,
          clientSecret: pan123Data.value.clientSecret
        });
        config2.value.sync.pan123.clientId = pan123Data.value.clientId;
        config2.value.sync.pan123.clientSecret = pan123Data.value.clientSecret;
      } else {
        notice.error("登录类型错误，请重新登录");
        return;
      }
      notice.success("登录成功");
      loginVisible.value = false;
    };
    const loginCancel = async () => {
      if (loginType.value === "aliyunpan") {
        await syncApi.aliyunpanLogin({
          execPath: config2.value.sync.aliyunpan.execPath,
          type: "cancel"
        });
      }
      loginVisible.value = false;
    };
    const loginCheck = async (type) => {
      let status = false;
      if (["aliyunpan", "baiduPCS"].includes(type)) {
        if (!config2.value.sync[type].execPath) {
          notice.error("请先选择可执行文件");
          return;
        }
        status = await syncApi.syncTestLogin({
          execPath: config2.value.sync[type].execPath,
          type
        });
      } else if (type === "alist") {
        status = await syncApi.syncTestLogin({
          apiUrl: config2.value.sync.alist.apiUrl,
          username: config2.value.sync.alist.username,
          password: config2.value.sync.alist.hashPassword,
          type: "alist"
        });
      } else if (type === "pan123") {
        status = await syncApi.syncTestLogin({
          clientId: config2.value.sync.pan123.clientId,
          type: "pan123"
        });
      } else {
        throw new Error("登录类型错误");
      }
      if (status) {
        notice.success("已存在登录信息");
      } else {
        notice.error("未检测到登录信息或凭证已过期，请登录");
      }
    };
    const uploadPathModalVisible = ref(false);
    const uploadPath = ref("/");
    const currentUploadType = ref("baiduPCS");
    const uploadCheck = async (type) => {
      if (type === "alist") {
        if (!config2.value.sync.alist.apiUrl) {
          notice.error("请先输入api地址");
          return;
        }
        if (!config2.value.sync.alist.username || !config2.value.sync.alist.hashPassword) {
          notice.error("请先登录");
          return;
        }
      } else if (["aliyunpan", "baiduPCS"].includes(type)) {
        if (!config2.value.sync[type].execPath) {
          notice.error("请先选择可执行文件");
          return;
        }
      } else if (type === "pan123") {
        if (!config2.value.sync.pan123.clientId || !config2.value.sync.pan123.clientSecret) {
          notice.error("请先输入clientId和clientSecret");
          return;
        }
      } else {
        throw new Error("上传类型错误");
      }
      currentUploadType.value = type;
      uploadPath.value = "/";
      uploadPathModalVisible.value = true;
    };
    const confirmUploadCheck = async () => {
      const type = currentUploadType.value;
      notice.info("上传中，请稍等~");
      if (["aliyunpan", "baiduPCS"].includes(type)) {
        await syncApi.syncTestUpload({
          execPath: config2.value.sync[type].execPath,
          remoteFolder: uploadPath.value,
          type
        });
      } else if (type === "alist") {
        await syncApi.syncTestUpload({
          apiUrl: config2.value.sync.alist.apiUrl,
          username: config2.value.sync.alist.username,
          password: config2.value.sync.alist.hashPassword,
          remoteFolder: uploadPath.value,
          type
        });
      } else if (type === "pan123") {
        await syncApi.syncTestUpload({
          clientId: config2.value.sync.pan123.clientId,
          clientSecret: config2.value.sync.pan123.clientSecret,
          remoteFolder: uploadPath.value,
          type
        });
      } else {
        throw new Error("上传类型错误");
      }
      notice.success("上传测试成功，请前往目标目录进行查看");
      uploadPathModalVisible.value = false;
    };
    const baiduPCSClientClogin = async () => {
      notice.info("登录完成后请关闭窗口");
      const cookie = await window.api.cookie.baiduLogin();
      cookies.value = cookie;
    };
    const editingConfigIndex = ref(null);
    const editingConfig = ref({
      id: uuid(),
      name: "",
      syncSource: "baiduPCS",
      folderStructure: "/录播/{{user}}/{{yyyy}}-{{MM}}",
      targetFiles: [],
      stringFilters: []
    });
    const syncConfigModalVisible = ref(false);
    const getSyncSourceLabel = (value) => {
      const options = {
        baiduPCS: "百度网盘",
        aliyunpan: "阿里云盘",
        alist: "alist"
      };
      return options[value] || value;
    };
    const getTargetFilesLabel = (values) => {
      const options = {
        source: "源文件",
        danmaku: "弹幕压制文件",
        xml: "XML文件",
        cover: "封面图片"
      };
      return values.map((v) => options[v] || v).join("、");
    };
    const addSyncConfig = () => {
      editingConfigIndex.value = null;
      editingConfig.value = {
        id: uuid(),
        name: "",
        syncSource: "baiduPCS",
        folderStructure: "/录播/{{user}}/{{yyyy}}-{{MM}}",
        targetFiles: [],
        stringFilters: []
      };
      syncConfigModalVisible.value = true;
    };
    const editSyncConfig = (index) => {
      editingConfigIndex.value = index;
      const originalConfig = config2.value.sync.syncConfigs[index];
      editingConfig.value = {
        id: originalConfig.id,
        name: originalConfig.name,
        syncSource: originalConfig.syncSource,
        folderStructure: originalConfig.folderStructure,
        targetFiles: [...originalConfig.targetFiles],
        stringFilters: [...originalConfig.stringFilters || []]
      };
      syncConfigModalVisible.value = true;
    };
    const confirm = useConfirm();
    const deleteSyncConfig = async (index) => {
      const configToDelete = config2.value.sync.syncConfigs[index];
      const isInUse = (
        // 检查全局配置
        config2.value.webhook?.syncId === configToDelete.id || // 检查房间配置
        Object.values(config2.value.webhook?.rooms || {}).some(
          (room) => room.syncId === configToDelete.id
        )
      );
      if (isInUse) {
        notice.error("该同步配置正在被使用，无法删除。请先修改或删除使用此配置的房间设置。");
        return;
      }
      const status = await confirm.warning({
        content: `确定要删除同步配置？`
      });
      if (!status) return;
      config2.value.sync.syncConfigs.splice(index, 1);
      notice.success("同步配置已删除");
    };
    const saveSyncConfig = () => {
      if (!editingConfig.value.name) {
        notice.error("配置名称不能为空");
        return;
      }
      if (editingConfig.value.targetFiles.length === 0) {
        notice.error("至少选择一个文件类型");
        return;
      }
      editingConfig.value.folderStructure = editingConfig.value.folderStructure.trim();
      if (editingConfigIndex.value === null) {
        config2.value.sync.syncConfigs.push({ ...editingConfig.value });
      } else {
        config2.value.sync.syncConfigs[editingConfigIndex.value] = { ...editingConfig.value };
      }
      syncConfigModalVisible.value = false;
    };
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$i;
      const _component_n_text = __unplugin_components_1$5;
      const _component_n_button = Button;
      const _component_n_space = __unplugin_components_3$3;
      const _component_n_card = __unplugin_components_4;
      const _component_n_icon = NIcon;
      const _component_n_tab_pane = __unplugin_components_4$1;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_n_input = __unplugin_components_0$4;
      const _component_n_input_number = __unplugin_components_0$1;
      const _component_n_tabs = __unplugin_components_6;
      const _component_n_form = __unplugin_components_5;
      const _component_n_modal = __unplugin_components_3$2;
      const _component_n_select = __unplugin_components_0$3;
      const _component_n_checkbox = __unplugin_components_1$2;
      const _component_n_checkbox_group = __unplugin_components_2$2;
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("h2", _hoisted_3$5, [
            _cache[37] || (_cache[37] = createTextVNode(" 文件同步配置")),
            createVNode(_component_Tip, { size: 22 }, {
              default: withCtx(() => _cache[36] || (_cache[36] = [
                createTextVNode("配置完成去webhook配置中配置相关同步器")
              ])),
              _: 1
            })
          ]),
          _cache[38] || (_cache[38] = createBaseVNode("p", null, [
            createTextVNode(" 使用前请务必了解相关同步库并"),
            createBaseVNode("b", null, "仔细查看文档"),
            createTextVNode("，或查看"),
            createBaseVNode("a", {
              href: "https://www.bilibili.com/video/BV1DieEzgE7y/",
              class: "external",
              target: "_blank"
            }, "视频教程")
          ], -1))
        ]),
        createVNode(_component_n_form, {
          "label-placement": "left",
          "label-width": 145
        }, {
          default: withCtx(() => [
            createVNode(_component_n_tabs, {
              type: "segment",
              style: { "margin-top": "10px" },
              class: "tabs"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_tab_pane, {
                  class: "tab-pane",
                  name: "syncConfig",
                  tab: "同步器",
                  "display-directive": "show:lazy"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_4$5, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(config2.value.sync.syncConfigs, (item, index) => {
                        return openBlock(), createBlock(_component_n_card, {
                          key: item.id,
                          class: "sync-config-card"
                        }, {
                          header: withCtx(() => [
                            createVNode(_component_n_text, { strong: "" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          "header-extra": withCtx(() => [
                            createVNode(_component_n_space, { align: "center" }, {
                              default: withCtx(() => [
                                createVNode(_component_n_button, {
                                  type: "primary",
                                  onClick: ($event) => editSyncConfig(index)
                                }, {
                                  default: withCtx(() => _cache[39] || (_cache[39] = [
                                    createTextVNode("编辑")
                                  ])),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_component_n_button, {
                                  type: "error",
                                  text: "",
                                  onClick: ($event) => deleteSyncConfig(index)
                                }, {
                                  default: withCtx(() => _cache[40] || (_cache[40] = [
                                    createTextVNode("删除")
                                  ])),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_n_space, { vertical: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_n_text, null, {
                                  default: withCtx(() => [
                                    createTextVNode("同步源: " + toDisplayString(getSyncSourceLabel(item.syncSource)), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_n_text, null, {
                                  default: withCtx(() => [
                                    createTextVNode("目录结构: " + toDisplayString(item.folderStructure), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_n_text, null, {
                                  default: withCtx(() => [
                                    createTextVNode("文件类型: " + toDisplayString(getTargetFilesLabel(item.targetFiles)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(_component_n_card, {
                        class: "sync-config-card",
                        onClick: addSyncConfig
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_5$5, [
                            createVNode(_component_n_icon, { size: "48" }, {
                              default: withCtx(() => [
                                createVNode(unref(Add))
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_text, { style: { "display": "block" } }, {
                              default: withCtx(() => _cache[41] || (_cache[41] = [
                                createTextVNode("添加同步器")
                              ])),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_n_tab_pane, {
                  class: "tab-pane",
                  name: "BaiduPCS",
                  tab: "百度网盘(BaiduPCS-GO)",
                  "display-directive": "show:lazy"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => _cache[42] || (_cache[42] = [
                        createTextVNode(" 项目地址 ")
                      ])),
                      default: withCtx(() => [
                        _cache[43] || (_cache[43] = createBaseVNode("a", {
                          href: "https://github.com/qjfoidnh/BaiduPCS-Go",
                          class: "external",
                          target: "_blank"
                        }, "https://github.com/qjfoidnh/BaiduPCS-Go", -1))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "可执行文件",
                          tip: "测试版本为4.0.0，上传不携带任何参数，需要自定义请直接去修改配置文件"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: config2.value.sync.baiduPCS.execPath,
                          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => config2.value.sync.baiduPCS.execPath = $event),
                          placeholder: "请选择要使用的可执行文件"
                        }, null, 8, ["value"]),
                        config2.value.sync.baiduPCS.execPath ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createVNode(_component_n_button, {
                            style: { "margin-left": "10px" },
                            type: "primary",
                            onClick: _cache[1] || (_cache[1] = ($event) => login("baiduPCS"))
                          }, {
                            default: withCtx(() => _cache[44] || (_cache[44] = [
                              createTextVNode("登录")
                            ])),
                            _: 1
                          }),
                          createVNode(_component_n_button, {
                            style: { "margin-left": "10px" },
                            type: "warning",
                            onClick: _cache[2] || (_cache[2] = ($event) => loginCheck("baiduPCS"))
                          }, {
                            default: withCtx(() => _cache[45] || (_cache[45] = [
                              createTextVNode("登录检查")
                            ])),
                            _: 1
                          }),
                          createVNode(_component_n_button, {
                            style: { "margin-left": "10px" },
                            type: "info",
                            onClick: _cache[3] || (_cache[3] = ($event) => uploadCheck("baiduPCS"))
                          }, {
                            default: withCtx(() => _cache[46] || (_cache[46] = [
                              createTextVNode("上传测试")
                            ])),
                            _: 1
                          })
                        ], 64)) : createCommentVNode("", true),
                        createVNode(_component_n_icon, {
                          style: { "margin-left": "10px" },
                          size: "26",
                          class: "pointer",
                          onClick: _cache[4] || (_cache[4] = ($event) => selectFolder("baiduPCS"))
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(FolderOpenOutline))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_n_tab_pane, {
                  class: "tab-pane",
                  name: "aliyunpan",
                  tab: "阿里云盘(aliyunpan)",
                  "display-directive": "show:lazy"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => _cache[47] || (_cache[47] = [
                        createTextVNode(" 项目地址 ")
                      ])),
                      default: withCtx(() => [
                        _cache[48] || (_cache[48] = createBaseVNode("a", {
                          href: "https://github.com/tickstep/aliyunpan",
                          class: "external",
                          target: "_blank"
                        }, "https://github.com/tickstep/aliyunpan", -1))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "可执行文件",
                          tip: "测试版本为0.3.7"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: config2.value.sync.aliyunpan.execPath,
                          "onUpdate:value": _cache[5] || (_cache[5] = ($event) => config2.value.sync.aliyunpan.execPath = $event),
                          placeholder: "请选择要使用的可执行文件"
                        }, null, 8, ["value"]),
                        config2.value.sync.aliyunpan.execPath ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createVNode(_component_n_button, {
                            style: { "margin-left": "10px" },
                            type: "primary",
                            onClick: _cache[6] || (_cache[6] = ($event) => login("aliyunpan"))
                          }, {
                            default: withCtx(() => _cache[49] || (_cache[49] = [
                              createTextVNode("登录")
                            ])),
                            _: 1
                          }),
                          createVNode(_component_n_button, {
                            style: { "margin-left": "10px" },
                            type: "warning",
                            onClick: _cache[7] || (_cache[7] = ($event) => loginCheck("aliyunpan"))
                          }, {
                            default: withCtx(() => _cache[50] || (_cache[50] = [
                              createTextVNode("登录检查")
                            ])),
                            _: 1
                          }),
                          createVNode(_component_n_button, {
                            style: { "margin-left": "10px" },
                            type: "info",
                            onClick: _cache[8] || (_cache[8] = ($event) => uploadCheck("aliyunpan"))
                          }, {
                            default: withCtx(() => _cache[51] || (_cache[51] = [
                              createTextVNode("上传测试")
                            ])),
                            _: 1
                          })
                        ], 64)) : createCommentVNode("", true),
                        createVNode(_component_n_icon, {
                          style: { "margin-left": "10px" },
                          size: "26",
                          class: "pointer",
                          onClick: _cache[9] || (_cache[9] = ($event) => selectFolder("aliyunpan"))
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(FolderOpenOutline))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_n_tab_pane, {
                  class: "tab-pane",
                  name: "alist",
                  tab: "Alist",
                  "display-directive": "show:lazy"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => _cache[52] || (_cache[52] = [
                        createTextVNode(" 项目地址 ")
                      ])),
                      default: withCtx(() => [
                        _cache[53] || (_cache[53] = createBaseVNode("a", {
                          href: "https://alistgo.com",
                          class: "external",
                          target: "_blank"
                        }, "https://alistgo.com", -1))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "api地址",
                          tip: ""
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: config2.value.sync.alist.apiUrl,
                          "onUpdate:value": _cache[10] || (_cache[10] = ($event) => config2.value.sync.alist.apiUrl = $event),
                          placeholder: "请输入api地址"
                        }, null, 8, ["value"]),
                        config2.value.sync.alist.apiUrl ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createVNode(_component_n_button, {
                            style: { "margin-left": "10px" },
                            type: "primary",
                            onClick: _cache[11] || (_cache[11] = ($event) => login("alist"))
                          }, {
                            default: withCtx(() => _cache[54] || (_cache[54] = [
                              createTextVNode("登录")
                            ])),
                            _: 1
                          }),
                          createVNode(_component_n_button, {
                            style: { "margin-left": "10px" },
                            type: "warning",
                            onClick: _cache[12] || (_cache[12] = ($event) => loginCheck("alist"))
                          }, {
                            default: withCtx(() => _cache[55] || (_cache[55] = [
                              createTextVNode("登录检查")
                            ])),
                            _: 1
                          }),
                          createVNode(_component_n_button, {
                            style: { "margin-left": "10px" },
                            type: "info",
                            onClick: _cache[13] || (_cache[13] = ($event) => uploadCheck("alist"))
                          }, {
                            default: withCtx(() => _cache[56] || (_cache[56] = [
                              createTextVNode("上传测试")
                            ])),
                            _: 1
                          })
                        ], 64)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "限速",
                          tip: "0为不限速，仅为单个上传任务的限速，并非全局"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input_number, {
                          value: config2.value.sync.alist.limitRate,
                          "onUpdate:value": _cache[14] || (_cache[14] = ($event) => config2.value.sync.alist.limitRate = $event),
                          min: "0",
                          step: "1024"
                        }, {
                          suffix: withCtx(() => _cache[57] || (_cache[57] = [
                            createTextVNode("KB")
                          ])),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "重试次数",
                          tip: "失败后自动重试，仅限于本地上传至alist服务端，并非alist服务端内部的上传重试"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input_number, {
                          value: config2.value.sync.alist.retry,
                          "onUpdate:value": _cache[15] || (_cache[15] = ($event) => config2.value.sync.alist.retry = $event),
                          min: "0",
                          step: "1",
                          max: "10"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_n_tab_pane, {
                  class: "tab-pane",
                  name: "pan123",
                  tab: "123网盘",
                  "display-directive": "show:lazy"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => _cache[58] || (_cache[58] = [
                        createTextVNode(" 项目地址 ")
                      ])),
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_6$4, [
                          _cache[62] || (_cache[62] = createBaseVNode("a", {
                            href: "https://github.com/renmu123/123pan-uploader",
                            class: "external",
                            target: "_blank",
                            style: { "flex": "none" }
                          }, "https://github.com/renmu123/123pan-uploader", -1)),
                          createBaseVNode("div", _hoisted_7$4, [
                            createVNode(_component_n_button, {
                              style: { "margin-left": "10px" },
                              type: "primary",
                              onClick: _cache[16] || (_cache[16] = ($event) => login("pan123"))
                            }, {
                              default: withCtx(() => _cache[59] || (_cache[59] = [
                                createTextVNode("登录")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_button, {
                              style: { "margin-left": "10px" },
                              type: "warning",
                              onClick: _cache[17] || (_cache[17] = ($event) => loginCheck("pan123"))
                            }, {
                              default: withCtx(() => _cache[60] || (_cache[60] = [
                                createTextVNode("登录检查")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_button, {
                              style: { "margin-left": "10px" },
                              type: "info",
                              onClick: _cache[18] || (_cache[18] = ($event) => uploadCheck("pan123"))
                            }, {
                              default: withCtx(() => _cache[61] || (_cache[61] = [
                                createTextVNode("上传测试")
                              ])),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "限速",
                          tip: "0为不限速，仅为单个上传任务的限速，并非全局"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input_number, {
                          value: config2.value.sync.pan123.limitRate,
                          "onUpdate:value": _cache[19] || (_cache[19] = ($event) => config2.value.sync.pan123.limitRate = $event),
                          min: "0",
                          step: "1024"
                        }, {
                          suffix: withCtx(() => _cache[63] || (_cache[63] = [
                            createTextVNode("KB")
                          ])),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_n_modal, {
          show: unref(loginVisible),
          "onUpdate:show": _cache[25] || (_cache[25] = ($event) => isRef(loginVisible) ? loginVisible.value = $event : null),
          "mask-closable": false,
          "auto-focus": ""
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "600px", "max-height": "60%" },
              bordered: false,
              size: "huge",
              role: "dialog",
              "aria-modal": "true",
              class: "card"
            }, {
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_9$3, [
                  createVNode(_component_n_button, {
                    class: "btn",
                    onClick: loginCancel
                  }, {
                    default: withCtx(() => _cache[66] || (_cache[66] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  !unref(isWeb) && unref(loginType) === "baiduPCS" ? (openBlock(), createBlock(_component_n_button, {
                    key: 0,
                    type: "info",
                    class: "btn",
                    onClick: baiduPCSClientClogin
                  }, {
                    default: withCtx(() => _cache[67] || (_cache[67] = [
                      createTextVNode(" 试试客户端特有的登录 ")
                    ])),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_n_button, {
                    type: "primary",
                    class: "btn",
                    onClick: loginConfirm
                  }, {
                    default: withCtx(() => _cache[68] || (_cache[68] = [
                      createTextVNode(" 确认 ")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                unref(loginType) === "baiduPCS" ? (openBlock(), createBlock(_component_n_input, {
                  key: 0,
                  value: unref(cookies),
                  "onUpdate:value": _cache[20] || (_cache[20] = ($event) => isRef(cookies) ? cookies.value = $event : null),
                  placeholder: "请输入cookie，具体见文档，你也可以自己在命令行登录，本软件不会保存相关鉴权参数",
                  type: "textarea"
                }, null, 8, ["value"])) : unref(loginType) === "aliyunpan" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  _cache[64] || (_cache[64] = createBaseVNode("h2", null, "完成操作后点击确认按钮即可完成登录", -1)),
                  createBaseVNode("h2", null, toDisplayString(unref(cookies)), 1)
                ], 64)) : unref(loginType) === "alist" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                  createVNode(_component_n_input, {
                    value: unref(alistData).username,
                    "onUpdate:value": _cache[21] || (_cache[21] = ($event) => unref(alistData).username = $event),
                    placeholder: "请输入用户名"
                  }, null, 8, ["value"]),
                  createVNode(_component_n_input, {
                    value: unref(alistData).password,
                    "onUpdate:value": _cache[22] || (_cache[22] = ($event) => unref(alistData).password = $event),
                    placeholder: "请输入密码",
                    type: "password",
                    style: { "margin-top": "20px" }
                  }, null, 8, ["value"])
                ], 64)) : unref(loginType) === "pan123" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                  _cache[65] || (_cache[65] = createBaseVNode("p", null, [
                    createTextVNode(" 你可以前往 "),
                    createBaseVNode("a", {
                      href: "https://www.123pan.com/developer",
                      target: "_blank"
                    }, "开放平台"),
                    createTextVNode(" 申请Client ID和Client Secret，请谨慎保管！ ")
                  ], -1)),
                  createVNode(_component_n_input, {
                    value: unref(pan123Data).clientId,
                    "onUpdate:value": _cache[23] || (_cache[23] = ($event) => unref(pan123Data).clientId = $event),
                    placeholder: "请输入Client ID"
                  }, null, 8, ["value"]),
                  createVNode(_component_n_input, {
                    value: unref(pan123Data).clientSecret,
                    "onUpdate:value": _cache[24] || (_cache[24] = ($event) => unref(pan123Data).clientSecret = $event),
                    placeholder: "请输入Client Secret",
                    type: "password",
                    style: { "margin-top": "20px" }
                  }, null, 8, ["value"])
                ], 64)) : (openBlock(), createElementBlock("h2", _hoisted_8$3, "登录类型错误"))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(_component_n_modal, {
          show: unref(syncConfigModalVisible),
          "onUpdate:show": _cache[32] || (_cache[32] = ($event) => isRef(syncConfigModalVisible) ? syncConfigModalVisible.value = $event : null),
          "mask-closable": false,
          "auto-focus": ""
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "600px", "max-height": "80%" },
              bordered: false,
              size: "huge",
              role: "dialog",
              "aria-modal": "true",
              class: "card"
            }, {
              header: withCtx(() => [
                createVNode(_component_n_text, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(editingConfigIndex) === null ? "添加" : "编辑") + "同步配置", 1)
                  ]),
                  _: 1
                })
              ]),
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_10$3, [
                  createVNode(_component_n_button, {
                    class: "btn",
                    onClick: _cache[31] || (_cache[31] = ($event) => syncConfigModalVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[73] || (_cache[73] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    class: "btn",
                    onClick: saveSyncConfig
                  }, {
                    default: withCtx(() => _cache[74] || (_cache[74] = [
                      createTextVNode("保存")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_form, {
                  "label-placement": "left",
                  "label-width": 100
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, { label: "配置名称" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(editingConfig).name,
                          "onUpdate:value": _cache[26] || (_cache[26] = ($event) => unref(editingConfig).name = $event),
                          placeholder: "请输入配置名称"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, { label: "同步源" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: unref(editingConfig).syncSource,
                          "onUpdate:value": _cache[27] || (_cache[27] = ($event) => unref(editingConfig).syncSource = $event),
                          options: [
                            { label: "百度网盘", value: "baiduPCS" },
                            { label: "阿里云盘", value: "aliyunpan" },
                            { label: "alist", value: "alist" },
                            { label: "123网盘", value: "pan123" },
                            { label: "本地复制", value: "copy" }
                          ]
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "目录结构",
                          tip: "如果是本地复制，请带上文件夹路径<br/>支持以下占位符：<br/>软件平台：{{software}}<br/>平台：{{platform}}<br/>主播名：{{user}}<br/>日期：{{now}}<br/>年：{{yyyy}}<br/>月：{{MM}}<br/>日：{{dd}}"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(editingConfig).folderStructure,
                          "onUpdate:value": _cache[28] || (_cache[28] = ($event) => unref(editingConfig).folderStructure = $event),
                          placeholder: "请输入目录结构"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, { label: "同步文件类型" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_checkbox_group, {
                          value: unref(editingConfig).targetFiles,
                          "onUpdate:value": _cache[29] || (_cache[29] = ($event) => unref(editingConfig).targetFiles = $event)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_space, { vertical: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_n_checkbox, { value: "source" }, {
                                  default: withCtx(() => _cache[69] || (_cache[69] = [
                                    createTextVNode("源文件")
                                  ])),
                                  _: 1
                                }),
                                createVNode(_component_n_checkbox, { value: "danmaku" }, {
                                  default: withCtx(() => _cache[70] || (_cache[70] = [
                                    createTextVNode("弹幕压制后的文件")
                                  ])),
                                  _: 1
                                }),
                                createVNode(_component_n_checkbox, { value: "xml" }, {
                                  default: withCtx(() => _cache[71] || (_cache[71] = [
                                    createTextVNode("XML文件")
                                  ])),
                                  _: 1
                                }),
                                createVNode(_component_n_checkbox, { value: "cover" }, {
                                  default: withCtx(() => _cache[72] || (_cache[72] = [
                                    createTextVNode("封面图片")
                                  ])),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    unref(editingConfig).syncSource === "alist" ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "字符串过滤",
                          tip: "某些网盘会有一些怪癖，用来过滤一些字符串<br/>过滤四字节字符串：alist(天翼盘)"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: unref(editingConfig).stringFilters,
                          "onUpdate:value": _cache[30] || (_cache[30] = ($event) => unref(editingConfig).stringFilters = $event),
                          multiple: "",
                          options: [{ label: "过滤四字节字符串", value: "filterFourByteChars" }],
                          placeholder: "请选择字符串过滤选项"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(_component_n_modal, {
          show: unref(uploadPathModalVisible),
          "onUpdate:show": _cache[35] || (_cache[35] = ($event) => isRef(uploadPathModalVisible) ? uploadPathModalVisible.value = $event : null),
          "mask-closable": false,
          "auto-focus": ""
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "600px" },
              bordered: false,
              size: "huge",
              role: "dialog",
              "aria-modal": "true",
              class: "card"
            }, {
              header: withCtx(() => [
                createVNode(_component_n_text, null, {
                  default: withCtx(() => [
                    _cache[75] || (_cache[75] = createTextVNode("输入上传路径 ")),
                    unref(currentUploadType) === "alist" ? (openBlock(), createElementBlock("span", _hoisted_11$3, "(alist需要带上挂载路径)")) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_12$2, [
                  createVNode(_component_n_button, {
                    class: "btn",
                    onClick: _cache[34] || (_cache[34] = ($event) => uploadPathModalVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[76] || (_cache[76] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    class: "btn",
                    onClick: confirmUploadCheck
                  }, {
                    default: withCtx(() => _cache[77] || (_cache[77] = [
                      createTextVNode("确认")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(uploadPath),
                  "onUpdate:value": _cache[33] || (_cache[33] = ($event) => isRef(uploadPath) ? uploadPath.value = $event : null),
                  placeholder: "请输入上传路径，例如：/test"
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
});
const SyncSetting = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-1d65933a"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CutSetting",
  props: {
    "data": {
      default: () => {
      }
    },
    "dataModifiers": {}
  },
  emits: ["update:data"],
  setup(__props) {
    const config2 = useModel(__props, "data");
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$i;
      const _component_n_switch = __unplugin_components_1$3;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_n_form = __unplugin_components_5;
      return openBlock(), createBlock(_component_n_form, {
        "label-placement": "left",
        "label-width": 150
      }, {
        default: withCtx(() => [
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createVNode(_component_Tip, {
                text: "自动保存",
                tip: "在进行操作之后，自动保存项目文件"
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_n_switch, {
                value: config2.value.videoCut.autoSave,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => config2.value.videoCut.autoSave = $event)
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createVNode(_component_Tip, {
                text: "缓存波形图数据",
                tip: "缓存波形图数据，避免每次重新计算波形图"
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_n_switch, {
                value: config2.value.videoCut.cacheWaveform,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => config2.value.videoCut.cacheWaveform = $event)
              }, null, 8, ["value"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const CutSetting = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-ac180332"]]);
const _hoisted_1$7 = { class: "" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "OtherSetting",
  props: {
    "data": {
      default: () => {
      }
    },
    "dataModifiers": {}
  },
  emits: ["update:data"],
  setup(__props) {
    const config2 = useModel(__props, "data");
    const isWeb = computed(() => window.isWeb);
    const themeOptions = ref([
      { label: "自动", value: "system" },
      { label: "浅色", value: "light" },
      { label: "深色", value: "dark" }
    ]);
    const toggleMenuBarVisible = async () => {
      if (!isWeb.value) return;
      setTimeout(() => {
        window.api.common.setMenuBarVisible(config2.value.menuBarVisible);
      }, 0);
    };
    return (_ctx, _cache) => {
      const _component_n_select = __unplugin_components_0$3;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_n_switch = __unplugin_components_1$3;
      const _component_Tip = _sfc_main$i;
      const _component_n_radio = __unplugin_components_3$4;
      const _component_n_radio_group = __unplugin_components_5$1;
      const _component_n_form = __unplugin_components_5;
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(_component_n_form, {
          "label-placement": "left",
          "label-width": 150
        }, {
          default: withCtx(() => [
            createVNode(_component_n_form_item, { label: "主题" }, {
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: config2.value.theme,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => config2.value.theme = $event),
                  options: unref(themeOptions)
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            }),
            !unref(isWeb) ? (openBlock(), createBlock(_component_n_form_item, {
              key: 0,
              label: "菜单栏显示"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_switch, {
                  value: config2.value.menuBarVisible,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => config2.value.menuBarVisible = $event),
                  onClick: toggleMenuBarVisible
                }, null, 8, ["value"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "录制页面额外请求",
                  tip: "进入录制页面时不再额外请求查询接口，减少风控可能，关闭后未监听的直播间无法获取封面等相关信息"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_switch, {
                  value: config2.value.requestInfoForRecord,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => config2.value.requestInfoForRecord = $event)
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, { text: "B站上传文件名" }, {
                  default: withCtx(() => _cache[5] || (_cache[5] = [
                    createTextVNode("控制文件名弹框是否出现")
                  ])),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_radio_group, {
                  value: config2.value.biliUploadFileNameType,
                  "onUpdate:value": _cache[3] || (_cache[3] = ($event) => config2.value.biliUploadFileNameType = $event)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_radio, { value: "ask" }, {
                      default: withCtx(() => _cache[6] || (_cache[6] = [
                        createTextVNode("询问")
                      ])),
                      _: 1
                    }),
                    createVNode(_component_n_radio, { value: "always" }, {
                      default: withCtx(() => _cache[7] || (_cache[7] = [
                        createTextVNode("始终")
                      ])),
                      _: 1
                    }),
                    createVNode(_component_n_radio, { value: "never" }, {
                      default: withCtx(() => _cache[8] || (_cache[8] = [
                        createTextVNode("从不")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            !unref(isWeb) ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "切片独立窗口",
                  tip: "客户端使用子窗口打开切片页面"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_switch, {
                  value: config2.value.cutPageInNewWindow,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => config2.value.cutPageInNewWindow = $event)
                }, null, 8, ["value"])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const OtherSetting = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-6791afd2"]]);
const _hoisted_1$6 = { class: "" };
const _hoisted_2$5 = { style: { "display": "flex", "gap": "10px", "align-items": "center" } };
const _hoisted_3$4 = { style: { "display": "inline-flex", "align-items": "center" } };
const _hoisted_4$4 = { class: "vendor-list" };
const _hoisted_5$4 = { class: "vendor-content" };
const _hoisted_6$3 = { class: "vendor-header" };
const _hoisted_7$3 = { class: "vendor-actions" };
const _hoisted_8$2 = { class: "add-card" };
const _hoisted_9$2 = { class: "vendor-list" };
const _hoisted_10$2 = { class: "vendor-content" };
const _hoisted_11$2 = { class: "vendor-header" };
const _hoisted_12$1 = { class: "vendor-info" };
const _hoisted_13$1 = { class: "vendor-actions" };
const _hoisted_14$1 = { class: "add-card" };
const _hoisted_15$1 = { class: "footer" };
const _hoisted_16$1 = { class: "footer" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AISetting",
  props: {
    "data": {
      default: () => ({
        ai: {
          vendors: [],
          models: []
        }
      })
    },
    "dataModifiers": {}
  },
  emits: ["update:data"],
  setup(__props) {
    const config2 = useModel(__props, "data");
    const notice = useNotice();
    const confirm = useConfirm();
    const vendorSelectOptions = computed(() => {
      return config2.value.ai.vendors.map((vendor) => ({
        label: vendor.name,
        value: vendor.id
      }));
    });
    const getModelOptionsByTag = (tag2) => {
      return config2.value.ai.models.filter((model) => model.tags && model.tags.includes(tag2)).map((model) => ({
        label: model.modelName + (model.remark ? ` (${model.remark})` : ""),
        value: model.modelId
      }));
    };
    const providerOptions = [
      { label: "FFmpeg", value: "ffmpeg" },
      { label: "阿里云", value: "aliyun" },
      { label: "OpenAI", value: "openai" }
      // { label: "百度", value: "baidu" },
    ];
    const getProviderLabel = (provider) => {
      const option = providerOptions.find((opt) => opt.value === provider);
      return option ? option.label : provider;
    };
    const getProviderType = (provider) => {
      const typeMap = {
        aliyun: "success",
        openai: "info",
        baidu: "warning"
      };
      return typeMap[provider] || "default";
    };
    const vendorModalVisible = ref(false);
    const editingVendorId = ref(null);
    const editingVendor = ref({
      provider: "aliyun",
      name: "",
      apiKey: "",
      baseURL: ""
    });
    const modelModalVisible = ref(false);
    const editingModelId = ref(null);
    const editingModel = ref({
      vendorId: "",
      modelName: "",
      remark: "",
      tags: ["llm", "asr"],
      config: {}
    });
    const addVendor = () => {
      editingVendorId.value = null;
      editingVendor.value = {
        provider: "aliyun",
        name: "",
        apiKey: "",
        baseURL: ""
      };
      vendorModalVisible.value = true;
    };
    const editVendor = (id) => {
      editingVendorId.value = id;
      const vendor = config2.value.ai.vendors.find((v) => v.id === id);
      if (!vendor) return;
      editingVendor.value = {
        provider: vendor.provider,
        name: vendor.name,
        apiKey: vendor.apiKey,
        baseURL: vendor.baseURL || ""
      };
      vendorModalVisible.value = true;
    };
    const deleteVendor = async (id) => {
      const index = config2.value.ai.vendors.findIndex((v) => v.id === id);
      if (index === -1) return;
      const vendor = config2.value.ai.vendors[index];
      const status = await confirm.warning({
        content: `确定要删除供应商配置"${vendor.name}"吗？`
      });
      if (!status) return;
      config2.value.ai.vendors.splice(index, 1);
    };
    const saveVendor = () => {
      if (!editingVendor.value.name) {
        notice.error("配置名称不能为空");
        return;
      }
      if (!editingVendor.value.apiKey) {
        notice.error("API Key不能为空");
        return;
      }
      const nameExists = config2.value.ai.vendors.some((vendor) => {
        if (editingVendorId.value !== null && vendor.id === editingVendorId.value) {
          return false;
        }
        return vendor.name === editingVendor.value.name;
      });
      if (nameExists) {
        notice.error("配置名称已存在，请使用其他名称");
        return;
      }
      const vendorData = {
        id: editingVendorId.value || uuid(),
        provider: editingVendor.value.provider,
        name: editingVendor.value.name,
        apiKey: editingVendor.value.apiKey,
        baseURL: editingVendor.value.baseURL || void 0
      };
      if (editingVendorId.value === null) {
        config2.value.ai.vendors.push(vendorData);
      } else {
        const index = config2.value.ai.vendors.findIndex((v) => v.id === editingVendorId.value);
        if (index !== -1) {
          config2.value.ai.vendors[index] = vendorData;
        }
      }
      vendorModalVisible.value = false;
    };
    const addModel = () => {
      editingModelId.value = null;
      editingModel.value = {
        vendorId: "",
        modelName: "",
        remark: "",
        tags: ["llm", "asr"],
        config: {}
      };
      modelModalVisible.value = true;
    };
    const editModel = (id) => {
      editingModelId.value = id;
      const model = config2.value.ai.models.find((m) => m.modelId === id);
      if (!model) return;
      editingModel.value = {
        vendorId: model.vendorId,
        modelName: model.modelName,
        remark: model.remark || "",
        tags: model.tags || [],
        config: model.config
      };
      modelModalVisible.value = true;
    };
    const deleteModel = async (id) => {
      const index = config2.value.ai.models.findIndex((m) => m.modelId === id);
      if (index === -1) return;
      const model = config2.value.ai.models[index];
      const status = await confirm.warning({
        content: `确定要删除模型配置"${model.modelName}"吗？`
      });
      if (!status) return;
      config2.value.ai.models.splice(index, 1);
    };
    const saveModel = () => {
      if (!editingModel.value.vendorId) {
        notice.error("供应商不能为空");
        return;
      }
      if (!editingModel.value.modelName) {
        notice.error("模型名称不能为空");
        return;
      }
      if (!editingModel.value.tags || editingModel.value.tags.length === 0) {
        notice.error("请至少选择一个标签");
        return;
      }
      const modelData = {
        modelId: editingModelId.value || uuid(),
        vendorId: editingModel.value.vendorId,
        modelName: editingModel.value.modelName,
        remark: editingModel.value.remark || void 0,
        tags: editingModel.value.tags,
        config: editingModel.value.config
      };
      if (editingModelId.value === null) {
        config2.value.ai.models.push(modelData);
      } else {
        const index = config2.value.ai.models.findIndex((m) => m.modelId === editingModelId.value);
        if (index !== -1) {
          config2.value.ai.models[index] = modelData;
        }
      }
      modelModalVisible.value = false;
    };
    const tagOptions = [
      { label: "LLM", value: "llm" },
      { label: "ASR", value: "asr" }
    ];
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$i;
      const _component_n_tag = __unplugin_components_2$3;
      const _component_n_text = __unplugin_components_1$5;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_4;
      const _component_n_icon = NIcon;
      const _component_n_tab_pane = __unplugin_components_4$1;
      const _component_n_space = __unplugin_components_3$3;
      const _component_n_select = __unplugin_components_0$3;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_n_form = __unplugin_components_5;
      const _component_n_collapse_item = __unplugin_components_11;
      const _component_n_collapse = __unplugin_components_12;
      const _component_n_input = __unplugin_components_0$4;
      const _component_n_switch = __unplugin_components_1$3;
      const _component_n_tabs = __unplugin_components_6;
      const _component_n_modal = __unplugin_components_3$2;
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("h2", _hoisted_3$4, [
            _cache[23] || (_cache[23] = createTextVNode(" AI配置")),
            createVNode(_component_Tip, { size: 22 }, {
              default: withCtx(() => _cache[22] || (_cache[22] = [
                createTextVNode("配置AI服务供应商，用于AI相关功能")
              ])),
              _: 1
            })
          ])
        ]),
        createVNode(_component_n_form, {
          "label-placement": "left",
          "label-width": 145
        }, {
          default: withCtx(() => [
            createVNode(_component_n_tabs, {
              type: "segment",
              style: { "margin-top": "10px" },
              class: "tabs"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_tab_pane, {
                  class: "tab-pane",
                  name: "vendors",
                  tab: "供应商",
                  "display-directive": "show:lazy"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_4$4, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(config2.value.ai.vendors, (vendor) => {
                        return openBlock(), createBlock(_component_n_card, {
                          key: vendor.id,
                          class: "vendor-card",
                          hoverable: ""
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_5$4, [
                              createBaseVNode("div", _hoisted_6$3, [
                                createVNode(_component_n_tag, {
                                  type: getProviderType(vendor.provider)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getProviderLabel(vendor.provider)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["type"]),
                                createVNode(_component_n_text, { strong: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(vendor.name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _cache[26] || (_cache[26] = createBaseVNode("div", { class: "vendor-info" }, null, -1)),
                              createBaseVNode("div", _hoisted_7$3, [
                                createVNode(_component_n_button, {
                                  size: "small",
                                  onClick: ($event) => editVendor(vendor.id)
                                }, {
                                  default: withCtx(() => _cache[24] || (_cache[24] = [
                                    createTextVNode("编辑")
                                  ])),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_component_n_button, {
                                  size: "small",
                                  type: "error",
                                  onClick: ($event) => deleteVendor(vendor.id)
                                }, {
                                  default: withCtx(() => _cache[25] || (_cache[25] = [
                                    createTextVNode("删除")
                                  ])),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(_component_n_card, {
                        class: "vendor-card add-vendor-card",
                        hoverable: "",
                        onClick: addVendor
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_8$2, [
                            createVNode(_component_n_icon, {
                              size: 48,
                              component: unref(Add)
                            }, null, 8, ["component"]),
                            createVNode(_component_n_text, null, {
                              default: withCtx(() => _cache[27] || (_cache[27] = [
                                createTextVNode("添加AI供应商")
                              ])),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_n_tab_pane, {
                  class: "tab-pane",
                  name: "models",
                  tab: "模型",
                  "display-directive": "show:lazy"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_9$2, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(config2.value.ai.models, (model) => {
                        return openBlock(), createBlock(_component_n_card, {
                          key: model.modelId,
                          class: "vendor-card",
                          hoverable: ""
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_10$2, [
                              createBaseVNode("div", _hoisted_11$2, [
                                createVNode(_component_n_space, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(model.tags, (tag2) => {
                                      return openBlock(), createBlock(_component_n_tag, {
                                        key: tag2,
                                        type: tag2 === "llm" ? "info" : "success",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(tag2 === "llm" ? "LLM" : "ASR"), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["type"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_n_text, { strong: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(model.modelName), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createBaseVNode("div", _hoisted_12$1, [
                                createVNode(_component_n_text, {
                                  depth: "3",
                                  style: { "font-size": "12px" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 供应商: " + toDisplayString(config2.value.ai.vendors.find((v) => v.id === model.vendorId)?.name || "未知"), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                model.remark ? (openBlock(), createBlock(_component_n_text, {
                                  key: 0,
                                  depth: "3",
                                  style: { "font-size": "12px" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(model.remark), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              createBaseVNode("div", _hoisted_13$1, [
                                createVNode(_component_n_button, {
                                  size: "small",
                                  onClick: ($event) => editModel(model.modelId)
                                }, {
                                  default: withCtx(() => _cache[28] || (_cache[28] = [
                                    createTextVNode("编辑")
                                  ])),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_component_n_button, {
                                  size: "small",
                                  type: "error",
                                  onClick: ($event) => deleteModel(model.modelId)
                                }, {
                                  default: withCtx(() => _cache[29] || (_cache[29] = [
                                    createTextVNode("删除")
                                  ])),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(_component_n_card, {
                        class: "vendor-card add-vendor-card",
                        hoverable: "",
                        onClick: addModel
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_14$1, [
                            createVNode(_component_n_icon, {
                              size: 48,
                              component: unref(Add)
                            }, null, 8, ["component"]),
                            createVNode(_component_n_text, null, {
                              default: withCtx(() => _cache[30] || (_cache[30] = [
                                createTextVNode("添加模型")
                              ])),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_n_tab_pane, {
                  class: "tab-pane",
                  name: "features",
                  tab: "功能",
                  "display-directive": "show:lazy"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_collapse, { style: { "margin-top": "10px" } }, {
                      default: withCtx(() => [
                        createVNode(_component_n_collapse_item, {
                          title: "歌曲ASR",
                          name: "songRecognize"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_form, {
                              "label-placement": "left",
                              "label-width": 120
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_n_form_item, null, {
                                  label: withCtx(() => [
                                    createVNode(_component_Tip, {
                                      tip: "用于将歌曲音频转换为文本的模型，推荐fun-asr",
                                      text: "模型"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_n_select, {
                                      value: config2.value.ai.songRecognizeAsr.modelId,
                                      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => config2.value.ai.songRecognizeAsr.modelId = $event),
                                      options: getModelOptionsByTag("asr"),
                                      placeholder: "请选择ASR模型"
                                    }, null, 8, ["value", "options"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_collapse, { style: { "margin-top": "10px" } }, {
                      default: withCtx(() => [
                        createVNode(_component_n_collapse_item, {
                          title: "歌曲识别LLM",
                          name: "songRecognize"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_form, {
                              "label-placement": "left",
                              "label-width": 120
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_n_form_item, { label: "模型" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_n_select, {
                                      value: config2.value.ai.songRecognizeLlm.modelId,
                                      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => config2.value.ai.songRecognizeLlm.modelId = $event),
                                      options: getModelOptionsByTag("llm"),
                                      placeholder: "请选择LLM模型"
                                    }, null, 8, ["value", "options"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_n_form_item, { label: "提示词" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_n_input, {
                                      value: config2.value.ai.songRecognizeLlm.prompt,
                                      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => config2.value.ai.songRecognizeLlm.prompt = $event),
                                      type: "textarea",
                                      placeholder: "请输入提示词",
                                      autosize: {
                                        minRows: 3,
                                        maxRows: 10
                                      }
                                    }, null, 8, ["value"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_n_form_item, null, {
                                  label: withCtx(() => [
                                    createVNode(_component_Tip, {
                                      tip: "启用后，LLM在识别歌曲名称时会结合网络搜索结果，提升识别准确率，对新歌识别更有帮助，但会增加token消耗。当前只支持阿里云Qwen。",
                                      text: "启用内容搜索"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_n_switch, {
                                      value: config2.value.ai.songRecognizeLlm.enableSearch,
                                      "onUpdate:value": _cache[3] || (_cache[3] = ($event) => config2.value.ai.songRecognizeLlm.enableSearch = $event)
                                    }, null, 8, ["value"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_n_form_item, { label: "结构化输出" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_n_switch, {
                                      value: config2.value.ai.songRecognizeLlm.enableStructuredOutput,
                                      "onUpdate:value": _cache[4] || (_cache[4] = ($event) => config2.value.ai.songRecognizeLlm.enableStructuredOutput = $event)
                                    }, null, 8, ["value"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_n_form_item, null, {
                                  label: withCtx(() => [
                                    createVNode(_component_Tip, {
                                      tip: "启用后，LLM会对识别出的歌词进行优化处理，提升歌词的可读性和准确性，但会增加token消耗。",
                                      text: "歌词优化"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_n_switch, {
                                      value: config2.value.ai.songRecognizeLlm.lyricOptimize,
                                      "onUpdate:value": _cache[5] || (_cache[5] = ($event) => config2.value.ai.songRecognizeLlm.lyricOptimize = $event)
                                    }, null, 8, ["value"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_collapse, { style: { "margin-top": "10px" } }, {
                      default: withCtx(() => [
                        createVNode(_component_n_collapse_item, {
                          title: "歌词优化LLM",
                          name: "songLyricOptimize"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_form, {
                              "label-placement": "left",
                              "label-width": 120
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_n_form_item, { label: "模型" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_n_select, {
                                      value: config2.value.ai.songLyricOptimize.modelId,
                                      "onUpdate:value": _cache[6] || (_cache[6] = ($event) => config2.value.ai.songLyricOptimize.modelId = $event),
                                      options: getModelOptionsByTag("llm"),
                                      placeholder: "默认跟随歌曲识别LLM模型"
                                    }, null, 8, ["value", "options"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_n_form_item, { label: "提示词" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_n_input, {
                                      value: config2.value.ai.songLyricOptimize.prompt,
                                      "onUpdate:value": _cache[7] || (_cache[7] = ($event) => config2.value.ai.songLyricOptimize.prompt = $event),
                                      type: "textarea",
                                      placeholder: "请输入提示词",
                                      autosize: {
                                        minRows: 3,
                                        maxRows: 10
                                      }
                                    }, null, 8, ["value"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_n_form_item, { label: "结构化输出" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_n_switch, {
                                      value: config2.value.ai.songLyricOptimize.enableStructuredOutput,
                                      "onUpdate:value": _cache[8] || (_cache[8] = ($event) => config2.value.ai.songLyricOptimize.enableStructuredOutput = $event)
                                    }, null, 8, ["value"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_collapse, { style: { "margin-top": "10px" } }, {
                      default: withCtx(() => [
                        createVNode(_component_n_collapse_item, {
                          title: "字幕识别",
                          name: "subtitleRecognize"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_form, {
                              "label-placement": "left",
                              "label-width": 120
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_n_form_item, { label: "模型" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_n_select, {
                                      value: config2.value.ai.subtitleRecognize.modelId,
                                      "onUpdate:value": _cache[9] || (_cache[9] = ($event) => config2.value.ai.subtitleRecognize.modelId = $event),
                                      options: getModelOptionsByTag("asr"),
                                      placeholder: "请选择ASR模型"
                                    }, null, 8, ["value", "options"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_n_modal, {
          show: unref(vendorModalVisible),
          "onUpdate:show": _cache[15] || (_cache[15] = ($event) => isRef(vendorModalVisible) ? vendorModalVisible.value = $event : null),
          "mask-closable": false,
          "auto-focus": ""
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "600px", "max-height": "80%" },
              bordered: false,
              size: "huge",
              role: "dialog",
              "aria-modal": "true",
              class: "card",
              title: unref(editingVendorId) === null ? "添加AI供应商" : "编辑AI供应商"
            }, {
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_15$1, [
                  createVNode(_component_n_button, {
                    class: "btn",
                    onClick: _cache[14] || (_cache[14] = ($event) => vendorModalVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[31] || (_cache[31] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    class: "btn",
                    type: "primary",
                    onClick: saveVendor
                  }, {
                    default: withCtx(() => _cache[32] || (_cache[32] = [
                      createTextVNode("保存")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_form, {
                  "label-placement": "left",
                  "label-width": 100
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "供应商",
                          tip: "使用ffmpeg类型前，请务必查看文档"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: unref(editingVendor).provider,
                          "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(editingVendor).provider = $event),
                          options: providerOptions,
                          placeholder: "请选择供应商"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, { label: "配置名称" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(editingVendor).name,
                          "onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(editingVendor).name = $event),
                          placeholder: "请输入配置名称（用于区分多个配置）"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, { label: "API Key" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(editingVendor).apiKey,
                          "onUpdate:value": _cache[12] || (_cache[12] = ($event) => unref(editingVendor).apiKey = $event),
                          type: "password",
                          "show-password-on": "click",
                          placeholder: "请输入API Key"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "Base URL",
                          tip: "可选，自定义API地址。如果使用官方接口可以留空，如果是openai兼容，一般是https://xxxxxx/v1"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(editingVendor).baseURL,
                          "onUpdate:value": _cache[13] || (_cache[13] = ($event) => unref(editingVendor).baseURL = $event),
                          placeholder: "可选，留空使用默认地址"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(_component_n_modal, {
          show: unref(modelModalVisible),
          "onUpdate:show": _cache[21] || (_cache[21] = ($event) => isRef(modelModalVisible) ? modelModalVisible.value = $event : null),
          "mask-closable": false,
          "auto-focus": ""
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "600px", "max-height": "80%" },
              bordered: false,
              size: "huge",
              role: "dialog",
              "aria-modal": "true",
              class: "card",
              title: unref(editingModelId) === null ? "添加模型" : "编辑模型"
            }, {
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_16$1, [
                  createVNode(_component_n_button, {
                    class: "btn",
                    onClick: _cache[20] || (_cache[20] = ($event) => modelModalVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[33] || (_cache[33] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    class: "btn",
                    type: "primary",
                    onClick: saveModel
                  }, {
                    default: withCtx(() => _cache[34] || (_cache[34] = [
                      createTextVNode("保存")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_form, {
                  "label-placement": "left",
                  "label-width": 100
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, { label: "供应商" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: unref(editingModel).vendorId,
                          "onUpdate:value": _cache[16] || (_cache[16] = ($event) => unref(editingModel).vendorId = $event),
                          options: unref(vendorSelectOptions),
                          placeholder: "请选择供应商"
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, { label: "模型名称" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(editingModel).modelName,
                          "onUpdate:value": _cache[17] || (_cache[17] = ($event) => unref(editingModel).modelName = $event),
                          placeholder: "请输入模型名称，如 qwen-plus"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, { label: "标签" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: unref(editingModel).tags,
                          "onUpdate:value": _cache[18] || (_cache[18] = ($event) => unref(editingModel).tags = $event),
                          options: tagOptions,
                          placeholder: "请选择模型类型",
                          multiple: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, { label: "备注" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(editingModel).remark,
                          "onUpdate:value": _cache[19] || (_cache[19] = ($event) => unref(editingModel).remark = $event),
                          placeholder: "可选，用于区分多个模型"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
});
const AISetting = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-f52a9b83"]]);
const _hoisted_1$5 = { class: "" };
const _hoisted_2$4 = { style: { "display": "flex", "gap": "10px", "align-items": "center", "margin-bottom": "20px" } };
const _hoisted_3$3 = { style: { "display": "inline-flex", "align-items": "center" } };
const _hoisted_4$3 = ["title"];
const _hoisted_5$3 = { class: "virtual-record-list" };
const _hoisted_6$2 = { class: "card-header" };
const _hoisted_7$2 = {
  key: 0,
  class: "info-item"
};
const _hoisted_8$1 = {
  key: 1,
  class: "info-item"
};
const _hoisted_9$1 = { class: "info-item" };
const _hoisted_10$1 = {
  key: 2,
  class: "info-item"
};
const _hoisted_11$1 = {
  key: 3,
  class: "info-item"
};
const _hoisted_12 = { class: "info-item" };
const _hoisted_13 = { class: "info-item" };
const _hoisted_14 = { class: "folder-list" };
const _hoisted_15 = {
  key: 4,
  class: "warning-item"
};
const _hoisted_16 = { class: "add-card" };
const _hoisted_17 = { style: { "display": "flex", "flex-direction": "column", "gap": "4px" } };
const _hoisted_18 = { style: { "display": "flex", "flex-direction": "column", "gap": "4px" } };
const _hoisted_19 = { style: { "width": "100%" } };
const _hoisted_20 = { class: "folder-input-container" };
const _hoisted_21 = { style: { "display": "flex", "gap": "8px", "margin-top": "8px" } };
const _hoisted_22 = { class: "modal-footer" };
const _hoisted_23 = { key: 0 };
const _hoisted_24 = {
  key: 0,
  class: "test-files"
};
const _hoisted_25 = { class: "file-list" };
const _hoisted_26 = { class: "file-info" };
const _hoisted_27 = { class: "file-path" };
const _hoisted_28 = { class: "file-details" };
const _hoisted_29 = { key: 1 };
const _hoisted_30 = { class: "modal-footer" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VirtualRecordSetting",
  props: {
    "data": {
      default: () => ({
        virtualRecord: {
          config: [],
          startTime: Date.now()
        }
      })
    },
    "dataModifiers": {}
  },
  emits: ["update:data"],
  setup(__props) {
    const config2 = useModel(__props, "data");
    const notice = useNotice();
    const confirm = useConfirm();
    const modalVisible = ref(false);
    const editingIndex = ref(null);
    const editingConfig = ref({
      mode: "normal",
      id: "",
      switch: true,
      roomId: "",
      titleRegex: "",
      roomIdRegex: "",
      username: "",
      usernameRegex: "",
      watchFolder: [],
      fileMatchRegex: "",
      ignoreFileRegex: "",
      startTimeAutoMatch: true
    });
    const testLoading = ref(false);
    const testResult = ref(null);
    const showTestResult = ref(false);
    const newFolderPath = ref("");
    const formRef = ref();
    const formRules = computed(() => {
      const baseRules = {
        watchFolder: {
          validator: () => {
            return editingConfig.value.watchFolder.length > 0;
          },
          message: "请至少添加一个监听文件夹",
          trigger: ["blur"]
        }
      };
      if (editingConfig.value.mode === "normal") {
        return {
          ...baseRules,
          roomId: {
            required: true,
            message: "请输入虚拟房间号",
            trigger: ["input", "blur"]
          }
        };
      } else {
        return {
          ...baseRules,
          roomIdRegex: {
            required: true,
            message: "请输入房间号正则表达式",
            trigger: ["input", "blur"]
          }
        };
      }
    });
    const canTest = computed(() => {
      if (editingConfig.value.mode === "normal") {
        return !!(editingConfig.value.roomId && editingConfig.value.watchFolder.length > 0);
      } else {
        return !!(editingConfig.value.roomIdRegex && editingConfig.value.watchFolder.length > 0);
      }
    });
    const testVirtualRecord = async () => {
      if (!canTest.value) {
        notice.warning("请先填写必要参数");
        return;
      }
      testLoading.value = true;
      try {
        const result = await task.testVirtualRecord(
          { ...editingConfig.value, switch: true },
          editingConfig.value.watchFolder[0],
          // 只发送第一个文件夹
          config2.value.virtualRecord.startTime
        );
        testResult.value = result;
        showTestResult.value = true;
        if (result.files.length === 0) {
          notice.info("未找到符合条件的文件");
        } else {
          notice.success(`找到 ${result.files.length} 个符合条件的文件`);
        }
      } catch (error) {
        notice.error(`测试失败: ${error instanceof Error ? error.message : "未知错误"}`);
      } finally {
        testLoading.value = false;
      }
    };
    const executeVirtualRecord = async () => {
      if (!testResult.value || testResult.value.files.length === 0) {
        notice.warning("没有可执行的文件");
        return;
      }
      try {
        await task.executeVirtualRecord(
          { ...editingConfig.value, switch: true },
          editingConfig.value.watchFolder[0],
          config2.value.virtualRecord.startTime
        );
        notice.success("执行成功");
        showTestResult.value = false;
      } catch (error) {
        notice.error(`执行失败: ${error instanceof Error ? error.message : "未知错误"}`);
      }
    };
    const addVirtualRecord = () => {
      editingIndex.value = null;
      editingConfig.value = {
        mode: "normal",
        id: uuid(),
        switch: true,
        roomId: "",
        titleRegex: "",
        roomIdRegex: "",
        username: "",
        usernameRegex: "",
        watchFolder: [],
        fileMatchRegex: "\\.(mp4|ts|flv|mkv|m4s)$",
        ignoreFileRegex: "-(弹幕版|后处理)",
        startTimeAutoMatch: true
      };
      newFolderPath.value = "";
      modalVisible.value = true;
    };
    const editVirtualRecord = (index) => {
      editingIndex.value = index;
      const originalConfig = config2.value.virtualRecord.config[index];
      editingConfig.value = {
        mode: originalConfig.mode || "normal",
        id: originalConfig.id,
        switch: originalConfig.switch,
        roomId: originalConfig.roomId || "",
        titleRegex: originalConfig.titleRegex || "",
        roomIdRegex: originalConfig.roomIdRegex || "",
        username: originalConfig.username || "",
        usernameRegex: originalConfig.usernameRegex || "",
        watchFolder: [...originalConfig.watchFolder || []],
        fileMatchRegex: originalConfig.fileMatchRegex,
        ignoreFileRegex: originalConfig.ignoreFileRegex || "-(弹幕版|后处理)",
        startTimeAutoMatch: originalConfig.startTimeAutoMatch || false
      };
      newFolderPath.value = "";
      modalVisible.value = true;
    };
    const deleteVirtualRecord = async (index) => {
      const status = await confirm.warning({
        content: `确定要删除？`
      });
      if (!status) return;
      config2.value.virtualRecord.config.splice(index, 1);
    };
    const selectWatchFolder = async () => {
      let file = await showDirectoryDialog({
        defaultPath: newFolderPath.value
      });
      if (!file) return;
      newFolderPath.value = file;
    };
    const addFolderPath = () => {
      const path = newFolderPath.value.trim();
      if (!path) return;
      if (editingConfig.value.watchFolder.includes(path)) {
        notice.warning("该文件夹已存在");
        return;
      }
      if (editingConfig.value.mode === "normal" && editingConfig.value.watchFolder.length >= 1) {
        notice.warning("普通模式下只能添加一个监听文件夹");
        return;
      }
      editingConfig.value.watchFolder.push(path);
      newFolderPath.value = "";
    };
    const removeFolderPath = (index) => {
      editingConfig.value.watchFolder.splice(index, 1);
    };
    const saveVirtualRecord = async () => {
      try {
        await formRef.value?.validate();
        if (editingConfig.value.mode === "normal") {
          const existingIndex = config2.value.virtualRecord.config.findIndex(
            (item, index) => item.mode === "normal" && item.roomId === editingConfig.value.roomId && index !== editingIndex.value
          );
          if (existingIndex !== -1) {
            notice.error("虚拟房间号已存在，请使用不同的房间号");
            return;
          }
        }
        if (editingIndex.value === null) {
          config2.value.virtualRecord.config.push({ ...editingConfig.value });
        } else {
          const originalId = config2.value.virtualRecord.config[editingIndex.value].id;
          config2.value.virtualRecord.config[editingIndex.value] = {
            ...editingConfig.value,
            id: originalId
            // 保持原有ID不变
          };
        }
        modalVisible.value = false;
      } catch (error) {
      }
    };
    const setStartTime = async () => {
      config2.value.virtualRecord.startTime = Date.now();
      notice.success({
        title: "起始时间已更新为当前时间，之前的文件将不会被处理",
        duration: 5e3
      });
    };
    return (_ctx, _cache) => {
      const _component_n_text = __unplugin_components_1$5;
      const _component_n_tag = __unplugin_components_2$3;
      const _component_n_button = Button;
      const _component_n_space = __unplugin_components_3$3;
      const _component_n_card = __unplugin_components_4;
      const _component_n_icon = NIcon;
      const _component_n_switch = __unplugin_components_1$3;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_n_radio = __unplugin_components_3$4;
      const _component_n_radio_group = __unplugin_components_5$1;
      const _component_n_input = __unplugin_components_0$4;
      const _component_n_form = __unplugin_components_5;
      const _component_n_modal = __unplugin_components_3$2;
      const _component_n_empty = __unplugin_components_8;
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("h2", _hoisted_3$3, [
            _cache[16] || (_cache[16] = createTextVNode(" 虚拟录制配置 ")),
            createVNode(_sfc_main$i, {
              size: 22,
              tip: "采用监听文件夹的形式支持那些不支持webhook的录制软件<br/>当监听文件夹中出现新文件时，会自动触发录制完成的处理流程<br/>支持普通模式和高级模式，高级模式支持正则匹配房间号和标题"
            })
          ]),
          createBaseVNode("p", null, [
            _cache[17] || (_cache[17] = createTextVNode(" 监听文件夹中的新文件，并发送到 webhook 进行处理，")),
            createBaseVNode("a", {
              onClick: setStartTime,
              class: "link",
              title: `从${unref(formatTime)(config2.value?.virtualRecord?.startTime ?? 0)}开始监听`
            }, "点击", 8, _hoisted_4$3),
            _cache[18] || (_cache[18] = createTextVNode("设置起始时间，更多查看")),
            _cache[19] || (_cache[19] = createBaseVNode("a", {
              href: "https://www.bilibili.com/video/BV1pKx9zuE8P/",
              class: "external",
              target: "_blank"
            }, "视频教程", -1))
          ])
        ]),
        createBaseVNode("div", _hoisted_5$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(config2.value.virtualRecord.config, (virtualConfig, index) => {
            return openBlock(), createBlock(_component_n_card, {
              key: virtualConfig.id || `${virtualConfig.roomId}-${index}`,
              class: "virtual-record-card"
            }, {
              header: withCtx(() => [
                createBaseVNode("div", _hoisted_6$2, [
                  createVNode(_component_n_text, { strong: "" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(virtualConfig.mode === "normal" ? "普通模式" : "高级模式") + " - " + toDisplayString(virtualConfig.mode === "normal" ? virtualConfig.roomId : "动态匹配"), 1)
                    ]),
                    _: 2
                  }, 1024),
                  virtualConfig.switch ? (openBlock(), createBlock(_component_n_tag, {
                    key: 0,
                    type: "info",
                    size: "small"
                  }, {
                    default: withCtx(() => _cache[20] || (_cache[20] = [
                      createTextVNode(" 监听中 ")
                    ])),
                    _: 1
                  })) : (openBlock(), createBlock(_component_n_tag, {
                    key: 1,
                    type: "warning",
                    size: "small"
                  }, {
                    default: withCtx(() => _cache[21] || (_cache[21] = [
                      createTextVNode(" 已禁用 ")
                    ])),
                    _: 1
                  }))
                ])
              ]),
              "header-extra": withCtx(() => [
                createVNode(_component_n_space, { align: "center" }, {
                  default: withCtx(() => [
                    createVNode(_component_n_button, {
                      type: "primary",
                      size: "small",
                      onClick: ($event) => editVirtualRecord(index)
                    }, {
                      default: withCtx(() => _cache[22] || (_cache[22] = [
                        createTextVNode(" 编辑 ")
                      ])),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_n_button, {
                      type: "error",
                      text: "",
                      size: "small",
                      onClick: ($event) => deleteVirtualRecord(index)
                    }, {
                      default: withCtx(() => _cache[23] || (_cache[23] = [
                        createTextVNode(" 删除 ")
                      ])),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              default: withCtx(() => [
                createVNode(_component_n_space, { vertical: "" }, {
                  default: withCtx(() => [
                    virtualConfig.mode === "normal" ? (openBlock(), createElementBlock("div", _hoisted_7$2, [
                      createVNode(_component_n_text, { depth: "3" }, {
                        default: withCtx(() => _cache[24] || (_cache[24] = [
                          createTextVNode("虚拟房间号:")
                        ])),
                        _: 1
                      }),
                      createVNode(_component_n_text, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(virtualConfig.roomId), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])) : createCommentVNode("", true),
                    virtualConfig.mode === "advance" ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
                      createVNode(_component_n_text, { depth: "3" }, {
                        default: withCtx(() => _cache[25] || (_cache[25] = [
                          createTextVNode("房间号正则:")
                        ])),
                        _: 1
                      }),
                      createVNode(_component_n_text, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(virtualConfig.roomIdRegex || "未设置"), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_9$1, [
                      createVNode(_component_n_text, { depth: "3" }, {
                        default: withCtx(() => _cache[26] || (_cache[26] = [
                          createTextVNode("标题正则:")
                        ])),
                        _: 1
                      }),
                      createVNode(_component_n_text, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(virtualConfig.titleRegex || "未设置"), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    virtualConfig.mode === "normal" ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                      createVNode(_component_n_text, { depth: "3" }, {
                        default: withCtx(() => _cache[27] || (_cache[27] = [
                          createTextVNode("主播名称:")
                        ])),
                        _: 1
                      }),
                      createVNode(_component_n_text, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(virtualConfig.username || "未设置"), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])) : createCommentVNode("", true),
                    virtualConfig.mode === "advance" ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
                      createVNode(_component_n_text, { depth: "3" }, {
                        default: withCtx(() => _cache[28] || (_cache[28] = [
                          createTextVNode("主播名称正则:")
                        ])),
                        _: 1
                      }),
                      createVNode(_component_n_text, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(virtualConfig.usernameRegex || "未设置"), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_12, [
                      createVNode(_component_n_text, { depth: "3" }, {
                        default: withCtx(() => _cache[29] || (_cache[29] = [
                          createTextVNode("文件匹配规则:")
                        ])),
                        _: 1
                      }),
                      createVNode(_component_n_text, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(virtualConfig.fileMatchRegex || "默认"), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createBaseVNode("div", _hoisted_13, [
                      createVNode(_component_n_text, { depth: "3" }, {
                        default: withCtx(() => _cache[30] || (_cache[30] = [
                          createTextVNode("监听文件夹:")
                        ])),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_14, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(virtualConfig.watchFolder, (folder) => {
                          return openBlock(), createBlock(_component_n_tag, {
                            key: folder,
                            size: "small",
                            type: "info",
                            style: { "margin": "2px" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(folder), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128)),
                        virtualConfig.watchFolder.length === 0 ? (openBlock(), createBlock(_component_n_text, {
                          key: 0,
                          type: "warning"
                        }, {
                          default: withCtx(() => _cache[31] || (_cache[31] = [
                            createTextVNode(" 未设置监听文件夹 ")
                          ])),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    virtualConfig.watchFolder.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_15, [
                      createVNode(_component_n_text, { type: "warning" }, {
                        default: withCtx(() => _cache[32] || (_cache[32] = [
                          createTextVNode("⚠️ 请设置至少一个监听文件夹路径")
                        ])),
                        _: 1
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 128)),
          createVNode(_component_n_card, {
            class: "virtual-record-card add-card-container",
            onClick: addVirtualRecord
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_16, [
                createVNode(_component_n_icon, {
                  size: "48",
                  color: "var(--n-text-color-disabled)"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Add))
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]),
        createVNode(_component_n_modal, {
          show: unref(modalVisible),
          "onUpdate:show": _cache[13] || (_cache[13] = ($event) => isRef(modalVisible) ? modalVisible.value = $event : null),
          "mask-closable": false,
          "auto-focus": ""
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "700px", "max-height": "80%" },
              bordered: false,
              size: "huge",
              role: "dialog",
              "aria-modal": "true",
              class: "modal-card"
            }, {
              header: withCtx(() => [
                createVNode(_component_n_text, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(editingIndex) === null ? "添加" : "编辑") + "虚拟录制配置", 1)
                  ]),
                  _: 1
                })
              ]),
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_22, [
                  createVNode(_component_n_button, {
                    onClick: _cache[12] || (_cache[12] = ($event) => modalVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[39] || (_cache[39] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "info",
                    onClick: testVirtualRecord,
                    loading: unref(testLoading),
                    disabled: !unref(canTest)
                  }, {
                    default: withCtx(() => _cache[40] || (_cache[40] = [
                      createTextVNode(" 验证 ")
                    ])),
                    _: 1
                  }, 8, ["loading", "disabled"]),
                  createVNode(_component_n_button, {
                    type: "primary",
                    onClick: saveVirtualRecord
                  }, {
                    default: withCtx(() => _cache[41] || (_cache[41] = [
                      createTextVNode("保存")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_form, {
                  "label-placement": "left",
                  "label-width": 120,
                  model: unref(editingConfig),
                  ref_key: "formRef",
                  ref: formRef,
                  rules: unref(formRules)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, { label: "监听状态" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: unref(editingConfig).switch,
                          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(editingConfig).switch = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, { label: "模式" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_radio_group, {
                          value: unref(editingConfig).mode,
                          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(editingConfig).mode = $event)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_radio, { value: "normal" }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_17, [
                                  _cache[34] || (_cache[34] = createBaseVNode("span", null, "普通模式", -1)),
                                  createVNode(_component_n_text, {
                                    depth: "3",
                                    style: { "font-size": "12px" }
                                  }, {
                                    default: withCtx(() => _cache[33] || (_cache[33] = [
                                      createTextVNode(" 固定房间号和标题，支持单个文件夹监听 ")
                                    ])),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_radio, { value: "advance" }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_18, [
                                  _cache[36] || (_cache[36] = createBaseVNode("span", null, "高级模式", -1)),
                                  createVNode(_component_n_text, {
                                    depth: "3",
                                    style: { "font-size": "12px" }
                                  }, {
                                    default: withCtx(() => _cache[35] || (_cache[35] = [
                                      createTextVNode(" 使用正则匹配房间号和标题，支持多文件夹监听 ")
                                    ])),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    unref(editingConfig).mode === "normal" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createVNode(_component_n_form_item, {
                        label: "虚拟房间号",
                        path: "roomId"
                      }, {
                        label: withCtx(() => [
                          createVNode(_sfc_main$i, {
                            text: "虚拟房间号",
                            tip: "用于区分不同的配置，相当于直播房间号"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(editingConfig).roomId,
                            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(editingConfig).roomId = $event),
                            placeholder: "请输入虚拟房间号，用于区分不同的录制配置",
                            clearable: ""
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_sfc_main$i, {
                            text: "主播名称",
                            tip: "作为webhook中的主播名称预设占位"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(editingConfig).username,
                            "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(editingConfig).username = $event),
                            placeholder: "可选，设置固定主播名称",
                            clearable: ""
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_sfc_main$i, {
                            text: "标题正则",
                            tip: "用于从文件名中提取标题信息，作为webhook中的标题预设占位"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(editingConfig).titleRegex,
                            "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(editingConfig).titleRegex = $event),
                            placeholder: "可选，用于从文件名中提取标题的正则表达式",
                            clearable: ""
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    unref(editingConfig).mode === "advance" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createVNode(_component_n_form_item, { path: "roomIdRegex" }, {
                        label: withCtx(() => [
                          createVNode(_sfc_main$i, {
                            text: "房间号正则",
                            tip: "用于区分不同的配置，相当于直播房间号，<b>如果匹配失败将会被跳过</b>"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(editingConfig).roomIdRegex,
                            "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(editingConfig).roomIdRegex = $event),
                            placeholder: "用于从文件名中提取房间号的正则表达式",
                            clearable: ""
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_sfc_main$i, {
                            text: "主播名称正则",
                            tip: "用于从文件名中提取主播名称信息，作为webhook中的主播名称预设占位"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(editingConfig).usernameRegex,
                            "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(editingConfig).usernameRegex = $event),
                            placeholder: "可选，用于从文件名中提取主播名称的正则表达式",
                            clearable: ""
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_sfc_main$i, {
                            text: "标题正则",
                            tip: "用于从文件名中提取标题信息，作为webhook中的标题预设占位"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(editingConfig).titleRegex,
                            "onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(editingConfig).titleRegex = $event),
                            placeholder: "可选，用于从文件名中提取标题的正则表达式",
                            clearable: ""
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_sfc_main$i, {
                          text: "文件匹配规则",
                          tip: "正则表达式，用于匹配需要处理的文件名，只有匹配的文件才会被处理<br/><b>开启webhook的转换为mp4功能可能导致文件重复处理</b><br/>默认匹配视频文件：mp4、ts、flv、mkv、m4s"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(editingConfig).fileMatchRegex,
                          "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(editingConfig).fileMatchRegex = $event),
                          placeholder: "正则表达式，只有匹配的文件才会被处理",
                          clearable: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_sfc_main$i, {
                          text: "文件忽略规则",
                          tip: "正则表达式，用于匹配需要忽略的文件名，匹配的文件将不会被处理<br/>默认忽略包含'-弹幕版'或'-后处理'的文件"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(editingConfig).ignoreFileRegex,
                          "onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(editingConfig).ignoreFileRegex = $event),
                          placeholder: "正则表达式，匹配的文件将被忽略处理",
                          clearable: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_sfc_main$i, {
                          text: "自动时间匹配",
                          tip: "开启后尝试从文件名中匹配开始时间，关闭时使用文件创建时间作为开始时间"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: unref(editingConfig).startTimeAutoMatch,
                          "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(editingConfig).startTimeAutoMatch = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, {
                      label: "监听文件夹",
                      path: "watchFolder"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_19, [
                          createBaseVNode("div", _hoisted_20, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(editingConfig).watchFolder, (folder, folderIndex) => {
                              return openBlock(), createBlock(_component_n_tag, {
                                key: folderIndex,
                                closable: "",
                                type: "info",
                                style: { "margin": "2px" },
                                onClose: ($event) => removeFolderPath(folderIndex)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(folder), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClose"]);
                            }), 128))
                          ]),
                          createBaseVNode("div", _hoisted_21, [
                            createVNode(_component_n_input, {
                              value: unref(newFolderPath),
                              "onUpdate:value": _cache[11] || (_cache[11] = ($event) => isRef(newFolderPath) ? newFolderPath.value = $event : null),
                              placeholder: "选择要监听的文件夹",
                              style: { "flex": "1" }
                            }, null, 8, ["value"]),
                            createVNode(_component_n_button, { onClick: selectWatchFolder }, {
                              icon: withCtx(() => [
                                createVNode(_component_n_icon, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(FolderOpenOutline))
                                  ]),
                                  _: 1
                                })
                              ]),
                              default: withCtx(() => [
                                _cache[37] || (_cache[37] = createTextVNode(" 选择文件夹 "))
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_button, {
                              onClick: addFolderPath,
                              disabled: !unref(newFolderPath).trim(),
                              type: "primary"
                            }, {
                              default: withCtx(() => _cache[38] || (_cache[38] = [
                                createTextVNode(" 添加 ")
                              ])),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model", "rules"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(_component_n_modal, {
          show: unref(showTestResult),
          "onUpdate:show": _cache[15] || (_cache[15] = ($event) => isRef(showTestResult) ? showTestResult.value = $event : null),
          "mask-closable": false,
          "auto-focus": ""
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "800px", "max-height": "80%" },
              bordered: false,
              size: "huge",
              role: "dialog",
              "aria-modal": "true",
              class: "modal-card"
            }, {
              header: withCtx(() => [
                createVNode(_component_n_text, null, {
                  default: withCtx(() => _cache[42] || (_cache[42] = [
                    createTextVNode("测试结果")
                  ])),
                  _: 1
                })
              ]),
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_30, [
                  createVNode(_component_n_button, {
                    onClick: _cache[14] || (_cache[14] = ($event) => showTestResult.value = false)
                  }, {
                    default: withCtx(() => _cache[48] || (_cache[48] = [
                      createTextVNode("关闭")
                    ])),
                    _: 1
                  }),
                  unref(testResult) && unref(testResult).files.length > 0 ? (openBlock(), createBlock(_component_n_button, {
                    key: 0,
                    type: "primary",
                    onClick: executeVirtualRecord,
                    style: { "display": "none" }
                  }, {
                    default: withCtx(() => _cache[49] || (_cache[49] = [
                      createTextVNode(" 确认执行 ")
                    ])),
                    _: 1
                  })) : createCommentVNode("", true)
                ])
              ]),
              default: withCtx(() => [
                unref(testResult) ? (openBlock(), createElementBlock("div", _hoisted_23, [
                  unref(testResult).files.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [
                    createBaseVNode("h4", null, "找到的文件（" + toDisplayString(unref(testResult).files.length) + " 个）：", 1),
                    createBaseVNode("div", _hoisted_25, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(testResult).files, (file, index) => {
                        return openBlock(), createBlock(_component_n_card, {
                          key: index,
                          size: "small",
                          style: { "margin-bottom": "8px" }
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_26, [
                              createBaseVNode("div", _hoisted_27, [
                                createVNode(_component_n_text, { depth: "3" }, {
                                  default: withCtx(() => _cache[43] || (_cache[43] = [
                                    createTextVNode("文件：")
                                  ])),
                                  _: 1
                                }),
                                createVNode(_component_n_text, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(file.filename), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createBaseVNode("div", _hoisted_28, [
                                createBaseVNode("div", null, [
                                  createVNode(_component_n_text, { depth: "3" }, {
                                    default: withCtx(() => _cache[44] || (_cache[44] = [
                                      createTextVNode("房间号：")
                                    ])),
                                    _: 1
                                  }),
                                  createVNode(_component_n_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(file.roomId || "未知"), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createBaseVNode("div", null, [
                                  createVNode(_component_n_text, { depth: "3" }, {
                                    default: withCtx(() => _cache[45] || (_cache[45] = [
                                      createTextVNode("主播：")
                                    ])),
                                    _: 1
                                  }),
                                  createVNode(_component_n_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(file.username || "未知主播"), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createBaseVNode("div", null, [
                                  createVNode(_component_n_text, { depth: "3" }, {
                                    default: withCtx(() => _cache[46] || (_cache[46] = [
                                      createTextVNode("标题：")
                                    ])),
                                    _: 1
                                  }),
                                  createVNode(_component_n_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(file.title || "未知标题"), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createBaseVNode("div", null, [
                                  createVNode(_component_n_text, { depth: "3" }, {
                                    default: withCtx(() => _cache[47] || (_cache[47] = [
                                      createTextVNode("开始时间：")
                                    ])),
                                    _: 1
                                  }),
                                  createVNode(_component_n_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(new Date(file.startTimeMs).toLocaleString()), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  unref(testResult).files.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_29, [
                    createVNode(_component_n_empty, { description: "未找到符合条件的文件" }, {
                      icon: withCtx(() => [
                        createVNode(_component_n_icon, null, {
                          default: withCtx(() => [
                            createVNode(unref(FolderOpenOutline))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
});
const VirtualRecordSetting = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-04c59668"]]);
const _hoisted_1$4 = { class: "update-content" };
const _hoisted_2$3 = {
  key: 0,
  class: "check-loading"
};
const _hoisted_3$2 = {
  key: 1,
  class: "error-content"
};
const _hoisted_4$2 = { class: "message" };
const _hoisted_5$2 = { class: "actions" };
const _hoisted_6$1 = {
  key: 2,
  class: "no-update-content"
};
const _hoisted_7$1 = { class: "message" };
const _hoisted_8 = { class: "actions" };
const _hoisted_9 = {
  key: 3,
  class: "has-update-content"
};
const _hoisted_10 = { class: "message" };
const _hoisted_11 = { class: "actions" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "checkUpdateModal",
  props: {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  },
  emits: ["update:visible"],
  setup(__props, { expose: __expose }) {
    const showModal = useModel(__props, "visible");
    const loading = ref(false);
    const updateResult = ref(null);
    const dialogTitle = computed(() => {
      if (loading.value) return "检查更新";
      if (updateResult.value?.error) return "检查更新失败";
      if (updateResult.value?.needUpdate) return "发现新版本";
      return "检查更新";
    });
    const checkForUpdates = async () => {
      loading.value = true;
      updateResult.value = null;
      try {
        const result = await common.checkUpdate();
        updateResult.value = result;
      } catch (error) {
        updateResult.value = {
          message: "检查更新失败，请检查网络连接",
          error: true,
          needUpdate: false,
          downloadUrl: "",
          backupUrl: ""
        };
      } finally {
        loading.value = false;
      }
    };
    const openDownloadUrl = () => {
      if (updateResult.value?.downloadUrl) {
        if (window.isWeb) {
          window.open(updateResult.value.downloadUrl, "_blank");
        } else {
          window.api.openExternal(updateResult.value.downloadUrl);
        }
      }
    };
    const openBackupUrl = () => {
      if (updateResult.value?.backupUrl) {
        if (window.isWeb) {
          window.open(updateResult.value.backupUrl, "_blank");
        } else {
          window.api.openExternal(updateResult.value.backupUrl);
        }
      }
    };
    const openGitHub = () => {
      const githubUrl = "https://github.com/renmu123/biliLive-tools/releases";
      if (window.isWeb) {
        window.open(githubUrl, "_blank");
      } else {
        window.api.openExternal(githubUrl);
      }
    };
    const close = () => {
      showModal.value = false;
      loading.value = false;
      updateResult.value = null;
    };
    watch(showModal, (visible) => {
      if (visible) {
        checkForUpdates();
      }
    });
    __expose({
      checkForUpdates
    });
    return (_ctx, _cache) => {
      const _component_n_spin = __unplugin_components_7$1;
      const _component_n_icon = NIcon;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_4;
      const _component_n_modal = __unplugin_components_3$2;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showModal.value = $event),
        "transform-origin": "center",
        "mask-closable": true
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "500px" },
            bordered: false,
            title: unref(dialogTitle)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$4, [
                unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
                  createVNode(_component_n_spin, { size: "medium" }),
                  _cache[1] || (_cache[1] = createBaseVNode("div", { class: "loading-text" }, "正在检查更新...", -1))
                ])) : unref(updateResult) && unref(updateResult).error ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
                  createVNode(_component_n_icon, {
                    size: "48",
                    color: "#d03050"
                  }, {
                    default: withCtx(() => _cache[2] || (_cache[2] = [
                      createBaseVNode("svg", { viewBox: "0 0 24 24" }, [
                        createBaseVNode("path", {
                          fill: "currentColor",
                          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM13 17h-2v-6h2v6zm0-8h-2V7h2v2z"
                        })
                      ], -1)
                    ])),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_4$2, toDisplayString(unref(updateResult).message), 1),
                  createBaseVNode("div", _hoisted_5$2, [
                    createVNode(_component_n_button, { onClick: close }, {
                      default: withCtx(() => _cache[3] || (_cache[3] = [
                        createTextVNode("取消")
                      ])),
                      _: 1
                    }),
                    createVNode(_component_n_button, {
                      type: "primary",
                      onClick: openGitHub
                    }, {
                      default: withCtx(() => _cache[4] || (_cache[4] = [
                        createTextVNode("确认")
                      ])),
                      _: 1
                    })
                  ])
                ])) : unref(updateResult) && !unref(updateResult).needUpdate ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
                  createVNode(_component_n_icon, {
                    size: "48",
                    color: "#18a058"
                  }, {
                    default: withCtx(() => _cache[5] || (_cache[5] = [
                      createBaseVNode("svg", { viewBox: "0 0 24 24" }, [
                        createBaseVNode("path", {
                          fill: "currentColor",
                          d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                        })
                      ], -1)
                    ])),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_7$1, toDisplayString(unref(updateResult).message || "当前已是最新版本"), 1),
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(_component_n_button, {
                      type: "primary",
                      onClick: close
                    }, {
                      default: withCtx(() => _cache[6] || (_cache[6] = [
                        createTextVNode("确定")
                      ])),
                      _: 1
                    })
                  ])
                ])) : unref(updateResult) && unref(updateResult).needUpdate ? (openBlock(), createElementBlock("div", _hoisted_9, [
                  createVNode(_component_n_icon, {
                    size: "48",
                    color: "#2080f0"
                  }, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createBaseVNode("svg", { viewBox: "0 0 24 24" }, [
                        createBaseVNode("path", {
                          fill: "currentColor",
                          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                        })
                      ], -1)
                    ])),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_10, toDisplayString(unref(updateResult).message || "发现新版本"), 1),
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_component_n_button, { onClick: close }, {
                      default: withCtx(() => _cache[8] || (_cache[8] = [
                        createTextVNode("稍后更新")
                      ])),
                      _: 1
                    }),
                    unref(updateResult).backupUrl ? (openBlock(), createBlock(_component_n_button, {
                      key: 0,
                      onClick: openBackupUrl
                    }, {
                      default: withCtx(() => _cache[9] || (_cache[9] = [
                        createTextVNode("备用下载")
                      ])),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_n_button, {
                      type: "primary",
                      onClick: openDownloadUrl
                    }, {
                      default: withCtx(() => _cache[10] || (_cache[10] = [
                        createTextVNode("立即查看")
                      ])),
                      _: 1
                    })
                  ])
                ])) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const CheckUpdateModal = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-a96f9133"]]);
var FileSaver_min$1 = { exports: {} };
var FileSaver_min = FileSaver_min$1.exports;
var hasRequiredFileSaver_min;
function requireFileSaver_min() {
  if (hasRequiredFileSaver_min) return FileSaver_min$1.exports;
  hasRequiredFileSaver_min = 1;
  (function(module, exports) {
    (function(a, b) {
      b();
    })(FileSaver_min, function() {
      function b(a2, b2) {
        return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
      }
      function c2(a2, b2, c3) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
          g(d2.response, b2, c3);
        }, d2.onerror = function() {
          console.error("could not download file");
        }, d2.send();
      }
      function d(a2) {
        var b2 = new XMLHttpRequest();
        b2.open("HEAD", a2, false);
        try {
          b2.send();
        } catch (a3) {
        }
        return 200 <= b2.status && 299 >= b2.status;
      }
      function e(a2) {
        try {
          a2.dispatchEvent(new MouseEvent("click"));
        } catch (c3) {
          var b2 = document.createEvent("MouseEvents");
          b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
        }
      }
      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
      } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h2) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c2(b2, g2, h2) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h2) {
        if (g2 = g2 || f2.name || "download", "string" != typeof f2) navigator.msSaveOrOpenBlob(b(f2, h2), g2);
        else if (d(f2)) c2(f2, g2, h2);
        else {
          var i = document.createElement("a");
          i.href = f2, i.target = "_blank", setTimeout(function() {
            e(i);
          });
        }
      } : function(b2, d2, e2, g2) {
        if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2) return c2(b2, d2, e2);
        var h2 = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h2 && i || a) && "undefined" != typeof FileReader) {
          var k = new FileReader();
          k.onloadend = function() {
            var a2 = k.result;
            a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
          }, k.readAsDataURL(b2);
        } else {
          var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
          g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
            l.revokeObjectURL(m);
          }, 4e4);
        }
      });
      f.saveAs = g.saveAs = g, module.exports = g;
    });
  })(FileSaver_min$1);
  return FileSaver_min$1.exports;
}
var FileSaver_minExports = requireFileSaver_min();
const _hoisted_1$3 = { style: { "display": "inline-flex", "align-items": "center", "gap": "10px" } };
const _hoisted_2$2 = { class: "inline-flex" };
const _hoisted_3$1 = { style: { "display": "inline-flex", "align-items": "center" } };
const _hoisted_4$1 = { class: "room-list" };
const _hoisted_5$1 = ["onClick"];
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { class: "footer" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    name: "Setting"
  },
  __name: "index",
  props: {
    "modelValue": { type: Boolean, ...{ required: true, default: false } },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const notice = useNotification();
    const appConfigStore = useAppConfig();
    const showModal = useModel(__props, "modelValue");
    const isWeb = computed(() => window.isWeb);
    const config$1 = ref({
      task: {
        ffmpegMaxNum: 3,
        douyuDownloadMaxNum: -1,
        biliUploadMaxNum: -1,
        biliDownloadMaxNum: -1,
        syncMaxNum: 3
      },
      sync: {
        syncConfigs: []
      }
    });
    const initConfig = ref({});
    const logLevelOptions = ref([
      { label: "debug", value: "debug" },
      { label: "info", value: "info" },
      { label: "warn", value: "warn" },
      { label: "error", value: "error" }
    ]);
    const confirm = useConfirm();
    const { setTheme } = useThemeStore();
    const saveConfig = async () => {
      if (!isWeb.value && initConfig.value.webhook.recoderFolder && initConfig.value.webhook.recoderFolder !== config$1.value.webhook.recoderFolder) {
        const isExits = await window.api.exits(
          window.path.join(config$1.value.webhook.recoderFolder, "config.json")
        );
        if (!isExits) {
          const [status] = await confirm.warning({
            content: "录播姬目录下应该有一个名为config.json的文件，请确认选择的目录是否正确？"
          });
          if (!status) return;
        }
      }
      if (!config$1.value.passKey) {
        notice.error({
          title: "鉴权密钥不能为空",
          duration: 1e3
        });
        return;
      }
      await config.save(deepRaw(config$1.value));
      setTheme(config$1.value.theme);
      window?.api?.common?.setOpenAtLogin(config$1.value.autoLaunch || false);
      close();
      appConfigStore.getAppConfig();
    };
    const close = () => {
      showModal.value = false;
    };
    const getConfig = async () => {
      const data = await config.get();
      config$1.value = data;
      initConfig.value = cloneDeep(data);
    };
    const selectFile = async (type, defaultPath) => {
      const files = await window.api.openFile({
        multi: false,
        defaultPath
      });
      if (!files) return;
      if (type === "ffmpeg") {
        config$1.value.ffmpegPath = files[0];
      } else if (type === "ffprobe") {
        config$1.value.ffprobePath = files[0];
      } else if (type === "danmakuFactory") {
        config$1.value.danmuFactoryPath = files[0];
      } else if (type === "losslessCut") {
        config$1.value.losslessCutPath = files[0];
      } else if (type === "mesio") {
        config$1.value.mesioPath = files[0];
      } else if (type === "bililive") {
        config$1.value.bililiveRecorderPath = files[0];
      } else if (type === "audiowaveform") {
        config$1.value.audiowaveformPath = files[0];
      } else {
        console.error("未知文件类型");
      }
    };
    const resetBin = async (type) => {
      if (type === "ffmpeg") {
        config$1.value.ffmpegPath = await config.resetBin(type);
      } else if (type === "ffprobe") {
        config$1.value.ffprobePath = await config.resetBin(type);
      } else if (type === "danmakuFactory") {
        config$1.value.danmuFactoryPath = await config.resetBin(type);
      } else {
        console.error("未知文件类型");
      }
    };
    const selectFolder = async (type) => {
      let defaultPath = "";
      if (type === "recorder") {
        defaultPath = config$1.value.webhook.recoderFolder;
      } else if (type === "cache") {
        defaultPath = config$1.value.cacheFolder;
      } else {
        throw new Error("未知文件类型");
      }
      let file = await showDirectoryDialog({
        defaultPath
      });
      if (!file) return;
      if (type === "recorder") {
        config$1.value.webhook.recoderFolder = file;
      } else if (type === "cache") {
        config$1.value.cacheFolder = file;
      } else {
        throw new Error("未知文件类型");
      }
    };
    const openCacheFolder = async () => {
      const cachePath = await common.getTempPath();
      window.api.openPath(cachePath);
    };
    const handleOpen = async () => {
      await Promise.all([getPresets(), getPresetOptions()]);
      await getConfig();
    };
    const presets = ref([]);
    const getPresets = async () => {
      presets.value = await videoPreset.list();
    };
    const presetsOptions = computed(() => {
      return presets.value.map((item) => {
        return {
          label: item.name,
          value: item.id
        };
      });
    });
    const roomList = computed(() => {
      return Object.entries(config$1.value.webhook.rooms).map(([id, value]) => {
        return {
          id,
          ...value
        };
      });
    });
    const roomType = ref("add");
    const roomDetailVisible = ref(false);
    const roomGlobalCheckObj = ref({});
    const globalFields = ref([
      "uid",
      "minSize",
      "title",
      "uploadPresetId",
      "danmu",
      "ffmpegPreset",
      "danmuPreset",
      "autoPartMerge",
      "partMergeMinute",
      "hotProgressSample",
      "hotProgressHeight",
      "hotProgressColor",
      "hotProgressFillColor",
      "hotProgress",
      "useLiveCover",
      "convert2Mp4",
      "removeSourceAferrConvert2Mp4",
      "flvRepair",
      "syncId",
      "afterConvertAction",
      "uploadHandleTime",
      "limitUploadTime",
      "uploadNoDanmu",
      "noDanmuVideoPreset",
      "limitVideoConvertTime",
      "videoHandleTime",
      "partTitleTemplate",
      "afterUploadDeletAction"
    ]);
    const webhookDefaultValue = computed(() => {
      if (!config$1.value.webhook) return {};
      const data = cloneDeep(config$1.value.webhook);
      delete data.rooms;
      delete data.blacklist;
      delete data.recoderFolder;
      return data;
    });
    const handleRoomDetail = (roomId) => {
      roomType.value = "edit";
      const room = config$1.value.webhook.rooms[roomId];
      tempRoomDetail.value = {
        id: roomId,
        ...room
      };
      const noGlobalFields = room.noGlobal ?? [];
      for (const key of globalFields.value) {
        roomGlobalCheckObj.value[key] = !noGlobalFields.includes(key);
        if (roomGlobalCheckObj.value[key]) {
          tempRoomDetail.value[key] = webhookDefaultValue.value[key];
        }
      }
      console.log(roomGlobalCheckObj.value, room);
      roomDetailVisible.value = true;
    };
    const tempRoomDetail = ref({
      id: void 0,
      uid: void 0,
      open: true,
      minSize: 0,
      title: "",
      uploadPresetId: "",
      remark: "",
      danmu: false,
      ffmpegPreset: void 0,
      danmuPreset: void 0,
      autoPartMerge: false,
      partMergeMinute: 10,
      hotProgress: false,
      useLiveCover: false,
      hotProgressSample: 30,
      hotProgressHeight: 60,
      hotProgressColor: "#f9f5f3",
      hotProgressFillColor: "#333333",
      convert2Mp4: false,
      removeSourceAferrConvert2Mp4: true,
      flvRepair: false,
      syncId: void 0,
      afterConvertAction: [],
      uploadHandleTime: ["00:00:00", "23:59:59"],
      limitUploadTime: false,
      uploadNoDanmu: false,
      noDanmuVideoPreset: void 0,
      limitVideoConvertTime: false,
      videoHandleTime: ["00:00:00", "23:59:59"],
      partTitleTemplate: "",
      afterUploadDeletAction: "none"
    });
    const saveRoomDetail = (data) => {
      config$1.value.webhook.rooms[data.id] = data;
    };
    const deleteRoom = (roomId) => {
      delete config$1.value.webhook.rooms[roomId];
      roomDetailVisible.value = false;
    };
    const ffmpegOptions = ref([]);
    const getPresetOptions = async () => {
      ffmpegOptions.value = await ffmpegPreset.options();
    };
    const addRoom = () => {
      roomType.value = "add";
      tempRoomDetail.value = {
        id: void 0,
        open: true,
        remark: "",
        ...toRaw(webhookDefaultValue.value)
      };
      console.log("tempRoomDetail", tempRoomDetail.value);
      roomDetailVisible.value = true;
      for (const key of globalFields.value) {
        roomGlobalCheckObj.value[key] = true;
      }
      console.log(roomGlobalCheckObj.value);
    };
    const exportLoading = ref(false);
    const exportSettingZip = async () => {
      exportLoading.value = true;
      try {
        const version = await common.version();
        const name = `biliLive-tools-${version}-${(/* @__PURE__ */ new Date()).getTime()}-配置备份.zip`;
        const blob = await config.exportConfig();
        FileSaver_minExports.saveAs(blob, name);
      } catch {
        notice.error({
          title: "导出失败",
          duration: 1e3
        });
      } finally {
        exportLoading.value = false;
      }
    };
    const { open: openImportFile, onChange: onImportFileChange } = useFileDialog({
      accept: ".zip",
      directory: false,
      multiple: false
    });
    onImportFileChange((files) => {
      if (!files) return;
      if (files.length === 0) return;
      console.log(files[0]);
      confirmImportSettingZip(files[0]);
    });
    const importSettingZip = async () => {
      const [status] = await confirm.warning({
        content: "导入前请尽量保持版本一致，部分配置将在重启后生效，导入后所有配置都将被替换，是否继续？"
      });
      if (!status) return;
      openImportFile();
    };
    const confirmImportSettingZip = async (file) => {
      await config.importConfig(file);
      await confirm.warning({
        content: "导入成功，重启应用后生效"
      });
      showModal.value = false;
    };
    const selectTab = ref("common");
    __expose({
      set: async (tab, extra) => {
        if (tab) {
          selectTab.value = tab;
        }
        if (selectTab.value === "webhook" && extra?.roomId) {
          if (config$1?.value?.webhook?.rooms?.[extra.roomId]) {
            handleRoomDetail(extra.roomId);
          }
        }
      }
    });
    const checkUpdateVisible = ref(false);
    const checkForUpdates = async () => {
      if (isWeb.value) {
        checkUpdateVisible.value = true;
        return;
      } else {
        await window.api.common.checkUpdate();
      }
    };
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$i;
      const _component_n_switch = __unplugin_components_1$3;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_n_button = Button;
      const _component_n_select = __unplugin_components_0$3;
      const _component_n_input = __unplugin_components_0$4;
      const _component_n_input_number = __unplugin_components_0$1;
      const _component_n_icon = NIcon;
      const _component_n_form = __unplugin_components_5;
      const _component_n_tab_pane = __unplugin_components_4$1;
      const _component_n_tabs = __unplugin_components_6;
      const _component_n_card = __unplugin_components_4;
      const _component_n_modal = __unplugin_components_3$2;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_n_modal, {
          show: showModal.value,
          "onUpdate:show": _cache[45] || (_cache[45] = ($event) => showModal.value = $event),
          "mask-closable": false,
          "auto-focus": "",
          "on-after-enter": handleOpen,
          class: "setting-modal"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "calc(100% - 60px)" },
              bordered: false,
              size: "huge",
              role: "dialog",
              "aria-modal": "true",
              class: "card"
            }, {
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_7, [
                  createVNode(_component_n_button, {
                    class: "btn",
                    onClick: close
                  }, {
                    default: withCtx(() => _cache[59] || (_cache[59] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    class: "btn",
                    onClick: saveConfig
                  }, {
                    default: withCtx(() => _cache[60] || (_cache[60] = [
                      createTextVNode(" 确认 ")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_tabs, {
                  value: unref(selectTab),
                  "onUpdate:value": _cache[44] || (_cache[44] = ($event) => isRef(selectTab) ? selectTab.value = $event : null),
                  type: "bar",
                  animated: "",
                  placement: "left",
                  class: "setting-tab"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_tab_pane, {
                      name: "common",
                      tab: "基本"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_form, {
                          ref: "formRef",
                          "label-placement": "left",
                          "label-width": 160
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createVNode(_component_Tip, {
                                  text: "删除至回收站",
                                  tip: "关闭后若使用“删除源文件”等选项，文件将被直接删除，不会进入回收站，如果使用的文件为smb等远程协议挂载，可能会删除失败"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: unref(config$1).trash,
                                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(config$1).trash = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => _cache[49] || (_cache[49] = [
                                createBaseVNode("span", { class: "inline-flex" }, " 自动检查更新 ", -1)
                              ])),
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_1$3, [
                                  !unref(isWeb) ? (openBlock(), createBlock(_component_n_switch, {
                                    key: 0,
                                    value: unref(config$1).autoUpdate,
                                    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(config$1).autoUpdate = $event)
                                  }, null, 8, ["value"])) : createCommentVNode("", true),
                                  createVNode(_component_n_button, {
                                    type: "primary",
                                    ghost: "",
                                    onClick: checkForUpdates
                                  }, {
                                    default: withCtx(() => _cache[50] || (_cache[50] = [
                                      createTextVNode("检查更新")
                                    ])),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }),
                            !unref(isWeb) ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                              label: withCtx(() => _cache[51] || (_cache[51] = [
                                createBaseVNode("span", { class: "inline-flex" }, " 开启自启动 ", -1)
                              ])),
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: unref(config$1).autoLaunch,
                                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(config$1).autoLaunch = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !unref(isWeb) ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
                              label: withCtx(() => _cache[52] || (_cache[52] = [
                                createBaseVNode("span", { class: "inline-flex" }, " 最小化到托盘 ", -1)
                              ])),
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: unref(config$1).minimizeToTray,
                                  "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(config$1).minimizeToTray = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !unref(isWeb) ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
                              label: withCtx(() => _cache[53] || (_cache[53] = [
                                createBaseVNode("span", { class: "inline-flex" }, " 关闭到托盘 ", -1)
                              ])),
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: unref(config$1).closeToTray,
                                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(config$1).closeToTray = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(_component_n_form_item, { label: "log等级" }, {
                              default: withCtx(() => [
                                createVNode(_component_n_select, {
                                  value: unref(config$1).logLevel,
                                  "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(config$1).logLevel = $event),
                                  options: unref(logLevelOptions)
                                }, null, 8, ["value", "options"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createVNode(_component_Tip, {
                                  text: "host",
                                  tip: `修改后需重启生效`
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_input, {
                                  value: unref(config$1).host,
                                  "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(config$1).host = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createVNode(_component_Tip, {
                                  text: "port",
                                  tip: `你可以在浏览器访问 http://127.0.0.1:${unref(config$1).port} 查询是否启动成功<br/><b>修改后需重启生效</b>`
                                }, null, 8, ["tip"])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_input_number, {
                                  value: unref(config$1).port,
                                  "onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(config$1).port = $event),
                                  min: "1",
                                  max: "65535"
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createVNode(_component_Tip, {
                                  text: "鉴权密钥",
                                  tip: "用于webui鉴权，修改后需重启生效"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_input, {
                                  value: unref(config$1).passKey,
                                  "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(config$1).passKey = $event),
                                  type: "password",
                                  "show-password-on": "click"
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createBaseVNode("span", _hoisted_2$2, [
                                  createVNode(_component_Tip, {
                                    text: "自定义二进制文件",
                                    tip: `开启后，将无法自动使用项目内二进制文件，可能导致应用无法使用，请谨慎开启`
                                  })
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: unref(config$1).customExecPath,
                                  "onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(config$1).customExecPath = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            unref(config$1).customExecPath ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                              createVNode(_component_n_form_item, { label: "ffmpeg路径" }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_input, {
                                    value: unref(config$1).ffmpegPath,
                                    "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(config$1).ffmpegPath = $event),
                                    placeholder: "请输入ffmpeg可执行文件路径，需要重启软件"
                                  }, null, 8, ["value"]),
                                  !unref(isWeb) ? (openBlock(), createBlock(_component_n_icon, {
                                    key: 0,
                                    style: { "margin-left": "10px" },
                                    size: "24",
                                    class: "pointer",
                                    title: "选择文件",
                                    onClick: _cache[11] || (_cache[11] = ($event) => selectFile("ffmpeg", unref(config$1).ffmpegPath))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(FolderOpenOutline))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_n_icon, {
                                    style: { "margin-left": "10px" },
                                    size: "24",
                                    class: "pointer",
                                    title: "重置",
                                    onClick: _cache[12] || (_cache[12] = ($event) => resetBin("ffmpeg"))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Refresh))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_form_item, { label: "ffprobe路径" }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_input, {
                                    value: unref(config$1).ffprobePath,
                                    "onUpdate:value": _cache[13] || (_cache[13] = ($event) => unref(config$1).ffprobePath = $event),
                                    placeholder: "请输入ffprobe可执行文件路径，需要重启软件"
                                  }, null, 8, ["value"]),
                                  !unref(isWeb) ? (openBlock(), createBlock(_component_n_icon, {
                                    key: 0,
                                    style: { "margin-left": "10px" },
                                    size: "24",
                                    class: "pointer",
                                    onClick: _cache[14] || (_cache[14] = ($event) => selectFile("ffprobe", unref(config$1).ffprobePath))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(FolderOpenOutline))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_n_icon, {
                                    style: { "margin-left": "10px" },
                                    size: "24",
                                    class: "pointer",
                                    title: "重置",
                                    onClick: _cache[15] || (_cache[15] = ($event) => resetBin("ffprobe"))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Refresh))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_form_item, { label: "danmakuFactory路径" }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_input, {
                                    value: unref(config$1).danmuFactoryPath,
                                    "onUpdate:value": _cache[16] || (_cache[16] = ($event) => unref(config$1).danmuFactoryPath = $event),
                                    placeholder: "请输入danmakuFactory可执行文件路径，需要重启软件"
                                  }, null, 8, ["value"]),
                                  !unref(isWeb) ? (openBlock(), createBlock(_component_n_icon, {
                                    key: 0,
                                    style: { "margin-left": "10px" },
                                    size: "24",
                                    class: "pointer",
                                    onClick: _cache[17] || (_cache[17] = ($event) => selectFile("danmakuFactory", unref(config$1).danmuFactoryPath))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(FolderOpenOutline))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_n_icon, {
                                    style: { "margin-left": "10px" },
                                    size: "24",
                                    class: "pointer",
                                    title: "重置",
                                    onClick: _cache[18] || (_cache[18] = ($event) => resetBin("danmakuFactory"))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Refresh))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_form_item, null, {
                                label: withCtx(() => [
                                  createVNode(_component_Tip, {
                                    text: "mesio路径",
                                    tip: "最新测试过的版本为0.3.5，请先去项目查看文档：https://github.com/hua0512/rust-srec/blob/main/mesio-cli/README.md"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_n_input, {
                                    value: unref(config$1).mesioPath,
                                    "onUpdate:value": _cache[19] || (_cache[19] = ($event) => unref(config$1).mesioPath = $event),
                                    placeholder: "请输入mesio可执行文件路径"
                                  }, null, 8, ["value"]),
                                  !unref(isWeb) ? (openBlock(), createBlock(_component_n_icon, {
                                    key: 0,
                                    style: { "margin-left": "10px" },
                                    size: "26",
                                    class: "pointer",
                                    onClick: _cache[20] || (_cache[20] = ($event) => selectFile("mesio", unref(config$1).mesioPath))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(FolderOpenOutline))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_form_item, null, {
                                label: withCtx(() => [
                                  createVNode(_component_Tip, {
                                    text: "录播姬命令行路径",
                                    tip: "并非官方版本，请先去项目下载：https://github.com/renmu123/BililiveRecorder"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_n_input, {
                                    value: unref(config$1).bililiveRecorderPath,
                                    "onUpdate:value": _cache[21] || (_cache[21] = ($event) => unref(config$1).bililiveRecorderPath = $event),
                                    placeholder: "请输入bililiveRecorder可执行文件路径"
                                  }, null, 8, ["value"]),
                                  !unref(isWeb) ? (openBlock(), createBlock(_component_n_icon, {
                                    key: 0,
                                    style: { "margin-left": "10px" },
                                    size: "26",
                                    class: "pointer",
                                    onClick: _cache[22] || (_cache[22] = ($event) => selectFile("bililive", unref(config$1).bililiveRecorderPath))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(FolderOpenOutline))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_form_item, null, {
                                label: withCtx(() => [
                                  createVNode(_component_Tip, {
                                    text: "audiowaveform路径",
                                    tip: "根据文档选择对应版本，用于提取音频波形"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_n_input, {
                                    value: unref(config$1).audiowaveformPath,
                                    "onUpdate:value": _cache[23] || (_cache[23] = ($event) => unref(config$1).audiowaveformPath = $event),
                                    placeholder: "请输入audiowaveform可执行文件路径"
                                  }, null, 8, ["value"]),
                                  !unref(isWeb) ? (openBlock(), createBlock(_component_n_icon, {
                                    key: 0,
                                    style: { "margin-left": "10px" },
                                    size: "26",
                                    class: "pointer",
                                    onClick: _cache[24] || (_cache[24] = ($event) => selectFile("audiowaveform", unref(config$1).audiowaveformPath))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(FolderOpenOutline))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ], 64)) : createCommentVNode("", true),
                            createVNode(_component_n_form_item, { label: "lossless-cut路径" }, {
                              default: withCtx(() => [
                                createVNode(_component_n_input, {
                                  value: unref(config$1).losslessCutPath,
                                  "onUpdate:value": _cache[25] || (_cache[25] = ($event) => unref(config$1).losslessCutPath = $event),
                                  placeholder: "请输入lossless-cut可执行文件路径，设置为空使用默认桌面程序"
                                }, null, 8, ["value"]),
                                !unref(isWeb) ? (openBlock(), createBlock(_component_n_icon, {
                                  key: 0,
                                  style: { "margin-left": "10px" },
                                  size: "26",
                                  class: "pointer",
                                  onClick: _cache[26] || (_cache[26] = ($event) => selectFile("losslessCut", unref(config$1).losslessCutPath))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(FolderOpenOutline))
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createVNode(_component_Tip, {
                                  text: "缓存文件夹",
                                  tip: "用于存放乱七八糟的临时文件，默认使用系统临时文件夹"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_input, {
                                  value: unref(config$1).cacheFolder,
                                  "onUpdate:value": _cache[27] || (_cache[27] = ($event) => unref(config$1).cacheFolder = $event),
                                  placeholder: "请输入缓存文件夹路径，默认使用系统临时文件夹"
                                }, null, 8, ["value"]),
                                createVNode(_component_n_icon, {
                                  style: { "margin-left": "10px" },
                                  size: "26",
                                  class: "pointer",
                                  title: "选择文件夹",
                                  onClick: _cache[28] || (_cache[28] = ($event) => selectFolder("cache"))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(FolderOpenOutline))
                                  ]),
                                  _: 1
                                }),
                                !unref(isWeb) ? (openBlock(), createBlock(_component_n_button, {
                                  key: 0,
                                  style: { "margin-left": "10px" },
                                  type: "primary",
                                  onClick: openCacheFolder
                                }, {
                                  default: withCtx(() => _cache[54] || (_cache[54] = [
                                    createTextVNode(" 打开 ")
                                  ])),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createVNode(_component_Tip, {
                                  text: "配置",
                                  tip: "导出配置文件，导入后重启应用生效，尽量保持版本一致，如果按钮无法使用，请参照常见问题进行手动备份"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_button, {
                                  type: "primary",
                                  onClick: exportSettingZip,
                                  loading: unref(exportLoading)
                                }, {
                                  default: withCtx(() => _cache[55] || (_cache[55] = [
                                    createTextVNode("导出配置")
                                  ])),
                                  _: 1
                                }, 8, ["loading"]),
                                createVNode(_component_n_button, {
                                  type: "primary",
                                  style: { "margin-left": "10px" },
                                  onClick: importSettingZip
                                }, {
                                  default: withCtx(() => _cache[56] || (_cache[56] = [
                                    createTextVNode("导入配置")
                                  ])),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 512)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "webhook",
                      tab: "Webhook"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_form, {
                          "label-placement": "left",
                          "label-width": 130
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createVNode(_component_Tip, {
                                  text: "webhook",
                                  tip: `如果本软件的录制想使用该功能，请打开录制配置中的发送到webhook选项<br/>其他软件webhook路径：<br/>B站录播姬：http://127.0.0.1:${unref(config$1).port}/webhook/bililiverecorder<br/>blrec：http://127.0.0.1:${unref(config$1).port}/webhook/blrec<br/>DDTV：http://127.0.0.1:${unref(config$1).port}/webhook/ddtv<br/>oneLiveRec：http://127.0.0.1:${unref(config$1).port}/webhook/oneliverec<br/>自定义（参数见文档）：http://127.0.0.1:${unref(config$1).port}/webhook/custom <br/>`
                                }, null, 8, ["tip"])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: unref(config$1).webhook.open,
                                  "onUpdate:value": _cache[29] || (_cache[29] = ($event) => unref(config$1).webhook.open = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createVNode(_component_Tip, {
                                  text: "黑名单",
                                  tip: "设置后相应直播间的视频不会被处理，用英文逗号分隔，如: 123456,1234567，也可以使用*，代表所有房间号"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_input, {
                                  value: unref(config$1).webhook.blacklist,
                                  "onUpdate:value": _cache[30] || (_cache[30] = ($event) => unref(config$1).webhook.blacklist = $event),
                                  placeholder: "设置需要屏蔽的房间号，用英文逗号分隔"
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, { label: "录播姬工作目录" }, {
                              label: withCtx(() => [
                                createVNode(_component_Tip, {
                                  text: "录播姬工作目录",
                                  tip: "仅当你使用录播姬的webhook时，需要配置此选项"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_input, {
                                  value: unref(config$1).webhook.recoderFolder,
                                  "onUpdate:value": _cache[31] || (_cache[31] = ($event) => unref(config$1).webhook.recoderFolder = $event),
                                  placeholder: "请选择录播姬工作目录"
                                }, null, 8, ["value"]),
                                createVNode(_component_n_icon, {
                                  style: { "margin-left": "10px" },
                                  size: "26",
                                  class: "pointer",
                                  onClick: _cache[32] || (_cache[32] = ($event) => selectFolder("recorder"))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(FolderOpenOutline))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(CommonSetting, {
                              data: unref(config$1).webhook,
                              "onUpdate:data": _cache[33] || (_cache[33] = ($event) => unref(config$1).webhook = $event),
                              "biliup-presets-options": unref(presetsOptions),
                              "ffmpeg-options": unref(ffmpegOptions),
                              "global-value": unref(webhookDefaultValue),
                              "global-fields-obj": {},
                              syncConfigs: unref(config$1).sync.syncConfigs,
                              type: "global"
                            }, null, 8, ["data", "biliup-presets-options", "ffmpeg-options", "global-value", "syncConfigs"]),
                            createBaseVNode("h2", _hoisted_3$1, [
                              _cache[57] || (_cache[57] = createTextVNode(" 独立配置")),
                              createVNode(_component_Tip, {
                                tip: "单独设置房间号的上传配置，会覆盖全局配置",
                                size: 22
                              })
                            ]),
                            createBaseVNode("div", _hoisted_4$1, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(roomList), (room) => {
                                return openBlock(), createElementBlock("span", {
                                  key: room.id,
                                  class: "room",
                                  onClick: ($event) => handleRoomDetail(room.id)
                                }, [
                                  createTextVNode(toDisplayString(room.id), 1),
                                  room.remark ? (openBlock(), createElementBlock("span", _hoisted_6, "(" + toDisplayString(room.remark) + ")", 1)) : createCommentVNode("", true)
                                ], 8, _hoisted_5$1);
                              }), 128)),
                              createVNode(_component_n_button, {
                                type: "primary",
                                onClick: addRoom
                              }, {
                                default: withCtx(() => _cache[58] || (_cache[58] = [
                                  createTextVNode(" 添加 ")
                                ])),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "sync",
                      tab: "文件同步"
                    }, {
                      default: withCtx(() => [
                        createVNode(SyncSetting, {
                          data: unref(config$1),
                          "onUpdate:data": _cache[34] || (_cache[34] = ($event) => isRef(config$1) ? config$1.value = $event : null)
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "upload",
                      tab: "B站上传"
                    }, {
                      default: withCtx(() => [
                        createVNode(BiliSetting, {
                          data: unref(config$1),
                          "onUpdate:data": _cache[35] || (_cache[35] = ($event) => isRef(config$1) ? config$1.value = $event : null)
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "recorder",
                      tab: "直播录制"
                    }, {
                      default: withCtx(() => [
                        createVNode(RecordSetting, {
                          data: unref(config$1),
                          "onUpdate:data": _cache[36] || (_cache[36] = ($event) => isRef(config$1) ? config$1.value = $event : null)
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "virtualRecord",
                      tab: "虚拟录制"
                    }, {
                      default: withCtx(() => [
                        createVNode(VirtualRecordSetting, {
                          data: unref(config$1),
                          "onUpdate:data": _cache[37] || (_cache[37] = ($event) => isRef(config$1) ? config$1.value = $event : null)
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "cut",
                      tab: "切片"
                    }, {
                      default: withCtx(() => [
                        createVNode(CutSetting, {
                          data: unref(config$1),
                          "onUpdate:data": _cache[38] || (_cache[38] = ($event) => isRef(config$1) ? config$1.value = $event : null)
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "ai",
                      tab: "AI配置"
                    }, {
                      default: withCtx(() => [
                        createVNode(AISetting, {
                          data: unref(config$1),
                          "onUpdate:data": _cache[39] || (_cache[39] = ($event) => isRef(config$1) ? config$1.value = $event : null)
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "task",
                      tab: "任务"
                    }, {
                      default: withCtx(() => [
                        createVNode(TaskSetting, {
                          data: unref(config$1),
                          "onUpdate:data": _cache[40] || (_cache[40] = ($event) => isRef(config$1) ? config$1.value = $event : null)
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "translate",
                      tab: "视频订阅"
                    }, {
                      default: withCtx(() => [
                        createVNode(VideoSetting, {
                          data: unref(config$1),
                          "onUpdate:data": _cache[41] || (_cache[41] = ($event) => isRef(config$1) ? config$1.value = $event : null)
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "notification",
                      tab: "通知"
                    }, {
                      default: withCtx(() => [
                        createVNode(NotificationSetting, {
                          data: unref(config$1),
                          "onUpdate:data": _cache[42] || (_cache[42] = ($event) => isRef(config$1) ? config$1.value = $event : null)
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "other",
                      tab: "UI界面"
                    }, {
                      default: withCtx(() => [
                        createVNode(OtherSetting, {
                          data: unref(config$1),
                          "onUpdate:data": _cache[43] || (_cache[43] = ($event) => isRef(config$1) ? config$1.value = $event : null)
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(RoomSettingDialog, {
          visible: unref(roomDetailVisible),
          "onUpdate:visible": _cache[46] || (_cache[46] = ($event) => isRef(roomDetailVisible) ? roomDetailVisible.value = $event : null),
          data: unref(tempRoomDetail),
          "onUpdate:data": _cache[47] || (_cache[47] = ($event) => isRef(tempRoomDetail) ? tempRoomDetail.value = $event : null),
          type: unref(roomType),
          "biliup-presets-options": unref(presetsOptions),
          "ffmpeg-options": unref(ffmpegOptions),
          "global-fields-obj": unref(roomGlobalCheckObj),
          "global-value": unref(webhookDefaultValue),
          syncConfigs: unref(config$1).sync.syncConfigs,
          onSave: saveRoomDetail,
          onDelete: deleteRoom
        }, null, 8, ["visible", "data", "type", "biliup-presets-options", "ffmpeg-options", "global-fields-obj", "global-value", "syncConfigs"]),
        createVNode(CheckUpdateModal, {
          visible: unref(checkUpdateVisible),
          "onUpdate:visible": _cache[48] || (_cache[48] = ($event) => isRef(checkUpdateVisible) ? checkUpdateVisible.value = $event : null)
        }, null, 8, ["visible"])
      ], 64);
    };
  }
});
const AppSettingDialog = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-1f52ae68"]]);
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
let _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
const escapeTest = /[&<>"']/;
const escapeReplace = new RegExp(escapeTest.source, "g");
const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
const escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape$1(html2, encode) {
  if (encode) {
    if (escapeTest.test(html2)) {
      return html2.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html2)) {
      return html2.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  let source = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return href;
}
const noopTest = { exec: () => null };
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false;
    let curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count)
        cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c2, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c2 && true) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function outputLink(cap, link2, raw, lexer) {
  const href = link2.href;
  const title = link2.title ? escape$1(link2.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text)
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape$1(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
class _Tokenizer {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(options) {
    this.options = options || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^(?: {1,4}| {0,3}\t)/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: rtrim(cap[0], "\n")
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let lines = rtrim(cap[0], "\n").split("\n");
      let raw = "";
      let text = "";
      const tokens = [];
      while (lines.length > 0) {
        let inBlockquote = false;
        const currentLines = [];
        let i;
        for (i = 0; i < lines.length; i++) {
          if (/^ {0,3}>/.test(lines[i])) {
            currentLines.push(lines[i]);
            inBlockquote = true;
          } else if (!inBlockquote) {
            currentLines.push(lines[i]);
          } else {
            break;
          }
        }
        lines = lines.slice(i);
        const currentRaw = currentLines.join("\n");
        const currentText = currentRaw.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, "\n    $1").replace(/^ {0,3}>[ \t]?/gm, "");
        raw = raw ? `${raw}
${currentRaw}` : currentRaw;
        text = text ? `${text}
${currentText}` : currentText;
        const top = this.lexer.state.top;
        this.lexer.state.top = true;
        this.lexer.blockTokens(currentText, tokens, true);
        this.lexer.state.top = top;
        if (lines.length === 0) {
          break;
        }
        const lastToken = tokens[tokens.length - 1];
        if (lastToken?.type === "code") {
          break;
        } else if (lastToken?.type === "blockquote") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.blockquote(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
          break;
        } else if (lastToken?.type === "list") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.list(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
          lines = newText.substring(tokens[tokens.length - 1].raw.length).split("\n");
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        let raw = "";
        let itemContents = "";
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
        let nextLine = src.split("\n", 1)[0];
        let blankLine = !line.trim();
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else if (blankLine) {
          indent = cap[1].length + 1;
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        if (blankLine && /^[ \t]*$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          const htmlBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}<(?:[a-z].*>|!--)`, "i");
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            let nextLineWithoutTabs;
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
              nextLineWithoutTabs = nextLine;
            } else {
              nextLineWithoutTabs = nextLine.replace(/\t/g, "    ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (htmlBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(nextLine)) {
              break;
            }
            if (nextLineWithoutTabs.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLineWithoutTabs.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.replace(/\t/g, "    ").search(/[^ ]/) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLineWithoutTabs.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (/\n[ \t]*\n[ \t]*$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      list2.items[list2.items.length - 1].raw = list2.items[list2.items.length - 1].raw.trimEnd();
      list2.items[list2.items.length - 1].text = list2.items[list2.items.length - 1].text.trimEnd();
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i = 0; i < list2.items.length; i++) {
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (!cap) {
      return;
    }
    if (!/[:|]/.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(/^\||\| *$/g, "").split("|");
    const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (/^ *-+: *$/.test(align)) {
        item.align.push("right");
      } else if (/^ *:-+: *$/.test(align)) {
        item.align.push("center");
      } else if (/^ *:-+ *$/.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (let i = 0; i < headers.length; i++) {
      item.header.push({
        text: headers[i],
        tokens: this.lexer.inline(headers[i]),
        header: true,
        align: item.align[i]
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell),
          header: false,
          align: item.align[i]
        };
      }));
    }
    return item;
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape$1(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      const linkString = (cap[2] || cap[1]).replace(/\s+/g, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match[0]].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape$1(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape$1(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
        } while (prevCapZero !== cap[0]);
        text = escape$1(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = cap[0];
      } else {
        text = escape$1(cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
}
const newline = /^(?:[ \t]*(?:\n|$))+/;
const blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
const fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
const hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
const heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
const bullet = /(?:[*+-]|\d{1,9}[.)])/;
const lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex();
const _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
const blockText = /^[^\n]+/;
const _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
const def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
const list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
const _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
const _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
const html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
const paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
const blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
const blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
const gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
const blockGfm = {
  ...blockNormal,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
};
const blockPedantic = {
  ...blockNormal,
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
};
const escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
const inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
const br = /^( {2,}|\\)\n(?!\s*$)/;
const inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
const _punctuation = "\\p{P}\\p{S}";
const punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex();
const blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
const emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex();
const emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex();
const emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex();
const anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex();
const autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
const _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
const tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
const _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
const link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
const reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
const nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
const reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
const inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
const inlinePedantic = {
  ...inlineNormal,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
};
const inlineGfm = {
  ...inlineNormal,
  escape: edit(escape).replace("])", "~|])").getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
const inlineBreaks = {
  ...inlineGfm,
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
const block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
const inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
class _Lexer {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(options) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new _Lexer(options);
    return lexer.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new _Lexer(options);
    return lexer.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = [], lastParagraphClipped = false) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    }
    let token;
    let lastToken;
    let cutSrc;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken?.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
}
class _Renderer {
  options;
  parser;
  // set by the parser
  constructor(options) {
    this.options = options || _defaults;
  }
  space(token) {
    return "";
  }
  code({ text, lang, escaped }) {
    const langString = (lang || "").match(/^\S*/)?.[0];
    const code = text.replace(/\n$/, "") + "\n";
    if (!langString) {
      return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape$1(langString) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
  }
  blockquote({ tokens }) {
    const body = this.parser.parse(tokens);
    return `<blockquote>
${body}</blockquote>
`;
  }
  html({ text }) {
    return text;
  }
  heading({ tokens, depth }) {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
  }
  hr(token) {
    return "<hr>\n";
  }
  list(token) {
    const ordered = token.ordered;
    const start = token.start;
    let body = "";
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j];
      body += this.listitem(item);
    }
    const type = ordered ? "ol" : "ul";
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
  }
  listitem(item) {
    let itemBody = "";
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked });
      if (item.loose) {
        if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
            item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
          }
        } else {
          item.tokens.unshift({
            type: "text",
            raw: checkbox + " ",
            text: checkbox + " "
          });
        }
      } else {
        itemBody += checkbox + " ";
      }
    }
    itemBody += this.parser.parse(item.tokens, !!item.loose);
    return `<li>${itemBody}</li>
`;
  }
  checkbox({ checked }) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens }) {
    return `<p>${this.parser.parseInline(tokens)}</p>
`;
  }
  table(token) {
    let header = "";
    let cell = "";
    for (let j = 0; j < token.header.length; j++) {
      cell += this.tablecell(token.header[j]);
    }
    header += this.tablerow({ text: cell });
    let body = "";
    for (let j = 0; j < token.rows.length; j++) {
      const row = token.rows[j];
      cell = "";
      for (let k = 0; k < row.length; k++) {
        cell += this.tablecell(row[k]);
      }
      body += this.tablerow({ text: cell });
    }
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow({ text }) {
    return `<tr>
${text}</tr>
`;
  }
  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type = token.header ? "th" : "td";
    const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens }) {
    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
  }
  em({ tokens }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }
  codespan({ text }) {
    return `<code>${text}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({ tokens }) {
    return `<del>${this.parser.parseInline(tokens)}</del>`;
  }
  link({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image({ href, title, text }) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += ">";
    return out;
  }
  text(token) {
    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : token.text;
  }
}
class _TextRenderer {
  // no need for block level renderers
  strong({ text }) {
    return text;
  }
  em({ text }) {
    return text;
  }
  codespan({ text }) {
    return text;
  }
  del({ text }) {
    return text;
  }
  html({ text }) {
    return text;
  }
  text({ text }) {
    return text;
  }
  link({ text }) {
    return "" + text;
  }
  image({ text }) {
    return "" + text;
  }
  br() {
    return "";
  }
}
class _Parser {
  options;
  renderer;
  textRenderer;
  constructor(options) {
    this.options = options || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new _Parser(options);
    return parser.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new _Parser(options);
    return parser.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
        const genericToken = anyToken;
        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "space": {
          out += this.renderer.space(token);
          continue;
        }
        case "hr": {
          out += this.renderer.hr(token);
          continue;
        }
        case "heading": {
          out += this.renderer.heading(token);
          continue;
        }
        case "code": {
          out += this.renderer.code(token);
          continue;
        }
        case "table": {
          out += this.renderer.table(token);
          continue;
        }
        case "blockquote": {
          out += this.renderer.blockquote(token);
          continue;
        }
        case "list": {
          out += this.renderer.list(token);
          continue;
        }
        case "html": {
          out += this.renderer.html(token);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(token);
          continue;
        }
        case "text": {
          let textToken = token;
          let body = this.renderer.text(textToken);
          while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
            textToken = tokens[++i];
            body += "\n" + this.renderer.text(textToken);
          }
          if (top) {
            out += this.renderer.paragraph({
              type: "paragraph",
              raw: body,
              text: body,
              tokens: [{ type: "text", raw: body, text: body }]
            });
          } else {
            out += body;
          }
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
        const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "escape": {
          out += renderer.text(token);
          break;
        }
        case "html": {
          out += renderer.html(token);
          break;
        }
        case "link": {
          out += renderer.link(token);
          break;
        }
        case "image": {
          out += renderer.image(token);
          break;
        }
        case "strong": {
          out += renderer.strong(token);
          break;
        }
        case "em": {
          out += renderer.em(token);
          break;
        }
        case "codespan": {
          out += renderer.codespan(token);
          break;
        }
        case "br": {
          out += renderer.br(token);
          break;
        }
        case "del": {
          out += renderer.del(token);
          break;
        }
        case "text": {
          out += renderer.text(token);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}
class _Hooks {
  options;
  block;
  constructor(options) {
    this.options = options || _defaults;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? _Lexer.lex : _Lexer.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? _Parser.parse : _Parser.parseInline;
  }
}
class Marked {
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = _Parser;
  Renderer = _Renderer;
  TextRenderer = _TextRenderer;
  Lexer = _Lexer;
  Tokenizer = _Tokenizer;
  Hooks = _Hooks;
  constructor(...args) {
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
              const tokens2 = genericToken[childTokens].flat(Infinity);
              values = values.concat(this.walkTokens(tokens2, callback));
            });
          } else if (genericToken.tokens) {
            values = values.concat(this.walkTokens(genericToken.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = { ...pack };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (["options", "parser"].includes(prop)) {
            continue;
          }
          const rendererProp = prop;
          const rendererFunc = pack.renderer[rendererProp];
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (["options", "block"].includes(prop)) {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens) {
            values = values.concat(walkTokens.call(this, token));
          }
          return values;
        };
      }
      this.defaults = { ...this.defaults, ...opts };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = { ...this.defaults, ...opt };
    return this;
  }
  lexer(src, options) {
    return _Lexer.lex(src, options ?? this.defaults);
  }
  parser(tokens, options) {
    return _Parser.parse(tokens, options ?? this.defaults);
  }
  parseMarkdown(blockType) {
    const parse = (src, options) => {
      const origOpt = { ...options };
      const opt = { ...this.defaults, ...origOpt };
      const throwError2 = this.onError(!!opt.silent, !!opt.async);
      if (this.defaults.async === true && origOpt.async === false) {
        return throwError2(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      }
      if (typeof src === "undefined" || src === null) {
        return throwError2(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError2(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
        opt.hooks.block = blockType;
      }
      const lexer = opt.hooks ? opt.hooks.provideLexer() : blockType ? _Lexer.lex : _Lexer.lexInline;
      const parser = opt.hooks ? opt.hooks.provideParser() : blockType ? _Parser.parse : _Parser.parseInline;
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError2);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        let tokens = lexer(src, opt);
        if (opt.hooks) {
          tokens = opt.hooks.processAllTokens(tokens);
        }
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html2 = parser(tokens, opt);
        if (opt.hooks) {
          html2 = opt.hooks.postprocess(html2);
        }
        return html2;
      } catch (e) {
        return throwError2(e);
      }
    };
    return parse;
  }
  onError(silent, async) {
    return (e) => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      throw e;
    };
  }
}
const markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function(options) {
  markedInstance.setOptions(options);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
_Parser.parse;
_Lexer.lex;
const changelog = '# Next\n\n## 功能\n\n- 数据看板UI优化、增加更多数据展示\n- 上传分P标题支持自动格式化 [#338](https://github.com/renmu123/biliLive-tools/pull/350)\n- 切片：支持字幕识别\n- AI：支持基于ffmpeg的whisper调用，具体参考[文档](https://docs.irenmu.com/features/ai.html#%E5%AD%97%E5%B9%95%E8%AF%86%E5%88%AB)\n\n## 优化\n\n- B站上传：水印参数默认值修改为关闭\n- 录制：“使用服务端时间戳”参数默认关闭\n- 同步：优化123网盘的同步竞态问题 [#365](https://github.com/renmu123/biliLive-tools/pull/365)\n\n## Bug修复\n\n- Webhook: 修复开启 “审核通过后删除”和上传非弹幕版 后，非弹幕版视频不会被删除的bug[#352](https://github.com/renmu123/biliLive-tools/issues/352)\n- Webhook: 修复某些情况下文件不会被删除的bug [#355](https://github.com/renmu123/biliLive-tools/issues/355)\n- B站上传：修复续传时水印参数不会被继承的bug\n- 修复 CLI 包的编译问题\n\n## 其他\n\n- 录播姬引擎升级至[3.3.3](https://github.com/renmu123/BililiveRecorder/releases/tag/v3.3.3)\n\n# 3.8.1\n\n## 优化\n\n- 切片：录制音乐歌词排版\n\n## Bug修复\n\n- 修复未开启压制时的错误删除状态 [#350](https://github.com/renmu123/biliLive-tools/pull/350)\n\n# 3.8.0\n\n## 重大变更\n\n- webhook: 重构webhook删除文件的代码\n- webhook: 上传非弹幕版的文件可以正常被删除了\n\n## 功能\n\n- 录制：B站支持和自定义host\n- 录制：虎牙重新支持wup接口，感谢来自biliup的实现\n- 弹幕：`自定义过滤函数`修改为 `自定义函数`，支持通过函数来自定义参数 [#316](https://github.com/renmu123/biliLive-tools/issues/316)\n- B站上传：支持水印选项 [#320](https://github.com/renmu123/biliLive-tools/pull/320)\n- Webhook：`删除不符合最小处理大小的文件` 将会对封面以及弹幕文件生效 [#317](https://github.com/renmu123/biliLive-tools/issues/317)\n- Webhook：`分p标题`支持`{{hasDanmaStr}}`占位符区分文件是否属于弹幕版\n- 录制：录制名占位符增加`ms`参数 [#324](https://github.com/renmu123/biliLive-tools/issues/324)\n- 音乐切片性能优化 [#330](https://github.com/renmu123/biliLive-tools/pull/330)\n\n## Bug修复\n\n- 修复礼物价格渲染错误的bug\n- 录制：为录播姬引擎增加一些外部的超时判断，避免流一直不会被中断\n- 录制：修复添加录制时如果设置了监听时间，仍然自动开始的bug\n- 弹幕：修复Linux下黑名单过滤无法使用的bug\n- 切片：修复歌曲识别无法在docker使用的bug\n\n## 其他\n\n录播姬引擎升级至[3.3.2](https://github.com/renmu123/BililiveRecorder/releases/tag/v3.3.2)\nDanmakuFactory升级至[2.1.0](https://github.com/renmu123/DanmakuFactory/releases/tag/v2.1.0)\n\n# 3.7.1\n\n- 修复 docker 打包错误\n\n# 3.7.0(2026.1.23)\n\n## 大更改\n\n- 录制引擎默认修改为“录播姬引擎”\n- 重构 webhook 匹配逻辑 [#277](https://github.com/renmu123/biliLive-tools/pull/227)\n\n## 功能\n\n- 弹幕：增加window下宽字符的支持 [#283](https://github.com/renmu123/biliLive-tools/pull/283)\n- 弹幕：添加上下间距参数支持 [#283](https://github.com/renmu123/biliLive-tools/pull/283)\n- 弹幕：支持强制覆盖输出文件参数 [#283](https://github.com/renmu123/biliLive-tools/pull/283)\n- 录制：弹幕可视化优化，抄得录播姬（ [#302](https://github.com/renmu123/biliLive-tools/issues/302)\n- 抖音录播下载支持 [#305](https://github.com/renmu123/biliLive-tools/pull/305)\n- 录制：禁止标题关键词支持正则 [#307](https://github.com/renmu123/biliLive-tools/pull/307)\n- Webhook: 支持移除不符合条件的小文件选项\n- Webhook:上传配置中设置为转载类型时转载来源支持为空，webhook中会尝试使用直播间链接（应该\n- Webhook: 视频手动上传且存在占位符时，对相关的视频文件和弹幕进行解析，从而实现对占位符的填充（应该\n- 切片：支持快速切歌、歌名获取、歌词优化\n- 切片：支持拆分、合并\n\n## 优化\n\n- B站上传：增加 `cs-akbd`、`cs-estx` 以及自定义线路 [#306](https://github.com/renmu123/biliLive-tools/pull/306)\n- B站上传：`投稿最短间隔`及`缓存投稿失败视频`选项现在针对账户生效 [#306](https://github.com/renmu123/biliLive-tools/pull/306)\n- B站上传：规避上传的406风控 [#306](https://github.com/renmu123/biliLive-tools/pull/306)\n- 弹幕：“自定义过滤函数”支持`logger`进行调试\n- 录制：B站录制 `fmp4`流优先于`ts`流\n- 录制：B站录制 `避免hls自动分段` 选项不再对`fmp4`流生效\n\n## bug修复\n\n- 弹幕：修复用户名称解析逻辑 [#283](https://github.com/renmu123/biliLive-tools/pull/283)\n\n## 其他\n\n`DanmakuFactory` 采用 https://github.com/renmu123/DanmakuFactory 此处分发的版本\n\n# 3.6.0(2026.1.8)\n\n沉迷异星工厂，无心更新（\n\n## 功能\n\n- 合并页面支持文件名排序 [#293](https://github.com/renmu123/biliLive-tools/pull/293)\n- 录制：抖音支持更多弹幕类型 [#289](https://github.com/renmu123/biliLive-tools/pull/289)\n- 支持最近录制时间显示以及筛选 [#271](https://github.com/renmu123/biliLive-tools/pull/271)\n- 录制页面支持“显示字段”配置 [#271](https://github.com/renmu123/biliLive-tools/pull/271)\n- 列表模式支持显示备注 [#271](https://github.com/renmu123/biliLive-tools/pull/271)\n- Web支持UI主题选择 [#301](https://github.com/renmu123/biliLive-tools/pull/301)\n- 录制：虎牙 wup 接口出问题了，先切回mp吧\n\n## bug修复\n\n录制：抖音弹幕某些情况下礼物弹幕用户名为空时设置为"unknown"\n\n# 3.5.2(2025.12.24)\n\n## bug修复\n\n- 录制：修复某些情况下xml文件命名错误的情况\n- 录制：修复斗鱼某些直播间解析错误\n- 录制：虎牙英雄联盟区默认使用 `wup` 接口\n- 为执行二进制命令增加 `windowsHide=true` 参数 [#284](https://github.com/renmu123/biliLive-tools/pull/284)\n\n# 3.5.1(2025.12.15)\n\n## 优化\n\n- 录制：优化抖音弹幕重连逻辑 [#279](https://github.com/renmu123/biliLive-tools/pull/279)\n- 同步：alist增加重试支持 [#272](https://github.com/renmu123/biliLive-tools/pull/272)\n- B站上传；增加一个新的审核中状态 [#272](https://github.com/renmu123/biliLive-tools/pull/272)\n\n## bug修复\n\n- 录制：修复虎牙默认接口录播姬引擎无法录制的bug，上游修复 [v3.3.1](https://github.com/renmu123/BililiveRecorder/releases/tag/v3.3.1)\n- 录制：修复抖音某些情况下cookie不生效的bug [#279](https://github.com/renmu123/biliLive-tools/pull/279)\n- B站上传：修复重试策略失效的bug\n\n## 其他\n\n- 录播姬引擎升级至 [v3.3.1](https://github.com/renmu123/BililiveRecorder/releases/tag/v3.3.1)\n\n# 3.5.0(2025.12.14)\n\n## 功能\n\n- 切片：片段支持右键菜单\n- 切片：项目支持自动保存，默认开启 [#264](https://github.com/renmu123/biliLive-tools/pull/264)\n- B站上传：内存优化，从默认约90m节约至2m\n- 录制：录播姬引擎支持主动分段 [#258](https://github.com/renmu123/biliLive-tools/pull/258)\n- 录制：虎牙支持接口参数，默认行为从星秀区使用`mp`接口修改为使用`wup`接口 [#265](https://github.com/renmu123/biliLive-tools/pull/265)\n- 录制：支持录制结束通知\n\n## 优化\n\n- 录制：录播姬引擎不再默认显示日志\n- 录制：历史记录视频预览支持弹幕\n- 录制：虎牙弹幕链接初始化优化\n- 录制：mesio 引擎支持智能停止，由上游支持 [#253](https://github.com/renmu123/biliLive-tools/pull/253)\n- 切片：视频时间栏不会再被隐藏\n- 切片：优化波形图片段颜色生成算法，未激活时使用不同颜色；激活切片栏边框色与波形图一致\n- 切片：支持`ctrl+n`新建片段\n- 切片：支持控制波形图数据是否进行缓存，默认缓存\n- B站上传：上传速度显示支持\n- B站上传：审核中状态再添加一个值\n- UI：文件选择组件支持二次拖拽\n- 弹幕：优化某些情况大文件下弹幕解析速度\n- 同步：alist创建文件夹时进行额外的检查\n\n## Bug 修复\n\n- flv修复：修复页面中缺失选择文件夹图标的bug\n- flv修复：修复使用错误UI选择框的bug\n- 斗鱼下载：修复弹幕元数据错误\n- 切片：修复开启显示时间戳，但默认没有显示的bug\n- 切片：修复添加视频后，关闭项目时部分状态未清理的bug\n- 切片：修复添加xml弹幕出现弹框取消后，部分状态错误的bug\n- 切片：修复某些情况下导入llc时间戳错误的bug [#264](https://github.com/renmu123/biliLive-tools/pull/264)\n- 切片：修复操作历史记录不会反映到波形图的bug [#264](https://github.com/renmu123/biliLive-tools/pull/264)\n- B站上传：修复上传多个分p时，存在上传完成分p，取消其他分p后，任务不会结束的bug\n- webhook: 修复oneliverec可能无法读取到元数据的bug\n\n## 其他\n\n- 录播姬依赖升级至 3.3.0\n- mesio 依赖升级至 0.3.6 [#253](https://github.com/renmu123/biliLive-tools/pull/253)\n\n# 3.4.1(2025.11.28)\n\n## Bug修复\n\n- 录制：修复未开启弹幕仍会添加空弹幕文件的bug\n- 录制：修复批量添加的bug\n- web：修复 web 文件选择器的bug [#259](https://github.com/renmu123/biliLive-tools/issues/259)\n- 切片：修复 web 项目功能\n\n# 3.4.0(2025.11.27)\n\n## 切片\n\n切片功能大幅优化，支持显示显现实时间，以及支持了波形图显示，为波形图添加了大量交互，超大文件的优化花了我一整天时间，js性能是真弱。\n\n## 功能\n\n- 录制：支持批量添加 [#225](https://github.com/renmu123/biliLive-tools/pull/225)\n- 录制：抖音支持单独配置请求接口\n- 录制：分段参数支持按文件大小分段，ffmpeg引擎不支持无损分段 [#200](https://github.com/renmu123/biliLive-tools/pull/200)\n- 录制：优化“录制结束立即重试”逻辑，默认值设置为开 [#245](https://github.com/renmu123/biliLive-tools/pull/245)\n- 弹幕：支持自定义过滤函数 [#238](https://github.com/renmu123/biliLive-tools/pull/238)\n- 切片：支持在画面中展示录制时间 [#247](https://github.com/renmu123/biliLive-tools/pull/247)\n- 切片：web版本支持项目功能 [#248](https://github.com/renmu123/biliLive-tools/pull/248)\n- 切片：波形图支持 [#252](https://github.com/renmu123/biliLive-tools/pull/252)\n- UI：客户端支持隐藏菜单栏\n- 同步：alist支持过滤四字节字符串 (#239)\n- 视频下载：斗鱼支持只下载弹幕\n\n## 优化\n\n- B站：“自动更新帐号授权”选项默认开启\n- 录制：抖音默认接口改为“web”\n- 切片：UI优化\n\n## Bug修复\n\n- 录制：修复添加时配置初始化错误的bug\n- 录制：修复抖音某些接口时不会触发关键词检测的bug\n- 录制：修复虎牙、抖音“画质匹配重试次数”不会被重置的bug\n- 录制：修复“画质匹配重试次数”修改后不生效的bug\n- 录制：修复“服务端时间戳”不会跟随全局设置的bug\n- 录制：修复录播姬引擎分段时间不支持浮点数\n- 切片：修复关闭“高能进度条”时仍进行渲染的bug [#252](https://github.com/renmu123/biliLive-tools/pull/252)\n\n## 外部依赖\n\n- 录播姬引擎升级至 [3.2.1](https://github.com/renmu123/BililiveRecorder/releases/tag/v3.2.1)，收到 onMetaData 时不再分段，有助于减轻抖音的分段\n- docker 下 BaiduPCS-GO 二进制文件版本更新至4.0.0\n- 内部依赖更新 [#236](https://github.com/renmu123/biliLive-tools/pull/236)\n\n# 3.3.2(2025.11.15)\n\n## 优化\n\n- 全局 ipv4 优先\n\n## Bug修复\n\n- B站上传：修复“缓存投稿失败视频”缓存不会失效的bug\n- 录制：修复抖音 `userWeb` 接口在未直播时报错的bug\n- 修复全栈镜像某些功能无法使用的bug [#241](https://github.com/renmu123/biliLive-tools/pull/241)\n\n# 3.3.1(2025.11.12)\n\n## 优化\n\n- 转码：m4s支持\n- 录制：B站支持 `15000` 原画\n\n## Bug修复\n\n- 升级 mesio 至0.3.3，修复禁用代理出错的bug\n- 修复单镜像复用之前端口号导致无法登录的bug\n- 修复前端镜像无api输入框的bug\n\n# 3.3.0(2025.11.09)\n\n文档站上线了：https://docs.irenmu.com/\n\n## 功能\n\n- 支持mesio及录播姬的flv修复 [#219](https://github.com/renmu123/biliLive-tools/pull/219)\n- 录制：支持flv容器，如出现问题请尝试修复 [#205](https://github.com/renmu123/biliLive-tools/pull/205)\n- 部署：支持 `renmu1234/bililive-tools` 单镜像部署 [#230](https://github.com/renmu123/biliLive-tools/pull/230)\n\n## 优化\n\n- 录制：列表模式显示使用的下载器参数\n- 录制：mesio录制引擎默认禁用任何代理参数\n- 录制：优化弹幕保存时的内存占用\n- 录制：优化ffmpeg默认参数，fmp4使用m4s后缀 [#224](https://github.com/renmu123/biliLive-tools/pull/224)\n- 录制：回退“优化录制页面的请求元数据接口数量”需求\n- 录制：B站支持 `25000` 原画真彩画质\n- 录制：文件命名规则支持 `startTime` `recordStartTime` `liveStartTime` 参数 [#235](https://github.com/renmu123/biliLive-tools/pull/235)\n- webhook：优化某些极端情况，尽量保证流程不被卡住\n- webhook：优化某些情况下的平台判断\n- 切片：优化ctrl+s的保存逻辑\n- UI：webhook预设增加了清除按钮，总有人看不到如何清除\n- UI：tab默认为展开模式\n- B站上传：添加更多线路 [#232](https://github.com/renmu123/biliLive-tools/pull/232)\n- UI：编辑录制配置弹框的优化\n\n## Bug修复\n\n- 录制：修复抖音使用 random 接口时，获取流可能失败的情况\n- 录制：修复抖音初始化的 uid 被错误覆盖的情况，导致部分请求接口无法使用\n- 录制：修复抖音礼物弹幕缺失的问题 [#213](https://github.com/renmu123/biliLive-tools/issues/213)\n- 录制：修复斗鱼弹幕某些情况下服务端时间戳不存在时使用客户端时间\n- 录制：修复弹幕元数据中不存在 `room_title` 的bug\n\n## 其他\n\n- 录播姬引擎升级至 3.1.0，默认禁用代理，支持超时检测\n- 依赖更新 [#192](https://github.com/renmu123/biliLive-tools/pull/192)\n\n# 3.2.0(2025.10.26)\n\n为自己生日提前发个版本~~希望不会有bug就是了~~\n\n本版本最惊喜的是支持了录播姬的录制引擎，希望可以替代ffmpeg的flv下载引擎~~这话怎么有点耳熟~~，所以安装包又大了50M。\n\n## 破坏性更改\n\n- 录制：“调试模式”参数已被废弃，请配置新的“调试模式”参数，支持 无，基础，详细 三种模式 [#190](https://github.com/renmu123/biliLive-tools/pull/190)\n\n## 功能\n\n- 录制：录播姬引擎支持 [#211](https://github.com/renmu123/biliLive-tools/pull/211)\n- 录制：支持虎牙&抖音支持标题黑名单 [#196](https://github.com/renmu123/biliLive-tools/pull/196)\n- 录制：并发&等待时间参数 [#201](https://github.com/renmu123/biliLive-tools/pull/201)\n- 录制：录播姬引擎支持\n- B站上传：“B站上传文件名”支持选项 [#198](https://github.com/renmu123/biliLive-tools/pull/198)\n- B站上传：支持“投稿最短间隔”参数来对抗风控 [#194](https://github.com/renmu123/biliLive-tools/pull/194)\n- 切片：客户端支持“切片独立窗口”选项，支持在新窗口打开页面 [#199](https://github.com/renmu123/biliLive-tools/pull/199)\n\n## 优化\n\n- 客户端支持打开快速打开缓存文件夹\n- 录制：重命名失败时仍发送相关事件避免卡住流程\n- 录制：优化录制遇到标题黑名单的UI展示\n- 录制：优化录制页面的请求元数据接口数量\n- 录制：尽可能避免斗鱼的scdn节点\n- 录制：优化弹幕连接的重试操作\n- 录制：优化ffmpeg的重连策略 [#204](https://github.com/renmu123/biliLive-tools/issues/204)\n- webhook：转封装任务会自动开始 [#202](https://github.com/renmu123/biliLive-tools/issues/202)\n- 优化初始化时界面可能不在视界内的情况\n\n## Bug修复\n\n- 录制：修复抖音礼物数量重复记录 [#210](https://github.com/renmu123/biliLive-tools/issues/210)\n- 录制：修复mesio录制器某些情况下提取文件名错误的bug\n\n# 3.1.2(2025.10.19)\n\n## Bug修复\n\n- 修复默认临时文件夹不会被自动创建的bug\n\n# 3.1.1\n\n## 优化\n\n- log等级参数默认为 `debug`\n- 录制：优化斗鱼链接解析\n- 录制：优化“文件命名规则”中包含 `:` 出现额外提示\n\n# Bug修复\n\n- 录制：修复检查错误状态不会被重置的bug\n\n# 3.1.0\n\n## 功能\n\n- [Oneliverec](https://www.oneliverec.cc/) 录制软件的 webhook 支持 [#169](https://github.com/renmu123/biliLive-tools/pull/169)\n- 下载：B站视频下载画质支持 [#171](https://github.com/renmu123/biliLive-tools/pull/171)\n- 虚拟录制：新增“验证”按钮来实现快速的文件夹验证 [#182](https://github.com/renmu123/biliLive-tools/pull/182)\n- 录制：弹幕直接写入xml文件，节约内存使用 [#179](https://github.com/renmu123/biliLive-tools/pull/179)\n- 录制：抖音支持额外的四种接口请求方式，其中mobile以及用户解析需本版本添加的直播间方能生效 [#180](https://github.com/renmu123/biliLive-tools/pull/180)\n- 录制：增加“录制页面额外请求”选项 [#186](https://github.com/renmu123/biliLive-tools/pull/186)\n- 录制：添加“展示权重”字段，用来对UI界面中直播间进行排序 [#187](https://github.com/renmu123/biliLive-tools/pull/187)\n- 支持缓存文件夹自定义 [#172](https://github.com/renmu123/biliLive-tools/pull/172)\n\n## 优化\n\n- 录制：优化UI, 支持更多状态展示\n- 录制：抖音的默认请求接口使用`mobile`\n- 同步：对 AList 原生实现的上传逻辑中更好地 URL 拼接处理 [#181](https://github.com/renmu123/biliLive-tools/pull/181)\n\n## Bug修复\n\n- 修复部分接口的错误信息未正常显示的bug\n- 录制：修复 mesio 某些情况下录制结束重命名错误的bug\n- 录制：修复抖音某些无法获取到直播间信息仍返回部分必要信息\n\n## 其他\n\n由于 electron 等其他依赖逐渐抛弃 node20 支持，将所有开发及 docker 容器的相关 node 依赖统一升级到 node24.10 版本，虽然没有人来测试，但是我对代码~~毫无~~充满信心，更多依赖更新见[PR](https://github.com/renmu123/biliLive-tools/pull/183)\n\n```\nnode => 24.10\nelectron => 38.2.2\n```\n\n# 3.0.1\n\n## Bug修复\n\n- 为 mesio 在 Linux 下添加执行权限\n\n# 3.0.0\n\n## 作者的话\n\n经过小半年的时间，又要跨入下一个大版本了，我可真是勤奋啊（骄傲脸），我们的软件还在蒸蒸日上啊。\n\n从0.x的b站外部录播应用的基础自动化开始，到1.x的docker支持，四大直播平台的录制支持，再到2.0的网盘同步，斗鱼、虎牙、快手录播下载，现在到了3.0的任意平台录播的自动化支持。~~你已经历许多。现在，开启你最伟大的探索吧~~\n\n下个大版本，我们会更加聚焦于切片这个主题，如何更快的找到话题点，如何判断一场直播的人气，有没有更好的直播切片的方法。还有就是希望能把我手里的五六个视频稿子给处理了。\n\n## 功能\n\n- 虚拟录制功能，支持所有录播软件自动化处理 [#151](https://github.com/renmu123/biliLive-tools/pull/151)\n- 增加“录制错误立即重试”测试选项，用于在触发某些错误后自动重试，一场直播最多触发五次，不对虎牙生效 [#154](https://github.com/renmu123/biliLive-tools/pull/154)\n- 直播录制支持 mesio 引擎 [#156](https://github.com/renmu123/biliLive-tools/pull/156)\n- 同步支持123网盘 [#152](https://github.com/renmu123/biliLive-tools/pull/152)\n- web版录制历史支持直接下载视频\n- 录制历史页增加弹幕密度参数，弹幕密度=弹幕数量/视频长度\n- 录制历史视频支持预览\n- 录制：抖音支持接口类型选择，支持两种接口\n- 录制：虎牙支持真原画画质\n\n## 优化\n\n- 上传预设图片支持选择重复图片\n- 优化队列中的ffmpeg任务的下载功能\n- 录制：抖音支持用户主页解析\n- 录制：优化部分斗鱼礼物价格显示\n- 录制：抖音礼物价格真实显示\n- 设置中支持手动检查更新\n- 优化斗鱼订阅时的链接解析\n\n## Bug修复\n\n- 录制：修复斗鱼cdn正确显示\n- 录制：修复部分B站弹幕解析报错\n- 录制：修复视频格式为自动，修改某些情况下的目标格式\n- 录制：修复抖音、虎牙“画质匹配重试次数”不生效的bug\n- 录制：修复B站上船礼物价格错误\n- 录制：移除用户名和标题中可能存在的 `%` 字符，在开启分段后会解析失败 [#168](https://github.com/renmu123/biliLive-tools/issues/168)\n- 修复AList流式上传导致的内存占用过高问题 [#163](https://github.com/renmu123/biliLive-tools/pull/163)\n- 修复web某些页面下刷新，弹幕预设不显示的bug\n- 修复web某些页面下刷新，视频预设不显示的bug\n- 修复弹幕合并时的元数据位置错误 [#170](https://github.com/renmu123/biliLive-tools/issues/170)\n\n### 增加“录制错误立即重试”选项\n\n当前情况下，如果直播由于某些原因中断了，会在下一次周期检查中继续，但是会遗漏一段时间。\n\n在已知错误的情况下，实际上可以对直播间立即进行重新检查，这样可以尽快进行录制，减少缺失的片段，此更新只聚焦于"invalid stream"错误，不针对其他错误，其他错误需要更多数据验证。\n\n虎牙直播结束后可能额外触发导致错误，因此忽略虎牙直播间：https://www.huya.com/910323\n\n# 2.5.3(2025.9.10)\n\n## Bug修复\n\n- 录制：修复抖音无法录制的bug [159](https://github.com/renmu123/biliLive-tools/issues/159)\n\n# 2.5.2(2025.9.6)\n\n## 优化\n\n- 上传视频任务支持在获取信息阶段被取消\n- docker下BaiduPCS-GO 二进制文件版本更新至3.9.9，上传命令不再携带任何额外参数，请自行去配置文件修改。**客户端使用非手动输入cookie的用户需要重新登录**。**我推荐任何使用百度盘进行同步的用户升级该版本**\n- 录制：新增更多的斗鱼礼物解析\n\n## Bug修复\n\n- 修复未设置分段时录制音频不触发文件创建和结束时间的bug\n- 修复手动新增稿件时，“审核通过后删除源文件”选项不生效的bug\n- 修复webhook上传时，某些情况下不会执行审核后删除操作的bug\n- 修复同步页面未被持久化的bug\n- 修复开启“上传持久化”后且存在上传成功分p，上传/编辑稿件可能被提前触发的bug\n- 修复开启“上传持久化”后且存在上传成功分p，上传视频任务结束时间未被更新的bug\n- 录制：修复某些情况下录制结束未更新成功数据库\n\n# 2.5.1(2025.8.25)\n\n## Bug修复\n\n- 修复编辑稿件失败的bug\n\n# 2.5.0(2025.8.24)\n\n## 功能\n\n- 录制：新增直播间时保存头像到数据库中\n- 录制：排序使用接口实现，除直播状态外\n- 录制：录制历史支持删除 [#145](https://github.com/renmu123/biliLive-tools/issues/145)\n- 录制：录制历史中的视频文件支持默认程序打开 [#145](https://github.com/renmu123/biliLive-tools/issues/145)\n- 弹幕转换：增加描边模糊半径和描边不透明度设置 [#144](https://github.com/renmu123/biliLive-tools/pull/126)\n- 上传：支持定时发布参数 [#146](https://github.com/renmu123/biliLive-tools/pull/146)\n\n## 优化\n\n- 录制：设置筛选后页码自动设置为第一页 [#139](https://github.com/renmu123/biliLive-tools/issues/139)\n- 录制：支持更多抖音直播间链接的解析，优化ttwid缓存策略\n- 录制：支持斗鱼更多链接解析\n- 合并：“保留第一个视频元数据”修改为“保留元数据”，同时对弹幕生效\n- 上传：重试次数默认值为10\n- web选择文件夹从双击修改为单击\n- 审核相关逻辑排除额外的错误码\n\n## 其他\n\n- electron升级到37版本\n\n## Bug修复\n\n- 修复某些老古董斗鱼录播无法下载的bug\n- 录制：修复虎牙星秀区录制原画可能失败的bug\n- 录制：修复B站某些弹幕解析失败的bug\n- webhook：修复某些情况下开启同步和审核后删除，审核失败仍然删除文件的bug\n- 同步：修复某些情况下百度盘meta命令的错误解析\n- 修复下载录播自动监控失效的bug\n\n# 2.4.0(2025.8.5)\n\n- **预计之后版本即将移除“自动评论功能”，如果存在还在使用该功能的用户请及时反馈**\n\n## 功能\n\n- 弹幕转换：添加正则支持 [#126](https://github.com/renmu123/biliLive-tools/pull/126)\n- 弹幕转换：支持行间距参数\n- 录制：支持“服务端时间戳”参数，使用服务端返回的弹幕时间戳而非本地收到的时间戳，用于处理某些主播的弹幕时间戳不准确的问题\n- 录制：支持监控时间 [#125](https://github.com/renmu123/biliLive-tools/issues/125)\n\n## 优化\n\n- 录制；优化B站录制某些cdn结束录制仍推流的情况 [#123](https://github.com/renmu123/biliLive-tools/issues/123)\n- 录制：虎牙弹幕录制的初始化请求添加重试\n- 投稿默认使用必剪api\n- 合集分页调整至100，也许有用 [#127](https://github.com/renmu123/biliLive-tools/issues/127)\n- 回退：当由于某些原因webhook未收到结束请求时，在收到下一个结束请求时，将之前的录制设置为true\n- web登录时不要使用前端地址作为API地址啊！！！\n\n## Bug修复\n\n- 录制：修复抖音录制\n- Webhook: 当删除part后，如果live的part列表为空，则删除该live，有助于缓解[#133](https://github.com/renmu123/biliLive-tools/issues/133)的出现\n\n# 2.3.0(2025.7.19)\n\n## 功能\n\n- **预计之后版本即将移除“自动评论功能”，如果存在还在使用该功能的用户请及时反馈**\n- 录制：文件命名规则支持 [ejs](https://ejs.co/) 模板引擎 [#107](https://github.com/renmu123/biliLive-tools/issues/107)\n- 录制历史支持 `视频时长` 、 `弹幕数量`、`弹幕互动人数` 参数\n- 同步任务支持失败后重试\n- 同步器支持本地复制\n- 上传支持必剪api，应该可以突破限制，不支持编辑接口，选项请在上传设置中打开\n- 支持快手的直播回放下载\n- 测试功能：将上传视频完成后持久化到本地，如果出现投稿失败，那么可以避免视频的重新上传，选项请在上传设置中打开\n\n## 优化\n\n- 录制历史支持列筛选\n- 录制：优化录制历史的分页查询\n- 备份支持 `app.db` 文件\n- 录制：斗鱼荧光棒礼物价格置为0\n- 录制：设置仅录制音频时显示额外的icon\n- 优化转码时输入文件名与输出文件名相同，直接进行报错\n- 投稿默认重试次数设置为5，业务错误不会进行重试\n- **当由于某些原因webhook未收到结束请求时，在收到下一个结束请求时，将之前的录制设置为true，优先以进行处理为主，来解决webhook卡住不运行的情况，期待更多反馈**\n- 查询稿件状态接口增加重试\n- 百度盘同步后检查文件大小，如果为0，任务设置为错误 [#425](https://github.com/qjfoidnh/BaiduPCS-Go/issues/425)\n- 优化同步任务错误后的提示\n\n## Bug修复\n\n- 修复录制页分页参数持久化失效的bug\n- 录制：修复B站部分礼物时间戳错误的bug\n- 录制：修复 `.mp4` 及 `.mkv` 格式录制出错时数据不完整的bug\n- 录制：修复文件命名最后为空格可能存在的问题 [#115](https://github.com/renmu123/biliLive-tools/issues/115)\n- 修复上传过快可能导致同步器未执行删除操作的bug\n- 修复运行时长显示错误的bug\n- **修复webhook配置仅同步“压制后文件”，且设置处理后操作，但原视频及弹幕文件未被删除的bug**\n- 修复设置上传后删除，但同步弹幕版文件任务在上传后完成，文件不会被删除的bug\n- 修复某些情况下修改加密参数后应用无法启动的bug\n- 修复多p上传存在完成上传的分p视频后取消提交任务，仍然会调用提交的bug\n\n# 2.2.1(2025.7.15)\n\n## Bug修复\n\n- 由于 B 站停用投稿客户端，改用 web 接口进行投稿 [#116](https://github.com/renmu123/biliLive-tools/issues/116)\n\n# 2.2.0(2025.6.28)\n\n## 功能\n\n- 录制：B站、斗鱼支持只录制音频\n- 录制：虎牙支持线路选择\n\n## 优化\n\n- Webhook中的分p标题采用当前标题进行格式化\n- 复制B站cookie时增加buvid3参数\n\n## Bug修复\n\n- 录制：修复弹幕转换时仍存在`json`文件的bug（也许修好了）\n- 录制：修复B站无法获取弹幕的bug\n- 修复B站录制帐号登出后可能无法使用的bug\n\n# 2.1.0(2025.6.21)\n\n## 功能\n\n- 新增“为什么不能上传”按钮来进行检测\n- B站上传支持新分区\n- Web环境任务队列中的切片文件支持直接下载\n- 上传时支持修改分p名称\n\n## 优化\n\n- 优化日志的加载速度\n- 修改docker中同步器的配置来支持持久化登录状态\n- 优化切片弹幕多行的表现，以及仅在鼠标悬浮时展示操作栏\n- 补充更多的日志\n\n## Bug修复\n\n- 修复“同步任务”并发数无效的bug\n- 修复webhook某些情况下操作后处理未生效的bug\n\n# 2.0.1(2025.6.10)\n\n## 功能\n\n- 录制：抖音支持双屏直播流，如果需要分割，需要重编码，具体参数见 README 中说明 [#97](https://github.com/renmu123/biliLive-tools/issues/97)\n\n## 优化\n\n- 移除合并视频的“完成后移除源文件”选项 [#96](https://github.com/renmu123/biliLive-tools/issues/96)\n- 由于一些bug，web端移除切片页的教程\n\n## Bug修复\n\n- 修复单独的直播间配置“画质匹配重试次数”选项，无法设置为-1的bug\n- 修复切片带弹幕保存时的错误弹框的bug\n- 修复某些情况下切片添加xml时后错误提示“弹幕正在转换中”的bug\n- 修复webhook中仅开启“弹幕预设”转换时，切设置了完成后删除xml文件，xml文件被错误提早删除的bug\n- 修复webhook中未进行相关转换，但是添加了“处理后操作”删除操作，导致文件被删除的情况\n- 修复webhhok开启转换后删除操作后，视频或弹幕转换失败时错误删除对应文件的bug\n- 修复切片在webui中无法使用的bug [#99](https://github.com/renmu123/biliLive-tools/issues/99)\n- 修复虎牙在在主播未直播是添加录制失败的bug\n\n# 2.0.0(2025.6.7)\n\n## 作者的话\n\n又经过了大半年的时间，要从 1.0 版本跨入 2.0 了，虽然本版本没啥特别大的更新，顺势就到 2.0 了，软件的用户也在逐步上升，蒸蒸日上起来了。\n\n既然是大版本更新，那破坏性更新就不得不尝，本次的破坏性更新影响也许稍微有点大（一点也不大）？能带来更多场景的同时减少配置项数量，所以你们一定得看更新日志啊！！\n\n从 1.0 走来，预计 1.x 版本中实现的绝大多数的需求都已经实现，从重构支持docker，到支持切片，再到本来没想实现的直播录制，最后到这个版本的文件同步，可以说直播录制大部分需求都可以在本软件中操作。\n\n由于引入了 sqlite ，下个大版本的目标可以是数据处理，可以处理大量的弹幕数据，以及为任务及其他数据的持久化做出努力，以及为更好的用户体验努力。\n\n最后祝所有录播man可以更加方便来处理视频。\n\n## 破坏性更新\n\n- **注意：移除“不压制后处理”参数，如果之前存在视频配置可能会导致错误调用**\n- **WebHook 替换 “处理后删除源文件” 为 “处理后操作” 支持更多场景**\n- **Webhook 合并 上传后和审核后删除 选项为“上传后操作”选项**\n\n## 主要更新\n\n- 支持了基于 [BaiduPCS-Go](https://github.com/qjfoidnh/BaiduPCS-Go)、[aliyunpan](https://github.com/tickstep/aliyunpan) 的同步器，可以将文件备份到网盘中\n- 重构了webhook几个选项，减少了功能的复杂度。\n- 引入了 sqlite 数据库来实现之后可能需要性能的数据查询以及持久化\n\n## 功能\n\n- 支持斗鱼录播订阅下载 [#64](https://github.com/renmu123/biliLive-tools/issues/64)\n- 支持部分支持剪辑的主播的录播回放下载，API由@Chihiro提供（B站服务并不稳定）\n- 新增看板页面\n- Web支持首页预览功能\n- Web支持切片功能\n- 录制：B站支持标题关键字参数（仅在开启弹幕时生效）\n- 录制：分段时下载最新封面以及使用最新标题\n- 录制：添加录制历史记录\n- 录制：抖音支持cookie [#85](https://github.com/renmu123/biliLive-tools/issues/85)\n- 录制：抖音、虎牙支持 `flv` 和 `hls` 流选择\n- 录制：支持分页&排序功能，默认为20，分页以及排序参数支持持久化\n- 视频合并页面支持弹幕合并 [#75](https://github.com/renmu123/biliLive-tools/issues/75)\n- 支持 [BaiduPCS-Go](https://github.com/qjfoidnh/BaiduPCS-Go)、[aliyunpan](https://github.com/tickstep/aliyunpan)、[alist](https://alistgo.com) 同步器\n- Webhook 移除“不压制后处理”参数，如果之前存在视频配置可能会导致错误调用\n- Webhook 替换 “处理后删除源文件” 为 “处理后操作” 支持更多场景\n- Webhook 合并 上传后和审核后删除 选项为“上传后操作”选项，减少了一个选项\n- Webhook 支持同步\n- 看板页增加一个按钮用来处理可能的webhhook错误数据\n- 上传任务队列支持在进行中增加任务\n\n## 优化\n\n- 录制：抖音支持解析 `https://v.douyin.com/xxx/` [#73](https://github.com/renmu123/biliLive-tools/issues/73)\n- 录制：B站修改默认画质匹配逻辑以处理hevc真原画\n- 录制：B站、斗鱼、抖音弹幕时间使用服务端时间\n- 录制：抖音支持真原画选项\n- 录制：抖音弹幕支持无数据自动重新连接，默认100秒\n- 录制：优化分段录制重命名重试逻辑\n- “码率控制”选项支持为空以支持需要在高级选项中自定义的需求\n- 重新实现录制开始通知以带来更好的通知\n- “最小上传大小”参数名称修改为“最小处理文件”，功能实质未改变\n- log增大到5M\n- “此稿件不生成更新推送”也适用于非合集\n- 为合并视频增加了更多验证\n\n## Bug修复\n\n- 修复在某些情况下未开启自动评论仍进行评论的bug\n- 修复上传线路的说明弹窗显示不全 [#79](https://github.com/renmu123/biliLive-tools/issues/79)\n- 修复添加录制时，全局画质被错误显示的bug [#80](https://github.com/renmu123/biliLive-tools/issues/80)\n- 修复抖音录制无法选择“标清”画质的bug\n- 修复抖音部分礼物弹幕时间错误的bug\n- 修复某些情况下预设在重命名后点击保存仍使用原来名字的bug\n- 自动检查更新失败时不再报奇怪的错误\n- 修复自定义安装位置后，B站下载视频可能无法调用 ffmpeg 的bug [#86](https://github.com/renmu123/biliLive-tools/issues/86)\n- 修复录制关闭视频未重置部分数据\n- 修复录制出错时重命名失败以及未发送webhook的bug\n\n## 功能\n\n# 1.10.2(2025.5.27)\n\n## Bug修复\n\n- 修复 B 站录制弹幕无法获取的[bug](https://github.com/starknt/tiny-bilibili-ws/pull/10)\n\n# 1.10.1(2025.4.20)\n\n## 优化\n\n- 检查更新增加备用下载地址\n- 弹幕读取时间戳函数可能存在无法停止的问题，添加了额外的超时处理\n- 支持hevc flv的视频切片 [#72](https://github.com/renmu123/biliLive-tools/issues/72)\n- 优化在一个检查期间上传多个稿件导致多次发送通知的情况\n- ffmpeg中止任务时，现在会默认保存进度\n- 首页压制支持mkv文件\n- B站支持qn线路\n\n## Bug修复\n\n- 修复视频编码为 `copy` 时，无法保存预设的bug\n- 修复 scale 相关参数在暗黑模式下的错误UI\n- 修复审核通过后无法发送评论和置顶的bug\n- 修复本软件录制无法使用时间戳功能的bug\n- 修复 `videoFormat=auto` 时开启分段结束后的重命名错误\n\n# 1.10.0(2025.4.12)\n\n## 破坏性功能\n\n- **录制：移除“转封装为mp4”，作为替换，你可以使用录制格式参数或者在webhook中进行转封装**\n\n## 功能\n\n- `scale` 支持 `force_original_aspect_ratio` 参数，优化分辨率配置UI\n- Win 下安装包支持自定义安装位置\n- 开播通知支持其他通知选项\n- 录制：斗鱼支持线路选择\n- 录制：支持录制格式参数： "auto", "ts", "mkv"\n- ffmepg参数：分辨率中新增“pk优化”参数，解决上传B站后pk视频被拉伸，启用之后：“强制宽高比”参数会被强制为“缩小”，会添加“pad=with:height:(ow-iw)/2:(oh-ih)/2”滤镜。在webhook使用时转码时进行分辨率检测，只会存在多个分辨率时才会进行转码（不针对弹幕）。如果你使用cpu转码，推荐码率控制使用crf，并设置在23或更大，再根据配置调整 preset 参数\n- 视频合并支持复制第一个视频的元数据 [#66](https://github.com/renmu123/biliLive-tools/issues/66)\n- 客户端任务栏图标新增重启功能\n- tg 通知支持反代url [#69](https://github.com/renmu123/biliLive-tools/issues/69)\n- 虎牙增加弹幕重连次数，默认为10\n- 支持自定义HTTP通知，真的是最后一个通知了\n\n## 优化\n\n- 切片&转码支持直接选择`mkv`文件\n- 斗鱼&B站&抖音弹幕链接增加更多重试次数，默认为10\n- app端存在录制中视频关闭时尝试停止录制后再关闭软件\n\n## Bug修复\n\n- 修复录制开始通知条件错误显示&以及无法正常使用的bug\n- 修复抖音礼物弹幕时间戳错误\n- 修复 hevc_amf 和 av1_amf 编码下错误的 preset 参数 **注意之前的参数需要重新修改**\n\n# 1.9.1\n\n## 优化\n\n1. 任务列表中上传视频名称同时显示分p名称和视频文件名 [#56](https://github.com/renmu123/biliLive-tools/issues/56)\n2. 上传视频时支持将视频文件名应用到预设标题中 [#60](https://github.com/renmu123/biliLive-tools/issues/60)\n3. 为支持的按钮添加快捷键提示（PS：我都忘了还支持过快捷键）\n4. 优化审核相关操作的查询策略，减少请求\n5. "自动更新授权"在存在上传任务时不会进行更新，一个小时后重新尝试\n6. “手动更新授权”增加正在上传任务检测，增加提醒\n7. 切片：关闭视频时同时清除切片数据\n8. 切片：优化部分文案，增加快捷键提示\n9. 切片：移除 ctrl+shift+k 快捷键，使用 ctrl+k 快捷键进行切换，减轻心智负担\n10. 录制：添加B站直播间，且未设置录制账号时，添加额外提示\n\n## Bug修复\n\n1. 修复虎牙星秀区无法录制的bug，感谢 https://github.com/ihmily/DouyinLiveRecorder/pull/993\n2. 修复某些 web 环境下无法复制 cookie 的 bug [#62](https://github.com/renmu123/biliLive-tools/issues/62)\n3. 修复 webui 授权错误时未正确跳转的 bug\n4. 修复某些情况下查询稿件失败而导致的审核通知错误\n5. 切片：修复部分按钮无法点击的 bug\n6. 修复录制配置中“录制文件夹”默认打开文件夹错误的bug\n7. 修复 webhook 中“上传后删除源文件”选项失效的bug\n\n# 1.9.0\n\n## 破坏性更改\n\n1. **由于虎牙支持精细画质，画质需要重新配置，默认为原画画质**\n2. **移除webhook中的“使用视频文件名”参数，模板中增加`{{filename}}`参数，移除了标题的不再维护警告**\n3. **重新使用 ffmpeg 7.1版本，移除amd硬件过滤器支持**\n4. **不再提供编译后的CLI应用，请优先使用docker或者node安装**\n\n## 功能\n\n1. 录制：支持开播通知\n2. 录制：虎牙支持精细画质\n3. 录制：支持抖音直播录制\n4. 录制：斗鱼支持标题关键词来不进行录制 [#53](https://github.com/renmu123/biliLive-tools/pull/53)\n5. 录制：客户端支持开播通知\n6. 硬件解码又被加回来了，仅在未使用滤镜被添加\n7. 转码功能支持高能进度条\n8. 支持导入导出弹幕配置\n9. 弹幕文字支持根据分辨率进行自适应\n10. 移除webhook中的“使用视频文件名”参数，模板中增加`{{filename}}`参数，移除了标题的不再维护警告\n11. Webhook分p标题支持自定义，默认为文件名，不含后缀， 支持主播名、标题、房间号、文件名、序号（从1开始）、时间相关 参数\n12. B站下载视频时支持弹幕\n13. 切片支持ts文件\n14. webhook转封装支持“封装后删除源文件”选项来控制是否删除源文件\n15. webhook独立配置支持复制操作\n\n## 优化\n\n1. 录制：虎牙配置时不显示“高能弹幕”配置\n2. 录制：支持直接打开webhhook配置页\n3. 录制：优化B站hls流的录制，ts流比fmp4优先级更高\n4. 录制：B站弹幕服务增加自动重试\n5. 录制：B站"避免hls自动分段"选项默认开启\n6. 录制：斗鱼礼物弹幕支持“开通钻粉”和“续费钻粉”\n7. 录制：虎牙画质支持蓝光20M,蓝光10M\n8. 录制："调试模式"参数默认为关闭\n9. 录制：录制列表模式部分字段添加排序\n10. 录制：`画质匹配重试次数` 支持`-1`参数，用于强制匹配画质，虎牙支持了该参数\n11. 录制：B站批量查询不再依赖于uid，所有直播都可以使用\n12. 录制：优化配置UI\n13. ffmpeg预设增加分辨率验证\n14. 优化减少部分页面的多余接口请求\n15. B站的合集和分区增加缓存\n16. 单独弹幕转换开启“自适应分辨率”选项时，增加额外提示\n17. 切片页支持关闭视频\n18. 设置选项的tab可以被记住\n19. 上传默认重试次数修改为7\n20. webhook中的房间号增加更多验证\n\n## Bug修复\n\n1. 录制：修复添加虎牙直播间时，默认画质参数错误的bug\n2. 录制：修复虎牙画质未生效的bug\n3. 录制：修复斗鱼全局画质未获取到的bug\n4. 录制：虎牙“星秀”分区直播不再破碎，也有可能带来其他问题，如果有请反馈\n5. 录制：修复B站"避免hls自动分段"未生效的bug\n6. 录制：修复B站“批量查询接口”某些情况下进行额外查询的bug\n7. 修复二次编辑时话题未被保存的bug [#51](https://github.com/renmu123/biliLive-tools/issues/51)\n8. 修复启动后进入时视频预设可能未正常显示的bug\n\n# 1.8.0\n\n## 主要更新\n\n1. 完善对B站直播录制的支持，包括了b站所有支持的流，以及更多的控制参数\n2. 新增了web版本更多功能支持\n3. 新增了更多的自动化，如账号cookie自动更新，审核通过后删除视频，硬盘容量检测，来减少错误后的处理成本\n4. 更新ffmpeg支持了flv非标hevc，增加了更多ffmpeg选项，支持了scale的硬件过滤器\n\n## 破坏性更改\n\n**更新ffmpeg版本，新增对flv下非标hevc的支持，如果遇到硬件编码无法使用，请尝试更新驱动，或尝试更新较老版本的ffmpeg，n卡驱动要求570及以上**\n\n1. 由于斗鱼支持精细画质，画质需要重新配置，默认为最高画质\n\n## 功能\n\n1. 转码页面支持压制弹幕 [#45](https://github.com/renmu123/biliLive-tools/issues/45)\n2. 首页压制支持web版本\n3. 新增选项支持自动更新账号授权\n4. 用户页新增复制cookie按钮\n5. B站录制支持hls以及fmp4的avc以及hevc，~~**hls及fmp4流录制一个小时后被自动分段，如果你确定主播的流没有flv，请确保分段时间不为一个小时**~~通过代理并重写m3u8来支持分段\n6. 上传支持审核通过后删除选项\n7. B站&斗鱼录制支持“画质匹配重试次数”选项\n8. 支持录播姬&直播录制文件夹空间检测通知\n9. Webhook压制配置支持“限制处理时间”参数\n10. 斗鱼支持精细画质选项\n11. B站录制支持批量查询接口，**只有此版本后添加的直播间才支持**\n12. 支持下载虎牙录播\n13. 移除单独的硬件解码选项，新增n卡,qsv,a卡在某些情况下支持使用硬件scale过滤器选项，增加速度，**可能会破坏自定义滤镜，如果有请报告**\n14. 任务队列中支持删除ffmpeg失败和完成状态下的输出文件\n\n## 优化\n\n1. 优化任务查询的轮询，现在只会在任务页查询，数量功能使用sse实现\n2. 优化web的文件夹选择框\n3. 优化配置文件导入\n4. 斗鱼弹幕录制增加自动重连以及错误报告\n5. 弹幕预设保存增加验证\n6. 录制命名规则修改增加提示避免错误修改\n7. 优化webhook中上传的限制时间的实现，修改为加入队列，之后自动启动\n8. 切片导出时支持忽略弹幕选项\n9. 优化录制时停止功能，修改为暂停此场录制\n10. 为录制的弹幕中增加开播时间元数据\n11. 移除“观看直播功能”\n12. web版支持视频合并选择文件夹\n13. 优化docker镜像大小\n14. 重构视频下载，增加部分验证\n15. 分辨率插值算法默认参数修改为 \'auto\'，也即由滤镜自行决定；libsvtav1的preset默认值修改为10；amf增加preset参数；ffmpeg支持编码线程数参数\n16. 优化web登录提示，增加登出按钮\n17. 放松webhook"上传非弹幕版"选项限制，当选项开启时，上传非弹幕版不会触发删除源文件相关操作\n18. 弹幕转换支持“跳过存在文件选项”\n19. ffmpeg预设保存时增加更多验证\n\n## Bug修复\n\n1. 修复在“上传非弹幕版”时同时选择“转封装为mp4”选项有概率失败的bug\n2. 修复视频下载，视频合并在web下某些情况下错误的bug\n3. 修复docker默认字体被覆盖的bug\n\n# 1.7.2\n\n## 优化\n\n1. 优化弹幕转换的中礼物相关的提示\n2. 隐藏“发送至webhook”功能，某些情况下可能导致奇怪的问题\n3. 录制功能的调试模式默认值修改为开启\n4. log等级配置的更改实时生效\n5. 为B站预设新增封面文件大小校验\n\n## Bug修复\n\n1. 修复b站接口更改导致的分p续传失败的bug\n2. 修复录制单独设置B站录制账号不生效的bug\n3. 修复某些情况下导入配置文件失败的bug\n\n# 1.7.1\n\n## 功能\n\n1. 录制支持选项快速转换为mp4格式\n2. 用户页新增更新授权按钮\n\n## Bug修复\n\n1. 修复某些情况下B站录制弹幕解析失败\n2. 修复录制模式调试日志无法关闭的bug\n3. 修复某些情况下录制未被中断的bug\n4. 修复列表模式下监听状态文案错误的bug\n5. 修复录制单独设置B站录制账号未正确显示的bug\n6. 修复账号过期时间未显示的bug\n7. 修复切片时视频获得焦点时无法使用空格暂停的bug\n8. 修复切片在未选择弹幕时仍显示高能进度条的bug\n9. 修复切片弹幕未正常显示的bug\n\n# 1.7.0\n\n## 破坏性更新\n\n1. **~~为了多端兼容性考虑，字体的获取不再使用浏览器特有的api，此项更新后可能出现字体显示错误的情况。~~ 为了兼容性考虑，客户端仍使用web api，web端将使用新api，两者可能并不兼容**\n2. **封面将统一保存在文件夹下，一来为了多端兼容性、二来更方便的进行配置迁移，大概不会破坏目前的兼容性，还请自查，如果是web版本，只有本版本上传的才能预览**\n\n## 功能\n\n1. 支持斗鱼、虎牙、B站直播录制，感谢[LiveAutoRecord](https://github.com/WhiteMinds/LiveAutoRecord)，绝大部分录制代码都来自该项目\n2. web版本支持，现在可以使用web来管理cli或者远程本地，并非有所有客户端功能都会被支持，**如果你的接口是http协议，由于浏览器安全措施，需要关闭https和http混合的安全选项，或者选择[自部署](https://github.com/renmu123/biliLive-webui/tree/webui)**，线上地址：https://bililive.irenmu.com\n3. ffmpeg预设中的"时间戳"功能支持字体跟随弹幕预设，自定义内容格式（具体见[strftime](https://strftime.org/)，`:`需要转义），额外自定义参数（见[ffmpeg文档](https://ffmpeg.org/ffmpeg-filters.html#drawtext-1)） [#38](https://github.com/renmu123/biliLive-tools/issues/38)，优化webhook中参数的获取\n4. 支持 [push-all-in-cloud](https://github.com/CaoMeiYouRen/push-all-in-cloud) 推送\n5. 更新额外的上传线路，**设置自定义上传先线路的可能需要手动更新，虽然也做了兼容**\n6. 压制时ass支持高能进度条\n7. 预览支持高能进度条\n8. 重写切片部分UI，主要是高能进度条与弹幕搜索，目标是减少会导致中断的操作，新增`ctrl+k`和`ctrl+shift+k`快捷键，移除sc视图\n9. 压制支持推送到webhhook\n10. B站下载支持设置最大任务处理数，只下载音频选项，超时重试逻辑\n11. B站上传支持限速\n\n## 优化\n\n1. 修改弹幕预设默认值，字体大小：38->40、阴影：1->0、描边：0->1、滚动显示区域：1->0.7、显示礼物框：显示->不显示、Linux默认字体：思源黑\n2. 修改英伟达默认ffmpeg参数：medium->fast\n3. ffmpeg最大任务数默认值修改为3，B站上传默认值修改为2\n4. 配置备份支持封面\n5. log查看页面支持导出，移除任务栏菜单的“打开log文件夹”选项\n6. 优化任务查询接口\n7. **为自动评论添加提示，谨慎使用，可能会导致评论被shadowban，以及可能的风控等级上升**\n8. ffmpeg依赖版本升级\n9. 转码、弹幕转换支持相对文件夹、完成后删除源文件选项\n10. 优化队列清除记录接口请求\n\n## Bug修复\n\n1. 修复访问不存在的接口时错误返回信息\n2. 修复CLI有概率错误退出的bug（蜜汁这个版本就没有了）\n3. 修复视频预设标题超过80字符无法保存的bug [#41](https://github.com/renmu123/biliLive-tools/issues/41)\n4. 修复windows下的删除到回收站失效\n5. 修复关闭登录弹框时未清除定时器 [#43](https://github.com/renmu123/biliLive-tools/issues/43)\n6. 修复使用copy预设切片时时间戳错误的情况\n\n# 1.6.2(2024.12.5)\n\n## CLI\n\n修复无法使用的bug\n\n# 1.6.1(2024.12.1)\n\n## 优化\n\n1. 增加web版本不一致提示\n\n## Bug修复\n\n1. 修复某些情况下客户端页面可能空白的情况\n2. 修复webhook开启“转换后移除源文件”选项后弹幕未被删除的bug\n3. 修复弹幕黑名单用户名的描述错误\n4. 修复转码功能中对预设“视频分辨率”无效的bug [#37](https://github.com/renmu123/biliLive-tools/issues/37)\n5. 修复续传时无法选择在合集中稿件的bug\n6. 修复编码器为copy时显示滤镜输入框的bug\n7. 修复某些情况下 CLI 写入日志失败\n\n# 1.6.0(2024.11.12)\n\n历时两个多月的大版本来了，虽然主要的几个功能（如直播录制、docker版本）这个版本都没有发布，但是地基已经打好，下个版本见。\n\n但是还是实现了一些有意思的功能，我其中最喜欢的还是添加了B站审核状态的通知，不需要再为关注状态而心累。  \nffmpeg支持滤镜给了更大的操作空间来处理视频，硬编码时间到视频中能给切片man更大的便利，不必再根据时间来反推精彩的点。\n\n## 破坏性变更\n\n1. **上传预设标题支持模板用于替代webhook中的标题模板，目前如果预设标题中不存在占位符，为了兼容性考虑，依然使用webhook配置，预计后续版本中会移除此字段，请使用者尽快迁移**\n2. **B站登录信息加密保存，也可以使用环境变量`BILILIVE_TOOLS_BILIKEY`自定义密钥，web版本用户尤其推荐，自定义前请先退出原有全部账号，windows下环境变量修改后可能需要重启电脑方能生效**\n\n## 功能\n\n1. B站视频审核状态检测通知\n2. 支持DDTV webhook，**需要将DDTV的软件“设置-文件与路径设置-录制文件保存路径”设置为绝对路径**\n3. 弹幕转换新增“时间偏移”参数\n4. 斗鱼下载支持清晰度选择、不下载弹幕、覆盖控制选项\n5. B站下载支持覆盖控制选项\n6. ffmpeg参数支持视频滤镜选项\n7. 支持硬编码时间参数到视频中，优先从webhook中读取、其次是弹幕元数据（支持录播姬、blrec、本软件下载的录播）、最后是视频元数据（如录播姬注释），即使你开启此选项，也是有可能不被渲染的\n8. amf相关编码支持硬件解码\n9. 在上传弹幕版本时同时支持上传非弹幕版\n\n## 优化\n\n1. 优化标题变量名插入时的位置\n2. 优化任务的持续时间计算\n3. 弹幕配置的简易模式默认为false\n4. 为部分UI增加右键菜单 [#26](https://github.com/renmu123/biliLive-tools/issues/26)\n5. 为已有的ffmpeg配置部分参数添加默认值\n6. 标题模板支持 `{{roomId}}` 房间号参数\n7. 队列增加暂停按钮\n8. 上传预设中标签修改为不得超过十个\n9. 重构上传预设标签输入框\n10. 切片时支持不选中弹幕分割\n11. window下cli支持ffmpeg任务暂停以及高能进度条\n12. 将B站重试次数的默认值设置为7，时间为7秒\n\n## Bug修复\n\n1. 修复任务队列错误显示B站稿件提交后的“打开文件”按钮\n2. 修复webhook从未设置上传者修改为有上传者时，将过去的稿件一并上传的bug\n3. 修复windows下cli的打包错误\n4. 修复上传重试次数设置未生效的bug，[上游修复](https://github.com/renmu123/biliAPI/commit/ee5611b8ffe2f8c49aba972ed9aa85b44a498bc9)\n5. 修复导出切片出“跳过存在文件”失效的bug\n\n## 其他\n\n**将部分函数使用http协议重构，如果有bug请反馈，为之后的web版做准备**\n\n# 1.5.3(2024.11.5)\n\n## 优化\n\n1. 由于简介好像统一为2000字了，移除额外的请求\n2. 多p视频支持加入合集 [#33](https://github.com/renmu123/biliLive-tools/issues/33)\n\n## Bug修复\n\n1. 修复某些情况下无法导入配置文件的bug\n\n# 1.5.2(2024.10.11)\n\n## 功能\n\n1. server酱<sup>3</sup>支持\n2. 弹幕转换支持不保存屏蔽弹幕（仅支持部分，不支持主动屏蔽的弹幕） [#31](https://github.com/renmu123/biliLive-tools/issues/31)\n3. B站上传选项支持可见范围参数\n\n## 优化\n\n1. 弹幕转换设置时的分辨率参数在开启“自适应分辨率”参数时仍可修改\n\n## Bug修复\n\n1. 修复某些情况下上传视频时任务状态持续为运行中 [#30](https://github.com/renmu123/biliLive-tools/issues/30)\n2. 修复下载视频时默认视频标题中非法字符串未被过滤的bug\n3. 修复上传时部分错误未被重试\n\n# 1.5.1\n\n## Bug修复\n\n1. 修复host为0.0.0.0情况请求错误的bug [#23](https://github.com/renmu123/biliLive-tools/issues/23)\n\n# 1.5.0\n\n## CLI\n\n由于我对CLI功能的不重视，~~大概也没人用~~，导致年久失修~~之后我一定好好测试~~，请升级的用户按照最新[文档](https://github.com/renmu123/biliLive-tools/tree/master/packages/CLI)重新进行配置并测试\n\n**`binFolder`参数已被移除，请为可执行文件单独配置**\n\n## 功能\n\n1. B站上传优化，分P分开上传，支持上传重试、重试延迟、线路、并发、同时上传限制、自动评论检查间隔选项，暂时没有添加如手动重试等更多控制功能，如果有bug请反馈\n2. webhook标题支持ejs模板引擎，具体使用见文档 ([#21](https://github.com/renmu123/biliLive-tools/issues/21))\n3. 新增log直接查看功能\n4. ffmpeg配置增加缩放算法，分辨率默认值修改为2880x1620\n5. 缩放支持先缩放后渲染和先渲染后缩放两种模式\n6. 用户页增加B站帐号过期时间\n7. 弹幕过滤\n   - 目前支持三种屏蔽方式，分别是弹幕内容，uid，用户名，需以**英文逗号**分隔\n   - 弹幕内容：部分匹配，包含sc内容\n   - uid：全匹配，格式为<10995238>，弹幕姬用户注意，即是你开启了记录raw，出于性能原因，此过滤也是无法使用的，请使用用户名替代\n   - 用户名：全匹配，格式为[暮色312]\n\n## 优化\n\n1. 应用关闭时，对临时数据进行清理\n   ~~切片时支持不选中弹幕分割~~忘记做了\n2. 手动取消任务时不会触发错误事件\n3. 斗鱼弹幕元数据增加`video_start_time`参数\n4. webhook标题支持预览输出\n5. 移除完成后删除源文件和完成后打开文件夹功能，由于这两个选项在各个页面中或无效或存在问题\n6. 增加设置栏目\n7. 移除弹幕转换的"同一用户相同礼物自动合并的时间窗"功能，上游[移除](https://github.com/hihkm/DanmakuFactory/pull/89)\n8. 优化弹幕判空函数\n\n## 其他\n\n**将部分函数使用http协议重构，如果有bug请反馈，为之后的web版做准备**\n\n## Bug修复\n\n1. 修复断播续传设置关闭失效的bug\n2. 修复弹幕姬未保存raw的sc价格，[上游修复](https://github.com/hihkm/DanmakuFactory/pull/91)\n3. 修复某些情况下的缓冲区溢出，[上游修复](https://github.com/hihkm/DanmakuFactory/pull/94)\n\n# 1.4.0\n\n## 功能\n\n1. 上传配置支持话题\n2. webhook支持只在某段时间执行上传操作\n3. 为首页增加预览窗弹框，**预览仅供参考，以实际渲染为主！**\n4. 切片功能页支持高能弹幕以及sc分析，xml和ass均支持高能进度条，但是两者在不同的配置下会不同，两者的解析有不少区别\n5. 为工具页面的确认按钮提供快捷键“ctrl+enter”快捷键操作\n6. 优化设置中的可执行文件路径设置，增加选项是否开启自定义，默认为关，关了则使用软件默认路径，**之前有过自定义的需要手动启动**\n7. 支持压缩包便携模式，数据保存在可执行文件路径下，在可执行文件所在文件夹创建一个`portable`文件，无拓展名如`.txt`\n8. 支持斗鱼录播下载\n9. 切片支持弹幕搜索\n\n## 优化\n\n1. 续传支持翻页\n2. 优化文件拖拽栏拖拽\n3. 错误推送事件会返回错误信息了\n4. 当设置任务数量限制后，每当有任务暂停时，未开始任务会自动开始\n5. 优化部分函数下读取视频时长失败时的错误处理\n6. 优化弹幕姬弹幕大文件下高能弹幕的性能\n7. 优化B站上传的重试机制\n\n## Bug修复\n\n1. 修复某些xml文件高能弹幕解析错误的bug\n2. 修复DanmakuFactory的blrec价格解析错误，[由上游修复](https://github.com/hihkm/DanmakuFactory/pull/85)\n3. 修复DanmakuFactory某些情况下转换ass内容错误，[由上游修复](https://github.com/hihkm/DanmakuFactory/pull/87)\n4. 修复DanmakuFactory sc文本存在`\\n`时，渲染ass错误，由[上游修复](https://github.com/renmu123/DanmakuFactory/commit/0df54629b382b3398bcea2be8a06e6e45f241ba3)\n5. 修复推送成功事件被错误设置为开始事件的bug\n6. 修复登录二维码第二次使用时错误使用上一个的bug\n\n# 1.3.0\n\n## DanmakuFactory性能优化\n\n**win版本的DanmakuFactory并非使用官方项目，而是使用[自编译版本](https://github.com/renmu123/DanmakuFactory/tree/test)，大幅优化录播姬弹幕的转换速度**\n\n## 切片工具页\n\n很高兴给大家带来这个功能，这个功能是在软件一开始就被定下来制作的功能，由于某些原因~~懒~~一直被拖到了现在，这个版本终于和大家见面了，功能本身并不复杂，一些UI如何实现比较费我的脑子。\n\n支持[lossless-cut](https://github.com/mifi/lossless-cut)项目导入直接读取~~使用该软件的用户有福了~~\n，读取后可以针对视频和弹幕来进行局部渲染，如果你不使用该软件，我们页支持在软件中直接增加片段，以及支持ass在视频中渲染，本来不想做这个功能的，因为losslese-cut的体验已经非常优秀了，但写着写着就写完了，该工具页也带来了快捷键的支持。\n\n你也可以在本软件中编辑后保存到llc项目，便于你进行二次编辑。\n\n### 我们支持哪些快捷键\n\n- `ctrl+s` 保存到llc项目\n- `ctrl+shift+s` 另存为llc项目\n- `ctrl+enter` 导出\n- `ctrl+z` 撤销\n- `ctrl+shift+z` 重做\n- `I` 在当前时间开始当前片段\n- `O` 在当前时间结束当前片段\n- `up` 上一个片段\n- `down` 下一个片段\n- `del` 删除片段\n- `space` 播放/暂停\n- `ctrl+left` 后退1秒\n- `ctrl+right` 前进1秒\n\n## 功能\n\n1. 首页工具栏支持续传\n2. 增加切片工具页\n   1. 支持导入lossless-cut项目文件\n   2. 支持ctrl+s,ctrl+shift+s,ctrl+z,ctrl+shif+z,f2等快捷键，更多见文档\n   3. 支持编辑后保存lossless-cut项目文件\n   4. 支持局部渲染\n3. qsv支持预设参数\n4. 弹幕设置-不透明度设置修改为百分比参数，原参数弃用，**请使用者进行手动迁移修改**\n5. 支持配置导入和导出\n6. 弹幕转换支持“显示用户名”参数\n\n## 优化\n\n1. 优化弹幕黑名单使用原生实现\n2. 优化webhook视频标题输入变量优化\n3. 为应用添加最小宽高\n4. 重构webhook方便写单元测试\n5. 队列页面更好的错误显示\n\n## Bug修复\n\n1. 修复另存为ffmepg的cpu默认预设后切换其他部分编码器会转换失败的bug\n2. 修复ffmpeg批量添加时最大任务设置可能失败的bug\n3. 修复工具页切换时页面未被缓存的bug\n4. 修复某些情况下无法修改稿件简介的[bug](https://github.com/renmu123/biliLive-tools/issues/4#issuecomment-2233626419)\n5. 修复多P上传的暂停错误，由[上游修复](https://github.com/renmu123/biliAPI/commit/b07b25a2a7c61177abdc0d5b893e610d96b56ef1)\n6. 修复上传暂停后进度计算错误，由[上游修复](https://github.com/renmu123/biliAPI/commit/c5106bc8710d950590878f3874323673414c5055)\n7. 修复DanmakuFactory可执行路径存在空格时无法处理的bug\n8. 修复文件拖拽栏可以选择任意文件的bug\n\n# 1.2.0\n\n## 功能\n\n1. 弹幕密度增加按条数配置\n2. 转封装页面升级为转码页面，支持对视频进行重编码\n3. 版本更新后首次进入出现更新日志\n\n## 优化\n\n1. 工具页UI优化\n2. ffmpeg预设增加copy预设\n3. 弹幕压制时如果视频编码器为copy则报错\n4. 弹幕配置的“简易模式”可以被记住\n\n## Bug修复\n\n1. 修复多个b站账户同时操作时cookie有概率混淆 [#16](https://github.com/renmu123/biliLive-tools/issues/16)\n2. 修复“断播续传”与“使用直播间封面”功能同时使用时，“使用直播间封面”功能失效的bug [#17](https://github.com/renmu123/biliLive-tools/issues/17)\n3. 修复webhook增加房间时保存了额外不必要数据的bug\n4. 修复“打开稿件”按钮错误的bug\n\n# 1.1.0\n\n## 功能\n\n1. ntfy推送支持\n2. 系统推送支持，仅限app,CLI无法使用\n3. webhook支持"不压制后处理"\n4. 新增对ffmepg 编码器copy参数的支持\n5. 新增对ffmepg audio参数的支持\n6. webhook上传标题支持`{{HH}}``{{mm}}``{{ss}}`小时，分钟，秒格式化字段\n7. Linux下的zip包支持\n\n## 优化\n\n1. 弹幕转换&转封装保存到特定文件夹时验证文件夹是否存在\n2. 修改菜单栏展开时占据的空间，展开状态可以被记住\n\n## Bug修复\n\n1. 修复webhook弹幕转换后未清理临时ass文件的Bug\n2. 修复webhook中“使用文件作为文件名”失效的bug\n\n# 1.0.0\n\n**整体架构调整，为支持CLI以及网页版做准备，如果有任何bug请及时反馈**\n\n## 开发者的屁话\n\n经过的大半年的开发，这个软件总算进入了1.0版本，时间是过得真快啊，我推得某些V都因为某些原因不看了，我也用不着传录播了，自己用得次数反而变少（笑），只是偶尔传传自己的录播，都怪B站屎一样的上传系统。\n\n感谢那些帮助软件迭代开发的用户，我也希望这个软件可以帮助到部分有需要的人，减少一点做录播的门槛，，节约些许时间，但请让我知道你们正在使用本软件，无论是B站带上软件tag还是赞助我[爱发电](https://afdian.net/a/renmu123) 、[B站充电](https://space.bilibili.com/10995238)还是关注[我](https://space.bilibili.com/10995238)\n\n接下来谈一下这个项目之后可能的需求，优先会做我自己的需求~~已经没啥需求了~~，如果你有什么需求，可以提issue，如果你不提那我肯定看不到  \n~~1. 我一直很想做的是根据弹幕出现频次做切片功能，但是因为我不切片了，所以这个功能被鸽了~~\n~~2. web版的支持以及cli的扩充，这个需求不有趣，所以看心情~~\n\n1. 批量压制转码工具页，UI已经脑补完了\n2. 斗鱼录播下载，很奇怪市面上竟然没有类似的工具\n3. srt ai翻译，单纯是为我自己偶尔的烤肉\n\n## webhook端点修改\n\n**webhook的请求端点修改，请使用者进行迁移**\nB站录播姬：`/webhook`修改为`/webhook/bililiverecorder`  \nblrec：`/blrec`修改为`/webhook/blrec`  \n自定义：`/custom`修改为`/webhook/custom`\n\n## CLI的使用\n\nCLI是GUI的拓展，使用前需要设置相关目录，由于配置文件很多且复杂，推荐在GUI中生成并进行修改配置后复制到CLI所配置的目录，或直接将目录设置为GUI的配置目录。  \n暂时只支持webhook相关的指令，也即启动webhook server，可以避免启动electron带来的消耗。\n\n**CLI版本暂时不支持删除到回收站，高能进度条功能**\n\n## 最大任务数的相关说明\n\n1. 目前只支持ffmepg任务最大任务数，可以在“设置-任务-ffmpeg最大任务数”中进行设置，默认为不限制\n2. 手动暂停的任务不会被自动启动\n3. 当任务暂停时，不会有任务被自动启动，也就是说只有当任务完成或者失败时才会自动启用下一个未开始的任务\n4. 高能进度条任务会自动进行，因为速度会很快\n\n## 特性\n\n1. 为文件选择栏增加更多功能\n2. 暗色模式支持\n3. 视频预设增加“高级选项”参数，支持自定义ffmpeg输出参数，libsvtav1高级参数默认为`-svtav1-params tune=0`，libsvtav1支持10bit参数，qsv支持ICQ模式\n4. cli支持\n5. ffmpeg任务支持设置最大任务数\n6. 为ffmpeg任务在“中止”操作时添加“保存进度”选项， **默认不保存，之前行为为默认保存**\n7. 为弹幕转换增加屏蔽词功能，如果出现开启后无法转换的情况请反馈\n8. 弹幕转换任务支持取消操作\n9. 新增 `danmakuFactory路径`、`port`、`host`配置，webhook服务器自启动，默认为18010端口\n10. 新增 `/webhook/bililiverecorder` 、`/webhook/blrec`、`/webhook/custom` webhook端点，移除`/webhook`、`/blrec`、`/custom`端点\n\n## 优化\n\n1. ffmpeg 版本升级至7.0\n2. 登录优化（退出账号后默认使用第一个账号）\n3. 修改ffmpeg预设中cbr名称为“平均比特率”\n4. server酱的key输入框type设置为password\n5. 修改视频合并的进度条计算，现改为使用时间长度计算，由于ffmpeg7.0中合并时frame参数不见了\n6. 修改上传参数的排序，尽量与B站web端保持一致\n7. 优化webhook上传后aid查询\n8. 交换“中止”和“删除记录”的icon\n9. 为部分弹框增加“不再提示”按钮\n10. 在webhook弹幕转换时复制输入文件到临时文件夹来避免某些情况下danmafactory读取文件失败，比如文件名有emoji\n11. hvenc下cq**默认值修改为28**，**使用的是-rc vbr而非-rc constqp**\n\n## Bug修复\n\n1. 修复hvenc下cq失效的bug\n2. 修复hvenc下预设名称错误的bug [#13](https://github.com/renmu123/biliLive-tools/pull/13)\n3. 修复libsvtav1 预设展示错误，**默认值修改为6**\n4. 修复某些情况下登录后获取信息失败\n5. 修改弹幕为空的判断逻辑，如果文件中存在`</d>`, `</gift>`, `</sc>`, `</guard>`任意标签则认为不为空\n6. 修复blrec的webhook无法使用的bug [#15](https://github.com/renmu123/biliLive-tools/issues/15)\n\n# 1.0.0-aplha.1\n\n**上个版本的host设置有误，可能导致webhook无法访问，请修改为127.0.0.1（仅对本机开放），或0.0.0.0（其他机器可访问）**  \n**整体架构调整，为支持CLI以及网页版做准备，如果有任何bug请及时反馈**  \n**webhook的请求端点修改，请使用者尽快进行迁移，将会在1.0.0正式版中被移除**\n\nB站录播姬：`/webhook`修改为`/webhook/bililiverecorder`  \nblrec：`/blrec`修改为`/webhook/blrec`  \n自定义：`/custom`修改为`/webhook/custom`\n\n## 最大任务数的相关说明\n\n1. 目前只支持ffmepg任务最大任务数，可以在“设置-任务-ffmpeg最大任务数”中进行设置，默认为不限制\n2. 手动暂停的任务不会被自动启动\n3. 当任务暂停时，不会有任务被自动启动，也就是说只有当任务完成或者失败时才会自动启用下一个未开始的任务\n4. 高能进度条任务会自动进行，因为速度会很快\n5. webhook中的mp4转码任务不会受限制\n\n## CLI的使用\n\nCLI是GUI的拓展，使用前需要设置相关目录，由于配置文件很多且复杂，推荐在GUI中生成并进行修改配置后复制到CLI所配置的目录，或直接将目录设置为GUI的配置目录。  \n暂时只支持webhook相关的指令，也即启动webhook server，可以避免启动electron带来的消耗。\n\n**CLI版本暂时不支持删除到回收站，高能进度条功能**\n\n### 配置\n\n使用前通过 `biliLive config gen` 生成默认配置文件，如果你已经安装客户端，相关配置会被自动设置（仅限win）\n\n```js\n{\n  port: 18010, // 启动端口，如果不希望与客户端的冲突，请修改为其他端口号\n  host: "127.0.0.1",  // host\n  configFolder: "", // 配置文件夹，推荐在GUI中生成并进行修改配置后复制到CLI所配置的目录，可在“打开log文件夹”上一层文件夹找到\n  binFolder: "",  // 二进制文件夹，如果你配置了选项，那么默认会从这个文件夹读取相关二进制文件\n  ffmpegPath: "ffmpeg.exe", // 覆盖binFolder中的ffmpeg二进制路径\n  ffprobePath: "ffprobe.exe",  // 覆盖binFolder中的ffprobe二进制路径\n  danmakuFactoryPath: "DanmakuFactory.exe",  // 覆盖binFolder中的DanmakuFactory二进制路径\n  logPath: "main.log",  // log文件路径\n}\n```\n\n## 特性\n\n1. cli支持\n2. ffmpeg任务支持设置最大任务数\n3. 为ffmpeg任务重在“中止”操作时添加“保存进度”选项， **默认不保存，之前行为为默认保存**\n4. 主题现在可以跟着系统主题自动变化了\n5. 为文件选择框增加“清空”操作\n\n## 其他\n\n1. 修改host默认值为 127.0.0.1\n2. 修改部分深色模式的UI\n3. 修改视频合并的进度条计算，现改为使用时间长度计算，由于ffmpeg7.0中合并时frame参数不见了\n4. 修改上传参数的排序，尽量与B站web端保持一致\n\n## Bug修复\n\n1. 修复未正确记录任务相关的log\n2. 修复log level未正确初始化的bug\n3. 修复某些文件选择栏无法添加文件的bug\n4. 修复ffmpeg 7.0版本下无法进行合并的 bug [#1265](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg/pull/1265)\n\n# 1.0.0-alpha\n\n**本版本的host设置有误，可能导致webhook无法访问，请修改为127.0.0.1（仅对本机开放），或0.0.0.0（其他机器可访问）**\n\n**这个版本有时间就把架构改了，经过大半年的开发，终于要进入1.0.0版本了，虽然还有好几个想做的需求没做**  \n**整体架构调整，为支持CLI以及网页版做准备，如果有任何bug请及时反馈**  \n**webhook的请求端点修改，请使用者尽快进行迁移，将会在1.0.0正式版中被移除**\n\nB站录播姬：`/webhook`修改为`/webhook/bililiverecorder`  \nblrec：`/blrec`修改为`/webhook/blrec`  \n自定义：`/custom`修改为`/webhook/custom`\n\n## 特性\n\n1. 新增 `danmakuFactory路径`、`port`、`host`配置，webhook服务器自启动，默认为18010端口\n2. 新增 `/webhook/bililiverecorder` 、`/webhook/blrec`、`/webhook/custom` webhook端点\n3. 优化工具页的文件选择栏&部分组件UI优化\n4. 暗色模式支持\n5. 视频预设增加“高级选项”参数，支持自定义ffmpeg输出参数，libsvtav1高级参数默认为`-svtav1-params tune=0`，libsvtav1支持10bit参数，qsv支持ICQ模式\n6. 为部分弹框增加“不再提示”按钮\n\n## 其他\n\n1. ffmpeg 版本升级至7.0\n2. 登录优化（退出账号后默认使用第一个账号）\n3. 修改ffmpeg预设中cbr名称为“平均比特率”\n4. server酱的key输入框type设置为password\n\n## Bug 修复\n\n1. 修复hvenc下cq失效的bug，**默认值修改为28**，**使用的是-rc vbr而非-rc constqp**\n2. 修复hvenc下预设名称错误的bug [#13](https://github.com/renmu123/biliLive-tools/pull/13)\n3. 修复libsvtav1 预设展示错误，默认值修改为6\n4. 修复某些情况下登录后获取信息失败\n\n## 开发\n\n1. 使用pnpm包管理器，修改架构为mono repo\n\n# 0.13.0\n\n**移除biliup支持**\n\n## 特性\n\n1. 移除biliup支持\n2. 支持上传任务审核后自动评论\n3. 优化下载任务选择\n4. 新增最小化任务栏和关闭到任务栏选项，支持记住窗口位置和大小\n\n## Bug修复\n\n1. 修复某些情况下无法保存配置的bug\n\n## 其他\n\n1. electron 依赖升级至30版本\n\n# 0.12.0\n\n**预计之后的版本会移除biliup的支持，如果有还在使用的用户且认为有保留必要的，请发issue**\n\n## 特性\n\n1. 为通知增加测试按钮\n2. 为webhook增加完成后删除文件选项\n3. 支持开机自启动\n4. 投稿分区修改为动态获取，支持不同分区的简介字数不同\n5. 优化上传UI，支持修改分P名称以及拖动排序\n\n## Bug fix\n\n1. 修复高能进度配置项设置为全局失败的bug\n2. 修复`nvenc`相关编码错误的默认预设参数\n\n# 0.11.0\n\n**预计之后的版本会移除biliup的支持，如果有还在使用的用户且认为有保留必要的，请发issue**\n\n## 特性\n\n1. 修改任务队列为在首页请求\n2. 为不同任务增加不同的自定义参数，如下载速度，比特率，速度\n3. webhook支持转封装为mp4选项\n4. 弹幕压制支持文件名中带有空格的弹幕文件\n5. 鼠标悬浮于进度条之上显示百分比进度\n6. 上传预设合集增加“小节”，“此稿件不生成更新推送”选项、增加“二创声明”选项\n7. webhook标题支持“使用文件名”选项\n8. 为文件选择栏，统一增加“所有文件”选项\n9. 为压制任务页面增加m4s支持\n10. 房间号为空保存时增加提示\n\n## Bug fix\n\n1. 修复webhook中压制任务错误后状态未进行流转\n2. 修复上传暂停后无法继续开始的bug\n3. 修复弹幕为空时，压制失败的bug\n4. 修复上传失败时，触发两次错误通知的bug\n\n# 0.10.0\n\n## 特性\n\n1. 增加通知功能，支持邮件，server酱，tg bot\n2. 弹幕压制支持分辨率缩放，可用于激活b站4k档位保证更高码率\n3. nvidia相关编码增加cq和preset参数，以及支持硬件解码\n4. 检查更新使用Chromium原生网络库，支持系统代理\n5. “下载页”解析链接时增加加载过渡效果\n6. 续传时添加提醒：已在合集中的稿件无法添加分P\n\n## Bug fix\n\n1. 修复ffmpeg设置中libsvtav1错误的预设参数\n2. 修复无法为审核中的稿件续传的bug\n3. 修复高能进度配置项设置为全局失败的bug\n\n# 0.9.0\n\n## 特性\n\n1. 下载视频功能\n2. 支持自定义webhook\n3. webhook账号支持设置为无\n4. 为视频合并增加默认标题\n5. 部分按钮UI修改为图标\n6. “打开文件夹”功能在打开时会尽可能选中文件\n\n## Bug修复\n\n1. 修复“弹幕转换”页面的“完成后打开文件夹”功能失效\n2. 修复ffmpeg任务在暂停后删除任务后，ffmpeg进程未被释放的bug\n3. 修复设置了房间号的情况下，全局上传预设为空时，不使用房间号内设置的预设的bug\n\n# 0.8.2\n\n## 特性\n\n1. “压制任务”输出文件添加默认文件名\n2. “压制任务”添加到队列后删除文件列表\n3. 为队列添加名称筛选\n\n## Bug fix\n\n1. 删除“压制任务”时使用xml生成的中间临时ass文件\n2. 修复“压制任务”的“移除源文件”选项为只有完成全部步骤后才会执行\n\n# 0.8.1\n\n**修复兼容性导致的新用户配置生成错误** 新用户请勿使用0.8.0版本\n\n## Bug fix\n\n1. 修复未勾选“高能进度条”时，ass文件无法用于压制的bug\n2. 修复兼容性导致的新用户配置生成错误\n\n## 特性\n\n1. 为上传预设增加重命名操作\n2. 为另存为与重命名操作增加回车快捷方式\n3. 修改检查更新的代理github域名，我不D了\n4. 取消ffmpeg任务的中断操作，中断操作的行为更换为中止操作\n\n# 0.8.0\n\n## Breaking change\n\nwebhook配置黑名单支持通配符，配置从黑名单优先修改为房间优先。  \n之前为：黑名单优先，如果配置了黑名单，那么房间配置为开启也是没有效果的。  \n现在修改为：房间配置优先，即如果房间配置了开启，那么即使配置黑名单也是无效的\n\n## Bug fix\n\n1. 修复某些情况下主页“完成后打开文件夹”选项失效\n2. 修复主页弹幕预设没有“保存预设”选项\n3. 修复webhook中弹幕自适应分辨率bug\n4. 修复某些情况下上传预设设置错误的bug\n\n## 特性\n\n1. webhook支持使用直播间封面\n2. 支持高能进度条\n3. webhook标题支持更多参数\n4. 上传预设支持合集参数\n5. 优化房间配置\n6. 增加录播姬工作目录可用性检查\n7. 中断任务不再被认为完成状态，不会执行后续操作\n8. UI优化\n9. 为主页面的部分配置添加持久化\n\n## 其他\n\n依赖升级\nUI优化\n\n# 0.7.0\n\n支持了非biliup上传，如需使用biliup上传，请在设置修改\n房间支持单独开启关闭，已有数据默认为关，请手动开启\n\n## 特性\n\n1. 多账号支持\n2. 移除biliup登录选项\n3. 房间支持单独开启关闭，与黑名单共存\n4. “断播续传”支持自定义时间间隔\n5. 上传支持更多配置项，如关闭弹幕，关闭评论，开启精选评论，自制声明，开启充电面板\n6. **支持非biliup上传**\n7. 简介增加艾特用户功能\n8. 增加赞赏功能\n9. 退出时如果有任务存在增加提醒\n10. 如果检测到webhook server从关闭更改为开启状态，提醒用户重启\n11. 弹幕分辨率支持自适应视频分辨率\n\n## 其他\n\n1. 重构webhook房间配置\n2. 重构配置项相关代码\n3. 依赖升级\n\n## Bug修复\n\n1. 修复上传视频验证失效的bug\n\n# 0.6.0\n\n1. 支持同场直播上传到同一投稿\n2. 如果预设正在被使用，删除时增加额外提醒\n3. 重构弹幕预设的实现\n4. 修复登录时未保存cookie的bug\n\n# 0.5.0\n\n1. 优化webhook，支持弹幕压制后上传\n2. electron升级到28.0.0\n3. 修复更换b站账号后cookie未刷新的问题\n4. 增加非biliup实现的登录\n5. 增加ffmpeg的预设设置\n6. ffmpeg任务区分中断和中止操作\n7. 修复弹幕密度默认设置错误\n8. 修复续传视频后不提醒的bug\n\n# 0.4.0\n\n新增blrec的webhook支持  \n增加队列页面，所有任务移入队列执行  \n修复合并功能的ffmpeg参数错误  \n优化压制功能  \n优化合并功能的进度条计算\n\n# 0.3.1\n\n修复“弹幕设置-画面设置-调试”选项无法使用  \n卸载时删除用户数据  \n增加弹幕的预设功能  \n修改ffmpeg中断信号  \n修复上传预设不同步bug  \n修复confirm组件的bug  \n增加压制时预计剩余时间的显示\n\n# 0.3.0\n\n支持上传视频至b站  \n支持合并视频工具  \n支持选择删除文件或者删除至回收站  \n增加自动更新检测\n\n# 0.2.0\n\n1. 打包自动化\n2. 修复找不到 ffprobe 的 bug\n3. 修复弹幕文件无法覆盖的 bug\n4. 支持修改 ffmpeg 和 ffprobe 的可执行文件路径\n5. 打包了没有 ffmpeg 和 ffprobe 可执行文件的安装包\n\n# 0.1.0\n\n1. 支持 Danmufactory GUI\n2. 支持 ffmpeg 转封装\n3. 支持视频与弹幕压制\n4. 支持压制时修改 ffmpeg 部分配置项\n';
const _hoisted_1$2 = ["innerHTML"];
const _hoisted_2$1 = { style: { "text-align": "right" } };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChangelogModal",
  props: {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  },
  emits: ["update:visible"],
  setup(__props) {
    const showModal = useModel(__props, "visible");
    const renderer = {
      link({ href, text }) {
        return `<a href="${href}" target="_blank">${text}</a>`;
      }
    };
    marked.use({ renderer });
    const content = marked.parse(changelog);
    const confirm = async () => {
      const data = JSON.parse(localStorage.getItem("changelog") || "{}");
      const version = await common.version();
      data[version] = true;
      localStorage.setItem("changelog", JSON.stringify(data));
    };
    const close = async () => {
      await confirm();
      showModal.value = false;
    };
    watch(
      () => showModal.value,
      (value) => {
        if (!value) {
          confirm();
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_4;
      const _component_n_modal = __unplugin_components_3$2;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showModal.value = $event),
        "transform-origin": "center",
        "auto-focus": false
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "800px" },
            title: "更新日志",
            bordered: false
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_2$1, [
                createVNode(_component_n_button, {
                  type: "primary",
                  style: { "margin-left": "10px" },
                  onClick: close
                }, {
                  default: withCtx(() => _cache[1] || (_cache[1] = [
                    createTextVNode("我知道了(〃∀〃)")
                  ])),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              _cache[2] || (_cache[2] = createBaseVNode("div", null, [
                createBaseVNode("p", null, [
                  createBaseVNode("b", null, [
                    createTextVNode("如果你不知道如何使用本软件，请优先查看 "),
                    createBaseVNode("a", {
                      href: "https://docs.irenmu.com/",
                      class: "external",
                      target: "_blank"
                    }, "文档"),
                    createTextVNode(" 或 "),
                    createBaseVNode("a", {
                      href: "https://www.bilibili.com/video/BV1Hs421M755/",
                      class: "external",
                      target: "_blank"
                    }, "视频教程 "),
                    createTextVNode("，绝大多数问题都能找到答案")
                  ])
                ]),
                createBaseVNode("p", null, "如果你觉得本软件对你有帮助："),
                createBaseVNode("p", null, [
                  createTextVNode(" 请我喝瓶快乐水："),
                  createBaseVNode("a", {
                    href: "https://afdian.com/a/renmu123",
                    class: "external",
                    target: "_blank"
                  }, "https://afdian.com/a/renmu123")
                ]),
                createBaseVNode("p", null, [
                  createTextVNode(" 如果你是大会员，也可以用免费的B币给我充电："),
                  createBaseVNode("a", {
                    href: "https://space.bilibili.com/10995238",
                    class: "external",
                    target: "_blank"
                  }, "https://space.bilibili.com/10995238")
                ]),
                createBaseVNode("p", null, [
                  createTextVNode(" 弹幕转换功能底层来自："),
                  createBaseVNode("a", {
                    href: "https://github.com/hihkm/DanmakuFactory",
                    class: "external",
                    target: "_blank"
                  }, "DanmakuFactory")
                ]),
                createBaseVNode("p", null, [
                  createTextVNode(" 直播录制绝大部分代码来自："),
                  createBaseVNode("a", {
                    href: "https://github.com/WhiteMinds/LiveAutoRecord",
                    class: "external",
                    target: "_blank"
                  }, "LiveAutoRecord")
                ])
              ], -1)),
              createBaseVNode("div", { innerHTML: unref(content) }, null, 8, _hoisted_1$2)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const _hoisted_1$1 = ["disabled"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "logModal",
  props: {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  },
  emits: ["update:visible"],
  setup(__props) {
    const showModal = useModel(__props, "visible");
    const loading = ref(false);
    const exporting = ref(false);
    let exportingTimer = null;
    const logs = ref([]);
    const logInst = ref(null);
    const setExporting = (value) => {
      if (exportingTimer) {
        clearTimeout(exportingTimer);
      }
      if (value) {
        exportingTimer = setTimeout(() => {
          exporting.value = true;
        }, 200);
      } else {
        exporting.value = false;
      }
    };
    const getLog = async () => {
      loading.value = true;
      try {
        const content = await getLogContent();
        logs.value = content.split("\n").map((item, index) => {
          return {
            value: index,
            key: index,
            message: item
          };
        });
        nextTick(() => {
          logInst.value?.scrollTo({
            index: logs.value?.at(-1)?.key
          });
        });
      } finally {
        loading.value = false;
      }
    };
    watch(
      () => showModal.value,
      (value) => {
        if (value) {
          getLog();
        } else {
          logs.value = [];
        }
      }
    );
    const exportLogFile = async () => {
      if (exporting.value) return;
      setExporting(true);
      try {
        const blob = await exportLogs();
        FileSaver_minExports.saveAs(blob, "main.log");
      } catch (error) {
        console.error(error);
      } finally {
        setExporting(false);
      }
    };
    return (_ctx, _cache) => {
      const _component_n_virtual_list = __unplugin_components_8$1;
      const _component_n_spin = __unplugin_components_7$1;
      const _component_n_card = __unplugin_components_4;
      const _component_n_modal = __unplugin_components_3$2;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showModal.value = $event),
        "transform-origin": "center",
        "auto-focus": false
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "800px" },
            bordered: false
          }, {
            header: withCtx(() => [
              _cache[1] || (_cache[1] = createBaseVNode("span", null, "日志", -1)),
              createBaseVNode("span", {
                style: { "color": "skyblue", "font-size": "12px", "margin-left": "10px", "cursor": "pointer" },
                onClick: exportLogFile,
                disabled: unref(exporting)
              }, toDisplayString(unref(exporting) ? "导出中..." : "导出"), 9, _hoisted_1$1)
            ]),
            default: withCtx(() => [
              createVNode(_component_n_spin, {
                show: unref(loading),
                delay: 200
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_virtual_list, {
                    style: { "height": "calc(100vh - 200px)" },
                    "item-size": 20,
                    items: unref(logs),
                    "item-resizable": "",
                    ref_key: "logInst",
                    ref: logInst
                  }, {
                    default: withCtx(({ item, index }) => [
                      (openBlock(), createElementBlock("div", {
                        key: index,
                        class: "item"
                      }, toDisplayString(item.message), 1))
                    ]),
                    _: 1
                  }, 8, ["items"])
                ]),
                _: 1
              }, 8, ["show"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const logModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-292c60f6"]]);
const _sfc_main$1 = {
  name: "SvgIcon",
  props: {
    width: {
      type: [String, Number],
      default: 24
    },
    height: {
      type: [String, Number],
      default: 24
    },
    strokeColor: {
      type: String,
      default: "#000"
    }
  }
};
const _hoisted_1 = ["width", "height"];
const _hoisted_2 = ["stroke"];
const _hoisted_3 = ["stroke"];
const _hoisted_4 = ["stroke"];
const _hoisted_5 = ["stroke"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    width: $props.width,
    height: $props.height,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    createBaseVNode("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "2",
      ry: "2",
      stroke: $props.strokeColor,
      "stroke-width": "1",
      fill: "none"
    }, null, 8, _hoisted_2),
    createBaseVNode("line", {
      x1: "6",
      y1: "7",
      x2: "18",
      y2: "7",
      stroke: $props.strokeColor,
      "stroke-width": "1"
    }, null, 8, _hoisted_3),
    createBaseVNode("line", {
      x1: "6",
      y1: "11",
      x2: "18",
      y2: "11",
      stroke: $props.strokeColor,
      "stroke-width": "1"
    }, null, 8, _hoisted_4),
    createBaseVNode("line", {
      x1: "6",
      y1: "15",
      x2: "14",
      y2: "15",
      stroke: $props.strokeColor,
      "stroke-width": "1"
    }, null, 8, _hoisted_5)
  ], 8, _hoisted_1);
}
const logSvg = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-905ccd94"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Main"
  },
  __name: "index",
  setup(__props) {
    const quenuStore = useQueueStore();
    const appConfig = useAppConfig();
    const { userInfo } = storeToRefs(useUserInfoStore());
    const route = useRoute();
    const activeKey = ref("Home");
    activeKey.value = route.name;
    const collapsed = useStorage("collapsed", false);
    appConfig.getAppConfig();
    function renderIcon(icon) {
      return () => h(NIcon, null, { default: () => h(icon) });
    }
    const isWeb = computed(() => window?.isWeb);
    function renderQueueIcon(icon) {
      return () => h(
        "div",
        {
          style: { position: "relative" }
        },
        [
          h(
            "span",
            {
              style: {
                color: "red",
                position: "absolute",
                right: "-4px",
                top: "-4px",
                fontSize: "12px"
              }
            },
            quenuStore.runningTaskNum || ""
          ),
          h(NIcon, null, { default: () => h(icon) })
        ]
      );
    }
    function renderImg(src) {
      return () => h("img", { src, style: { height: "30px", width: "30px" }, referrerpolicy: "no-referrer" });
    }
    const router = useRouter();
    const footerMenuOptions = computed(() => {
      const menus = [];
      if (isWeb.value) {
        menus.push({
          label: () => h(
            "a",
            {
              onClick: () => {
                window.localStorage.removeItem("api");
                window.localStorage.setItem("key", "");
                router.push({ name: "Login" });
              }
              // style: {
              //   marginLeft: "25px",
              // },
            },
            { default: () => "登出" }
          ),
          key: "logout",
          icon: renderIcon(LogOutOutline)
        });
        menus.push({
          label: () => h(
            "a",
            {
              onClick: () => {
                logVisible.value = true;
              }
              // style: {
              //   marginLeft: "25px",
              // },
            },
            { default: () => "日志" }
          ),
          key: "log",
          icon: renderIcon(logSvg)
        });
      }
      menus.push(
        ...[
          {
            label: () => h(
              RouterLink,
              {
                to: {
                  name: "About"
                }
              },
              { default: () => "关于" }
            ),
            key: "About",
            icon: renderIcon(InfoIcon)
          },
          {
            label: () => h(
              "a",
              {
                onClick: () => {
                  openSetting();
                }
              },
              { default: () => "设置" }
            ),
            key: "setting",
            icon: renderIcon(SettingIcon)
          }
        ]
      );
      return menus;
    });
    const menuOptions = computed(() => {
      const toolsSubMenus = [
        {
          key: "Upload",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "Upload"
              }
            },
            { default: () => "B站上传" }
          )
        },
        {
          key: "DanmakuFactory",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "DanmakuFactory"
              }
            },
            { default: () => "弹幕转换" }
          )
        },
        {
          key: "BiliDownload",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "BiliDownload"
              }
            },
            { default: () => "下载订阅" }
          )
        },
        {
          key: "FileSync",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "FileSync"
              }
            },
            { default: () => "文件同步" }
          )
        }
      ];
      const videoProcessingSubMenus = [
        {
          key: "videoCut",
          label: () => {
            if (!isWeb.value && appConfig.appConfig.cutPageInNewWindow) {
              return h(
                "a",
                {
                  onClick: async () => {
                    await window.api.common.createSubWindow();
                  }
                },
                { default: () => "切片" }
              );
            } else {
              return h(
                RouterLink,
                {
                  to: {
                    name: "videoCut"
                  }
                },
                { default: () => "切片" }
              );
            }
          }
        },
        {
          key: "Convert2Mp4",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "Convert2Mp4"
              }
            },
            { default: () => "转码" }
          )
        },
        {
          key: "VideoMerge",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "VideoMerge"
              }
            },
            { default: () => "视频合并" }
          )
        },
        {
          key: "FlvRepair",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "FlvRepair"
              }
            },
            { default: () => "FLV修复" }
          )
        }
      ];
      const menus = [
        {
          label: () => h(
            RouterLink,
            {
              to: {
                name: "Home"
              }
            },
            { default: () => "压制" }
          ),
          key: "Home",
          icon: renderIcon(HomeIcon)
        },
        {
          key: "recorder",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "recorder"
              }
            },
            { default: () => "直播录制" }
          ),
          icon: renderIcon(LiveTvRound)
        },
        {
          label: () => h(
            RouterLink,
            {
              to: {
                name: "Dashboard"
              }
            },
            { default: () => "看板" }
          ),
          key: "Dashboard",
          icon: renderIcon(DashboardIcon)
        },
        {
          label: () => h("span", "视频处理"),
          key: "videoProcessing",
          icon: renderIcon(VideoClip20Regular),
          children: videoProcessingSubMenus
        },
        {
          label: () => h("span", "工具"),
          key: "tools",
          icon: renderIcon(BuildIcon),
          children: toolsSubMenus
        },
        {
          label: () => h(
            RouterLink,
            {
              to: {
                name: "Queue"
              }
            },
            { default: () => "任务队列" }
          ),
          key: "Queue",
          icon: renderQueueIcon(QueueIcon)
        },
        {
          label: () => h(
            RouterLink,
            {
              to: {
                name: "User"
              }
            },
            { default: () => "用户" }
          ),
          key: "User",
          icon: renderImg(userInfo.value?.profile?.face || defaultUserAvatar)
        }
      ];
      return menus;
    });
    const settingVisible = ref(false);
    onMounted(() => {
      eventBus.on("open-setting-dialog", ({ extra }) => {
        openSetting("webhook", extra);
      });
    });
    const settingDialogRef = ref(null);
    const openSetting = async (tab, extra) => {
      settingVisible.value = true;
      if (tab) {
        setTimeout(() => {
          settingDialogRef.value?.set(tab, extra);
        }, 500);
      }
    };
    const logVisible = ref(false);
    window?.api?.openSetting(() => {
      openSetting();
    });
    window?.api?.openLog(() => {
      logVisible.value = true;
    });
    window?.api?.openChangelog(() => {
      changelogVisible.value = true;
    });
    const notification = useNotification();
    window.addEventListener("unhandledrejection", (error) => {
      notification.error({
        title: String(error.reason).replace("Error: ", ""),
        duration: 3e3
      });
    });
    const changelogVisible = ref(false);
    const initChanglog = async () => {
      const data = JSON.parse(localStorage.getItem("changelog") || "{}");
      const version = await common.version();
      if (!data[version]) {
        changelogVisible.value = true;
      }
    };
    initChanglog();
    return (_ctx, _cache) => {
      const _component_n_menu = __unplugin_components_0;
      const _component_n_layout_footer = __unplugin_components_1;
      const _component_n_layout_sider = __unplugin_components_2;
      const _component_router_view = resolveComponent("router-view");
      const _component_n_layout = __unplugin_components_3;
      const _component_n_space = __unplugin_components_3$3;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_n_space, { vertical: "" }, {
          default: withCtx(() => [
            createVNode(_component_n_layout, {
              "has-sider": "",
              class: "layout",
              position: "absolute"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_layout_sider, {
                  bordered: "",
                  "collapse-mode": "width",
                  "collapsed-width": 64,
                  width: 160,
                  collapsed: unref(collapsed),
                  "show-trigger": "",
                  onCollapse: _cache[2] || (_cache[2] = ($event) => collapsed.value = true),
                  onExpand: _cache[3] || (_cache[3] = ($event) => collapsed.value = false)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_menu, {
                      value: unref(activeKey),
                      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(activeKey) ? activeKey.value = $event : null),
                      class: "main-menu",
                      style: normalizeStyle({ marginBottom: `${unref(footerMenuOptions).length * 50}px` }),
                      collapsed: unref(collapsed),
                      "collapsed-width": 64,
                      "collapsed-icon-size": 22,
                      options: unref(menuOptions),
                      "default-expand-all": ""
                    }, null, 8, ["value", "style", "collapsed", "options"]),
                    createVNode(_component_n_layout_footer, { position: "absolute" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_menu, {
                          value: unref(activeKey),
                          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(activeKey) ? activeKey.value = $event : null),
                          class: "footer-menu",
                          collapsed: unref(collapsed),
                          "collapsed-width": 64,
                          "collapsed-icon-size": 22,
                          options: unref(footerMenuOptions),
                          "default-expand-all": ""
                        }, null, 8, ["value", "collapsed", "options"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["collapsed"]),
                createVNode(_component_n_layout, {
                  class: normalizeClass(["main-container", unref(route).name])
                }, {
                  default: withCtx(() => [
                    createVNode(_component_router_view, null, {
                      default: withCtx(({ Component }) => [
                        (openBlock(), createBlock(KeepAlive, { include: [
                          "Home",
                          "Dashboard",
                          "Upload",
                          "DanmakuFactory",
                          "Convert2Mp4",
                          "VideoMerge",
                          "FlvRepair",
                          "BiliDownload",
                          "recorder",
                          "videoCut",
                          "Queue",
                          "User",
                          "About",
                          "FileSync"
                        ] }, [
                          (openBlock(), createBlock(resolveDynamicComponent(Component)))
                        ], 1024))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(AppSettingDialog, {
          modelValue: unref(settingVisible),
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(settingVisible) ? settingVisible.value = $event : null),
          ref_key: "settingDialogRef",
          ref: settingDialogRef
        }, null, 8, ["modelValue"]),
        createVNode(_sfc_main$3, {
          visible: unref(changelogVisible),
          "onUpdate:visible": _cache[5] || (_cache[5] = ($event) => isRef(changelogVisible) ? changelogVisible.value = $event : null)
        }, null, 8, ["visible"]),
        createVNode(logModal, {
          visible: unref(logVisible),
          "onUpdate:visible": _cache[6] || (_cache[6] = ($event) => isRef(logVisible) ? logVisible.value = $event : null)
        }, null, 8, ["visible"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
