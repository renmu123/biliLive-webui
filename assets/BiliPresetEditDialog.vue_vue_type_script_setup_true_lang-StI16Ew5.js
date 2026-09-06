import { d as defineComponent, l as h, b5 as XScrollbar, r as ref, c as createElementBlock, e as createBaseVNode, o as openBlock, al as mergeModels, am as useModel, g as createBlock, w as withCtx, ar as __unplugin_components_3, a as createVNode, B as Button, j as createTextVNode, f as unref, _ as __unplugin_components_3$1 } from "./index-CB8xvhFr.js";
import { b as VVirtualList } from "./Select-CYnthXY-.js";
import { B as BiliSetting } from "./BiliSetting-Wua-gkDk.js";
const virtualListProps = {
  scrollbarProps: Object,
  items: {
    type: Array,
    default: () => []
  },
  itemSize: {
    type: Number,
    required: true
  },
  itemResizable: Boolean,
  itemsStyle: [String, Object],
  visibleItemsTag: {
    type: [String, Object],
    default: "div"
  },
  visibleItemsProps: Object,
  ignoreItemResize: Boolean,
  onScroll: Function,
  onWheel: Function,
  onResize: Function,
  defaultScrollKey: [Number, String],
  defaultScrollIndex: Number,
  keyField: {
    type: String,
    default: "key"
  },
  paddingTop: {
    type: [Number, String],
    default: 0
  },
  paddingBottom: {
    type: [Number, String],
    default: 0
  }
};
const __unplugin_components_8 = defineComponent({
  name: "VirtualList",
  props: virtualListProps,
  setup(props) {
    const scrollbarInstRef = ref(null);
    const virtualListInstRef = ref(null);
    function syncScrollbar() {
      const {
        value: scrollbarInst
      } = scrollbarInstRef;
      if (scrollbarInst) scrollbarInst.sync();
    }
    function handleScroll(e) {
      var _a;
      syncScrollbar();
      (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleResize(e) {
      var _a;
      syncScrollbar();
      (_a = props.onResize) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleWheel(e) {
      var _a;
      (_a = props.onWheel) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function scrollTo(options, y) {
      var _a, _b;
      if (typeof options === "number") {
        (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(options, y !== null && y !== void 0 ? y : 0);
      } else {
        (_b = virtualListInstRef.value) === null || _b === void 0 ? void 0 : _b.scrollTo(options);
      }
    }
    function getScrollContainer() {
      var _a;
      return (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.listElRef;
    }
    function getScrollContent() {
      var _a;
      return (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.itemsElRef;
    }
    return {
      scrollTo,
      scrollbarInstRef,
      virtualListInstRef,
      getScrollContainer,
      getScrollContent,
      handleScroll,
      handleResize,
      handleWheel
    };
  },
  render() {
    return h(XScrollbar, Object.assign({}, this.scrollbarProps, {
      ref: "scrollbarInstRef",
      container: this.getScrollContainer,
      content: this.getScrollContent
    }), {
      default: () => {
        return h(VVirtualList, {
          ref: "virtualListInstRef",
          showScrollbar: false,
          items: this.items,
          itemSize: this.itemSize,
          itemResizable: this.itemResizable,
          itemsStyle: this.itemsStyle,
          visibleItemsTag: this.visibleItemsTag,
          visibleItemsProps: this.visibleItemsProps,
          ignoreItemResize: this.ignoreItemResize,
          keyField: this.keyField,
          defaultScrollKey: this.defaultScrollKey,
          defaultScrollIndex: this.defaultScrollIndex,
          paddingTop: this.paddingTop,
          paddingBottom: this.paddingBottom,
          onScroll: this.handleScroll,
          onResize: this.handleResize,
          onWheel: this.handleWheel
        }, {
          default: ({
            item,
            index
          }) => {
            var _a, _b;
            return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a, {
              item,
              index
            });
          }
        });
      }
    });
  }
});
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const SettingsOutline = defineComponent({
  name: "SettingsOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$1,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
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
const _hoisted_1 = { style: { "max-height": "75vh", "overflow": "auto", "padding-right": "4px" } };
const _hoisted_2 = { style: { "text-align": "right" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BiliPresetEditDialog",
  props: /* @__PURE__ */ mergeModels({
    presetId: {},
    title: { default: "编辑上传预设" }
  }, {
    "show": { type: Boolean, ...{
      default: false
    } },
    "showModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["saved"], ["update:show"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const visible = useModel(__props, "show");
    const emits = __emit;
    const biliSettingRef = ref(null);
    const currentPreset = ref(null);
    const saving = ref(false);
    const handleChange = (value) => {
      currentPreset.value = value;
    };
    const handleSave = async () => {
      if (!biliSettingRef.value) {
        return;
      }
      saving.value = true;
      try {
        const saved = await biliSettingRef.value.savePreset();
        if (!saved) {
          return;
        }
        if (currentPreset.value) {
          emits("saved", currentPreset.value);
        }
        visible.value = false;
      } finally {
        saving.value = false;
      }
    };
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_3$1;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: visible.value,
        "onUpdate:show": _cache[1] || (_cache[1] = ($event) => visible.value = $event)
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "min(1100px, 92vw)" },
            bordered: false,
            role: "dialog",
            "aria-modal": "true",
            title: props.title
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createVNode(_component_n_button, {
                  onClick: _cache[0] || (_cache[0] = ($event) => visible.value = false)
                }, {
                  default: withCtx(() => _cache[2] || (_cache[2] = [
                    createTextVNode("取消")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "primary",
                  style: { "margin-left": "10px" },
                  loading: unref(saving),
                  disabled: !props.presetId,
                  onClick: handleSave
                }, {
                  default: withCtx(() => _cache[3] || (_cache[3] = [
                    createTextVNode(" 保存 ")
                  ])),
                  _: 1
                }, 8, ["loading", "disabled"])
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(BiliSetting, {
                  ref_key: "biliSettingRef",
                  ref: biliSettingRef,
                  mode: "edit-only",
                  "preset-id": props.presetId,
                  "show-action-buttons": false,
                  onChange: handleChange
                }, null, 8, ["preset-id"])
              ])
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
export {
  SettingsOutline as S,
  _sfc_main as _,
  __unplugin_components_8 as a
};
