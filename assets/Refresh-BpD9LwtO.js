import { d as defineComponent, c as createElementBlock, e as createBaseVNode, o as openBlock } from "./index-CB8xvhFr.js";
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const Refresh = defineComponent({
  name: "Refresh",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M320 146s24.36-12-64-12a160 160 0 1 0 160 160",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
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
            d: "M256 58l80 80l-80 80"
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
  Refresh as R
};
