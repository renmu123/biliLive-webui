import { C as computed, F as h, L as init_runtime_core_esm_bundler, M as defineComponent, V as mergeProps, ft as init_reactivity_esm_bundler, yt as ref } from "./request-CkCeAZAO.js";
import { $ as fadeInHeightExpandTransition, $r as cE, Bn as resolveWrappedSlot, Mn as useThemeClass, Nn as useConfig, Rn as resolveSlot, St as useTheme, Tt as useRtl, Xr as c, Zr as cB, _t as Info_default, ei as cM, et as alertLight, ft as FadeInExpandTransition_default, gt as Success_default, ht as Warning_default, ni as createKey, pt as Close_default, qr as getMargin, vt as Error_default, xt as Icon_default } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/alert/src/styles/index.cssr.mjs
var index_cssr_default = cB("alert", `
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
	cE("icon", { color: "var(--n-icon-color)" }),
	cB("alert-body", { padding: "var(--n-padding)" }, [cE("title", { color: "var(--n-title-text-color)" }), cE("content", { color: "var(--n-content-text-color)" })]),
	fadeInHeightExpandTransition({
		originalTransition: "transform .3s var(--n-bezier)",
		enterToProps: { transform: "scale(1)" },
		leaveToProps: { transform: "scale(0.9)" }
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
	cM("show-icon", [cB("alert-body", { paddingLeft: "calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))" })]),
	cM("right-adjust", [cB("alert-body", { paddingRight: "calc(var(--n-close-size) + var(--n-padding) + 2px)" })]),
	cB("alert-body", `
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `, [cE("title", `
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `, [c("& +", [cE("content", { marginTop: "9px" })])]), cE("content", {
		transition: "color .3s var(--n-bezier)",
		fontSize: "var(--n-font-size)"
	})]),
	cE("icon", { transition: "color .3s var(--n-bezier)" })
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/alert/src/Alert.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var alertProps = Object.assign(Object.assign({}, useTheme.props), {
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
var Alert_default = defineComponent({
	name: "Alert",
	inheritAttrs: false,
	props: alertProps,
	slots: Object,
	setup(props) {
		const { mergedClsPrefixRef, mergedBorderedRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
		const themeRef = useTheme("Alert", "-alert", index_cssr_default, alertLight, props, mergedClsPrefixRef);
		const rtlEnabledRef = useRtl("Alert", mergedRtlRef, mergedClsPrefixRef);
		const cssVarsRef = computed(() => {
			const { common: { cubicBezierEaseInOut }, self } = themeRef.value;
			const { fontSize, borderRadius, titleFontWeight, lineHeight, iconSize, iconMargin, iconMarginRtl, closeIconSize, closeBorderRadius, closeSize, closeMargin, closeMarginRtl, padding } = self;
			const { type } = props;
			const { left, right } = getMargin(iconMargin);
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
			const { onAfterLeave, onAfterHide } = props;
			if (onAfterLeave) onAfterLeave();
			if (onAfterHide) onAfterHide();
		};
		const handleCloseClick = () => {
			var _a;
			Promise.resolve((_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props)).then((result) => {
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
		(_a = this.onRender) === null || _a === void 0 || _a.call(this);
		return h(FadeInExpandTransition_default, { onAfterLeave: this.handleAfterLeave }, { default: () => {
			const { mergedClsPrefix, $slots } = this;
			const attrs = {
				class: [
					`${mergedClsPrefix}-alert`,
					this.themeClass,
					this.closable && `${mergedClsPrefix}-alert--closable`,
					this.showIcon && `${mergedClsPrefix}-alert--show-icon`,
					!this.title && this.closable && `${mergedClsPrefix}-alert--right-adjust`,
					this.rtlEnabled && `${mergedClsPrefix}-alert--rtl`
				],
				style: this.cssVars,
				role: "alert"
			};
			return this.visible ? h("div", Object.assign({}, mergeProps(this.$attrs, attrs)), this.closable && h(Close_default, {
				clsPrefix: mergedClsPrefix,
				class: `${mergedClsPrefix}-alert__close`,
				onClick: this.handleCloseClick
			}), this.bordered && h("div", { class: `${mergedClsPrefix}-alert__border` }), this.showIcon && h("div", {
				class: `${mergedClsPrefix}-alert__icon`,
				"aria-hidden": "true"
			}, resolveSlot($slots.icon, () => [h(Icon_default, { clsPrefix: mergedClsPrefix }, { default: () => {
				switch (this.type) {
					case "success": return h(Success_default, null);
					case "info": return h(Info_default, null);
					case "warning": return h(Warning_default, null);
					case "error": return h(Error_default, null);
					default: return null;
				}
			} })])), h("div", { class: [`${mergedClsPrefix}-alert-body`, this.mergedBordered && `${mergedClsPrefix}-alert-body--bordered`] }, resolveWrappedSlot($slots.header, (children) => {
				const mergedChildren = children || this.title;
				return mergedChildren ? h("div", { class: `${mergedClsPrefix}-alert-body__title` }, mergedChildren) : null;
			}), $slots.default && h("div", { class: `${mergedClsPrefix}-alert-body__content` }, $slots))) : null;
		} });
	}
});
//#endregion
export { Alert_default as t };
