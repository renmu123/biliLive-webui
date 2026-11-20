import { C as computed, F as h, L as init_runtime_core_esm_bundler, M as defineComponent, _ as Comment } from "./request-CkCeAZAO.js";
import { Gr as depx, Kr as getGap, Nn as useConfig, St as useTheme, Tt as useRtl, fr as isBrowser, ni as createKey, qn as flatten, x as spaceLight } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/vue/get-slot.mjs
function getSlot(instance, slotName = "default", fallback = []) {
	const slot = instance.$slots[slotName];
	if (slot === void 0) return fallback;
	return slot();
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/space/src/utils.mjs
var supportFlexGap;
function ensureSupportFlexGap() {
	if (!isBrowser) return true;
	if (supportFlexGap === void 0) {
		const flex = document.createElement("div");
		flex.style.display = "flex";
		flex.style.flexDirection = "column";
		flex.style.rowGap = "1px";
		flex.appendChild(document.createElement("div"));
		flex.appendChild(document.createElement("div"));
		document.body.appendChild(flex);
		const isSupported = flex.scrollHeight === 1;
		document.body.removeChild(flex);
		return supportFlexGap = isSupported;
	}
	return supportFlexGap;
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/space/src/Space.mjs
init_runtime_core_esm_bundler();
var spaceProps = Object.assign(Object.assign({}, useTheme.props), {
	align: String,
	justify: {
		type: String,
		default: "start"
	},
	inline: Boolean,
	vertical: Boolean,
	reverse: Boolean,
	size: [
		String,
		Number,
		Array
	],
	wrapItem: {
		type: Boolean,
		default: true
	},
	itemClass: String,
	itemStyle: [String, Object],
	wrap: {
		type: Boolean,
		default: true
	},
	internalUseGap: {
		type: Boolean,
		default: void 0
	}
});
var Space_default = defineComponent({
	name: "Space",
	props: spaceProps,
	setup(props) {
		const { mergedClsPrefixRef, mergedRtlRef, mergedComponentPropsRef } = useConfig(props);
		const mergedSizeRef = computed(() => {
			var _a, _b;
			return props.size || ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Space) === null || _b === void 0 ? void 0 : _b.size) || "medium";
		});
		const themeRef = useTheme("Space", "-space", void 0, spaceLight, props, mergedClsPrefixRef);
		const rtlEnabledRef = useRtl("Space", mergedRtlRef, mergedClsPrefixRef);
		return {
			useGap: ensureSupportFlexGap(),
			rtlEnabled: rtlEnabledRef,
			mergedClsPrefix: mergedClsPrefixRef,
			margin: computed(() => {
				const size = mergedSizeRef.value;
				if (Array.isArray(size)) return {
					horizontal: size[0],
					vertical: size[1]
				};
				if (typeof size === "number") return {
					horizontal: size,
					vertical: size
				};
				const { self: { [createKey("gap", size)]: gap } } = themeRef.value;
				const { row, col } = getGap(gap);
				return {
					horizontal: depx(col),
					vertical: depx(row)
				};
			})
		};
	},
	render() {
		const { vertical, reverse, align, inline, justify, itemClass, itemStyle, margin, wrap, mergedClsPrefix, rtlEnabled, useGap, wrapItem, internalUseGap } = this;
		const children = flatten(getSlot(this), false);
		if (!children.length) return null;
		const horizontalMargin = `${margin.horizontal}px`;
		const semiHorizontalMargin = `${margin.horizontal / 2}px`;
		const verticalMargin = `${margin.vertical}px`;
		const semiVerticalMargin = `${margin.vertical / 2}px`;
		const lastIndex = children.length - 1;
		const isJustifySpace = justify.startsWith("space-");
		return h("div", {
			role: "none",
			class: [`${mergedClsPrefix}-space`, rtlEnabled && `${mergedClsPrefix}-space--rtl`],
			style: {
				display: inline ? "inline-flex" : "flex",
				flexDirection: (() => {
					if (vertical && !reverse) return "column";
					if (vertical && reverse) return "column-reverse";
					if (!vertical && reverse) return "row-reverse";
					else return "row";
				})(),
				justifyContent: ["start", "end"].includes(justify) ? `flex-${justify}` : justify,
				flexWrap: !wrap || vertical ? "nowrap" : "wrap",
				marginTop: useGap || vertical ? "" : `-${semiVerticalMargin}`,
				marginBottom: useGap || vertical ? "" : `-${semiVerticalMargin}`,
				alignItems: align,
				gap: useGap ? `${margin.vertical}px ${margin.horizontal}px` : ""
			}
		}, !wrapItem && (useGap || internalUseGap) ? children : children.map((child, index) => child.type === Comment ? child : h("div", {
			role: "none",
			class: itemClass,
			style: [
				itemStyle,
				{ maxWidth: "100%" },
				useGap ? "" : vertical ? { marginBottom: index !== lastIndex ? verticalMargin : "" } : rtlEnabled ? {
					marginLeft: isJustifySpace ? justify === "space-between" && index === lastIndex ? "" : semiHorizontalMargin : index !== lastIndex ? horizontalMargin : "",
					marginRight: isJustifySpace ? justify === "space-between" && index === 0 ? "" : semiHorizontalMargin : "",
					paddingTop: semiVerticalMargin,
					paddingBottom: semiVerticalMargin
				} : {
					marginRight: isJustifySpace ? justify === "space-between" && index === lastIndex ? "" : semiHorizontalMargin : index !== lastIndex ? horizontalMargin : "",
					marginLeft: isJustifySpace ? justify === "space-between" && index === 0 ? "" : semiHorizontalMargin : "",
					paddingTop: semiVerticalMargin,
					paddingBottom: semiVerticalMargin
				}
			]
		}, child)));
	}
});
//#endregion
export { getSlot as n, Space_default as t };
