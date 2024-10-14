import { h as hotkeys, _ as __unplugin_components_1$1 } from "./hotkeys.esm-1zIhzqwe.js";
import { cV as Symbol$1, cW as isArray, cX as isArguments, cY as arrayPush, cZ as isSymbol, c_ as arrayMap, c$ as identity, d0 as baseMap, d1 as baseGet, d2 as baseUnary, d3 as baseIteratee, d4 as baseRest, d5 as isIterateeCall, d as defineComponent, r as ref, a2 as h, d6 as VVirtualList, d7 as XScrollbar, f as openBlock, n as createElementBlock, k as createBaseVNode, i as createVNode, h as withCtx, I as Button, d8 as __unplugin_components_2, c0 as renderSlot, j as unref, N as NIcon, P as _export_sfc, m as mergeModels, c as useModel, s as storeToRefs, b as useFfmpegPreset, V as useAppConfig, d9 as useSegmentStore, u as useNotification, e as computed, g as createBlock, K as __unplugin_components_3, l as createTextVNode, aI as toDisplayString, aL as FolderOpenOutline, aG as renderList, F as Fragment, da as secondsToTimemark, _ as __unplugin_components_0, C as _sfc_main$5, G as __unplugin_components_2$1, aE as __unplugin_components_4, J as __unplugin_components_2$2, bY as reactive, db as watchThrottled, t as withKeys, p as createCommentVNode, dc as __unplugin_components_2$3, E as __unplugin_components_1, Q as onActivated, q as isRef, a5 as inject, dd as Refresh, aH as normalizeClass, cF as withModifiers, M as pushScopeId, O as popScopeId, X as useStorage, R as onDeactivated, S as onUnmounted, au as watchEffect, de as useElementSize, o as onMounted, cD as withDirectives, cw as vShow, ai as provide, cS as supportedVideoExtensions, y as uuid, v as toRaw, df as useDebounceFn } from "./index--gUAYtmw.js";
import { _ as _sfc_main$6 } from "./Index.vue_vue_type_style_index_0_lang-56r6OtuH.js";
import { D as DanmuFactorySettingDailog } from "./DanmuFactorySettingDailog-9PDYyqs5.js";
import { f as filenamify } from "./filenamify-DOXWXCz-.js";
import { _ as __unplugin_components_3$1, a as __unplugin_components_5 } from "./RadioGroup-BP8eQLS8.js";
import { _ as __unplugin_components_9 } from "./Spin-Eck8dMm4.js";
import "./CloseOutline-2NJFdTs4.js";
import "./DanmuFactorySetting-KZCTPVr2.js";
import "./Divider-DnSgvn6o.js";
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (predicate(value)) {
      {
        arrayPush(result, value);
      }
    } else {
      result[result.length] = value;
    }
  }
  return result;
}
function baseSortBy(array, comparer) {
  var length = array.length;
  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
    var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }
    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}
function compareMultiple(object, other, orders) {
  var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == "desc" ? -1 : 1);
    }
  }
  return object.index - other.index;
}
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }
  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
  var result = baseMap(collection, function(value, key2, collection2) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { "criteria": criteria, "index": ++index, "value": value };
  });
  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees), []);
});
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
const _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$c = /* @__PURE__ */ createBaseVNode(
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
);
const _hoisted_3$b = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M256 176v160"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$5 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M336 256H176"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$3 = [_hoisted_2$c, _hoisted_3$b, _hoisted_4$5];
const AddIcon = defineComponent({
  name: "AddCircleOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_5$3);
  }
});
const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$b = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$a = [_hoisted_2$b];
const CaretDownOutline = defineComponent({
  name: "CaretDownOutline",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$a);
  }
});
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$a = /* @__PURE__ */ createBaseVNode(
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
);
const _hoisted_3$9 = /* @__PURE__ */ createBaseVNode(
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
);
const _hoisted_4$4 = [_hoisted_2$a, _hoisted_3$9];
const CheckmarkCircleOutline = defineComponent({
  name: "CheckmarkCircleOutline",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_4$4);
  }
});
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "44",
    d: "M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13l-24.1-24.1z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$8 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M413.07 74.84l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "44"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$3 = [_hoisted_2$9, _hoisted_3$8];
