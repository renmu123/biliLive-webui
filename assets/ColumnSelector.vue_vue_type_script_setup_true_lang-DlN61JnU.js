import { r as ref, Y as watch, d as defineComponent, g as createBlock, w as withCtx, f as unref, e as createBaseVNode, c as createElementBlock, ao as renderList, a as createVNode, t as toDisplayString, F as Fragment, aF as renderSlot, j as createTextVNode, B as Button, o as openBlock } from "./index-CB8xvhFr.js";
import { _ as __unplugin_components_2 } from "./Popover-D4v8saSe.js";
import { _ as __unplugin_components_1 } from "./Checkbox-Buw5q29r.js";
function useVisibleColumns(options) {
  const { columns, storageKey } = options;
  const getDefaultColumns = () => {
    return columns.map((col) => col.value);
  };
  const initVisibleColumns = () => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        console.error("解析保存的列配置失败:", error);
        return getDefaultColumns();
      }
    }
    return getDefaultColumns();
  };
  const saveColumnConfig = (value) => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  };
  const visibleColumns = ref(initVisibleColumns());
  watch(
    () => visibleColumns.value,
    (newVal) => {
      saveColumnConfig(newVal);
    }
  );
  return {
    visibleColumns
  };
}
const _hoisted_1 = { style: { "max-height": "400px", "overflow-y": "auto", "padding": "8px" } };
const _hoisted_2 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      if (index > -1) {
        newValue.splice(index, 1);
      } else {
        newValue.push(columnValue);
      }
      emit("update:modelValue", newValue);
      emit("change", newValue);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(__unplugin_components_2), {
        trigger: "click",
        placement: "bottom-start"
      }, {
        trigger: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createVNode(unref(Button), { type: "info" }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode("显示字段")
              ])),
              _: 1
            })
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (col) => {
              return openBlock(), createElementBlock("div", {
                key: col.value,
                style: { "display": "flex", "align-items": "center", "gap": "8px", "padding": "4px 0", "cursor": "pointer" },
                onClick: ($event) => toggleColumn(col.value)
              }, [
                createVNode(unref(__unplugin_components_1), {
                  checked: _ctx.modelValue.includes(col.value)
                }, null, 8, ["checked"]),
                createBaseVNode("span", null, toDisplayString(col.label), 1)
              ], 8, _hoisted_2);
            }), 128))
          ])
        ]),
        _: 3
      });
    };
  }
});
export {
  _sfc_main as _,
  useVisibleColumns as u
};
