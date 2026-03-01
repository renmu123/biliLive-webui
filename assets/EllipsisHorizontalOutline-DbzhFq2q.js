import { d as defineComponent, c as createElementBlock, e as createBaseVNode, o as openBlock } from "./index-gjuLIDoI.js";
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const EllipsisHorizontalOutline = defineComponent({
  name: "EllipsisHorizontalOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "circle",
          {
            cx: "256",
            cy: "256",
            r: "32",
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
          "circle",
          {
            cx: "416",
            cy: "256",
            r: "32",
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
          "circle",
          {
            cx: "96",
            cy: "256",
            r: "32",
            fill: "none",
            stroke: "currentColor",
            "stroke-miterlimit": "10",
            "stroke-width": "32"
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
  EllipsisHorizontalOutline as E
};
