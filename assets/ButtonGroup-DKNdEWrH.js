import { d as defineComponent, c as createElementBlock, e as createBaseVNode, o as openBlock, ap as normalizeClass, a as createVNode, B as Button, w as withCtx, aF as renderSlot, f as unref } from "./index-CB8xvhFr.js";
import { _ as __unplugin_components_5 } from "./Dropdown-CwFZzQPI.js";
import { N as NIcon } from "./Icon-D1o4HjX4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const CaretDownOutline = defineComponent({
  name: "CaretDownOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$1,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",
            fill: "currentColor"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1 = { class: "icon-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      const _component_n_dropdown = __unplugin_components_5;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["button-group", props.size ?? "medium"])
      }, [
        createVNode(_component_n_button, {
          type: "primary",
          style: { "border-radius": "3px 0px 0px 3px" },
          onClick: _cache[0] || (_cache[0] = ($event) => handleSelect()),
          size: props.size ?? "medium"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["size"]),
        createVNode(_component_n_dropdown, {
          trigger: props.trigger,
          options: props.options,
          onSelect: handleSelect
        }, {
          default: withCtx(() => [
            createBaseVNode("span", _hoisted_1, [
              createVNode(_component_n_icon, {
                size: props.size === "small" ? 14 : 18,
                class: "icon"
              }, {
                default: withCtx(() => [
                  createVNode(unref(CaretDownOutline), { class: "cart-down-icon" })
                ]),
                _: 1
              }, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["trigger", "options"])
      ], 2);
    };
  }
});
const ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea4d932d"]]);
export {
  ButtonGroup as B
};
