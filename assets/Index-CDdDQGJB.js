import { m as cB, q as cE, n as cM, p as c, d as defineComponent, l as h, N as NFadeInExpandTransition, a1 as mergeProps, ar as NBaseClose, aC as resolveSlot, M as NBaseIcon, aD as ErrorIcon, aE as WarningIcon, aF as InfoIcon, aG as SuccessIcon, au as resolveWrappedSlot, v as useConfig, y as useTheme, aH as alertLight, A as useRtl, x as computed, aw as getMargin, av as createKey, C as useThemeClass, r as ref, aI as insideModal, aJ as insidePopover, aK as listLight, E as provide, J as toRef, D as createInjectionKey, R as throwError, S as inject, aL as statisticLight, aM as thingLight, F as Fragment, k as api, c as createElementBlock, e as createBaseVNode, o as openBlock, a2 as mergeModels, a4 as storeToRefs, a3 as useModel, a5 as watch, g as createBlock, w as withCtx, a9 as __unplugin_components_3, a as createVNode, h as createCommentVNode, f as unref, i as isRef, j as createTextVNode, t as toDisplayString, B as Button, _ as __unplugin_components_4, a6 as renderList, a7 as normalizeClass, aB as renderSlot, af as normalizeStyle, aN as withModifiers, aO as reactive, al as onDeactivated, ak as onActivated, ah as resolveDynamicComponent, u as useRouter } from "./index-gjuLIDoI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-B1lyReKF.js";
import { u as useConfirm } from "./index-BZWV_urK.js";
import { u as useVisibleColumns, _ as _sfc_main$a } from "./ColumnSelector.vue_vue_type_script_setup_true_lang-CZnLEBFx.js";
import { _ as _sfc_main$8 } from "./Tip.vue_vue_type_script_setup_true_lang-x9PvGp7f.js";
import { d as useAppConfig, a as useUserInfoStore, c as cloneDeep, f as formatTime } from "./index-BpXg0f34.js";
import { f as fadeInHeightExpandTransition, r as recorderTypeOptions, t as textInfo, v as videoFormatOptions, q as qualityOptions, b as biliQualityOptions, c as biliStreamFormatOptions, s as streamCodecOptions, d as douyuQualityOptions, e as douyuSourceOptions, h as huyaQualityOptions, g as douyinStreamFormatOptions, i as huyaSourceOptions, j as huyaApiTypeOptions, k as douyinQualityOptions, l as douyinApiTypeOptions, a as recorderDebugLevelOptions, m as eventBus } from "./eventBus-DsCIKawu.js";
import { d as defaultRecordConfig } from "./enum-CaeekUf_.js";
import { u as useNotification } from "./use-notification-LRtjAvoZ.js";
import { a as __unplugin_components_5, _ as __unplugin_components_2$1 } from "./FormItem-Kj27K3vk.js";
import { _ as __unplugin_components_0$1 } from "./Input--Gp3P9gj.js";
import { _ as __unplugin_components_1 } from "./Switch-ChpQMtl0.js";
import { _ as __unplugin_components_0$2 } from "./Select-xWcqChuz.js";
import { _ as __unplugin_components_1$1 } from "./Checkbox-pQXdXXSK.js";
import { _ as __unplugin_components_0$3 } from "./InputNumber-CaUnxb7j.js";
import { _ as __unplugin_components_7$1 } from "./TimePicker-6LkPrZvv.js";
import { C as CheckmarkCircleOutline } from "./CheckmarkCircleOutline-DUr2KB0M.js";
import { _ as __unplugin_components_1$2 } from "./text-CwQ4I63s.js";
import { N as NIcon } from "./Icon-D2Zo6Coc.js";
import { _ as _sfc_main$9 } from "./Index.vue_vue_type_style_index_0_lang-CuMJDjM4.js";
import { a as getDanmaStream } from "./common-Da25N27f.js";
import { A as AccessTime24Regular, _ as __unplugin_components_2$3 } from "./AccessTime24Regular-D-LocmMG.js";
import { E as EllipsisHorizontalOutline } from "./EllipsisHorizontalOutline-DbzhFq2q.js";
import { _ as __unplugin_components_2$2 } from "./Popover-T5GorXob.js";
import { B as ButtonGroup } from "./ButtonGroup-CvzhfmEC.js";
import { a as useStorage, d as useEventListener } from "./index-bqczNda1.js";
import { _ as __unplugin_components_1$3 } from "./Dropdown-DBKZZG83.js";
import { u as useNotice } from "./useNotice-BnaW_JYm.js";
import { _ as __unplugin_components_6 } from "./Pagination-kMhNeoDI.js";
import "./HelpCircleOutline-JWqllQs0.js";
import "./_getTag-NYFG1GAg.js";
import "./create-DfXrl36C.js";
import "./create-ref-setter-DXkZaMbS.js";
import "./ChevronRight-CONDXL5I.js";
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
const infoList = async (params) => {
  const res = await api.get(`/recorder/list`, { params });
  return res.data.payload;
};
const get = async (id) => {
  const res = await api.get(`/recorder/${id}`);
  return res.data.payload;
};
const add = async (data) => {
  const res = await api.post(`/recorder/add`, data);
  return res.data.payload;
};
const remove = async (id, removeHistory = false) => {
  const res = await api.delete(`/recorder/${id}`, {
    params: { removeHistory }
  });
  return res.data.payload;
};
const update = async (id, preset) => {
  const res = await api.put(`/recorder/${id}`, preset);
  return res.data.payload;
};
const startRecord = async (id) => {
  const res = await api.post(`/recorder/${id}/start_record`, {
    id
  });
  return res.data.payload;
};
const stopRecord = async (id) => {
  const res = await api.post(`/recorder/${id}/stop_record`, {
    id
  });
  return res.data.payload;
};
const cut = async (id) => {
  const res = await api.post(`/recorder/${id}/cut`, {
    id
  });
  return res.data.payload;
};
const resolveChannel = async (url) => {
  const res = await api.get(`/recorder/manager/resolveChannel`, {
    params: { url }
  });
  return res.data.payload;
};
const resolve = async (url) => {
  const res = await api.get(`/recorder/manager/resolve`, {
    params: { url }
  });
  return res.data.payload;
};
const batchResolveChannel = async (channelURLs) => {
  const res = await api.post(`/recorder/manager/batchResolveChannel`, { channelURLs });
  return res.data.payload;
};
const getLiveInfo = async (ids, forceRequest) => {
  const res = await api.post(`/recorder/manager/liveInfo`, { ids, forceRequest });
  return res.data.payload;
};
const recoder = {
  infoList,
  get,
  add,
  remove,
  update,
  stopRecord,
  startRecord,
  resolveChannel,
  resolve,
  batchResolveChannel,
  getLiveInfo,
  cut
};
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
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "addModal",
  props: /* @__PURE__ */ mergeModels({
    id: {}
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["confirm"], ["update:visible"]),
  setup(__props, { emit: __emit }) {
    const notice = useNotification();
    const { appConfig } = storeToRefs(useAppConfig());
    const { userList } = storeToRefs(useUserInfoStore());
    const showModal = useModel(__props, "visible");
    const props = __props;
    const emits = __emit;
    const globalFieldsObj = ref(
      {
        quality: true,
        disableProvideCommentsWhenRecording: true,
        saveGiftDanma: true,
        saveSCDanma: true,
        segment: true,
        uid: true,
        saveCover: true,
        qualityRetry: true,
        formatName: true,
        useM3U8Proxy: true,
        customHost: true,
        codecName: true,
        source: true,
        videoFormat: true,
        recorderType: true,
        cookie: true,
        doubleScreen: true,
        useServerTimestamp: true,
        debugLevel: true,
        api: true
      }
    );
    const recordConfig = cloneDeep(defaultRecordConfig);
    const config = ref(recordConfig);
    const confirmDialog = useConfirm();
    const confirm = async () => {
      if (!config.value.channelId) {
        notice.error({
          title: "请输入正确的房间链接",
          duration: 1e3
        });
        return;
      }
      if (config.value.providerId === "Bilibili" && !config.value.uid) {
        const [status] = await confirmDialog.warning({
          title: "确认添加",
          content: `B站录制高清画质需要设置账号，你可能尚未设置，尽可能使用使用小号，使用此功能默认需要你为可能的风控负责，是否继续？`,
          showCheckbox: true,
          showAgainKey: "recorder-bili-account"
        });
        if (!status) return;
      }
      config.value.noGlobalFollowFields = Object.keys(globalFieldsObj.value).filter((key) => !globalFieldsObj.value[key]);
      if (isEdit.value) {
        if (!props.id) return;
        await recoder.update(props.id, { id: props.id, ...config.value });
      } else {
        await recoder.add(config.value);
      }
      emits("confirm");
      showModal.value = false;
    };
    const cancel = () => {
      showModal.value = false;
    };
    const getRecordSetting = async () => {
      if (!props.id) return;
      config.value = await recoder.get(props.id);
      if (!config.value.handleTime) {
        config.value.handleTime = [null, null];
      }
      if (!config.value.weight) {
        config.value.weight = 10;
      }
    };
    const isEdit = computed(() => !!props.id);
    const channelIdUrl = ref("");
    const owner = ref("");
    const onChannelIdInputEnd = async () => {
      if (!channelIdUrl.value) return;
      const res = await recoder.resolve(channelIdUrl.value);
      if (!res) {
        notice.error({
          title: "解析失败",
          duration: 1e3
        });
        return;
      }
      initGlobalFields();
      config.value = res;
      owner.value = res.remarks || "";
    };
    const initGlobalFields = () => {
      globalFieldsObj.value = {
        quality: !(config.value?.noGlobalFollowFields ?? []).includes("quality"),
        disableProvideCommentsWhenRecording: !(config.value?.noGlobalFollowFields ?? []).includes(
          "disableProvideCommentsWhenRecording"
        ),
        saveGiftDanma: !(config.value?.noGlobalFollowFields ?? []).includes("saveGiftDanma"),
        saveSCDanma: !(config.value?.noGlobalFollowFields ?? []).includes("saveSCDanma"),
        segment: !(config.value?.noGlobalFollowFields ?? []).includes("segment"),
        uid: !(config.value?.noGlobalFollowFields ?? []).includes("uid"),
        saveCover: !(config.value?.noGlobalFollowFields ?? []).includes("saveCover"),
        qualityRetry: !(config.value?.noGlobalFollowFields ?? []).includes("qualityRetry"),
        formatName: !(config.value?.noGlobalFollowFields ?? []).includes("formatName"),
        useM3U8Proxy: !(config.value?.noGlobalFollowFields ?? []).includes("useM3U8Proxy"),
        customHost: !(config.value?.noGlobalFollowFields ?? []).includes("customHost"),
        codecName: !(config.value?.noGlobalFollowFields ?? []).includes("codecName"),
        source: !(config.value?.noGlobalFollowFields ?? []).includes("source"),
        videoFormat: !(config.value?.noGlobalFollowFields ?? []).includes("videoFormat"),
        recorderType: !(config.value?.noGlobalFollowFields ?? []).includes("recorderType"),
        cookie: !(config.value?.noGlobalFollowFields ?? []).includes("cookie"),
        doubleScreen: !(config.value?.noGlobalFollowFields ?? []).includes("doubleScreen"),
        useServerTimestamp: !(config.value?.noGlobalFollowFields ?? []).includes("useServerTimestamp"),
        debugLevel: !(config.value?.noGlobalFollowFields ?? []).includes("debugLevel"),
        api: !(config.value?.noGlobalFollowFields ?? []).includes("api")
      };
    };
    watch(showModal, async (val) => {
      if (val) {
        channelIdUrl.value = "";
        owner.value = "";
        config.value = recordConfig;
        if (props.id) {
          await getRecordSetting();
        }
        initGlobalFields();
      }
    });
    watch(
      () => globalFieldsObj.value,
      (val) => {
        console.log("globalFieldsObj changed:", val, config.value);
        if (val.quality) {
          if (config.value.providerId === "Bilibili") {
            config.value.quality = appConfig.value.recorder.bilibili.quality;
          } else if (config.value.providerId === "DouYu") {
            config.value.quality = appConfig.value.recorder.douyu.quality;
          } else if (config.value.providerId === "HuYa") {
            config.value.quality = appConfig.value.recorder.huya.quality;
          } else if (config.value.providerId === "DouYin") {
            config.value.quality = appConfig.value.recorder.douyin.quality;
          } else {
            config.value.quality = appConfig.value.recorder.quality;
          }
        }
        if (val.formatName) {
          if (config.value.providerId === "Bilibili") {
            config.value.formatName = appConfig.value.recorder.bilibili.formatName;
          } else if (config.value.providerId === "DouYin") {
            config.value.formatName = appConfig.value.recorder.douyin.formatName;
          } else if (config.value.providerId === "HuYa") {
            config.value.formatName = appConfig.value.recorder.huya.formatName;
          }
        }
        if (val.disableProvideCommentsWhenRecording) {
          config.value.disableProvideCommentsWhenRecording = appConfig.value.recorder.disableProvideCommentsWhenRecording;
        }
        if (val.saveGiftDanma) {
          config.value.saveGiftDanma = appConfig.value.recorder.saveGiftDanma;
        }
        if (val.saveSCDanma) {
          config.value.saveSCDanma = appConfig.value.recorder.saveSCDanma;
        }
        if (val.segment) {
          config.value.segment = appConfig.value.recorder.segment;
        }
        if (val.uid) {
          if (config.value.providerId === "Bilibili") {
            config.value.uid = appConfig.value.recorder.bilibili.uid;
          }
        }
        if (val.saveCover) {
          config.value.saveCover = appConfig.value.recorder.saveCover;
        }
        if (val.qualityRetry) {
          config.value.qualityRetry = appConfig.value.recorder.qualityRetry;
        }
        if (val.useM3U8Proxy) {
          config.value.useM3U8Proxy = appConfig.value.recorder.bilibili.useM3U8Proxy;
        }
        if (val.codecName) {
          if (config.value.providerId === "Bilibili") {
            config.value.codecName = appConfig.value.recorder.bilibili.codecName;
          }
        }
        if (val.source) {
          if (config.value.providerId === "DouYu") {
            config.value.source = appConfig.value.recorder.douyu.source;
          } else if (config.value.providerId === "HuYa") {
            config.value.source = appConfig.value.recorder.huya.source;
          } else {
            config.value.source = "auto";
          }
        }
        if (val.videoFormat) {
          config.value.videoFormat = appConfig.value.recorder.videoFormat;
        }
        if (val.recorderType) {
          config.value.recorderType = appConfig.value.recorder.recorderType;
        }
        if (val.cookie) {
          if (config.value.providerId === "DouYin") {
            config.value.cookie = appConfig.value.recorder.douyin.cookie;
          }
        }
        if (val.doubleScreen) {
          config.value.doubleScreen = appConfig.value.recorder.douyin.doubleScreen;
        }
        if (val.useServerTimestamp) {
          config.value.useServerTimestamp = appConfig.value.recorder.useServerTimestamp;
        }
        if (val.debugLevel) {
          config.value.debugLevel = appConfig.value.recorder.debugLevel;
        }
        if (val.api) {
          if (config.value.providerId === "DouYin") {
            config.value.api = appConfig.value.recorder.douyin.api;
          } else if (config.value.providerId === "HuYa") {
            config.value.api = appConfig.value.recorder.huya.api;
          }
        }
        if (val.customHost) {
          config.value.customHost = appConfig.value.recorder.bilibili.customHost;
        }
      },
      {
        deep: true
      }
    );
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$8;
      const _component_n_input = __unplugin_components_0$1;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_n_switch = __unplugin_components_1;
      const _component_n_select = __unplugin_components_0$2;
      const _component_n_checkbox = __unplugin_components_1$1;
      const _component_n_input_number = __unplugin_components_0$3;
      const _component_n_time_picker = __unplugin_components_7$1;
      const _component_n_form = __unplugin_components_5;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_4;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[72] || (_cache[72] = ($event) => showModal.value = $event),
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
                  onClick: cancel
                }, {
                  default: withCtx(() => _cache[116] || (_cache[116] = [
                    createTextVNode(" 取消 ")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "primary",
                  class: "btn",
                  onClick: confirm
                }, {
                  default: withCtx(() => _cache[117] || (_cache[117] = [
                    createTextVNode(" 确认 ")
                  ])),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n_form, {
                "label-placement": "left",
                "label-width": 150
              }, {
                default: withCtx(() => [
                  _cache[115] || (_cache[115] = createBaseVNode("h4", null, "支持斗鱼、虎牙、B站、抖音，玩具级录播，请做好踩坑的准备", -1)),
                  !unref(isEdit) ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                    label: withCtx(() => [
                      createVNode(_component_Tip, {
                        text: "直播间链接",
                        tip: "如果链接无法解析，请尝试使用标准直播间链接<br/>斗鱼：https://www.douyu.com/房间号<br/>虎牙：https://www.huya.com/房间号<br/>B站：https://live.bilibili.com/房间号<br/>抖音：https://live.douyin.com/房间号<br/>抖音：https://www.douyin.com/user/xxxxx"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n_input, {
                        value: unref(channelIdUrl),
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(channelIdUrl) ? channelIdUrl.value = $event : null),
                        valueModifiers: { trim: true },
                        placeholder: "输入后自动解析",
                        onBlur: onChannelIdInputEnd
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(config).channelId ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    !unref(isEdit) ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                      label: withCtx(() => _cache[73] || (_cache[73] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 主播名称 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(owner),
                          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(owner) ? owner.value = $event : null),
                          valueModifiers: { trim: true },
                          disabled: true,
                          placeholder: "输入房间链接后自动解析"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_n_form_item, { disabled: true }, {
                      label: withCtx(() => _cache[74] || (_cache[74] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 房间号 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(config).channelId,
                          "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(config).channelId = $event),
                          valueModifiers: { trim: true },
                          disabled: true,
                          placeholder: "输入房间链接后自动解析"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, { disabled: unref(isEdit) }, {
                      label: withCtx(() => _cache[75] || (_cache[75] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 备注 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(config).remarks,
                          "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(config).remarks = $event),
                          placeholder: "请输入备注（可选）"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => _cache[76] || (_cache[76] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 自动录制 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: unref(config).disableAutoCheck,
                          "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(config).disableAutoCheck = $event),
                          "checked-value": false,
                          "unchecked-value": true
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "发送至webhook",
                          tip: "你可以在设置中进行处理，主要用于弹幕压制以及上传功能"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: unref(config).sendToWebhook,
                          "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(config).sendToWebhook = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    _cache[111] || (_cache[111] = createBaseVNode("h2", null, "文件", -1)),
                    true ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).common.recorderType.text,
                            tip: unref(textInfo).common.recorderType.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).recorderType,
                            "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(config).recorderType = $event),
                            options: unref(recorderTypeOptions),
                            disabled: unref(globalFieldsObj).recorderType
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).recorderType,
                            "onUpdate:checked": _cache[7] || (_cache[7] = ($event) => unref(globalFieldsObj).recorderType = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[77] || (_cache[77] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
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
                            value: unref(config).videoFormat,
                            "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(config).videoFormat = $event),
                            options: unref(videoFormatOptions),
                            disabled: unref(globalFieldsObj).videoFormat
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).videoFormat,
                            "onUpdate:checked": _cache[9] || (_cache[9] = ($event) => unref(globalFieldsObj).videoFormat = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[78] || (_cache[78] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "分段",
                            tip: "0为不分段，默认为时间分段，单位分钟。<br/>如果以B,KB,MB,GB结尾，会尝试使用文件大小分段，<b>不推荐在ffmpeg引擎中使用</b>"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).segment,
                            "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(config).segment = $event),
                            disabled: unref(globalFieldsObj).segment,
                            placeholder: "请输入分段参数"
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).segment,
                            "onUpdate:checked": _cache[11] || (_cache[11] = ($event) => unref(globalFieldsObj).segment = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[79] || (_cache[79] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    _cache[112] || (_cache[112] = createBaseVNode("h2", null, "直播流", -1)),
                    unref(config).providerId !== "Bilibili" && unref(config).providerId !== "DouYu" && unref(config).providerId !== "HuYa" && unref(config).providerId !== "DouYin" ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
                      label: withCtx(() => _cache[80] || (_cache[80] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 画质 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: unref(config).quality,
                          "onUpdate:value": _cache[12] || (_cache[12] = ($event) => unref(config).quality = $event),
                          options: unref(qualityOptions),
                          disabled: unref(globalFieldsObj).quality
                        }, null, 8, ["value", "options", "disabled"]),
                        createVNode(_component_n_checkbox, {
                          checked: unref(globalFieldsObj).quality,
                          "onUpdate:checked": _cache[13] || (_cache[13] = ($event) => unref(globalFieldsObj).quality = $event),
                          class: "global-checkbox"
                        }, {
                          default: withCtx(() => _cache[81] || (_cache[81] = [
                            createTextVNode("全局")
                          ])),
                          _: 1
                        }, 8, ["checked"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(config).providerId === "Bilibili" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
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
                            value: unref(config).uid,
                            "onUpdate:value": _cache[14] || (_cache[14] = ($event) => unref(config).uid = $event),
                            options: unref(userList),
                            "label-field": "name",
                            "value-field": "uid",
                            clearable: "",
                            disabled: unref(globalFieldsObj).uid
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).uid,
                            "onUpdate:checked": _cache[15] || (_cache[15] = ($event) => unref(globalFieldsObj).uid = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[82] || (_cache[82] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
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
                            value: unref(config).quality,
                            "onUpdate:value": _cache[16] || (_cache[16] = ($event) => unref(config).quality = $event),
                            options: unref(biliQualityOptions),
                            disabled: unref(globalFieldsObj).quality
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).quality,
                            "onUpdate:checked": _cache[17] || (_cache[17] = ($event) => unref(globalFieldsObj).quality = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[83] || (_cache[83] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
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
                            value: unref(config).formatName,
                            "onUpdate:value": _cache[18] || (_cache[18] = ($event) => unref(config).formatName = $event),
                            options: unref(biliStreamFormatOptions),
                            disabled: unref(globalFieldsObj).formatName
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).formatName,
                            "onUpdate:checked": _cache[19] || (_cache[19] = ($event) => unref(globalFieldsObj).formatName = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[84] || (_cache[84] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
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
                            value: unref(config).codecName,
                            "onUpdate:value": _cache[20] || (_cache[20] = ($event) => unref(config).codecName = $event),
                            options: unref(streamCodecOptions),
                            disabled: unref(globalFieldsObj).codecName
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).codecName,
                            "onUpdate:checked": _cache[21] || (_cache[21] = ($event) => unref(globalFieldsObj).codecName = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[85] || (_cache[85] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      unref(config).formatName !== "flv_only" ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            tip: unref(textInfo).bili.useM3U8Proxy.tip,
                            text: unref(textInfo).bili.useM3U8Proxy.text
                          }, null, 8, ["tip", "text"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).useM3U8Proxy,
                            "onUpdate:value": _cache[22] || (_cache[22] = ($event) => unref(config).useM3U8Proxy = $event),
                            disabled: unref(globalFieldsObj).useM3U8Proxy
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).useM3U8Proxy,
                            "onUpdate:checked": _cache[23] || (_cache[23] = ($event) => unref(globalFieldsObj).useM3U8Proxy = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[86] || (_cache[86] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
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
                            value: unref(config).customHost,
                            "onUpdate:value": _cache[24] || (_cache[24] = ($event) => unref(config).customHost = $event),
                            placeholder: "例如：cn-jsyz-ct-03-32.bilivideo.com",
                            clearable: "",
                            disabled: unref(globalFieldsObj).customHost
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).customHost,
                            "onUpdate:checked": _cache[25] || (_cache[25] = ($event) => unref(globalFieldsObj).customHost = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[87] || (_cache[87] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      !unref(config).disableProvideCommentsWhenRecording ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).common.titleKeywords.text,
                            tip: unref(textInfo).common.titleKeywords.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).titleKeywords,
                            "onUpdate:value": _cache[26] || (_cache[26] = ($event) => unref(config).titleKeywords = $event),
                            placeholder: unref(textInfo).common.titleKeywords.placeholder,
                            clearable: ""
                          }, null, 8, ["value", "placeholder"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ], 64)) : createCommentVNode("", true),
                    unref(config).providerId === "DouYu" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "画质",
                            tip: "如果找不到对应画质，会使用较清晰的源"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).quality,
                            "onUpdate:value": _cache[27] || (_cache[27] = ($event) => unref(config).quality = $event),
                            options: unref(douyuQualityOptions),
                            disabled: unref(globalFieldsObj).quality
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).quality,
                            "onUpdate:checked": _cache[28] || (_cache[28] = ($event) => unref(globalFieldsObj).quality = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[88] || (_cache[88] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
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
                            value: unref(config).source,
                            "onUpdate:value": _cache[29] || (_cache[29] = ($event) => unref(config).source = $event),
                            options: unref(douyuSourceOptions),
                            disabled: unref(globalFieldsObj).source
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).source,
                            "onUpdate:checked": _cache[30] || (_cache[30] = ($event) => unref(globalFieldsObj).source = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[89] || (_cache[89] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).common.titleKeywords.text,
                            tip: unref(textInfo).common.titleKeywords.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).titleKeywords,
                            "onUpdate:value": _cache[31] || (_cache[31] = ($event) => unref(config).titleKeywords = $event),
                            placeholder: unref(textInfo).common.titleKeywords.placeholder,
                            clearable: ""
                          }, null, 8, ["value", "placeholder"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    unref(config).providerId === "HuYa" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "画质",
                            tip: "如果找不到对应画质，会使用较清晰的源"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).quality,
                            "onUpdate:value": _cache[32] || (_cache[32] = ($event) => unref(config).quality = $event),
                            options: unref(huyaQualityOptions),
                            disabled: unref(globalFieldsObj).quality
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).quality,
                            "onUpdate:checked": _cache[33] || (_cache[33] = ($event) => unref(globalFieldsObj).quality = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[90] || (_cache[90] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
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
                            value: unref(config).formatName,
                            "onUpdate:value": _cache[34] || (_cache[34] = ($event) => unref(config).formatName = $event),
                            options: unref(douyinStreamFormatOptions),
                            disabled: unref(globalFieldsObj).formatName
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).formatName,
                            "onUpdate:checked": _cache[35] || (_cache[35] = ($event) => unref(globalFieldsObj).formatName = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[91] || (_cache[91] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
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
                            value: unref(config).source,
                            "onUpdate:value": _cache[36] || (_cache[36] = ($event) => unref(config).source = $event),
                            options: unref(huyaSourceOptions),
                            disabled: unref(globalFieldsObj).source
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).source,
                            "onUpdate:checked": _cache[37] || (_cache[37] = ($event) => unref(globalFieldsObj).source = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[92] || (_cache[92] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
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
                            value: unref(config).api,
                            "onUpdate:value": _cache[38] || (_cache[38] = ($event) => unref(config).api = $event),
                            options: unref(huyaApiTypeOptions),
                            disabled: unref(globalFieldsObj).api
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).api,
                            "onUpdate:checked": _cache[39] || (_cache[39] = ($event) => unref(globalFieldsObj).api = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[93] || (_cache[93] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).common.titleKeywords.text,
                            tip: unref(textInfo).common.titleKeywords.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).titleKeywords,
                            "onUpdate:value": _cache[40] || (_cache[40] = ($event) => unref(config).titleKeywords = $event),
                            placeholder: unref(textInfo).common.titleKeywords.placeholder,
                            clearable: ""
                          }, null, 8, ["value", "placeholder"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    unref(config).providerId === "DouYin" ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).douyin.quality.text,
                            tip: unref(textInfo).douyin.quality.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).quality,
                            "onUpdate:value": _cache[41] || (_cache[41] = ($event) => unref(config).quality = $event),
                            options: unref(douyinQualityOptions),
                            disabled: unref(globalFieldsObj).quality
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).quality,
                            "onUpdate:checked": _cache[42] || (_cache[42] = ($event) => unref(globalFieldsObj).quality = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[94] || (_cache[94] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
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
                            value: unref(config).formatName,
                            "onUpdate:value": _cache[43] || (_cache[43] = ($event) => unref(config).formatName = $event),
                            options: unref(douyinStreamFormatOptions),
                            disabled: unref(globalFieldsObj).formatName
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).formatName,
                            "onUpdate:checked": _cache[44] || (_cache[44] = ($event) => unref(globalFieldsObj).formatName = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[95] || (_cache[95] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
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
                            value: unref(config).api,
                            "onUpdate:value": _cache[45] || (_cache[45] = ($event) => unref(config).api = $event),
                            options: unref(douyinApiTypeOptions),
                            disabled: unref(globalFieldsObj).api
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).api,
                            "onUpdate:checked": _cache[46] || (_cache[46] = ($event) => unref(globalFieldsObj).api = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[96] || (_cache[96] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "Cookie",
                            tip: "我也不知道有啥用，可能哪天被风控的时候用得上吧"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).cookie,
                            "onUpdate:value": _cache[47] || (_cache[47] = ($event) => unref(config).cookie = $event),
                            type: "password",
                            disabled: unref(globalFieldsObj).cookie
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).cookie,
                            "onUpdate:checked": _cache[48] || (_cache[48] = ($event) => unref(globalFieldsObj).cookie = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[97] || (_cache[97] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
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
                            value: unref(config).doubleScreen,
                            "onUpdate:value": _cache[49] || (_cache[49] = ($event) => unref(config).doubleScreen = $event),
                            disabled: unref(globalFieldsObj).doubleScreen
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).doubleScreen,
                            "onUpdate:checked": _cache[50] || (_cache[50] = ($event) => unref(globalFieldsObj).doubleScreen = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[98] || (_cache[98] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).common.titleKeywords.text,
                            tip: unref(textInfo).common.titleKeywords.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).titleKeywords,
                            "onUpdate:value": _cache[51] || (_cache[51] = ($event) => unref(config).titleKeywords = $event),
                            placeholder: unref(textInfo).common.titleKeywords.placeholder,
                            clearable: ""
                          }, null, 8, ["value", "placeholder"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    unref(config).providerId !== "HuYa" && unref(config).providerId !== "DouYin" ? (openBlock(), createBlock(_component_n_form_item, { key: 7 }, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "只录制音频",
                          tip: "会选择纯音频流，B站只支持flv流，抖音请在画质中选择"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: unref(config).onlyAudio,
                          "onUpdate:value": _cache[52] || (_cache[52] = ($event) => unref(config).onlyAudio = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          tip: unref(textInfo).bili.qualityRetry.tip,
                          text: unref(textInfo).bili.qualityRetry.text
                        }, null, 8, ["tip", "text"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input_number, {
                          value: unref(config).qualityRetry,
                          "onUpdate:value": _cache[53] || (_cache[53] = ($event) => unref(config).qualityRetry = $event),
                          min: "-1",
                          step: "1",
                          disabled: unref(globalFieldsObj).qualityRetry
                        }, null, 8, ["value", "disabled"]),
                        createVNode(_component_n_checkbox, {
                          checked: unref(globalFieldsObj).qualityRetry,
                          "onUpdate:checked": _cache[54] || (_cache[54] = ($event) => unref(globalFieldsObj).qualityRetry = $event),
                          class: "global-checkbox"
                        }, {
                          default: withCtx(() => _cache[99] || (_cache[99] = [
                            createTextVNode("全局")
                          ])),
                          _: 1
                        }, 8, ["checked"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "监控时间段",
                          tip: "仅在时间段内进行监控，有助于减少风控的可能，<b>注意是监控时间段并非录制时间段</b>"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_time_picker, {
                          "formatted-value": unref(config).handleTime[0],
                          "onUpdate:formattedValue": _cache[55] || (_cache[55] = ($event) => unref(config).handleTime[0] = $event),
                          clearable: ""
                        }, null, 8, ["formatted-value"]),
                        _cache[100] || (_cache[100] = createTextVNode(" ~ ")),
                        createVNode(_component_n_time_picker, {
                          "formatted-value": unref(config).handleTime[1],
                          "onUpdate:formattedValue": _cache[56] || (_cache[56] = ($event) => unref(config).handleTime[1] = $event),
                          clearable: ""
                        }, null, 8, ["formatted-value"])
                      ]),
                      _: 1
                    }),
                    _cache[113] || (_cache[113] = createBaseVNode("h2", null, "其他", -1)),
                    true ? (openBlock(), createElementBlock(Fragment, { key: 8 }, [
                      !unref(config).disableAutoCheck ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "录制开始通知",
                            tip: "默认使用系统通知，具体前往设置通知中修改，一般一场直播只会通知一次"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).liveStartNotification,
                            "onUpdate:value": _cache[57] || (_cache[57] = ($event) => unref(config).liveStartNotification = $event)
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      !unref(config).disableAutoCheck ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "录制结束通知",
                            tip: "默认使用系统通知，具体前往设置通知中修改，会在一次录制结束后三分钟检查录制状态，如果为不在录制中状态，则进行通知"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).liveEndNotification,
                            "onUpdate:value": _cache[58] || (_cache[58] = ($event) => unref(config).liveEndNotification = $event)
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "展示权重",
                            tip: "值越大，UI显示越靠前"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input_number, {
                            value: unref(config).weight,
                            "onUpdate:value": _cache[59] || (_cache[59] = ($event) => unref(config).weight = $event),
                            min: "1",
                            step: "1",
                            style: { "width": "100%" }
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
                            value: unref(config).debugLevel,
                            "onUpdate:value": _cache[60] || (_cache[60] = ($event) => unref(config).debugLevel = $event),
                            options: unref(recorderDebugLevelOptions),
                            style: { "width": "220px" },
                            disabled: unref(globalFieldsObj).debugLevel
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).debugLevel,
                            "onUpdate:checked": _cache[61] || (_cache[61] = ($event) => unref(globalFieldsObj).debugLevel = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[101] || (_cache[101] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => _cache[102] || (_cache[102] = [
                          createBaseVNode("span", { class: "inline-flex" }, " 保存封面 ", -1)
                        ])),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).saveCover,
                            "onUpdate:value": _cache[62] || (_cache[62] = ($event) => unref(config).saveCover = $event),
                            disabled: unref(globalFieldsObj).saveCover
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).saveCover,
                            "onUpdate:checked": _cache[63] || (_cache[63] = ($event) => unref(globalFieldsObj).saveCover = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[103] || (_cache[103] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    _cache[114] || (_cache[114] = createBaseVNode("h2", null, "弹幕", -1)),
                    true ? (openBlock(), createElementBlock(Fragment, { key: 9 }, [
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => _cache[104] || (_cache[104] = [
                          createBaseVNode("span", { class: "inline-flex" }, " 弹幕录制 ", -1)
                        ])),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).disableProvideCommentsWhenRecording,
                            "onUpdate:value": _cache[64] || (_cache[64] = ($event) => unref(config).disableProvideCommentsWhenRecording = $event),
                            disabled: unref(globalFieldsObj).disableProvideCommentsWhenRecording,
                            "checked-value": false,
                            "unchecked-value": true
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).disableProvideCommentsWhenRecording,
                            "onUpdate:checked": _cache[65] || (_cache[65] = ($event) => unref(globalFieldsObj).disableProvideCommentsWhenRecording = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[105] || (_cache[105] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      !unref(config).disableProvideCommentsWhenRecording ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                        label: withCtx(() => _cache[106] || (_cache[106] = [
                          createBaseVNode("span", { class: "inline-flex" }, " 保存礼物 ", -1)
                        ])),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).saveGiftDanma,
                            "onUpdate:value": _cache[66] || (_cache[66] = ($event) => unref(config).saveGiftDanma = $event),
                            disabled: unref(globalFieldsObj).saveGiftDanma
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).saveGiftDanma,
                            "onUpdate:checked": _cache[67] || (_cache[67] = ($event) => unref(globalFieldsObj).saveGiftDanma = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[107] || (_cache[107] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      !unref(config).disableProvideCommentsWhenRecording && ["Bilibili", "DouYu"].includes(unref(config).providerId) ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
                        label: withCtx(() => _cache[108] || (_cache[108] = [
                          createBaseVNode("span", { class: "inline-flex" }, " 高能弹幕(SC) ", -1)
                        ])),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).saveSCDanma,
                            "onUpdate:value": _cache[68] || (_cache[68] = ($event) => unref(config).saveSCDanma = $event),
                            disabled: unref(globalFieldsObj).saveSCDanma
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).saveSCDanma,
                            "onUpdate:checked": _cache[69] || (_cache[69] = ($event) => unref(globalFieldsObj).saveSCDanma = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[109] || (_cache[109] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      !unref(config).disableProvideCommentsWhenRecording && !["HuYa"].includes(unref(config).providerId) ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "服务端时间戳",
                            tip: "使用服务端返回的弹幕时间戳而非本地收到的时间戳，用于处理某些主播的弹幕时间戳不准确的问题"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).useServerTimestamp,
                            "onUpdate:value": _cache[70] || (_cache[70] = ($event) => unref(config).useServerTimestamp = $event),
                            disabled: unref(globalFieldsObj).useServerTimestamp
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).useServerTimestamp,
                            "onUpdate:checked": _cache[71] || (_cache[71] = ($event) => unref(globalFieldsObj).useServerTimestamp = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[110] || (_cache[110] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ], 64)) : createCommentVNode("", true)
                  ], 64)) : createCommentVNode("", true)
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
const addModal = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-8ca6adc6"]]);
const _hoisted_1$5 = { class: "footer" };
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
      const _component_n_input = __unplugin_components_0$1;
      const _component_n_form_item = __unplugin_components_2$1;
      const _component_n_alert = __unplugin_components_2;
      const _component_n_form = __unplugin_components_5;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_4;
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
              createBaseVNode("div", _hoisted_1$5, [
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
const _hoisted_1$4 = { class: "result-summary" };
const _hoisted_2$4 = {
  key: 0,
  class: "batch-settings"
};
const _hoisted_3$3 = { class: "results-list" };
const _hoisted_4$3 = { class: "results-header" };
const _hoisted_5$3 = { class: "result-url" };
const _hoisted_6$3 = {
  key: 0,
  class: "error-message"
};
const _hoisted_7$3 = { class: "footer" };
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
      const _component_n_text = __unplugin_components_1$2;
      const _component_n_thing = __unplugin_components_7;
      const _component_n_list_item = __unplugin_components_8;
      const _component_n_list = __unplugin_components_9;
      const _component_n_card = __unplugin_components_4;
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
              createBaseVNode("div", _hoisted_7$3, [
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
              createBaseVNode("div", _hoisted_1$4, [
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
              unref(successResults).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
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
              createBaseVNode("div", _hoisted_3$3, [
                createBaseVNode("div", _hoisted_4$3, [
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
                              createBaseVNode("div", _hoisted_5$3, toDisplayString(result.url), 1),
                              !result.success ? (openBlock(), createElementBlock("div", _hoisted_6$3, "错误：" + toDisplayString(result.error), 1)) : createCommentVNode("", true)
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "videoModal",
  props: /* @__PURE__ */ mergeModels({
    id: {},
    videoUrl: {}
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  }),
  emits: ["update:visible"],
  setup(__props) {
    const showModal = useModel(__props, "visible");
    const props = __props;
    let eventSource = null;
    const videoRef = ref(null);
    async function streamLogs() {
      eventSource = await getDanmaStream(props.id);
      eventSource.onmessage = function(event) {
        const data = JSON.parse(event.data);
        if (!videoInstance.value) return;
        if (!data.text) return;
        let mode = 0;
        if ([1, 2, 3].includes(data.mode ?? "")) {
          mode = 0;
        } else if (data.mode === 4) {
          mode = 2;
        } else if (data.mode === 5) {
          mode = 1;
        }
        videoInstance?.value?.artplayerPluginDanmuku?.emit({
          // mode，0: 滚动(默认)，1: 顶部，2: 底部
          mode,
          text: data.text,
          color: data.color,
          border: false
        });
      };
    }
    watch(
      () => showModal.value,
      (value) => {
        if (value) {
          streamLogs();
        } else {
          eventSource?.close();
        }
      }
    );
    const videoInstance = ref(null);
    const handleVideoReady = async (instance) => {
      videoInstance.value = instance;
      if (props.videoUrl) ;
    };
    return (_ctx, _cache) => {
      const _component_n_card = __unplugin_components_4;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showModal.value = $event)
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "80%" },
            bordered: false,
            role: "dialog",
            "aria-modal": "true"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$9, {
                ref_key: "videoRef",
                ref: videoRef,
                style: { "aspect-ratio": "16 / 9" },
                option: {
                  fullscreen: true,
                  url: props.videoUrl
                },
                "is-live": "",
                plugins: ["danmuku", "hls"],
                onReady: handleVideoReady
              }, null, 8, ["option"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const _hoisted_1$3 = { class: "recorder-container" };
const _hoisted_2$3 = { class: "cover-container" };
const _hoisted_3$2 = ["src"];
const _hoisted_4$2 = ["title"];
const _hoisted_5$2 = ["title"];
const _hoisted_6$2 = { class: "source" };
const _hoisted_7$2 = { class: "line" };
const _hoisted_8$2 = {
  key: 0,
  class: "recording-container"
};
const _hoisted_9$2 = { class: "content" };
const _hoisted_10$2 = ["src"];
const _hoisted_11$2 = { style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between" } };
const _hoisted_12$2 = { style: { "display": "flex", "gap": "5px", "align-items": "center" } };
const _hoisted_13$2 = ["title"];
const _hoisted_14$2 = { class: "tags" };
const _hoisted_15$2 = ["href"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "cardView",
  props: {
    list: { default: () => [] },
    visibleColumns: { default: () => [] }
  },
  setup(__props) {
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
      return time.split(".")[0];
    }
    const stateMap = {
      idle: "空闲",
      recording: "录制中",
      "check-error": "检查错误",
      "stopping-record": "停止中",
      "title-blocked": "标题屏蔽"
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_popover = __unplugin_components_2$2;
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
                createBaseVNode("span", null, toDisplayString(formatProgress(item?.recordHandle?.progress?.time)), 1)
              ], 8, _hoisted_5$2)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                item?.extra?.lastRecordTime && isColumnVisible("lastRecordTime") ? (openBlock(), createElementBlock("div", _hoisted_8$2, [
                  createBaseVNode("span", null, "最近录制时间：" + toDisplayString(unref(formatTime)(item.extra.lastRecordTime)), 1)
                ])) : createCommentVNode("", true)
              ], 64))
            ]),
            createBaseVNode("div", _hoisted_9$2, [
              createBaseVNode("img", {
                class: "avatar",
                src: item.avatar,
                referrerpolicy: "no-referrer"
              }, null, 8, _hoisted_10$2),
              createBaseVNode("div", _hoisted_11$2, [
                createBaseVNode("div", _hoisted_12$2, [
                  createBaseVNode("div", {
                    class: "owner",
                    title: item.remarks
                  }, toDisplayString(item.owner || item.remarks), 9, _hoisted_13$2),
                  item.living ? (openBlock(), createBlock(_component_n_icon, {
                    key: 0,
                    size: "20",
                    title: "直播中",
                    class: "icon-muted"
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
                createBaseVNode("div", _hoisted_14$2, [
                  createBaseVNode("a", {
                    class: "link tag channel",
                    target: "_blank",
                    href: item.channelURL,
                    title: "点击可访问"
                  }, toDisplayString(item.providerId), 9, _hoisted_15$2),
                  ["check-error", "stopping-record", "title-blocked"].includes(item.state) ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(["tag state", {
                      error: item.state === "check-error",
                      recording: item.state === "recording",
                      "title-blocked": item.state === "title-blocked"
                    }])
                  }, toDisplayString(stateMap[item.state]), 3)) : createCommentVNode("", true)
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
const cardView = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e510ec67"]]);
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
const _hoisted_16 = { key: 9 };
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
  emits: ["sort"],
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
      "title-blocked": "标题屏蔽"
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_popover = __unplugin_components_2$2;
      const _component_n_table = __unplugin_components_2$3;
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
              isColumnVisible("lastRecordTime") ? (openBlock(), createElementBlock("th", _hoisted_6$1, "最近录制时间")) : createCommentVNode("", true),
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
                    "title-blocked": item.state === "title-blocked"
                  })
                }, toDisplayString(stateMap[item.state]), 3)) : createCommentVNode("", true),
                isColumnVisible("recordParams") ? (openBlock(), createElementBlock("td", {
                  key: 6,
                  title: item?.recordHandle?.url
                }, toDisplayString(item.state === "recording" ? `${item.usedSource}/${item.usedStream}/${item?.recordHandle?.recorderType}` : ""), 9, _hoisted_13$1)) : createCommentVNode("", true),
                isColumnVisible("lastRecordTime") ? (openBlock(), createElementBlock("td", _hoisted_14$1, toDisplayString(item?.extra?.lastRecordTime ? unref(formatTime)(item?.extra?.lastRecordTime) : "-"), 1)) : createCommentVNode("", true),
                isColumnVisible("monitorStatus") ? (openBlock(), createElementBlock("td", _hoisted_15$1, toDisplayString(item.disableAutoCheck ? "手动" : `自动${item.tempStopIntervalCheck && !item.disableAutoCheck ? "(跳过本场直播)" : ""}`), 1)) : createCommentVNode("", true),
                isColumnVisible("actions") ? (openBlock(), createElementBlock("td", _hoisted_16, [
                  createVNode(_component_n_popover, {
                    placement: "right-start",
                    trigger: "hover"
                  }, {
                    trigger: withCtx(() => _cache[6] || (_cache[6] = [
                      createBaseVNode("span", { style: { "cursor": "pointer", "color": "skyblue" } }, "编辑", -1)
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
const listView = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-daeca7eb"]]);
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
      const _component_n_dropdown = __unplugin_components_1$3;
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
const _hoisted_2 = { style: { "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "20px" } };
const _hoisted_3 = {
  style: { "margin-top": "10px" },
  class: "section-container"
};
const _hoisted_4 = ["onClick"];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["onClick"];
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["onClick"];
const _hoisted_10 = ["onClick"];
const _hoisted_11 = ["onClick"];
const _hoisted_12 = ["onClick"];
const _hoisted_13 = ["onClick"];
const _hoisted_14 = {
  key: 0,
  style: { "margin-top": "20px", "display": "flex", "justify-content": "flex-end" }
};
const _hoisted_15 = { key: 1 };
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
      { value: "lastRecordTime", label: "最近录制时间" },
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
      recordStatus: void 0,
      name: void 0,
      autoCheck: void 0,
      page: 1
    });
    const platformOptions = ref([
      {
        label: "斗鱼",
        value: "DouYu"
      },
      {
        label: "B站",
        value: "Bilibili"
      },
      {
        label: "虎牙",
        value: "HuYa"
      },
      {
        label: "抖音",
        value: "DouYin"
      }
    ]);
    const statusOptions = ref([
      {
        label: "录制中",
        value: "recording"
      },
      {
        label: "未录制",
        value: "unrecorded"
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
    const list = computed(() => {
      const mappedList = recorderList.value.map((item) => {
        const liveInfo = liveInfos.value.find((liveInfo2) => liveInfo2.channelId === item.channelId);
        return {
          ...item,
          cover: item?.liveInfo?.cover || liveInfo?.cover,
          owner: item?.liveInfo?.owner || liveInfo?.owner,
          avatar: item?.liveInfo?.avatar || liveInfo?.avatar || item?.extra?.avatar,
          roomTitle: item?.liveInfo?.title || liveInfo?.title,
          living: item?.liveInfo?.living ?? liveInfo?.living
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
    const add2 = async () => {
      editId.value = "";
      addModalVisible.value = true;
    };
    const batchAdd = async () => {
      batchAddModalVisible.value = true;
    };
    const confirm = useConfirm();
    const remove2 = async (id) => {
      const [status, removeHistory] = await confirm.warning({
        content: "是否确认删除录制？",
        showCheckbox: true,
        checkboxText: "删除录制历史"
      });
      if (!status) return;
      await recoder.remove(id, removeHistory);
      getList();
    };
    const startRecord2 = async (id) => {
      await recoder.startRecord(id);
      getList();
    };
    const stopRecord2 = async (id) => {
      await recoder.stopRecord(id);
      getList();
    };
    const cut2 = async (id) => {
      await recoder.cut(id);
    };
    const editId = ref("");
    const edit = async (id) => {
      editId.value = id;
      addModalVisible.value = true;
    };
    const videoModalVisible = ref(false);
    const videoUrl = ref("");
    const open = async (id, streamUrl) => {
      editId.value = id;
      videoUrl.value = streamUrl;
      if (!streamUrl) {
        notice.error({
          title: "未找到直播流地址"
        });
        return;
      }
      videoModalVisible.value = true;
    };
    const getLiveInfo2 = async (forceRequest = false) => {
      if (recorderList.value.length === 0) return;
      const ids = recorderList.value.map((item) => item.id);
      liveInfos.value = await recoder.getLiveInfo(ids, forceRequest);
    };
    const refresh = async (id) => {
      const data = await recoder.getLiveInfo([id], true);
      liveInfos.value = liveInfos.value.map((item) => {
        if (item.channelId === id) {
          return data[0];
        }
        return item;
      });
      notice.success({
        title: "刷新成功"
      });
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
    const init = async () => {
      await getList();
      await getLiveInfo2();
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
    setInterval(
      () => {
        getLiveInfo2();
      },
      10 * 60 * 1e3
    );
    onDeactivated(() => {
      cleanInterval();
    });
    onActivated(() => {
      createInterval();
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
    const openSavePath = (path) => {
      window.api.openPath(window.path.dirname(path));
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
    const actionBtns = ref([{ label: "批量添加", key: "batchAdd" }]);
    const handleActionClick = (key) => {
      switch (key) {
        case "batchAdd":
          batchAdd();
          break;
        case void 0:
          add2();
          break;
      }
    };
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_0$1;
      const _component_n_select = __unplugin_components_0$2;
      const _component_n_button = Button;
      const _component_n_pagination = __unplugin_components_6;
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
            value: unref(params).recordStatus,
            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(params).recordStatus = $event),
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
          createVNode(_sfc_main$a, {
            modelValue: unref(visibleColumns),
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(visibleColumns) ? visibleColumns.value = $event : null),
            columns: columnConfig
          }, null, 8, ["modelValue"]),
          createVNode(_component_n_button, {
            type: "warning",
            onClick: _cache[7] || (_cache[7] = ($event) => getLiveInfo2(true))
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
            onSort: handleSort
          }, {
            action: withCtx(({ item }) => [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", {
                  class: "section",
                  onClick: ($event) => startRecord2(item.id)
                }, "开始录制", 8, _hoisted_4),
                createBaseVNode("div", {
                  class: "section",
                  onClick: ($event) => stopRecord2(item.id)
                }, "停止录制", 8, _hoisted_5),
                item?.recordHandle?.recorderType === "bililive" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "section",
                  onClick: ($event) => cut2(item.id)
                }, " 切割 ", 8, _hoisted_6)) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: "section",
                  onClick: ($event) => edit(item.id)
                }, "直播间设置", 8, _hoisted_7),
                createBaseVNode("div", {
                  class: "section",
                  onClick: ($event) => refresh(item.id)
                }, "刷新直播间信息", 8, _hoisted_8),
                item.recordHandle?.savePath && false ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: "section",
                  onClick: ($event) => open(item.id, item?.recordHandle?.url)
                }, " 打开直播 ", 8, _hoisted_9)) : createCommentVNode("", true),
                !unref(isWeb) && item.recordHandle?.savePath ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  class: "section",
                  onClick: ($event) => openSavePath(item.recordHandle?.savePath)
                }, " 打开录制文件夹 ", 8, _hoisted_10)) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: "section",
                  onClick: ($event) => toWebhook(item.channelId)
                }, "Webhook配置", 8, _hoisted_11),
                createBaseVNode("div", {
                  class: "section",
                  onClick: ($event) => viewHistory(item)
                }, "录制历史", 8, _hoisted_12),
                createBaseVNode("div", {
                  class: "section section-danger",
                  onClick: ($event) => remove2(item.id)
                }, "删除房间", 8, _hoisted_13)
              ])
            ]),
            _: 1
          }, 40, ["list", "sort-field", "sort-directions", "visible-columns"])),
          unref(pagination).pageCount > 1 ? (openBlock(), createElementBlock("div", _hoisted_14, [
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
              "page-sizes": [10, 20, 30, 40, 50, 100]
            }, null, 8, ["page", "page-size", "item-count"])
          ])) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createElementBlock("h1", _hoisted_15, "还木有添加直播捏，添加一个看看吧，支持斗鱼、虎牙、B站、抖音")),
        createVNode(addModal, {
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
        createVNode(_sfc_main$4, {
          id: unref(editId),
          visible: unref(videoModalVisible),
          "onUpdate:visible": _cache[13] || (_cache[13] = ($event) => isRef(videoModalVisible) ? videoModalVisible.value = $event : null),
          "video-url": unref(videoUrl)
        }, null, 8, ["id", "visible", "video-url"])
      ]);
    };
  }
});
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66c67d66"]]);
export {
  Index as default
};
