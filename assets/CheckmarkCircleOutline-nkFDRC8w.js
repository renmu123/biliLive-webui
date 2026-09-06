import { d as defineComponent, c as createElementBlock, e as createBaseVNode, o as openBlock } from "./index-CB8xvhFr.js";
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const CheckmarkCircleOutline = defineComponent({
  name: "CheckmarkCircleOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",
            fill: "none",
            stroke: "currentColor",
            "stroke-miterlimit": "10",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M352 176L217.6 336L160 272"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
export {
  CheckmarkCircleOutline as C
};
