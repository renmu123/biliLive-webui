import { C as computed, F as h, L as init_runtime_core_esm_bundler, M as defineComponent, ft as init_reactivity_esm_bundler, ot as watchEffect, s as Transition, u as init_runtime_dom_esm_bundler, yt as ref } from "./request-CkCeAZAO.js";
import { V as useCompitable } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { Jr as pxfy, Mn as useThemeClass, Nn as useConfig, St as useTheme, Xr as c, Zr as cB, dt as exposedLoadingProps, ei as cM, f as spinLight, lt as fadeInTransition, ni as createKey, ut as Loading_default } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/spin/src/styles/index.cssr.mjs
var index_cssr_default = c([
	c("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),
	cB("spin-container", `
 position: relative;
 `, [cB("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [fadeInTransition()])]),
	cB("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),
	cB("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [cM("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]),
	cB("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),
	cB("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [cM("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/spin/src/Spin.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var STROKE_WIDTH = {
	small: 20,
	medium: 18,
	large: 16
};
var spinProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), {
	contentClass: String,
	contentStyle: [Object, String],
	description: String,
	size: {
		type: [String, Number],
		default: "medium"
	},
	show: {
		type: Boolean,
		default: true
	},
	rotate: {
		type: Boolean,
		default: true
	},
	spinning: {
		type: Boolean,
		validator: () => {
			return true;
		},
		default: void 0
	},
	delay: Number
}), exposedLoadingProps);
var Spin_default = defineComponent({
	name: "Spin",
	props: spinProps,
	slots: Object,
	setup(props) {
		const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
		const themeRef = useTheme("Spin", "-spin", index_cssr_default, spinLight, props, mergedClsPrefixRef);
		const cssVarsRef = computed(() => {
			const { size: spinSize } = props;
			const { common: { cubicBezierEaseInOut }, self } = themeRef.value;
			const { opacitySpinning, color, textColor } = self;
			return {
				"--n-bezier": cubicBezierEaseInOut,
				"--n-opacity-spinning": opacitySpinning,
				"--n-size": typeof spinSize === "number" ? pxfy(spinSize) : self[createKey("size", spinSize)],
				"--n-color": color,
				"--n-text-color": textColor
			};
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("spin", computed(() => {
			const { size } = props;
			return typeof size === "number" ? String(size) : size[0];
		}), cssVarsRef, props) : void 0;
		const compitableShow = useCompitable(props, ["spinning", "show"]);
		const activeRef = ref(false);
		watchEffect((onCleanup) => {
			let timerId;
			if (compitableShow.value) {
				const { delay } = props;
				if (delay) {
					timerId = window.setTimeout(() => {
						activeRef.value = true;
					}, delay);
					onCleanup(() => {
						clearTimeout(timerId);
					});
					return;
				}
			}
			activeRef.value = compitableShow.value;
		});
		return {
			mergedClsPrefix: mergedClsPrefixRef,
			active: activeRef,
			mergedStrokeWidth: computed(() => {
				const { strokeWidth } = props;
				if (strokeWidth !== void 0) return strokeWidth;
				const { size } = props;
				return STROKE_WIDTH[typeof size === "number" ? "medium" : size];
			}),
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
		};
	},
	render() {
		var _a, _b;
		const { $slots, mergedClsPrefix, description } = this;
		const rotate = $slots.icon && this.rotate;
		const descriptionNode = (description || $slots.description) && h("div", { class: `${mergedClsPrefix}-spin-description` }, description || ((_a = $slots.description) === null || _a === void 0 ? void 0 : _a.call($slots)));
		const icon = $slots.icon ? h("div", { class: [`${mergedClsPrefix}-spin-body`, this.themeClass] }, h("div", {
			class: [`${mergedClsPrefix}-spin`, rotate && `${mergedClsPrefix}-spin--rotate`],
			style: $slots.default ? "" : this.cssVars
		}, $slots.icon()), descriptionNode) : h("div", { class: [`${mergedClsPrefix}-spin-body`, this.themeClass] }, h(Loading_default, {
			clsPrefix: mergedClsPrefix,
			style: $slots.default ? "" : this.cssVars,
			stroke: this.stroke,
			"stroke-width": this.mergedStrokeWidth,
			radius: this.radius,
			scale: this.scale,
			class: `${mergedClsPrefix}-spin`
		}), descriptionNode);
		(_b = this.onRender) === null || _b === void 0 || _b.call(this);
		return $slots.default ? h("div", {
			class: [`${mergedClsPrefix}-spin-container`, this.themeClass],
			style: this.cssVars
		}, h("div", {
			class: [
				`${mergedClsPrefix}-spin-content`,
				this.active && `${mergedClsPrefix}-spin-content--spinning`,
				this.contentClass
			],
			style: this.contentStyle
		}, $slots), h(Transition, { name: "fade-in-transition" }, { default: () => this.active ? icon : null })) : icon;
	}
});
//#endregion
export { Spin_default as t };
