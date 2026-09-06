import { d as defineComponent, l as h, D as createInjectionKey, m as cB, ah as keysOf, v as useConfig, x as computed, y as useTheme, S as inject, d7 as popselectLight, Y as watch, J as toRef, C as useThemeClass, G as call, aq as nextTick, bv as omit, r as ref, ai as keep, E as provide, p as c, n as cM, s as cNotM, aG as resolveSlot, F as Fragment, M as NBaseIcon, X as watchEffect, A as useRtl, aO as createKey, d8 as paginationLight } from "./index-CB8xvhFr.js";
import { _ as __unplugin_components_2$1, a as useLocale, u as useMergedState } from "./Input-C3jgSm1V.js";
import { d as NInternalSelectMenu, e as createTmOptions, m as mergeEventHandlers, _ as __unplugin_components_0 } from "./Select-CYnthXY-.js";
import { a as ForwardIcon, B as BackwardIcon, b as FastForwardIcon, F as FastBackwardIcon } from "./Forward-C2N4dC5_.js";
import { _ as __unplugin_components_2, p as popoverBaseProps, u as useAdjustedTo } from "./Popover-D4v8saSe.js";
import { c as createTreeMate, h as happensIn } from "./create-DfXrl36C.js";
import { c as createRefSetter } from "./create-ref-setter-slkfdNqs.js";
const smallerSizeMap = {
  tiny: "mini",
  small: "tiny",
  medium: "small",
  large: "medium",
  huge: "large"
};
function smallerSize(size) {
  const result = smallerSizeMap[size];
  if (result === void 0) {
    throw new Error(`${size} has no smaller size.`);
  }
  return result;
}
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
  size: String,
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
      inlineThemeDisabled,
      mergedComponentPropsRef
    } = useConfig(props);
    const mergedSizeRef = computed(() => {
      var _a, _b;
      return props.size || ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Popselect) === null || _b === void 0 ? void 0 : _b.size) || "medium";
    });
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
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      mergedSize: mergedSizeRef,
      scrollbarProps: NPopselect2.props.scrollbarProps
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
      size: this.mergedSize,
      value: this.value,
      virtualScroll: this.virtualScroll,
      scrollable: this.scrollable,
      scrollbarProps: this.scrollbarProps,
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
const popselectProps = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, useTheme.props), omit(popoverBaseProps, ["showArrow", "arrow"])), {
  placement: Object.assign(Object.assign({}, popoverBaseProps.placement), {
    default: "bottom"
  }),
  trigger: {
    type: String,
    default: "hover"
  }
}), panelProps), {
  scrollbarProps: Object
});
const NPopselect = defineComponent({
  name: "Popselect",
  props: popselectProps,
  slots: Object,
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
  size: String,
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
  scrollbarProps: Object,
  "onUpdate:page": [Function, Array],
  onUpdatePage: [Function, Array],
  "onUpdate:pageSize": [Function, Array],
  onUpdatePageSize: [Function, Array],
  /** @deprecated */
  onPageSizeChange: [Function, Array],
  /** @deprecated */
  onChange: [Function, Array]
});
const __unplugin_components_8 = defineComponent({
  name: "Pagination",
  props: paginationProps,
  slots: Object,
  setup(props) {
    const {
      mergedComponentPropsRef,
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const mergedSizeRef = computed(() => {
      var _a, _b;
      return props.size || ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Pagination) === null || _b === void 0 ? void 0 : _b.size) || "medium";
    });
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
      return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Pagination) === null || _b === void 0 ? void 0 : _b.inputSize) || smallerSize(mergedSizeRef.value);
    });
    const selectSizeRef = computed(() => {
      var _a, _b;
      return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Pagination) === null || _b === void 0 ? void 0 : _b.selectSize) || smallerSize(mergedSizeRef.value);
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
      const size = mergedSizeRef.value;
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
      hash += mergedSizeRef.value[0];
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
    const renderPrefix = prefix || $slots.prefix;
    const renderSuffix = suffix || $slots.suffix;
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
                scrollbarProps: this.scrollbarProps,
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
          return !simple && showSizePicker ? h(__unplugin_components_0, Object.assign({
            consistentMenuWidth: false,
            placeholder: "",
            showCheckmark: false,
            to: this.to
          }, this.selectProps, {
            size: selectSize,
            options: pageSizeOptions,
            value: mergedPageSize,
            disabled,
            scrollbarProps: this.scrollbarProps,
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
export {
  __unplugin_components_8 as _,
  getDefaultPageSize as g
};
