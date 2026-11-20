import { D as createElementBlock, Kt as normalizeClass, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, Tt as unref, Z as openBlock, et as renderSlot, ft as init_reactivity_esm_bundler, j as createVNode, st as withCtx, w as createBaseVNode } from "./request-CkCeAZAO.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { t as Dropdown_default } from "./Dropdown-BGb63-e4.js";
import { t as NIcon } from "./Icon-9AfBo3jH.js";
import { K as Button } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/CaretDownOutline.js
init_runtime_core_esm_bundler();
var _hoisted_1$1 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var CaretDownOutline_default = defineComponent({
	name: "CaretDownOutline",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region src/renderer/src/components/ButtonGroup.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "icon-container" };
//#endregion
//#region src/renderer/src/components/ButtonGroup.vue
var ButtonGroup_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ButtonGroup",
	props: {
		trigger: { default: "hover" },
		options: { default: () => [] },
		size: {}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const handleSelect = (key) => {
			emits("click", key);
		};
		return (_ctx, _cache) => {
			const _component_n_button = Button;
			const _component_n_icon = NIcon;
			const _component_n_dropdown = Dropdown_default;
			return openBlock(), createElementBlock("div", { class: normalizeClass(["button-group", props.size ?? "medium"]) }, [createVNode(_component_n_button, {
				type: "primary",
				style: { "border-radius": "3px 0px 0px 3px" },
				onClick: _cache[0] || (_cache[0] = ($event) => handleSelect()),
				size: props.size ?? "medium"
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
				_: 3
			}, 8, ["size"]), createVNode(_component_n_dropdown, {
				trigger: props.trigger,
				options: props.options,
				onSelect: handleSelect
			}, {
				default: withCtx(() => [createBaseVNode("span", _hoisted_1, [createVNode(_component_n_icon, {
					size: props.size === "small" ? 14 : 18,
					class: "icon"
				}, {
					default: withCtx(() => [createVNode(unref(CaretDownOutline_default), { class: "cart-down-icon" })]),
					_: 1
				}, 8, ["size"])])]),
				_: 1
			}, 8, ["trigger", "options"])], 2);
		};
	}
}), [["__scopeId", "data-v-ea4d932d"]]);
//#endregion
export { ButtonGroup_default as t };
