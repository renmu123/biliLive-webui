import { C as computed, F as h, L as init_runtime_core_esm_bundler, M as defineComponent, v as Fragment } from "./request-CkCeAZAO.js";
import { $r as cE, C as dividerLight, Mn as useThemeClass, Nn as useConfig, St as useTheme, Zr as cB, ei as cM, ti as cNotM } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/divider/src/styles/index.cssr.mjs
var index_cssr_default = cB("divider", `
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`, [
	cNotM("vertical", `
 margin-top: 24px;
 margin-bottom: 24px;
 `, [cNotM("no-title", `
 display: flex;
 align-items: center;
 `)]),
	cE("title", `
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),
	cM("title-position-left", [cE("line", [cM("left", { width: "28px" })])]),
	cM("title-position-right", [cE("line", [cM("right", { width: "28px" })])]),
	cM("dashed", [cE("line", `
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),
	cM("vertical", `
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),
	cE("line", `
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),
	cNotM("dashed", [cE("line", { backgroundColor: "var(--n-color)" })]),
	cM("dashed", [cE("line", { borderColor: "var(--n-color)" })]),
	cM("vertical", { backgroundColor: "var(--n-color)" })
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/divider/src/Divider.mjs
init_runtime_core_esm_bundler();
var dividerProps = Object.assign(Object.assign({}, useTheme.props), {
	titlePlacement: {
		type: String,
		default: "center"
	},
	dashed: Boolean,
	vertical: Boolean
});
var Divider_default = defineComponent({
	name: "Divider",
	props: dividerProps,
	setup(props) {
		const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
		const themeRef = useTheme("Divider", "-divider", index_cssr_default, dividerLight, props, mergedClsPrefixRef);
		const cssVarsRef = computed(() => {
			const { common: { cubicBezierEaseInOut }, self: { color, textColor, fontWeight } } = themeRef.value;
			return {
				"--n-bezier": cubicBezierEaseInOut,
				"--n-color": color,
				"--n-text-color": textColor,
				"--n-font-weight": fontWeight
			};
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("divider", void 0, cssVarsRef, props) : void 0;
		return {
			mergedClsPrefix: mergedClsPrefixRef,
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
		};
	},
	render() {
		var _a;
		const { $slots, titlePlacement, vertical, dashed, cssVars, mergedClsPrefix } = this;
		(_a = this.onRender) === null || _a === void 0 || _a.call(this);
		return h("div", {
			role: "separator",
			class: [
				`${mergedClsPrefix}-divider`,
				this.themeClass,
				{
					[`${mergedClsPrefix}-divider--vertical`]: vertical,
					[`${mergedClsPrefix}-divider--no-title`]: !$slots.default,
					[`${mergedClsPrefix}-divider--dashed`]: dashed,
					[`${mergedClsPrefix}-divider--title-position-${titlePlacement}`]: $slots.default && titlePlacement
				}
			],
			style: cssVars
		}, !vertical ? h("div", { class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--left` }) : null, !vertical && $slots.default ? h(Fragment, null, h("div", { class: `${mergedClsPrefix}-divider__title` }, this.$slots), h("div", { class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--right` })) : null);
	}
});
//#endregion
export { Divider_default as t };
