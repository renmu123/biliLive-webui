import { m as cB, q as cE, n as cM, p as c, d as defineComponent, l as h, N as NFadeInExpandTransition, V as mergeProps, ad as NBaseClose, aG as resolveSlot, M as NBaseIcon, aH as ErrorIcon, aI as WarningIcon, aJ as InfoIcon, aK as SuccessIcon, aL as resolveWrappedSlot, v as useConfig, y as useTheme, aM as alertLight, A as useRtl, x as computed, aN as getMargin, aO as createKey, C as useThemeClass, r as ref, aP as insideModal, aQ as insidePopover, aR as listLight, E as provide, J as toRef, D as createInjectionKey, R as throwError, S as inject, aS as statisticLight, aT as thingLight, F as Fragment, c as createElementBlock, e as createBaseVNode, o as openBlock, al as mergeModels, am as useModel, Y as watch, g as createBlock, w as withCtx, ar as __unplugin_components_3, a as createVNode, h as createCommentVNode, f as unref, i as isRef, j as createTextVNode, t as toDisplayString, B as Button, _ as __unplugin_components_3$1, ao as renderList, aU as withModifiers, aF as renderSlot, ap as normalizeClass, at as normalizeStyle, aV as reactive, aD as onDeactivated, aC as onActivated, az as resolveDynamicComponent, u as useRouter } from "./index-CB8xvhFr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { r as recoder } from "./recordHistory-CX6UkL3E.js";
import { u as useConfirm } from "./index--O4HUYks.js";
import { u as useVisibleColumns, _ as _sfc_main$7 } from "./ColumnSelector.vue_vue_type_script_setup_true_lang-DlN61JnU.js";
import { _ as __unplugin_components_0$2, A as AddRecorderModal } from "./addModal-BTWBqaAL.js";
import { f as fadeInHeightExpandTransition, e as eventBus } from "./eventBus-DY6n83Bt.js";
import { b as __unplugin_components_5, _ as __unplugin_components_2$1, a as __unplugin_components_1 } from "./Switch-n0tH4Ke1.js";
import { _ as __unplugin_components_2$2 } from "./Input-C3jgSm1V.js";
import { C as CheckmarkCircleOutline } from "./CheckmarkCircleOutline-nkFDRC8w.js";
import { u as useNotification } from "./use-notification-Bzrm1lu9.js";
import { N as NText } from "./text-BHgaUKrH.js";
import { N as NIcon } from "./Icon-D1o4HjX4.js";
import { _ as __unplugin_components_0$1, N as NTag } from "./Select-CYnthXY-.js";
import { _ as __unplugin_components_5$1 } from "./Spin-BBY6Rzmi.js";
import { _ as __unplugin_components_1$1 } from "./Checkbox-Buw5q29r.js";
import { f as formatTime, g as formatRecentRecordTime } from "./index-guw4y6OO.js";
import { A as AccessTime24Regular, _ as __unplugin_components_2$4 } from "./AccessTime24Regular-BJsnM9tn.js";
import { E as EllipsisHorizontalOutline } from "./EllipsisHorizontalOutline-DPVsrf83.js";
import { _ as __unplugin_components_2$3 } from "./Popover-D4v8saSe.js";
import { B as ButtonGroup } from "./ButtonGroup-DKNdEWrH.js";
import { _ as __unplugin_components_5$2 } from "./Dropdown-CwFZzQPI.js";
import { a as useStorage, d as useEventListener } from "./index-CMOU2boc.js";
import { t as toLiveVideoPlayerPage } from "./pages-BFwPG4zS.js";
import { u as useNotice } from "./useNotice-D8AmCNaE.js";
import { _ as __unplugin_components_8$1 } from "./Pagination-DTxcX5iK.js";
import "./common-1CgNZfMf.js";
import "./Tip.vue_vue_type_script_setup_true_lang-BVeN5TP1.js";
import "./HelpCircleOutline-DC8ljYG3.js";
import "./index-FWk7a7hG.js";
import "./_getTag-22mR82vJ.js";
import "./recorder-h_P4r7Df.js";
import "./enum-DWbwatii.js";
import "./useBreakpoints-y2ktmuab.js";
import "./InputNumber-DuVe1x-P.js";
import "./TimePicker-WQrinlQm.js";
import "./create-ref-setter-slkfdNqs.js";
import "./create-DfXrl36C.js";
import "./ChevronRight-BrIDHZkd.js";
import "./Forward-C2N4dC5_.js";
const style$3 = cB("alert", `
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`, [
  cE("border", `
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),
  cM("closable", [cB("alert-body", [cE("title", `
 padding-right: 24px;
 `)])]),
  cE("icon", {
    color: "var(--n-icon-color)"
  }),
  cB("alert-body", {
    padding: "var(--n-padding)"
  }, [cE("title", {
    color: "var(--n-title-text-color)"
  }), cE("content", {
    color: "var(--n-content-text-color)"
  })]),
  fadeInHeightExpandTransition({
    originalTransition: "transform .3s var(--n-bezier)",
    enterToProps: {
      transform: "scale(1)"
    },
    leaveToProps: {
      transform: "scale(0.9)"
    }
  }),
  cE("icon", `
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),
  cE("close", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),
  cM("show-icon", [cB("alert-body", {
    paddingLeft: "calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"
  })]),
  // fix: https://github.com/tusen-ai/naive-ui/issues/4588
  cM("right-adjust", [cB("alert-body", {
    paddingRight: "calc(var(--n-close-size) + var(--n-padding) + 2px)"
  })]),
  cB("alert-body", `
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `, [cE("title", `
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `, [c("& +", [cE("content", {
    marginTop: "9px"
  })])]), cE("content", {
    transition: "color .3s var(--n-bezier)",
    fontSize: "var(--n-font-size)"
  })]),
  cE("icon", {
    transition: "color .3s var(--n-bezier)"
  })
]);
const alertProps = Object.assign(Object.assign({}, useTheme.props), {
  title: String,
  showIcon: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: "default"
  },
  bordered: {
    type: Boolean,
    default: true
  },
  closable: Boolean,
  onClose: Function,
  onAfterLeave: Function,
  /** @deprecated */
  onAfterHide: Function
});
const __unplugin_components_2 = defineComponent({
  name: "Alert",
  inheritAttrs: false,
  props: alertProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedBorderedRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Alert", "-alert", style$3, alertLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Alert", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self
      } = themeRef.value;
      const {
        fontSize,
        borderRadius,
        titleFontWeight,
        lineHeight,
        iconSize,
        iconMargin,
        iconMarginRtl,
        closeIconSize,
        closeBorderRadius,
        closeSize,
        closeMargin,
        closeMarginRtl,
        padding
      } = self;
      const {
        type
      } = props;
      const {
        left,
        right
      } = getMargin(iconMargin);
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-color": self[createKey("color", type)],
        "--n-close-icon-size": closeIconSize,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-color-hover": self[createKey("closeColorHover", type)],
        "--n-close-color-pressed": self[createKey("closeColorPressed", type)],
        "--n-close-icon-color": self[createKey("closeIconColor", type)],
        "--n-close-icon-color-hover": self[createKey("closeIconColorHover", type)],
        "--n-close-icon-color-pressed": self[createKey("closeIconColorPressed", type)],
        "--n-icon-color": self[createKey("iconColor", type)],
        "--n-border": self[createKey("border", type)],
        "--n-title-text-color": self[createKey("titleTextColor", type)],
        "--n-content-text-color": self[createKey("contentTextColor", type)],
        "--n-line-height": lineHeight,
        "--n-border-radius": borderRadius,
        "--n-font-size": fontSize,
        "--n-title-font-weight": titleFontWeight,
        "--n-icon-size": iconSize,
        "--n-icon-margin": iconMargin,
        "--n-icon-margin-rtl": iconMarginRtl,
        "--n-close-size": closeSize,
        "--n-close-margin": closeMargin,
        "--n-close-margin-rtl": closeMarginRtl,
        "--n-padding": padding,
        "--n-icon-margin-left": left,
        "--n-icon-margin-right": right
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("alert", computed(() => {
      return props.type[0];
    }), cssVarsRef, props) : void 0;
    const visibleRef = ref(true);
    const doAfterLeave = () => {
      const {
        onAfterLeave,
        onAfterHide
        // deprecated
      } = props;
      if (onAfterLeave) onAfterLeave();
      if (onAfterHide) onAfterHide();
    };
    const handleCloseClick = () => {
      var _a;
      void Promise.resolve((_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props)).then((result) => {
        if (result === false) return;
        visibleRef.value = false;
      });
    };
    const handleAfterLeave = () => {
      doAfterLeave();
    };
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      visible: visibleRef,
      handleCloseClick,
      handleAfterLeave,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(NFadeInExpandTransition, {
      onAfterLeave: this.handleAfterLeave
    }, {
      default: () => {
        const {
          mergedClsPrefix,
          $slots
        } = this;
        const attrs = {
          class: [
            `${mergedClsPrefix}-alert`,
            this.themeClass,
            this.closable && `${mergedClsPrefix}-alert--closable`,
            this.showIcon && `${mergedClsPrefix}-alert--show-icon`,
            // fix: https://github.com/tusen-ai/naive-ui/issues/4588
            !this.title && this.closable && `${mergedClsPrefix}-alert--right-adjust`,
            this.rtlEnabled && `${mergedClsPrefix}-alert--rtl`
          ],
          style: this.cssVars,
          role: "alert"
        };
        return this.visible ? h("div", Object.assign({}, mergeProps(this.$attrs, attrs)), this.closable && h(NBaseClose, {
          clsPrefix: mergedClsPrefix,
          class: `${mergedClsPrefix}-alert__close`,
          onClick: this.handleCloseClick
        }), this.bordered && h("div", {
          class: `${mergedClsPrefix}-alert__border`
        }), this.showIcon && h("div", {
          class: `${mergedClsPrefix}-alert__icon`,
          "aria-hidden": "true"
        }, resolveSlot($slots.icon, () => [h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => {
            switch (this.type) {
              case "success":
                return h(SuccessIcon, null);
              case "info":
                return h(InfoIcon, null);
              case "warning":
                return h(WarningIcon, null);
              case "error":
                return h(ErrorIcon, null);
              default:
                return null;
            }
          }
        })])), h("div", {
          class: [`${mergedClsPrefix}-alert-body`, this.mergedBordered && `${mergedClsPrefix}-alert-body--bordered`]
        }, resolveWrappedSlot($slots.header, (children) => {
          const mergedChildren = children || this.title;
          return mergedChildren ? h("div", {
            class: `${mergedClsPrefix}-alert-body__title`
          }, mergedChildren) : null;
        }), $slots.default && h("div", {
          class: `${mergedClsPrefix}-alert-body__content`
        }, $slots))) : null;
      }
    });
  }
});
const style$2 = c([cB("list", `
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `, [cM("show-divider", [cB("list-item", [c("&:not(:last-child)", [cE("divider", `
 background-color: var(--n-merged-border-color);
 `)])])]), cM("clickable", [cB("list-item", `
 cursor: pointer;
 `)]), cM("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `), cM("hoverable", [cB("list-item", `
 border-radius: var(--n-border-radius);
 `, [c("&:hover", `
 background-color: var(--n-merged-color-hover);
 `, [cE("divider", `
 background-color: transparent;
 `)])])]), cM("bordered, hoverable", [cB("list-item", `
 padding: 12px 20px;
 `), cE("header, footer", `
 padding: 12px 20px;
 `)]), cE("header, footer", `
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `, [c("&:not(:last-child)", `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]), cB("list-item", `
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cE("prefix", `
 margin-right: 20px;
 flex: 0;
 `), cE("suffix", `
 margin-left: 20px;
 flex: 0;
 `), cE("main", `
 flex: 1;
 `), cE("divider", `
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]), insideModal(cB("list", `
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)), insidePopover(cB("list", `
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);
const listProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: Boolean,
  clickable: Boolean,
  hoverable: Boolean,
  showDivider: {
    type: Boolean,
    default: true
  }
});
const listInjectionKey = createInjectionKey("n-list");
const __unplugin_components_9 = defineComponent({
  name: "List",
  props: listProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl("List", mergedRtlRef, mergedClsPrefixRef);
    const themeRef = useTheme("List", "-list", style$2, listLight, props, mergedClsPrefixRef);
    provide(listInjectionKey, {
      showDividerRef: toRef(props, "showDivider"),
      mergedClsPrefixRef
    });
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          fontSize,
          textColor,
          color,
          colorModal,
          colorPopover,
          borderColor,
          borderColorModal,
          borderColorPopover,
          borderRadius,
          colorHover,
          colorHoverModal,
          colorHoverPopover
        }
      } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-color": color,
        "--n-border-radius": borderRadius,
        "--n-border-color": borderColor,
        "--n-border-color-modal": borderColorModal,
        "--n-border-color-popover": borderColorPopover,
        "--n-color-modal": colorModal,
        "--n-color-popover": colorPopover,
        "--n-color-hover": colorHover,
        "--n-color-hover-modal": colorHoverModal,
        "--n-color-hover-popover": colorHoverPopover
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("list", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      $slots,
      mergedClsPrefix,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("ul", {
      class: [`${mergedClsPrefix}-list`, this.rtlEnabled && `${mergedClsPrefix}-list--rtl`, this.bordered && `${mergedClsPrefix}-list--bordered`, this.showDivider && `${mergedClsPrefix}-list--show-divider`, this.hoverable && `${mergedClsPrefix}-list--hoverable`, this.clickable && `${mergedClsPrefix}-list--clickable`, this.themeClass],
      style: this.cssVars
    }, $slots.header ? h("div", {
      class: `${mergedClsPrefix}-list__header`
    }, $slots.header()) : null, (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots), $slots.footer ? h("div", {
      class: `${mergedClsPrefix}-list__footer`
    }, $slots.footer()) : null);
  }
});
const __unplugin_components_8 = defineComponent({
  name: "ListItem",
  slots: Object,
  setup() {
    const listInjection = inject(listInjectionKey, null);
    if (!listInjection) {
      throwError("list-item", "`n-list-item` must be placed in `n-list`.");
    }
    return {
      showDivider: listInjection.showDividerRef,
      mergedClsPrefix: listInjection.mergedClsPrefixRef
    };
  },
  render() {
    const {
      $slots,
      mergedClsPrefix
    } = this;
    return h("li", {
      class: `${mergedClsPrefix}-list-item`
    }, $slots.prefix ? h("div", {
      class: `${mergedClsPrefix}-list-item__prefix`
    }, $slots.prefix()) : null, $slots.default ? h("div", {
      class: `${mergedClsPrefix}-list-item__main`
    }, $slots) : null, $slots.suffix ? h("div", {
      class: `${mergedClsPrefix}-list-item__suffix`
    }, $slots.suffix()) : null, this.showDivider && h("div", {
      class: `${mergedClsPrefix}-list-item__divider`
    }));
  }
});
const style$1 = cB("statistic", [cE("label", `
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `), cB("statistic-value", `
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `, [cE("prefix", `
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `, [cB("icon", {
  verticalAlign: "-0.125em"
})]), cE("content", `
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `), cE("suffix", `
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `, [cB("icon", {
  verticalAlign: "-0.125em"
})])])]);
const statisticProps = Object.assign(Object.assign({}, useTheme.props), {
  tabularNums: Boolean,
  label: String,
  value: [String, Number]
});
const __unplugin_components_0 = defineComponent({
  name: "Statistic",
  props: statisticProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Statistic", "-statistic", style$1, statisticLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Statistic", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        self: {
          labelFontWeight,
          valueFontSize,
          valueFontWeight,
          valuePrefixTextColor,
          labelTextColor,
          valueSuffixTextColor,
          valueTextColor,
          labelFontSize
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-label-font-size": labelFontSize,
        "--n-label-font-weight": labelFontWeight,
        "--n-label-text-color": labelTextColor,
        "--n-value-font-weight": valueFontWeight,
        "--n-value-font-size": valueFontSize,
        "--n-value-prefix-text-color": valuePrefixTextColor,
        "--n-value-suffix-text-color": valueSuffixTextColor,
        "--n-value-text-color": valueTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("statistic", void 0, cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      $slots: {
        default: defaultSlot,
        label: labelSlot,
        prefix: prefixSlot,
        suffix: suffixSlot
      }
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${mergedClsPrefix}-statistic`, this.themeClass, this.rtlEnabled && `${mergedClsPrefix}-statistic--rtl`],
      style: this.cssVars
    }, resolveWrappedSlot(labelSlot, (children) => h("div", {
      class: `${mergedClsPrefix}-statistic__label`
    }, this.label || children)), h("div", {
      class: `${mergedClsPrefix}-statistic-value`,
      style: {
        fontVariantNumeric: this.tabularNums ? "tabular-nums" : ""
      }
    }, resolveWrappedSlot(prefixSlot, (children) => children && h("span", {
      class: `${mergedClsPrefix}-statistic-value__prefix`
    }, children)), this.value !== void 0 ? h("span", {
      class: `${mergedClsPrefix}-statistic-value__content`
    }, this.value) : resolveWrappedSlot(defaultSlot, (children) => children && h("span", {
      class: `${mergedClsPrefix}-statistic-value__content`
    }, children)), resolveWrappedSlot(suffixSlot, (children) => children && h("span", {
      class: `${mergedClsPrefix}-statistic-value__suffix`
    }, children))));
  }
});
const style = cB("thing", `
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`, [cB("thing-avatar", `
 margin-right: 12px;
 margin-top: 2px;
 `), cB("thing-avatar-header-wrapper", `
 display: flex;
 flex-wrap: nowrap;
 `, [cB("thing-header-wrapper", `
 flex: 1;
 `)]), cB("thing-main", `
 flex-grow: 1;
 `, [cB("thing-header", `
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `, [cE("title", `
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]), cE("description", [c("&:not(:last-child)", `
 margin-bottom: 4px;
 `)]), cE("content", [c("&:not(:first-child)", `
 margin-top: 12px;
 `)]), cE("footer", [c("&:not(:first-child)", `
 margin-top: 12px;
 `)]), cE("action", [c("&:not(:first-child)", `
 margin-top: 12px;
 `)])])]);
