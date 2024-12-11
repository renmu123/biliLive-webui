import { d as defineComponent, o as openBlock, ah as createElementBlock, e as createBaseVNode, c as createBlock, w as withCtx, f as createTextVNode, ap as toDisplayString, a as createVNode, b as unref, cq as renderSlot } from "./index-NC0giMhn.js";
import { N as NIcon, _ as __unplugin_components_2 } from "./index-DAcKDtwE.js";
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45c10 4.76 29.47 16.38 29.47 41.09c0 26-17 37.81-36.37 50.8S251 281.43 251 296",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "28"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "circle",
  {
    cx: "250",
    cy: "348",
    r: "20",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5 = [_hoisted_2$1, _hoisted_3, _hoisted_4];
const HelpCircleOutline = defineComponent({
  name: "HelpCircleOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_5);
  }
});
const _hoisted_1 = { style: { "display": "inline-flex" } };
const _hoisted_2 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tip",
  props: {
    size: { default: 18 },
    tip: { default: "" },
    text: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_popover = __unplugin_components_2;
      return openBlock(), createBlock(_component_n_popover, { trigger: "hover" }, {
        trigger: withCtx(() => [
          createBaseVNode("span", _hoisted_1, [
            createTextVNode(toDisplayString(props.text), 1),
            createVNode(_component_n_icon, {
              size: props.size,
              style: { "cursor": "help" }
            }, {
              default: withCtx(() => [
                createVNode(unref(HelpCircleOutline))
              ]),
              _: 1
            }, 8, ["size"])
          ])
        ]),
        default: withCtx(() => [
          props.tip ? (openBlock(), createElementBlock("span", {
            key: 0,
            innerHTML: props.tip
          }, null, 8, _hoisted_2)) : renderSlot(_ctx.$slots, "default", { key: 1 })
        ]),
        _: 3
      });
    };
  }
});
export {
  HelpCircleOutline as H,
  _sfc_main as _
};
