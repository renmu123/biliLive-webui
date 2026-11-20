import { C as computed, F as h, L as init_runtime_core_esm_bundler, M as defineComponent, V as mergeProps } from "./request-CkCeAZAO.js";
import { A as iconLight, Mn as useThemeClass, Nn as useConfig, St as useTheme, Xn as warn, Xr as c, Zr as cB, ei as cM } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/css/format-length.mjs
var pureNumberRegex = /^(\d|\.)+$/;
var numberRegex = /(\d|\.)+/;
function formatLength(length, { c = 1, offset = 0, attachPx = true } = {}) {
	if (typeof length === "number") {
		const result = (length + offset) * c;
		if (result === 0) return "0";
		return `${result}px`;
	} else if (typeof length === "string") {
		if (pureNumberRegex.test(length)) {
			const result = (Number(length) + offset) * c;
			if (attachPx) {
				if (result === 0) return "0";
				return `${result}px`;
			} else return `${result}`;
		} else {
			const result = numberRegex.exec(length);
			if (!result) return length;
			return length.replace(numberRegex, String((Number(result[0]) + offset) * c));
		}
	}
	return length;
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/icon/src/styles/index.cssr.mjs
var index_cssr_default = cB("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [
	cM("color-transition", { transition: "color .3s var(--n-bezier)" }),
	cM("depth", { color: "var(--n-color)" }, [c("svg", {
		opacity: "var(--n-opacity)",
		transition: "opacity .3s var(--n-bezier)"
	})]),
	c("svg", {
		height: "1em",
		width: "1em"
	})
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/icon/src/Icon.mjs
init_runtime_core_esm_bundler();
var iconProps = Object.assign(Object.assign({}, useTheme.props), {
	depth: [String, Number],
	size: [Number, String],
	color: String,
	component: [Object, Function]
});
var NIcon = defineComponent({
	_n_icon__: true,
	name: "Icon",
	inheritAttrs: false,
	props: iconProps,
	setup(props) {
		const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
		const themeRef = useTheme("Icon", "-icon", index_cssr_default, iconLight, props, mergedClsPrefixRef);
		const cssVarsRef = computed(() => {
			const { depth } = props;
			const { common: { cubicBezierEaseInOut }, self } = themeRef.value;
			if (depth !== void 0) {
				const { color, [`opacity${depth}Depth`]: opacity } = self;
				return {
					"--n-bezier": cubicBezierEaseInOut,
					"--n-color": color,
					"--n-opacity": opacity
				};
			}
			return {
				"--n-bezier": cubicBezierEaseInOut,
				"--n-color": "",
				"--n-opacity": ""
			};
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("icon", computed(() => `${props.depth || "d"}`), cssVarsRef, props) : void 0;
		return {
			mergedClsPrefix: mergedClsPrefixRef,
			mergedStyle: computed(() => {
				const { size, color } = props;
				return {
					fontSize: formatLength(size),
					color
				};
			}),
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
		};
	},
	render() {
		var _a;
		const { $parent, depth, mergedClsPrefix, component, onRender, themeClass } = this;
		if ((_a = $parent === null || $parent === void 0 ? void 0 : $parent.$options) === null || _a === void 0 ? void 0 : _a._n_icon__) warn("icon", "don't wrap `n-icon` inside `n-icon`");
		onRender === null || onRender === void 0 || onRender();
		return h("i", mergeProps(this.$attrs, {
			role: "img",
			class: [
				`${mergedClsPrefix}-icon`,
				themeClass,
				{
					[`${mergedClsPrefix}-icon--depth`]: depth,
					[`${mergedClsPrefix}-icon--color-transition`]: depth !== void 0
				}
			],
			style: [this.cssVars, this.mergedStyle]
		}), component ? h(component) : this.$slots);
	}
});
//#endregion
export { formatLength as n, NIcon as t };
