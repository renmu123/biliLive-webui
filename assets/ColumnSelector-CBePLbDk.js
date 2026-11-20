import { $ as renderList, A as createTextVNode, D as createElementBlock, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, T as createBlock, Tt as unref, Z as openBlock, Zt as toDisplayString, at as watch, et as renderSlot, ft as init_reactivity_esm_bundler, j as createVNode, st as withCtx, v as Fragment, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { t as Popover_default } from "./Popover-BND3al2G.js";
import { t as Checkbox_default } from "./Checkbox-C9dpLVBG.js";
import { K as Button } from "./index-CPQhEiaa.js";
//#region src/renderer/src/hooks/useVisibleColumns.ts
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
function useVisibleColumns(options) {
	const { columns, storageKey } = options;
	const getDefaultColumns = () => {
		return columns.map((col) => col.value);
	};
	const initVisibleColumns = () => {
		const saved = localStorage.getItem(storageKey);
		if (saved) try {
			return JSON.parse(saved);
		} catch (error) {
			console.error("解析保存的列配置失败:", error);
			return getDefaultColumns();
		}
		return getDefaultColumns();
	};
	const saveColumnConfig = (value) => {
		localStorage.setItem(storageKey, JSON.stringify(value));
	};
	const visibleColumns = ref(initVisibleColumns());
	watch(() => visibleColumns.value, (newVal) => {
		saveColumnConfig(newVal);
	});
	return { visibleColumns };
}
//#endregion
//#region src/renderer/src/components/ColumnSelector.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { style: {
	"max-height": "400px",
	"overflow-y": "auto",
	"padding": "8px"
} };
var _hoisted_2 = ["onClick"];
//#endregion
//#region src/renderer/src/components/ColumnSelector.vue
var ColumnSelector_default = /* @__PURE__ */ defineComponent({
	__name: "ColumnSelector",
	props: {
		columns: {},
		modelValue: {}
	},
	emits: ["update:modelValue", "change"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const toggleColumn = (columnValue) => {
			const newValue = [...props.modelValue];
			const index = newValue.indexOf(columnValue);
			if (index > -1) newValue.splice(index, 1);
			else newValue.push(columnValue);
			emit("update:modelValue", newValue);
			emit("change", newValue);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Popover_default), {
				trigger: "click",
				placement: "bottom-start"
			}, {
				trigger: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createVNode(unref(Button), { type: "info" }, {
					default: withCtx(() => _cache[0] || (_cache[0] = [createTextVNode("显示字段")])),
					_: 1
				})])]),
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (col) => {
					return openBlock(), createElementBlock("div", {
						key: col.value,
						style: {
							"display": "flex",
							"align-items": "center",
							"gap": "8px",
							"padding": "4px 0",
							"cursor": "pointer"
						},
						onClick: ($event) => toggleColumn(col.value)
					}, [createVNode(unref(Checkbox_default), { checked: _ctx.modelValue.includes(col.value) }, null, 8, ["checked"]), createBaseVNode("span", null, toDisplayString(col.label), 1)], 8, _hoisted_2);
				}), 128))])]),
				_: 3
			});
		};
	}
});
//#endregion
export { useVisibleColumns as n, ColumnSelector_default as t };
