import { d as defineComponent, c as createElementBlock, e as createBaseVNode, o as openBlock } from "./index-gjuLIDoI.js";
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const CloseOutline = defineComponent({
  name: "CloseOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M368 368L144 144"
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
            d: "M368 144L144 368"
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
  CloseOutline as C
};
