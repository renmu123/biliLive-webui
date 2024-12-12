import { _ as __unplugin_components_2, p as popoverBaseProps, u as useAdjustedTo, i as useAppConfig, N as NIcon, r as useUploadPreset, d as useUserInfoStore, v as videoPreset, g as cloneDeep, e as __unplugin_components_1$2 } from "./index-Be9rHucp.js";
import { d as defineComponent, m as h, K as createInjectionKey, x as cB, j as inject, A as useConfig, G as useTheme, aO as popselectLight, l as computed, D as watch, Q as nextTick, E as toRef, I as useThemeClass, a6 as keysOf, Y as call, r as ref, R as provide, a8 as keep, aE as omit, p as c, y as cM, N as cNotM, aP as paginationLight, ab as watchEffect, aQ as useRtl, aJ as createKey, aR as resolveSlot, F as Fragment, U as NBaseIcon, af as mergeModels, ah as storeToRefs, ag as useModel, ai as createBlock, w as withCtx, an as __unplugin_components_3, o as openBlock, a as createVNode, f as createBaseVNode, e as unref, i as isRef, g as createTextVNode, c as createElementBlock, ak as renderList, al as normalizeClass, am as toDisplayString, B as Button, _ as __unplugin_components_2$2, h as api, aj as createCommentVNode, as as normalizeStyle, aw as withKeys } from "./index-B3txP6HV.js";
import { b as bili } from "./bili-Cfip0Zwk.js";
import { u as useLocale } from "./Suffix-DS84fk-A.js";
import { a as useMergedState, u as useNotification } from "./use-notification-_uZSor1V.js";
import { _ as __unplugin_components_2$1 } from "./Input-B6k2JVGe.js";
import { _ as __unplugin_components_0$1 } from "./Select-cKie_tgm.js";
import { c as createTreeMate, N as NInternalSelectMenu, a as createTmOptions, h as happensIn, m as mergeEventHandlers } from "./utils-CpJTLUg0.js";
import { c as createRefSetter, _ as __unplugin_components_1$1 } from "./Divider-Dg2O_dra.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-BI19-qja.js";
import { c as common, p as previewWebhookTitle } from "./common-BAA1HpBD.js";
import { _ as _sfc_main$4 } from "./Tip.vue_vue_type_script_setup_true_lang-DFBPcEmQ.js";
import { d as deepRaw, u as uuid } from "./index-Cfb3FODH.js";
import { u as useConfirm } from "./index-CQuQXiXy.js";
import { t as templateRef } from "./index-CNQhkSN1.js";
import { a as __unplugin_components_7, _ as __unplugin_components_1 } from "./FormItem-Cdzklzq2.js";
import { _ as __unplugin_components_3$1, a as __unplugin_components_5 } from "./RadioGroup-9W9i5aqG.js";
import { _ as __unplugin_components_4$1 } from "./Space-C3OZuoMs.js";
import { _ as __unplugin_components_0$2 } from "./Cascader-BstE6L4T.js";
function smallerSize(size) {
  switch (size) {
    case "tiny":
      return "mini";
    case "small":
      return "tiny";
    case "medium":
      return "small";
    case "large":
      return "medium";
    case "huge":
      return "large";
  }
  throw new Error(`${size} has no smaller size.`);
}
const BackwardIcon = defineComponent({
  name: "Backward",
  render() {
    return h("svg", {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M12.2674 15.793C11.9675 16.0787 11.4927 16.0672 11.2071 15.7673L6.20572 10.5168C5.9298 10.2271 5.9298 9.7719 6.20572 9.48223L11.2071 4.23177C11.4927 3.93184 11.9675 3.92031 12.2674 4.206C12.5673 4.49169 12.5789 4.96642 12.2932 5.26634L7.78458 9.99952L12.2932 14.7327C12.5789 15.0326 12.5673 15.5074 12.2674 15.793Z",
      fill: "currentColor"
    }));
  }
});
const FastBackwardIcon = defineComponent({
  name: "FastBackward",
  render() {
    return h("svg", {
      viewBox: "0 0 20 20",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("g", {
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, h("g", {
      fill: "currentColor",
      "fill-rule": "nonzero"
    }, h("path", {
      d: "M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"
    }))));
  }
});
const FastForwardIcon = defineComponent({
  name: "FastForward",
  render() {
    return h("svg", {
      viewBox: "0 0 20 20",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("g", {
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, h("g", {
      fill: "currentColor",
      "fill-rule": "nonzero"
    }, h("path", {
      d: "M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
    }))));
  }
});
const ForwardIcon = defineComponent({
  name: "Forward",
  render() {
    return h("svg", {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",
      fill: "currentColor"
    }));
  }
});
const MoreIcon = defineComponent({
  name: "More",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("g", {
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, h("g", {
      fill: "currentColor",
      "fill-rule": "nonzero"
    }, h("path", {
      d: "M4,7 C4.55228,7 5,7.44772 5,8 C5,8.55229 4.55228,9 4,9 C3.44772,9 3,8.55229 3,8 C3,7.44772 3.44772,7 4,7 Z M8,7 C8.55229,7 9,7.44772 9,8 C9,8.55229 8.55229,9 8,9 C7.44772,9 7,8.55229 7,8 C7,7.44772 7.44772,7 8,7 Z M12,7 C12.5523,7 13,7.44772 13,8 C13,8.55229 12.5523,9 12,9 C11.4477,9 11,8.55229 11,8 C11,7.44772 11.4477,7 12,7 Z"
    }))));
  }
});
const popselectInjectionKey = createInjectionKey("n-popselect");
const style$1 = cB("popselect-menu", `
 box-shadow: var(--n-menu-box-shadow);
`);
const panelProps = {
  multiple: Boolean,
  value: {
    type: [String, Number, Array],
    default: null
  },
  cancelable: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  size: {
    type: String,
    default: "medium"
  },
  scrollable: Boolean,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onMouseenter: Function,
  onMouseleave: Function,
  renderLabel: Function,
  showCheckmark: {
    type: Boolean,
    default: void 0
  },
  nodeProps: Function,
  virtualScroll: Boolean,
  // deprecated
  onChange: [Function, Array]
};
const panelPropKeys = keysOf(panelProps);
const NPopselectPanel = defineComponent({
  name: "PopselectPanel",
  props: panelProps,
  setup(props) {
    const NPopselect2 = inject(popselectInjectionKey);
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Popselect", "-pop-select", style$1, popselectLight, NPopselect2.props, mergedClsPrefixRef);
    const treeMateRef = computed(() => {
      return createTreeMate(props.options, createTmOptions("value", "children"));
    });
    function doUpdateValue(value, option) {
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue,
        onChange
      } = props;
      if (onUpdateValue) call(onUpdateValue, value, option);
      if (_onUpdateValue) {
        call(_onUpdateValue, value, option);
      }
      if (onChange) call(onChange, value, option);
    }
    function handleToggle(tmNode) {
      toggle(tmNode.key);
    }
    function handleMenuMousedown(e) {
      if (!happensIn(e, "action") && !happensIn(e, "empty") && !happensIn(e, "header")) {
        e.preventDefault();
      }
    }
    function toggle(value) {
      const {
        value: {
          getNode
        }
      } = treeMateRef;
      if (props.multiple) {
        if (Array.isArray(props.value)) {
          const newValue = [];
          const newOptions = [];
          let shouldAddValue = true;
          props.value.forEach((v) => {
            if (v === value) {
              shouldAddValue = false;
              return;
            }
            const tmNode = getNode(v);
            if (tmNode) {
              newValue.push(tmNode.key);
              newOptions.push(tmNode.rawNode);
            }
          });
          if (shouldAddValue) {
            newValue.push(value);
            newOptions.push(getNode(value).rawNode);
          }
          doUpdateValue(newValue, newOptions);
        } else {
          const tmNode = getNode(value);
          if (tmNode) {
            doUpdateValue([value], [tmNode.rawNode]);
          }
        }
      } else {
        if (props.value === value && props.cancelable) {
          doUpdateValue(null, null);
        } else {
          const tmNode = getNode(value);
          if (tmNode) {
            doUpdateValue(value, tmNode.rawNode);
          }
          const {
            "onUpdate:show": _onUpdateShow,
            onUpdateShow
          } = NPopselect2.props;
          if (_onUpdateShow) call(_onUpdateShow, false);
          if (onUpdateShow) call(onUpdateShow, false);
          NPopselect2.setShow(false);
        }
      }
      void nextTick(() => {
        NPopselect2.syncPosition();
      });
    }
    watch(toRef(props, "options"), () => {
      void nextTick(() => {
        NPopselect2.syncPosition();
      });
    });
    const cssVarsRef = computed(() => {
      const {
        self: {
          menuBoxShadow
        }
      } = themeRef.value;
      return {
        "--n-menu-box-shadow": menuBoxShadow
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("select", void 0, cssVarsRef, NPopselect2.props) : void 0;
    return {
      mergedTheme: NPopselect2.mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      treeMate: treeMateRef,
      handleToggle,
      handleMenuMousedown,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(NInternalSelectMenu, {
      clsPrefix: this.mergedClsPrefix,
      focusable: true,
      nodeProps: this.nodeProps,
      class: [`${this.mergedClsPrefix}-popselect-menu`, this.themeClass],
      style: this.cssVars,
      theme: this.mergedTheme.peers.InternalSelectMenu,
      themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu,
      multiple: this.multiple,
      treeMate: this.treeMate,
      size: this.size,
      value: this.value,
      virtualScroll: this.virtualScroll,
      scrollable: this.scrollable,
      renderLabel: this.renderLabel,
      onToggle: this.handleToggle,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseenter,
      onMousedown: this.handleMenuMousedown,
      showCheckmark: this.showCheckmark
    }, {
      header: () => {
        var _a2, _b;
        return ((_b = (_a2 = this.$slots).header) === null || _b === void 0 ? void 0 : _b.call(_a2)) || [];
      },
      action: () => {
        var _a2, _b;
        return ((_b = (_a2 = this.$slots).action) === null || _b === void 0 ? void 0 : _b.call(_a2)) || [];
      },
      empty: () => {
        var _a2, _b;
        return ((_b = (_a2 = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a2)) || [];
      }
    });
  }
});
const popselectProps = Object.assign(Object.assign(Object.assign(Object.assign({}, useTheme.props), omit(popoverBaseProps, ["showArrow", "arrow"])), {
  placement: Object.assign(Object.assign({}, popoverBaseProps.placement), {
    default: "bottom"
  }),
  trigger: {
    type: String,
    default: "hover"
  }
}), panelProps);
const NPopselect = defineComponent({
  name: "Popselect",
  props: popselectProps,
  inheritAttrs: false,
  __popover__: true,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const themeRef = useTheme("Popselect", "-popselect", void 0, popselectLight, props, mergedClsPrefixRef);
    const popoverInstRef = ref(null);
    function syncPosition() {
      var _a;
      (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    function setShow(value) {
      var _a;
      (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.setShow(value);
    }
    provide(popselectInjectionKey, {
      props,
      mergedThemeRef: themeRef,
      syncPosition,
      setShow
    });
    const exposedMethods = {
      syncPosition,
      setShow
    };
    return Object.assign(Object.assign({}, exposedMethods), {
      popoverInstRef,
      mergedTheme: themeRef
    });
  },
  render() {
    const {
      mergedTheme
    } = this;
    const popoverProps = {
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      builtinThemeOverrides: {
        padding: "0"
      },
      ref: "popoverInstRef",
      internalRenderBody: (className, ref2, style2, onMouseenter, onMouseleave) => {
        const {
          $attrs
        } = this;
        return h(NPopselectPanel, Object.assign({}, $attrs, {
          class: [$attrs.class, className],
          style: [$attrs.style, ...style2]
        }, keep(this.$props, panelPropKeys), {
          ref: createRefSetter(ref2),
          onMouseenter: mergeEventHandlers([onMouseenter, $attrs.onMouseenter]),
          onMouseleave: mergeEventHandlers([onMouseleave, $attrs.onMouseleave])
        }), {
          header: () => {
            var _a, _b;
            return (_b = (_a = this.$slots).header) === null || _b === void 0 ? void 0 : _b.call(_a);
          },
          action: () => {
            var _a, _b;
            return (_b = (_a = this.$slots).action) === null || _b === void 0 ? void 0 : _b.call(_a);
          },
          empty: () => {
            var _a, _b;
            return (_b = (_a = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a);
          }
        });
      }
    };
    return h(__unplugin_components_2, Object.assign({}, omit(this.$props, panelPropKeys), popoverProps, {
      internalDeactivateImmediately: true
    }), {
      trigger: () => {
        var _a, _b;
        return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    });
  }
});
const hoverStyleProps = `
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`;
const hoverStyleChildren = [cM("button", `
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)];
const style = cB("pagination", `
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`, [cB("pagination-prefix", `
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `), cB("pagination-suffix", `
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `), c("> *:not(:first-child)", `
 margin: var(--n-item-margin);
 `), cB("select", `
 width: var(--n-select-width);
 `), c("&.transition-disabled", [cB("pagination-item", "transition: none!important;")]), cB("pagination-quick-jumper", `
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `, [cB("input", `
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]), cB("pagination-item", `
 position: relative;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 min-width: var(--n-item-size);
 height: var(--n-item-size);
 padding: var(--n-item-padding);
 background-color: var(--n-item-color);
 color: var(--n-item-text-color);
 border-radius: var(--n-item-border-radius);
 border: var(--n-item-border);
 fill: var(--n-button-icon-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 fill .3s var(--n-bezier);
 `, [cM("button", `
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `, [cB("base-icon", `
 font-size: var(--n-button-icon-size);
 `)]), cNotM("disabled", [cM("hover", hoverStyleProps, hoverStyleChildren), c("&:hover", hoverStyleProps, hoverStyleChildren), c("&:active", `
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `, [cM("button", `
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `)]), cM("active", `
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `, [c("&:hover", `
 background: var(--n-item-color-active-hover);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `, [cM("active, button", `
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 `, [cB("pagination-quick-jumper", `
 color: var(--n-jumper-text-color-disabled);
 `)]), cM("simple", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `, [cB("pagination-quick-jumper", [cB("input", `
 margin: 0;
 `)])])]);
function getDefaultPageSize(paginationProps2) {
  var _a;
  if (!paginationProps2) return 10;
  const {
    defaultPageSize
  } = paginationProps2;
  if (defaultPageSize !== void 0) return defaultPageSize;
  const pageSizeOption = (_a = paginationProps2.pageSizes) === null || _a === void 0 ? void 0 : _a[0];
  if (typeof pageSizeOption === "number") return pageSizeOption;
  return (pageSizeOption === null || pageSizeOption === void 0 ? void 0 : pageSizeOption.value) || 10;
}
function createPageItemsInfo(currentPage, pageCount, pageSlot, showQuickJumpDropdown) {
  let hasFastBackward = false;
  let hasFastForward = false;
  let fastBackwardTo = 1;
  let fastForwardTo = pageCount;
  if (pageCount === 1) {
    return {
      hasFastBackward: false,
      hasFastForward: false,
      fastForwardTo,
      fastBackwardTo,
      items: [{
        type: "page",
        label: 1,
        active: currentPage === 1,
        mayBeFastBackward: false,
        mayBeFastForward: false
      }]
    };
  }
  if (pageCount === 2) {
    return {
      hasFastBackward: false,
      hasFastForward: false,
      fastForwardTo,
      fastBackwardTo,
      items: [{
        type: "page",
        label: 1,
        active: currentPage === 1,
        mayBeFastBackward: false,
        mayBeFastForward: false
      }, {
        type: "page",
        label: 2,
        active: currentPage === 2,
        mayBeFastBackward: true,
        mayBeFastForward: false
      }]
    };
  }
  const firstPage = 1;
  const lastPage = pageCount;
  let middleStart = currentPage;
  let middleEnd = currentPage;
  const middleDelta = (pageSlot - 5) / 2;
  middleEnd += Math.ceil(middleDelta);
  middleEnd = Math.min(Math.max(middleEnd, firstPage + pageSlot - 3), lastPage - 2);
  middleStart -= Math.floor(middleDelta);
  middleStart = Math.max(Math.min(middleStart, lastPage - pageSlot + 3), firstPage + 2);
  let leftSplit = false;
  let rightSplit = false;
  if (middleStart > firstPage + 2) leftSplit = true;
  if (middleEnd < lastPage - 2) rightSplit = true;
  const items = [];
  items.push({
    type: "page",
    label: 1,
    active: currentPage === 1,
    mayBeFastBackward: false,
    mayBeFastForward: false
  });
  if (leftSplit) {
    hasFastBackward = true;
    fastBackwardTo = middleStart - 1;
    items.push({
      type: "fast-backward",
      active: false,
      label: void 0,
      options: showQuickJumpDropdown ? createRange(firstPage + 1, middleStart - 1) : null
    });
  } else if (lastPage >= firstPage + 1) {
    items.push({
      type: "page",
      label: firstPage + 1,
      mayBeFastBackward: true,
      mayBeFastForward: false,
      active: currentPage === firstPage + 1
    });
  }
  for (let i = middleStart; i <= middleEnd; ++i) {
    items.push({
      type: "page",
      label: i,
      mayBeFastBackward: false,
      mayBeFastForward: false,
      active: currentPage === i
    });
  }
  if (rightSplit) {
    hasFastForward = true;
    fastForwardTo = middleEnd + 1;
    items.push({
      type: "fast-forward",
      active: false,
      label: void 0,
      options: showQuickJumpDropdown ? createRange(middleEnd + 1, lastPage - 1) : null
    });
  } else if (middleEnd === lastPage - 2 && items[items.length - 1].label !== lastPage - 1) {
    items.push({
      type: "page",
      mayBeFastForward: true,
      mayBeFastBackward: false,
      label: lastPage - 1,
      active: currentPage === lastPage - 1
    });
  }
  if (items[items.length - 1].label !== lastPage) {
    items.push({
      type: "page",
      mayBeFastForward: false,
      mayBeFastBackward: false,
      label: lastPage,
      active: currentPage === lastPage
    });
  }
  return {
    hasFastBackward,
    hasFastForward,
    fastBackwardTo,
    fastForwardTo,
    items
  };
}
function createRange(from, to) {
  const range = [];
  for (let i = from; i <= to; ++i) {
    range.push({
      label: `${i}`,
      value: i
    });
  }
  return range;
}
const paginationProps = Object.assign(Object.assign({}, useTheme.props), {
  simple: Boolean,
  page: Number,
  defaultPage: {
    type: Number,
    default: 1
  },
  itemCount: Number,
  pageCount: Number,
  defaultPageCount: {
    type: Number,
    default: 1
  },
  showSizePicker: Boolean,
  pageSize: Number,
  defaultPageSize: Number,
  pageSizes: {
    type: Array,
    default() {
      return [10];
    }
  },
  showQuickJumper: Boolean,
  size: {
    type: String,
    default: "medium"
  },
  disabled: Boolean,
  pageSlot: {
    type: Number,
    default: 9
  },
  selectProps: Object,
  prev: Function,
  next: Function,
  goto: Function,
  prefix: Function,
  suffix: Function,
  label: Function,
  displayOrder: {
    type: Array,
    default: ["pages", "size-picker", "quick-jumper"]
  },
  to: useAdjustedTo.propTo,
  showQuickJumpDropdown: {
    type: Boolean,
    default: true
  },
  "onUpdate:page": [Function, Array],
  onUpdatePage: [Function, Array],
  "onUpdate:pageSize": [Function, Array],
  onUpdatePageSize: [Function, Array],
  /** @deprecated */
  onPageSizeChange: [Function, Array],
  /** @deprecated */
  onChange: [Function, Array]
});
const __unplugin_components_0 = defineComponent({
  name: "Pagination",
  props: paginationProps,
  setup(props) {
    const {
      mergedComponentPropsRef,
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Pagination", "-pagination", style, paginationLight, props, mergedClsPrefixRef);
    const {
      localeRef
    } = useLocale("Pagination");
    const selfRef = ref(null);
    const uncontrolledPageRef = ref(props.defaultPage);
    const uncontrolledPageSizeRef = ref(getDefaultPageSize(props));
    const mergedPageRef = useMergedState(toRef(props, "page"), uncontrolledPageRef);
    const mergedPageSizeRef = useMergedState(toRef(props, "pageSize"), uncontrolledPageSizeRef);
    const mergedPageCountRef = computed(() => {
      const {
        itemCount
      } = props;
      if (itemCount !== void 0) {
        return Math.max(1, Math.ceil(itemCount / mergedPageSizeRef.value));
      }
      const {
        pageCount
      } = props;
      if (pageCount !== void 0) return Math.max(pageCount, 1);
      return 1;
    });
    const jumperValueRef = ref("");
    watchEffect(() => {
      void props.simple;
      jumperValueRef.value = String(mergedPageRef.value);
    });
    const fastForwardActiveRef = ref(false);
    const fastBackwardActiveRef = ref(false);
    const showFastForwardMenuRef = ref(false);
    const showFastBackwardMenuRef = ref(false);
    const handleFastForwardMouseenter = () => {
      if (props.disabled) return;
      fastForwardActiveRef.value = true;
      disableTransitionOneTick();
    };
    const handleFastForwardMouseleave = () => {
      if (props.disabled) return;
      fastForwardActiveRef.value = false;
      disableTransitionOneTick();
    };
    const handleFastBackwardMouseenter = () => {
      fastBackwardActiveRef.value = true;
      disableTransitionOneTick();
    };
    const handleFastBackwardMouseleave = () => {
      fastBackwardActiveRef.value = false;
      disableTransitionOneTick();
    };
    const handleMenuSelect = (value) => {
      doUpdatePage(value);
    };
    const pageItemsInfo = computed(() => createPageItemsInfo(mergedPageRef.value, mergedPageCountRef.value, props.pageSlot, props.showQuickJumpDropdown));
    watchEffect(() => {
      if (!pageItemsInfo.value.hasFastBackward) {
        fastBackwardActiveRef.value = false;
        showFastBackwardMenuRef.value = false;
      } else if (!pageItemsInfo.value.hasFastForward) {
        fastForwardActiveRef.value = false;
        showFastForwardMenuRef.value = false;
      }
    });
    const pageSizeOptionsRef = computed(() => {
      const suffix = localeRef.value.selectionSuffix;
      return props.pageSizes.map((size) => {
        if (typeof size === "number") {
          return {
            label: `${size} / ${suffix}`,
            value: size
          };
        } else {
          return size;
        }
      });
    });
    const inputSizeRef = computed(() => {
      var _a, _b;
      return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Pagination) === null || _b === void 0 ? void 0 : _b.inputSize) || smallerSize(props.size);
    });
    const selectSizeRef = computed(() => {
      var _a, _b;
      return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Pagination) === null || _b === void 0 ? void 0 : _b.selectSize) || smallerSize(props.size);
    });
    const startIndexRef = computed(() => {
      return (mergedPageRef.value - 1) * mergedPageSizeRef.value;
    });
    const endIndexRef = computed(() => {
      const endIndex = mergedPageRef.value * mergedPageSizeRef.value - 1;
      const {
        itemCount
      } = props;
      if (itemCount !== void 0) {
        return endIndex > itemCount - 1 ? itemCount - 1 : endIndex;
      }
      return endIndex;
    });
    const mergedItemCountRef = computed(() => {
      const {
        itemCount
      } = props;
      if (itemCount !== void 0) return itemCount;
      return (props.pageCount || 1) * mergedPageSizeRef.value;
    });
    const rtlEnabledRef = useRtl("Pagination", mergedRtlRef, mergedClsPrefixRef);
    function disableTransitionOneTick() {
      void nextTick(() => {
        var _a;
        const {
          value: selfEl
        } = selfRef;
        if (!selfEl) return;
        selfEl.classList.add("transition-disabled");
        void ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.offsetWidth);
        selfEl.classList.remove("transition-disabled");
      });
    }
    function doUpdatePage(page) {
      if (page === mergedPageRef.value) return;
      const {
        "onUpdate:page": _onUpdatePage,
        onUpdatePage,
        onChange,
        simple
      } = props;
      if (_onUpdatePage) call(_onUpdatePage, page);
      if (onUpdatePage) call(onUpdatePage, page);
      if (onChange) call(onChange, page);
      uncontrolledPageRef.value = page;
      if (simple) {
        jumperValueRef.value = String(page);
      }
    }
    function doUpdatePageSize(pageSize) {
      if (pageSize === mergedPageSizeRef.value) return;
      const {
        "onUpdate:pageSize": _onUpdatePageSize,
        onUpdatePageSize,
        onPageSizeChange
      } = props;
      if (_onUpdatePageSize) call(_onUpdatePageSize, pageSize);
      if (onUpdatePageSize) call(onUpdatePageSize, pageSize);
      if (onPageSizeChange) call(onPageSizeChange, pageSize);
      uncontrolledPageSizeRef.value = pageSize;
      if (mergedPageCountRef.value < mergedPageRef.value) {
        doUpdatePage(mergedPageCountRef.value);
      }
    }
    function forward() {
      if (props.disabled) return;
      const page = Math.min(mergedPageRef.value + 1, mergedPageCountRef.value);
      doUpdatePage(page);
    }
    function backward() {
      if (props.disabled) return;
      const page = Math.max(mergedPageRef.value - 1, 1);
      doUpdatePage(page);
    }
    function fastForward() {
      if (props.disabled) return;
      const page = Math.min(pageItemsInfo.value.fastForwardTo, mergedPageCountRef.value);
      doUpdatePage(page);
    }
    function fastBackward() {
      if (props.disabled) return;
      const page = Math.max(pageItemsInfo.value.fastBackwardTo, 1);
      doUpdatePage(page);
    }
    function handleSizePickerChange(value) {
      doUpdatePageSize(value);
    }
    function doQuickJump() {
      const page = Number.parseInt(jumperValueRef.value);
      if (Number.isNaN(page)) return;
      doUpdatePage(Math.max(1, Math.min(page, mergedPageCountRef.value)));
      if (!props.simple) {
        jumperValueRef.value = "";
      }
    }
    function handleQuickJumperChange() {
      doQuickJump();
    }
    function handlePageItemClick(pageItem) {
      if (props.disabled) return;
      switch (pageItem.type) {
        case "page":
          doUpdatePage(pageItem.label);
          break;
        case "fast-backward":
          fastBackward();
          break;
        case "fast-forward":
          fastForward();
          break;
      }
    }
    function handleJumperInput(value) {
      jumperValueRef.value = value.replace(/\D+/g, "");
    }
    watchEffect(() => {
      void mergedPageRef.value;
      void mergedPageSizeRef.value;
      disableTransitionOneTick();
    });
    const cssVarsRef = computed(() => {
      const {
        size
      } = props;
      const {
        self: {
          buttonBorder,
          buttonBorderHover,
          buttonBorderPressed,
          buttonIconColor,
          buttonIconColorHover,
          buttonIconColorPressed,
          itemTextColor,
          itemTextColorHover,
          itemTextColorPressed,
          itemTextColorActive,
          itemTextColorDisabled,
          itemColor,
          itemColorHover,
          itemColorPressed,
          itemColorActive,
          itemColorActiveHover,
          itemColorDisabled,
          itemBorder,
          itemBorderHover,
          itemBorderPressed,
          itemBorderActive,
          itemBorderDisabled,
          itemBorderRadius,
          jumperTextColor,
          jumperTextColorDisabled,
          buttonColor,
          buttonColorHover,
          buttonColorPressed,
          [createKey("itemPadding", size)]: itemPadding,
          [createKey("itemMargin", size)]: itemMargin,
          [createKey("inputWidth", size)]: inputWidth,
          [createKey("selectWidth", size)]: selectWidth,
          [createKey("inputMargin", size)]: inputMargin,
          [createKey("selectMargin", size)]: selectMargin,
          [createKey("jumperFontSize", size)]: jumperFontSize,
          [createKey("prefixMargin", size)]: prefixMargin,
          [createKey("suffixMargin", size)]: suffixMargin,
          [createKey("itemSize", size)]: itemSize,
          [createKey("buttonIconSize", size)]: buttonIconSize,
          [createKey("itemFontSize", size)]: itemFontSize,
          [`${createKey("itemMargin", size)}Rtl`]: itemMarginRtl,
          [`${createKey("inputMargin", size)}Rtl`]: inputMarginRtl
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-prefix-margin": prefixMargin,
        "--n-suffix-margin": suffixMargin,
        "--n-item-font-size": itemFontSize,
        "--n-select-width": selectWidth,
        "--n-select-margin": selectMargin,
        "--n-input-width": inputWidth,
        "--n-input-margin": inputMargin,
        "--n-input-margin-rtl": inputMarginRtl,
        "--n-item-size": itemSize,
        "--n-item-text-color": itemTextColor,
        "--n-item-text-color-disabled": itemTextColorDisabled,
        "--n-item-text-color-hover": itemTextColorHover,
        "--n-item-text-color-active": itemTextColorActive,
        "--n-item-text-color-pressed": itemTextColorPressed,
        "--n-item-color": itemColor,
        "--n-item-color-hover": itemColorHover,
        "--n-item-color-disabled": itemColorDisabled,
        "--n-item-color-active": itemColorActive,
        "--n-item-color-active-hover": itemColorActiveHover,
        "--n-item-color-pressed": itemColorPressed,
        "--n-item-border": itemBorder,
        "--n-item-border-hover": itemBorderHover,
        "--n-item-border-disabled": itemBorderDisabled,
        "--n-item-border-active": itemBorderActive,
        "--n-item-border-pressed": itemBorderPressed,
        "--n-item-padding": itemPadding,
        "--n-item-border-radius": itemBorderRadius,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-jumper-font-size": jumperFontSize,
        "--n-jumper-text-color": jumperTextColor,
        "--n-jumper-text-color-disabled": jumperTextColorDisabled,
        "--n-item-margin": itemMargin,
        "--n-item-margin-rtl": itemMarginRtl,
        "--n-button-icon-size": buttonIconSize,
        "--n-button-icon-color": buttonIconColor,
        "--n-button-icon-color-hover": buttonIconColorHover,
        "--n-button-icon-color-pressed": buttonIconColorPressed,
        "--n-button-color-hover": buttonColorHover,
        "--n-button-color": buttonColor,
        "--n-button-color-pressed": buttonColorPressed,
        "--n-button-border": buttonBorder,
        "--n-button-border-hover": buttonBorderHover,
        "--n-button-border-pressed": buttonBorderPressed
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("pagination", computed(() => {
      let hash = "";
      const {
        size
      } = props;
      hash += size[0];
      return hash;
    }), cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      locale: localeRef,
      selfRef,
      mergedPage: mergedPageRef,
      pageItems: computed(() => {
        return pageItemsInfo.value.items;
      }),
      mergedItemCount: mergedItemCountRef,
      jumperValue: jumperValueRef,
      pageSizeOptions: pageSizeOptionsRef,
      mergedPageSize: mergedPageSizeRef,
      inputSize: inputSizeRef,
      selectSize: selectSizeRef,
      mergedTheme: themeRef,
      mergedPageCount: mergedPageCountRef,
      startIndex: startIndexRef,
      endIndex: endIndexRef,
      showFastForwardMenu: showFastForwardMenuRef,
      showFastBackwardMenu: showFastBackwardMenuRef,
      fastForwardActive: fastForwardActiveRef,
      fastBackwardActive: fastBackwardActiveRef,
      handleMenuSelect,
      handleFastForwardMouseenter,
      handleFastForwardMouseleave,
      handleFastBackwardMouseenter,
      handleFastBackwardMouseleave,
      handleJumperInput,
      handleBackwardClick: backward,
      handleForwardClick: forward,
      handlePageItemClick,
      handleSizePickerChange,
      handleQuickJumperChange,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      $slots,
      mergedClsPrefix,
      disabled,
      cssVars,
      mergedPage,
      mergedPageCount,
      pageItems,
      showSizePicker,
      showQuickJumper,
      mergedTheme,
      locale,
      inputSize,
      selectSize,
      mergedPageSize,
      pageSizeOptions,
      jumperValue,
      simple,
      prev,
      next,
      prefix,
      suffix,
      label,
      goto,
      handleJumperInput,
      handleSizePickerChange,
      handleBackwardClick,
      handlePageItemClick,
      handleForwardClick,
      handleQuickJumperChange,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const renderPrefix = $slots.prefix || prefix;
    const renderSuffix = $slots.suffix || suffix;
    const renderPrev = prev || $slots.prev;
    const renderNext = next || $slots.next;
    const renderLabel = label || $slots.label;
    return h("div", {
      ref: "selfRef",
      class: [`${mergedClsPrefix}-pagination`, this.themeClass, this.rtlEnabled && `${mergedClsPrefix}-pagination--rtl`, disabled && `${mergedClsPrefix}-pagination--disabled`, simple && `${mergedClsPrefix}-pagination--simple`],
      style: cssVars
    }, renderPrefix ? h("div", {
      class: `${mergedClsPrefix}-pagination-prefix`
    }, renderPrefix({
      page: mergedPage,
      pageSize: mergedPageSize,
      pageCount: mergedPageCount,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      itemCount: this.mergedItemCount
    })) : null, this.displayOrder.map((part) => {
      switch (part) {
        case "pages":
          return h(Fragment, null, h("div", {
            class: [`${mergedClsPrefix}-pagination-item`, !renderPrev && `${mergedClsPrefix}-pagination-item--button`, (mergedPage <= 1 || mergedPage > mergedPageCount || disabled) && `${mergedClsPrefix}-pagination-item--disabled`],
            onClick: handleBackwardClick
          }, renderPrev ? renderPrev({
            page: mergedPage,
            pageSize: mergedPageSize,
            pageCount: mergedPageCount,
            startIndex: this.startIndex,
            endIndex: this.endIndex,
            itemCount: this.mergedItemCount
          }) : h(NBaseIcon, {
            clsPrefix: mergedClsPrefix
          }, {
            default: () => this.rtlEnabled ? h(ForwardIcon, null) : h(BackwardIcon, null)
          })), simple ? h(Fragment, null, h("div", {
            class: `${mergedClsPrefix}-pagination-quick-jumper`
          }, h(__unplugin_components_2$1, {
            value: jumperValue,
            onUpdateValue: handleJumperInput,
            size: inputSize,
            placeholder: "",
            disabled,
            theme: mergedTheme.peers.Input,
            themeOverrides: mergedTheme.peerOverrides.Input,
            onChange: handleQuickJumperChange
          })), " /", " ", mergedPageCount) : pageItems.map((pageItem, index) => {
            let contentNode;
            let onMouseenter;
            let onMouseleave;
            const {
              type
            } = pageItem;
            switch (type) {
              case "page":
                const pageNode = pageItem.label;
                if (renderLabel) {
                  contentNode = renderLabel({
                    type: "page",
                    node: pageNode,
                    active: pageItem.active
                  });
                } else {
                  contentNode = pageNode;
                }
                break;
              case "fast-forward":
                const fastForwardNode = this.fastForwardActive ? h(NBaseIcon, {
                  clsPrefix: mergedClsPrefix
                }, {
                  default: () => this.rtlEnabled ? h(FastBackwardIcon, null) : h(FastForwardIcon, null)
                }) : h(NBaseIcon, {
                  clsPrefix: mergedClsPrefix
                }, {
                  default: () => h(MoreIcon, null)
                });
                if (renderLabel) {
                  contentNode = renderLabel({
                    type: "fast-forward",
                    node: fastForwardNode,
                    active: this.fastForwardActive || this.showFastForwardMenu
                  });
                } else {
                  contentNode = fastForwardNode;
                }
                onMouseenter = this.handleFastForwardMouseenter;
                onMouseleave = this.handleFastForwardMouseleave;
                break;
              case "fast-backward":
                const fastBackwardNode = this.fastBackwardActive ? h(NBaseIcon, {
                  clsPrefix: mergedClsPrefix
                }, {
                  default: () => this.rtlEnabled ? h(FastForwardIcon, null) : h(FastBackwardIcon, null)
                }) : h(NBaseIcon, {
                  clsPrefix: mergedClsPrefix
                }, {
                  default: () => h(MoreIcon, null)
                });
                if (renderLabel) {
                  contentNode = renderLabel({
                    type: "fast-backward",
                    node: fastBackwardNode,
                    active: this.fastBackwardActive || this.showFastBackwardMenu
                  });
                } else {
                  contentNode = fastBackwardNode;
                }
                onMouseenter = this.handleFastBackwardMouseenter;
                onMouseleave = this.handleFastBackwardMouseleave;
                break;
            }
            const itemNode = h("div", {
              key: index,
              class: [`${mergedClsPrefix}-pagination-item`, pageItem.active && `${mergedClsPrefix}-pagination-item--active`, type !== "page" && (type === "fast-backward" && this.showFastBackwardMenu || type === "fast-forward" && this.showFastForwardMenu) && `${mergedClsPrefix}-pagination-item--hover`, disabled && `${mergedClsPrefix}-pagination-item--disabled`, type === "page" && `${mergedClsPrefix}-pagination-item--clickable`],
              onClick: () => {
                handlePageItemClick(pageItem);
              },
              onMouseenter,
              onMouseleave
            }, contentNode);
            if (type === "page" && !pageItem.mayBeFastBackward && !pageItem.mayBeFastForward) {
              return itemNode;
            } else {
              const key = pageItem.type === "page" ? pageItem.mayBeFastBackward ? "fast-backward" : "fast-forward" : pageItem.type;
              if (pageItem.type !== "page" && !pageItem.options) {
                return itemNode;
              }
              return h(NPopselect, {
                to: this.to,
                key,
                disabled,
                trigger: "hover",
                virtualScroll: true,
                style: {
                  width: "60px"
                },
                theme: mergedTheme.peers.Popselect,
                themeOverrides: mergedTheme.peerOverrides.Popselect,
                builtinThemeOverrides: {
                  peers: {
                    InternalSelectMenu: {
                      height: "calc(var(--n-option-height) * 4.6)"
                    }
                  }
                },
                nodeProps: () => ({
                  style: {
                    justifyContent: "center"
                  }
                }),
                show: type === "page" ? false : type === "fast-backward" ? this.showFastBackwardMenu : this.showFastForwardMenu,
                onUpdateShow: (value) => {
                  if (type === "page") return;
                  if (value) {
                    if (type === "fast-backward") {
                      this.showFastBackwardMenu = value;
                    } else {
                      this.showFastForwardMenu = value;
                    }
                  } else {
                    this.showFastBackwardMenu = false;
                    this.showFastForwardMenu = false;
                  }
                },
                options: pageItem.type !== "page" && pageItem.options ? pageItem.options : [],
                onUpdateValue: this.handleMenuSelect,
                scrollable: true,
                showCheckmark: false
              }, {
                default: () => itemNode
              });
            }
          }), h("div", {
            class: [`${mergedClsPrefix}-pagination-item`, !renderNext && `${mergedClsPrefix}-pagination-item--button`, {
              [`${mergedClsPrefix}-pagination-item--disabled`]: mergedPage < 1 || mergedPage >= mergedPageCount || disabled
            }],
            onClick: handleForwardClick
          }, renderNext ? renderNext({
            page: mergedPage,
            pageSize: mergedPageSize,
            pageCount: mergedPageCount,
            itemCount: this.mergedItemCount,
            startIndex: this.startIndex,
            endIndex: this.endIndex
          }) : h(NBaseIcon, {
            clsPrefix: mergedClsPrefix
          }, {
            default: () => this.rtlEnabled ? h(BackwardIcon, null) : h(ForwardIcon, null)
          })));
        case "size-picker": {
          return !simple && showSizePicker ? h(__unplugin_components_0$1, Object.assign({
            consistentMenuWidth: false,
            placeholder: "",
            showCheckmark: false,
            to: this.to
          }, this.selectProps, {
            size: selectSize,
            options: pageSizeOptions,
            value: mergedPageSize,
            disabled,
            theme: mergedTheme.peers.Select,
            themeOverrides: mergedTheme.peerOverrides.Select,
            onUpdateValue: handleSizePickerChange
          })) : null;
        }
        case "quick-jumper":
          return !simple && showQuickJumper ? h("div", {
            class: `${mergedClsPrefix}-pagination-quick-jumper`
          }, goto ? goto() : resolveSlot(this.$slots.goto, () => [locale.goto]), h(__unplugin_components_2$1, {
            value: jumperValue,
            onUpdateValue: handleJumperInput,
            size: inputSize,
            placeholder: "",
            disabled,
            theme: mergedTheme.peers.Input,
            themeOverrides: mergedTheme.peerOverrides.Input,
            onChange: handleQuickJumperChange
          })) : null;
        default:
          return null;
      }
    }), renderSuffix ? h("div", {
      class: `${mergedClsPrefix}-pagination-suffix`
    }, renderSuffix({
      page: mergedPage,
      pageSize: mergedPageSize,
      pageCount: mergedPageCount,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      itemCount: this.mergedItemCount
    })) : null);
  }
});
const _hoisted_1$3 = { style: { "display": "flex", "gap": "10px", "align-items": "center" } };
const _hoisted_2$1 = { class: "media-container" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = { class: "title" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppendVideoDialog",
  props: {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {},
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["confirm"], ["update:visible", "update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const { appConfig } = storeToRefs(useAppConfig());
    const showModal = useModel(__props, "visible");
    const aid = useModel(__props, "modelValue");
    const emits = __emit;
    const notice = useNotification();
    const list = ref([]);
    const page = ref(1);
    const pageCount = ref(1);
    watch(
      () => page.value,
      () => {
        getArchives();
      }
    );
    const getArchives = async () => {
      const uid = appConfig.value.uid;
      if (!uid) {
        notice.warning({
          title: "请先登录",
          duration: 500
        });
        return;
      }
      const data = await bili.getArchives(
        {
          pn: page.value,
          ps: 20
        },
        uid
      );
      pageCount.value = Math.ceil(data.page.count / data.page.ps);
      list.value = data.arc_audits;
    };
    const handleOpen = () => {
      getArchives();
    };
    const close = () => {
      aid.value = "";
      showModal.value = false;
    };
    const confirm = async () => {
      if (!aid.value) {
        return;
      }
      emits("confirm", aid.value);
      showModal.value = false;
    };
    const selectMedia = (item) => {
      aid.value = String(item.Archive.aid);
    };
    return (_ctx, _cache) => {
      const _component_n_pagination = __unplugin_components_0;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_2$2;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showModal.value = $event),
        "mask-closable": false,
        "auto-focus": "",
        "on-after-enter": handleOpen
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "calc(100% - 60px)", "max-height": "80%" },
            bordered: false,
            size: "huge",
            role: "dialog",
            "aria-modal": "true",
            class: "card"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                _cache[4] || (_cache[4] = createBaseVNode("p", null, "续传只会增加分p，不会对稿件进行编辑", -1)),
                createBaseVNode("div", _hoisted_1$3, [
                  createVNode(_component_n_pagination, {
                    page: unref(page),
                    "onUpdate:page": _cache[0] || (_cache[0] = ($event) => isRef(page) ? page.value = $event : null),
                    "page-count": unref(pageCount),
                    size: "medium",
                    "show-quick-jumper": ""
                  }, null, 8, ["page", "page-count"]),
                  createVNode(_component_n_button, {
                    style: { "margin-left": "auto" },
                    class: "btn",
                    onClick: close
                  }, {
                    default: withCtx(() => _cache[2] || (_cache[2] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    class: "btn",
                    onClick: confirm
                  }, {
                    default: withCtx(() => _cache[3] || (_cache[3] = [
                      createTextVNode(" 确认 ")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_2$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (item) => {
                    return openBlock(), createElementBlock("div", {
                      key: item.Archive.aid,
                      class: normalizeClass(["media", { selected: aid.value == item.Archive.aid }]),
                      onClick: ($event) => selectMedia(item)
                    }, [
                      createBaseVNode("img", {
                        src: item.Archive.cover,
                        referrerpolicy: "no-referrer",
                        class: "cover"
                      }, null, 8, _hoisted_4$1),
                      createBaseVNode("div", _hoisted_5$1, toDisplayString(item.Archive.title), 1)
                    ], 10, _hoisted_3$1);
                  }), 128))
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const AppendVideoDialog = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-abf68bef"]]);
const _hoisted_1$2 = ["src"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ImageCrop",
  props: /* @__PURE__ */ mergeModels({
    height: { default: "100px" },
    width: { default: "160px" }
  }, {
    "modelValue": { required: true, default: "" },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const filename = useModel(__props, "modelValue");
    const src = computed(() => {
      if (filename.value) {
        if (window.path.isAbsolute(filename.value)) {
          return filename.value;
        } else {
          return `${api.defaults.baseURL}/assets/cover/${filename.value}`;
        }
      }
      return "";
    });
    const props = __props;
    const handleCoverChange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const res = await common.uploadCover(file);
      filename.value = res.name;
    };
    const fileInputRef = ref(null);
    const selectImage = () => {
      fileInputRef.value?.click();
    };
    const remove = () => {
      filename.value = "";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("input", {
          ref_key: "fileInputRef",
          ref: fileInputRef,
          type: "file",
          accept: ".png,.jpg,.jpeg",
          style: { "display": "none" },
          onChange: handleCoverChange
        }, null, 544),
        createBaseVNode("div", {
          style: normalizeStyle({
            height: props.height,
            width: props.width
          }),
          class: "image-container"
        }, [
          unref(src) ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "image",
            src: unref(src),
            onClick: selectImage
          }, null, 8, _hoisted_1$2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: "empty-image",
            onClick: selectImage
          }, "选择图片")),
          unref(src) ? (openBlock(), createElementBlock("span", {
            key: 2,
            class: "remove",
            onClick: remove
          }, "X")) : createCommentVNode("", true)
        ], 4)
      ]);
    };
  }
});
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fbbb378a"]]);
const _hoisted_1$1 = { class: "dynamic-tags" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DynamicTags",
  props: /* @__PURE__ */ mergeModels({
    max: { default: -1 },
    beforeCreate: {},
    placeholder: { default: "回车输入内容" },
    loading: { type: Boolean }
  }, {
    "modelValue": { required: true, default: [] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const tags = useModel(__props, "modelValue");
    const newTag = ref("");
    const canAddTag = computed(() => props.max === -1 || tags.value.length < props.max);
    const addTag = async () => {
      if (!newTag.value) return;
      try {
        const canCreate = props.beforeCreate ? await props.beforeCreate(newTag.value) : true;
        if (canCreate && canAddTag.value) {
          tags.value.push(newTag.value);
          newTag.value = "";
        }
      } catch (e) {
        console.error(e);
      }
    };
    const removeTag = (index) => {
      tags.value.splice(index, 1);
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_input = __unplugin_components_2$1;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (tag, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "tag"
          }, [
            createTextVNode(toDisplayString(tag) + " ", 1),
            createVNode(_component_n_icon, {
              size: "14",
              class: "remove-icon",
              onClick: ($event) => removeTag(index)
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createBaseVNode("svg", {
                  viewBox: "0 0 12 12",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "aria-hidden": "true"
                }, [
                  createBaseVNode("g", {
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd"
                  }, [
                    createBaseVNode("g", {
                      fill: "currentColor",
                      "fill-rule": "nonzero"
                    }, [
                      createBaseVNode("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" })
                    ])
                  ])
                ], -1)
              ])),
              _: 2
            }, 1032, ["onClick"])
          ]);
        }), 128)),
        canAddTag.value ? (openBlock(), createBlock(_component_n_input, {
          key: 0,
          value: newTag.value,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => newTag.value = $event),
          placeholder: _ctx.placeholder,
          class: "tag-input",
          loading: _ctx.loading,
          onKeyup: withKeys(addTag, ["enter"])
        }, null, 8, ["value", "placeholder", "loading"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const DynamicTags = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0f8cf42a"]]);
const _hoisted_1 = ["title", "onClick"];
const _hoisted_2 = { class: "inline-items" };
const _hoisted_3 = { class: "inline-items" };
const _hoisted_4 = { class: "inline-item" };
const _hoisted_5 = { class: "inline-item" };
const _hoisted_6 = { class: "inline-items" };
const _hoisted_7 = { class: "inline-item" };
const _hoisted_8 = { class: "inline-item" };
const _hoisted_9 = { class: "inline-item" };
const _hoisted_10 = { class: "inline-item" };
const _hoisted_11 = { class: "inline-items" };
const _hoisted_12 = { class: "inline-flex" };
const _hoisted_13 = {
  class: "inline-items",
  style: { "align-items": "center" }
};
const _hoisted_14 = { style: { "text-align": "right" } };
const _hoisted_15 = { style: { "text-align": "right" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BiliSetting",
  props: {
    "modelValue": { required: false, default: "default" },
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const confirm = useConfirm();
    const { getUploadPresets } = useUploadPreset();
    const { appConfig } = storeToRefs(useAppConfig());
    const { uploaPresetsOptions } = storeToRefs(useUploadPreset());
    const emits = __emit;
    const presetId = useModel(__props, "modelValue");
    const options = ref({
      config: {
        uid: void 0,
        seasonId: void 0
      }
    });
    const handlePresetChange = async (value) => {
      const preset = await videoPreset.get(value);
      if (preset) {
        options.value = preset;
      } else {
        options.value = {
          // @ts-ignore
          config: {}
        };
      }
    };
    const noSideSpace = (value) => !value.startsWith(" ") && !value.endsWith(" ");
    watch(
      () => presetId.value,
      (value) => {
        handlePresetChange(value);
      },
      {
        immediate: true
      }
    );
    const notice = useNotification();
    const tagCreateLoading = ref(false);
    const beforeTagCreate = async (tag) => {
      if (!appConfig.value.uid) {
        notice.warning({
          title: "请先登录",
          duration: 1e3
        });
        return false;
      }
      if ((options.value?.config?.tag ?? []).includes(tag)) {
        notice.warning({
          title: "Σ( ° △ °|||) 该输入标签已经存在",
          duration: 1e3
        });
        return false;
      }
      tagCreateLoading.value = true;
      try {
        const res = await bili.checkTag(tag, appConfig.value.uid);
        if (res.code !== 0) {
          notice.error({
            title: res.message,
            duration: 1e3
          });
          return false;
        }
        return true;
      } catch (e) {
        notice.error({
          title: "无法添加标签",
          duration: 1e3
        });
        return false;
      } finally {
        tagCreateLoading.value = false;
      }
    };
    const nameModelVisible = ref(false);
    const tempPresetName = ref("");
    const saveAnotherPreset = () => {
      isRename.value = false;
      tempPresetName.value = "";
      nameModelVisible.value = true;
    };
    const isRename = ref(false);
    const rename = () => {
      tempPresetName.value = options.value.name;
      isRename.value = true;
      nameModelVisible.value = true;
    };
    const saveAnotherPresetConfirm = async () => {
      if (!tempPresetName.value) {
        notice.warning({
          title: "预设名称不得为空",
          duration: 500
        });
        return;
      }
      const preset = cloneDeep(options.value);
      if (preset?.config?.desc && preset?.config?.desc?.length > descMaxLength.value) {
        notice.error({
          title: "简介超过字数限制",
          duration: 1e3
        });
        return;
      }
      if (!isRename.value) preset.id = uuid();
      preset.name = tempPresetName.value;
      await _savePreset(preset);
      nameModelVisible.value = false;
      notice.success({
        title: "保存成功",
        duration: 1e3
      });
      await getUploadPresets();
      presetId.value = preset.id;
      handlePresetChange(preset.id);
    };
    const deletePreset = async () => {
      let ids = Object.entries(appConfig.value.webhook.rooms || {}).map(([, value]) => {
        return value?.uploadPresetId;
      });
      ids.push(appConfig.value.webhook?.uploadPresetId);
      ids = ids.filter((id2) => id2 !== void 0 && id2 !== "");
      const msg = ids.includes(options.value.id) ? "该预设正在被使用中，删除后使用该预设的功能将失效，是否确认删除？" : "是否确认删除该预设？";
      const [status] = await confirm.warning({
        content: msg
      });
      if (!status) return;
      const id = options.value.id;
      await videoPreset.remove(id);
      getUploadPresets();
      presetId.value = "default";
      handlePresetChange("default");
    };
    const savePreset = async () => {
      const data = options.value;
      if (userInfoStore.userInfo?.uid) {
        data.config.uid = userInfoStore.userInfo.uid;
      }
      if (data?.config?.desc && data?.config?.desc?.length > descMaxLength.value) {
        notice.error({
          title: "简介超过字数限制",
          duration: 1e3
        });
        return;
      }
      await _savePreset(options.value);
      notice.success({
        title: "保存成功",
        duration: 1e3
      });
    };
    const _savePreset = async (data) => {
      await bili.validUploadParams(deepRaw(data.config));
      await videoPreset.save(deepRaw(data));
    };
    watch(
      () => options.value,
      (value) => {
        emits("change", value);
      },
      {
        deep: true
      }
    );
    watchEffect(() => {
      if (options.value.config.closeReply) {
        options.value.config.selectiionReply = 0;
      }
    });
    watchEffect(() => {
      if (options.value.config.selectiionReply) {
        options.value.config.closeReply = 0;
      }
    });
    const userInfoStore = useUserInfoStore();
    const seasonList = ref([]);
    const currentSections = computed(() => {
      return seasonList.value.find((item) => item.value === options.value.config.seasonId)?.sections;
    });
    const getSeasonList = async () => {
      if (!userInfoStore?.userInfo?.uid) {
        seasonList.value = [];
        return;
      }
      const data = await bili.getSeasonList(userInfoStore.userInfo.uid);
      seasonList.value = (data.seasons || []).map((item) => {
        return {
          label: item.season.title,
          value: item.season.id,
          sections: item?.sections?.sections || []
        };
      });
    };
    const areaData = ref([]);
    const getPlatformTypes = async () => {
      if (!userInfoStore?.userInfo?.uid) {
        return;
      }
      const data = await bili.getPlatformPre(userInfoStore.userInfo.uid);
      areaData.value = data.typelist;
    };
    const descMaxLength = ref(2e3);
    watch(
      () => options.value.config.seasonId,
      () => {
        options.value.config.uid = userInfoStore.userInfo?.uid;
      }
    );
    watchEffect(() => {
      if (!userInfoStore.userInfo) return;
      getSeasonList();
      getPlatformTypes();
    });
    const topicLoading = ref(false);
    const topicOptions = ref([]);
    const handleSearch = async (query) => {
      if (!appConfig.value.uid) {
        topicOptions.value = [];
        return;
      }
      if (!query.length) {
        topicOptions.value = [];
        return;
      }
      topicLoading.value = true;
      const data = await bili.searchTopic(query, appConfig.value.uid);
      topicOptions.value = data.result.topics.map((item) => {
        return {
          ...item,
          label: item.name,
          value: item.name
        };
      });
      topicLoading.value = false;
    };
    watch(
      () => options.value.config.topic_name,
      () => {
        if (options.value.config.topic_name) {
          options.value.config.topic_id = topicOptions.value.find(
            (item) => item.value === options.value.config.topic_name
          )?.id;
          options.value.config.mission_id = topicOptions.value.find(
            (item) => item.value === options.value.config.topic_name
          )?.mission_id;
        } else {
          options.value.config.topic_id = void 0;
          options.value.config.mission_id = void 0;
        }
      }
    );
    const titleList = ref([
      {
        value: "{{title}}",
        label: "视频标题"
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
        value: "{{now}}",
        label: "视频录制时间（示例：2024.01.24）"
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
    const titleTip = computed(() => {
      const base = `上限80字，多余的会被截断。<br/>
  占位符用于支持webhook中的相关功能，如果你是手动上传，和你基本上没关系，如【{{user}}】{{title}}-{{now}}<br/>
  不要在直播开始后修改字段，本场直播不会生效，更多模板引擎等高级用法见文档<br/>`;
      return titleList.value.map((item) => {
        return `${item.label}：${item.value}<br/>`;
      }).reduce((prev, cur) => prev + cur, base);
    });
    const previewTitle = async (template) => {
      const data = await previewWebhookTitle(template);
      notice.warning({
        title: data,
        duration: 3e3
      });
    };
    const titleInput = templateRef("titleInput");
    const setTitleVar = async (value) => {
      const input = titleInput.value?.inputElRef;
      if (input) {
        const start = input.selectionStart ?? options.value.config.title.length;
        const end = input.selectionEnd ?? options.value.config.title.length;
        const oldValue = options.value.config.title;
        options.value.config.title = oldValue.slice(0, start) + value + oldValue.slice(end);
        input.focus();
        await nextTick();
        input.setSelectionRange(start + value.length, start + value.length);
      } else {
        options.value.config.title += value;
      }
    };
    return (_ctx, _cache) => {
      const _component_n_select = __unplugin_components_0$1;
      const _component_n_form_item = __unplugin_components_1;
      const _component_n_divider = __unplugin_components_1$1;
      const _component_Tip = _sfc_main$4;
      const _component_image_crop = __unplugin_components_4;
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_button = Button;
      const _component_n_radio = __unplugin_components_3$1;
      const _component_n_space = __unplugin_components_4$1;
      const _component_n_radio_group = __unplugin_components_5;
      const _component_n_cascader = __unplugin_components_0$2;
      const _component_n_checkbox = __unplugin_components_1$2;
      const _component_n_form = __unplugin_components_7;
      const _component_n_card = __unplugin_components_2$2;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_n_form, {
          ref: "formRef",
          "label-width": "120px",
          "label-placement": "left",
          "label-align": "right"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_form_item, { label: "预设" }, {
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: presetId.value,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => presetId.value = $event),
                  options: unref(uploaPresetsOptions)
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            }),
            createVNode(_component_n_divider),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "非必选，默认由B站决定",
                  text: "封面"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_image_crop, {
                  modelValue: unref(options).config.cover,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(options).config.cover = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "视频标题" }, {
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
                    class: "title-var",
                    onClick: ($event) => setTitleVar(item.value)
                  }, toDisplayString(item.value), 9, _hoisted_1);
                }), 128))
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  ref_key: "titleInput",
                  ref: titleInput,
                  value: unref(options).config.title,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).config.title = $event),
                  placeholder: "请输入视频标题",
                  clearable: ""
                }, null, 8, ["value"]),
                createVNode(_component_n_button, {
                  style: { "margin-right": "10px" },
                  onClick: _cache[3] || (_cache[3] = ($event) => previewTitle(unref(options).config.title))
                }, {
                  default: withCtx(() => _cache[29] || (_cache[29] = [
                    createTextVNode("预览")
                  ])),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "稿件类型" }, {
              default: withCtx(() => [
                createVNode(_component_n_radio_group, {
                  value: unref(options).config.copyright,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(options).config.copyright = $event),
                  name: "radiogroup"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_space, null, {
                      default: withCtx(() => [
                        createVNode(_component_n_radio, { value: 1 }, {
                          default: withCtx(() => _cache[30] || (_cache[30] = [
                            createTextVNode(" 自制 ")
                          ])),
                          _: 1
                        }),
                        createVNode(_component_n_radio, { value: 2 }, {
                          default: withCtx(() => _cache[31] || (_cache[31] = [
                            createTextVNode(" 转载 ")
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
            unref(options).config.copyright === 2 ? (openBlock(), createBlock(_component_n_form_item, {
              key: 0,
              label: "转载来源"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(options).config.source,
                  "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(options).config.source = $event),
                  placeholder: "注明视频来源网址",
                  "allow-input": noSideSpace,
                  clearable: "",
                  maxlength: "200",
                  "show-count": ""
                }, null, 8, ["value"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, { label: "分区" }, {
              default: withCtx(() => [
                createVNode(_component_n_cascader, {
                  value: unref(options).config.tid,
                  "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(options).config.tid = $event),
                  "label-field": "name",
                  "value-field": "id",
                  options: unref(areaData),
                  "check-strategy": "child",
                  filterable: ""
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "标签" }, {
              default: withCtx(() => [
                createVNode(DynamicTags, {
                  modelValue: unref(options).config.tag,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(options).config.tag = $event),
                  max: 10,
                  "before-create": beforeTagCreate,
                  placeholder: "回车输入标签，最多十个",
                  loading: unref(tagCreateLoading)
                }, null, 8, ["modelValue", "loading"])
              ]),
              _: 1
            }),
            unref(options).config.copyright === 1 ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "话题也会占据一个tag栏~",
                  text: "话题"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: unref(options).config.topic_name,
                  "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(options).config.topic_name = $event),
                  filterable: "",
                  placeholder: "搜索话题",
                  options: unref(topicOptions),
                  loading: unref(topicLoading),
                  clearable: "",
                  remote: "",
                  "clear-filter-after-select": false,
                  onSearch: handleSearch
                }, null, 8, ["value", "options", "loading"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "视频简介",
                  tip: "可以输入[暮色312]<10995238>来进行艾特用户，前面的值为用户名，后面的值为用户id，请务必保持用户名与uid对应。"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(options).config.desc,
                  "onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(options).config.desc = $event),
                  placeholder: "请输入视频简介",
                  clearable: "",
                  maxlength: unref(descMaxLength),
                  "show-count": "",
                  type: "textarea",
                  autosize: {
                    minRows: 4
                  }
                }, null, 8, ["value", "maxlength"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "粉丝动态" }, {
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(options).config.dynamic,
                  "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(options).config.dynamic = $event),
                  placeholder: "请输入粉丝动态",
                  clearable: "",
                  maxlength: "233",
                  "show-count": "",
                  type: "textarea",
                  autosize: {
                    minRows: 2
                  }
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "自制声明" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.noReprint,
                    "onUpdate:checked": _cache[11] || (_cache[11] = ($event) => unref(options).config.noReprint = $event),
                    "checked-value": 1,
                    "unchecked-value": 0
                  }, {
                    default: withCtx(() => _cache[32] || (_cache[32] = [
                      createTextVNode("未经作者授权 禁止转载")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.recreate,
                    "onUpdate:checked": _cache[12] || (_cache[12] = ($event) => unref(options).config.recreate = $event),
                    "checked-value": 1,
                    "unchecked-value": -1,
                    title: "勾选即允许创作者基于您的投稿视频内容进行二创"
                  }, {
                    default: withCtx(() => _cache[33] || (_cache[33] = [
                      createTextVNode("二创声明")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "充电设置" }, {
              default: withCtx(() => [
                createVNode(_component_n_checkbox, {
                  checked: unref(options).config.openElec,
                  "onUpdate:checked": _cache[13] || (_cache[13] = ($event) => unref(options).config.openElec = $event),
                  "checked-value": 1,
                  "unchecked-value": 0
                }, {
                  default: withCtx(() => _cache[34] || (_cache[34] = [
                    createTextVNode("启用充电面板")
                  ])),
                  _: 1
                }, 8, ["checked"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "高级设置" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.dolby,
                      "onUpdate:checked": _cache[14] || (_cache[14] = ($event) => unref(options).config.dolby = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[35] || (_cache[35] = [
                        createTextVNode("杜比音效")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ]),
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.hires,
                      "onUpdate:checked": _cache[15] || (_cache[15] = ($event) => unref(options).config.hires = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[36] || (_cache[36] = [
                        createTextVNode("Hi-Res无损音质 ")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "互动管理" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.closeDanmu,
                      "onUpdate:checked": _cache[16] || (_cache[16] = ($event) => unref(options).config.closeDanmu = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[37] || (_cache[37] = [
                        createTextVNode("关闭弹幕")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.closeReply,
                      "onUpdate:checked": _cache[17] || (_cache[17] = ($event) => unref(options).config.closeReply = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[38] || (_cache[38] = [
                        createTextVNode("关闭评论 ")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ]),
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.selectiionReply,
                      "onUpdate:checked": _cache[18] || (_cache[18] = ($event) => unref(options).config.selectiionReply = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[39] || (_cache[39] = [
                        createTextVNode("开启精选评论 ")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ]),
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(_component_n_radio_group, {
                      value: unref(options).config.is_only_self,
                      "onUpdate:value": _cache[19] || (_cache[19] = ($event) => unref(options).config.is_only_self = $event),
                      name: "radiogroup"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_space, null, {
                          default: withCtx(() => [
                            createVNode(_component_n_radio, { value: 0 }, {
                              default: withCtx(() => _cache[40] || (_cache[40] = [
                                createTextVNode(" 公开可见 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_radio, { value: 1 }, {
                              default: withCtx(() => _cache[41] || (_cache[41] = [
                                createTextVNode(" 仅自己可见 ")
                              ])),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["value"])
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "谨慎使用，可能会导致评论被shadowban，以及可能的风控等级上升",
                  text: "自动评论"
                })
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_11, [
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.autoComment,
                    "onUpdate:checked": _cache[20] || (_cache[20] = ($event) => unref(options).config.autoComment = $event),
                    title: "审核后自动进行评论，续传不会被处理"
                  }, {
                    default: withCtx(() => _cache[42] || (_cache[42] = [
                      createTextVNode("自动评论")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.commentTop,
                    "onUpdate:checked": _cache[21] || (_cache[21] = ($event) => unref(options).config.commentTop = $event)
                  }, {
                    default: withCtx(() => _cache[43] || (_cache[43] = [
                      createTextVNode("置顶")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ])
              ]),
              _: 1
            }),
            unref(options).config.autoComment ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
              label: withCtx(() => _cache[44] || (_cache[44] = [
                createBaseVNode("span", { class: "inline-flex" }, [
                  createBaseVNode("span", null, "自动评论")
                ], -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(options).config.comment,
                  "onUpdate:value": _cache[22] || (_cache[22] = ($event) => unref(options).config.comment = $event),
                  placeholder: "请输入评论内容",
                  clearable: "",
                  maxlength: 1e3,
                  "show-count": "",
                  type: "textarea",
                  autosize: {
                    minRows: 4
                  }
                }, null, 8, ["value"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_12, [
                  _cache[45] || (_cache[45] = createBaseVNode("span", null, "合集", -1)),
                  createVNode(_component_Tip, {
                    tip: `仅适用于设置合集的账户(${unref(options).config.uid})`
                  }, null, 8, ["tip"])
                ])
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_13, [
                  createVNode(_component_n_select, {
                    value: unref(options).config.seasonId,
                    "onUpdate:value": _cache[23] || (_cache[23] = ($event) => unref(options).config.seasonId = $event),
                    options: unref(seasonList),
                    placeholder: "请选择合集",
                    style: { "width": "200px", "flex": "none" },
                    clearable: ""
                  }, null, 8, ["value", "options"]),
                  unref(options).config.seasonId ? (openBlock(), createBlock(_component_n_select, {
                    key: 0,
                    value: unref(options).config.sectionId,
                    "onUpdate:value": _cache[24] || (_cache[24] = ($event) => unref(options).config.sectionId = $event),
                    options: unref(currentSections),
                    "label-field": "title",
                    "value-field": "id",
                    placeholder: "请选择小节",
                    style: { "width": "200px", "flex": "none" },
                    clearable: ""
                  }, null, 8, ["value", "options"])) : createCommentVNode("", true),
                  unref(options).config.seasonId ? (openBlock(), createBlock(_component_n_checkbox, {
                    key: 1,
                    checked: unref(options).config.no_disturbance,
                    "onUpdate:checked": _cache[25] || (_cache[25] = ($event) => unref(options).config.no_disturbance = $event),
                    "checked-value": 1,
                    "unchecked-value": 0,
                    style: { "flex": "none" }
                  }, {
                    default: withCtx(() => _cache[46] || (_cache[46] = [
                      createTextVNode("此稿件不生成更新推送")
                    ])),
                    _: 1
                  }, 8, ["checked"])) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 512),
        createBaseVNode("div", _hoisted_14, [
          unref(options).id !== "default" ? (openBlock(), createBlock(_component_n_button, {
            key: 0,
            ghost: "",
            quaternary: "",
            type: "error",
            onClick: deletePreset
          }, {
            default: withCtx(() => _cache[47] || (_cache[47] = [
              createTextVNode("删除")
            ])),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_n_button, {
            type: "primary",
            style: { "margin-left": "10px" },
            onClick: rename
          }, {
            default: withCtx(() => _cache[48] || (_cache[48] = [
              createTextVNode("重命名")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            style: { "margin-left": "10px" },
            onClick: saveAnotherPreset
          }, {
            default: withCtx(() => _cache[49] || (_cache[49] = [
              createTextVNode("另存为")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            style: { "margin-left": "10px" },
            onClick: savePreset
          }, {
            default: withCtx(() => _cache[50] || (_cache[50] = [
              createTextVNode("保存")
            ])),
            _: 1
          })
        ]),
        createVNode(_component_n_modal, {
          show: unref(nameModelVisible),
          "onUpdate:show": _cache[28] || (_cache[28] = ($event) => isRef(nameModelVisible) ? nameModelVisible.value = $event : null)
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "600px" },
              bordered: false,
              role: "dialog",
              "aria-modal": "true"
            }, {
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_15, [
                  createVNode(_component_n_button, {
                    onClick: _cache[27] || (_cache[27] = ($event) => nameModelVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[51] || (_cache[51] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    style: { "margin-left": "10px" },
                    onClick: saveAnotherPresetConfirm
                  }, {
                    default: withCtx(() => _cache[52] || (_cache[52] = [
                      createTextVNode("确认")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(tempPresetName),
                  "onUpdate:value": _cache[26] || (_cache[26] = ($event) => isRef(tempPresetName) ? tempPresetName.value = $event : null),
                  placeholder: "请输入预设名称",
                  maxlength: "15",
                  onKeyup: withKeys(saveAnotherPresetConfirm, ["enter"])
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
const BiliSetting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-812fac6a"]]);
export {
  AppendVideoDialog as A,
  BiliSetting as B
};
