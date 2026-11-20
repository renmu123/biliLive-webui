import { C as computed, F as h, G as onBeforeUnmount, L as init_runtime_core_esm_bundler, M as defineComponent, Q as provide, R as inject, St as toRef, V as mergeProps, at as watch, ct as withDirectives, ft as init_reactivity_esm_bundler, m as vShow, ot as watchEffect, s as Transition, u as init_runtime_dom_esm_bundler, yt as ref } from "./request-CkCeAZAO.js";
import { H as useMergedState } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { n as formatLength } from "./Icon-9AfBo3jH.js";
import { $r as cE, Jn as call, Mn as useThemeClass, Nn as useConfig, S as drawerLight, St as useTheme, Tt as useRtl, Xr as c, Yn as throwError, Zn as eventEffectNotPerformed, Zr as cB, ar as zindexable, dr as useIsComposing, ei as cM, er as FocusTrap, gr as drawerInjectionKey, hr as drawerBodyInjectionKey, lt as fadeInTransition, mr as modalBodyInjectionKey, or as clickoutside, pr as popoverBodyInjectionKey, pt as Close_default, rr as src_default, st as Scrollbar, ur as useLockHtmlScroll, vr as isMounted, wt as _common_default } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/drawer/src/DrawerBodyWrapper.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var DrawerBodyWrapper_default = defineComponent({
	name: "NDrawerContent",
	inheritAttrs: false,
	props: {
		blockScroll: Boolean,
		show: {
			type: Boolean,
			default: void 0
		},
		displayDirective: {
			type: String,
			required: true
		},
		placement: {
			type: String,
			required: true
		},
		contentClass: String,
		contentStyle: [Object, String],
		nativeScrollbar: {
			type: Boolean,
			required: true
		},
		scrollbarProps: Object,
		trapFocus: {
			type: Boolean,
			default: true
		},
		autoFocus: {
			type: Boolean,
			default: true
		},
		showMask: {
			type: [Boolean, String],
			required: true
		},
		maxWidth: Number,
		maxHeight: Number,
		minWidth: Number,
		minHeight: Number,
		resizable: Boolean,
		onClickoutside: Function,
		onAfterLeave: Function,
		onAfterEnter: Function,
		onEsc: Function
	},
	setup(props) {
		const displayedRef = ref(!!props.show);
		const bodyRef = ref(null);
		const NDrawer = inject(drawerInjectionKey);
		let startPosition = 0;
		let memoizedBodyStyleCursor = "";
		let hoverTimerId = null;
		const isHoverOnResizeTriggerRef = ref(false);
		const isDraggingRef = ref(false);
		const isVertical = computed(() => {
			return props.placement === "top" || props.placement === "bottom";
		});
		const { mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
		const rtlEnabledRef = useRtl("Drawer", mergedRtlRef, mergedClsPrefixRef);
		const handleBodyMouseleave = handleBodyMouseup;
		const handleMousedownResizeTrigger = (e) => {
			isDraggingRef.value = true;
			startPosition = isVertical.value ? e.clientY : e.clientX;
			memoizedBodyStyleCursor = document.body.style.cursor;
			document.body.style.cursor = isVertical.value ? "ns-resize" : "ew-resize";
			document.body.addEventListener("mousemove", handleBodyMousemove);
			document.body.addEventListener("mouseleave", handleBodyMouseleave);
			document.body.addEventListener("mouseup", handleBodyMouseup);
		};
		const handleMouseenterResizeTrigger = () => {
			if (hoverTimerId !== null) {
				window.clearTimeout(hoverTimerId);
				hoverTimerId = null;
			}
			if (isDraggingRef.value) isHoverOnResizeTriggerRef.value = true;
			else hoverTimerId = window.setTimeout(() => {
				isHoverOnResizeTriggerRef.value = true;
			}, 300);
		};
		const handleMouseleaveResizeTrigger = () => {
			if (hoverTimerId !== null) {
				window.clearTimeout(hoverTimerId);
				hoverTimerId = null;
			}
			isHoverOnResizeTriggerRef.value = false;
		};
		const { doUpdateHeight, doUpdateWidth } = NDrawer;
		const regulateWidth = (size) => {
			const { maxWidth } = props;
			if (maxWidth && size > maxWidth) return maxWidth;
			const { minWidth } = props;
			if (minWidth && size < minWidth) return minWidth;
			return size;
		};
		const regulateHeight = (size) => {
			const { maxHeight } = props;
			if (maxHeight && size > maxHeight) return maxHeight;
			const { minHeight } = props;
			if (minHeight && size < minHeight) return minHeight;
			return size;
		};
		function handleBodyMousemove(e) {
			var _a, _b;
			if (isDraggingRef.value) {
				if (isVertical.value) {
					let height = ((_a = bodyRef.value) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
					const increment = startPosition - e.clientY;
					height += props.placement === "bottom" ? increment : -increment;
					height = regulateHeight(height);
					doUpdateHeight(height);
					startPosition = e.clientY;
				} else {
					let width = ((_b = bodyRef.value) === null || _b === void 0 ? void 0 : _b.offsetWidth) || 0;
					const increment = startPosition - e.clientX;
					width += props.placement === "right" ? increment : -increment;
					width = regulateWidth(width);
					doUpdateWidth(width);
					startPosition = e.clientX;
				}
			}
		}
		function handleBodyMouseup() {
			if (isDraggingRef.value) {
				startPosition = 0;
				isDraggingRef.value = false;
				document.body.style.cursor = memoizedBodyStyleCursor;
				document.body.removeEventListener("mousemove", handleBodyMousemove);
				document.body.removeEventListener("mouseup", handleBodyMouseup);
				document.body.removeEventListener("mouseleave", handleBodyMouseleave);
			}
		}
		watchEffect(() => {
			if (props.show) displayedRef.value = true;
		});
		watch(() => props.show, (value) => {
			if (!value) handleBodyMouseup();
		});
		onBeforeUnmount(() => {
			handleBodyMouseup();
		});
		const bodyDirectivesRef = computed(() => {
			const { show } = props;
			const directives = [[vShow, show]];
			if (!props.showMask) directives.push([
				clickoutside,
				props.onClickoutside,
				void 0,
				{ capture: true }
			]);
			return directives;
		});
		function handleAfterLeave() {
			var _a;
			displayedRef.value = false;
			(_a = props.onAfterLeave) === null || _a === void 0 || _a.call(props);
		}
		useLockHtmlScroll(computed(() => props.blockScroll && displayedRef.value));
		provide(drawerBodyInjectionKey, bodyRef);
		provide(popoverBodyInjectionKey, null);
		provide(modalBodyInjectionKey, null);
		return {
			bodyRef,
			rtlEnabled: rtlEnabledRef,
			mergedClsPrefix: NDrawer.mergedClsPrefixRef,
			isMounted: NDrawer.isMountedRef,
			mergedTheme: NDrawer.mergedThemeRef,
			displayed: displayedRef,
			transitionName: computed(() => {
				return {
					right: "slide-in-from-right-transition",
					left: "slide-in-from-left-transition",
					top: "slide-in-from-top-transition",
					bottom: "slide-in-from-bottom-transition"
				}[props.placement];
			}),
			handleAfterLeave,
			bodyDirectives: bodyDirectivesRef,
			handleMousedownResizeTrigger,
			handleMouseenterResizeTrigger,
			handleMouseleaveResizeTrigger,
			isDragging: isDraggingRef,
			isHoverOnResizeTrigger: isHoverOnResizeTriggerRef
		};
	},
	render() {
		const { $slots, mergedClsPrefix } = this;
		return this.displayDirective === "show" || this.displayed || this.show ? withDirectives(h("div", { role: "none" }, h(FocusTrap, {
			disabled: !this.showMask || !this.trapFocus,
			active: this.show,
			autoFocus: this.autoFocus,
			onEsc: this.onEsc
		}, { default: () => h(Transition, {
			name: this.transitionName,
			appear: this.isMounted,
			onAfterEnter: this.onAfterEnter,
			onAfterLeave: this.handleAfterLeave
		}, { default: () => withDirectives(h("div", mergeProps(this.$attrs, {
			role: "dialog",
			ref: "bodyRef",
			"aria-modal": "true",
			class: [
				`${mergedClsPrefix}-drawer`,
				this.rtlEnabled && `${mergedClsPrefix}-drawer--rtl`,
				`${mergedClsPrefix}-drawer--${this.placement}-placement`,
				this.isDragging && `${mergedClsPrefix}-drawer--unselectable`,
				this.nativeScrollbar && `${mergedClsPrefix}-drawer--native-scrollbar`
			]
		}), [this.resizable ? h("div", {
			class: [`${mergedClsPrefix}-drawer__resize-trigger`, (this.isDragging || this.isHoverOnResizeTrigger) && `${mergedClsPrefix}-drawer__resize-trigger--hover`],
			onMouseenter: this.handleMouseenterResizeTrigger,
			onMouseleave: this.handleMouseleaveResizeTrigger,
			onMousedown: this.handleMousedownResizeTrigger
		}) : null, this.nativeScrollbar ? h("div", {
			class: [`${mergedClsPrefix}-drawer-content-wrapper`, this.contentClass],
			style: this.contentStyle,
			role: "none"
		}, $slots) : h(Scrollbar, Object.assign({}, this.scrollbarProps, {
			contentStyle: this.contentStyle,
			contentClass: [`${mergedClsPrefix}-drawer-content-wrapper`, this.contentClass],
			theme: this.mergedTheme.peers.Scrollbar,
			themeOverrides: this.mergedTheme.peerOverrides.Scrollbar
		}), $slots)]), this.bodyDirectives) }) })), [[vShow, this.displayDirective === "if" || this.displayed || this.show]]) : null;
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_styles/transitions/slide-in-from-bottom.mjs
var { cubicBezierEaseIn: cubicBezierEaseIn$3, cubicBezierEaseOut: cubicBezierEaseOut$3 } = _common_default;
function slideInFromBottomTransition({ duration = "0.3s", leaveDuration = "0.2s", name = "slide-in-from-bottom" } = {}) {
	return [
		c(`&.${name}-transition-leave-active`, { transition: `transform ${leaveDuration} ${cubicBezierEaseIn$3}` }),
		c(`&.${name}-transition-enter-active`, { transition: `transform ${duration} ${cubicBezierEaseOut$3}` }),
		c(`&.${name}-transition-enter-to`, { transform: "translateY(0)" }),
		c(`&.${name}-transition-enter-from`, { transform: "translateY(100%)" }),
		c(`&.${name}-transition-leave-from`, { transform: "translateY(0)" }),
		c(`&.${name}-transition-leave-to`, { transform: "translateY(100%)" })
	];
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_styles/transitions/slide-in-from-left.mjs
var { cubicBezierEaseIn: cubicBezierEaseIn$2, cubicBezierEaseOut: cubicBezierEaseOut$2 } = _common_default;
function slideInFromLeftTransition({ duration = "0.3s", leaveDuration = "0.2s", name = "slide-in-from-left" } = {}) {
	return [
		c(`&.${name}-transition-leave-active`, { transition: `transform ${leaveDuration} ${cubicBezierEaseIn$2}` }),
		c(`&.${name}-transition-enter-active`, { transition: `transform ${duration} ${cubicBezierEaseOut$2}` }),
		c(`&.${name}-transition-enter-to`, { transform: "translateX(0)" }),
		c(`&.${name}-transition-enter-from`, { transform: "translateX(-100%)" }),
		c(`&.${name}-transition-leave-from`, { transform: "translateX(0)" }),
		c(`&.${name}-transition-leave-to`, { transform: "translateX(-100%)" })
	];
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_styles/transitions/slide-in-from-right.mjs
var { cubicBezierEaseIn: cubicBezierEaseIn$1, cubicBezierEaseOut: cubicBezierEaseOut$1 } = _common_default;
function slideInFromRightTransition({ duration = "0.3s", leaveDuration = "0.2s", name = "slide-in-from-right" } = {}) {
	return [
		c(`&.${name}-transition-leave-active`, { transition: `transform ${leaveDuration} ${cubicBezierEaseIn$1}` }),
		c(`&.${name}-transition-enter-active`, { transition: `transform ${duration} ${cubicBezierEaseOut$1}` }),
		c(`&.${name}-transition-enter-to`, { transform: "translateX(0)" }),
		c(`&.${name}-transition-enter-from`, { transform: "translateX(100%)" }),
		c(`&.${name}-transition-leave-from`, { transform: "translateX(0)" }),
		c(`&.${name}-transition-leave-to`, { transform: "translateX(100%)" })
	];
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_styles/transitions/slide-in-from-top.mjs
var { cubicBezierEaseIn, cubicBezierEaseOut } = _common_default;
function slideInFromTopTransition({ duration = "0.3s", leaveDuration = "0.2s", name = "slide-in-from-top" } = {}) {
	return [
		c(`&.${name}-transition-leave-active`, { transition: `transform ${leaveDuration} ${cubicBezierEaseIn}` }),
		c(`&.${name}-transition-enter-active`, { transition: `transform ${duration} ${cubicBezierEaseOut}` }),
		c(`&.${name}-transition-enter-to`, { transform: "translateY(0)" }),
		c(`&.${name}-transition-enter-from`, { transform: "translateY(-100%)" }),
		c(`&.${name}-transition-leave-from`, { transform: "translateY(0)" }),
		c(`&.${name}-transition-leave-to`, { transform: "translateY(-100%)" })
	];
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/drawer/src/styles/index.cssr.mjs
var index_cssr_default = c([
	cB("drawer", `
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `, [
		slideInFromRightTransition(),
		slideInFromLeftTransition(),
		slideInFromTopTransition(),
		slideInFromBottomTransition(),
		cM("unselectable", `
 user-select: none; 
 -webkit-user-select: none;
 `),
		cM("native-scrollbar", [cB("drawer-content-wrapper", `
 overflow: auto;
 height: 100%;
 `)]),
		cE("resize-trigger", `
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `, [cM("hover", `
 background-color: var(--n-resize-trigger-color-hover);
 `)]),
		cB("drawer-content-wrapper", `
 box-sizing: border-box;
 `),
		cB("drawer-content", `
 height: 100%;
 display: flex;
 flex-direction: column;
 `, [
			cM("native-scrollbar", [cB("drawer-body-content-wrapper", `
 height: 100%;
 overflow: auto;
 `)]),
			cB("drawer-body", `
 flex: 1 0 0;
 overflow: hidden;
 `),
			cB("drawer-body-content-wrapper", `
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),
			cB("drawer-header", `
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `, [cE("main", `
 flex: 1;
 `), cE("close", `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),
			cB("drawer-footer", `
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)
		]),
		cM("right-placement", `
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `, [cE("resize-trigger", `
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),
		cM("left-placement", `
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `, [cE("resize-trigger", `
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),
		cM("top-placement", `
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `, [cE("resize-trigger", `
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),
		cM("bottom-placement", `
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `, [cE("resize-trigger", `
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])
	]),
	c("body", [c(">", [cB("drawer-container", `
 position: fixed;
 `)])]),
	cB("drawer-container", `
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `, [c("> *", `
 pointer-events: all;
 `)]),
	cB("drawer-mask", `
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [cM("invisible", `
 background-color: rgba(0, 0, 0, 0)
 `), fadeInTransition({
		enterDuration: "0.2s",
		leaveDuration: "0.2s",
		enterCubicBezier: "var(--n-bezier-in)",
		leaveCubicBezier: "var(--n-bezier-out)"
	})])
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/drawer/src/Drawer.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var drawerProps = Object.assign(Object.assign({}, useTheme.props), {
	show: Boolean,
	width: [Number, String],
	height: [Number, String],
	placement: {
		type: String,
		default: "right"
	},
	maskClosable: {
		type: Boolean,
		default: true
	},
	showMask: {
		type: [Boolean, String],
		default: true
	},
	to: [String, Object],
	displayDirective: {
		type: String,
		default: "if"
	},
	nativeScrollbar: {
		type: Boolean,
		default: true
	},
	zIndex: Number,
	onMaskClick: Function,
	scrollbarProps: Object,
	contentClass: String,
	contentStyle: [Object, String],
	trapFocus: {
		type: Boolean,
		default: true
	},
	onEsc: Function,
	autoFocus: {
		type: Boolean,
		default: true
	},
	closeOnEsc: {
		type: Boolean,
		default: true
	},
	blockScroll: {
		type: Boolean,
		default: true
	},
	maxWidth: Number,
	maxHeight: Number,
	minWidth: Number,
	minHeight: Number,
	resizable: Boolean,
	defaultWidth: {
		type: [Number, String],
		default: 251
	},
	defaultHeight: {
		type: [Number, String],
		default: 251
	},
	onUpdateWidth: [Function, Array],
	onUpdateHeight: [Function, Array],
	"onUpdate:width": [Function, Array],
	"onUpdate:height": [Function, Array],
	"onUpdate:show": [Function, Array],
	onUpdateShow: [Function, Array],
	onAfterEnter: Function,
	onAfterLeave: Function,
	/** @deprecated */
	drawerStyle: [String, Object],
	drawerClass: String,
	target: null,
	onShow: Function,
	onHide: Function
});
var Drawer_default = defineComponent({
	name: "Drawer",
	inheritAttrs: false,
	props: drawerProps,
	setup(props) {
		const { mergedClsPrefixRef, namespaceRef, inlineThemeDisabled } = useConfig(props);
		const isMountedRef = isMounted();
		const themeRef = useTheme("Drawer", "-drawer", index_cssr_default, drawerLight, props, mergedClsPrefixRef);
		const uncontrolledWidthRef = ref(props.defaultWidth);
		const uncontrolledHeightRef = ref(props.defaultHeight);
		const mergedWidthRef = useMergedState(toRef(props, "width"), uncontrolledWidthRef);
		const mergedHeightRef = useMergedState(toRef(props, "height"), uncontrolledHeightRef);
		const styleWidthRef = computed(() => {
			const { placement } = props;
			if (placement === "top" || placement === "bottom") return "";
			return formatLength(mergedWidthRef.value);
		});
		const styleHeightRef = computed(() => {
			const { placement } = props;
			if (placement === "left" || placement === "right") return "";
			return formatLength(mergedHeightRef.value);
		});
		const doUpdateWidth = (value) => {
			const { onUpdateWidth, "onUpdate:width": _onUpdateWidth } = props;
			if (onUpdateWidth) call(onUpdateWidth, value);
			if (_onUpdateWidth) call(_onUpdateWidth, value);
			uncontrolledWidthRef.value = value;
		};
		const doUpdateHeight = (value) => {
			const { onUpdateHeight, "onUpdate:width": _onUpdateHeight } = props;
			if (onUpdateHeight) call(onUpdateHeight, value);
			if (_onUpdateHeight) call(_onUpdateHeight, value);
			uncontrolledHeightRef.value = value;
		};
		const mergedBodyStyleRef = computed(() => {
			return [{
				width: styleWidthRef.value,
				height: styleHeightRef.value
			}, props.drawerStyle || ""];
		});
		function handleMaskClick(e) {
			const { onMaskClick, maskClosable } = props;
			if (maskClosable) doUpdateShow(false);
			if (onMaskClick) onMaskClick(e);
		}
		function handleOutsideClick(e) {
			handleMaskClick(e);
		}
		const isComposingRef = useIsComposing();
		function handleEsc(e) {
			var _a;
			(_a = props.onEsc) === null || _a === void 0 || _a.call(props);
			if (props.show && props.closeOnEsc && eventEffectNotPerformed(e)) {
				if (!isComposingRef.value) doUpdateShow(false);
			}
		}
		function doUpdateShow(show) {
			const { onHide, onUpdateShow, "onUpdate:show": _onUpdateShow } = props;
			if (onUpdateShow) call(onUpdateShow, show);
			if (_onUpdateShow) call(_onUpdateShow, show);
			if (onHide && !show) call(onHide, show);
		}
		provide(drawerInjectionKey, {
			isMountedRef,
			mergedThemeRef: themeRef,
			mergedClsPrefixRef,
			doUpdateShow,
			doUpdateHeight,
			doUpdateWidth
		});
		const cssVarsRef = computed(() => {
			const { common: { cubicBezierEaseInOut, cubicBezierEaseIn, cubicBezierEaseOut }, self: { color, textColor, boxShadow, lineHeight, headerPadding, footerPadding, borderRadius, bodyPadding, titleFontSize, titleTextColor, titleFontWeight, headerBorderBottom, footerBorderTop, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, closeIconSize, closeSize, closeBorderRadius, resizableTriggerColorHover } } = themeRef.value;
			return {
				"--n-line-height": lineHeight,
				"--n-color": color,
				"--n-border-radius": borderRadius,
				"--n-text-color": textColor,
				"--n-box-shadow": boxShadow,
				"--n-bezier": cubicBezierEaseInOut,
				"--n-bezier-out": cubicBezierEaseOut,
				"--n-bezier-in": cubicBezierEaseIn,
				"--n-header-padding": headerPadding,
				"--n-body-padding": bodyPadding,
				"--n-footer-padding": footerPadding,
				"--n-title-text-color": titleTextColor,
				"--n-title-font-size": titleFontSize,
				"--n-title-font-weight": titleFontWeight,
				"--n-header-border-bottom": headerBorderBottom,
				"--n-footer-border-top": footerBorderTop,
				"--n-close-icon-color": closeIconColor,
				"--n-close-icon-color-hover": closeIconColorHover,
				"--n-close-icon-color-pressed": closeIconColorPressed,
				"--n-close-size": closeSize,
				"--n-close-color-hover": closeColorHover,
				"--n-close-color-pressed": closeColorPressed,
				"--n-close-icon-size": closeIconSize,
				"--n-close-border-radius": closeBorderRadius,
				"--n-resize-trigger-color-hover": resizableTriggerColorHover
			};
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("drawer", void 0, cssVarsRef, props) : void 0;
		return {
			mergedClsPrefix: mergedClsPrefixRef,
			namespace: namespaceRef,
			mergedBodyStyle: mergedBodyStyleRef,
			handleOutsideClick,
			handleMaskClick,
			handleEsc,
			mergedTheme: themeRef,
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
			isMounted: isMountedRef
		};
	},
	render() {
		const { mergedClsPrefix } = this;
		return h(src_default, {
			to: this.to,
			show: this.show
		}, { default: () => {
			var _a;
			(_a = this.onRender) === null || _a === void 0 || _a.call(this);
			return withDirectives(h("div", {
				class: [
					`${mergedClsPrefix}-drawer-container`,
					this.namespace,
					this.themeClass
				],
				style: this.cssVars,
				role: "none"
			}, this.showMask ? h(Transition, {
				name: "fade-in-transition",
				appear: this.isMounted
			}, { default: () => this.show ? h("div", {
				"aria-hidden": true,
				class: [`${mergedClsPrefix}-drawer-mask`, this.showMask === "transparent" && `${mergedClsPrefix}-drawer-mask--invisible`],
				onClick: this.handleMaskClick
			}) : null }) : null, h(DrawerBodyWrapper_default, Object.assign({}, this.$attrs, {
				class: [this.drawerClass, this.$attrs.class],
				style: [this.mergedBodyStyle, this.$attrs.style],
				blockScroll: this.blockScroll,
				contentStyle: this.contentStyle,
				contentClass: this.contentClass,
				placement: this.placement,
				scrollbarProps: this.scrollbarProps,
				show: this.show,
				displayDirective: this.displayDirective,
				nativeScrollbar: this.nativeScrollbar,
				onAfterEnter: this.onAfterEnter,
				onAfterLeave: this.onAfterLeave,
				trapFocus: this.trapFocus,
				autoFocus: this.autoFocus,
				resizable: this.resizable,
				maxHeight: this.maxHeight,
				minHeight: this.minHeight,
				maxWidth: this.maxWidth,
				minWidth: this.minWidth,
				showMask: this.showMask,
				onEsc: this.handleEsc,
				onClickoutside: this.handleOutsideClick
			}), this.$slots)), [[zindexable, {
				zIndex: this.zIndex,
				enabled: this.show
			}]]);
		} });
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/drawer/src/DrawerContent.mjs
init_runtime_core_esm_bundler();
var DrawerContent_default = defineComponent({
	name: "DrawerContent",
	props: {
		title: String,
		headerClass: String,
		headerStyle: [Object, String],
		footerClass: String,
		footerStyle: [Object, String],
		bodyClass: String,
		bodyStyle: [Object, String],
		bodyContentClass: String,
		bodyContentStyle: [Object, String],
		nativeScrollbar: {
			type: Boolean,
			default: true
		},
		scrollbarProps: Object,
		closable: Boolean
	},
	slots: Object,
	setup() {
		const NDrawer = inject(drawerInjectionKey, null);
		if (!NDrawer) throwError("drawer-content", "`n-drawer-content` must be placed inside `n-drawer`.");
		const { doUpdateShow } = NDrawer;
		function handleCloseClick() {
			doUpdateShow(false);
		}
		return {
			handleCloseClick,
			mergedTheme: NDrawer.mergedThemeRef,
			mergedClsPrefix: NDrawer.mergedClsPrefixRef
		};
	},
	render() {
		const { title, mergedClsPrefix, nativeScrollbar, mergedTheme, bodyClass, bodyStyle, bodyContentClass, bodyContentStyle, headerClass, headerStyle, footerClass, footerStyle, scrollbarProps, closable, $slots } = this;
		return h("div", {
			role: "none",
			class: [`${mergedClsPrefix}-drawer-content`, nativeScrollbar && `${mergedClsPrefix}-drawer-content--native-scrollbar`]
		}, $slots.header || title || closable ? h("div", {
			class: [`${mergedClsPrefix}-drawer-header`, headerClass],
			style: headerStyle,
			role: "none"
		}, h("div", {
			class: `${mergedClsPrefix}-drawer-header__main`,
			role: "heading",
			"aria-level": "1"
		}, $slots.header !== void 0 ? $slots.header() : title), closable && h(Close_default, {
			onClick: this.handleCloseClick,
			clsPrefix: mergedClsPrefix,
			class: `${mergedClsPrefix}-drawer-header__close`,
			absolute: true
		})) : null, nativeScrollbar ? h("div", {
			class: [`${mergedClsPrefix}-drawer-body`, bodyClass],
			style: bodyStyle,
			role: "none"
		}, h("div", {
			class: [`${mergedClsPrefix}-drawer-body-content-wrapper`, bodyContentClass],
			style: bodyContentStyle,
			role: "none"
		}, $slots)) : h(Scrollbar, Object.assign({
			themeOverrides: mergedTheme.peerOverrides.Scrollbar,
			theme: mergedTheme.peers.Scrollbar
		}, scrollbarProps, {
			class: `${mergedClsPrefix}-drawer-body`,
			contentClass: [`${mergedClsPrefix}-drawer-body-content-wrapper`, bodyContentClass],
			contentStyle: bodyContentStyle
		}), $slots), $slots.footer ? h("div", {
			class: [`${mergedClsPrefix}-drawer-footer`, footerClass],
			style: footerStyle,
			role: "none"
		}, $slots.footer()) : null);
	}
});
//#endregion
export { Drawer_default as n, DrawerContent_default as t };
