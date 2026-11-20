import { C as computed, F as h, G as onBeforeUnmount, H as nextTick, J as onMounted, L as init_runtime_core_esm_bundler, M as defineComponent, N as getCurrentInstance, Q as provide, R as inject, S as cloneVNode, St as toRef, V as mergeProps, at as watch, ct as withDirectives, ft as init_reactivity_esm_bundler, m as vShow, ot as watchEffect, s as Transition, u as init_runtime_dom_esm_bundler, v as Fragment, x as Text, yt as ref } from "./request-CkCeAZAO.js";
import { H as useMergedState, V as useCompitable } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { n as formatLength } from "./Icon-9AfBo3jH.js";
import { n as getAllKeys, s as keys, t as _getTag_default } from "./_getTag-C1EyIWSB.js";
import { $r as cE, $t as eq, Bn as resolveWrappedSlot, Cr as off, Dt as baseFor, Ft as toString, Gn as keep, Gt as isArguments, It as MapCache, Jn as call, Jt as isArrayLike, Kn as getFirstSlotVNode, Ln as isSlotEmpty, Mn as useThemeClass, Nn as useConfig, Nt as Stack, Qr as cCB, St as useTheme, Tt as useRtl, Vt as isTypedArray, Wt as isBuffer, Xr as c$1, Yr as getPreciseEventTarget, Yt as isLength, Zr as cB, _r as createInjectionKey, ai as CssRender, an as isObject, ar as zindexable, br as isBrowser, cn as isSymbol, cr as getSlot, ct as XScrollbar, dn as Symbol, ei as cM, en as isIndex, er as FocusTrap, hr as drawerBodyInjectionKey, in as identity, ir as useSsrAdapter, jt as Uint8Array, ln as isObjectLike, mr as modalBodyInjectionKey, on as isArray, or as clickoutside, pr as popoverBodyInjectionKey, rr as src_default, rt as popoverLight, sn as arrayMap, sr as getFirstVNode, ti as cNotM, vr as isMounted, wr as on, xr as useMemo } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/seemly@0.3.10/node_modules/seemly/es/animation/next-frame-once.js
var onceCbs = [];
var paramsMap = /* @__PURE__ */ new WeakMap();
function flushOnceCallbacks() {
	onceCbs.forEach((cb) => cb(...paramsMap.get(cb)));
	onceCbs = [];
}
function beforeNextFrameOnce(cb, ...params) {
	paramsMap.set(cb, params);
	if (onceCbs.includes(cb)) return;
	onceCbs.push(cb) === 1 && requestAnimationFrame(flushOnceCallbacks);
}
//#endregion
//#region ../../node_modules/.pnpm/vooks@0.2.12_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vooks/es/on-fonts-ready.js
init_runtime_core_esm_bundler();
var fontsReady;
var isFontReady;
var init = () => {
	var _a, _b;
	fontsReady = isBrowser ? (_b = (_a = document) === null || _a === void 0 ? void 0 : _a.fonts) === null || _b === void 0 ? void 0 : _b.ready : void 0;
	isFontReady = false;
	/* istanbul ignore if */
	if (fontsReady !== void 0) fontsReady.then(() => {
		isFontReady = true;
	});
	else isFontReady = true;
};
init();
/**
* Call callback on fontsReady is resolved. If fontsReady is already resolved,
* callback won't be called.
*/
function onFontsReady(cb) {
	/* istanbul ignore next */
	if (isFontReady) return;
	let deactivated = false;
	onMounted(() => {
		/* istanbul ignore next */
		if (!isFontReady) fontsReady === null || fontsReady === void 0 || fontsReady.then(() => {
			if (deactivated) return;
			cb();
		});
	});
	onBeforeUnmount(() => {
		deactivated = true;
	});
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/select-menu/src/interface.mjs
var internalSelectionMenuInjectionKey = createInjectionKey("n-internal-select-menu");
var internalSelectionMenuBodyInjectionKey = createInjectionKey("n-internal-select-menu-body");
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/composable/use-adjusted-to.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var teleportDisabled = "__disabled__";
function useAdjustedTo(props) {
	const modal = inject(modalBodyInjectionKey, null);
	const drawer = inject(drawerBodyInjectionKey, null);
	const popover = inject(popoverBodyInjectionKey, null);
	const selectMenu = inject(internalSelectionMenuBodyInjectionKey, null);
	const fullscreenElementRef = ref();
	if (typeof document !== "undefined") {
		fullscreenElementRef.value = document.fullscreenElement;
		const handleFullscreenChange = () => {
			fullscreenElementRef.value = document.fullscreenElement;
		};
		onMounted(() => {
			on("fullscreenchange", document, handleFullscreenChange);
		});
		onBeforeUnmount(() => {
			off("fullscreenchange", document, handleFullscreenChange);
		});
	}
	return useMemo(() => {
		var _a;
		const { to } = props;
		if (to !== void 0) {
			if (to === false) return teleportDisabled;
			if (to === true) return fullscreenElementRef.value || "body";
			return to;
		}
		if (modal === null || modal === void 0 ? void 0 : modal.value) return (_a = modal.value.$el) !== null && _a !== void 0 ? _a : modal.value;
		if (drawer === null || drawer === void 0 ? void 0 : drawer.value) return drawer.value;
		if (popover === null || popover === void 0 ? void 0 : popover.value) return popover.value;
		if (selectMenu === null || selectMenu === void 0 ? void 0 : selectMenu.value) return selectMenu.value;
		return to !== null && to !== void 0 ? to : fullscreenElementRef.value || "body";
	});
}
useAdjustedTo.tdkey = teleportDisabled;
useAdjustedTo.propTo = {
	type: [
		String,
		Object,
		Boolean
	],
	default: void 0
};
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/binder/src/utils.js
var viewMeasurer = null;
function ensureViewBoundingRect() {
	if (viewMeasurer === null) {
		viewMeasurer = document.getElementById("v-binder-view-measurer");
		if (viewMeasurer === null) {
			viewMeasurer = document.createElement("div");
			viewMeasurer.id = "v-binder-view-measurer";
			const { style } = viewMeasurer;
			style.position = "fixed";
			style.left = "0";
			style.right = "0";
			style.top = "0";
			style.bottom = "0";
			style.pointerEvents = "none";
			style.visibility = "hidden";
			document.body.appendChild(viewMeasurer);
		}
	}
	return viewMeasurer.getBoundingClientRect();
}
function getPointRect(x, y) {
	const viewRect = ensureViewBoundingRect();
	return {
		top: y,
		left: x,
		height: 0,
		width: 0,
		right: viewRect.width - x,
		bottom: viewRect.height - y
	};
}
function getRect(el) {
	const elRect = el.getBoundingClientRect();
	const viewRect = ensureViewBoundingRect();
	return {
		left: elRect.left - viewRect.left,
		top: elRect.top - viewRect.top,
		bottom: viewRect.height + viewRect.top - elRect.bottom,
		right: viewRect.width + viewRect.left - elRect.right,
		width: elRect.width,
		height: elRect.height
	};
}
function getParentNode(node) {
	if (node.nodeType === 9) return null;
	return node.parentNode;
}
function getScrollParent(node) {
	if (node === null) return null;
	const parentNode = getParentNode(node);
	if (parentNode === null) return null;
	if (parentNode.nodeType === 9) return document;
	if (parentNode.nodeType === 1) {
		const { overflow, overflowX, overflowY } = getComputedStyle(parentNode);
		if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) return parentNode;
	}
	return getScrollParent(parentNode);
}
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/binder/src/Binder.js
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var Binder = defineComponent({
	name: "Binder",
	props: {
		syncTargetWithParent: Boolean,
		syncTarget: {
			type: Boolean,
			default: true
		}
	},
	setup(props) {
		var _a;
		provide("VBinder", (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
		const VBinder = inject("VBinder", null);
		const targetRef = ref(null);
		/**
		* If there's no nested vbinder, we can simply set the target ref.
		*
		* However, when it comes to:
		* <VBinder> <- syncTarget = false
		*
		*              Should hold target DOM ref, but can't get it directly from
		*              its VTarget. So if there are nested VBinder, we should:
		*              1. Stop setting target DOM from level-1 VTarget
		*              2. Set target DOM from level-2 VTarget
		*              For (1), we need `syncTarget` to `false`
		*              For (2), we need to set `syncTargetWithParent` to `true` on
		*              level-2 VBinder
		*   <VTarget>
		*     <VBinder> <- syncTargetWithParent = true
		*       <VTarget>target</VTarget>
		*     </VBinder>
		*     <VFollower>
		*       content1
		*     </VFollower>
		*   </VTarget>
		*   <VFollower>
		*     content2
		*   </VFollower>
		* </VBinder>
		*/
		const setTargetRef = (el) => {
			targetRef.value = el;
			if (VBinder && props.syncTargetWithParent) VBinder.setTargetRef(el);
		};
		let scrollableNodes = [];
		const ensureScrollListener = () => {
			let cursor = targetRef.value;
			while (true) {
				cursor = getScrollParent(cursor);
				if (cursor === null) break;
				scrollableNodes.push(cursor);
			}
			for (const el of scrollableNodes) on("scroll", el, onScroll, true);
		};
		const removeScrollListeners = () => {
			for (const el of scrollableNodes) off("scroll", el, onScroll, true);
			scrollableNodes = [];
		};
		const followerScrollListeners = /* @__PURE__ */ new Set();
		const addScrollListener = (listener) => {
			if (followerScrollListeners.size === 0) ensureScrollListener();
			if (!followerScrollListeners.has(listener)) followerScrollListeners.add(listener);
		};
		const removeScrollListener = (listener) => {
			if (followerScrollListeners.has(listener)) followerScrollListeners.delete(listener);
			if (followerScrollListeners.size === 0) removeScrollListeners();
		};
		const onScroll = () => {
			beforeNextFrameOnce(onScrollRaf);
		};
		const onScrollRaf = () => {
			followerScrollListeners.forEach((listener) => listener());
		};
		const followerResizeListeners = /* @__PURE__ */ new Set();
		const addResizeListener = (listener) => {
			if (followerResizeListeners.size === 0) on("resize", window, onResize);
			if (!followerResizeListeners.has(listener)) followerResizeListeners.add(listener);
		};
		const removeResizeListener = (listener) => {
			if (followerResizeListeners.has(listener)) followerResizeListeners.delete(listener);
			if (followerResizeListeners.size === 0) off("resize", window, onResize);
		};
		const onResize = () => {
			followerResizeListeners.forEach((listener) => listener());
		};
		onBeforeUnmount(() => {
			off("resize", window, onResize);
			removeScrollListeners();
		});
		return {
			targetRef,
			setTargetRef,
			addScrollListener,
			removeScrollListener,
			addResizeListener,
			removeResizeListener
		};
	},
	render() {
		return getSlot("binder", this.$slots);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/binder/src/Target.js
init_runtime_core_esm_bundler();
var Target_default = defineComponent({
	name: "Target",
	setup() {
		const { setTargetRef, syncTarget } = inject("VBinder");
		return {
			syncTarget,
			setTargetDirective: {
				mounted: setTargetRef,
				updated: setTargetRef
			}
		};
	},
	render() {
		const { syncTarget, setTargetDirective } = this;
		/**
		* If you are using VBinder as a child of VBinder, the children wouldn't be
		* a valid DOM or component that can be attached to by directive.
		* So we won't sync target on those kind of situation and control the
		* target sync logic manually.
		*/
		if (syncTarget) return withDirectives(getFirstVNode("follower", this.$slots), [[setTargetDirective]]);
		return getFirstVNode("follower", this.$slots);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/vdirs@0.1.8_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vdirs/es/mousemoveoutside.js
var ctxKey = "@@mmoContext";
var mousemoveoutside = {
	mounted(el, { value }) {
		el[ctxKey] = { handler: void 0 };
		if (typeof value === "function") {
			el[ctxKey].handler = value;
			on("mousemoveoutside", el, value);
		}
	},
	updated(el, { value }) {
		const ctx = el[ctxKey];
		if (typeof value === "function") {
			if (ctx.handler) {
				if (ctx.handler !== value) {
					off("mousemoveoutside", el, ctx.handler);
					ctx.handler = value;
					on("mousemoveoutside", el, value);
				}
			} else {
				el[ctxKey].handler = value;
				on("mousemoveoutside", el, value);
			}
		} else if (ctx.handler) {
			off("mousemoveoutside", el, ctx.handler);
			ctx.handler = void 0;
		}
	},
	unmounted(el) {
		const { handler } = el[ctxKey];
		if (handler) off("mousemoveoutside", el, handler);
		el[ctxKey].handler = void 0;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/shared/cssr.js
var { c } = CssRender();
var cssrAnchorMetaName = "vueuc-style";
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/binder/src/get-placement-style.js
var oppositionPositions = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
var oppositeAligns = {
	start: "end",
	center: "center",
	end: "start"
};
var propToCompare = {
	top: "height",
	bottom: "height",
	left: "width",
	right: "width"
};
var transformOrigins = {
	"bottom-start": "top left",
	bottom: "top center",
	"bottom-end": "top right",
	"top-start": "bottom left",
	top: "bottom center",
	"top-end": "bottom right",
	"right-start": "top left",
	right: "center left",
	"right-end": "bottom left",
	"left-start": "top right",
	left: "center right",
	"left-end": "bottom right"
};
var overlapTransformOrigin = {
	"bottom-start": "bottom left",
	bottom: "bottom center",
	"bottom-end": "bottom right",
	"top-start": "top left",
	top: "top center",
	"top-end": "top right",
	"right-start": "top right",
	right: "center right",
	"right-end": "bottom right",
	"left-start": "top left",
	left: "center left",
	"left-end": "bottom left"
};
var oppositeAlignCssPositionProps = {
	"bottom-start": "right",
	"bottom-end": "left",
	"top-start": "right",
	"top-end": "left",
	"right-start": "bottom",
	"right-end": "top",
	"left-start": "bottom",
	"left-end": "top"
};
var keepOffsetDirection = {
	top: true,
	bottom: false,
	left: true,
	right: false
};
var cssPositionToOppositeAlign = {
	top: "end",
	bottom: "start",
	left: "end",
	right: "start"
};
function getPlacementAndOffsetOfFollower(placement, targetRect, followerRect, shift, flip, overlap) {
	if (!flip || overlap) return {
		placement,
		top: 0,
		left: 0
	};
	const [position, align] = placement.split("-");
	let properAlign = align !== null && align !== void 0 ? align : "center";
	let properOffset = {
		top: 0,
		left: 0
	};
	const deriveOffset = (oppositeAlignCssSizeProp, alignCssPositionProp, offsetVertically) => {
		let left = 0;
		let top = 0;
		const diff = followerRect[oppositeAlignCssSizeProp] - targetRect[alignCssPositionProp] - targetRect[oppositeAlignCssSizeProp];
		if (diff > 0 && shift) {
			if (offsetVertically) top = keepOffsetDirection[alignCssPositionProp] ? diff : -diff;
			else left = keepOffsetDirection[alignCssPositionProp] ? diff : -diff;
		}
		return {
			left,
			top
		};
	};
	const offsetVertically = position === "left" || position === "right";
	if (properAlign !== "center") {
		const oppositeAlignCssPositionProp = oppositeAlignCssPositionProps[placement];
		const currentAlignCssPositionProp = oppositionPositions[oppositeAlignCssPositionProp];
		const oppositeAlignCssSizeProp = propToCompare[oppositeAlignCssPositionProp];
		if (followerRect[oppositeAlignCssSizeProp] > targetRect[oppositeAlignCssSizeProp]) {
			if (targetRect[oppositeAlignCssPositionProp] + targetRect[oppositeAlignCssSizeProp] < followerRect[oppositeAlignCssSizeProp]) {
				const followerOverTargetSize = (followerRect[oppositeAlignCssSizeProp] - targetRect[oppositeAlignCssSizeProp]) / 2;
				if (targetRect[oppositeAlignCssPositionProp] < followerOverTargetSize || targetRect[currentAlignCssPositionProp] < followerOverTargetSize) {
					if (targetRect[oppositeAlignCssPositionProp] < targetRect[currentAlignCssPositionProp]) {
						properAlign = oppositeAligns[align];
						properOffset = deriveOffset(oppositeAlignCssSizeProp, currentAlignCssPositionProp, offsetVertically);
					} else properOffset = deriveOffset(oppositeAlignCssSizeProp, oppositeAlignCssPositionProp, offsetVertically);
				} else properAlign = "center";
			}
		} else if (followerRect[oppositeAlignCssSizeProp] < targetRect[oppositeAlignCssSizeProp]) {
			if (targetRect[currentAlignCssPositionProp] < 0 && targetRect[oppositeAlignCssPositionProp] > targetRect[currentAlignCssPositionProp]) properAlign = oppositeAligns[align];
		}
	} else {
		const possibleAlternativeAlignCssPositionProp1 = position === "bottom" || position === "top" ? "left" : "top";
		const possibleAlternativeAlignCssPositionProp2 = oppositionPositions[possibleAlternativeAlignCssPositionProp1];
		const alternativeAlignCssSizeProp = propToCompare[possibleAlternativeAlignCssPositionProp1];
		const followerOverTargetSize = (followerRect[alternativeAlignCssSizeProp] - targetRect[alternativeAlignCssSizeProp]) / 2;
		if (targetRect[possibleAlternativeAlignCssPositionProp1] < followerOverTargetSize || targetRect[possibleAlternativeAlignCssPositionProp2] < followerOverTargetSize) {
			if (targetRect[possibleAlternativeAlignCssPositionProp1] > targetRect[possibleAlternativeAlignCssPositionProp2]) {
				properAlign = cssPositionToOppositeAlign[possibleAlternativeAlignCssPositionProp1];
				properOffset = deriveOffset(alternativeAlignCssSizeProp, possibleAlternativeAlignCssPositionProp1, offsetVertically);
			} else {
				properAlign = cssPositionToOppositeAlign[possibleAlternativeAlignCssPositionProp2];
				properOffset = deriveOffset(alternativeAlignCssSizeProp, possibleAlternativeAlignCssPositionProp2, offsetVertically);
			}
		}
	}
	let properPosition = position;
	if (targetRect[position] < followerRect[propToCompare[position]] && targetRect[position] < targetRect[oppositionPositions[position]]) properPosition = oppositionPositions[position];
	return {
		placement: properAlign !== "center" ? `${properPosition}-${properAlign}` : properPosition,
		left: properOffset.left,
		top: properOffset.top
	};
}
function getProperTransformOrigin(placement, overlap) {
	if (overlap) return overlapTransformOrigin[placement];
	return transformOrigins[placement];
}
function getOffset(placement, offsetRect, targetRect, offsetTopToStandardPlacement, offsetLeftToStandardPlacement, overlap) {
	if (overlap) switch (placement) {
		case "bottom-start": return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left)}px`,
			transform: "translateY(-100%)"
		};
		case "bottom-end": return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
			transform: "translateX(-100%) translateY(-100%)"
		};
		case "top-start": return {
			top: `${Math.round(targetRect.top - offsetRect.top)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left)}px`,
			transform: ""
		};
		case "top-end": return {
			top: `${Math.round(targetRect.top - offsetRect.top)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
			transform: "translateX(-100%)"
		};
		case "right-start": return {
			top: `${Math.round(targetRect.top - offsetRect.top)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
			transform: "translateX(-100%)"
		};
		case "right-end": return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
			transform: "translateX(-100%) translateY(-100%)"
		};
		case "left-start": return {
			top: `${Math.round(targetRect.top - offsetRect.top)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left)}px`,
			transform: ""
		};
		case "left-end": return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left)}px`,
			transform: "translateY(-100%)"
		};
		case "top": return {
			top: `${Math.round(targetRect.top - offsetRect.top)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2)}px`,
			transform: "translateX(-50%)"
		};
		case "right": return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
			transform: "translateX(-100%) translateY(-50%)"
		};
		case "left": return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left)}px`,
			transform: "translateY(-50%)"
		};
		default: return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2)}px`,
			transform: "translateX(-50%) translateY(-100%)"
		};
	}
	switch (placement) {
		case "bottom-start": return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
			transform: ""
		};
		case "bottom-end": return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
			transform: "translateX(-100%)"
		};
		case "top-start": return {
			top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
			transform: "translateY(-100%)"
		};
		case "top-end": return {
			top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
			transform: "translateX(-100%) translateY(-100%)"
		};
		case "right-start": return {
			top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
			transform: ""
		};
		case "right-end": return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
			transform: "translateY(-100%)"
		};
		case "left-start": return {
			top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
			transform: "translateX(-100%)"
		};
		case "left-end": return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
			transform: "translateX(-100%) translateY(-100%)"
		};
		case "top": return {
			top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2 + offsetLeftToStandardPlacement)}px`,
			transform: "translateY(-100%) translateX(-50%)"
		};
		case "right": return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2 + offsetTopToStandardPlacement)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
			transform: "translateY(-50%)"
		};
		case "left": return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2 + offsetTopToStandardPlacement)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
			transform: "translateY(-50%) translateX(-100%)"
		};
		default: return {
			top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
			left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2 + offsetLeftToStandardPlacement)}px`,
			transform: "translateX(-50%)"
		};
	}
}
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/binder/src/Follower.js
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var style = c([c(".v-binder-follower-container", {
	position: "absolute",
	left: "0",
	right: "0",
	top: "0",
	height: "0",
	pointerEvents: "none",
	zIndex: "auto"
}), c(".v-binder-follower-content", {
	position: "absolute",
	zIndex: "auto"
}, [c("> *", { pointerEvents: "all" })])]);
var Follower_default = defineComponent({
	name: "Follower",
	inheritAttrs: false,
	props: {
		show: Boolean,
		enabled: {
			type: Boolean,
			default: void 0
		},
		placement: {
			type: String,
			default: "bottom"
		},
		syncTrigger: {
			type: Array,
			default: ["resize", "scroll"]
		},
		to: [String, Object],
		flip: {
			type: Boolean,
			default: true
		},
		internalShift: Boolean,
		x: Number,
		y: Number,
		width: String,
		minWidth: String,
		containerClass: String,
		teleportDisabled: Boolean,
		zindexable: {
			type: Boolean,
			default: true
		},
		zIndex: Number,
		overlap: Boolean
	},
	setup(props) {
		const VBinder = inject("VBinder");
		const mergedEnabledRef = useMemo(() => {
			return props.enabled !== void 0 ? props.enabled : props.show;
		});
		const followerRef = ref(null);
		const offsetContainerRef = ref(null);
		const ensureListeners = () => {
			const { syncTrigger } = props;
			if (syncTrigger.includes("scroll")) VBinder.addScrollListener(syncPosition);
			if (syncTrigger.includes("resize")) VBinder.addResizeListener(syncPosition);
		};
		const removeListeners = () => {
			VBinder.removeScrollListener(syncPosition);
			VBinder.removeResizeListener(syncPosition);
		};
		onMounted(() => {
			if (mergedEnabledRef.value) {
				syncPosition();
				ensureListeners();
			}
		});
		const ssrAdapter = useSsrAdapter();
		style.mount({
			id: "vueuc/binder",
			head: true,
			anchorMetaName: cssrAnchorMetaName,
			ssr: ssrAdapter
		});
		onBeforeUnmount(() => {
			removeListeners();
		});
		onFontsReady(() => {
			if (mergedEnabledRef.value) syncPosition();
		});
		const syncPosition = () => {
			if (!mergedEnabledRef.value) return;
			const follower = followerRef.value;
			if (follower === null) return;
			const target = VBinder.targetRef;
			const { x, y, overlap } = props;
			const targetRect = x !== void 0 && y !== void 0 ? getPointRect(x, y) : getRect(target);
			follower.style.setProperty("--v-target-width", `${Math.round(targetRect.width)}px`);
			follower.style.setProperty("--v-target-height", `${Math.round(targetRect.height)}px`);
			const { width, minWidth, placement, internalShift, flip } = props;
			follower.setAttribute("v-placement", placement);
			if (overlap) follower.setAttribute("v-overlap", "");
			else follower.removeAttribute("v-overlap");
			const { style } = follower;
			if (width === "target") style.width = `${targetRect.width}px`;
			else if (width !== void 0) style.width = width;
			else style.width = "";
			if (minWidth === "target") style.minWidth = `${targetRect.width}px`;
			else if (minWidth !== void 0) style.minWidth = minWidth;
			else style.minWidth = "";
			const followerRect = getRect(follower);
			const offsetContainerRect = getRect(offsetContainerRef.value);
			const { left: offsetLeftToStandardPlacement, top: offsetTopToStandardPlacement, placement: properPlacement } = getPlacementAndOffsetOfFollower(placement, targetRect, followerRect, internalShift, flip, overlap);
			const properTransformOrigin = getProperTransformOrigin(properPlacement, overlap);
			const { left, top, transform } = getOffset(properPlacement, offsetContainerRect, targetRect, offsetTopToStandardPlacement, offsetLeftToStandardPlacement, overlap);
			follower.setAttribute("v-placement", properPlacement);
			follower.style.setProperty("--v-offset-left", `${Math.round(offsetLeftToStandardPlacement)}px`);
			follower.style.setProperty("--v-offset-top", `${Math.round(offsetTopToStandardPlacement)}px`);
			follower.style.transform = `translateX(${left}) translateY(${top}) ${transform}`;
			follower.style.setProperty("--v-transform-origin", properTransformOrigin);
			follower.style.transformOrigin = properTransformOrigin;
		};
		watch(mergedEnabledRef, (value) => {
			if (value) {
				ensureListeners();
				syncOnNextTick();
			} else removeListeners();
		});
		const syncOnNextTick = () => {
			nextTick().then(syncPosition).catch((e) => console.error(e));
		};
		[
			"placement",
			"x",
			"y",
			"internalShift",
			"flip",
			"width",
			"overlap",
			"minWidth"
		].forEach((prop) => {
			watch(toRef(props, prop), syncPosition);
		});
		["teleportDisabled"].forEach((prop) => {
			watch(toRef(props, prop), syncOnNextTick);
		});
		watch(toRef(props, "syncTrigger"), (value) => {
			if (!value.includes("resize")) VBinder.removeResizeListener(syncPosition);
			else VBinder.addResizeListener(syncPosition);
			if (!value.includes("scroll")) VBinder.removeScrollListener(syncPosition);
			else VBinder.addScrollListener(syncPosition);
		});
		const isMountedRef = isMounted();
		return {
			VBinder,
			mergedEnabled: mergedEnabledRef,
			offsetContainerRef,
			followerRef,
			mergedTo: useMemo(() => {
				const { to } = props;
				if (to !== void 0) return to;
				if (isMountedRef.value) return;
			}),
			syncPosition
		};
	},
	render() {
		return h(src_default, {
			show: this.show,
			to: this.mergedTo,
			disabled: this.teleportDisabled
		}, { default: () => {
			var _a, _b;
			const vNode = h("div", {
				class: ["v-binder-follower-container", this.containerClass],
				ref: "offsetContainerRef"
			}, [h("div", {
				class: "v-binder-follower-content",
				ref: "followerRef"
			}, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a))]);
			if (this.zindexable) return withDirectives(vNode, [[zindexable, {
				enabled: this.mergedEnabled,
				zIndex: this.zIndex
			}]]);
			return vNode;
		} });
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/env/is-jsdom.mjs
var _isJsdom;
function isJsdom() {
	if (_isJsdom === void 0) _isJsdom = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
	return _isJsdom;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isKey.js
/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
/**
* Checks if `value` is a property name and not a property path.
*
* @private
* @param {*} value The value to check.
* @param {Object} [object] The object to query keys on.
* @returns {boolean} Returns `true` if `value` is a property name, else `false`.
*/
function isKey(value, object) {
	if (isArray(value)) return false;
	var type = typeof value;
	if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
	return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
/** Error message constants. */
var FUNC_ERROR_TEXT = "Expected a function";
/**
* Creates a function that memoizes the result of `func`. If `resolver` is
* provided, it determines the cache key for storing the result based on the
* arguments provided to the memoized function. By default, the first argument
* provided to the memoized function is used as the map cache key. The `func`
* is invoked with the `this` binding of the memoized function.
*
* **Note:** The cache is exposed as the `cache` property on the memoized
* function. Its creation may be customized by replacing the `_.memoize.Cache`
* constructor with one whose instances implement the
* [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
* method interface of `clear`, `delete`, `get`, `has`, and `set`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Function
* @param {Function} func The function to have its output memoized.
* @param {Function} [resolver] The function to resolve the cache key.
* @returns {Function} Returns the new memoized function.
* @example
*
* var object = { 'a': 1, 'b': 2 };
* var other = { 'c': 3, 'd': 4 };
*
* var values = _.memoize(_.values);
* values(object);
* // => [1, 2]
*
* values(other);
* // => [3, 4]
*
* object.a = 2;
* values(object);
* // => [1, 2]
*
* // Modify the result cache.
* values.cache.set(object, ['a', 'b']);
* values(object);
* // => ['a', 'b']
*
* // Replace `_.memoize.Cache`.
* _.memoize.Cache = WeakMap;
*/
function memoize(func, resolver) {
	if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
	var memoized = function() {
		var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
		if (cache.has(key)) return cache.get(key);
		var result = func.apply(this, args);
		memoized.cache = cache.set(key, result) || cache;
		return result;
	};
	memoized.cache = new (memoize.Cache || MapCache)();
	return memoized;
}
memoize.Cache = MapCache;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_memoizeCapped.js
/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;
/**
* A specialized version of `_.memoize` which clears the memoized function's
* cache when it exceeds `MAX_MEMOIZE_SIZE`.
*
* @private
* @param {Function} func The function to have its output memoized.
* @returns {Function} Returns the new memoized function.
*/
function memoizeCapped(func) {
	var result = memoize(func, function(key) {
		if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
		return key;
	});
	var cache = result.cache;
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stringToPath.js
/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;
/**
* Converts `string` to a property path array.
*
* @private
* @param {string} string The string to convert.
* @returns {Array} Returns the property path array.
*/
var stringToPath = memoizeCapped(function(string) {
	var result = [];
	if (string.charCodeAt(0) === 46) result.push("");
	string.replace(rePropName, function(match, number, quote, subString) {
		result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
	});
	return result;
});
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_castPath.js
/**
* Casts `value` to a path array if it's not one.
*
* @private
* @param {*} value The value to inspect.
* @param {Object} [object] The object to query keys on.
* @returns {Array} Returns the cast property path array.
*/
function castPath(value, object) {
	if (isArray(value)) return value;
	return isKey(value, object) ? [value] : stringToPath(toString(value));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toKey.js
/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;
/**
* Converts `value` to a string key if it's not a string or symbol.
*
* @private
* @param {*} value The value to inspect.
* @returns {string|symbol} Returns the key.
*/
function toKey(value) {
	if (typeof value == "string" || isSymbol(value)) return value;
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGet.js
/**
* The base implementation of `_.get` without support for default values.
*
* @private
* @param {Object} object The object to query.
* @param {Array|string} path The path of the property to get.
* @returns {*} Returns the resolved value.
*/
function baseGet(object, path) {
	path = castPath(path, object);
	var index = 0, length = path.length;
	while (object != null && index < length) object = object[toKey(path[index++])];
	return index && index == length ? object : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/get.js
/**
* Gets the value at `path` of `object`. If the resolved value is
* `undefined`, the `defaultValue` is returned in its place.
*
* @static
* @memberOf _
* @since 3.7.0
* @category Object
* @param {Object} object The object to query.
* @param {Array|string} path The path of the property to get.
* @param {*} [defaultValue] The value returned for `undefined` resolved values.
* @returns {*} Returns the resolved value.
* @example
*
* var object = { 'a': [{ 'b': { 'c': 3 } }] };
*
* _.get(object, 'a[0].b.c');
* // => 3
*
* _.get(object, ['a', '0', 'b', 'c']);
* // => 3
*
* _.get(object, 'a.b.c', 'default');
* // => 'default'
*/
function get(object, path, defaultValue) {
	var result = object == null ? void 0 : baseGet(object, path);
	return result === void 0 ? defaultValue : result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setCacheAdd.js
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
* Adds `value` to the array cache.
*
* @private
* @name add
* @memberOf SetCache
* @alias push
* @param {*} value The value to cache.
* @returns {Object} Returns the cache instance.
*/
function setCacheAdd(value) {
	this.__data__.set(value, HASH_UNDEFINED);
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setCacheHas.js
/**
* Checks if `value` is in the array cache.
*
* @private
* @name has
* @memberOf SetCache
* @param {*} value The value to search for.
* @returns {number} Returns `true` if `value` is found, else `false`.
*/
function setCacheHas(value) {
	return this.__data__.has(value);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_SetCache.js
/**
*
* Creates an array cache object to store unique values.
*
* @private
* @constructor
* @param {Array} [values] The values to cache.
*/
function SetCache(values) {
	var index = -1, length = values == null ? 0 : values.length;
	this.__data__ = new MapCache();
	while (++index < length) this.add(values[index]);
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arraySome.js
/**
* A specialized version of `_.some` for arrays without support for iteratee
* shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} predicate The function invoked per iteration.
* @returns {boolean} Returns `true` if any element passes the predicate check,
*  else `false`.
*/
function arraySome(array, predicate) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (predicate(array[index], index, array)) return true;
	return false;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cacheHas.js
/**
* Checks if a `cache` value for `key` exists.
*
* @private
* @param {Object} cache The cache to query.
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function cacheHas(cache, key) {
	return cache.has(key);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_equalArrays.js
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1;
var COMPARE_UNORDERED_FLAG$3 = 2;
/**
* A specialized version of `baseIsEqualDeep` for arrays with support for
* partial deep comparisons.
*
* @private
* @param {Array} array The array to compare.
* @param {Array} other The other array to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `array` and `other` objects.
* @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
*/
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
	if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
	var arrStacked = stack.get(array);
	var othStacked = stack.get(other);
	if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
	var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
	stack.set(array, other);
	stack.set(other, array);
	while (++index < arrLength) {
		var arrValue = array[index], othValue = other[index];
		if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
		if (compared !== void 0) {
			if (compared) continue;
			result = false;
			break;
		}
		if (seen) {
			if (!arraySome(other, function(othValue, othIndex) {
				if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
			})) {
				result = false;
				break;
			}
		} else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
			result = false;
			break;
		}
	}
	stack["delete"](array);
	stack["delete"](other);
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapToArray.js
/**
* Converts `map` to its key-value pairs.
*
* @private
* @param {Object} map The map to convert.
* @returns {Array} Returns the key-value pairs.
*/
function mapToArray(map) {
	var index = -1, result = Array(map.size);
	map.forEach(function(value, key) {
		result[++index] = [key, value];
	});
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setToArray.js
/**
* Converts `set` to an array of its values.
*
* @private
* @param {Object} set The set to convert.
* @returns {Array} Returns the values.
*/
function setToArray(set) {
	var index = -1, result = Array(set.size);
	set.forEach(function(value) {
		result[++index] = value;
	});
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_equalByTag.js
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1;
var COMPARE_UNORDERED_FLAG$2 = 2;
/** `Object#toString` result references. */
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : void 0;
var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
/**
* A specialized version of `baseIsEqualDeep` for comparing objects of
* the same `toStringTag`.
*
* **Note:** This function only supports comparing values with tags of
* `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {string} tag The `toStringTag` of the objects to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	switch (tag) {
		case dataViewTag:
			if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
			object = object.buffer;
			other = other.buffer;
		case arrayBufferTag:
			if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
			return true;
		case boolTag:
		case dateTag:
		case numberTag: return eq(+object, +other);
		case errorTag: return object.name == other.name && object.message == other.message;
		case regexpTag:
		case stringTag: return object == other + "";
		case mapTag: var convert = mapToArray;
		case setTag:
			var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
			convert || (convert = setToArray);
			if (object.size != other.size && !isPartial) return false;
			var stacked = stack.get(object);
			if (stacked) return stacked == other;
			bitmask |= COMPARE_UNORDERED_FLAG$2;
			stack.set(object, other);
			var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
			stack["delete"](object);
			return result;
		case symbolTag: if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
	}
	return false;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_equalObjects.js
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;
/** Used to check objects for own properties. */
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
/**
* A specialized version of `baseIsEqualDeep` for objects with support for
* partial deep comparisons.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length;
	if (objLength != getAllKeys(other).length && !isPartial) return false;
	var index = objLength;
	while (index--) {
		var key = objProps[index];
		if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) return false;
	}
	var objStacked = stack.get(object);
	var othStacked = stack.get(other);
	if (objStacked && othStacked) return objStacked == other && othStacked == object;
	var result = true;
	stack.set(object, other);
	stack.set(other, object);
	var skipCtor = isPartial;
	while (++index < objLength) {
		key = objProps[index];
		var objValue = object[key], othValue = other[key];
		if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
		if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
			result = false;
			break;
		}
		skipCtor || (skipCtor = key == "constructor");
	}
	if (result && !skipCtor) {
		var objCtor = object.constructor, othCtor = other.constructor;
		if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
	}
	stack["delete"](object);
	stack["delete"](other);
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsEqualDeep.js
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;
/** `Object#toString` result references. */
var argsTag = "[object Arguments]";
var arrayTag = "[object Array]";
var objectTag = "[object Object]";
/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
* A specialized version of `baseIsEqual` for arrays and objects which performs
* deep comparisons and tracks traversed objects enabling objects with circular
* references to be compared.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} [stack] Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : _getTag_default(object), othTag = othIsArr ? arrayTag : _getTag_default(other);
	objTag = objTag == argsTag ? objectTag : objTag;
	othTag = othTag == argsTag ? objectTag : othTag;
	var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
	if (isSameTag && isBuffer(object)) {
		if (!isBuffer(other)) return false;
		objIsArr = true;
		objIsObj = false;
	}
	if (isSameTag && !objIsObj) {
		stack || (stack = new Stack());
		return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	}
	if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
		var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
		if (objIsWrapped || othIsWrapped) {
			var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
			stack || (stack = new Stack());
			return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
		}
	}
	if (!isSameTag) return false;
	stack || (stack = new Stack());
	return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsEqual.js
/**
* The base implementation of `_.isEqual` which supports partial comparisons
* and tracks traversed objects.
*
* @private
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @param {boolean} bitmask The bitmask flags.
*  1 - Unordered comparison
*  2 - Partial comparison
* @param {Function} [customizer] The function to customize comparisons.
* @param {Object} [stack] Tracks traversed `value` and `other` objects.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
*/
function baseIsEqual(value, other, bitmask, customizer, stack) {
	if (value === other) return true;
	if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
	return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsMatch.js
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1;
var COMPARE_UNORDERED_FLAG$1 = 2;
/**
* The base implementation of `_.isMatch` without support for iteratee shorthands.
*
* @private
* @param {Object} object The object to inspect.
* @param {Object} source The object of property values to match.
* @param {Array} matchData The property names, values, and compare flags to match.
* @param {Function} [customizer] The function to customize comparisons.
* @returns {boolean} Returns `true` if `object` is a match, else `false`.
*/
function baseIsMatch(object, source, matchData, customizer) {
	var index = matchData.length, length = index, noCustomizer = !customizer;
	if (object == null) return !length;
	object = Object(object);
	while (index--) {
		var data = matchData[index];
		if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
	}
	while (++index < length) {
		data = matchData[index];
		var key = data[0], objValue = object[key], srcValue = data[1];
		if (noCustomizer && data[2]) {
			if (objValue === void 0 && !(key in object)) return false;
		} else {
			var stack = new Stack();
			if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
			if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) return false;
		}
	}
	return true;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isStrictComparable.js
/**
* Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` if suitable for strict
*  equality comparisons, else `false`.
*/
function isStrictComparable(value) {
	return value === value && !isObject(value);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getMatchData.js
/**
* Gets the property names, values, and compare flags of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the match data of `object`.
*/
function getMatchData(object) {
	var result = keys(object), length = result.length;
	while (length--) {
		var key = result[length], value = object[key];
		result[length] = [
			key,
			value,
			isStrictComparable(value)
		];
	}
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_matchesStrictComparable.js
/**
* A specialized version of `matchesProperty` for source values suitable
* for strict equality comparisons, i.e. `===`.
*
* @private
* @param {string} key The key of the property to get.
* @param {*} srcValue The value to match.
* @returns {Function} Returns the new spec function.
*/
function matchesStrictComparable(key, srcValue) {
	return function(object) {
		if (object == null) return false;
		return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseMatches.js
/**
* The base implementation of `_.matches` which doesn't clone `source`.
*
* @private
* @param {Object} source The object of property values to match.
* @returns {Function} Returns the new spec function.
*/
function baseMatches(source) {
	var matchData = getMatchData(source);
	if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	return function(object) {
		return object === source || baseIsMatch(object, source, matchData);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseHasIn.js
/**
* The base implementation of `_.hasIn` without support for deep paths.
*
* @private
* @param {Object} [object] The object to query.
* @param {Array|string} key The key to check.
* @returns {boolean} Returns `true` if `key` exists, else `false`.
*/
function baseHasIn(object, key) {
	return object != null && key in Object(object);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hasPath.js
/**
* Checks if `path` exists on `object`.
*
* @private
* @param {Object} object The object to query.
* @param {Array|string} path The path to check.
* @param {Function} hasFunc The function to check properties.
* @returns {boolean} Returns `true` if `path` exists, else `false`.
*/
function hasPath(object, path, hasFunc) {
	path = castPath(path, object);
	var index = -1, length = path.length, result = false;
	while (++index < length) {
		var key = toKey(path[index]);
		if (!(result = object != null && hasFunc(object, key))) break;
		object = object[key];
	}
	if (result || ++index != length) return result;
	length = object == null ? 0 : object.length;
	return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/hasIn.js
/**
* Checks if `path` is a direct or inherited property of `object`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Object
* @param {Object} object The object to query.
* @param {Array|string} path The path to check.
* @returns {boolean} Returns `true` if `path` exists, else `false`.
* @example
*
* var object = _.create({ 'a': _.create({ 'b': 2 }) });
*
* _.hasIn(object, 'a');
* // => true
*
* _.hasIn(object, 'a.b');
* // => true
*
* _.hasIn(object, ['a', 'b']);
* // => true
*
* _.hasIn(object, 'b');
* // => false
*/
function hasIn(object, path) {
	return object != null && hasPath(object, path, baseHasIn);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseMatchesProperty.js
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
/**
* The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
*
* @private
* @param {string} path The path of the property to get.
* @param {*} srcValue The value to match.
* @returns {Function} Returns the new spec function.
*/
function baseMatchesProperty(path, srcValue) {
	if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
	return function(object) {
		var objValue = get(object, path);
		return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseProperty.js
/**
* The base implementation of `_.property` without support for deep paths.
*
* @private
* @param {string} key The key of the property to get.
* @returns {Function} Returns the new accessor function.
*/
function baseProperty(key) {
	return function(object) {
		return object == null ? void 0 : object[key];
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_basePropertyDeep.js
/**
* A specialized version of `baseProperty` which supports deep paths.
*
* @private
* @param {Array|string} path The path of the property to get.
* @returns {Function} Returns the new accessor function.
*/
function basePropertyDeep(path) {
	return function(object) {
		return baseGet(object, path);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/property.js
/**
* Creates a function that returns the value at `path` of a given object.
*
* @static
* @memberOf _
* @since 2.4.0
* @category Util
* @param {Array|string} path The path of the property to get.
* @returns {Function} Returns the new accessor function.
* @example
*
* var objects = [
*   { 'a': { 'b': 2 } },
*   { 'a': { 'b': 1 } }
* ];
*
* _.map(objects, _.property('a.b'));
* // => [2, 1]
*
* _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
* // => [1, 2]
*/
function property(path) {
	return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIteratee.js
/**
* The base implementation of `_.iteratee`.
*
* @private
* @param {*} [value=_.identity] The value to convert to an iteratee.
* @returns {Function} Returns the iteratee.
*/
function baseIteratee(value) {
	if (typeof value == "function") return value;
	if (value == null) return identity;
	if (typeof value == "object") return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
	return property(value);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseForOwn.js
/**
* The base implementation of `_.forOwn` without support for iteratee shorthands.
*
* @private
* @param {Object} object The object to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Object} Returns `object`.
*/
function baseForOwn(object, iteratee) {
	return object && baseFor(object, iteratee, keys);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createBaseEach.js
/**
* Creates a `baseEach` or `baseEachRight` function.
*
* @private
* @param {Function} eachFunc The function to iterate over a collection.
* @param {boolean} [fromRight] Specify iterating from right to left.
* @returns {Function} Returns the new base function.
*/
function createBaseEach(eachFunc, fromRight) {
	return function(collection, iteratee) {
		if (collection == null) return collection;
		if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
		var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
		while (fromRight ? index-- : ++index < length) if (iteratee(iterable[index], index, iterable) === false) break;
		return collection;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseEach.js
/**
* The base implementation of `_.forEach` without support for iteratee shorthands.
*
* @private
* @param {Array|Object} collection The collection to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array|Object} Returns `collection`.
*/
var baseEach = createBaseEach(baseForOwn);
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseMap.js
/**
* The base implementation of `_.map` without support for iteratee shorthands.
*
* @private
* @param {Array|Object} collection The collection to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the new mapped array.
*/
function baseMap(collection, iteratee) {
	var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
	baseEach(collection, function(value, key, collection) {
		result[++index] = iteratee(value, key, collection);
	});
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js
/**
* Creates an array of values by running each element in `collection` thru
* `iteratee`. The iteratee is invoked with three arguments:
* (value, index|key, collection).
*
* Many lodash methods are guarded to work as iteratees for methods like
* `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
*
* The guarded methods are:
* `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
* `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
* `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
* `template`, `trim`, `trimEnd`, `trimStart`, and `words`
*
* @static
* @memberOf _
* @since 0.1.0
* @category Collection
* @param {Array|Object} collection The collection to iterate over.
* @param {Function} [iteratee=_.identity] The function invoked per iteration.
* @returns {Array} Returns the new mapped array.
* @example
*
* function square(n) {
*   return n * n;
* }
*
* _.map([4, 8], square);
* // => [16, 64]
*
* _.map({ 'a': 4, 'b': 8 }, square);
* // => [16, 64] (iteration order is not guaranteed)
*
* var users = [
*   { 'user': 'barney' },
*   { 'user': 'fred' }
* ];
*
* // The `_.property` iteratee shorthand.
* _.map(users, 'user');
* // => ['barney', 'fred']
*/
function map(collection, iteratee) {
	return (isArray(collection) ? arrayMap : baseMap)(collection, baseIteratee(iteratee, 3));
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/popover/src/styles/index.cssr.mjs
var oppositePlacement = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
var arrowSize = "var(--n-arrow-height) * 1.414";
var index_cssr_default = c$1([
	cB("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [
		c$1(">", [cB("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]),
		cNotM("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [cNotM("scrollable", [cNotM("show-header-or-footer", "padding: var(--n-padding);")])]),
		cE("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),
		cE("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),
		cM("scrollable, show-header-or-footer", [cE("content", `
 padding: var(--n-padding);
 `)])
	]),
	cB("popover-shared", `
 transform-origin: inherit;
 `, [
		cB("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [cB("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${arrowSize});
 height: calc(${arrowSize});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
		c$1("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
		c$1("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
		c$1("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
		c$1("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
	]),
	placementStyle("top-start", `
 top: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset("top-start")} - var(--v-offset-left));
 `),
	placementStyle("top", `
 top: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `),
	placementStyle("top-end", `
 top: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset("top-end")} + var(--v-offset-left));
 `),
	placementStyle("bottom-start", `
 bottom: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset("bottom-start")} - var(--v-offset-left));
 `),
	placementStyle("bottom", `
 bottom: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `),
	placementStyle("bottom-end", `
 bottom: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset("bottom-end")} + var(--v-offset-left));
 `),
	placementStyle("left-start", `
 left: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset("left-start")} - var(--v-offset-top));
 `),
	placementStyle("left", `
 left: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `),
	placementStyle("left-end", `
 left: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset("left-end")} + var(--v-offset-top));
 `),
	placementStyle("right-start", `
 right: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset("right-start")} - var(--v-offset-top));
 `),
	placementStyle("right", `
 right: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `),
	placementStyle("right-end", `
 right: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset("right-end")} + var(--v-offset-top));
 `),
	...map({
		top: ["right-start", "left-start"],
		right: ["top-end", "bottom-end"],
		bottom: ["right-end", "left-end"],
		left: ["top-start", "bottom-start"]
	}, (placements, direction) => {
		const isVertical = ["right", "left"].includes(direction);
		const sizeType = isVertical ? "width" : "height";
		return placements.map((placement) => {
			const isReverse = placement.split("-")[1] === "end";
			const centerOffset = `calc((${`var(--v-target-${sizeType}, 0px)`} - ${arrowSize}) / 2)`;
			const offset = getArrowOffset(placement);
			return c$1(`[v-placement="${placement}"] >`, [cB("popover-shared", [cM("center-arrow", [cB("popover-arrow", `${direction}: calc(max(${centerOffset}, ${offset}) ${isReverse ? "+" : "-"} var(--v-offset-${isVertical ? "left" : "top"}));`)])])]);
		});
	})
]);
function getArrowOffset(placement) {
	return ["top", "bottom"].includes(placement.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function placementStyle(placement, arrowStyleLiteral) {
	const position = placement.split("-")[0];
	const sizeStyle = ["top", "bottom"].includes(position) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
	return c$1(`[v-placement="${placement}"] >`, [cB("popover-shared", `
 margin-${oppositePlacement[position]}: var(--n-space);
 `, [
		cM("show-arrow", `
 margin-${oppositePlacement[position]}: var(--n-space-arrow);
 `),
		cM("overlap", `
 margin: 0;
 `),
		cCB("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${position}: 100%;
 ${oppositePlacement[position]}: auto;
 ${sizeStyle}
 `, [cB("popover-arrow", arrowStyleLiteral)])
	])]);
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/popover/src/PopoverBody.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var popoverBodyProps = Object.assign(Object.assign({}, useTheme.props), {
	to: useAdjustedTo.propTo,
	show: Boolean,
	trigger: String,
	showArrow: Boolean,
	delay: Number,
	duration: Number,
	raw: Boolean,
	arrowPointToCenter: Boolean,
	arrowClass: String,
	arrowStyle: [String, Object],
	arrowWrapperClass: String,
	arrowWrapperStyle: [String, Object],
	displayDirective: String,
	x: Number,
	y: Number,
	flip: Boolean,
	overlap: Boolean,
	placement: String,
	width: [Number, String],
	keepAliveOnHover: Boolean,
	scrollable: Boolean,
	contentClass: String,
	contentStyle: [Object, String],
	headerClass: String,
	headerStyle: [Object, String],
	footerClass: String,
	footerStyle: [Object, String],
	internalDeactivateImmediately: Boolean,
	animated: Boolean,
	onClickoutside: Function,
	internalTrapFocus: Boolean,
	internalOnAfterLeave: Function,
	minWidth: Number,
	maxWidth: Number
});
function renderArrow({ arrowClass, arrowStyle, arrowWrapperClass, arrowWrapperStyle, clsPrefix }) {
	return h("div", {
		key: "__popover-arrow__",
		style: arrowWrapperStyle,
		class: [`${clsPrefix}-popover-arrow-wrapper`, arrowWrapperClass]
	}, h("div", {
		class: [`${clsPrefix}-popover-arrow`, arrowClass],
		style: arrowStyle
	}));
}
var PopoverBody_default = defineComponent({
	name: "PopoverBody",
	inheritAttrs: false,
	props: popoverBodyProps,
	setup(props, { slots, attrs }) {
		const { namespaceRef, mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
		const themeRef = useTheme("Popover", "-popover", index_cssr_default, popoverLight, props, mergedClsPrefixRef);
		const rtlEnabledRef = useRtl("Popover", mergedRtlRef, mergedClsPrefixRef);
		const followerRef = ref(null);
		const NPopover = inject("NPopover");
		const bodyRef = ref(null);
		const followerEnabledRef = ref(props.show);
		const displayedRef = ref(false);
		watchEffect(() => {
			const { show } = props;
			if (show && !isJsdom() && !props.internalDeactivateImmediately) displayedRef.value = true;
		});
		const directivesRef = computed(() => {
			const { trigger, onClickoutside } = props;
			const directives = [];
			const { positionManuallyRef: { value: positionManually } } = NPopover;
			if (!positionManually) {
				if (trigger === "click" && !onClickoutside) directives.push([
					clickoutside,
					handleClickOutside,
					void 0,
					{ capture: true }
				]);
				if (trigger === "hover") directives.push([mousemoveoutside, handleMouseMoveOutside]);
			}
			if (onClickoutside) directives.push([
				clickoutside,
				handleClickOutside,
				void 0,
				{ capture: true }
			]);
			if (props.displayDirective === "show" || props.animated && displayedRef.value) directives.push([vShow, props.show]);
			return directives;
		});
		const cssVarsRef = computed(() => {
			const { common: { cubicBezierEaseInOut, cubicBezierEaseIn, cubicBezierEaseOut }, self: { space, spaceArrow, padding, fontSize, textColor, dividerColor, color, boxShadow, borderRadius, arrowHeight, arrowOffset, arrowOffsetVertical } } = themeRef.value;
			return {
				"--n-box-shadow": boxShadow,
				"--n-bezier": cubicBezierEaseInOut,
				"--n-bezier-ease-in": cubicBezierEaseIn,
				"--n-bezier-ease-out": cubicBezierEaseOut,
				"--n-font-size": fontSize,
				"--n-text-color": textColor,
				"--n-color": color,
				"--n-divider-color": dividerColor,
				"--n-border-radius": borderRadius,
				"--n-arrow-height": arrowHeight,
				"--n-arrow-offset": arrowOffset,
				"--n-arrow-offset-vertical": arrowOffsetVertical,
				"--n-padding": padding,
				"--n-space": space,
				"--n-space-arrow": spaceArrow
			};
		});
		const styleRef = computed(() => {
			const width = props.width === "trigger" ? void 0 : formatLength(props.width);
			const style = [];
			if (width) style.push({ width });
			const { maxWidth, minWidth } = props;
			if (maxWidth) style.push({ maxWidth: formatLength(maxWidth) });
			if (minWidth) style.push({ maxWidth: formatLength(minWidth) });
			if (!inlineThemeDisabled) style.push(cssVarsRef.value);
			return style;
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("popover", void 0, cssVarsRef, props) : void 0;
		NPopover.setBodyInstance({ syncPosition });
		onBeforeUnmount(() => {
			NPopover.setBodyInstance(null);
		});
		watch(toRef(props, "show"), (value) => {
			if (props.animated) return;
			if (value) followerEnabledRef.value = true;
			else followerEnabledRef.value = false;
		});
		function syncPosition() {
			var _a;
			(_a = followerRef.value) === null || _a === void 0 || _a.syncPosition();
		}
		function handleMouseEnter(e) {
			if (props.trigger === "hover" && props.keepAliveOnHover && props.show) NPopover.handleMouseEnter(e);
		}
		function handleMouseLeave(e) {
			if (props.trigger === "hover" && props.keepAliveOnHover) NPopover.handleMouseLeave(e);
		}
		function handleMouseMoveOutside(e) {
			if (props.trigger === "hover" && !getTriggerElement().contains(getPreciseEventTarget(e))) NPopover.handleMouseMoveOutside(e);
		}
		function handleClickOutside(e) {
			if (props.trigger === "click" && !getTriggerElement().contains(getPreciseEventTarget(e)) || props.onClickoutside) NPopover.handleClickOutside(e);
		}
		function getTriggerElement() {
			return NPopover.getTriggerElement();
		}
		provide(popoverBodyInjectionKey, bodyRef);
		provide(drawerBodyInjectionKey, null);
		provide(modalBodyInjectionKey, null);
		function renderContentNode() {
			themeClassHandle === null || themeClassHandle === void 0 || themeClassHandle.onRender();
			if (!(props.displayDirective === "show" || props.show || props.animated && displayedRef.value)) return null;
			let contentNode;
			const renderBody = NPopover.internalRenderBodyRef.value;
			const { value: mergedClsPrefix } = mergedClsPrefixRef;
			if (!renderBody) {
				const { value: extraClass } = NPopover.extraClassRef;
				const { internalTrapFocus } = props;
				const hasHeaderOrFooter = !isSlotEmpty(slots.header) || !isSlotEmpty(slots.footer);
				const renderContentInnerNode = () => {
					var _a, _b;
					const body = hasHeaderOrFooter ? h(Fragment, null, resolveWrappedSlot(slots.header, (children) => {
						return children ? h("div", {
							class: [`${mergedClsPrefix}-popover__header`, props.headerClass],
							style: props.headerStyle
						}, children) : null;
					}), resolveWrappedSlot(slots.default, (children) => {
						return children ? h("div", {
							class: [`${mergedClsPrefix}-popover__content`, props.contentClass],
							style: props.contentStyle
						}, slots) : null;
					}), resolveWrappedSlot(slots.footer, (children) => {
						return children ? h("div", {
							class: [`${mergedClsPrefix}-popover__footer`, props.footerClass],
							style: props.footerStyle
						}, children) : null;
					})) : props.scrollable ? (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots) : h("div", {
						class: [`${mergedClsPrefix}-popover__content`, props.contentClass],
						style: props.contentStyle
					}, slots);
					return [props.scrollable ? h(XScrollbar, {
						themeOverrides: themeRef.value.peerOverrides.Scrollbar,
						theme: themeRef.value.peers.Scrollbar,
						contentClass: hasHeaderOrFooter ? void 0 : `${mergedClsPrefix}-popover__content ${(_b = props.contentClass) !== null && _b !== void 0 ? _b : ""}`,
						contentStyle: hasHeaderOrFooter ? void 0 : props.contentStyle
					}, { default: () => body }) : body, props.showArrow ? renderArrow({
						arrowClass: props.arrowClass,
						arrowStyle: props.arrowStyle,
						arrowWrapperClass: props.arrowWrapperClass,
						arrowWrapperStyle: props.arrowWrapperStyle,
						clsPrefix: mergedClsPrefix
					}) : null];
				};
				contentNode = h("div", mergeProps({
					class: [
						`${mergedClsPrefix}-popover`,
						`${mergedClsPrefix}-popover-shared`,
						(rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) && `${mergedClsPrefix}-popover--rtl`,
						themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value,
						extraClass.map((v) => `${mergedClsPrefix}-${v}`),
						{
							[`${mergedClsPrefix}-popover--scrollable`]: props.scrollable,
							[`${mergedClsPrefix}-popover--show-header-or-footer`]: hasHeaderOrFooter,
							[`${mergedClsPrefix}-popover--raw`]: props.raw,
							[`${mergedClsPrefix}-popover-shared--overlap`]: props.overlap,
							[`${mergedClsPrefix}-popover-shared--show-arrow`]: props.showArrow,
							[`${mergedClsPrefix}-popover-shared--center-arrow`]: props.arrowPointToCenter
						}
					],
					ref: bodyRef,
					style: styleRef.value,
					onKeydown: NPopover.handleKeydown,
					onMouseenter: handleMouseEnter,
					onMouseleave: handleMouseLeave
				}, attrs), internalTrapFocus ? h(FocusTrap, {
					active: props.show,
					autoFocus: true
				}, { default: renderContentInnerNode }) : renderContentInnerNode());
			} else contentNode = renderBody([
				`${mergedClsPrefix}-popover-shared`,
				(rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) && `${mergedClsPrefix}-popover--rtl`,
				themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value,
				props.overlap && `${mergedClsPrefix}-popover-shared--overlap`,
				props.showArrow && `${mergedClsPrefix}-popover-shared--show-arrow`,
				props.arrowPointToCenter && `${mergedClsPrefix}-popover-shared--center-arrow`
			], bodyRef, styleRef.value, handleMouseEnter, handleMouseLeave);
			return withDirectives(contentNode, directivesRef.value);
		}
		return {
			displayed: displayedRef,
			namespace: namespaceRef,
			isMounted: NPopover.isMountedRef,
			zIndex: NPopover.zIndexRef,
			followerRef,
			adjustedTo: useAdjustedTo(props),
			followerEnabled: followerEnabledRef,
			renderContentNode
		};
	},
	render() {
		return h(Follower_default, {
			ref: "followerRef",
			zIndex: this.zIndex,
			show: this.show,
			enabled: this.followerEnabled,
			to: this.adjustedTo,
			x: this.x,
			y: this.y,
			flip: this.flip,
			placement: this.placement,
			containerClass: this.namespace,
			overlap: this.overlap,
			width: this.width === "trigger" ? "target" : void 0,
			teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey
		}, { default: () => {
			return this.animated ? h(Transition, {
				name: "popover-transition",
				appear: this.isMounted,
				onEnter: () => {
					this.followerEnabled = true;
				},
				onAfterLeave: () => {
					var _a;
					(_a = this.internalOnAfterLeave) === null || _a === void 0 || _a.call(this);
					this.followerEnabled = false;
					this.displayed = false;
				}
			}, { default: this.renderContentNode }) : this.renderContentNode();
		} });
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/popover/src/Popover.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var bodyPropKeys = Object.keys(popoverBodyProps);
var triggerEventMap = {
	focus: ["onFocus", "onBlur"],
	click: ["onClick"],
	hover: ["onMouseenter", "onMouseleave"],
	manual: [],
	nested: [
		"onFocus",
		"onBlur",
		"onMouseenter",
		"onMouseleave",
		"onClick"
	]
};
function appendEvents(vNode, trigger, events) {
	triggerEventMap[trigger].forEach((eventName) => {
		if (!vNode.props) vNode.props = {};
		else vNode.props = Object.assign({}, vNode.props);
		const originalHandler = vNode.props[eventName];
		const handler = events[eventName];
		if (!originalHandler) vNode.props[eventName] = handler;
		else vNode.props[eventName] = (...args) => {
			originalHandler(...args);
			handler(...args);
		};
	});
}
var popoverBaseProps = {
	show: {
		type: Boolean,
		default: void 0
	},
	defaultShow: Boolean,
	showArrow: {
		type: Boolean,
		default: true
	},
	trigger: {
		type: String,
		default: "hover"
	},
	delay: {
		type: Number,
		default: 100
	},
	duration: {
		type: Number,
		default: 100
	},
	raw: Boolean,
	placement: {
		type: String,
		default: "top"
	},
	x: Number,
	y: Number,
	arrowPointToCenter: Boolean,
	disabled: Boolean,
	getDisabled: Function,
	displayDirective: {
		type: String,
		default: "if"
	},
	arrowClass: String,
	arrowStyle: [String, Object],
	arrowWrapperClass: String,
	arrowWrapperStyle: [String, Object],
	flip: {
		type: Boolean,
		default: true
	},
	animated: {
		type: Boolean,
		default: true
	},
	width: {
		type: [Number, String],
		default: void 0
	},
	overlap: Boolean,
	keepAliveOnHover: {
		type: Boolean,
		default: true
	},
	zIndex: Number,
	to: useAdjustedTo.propTo,
	scrollable: Boolean,
	contentClass: String,
	contentStyle: [Object, String],
	headerClass: String,
	headerStyle: [Object, String],
	footerClass: String,
	footerStyle: [Object, String],
	onClickoutside: Function,
	"onUpdate:show": [Function, Array],
	onUpdateShow: [Function, Array],
	internalDeactivateImmediately: Boolean,
	internalSyncTargetWithParent: Boolean,
	internalInheritedEventHandlers: {
		type: Array,
		default: () => []
	},
	internalTrapFocus: Boolean,
	internalExtraClass: {
		type: Array,
		default: () => []
	},
	onShow: [Function, Array],
	onHide: [Function, Array],
	arrow: {
		type: Boolean,
		default: void 0
	},
	minWidth: Number,
	maxWidth: Number
};
var popoverProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), popoverBaseProps), {
	internalOnAfterLeave: Function,
	internalRenderBody: Function
});
var Popover_default = defineComponent({
	name: "Popover",
	inheritAttrs: false,
	props: popoverProps,
	slots: Object,
	__popover__: true,
	setup(props) {
		const isMountedRef = isMounted();
		const binderInstRef = ref(null);
		const controlledShowRef = computed(() => props.show);
		const uncontrolledShowRef = ref(props.defaultShow);
		const mergedShowWithoutDisabledRef = useMergedState(controlledShowRef, uncontrolledShowRef);
		const mergedShowConsideringDisabledPropRef = useMemo(() => {
			if (props.disabled) return false;
			return mergedShowWithoutDisabledRef.value;
		});
		const getMergedDisabled = () => {
			if (props.disabled) return true;
			const { getDisabled } = props;
			if (getDisabled === null || getDisabled === void 0 ? void 0 : getDisabled()) return true;
			return false;
		};
		const getMergedShow = () => {
			if (getMergedDisabled()) return false;
			return mergedShowWithoutDisabledRef.value;
		};
		const compatibleShowArrowRef = useCompitable(props, ["arrow", "showArrow"]);
		const mergedShowArrowRef = computed(() => {
			if (props.overlap) return false;
			return compatibleShowArrowRef.value;
		});
		let bodyInstance = null;
		const showTimerIdRef = ref(null);
		const hideTimerIdRef = ref(null);
		const positionManuallyRef = useMemo(() => {
			return props.x !== void 0 && props.y !== void 0;
		});
		function doUpdateShow(value) {
			const { "onUpdate:show": _onUpdateShow, onUpdateShow, onShow, onHide } = props;
			uncontrolledShowRef.value = value;
			if (_onUpdateShow) call(_onUpdateShow, value);
			if (onUpdateShow) call(onUpdateShow, value);
			if (value && onShow) call(onShow, true);
			if (value && onHide) call(onHide, false);
		}
		function syncPosition() {
			if (bodyInstance) bodyInstance.syncPosition();
		}
		function clearShowTimer() {
			const { value: showTimerId } = showTimerIdRef;
			if (showTimerId) {
				window.clearTimeout(showTimerId);
				showTimerIdRef.value = null;
			}
		}
		function clearHideTimer() {
			const { value: hideTimerId } = hideTimerIdRef;
			if (hideTimerId) {
				window.clearTimeout(hideTimerId);
				hideTimerIdRef.value = null;
			}
		}
		function handleFocus() {
			const mergedDisabled = getMergedDisabled();
			if (props.trigger === "focus" && !mergedDisabled) {
				if (getMergedShow()) return;
				doUpdateShow(true);
			}
		}
		function handleBlur() {
			const mergedDisabled = getMergedDisabled();
			if (props.trigger === "focus" && !mergedDisabled) {
				if (!getMergedShow()) return;
				doUpdateShow(false);
			}
		}
		function handleMouseEnter() {
			const mergedDisabled = getMergedDisabled();
			if (props.trigger === "hover" && !mergedDisabled) {
				clearHideTimer();
				if (showTimerIdRef.value !== null) return;
				if (getMergedShow()) return;
				const delayCallback = () => {
					doUpdateShow(true);
					showTimerIdRef.value = null;
				};
				const { delay } = props;
				if (delay === 0) delayCallback();
				else showTimerIdRef.value = window.setTimeout(delayCallback, delay);
			}
		}
		function handleMouseLeave() {
			const mergedDisabled = getMergedDisabled();
			if (props.trigger === "hover" && !mergedDisabled) {
				clearShowTimer();
				if (hideTimerIdRef.value !== null) return;
				if (!getMergedShow()) return;
				const delayedCallback = () => {
					doUpdateShow(false);
					hideTimerIdRef.value = null;
				};
				const { duration } = props;
				if (duration === 0) delayedCallback();
				else hideTimerIdRef.value = window.setTimeout(delayedCallback, duration);
			}
		}
		function handleMouseMoveOutside() {
			handleMouseLeave();
		}
		function handleClickOutside(e) {
			var _a;
			if (!getMergedShow()) return;
			if (props.trigger === "click") {
				clearShowTimer();
				clearHideTimer();
				doUpdateShow(false);
			}
			(_a = props.onClickoutside) === null || _a === void 0 || _a.call(props, e);
		}
		function handleClick() {
			if (props.trigger === "click" && !getMergedDisabled()) {
				clearShowTimer();
				clearHideTimer();
				doUpdateShow(!getMergedShow());
			}
		}
		function handleKeydown(e) {
			if (!props.internalTrapFocus) return;
			if (e.key === "Escape") {
				clearShowTimer();
				clearHideTimer();
				doUpdateShow(false);
			}
		}
		function setShow(value) {
			uncontrolledShowRef.value = value;
		}
		function getTriggerElement() {
			var _a;
			return (_a = binderInstRef.value) === null || _a === void 0 ? void 0 : _a.targetRef;
		}
		function setBodyInstance(value) {
			bodyInstance = value;
		}
		provide("NPopover", {
			getTriggerElement,
			handleKeydown,
			handleMouseEnter,
			handleMouseLeave,
			handleClickOutside,
			handleMouseMoveOutside,
			setBodyInstance,
			positionManuallyRef,
			isMountedRef,
			zIndexRef: toRef(props, "zIndex"),
			extraClassRef: toRef(props, "internalExtraClass"),
			internalRenderBodyRef: toRef(props, "internalRenderBody")
		});
		watchEffect(() => {
			if (mergedShowWithoutDisabledRef.value && getMergedDisabled()) doUpdateShow(false);
		});
		return {
			binderInstRef,
			positionManually: positionManuallyRef,
			mergedShowConsideringDisabledProp: mergedShowConsideringDisabledPropRef,
			uncontrolledShow: uncontrolledShowRef,
			mergedShowArrow: mergedShowArrowRef,
			getMergedShow,
			setShow,
			handleClick,
			handleMouseEnter,
			handleMouseLeave,
			handleFocus,
			handleBlur,
			syncPosition
		};
	},
	render() {
		var _a;
		const { positionManually, $slots: slots } = this;
		let triggerVNode;
		let popoverInside = false;
		if (!positionManually) {
			triggerVNode = getFirstSlotVNode(slots, "trigger");
			if (triggerVNode) {
				triggerVNode = cloneVNode(triggerVNode);
				triggerVNode = triggerVNode.type === Text ? h("span", [triggerVNode]) : triggerVNode;
				const handlers = {
					onClick: this.handleClick,
					onMouseenter: this.handleMouseEnter,
					onMouseleave: this.handleMouseLeave,
					onFocus: this.handleFocus,
					onBlur: this.handleBlur
				};
				if ((_a = triggerVNode.type) === null || _a === void 0 ? void 0 : _a.__popover__) {
					popoverInside = true;
					if (!triggerVNode.props) triggerVNode.props = {
						internalSyncTargetWithParent: true,
						internalInheritedEventHandlers: []
					};
					triggerVNode.props.internalSyncTargetWithParent = true;
					if (!triggerVNode.props.internalInheritedEventHandlers) triggerVNode.props.internalInheritedEventHandlers = [handlers];
					else triggerVNode.props.internalInheritedEventHandlers = [handlers, ...triggerVNode.props.internalInheritedEventHandlers];
				} else {
					const { internalInheritedEventHandlers } = this;
					const ascendantAndCurrentHandlers = [handlers, ...internalInheritedEventHandlers];
					appendEvents(triggerVNode, internalInheritedEventHandlers ? "nested" : positionManually ? "manual" : this.trigger, {
						onBlur: (e) => {
							ascendantAndCurrentHandlers.forEach((_handlers) => {
								_handlers.onBlur(e);
							});
						},
						onFocus: (e) => {
							ascendantAndCurrentHandlers.forEach((_handlers) => {
								_handlers.onFocus(e);
							});
						},
						onClick: (e) => {
							ascendantAndCurrentHandlers.forEach((_handlers) => {
								_handlers.onClick(e);
							});
						},
						onMouseenter: (e) => {
							ascendantAndCurrentHandlers.forEach((_handlers) => {
								_handlers.onMouseenter(e);
							});
						},
						onMouseleave: (e) => {
							ascendantAndCurrentHandlers.forEach((_handlers) => {
								_handlers.onMouseleave(e);
							});
						}
					});
				}
			}
		}
		return h(Binder, {
			ref: "binderInstRef",
			syncTarget: !popoverInside,
			syncTargetWithParent: this.internalSyncTargetWithParent
		}, { default: () => {
			this.mergedShowConsideringDisabledProp;
			const mergedShow = this.getMergedShow();
			return [
				this.internalTrapFocus && mergedShow ? withDirectives(h("div", { style: {
					position: "fixed",
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				} }), [[zindexable, {
					enabled: mergedShow,
					zIndex: this.zIndex
				}]]) : null,
				positionManually ? null : h(Target_default, null, { default: () => triggerVNode }),
				h(PopoverBody_default, keep(this.$props, bodyPropKeys, Object.assign(Object.assign({}, this.$attrs), {
					showArrow: this.mergedShowArrow,
					show: mergedShow
				})), {
					default: () => {
						var _a, _b;
						return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a);
					},
					header: () => {
						var _a, _b;
						return (_b = (_a = this.$slots).header) === null || _b === void 0 ? void 0 : _b.call(_a);
					},
					footer: () => {
						var _a, _b;
						return (_b = (_a = this.$slots).footer) === null || _b === void 0 ? void 0 : _b.call(_a);
					}
				})
			];
		} });
	}
});
//#endregion
export { onFontsReady as _, baseIteratee as a, baseGet as c, cssrAnchorMetaName as d, Target_default as f, internalSelectionMenuInjectionKey as g, internalSelectionMenuBodyInjectionKey as h, baseMap as i, Follower_default as l, useAdjustedTo as m, popoverBaseProps as n, baseIsEqual as o, Binder as p, renderArrow as r, get as s, Popover_default as t, c as u, beforeNextFrameOnce as v };