const Pencil = defineComponent({
  name: "Pencil",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_4$3);
  }
});
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode(
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
);
const _hoisted_3$7 = [_hoisted_2$8];
const RadioButtonOffSharp = defineComponent({
  name: "RadioButtonOffSharp",
  render: function render5(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$7);
  }
});
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$6 = [_hoisted_2$7];
const SearchIcon = defineComponent({
  name: "Search",
  render: function render6(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$6);
  }
});
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M19 12.998H5v-2h14z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$5 = [_hoisted_2$6];
const MinusOutlined = defineComponent({
  name: "MinusOutlined",
  render: function render7(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$5);
  }
});
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$4 = [_hoisted_2$5];
const PlusOutlined = defineComponent({
  name: "PlusOutlined",
  render: function render8(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$4);
  }
});
const _hoisted_1$4 = { class: "button-group" };
const _hoisted_2$4 = { class: "icon-container" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ButtonGroup",
  props: {
    trigger: { default: "hover" },
    options: { default: () => [] }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const handleSelect = (key2) => {
      emits("click", key2);
    };
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_icon = NIcon;
      const _component_n_dropdown = __unplugin_components_2;
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(_component_n_button, {
          type: "primary",
          style: { "border-radius": "3px 0px 0px 3px" },
          onClick: _cache[0] || (_cache[0] = ($event) => handleSelect())
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _: 3
        }),
        createVNode(_component_n_dropdown, {
          trigger: props.trigger,
          options: props.options,
          onSelect: handleSelect
        }, {
          default: withCtx(() => [
            createBaseVNode("span", _hoisted_2$4, [
              createVNode(_component_n_icon, {
                size: "20",
                class: "icon"
              }, {
                default: withCtx(() => [
                  createVNode(unref(CaretDownOutline), { class: "cart-down-icon" })
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["trigger", "options"])
      ]);
    };
  }
});
const ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-70c29004"]]);
const _hoisted_1$3 = { style: { "display": "flex", "flex-direction": "column", "gap": "10px" } };
const _hoisted_2$3 = { style: { "color": "skyblue" } };
const _hoisted_3$3 = {
  class: "flex",
  style: { "align-items": "center" }
};
const _hoisted_4$2 = {
  class: "flex",
  style: { "align-items": "center" }
};
const _hoisted_5$2 = { style: { "margin-bottom": "5px" } };
const _hoisted_6$2 = { style: { "color": "red" } };
const _hoisted_7$2 = ["title", "onClick"];
const _hoisted_8$1 = { class: "footer" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ExportModal",
  props: /* @__PURE__ */ mergeModels({
    files: { default: () => {
      return {
        videoPath: null,
        danmuPath: null
      };
    } }
  }, {
    "modelValue": { type: Boolean, ...{ required: true, default: false } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const visible = useModel(__props, "modelValue");
    const { ffmpegOptions } = storeToRefs(useFfmpegPreset());
    const { appConfig } = storeToRefs(useAppConfig());
    const { cuts, selectedCuts } = storeToRefs(useSegmentStore());
    const notice = useNotification();
    const exportOptions = appConfig.value.tool.videoCut;
    const confirmExport = async () => {
      if (!exportOptions.ffmpegPresetId) {
        notice.error({
          title: "请选择预设",
          duration: 1e3
        });
        return;
      }
      let savePath;
      if (exportOptions.saveRadio === 1) {
        savePath = window.path.dirname(props.files.videoPath);
      } else if (exportOptions.saveRadio === 2) {
        if (exportOptions.savePath === "") {
          notice.error({
            title: "请选择保存路径",
            duration: 1e3
          });
          return;
        }
        if (window.path.isAbsolute(exportOptions.savePath)) {
          savePath = exportOptions.savePath;
        } else {
          savePath = window.path.join(
            window.path.dirname(props.files.videoPath),
            exportOptions.savePath
          );
          if (!await window.api.exits(savePath)) {
            await window.api.common.mkdir(savePath);
          }
        }
      } else {
        notice.error({
          title: "不支持此项配置",
          duration: 1e3
        });
        return;
      }
      const ffmpegOptiosn = (await window.api.ffmpeg.getPreset(exportOptions.ffmpegPresetId)).config;
      let index = 1;
      for (const cut of selectedCuts.value) {
        const start = cut.start;
        const end = cut.end;
        const label = cut.name;
        const title = filenamify(
          exportOptions.title.replace("{{filename}}", window.path.parse(props.files.videoPath).name).replace("{{label}}", label).replace("{{num}}", index.toString()).replace("{{from}}", secondsToTimemark(start).replaceAll(":", ".")).replace("{{to}}", secondsToTimemark(end).replaceAll(":", ".")).trim(),
          { replacement: "" }
        );
        await window.api.mergeAssMp4(
          {
            videoFilePath: props.files.videoPath,
            assFilePath: props.files.danmuPath,
            outputPath: window.path.join(savePath, `${title}.mp4`),
            hotProgressFilePath: void 0
          },
          { removeOrigin: false },
          {
            ...ffmpegOptiosn,
            ss: start,
            to: end
          }
        );
        index += 1;
      }
      notice.info({
        title: "已加入任务队列",
        duration: 1e3
      });
      visible.value = false;
    };
    async function getDir() {
      const path = await window.api.openDirectory({
        defaultPath: exportOptions.savePath
      });
      if (!path) return;
      exportOptions.savePath = path;
    }
    const titleList = ref([
      {
        value: "{{filename}}",
        label: "视频文件名"
      },
      {
        value: "{{label}}",
        label: "分段名"
      },
      {
        value: "{{num}}",
        label: "分段序号"
      },
      {
        value: "{{from}}",
        label: "分段开始时间"
      },
      {
        value: "{{to}}",
        label: "分段结束时间"
      }
    ]);
    const setTitleVar = (value) => {
      exportOptions.title += value;
    };
    const exportError = computed(() => {
      if (exportOptions.title.includes("{{from}}") || exportOptions.title.includes("{{num}}") || exportOptions.title.includes("{{to}}")) {
        return "";
      } else {
        return "输出文件名模板会导致文件名重复（您正在尝试导出多个同名文件）";
      }
    });
    return (_ctx, _cache) => {
      const _component_n_cascader = __unplugin_components_0;
      const _component_Tip = _sfc_main$5;
      const _component_n_radio = __unplugin_components_3$1;
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_icon = NIcon;
      const _component_n_space = __unplugin_components_4;
      const _component_n_radio_group = __unplugin_components_5;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_2$2;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: visible.value,
        "onUpdate:show": _cache[6] || (_cache[6] = ($event) => visible.value = $event),
        "show-icon": false,
        closable: false,
        "auto-focus": ""
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "700px" },
            bordered: false,
            size: "huge",
            role: "dialog",
            "aria-modal": "true",
            class: "card"
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_8$1, [
                createVNode(_component_n_button, {
                  class: "btn",
                  onClick: _cache[5] || (_cache[5] = ($event) => visible.value = false)
                }, {
                  default: withCtx(() => [
                    createTextVNode("取消")
                  ]),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  class: "btn",
                  type: "primary",
                  onClick: confirmExport
                }, {
                  default: withCtx(() => [
                    createTextVNode("确定")
                  ]),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$3, [
                createBaseVNode("h3", null, [
                  createTextVNode(" 共有" + toDisplayString(unref(cuts).length) + "个切片，此次将导出 ", 1),
                  createBaseVNode("span", _hoisted_2$3, toDisplayString(unref(selectedCuts).length), 1),
                  createTextVNode(" 个视频 ")
                ]),
                createBaseVNode("div", _hoisted_3$3, [
                  createTextVNode(" 选择视频预设： "),
                  createVNode(_component_n_cascader, {
                    value: unref(exportOptions).ffmpegPresetId,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(exportOptions).ffmpegPresetId = $event),
                    placeholder: "请选择预设",
                    "expand-trigger": "click",
                    options: unref(ffmpegOptions),
                    "check-strategy": "child",
                    "show-path": false,
                    filterable: true,
                    style: { "width": "200px", "text-align": "left" }
                  }, null, 8, ["value", "options"]),
                  createVNode(_component_Tip, null, {
                    default: withCtx(() => [
                      createTextVNode(" 推荐采用质量模式，以自适应视频质量，视频编码器不能使用copy ")
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_4$2, [
                  createVNode(_component_n_radio_group, {
                    value: unref(exportOptions).saveRadio,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(exportOptions).saveRadio = $event),
                    class: "radio-group2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_n_space, { class: "flex align-center column" }, {
                        default: withCtx(() => [
                          createVNode(_component_n_radio, { value: 1 }, {
                            default: withCtx(() => [
                              createTextVNode(" 保存到视频文件夹 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_n_radio, { value: 2 }),
                          createVNode(_component_n_input, {
                            value: unref(exportOptions).savePath,
                            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(exportOptions).savePath = $event),
                            placeholder: "选择文件夹",
                            style: { "width": "300px" }
                          }, null, 8, ["value"]),
                          createVNode(_component_n_icon, {
                            size: "30",
                            style: { "margin-left": "0px" },
                            class: "pointer",
                            onClick: getDir
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(FolderOpenOutline))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["value"])
                ]),
                createBaseVNode("div", null, [
                  createVNode(_component_n_radio_group, {
                    value: unref(exportOptions).override,
                    "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(exportOptions).override = $event)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_n_space, null, {
                        default: withCtx(() => [
                          createVNode(_component_n_radio, { value: true }, {
                            default: withCtx(() => [
                              createTextVNode(" 覆盖文件 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_n_radio, { value: false }, {
                            default: withCtx(() => [
                              createTextVNode(" 跳过存在文件 ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["value"])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_5$2, [
                    createTextVNode(" 输出文件名："),
                    createBaseVNode("span", _hoisted_6$2, toDisplayString(unref(exportError)), 1)
                  ]),
                  createBaseVNode("div", null, [
                    createVNode(_component_n_input, {
                      value: unref(exportOptions).title,
                      "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(exportOptions).title = $event),
                      placeholder: "请输入视频标题",
                      clearable: "",
                      style: { "margin-right": "10px" }
                    }, null, 8, ["value"]),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(titleList), (item) => {
                      return openBlock(), createElementBlock("span", {
                        key: item.value,
                        title: item.label,
                        class: "title-var",
                        onClick: ($event) => setTitleVar(item.value)
                      }, toDisplayString(item.value), 9, _hoisted_7$2);
                    }), 128))
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const ExportModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-fc803536"]]);
const _hoisted_1$2 = { style: { "margin-top": "10px" } };
const _hoisted_2$2 = { style: { "color": "#2b94ff" } };
const _hoisted_3$2 = {
  key: 0,
  style: { "color": "#e57272" }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchModal",
  props: /* @__PURE__ */ mergeModels({
    file: {},
    danmaList: {}
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["add-segment"], ["update:visible"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const showModal = useModel(__props, "visible");
    const emits = __emit;
    const notice = useNotification();
    const form = reactive({
      value: "",
      content: "content",
      sc: false
    });
    const list = computed(() => props.danmaList);
    const loading = ref(false);
    const handleOpen = async () => {
      getDisplayList();
    };
    const search = async () => {
      if (!form.value) return;
    };
    const displayList = ref([]);
    watchThrottled(
      () => form,
      async () => {
        getDisplayList();
      },
      { throttle: 500, deep: true }
    );
    const getDisplayList = () => {
      let data = list.value;
      if (form.sc) {
        data = list.value.filter((item) => item.type === "sc");
      }
      if (!form.value) {
        displayList.value = data;
      } else {
        {
          displayList.value = data.filter((item) => {
            if (form.content === "content") {
              if (!item.text) return false;
              console.log(item.text, form.value);
              return item.text.includes(form.value);
            } else {
              if (!item.user) return false;
              return item.user.includes(form.value);
            }
          });
        }
      }
    };
    const addSegment = (item) => {
      emits("add-segment", {
        start: item.ts,
        end: item.ts + 60,
        name: item.text
      });
      notice.success({
        title: "添加成功",
        duration: 1e3
      });
    };
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_button = Button;
      const _component_n_input_group = __unplugin_components_2$3;
      const _component_n_radio = __unplugin_components_3$1;
      const _component_n_space = __unplugin_components_4;
      const _component_n_radio_group = __unplugin_components_5;
      const _component_n_checkbox = __unplugin_components_1;
      const _component_n_icon = NIcon;
      const _component_n_virtual_list = __unplugin_components_8;
      const _component_n_spin = __unplugin_components_9;
      const _component_n_card = __unplugin_components_2$2;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[3] || (_cache[3] = ($event) => showModal.value = $event),
        "auto-focus": "",
        "on-after-enter": handleOpen
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "calc(100% - 60px)", "max-height": "80%" },
            bordered: false,
            size: "huge",
            role: "dialog",
            "aria-modal": "true",
            class: "card"
          }, {
            default: withCtx(() => [
              createVNode(_component_n_spin, { show: unref(loading) }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_group, null, {
                    default: withCtx(() => [
                      createVNode(_component_n_input, {
                        value: unref(form).value,
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(form).value = $event),
                        placeholder: "请输入关键字",
                        onKeyup: withKeys(search, ["enter"])
                      }, null, 8, ["value"]),
                      createVNode(_component_n_button, {
                        type: "primary",
                        ghost: "",
                        onClick: search
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 搜索 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_1$2, [
                    createVNode(_component_n_radio_group, {
                      value: unref(form).content,
                      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(form).content = $event),
                      name: "radiogroup"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_space, null, {
                          default: withCtx(() => [
                            createVNode(_component_n_radio, { value: "content" }, {
                              default: withCtx(() => [
                                createTextVNode(" 内容 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_radio, { value: "user" }, {
                              default: withCtx(() => [
                                createTextVNode(" 用户名 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["value"]),
                    createVNode(_component_n_checkbox, {
                      checked: unref(form).sc,
                      "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => unref(form).sc = $event)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("sc")
                      ]),
                      _: 1
                    }, 8, ["checked"])
                  ]),
                  createVNode(_component_n_virtual_list, {
                    class: "content",
                    "item-size": 30,
                    items: unref(displayList)
                  }, {
                    default: withCtx(({ item }) => [
                      (openBlock(), createElementBlock("div", {
                        key: `${item.ts}-${item.text}`,
                        class: "item",
                        style: { "height": "30px" }
                      }, [
                        createBaseVNode("span", null, toDisplayString(unref(secondsToTimemark)(item.ts)), 1),
                        createBaseVNode("span", _hoisted_2$2, toDisplayString(item.user), 1),
                        item.type === "sc" ? (openBlock(), createElementBlock("span", _hoisted_3$2, "sc")) : createCommentVNode("", true),
                        createBaseVNode("span", null, toDisplayString(item.text), 1),
                        createVNode(_component_n_icon, {
                          class: "pointer",
                          size: "20",
                          depth: 3,
                          title: "添加到切片",
                          onClick: ($event) => addSegment(item)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(AddIcon))
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]))
                    ]),
                    _: 1
                  }, 8, ["items"])
                ]),
                _: 1
              }, 8, ["show"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const SearchModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ddda3bb4"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-92b78ae6"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "cut-list" };
const _hoisted_2$1 = { class: "btns" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  "stroke-width": "0",
  viewBox: "0 0 384 512",
  role: "button",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M135.652 0c23.625 0 43.826 20.65 43.826 44.8v99.851c17.048-16.34 49.766-18.346 70.944 6.299 22.829-14.288 53.017-2.147 62.315 16.45C361.878 158.426 384 189.346 384 240c0 2.746-.203 13.276-.195 16 .168 61.971-31.065 76.894-38.315 123.731C343.683 391.404 333.599 400 321.786 400H150.261l-.001-.002c-18.366-.011-35.889-10.607-43.845-28.464C93.421 342.648 57.377 276.122 29.092 264 10.897 256.203.008 242.616 0 224c-.014-34.222 35.098-57.752 66.908-44.119 8.359 3.583 16.67 8.312 24.918 14.153V44.8c0-23.45 20.543-44.8 43.826-44.8zM136 416h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24zm168 28c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z" })
], -1));
const _hoisted_4$1 = {
  stroke: "currentColor",
  fill: "currentColor",
  "stroke-width": "0",
  viewBox: "0 0 384 512",
  role: "button",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "transform": "matrix(-1, 0, 0, 1, 0, 0)" }
};
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("path", { d: "M135.652 0c23.625 0 43.826 20.65 43.826 44.8v99.851c17.048-16.34 49.766-18.346 70.944 6.299 22.829-14.288 53.017-2.147 62.315 16.45C361.878 158.426 384 189.346 384 240c0 2.746-.203 13.276-.195 16 .168 61.971-31.065 76.894-38.315 123.731C343.683 391.404 333.599 400 321.786 400H150.261l-.001-.002c-18.366-.011-35.889-10.607-43.845-28.464C93.421 342.648 57.377 276.122 29.092 264 10.897 256.203.008 242.616 0 224c-.014-34.222 35.098-57.752 66.908-44.119 8.359 3.583 16.67 8.312 24.918 14.153V44.8c0-23.45 20.543-44.8 43.826-44.8zM136 416h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24zm168 28c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z" }, null, -1));
const _hoisted_6$1 = [
  _hoisted_5$1
];
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h4", null, "快捷键", -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "ctrl+s 保存到llc项目"),
  /* @__PURE__ */ createBaseVNode("li", null, "ctrl+shift+s 另存为llc项目"),
  /* @__PURE__ */ createBaseVNode("li", null, "ctrl+enter 导出"),
  /* @__PURE__ */ createBaseVNode("li", null, "ctrl+z 撤销"),
  /* @__PURE__ */ createBaseVNode("li", null, "ctrl+shift+z 重做"),
  /* @__PURE__ */ createBaseVNode("li", null, "I 在当前时间开始当前片段"),
  /* @__PURE__ */ createBaseVNode("li", null, "O 在当前时间结束当前片段"),
  /* @__PURE__ */ createBaseVNode("li", null, "up 上一个片段"),
  /* @__PURE__ */ createBaseVNode("li", null, "down 下一个片段"),
  /* @__PURE__ */ createBaseVNode("li", null, "del 删除片段"),
  /* @__PURE__ */ createBaseVNode("li", null, "space 播放/暂停"),
  /* @__PURE__ */ createBaseVNode("li", null, "ctrl+left 后退1秒"),
  /* @__PURE__ */ createBaseVNode("li", null, "ctrl+right 前进1秒"),
  /* @__PURE__ */ createBaseVNode("li", null, "ctrl+k 切换视图")
], -1));
const _hoisted_9 = { class: "view" };
const _hoisted_10 = {
  key: 0,
  class: "sc-list"
};
const _hoisted_11 = ["onDblclick"];
const _hoisted_12 = { class: "time" };
const _hoisted_13 = { class: "text" };
const _hoisted_14 = {
  key: 1,
  class: "empty",
  style: { "text-align": "center" }
};
const _hoisted_15 = ["onClick", "onDblclick"];
const _hoisted_16 = { class: "time" };
const _hoisted_17 = {
  class: "name",
  style: { "color": "skyblue" }
};
const _hoisted_18 = {
  key: 0,
  class: "duration"
};
const _hoisted_19 = { class: "icon" };
const _hoisted_20 = { class: "edit-icon" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SegmentList",
  props: {
    danmaList: { default: () => [] },
    files: {}
  },
  setup(__props) {
    onActivated(() => {
      hotkeys("f2", function() {
        rename();
      });
      hotkeys("I", function() {
        setStartTime();
      });
      hotkeys("O", function() {
        setEndTime();
      });
      hotkeys("up", function(event) {
        event.preventDefault();
        prevSegment();
      });
      hotkeys("down", function(event) {
        event.preventDefault();
        nextSegment();
      });
      hotkeys("del", function() {
        deleteCut();
      });
      hotkeys("ctrl+k", function() {
        toggleSc();
      });
    });
    const props = __props;
    const scList = computed(() => {
      return props.danmaList.filter((item) => item.type === "sc");
    });
    const videoInstance = inject("videoInstance");
    const notice = useNotification();
    const { cuts } = storeToRefs(useSegmentStore());
    const { addSegment, removeSegment, updateSegment, toggleSegment } = useSegmentStore();
    const toggleChecked = (index) => {
      toggleSegment(index);
    };
    const cutEditVisible = ref(false);
    const tempCutName = ref("");
    const selectCutIndex = ref(-1);
    const editCut = (index) => {
      cutEditVisible.value = true;
      tempCutName.value = cuts.value[index].name;
      selectCutIndex.value = index;
    };
    const rename = () => {
      if (selectCutIndex.value === -1) {
        return;
      }
      editCut(selectCutIndex.value);
    };
    const confirmEditCutName = () => {
      updateSegment(selectCutIndex.value, "name", tempCutName.value);
      cutEditVisible.value = false;
    };
    const navVideo = (start) => {
      videoInstance.value.seek = start;
    };
    const selectCut = (index) => {
      selectCutIndex.value = index;
    };
    const addCut = (iOptions = {}) => {
      const options = Object.assign(
        {
          start: videoInstance.value.currentTime,
          name: "",
          checked: true
        },
        iOptions
      );
      if (options.end) options.end = Math.min(options.end, videoInstance.value.duration);
      addSegment(options);
      selectCutIndex.value = cuts.value.length - 1;
    };
    const deleteCut = () => {
      if (selectCutIndex.value === -1) {
        return;
      }
      removeSegment(selectCutIndex.value);
      selectCutIndex.value = cuts.value.length - 1;
    };
    const setStartTime = () => {
      if (selectCutIndex.value === -1) {
        return;
      }
      if (!videoInstance) return;
      if (videoInstance.value.currentTime > cuts.value[selectCutIndex.value].end) {
        return;
      }
      updateSegment(selectCutIndex.value, "start", videoInstance.value.currentTime);
    };
    const setEndTime = () => {
      if (selectCutIndex.value === -1) {
        return;
      }
      if (!videoInstance) return;
      if (videoInstance.value.currentTime < cuts.value[selectCutIndex.value].start) {
        return;
      }
      updateSegment(selectCutIndex.value, "end", videoInstance.value.currentTime);
    };
    const nextSegment = () => {
      if (selectCutIndex.value === -1) {
        if (cuts.value.length > 0) {
          selectCut(0);
        }
        return;
      }
      if (selectCutIndex.value === cuts.value.length - 1) {
        return;
      }
      selectCut(selectCutIndex.value + 1);
    };
    const prevSegment = () => {
      if (selectCutIndex.value === -1) {
        if (cuts.value.length > 0) {
          selectCut(cuts.value.length - 1);
        }
        return;
      }
      if (selectCutIndex.value === 0) {
        return;
      }
      selectCut(selectCutIndex.value - 1);
    };
    const scView = ref(false);
    const toggleSc = () => {
      scView.value = !scView.value;
    };
    const searchDanmuVisible = ref(false);
    const searchDanmu = () => {
      if (!props.files.originDanmuPath) {
        notice.warning({
          title: "请先导入弹幕",
          duration: 1e3
        });
        return;
      }
      if (!props.files.originDanmuPath.endsWith(".xml")) {
        notice.warning({
          title: "仅支持xml格式弹幕",
          duration: 1e3
        });
        return;
      }
      searchDanmuVisible.value = true;
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_Tip = _sfc_main$5;
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_button = Button;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createVNode(_component_n_icon, {
              size: "20",
              class: "pointer icon",
              title: "在当前时间开始当前片段",
              style: { "padding": "4px" },
              onClick: setStartTime
            }, {
              default: withCtx(() => [
                _hoisted_3$1
              ]),
              _: 1
            }),
            createVNode(_component_n_icon, {
              size: "24",
              class: "pointer icon cut-add-segment",
              title: "添加片段",
              onClick: addCut
            }, {
              default: withCtx(() => [
                createVNode(unref(PlusOutlined))
              ]),
              _: 1
            }),
            createVNode(_component_n_icon, {
              size: "24",
              class: "pointer icon",
              title: "删除片段",
              onClick: deleteCut
            }, {
              default: withCtx(() => [
                createVNode(unref(MinusOutlined))
              ]),
              _: 1
            }),
            createVNode(_component_n_icon, {
              size: "20",
              class: "pointer icon cut-set-end",
              title: "在当前时间结束当前片段",
              style: { "padding": "4px" },
              onClick: setEndTime
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_4$1, _hoisted_6$1))
              ]),
              _: 1
            }),
            createVNode(_component_n_icon, {
              size: "24",
              class: "pointer icon cut-sc-view",
              title: "切换视图",
              onClick: toggleSc
            }, {
              default: withCtx(() => [
                createVNode(unref(Refresh))
              ]),
              _: 1
            }),
            createVNode(_component_n_icon, {
              size: "24",
              class: "pointer icon cut-search-danmu",
              title: "搜索弹幕，仅限xml",
              onClick: searchDanmu
            }, {
              default: withCtx(() => [
                createVNode(unref(SearchIcon))
              ]),
              _: 1
            }),
            createVNode(_component_Tip, { class: "cut-search-danmu" }, {
              default: withCtx(() => [
                _hoisted_7$1,
                _hoisted_8
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_9, [
            unref(scView) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              unref(scList).length ? (openBlock(), createElementBlock("div", _hoisted_10, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(scList), (sc, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "cut",
                    style: { "opacity": "1" },
                    onDblclick: ($event) => navVideo(sc.ts)
                  }, [
                    createBaseVNode("div", _hoisted_12, toDisplayString(sc.user) + "-" + toDisplayString(unref(secondsToTimemark)(sc.ts)), 1),
                    createBaseVNode("div", _hoisted_13, toDisplayString(sc.text), 1)
                  ], 40, _hoisted_11);
                }), 128))
              ])) : (openBlock(), createElementBlock("div", _hoisted_14, "没有解析到sc"))
            ], 64)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(cuts), (cut, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: normalizeClass(["cut", {
                  checked: cut.checked,
                  selected: unref(selectCutIndex) === index
                }]),
                role: "button",
                onClick: ($event) => selectCut(index),
                onDblclick: ($event) => navVideo(cut.start)
              }, [
                createBaseVNode("div", _hoisted_16, [
                  createTextVNode(toDisplayString(unref(secondsToTimemark)(cut.start)) + "-", 1),
                  createBaseVNode("span", null, toDisplayString(unref(secondsToTimemark)(cut.end)), 1)
                ]),
                createBaseVNode("div", _hoisted_17, toDisplayString(cut.name), 1),
                cut.end ? (openBlock(), createElementBlock("div", _hoisted_18, " 持续时间：" + toDisplayString(unref(secondsToTimemark)(cut.end - cut.start)), 1)) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_19, [
                  cut.checked ? (openBlock(), createBlock(_component_n_icon, {
                    key: 0,
                    size: "20",
                    depth: 3,
                    onClick: withModifiers(($event) => toggleChecked(index), ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(CheckmarkCircleOutline))
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_n_icon, {
                    key: 1,
                    size: "20",
                    depth: 3,
                    onClick: withModifiers(($event) => toggleChecked(index), ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(RadioButtonOffSharp))
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))
                ]),
                createBaseVNode("div", _hoisted_20, [
                  createVNode(_component_n_icon, {
                    size: "20",
                    depth: 3,
                    onClick: withModifiers(($event) => editCut(index), ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Pencil))
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])
              ], 42, _hoisted_15);
            }), 128))
          ])
        ]),
        createVNode(_component_n_modal, {
          show: unref(cutEditVisible),
          "onUpdate:show": _cache[2] || (_cache[2] = ($event) => isRef(cutEditVisible) ? cutEditVisible.value = $event : null),
          preset: "dialog",
          title: "编辑名称",
          "show-icon": false,
          closable: false,
          "auto-focus": ""
        }, {
          action: withCtx(() => [
            createVNode(_component_n_button, {
              onClick: _cache[1] || (_cache[1] = ($event) => cutEditVisible.value = false)
            }, {
              default: withCtx(() => [
                createTextVNode("取消")
              ]),
              _: 1
            }),
            createVNode(_component_n_button, {
              type: "primary",
              onClick: confirmEditCutName
            }, {
              default: withCtx(() => [
                createTextVNode("确定")
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_input, {
              value: unref(tempCutName),
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(tempCutName) ? tempCutName.value = $event : null),
              placeholder: "请输片段名称",
              onKeydown: withKeys(confirmEditCutName, ["enter"])
            }, null, 8, ["value"])
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(SearchModal, {
          visible: unref(searchDanmuVisible),
          "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => isRef(searchDanmuVisible) ? searchDanmuVisible.value = $event : null),
          file: props.files.originDanmuPath,
          "danma-list": props.danmaList,
          onAddSegment: addCut
        }, null, 8, ["visible", "file", "danma-list"])
      ], 64);
    };
  }
});
const SegmentList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-92b78ae6"]]);
var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
var unicode = {
  Space_Separator,
  ID_Start,
  ID_Continue
};
var util = {
  isSpaceSeparator(c2) {
    return typeof c2 === "string" && unicode.Space_Separator.test(c2);
  },
  isIdStartChar(c2) {
    return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 === "$" || c2 === "_" || unicode.ID_Start.test(c2));
  },
  isIdContinueChar(c2) {
    return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 >= "0" && c2 <= "9" || c2 === "$" || c2 === "_" || c2 === "‌" || c2 === "‍" || unicode.ID_Continue.test(c2));
  },
  isDigit(c2) {
    return typeof c2 === "string" && /[0-9]/.test(c2);
  },
  isHexDigit(c2) {
    return typeof c2 === "string" && /[0-9A-Fa-f]/.test(c2);
  }
};
let source;
let parseState;
let stack;
let pos;
let line;
let column;
let token;
let key;
let root;
var parse = function parse2(text, reviver) {
  source = String(text);
  parseState = "start";
  stack = [];
  pos = 0;
  line = 1;
  column = 0;
  token = void 0;
  key = void 0;
  root = void 0;
  do {
    token = lex();
    parseStates[parseState]();
  } while (token.type !== "eof");
  if (typeof reviver === "function") {
    return internalize({ "": root }, "", reviver);
  }
  return root;
};
function internalize(holder, name, reviver) {
  const value = holder[name];
  if (value != null && typeof value === "object") {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const key2 = String(i);
        const replacement = internalize(value, key2, reviver);
        if (replacement === void 0) {
          delete value[key2];
        } else {
          Object.defineProperty(value, key2, {
            value: replacement,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
    } else {
      for (const key2 in value) {
        const replacement = internalize(value, key2, reviver);
        if (replacement === void 0) {
          delete value[key2];
        } else {
          Object.defineProperty(value, key2, {
            value: replacement,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
    }
  }
  return reviver.call(holder, name, value);
}
let lexState;
let buffer;
let doubleQuote;
let sign;
let c;
function lex() {
  lexState = "default";
  buffer = "";
  doubleQuote = false;
  sign = 1;
  for (; ; ) {
    c = peek();
    const token2 = lexStates[lexState]();
    if (token2) {
      return token2;
    }
  }
}
function peek() {
  if (source[pos]) {
    return String.fromCodePoint(source.codePointAt(pos));
  }
}
function read() {
  const c2 = peek();
  if (c2 === "\n") {
    line++;
    column = 0;
  } else if (c2) {
    column += c2.length;
  } else {
    column++;
  }
  if (c2) {
    pos += c2.length;
  }
  return c2;
}
const lexStates = {
  default() {
    switch (c) {
      case "	":
      case "\v":
      case "\f":
      case " ":
      case " ":
      case "\uFEFF":
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        read();
        return;
      case "/":
        read();
        lexState = "comment";
        return;
      case void 0:
        read();
        return newToken("eof");
    }
    if (util.isSpaceSeparator(c)) {
      read();
      return;
    }
    return lexStates[parseState]();
  },
  comment() {
    switch (c) {
      case "*":
        read();
        lexState = "multiLineComment";
        return;
      case "/":
        read();
        lexState = "singleLineComment";
        return;
    }
    throw invalidChar(read());
  },
  multiLineComment() {
    switch (c) {
      case "*":
        read();
        lexState = "multiLineCommentAsterisk";
        return;
      case void 0:
        throw invalidChar(read());
    }
    read();
  },
  multiLineCommentAsterisk() {
    switch (c) {
      case "*":
        read();
        return;
      case "/":
        read();
        lexState = "default";
        return;
      case void 0:
        throw invalidChar(read());
    }
    read();
    lexState = "multiLineComment";
  },
  singleLineComment() {
    switch (c) {
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        read();
        lexState = "default";
        return;
      case void 0:
        read();
        return newToken("eof");
    }
    read();
  },
  value() {
    switch (c) {
      case "{":
      case "[":
        return newToken("punctuator", read());
      case "n":
        read();
        literal("ull");
        return newToken("null", null);
      case "t":
        read();
        literal("rue");
        return newToken("boolean", true);
      case "f":
        read();
        literal("alse");
        return newToken("boolean", false);
      case "-":
      case "+":
        if (read() === "-") {
          sign = -1;
        }
        lexState = "sign";
        return;
      case ".":
        buffer = read();
        lexState = "decimalPointLeading";
        return;
      case "0":
        buffer = read();
        lexState = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        buffer = read();
        lexState = "decimalInteger";
        return;
      case "I":
        read();
        literal("nfinity");
        return newToken("numeric", Infinity);
      case "N":
        read();
        literal("aN");
        return newToken("numeric", NaN);
      case '"':
      case "'":
        doubleQuote = read() === '"';
        buffer = "";
        lexState = "string";
        return;
    }
    throw invalidChar(read());
  },
  identifierNameStartEscape() {
    if (c !== "u") {
      throw invalidChar(read());
    }
    read();
    const u = unicodeEscape();
    switch (u) {
      case "$":
      case "_":
        break;
      default:
        if (!util.isIdStartChar(u)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u;
    lexState = "identifierName";
  },
  identifierName() {
    switch (c) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        buffer += read();
        return;
      case "\\":
        read();
        lexState = "identifierNameEscape";
        return;
    }
    if (util.isIdContinueChar(c)) {
      buffer += read();
      return;
    }
    return newToken("identifier", buffer);
  },
  identifierNameEscape() {
    if (c !== "u") {
      throw invalidChar(read());
    }
    read();
    const u = unicodeEscape();
    switch (u) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        break;
      default:
        if (!util.isIdContinueChar(u)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u;
    lexState = "identifierName";
  },
  sign() {
    switch (c) {
      case ".":
        buffer = read();
        lexState = "decimalPointLeading";
        return;
      case "0":
        buffer = read();
        lexState = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        buffer = read();
        lexState = "decimalInteger";
        return;
      case "I":
        read();
        literal("nfinity");
        return newToken("numeric", sign * Infinity);
      case "N":
        read();
        literal("aN");
        return newToken("numeric", NaN);
    }
    throw invalidChar(read());
  },
  zero() {
    switch (c) {
      case ".":
        buffer += read();
        lexState = "decimalPoint";
        return;
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
      case "x":
      case "X":
        buffer += read();
        lexState = "hexadecimal";
        return;
    }
    return newToken("numeric", sign * 0);
  },
  decimalInteger() {
    switch (c) {
      case ".":
        buffer += read();
        lexState = "decimalPoint";
        return;
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalPointLeading() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalFraction";
      return;
    }
    throw invalidChar(read());
  },
  decimalPoint() {
    switch (c) {
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalFraction";
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalFraction() {
    switch (c) {
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalExponent() {
    switch (c) {
      case "+":
      case "-":
        buffer += read();
        lexState = "decimalExponentSign";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalExponentInteger";
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentSign() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalExponentInteger";
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentInteger() {
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  hexadecimal() {
    if (util.isHexDigit(c)) {
      buffer += read();
      lexState = "hexadecimalInteger";
      return;
    }
    throw invalidChar(read());
  },
  hexadecimalInteger() {
    if (util.isHexDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  string() {
    switch (c) {
      case "\\":
        read();
        buffer += escape();
        return;
      case '"':
        if (doubleQuote) {
          read();
          return newToken("string", buffer);
        }
        buffer += read();
        return;
      case "'":
        if (!doubleQuote) {
          read();
          return newToken("string", buffer);
        }
        buffer += read();
        return;
      case "\n":
      case "\r":
        throw invalidChar(read());
      case "\u2028":
      case "\u2029":
        separatorChar(c);
        break;
      case void 0:
        throw invalidChar(read());
    }
    buffer += read();
  },
  start() {
    switch (c) {
      case "{":
      case "[":
        return newToken("punctuator", read());
    }
    lexState = "value";
  },
  beforePropertyName() {
    switch (c) {
      case "$":
      case "_":
        buffer = read();
        lexState = "identifierName";
        return;
      case "\\":
        read();
        lexState = "identifierNameStartEscape";
        return;
      case "}":
        return newToken("punctuator", read());
      case '"':
      case "'":
        doubleQuote = read() === '"';
        lexState = "string";
        return;
    }
    if (util.isIdStartChar(c)) {
      buffer += read();
      lexState = "identifierName";
      return;
    }
    throw invalidChar(read());
  },
  afterPropertyName() {
    if (c === ":") {
      return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  beforePropertyValue() {
    lexState = "value";
  },
  afterPropertyValue() {
    switch (c) {
      case ",":
      case "}":
        return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  beforeArrayValue() {
    if (c === "]") {
      return newToken("punctuator", read());
    }
    lexState = "value";
  },
  afterArrayValue() {
    switch (c) {
      case ",":
      case "]":
        return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  end() {
    throw invalidChar(read());
  }
};
function newToken(type, value) {
  return {
    type,
    value,
    line,
    column
  };
}
function literal(s) {
  for (const c2 of s) {
    const p = peek();
    if (p !== c2) {
      throw invalidChar(read());
    }
    read();
  }
}
function escape() {
  const c2 = peek();
  switch (c2) {
    case "b":
      read();
      return "\b";
    case "f":
      read();
      return "\f";
    case "n":
      read();
      return "\n";
    case "r":
      read();
      return "\r";
    case "t":
      read();
      return "	";
    case "v":
      read();
      return "\v";
    case "0":
      read();
      if (util.isDigit(peek())) {
        throw invalidChar(read());
      }
      return "\0";
    case "x":
      read();
      return hexEscape();
    case "u":
      read();
      return unicodeEscape();
    case "\n":
    case "\u2028":
    case "\u2029":
      read();
      return "";
    case "\r":
      read();
      if (peek() === "\n") {
        read();
      }
      return "";
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw invalidChar(read());
    case void 0:
      throw invalidChar(read());
  }
  return read();
}
function hexEscape() {
  let buffer2 = "";
  let c2 = peek();
  if (!util.isHexDigit(c2)) {
    throw invalidChar(read());
  }
  buffer2 += read();
  c2 = peek();
  if (!util.isHexDigit(c2)) {
    throw invalidChar(read());
  }
  buffer2 += read();
  return String.fromCodePoint(parseInt(buffer2, 16));
}
function unicodeEscape() {
  let buffer2 = "";
  let count = 4;
  while (count-- > 0) {
    const c2 = peek();
    if (!util.isHexDigit(c2)) {
      throw invalidChar(read());
    }
    buffer2 += read();
  }
  return String.fromCodePoint(parseInt(buffer2, 16));
}
const parseStates = {
  start() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    push();
  },
  beforePropertyName() {
    switch (token.type) {
      case "identifier":
      case "string":
        key = token.value;
        parseState = "afterPropertyName";
        return;
      case "punctuator":
        pop();
        return;
      case "eof":
        throw invalidEOF();
    }
  },
  afterPropertyName() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    parseState = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    push();
  },
  beforeArrayValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    if (token.type === "punctuator" && token.value === "]") {
      pop();
      return;
    }
    push();
  },
  afterPropertyValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    switch (token.value) {
      case ",":
        parseState = "beforePropertyName";
        return;
      case "}":
        pop();
    }
  },
  afterArrayValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    switch (token.value) {
      case ",":
        parseState = "beforeArrayValue";
        return;
      case "]":
        pop();
    }
  },
  end() {
  }
};
function push() {
  let value;
  switch (token.type) {
    case "punctuator":
      switch (token.value) {
        case "{":
          value = {};
          break;
        case "[":
          value = [];
          break;
      }
      break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
      value = token.value;
      break;
  }
  if (root === void 0) {
    root = value;
  } else {
    const parent = stack[stack.length - 1];
    if (Array.isArray(parent)) {
      parent.push(value);
    } else {
      Object.defineProperty(parent, key, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
  }
  if (value !== null && typeof value === "object") {
    stack.push(value);
    if (Array.isArray(value)) {
      parseState = "beforeArrayValue";
    } else {
      parseState = "beforePropertyName";
    }
  } else {
    const current = stack[stack.length - 1];
    if (current == null) {
      parseState = "end";
    } else if (Array.isArray(current)) {
      parseState = "afterArrayValue";
    } else {
      parseState = "afterPropertyValue";
    }
  }
}
function pop() {
  stack.pop();
  const current = stack[stack.length - 1];
  if (current == null) {
    parseState = "end";
  } else if (Array.isArray(current)) {
    parseState = "afterArrayValue";
  } else {
    parseState = "afterPropertyValue";
  }
}
function invalidChar(c2) {
  if (c2 === void 0) {
    return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
  }
  return syntaxError(`JSON5: invalid character '${formatChar(c2)}' at ${line}:${column}`);
}
function invalidEOF() {
  return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
}
function invalidIdentifier() {
  column -= 5;
  return syntaxError(`JSON5: invalid identifier character at ${line}:${column}`);
}
function separatorChar(c2) {
  console.warn(`JSON5: '${formatChar(c2)}' in strings is not valid ECMAScript; consider escaping`);
}
function formatChar(c2) {
  const replacements = {
    "'": "\\'",
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\v",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  if (replacements[c2]) {
    return replacements[c2];
  }
  if (c2 < " ") {
    const hexString = c2.charCodeAt(0).toString(16);
    return "\\x" + ("00" + hexString).substring(hexString.length);
  }
  return c2;
}
function syntaxError(message) {
  const err = new SyntaxError(message);
  err.lineNumber = line;
  err.columnNumber = column;
  return err;
}
var stringify = function stringify2(value, replacer, space) {
  const stack2 = [];
  let indent = "";
  let propertyList;
  let replacerFunc;
  let gap = "";
  let quote;
  if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
    space = replacer.space;
    quote = replacer.quote;
    replacer = replacer.replacer;
  }
  if (typeof replacer === "function") {
    replacerFunc = replacer;
  } else if (Array.isArray(replacer)) {
    propertyList = [];
    for (const v of replacer) {
      let item;
      if (typeof v === "string") {
        item = v;
      } else if (typeof v === "number" || v instanceof String || v instanceof Number) {
        item = String(v);
      }
      if (item !== void 0 && propertyList.indexOf(item) < 0) {
        propertyList.push(item);
      }
    }
  }
  if (space instanceof Number) {
    space = Number(space);
  } else if (space instanceof String) {
    space = String(space);
  }
  if (typeof space === "number") {
    if (space > 0) {
      space = Math.min(10, Math.floor(space));
      gap = "          ".substr(0, space);
    }
  } else if (typeof space === "string") {
    gap = space.substr(0, 10);
  }
  return serializeProperty("", { "": value });
  function serializeProperty(key2, holder) {
    let value2 = holder[key2];
    if (value2 != null) {
      if (typeof value2.toJSON5 === "function") {
        value2 = value2.toJSON5(key2);
      } else if (typeof value2.toJSON === "function") {
        value2 = value2.toJSON(key2);
      }
    }
    if (replacerFunc) {
      value2 = replacerFunc.call(holder, key2, value2);
    }
    if (value2 instanceof Number) {
      value2 = Number(value2);
    } else if (value2 instanceof String) {
      value2 = String(value2);
    } else if (value2 instanceof Boolean) {
      value2 = value2.valueOf();
    }
    switch (value2) {
      case null:
        return "null";
      case true:
        return "true";
      case false:
        return "false";
    }
    if (typeof value2 === "string") {
      return quoteString(value2);
    }
    if (typeof value2 === "number") {
      return String(value2);
    }
    if (typeof value2 === "object") {
      return Array.isArray(value2) ? serializeArray(value2) : serializeObject(value2);
    }
    return void 0;
  }
  function quoteString(value2) {
    const quotes = {
      "'": 0.1,
      '"': 0.2
    };
    const replacements = {
      "'": "\\'",
      '"': '\\"',
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
      "\v": "\\v",
      "\0": "\\0",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    let product = "";
    for (let i = 0; i < value2.length; i++) {
      const c2 = value2[i];
      switch (c2) {
        case "'":
        case '"':
          quotes[c2]++;
          product += c2;
          continue;
        case "\0":
          if (util.isDigit(value2[i + 1])) {
            product += "\\x00";
            continue;
          }
      }
      if (replacements[c2]) {
        product += replacements[c2];
        continue;
      }
      if (c2 < " ") {
        let hexString = c2.charCodeAt(0).toString(16);
        product += "\\x" + ("00" + hexString).substring(hexString.length);
        continue;
      }
      product += c2;
    }
    const quoteChar = quote || Object.keys(quotes).reduce((a2, b2) => quotes[a2] < quotes[b2] ? a2 : b2);
    product = product.replace(new RegExp(quoteChar, "g"), replacements[quoteChar]);
    return quoteChar + product + quoteChar;
  }
  function serializeObject(value2) {
    if (stack2.indexOf(value2) >= 0) {
      throw TypeError("Converting circular structure to JSON5");
    }
    stack2.push(value2);
    let stepback = indent;
    indent = indent + gap;
    let keys = propertyList || Object.keys(value2);
    let partial = [];
    for (const key2 of keys) {
      const propertyString = serializeProperty(key2, value2);
      if (propertyString !== void 0) {
        let member = serializeKey(key2) + ":";
        if (gap !== "") {
          member += " ";
        }
        member += propertyString;
        partial.push(member);
      }
    }
    let final;
    if (partial.length === 0) {
      final = "{}";
    } else {
      let properties;
      if (gap === "") {
        properties = partial.join(",");
        final = "{" + properties + "}";
      } else {
        let separator = ",\n" + indent;
        properties = partial.join(separator);
        final = "{\n" + indent + properties + ",\n" + stepback + "}";
      }
    }
    stack2.pop();
    indent = stepback;
    return final;
  }
  function serializeKey(key2) {
    if (key2.length === 0) {
      return quoteString(key2);
    }
    const firstChar = String.fromCodePoint(key2.codePointAt(0));
    if (!util.isIdStartChar(firstChar)) {
      return quoteString(key2);
    }
    for (let i = firstChar.length; i < key2.length; i++) {
      if (!util.isIdContinueChar(String.fromCodePoint(key2.codePointAt(i)))) {
        return quoteString(key2);
      }
    }
    return key2;
  }
  function serializeArray(value2) {
    if (stack2.indexOf(value2) >= 0) {
      throw TypeError("Converting circular structure to JSON5");
    }
    stack2.push(value2);
    let stepback = indent;
    indent = indent + gap;
    let partial = [];
    for (let i = 0; i < value2.length; i++) {
      const propertyString = serializeProperty(String(i), value2);
      partial.push(propertyString !== void 0 ? propertyString : "null");
    }
    let final;
    if (partial.length === 0) {
      final = "[]";
    } else {
      if (gap === "") {
        let properties = partial.join(",");
        final = "[" + properties + "]";
      } else {
        let separator = ",\n" + indent;
        let properties = partial.join(separator);
        final = "[\n" + indent + properties + ",\n" + stepback + "]";
      }
    }
    stack2.pop();
    indent = stepback;
    return final;
  }
};
const JSON5 = {
  parse,
  stringify
};
var lib = JSON5;
function useLlcProject(files) {
  const notice = useNotification();
  const { appConfig } = storeToRefs(useAppConfig());
  const { rawCuts, selectedCuts, cuts } = storeToRefs(useSegmentStore());
  const { clearHistory, init } = useSegmentStore();
  const llcProjectPath = ref("");
  const mediaPath = ref("");
  const importProject = async () => {
    const files2 = await window.api.openFile({
      multi: false,
      filters: [
        {
          name: "file",
          extensions: ["llc"]
        }
      ]
    });
    if (!files2) return;
    const file = files2[0];
    handleProject(file);
  };
  const handleProject = async (file) => {
    llcProjectPath.value = file;
    const data = lib.parse(await window.api.common.readFile(file));
    init(
      data.cutSegments.map((item) => {
        return {
          ...item,
          checked: true
        };
      })
    );
    const mediaFileName = data.mediaFileName;
    mediaPath.value = window.path.join(window.path.dirname(file), mediaFileName);
  };
  const loadProject = async () => {
    if (options.value.find((item) => item.key === "refresh")?.disabled) return;
    clearHistory();
    handleProject(llcProjectPath.value);
  };
  const saveProject = async () => {
    if (options.value.find((item) => item.key === "save")?.disabled) return;
    save();
  };
  const save = async () => {
    const mediaFileName = mediaPath.value || files.value.videoPath;
    if (!mediaFileName) {
      notice.error({
        title: "请先选择视频文件",
        duration: 2e3
      });
      return;
    }
    const projectData = {
      version: 1,
      mediaFileName: window.path.basename(mediaFileName),
      cutSegments: rawCuts.value.map(({ start, end, name, tags }) => ({ start, end, name, tags }))
    };
    console.log("save", llcProjectPath.value, projectData);
    await window.api.common.writeFile(llcProjectPath.value, lib.stringify(projectData, null, 2));
  };
  const openProject = async () => {
    if (!llcProjectPath.value) {
      return;
    }
    if (appConfig.value.losslessCutPath) {
      window.api.common.execFile(appConfig.value.losslessCutPath, [llcProjectPath.value]);
      console.log("openProject", appConfig.value.losslessCutPath);
    } else {
      notice.info({
        title: "使用默认程序打开llc文件，你也可以尝试在设置中设置lossless-cut的路径",
        duration: 2e3
      });
      await window.api.openPath(llcProjectPath.value);
    }
  };
  const saveAsAnother = async () => {
    if (options.value.find((item) => item.key === "saveAnother")?.disabled) return;
    const file = await window.api.showSaveDialog({
      filters: [{ name: "LosslessCut项目", extensions: ["llc"] }]
    });
    if (!file) return;
    llcProjectPath.value = file;
    await save();
  };
  const handleProjectClick = (key2) => {
    if (!key2) {
      importProject();
    } else if (key2 === "refresh") {
      loadProject();
    } else if (key2 === "save") {
      saveProject();
    } else if (key2 === "open") {
      openProject();
    } else if (key2 === "saveAnother") {
      saveAsAnother();
    } else {
      console.error(`${key2} is not supported`);
    }
  };
  const options = computed(() => {
    const disabled = !llcProjectPath.value;
    return [
      { label: "重新加载", key: "refresh", disabled },
      { label: "保存", key: "save", disabled },
      { label: "另存为", key: "saveAnother", disabled: !files.value.videoPath },
      { label: "打开", key: "open", disabled }
    ];
  });
  return {
    cuts,
    selectedCuts,
    handleProjectClick,
    llcProjectPath,
    mediaPath,
    options,
    saveProject,
    saveAsAnother,
    handleProject
  };
}
let F = {};
function D(e = {}) {
  F = {
    animate: true,
    allowClose: true,
    overlayOpacity: 0.7,
    smoothScroll: false,
    disableActiveInteraction: false,
    showProgress: false,
    stagePadding: 10,
    stageRadius: 5,
    popoverOffset: 10,
    showButtons: ["next", "previous", "close"],
    disableButtons: [],
    overlayColor: "#000",
    ...e
  };
}
function a(e) {
  return e ? F[e] : F;
}
function W(e, o, t, i) {
  return (e /= i / 2) < 1 ? t / 2 * e * e + o : -t / 2 * (--e * (e - 2) - 1) + o;
}
function Q(e) {
  const o = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
  return e.flatMap((t) => {
    const i = t.matches(o), p = Array.from(t.querySelectorAll(o));
    return [...i ? [t] : [], ...p];
  }).filter((t) => getComputedStyle(t).pointerEvents !== "none" && ae(t));
}
function Z(e) {
  if (!e || se(e))
    return;
  const o = a("smoothScroll");
  e.scrollIntoView({
    // Removing the smooth scrolling for elements which exist inside the scrollable parent
    // This was causing the highlight to not properly render
    behavior: !o || re(e) ? "auto" : "smooth",
    inline: "center",
    block: "center"
  });
}
function re(e) {
  if (!e || !e.parentElement)
    return;
  const o = e.parentElement;
  return o.scrollHeight > o.clientHeight;
}
function se(e) {
  const o = e.getBoundingClientRect();
  return o.top >= 0 && o.left >= 0 && o.bottom <= (window.innerHeight || document.documentElement.clientHeight) && o.right <= (window.innerWidth || document.documentElement.clientWidth);
}
function ae(e) {
  return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
}
let O = {};
function b(e, o) {
  O[e] = o;
}
function l(e) {
  return e ? O[e] : O;
}
function V() {
  O = {};
}
let R = {};
function N(e, o) {
  R[e] = o;
}
function L(e) {
  var o;
  (o = R[e]) == null || o.call(R);
}
function ce() {
  R = {};
}
function le(e, o, t, i) {
  let p = l("__activeStagePosition");
  const n = p || t.getBoundingClientRect(), f = i.getBoundingClientRect(), w = W(e, n.x, f.x - n.x, o), r = W(e, n.y, f.y - n.y, o), v = W(e, n.width, f.width - n.width, o), s = W(e, n.height, f.height - n.height, o);
  p = {
    x: w,
    y: r,
    width: v,
    height: s
  }, J(p), b("__activeStagePosition", p);
}
function G(e) {
  if (!e)
    return;
  const o = e.getBoundingClientRect(), t = {
    x: o.x,
    y: o.y,
    width: o.width,
    height: o.height
  };
  b("__activeStagePosition", t), J(t);
}
function de() {
  const e = l("__activeStagePosition"), o = l("__overlaySvg");
  if (!e)
    return;
  if (!o) {
    console.warn("No stage svg found.");
    return;
  }
  const t = window.innerWidth, i = window.innerHeight;
  o.setAttribute("viewBox", `0 0 ${t} ${i}`);
}
function pe(e) {
  const o = ue(e);
  document.body.appendChild(o), te(o, (t) => {
    t.target.tagName === "path" && L("overlayClick");
  }), b("__overlaySvg", o);
}
function J(e) {
  const o = l("__overlaySvg");
  if (!o) {
    pe(e);
    return;
  }
  const t = o.firstElementChild;
  if ((t == null ? void 0 : t.tagName) !== "path")
    throw new Error("no path element found in stage svg");
  t.setAttribute("d", U(e));
}
function ue(e) {
  const o = window.innerWidth, t = window.innerHeight, i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  i.classList.add("driver-overlay", "driver-overlay-animated"), i.setAttribute("viewBox", `0 0 ${o} ${t}`), i.setAttribute("xmlSpace", "preserve"), i.setAttribute("xmlnsXlink", "http://www.w3.org/1999/xlink"), i.setAttribute("version", "1.1"), i.setAttribute("preserveAspectRatio", "xMinYMin slice"), i.style.fillRule = "evenodd", i.style.clipRule = "evenodd", i.style.strokeLinejoin = "round", i.style.strokeMiterlimit = "2", i.style.zIndex = "10000", i.style.position = "fixed", i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%";
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return p.setAttribute("d", U(e)), p.style.fill = a("overlayColor") || "rgb(0,0,0)", p.style.opacity = `${a("overlayOpacity")}`, p.style.pointerEvents = "auto", p.style.cursor = "auto", i.appendChild(p), i;
}
function U(e) {
  const o = window.innerWidth, t = window.innerHeight, i = a("stagePadding") || 0, p = a("stageRadius") || 0, n = e.width + i * 2, f = e.height + i * 2, w = Math.min(p, n / 2, f / 2), r = Math.floor(Math.max(w, 0)), v = e.x - i + r, s = e.y - i, c2 = n - r * 2, d = f - r * 2;
  return `M${o},0L0,0L0,${t}L${o},${t}L${o},0Z
    M${v},${s} h${c2} a${r},${r} 0 0 1 ${r},${r} v${d} a${r},${r} 0 0 1 -${r},${r} h-${c2} a${r},${r} 0 0 1 -${r},-${r} v-${d} a${r},${r} 0 0 1 ${r},-${r} z`;
}
function ve() {
  const e = l("__overlaySvg");
  e && e.remove();
}
function fe() {
  const e = document.getElementById("driver-dummy-element");
  if (e)
    return e;
  let o = document.createElement("div");
  return o.id = "driver-dummy-element", o.style.width = "0", o.style.height = "0", o.style.pointerEvents = "none", o.style.opacity = "0", o.style.position = "fixed", o.style.top = "50%", o.style.left = "50%", document.body.appendChild(o), o;
}
function K(e) {
  const { element: o } = e;
  let t = typeof o == "string" ? document.querySelector(o) : o;
  t || (t = fe()), ge(t, e);
}
function he() {
  const e = l("__activeElement"), o = l("__activeStep");
  e && (G(e), de(), ie(e, o));
}
function ge(e, o) {
  const i = Date.now(), p = l("__activeStep"), n = l("__activeElement") || e, f = !n || n === e, w = e.id === "driver-dummy-element", r = n.id === "driver-dummy-element", v = a("animate"), s = o.onHighlightStarted || a("onHighlightStarted"), c2 = (o == null ? void 0 : o.onHighlighted) || a("onHighlighted"), d = (p == null ? void 0 : p.onDeselected) || a("onDeselected"), m = a(), g = l();
  !f && d && d(r ? void 0 : n, p, {
    config: m,
    state: g
  }), s && s(w ? void 0 : e, o, {
    config: m,
    state: g
  });
  const u = !f && v;
  let h2 = false;
  xe(), b("previousStep", p), b("previousElement", n), b("activeStep", o), b("activeElement", e);
  const P = () => {
    if (l("__transitionCallback") !== P)
      return;
    const x = Date.now() - i, y = 400 - x <= 400 / 2;
    o.popover && y && !h2 && u && (X(e, o), h2 = true), a("animate") && x < 400 ? le(x, 400, n, e) : (G(e), c2 && c2(w ? void 0 : e, o, {
      config: a(),
      state: l()
    }), b("__transitionCallback", void 0), b("__previousStep", p), b("__previousElement", n), b("__activeStep", o), b("__activeElement", e)), window.requestAnimationFrame(P);
  };
  b("__transitionCallback", P), window.requestAnimationFrame(P), Z(e), !u && o.popover && X(e, o), n.classList.remove("driver-active-element", "driver-no-interaction"), n.removeAttribute("aria-haspopup"), n.removeAttribute("aria-expanded"), n.removeAttribute("aria-controls"), a("disableActiveInteraction") && e.classList.add("driver-no-interaction"), e.classList.add("driver-active-element"), e.setAttribute("aria-haspopup", "dialog"), e.setAttribute("aria-expanded", "true"), e.setAttribute("aria-controls", "driver-popover-content");
}
function we() {
  var e;
  (e = document.getElementById("driver-dummy-element")) == null || e.remove(), document.querySelectorAll(".driver-active-element").forEach((o) => {
    o.classList.remove("driver-active-element", "driver-no-interaction"), o.removeAttribute("aria-haspopup"), o.removeAttribute("aria-expanded"), o.removeAttribute("aria-controls");
  });
}
function I() {
  const e = l("__resizeTimeout");
  e && window.cancelAnimationFrame(e), b("__resizeTimeout", window.requestAnimationFrame(he));
}
function me(e) {
  var r;
  if (!l("isInitialized") || !(e.key === "Tab" || e.keyCode === 9))
    return;
  const i = l("__activeElement"), p = (r = l("popover")) == null ? void 0 : r.wrapper, n = Q([
    ...p ? [p] : [],
    ...i ? [i] : []
  ]), f = n[0], w = n[n.length - 1];
  if (e.preventDefault(), e.shiftKey) {
    const v = n[n.indexOf(document.activeElement) - 1] || w;
    v == null || v.focus();
  } else {
    const v = n[n.indexOf(document.activeElement) + 1] || f;
    v == null || v.focus();
  }
}
function ee(e) {
  var t;
  ((t = a("allowKeyboardControl")) == null || t) && (e.key === "Escape" ? L("escapePress") : e.key === "ArrowRight" ? L("arrowRightPress") : e.key === "ArrowLeft" && L("arrowLeftPress"));
}
function te(e, o, t) {
  const i = (n, f) => {
    const w = n.target;
    e.contains(w) && ((!t || t(w)) && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation()), f == null || f(n));
  };
  document.addEventListener("pointerdown", i, true), document.addEventListener("mousedown", i, true), document.addEventListener("pointerup", i, true), document.addEventListener("mouseup", i, true), document.addEventListener(
    "click",
    (n) => {
      i(n, o);
    },
    true
  );
}
function ye() {
  window.addEventListener("keyup", ee, false), window.addEventListener("keydown", me, false), window.addEventListener("resize", I), window.addEventListener("scroll", I);
}
function be() {
  window.removeEventListener("keyup", ee), window.removeEventListener("resize", I), window.removeEventListener("scroll", I);
}
function xe() {
  const e = l("popover");
  e && (e.wrapper.style.display = "none");
}
function X(e, o) {
  var C, y;
  let t = l("popover");
  t && document.body.removeChild(t.wrapper), t = Pe(), document.body.appendChild(t.wrapper);
  const {
    title: i,
    description: p,
    showButtons: n,
    disableButtons: f,
    showProgress: w,
    nextBtnText: r = a("nextBtnText") || "Next &rarr;",
    prevBtnText: v = a("prevBtnText") || "&larr; Previous",
    progressText: s = a("progressText") || "{current} of {total}"
  } = o.popover || {};
  t.nextButton.innerHTML = r, t.previousButton.innerHTML = v, t.progress.innerHTML = s, i ? (t.title.innerHTML = i, t.title.style.display = "block") : t.title.style.display = "none", p ? (t.description.innerHTML = p, t.description.style.display = "block") : t.description.style.display = "none";
  const c2 = n || a("showButtons"), d = w || a("showProgress") || false, m = (c2 == null ? void 0 : c2.includes("next")) || (c2 == null ? void 0 : c2.includes("previous")) || d;
  t.closeButton.style.display = c2.includes("close") ? "block" : "none", m ? (t.footer.style.display = "flex", t.progress.style.display = d ? "block" : "none", t.nextButton.style.display = c2.includes("next") ? "block" : "none", t.previousButton.style.display = c2.includes("previous") ? "block" : "none") : t.footer.style.display = "none";
  const g = f || a("disableButtons") || [];
  g != null && g.includes("next") && (t.nextButton.disabled = true, t.nextButton.classList.add("driver-popover-btn-disabled")), g != null && g.includes("previous") && (t.previousButton.disabled = true, t.previousButton.classList.add("driver-popover-btn-disabled")), g != null && g.includes("close") && (t.closeButton.disabled = true, t.closeButton.classList.add("driver-popover-btn-disabled"));
  const u = t.wrapper;
  u.style.display = "block", u.style.left = "", u.style.top = "", u.style.bottom = "", u.style.right = "", u.id = "driver-popover-content", u.setAttribute("role", "dialog"), u.setAttribute("aria-labelledby", "driver-popover-title"), u.setAttribute("aria-describedby", "driver-popover-description");
  const h2 = t.arrow;
  h2.className = "driver-popover-arrow";
  const P = ((C = o.popover) == null ? void 0 : C.popoverClass) || a("popoverClass") || "";
  u.className = `driver-popover ${P}`.trim(), te(
    t.wrapper,
    (k) => {
      var $, B, M;
      const T = k.target, E = (($ = o.popover) == null ? void 0 : $.onNextClick) || a("onNextClick"), A = ((B = o.popover) == null ? void 0 : B.onPrevClick) || a("onPrevClick"), H = ((M = o.popover) == null ? void 0 : M.onCloseClick) || a("onCloseClick");
      if (T.classList.contains("driver-popover-next-btn"))
        return E ? E(e, o, {
          config: a(),
          state: l()
        }) : L("nextClick");
      if (T.classList.contains("driver-popover-prev-btn"))
        return A ? A(e, o, {
          config: a(),
          state: l()
        }) : L("prevClick");
      if (T.classList.contains("driver-popover-close-btn"))
        return H ? H(e, o, {
          config: a(),
          state: l()
        }) : L("closeClick");
    },
    (k) => !(t != null && t.description.contains(k)) && !(t != null && t.title.contains(k)) && typeof k.className == "string" && k.className.includes("driver-popover")
  ), b("popover", t);
  const S = ((y = o.popover) == null ? void 0 : y.onPopoverRender) || a("onPopoverRender");
  S && S(t, {
    config: a(),
    state: l()
  }), ie(e, o), Z(u);
  const _ = e.classList.contains("driver-dummy-element"), x = Q([u, ..._ ? [] : [e]]);
  x.length > 0 && x[0].focus();
}
function oe() {
  const e = l("popover");
  if (!(e != null && e.wrapper))
    return;
  const o = e.wrapper.getBoundingClientRect(), t = a("stagePadding") || 0, i = a("popoverOffset") || 0;
  return {
    width: o.width + t + i,
    height: o.height + t + i,
    realWidth: o.width,
    realHeight: o.height
  };
}
function Y(e, o) {
  const { elementDimensions: t, popoverDimensions: i, popoverPadding: p, popoverArrowDimensions: n } = o;
  return e === "start" ? Math.max(
    Math.min(
      t.top - p,
      window.innerHeight - i.realHeight - n.width
    ),
    n.width
  ) : e === "end" ? Math.max(
    Math.min(
      t.top - (i == null ? void 0 : i.realHeight) + t.height + p,
      window.innerHeight - (i == null ? void 0 : i.realHeight) - n.width
    ),
    n.width
  ) : e === "center" ? Math.max(
    Math.min(
      t.top + t.height / 2 - (i == null ? void 0 : i.realHeight) / 2,
      window.innerHeight - (i == null ? void 0 : i.realHeight) - n.width
    ),
    n.width
  ) : 0;
}
function j(e, o) {
  const { elementDimensions: t, popoverDimensions: i, popoverPadding: p, popoverArrowDimensions: n } = o;
  return e === "start" ? Math.max(
    Math.min(
      t.left - p,
      window.innerWidth - i.realWidth - n.width
    ),
    n.width
  ) : e === "end" ? Math.max(
    Math.min(
      t.left - (i == null ? void 0 : i.realWidth) + t.width + p,
      window.innerWidth - (i == null ? void 0 : i.realWidth) - n.width
    ),
    n.width
  ) : e === "center" ? Math.max(
    Math.min(
      t.left + t.width / 2 - (i == null ? void 0 : i.realWidth) / 2,
      window.innerWidth - (i == null ? void 0 : i.realWidth) - n.width
    ),
    n.width
  ) : 0;
}
function ie(e, o) {
  const t = l("popover");
  if (!t)
    return;
  const { align: i = "start", side: p = "left" } = (o == null ? void 0 : o.popover) || {}, n = i, f = e.id === "driver-dummy-element" ? "over" : p, w = a("stagePadding") || 0, r = oe(), v = t.arrow.getBoundingClientRect(), s = e.getBoundingClientRect(), c2 = s.top - r.height;
  let d = c2 >= 0;
  const m = window.innerHeight - (s.bottom + r.height);
  let g = m >= 0;
  const u = s.left - r.width;
  let h2 = u >= 0;
  const P = window.innerWidth - (s.right + r.width);
  let S = P >= 0;
  const _ = !d && !g && !h2 && !S;
  let x = f;
  if (f === "top" && d ? S = h2 = g = false : f === "bottom" && g ? S = h2 = d = false : f === "left" && h2 ? S = d = g = false : f === "right" && S && (h2 = d = g = false), f === "over") {
    const C = window.innerWidth / 2 - r.realWidth / 2, y = window.innerHeight / 2 - r.realHeight / 2;
    t.wrapper.style.left = `${C}px`, t.wrapper.style.right = "auto", t.wrapper.style.top = `${y}px`, t.wrapper.style.bottom = "auto";
  } else if (_) {
    const C = window.innerWidth / 2 - (r == null ? void 0 : r.realWidth) / 2, y = 10;
    t.wrapper.style.left = `${C}px`, t.wrapper.style.right = "auto", t.wrapper.style.bottom = `${y}px`, t.wrapper.style.top = "auto";
  } else if (h2) {
    const C = Math.min(
      u,
      window.innerWidth - (r == null ? void 0 : r.realWidth) - v.width
    ), y = Y(n, {
      elementDimensions: s,
      popoverDimensions: r,
      popoverPadding: w,
      popoverArrowDimensions: v
    });
    t.wrapper.style.left = `${C}px`, t.wrapper.style.top = `${y}px`, t.wrapper.style.bottom = "auto", t.wrapper.style.right = "auto", x = "left";
  } else if (S) {
    const C = Math.min(
      P,
      window.innerWidth - (r == null ? void 0 : r.realWidth) - v.width
    ), y = Y(n, {
      elementDimensions: s,
      popoverDimensions: r,
      popoverPadding: w,
      popoverArrowDimensions: v
    });
    t.wrapper.style.right = `${C}px`, t.wrapper.style.top = `${y}px`, t.wrapper.style.bottom = "auto", t.wrapper.style.left = "auto", x = "right";
  } else if (d) {
    const C = Math.min(
      c2,
      window.innerHeight - r.realHeight - v.width
    );
    let y = j(n, {
      elementDimensions: s,
      popoverDimensions: r,
      popoverPadding: w,
      popoverArrowDimensions: v
    });
    t.wrapper.style.top = `${C}px`, t.wrapper.style.left = `${y}px`, t.wrapper.style.bottom = "auto", t.wrapper.style.right = "auto", x = "top";
  } else if (g) {
    const C = Math.min(
      m,
      window.innerHeight - (r == null ? void 0 : r.realHeight) - v.width
    );
    let y = j(n, {
      elementDimensions: s,
      popoverDimensions: r,
      popoverPadding: w,
      popoverArrowDimensions: v
    });
    t.wrapper.style.left = `${y}px`, t.wrapper.style.bottom = `${C}px`, t.wrapper.style.top = "auto", t.wrapper.style.right = "auto", x = "bottom";
  }
  _ ? t.arrow.classList.add("driver-popover-arrow-none") : Ce(n, x, e);
}
function Ce(e, o, t) {
  const i = l("popover");
  if (!i)
    return;
  const p = t.getBoundingClientRect(), n = oe(), f = i.arrow, w = n.width, r = window.innerWidth, v = p.width, s = p.left, c2 = n.height, d = window.innerHeight, m = p.top, g = p.height;
  f.className = "driver-popover-arrow";
  let u = o, h2 = e;
  o === "top" ? (s + v <= 0 ? (u = "right", h2 = "end") : s + v - w <= 0 && (u = "top", h2 = "start"), s >= r ? (u = "left", h2 = "end") : s + w >= r && (u = "top", h2 = "end")) : o === "bottom" ? (s + v <= 0 ? (u = "right", h2 = "start") : s + v - w <= 0 && (u = "bottom", h2 = "start"), s >= r ? (u = "left", h2 = "start") : s + w >= r && (u = "bottom", h2 = "end")) : o === "left" ? (m + g <= 0 ? (u = "bottom", h2 = "end") : m + g - c2 <= 0 && (u = "left", h2 = "start"), m >= d ? (u = "top", h2 = "end") : m + c2 >= d && (u = "left", h2 = "end")) : o === "right" && (m + g <= 0 ? (u = "bottom", h2 = "start") : m + g - c2 <= 0 && (u = "right", h2 = "start"), m >= d ? (u = "top", h2 = "start") : m + c2 >= d && (u = "right", h2 = "end")), u ? (f.classList.add(`driver-popover-arrow-side-${u}`), f.classList.add(`driver-popover-arrow-align-${h2}`)) : f.classList.add("driver-popover-arrow-none");
}
function Pe() {
  const e = document.createElement("div");
  e.classList.add("driver-popover");
  const o = document.createElement("div");
  o.classList.add("driver-popover-arrow");
  const t = document.createElement("header");
  t.id = "driver-popover-title", t.classList.add("driver-popover-title"), t.style.display = "none", t.innerText = "Popover Title";
  const i = document.createElement("div");
  i.id = "driver-popover-description", i.classList.add("driver-popover-description"), i.style.display = "none", i.innerText = "Popover description is here";
  const p = document.createElement("button");
  p.type = "button", p.classList.add("driver-popover-close-btn"), p.setAttribute("aria-label", "Close"), p.innerHTML = "&times;";
  const n = document.createElement("footer");
  n.classList.add("driver-popover-footer");
  const f = document.createElement("span");
  f.classList.add("driver-popover-progress-text"), f.innerText = "";
  const w = document.createElement("span");
  w.classList.add("driver-popover-navigation-btns");
  const r = document.createElement("button");
  r.type = "button", r.classList.add("driver-popover-prev-btn"), r.innerHTML = "&larr; Previous";
  const v = document.createElement("button");
  return v.type = "button", v.classList.add("driver-popover-next-btn"), v.innerHTML = "Next &rarr;", w.appendChild(r), w.appendChild(v), n.appendChild(f), n.appendChild(w), e.appendChild(p), e.appendChild(o), e.appendChild(t), e.appendChild(i), e.appendChild(n), {
    wrapper: e,
    arrow: o,
    title: t,
    description: i,
    footer: n,
    previousButton: r,
    nextButton: v,
    closeButton: p,
    footerButtons: w,
    progress: f
  };
}
function Se() {
  var o;
  const e = l("popover");
  e && ((o = e.wrapper.parentElement) == null || o.removeChild(e.wrapper));
}
function ke(e = {}) {
  D(e);
  function o() {
    a("allowClose") && v();
  }
  function t() {
    const s = l("activeIndex"), c2 = a("steps") || [];
    if (typeof s == "undefined")
      return;
    const d = s + 1;
    c2[d] ? r(d) : v();
  }
  function i() {
    const s = l("activeIndex"), c2 = a("steps") || [];
    if (typeof s == "undefined")
      return;
    const d = s - 1;
    c2[d] ? r(d) : v();
  }
  function p(s) {
    (a("steps") || [])[s] ? r(s) : v();
  }
  function n() {
    var h2;
    if (l("__transitionCallback"))
      return;
    const c2 = l("activeIndex"), d = l("__activeStep"), m = l("__activeElement");
    if (typeof c2 == "undefined" || typeof d == "undefined" || typeof l("activeIndex") == "undefined")
      return;
    const u = ((h2 = d.popover) == null ? void 0 : h2.onPrevClick) || a("onPrevClick");
    if (u)
      return u(m, d, {
        config: a(),
        state: l()
      });
    i();
  }
  function f() {
    var u;
    if (l("__transitionCallback"))
      return;
    const c2 = l("activeIndex"), d = l("__activeStep"), m = l("__activeElement");
    if (typeof c2 == "undefined" || typeof d == "undefined")
      return;
    const g = ((u = d.popover) == null ? void 0 : u.onNextClick) || a("onNextClick");
    if (g)
      return g(m, d, {
        config: a(),
        state: l()
      });
    t();
  }
  function w() {
    l("isInitialized") || (b("isInitialized", true), document.body.classList.add("driver-active", a("animate") ? "driver-fade" : "driver-simple"), ye(), N("overlayClick", o), N("escapePress", o), N("arrowLeftPress", n), N("arrowRightPress", f));
  }
  function r(s = 0) {
    var E, A, H, $, B, M, z, q;
    const c2 = a("steps");
    if (!c2) {
      console.error("No steps to drive through"), v();
      return;
    }
    if (!c2[s]) {
      v();
      return;
    }
    b("__activeOnDestroyed", document.activeElement), b("activeIndex", s);
    const d = c2[s], m = c2[s + 1], g = c2[s - 1], u = ((E = d.popover) == null ? void 0 : E.doneBtnText) || a("doneBtnText") || "Done", h2 = a("allowClose"), P = typeof ((A = d.popover) == null ? void 0 : A.showProgress) != "undefined" ? (H = d.popover) == null ? void 0 : H.showProgress : a("showProgress"), _ = ((($ = d.popover) == null ? void 0 : $.progressText) || a("progressText") || "{{current}} of {{total}}").replace("{{current}}", `${s + 1}`).replace("{{total}}", `${c2.length}`), x = ((B = d.popover) == null ? void 0 : B.showButtons) || a("showButtons"), C = [
      "next",
      "previous",
      ...h2 ? ["close"] : []
    ].filter((ne) => !(x != null && x.length) || x.includes(ne)), y = ((M = d.popover) == null ? void 0 : M.onNextClick) || a("onNextClick"), k = ((z = d.popover) == null ? void 0 : z.onPrevClick) || a("onPrevClick"), T = ((q = d.popover) == null ? void 0 : q.onCloseClick) || a("onCloseClick");
    K({
      ...d,
      popover: {
        showButtons: C,
        nextBtnText: m ? void 0 : u,
        disableButtons: [...g ? [] : ["previous"]],
        showProgress: P,
        progressText: _,
        onNextClick: y || (() => {
          m ? r(s + 1) : v();
        }),
        onPrevClick: k || (() => {
          r(s - 1);
        }),
        onCloseClick: T || (() => {
          v();
        }),
        ...(d == null ? void 0 : d.popover) || {}
      }
    });
  }
  function v(s = true) {
    const c2 = l("__activeElement"), d = l("__activeStep"), m = l("__activeOnDestroyed"), g = a("onDestroyStarted");
    if (s && g) {
      const P = !c2 || (c2 == null ? void 0 : c2.id) === "driver-dummy-element";
      g(P ? void 0 : c2, d, {
        config: a(),
        state: l()
      });
      return;
    }
    const u = (d == null ? void 0 : d.onDeselected) || a("onDeselected"), h2 = a("onDestroyed");
    if (document.body.classList.remove("driver-active", "driver-fade", "driver-simple"), be(), Se(), we(), ve(), ce(), V(), c2 && d) {
      const P = c2.id === "driver-dummy-element";
      u && u(P ? void 0 : c2, d, {
        config: a(),
        state: l()
      }), h2 && h2(P ? void 0 : c2, d, {
        config: a(),
        state: l()
      });
    }
    m && m.focus();
  }
  return {
    isActive: () => l("isInitialized") || false,
    refresh: I,
    drive: (s = 0) => {
      w(), r(s);
    },
    setConfig: D,
    setSteps: (s) => {
      V(), D({
        ...a(),
        steps: s
      });
    },
    getConfig: a,
    getState: l,
    getActiveIndex: () => l("activeIndex"),
    isFirstStep: () => l("activeIndex") === 0,
    isLastStep: () => {
      const s = a("steps") || [], c2 = l("activeIndex");
      return c2 !== void 0 && c2 === s.length - 1;
    },
    getActiveStep: () => l("activeStep"),
    getActiveElement: () => l("activeElement"),
    getPreviousElement: () => l("previousElement"),
    getPreviousStep: () => l("previousStep"),
    moveNext: t,
    movePrevious: i,
    moveTo: p,
    hasNextStep: () => {
      const s = a("steps") || [], c2 = l("activeIndex");
      return c2 !== void 0 && s[c2 + 1];
    },
    hasPreviousStep: () => {
      const s = a("steps") || [], c2 = l("activeIndex");
      return c2 !== void 0 && s[c2 - 1];
    },
    highlight: (s) => {
      w(), K({
        ...s,
        popover: s.popover ? {
          showButtons: [],
          showProgress: false,
          progressText: "",
          ...s.popover
        } : void 0
      });
    },
    destroy: () => {
      v(false);
    }
  };
}
const useDrive = () => {
  const state = useStorage("drive-store", { videoCut: false }, localStorage, {
    mergeDefaults: true
  });
  const videoCutDrive = () => {
    if (state.value.videoCut) return;
    const driverObj = ke({
      showProgress: true,
      allowClose: false,
      onNextClick: (element) => {
        console.log("onNextClick", element);
        driverObj.moveNext();
      },
      steps: [
        {
          element: ".cut-file-area",
          popover: { title: "导入视频", description: "你可以点击添加视频文件" }
        },
        {
          element: ".cut-add-segment",
          popover: { title: "添加片段", description: "在当前时间添加一个片段" }
        },
        {
          element: ".cut-video",
          popover: { title: "预览视频", description: "前进后退视频，在需要的地方切下" }
        },
        {
          element: ".cut-set-end",
          popover: { title: "设置结束时间", description: "设置片段的结束时间" }
        },
        {
          element: ".cut-sc-view",
          popover: {
            title: "sc视图",
            description: "如果你前面加载了弹幕，而且是B站录播文件，这里可以查看SC"
          }
        },
        {
          element: ".cut-search-danmu",
          popover: { title: "弹幕搜索", description: "点击后查询弹幕，快速添加片段" }
        },
        {
          element: ".cut-export",
          popover: { title: "导出", description: "所有片段处理完毕后，点击导出" }
        }
      ],
      onDestroyed: () => {
        state.value.videoCut = true;
      }
    });
    driverObj.drive();
  };
  return { videoCutDrive };
};
const _withScopeId = (n) => (pushScopeId("data-v-dfd1ab3f"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  id: "cut-tool",
  class: "container"
};
const _hoisted_2 = { class: "btns page-header" };
const _hoisted_3 = { class: "content" };
const _hoisted_4 = { class: "video cut-video" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "https://github.com/mifi/lossless-cut",
  target: "_blank"
}, "lossless-cut", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { title: "鸽了" }, "查看教程", -1));
const _hoisted_7 = { class: "cut-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  setup(__props) {
    onActivated(() => {
      hotkeys("ctrl+z", function() {
        undo();
      });
      hotkeys("ctrl+shift+z", function() {
        redo();
      });
      hotkeys("ctrl+s", function() {
        saveProject();
      });
      hotkeys("ctrl+shift+s", function() {
        saveAsAnother();
      });
      hotkeys("ctrl+enter", function() {
        exportCuts();
      });
      hotkeys("space", function(event) {
        console.log(event);
        if (event?.target?.tagName === "BUTTON") return;
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        videoToggle();
      });
      hotkeys("ctrl+left", function() {
        if (!videoInstance.value) return;
        videoInstance.value.backward = 1;
      });
      hotkeys("ctrl+right", function() {
        if (!videoInstance.value) return;
        videoInstance.value.forward = 1;
      });
    });
    onDeactivated(() => {
      hotkeys.unbind();
    });
    onUnmounted(() => {
      hotkeys.unbind();
    });
    const notice = useNotification();
    const files = ref({
      videoPath: null,
      danmuPath: null,
      originDanmuPath: null
    });
    const videoTitle = computed(() => {
      return files.value.videoPath ? "替换视频" : "添加视频";
    });
    const danmuTitle = computed(() => {
      return files.value.danmuPath ? "替换弹幕" : "添加弹幕";
    });
    const {
      selectedCuts,
      handleProjectClick,
      mediaPath,
      options: exportBtns,
      saveProject,
      saveAsAnother,
      handleProject
    } = useLlcProject(files);
    const { duration: videoDuration } = storeToRefs(useSegmentStore());
    const { appConfig } = storeToRefs(useAppConfig());
    const { undo, redo } = useSegmentStore();
    const videoVCutOptions = appConfig.value.tool.videoCut;
    watchEffect(async () => {
      if (mediaPath.value) {
        const { dir, name } = window.path.parse(mediaPath.value);
        const videoPath = mediaPath.value;
        if (await window.api.exits(videoPath)) {
          await handleVideo(videoPath);
        }
        const assFilepath = window.path.join(dir, `${name}.ass`);
        if (await window.api.exits(assFilepath)) {
          handleDanmu(assFilepath);
        } else {
          const xmlFilepath = window.path.join(dir, `${name}.xml`);
          if (await window.api.exits(xmlFilepath)) {
            handleDanmu(xmlFilepath);
          }
        }
      }
    });
    const videoRef = ref(null);
    const { width: videoWidth } = useElementSize(videoRef);
    const videoInstance = ref(null);
    provide("videoInstance", videoInstance);
    const handleVideoReady = (instance) => {
      videoInstance.value = instance;
    };
    const handleVideoChange = async () => {
      const files2 = await window.api.openFile({
        multi: false,
        filters: [
          {
            name: "media",
            extensions: supportedVideoExtensions
          }
        ]
      });
      if (!files2) return;
      const path = files2[0];
      handleVideo(path);
    };
    const handleVideo = async (path) => {
      files.value.videoPath = path;
      await videoRef.value?.switchUrl(path, path.endsWith(".flv") ? "flv" : "");
      if (files.value.danmuPath) {
        const content = await window.api.common.readFile(files.value.danmuPath);
        videoRef?.value?.switchAss(content);
      }
    };
    const handleVideoDurationChange = (duration) => {
      videoDuration.value = duration;
    };
    const xmlConvertVisible = ref(false);
    const tempXmlFile = ref("");
    const convertDanmuLoading = ref(false);
    const handleDanmuChange = async () => {
      const files2 = await window.api.openFile({
        multi: false,
        filters: [
          {
            name: "file",
            extensions: ["ass", "xml"]
          },
          {
            name: "ass",
            extensions: ["ass"]
          },
          {
            name: "xml",
            extensions: ["xml"]
          }
        ]
      });
      if (!files2) return;
      const path = files2[0];
      await handleDanmu(path);
    };
    const handleDanmu = async (path) => {
      files.value.originDanmuPath = path;
      if (path.endsWith(".ass")) {
        const content = await window.api.common.readFile(path);
        files.value.danmuPath = path;
        videoRef.value?.switchAss(content);
      } else {
        xmlConvertVisible.value = true;
        tempXmlFile.value = path;
        convertDanmuLoading.value = true;
      }
      generateDanmakuData(path);
    };
    const danmuConfirm = async (config) => {
      if (config.resolutionResponsive) {
        const width = videoInstance.value?.video.videoWidth;
        const height = videoInstance.value?.video.videoHeight;
        config.resolution[0] = width;
        config.resolution[1] = height;
      }
      const path = await convertDanmu2Ass(
        {
          input: tempXmlFile.value,
          output: uuid()
        },
        { saveRadio: 2, savePath: await window.api.common.getTempPath(), removeOrigin: false },
        config
      );
      const content = await window.api.common.readFile(path);
      convertDanmuLoading.value = false;
      files.value.danmuPath = path;
      videoRef.value?.switchAss(content);
    };
    const danmaList = ref([]);
    const generateDanmakuData = async (file) => {
      console.log(file);
      if (!videoDuration.value) return;
      if (file.endsWith(".ass")) {
        const data = await window.api.danmu.generateDanmakuData(file, {
          duration: videoDuration.value,
          interval: 10
        });
        tempDrawData = data;
        danmaList.value = [];
      } else if (file.endsWith(".xml")) {
        const data = await window.api.danmu.parseDanmu(file, {
          parseHotProgress: true,
          duration: videoDuration.value,
          interval: 10
        });
        tempDrawData = data.hotProgress;
        console.log(tempDrawData);
        danmaList.value = sortBy([...data.sc, ...data.danmu], "ts");
      } else {
        throw new Error("不支持的文件类型");
      }
      setTimeout(() => {
        draw();
      }, 1e3);
    };
    const convertDanmu2Ass = async (file, options, config) => {
      notice.info({
        title: "弹幕开始转换为ass",
        duration: 1e3
      });
      return new Promise((resolve, reject) => {
        window.api.danmu.convertXml2Ass(file, toRaw(config), { ...options, copyInput: true }).then((result) => {
          const taskId = result.taskId;
          window.api.task.on(taskId, "end", (data) => {
            notice.success({
              title: "转换成功",
              duration: 1e3
            });
            resolve(data.output);
          });
          window.api.task.on(taskId, "error", (data) => {
            notice.error({
              title: "转换失败",
              duration: 1e3
            });
            reject(data.err);
          });
        });
      });
    };
    const exportVisible = ref(false);
    const exportCuts = async () => {
      if (selectedCuts.value.length === 0) {
        notice.error({
          title: "没有需要导出的切片",
          duration: 1e3
        });
        return;
      }
      if (!files.value.videoPath) {
        notice.error({
          title: "请先选择视频文件",
          duration: 1e3
        });
        return;
      }
      if (!files.value.danmuPath) {
        notice.error({
          title: "请先选择弹幕文件",
          duration: 1e3
        });
        return;
      }
      if (convertDanmuLoading.value) {
        notice.error({
          title: "弹幕转换中，请稍后",
          duration: 1e3
        });
        return;
      }
      exportVisible.value = true;
    };
    const videoToggle = () => {
      if (!videoInstance.value) return;
      if (!videoInstance.value.url) return;
      videoInstance.value.toggle();
    };
    function drawSmoothCurve(ctx, points) {
      const len = points.length;
      let lastX = points[0].x;
      let lastY = points[0].y;
      for (let i = 1; i < len - 1; i++) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.strokeStyle = points[i].color;
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        lastX = xc;
        lastY = yc;
        ctx.stroke();
      }
    }
    const hotProgressCanvas = ref(null);
    function drawSmoothLineChart(data, width, height) {
      if (!hotProgressCanvas.value) return;
      const canvas = hotProgressCanvas.value;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);
      const length = data.length;
      const maxValue = Math.max(...data.map((item) => item.value));
      const xRation = width / (length - 1);
      const yRatio = height / maxValue;
      const points = [];
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const x = i * xRation;
        const y = height - item.value * yRatio;
        points.push({
          x,
          y,
          color: item.color ?? "#333333"
        });
      }
      drawSmoothCurve(ctx, points);
      return canvas;
    }
    let tempDrawData = [];
    function draw() {
      if (!videoWidth.value) return;
      if (!tempDrawData.length) return;
      drawSmoothLineChart(tempDrawData, videoWidth.value, 50);
    }
    const debouncedDraw = useDebounceFn(() => {
      draw();
    }, 500);
    window.addEventListener("resize", debouncedDraw);
    onUnmounted(() => {
      window.removeEventListener("resize", debouncedDraw);
    });
    const fileList = ref([]);
    const handleFileChange = (fileList2) => {
      console.log(files);
      if (!fileList2.length) return;
      const file = fileList2[0];
      const { path, ext } = file;
      if (ext === ".llc") {
        handleProject(path);
      } else if ([".mp4", ".flv", ".m4s"].includes(ext)) {
        handleVideo(path);
      }
    };
    const { videoCutDrive } = useDrive();
    onMounted(() => {
      videoCutDrive();
    });
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_FileArea = __unplugin_components_1$1;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(ButtonGroup, {
              title: "请选择LosslessCut项目文件",
              options: unref(exportBtns),
              onClick: unref(handleProjectClick)
            }, {
              default: withCtx(() => [
                createTextVNode("导入项目文件")
              ]),
              _: 1
            }, 8, ["options", "onClick"]),
            createVNode(_component_n_button, {
              type: "primary",
              onClick: handleVideoChange
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(videoTitle)), 1)
              ]),
              _: 1
            }),
            createVNode(_component_n_button, {
              class: "cut-add-danmu",
              type: "primary",
              disabled: !unref(files).videoPath,
              onClick: handleDanmuChange
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(danmuTitle)), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            createVNode(_component_n_button, {
              class: "cut-export",
              type: "info",
              disabled: !unref(files).videoPath,
              onClick: exportCuts
            }, {
              default: withCtx(() => [
                createTextVNode(" 导出切片 ")
              ]),
              _: 1
            }, 8, ["disabled"])
          ]),
          createBaseVNode("div", _hoisted_3, [
            withDirectives(createBaseVNode("div", _hoisted_4, [
              withDirectives(createVNode(_sfc_main$6, {
                ref_key: "videoRef",
                ref: videoRef,
                option: {},
                onReady: handleVideoReady,
                "onVideo:durationchange": handleVideoDurationChange
              }, null, 512), [
                [vShow, unref(files).videoPath]
              ]),
              createBaseVNode("canvas", {
                ref_key: "hotProgressCanvas",
                ref: hotProgressCanvas
              }, null, 512)
            ], 512), [
              [vShow, unref(files).videoPath]
            ]),
            withDirectives(createVNode(_component_FileArea, {
              modelValue: unref(fileList),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(fileList) ? fileList.value = $event : null),
              style: { height: "100%" },
              class: "video empty cut-file-area",
              extensions: ["llc", "flv", "mp4", "m4s"],
              max: 1,
              onChange: handleFileChange
            }, {
              desc: withCtx(() => [
                createTextVNode(" 请导入视频或"),
                _hoisted_5,
                createTextVNode("项目文件，如果你不会使用，请先"),
                _hoisted_6
              ]),
              _: 1
            }, 8, ["modelValue"]), [
              [vShow, !unref(files).videoPath]
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(SegmentList, {
                "danma-list": unref(danmaList),
                files: unref(files)
              }, null, 8, ["danma-list", "files"])
            ])
          ])
        ]),
        createVNode(DanmuFactorySettingDailog, {
          visible: unref(xmlConvertVisible),
          "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => isRef(xmlConvertVisible) ? xmlConvertVisible.value = $event : null),
          modelValue: unref(videoVCutOptions).danmuPresetId,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(videoVCutOptions).danmuPresetId = $event),
          "show-preset": true,
          onConfirm: danmuConfirm
        }, null, 8, ["visible", "modelValue"]),
        createVNode(ExportModal, {
          modelValue: unref(exportVisible),
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(exportVisible) ? exportVisible.value = $event : null),
          files: unref(files)
        }, null, 8, ["modelValue", "files"])
      ], 64);
    };
  }
});
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfd1ab3f"]]);
export {
  Index as default
};
