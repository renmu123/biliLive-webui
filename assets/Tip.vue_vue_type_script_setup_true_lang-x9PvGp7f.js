import { _ as __unplugin_components_2 } from "./Popover-T5GorXob.js";
import { H as HelpCircleOutline } from "./HelpCircleOutline-JWqllQs0.js";
import { N as NIcon } from "./Icon-D2Zo6Coc.js";
import { d as defineComponent, g as createBlock, w as withCtx, c as createElementBlock, aB as renderSlot, e as createBaseVNode, j as createTextVNode, a as createVNode, t as toDisplayString, f as unref, o as openBlock } from "./index-gjuLIDoI.js";
const _hoisted_1 = { style: { "display": "inline-flex", "cursor": "help" } };
const _hoisted_2 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tip",
  props: {
    size: { default: 18 },
    tip: { default: "" },
    text: {},
    placement: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_popover = __unplugin_components_2;
      return openBlock(), createBlock(_component_n_popover, {
        trigger: "hover",
        placement: _ctx.placement
      }, {
        trigger: withCtx(() => [
          createBaseVNode("span", _hoisted_1, [
            createTextVNode(toDisplayString(props.text), 1),
            createVNode(_component_n_icon, {
              size: props.size
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
      }, 8, ["placement"]);
    };
  }
});
export {
  _sfc_main as _
};