const thingProps = Object.assign(Object.assign({}, useTheme.props), {
  title: String,
  titleExtra: String,
  description: String,
  descriptionClass: String,
  descriptionStyle: [String, Object],
  content: String,
  contentClass: String,
  contentStyle: [String, Object],
  contentIndented: Boolean
});
const __unplugin_components_7 = defineComponent({
  name: "Thing",
  props: thingProps,
  slots: Object,
  setup(props, {
    slots
  }) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Thing", "-thing", style, thingLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Thing", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        self: {
          titleTextColor,
          textColor,
          titleFontWeight,
          fontSize
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": fontSize,
        "--n-text-color": textColor,
        "--n-title-font-weight": titleFontWeight,
        "--n-title-text-color": titleTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("thing", void 0, cssVarsRef, props) : void 0;
    return () => {
      var _a;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      const rtlEnabled = rtlEnabledRef ? rtlEnabledRef.value : false;
      (_a = themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender) === null || _a === void 0 ? void 0 : _a.call(themeClassHandle);
      return h("div", {
        class: [`${mergedClsPrefix}-thing`, themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass, rtlEnabled && `${mergedClsPrefix}-thing--rtl`],
        style: inlineThemeDisabled ? void 0 : cssVarsRef.value
      }, slots.avatar && props.contentIndented ? h("div", {
        class: `${mergedClsPrefix}-thing-avatar`
      }, slots.avatar()) : null, h("div", {
        class: `${mergedClsPrefix}-thing-main`
      }, !props.contentIndented && (slots.header || props.title || slots["header-extra"] || props.titleExtra || slots.avatar) ? h("div", {
        class: `${mergedClsPrefix}-thing-avatar-header-wrapper`
      }, slots.avatar ? h("div", {
        class: `${mergedClsPrefix}-thing-avatar`
      }, slots.avatar()) : null, slots.header || props.title || slots["header-extra"] || props.titleExtra ? h("div", {
        class: `${mergedClsPrefix}-thing-header-wrapper`
      }, h("div", {
        class: `${mergedClsPrefix}-thing-header`
      }, slots.header || props.title ? h("div", {
        class: `${mergedClsPrefix}-thing-header__title`
      }, slots.header ? slots.header() : props.title) : null, slots["header-extra"] || props.titleExtra ? h("div", {
        class: `${mergedClsPrefix}-thing-header__extra`
      }, slots["header-extra"] ? slots["header-extra"]() : props.titleExtra) : null), slots.description || props.description ? h("div", {
        class: [`${mergedClsPrefix}-thing-main__description`, props.descriptionClass],
        style: props.descriptionStyle
      }, slots.description ? slots.description() : props.description) : null) : null) : h(Fragment, null, slots.header || props.title || slots["header-extra"] || props.titleExtra ? h("div", {
        class: `${mergedClsPrefix}-thing-header`
      }, slots.header || props.title ? h("div", {
        class: `${mergedClsPrefix}-thing-header__title`
      }, slots.header ? slots.header() : props.title) : null, slots["header-extra"] || props.titleExtra ? h("div", {
        class: `${mergedClsPrefix}-thing-header__extra`
      }, slots["header-extra"] ? slots["header-extra"]() : props.titleExtra) : null) : null, slots.description || props.description ? h("div", {
        class: [`${mergedClsPrefix}-thing-main__description`, props.descriptionClass],
        style: props.descriptionStyle
      }, slots.description ? slots.description() : props.description) : null), slots.default || props.content ? h("div", {
        class: [`${mergedClsPrefix}-thing-main__content`, props.contentClass],
        style: props.contentStyle
      }, slots.default ? slots.default() : props.content) : null, slots.footer ? h("div", {
        class: `${mergedClsPrefix}-thing-main__footer`
      }, slots.footer()) : null, slots.action ? h("div", {
        class: `${mergedClsPrefix}-thing-main__action`
      }, slots.action()) : null));
    };
  }
});
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const ArrowUpOutline = defineComponent({
  name: "ArrowUpOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$a,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "48",
            d: "M112 244l144-144l144 144"
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
            "stroke-width": "48",
            d: "M256 120v292"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const CloseCircleOutline = defineComponent({
  name: "CloseCircleOutline",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$9,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",
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
            d: "M320 320L192 192"
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
            d: "M192 320l128-128"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const AudiotrackRound = defineComponent({
  name: "AudiotrackRound",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$8,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M12 5v8.55c-.94-.54-2.1-.75-3.33-.32c-1.34.48-2.37 1.67-2.61 3.07a4.007 4.007 0 0 0 4.59 4.65c1.96-.31 3.35-2.11 3.35-4.1V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2z",
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
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const Live24Regular = defineComponent({
  name: "Live24Regular",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$7,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "g",
          {
            fill: "none"
          },
          [
            createBaseVNode("path", {
              d: "M5.99 4.929a.75.75 0 0 1 0 1.06a8.5 8.5 0 0 0 0 12.021a.75.75 0 0 1-1.061 1.06c-3.905-3.905-3.905-10.236 0-14.141a.75.75 0 0 1 1.06 0zm13.081 0c3.905 3.905 3.905 10.236 0 14.142a.75.75 0 0 1-1.06-1.06a8.5 8.5 0 0 0 0-12.022a.75.75 0 1 1 1.06-1.06zM8.818 7.757a.75.75 0 0 1 0 1.06a4.5 4.5 0 0 0 0 6.365a.75.75 0 0 1-1.06 1.06a6 6 0 0 1 0-8.485a.75.75 0 0 1 1.06 0zm7.425 0a6 6 0 0 1 0 8.485a.75.75 0 1 1-1.061-1.06a4.5 4.5 0 0 0 0-6.364a.75.75 0 0 1 1.06-1.06zM12 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3z",
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
const _hoisted_1$6 = { class: "footer" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "batchAddModal",
  props: {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["parsed"], ["update:visible"]),
  setup(__props, { emit: __emit }) {
    const showModal = useModel(__props, "visible");
    const emits = __emit;
    const urlsText = ref("");
    const parsing = ref(false);
    const urlList = computed(() => {
      if (!urlsText.value.trim()) return [];
      return urlsText.value.split("\n").map((url) => url.trim()).filter((url) => url.length > 0);
    });
    const parseUrls = async () => {
      if (urlList.value.length === 0) return;
      parsing.value = true;
      try {
        const urlsToProcess = urlList.value.slice(0, 20);
        const batchResult = await recoder.batchResolveChannel(urlsToProcess);
        emits("parsed", batchResult.results);
        showModal.value = false;
      } finally {
        parsing.value = false;
      }
    };
    const cancel = () => {
      showModal.value = false;
    };
    watch(showModal, (val) => {
      if (val) {
        urlsText.value = "";
      }
    });
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_2$2;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_n_alert = __unplugin_components_2;
      const _component_n_form = __unplugin_components_5;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_3$1;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showModal.value = $event),
        "show-icon": false,
        closable: false
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "700px" },
            bordered: false,
            size: "huge",
            role: "dialog",
            "aria-modal": "true",
            class: "card"
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_1$6, [
                createVNode(_component_n_button, {
                  class: "btn",
                  onClick: cancel,
                  style: { "min-width": "80px" }
                }, {
                  default: withCtx(() => _cache[3] || (_cache[3] = [
                    createTextVNode("取消")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "primary",
                  class: "btn",
                  style: { "min-width": "80px" },
                  onClick: parseUrls,
                  loading: unref(parsing),
                  disabled: unref(urlList).length === 0
                }, {
                  default: withCtx(() => _cache[4] || (_cache[4] = [
                    createTextVNode(" 解析 ")
                  ])),
                  _: 1
                }, 8, ["loading", "disabled"])
              ])
            ]),
            default: withCtx(() => [
              _cache[5] || (_cache[5] = createBaseVNode("h3", null, "批量添加直播间", -1)),
              createVNode(_component_n_form, {
                "label-placement": "left",
                "label-width": 120
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_form_item, null, {
                    label: withCtx(() => [
                      createTextVNode(" 直播间链接(" + toDisplayString(unref(urlList).length) + ") ", 1)
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n_input, {
                        value: unref(urlsText),
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(urlsText) ? urlsText.value = $event : null),
                        type: "textarea",
                        placeholder: "请输入直播间链接，每行一个，最多二十个\n例如：\nhttps://live.bilibili.com/123456\nhttps://www.douyu.com/123456\nhttps://www.huya.com/123456\nhttps://live.douyin.com/123456",
                        rows: 10
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  unref(urlList).length > 20 ? (openBlock(), createBlock(_component_n_alert, {
                    key: 0,
                    type: "error",
                    style: { "margin-bottom": "16px" }
                  }, {
                    default: withCtx(() => _cache[2] || (_cache[2] = [
                      createTextVNode(" 链接数量超过限制，只会处理前20个链接 ")
                    ])),
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
      }, 8, ["show"]);
    };
  }
});
const batchAddModal = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5d87f9d5"]]);
const _hoisted_1$5 = { class: "result-summary" };
const _hoisted_2$5 = {
  key: 0,
  class: "batch-settings"
};
const _hoisted_3$4 = { class: "results-list" };
const _hoisted_4$4 = { class: "results-header" };
const _hoisted_5$4 = { class: "result-url" };
const _hoisted_6$4 = {
  key: 0,
  class: "error-message"
};
const _hoisted_7$4 = { class: "footer" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "batchResultModal",
  props: /* @__PURE__ */ mergeModels({
    results: {}
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["completed"], ["update:visible"]),
  setup(__props, { emit: __emit }) {
    const notice = useNotification();
    const showModal = useModel(__props, "visible");
    const props = __props;
    const emits = __emit;
    const adding = ref(false);
    const batchSettings = ref({
      autoRecord: true,
      // 自动录制开关，true表示开启自动录制（disableAutoCheck=false）
      sendToWebhook: false
    });
    const successResults = computed(() => props.results.filter((result) => result.success));
    const failedResults = computed(() => props.results.filter((result) => !result.success));
    const successCount = computed(() => successResults.value.length);
    const failedCount = computed(() => failedResults.value.length);
    const addRecorders = async () => {
      if (successResults.value.length === 0) return;
      adding.value = true;
      try {
        let successAddCount = 0;
        let failedAddCount = 0;
        const errorResults = [];
        for (const result of successResults.value) {
          if (!result.data) continue;
          try {
            result.data.disableAutoCheck = !batchSettings.value.autoRecord;
            result.data.sendToWebhook = batchSettings.value.sendToWebhook;
            await recoder.add(result.data);
            successAddCount++;
          } catch (error) {
            errorResults.push(`添加失败: ${result.data.remarks}，${error.message || error}`);
            failedAddCount++;
          }
        }
        if (errorResults.length > 0) {
          notice.error({
            title: "直播间添加失败",
            content: errorResults.join("\n"),
            duration: 1e4
          });
        } else {
          notice.success({
            title: "批量添加完成",
            content: `成功添加 ${successAddCount} 个直播间`,
            duration: 3e3
          });
        }
        emits("completed");
        showModal.value = false;
      } finally {
        adding.value = false;
      }
    };
    const cancel = () => {
      showModal.value = false;
    };
    const copyFailedUrls = async () => {
      const urls = failedResults.value.map((result) => result.url).join("\n");
      try {
        await navigator.clipboard.writeText(urls);
        notice.success({
          title: "复制成功",
          content: `已复制 ${failedResults.value.length} 个失败的链接`,
          duration: 1e3
        });
      } catch (error) {
        notice.error({
          title: "复制失败",
          content: "无法访问剪贴板",
          duration: 3e3
        });
      }
    };
    watch(showModal, (val) => {
      if (val) {
        batchSettings.value = {
          autoRecord: true,
          sendToWebhook: false
        };
      }
    });
    return (_ctx, _cache) => {
      const _component_n_statistic = __unplugin_components_0;
      const _component_n_switch = __unplugin_components_1;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_n_form = __unplugin_components_5;
      const _component_n_button = Button;
      const _component_n_icon = NIcon;
      const _component_n_text = NText;
      const _component_n_thing = __unplugin_components_7;
      const _component_n_list_item = __unplugin_components_8;
      const _component_n_list = __unplugin_components_9;
      const _component_n_card = __unplugin_components_3$1;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[2] || (_cache[2] = ($event) => showModal.value = $event),
        "show-icon": false,
        closable: false
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "700px" },
            bordered: false,
            size: "huge",
            role: "dialog",
            "aria-modal": "true",
            class: "card"
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_7$4, [
                createVNode(_component_n_button, {
                  class: "btn",
                  onClick: cancel
                }, {
                  default: withCtx(() => _cache[10] || (_cache[10] = [
                    createTextVNode("取消")
                  ])),
                  _: 1
                }),
                unref(successResults).length > 0 ? (openBlock(), createBlock(_component_n_button, {
                  key: 0,
                  type: "primary",
                  class: "btn",
                  onClick: addRecorders
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 添加 (" + toDisplayString(unref(successResults).length) + "个) ", 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$5, [
                createVNode(_component_n_statistic, {
                  label: "解析成功",
                  value: unref(successCount),
                  class: "success-stat"
                }, {
                  suffix: withCtx(() => _cache[3] || (_cache[3] = [
                    createBaseVNode("span", { style: { "color": "#52c41a" } }, "个", -1)
                  ])),
                  _: 1
                }, 8, ["value"]),
                createVNode(_component_n_statistic, {
                  label: "解析失败",
                  value: unref(failedCount),
                  class: "failed-stat"
                }, {
                  suffix: withCtx(() => _cache[4] || (_cache[4] = [
                    createBaseVNode("span", { style: { "color": "#ff4d4f" } }, "个", -1)
                  ])),
                  _: 1
                }, 8, ["value"])
              ]),
              unref(successResults).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
                _cache[7] || (_cache[7] = createBaseVNode("h4", null, "批量设置（应用到所有成功解析的直播间）", -1)),
                createVNode(_component_n_form, {
                  "label-placement": "left",
                  "label-width": 120
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => _cache[5] || (_cache[5] = [
                        createBaseVNode("span", { class: "inline-flex" }, "自动录制", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: unref(batchSettings).autoRecord,
                          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(batchSettings).autoRecord = $event),
                          "checked-value": true,
                          "unchecked-value": false
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => _cache[6] || (_cache[6] = [
                        createBaseVNode("span", { class: "inline-flex" }, "发送到webhook", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: unref(batchSettings).sendToWebhook,
                          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(batchSettings).sendToWebhook = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_3$4, [
                createBaseVNode("div", _hoisted_4$4, [
                  _cache[9] || (_cache[9] = createBaseVNode("h4", null, "详细结果", -1)),
                  unref(failedResults).length > 0 ? (openBlock(), createBlock(_component_n_button, {
                    key: 0,
                    size: "small",
                    onClick: copyFailedUrls,
                    type: "warning"
                  }, {
                    default: withCtx(() => _cache[8] || (_cache[8] = [
                      createTextVNode(" 复制失败链接 ")
                    ])),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode(_component_n_list, { class: "results-list-content" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.results, (result, index) => {
                      return openBlock(), createBlock(_component_n_list_item, { key: index }, {
                        prefix: withCtx(() => [
                          createVNode(_component_n_icon, {
                            component: result.success ? unref(CheckmarkCircleOutline) : unref(CloseCircleOutline),
                            color: result.success ? "#52c41a" : "#ff4d4f",
                            size: "18"
                          }, null, 8, ["component", "color"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_thing, null, {
                            header: withCtx(() => [
                              result.success ? (openBlock(), createBlock(_component_n_text, {
                                key: 0,
                                type: "success"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(result.data?.remarks) + " - " + toDisplayString(result.data?.providerId), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ]),
                            description: withCtx(() => [
                              createBaseVNode("div", _hoisted_5$4, toDisplayString(result.url), 1),
                              !result.success ? (openBlock(), createElementBlock("div", _hoisted_6$4, "错误：" + toDisplayString(result.error), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
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
const batchResultModal = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-674ac559"]]);
const platformOptions = [
  { label: "斗鱼", value: "DouYu" },
  { label: "B站", value: "Bilibili" },
  { label: "虎牙", value: "HuYa" },
  { label: "抖音", value: "DouYin" },
  { label: "小红书", value: "XHS" },
  { label: "TikTok", value: "TikTok" }
];
const _hoisted_1$4 = { style: { "display": "flex", "gap": "10px", "margin-bottom": "16px" } };
const _hoisted_2$4 = { style: { "display": "flex", "gap": "10px", "margin-bottom": "16px", "align-items": "center" } };
const _hoisted_3$3 = { style: { "max-height": "400px", "overflow-y": "auto", "border": "1px solid #e0e0e0", "border-radius": "4px" } };
const _hoisted_4$3 = ["onClick"];
const _hoisted_5$3 = { style: { "flex": "1", "min-width": "0" } };
const _hoisted_6$3 = { style: { "display": "flex", "align-items": "center", "gap": "8px", "margin-bottom": "4px" } };
const _hoisted_7$3 = {
  key: 0,
  style: { "padding": "40px", "text-align": "center" }
};
const _hoisted_8$3 = { class: "footer" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "batchOperateModal",
  props: {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["completed"], ["update:visible"]),
  setup(__props, { emit: __emit }) {
    const showModal = useModel(__props, "visible");
    const emits = __emit;
    const notice = useNotification();
    const recorders = ref([]);
    const loading = ref(false);
    const filterPlatform = ref(null);
    const filterRecordStatus = ref(null);
    const filterKeyword = ref("");
    const selectedIds = ref([]);
    const operating = ref(false);
    const recordStatusOptions = [
      { label: "录制中", value: "recording" },
      { label: "未录制", value: "unrecorded" }
    ];
    const fetchRecorders = async () => {
      loading.value = true;
      try {
        const result = await recoder.infoList({
          page: 1,
          pageSize: 1e4
        });
        recorders.value = result.data;
      } catch (error) {
        notice.error({
          title: "获取直播间列表失败",
          content: error.message || "请求失败",
          duration: 3e3
        });
      } finally {
        loading.value = false;
      }
    };
    const filteredRecorders = computed(() => {
      let list = recorders.value;
      if (filterPlatform.value) {
        list = list.filter((r) => r.providerId === filterPlatform.value);
      }
      if (filterRecordStatus.value) {
        if (filterRecordStatus.value === "recording") {
          list = list.filter((r) => r.recordHandle != null);
        } else if (filterRecordStatus.value === "unrecorded") {
          list = list.filter((r) => r.recordHandle == null);
        }
      }
      if (filterKeyword.value) {
        const keyword = filterKeyword.value.toLowerCase();
        list = list.filter(
          (r) => r.remarks?.toLowerCase().includes(keyword) || r.channelId.toLowerCase().includes(keyword) || r.liveInfo?.owner?.toLowerCase().includes(keyword)
        );
      }
      return list;
    });
    const selectAll = () => {
      selectedIds.value = filteredRecorders.value.map((r) => r.id);
    };
    const invertSelection = () => {
      const filteredIds = filteredRecorders.value.map((r) => r.id);
      const newSelection = filteredIds.filter((id) => !selectedIds.value.includes(id));
      const keepSelection = selectedIds.value.filter((id) => !filteredIds.includes(id));
      selectedIds.value = [...keepSelection, ...newSelection];
    };
    const toggleSelection = (id) => {
      const index = selectedIds.value.indexOf(id);
      if (index > -1) {
        selectedIds.value.splice(index, 1);
      } else {
        selectedIds.value.push(id);
      }
    };
    const handleCheckboxChange = (id, checked) => {
      if (checked) {
        if (!selectedIds.value.includes(id)) {
          selectedIds.value.push(id);
        }
      } else {
        const index = selectedIds.value.indexOf(id);
        if (index > -1) {
          selectedIds.value.splice(index, 1);
        }
      }
    };
    const handleBatchStart = async () => {
      if (selectedIds.value.length === 0) return;
      operating.value = true;
      try {
        await recoder.batchStartRecord(selectedIds.value);
        notice.success({
          title: "批量开始录制完成",
          duration: 3e3
        });
        selectedIds.value = [];
        showModal.value = false;
        emits("completed");
      } catch (error) {
        notice.error({
          title: "批量开始录制异常",
          content: error.message || "操作失败",
          duration: 3e3
        });
      } finally {
        operating.value = false;
      }
    };
    const handleBatchStop = async () => {
      if (selectedIds.value.length === 0) return;
      operating.value = true;
      try {
        await recoder.batchStopRecord(selectedIds.value);
        notice.success({
          title: "批量停止录制完成",
          duration: 3e3
        });
        selectedIds.value = [];
        showModal.value = false;
        emits("completed");
      } catch (error) {
        notice.error({
          title: "批量停止录制异常",
          content: error.message || "操作失败",
          duration: 3e3
        });
      } finally {
        operating.value = false;
      }
    };
    const cancel = () => {
      showModal.value = false;
    };
    const platformMap = platformOptions.reduce(
      (map, option) => {
        map[option.value] = option.label;
        return map;
      },
      {}
    );
    const getPlatformName = (providerId) => {
      return platformMap[providerId] || providerId;
    };
    watch(showModal, (val) => {
      if (val) {
        selectedIds.value = [];
        filterPlatform.value = null;
        filterRecordStatus.value = null;
        filterKeyword.value = "";
        fetchRecorders();
      }
    });
    return (_ctx, _cache) => {
      const _component_n_select = __unplugin_components_0$1;
      const _component_n_input = __unplugin_components_2$2;
      const _component_n_button = Button;
      const _component_n_text = NText;
      const _component_n_checkbox = __unplugin_components_1$1;
      const _component_n_avatar = __unplugin_components_0$2;
      const _component_n_tag = NTag;
      const _component_n_spin = __unplugin_components_5$1;
      const _component_n_card = __unplugin_components_3$1;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[4] || (_cache[4] = ($event) => showModal.value = $event),
        "show-icon": false,
        closable: false
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "900px", "max-height": "700px" },
            bordered: false,
            size: "huge",
            role: "dialog",
            "aria-modal": "true",
            class: "card"
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_8$3, [
                createVNode(_component_n_button, {
                  class: "btn",
                  onClick: cancel,
                  style: { "min-width": "80px" }
                }, {
                  default: withCtx(() => _cache[8] || (_cache[8] = [
                    createTextVNode("取消")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "primary",
                  class: "btn",
                  style: { "min-width": "120px" },
                  onClick: handleBatchStart,
                  loading: unref(operating),
                  disabled: unref(selectedIds).length === 0
                }, {
                  default: withCtx(() => _cache[9] || (_cache[9] = [
                    createTextVNode(" 批量开始录制 ")
                  ])),
                  _: 1
                }, 8, ["loading", "disabled"]),
                createVNode(_component_n_button, {
                  type: "error",
                  class: "btn",
                  style: { "min-width": "120px" },
                  onClick: handleBatchStop,
                  loading: unref(operating),
                  disabled: unref(selectedIds).length === 0
                }, {
                  default: withCtx(() => _cache[10] || (_cache[10] = [
                    createTextVNode(" 批量停止录制 ")
                  ])),
                  _: 1
                }, 8, ["loading", "disabled"])
              ])
            ]),
            default: withCtx(() => [
              _cache[11] || (_cache[11] = createBaseVNode("h3", null, "批量操作", -1)),
              createBaseVNode("div", _hoisted_1$4, [
                createVNode(_component_n_select, {
                  value: unref(filterPlatform),
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(filterPlatform) ? filterPlatform.value = $event : null),
                  options: unref(platformOptions),
                  placeholder: "选择平台",
                  clearable: "",
                  style: { "width": "150px" }
                }, null, 8, ["value", "options"]),
                createVNode(_component_n_select, {
                  value: unref(filterRecordStatus),
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(filterRecordStatus) ? filterRecordStatus.value = $event : null),
                  options: recordStatusOptions,
                  placeholder: "录制状态",
                  clearable: "",
                  style: { "width": "150px" }
                }, null, 8, ["value"]),
                createVNode(_component_n_input, {
                  value: unref(filterKeyword),
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => isRef(filterKeyword) ? filterKeyword.value = $event : null),
                  placeholder: "搜索备注名或房间号",
                  clearable: "",
                  style: { "flex": "1" }
                }, null, 8, ["value"])
              ]),
              createBaseVNode("div", _hoisted_2$4, [
                createVNode(_component_n_button, {
                  size: "small",
                  onClick: selectAll
                }, {
                  default: withCtx(() => _cache[5] || (_cache[5] = [
                    createTextVNode("全选")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  size: "small",
                  onClick: invertSelection
                }, {
                  default: withCtx(() => _cache[6] || (_cache[6] = [
                    createTextVNode("反选")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_text, null, {
                  default: withCtx(() => [
                    createTextVNode("已选 " + toDisplayString(unref(selectedIds).length) + " / " + toDisplayString(unref(filteredRecorders).length) + " 个", 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_n_spin, { show: unref(loading) }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_3$3, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredRecorders), (recorder) => {
                      return openBlock(), createElementBlock("div", {
                        key: recorder.id,
                        style: { "padding": "12px", "border-bottom": "1px solid #f0f0f0", "display": "flex", "align-items": "center", "gap": "12px", "cursor": "pointer" },
                        onClick: ($event) => toggleSelection(recorder.id)
                      }, [
                        createVNode(_component_n_checkbox, {
                          checked: unref(selectedIds).includes(recorder.id),
                          "onUpdate:checked": (checked) => handleCheckboxChange(recorder.id, checked),
                          onClick: _cache[3] || (_cache[3] = withModifiers(() => {
                          }, ["stop"]))
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode(_component_n_avatar, {
                          src: recorder.extra?.avatar || recorder.liveInfo?.avatar,
                          round: "",
                          size: "small",
                          "fallback-src": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23ccc' d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E"
                        }, null, 8, ["src"]),
                        createBaseVNode("div", _hoisted_5$3, [
                          createBaseVNode("div", _hoisted_6$3, [
                            createVNode(_component_n_text, { strong: "" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(recorder.remarks || recorder.liveInfo?.owner || "未命名"), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_n_tag, {
                              size: "small",
                              type: "info"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(getPlatformName(recorder.providerId)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_n_tag, {
                              size: "small",
                              type: recorder.recordHandle ? "error" : "default"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(recorder.recordHandle ? "录制中" : "未录制"), 1)
                              ]),
                              _: 2
                            }, 1032, ["type"])
                          ]),
                          createVNode(_component_n_text, {
                            depth: "3",
                            style: { "font-size": "12px" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("房间号: " + toDisplayString(recorder.channelId), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ], 8, _hoisted_4$3);
                    }), 128)),
                    !unref(loading) && unref(filteredRecorders).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
                      createVNode(_component_n_text, { depth: "3" }, {
                        default: withCtx(() => _cache[7] || (_cache[7] = [
                          createTextVNode("暂无符合条件的直播间")
                        ])),
                        _: 1
                      })
                    ])) : createCommentVNode("", true)
                  ])
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
const batchOperateModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6417b09e"]]);
const _hoisted_1$3 = { class: "recorder-container" };
const _hoisted_2$3 = { class: "cover-container" };
const _hoisted_3$2 = ["src"];
const _hoisted_4$2 = ["title"];
const _hoisted_5$2 = ["title"];
const _hoisted_6$2 = { class: "source" };
const _hoisted_7$2 = { class: "line" };
const _hoisted_8$2 = {
  class: "card-corner-action",
  style: { "margin-left": "auto" },
  title: "点击查看录制详情"
};
const _hoisted_9$2 = ["title"];
const _hoisted_10$2 = {
  class: "card-corner-action",
  style: { "margin-left": "auto" },
  title: "点击查看录制详情"
};
const _hoisted_11$2 = { key: 1 };
const _hoisted_12$2 = {
  class: "simple-recorder-detail",
  style: { "margin-left": "auto" },
  title: "点击查看录制详情"
};
const _hoisted_13$2 = { class: "content" };
const _hoisted_14$2 = ["src"];
const _hoisted_15$2 = { style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between" } };
const _hoisted_16$2 = { style: { "display": "flex", "gap": "5px", "align-items": "center" } };
const _hoisted_17$2 = ["title"];
const _hoisted_18$2 = { class: "tags" };
const _hoisted_19 = ["href"];
const _hoisted_20 = {
  key: 0,
  class: "tag area"
};
const _hoisted_21 = ["onClick"];
const _hoisted_22 = ["onClick"];
const _hoisted_23 = ["onClick"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "cardView",
  props: {
    list: { default: () => [] },
    visibleColumns: { default: () => [] }
  },
  emits: ["startRecord", "stopRecord", "showDetail"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const isColumnVisible = (columnKey) => {
      if (!props.visibleColumns || props.visibleColumns.length === 0) {
        return true;
      }
      return props.visibleColumns.includes(columnKey);
    };
    const list = computed(() => props.list);
    function formatProgress(time) {
      if (!time) return "";
      return time;
    }
    const stateMap = {
      idle: "空闲",
      recording: "录制中",
      "check-error": "检查错误",
      "stopping-record": "停止中",
      "title-blocked": "标题屏蔽",
      "charge-skipped": "无法录制"
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_popover = __unplugin_components_2$3;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (item, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "recorder"
          }, [
            createBaseVNode("div", _hoisted_2$3, [
              item.cover ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "cover",
                src: item.cover,
                referrerpolicy: "no-referrer"
              }, null, 8, _hoisted_3$2)) : createCommentVNode("", true),
              item.roomTitle ? (openBlock(), createElementBlock("span", {
                key: 1,
                class: "room-title",
                title: item.roomTitle
              }, toDisplayString(item.roomTitle), 9, _hoisted_4$2)) : createCommentVNode("", true),
              item.state === "recording" ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: "recording-container",
                title: item?.recordHandle?.url
              }, [
                _cache[0] || (_cache[0] = createBaseVNode("div", { class: "recording" }, null, -1)),
                createBaseVNode("span", _hoisted_6$2, toDisplayString(item.usedSource), 1),
                createBaseVNode("span", _hoisted_7$2, toDisplayString(item.usedStream), 1),
                createBaseVNode("span", null, toDisplayString(formatProgress(item?.recordHandle?.progress?.time)), 1),
                createBaseVNode("div", _hoisted_8$2, [
                  renderSlot(_ctx.$slots, "cornerAction", { item }, void 0, true)
                ])
              ], 8, _hoisted_5$2)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                item?.extra?.lastRecordTime && isColumnVisible("lastRecordTime") ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "recording-container",
                  title: unref(formatTime)(item.extra.lastRecordTime)
                }, [
                  createBaseVNode("span", null, "上次录制：" + toDisplayString(unref(formatRecentRecordTime)(item.extra.lastRecordTime)), 1),
                  createBaseVNode("div", _hoisted_10$2, [
                    renderSlot(_ctx.$slots, "cornerAction", { item }, void 0, true)
                  ])
                ], 8, _hoisted_9$2)) : (openBlock(), createElementBlock("div", _hoisted_11$2, [
                  createBaseVNode("div", _hoisted_12$2, [
                    renderSlot(_ctx.$slots, "cornerAction", { item }, void 0, true)
                  ])
                ]))
              ], 64))
            ]),
            createBaseVNode("div", _hoisted_13$2, [
              createBaseVNode("img", {
                class: "avatar",
                src: item.avatar,
                referrerpolicy: "no-referrer"
              }, null, 8, _hoisted_14$2),
              createBaseVNode("div", _hoisted_15$2, [
                createBaseVNode("div", _hoisted_16$2, [
                  createBaseVNode("div", {
                    class: "owner",
                    title: item.remarks
                  }, toDisplayString(item.owner || item.remarks), 9, _hoisted_17$2),
                  item.living ? (openBlock(), createBlock(_component_n_icon, {
                    key: 0,
                    size: "20",
                    title: "直播中",
                    class: "icon-live"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Live24Regular))
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  !item.disableAutoCheck ? (openBlock(), createBlock(_component_n_icon, {
                    key: 1,
                    size: "20",
                    title: "自动录制",
                    class: "icon-muted"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(AccessTime24Regular))
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  item.onlyAudio ? (openBlock(), createBlock(_component_n_icon, {
                    key: 2,
                    size: "20",
                    title: "仅录制音频",
                    class: "icon-muted"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(AudiotrackRound))
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  item.tempStopIntervalCheck && !item.disableAutoCheck ? (openBlock(), createBlock(_component_n_icon, {
                    key: 3,
                    size: "20",
                    title: "跳过本场直播",
                    class: "icon-muted"
                  }, {
                    default: withCtx(() => _cache[1] || (_cache[1] = [
                      createBaseVNode("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                      }, [
                        createBaseVNode("g", { fill: "none" }, [
                          createBaseVNode("path", {
                            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10zM3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0z",
                            fill: "currentColor"
                          }),
                          createBaseVNode("rect", {
                            x: "9",
                            y: "8",
                            width: "2",
                            height: "8",
                            rx: "1",
                            fill: "currentColor"
                          }),
                          createBaseVNode("rect", {
                            x: "13",
                            y: "8",
                            width: "2",
                            height: "8",
                            rx: "1",
                            fill: "currentColor"
                          })
                        ])
                      ], -1)
                    ])),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_18$2, [
                  createBaseVNode("a", {
                    class: "link tag channel",
                    target: "_blank",
                    href: item.channelURL,
                    title: "点击可访问"
                  }, toDisplayString(item.providerId), 9, _hoisted_19),
                  item.area ? (openBlock(), createElementBlock("span", _hoisted_20, toDisplayString(item.area), 1)) : createCommentVNode("", true),
                  ["check-error", "stopping-record", "title-blocked"].includes(item.state) ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: normalizeClass(["tag state", {
                      error: item.state === "check-error",
                      recording: item.state === "recording",
                      "title-blocked": item.state === "title-blocked"
                    }]),
                    onClick: ($event) => emit("showDetail", item)
                  }, toDisplayString(stateMap[item.state]), 11, _hoisted_21)) : createCommentVNode("", true),
                  item.state === "charge-skipped" && ["paid", "guard"].includes(item.liveInfo?.liveType ?? "") ? (openBlock(), createElementBlock("span", {
                    key: 2,
                    class: "tag state charge-skipped",
                    onClick: ($event) => emit("showDetail", item)
                  }, "付费直播", 8, _hoisted_22)) : createCommentVNode("", true),
                  item.state === "charge-skipped" ? (openBlock(), createElementBlock("span", {
                    key: 3,
                    class: "tag record-blocked",
                    onClick: ($event) => emit("showDetail", item)
                  }, "无法录制", 8, _hoisted_23)) : createCommentVNode("", true)
                ])
              ])
            ]),
            createVNode(_component_n_popover, {
              placement: "right-start",
              trigger: "hover"
            }, {
              trigger: withCtx(() => [
                createVNode(_component_n_icon, {
                  size: "25",
                  class: "pointer menu"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(EllipsisHorizontalOutline))
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "action", { item }, void 0, true)
              ]),
              _: 2
            }, 1024)
          ]);
        }), 128))
      ]);
    };
  }
});
const cardView = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-14755479"]]);
const _hoisted_1$2 = { key: 0 };
const _hoisted_2$2 = { key: 1 };
const _hoisted_3$1 = { key: 2 };
const _hoisted_4$1 = { key: 3 };
const _hoisted_5$1 = { key: 6 };
const _hoisted_6$1 = { key: 7 };
const _hoisted_7$1 = { key: 9 };
const _hoisted_8$1 = { key: 0 };
const _hoisted_9$1 = ["href"];
const _hoisted_10$1 = { key: 1 };
const _hoisted_11$1 = { key: 2 };
const _hoisted_12$1 = { key: 3 };
const _hoisted_13$1 = ["title"];
const _hoisted_14$1 = { key: 7 };
const _hoisted_15$1 = { key: 8 };
const _hoisted_16$1 = { key: 9 };
const _hoisted_17$1 = ["onClick"];
const _hoisted_18$1 = ["onClick"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "listView",
  props: {
    list: { default: () => [] },
    sortField: { default: "" },
    sortDirections: { default: () => ({
      living: "desc",
      state: "desc",
      monitorStatus: "desc"
    }) },
    visibleColumns: { default: () => [] }
  },
  emits: ["sort", "startRecord", "stopRecord"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isColumnVisible = (columnKey) => {
      if (!props.visibleColumns || props.visibleColumns.length === 0) {
        return true;
      }
      return props.visibleColumns.includes(columnKey);
    };
    const emit = __emit;
    const handleSort = (field) => {
      emit("sort", field);
    };
    const stateMap = {
      idle: "空闲",
      recording: "录制中",
      "check-error": "检查错误",
      "stopping-record": "停止中",
      "title-blocked": "标题屏蔽",
      "charge-skipped": "无法录制"
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_popover = __unplugin_components_2$3;
      const _component_n_table = __unplugin_components_2$4;
      return openBlock(), createBlock(_component_n_table, {
        bordered: false,
        "single-line": false
      }, {
        default: withCtx(() => [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              isColumnVisible("channelId") ? (openBlock(), createElementBlock("th", _hoisted_1$2, "房间号")) : createCommentVNode("", true),
              isColumnVisible("owner") ? (openBlock(), createElementBlock("th", _hoisted_2$2, "主播名")) : createCommentVNode("", true),
              isColumnVisible("remark") ? (openBlock(), createElementBlock("th", _hoisted_3$1, "备注")) : createCommentVNode("", true),
              isColumnVisible("roomTitle") ? (openBlock(), createElementBlock("th", _hoisted_4$1, "标题")) : createCommentVNode("", true),
              isColumnVisible("living") ? (openBlock(), createElementBlock("th", {
                key: 4,
                onClick: _cache[0] || (_cache[0] = ($event) => handleSort("living")),
                class: "sortable-header"
              }, [
                _cache[3] || (_cache[3] = createTextVNode(" 直播状态 ")),
                createVNode(_component_n_icon, {
                  size: "14",
                  class: normalizeClass(["sort-icon", {
                    active: _ctx.sortField === "living",
                    asc: _ctx.sortDirections.living === "asc"
                  }])
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ArrowUpOutline))
                  ]),
                  _: 1
                }, 8, ["class"])
              ])) : createCommentVNode("", true),
              isColumnVisible("state") ? (openBlock(), createElementBlock("th", {
                key: 5,
                onClick: _cache[1] || (_cache[1] = ($event) => handleSort("state")),
                class: "sortable-header"
              }, [
                _cache[4] || (_cache[4] = createTextVNode(" 录制状态 ")),
                createVNode(_component_n_icon, {
                  size: "14",
                  class: normalizeClass(["sort-icon", {
                    active: _ctx.sortField === "state",
                    asc: _ctx.sortDirections.state === "asc"
                  }])
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ArrowUpOutline))
                  ]),
                  _: 1
                }, 8, ["class"])
              ])) : createCommentVNode("", true),
              isColumnVisible("recordParams") ? (openBlock(), createElementBlock("td", _hoisted_5$1, "录制参数")) : createCommentVNode("", true),
              isColumnVisible("lastRecordTime") ? (openBlock(), createElementBlock("th", _hoisted_6$1, "上次录制")) : createCommentVNode("", true),
              isColumnVisible("monitorStatus") ? (openBlock(), createElementBlock("th", {
                key: 8,
                onClick: _cache[2] || (_cache[2] = ($event) => handleSort("monitorStatus")),
                class: "sortable-header"
              }, [
                _cache[5] || (_cache[5] = createTextVNode(" 监听状态 ")),
                createVNode(_component_n_icon, {
                  size: "14",
                  class: normalizeClass(["sort-icon", {
                    active: _ctx.sortField === "monitorStatus",
                    asc: _ctx.sortDirections.monitorStatus === "asc"
                  }])
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ArrowUpOutline))
                  ]),
                  _: 1
                }, 8, ["class"])
              ])) : createCommentVNode("", true),
              isColumnVisible("actions") ? (openBlock(), createElementBlock("th", _hoisted_7$1, "操作")) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.list, (item) => {
              return openBlock(), createElementBlock("tr", {
                key: item.channelId
              }, [
                isColumnVisible("channelId") ? (openBlock(), createElementBlock("td", _hoisted_8$1, [
                  createBaseVNode("a", {
                    class: "link",
                    target: "_blank",
                    href: item.channelURL
                  }, toDisplayString(item.channelId), 9, _hoisted_9$1)
                ])) : createCommentVNode("", true),
                isColumnVisible("owner") ? (openBlock(), createElementBlock("td", _hoisted_10$1, toDisplayString(item.owner || item.remarks), 1)) : createCommentVNode("", true),
                isColumnVisible("remark") ? (openBlock(), createElementBlock("td", _hoisted_11$1, toDisplayString(item.remarks), 1)) : createCommentVNode("", true),
                isColumnVisible("roomTitle") ? (openBlock(), createElementBlock("td", _hoisted_12$1, toDisplayString(item.roomTitle), 1)) : createCommentVNode("", true),
                isColumnVisible("living") ? (openBlock(), createElementBlock("td", {
                  key: 4,
                  style: normalizeStyle({
                    color: item.living ? "skyblue" : "normal"
                  })
                }, toDisplayString(item.living ? "直播中" : "未开始"), 5)) : createCommentVNode("", true),
                isColumnVisible("state") ? (openBlock(), createElementBlock("td", {
                  key: 5,
                  class: normalizeClass({
                    recording: item.state === "recording",
                    error: item.state === "check-error",
                    "title-blocked": item.state === "title-blocked",
                    "charge-skipped": item.state === "charge-skipped"
                  })
                }, toDisplayString(item.state === "charge-skipped" ? ["paid", "guard"].includes(item.liveInfo?.liveType ?? "") ? "付费直播 / 无法录制" : "无法录制" : stateMap[item.state]), 3)) : createCommentVNode("", true),
                isColumnVisible("recordParams") ? (openBlock(), createElementBlock("td", {
                  key: 6,
                  title: item?.recordHandle?.url
                }, toDisplayString(item.state === "recording" ? `${item.area}/${item.usedSource}/${item.usedStream}/${item?.recordHandle?.recorderType}` : ""), 9, _hoisted_13$1)) : createCommentVNode("", true),
                isColumnVisible("lastRecordTime") ? (openBlock(), createElementBlock("td", _hoisted_14$1, toDisplayString(item?.extra?.lastRecordTime ? unref(formatTime)(item?.extra?.lastRecordTime) : "-"), 1)) : createCommentVNode("", true),
                isColumnVisible("monitorStatus") ? (openBlock(), createElementBlock("td", _hoisted_15$1, toDisplayString(item.disableAutoCheck ? "手动" : `自动${item.tempStopIntervalCheck && !item.disableAutoCheck ? "(跳过本场)" : ""}`), 1)) : createCommentVNode("", true),
                isColumnVisible("actions") ? (openBlock(), createElementBlock("td", _hoisted_16$1, [
                  item.state === "recording" ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    style: { "cursor": "pointer", "color": "var(--color-error)", "margin-right": "4px" },
                    onClick: ($event) => emit("stopRecord", item.id)
                  }, "停止", 8, _hoisted_17$1)) : (openBlock(), createElementBlock("span", {
                    key: 1,
                    style: { "cursor": "pointer", "color": "var(--color-primary)", "margin-right": "4px" },
                    onClick: ($event) => emit("startRecord", item.id)
                  }, "开始", 8, _hoisted_18$1)),
                  createVNode(_component_n_popover, {
                    placement: "right-start",
                    trigger: "hover"
                  }, {
                    trigger: withCtx(() => _cache[6] || (_cache[6] = [
                      createBaseVNode("span", { style: { "cursor": "pointer", "color": "skyblue" } }, "操作", -1)
                    ])),
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "action", { item }, void 0, true)
                    ]),
                    _: 2
                  }, 1024)
                ])) : createCommentVNode("", true)
              ]);
            }), 128))
          ])
        ]),
        _: 3
      });
    };
  }
});
const listView = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e30ed06a"]]);
const _hoisted_1$1 = {
  class: "sort-button",
  style: { "width": "80px", "flex": "none" }
};
const _hoisted_2$1 = { class: "label" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SortButton",
  props: {
    field: {},
    direction: {},
    options: {}
  },
  emits: ["update:field", "update:direction"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentLabel = computed(() => {
      return props.options.find((opt) => opt.key === props.field)?.label || "";
    });
    const handleFieldChange = (value) => {
      emit("update:field", value);
    };
    const handleDirectionChange = () => {
      const newDirection = props.direction === "asc" ? "desc" : "asc";
      emit("update:direction", newDirection);
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_dropdown = __unplugin_components_5$2;
      return openBlock(), createBlock(_component_n_dropdown, {
        options: _ctx.options,
        trigger: "click",
        onSelect: handleFieldChange
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("span", _hoisted_2$1, toDisplayString(unref(currentLabel) || "默认状态"), 1),
            createBaseVNode("div", {
              class: "sort-icon-wrapper",
              onClick: withModifiers(handleDirectionChange, ["stop"])
            }, [
              createVNode(_component_n_icon, {
                size: "14",
                class: normalizeClass(["sort-icon", {
                  asc: _ctx.direction === "asc"
                }])
              }, {
                default: withCtx(() => [
                  createVNode(unref(ArrowUpOutline))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ])
        ]),
        _: 1
      }, 8, ["options"]);
    };
  }
});
const SortButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fcf66de1"]]);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = {
  style: { "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "20px" },
  class: "filter-container"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = {
  style: { "margin-top": "10px" },
  class: "section-container"
};
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["onClick"];
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["onClick"];
const _hoisted_10 = ["onClick"];
const _hoisted_11 = ["onClick"];
const _hoisted_12 = ["onClick"];
const _hoisted_13 = ["onClick"];
const _hoisted_14 = ["onClick"];
const _hoisted_15 = ["onClick"];
const _hoisted_16 = ["onClick"];
const _hoisted_17 = {
  key: 0,
  style: { "margin-top": "20px", "display": "flex", "justify-content": "flex-end" }
};
const _hoisted_18 = { key: 1 };
const LIVE_INFO_CACHE_TTL = 20 * 60 * 1e3;
const LIVE_INFO_CACHE_STORAGE_KEY = "recorder-live-info-cache";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "recorder"
  },
  __name: "Index",
  setup(__props) {
    const columnConfig = [
      { value: "channelId", label: "房间号" },
      { value: "owner", label: "主播名" },
      { value: "remark", label: "备注" },
      { value: "roomTitle", label: "标题" },
      { value: "living", label: "直播状态" },
      { value: "state", label: "录制状态" },
      { value: "recordParams", label: "录制参数" },
      { value: "lastRecordTime", label: "上次录制" },
      { value: "monitorStatus", label: "监听状态" },
      { value: "actions", label: "操作" }
    ];
    const { visibleColumns } = useVisibleColumns({
      columns: columnConfig,
      storageKey: "recorder-list-visible-columns"
    });
    const notice = useNotice();
    const router = useRouter();
    const recorderLocalParams = useStorage(
      "recorder",
      {
        view: "card",
        pageSize: 20,
        sortField: "",
        sortDirection: "desc"
      },
      localStorage,
      { mergeDefaults: true }
    );
    const params = ref({
      platform: void 0,
      status: void 0,
      name: void 0,
      autoCheck: void 0,
      page: 1
    });
    const statusOptions = ref([
      {
        label: "录制中",
        value: "recording"
      },
      {
        label: "空闲中",
        value: "idle"
      },
      {
        label: "检查错误",
        value: "check-error"
      },
      {
        label: "标题被屏蔽",
        value: "title-blocked"
      }
    ]);
    const recordOptions = ref([
      {
        label: "自动",
        value: "1"
      },
      {
        label: "手动",
        value: "2"
      }
    ]);
    const viewOptions = ref([
      {
        label: "卡片",
        value: "card"
      },
      {
        label: "列表",
        value: "list"
      }
    ]);
    const viewComponent = computed(() => {
      switch (recorderLocalParams.value.view) {
        case "card":
          return cardView;
        case "list":
          return listView;
        default:
          return cardView;
      }
    });
    const sortField = ref(recorderLocalParams.value.sortField);
    const sortDirections = reactive({
      living: recorderLocalParams.value.sortField === "living" ? recorderLocalParams.value.sortDirection : "desc",
      state: recorderLocalParams.value.sortField === "state" ? recorderLocalParams.value.sortDirection : "desc",
      monitorStatus: recorderLocalParams.value.sortField === "monitorStatus" ? recorderLocalParams.value.sortDirection : "desc"
    });
    const handleSort = (field) => {
      if (sortField.value === field) {
        const newDirection = sortDirections[field] === "asc" ? "desc" : "asc";
        sortDirections[field] = newDirection;
        recorderLocalParams.value.sortDirection = newDirection;
      } else {
        sortField.value = field;
        recorderLocalParams.value.sortField = field;
      }
      getList();
    };
    const recorderList = ref([]);
    const liveInfos = ref([]);
    const pagination = ref({
      pageCount: 0,
      itemCount: 0
    });
    const readLiveInfoCache = () => {
      const rawValue = localStorage.getItem(LIVE_INFO_CACHE_STORAGE_KEY);
      if (!rawValue) return {};
      try {
        const parsedValue = JSON.parse(rawValue);
        return parsedValue && typeof parsedValue === "object" ? parsedValue : {};
      } catch {
        localStorage.removeItem(LIVE_INFO_CACHE_STORAGE_KEY);
        return {};
      }
    };
    const writeLiveInfoCache = (cache) => {
      localStorage.setItem(LIVE_INFO_CACHE_STORAGE_KEY, JSON.stringify(cache));
    };
    const getValidCachedLiveInfo = (recorderId) => {
      const liveInfoCache = readLiveInfoCache();
      const cacheEntry = liveInfoCache[recorderId];
      if (!cacheEntry) return void 0;
      if (cacheEntry.expiresAt > Date.now()) {
        return cacheEntry.data;
      }
      const nextCache = { ...liveInfoCache };
      delete nextCache[recorderId];
      writeLiveInfoCache(nextCache);
      return void 0;
    };
    const updateLiveInfoCache = (recorders, items) => {
      if (recorders.length === 0 || items.length === 0) return;
      const itemsByChannelId = new Map(items.map((item) => [item.channelId, item]));
      const nextCache = { ...readLiveInfoCache() };
      const expiresAt = Date.now() + LIVE_INFO_CACHE_TTL;
      let changed = false;
      recorders.forEach((recorder) => {
        const liveInfo = itemsByChannelId.get(recorder.channelId);
        if (!liveInfo) return;
        nextCache[recorder.id] = {
          data: liveInfo,
          expiresAt
        };
        changed = true;
      });
      if (changed) {
        writeLiveInfoCache(nextCache);
      }
    };
    const mergeLiveInfos = (recorders, ...sources) => {
      const liveInfoByChannelId = /* @__PURE__ */ new Map();
      sources.flat().forEach((item) => {
        liveInfoByChannelId.set(item.channelId, item);
      });
      return recorders.map((recorder) => liveInfoByChannelId.get(recorder.channelId)).filter((item) => Boolean(item));
    };
    const list = computed(() => {
      const mappedList = recorderList.value.map((item) => {
        const liveInfo = liveInfos.value.find((liveInfo2) => liveInfo2.channelId === item.channelId);
        return {
          ...item,
          cover: item?.liveInfo?.cover || liveInfo?.cover,
          owner: item?.liveInfo?.owner || liveInfo?.owner,
          avatar: item?.liveInfo?.avatar || liveInfo?.avatar || item?.extra?.avatar,
          roomTitle: item?.liveInfo?.title || liveInfo?.title,
          living: item?.liveInfo?.living ?? liveInfo?.living,
          area: item?.liveInfo?.area || liveInfo?.area
        };
      });
      if (!sortField.value) return mappedList;
      return [...mappedList].sort((a, b) => {
        let comparison = 0;
        const currentDirection = sortDirections[sortField.value];
        if (sortField.value === "living") {
          comparison = a.living === b.living ? 0 : a.living ? -1 : 1;
        }
        return currentDirection === "asc" ? -comparison : comparison;
      });
    });
    const getList = async () => {
      const result = await recoder.infoList({
        ...params.value,
        pageSize: recorderLocalParams.value.pageSize,
        sortField: sortField.value || void 0,
        sortDirection: recorderLocalParams.value.sortDirection
      });
      recorderList.value = result.data;
      pagination.value = {
        pageCount: Math.ceil(result.pagination.total / result.pagination.pageSize),
        itemCount: result.pagination.total
      };
      if (params.value.page && pagination.value.pageCount && params.value.page > pagination.value.pageCount) {
        params.value.page = pagination.value.pageCount;
      }
    };
    const addModalVisible = ref(false);
    const batchAddModalVisible = ref(false);
    const batchResultModalVisible = ref(false);
    const batchParseResults = ref([]);
    const batchOperateModalVisible = ref(false);
    const add = async () => {
      editId.value = "";
      addModalVisible.value = true;
    };
    const batchAdd = async () => {
      batchAddModalVisible.value = true;
    };
    const batchOperate = async () => {
      batchOperateModalVisible.value = true;
    };
    const confirm = useConfirm();
    const remove = async (id) => {
      const [status, removeHistory] = await confirm.warning({
        content: "是否确认删除录制？",
        showCheckbox: true,
        checkboxText: "删除录制历史"
      });
      if (!status) return;
      await recoder.remove(id, removeHistory);
      getList();
    };
    const startRecord = async (id) => {
      await recoder.startRecord(id);
      getList();
    };
    const stopRecord = async (id) => {
      await recoder.stopRecord(id);
      getList();
    };
    const cut = async (id) => {
      await recoder.cut(id);
    };
    const startMonitor = async (id) => {
      await recoder.update(id, { id, disableAutoCheck: false });
      notice.success({
        title: "已开始监控"
      });
      await recoder.startRecord(id);
      getList();
    };
    const stopMonitor = async (id) => {
      await recoder.update(id, { id, disableAutoCheck: true });
      notice.success({
        title: "已停止监控"
      });
      getList();
    };
    const editId = ref("");
    const edit = async (id) => {
      editId.value = id;
      addModalVisible.value = true;
    };
    const open = async (id, owner) => {
      const info = await refresh(id, false);
      if (info?.living === false) {
        notice.warning({
          title: "直播间未开播"
        });
        return;
      }
      toLiveVideoPlayerPage({
        liveId: id,
        owner
      });
    };
    const getLiveInfo = async (forceRequest = false) => {
      if (recorderList.value.length === 0) {
        liveInfos.value = [];
        return;
      }
      const currentRecorders = recorderList.value;
      if (forceRequest) {
        const fetchedInfos2 = await recoder.getLiveInfo(
          currentRecorders.map((item) => item.id),
          true
        );
        updateLiveInfoCache(currentRecorders, fetchedInfos2);
        liveInfos.value = mergeLiveInfos(currentRecorders, fetchedInfos2);
        return;
      }
      const cachedInfos = [];
      const missingRecorders = [];
      currentRecorders.forEach((recorder) => {
        const cachedLiveInfo = getValidCachedLiveInfo(recorder.id);
        if (cachedLiveInfo) {
          cachedInfos.push(cachedLiveInfo);
          return;
        }
        missingRecorders.push(recorder);
      });
      let fetchedInfos = [];
      if (missingRecorders.length > 0) {
        fetchedInfos = await recoder.getLiveInfo(
          missingRecorders.map((item) => item.id),
          false
        );
        updateLiveInfoCache(missingRecorders, fetchedInfos);
      }
      liveInfos.value = mergeLiveInfos(currentRecorders, cachedInfos, fetchedInfos);
    };
    const refresh = async (id, showNotification = true) => {
      const recorder = recorderList.value.find((item) => item.id === id);
      if (!recorder) return;
      const data = await recoder.getLiveInfo([id], true);
      const refreshedLiveInfo = data.find((item) => item.channelId === recorder.channelId) || data[0];
      if (refreshedLiveInfo) {
        updateLiveInfoCache([recorder], [refreshedLiveInfo]);
        liveInfos.value = mergeLiveInfos(
          recorderList.value,
          liveInfos.value.filter((item) => item.channelId !== recorder.channelId),
          [refreshedLiveInfo]
        );
      }
      if (showNotification) {
        notice.success({
          title: "刷新成功"
        });
      }
      return refreshedLiveInfo;
    };
    const handleModalClose = () => {
      if (!editId.value) {
        init();
      }
    };
    const handleBatchParsed = (results) => {
      batchParseResults.value = results;
      batchResultModalVisible.value = true;
    };
    const handleBatchCompleted = () => {
      init();
    };
    const handleBatchOperateCompleted = async () => {
      await getList();
    };
    const init = async () => {
      await getList();
      getLiveInfo(false);
    };
    init();
    let intervalId = null;
    function createInterval() {
      if (intervalId) return;
      const interval = window.isWeb ? 2e3 : 1e3;
      intervalId = setInterval(() => {
        getList();
      }, interval);
    }
    function cleanInterval() {
      intervalId && clearInterval(intervalId);
      intervalId = null;
    }
    onDeactivated(() => {
      cleanInterval();
    });
    onActivated(() => {
      createInterval();
      getLiveInfo(false);
    });
    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        cleanInterval();
      } else {
        createInterval();
      }
    }
    useEventListener(document, "visibilitychange", () => {
      handleVisibilityChange();
    });
    const isWeb = ref(window.isWeb);
    const openSavePath = async (id, recordingPath) => {
      if (recordingPath) {
        await window.api.openPath(window.path.dirname(recordingPath));
        return;
      }
      try {
        const { folderPath } = await recoder.getRecentRecordFolder(id);
        await window.api.openPath(folderPath);
      } catch (error) {
        notice.error({
          title: error?.message
        });
      }
    };
    const toWebhook = (channelId) => {
      eventBus.emit("open-setting-dialog", {
        tab: "webhook",
        extra: {
          roomId: channelId
        }
      });
    };
    const viewHistory = (item) => {
      router.push({
        path: "/liveHistory",
        query: {
          id: item.id,
          channelId: item.channelId,
          platform: item.providerId,
          name: item.owner
        }
      });
    };
    const viewStreamerDetail = (item) => {
      router.push({
        path: "/streamerDetail",
        query: {
          recorderId: item.id,
          name: item.owner
        }
      });
    };
    const handlePageChange = (page) => {
      params.value.page = page;
      getList();
    };
    const handlePageSizeChange = (pageSize) => {
      recorderLocalParams.value.pageSize = pageSize;
      params.value.page = 1;
      getList();
    };
    const pageSizeOptions = ref([
      {
        label: "10条/页",
        value: 10
      },
      {
        label: "20条/页",
        value: 20
      },
      {
        label: "30条/页",
        value: 30
      },
      {
        label: "40条/页",
        value: 40
      },
      {
        label: "50条/页",
        value: 50
      },
      {
        label: "100条/页",
        value: 100
      }
    ]);
    const handleSortFieldChange = (field) => {
      sortField.value = field;
      recorderLocalParams.value.sortField = field;
      getList();
    };
    const handleSortDirectionChange = (direction) => {
      recorderLocalParams.value.sortDirection = direction;
      if (sortField.value === "living") {
        sortDirections.living = direction;
      } else if (sortField.value === "state") {
        sortDirections.state = direction;
      } else if (sortField.value === "monitorStatus") {
        sortDirections.monitorStatus = direction;
      }
      getList();
    };
    const actionBtns = ref([
      { label: "批量添加", key: "batchAdd" },
      { label: "批量操作", key: "batchOperate" }
    ]);
    const handleActionClick = (key) => {
      switch (key) {
        case "batchAdd":
          batchAdd();
          break;
        case "batchOperate":
          batchOperate();
          break;
        case void 0:
          add();
          break;
      }
    };
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_2$2;
      const _component_n_select = __unplugin_components_0$1;
      const _component_n_button = Button;
      const _component_n_pagination = __unplugin_components_8$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_n_input, {
            value: unref(params).name,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(params).name = $event),
            placeholder: "备注或房间号",
            style: { "width": "140px" },
            clearable: ""
          }, null, 8, ["value"]),
          createVNode(_component_n_select, {
            value: unref(params).platform,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(params).platform = $event),
            options: unref(platformOptions),
            placeholder: "平台",
            style: { "width": "140px" },
            clearable: ""
          }, null, 8, ["value", "options"]),
          createVNode(_component_n_select, {
            value: unref(params).status,
            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(params).status = $event),
            options: unref(statusOptions),
            placeholder: "录制状态",
            style: { "width": "140px" },
            clearable: ""
          }, null, 8, ["value", "options"]),
          createVNode(_component_n_select, {
            value: unref(params).autoCheck,
            "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(params).autoCheck = $event),
            options: unref(recordOptions),
            placeholder: "监听状态",
            style: { "width": "140px" },
            clearable: ""
          }, null, 8, ["value", "options"]),
          createVNode(_component_n_select, {
            value: unref(recorderLocalParams).pageSize,
            "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(recorderLocalParams).pageSize = $event),
            options: unref(pageSizeOptions),
            placeholder: "每页显示",
            style: { "width": "110px" }
          }, null, 8, ["value", "options"]),
          createVNode(_component_n_select, {
            value: unref(recorderLocalParams).view,
            "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(recorderLocalParams).view = $event),
            options: unref(viewOptions),
            placeholder: "视图",
            style: { "width": "110px" }
          }, null, 8, ["value", "options"]),
          createVNode(SortButton, {
            field: unref(sortField),
            direction: unref(recorderLocalParams).sortDirection,
            options: [
              { label: "默认状态", key: void 0 },
              { label: "直播状态", key: "living" },
              { label: "录制状态", key: "state" },
              { label: "监听状态", key: "monitorStatus" },
              { label: "录制时间", key: "recordTime" }
            ],
            "onUpdate:field": handleSortFieldChange,
            "onUpdate:direction": handleSortDirectionChange
          }, null, 8, ["field", "direction"]),
          createVNode(_sfc_main$7, {
            modelValue: unref(visibleColumns),
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(visibleColumns) ? visibleColumns.value = $event : null),
            columns: columnConfig
          }, null, 8, ["modelValue"]),
          createVNode(_component_n_button, {
            type: "warning",
            onClick: _cache[7] || (_cache[7] = ($event) => getLiveInfo(true))
          }, {
            default: withCtx(() => _cache[14] || (_cache[14] = [
              createTextVNode("刷新")
            ])),
            _: 1
          }),
          createVNode(ButtonGroup, {
            options: unref(actionBtns),
            onClick: handleActionClick
          }, {
            default: withCtx(() => _cache[15] || (_cache[15] = [
              createTextVNode("添加")
            ])),
            _: 1
          }, 8, ["options"])
        ]),
        unref(list).length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          (openBlock(), createBlock(resolveDynamicComponent(unref(viewComponent)), {
            list: unref(list),
            "sort-field": unref(sortField),
            "sort-directions": unref(sortDirections),
            "visible-columns": unref(visibleColumns),
            onSort: handleSort,
            onStartRecord: startRecord,
            onStopRecord: stopRecord,
            onShowDetail: viewStreamerDetail
          }, {
            cornerAction: withCtx(({ item }) => [
              createBaseVNode("div", {
                class: "card-corner-action",
                onClick: withModifiers(($event) => viewStreamerDetail(item), ["stop"])
              }, _cache[16] || (_cache[16] = [
                createBaseVNode("span", { class: "card-corner-action__label" }, "详情", -1)
              ]), 8, _hoisted_3)
            ]),
            action: withCtx(({ item }) => [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", {
                  class: "section",
                  onClick: ($event) => startRecord(item.id)
                }, "开始录制", 8, _hoisted_5),
                item.recordHandle ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "section",
                  onClick: ($event) => stopRecord(item.id)
                }, " 停止录制 ", 8, _hoisted_6)) : createCommentVNode("", true),
                item?.recordHandle?.recorderType === "bililive" ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: "section",
                  onClick: ($event) => cut(item.id)
                }, " 切割 ", 8, _hoisted_7)) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: "section",
                  onClick: ($event) => item.disableAutoCheck ? startMonitor(item.id) : stopMonitor(item.id)
                }, toDisplayString(item.disableAutoCheck ? "开始监控" : "停止监控"), 9, _hoisted_8),
                _cache[17] || (_cache[17] = createBaseVNode("div", { class: "divider" }, null, -1)),
                createBaseVNode("div", {
                  class: "section",
                  onClick: ($event) => edit(item.id)
                }, "直播间设置", 8, _hoisted_9),
                createBaseVNode("div", {
                  class: "section",
                  onClick: ($event) => refresh(item.id)
                }, "刷新直播间信息", 8, _hoisted_10),
                item.living ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  class: "section",
                  onClick: ($event) => open(item.id, item.owner || item.remarks)
                }, " 观看直播 ", 8, _hoisted_11)) : createCommentVNode("", true),
                !unref(isWeb) ? (openBlock(), createElementBlock("div", {
                  key: 3,
                  class: "section",
                  onClick: ($event) => openSavePath(item.id, item.recordHandle?.savePath)
                }, " 打开录制文件夹 ", 8, _hoisted_12)) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: "section",
                  onClick: ($event) => toWebhook(item.channelId)
                }, "Webhook配置", 8, _hoisted_13),
                createBaseVNode("div", {
                  class: "section",
                  onClick: ($event) => viewStreamerDetail(item)
                }, "录制详情", 8, _hoisted_14),
                createBaseVNode("div", {
                  class: "section",
                  onClick: ($event) => viewHistory(item),
                  style: { "display": "none" }
                }, "录制历史", 8, _hoisted_15),
                createBaseVNode("div", {
                  class: "section section-danger",
                  onClick: ($event) => remove(item.id)
                }, "删除房间", 8, _hoisted_16)
              ])
            ]),
            _: 1
          }, 40, ["list", "sort-field", "sort-directions", "visible-columns"])),
          unref(pagination).pageCount > 1 ? (openBlock(), createElementBlock("div", _hoisted_17, [
            createVNode(_component_n_pagination, {
              page: unref(params).page,
              "onUpdate:page": [
                _cache[8] || (_cache[8] = ($event) => unref(params).page = $event),
                handlePageChange
              ],
              "page-size": unref(recorderLocalParams).pageSize,
              "onUpdate:pageSize": [
                _cache[9] || (_cache[9] = ($event) => unref(recorderLocalParams).pageSize = $event),
                handlePageSizeChange
              ],
              "item-count": unref(pagination).itemCount,
              "show-size-picker": "",
              "page-sizes": [10, 20, 30, 40, 50]
            }, null, 8, ["page", "page-size", "item-count"])
          ])) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createElementBlock("h1", _hoisted_18, "还木有添加直播捏，添加一个看看吧，支持斗鱼、虎牙、B站、抖音、小红书")),
        createVNode(AddRecorderModal, {
          id: unref(editId),
          visible: unref(addModalVisible),
          "onUpdate:visible": _cache[10] || (_cache[10] = ($event) => isRef(addModalVisible) ? addModalVisible.value = $event : null),
          onConfirm: handleModalClose
        }, null, 8, ["id", "visible"]),
        createVNode(batchAddModal, {
          visible: unref(batchAddModalVisible),
          "onUpdate:visible": _cache[11] || (_cache[11] = ($event) => isRef(batchAddModalVisible) ? batchAddModalVisible.value = $event : null),
          onParsed: handleBatchParsed
        }, null, 8, ["visible"]),
        createVNode(batchResultModal, {
          visible: unref(batchResultModalVisible),
          "onUpdate:visible": _cache[12] || (_cache[12] = ($event) => isRef(batchResultModalVisible) ? batchResultModalVisible.value = $event : null),
          results: unref(batchParseResults),
          onCompleted: handleBatchCompleted
        }, null, 8, ["visible", "results"]),
        createVNode(batchOperateModal, {
          visible: unref(batchOperateModalVisible),
          "onUpdate:visible": _cache[13] || (_cache[13] = ($event) => isRef(batchOperateModalVisible) ? batchOperateModalVisible.value = $event : null),
          onCompleted: handleBatchOperateCompleted
        }, null, 8, ["visible"])
      ]);
    };
  }
});
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a31a7d63"]]);
export {
  Index as default
};
