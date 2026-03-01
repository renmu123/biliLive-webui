import { b as toReactive, w as watchThrottled, e as useWindowSize, f as useDraggable, d as useEventListener, a as useStorage } from "./index-bqczNda1.js";
import { i as useFfmpegPreset, d as useAppConfig, w as useSegmentStore, e as ffmpegPreset, p as filenamify, x as secondsToTimemark, t as task, y as generateDistinctColor, n as supportedVideoExtensions } from "./index-BpXg0f34.js";
import { B as ButtonGroup } from "./ButtonGroup-CvzhfmEC.js";
import { D as DanmuFactorySettingDailog } from "./DanmuFactorySettingDailog-DFgpP-0o.js";
import { _ as _sfc_main$7 } from "./Tip.vue_vue_type_script_setup_true_lang-x9PvGp7f.js";
import { aR as Symbol$1, aS as isArray, aT as isArguments, ao as isSymbol, aU as arrayMap, aV as identity, aW as baseUnary, aX as baseRest, aY as isIterateeCall, k as api, d as defineComponent, c as createElementBlock, e as createBaseVNode, o as openBlock, a2 as mergeModels, a3 as useModel, a4 as storeToRefs, x as computed, r as ref, g as createBlock, w as withCtx, a9 as __unplugin_components_3, a as createVNode, h as createCommentVNode, j as createTextVNode, t as toDisplayString, f as unref, a6 as renderList, F as Fragment, B as Button, _ as __unplugin_components_4, aO as reactive, a5 as watch, aj as withKeys, aB as renderSlot, ak as onActivated, aa as useThemeStore, i as isRef, S as inject, aN as withModifiers, af as normalizeStyle, a7 as normalizeClass, aZ as Qe, l as h$1, H as withDirectives, K as vShow, al as onDeactivated, am as onUnmounted, ae as onMounted, E as provide } from "./index-gjuLIDoI.js";
import { s as showDirectoryDialog, b as showSaveDialog, a as showFileDialog } from "./fileSystem-C22lY_44.js";
import { F as FolderOpenOutline } from "./FolderOpenOutline-K-p0ASPr.js";
import { u as useNotification } from "./use-notification-LRtjAvoZ.js";
import { _ as __unplugin_components_0 } from "./Cascader-C6rHCto0.js";
import { _ as __unplugin_components_5, a as __unplugin_components_3$2 } from "./RadioGroup-Bd7Skk-n.js";
import { _ as __unplugin_components_3$1 } from "./Space-BBiSHRV-.js";
import { _ as __unplugin_components_0$1 } from "./Input--Gp3P9gj.js";
import { N as NIcon } from "./Icon-D2Zo6Coc.js";
import { _ as __unplugin_components_1 } from "./Checkbox-pQXdXXSK.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-B1lyReKF.js";
import { a as __unplugin_components_2$1, _ as __unplugin_components_3$3 } from "./ColorPicker-27Ny6g16.js";
import { A as AddCircleOutline, _ as __unplugin_components_1$2 } from "./AddCircleOutline-m6tcsU27.js";
import { b as baseGet, d as baseIteratee, e as baseMap, _ as __unplugin_components_2 } from "./Popover-T5GorXob.js";
import { _ as __unplugin_components_8 } from "./VirtualList-xClg8xzT.js";
import { u as useConfirm } from "./index-BZWV_urK.js";
import { h as hotkeys } from "./hotkeys.esm-CkQxwFRj.js";
import { C as CheckmarkCircleOutline } from "./CheckmarkCircleOutline-DUr2KB0M.js";
import { _ as __unplugin_components_7 } from "./Spin-CLVf7OzA.js";
import { _ as _sfc_main$8 } from "./Index.vue_vue_type_style_index_0_lang-CuMJDjM4.js";
import { F as FileArea } from "./FileArea-CDpp5X0w.js";
import { _ as __unplugin_components_0$2 } from "./InputNumber-CaUnxb7j.js";
import { u as useNotice } from "./useNotice-BnaW_JYm.js";
import { _ as __unplugin_components_2$2, a as __unplugin_components_5$1 } from "./FormItem-Kj27K3vk.js";
import { _ as __unplugin_components_1$1 } from "./text-CwQ4I63s.js";
import { c as common } from "./common-Da25N27f.js";
import { a as arrayPush } from "./_getTag-NYFG1GAg.js";
import "./Dropdown-DBKZZG83.js";
import "./ChevronRight-CONDXL5I.js";
import "./create-DfXrl36C.js";
import "./create-ref-setter-DXkZaMbS.js";
import "./danmuPreset-Bz5zYdKV.js";
import "./Select-xWcqChuz.js";
import "./Divider-CcENGeqI.js";
import "./Switch-ChpQMtl0.js";
import "./HelpCircleOutline-JWqllQs0.js";
import "./showDirectoryDialog-CUR2gD_Z.js";
import "./CloseOutline-DroYSogW.js";
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
const asrRecognize = async () => {
  const res = await api.post("/ai/asr");
  return res.data;
};
const llm = async (message, systemPrompt) => {
  const res = await api.post("/ai/llm", {
    message,
    systemPrompt
  });
  return res.data;
};
const songRecognize = async (file, startTime, endTime) => {
  const res = await api.post("/ai/song_recognize", {
    file,
    startTime,
    endTime
  });
  return res.data;
};
const subtitleRecognize = async (file, startTime, endTime, modelId, options) => {
  const res = await api.post("/ai/subtitle", {
    file,
    modelId,
    startTime,
    endTime,
    offset: options?.offset
  });
  return res.data;
};
const ai = {
  asrRecognize,
  llm,
  songRecognize,
  subtitleRecognize
};
const _hoisted_1$i = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const LocationOutline = defineComponent({
  name: "LocationOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$i,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "circle",
          {
            cx: "256",
            cy: "192",
            r: "48",
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
const _hoisted_1$h = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const Pencil = defineComponent({
  name: "Pencil",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$h,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
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
        ),
        createBaseVNode(
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
        )
      ])
    );
  }
});
const _hoisted_1$g = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const PlayCircleOutline = defineComponent({
  name: "PlayCircleOutline",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$g,
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
            d: "M216.32 334.44l114.45-69.14a10.89 10.89 0 0 0 0-18.6l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31z",
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
const _hoisted_1$f = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const RadioButtonOffSharp = defineComponent({
  name: "RadioButtonOffSharp",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$f,
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
        )
      ])
    );
  }
});
const _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const SearchIcon = defineComponent({
  name: "Search",
  render: function render5(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$e,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8z",
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
const _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const MinusOutlined = defineComponent({
  name: "MinusOutlined",
  render: function render6(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$d,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M19 12.998H5v-2h14z",
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
const _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const PlusOutlined = defineComponent({
  name: "PlusOutlined",
  render: function render7(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$c,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z",
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
const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const SubtitlesOutlined = defineComponent({
  name: "SubtitlesOutlined",
  render: function render8(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$b,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z",
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
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 20 20"
};
const Cut20Regular = defineComponent({
  name: "Cut20Regular",
  render: function render9(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$a,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "g",
          {
            fill: "none"
          },
          [
            createBaseVNode("path", {
              d: "M5.92 2.228a.5.5 0 0 0-.84.544L9.405 9.43L7.48 12.39a3 3 0 1 0 .779.636L10 10.348l1.74 2.68a3 3 0 1 0 .779-.636L5.92 2.227zM14 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4zM4 15a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm7.192-6.489l-.596-.918l3.485-5.365a.5.5 0 0 1 .838.544l-3.727 5.74z",
              fill: "currentColor"
            })
          ],
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const Delete24Regular = defineComponent({
  name: "Delete24Regular",
  render: function render10(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$9,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "g",
          {
            fill: "none"
          },
          [
            createBaseVNode("path", {
              d: "M12 1.75a3.25 3.25 0 0 1 3.245 3.066L15.25 5h5.25a.75.75 0 0 1 .102 1.493L20.5 6.5h-.796l-1.28 13.02a2.75 2.75 0 0 1-2.561 2.474l-.176.006H8.313a2.75 2.75 0 0 1-2.714-2.307l-.023-.174L4.295 6.5H3.5a.75.75 0 0 1-.743-.648L2.75 5.75a.75.75 0 0 1 .648-.743L3.5 5h5.25A3.25 3.25 0 0 1 12 1.75zm6.197 4.75H5.802l1.267 12.872a1.25 1.25 0 0 0 1.117 1.122l.127.006h7.374c.6 0 1.109-.425 1.225-1.002l.02-.126L18.196 6.5zM13.75 9.25a.75.75 0 0 1 .743.648L14.5 10v7a.75.75 0 0 1-1.493.102L13 17v-7a.75.75 0 0 1 .75-.75zm-3.5 0a.75.75 0 0 1 .743.648L11 10v7a.75.75 0 0 1-1.493.102L9.5 17v-7a.75.75 0 0 1 .75-.75zm1.75-6a1.75 1.75 0 0 0-1.744 1.606L10.25 5h3.5A1.75 1.75 0 0 0 12 3.25z",
              fill: "currentColor"
            })
          ],
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 20 20"
};
const MusicNote220Regular = defineComponent({
  name: "MusicNote220Regular",
  render: function render11(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$8,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "g",
          {
            fill: "none"
          },
          [
            createBaseVNode("path", {
              d: "M14.702 2.226A1 1 0 0 1 16 3.18V13.5a2.5 2.5 0 1 1-1-2V6.18L8 8.368V15.5a2.5 2.5 0 1 1-1-2V5.368a1 1 0 0 1 .702-.955l7-2.187zM8 7.32l7-2.187V3.18L8 5.368V7.32zM5.5 14a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zm6.5-.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0z",
              fill: "currentColor"
            })
          ],
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const ToggleLeft24Regular = defineComponent({
  name: "ToggleLeft24Regular",
  render: function render12(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$7,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "g",
          {
            fill: "none"
          },
          [
            createBaseVNode("path", {
              d: "M7.25 14.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5zM22 12a5 5 0 0 0-5-5H7a5 5 0 0 0 0 10h10a5 5 0 0 0 5-5zm-5-3.5a3.5 3.5 0 1 1 0 7H7a3.5 3.5 0 1 1 0-7h10z",
              fill: "currentColor"
            })
          ],
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$6 = { style: { "display": "flex", "flex-direction": "column", "gap": "10px" } };
const _hoisted_2$5 = { style: { "color": "skyblue" } };
const _hoisted_3$4 = {
  key: 0,
  style: { "color": "red", "margin-top": "0" }
};
const _hoisted_4$4 = {
  class: "flex",
  style: { "align-items": "center" }
};
const _hoisted_5$4 = {
  class: "flex",
  style: { "align-items": "center" }
};
const _hoisted_6$2 = { style: { "margin-bottom": "5px" } };
const _hoisted_7$2 = { style: { "color": "red" } };
const _hoisted_8$2 = ["title", "onClick"];
const _hoisted_9$1 = { class: "footer" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ExportModal",
  props: /* @__PURE__ */ mergeModels({
    files: { default: () => {
      return {
        danmuPath: null,
        originVideoPath: null
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
    const exportOptions = toReactive(
      computed({
        get: () => appConfig.value.tool.videoCut,
        set: (value) => {
          appConfig.value.tool.videoCut = value;
        }
      })
    );
    const confirmExport = async () => {
      if (!exportOptions.ffmpegPresetId) {
        notice.error({
          title: "请选择预设",
          duration: 1e3
        });
        return;
      }
      const ffmpegOptiosn = (await ffmpegPreset.get(exportOptions.ffmpegPresetId)).config;
      let index = 1;
      if (ffmpegOptiosn.encoder === "copy" && props.files.danmuPath && !exportOptions.ignoreDanmu) {
        notice.error({
          title: "存在弹幕时编码器不能为copy",
          duration: 1e3
        });
        return;
      }
      const segments = [];
      for (const cut of selectedCuts.value) {
        const start = cut.start;
        const end = cut.end;
        const label = cut.name;
        const title = filenamify(
          exportOptions.title.replace("{{filename}}", window.path.parse(props.files.originVideoPath).name).replace("{{label}}", label).replace("{{num}}", index.toString()).replace("{{from}}", secondsToTimemark(start).replaceAll(":", ".")).replace("{{to}}", secondsToTimemark(end).replaceAll(":", ".")).trim(),
          { replacement: "" }
        );
        await task.cut(
          {
            videoFilePath: props.files.originVideoPath,
            assFilePath: exportOptions.ignoreDanmu ? "" : props.files.danmuPath
          },
          `${title}.mp4`,
          {
            ...ffmpegOptiosn,
            ss: start,
            to: end
          },
          {
            override: exportOptions.override,
            saveType: exportOptions.saveRadio,
            savePath: exportOptions.savePath
          }
        );
        segments.push({ start, end, name: title });
        index += 1;
      }
      if (exportOptions.exportSubtitle) {
        const srtContent = selectedCuts.value.map((cut) => {
          return cut.lyrics;
        }).join("\n");
        task.cutSubtitle({
          srtContent,
          segments,
          videoPath: props.files.originVideoPath,
          saveType: exportOptions.saveRadio,
          savePath: exportOptions.savePath
        });
      }
      notice.info({
        title: "已加入任务队列",
        duration: 1e3
      });
      visible.value = false;
    };
    const noDanmuTips = computed(() => {
      if (props.files.danmuPath) {
        return "";
      } else {
        return "如果不需要弹幕，视频预设推荐使用copy，这样就不需要重新编码，但是只会在关键帧切割，导致视频长度不准确";
      }
    });
    async function getDir() {
      const path = await showDirectoryDialog({
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
      const _component_Tip = _sfc_main$7;
      const _component_n_radio = __unplugin_components_3$2;
      const _component_n_input = __unplugin_components_0$1;
      const _component_n_icon = NIcon;
      const _component_n_space = __unplugin_components_3$1;
      const _component_n_radio_group = __unplugin_components_5;
      const _component_n_checkbox = __unplugin_components_1;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_4;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: visible.value,
        "onUpdate:show": _cache[8] || (_cache[8] = ($event) => visible.value = $event),
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
              createBaseVNode("div", _hoisted_9$1, [
                createVNode(_component_n_button, {
                  class: "btn",
                  onClick: _cache[7] || (_cache[7] = ($event) => visible.value = false)
                }, {
                  default: withCtx(() => _cache[18] || (_cache[18] = [
                    createTextVNode("取消")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  class: "btn",
                  type: "primary",
                  onClick: confirmExport
                }, {
                  default: withCtx(() => _cache[19] || (_cache[19] = [
                    createTextVNode("确定")
                  ])),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$6, [
                createBaseVNode("h3", null, [
                  createTextVNode(" 共有" + toDisplayString(unref(cuts).length) + "个切片，本次将导出 ", 1),
                  createBaseVNode("span", _hoisted_2$5, toDisplayString(unref(selectedCuts).length), 1),
                  _cache[9] || (_cache[9] = createTextVNode(" 个视频 "))
                ]),
                unref(noDanmuTips) ? (openBlock(), createElementBlock("p", _hoisted_3$4, toDisplayString(unref(noDanmuTips)), 1)) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_4$4, [
                  _cache[11] || (_cache[11] = createTextVNode(" 选择视频预设： ")),
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
                    default: withCtx(() => _cache[10] || (_cache[10] = [
                      createTextVNode(" 推荐采用质量模式，以自适应视频质量，视频编码不能使用copy ")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_5$4, [
                  createVNode(_component_n_radio_group, {
                    value: unref(exportOptions).saveRadio,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(exportOptions).saveRadio = $event)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_n_space, { class: "flex align-center column" }, {
                        default: withCtx(() => [
                          createVNode(_component_n_radio, { value: 1 }, {
                            default: withCtx(() => _cache[12] || (_cache[12] = [
                              createTextVNode(" 保存到视频文件夹 ")
                            ])),
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
                            default: withCtx(() => _cache[13] || (_cache[13] = [
                              createTextVNode(" 覆盖文件 ")
                            ])),
                            _: 1
                          }),
                          createVNode(_component_n_radio, { value: false }, {
                            default: withCtx(() => _cache[14] || (_cache[14] = [
                              createTextVNode(" 跳过存在文件 ")
                            ])),
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
                  createVNode(_component_n_checkbox, {
                    checked: unref(exportOptions).ignoreDanmu,
                    "onUpdate:checked": _cache[4] || (_cache[4] = ($event) => unref(exportOptions).ignoreDanmu = $event),
                    style: { "margin-top": "10px" }
                  }, {
                    default: withCtx(() => _cache[15] || (_cache[15] = [
                      createTextVNode(" 忽略弹幕 ")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  createVNode(_component_n_checkbox, {
                    checked: unref(exportOptions).exportSubtitle,
                    "onUpdate:checked": _cache[5] || (_cache[5] = ($event) => unref(exportOptions).exportSubtitle = $event),
                    style: { "margin-top": "10px" }
                  }, {
                    default: withCtx(() => _cache[16] || (_cache[16] = [
                      createTextVNode(" 导出字幕 ")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_6$2, [
                    _cache[17] || (_cache[17] = createTextVNode(" 输出文件名：")),
                    createBaseVNode("span", _hoisted_7$2, toDisplayString(unref(exportError)), 1)
                  ]),
                  createBaseVNode("div", null, [
                    createVNode(_component_n_input, {
                      value: unref(exportOptions).title,
                      "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(exportOptions).title = $event),
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
                      }, toDisplayString(item.value), 9, _hoisted_8$2);
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
const ExportModal = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-e1468cab"]]);
const _hoisted_1$5 = { style: { "width": "600px" } };
const _hoisted_2$4 = { style: { "margin-top": "10px" } };
const _hoisted_3$3 = { style: { "flex": "none" } };
const _hoisted_4$3 = { style: { "color": "#2b94ff", "flex": "none" } };
const _hoisted_5$3 = {
  key: 0,
  style: { "color": "#e57272" }
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SearchPopover",
  props: /* @__PURE__ */ mergeModels({
    file: {},
    danmaList: {},
    danmaSearchMask: { type: Boolean }
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["add-segment", "set-location"], ["update:visible"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const visible = useModel(__props, "visible");
    const emits = __emit;
    const notice = useNotification();
    const form = reactive({
      value: "",
      content: "content",
      sc: false
    });
    const list = computed(() => props.danmaList);
    const inputRef = ref(null);
    watch(
      () => visible.value,
      (value) => {
        if (value) {
          getDisplayList();
          setTimeout(() => {
            inputRef.value?.focus();
          }, 0);
        }
      }
    );
    const handleOutside = () => {
      if (props.danmaSearchMask) {
        setTimeout(() => {
          visible.value = false;
        }, 0);
      }
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
    const setLocation = (item) => {
      emits("set-location", item.ts);
    };
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_0$1;
      const _component_n_button = Button;
      const _component_n_input_group = __unplugin_components_2$1;
      const _component_n_radio = __unplugin_components_3$2;
      const _component_n_space = __unplugin_components_3$1;
      const _component_n_radio_group = __unplugin_components_5;
      const _component_n_checkbox = __unplugin_components_1;
      const _component_n_icon = NIcon;
      const _component_n_virtual_list = __unplugin_components_8;
      const _component_n_popover = __unplugin_components_2;
      return openBlock(), createBlock(_component_n_popover, {
        show: visible.value,
        trigger: "manual",
        "on-clickoutside": handleOutside
      }, {
        trigger: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$5, [
            createVNode(_component_n_input_group, null, {
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  ref_key: "inputRef",
                  ref: inputRef,
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
                  default: withCtx(() => _cache[3] || (_cache[3] = [
                    createTextVNode(" 搜索 ")
                  ])),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2$4, [
              createVNode(_component_n_radio_group, {
                value: unref(form).content,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(form).content = $event),
                name: "radiogroup"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, null, {
                    default: withCtx(() => [
                      createVNode(_component_n_radio, { value: "content" }, {
                        default: withCtx(() => _cache[4] || (_cache[4] = [
                          createTextVNode(" 内容 ")
                        ])),
                        _: 1
                      }),
                      createVNode(_component_n_radio, { value: "user" }, {
                        default: withCtx(() => _cache[5] || (_cache[5] = [
                          createTextVNode(" 用户名 ")
                        ])),
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
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("sc")
                ])),
                _: 1
              }, 8, ["checked"])
            ]),
            createVNode(_component_n_virtual_list, {
              class: "content",
              "item-size": 28,
              items: unref(displayList)
            }, {
              default: withCtx(({ item }) => [
                (openBlock(), createElementBlock("div", {
                  key: `${item.ts}-${item.text}`,
                  class: "item",
                  style: { "min-height": "28px" }
                }, [
                  createBaseVNode("span", _hoisted_3$3, toDisplayString(unref(secondsToTimemark)(item.ts, false)), 1),
                  createBaseVNode("span", _hoisted_4$3, toDisplayString(item.user), 1),
                  item.type === "sc" ? (openBlock(), createElementBlock("span", _hoisted_5$3, "sc")) : createCommentVNode("", true),
                  createBaseVNode("span", null, toDisplayString(item.text), 1),
                  createVNode(_component_n_icon, {
                    class: "pointer action",
                    size: "20",
                    depth: 3,
                    title: "添加到切片",
                    onClick: ($event) => addSegment(item)
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(AddCircleOutline))
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_n_icon, {
                    class: "pointer action",
                    size: "20",
                    depth: 3,
                    title: "定位",
                    onClick: ($event) => setLocation(item)
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(LocationOutline))
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]))
              ]),
              _: 1
            }, 8, ["items"])
          ])
        ]),
        _: 3
      }, 8, ["show"]);
    };
  }
});
const SearchPopover = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e86ae3d7"]]);
const _hoisted_1$4 = { class: "cut-list" };
const _hoisted_2$3 = { class: "btns" };
const _hoisted_3$2 = {
  stroke: "currentColor",
  fill: "currentColor",
  "stroke-width": "0",
  viewBox: "0 0 384 512",
  role: "button",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "transform": "matrix(-1, 0, 0, 1, 0, 0)" }
};
const _hoisted_4$2 = { class: "view" };
const _hoisted_5$2 = ["onClick", "onDblclick", "onContextmenu"];
const _hoisted_6$1 = { class: "time" };
const _hoisted_7$1 = {
  class: "name",
  style: { "color": "skyblue" }
};
const _hoisted_8$1 = {
  key: 0,
  class: "duration"
};
const _hoisted_9 = { class: "icon" };
const _hoisted_10 = { class: "edit-icon" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SegmentList",
  props: {
    danmaList: { default: () => [] },
    files: {},
    danmaSearchMask: { type: Boolean }
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
        searchDanmu();
      });
      hotkeys("ctrl+n", function(event) {
        event.preventDefault();
        addCut();
      });
    });
    const props = __props;
    const el = ref(null);
    const { width, height } = useWindowSize();
    const notice = useNotification();
    const confirm = useConfirm();
    const { x, y: y2, style } = useDraggable(el, {
      initialValue: { x: width.value - 100, y: height.value - 40 }
    });
    useEventListener(window, "resize", () => {
      x.value = width.value - 100;
      y2.value = height.value - 40;
    });
    const videoInstance = inject("videoInstance");
    const { cuts, selectCutId } = storeToRefs(useSegmentStore());
    const {
      addSegment,
      removeSegment,
      updateSegment,
      toggleSegment,
      selectCut,
      insertSegmentAfter,
      mergeForward,
      mergeBackward,
      getCombinedLyrics
    } = useSegmentStore();
    const toggleChecked = (id) => {
      toggleSegment(id);
    };
    const cutEditVisible = ref(false);
    const tempCutName = ref("");
    const editCut = (id) => {
      const cut = cuts.value.find((c2) => c2.id === id);
      if (!cut) return;
      cutEditVisible.value = true;
      tempCutName.value = cut.name;
      selectCutId.value = id;
    };
    const rename = () => {
      if (!selectCutId.value) {
        return;
      }
      editCut(selectCutId.value);
    };
    const confirmEditCutName = () => {
      if (!selectCutId.value) return;
      updateSegment(selectCutId.value, { name: tempCutName.value });
      cutEditVisible.value = false;
    };
    const navVideo = (start) => {
      videoInstance.value.seek = start;
    };
    const handleSelectCut = (id) => {
      selectCut(id);
    };
    const addCut = (iOptions = {}) => {
      if (!props.files.originVideoPath) {
        notice.error({
          title: "请先加载视频文件",
          duration: 1e3
        });
        return;
      }
      const options = Object.assign(
        {
          start: videoInstance.value.currentTime,
          name: "",
          checked: true
        },
        iOptions
      );
      if (options.end) {
        options.end = Math.min(options.end, videoInstance.value.duration);
      } else {
        options.end = Math.min(options.start + 60 * 5, videoInstance.value.duration);
      }
      addSegment(options);
      console.log("cuts", cuts.value);
    };
    const deleteCut = (id) => {
      const segmentId = id || selectCutId.value;
      if (!segmentId) {
        return;
      }
      removeSegment(segmentId);
      resetSubtitle();
    };
    const setStartTime = () => {
      if (!selectCutId.value) {
        return;
      }
      if (!videoInstance) return;
      const selectedCut = cuts.value.find((c2) => c2.id === selectCutId.value);
      if (!selectedCut || videoInstance.value.currentTime > selectedCut.end) {
        return;
      }
      updateSegment(selectCutId.value, { start: videoInstance.value.currentTime });
    };
    const setEndTime = () => {
      if (!selectCutId.value) {
        return;
      }
      if (!videoInstance) return;
      const selectedCut = cuts.value.find((c2) => c2.id === selectCutId.value);
      if (!selectedCut || videoInstance.value.currentTime < selectedCut.start) {
        return;
      }
      updateSegment(selectCutId.value, { end: videoInstance.value.currentTime });
    };
    const nextSegment = () => {
      if (!selectCutId.value) {
        if (cuts.value.length > 0) {
          selectCut(cuts.value[0].id);
        }
        return;
      }
      const currentIndex = cuts.value.findIndex((c2) => c2.id === selectCutId.value);
      if (currentIndex === -1 || currentIndex === cuts.value.length - 1) {
        return;
      }
      selectCut(cuts.value[currentIndex + 1].id);
    };
    const prevSegment = () => {
      if (!selectCutId.value) {
        if (cuts.value.length > 0) {
          selectCut(cuts.value[cuts.value.length - 1].id);
        }
        return;
      }
      const currentIndex = cuts.value.findIndex((c2) => c2.id === selectCutId.value);
      if (currentIndex === -1 || currentIndex === 0) {
        return;
      }
      selectCut(cuts.value[currentIndex - 1].id);
    };
    const searchDanmuVisible = ref(false);
    const searchDanmu = () => {
      searchDanmuVisible.value = !searchDanmuVisible.value;
    };
    const handleMergeForward = (segment) => {
      if (segment.loading) {
        notice.warning({
          title: "片段正在处理，无法合并",
          duration: 2e3
        });
        return;
      }
      const currentIndex = cuts.value.findIndex((s3) => s3.id === segment.id);
      if (currentIndex <= 0) {
        notice.warning({
          title: "第一个片段无法向前合并",
          duration: 2e3
        });
        return;
      }
      const success = mergeForward(segment.id);
      resetSubtitle();
      if (success) {
        notice.success({
          title: "合并成功",
          duration: 1500
        });
      }
    };
    const handleMergeBackward = (segment) => {
      if (segment.loading) {
        notice.warning({
          title: "片段正在处理，无法合并",
          duration: 2e3
        });
        return;
      }
      const currentIndex = cuts.value.findIndex((s3) => s3.id === segment.id);
      if (currentIndex === -1 || currentIndex >= cuts.value.length - 1) {
        notice.warning({
          title: "最后一个片段无法向后合并",
          duration: 2e3
        });
        return;
      }
      const success = mergeBackward(segment.id);
      resetSubtitle();
      if (success) {
        notice.success({
          title: "合并成功",
          duration: 1500
        });
      }
    };
    const splitSegment = (segment) => {
      if (!videoInstance.value) return;
      if (segment.loading) {
        notice.warning({
          title: "片段正在处理，无法切割",
          duration: 2e3
        });
        return;
      }
      const currentTime = videoInstance.value.currentTime;
      if (currentTime <= segment.start || currentTime >= segment.end) {
        notice.warning({
          title: "当前时间点不在该片段范围内",
          duration: 2e3
        });
        return;
      }
      updateSegment(segment.id, { end: currentTime });
      insertSegmentAfter(segment.id, {
        start: currentTime,
        end: segment.end,
        name: segment.name ? `${segment.name}-2` : "",
        checked: segment.checked
      });
    };
    function renderIcon(icon) {
      return () => h$1(NIcon, { style: { fontSize: "17px", "font-size": "17px" } }, { default: () => h$1(icon) });
    }
    const resetSubtitle = () => {
      const combinedLyrics = getCombinedLyrics();
      videoInstance.value.artplayerPluginSubtitle.setContent(combinedLyrics, "srt");
    };
    const songRecognize2 = async (segment) => {
      if (!props.files.originVideoPath) {
        notice.error({
          title: "请先加载视频文件",
          duration: 1e3
        });
        return;
      }
      if (segment.end && segment.end - segment.start > 6 * 60) {
        const [status2] = await confirm.warning({
          content: `这么长的片段真的是歌曲吗、是否继续？`
        });
        if (!status2) return;
      }
      const [status] = await confirm.warning({
        content: `此功能使用AI用于针对片段进行歌曲识别，使用前请先去配置阿里云相关key。

    1. 利用asr识别出字幕

    2. 利用llm根据字幕内容推断歌曲名称和歌词

    3. 利用asr中的时间轴以及歌词生成校对后的字幕（设置可关闭）
`,
        showCheckbox: true,
        showAgainKey: "videoSongRecognizeWarning"
      });
      if (!status) return;
      try {
        updateSegment(segment.id, { loading: true }, true);
        const data = await ai.songRecognize(
          props.files.originVideoPath,
          segment.start,
          segment.end
        );
        updateSegment(segment.id, { name: data.name, lyrics: data.lyrics || "" });
        resetSubtitle();
        if (data.name) {
          notice.success({
            title: `歌曲识别成功：${data.name}`,
            duration: 3e3
          });
        } else {
          notice.warning({
            title: `未能识别出歌曲`,
            duration: 3e3
          });
        }
      } finally {
        updateSegment(segment.id, { loading: false }, true);
      }
    };
    const subtitleRecognizeHandler = async (segment) => {
      if (!props.files.originVideoPath) {
        notice.error({
          title: "请先加载视频文件",
          duration: 1e3
        });
        return;
      }
      let modelId = void 0;
      try {
        const config = await window.api.config.getAll();
        const models = config?.ai?.models || [];
        if (models.length === 0) {
          notice.error({
            title: "请先在设置中配置AI模型",
            duration: 3e3
          });
          return;
        }
        modelId = config?.ai?.subtitleRecognize?.modelId;
        if (!modelId) {
          notice.error({
            title: "请先在设置中配置字幕识别模型",
            duration: 3e3
          });
          return;
        }
      } catch (error) {
        notice.error({
          title: "获取配置失败，请先配置AI模型",
          duration: 3e3
        });
        return;
      }
      const [status] = await confirm.warning({
        content: `此功能使用AI对片段进行字幕识别，将生成SRT格式字幕。

识别范围：${segment.start.toFixed(2)}s - ${segment.end?.toFixed(2)}s`,
        showCheckbox: true,
        showAgainKey: "videoSubtitleRecognizeWarning"
      });
      if (!status) return;
      try {
        updateSegment(segment.id, { loading: true }, true);
        const data = await ai.subtitleRecognize(
          props.files.originVideoPath,
          segment.start,
          segment.end,
          modelId,
          {
            offset: segment.start
          }
        );
        updateSegment(segment.id, { lyrics: data.srt || "" });
        resetSubtitle();
        if (data.srt) {
          notice.success({
            title: "字幕识别成功",
            duration: 3e3
          });
        } else {
          notice.warning({
            title: "未能识别出字幕",
            duration: 3e3
          });
        }
      } catch (error) {
        notice.error({
          title: "字幕识别失败",
          content: error.message || "未知错误",
          duration: 5e3
        });
      } finally {
        updateSegment(segment.id, { loading: false }, true);
      }
    };
    const themeStore = useThemeStore();
    const showContextMenu = (e3, segment) => {
      const osTheme = themeStore.theme === "dark" ? "default dark" : "default";
      Qe.showContextMenu({
        theme: osTheme,
        x: e3.x,
        y: e3.y,
        items: [
          {
            label: "播放",
            onClick: () => {
              if (videoInstance.value) {
                videoInstance.value.seek = segment.start;
                videoInstance.value.play();
              }
            },
            icon: renderIcon(PlayCircleOutline)
          },
          {
            label: "编辑",
            onClick: () => {
              editCut(segment.id);
            },
            icon: renderIcon(Pencil)
          },
          {
            label: "删除",
            onClick: () => {
              deleteCut(segment.id);
            },
            icon: renderIcon(Delete24Regular)
          },
          {
            label: "切换状态",
            icon: renderIcon(ToggleLeft24Regular),
            onClick: () => {
              toggleChecked(segment.id);
            }
          },
          {
            label: "切割",
            icon: renderIcon(Cut20Regular),
            onClick: () => {
              splitSegment(segment);
            }
          },
          {
            label: "向前合并",
            onClick: () => {
              handleMergeForward(segment);
            }
          },
          {
            label: "向后合并",
            onClick: () => {
              handleMergeBackward(segment);
            }
          },
          {
            label: "歌曲识别",
            icon: renderIcon(MusicNote220Regular),
            onClick: async () => {
              songRecognize2(segment);
            }
          },
          {
            label: "字幕识别",
            icon: renderIcon(SubtitlesOutlined),
            onClick: async () => {
              subtitleRecognizeHandler(segment);
            }
          }
        ]
      });
    };
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$7;
      const _component_n_spin = __unplugin_components_7;
      const _component_n_input = __unplugin_components_0$1;
      const _component_n_button = Button;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("div", _hoisted_2$3, [
            createVNode(unref(NIcon), {
              size: "20",
              class: "pointer icon",
              title: "在当前时间开始当前片段(I)",
              style: { "padding": "2px" },
              onClick: setStartTime
            }, {
              default: withCtx(() => _cache[5] || (_cache[5] = [
                createBaseVNode("svg", {
                  stroke: "currentColor",
                  fill: "currentColor",
                  "stroke-width": "0",
                  viewBox: "0 0 384 512",
                  role: "button",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createBaseVNode("path", { d: "M135.652 0c23.625 0 43.826 20.65 43.826 44.8v99.851c17.048-16.34 49.766-18.346 70.944 6.299 22.829-14.288 53.017-2.147 62.315 16.45C361.878 158.426 384 189.346 384 240c0 2.746-.203 13.276-.195 16 .168 61.971-31.065 76.894-38.315 123.731C343.683 391.404 333.599 400 321.786 400H150.261l-.001-.002c-18.366-.011-35.889-10.607-43.845-28.464C93.421 342.648 57.377 276.122 29.092 264 10.897 256.203.008 242.616 0 224c-.014-34.222 35.098-57.752 66.908-44.119 8.359 3.583 16.67 8.312 24.918 14.153V44.8c0-23.45 20.543-44.8 43.826-44.8zM136 416h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24zm168 28c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z" })
                ], -1)
              ])),
              _: 1
            }),
            createVNode(unref(NIcon), {
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
            createVNode(unref(NIcon), {
              size: "24",
              class: "pointer icon",
              title: "删除片段(del)",
              onClick: _cache[0] || (_cache[0] = ($event) => deleteCut())
            }, {
              default: withCtx(() => [
                createVNode(unref(MinusOutlined))
              ]),
              _: 1
            }),
            createVNode(unref(NIcon), {
              size: "20",
              class: "pointer icon cut-set-end",
              title: "在当前时间结束当前片段(O)",
              style: { "padding": "2px" },
              onClick: setEndTime
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_3$2, _cache[6] || (_cache[6] = [
                  createBaseVNode("path", { d: "M135.652 0c23.625 0 43.826 20.65 43.826 44.8v99.851c17.048-16.34 49.766-18.346 70.944 6.299 22.829-14.288 53.017-2.147 62.315 16.45C361.878 158.426 384 189.346 384 240c0 2.746-.203 13.276-.195 16 .168 61.971-31.065 76.894-38.315 123.731C343.683 391.404 333.599 400 321.786 400H150.261l-.001-.002c-18.366-.011-35.889-10.607-43.845-28.464C93.421 342.648 57.377 276.122 29.092 264 10.897 256.203.008 242.616 0 224c-.014-34.222 35.098-57.752 66.908-44.119 8.359 3.583 16.67 8.312 24.918 14.153V44.8c0-23.45 20.543-44.8 43.826-44.8zM136 416h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24zm168 28c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z" }, null, -1)
                ])))
              ]),
              _: 1
            }),
            createVNode(_component_Tip, { class: "cut-search-danmu" }, {
              default: withCtx(() => _cache[7] || (_cache[7] = [
                createBaseVNode("ul", null, [
                  createBaseVNode("li", null, "I 在当前时间开始当前片段"),
                  createBaseVNode("li", null, "O 在当前时间结束当前片段"),
                  createBaseVNode("li", null, "F2 重命名"),
                  createBaseVNode("li", null, "up 上一个片段"),
                  createBaseVNode("li", null, "down 下一个片段"),
                  createBaseVNode("li", null, "del 删除片段"),
                  createBaseVNode("li", null, "ctrl+n 新建片段"),
                  createBaseVNode("li", null, "space 播放/暂停"),
                  createBaseVNode("li", null, "ctrl+left 后退1秒"),
                  createBaseVNode("li", null, "ctrl+right 前进1秒"),
                  createBaseVNode("li", null, "ctrl+s 保存到项目"),
                  createBaseVNode("li", null, "ctrl+shift+s 另存为项目"),
                  createBaseVNode("li", null, "ctrl+enter 导出"),
                  createBaseVNode("li", null, "ctrl+z 撤销"),
                  createBaseVNode("li", null, "ctrl+shift+z 重做"),
                  createBaseVNode("li", null, "ctrl+k 切换弹幕搜索")
                ], -1)
              ])),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_4$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(cuts), (cut) => {
              return openBlock(), createElementBlock("div", {
                key: cut.id,
                class: normalizeClass(["cut", {
                  checked: cut.checked,
                  selected: unref(selectCutId) === cut.id
                }]),
                role: "button",
                style: normalizeStyle({
                  "--active-border-color": unref(generateDistinctColor)(cut.index, true)
                }),
                onClick: ($event) => handleSelectCut(cut.id),
                onDblclick: ($event) => navVideo(cut.start),
                onContextmenu: withModifiers(($event) => showContextMenu($event, cut), ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_6$1, [
                  createTextVNode(toDisplayString(unref(secondsToTimemark)(cut.start)) + "-", 1),
                  createBaseVNode("span", null, toDisplayString(unref(secondsToTimemark)(cut.end)), 1)
                ]),
                createBaseVNode("div", _hoisted_7$1, toDisplayString(cut.name), 1),
                cut.end ? (openBlock(), createElementBlock("div", _hoisted_8$1, " 持续时间：" + toDisplayString(unref(secondsToTimemark)(cut.end - cut.start)), 1)) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_9, [
                  cut.checked ? (openBlock(), createBlock(unref(NIcon), {
                    key: 0,
                    size: "20",
                    depth: 3,
                    onClick: withModifiers(($event) => toggleChecked(cut.id), ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(CheckmarkCircleOutline))
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : (openBlock(), createBlock(unref(NIcon), {
                    key: 1,
                    size: "20",
                    depth: 3,
                    onClick: withModifiers(($event) => toggleChecked(cut.id), ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(RadioButtonOffSharp))
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createVNode(unref(NIcon), {
                    size: "20",
                    depth: 3,
                    onClick: withModifiers(($event) => editCut(cut.id), ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Pencil))
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                cut.loading ? (openBlock(), createBlock(_component_n_spin, {
                  key: 1,
                  size: 18,
                  class: "loading",
                  style: { "--n-size": "18px" }
                })) : createCommentVNode("", true)
              ], 46, _hoisted_5$2);
            }), 128))
          ])
        ]),
        createVNode(_component_n_modal, {
          show: unref(cutEditVisible),
          "onUpdate:show": _cache[3] || (_cache[3] = ($event) => isRef(cutEditVisible) ? cutEditVisible.value = $event : null),
          preset: "dialog",
          title: "编辑片段名称",
          "show-icon": false,
          closable: false,
          "auto-focus": ""
        }, {
          action: withCtx(() => [
            createVNode(_component_n_button, {
              onClick: _cache[2] || (_cache[2] = ($event) => cutEditVisible.value = false)
            }, {
              default: withCtx(() => _cache[8] || (_cache[8] = [
                createTextVNode("取消")
              ])),
              _: 1
            }),
            createVNode(_component_n_button, {
              type: "primary",
              onClick: confirmEditCutName
            }, {
              default: withCtx(() => _cache[9] || (_cache[9] = [
                createTextVNode("确定")
              ])),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_input, {
              value: unref(tempCutName),
              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(tempCutName) ? tempCutName.value = $event : null),
              placeholder: "请输入片段名称",
              onKeydown: withKeys(confirmEditCutName, ["enter"])
            }, null, 8, ["value"])
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(SearchPopover, {
          visible: unref(searchDanmuVisible),
          "onUpdate:visible": _cache[4] || (_cache[4] = ($event) => isRef(searchDanmuVisible) ? searchDanmuVisible.value = $event : null),
          file: props.files.originDanmuPath,
          "danma-list": props.danmaList,
          danmaSearchMask: props.danmaSearchMask,
          onAddSegment: addCut,
          onSetLocation: navVideo
        }, {
          default: withCtx(() => [
            createBaseVNode("span", {
              size: "30",
              class: "pointer icon cut-search-danmu",
              title: "搜索弹幕，可拖动(ctrl+k)",
              style: normalizeStyle([{ "position": "fixed", "display": "inline-block", "width": "30px", "height": "30px", "z-index": "10" }, unref(style)]),
              ref_key: "el",
              ref: el,
              onClick: searchDanmu
            }, [
              createVNode(unref(SearchIcon))
            ], 4)
          ]),
          _: 1
        }, 8, ["visible", "file", "danma-list", "danmaSearchMask"])
      ], 64);
    };
  }
});
const SegmentList = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2dee8fed"]]);
const _hoisted_1$3 = { class: "video-section" };
const _hoisted_2$2 = { class: "video cut-video" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VideoPlayer",
  props: {
    videoPath: {
      type: String,
      default: null
    },
    heatmapOptions: {
      type: Object,
      required: true
    },
    supportedExtensions: {
      type: Array,
      default: () => ["llc", "flv", "mp4", "m4s", "ts", "mkv"]
    }
  },
  emits: ["ready", "durationChange", "canPlay", "filesDropped"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const videoRef = ref(null);
    const fileList = ref([]);
    const handleReady = (instance) => {
      emit("ready", instance);
    };
    const handleDurationChange = (duration) => {
      emit("durationChange", duration);
    };
    const handleCanPlay = () => {
      emit("canPlay");
    };
    const clearFiles = () => {
      fileList.value = [];
    };
    __expose({
      videoRef,
      switchUrl: (url, type) => videoRef.value?.switchUrl(url, type),
      switchAss: (content) => videoRef.value?.switchAss(content),
      clearFiles
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        withDirectives(createBaseVNode("div", _hoisted_2$2, [
          withDirectives(createVNode(_sfc_main$8, {
            ref_key: "videoRef",
            ref: videoRef,
            option: {
              fullscreen: true,
              plugins: {
                heatmap: {
                  option: __props.heatmapOptions
                },
                timestamp: {
                  timestamp: 0
                }
              }
            },
            plugins: ["ass", "heatmap", "timestamp", "subtitle"],
            onReady: handleReady,
            "onVideo:durationchange": handleDurationChange,
            "onVideo:canplay": handleCanPlay
          }, null, 8, ["option"]), [
            [vShow, __props.videoPath]
          ])
        ], 512), [
          [vShow, __props.videoPath]
        ]),
        withDirectives(createVNode(FileArea, {
          modelValue: fileList.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => fileList.value = $event),
          style: { height: "100%" },
          class: "video empty cut-file-area",
          extensions: __props.supportedExtensions,
          max: 1,
          onChange: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("filesDropped", $event))
        }, {
          desc: withCtx(() => _cache[2] || (_cache[2] = [
            createTextVNode(" 请导入视频或"),
            createBaseVNode("a", {
              href: "https://github.com/mifi/lossless-cut",
              target: "_blank"
            }, "lossless-cut", -1),
            createTextVNode("项目文件，如果你不会使用，请先"),
            createBaseVNode("span", { title: "鸽了" }, "查看教程，如果视频无法播放，请尝试转封装为mp4", -1)
          ])),
          _: 1
        }, 8, ["modelValue", "extensions"]), [
          [vShow, !__props.videoPath]
        ])
      ]);
    };
  }
});
const VideoPlayer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5e1293ca"]]);
const _hoisted_1$2 = { class: "config-section" };
const _hoisted_2$1 = { class: "waveform-container" };
const _hoisted_3$1 = {
  key: 0,
  class: "waveform-loading"
};
const _hoisted_4$1 = {
  key: 0,
  class: "config-content"
};
const _hoisted_5$1 = { class: "config-item" };
const _hoisted_6 = { class: "config-item" };
const _hoisted_7 = { class: "config-item" };
const _hoisted_8 = { class: "config-item" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ConfigPanel",
  props: {
    clientOptions: {
      type: Object,
      required: true
    },
    hotProgressVisible: {
      type: Boolean,
      required: true
    },
    showVideoTime: {
      type: Boolean,
      required: true
    },
    danmaSearchMask: {
      type: Boolean,
      required: true
    },
    waveformVisible: {
      type: Boolean,
      required: true
    },
    waveformLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:hotProgressVisible", "update:showVideoTime", "update:danmaSearchMask", "update:waveformVisible"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const hotProgressVisible = computed({
      get: () => props.hotProgressVisible,
      set: (val) => emit("update:hotProgressVisible", val)
    });
    const showVideoTime = computed({
      get: () => props.showVideoTime,
      set: (val) => emit("update:showVideoTime", val)
    });
    const danmaSearchMask = computed({
      get: () => props.danmaSearchMask,
      set: (val) => emit("update:danmaSearchMask", val)
    });
    const waveformVisible = computed({
      get: () => props.waveformVisible,
      set: (val) => emit("update:waveformVisible", val)
    });
    return (_ctx, _cache) => {
      const _component_n_spin = __unplugin_components_7;
      const _component_n_checkbox = __unplugin_components_1;
      const _component_n_input_number = __unplugin_components_0$2;
      const _component_n_color_picker = __unplugin_components_3$3;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        withDirectives(createBaseVNode("div", _hoisted_2$1, [
          __props.waveformLoading ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
            createVNode(_component_n_spin, { size: "small" }),
            _cache[8] || (_cache[8] = createBaseVNode("span", null, "波形图加载中...，请不要切换到其他页面", -1))
          ])) : createCommentVNode("", true),
          _cache[9] || (_cache[9] = createBaseVNode("div", { id: "waveform" }, null, -1))
        ], 512), [
          [vShow, unref(waveformVisible)]
        ]),
        __props.clientOptions.showSetting ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          createVNode(_component_n_checkbox, {
            checked: unref(hotProgressVisible),
            "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => isRef(hotProgressVisible) ? hotProgressVisible.value = $event : null)
          }, {
            default: withCtx(() => _cache[10] || (_cache[10] = [
              createTextVNode("高能进度条")
            ])),
            _: 1
          }, 8, ["checked"]),
          unref(hotProgressVisible) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("div", _hoisted_5$1, [
              _cache[12] || (_cache[12] = createBaseVNode("span", null, "采样间隔：", -1)),
              createVNode(_component_n_input_number, {
                value: __props.clientOptions.sampling,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => __props.clientOptions.sampling = $event),
                placeholder: "单位秒",
                min: "1",
                style: { "width": "120px" }
              }, {
                suffix: withCtx(() => _cache[11] || (_cache[11] = [
                  createTextVNode(" 秒 ")
                ])),
                _: 1
              }, 8, ["value"])
            ]),
            createBaseVNode("div", _hoisted_6, [
              _cache[14] || (_cache[14] = createBaseVNode("span", null, "高度：", -1)),
              createVNode(_component_n_input_number, {
                value: __props.clientOptions.height,
                "onUpdate:value": _cache[2] || (_cache[2] = ($event) => __props.clientOptions.height = $event),
                placeholder: "单位像素",
                min: "10",
                style: { "width": "120px" }
              }, {
                suffix: withCtx(() => _cache[13] || (_cache[13] = [
                  createTextVNode(" 像素 ")
                ])),
                _: 1
              }, 8, ["value"])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_n_color_picker, {
                value: __props.clientOptions.color,
                "onUpdate:value": _cache[3] || (_cache[3] = ($event) => __props.clientOptions.color = $event),
                style: { "width": "90px" }
              }, null, 8, ["value"])
            ]),
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_n_color_picker, {
                value: __props.clientOptions.fillColor,
                "onUpdate:value": _cache[4] || (_cache[4] = ($event) => __props.clientOptions.fillColor = $event),
                style: { "width": "90px" }
              }, null, 8, ["value"])
            ])
          ], 64)) : createCommentVNode("", true),
          createVNode(_component_n_checkbox, {
            checked: unref(showVideoTime),
            "onUpdate:checked": _cache[5] || (_cache[5] = ($event) => isRef(showVideoTime) ? showVideoTime.value = $event : null),
            title: "仅供参考，得加载弹幕才成"
          }, {
            default: withCtx(() => _cache[15] || (_cache[15] = [
              createTextVNode("显示时间戳")
            ])),
            _: 1
          }, 8, ["checked"]),
          createVNode(_component_n_checkbox, {
            checked: unref(danmaSearchMask),
            "onUpdate:checked": _cache[6] || (_cache[6] = ($event) => isRef(danmaSearchMask) ? danmaSearchMask.value = $event : null)
          }, {
            default: withCtx(() => _cache[16] || (_cache[16] = [
              createTextVNode("弹幕搜索栏遮罩")
            ])),
            _: 1
          }, 8, ["checked"]),
          createVNode(_component_n_checkbox, {
            checked: unref(waveformVisible),
            "onUpdate:checked": _cache[7] || (_cache[7] = ($event) => isRef(waveformVisible) ? waveformVisible.value = $event : null)
          }, {
            default: withCtx(() => _cache[17] || (_cache[17] = [
              createTextVNode("波形图")
            ])),
            _: 1
          }, 8, ["checked"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const ConfigPanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0b6adaf8"]]);
const _hoisted_1$1 = { style: { "width": "100%" } };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WaveformAnalyzerDialog",
  props: /* @__PURE__ */ mergeModels({
    modelValue: {},
    filePath: {}
  }, {
    "visible": { type: Boolean, ...{ default: false } },
    "visibleModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "confirm", "cancel"], ["update:visible"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const notice = useNotice();
    const visible = useModel(__props, "visible");
    const defaultConfig = {
      energyPercentile: 50,
      minSegmentDuration: 20,
      maxGapDuration: 20,
      smoothWindowSize: 4,
      disableCache: false
    };
    const formValue = ref({ ...props.modelValue });
    watch(
      () => props.modelValue,
      (newValue) => {
        formValue.value = { ...newValue };
      },
      { deep: true }
    );
    const loading = ref(false);
    const progress = ref({
      percentage: 0,
      message: "准备开始...",
      stage: ""
    });
    let eventSource = null;
    const handleConfirm = async () => {
      if (!props.filePath) {
        notice.error({
          title: "文件路径无效，无法分析",
          duration: 1e4
        });
        return;
      }
      loading.value = true;
      progress.value = {
        percentage: 0,
        message: "准备开始分析...",
        stage: ""
      };
      try {
        eventSource = await task.analyzerWaveform(props.filePath, formValue.value);
        console.log("SSE 连接已建立", eventSource);
        eventSource.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.type === "progress") {
              progress.value = {
                percentage: data.percentage,
                message: data.message,
                stage: data.stage
              };
            } else if (data.type === "complete") {
              loading.value = false;
              eventSource?.close();
              eventSource = null;
              emit("update:modelValue", { ...formValue.value });
              emit("confirm", data.data);
              visible.value = false;
              notice.success({
                title: "分析完成",
                duration: 2e3
              });
            } else if (data.type === "error") {
              loading.value = false;
              eventSource?.close();
              eventSource = null;
              notice.error({
                title: "分析失败",
                content: data.message,
                duration: 3e3
              });
            }
          } catch (e3) {
            console.error("解析 SSE 数据失败:", e3);
          }
        };
        eventSource.onerror = (error) => {
          console.error("SSE 连接错误:", error);
          loading.value = false;
          eventSource?.close();
          eventSource = null;
          notice.error({
            title: "连接失败",
            content: "服务器连接中断，请重试",
            duration: 3e3
          });
        };
      } catch (e3) {
        loading.value = false;
        notice.error({
          title: "启动分析失败",
          content: e3 instanceof Error ? e3.message : "未知错误",
          duration: 3e3
        });
      }
    };
    const handleCancel = () => {
      if (eventSource) {
        eventSource.close();
        eventSource = null;
      }
      loading.value = false;
      formValue.value = { ...props.modelValue };
      emit("cancel");
      visible.value = false;
    };
    const handleReset = () => {
      formValue.value = { ...defaultConfig };
    };
    const handleClose = () => {
      if (eventSource) {
        eventSource.close();
        eventSource = null;
      }
      loading.value = false;
      formValue.value = { ...props.modelValue };
    };
    return (_ctx, _cache) => {
      const _component_n_input_number = __unplugin_components_0$2;
      const _component_n_text = __unplugin_components_1$1;
      const _component_n_form_item = __unplugin_components_2$2;
      const _component_n_checkbox = __unplugin_components_1;
      const _component_n_progress = __unplugin_components_1$2;
      const _component_n_form = __unplugin_components_5$1;
      const _component_n_button = Button;
      const _component_n_space = __unplugin_components_3$1;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: visible.value,
        "onUpdate:show": _cache[5] || (_cache[5] = ($event) => visible.value = $event),
        preset: "dialog",
        "show-icon": false,
        style: { "width": "520px" },
        "on-after-leave": handleClose
      }, {
        action: withCtx(() => [
          createVNode(_component_n_space, { justify: "end" }, {
            default: withCtx(() => [
              createVNode(_component_n_button, { onClick: handleReset }, {
                default: withCtx(() => _cache[15] || (_cache[15] = [
                  createTextVNode("重置默认值")
                ])),
                _: 1
              }),
              createVNode(_component_n_button, { onClick: handleCancel }, {
                default: withCtx(() => _cache[16] || (_cache[16] = [
                  createTextVNode("取消")
                ])),
                _: 1
              }),
              createVNode(_component_n_button, {
                type: "primary",
                onClick: handleConfirm,
                loading: unref(loading)
              }, {
                default: withCtx(() => _cache[17] || (_cache[17] = [
                  createTextVNode("确定")
                ])),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          _cache[18] || (_cache[18] = createBaseVNode("p", { style: { "padding-top": "16px", "color": "skyblue" } }, " 此项功能用来快速对长视频中的翻唱音乐片段进行识别，分段后你也可以在片段中右键识别歌曲名称，调整参数可以更加精准地切割，第一次使用建议先尝试默认值，尝试后再进行调整，确认后会清空当前片段。 ", -1)),
          createVNode(_component_n_form, {
            ref: "formRef",
            model: unref(formValue),
            "label-placement": "left",
            "label-width": "auto",
            "require-mark-placement": "right-hanging"
          }, {
            default: withCtx(() => [
              createVNode(_component_n_form_item, {
                label: "能量百分位阈值",
                path: "energyPercentile"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: unref(formValue).energyPercentile,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(formValue).energyPercentile = $event),
                    min: 0,
                    max: 100,
                    step: 1,
                    placeholder: "能量百分位阈值"
                  }, {
                    suffix: withCtx(() => _cache[6] || (_cache[6] = [
                      createTextVNode("%")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  createVNode(_component_n_text, {
                    depth: "3",
                    style: { "margin-left": "8px", "font-size": "12px" }
                  }, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode(" 值越高要求越严格 ")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                label: "最小片段时长",
                path: "minSegmentDuration"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: unref(formValue).minSegmentDuration,
                    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(formValue).minSegmentDuration = $event),
                    min: 1,
                    max: 3e3,
                    step: 1,
                    placeholder: "最小片段时长"
                  }, {
                    suffix: withCtx(() => _cache[8] || (_cache[8] = [
                      createTextVNode("秒")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  createVNode(_component_n_text, {
                    depth: "3",
                    style: { "margin-left": "8px", "font-size": "12px" }
                  }, {
                    default: withCtx(() => _cache[9] || (_cache[9] = [
                      createTextVNode(" 过滤掉短于此时长的片段 ")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                label: "最大间隔时长",
                path: "maxGapDuration"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: unref(formValue).maxGapDuration,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(formValue).maxGapDuration = $event),
                    min: 0,
                    max: 1200,
                    step: 1,
                    placeholder: "最大间隔时长"
                  }, {
                    suffix: withCtx(() => _cache[10] || (_cache[10] = [
                      createTextVNode("秒")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  createVNode(_component_n_text, {
                    depth: "3",
                    style: { "margin-left": "8px", "font-size": "12px" }
                  }, {
                    default: withCtx(() => _cache[11] || (_cache[11] = [
                      createTextVNode(" 短于此时长的间隔会被合并 ")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                label: "平滑窗口大小",
                path: "smoothWindowSize"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: unref(formValue).smoothWindowSize,
                    "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(formValue).smoothWindowSize = $event),
                    min: 1,
                    max: 20,
                    step: 1,
                    placeholder: "平滑窗口大小"
                  }, {
                    suffix: withCtx(() => _cache[12] || (_cache[12] = [
                      createTextVNode("秒")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  createVNode(_component_n_text, {
                    depth: "3",
                    style: { "margin-left": "8px", "font-size": "12px" }
                  }, {
                    default: withCtx(() => _cache[13] || (_cache[13] = [
                      createTextVNode(" 用于平滑能量曲线，减少噪声影响 ")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                label: "不保留缓存",
                path: "disableCache"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_checkbox, {
                    checked: unref(formValue).disableCache,
                    "onUpdate:checked": _cache[4] || (_cache[4] = ($event) => unref(formValue).disableCache = $event)
                  }, null, 8, ["checked"]),
                  createVNode(_component_n_text, {
                    depth: "3",
                    style: { "margin-left": "8px", "font-size": "12px" }
                  }, {
                    default: withCtx(() => _cache[14] || (_cache[14] = [
                      createTextVNode(" 分析完成后删除缓存文件，下次需要重新提取音频 ")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              }),
              unref(loading) ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$1, [
                    createVNode(_component_n_progress, {
                      type: "line",
                      percentage: unref(progress).percentage,
                      status: unref(progress).percentage === 100 ? "success" : "default",
                      "show-indicator": true
                    }, null, 8, ["percentage", "status"]),
                    createVNode(_component_n_text, {
                      depth: "3",
                      style: { "margin-top": "8px", "font-size": "12px", "display": "block" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(progress).message), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const WaveformAnalyzerDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9d8dd9dd"]]);
let F = {};
function D(e3 = {}) {
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
    ...e3
  };
}
function a$1(e3) {
  return e3 ? F[e3] : F;
}
function W(e3, o2, t3, i3) {
  return (e3 /= i3 / 2) < 1 ? t3 / 2 * e3 * e3 + o2 : -t3 / 2 * (--e3 * (e3 - 2) - 1) + o2;
}
function Q(e3) {
  const o2 = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
  return e3.flatMap((t3) => {
    const i3 = t3.matches(o2), p2 = Array.from(t3.querySelectorAll(o2));
    return [...i3 ? [t3] : [], ...p2];
  }).filter((t3) => getComputedStyle(t3).pointerEvents !== "none" && ae(t3));
}
function Z(e3) {
  if (!e3 || se(e3))
    return;
  const o2 = a$1("smoothScroll");
  e3.scrollIntoView({
    // Removing the smooth scrolling for elements which exist inside the scrollable parent
    // This was causing the highlight to not properly render
    behavior: !o2 || re(e3) ? "auto" : "smooth",
    inline: "center",
    block: "center"
  });
}
function re(e3) {
  if (!e3 || !e3.parentElement)
    return;
  const o2 = e3.parentElement;
  return o2.scrollHeight > o2.clientHeight;
}
function se(e3) {
  const o2 = e3.getBoundingClientRect();
  return o2.top >= 0 && o2.left >= 0 && o2.bottom <= (window.innerHeight || document.documentElement.clientHeight) && o2.right <= (window.innerWidth || document.documentElement.clientWidth);
}
function ae(e3) {
  return !!(e3.offsetWidth || e3.offsetHeight || e3.getClientRects().length);
}
let O = {};
function b$1(e3, o2) {
  O[e3] = o2;
}
function l$1(e3) {
  return e3 ? O[e3] : O;
}
function V() {
  O = {};
}
let R = {};
function N(e3, o2) {
  R[e3] = o2;
}
function L(e3) {
  var o2;
  (o2 = R[e3]) == null || o2.call(R);
}
function ce() {
  R = {};
}
function le(e3, o2, t3, i3) {
  let p2 = l$1("__activeStagePosition");
  const n2 = p2 || t3.getBoundingClientRect(), f2 = i3.getBoundingClientRect(), w = W(e3, n2.x, f2.x - n2.x, o2), r2 = W(e3, n2.y, f2.y - n2.y, o2), v2 = W(e3, n2.width, f2.width - n2.width, o2), s3 = W(e3, n2.height, f2.height - n2.height, o2);
  p2 = {
    x: w,
    y: r2,
    width: v2,
    height: s3
  }, J(p2), b$1("__activeStagePosition", p2);
}
function G(e3) {
  if (!e3)
    return;
  const o2 = e3.getBoundingClientRect(), t3 = {
    x: o2.x,
    y: o2.y,
    width: o2.width,
    height: o2.height
  };
  b$1("__activeStagePosition", t3), J(t3);
}
function de() {
  const e3 = l$1("__activeStagePosition"), o2 = l$1("__overlaySvg");
  if (!e3)
    return;
  if (!o2) {
    console.warn("No stage svg found.");
    return;
  }
  const t3 = window.innerWidth, i3 = window.innerHeight;
  o2.setAttribute("viewBox", `0 0 ${t3} ${i3}`);
}
function pe(e3) {
  const o2 = ue(e3);
  document.body.appendChild(o2), te(o2, (t3) => {
    t3.target.tagName === "path" && L("overlayClick");
  }), b$1("__overlaySvg", o2);
}
function J(e3) {
  const o2 = l$1("__overlaySvg");
  if (!o2) {
    pe(e3);
    return;
  }
  const t3 = o2.firstElementChild;
  if ((t3 == null ? void 0 : t3.tagName) !== "path")
    throw new Error("no path element found in stage svg");
  t3.setAttribute("d", U(e3));
}
function ue(e3) {
  const o2 = window.innerWidth, t3 = window.innerHeight, i3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  i3.classList.add("driver-overlay", "driver-overlay-animated"), i3.setAttribute("viewBox", `0 0 ${o2} ${t3}`), i3.setAttribute("xmlSpace", "preserve"), i3.setAttribute("xmlnsXlink", "http://www.w3.org/1999/xlink"), i3.setAttribute("version", "1.1"), i3.setAttribute("preserveAspectRatio", "xMinYMin slice"), i3.style.fillRule = "evenodd", i3.style.clipRule = "evenodd", i3.style.strokeLinejoin = "round", i3.style.strokeMiterlimit = "2", i3.style.zIndex = "10000", i3.style.position = "fixed", i3.style.top = "0", i3.style.left = "0", i3.style.width = "100%", i3.style.height = "100%";
  const p2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return p2.setAttribute("d", U(e3)), p2.style.fill = a$1("overlayColor") || "rgb(0,0,0)", p2.style.opacity = `${a$1("overlayOpacity")}`, p2.style.pointerEvents = "auto", p2.style.cursor = "auto", i3.appendChild(p2), i3;
}
function U(e3) {
  const o2 = window.innerWidth, t3 = window.innerHeight, i3 = a$1("stagePadding") || 0, p2 = a$1("stageRadius") || 0, n2 = e3.width + i3 * 2, f2 = e3.height + i3 * 2, w = Math.min(p2, n2 / 2, f2 / 2), r2 = Math.floor(Math.max(w, 0)), v2 = e3.x - i3 + r2, s3 = e3.y - i3, c2 = n2 - r2 * 2, d2 = f2 - r2 * 2;
  return `M${o2},0L0,0L0,${t3}L${o2},${t3}L${o2},0Z
    M${v2},${s3} h${c2} a${r2},${r2} 0 0 1 ${r2},${r2} v${d2} a${r2},${r2} 0 0 1 -${r2},${r2} h-${c2} a${r2},${r2} 0 0 1 -${r2},-${r2} v-${d2} a${r2},${r2} 0 0 1 ${r2},-${r2} z`;
}
function ve() {
  const e3 = l$1("__overlaySvg");
  e3 && e3.remove();
}
function fe() {
  const e3 = document.getElementById("driver-dummy-element");
  if (e3)
    return e3;
  let o2 = document.createElement("div");
  return o2.id = "driver-dummy-element", o2.style.width = "0", o2.style.height = "0", o2.style.pointerEvents = "none", o2.style.opacity = "0", o2.style.position = "fixed", o2.style.top = "50%", o2.style.left = "50%", document.body.appendChild(o2), o2;
}
function K(e3) {
  const { element: o2 } = e3;
  let t3 = typeof o2 == "string" ? document.querySelector(o2) : o2;
  t3 || (t3 = fe()), ge(t3, e3);
}
function he() {
  const e3 = l$1("__activeElement"), o2 = l$1("__activeStep");
  e3 && (G(e3), de(), ie(e3, o2));
}
function ge(e3, o2) {
  const i3 = Date.now(), p2 = l$1("__activeStep"), n2 = l$1("__activeElement") || e3, f2 = !n2 || n2 === e3, w = e3.id === "driver-dummy-element", r2 = n2.id === "driver-dummy-element", v2 = a$1("animate"), s3 = o2.onHighlightStarted || a$1("onHighlightStarted"), c2 = (o2 == null ? void 0 : o2.onHighlighted) || a$1("onHighlighted"), d2 = (p2 == null ? void 0 : p2.onDeselected) || a$1("onDeselected"), m2 = a$1(), g2 = l$1();
  !f2 && d2 && d2(r2 ? void 0 : n2, p2, {
    config: m2,
    state: g2
  }), s3 && s3(w ? void 0 : e3, o2, {
    config: m2,
    state: g2
  });
  const u2 = !f2 && v2;
  let h2 = false;
  xe(), b$1("previousStep", p2), b$1("previousElement", n2), b$1("activeStep", o2), b$1("activeElement", e3);
  const P = () => {
    if (l$1("__transitionCallback") !== P)
      return;
    const x = Date.now() - i3, y2 = 400 - x <= 400 / 2;
    o2.popover && y2 && !h2 && u2 && (X(e3, o2), h2 = true), a$1("animate") && x < 400 ? le(x, 400, n2, e3) : (G(e3), c2 && c2(w ? void 0 : e3, o2, {
      config: a$1(),
      state: l$1()
    }), b$1("__transitionCallback", void 0), b$1("__previousStep", p2), b$1("__previousElement", n2), b$1("__activeStep", o2), b$1("__activeElement", e3)), window.requestAnimationFrame(P);
  };
  b$1("__transitionCallback", P), window.requestAnimationFrame(P), Z(e3), !u2 && o2.popover && X(e3, o2), n2.classList.remove("driver-active-element", "driver-no-interaction"), n2.removeAttribute("aria-haspopup"), n2.removeAttribute("aria-expanded"), n2.removeAttribute("aria-controls"), a$1("disableActiveInteraction") && e3.classList.add("driver-no-interaction"), e3.classList.add("driver-active-element"), e3.setAttribute("aria-haspopup", "dialog"), e3.setAttribute("aria-expanded", "true"), e3.setAttribute("aria-controls", "driver-popover-content");
}
function we() {
  var e3;
  (e3 = document.getElementById("driver-dummy-element")) == null || e3.remove(), document.querySelectorAll(".driver-active-element").forEach((o2) => {
    o2.classList.remove("driver-active-element", "driver-no-interaction"), o2.removeAttribute("aria-haspopup"), o2.removeAttribute("aria-expanded"), o2.removeAttribute("aria-controls");
  });
}
function I() {
  const e3 = l$1("__resizeTimeout");
  e3 && window.cancelAnimationFrame(e3), b$1("__resizeTimeout", window.requestAnimationFrame(he));
}
function me(e3) {
  var r2;
  if (!l$1("isInitialized") || !(e3.key === "Tab" || e3.keyCode === 9))
    return;
  const i3 = l$1("__activeElement"), p2 = (r2 = l$1("popover")) == null ? void 0 : r2.wrapper, n2 = Q([
    ...p2 ? [p2] : [],
    ...i3 ? [i3] : []
  ]), f2 = n2[0], w = n2[n2.length - 1];
  if (e3.preventDefault(), e3.shiftKey) {
    const v2 = n2[n2.indexOf(document.activeElement) - 1] || w;
    v2 == null || v2.focus();
  } else {
    const v2 = n2[n2.indexOf(document.activeElement) + 1] || f2;
    v2 == null || v2.focus();
  }
}
function ee(e3) {
  var t3;
  ((t3 = a$1("allowKeyboardControl")) == null || t3) && (e3.key === "Escape" ? L("escapePress") : e3.key === "ArrowRight" ? L("arrowRightPress") : e3.key === "ArrowLeft" && L("arrowLeftPress"));
}
function te(e3, o2, t3) {
  const i3 = (n2, f2) => {
    const w = n2.target;
    e3.contains(w) && ((!t3 || t3(w)) && (n2.preventDefault(), n2.stopPropagation(), n2.stopImmediatePropagation()), f2 == null || f2(n2));
  };
  document.addEventListener("pointerdown", i3, true), document.addEventListener("mousedown", i3, true), document.addEventListener("pointerup", i3, true), document.addEventListener("mouseup", i3, true), document.addEventListener(
    "click",
    (n2) => {
      i3(n2, o2);
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
  const e3 = l$1("popover");
  e3 && (e3.wrapper.style.display = "none");
}
function X(e3, o2) {
  var C2, y2;
  let t3 = l$1("popover");
  t3 && document.body.removeChild(t3.wrapper), t3 = Pe(), document.body.appendChild(t3.wrapper);
  const {
    title: i3,
    description: p2,
    showButtons: n2,
    disableButtons: f2,
    showProgress: w,
    nextBtnText: r2 = a$1("nextBtnText") || "Next &rarr;",
    prevBtnText: v2 = a$1("prevBtnText") || "&larr; Previous",
    progressText: s3 = a$1("progressText") || "{current} of {total}"
  } = o2.popover || {};
  t3.nextButton.innerHTML = r2, t3.previousButton.innerHTML = v2, t3.progress.innerHTML = s3, i3 ? (t3.title.innerHTML = i3, t3.title.style.display = "block") : t3.title.style.display = "none", p2 ? (t3.description.innerHTML = p2, t3.description.style.display = "block") : t3.description.style.display = "none";
  const c2 = n2 || a$1("showButtons"), d2 = w || a$1("showProgress") || false, m2 = (c2 == null ? void 0 : c2.includes("next")) || (c2 == null ? void 0 : c2.includes("previous")) || d2;
  t3.closeButton.style.display = c2.includes("close") ? "block" : "none", m2 ? (t3.footer.style.display = "flex", t3.progress.style.display = d2 ? "block" : "none", t3.nextButton.style.display = c2.includes("next") ? "block" : "none", t3.previousButton.style.display = c2.includes("previous") ? "block" : "none") : t3.footer.style.display = "none";
  const g2 = f2 || a$1("disableButtons") || [];
  g2 != null && g2.includes("next") && (t3.nextButton.disabled = true, t3.nextButton.classList.add("driver-popover-btn-disabled")), g2 != null && g2.includes("previous") && (t3.previousButton.disabled = true, t3.previousButton.classList.add("driver-popover-btn-disabled")), g2 != null && g2.includes("close") && (t3.closeButton.disabled = true, t3.closeButton.classList.add("driver-popover-btn-disabled"));
  const u2 = t3.wrapper;
  u2.style.display = "block", u2.style.left = "", u2.style.top = "", u2.style.bottom = "", u2.style.right = "", u2.id = "driver-popover-content", u2.setAttribute("role", "dialog"), u2.setAttribute("aria-labelledby", "driver-popover-title"), u2.setAttribute("aria-describedby", "driver-popover-description");
  const h2 = t3.arrow;
  h2.className = "driver-popover-arrow";
  const P = ((C2 = o2.popover) == null ? void 0 : C2.popoverClass) || a$1("popoverClass") || "";
  u2.className = `driver-popover ${P}`.trim(), te(
    t3.wrapper,
    (k) => {
      var $, B, M;
      const T = k.target, E = (($ = o2.popover) == null ? void 0 : $.onNextClick) || a$1("onNextClick"), A = ((B = o2.popover) == null ? void 0 : B.onPrevClick) || a$1("onPrevClick"), H = ((M = o2.popover) == null ? void 0 : M.onCloseClick) || a$1("onCloseClick");
      if (T.classList.contains("driver-popover-next-btn"))
        return E ? E(e3, o2, {
          config: a$1(),
          state: l$1()
        }) : L("nextClick");
      if (T.classList.contains("driver-popover-prev-btn"))
        return A ? A(e3, o2, {
          config: a$1(),
          state: l$1()
        }) : L("prevClick");
      if (T.classList.contains("driver-popover-close-btn"))
        return H ? H(e3, o2, {
          config: a$1(),
          state: l$1()
        }) : L("closeClick");
    },
    (k) => !(t3 != null && t3.description.contains(k)) && !(t3 != null && t3.title.contains(k)) && typeof k.className == "string" && k.className.includes("driver-popover")
  ), b$1("popover", t3);
  const S = ((y2 = o2.popover) == null ? void 0 : y2.onPopoverRender) || a$1("onPopoverRender");
  S && S(t3, {
    config: a$1(),
    state: l$1()
  }), ie(e3, o2), Z(u2);
  const _ = e3.classList.contains("driver-dummy-element"), x = Q([u2, ..._ ? [] : [e3]]);
  x.length > 0 && x[0].focus();
}
function oe() {
  const e3 = l$1("popover");
  if (!(e3 != null && e3.wrapper))
    return;
  const o2 = e3.wrapper.getBoundingClientRect(), t3 = a$1("stagePadding") || 0, i3 = a$1("popoverOffset") || 0;
  return {
    width: o2.width + t3 + i3,
    height: o2.height + t3 + i3,
    realWidth: o2.width,
    realHeight: o2.height
  };
}
function Y(e3, o2) {
  const { elementDimensions: t3, popoverDimensions: i3, popoverPadding: p2, popoverArrowDimensions: n2 } = o2;
  return e3 === "start" ? Math.max(
    Math.min(
      t3.top - p2,
      window.innerHeight - i3.realHeight - n2.width
    ),
    n2.width
  ) : e3 === "end" ? Math.max(
    Math.min(
      t3.top - (i3 == null ? void 0 : i3.realHeight) + t3.height + p2,
      window.innerHeight - (i3 == null ? void 0 : i3.realHeight) - n2.width
    ),
    n2.width
  ) : e3 === "center" ? Math.max(
    Math.min(
      t3.top + t3.height / 2 - (i3 == null ? void 0 : i3.realHeight) / 2,
      window.innerHeight - (i3 == null ? void 0 : i3.realHeight) - n2.width
    ),
    n2.width
  ) : 0;
}
function j(e3, o2) {
  const { elementDimensions: t3, popoverDimensions: i3, popoverPadding: p2, popoverArrowDimensions: n2 } = o2;
  return e3 === "start" ? Math.max(
    Math.min(
      t3.left - p2,
      window.innerWidth - i3.realWidth - n2.width
    ),
    n2.width
  ) : e3 === "end" ? Math.max(
    Math.min(
      t3.left - (i3 == null ? void 0 : i3.realWidth) + t3.width + p2,
      window.innerWidth - (i3 == null ? void 0 : i3.realWidth) - n2.width
    ),
    n2.width
  ) : e3 === "center" ? Math.max(
    Math.min(
      t3.left + t3.width / 2 - (i3 == null ? void 0 : i3.realWidth) / 2,
      window.innerWidth - (i3 == null ? void 0 : i3.realWidth) - n2.width
    ),
    n2.width
  ) : 0;
}
function ie(e3, o2) {
  const t3 = l$1("popover");
  if (!t3)
    return;
  const { align: i3 = "start", side: p2 = "left" } = (o2 == null ? void 0 : o2.popover) || {}, n2 = i3, f2 = e3.id === "driver-dummy-element" ? "over" : p2, w = a$1("stagePadding") || 0, r2 = oe(), v2 = t3.arrow.getBoundingClientRect(), s3 = e3.getBoundingClientRect(), c2 = s3.top - r2.height;
  let d2 = c2 >= 0;
  const m2 = window.innerHeight - (s3.bottom + r2.height);
  let g2 = m2 >= 0;
  const u2 = s3.left - r2.width;
  let h2 = u2 >= 0;
  const P = window.innerWidth - (s3.right + r2.width);
  let S = P >= 0;
  const _ = !d2 && !g2 && !h2 && !S;
  let x = f2;
  if (f2 === "top" && d2 ? S = h2 = g2 = false : f2 === "bottom" && g2 ? S = h2 = d2 = false : f2 === "left" && h2 ? S = d2 = g2 = false : f2 === "right" && S && (h2 = d2 = g2 = false), f2 === "over") {
    const C2 = window.innerWidth / 2 - r2.realWidth / 2, y2 = window.innerHeight / 2 - r2.realHeight / 2;
    t3.wrapper.style.left = `${C2}px`, t3.wrapper.style.right = "auto", t3.wrapper.style.top = `${y2}px`, t3.wrapper.style.bottom = "auto";
  } else if (_) {
    const C2 = window.innerWidth / 2 - (r2 == null ? void 0 : r2.realWidth) / 2, y2 = 10;
    t3.wrapper.style.left = `${C2}px`, t3.wrapper.style.right = "auto", t3.wrapper.style.bottom = `${y2}px`, t3.wrapper.style.top = "auto";
  } else if (h2) {
    const C2 = Math.min(
      u2,
      window.innerWidth - (r2 == null ? void 0 : r2.realWidth) - v2.width
    ), y2 = Y(n2, {
      elementDimensions: s3,
      popoverDimensions: r2,
      popoverPadding: w,
      popoverArrowDimensions: v2
    });
    t3.wrapper.style.left = `${C2}px`, t3.wrapper.style.top = `${y2}px`, t3.wrapper.style.bottom = "auto", t3.wrapper.style.right = "auto", x = "left";
  } else if (S) {
    const C2 = Math.min(
      P,
      window.innerWidth - (r2 == null ? void 0 : r2.realWidth) - v2.width
    ), y2 = Y(n2, {
      elementDimensions: s3,
      popoverDimensions: r2,
      popoverPadding: w,
      popoverArrowDimensions: v2
    });
    t3.wrapper.style.right = `${C2}px`, t3.wrapper.style.top = `${y2}px`, t3.wrapper.style.bottom = "auto", t3.wrapper.style.left = "auto", x = "right";
  } else if (d2) {
    const C2 = Math.min(
      c2,
      window.innerHeight - r2.realHeight - v2.width
    );
    let y2 = j(n2, {
      elementDimensions: s3,
      popoverDimensions: r2,
      popoverPadding: w,
      popoverArrowDimensions: v2
    });
    t3.wrapper.style.top = `${C2}px`, t3.wrapper.style.left = `${y2}px`, t3.wrapper.style.bottom = "auto", t3.wrapper.style.right = "auto", x = "top";
  } else if (g2) {
    const C2 = Math.min(
      m2,
      window.innerHeight - (r2 == null ? void 0 : r2.realHeight) - v2.width
    );
    let y2 = j(n2, {
      elementDimensions: s3,
      popoverDimensions: r2,
      popoverPadding: w,
      popoverArrowDimensions: v2
    });
    t3.wrapper.style.left = `${y2}px`, t3.wrapper.style.bottom = `${C2}px`, t3.wrapper.style.top = "auto", t3.wrapper.style.right = "auto", x = "bottom";
  }
  _ ? t3.arrow.classList.add("driver-popover-arrow-none") : Ce(n2, x, e3);
}
function Ce(e3, o2, t3) {
  const i3 = l$1("popover");
  if (!i3)
    return;
  const p2 = t3.getBoundingClientRect(), n2 = oe(), f2 = i3.arrow, w = n2.width, r2 = window.innerWidth, v2 = p2.width, s3 = p2.left, c2 = n2.height, d2 = window.innerHeight, m2 = p2.top, g2 = p2.height;
  f2.className = "driver-popover-arrow";
  let u2 = o2, h2 = e3;
  o2 === "top" ? (s3 + v2 <= 0 ? (u2 = "right", h2 = "end") : s3 + v2 - w <= 0 && (u2 = "top", h2 = "start"), s3 >= r2 ? (u2 = "left", h2 = "end") : s3 + w >= r2 && (u2 = "top", h2 = "end")) : o2 === "bottom" ? (s3 + v2 <= 0 ? (u2 = "right", h2 = "start") : s3 + v2 - w <= 0 && (u2 = "bottom", h2 = "start"), s3 >= r2 ? (u2 = "left", h2 = "start") : s3 + w >= r2 && (u2 = "bottom", h2 = "end")) : o2 === "left" ? (m2 + g2 <= 0 ? (u2 = "bottom", h2 = "end") : m2 + g2 - c2 <= 0 && (u2 = "left", h2 = "start"), m2 >= d2 ? (u2 = "top", h2 = "end") : m2 + c2 >= d2 && (u2 = "left", h2 = "end")) : o2 === "right" && (m2 + g2 <= 0 ? (u2 = "bottom", h2 = "start") : m2 + g2 - c2 <= 0 && (u2 = "right", h2 = "start"), m2 >= d2 ? (u2 = "top", h2 = "start") : m2 + c2 >= d2 && (u2 = "right", h2 = "end")), u2 ? (f2.classList.add(`driver-popover-arrow-side-${u2}`), f2.classList.add(`driver-popover-arrow-align-${h2}`)) : f2.classList.add("driver-popover-arrow-none");
}
function Pe() {
  const e3 = document.createElement("div");
  e3.classList.add("driver-popover");
  const o2 = document.createElement("div");
  o2.classList.add("driver-popover-arrow");
  const t3 = document.createElement("header");
  t3.id = "driver-popover-title", t3.classList.add("driver-popover-title"), t3.style.display = "none", t3.innerText = "Popover Title";
  const i3 = document.createElement("div");
  i3.id = "driver-popover-description", i3.classList.add("driver-popover-description"), i3.style.display = "none", i3.innerText = "Popover description is here";
  const p2 = document.createElement("button");
  p2.type = "button", p2.classList.add("driver-popover-close-btn"), p2.setAttribute("aria-label", "Close"), p2.innerHTML = "&times;";
  const n2 = document.createElement("footer");
  n2.classList.add("driver-popover-footer");
  const f2 = document.createElement("span");
  f2.classList.add("driver-popover-progress-text"), f2.innerText = "";
  const w = document.createElement("span");
  w.classList.add("driver-popover-navigation-btns");
  const r2 = document.createElement("button");
  r2.type = "button", r2.classList.add("driver-popover-prev-btn"), r2.innerHTML = "&larr; Previous";
  const v2 = document.createElement("button");
  return v2.type = "button", v2.classList.add("driver-popover-next-btn"), v2.innerHTML = "Next &rarr;", w.appendChild(r2), w.appendChild(v2), n2.appendChild(f2), n2.appendChild(w), e3.appendChild(p2), e3.appendChild(o2), e3.appendChild(t3), e3.appendChild(i3), e3.appendChild(n2), {
    wrapper: e3,
    arrow: o2,
    title: t3,
    description: i3,
    footer: n2,
    previousButton: r2,
    nextButton: v2,
    closeButton: p2,
    footerButtons: w,
    progress: f2
  };
}
function Se() {
  var o2;
  const e3 = l$1("popover");
  e3 && ((o2 = e3.wrapper.parentElement) == null || o2.removeChild(e3.wrapper));
}
function ke(e3 = {}) {
  D(e3);
  function o2() {
    a$1("allowClose") && v2();
  }
  function t3() {
    const s3 = l$1("activeIndex"), c2 = a$1("steps") || [];
    if (typeof s3 == "undefined")
      return;
    const d2 = s3 + 1;
    c2[d2] ? r2(d2) : v2();
  }
  function i3() {
    const s3 = l$1("activeIndex"), c2 = a$1("steps") || [];
    if (typeof s3 == "undefined")
      return;
    const d2 = s3 - 1;
    c2[d2] ? r2(d2) : v2();
  }
  function p2(s3) {
    (a$1("steps") || [])[s3] ? r2(s3) : v2();
  }
  function n2() {
    var h2;
    if (l$1("__transitionCallback"))
      return;
    const c2 = l$1("activeIndex"), d2 = l$1("__activeStep"), m2 = l$1("__activeElement");
    if (typeof c2 == "undefined" || typeof d2 == "undefined" || typeof l$1("activeIndex") == "undefined")
      return;
    const u2 = ((h2 = d2.popover) == null ? void 0 : h2.onPrevClick) || a$1("onPrevClick");
    if (u2)
      return u2(m2, d2, {
        config: a$1(),
        state: l$1()
      });
    i3();
  }
  function f2() {
    var u2;
    if (l$1("__transitionCallback"))
      return;
    const c2 = l$1("activeIndex"), d2 = l$1("__activeStep"), m2 = l$1("__activeElement");
    if (typeof c2 == "undefined" || typeof d2 == "undefined")
      return;
    const g2 = ((u2 = d2.popover) == null ? void 0 : u2.onNextClick) || a$1("onNextClick");
    if (g2)
      return g2(m2, d2, {
        config: a$1(),
        state: l$1()
      });
    t3();
  }
  function w() {
    l$1("isInitialized") || (b$1("isInitialized", true), document.body.classList.add("driver-active", a$1("animate") ? "driver-fade" : "driver-simple"), ye(), N("overlayClick", o2), N("escapePress", o2), N("arrowLeftPress", n2), N("arrowRightPress", f2));
  }
  function r2(s3 = 0) {
    var E, A, H, $, B, M, z, q;
    const c2 = a$1("steps");
    if (!c2) {
      console.error("No steps to drive through"), v2();
      return;
    }
    if (!c2[s3]) {
      v2();
      return;
    }
    b$1("__activeOnDestroyed", document.activeElement), b$1("activeIndex", s3);
    const d2 = c2[s3], m2 = c2[s3 + 1], g2 = c2[s3 - 1], u2 = ((E = d2.popover) == null ? void 0 : E.doneBtnText) || a$1("doneBtnText") || "Done", h2 = a$1("allowClose"), P = typeof ((A = d2.popover) == null ? void 0 : A.showProgress) != "undefined" ? (H = d2.popover) == null ? void 0 : H.showProgress : a$1("showProgress"), _ = ((($ = d2.popover) == null ? void 0 : $.progressText) || a$1("progressText") || "{{current}} of {{total}}").replace("{{current}}", `${s3 + 1}`).replace("{{total}}", `${c2.length}`), x = ((B = d2.popover) == null ? void 0 : B.showButtons) || a$1("showButtons"), C2 = [
      "next",
      "previous",
      ...h2 ? ["close"] : []
    ].filter((ne) => !(x != null && x.length) || x.includes(ne)), y2 = ((M = d2.popover) == null ? void 0 : M.onNextClick) || a$1("onNextClick"), k = ((z = d2.popover) == null ? void 0 : z.onPrevClick) || a$1("onPrevClick"), T = ((q = d2.popover) == null ? void 0 : q.onCloseClick) || a$1("onCloseClick");
    K({
      ...d2,
      popover: {
        showButtons: C2,
        nextBtnText: m2 ? void 0 : u2,
        disableButtons: [...g2 ? [] : ["previous"]],
        showProgress: P,
        progressText: _,
        onNextClick: y2 || (() => {
          m2 ? r2(s3 + 1) : v2();
        }),
        onPrevClick: k || (() => {
          r2(s3 - 1);
        }),
        onCloseClick: T || (() => {
          v2();
        }),
        ...(d2 == null ? void 0 : d2.popover) || {}
      }
    });
  }
  function v2(s3 = true) {
    const c2 = l$1("__activeElement"), d2 = l$1("__activeStep"), m2 = l$1("__activeOnDestroyed"), g2 = a$1("onDestroyStarted");
    if (s3 && g2) {
      const P = !c2 || (c2 == null ? void 0 : c2.id) === "driver-dummy-element";
      g2(P ? void 0 : c2, d2, {
        config: a$1(),
        state: l$1()
      });
      return;
    }
    const u2 = (d2 == null ? void 0 : d2.onDeselected) || a$1("onDeselected"), h2 = a$1("onDestroyed");
    if (document.body.classList.remove("driver-active", "driver-fade", "driver-simple"), be(), Se(), we(), ve(), ce(), V(), c2 && d2) {
      const P = c2.id === "driver-dummy-element";
      u2 && u2(P ? void 0 : c2, d2, {
        config: a$1(),
        state: l$1()
      }), h2 && h2(P ? void 0 : c2, d2, {
        config: a$1(),
        state: l$1()
      });
    }
    m2 && m2.focus();
  }
  return {
    isActive: () => l$1("isInitialized") || false,
    refresh: I,
    drive: (s3 = 0) => {
      w(), r2(s3);
    },
    setConfig: D,
    setSteps: (s3) => {
      V(), D({
        ...a$1(),
        steps: s3
      });
    },
    getConfig: a$1,
    getState: l$1,
    getActiveIndex: () => l$1("activeIndex"),
    isFirstStep: () => l$1("activeIndex") === 0,
    isLastStep: () => {
      const s3 = a$1("steps") || [], c2 = l$1("activeIndex");
      return c2 !== void 0 && c2 === s3.length - 1;
    },
    getActiveStep: () => l$1("activeStep"),
    getActiveElement: () => l$1("activeElement"),
    getPreviousElement: () => l$1("previousElement"),
    getPreviousStep: () => l$1("previousStep"),
    moveNext: t3,
    movePrevious: i3,
    moveTo: p2,
    hasNextStep: () => {
      const s3 = a$1("steps") || [], c2 = l$1("activeIndex");
      return c2 !== void 0 && s3[c2 + 1];
    },
    hasPreviousStep: () => {
      const s3 = a$1("steps") || [], c2 = l$1("activeIndex");
      return c2 !== void 0 && s3[c2 - 1];
    },
    highlight: (s3) => {
      w(), K({
        ...s3,
        popover: s3.popover ? {
          showButtons: [],
          showProgress: false,
          progressText: "",
          ...s3.popover
        } : void 0
      });
    },
    destroy: () => {
      v2(false);
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
      for (let i3 = 0; i3 < value.length; i3++) {
        const key2 = String(i3);
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
let c$1;
function lex() {
  lexState = "default";
  buffer = "";
  doubleQuote = false;
  sign = 1;
  for (; ; ) {
    c$1 = peek();
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
    switch (c$1) {
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
    if (util.isSpaceSeparator(c$1)) {
      read();
      return;
    }
    return lexStates[parseState]();
  },
  comment() {
    switch (c$1) {
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
    switch (c$1) {
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
    switch (c$1) {
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
    switch (c$1) {
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
    switch (c$1) {
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
    if (c$1 !== "u") {
      throw invalidChar(read());
    }
    read();
    const u2 = unicodeEscape();
    switch (u2) {
      case "$":
      case "_":
        break;
      default:
        if (!util.isIdStartChar(u2)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u2;
    lexState = "identifierName";
  },
  identifierName() {
    switch (c$1) {
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
    if (util.isIdContinueChar(c$1)) {
      buffer += read();
      return;
    }
    return newToken("identifier", buffer);
  },
  identifierNameEscape() {
    if (c$1 !== "u") {
      throw invalidChar(read());
    }
    read();
    const u2 = unicodeEscape();
    switch (u2) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        break;
      default:
        if (!util.isIdContinueChar(u2)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u2;
    lexState = "identifierName";
  },
  sign() {
    switch (c$1) {
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
    switch (c$1) {
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
    switch (c$1) {
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
    if (util.isDigit(c$1)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalPointLeading() {
    if (util.isDigit(c$1)) {
      buffer += read();
      lexState = "decimalFraction";
      return;
    }
    throw invalidChar(read());
  },
  decimalPoint() {
    switch (c$1) {
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c$1)) {
      buffer += read();
      lexState = "decimalFraction";
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalFraction() {
    switch (c$1) {
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c$1)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalExponent() {
    switch (c$1) {
      case "+":
      case "-":
        buffer += read();
        lexState = "decimalExponentSign";
        return;
    }
    if (util.isDigit(c$1)) {
      buffer += read();
      lexState = "decimalExponentInteger";
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentSign() {
    if (util.isDigit(c$1)) {
      buffer += read();
      lexState = "decimalExponentInteger";
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentInteger() {
    if (util.isDigit(c$1)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  hexadecimal() {
    if (util.isHexDigit(c$1)) {
      buffer += read();
      lexState = "hexadecimalInteger";
      return;
    }
    throw invalidChar(read());
  },
  hexadecimalInteger() {
    if (util.isHexDigit(c$1)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  string() {
    switch (c$1) {
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
        separatorChar(c$1);
        break;
      case void 0:
        throw invalidChar(read());
    }
    buffer += read();
  },
  start() {
    switch (c$1) {
      case "{":
      case "[":
        return newToken("punctuator", read());
    }
    lexState = "value";
  },
  beforePropertyName() {
    switch (c$1) {
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
    if (util.isIdStartChar(c$1)) {
      buffer += read();
      lexState = "identifierName";
      return;
    }
    throw invalidChar(read());
  },
  afterPropertyName() {
    if (c$1 === ":") {
      return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  beforePropertyValue() {
    lexState = "value";
  },
  afterPropertyValue() {
    switch (c$1) {
      case ",":
      case "}":
        return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  beforeArrayValue() {
    if (c$1 === "]") {
      return newToken("punctuator", read());
    }
    lexState = "value";
  },
  afterArrayValue() {
    switch (c$1) {
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
function literal(s3) {
  for (const c2 of s3) {
    const p2 = peek();
    if (p2 !== c2) {
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
    for (const v2 of replacer) {
      let item;
      if (typeof v2 === "string") {
        item = v2;
      } else if (typeof v2 === "number" || v2 instanceof String || v2 instanceof Number) {
        item = String(v2);
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
    for (let i3 = 0; i3 < value2.length; i3++) {
      const c2 = value2[i3];
      switch (c2) {
        case "'":
        case '"':
          quotes[c2]++;
          product += c2;
          continue;
        case "\0":
          if (util.isDigit(value2[i3 + 1])) {
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
    for (let i3 = firstChar.length; i3 < key2.length; i3++) {
      if (!util.isIdContinueChar(String.fromCodePoint(key2.codePointAt(i3)))) {
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
    for (let i3 = 0; i3 < value2.length; i3++) {
      const propertyString = serializeProperty(String(i3), value2);
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
function useProjectManager(files) {
  const notice = useNotification();
  const { appConfig } = storeToRefs(useAppConfig());
  const { rawCuts } = storeToRefs(useSegmentStore());
  const { init } = useSegmentStore();
  const projectFilePath = ref("");
  const resetProjectState = () => {
    projectFilePath.value = "";
  };
  const loadProjectFile = async (filePath) => {
    try {
      const projectData = await readProjectFile(filePath);
      projectFilePath.value = filePath;
      const segments = projectData.cutSegments.map((item) => ({
        ...item,
        checked: true
      }));
      init(segments);
    } catch (error) {
      notice.error({
        title: "项目文件解析失败，请确认文件有效",
        duration: 2e3
      });
    }
  };
  const readProjectFile = async (filePath) => {
    const content = await common.readLLCProject(filePath);
    const projectData = lib.parse(content);
    return projectData;
  };
  const saveProject = async (ignoreNotice = false) => {
    const mediaFileName = files.value.originVideoPath;
    if (!mediaFileName) {
      if (ignoreNotice) return;
      notice.error({
        title: "请先选择视频文件",
        duration: 2e3
      });
      return;
    }
    if (projectFilePath.value) {
      await saveToFile(projectFilePath.value, mediaFileName, ignoreNotice);
    } else {
      const { dir, name } = window.path.parse(mediaFileName);
      projectFilePath.value = window.path.join(dir, `${name}-proj.llc`);
      await saveToFile(projectFilePath.value, mediaFileName, ignoreNotice);
    }
  };
  const saveToFile = async (filePath, mediaFileName, ignoreNotice = false) => {
    if (rawCuts.value.length === 0) {
      if (ignoreNotice) return;
      notice.error({
        title: "你必须至少添加一个片段才能保存项目",
        duration: 2e3
      });
      return;
    }
    const projectData = {
      version: 1,
      mediaFileName: window.path.basename(mediaFileName),
      cutSegments: rawCuts.value.map(({ start, end, name, tags, lyrics }) => ({
        start,
        end,
        name,
        tags,
        lyrics
      }))
    };
    await common.writeLLCProject(filePath, lib.stringify(projectData, null, 2));
  };
  const openInLosslessCut = async () => {
    if (!projectFilePath.value) {
      return;
    }
    if (appConfig.value.losslessCutPath) {
      window.api.common.execFile(appConfig.value.losslessCutPath, [projectFilePath.value]);
    } else {
      notice.info({
        title: "使用默认程序打开llc文件，你也可以尝试在设置中设置lossless-cut的路径",
        duration: 2e3
      });
      await window.api.openPath(projectFilePath.value);
    }
  };
  const saveProjectAs = async () => {
    const mediaFileName = files.value.originVideoPath;
    if (!mediaFileName) {
      notice.error({
        title: "请先选择视频文件",
        duration: 2e3
      });
      return;
    }
    const { dir, name } = window.path.parse(mediaFileName);
    const defaultPath = window.path.join(dir, `${name}-proj.llc`);
    const file = await showSaveDialog({
      extension: "llc",
      defaultPath
    });
    if (!file) return;
    projectFilePath.value = file;
    await saveToFile(file, mediaFileName, true);
  };
  const handleProjectAction = (action) => {
    switch (action) {
      case "save":
        saveProject();
        break;
      case "open":
        openInLosslessCut();
        break;
      case "saveAnother":
        saveProjectAs();
        break;
      default:
        console.error(`不支持的操作: ${action}`);
    }
  };
  const projectMenuOptions = computed(() => {
    const hasProject = !!projectFilePath.value;
    const hasVideo = !!files.value.videoPath;
    const isWeb = window.isWeb;
    const items = [];
    if (!isWeb) {
      items.push({ label: "使用llc打开", key: "open", disabled: !hasProject });
    }
    items.push({ label: "保存(ctrl+s)", key: "save", disabled: !hasProject });
    items.push({
      label: "另存为(ctrl+shift+s)",
      key: "saveAnother",
      disabled: !hasVideo
    });
    return items;
  });
  watch(
    () => rawCuts.value,
    () => {
      if (appConfig.value.videoCut.autoSave) {
        saveProject(true);
      }
    },
    { deep: true }
  );
  return {
    projectFilePath,
    projectMenuOptions,
    handleProjectAction,
    saveProject,
    saveProjectAs,
    loadProjectFile,
    resetProjectState,
    readProjectFile
  };
}
function useVideoPlayer(isWeb) {
  const videoInstance = ref(null);
  const videoRef = ref(null);
  const loadVideo = async (path) => {
    if (isWeb.value) {
      const { videoId, type } = await common.applyVideoId(path);
      const videoUrl = await common.getVideo(videoId);
      await videoRef.value?.switchUrl(videoUrl, type);
      return videoUrl;
    } else {
      await videoRef.value?.switchUrl(path, path.endsWith(".flv") ? "flv" : "");
      return path;
    }
  };
  const togglePlay = () => {
    if (!videoInstance.value?.url) return;
    videoInstance.value.toggle();
  };
  const handleVideoReady = (instance) => {
    videoInstance.value = instance;
  };
  return {
    videoInstance,
    videoRef,
    loadVideo,
    togglePlay,
    handleVideoReady
  };
}
function useDanmu(videoInstance, videoRef, videoDuration, showVideoTime) {
  const danmaList = ref([]);
  const xmlConvertVisible = ref(false);
  const tempXmlFile = ref("");
  const convertDanmuLoading = ref(false);
  const loadDanmuFile = async (path) => {
    if (path.endsWith(".ass")) {
      const content = await common.readDanma(path);
      videoRef.value?.switchAss(content);
      await generateDanmakuData(path);
      return path;
    } else {
      xmlConvertVisible.value = true;
      tempXmlFile.value = path;
      convertDanmuLoading.value = true;
    }
    return path;
  };
  const confirmAndConvertDanmu = async (config) => {
    if (config.resolutionResponsive) {
      const width = videoInstance.value?.video.videoWidth;
      const height = videoInstance.value?.video.videoHeight;
      config.resolution[0] = width;
      config.resolution[1] = height;
    }
    try {
      const { output } = await task.convertXml2Ass(tempXmlFile.value, "随便填", config, {
        removeOrigin: false,
        saveRadio: 2,
        temp: true,
        savePath: "",
        sync: true
      });
      const content = await common.readDanma(output);
      videoRef.value?.switchAss(content);
      return [output, tempXmlFile.value];
    } finally {
      convertDanmuLoading.value = false;
    }
  };
  const generateDanmakuData = async (file) => {
    if (file.endsWith(".ass")) {
      danmaList.value = [];
      videoInstance.value?.artplayerTimestamp?.setTimestamp(0);
    } else if (file.endsWith(".xml")) {
      const data2 = await common.parseDanmu(file);
      danmaList.value = sortBy([...data2.sc, ...data2.danmu], "ts");
      if (data2?.metadata?.video_start_time) {
        videoInstance.value?.artplayerTimestamp?.setTimestamp(
          data2.metadata.video_start_time * 1e3
        );
        if (showVideoTime.value === false) {
          videoInstance.value?.artplayerTimestamp?.hide();
        } else {
          videoInstance.value?.artplayerTimestamp?.show();
        }
      }
    } else {
      throw new Error("不支持的文件类型");
    }
    if (!videoDuration.value) return;
    const data = await common.genTimeData(file);
    videoInstance.value?.artplayerPluginHeatmap?.setData(data);
  };
  const reloadDanmu = async (danmuPath) => {
    if (!danmuPath) return;
    const content = await common.readDanma(danmuPath);
    videoRef.value?.switchAss(content);
  };
  const closeConvertDialog = () => {
    xmlConvertVisible.value = false;
    convertDanmuLoading.value = false;
  };
  return {
    danmaList,
    xmlConvertVisible,
    convertDanmuLoading,
    loadDanmuFile,
    confirmAndConvertDanmu,
    generateDanmakuData,
    reloadDanmu,
    closeConvertDialog
  };
}
function t$2(t3, e3, i3, n2) {
  return new (i3 || (i3 = Promise))(function(s3, r2) {
    function o2(t4) {
      try {
        h2(n2.next(t4));
      } catch (t5) {
        r2(t5);
      }
    }
    function a2(t4) {
      try {
        h2(n2.throw(t4));
      } catch (t5) {
        r2(t5);
      }
    }
    function h2(t4) {
      var e4;
      t4.done ? s3(t4.value) : (e4 = t4.value, e4 instanceof i3 ? e4 : new i3(function(t5) {
        t5(e4);
      })).then(o2, a2);
    }
    h2((n2 = n2.apply(t3, e3 || [])).next());
  });
}
"function" == typeof SuppressedError && SuppressedError;
let e$2 = class e {
  constructor() {
    this.listeners = {};
  }
  on(t3, e3, i3) {
    if (this.listeners[t3] || (this.listeners[t3] = /* @__PURE__ */ new Set()), null == i3 ? void 0 : i3.once) {
      const i4 = (...n2) => {
        this.un(t3, i4), e3(...n2);
      };
      return this.listeners[t3].add(i4), () => this.un(t3, i4);
    }
    return this.listeners[t3].add(e3), () => this.un(t3, e3);
  }
  un(t3, e3) {
    var i3;
    null === (i3 = this.listeners[t3]) || void 0 === i3 || i3.delete(e3);
  }
  once(t3, e3) {
    return this.on(t3, e3, { once: true });
  }
  unAll() {
    this.listeners = {};
  }
  emit(t3, ...e3) {
    this.listeners[t3] && this.listeners[t3].forEach((t4) => t4(...e3));
  }
};
const i$2 = { decode: function(e3, i3) {
  return t$2(this, void 0, void 0, function* () {
    const t3 = new AudioContext({ sampleRate: i3 });
    try {
      return yield t3.decodeAudioData(e3);
    } finally {
      t3.close();
    }
  });
}, createBuffer: function(t3, e3) {
  if (!t3 || 0 === t3.length) throw new Error("channelData must be a non-empty array");
  if (e3 <= 0) throw new Error("duration must be greater than 0");
  if ("number" == typeof t3[0] && (t3 = [t3]), !t3[0] || 0 === t3[0].length) throw new Error("channelData must contain non-empty channel arrays");
  !function(t4) {
    const e4 = t4[0];
    if (e4.some((t5) => t5 > 1 || t5 < -1)) {
      const i4 = e4.length;
      let n2 = 0;
      for (let t5 = 0; t5 < i4; t5++) {
        const i5 = Math.abs(e4[t5]);
        i5 > n2 && (n2 = i5);
      }
      for (const e5 of t4) for (let t5 = 0; t5 < i4; t5++) e5[t5] /= n2;
    }
  }(t3);
  const i3 = t3.map((t4) => t4 instanceof Float32Array ? t4 : Float32Array.from(t4));
  return { duration: e3, length: i3[0].length, sampleRate: i3[0].length / e3, numberOfChannels: i3.length, getChannelData: (t4) => {
    const e4 = i3[t4];
    if (!e4) throw new Error(`Channel ${t4} not found`);
    return e4;
  }, copyFromChannel: AudioBuffer.prototype.copyFromChannel, copyToChannel: AudioBuffer.prototype.copyToChannel };
} };
function n$1(t3, e3) {
  const i3 = e3.xmlns ? document.createElementNS(e3.xmlns, t3) : document.createElement(t3);
  for (const [t4, s3] of Object.entries(e3)) if ("children" === t4 && s3) for (const [t5, e4] of Object.entries(s3)) e4 instanceof Node ? i3.appendChild(e4) : "string" == typeof e4 ? i3.appendChild(document.createTextNode(e4)) : i3.appendChild(n$1(t5, e4));
  else "style" === t4 ? Object.assign(i3.style, s3) : "textContent" === t4 ? i3.textContent = s3 : i3.setAttribute(t4, s3.toString());
  return i3;
}
function s$2(t3, e3, i3) {
  const s3 = n$1(t3, e3 || {});
  return null == i3 || i3.appendChild(s3), s3;
}
var r$1 = Object.freeze({ __proto__: null, createElement: s$2, default: s$2 });
const o$1 = { fetchBlob: function(e3, i3, n2) {
  return t$2(this, void 0, void 0, function* () {
    const s3 = yield fetch(e3, n2);
    if (s3.status >= 400) throw new Error(`Failed to fetch ${e3}: ${s3.status} (${s3.statusText})`);
    return function(e4, i4) {
      t$2(this, void 0, void 0, function* () {
        if (!e4.body || !e4.headers) return;
        const t3 = e4.body.getReader(), n3 = Number(e4.headers.get("Content-Length")) || 0;
        let s4 = 0;
        const r2 = (t4) => {
          s4 += (null == t4 ? void 0 : t4.length) || 0;
          const e5 = Math.round(s4 / n3 * 100);
          i4(e5);
        };
        try {
          for (; ; ) {
            const e5 = yield t3.read();
            if (e5.done) break;
            r2(e5.value);
          }
        } catch (t4) {
          console.warn("Progress tracking error:", t4);
        }
      });
    }(s3.clone(), i3), s3.blob();
  });
} };
class a extends e$2 {
  constructor(t3) {
    super(), this.isExternalMedia = false, t3.media ? (this.media = t3.media, this.isExternalMedia = true) : this.media = document.createElement("audio"), t3.mediaControls && (this.media.controls = true), t3.autoplay && (this.media.autoplay = true), null != t3.playbackRate && this.onMediaEvent("canplay", () => {
      null != t3.playbackRate && (this.media.playbackRate = t3.playbackRate);
    }, { once: true });
  }
  onMediaEvent(t3, e3, i3) {
    return this.media.addEventListener(t3, e3, i3), () => this.media.removeEventListener(t3, e3, i3);
  }
  getSrc() {
    return this.media.currentSrc || this.media.src || "";
  }
  revokeSrc() {
    const t3 = this.getSrc();
    t3.startsWith("blob:") && URL.revokeObjectURL(t3);
  }
  canPlayType(t3) {
    return "" !== this.media.canPlayType(t3);
  }
  setSrc(t3, e3) {
    const i3 = this.getSrc();
    if (t3 && i3 === t3) return;
    this.revokeSrc();
    const n2 = e3 instanceof Blob && (this.canPlayType(e3.type) || !t3) ? URL.createObjectURL(e3) : t3;
    if (i3 && this.media.removeAttribute("src"), n2 || t3) try {
      this.media.src = n2;
    } catch (e4) {
      this.media.src = t3;
    }
  }
  destroy() {
    this.isExternalMedia || (this.media.pause(), this.revokeSrc(), this.media.removeAttribute("src"), this.media.load(), this.media.remove());
  }
  setMediaElement(t3) {
    this.media = t3;
  }
  play() {
    return t$2(this, void 0, void 0, function* () {
      try {
        return yield this.media.play();
      } catch (t3) {
        if (t3 instanceof DOMException && "AbortError" === t3.name) return;
        throw t3;
      }
    });
  }
  pause() {
    this.media.pause();
  }
  isPlaying() {
    return !this.media.paused && !this.media.ended;
  }
  setTime(t3) {
    this.media.currentTime = Math.max(0, Math.min(t3, this.getDuration()));
  }
  getDuration() {
    return this.media.duration;
  }
  getCurrentTime() {
    return this.media.currentTime;
  }
  getVolume() {
    return this.media.volume;
  }
  setVolume(t3) {
    this.media.volume = t3;
  }
  getMuted() {
    return this.media.muted;
  }
  setMuted(t3) {
    this.media.muted = t3;
  }
  getPlaybackRate() {
    return this.media.playbackRate;
  }
  isSeeking() {
    return this.media.seeking;
  }
  setPlaybackRate(t3, e3) {
    null != e3 && (this.media.preservesPitch = e3), this.media.playbackRate = t3;
  }
  getMediaElement() {
    return this.media;
  }
  setSinkId(t3) {
    return this.media.setSinkId(t3);
  }
}
function h(t3) {
  return t3 < 0 ? 0 : t3 > 1 ? 1 : t3;
}
function l({ maxTop: t3, maxBottom: e3, halfHeight: i3, vScale: n2 }) {
  const s3 = Math.round(t3 * i3 * n2);
  return { topHeight: s3, totalHeight: s3 + Math.round(e3 * i3 * n2) || 1 };
}
function c({ barAlign: t3, halfHeight: e3, topHeight: i3, totalHeight: n2, canvasHeight: s3 }) {
  return "top" === t3 ? 0 : "bottom" === t3 ? s3 - n2 : e3 - i3;
}
function d(t3, e3, i3) {
  const n2 = e3 - t3.left, s3 = i3 - t3.top;
  return [n2 / t3.width, s3 / t3.height];
}
function u(t3) {
  return Boolean(t3.barWidth || t3.barGap || t3.barAlign);
}
function p(t3, e3) {
  if (!u(e3)) return t3;
  const i3 = e3.barWidth || 0.5, n2 = i3 + (e3.barGap || i3 / 2);
  return 0 === n2 ? t3 : Math.floor(t3 / n2) * n2;
}
function m({ scrollLeft: t3, totalWidth: e3, numCanvases: i3 }) {
  if (0 === e3) return [0];
  const n2 = t3 / e3, s3 = Math.floor(n2 * i3);
  return [s3 - 1, s3, s3 + 1];
}
function f({ scrollLeft: t3, clientWidth: e3, scrollWidth: i3 }) {
  if (0 === i3) return { startX: 0, endX: 0 };
  return { startX: t3 / i3, endX: (t3 + e3) / i3 };
}
class g extends e$2 {
  constructor(t3, e3) {
    super(), this.timeouts = [], this.isScrollable = false, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = false, this.subscriptions = [], this.unsubscribeOnScroll = [], this.dragUnsubscribe = null, this.subscriptions = [], this.options = t3;
    const i3 = this.parentFromOptionsContainer(t3.container);
    this.parent = i3;
    const [n2, s3] = this.initHtml();
    i3.appendChild(n2), this.container = n2, this.scrollContainer = s3.querySelector(".scroll"), this.wrapper = s3.querySelector(".wrapper"), this.canvasWrapper = s3.querySelector(".canvases"), this.progressWrapper = s3.querySelector(".progress"), this.cursor = s3.querySelector(".cursor"), e3 && s3.appendChild(e3), this.initEvents();
  }
  parentFromOptionsContainer(t3) {
    let e3;
    if ("string" == typeof t3 ? e3 = document.querySelector(t3) : t3 instanceof HTMLElement && (e3 = t3), !e3) throw new Error("Container not found");
    return e3;
  }
  initEvents() {
    if (this.wrapper.addEventListener("click", (t3) => {
      const e3 = this.wrapper.getBoundingClientRect(), [i3, n2] = d(e3, t3.clientX, t3.clientY);
      this.emit("click", i3, n2);
    }), this.wrapper.addEventListener("dblclick", (t3) => {
      const e3 = this.wrapper.getBoundingClientRect(), [i3, n2] = d(e3, t3.clientX, t3.clientY);
      this.emit("dblclick", i3, n2);
    }), true !== this.options.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.scrollContainer.addEventListener("scroll", () => {
      const { scrollLeft: t3, scrollWidth: e3, clientWidth: i3 } = this.scrollContainer, { startX: n2, endX: s3 } = f({ scrollLeft: t3, scrollWidth: e3, clientWidth: i3 });
      this.emit("scroll", n2, s3, t3, t3 + i3);
    }), "function" == typeof ResizeObserver) {
      const t3 = this.createDelay(100);
      this.resizeObserver = new ResizeObserver(() => {
        t3().then(() => this.onContainerResize()).catch(() => {
        });
      }), this.resizeObserver.observe(this.scrollContainer);
    }
  }
  onContainerResize() {
    const t3 = this.parent.clientWidth;
    t3 === this.lastContainerWidth && "auto" !== this.options.height || (this.lastContainerWidth = t3, this.reRender(), this.emit("resize"));
  }
  initDrag() {
    this.dragUnsubscribe || (this.dragUnsubscribe = function(t3, e3, i3, n2, s3 = 3, r2 = 0, o2 = 100) {
      if (!t3) return () => {
      };
      const a2 = /* @__PURE__ */ new Map(), h2 = matchMedia("(pointer: coarse)").matches;
      let l2 = () => {
      };
      const c2 = (c3) => {
        if (c3.button !== r2) return;
        if (a2.set(c3.pointerId, c3), a2.size > 1) return;
        let d2 = c3.clientX, u2 = c3.clientY, p2 = false;
        const m2 = Date.now(), f2 = (n3) => {
          if (n3.defaultPrevented || a2.size > 1) return;
          if (h2 && Date.now() - m2 < o2) return;
          const r3 = n3.clientX, l3 = n3.clientY, c4 = r3 - d2, f3 = l3 - u2;
          if (p2 || Math.abs(c4) > s3 || Math.abs(f3) > s3) {
            n3.preventDefault(), n3.stopPropagation();
            const s4 = t3.getBoundingClientRect(), { left: o3, top: a3 } = s4;
            p2 || (null == i3 || i3(d2 - o3, u2 - a3), p2 = true), e3(c4, f3, r3 - o3, l3 - a3), d2 = r3, u2 = l3;
          }
        }, g2 = (e4) => {
          if (a2.delete(e4.pointerId), p2) {
            const i4 = e4.clientX, s4 = e4.clientY, r3 = t3.getBoundingClientRect(), { left: o3, top: a3 } = r3;
            null == n2 || n2(i4 - o3, s4 - a3);
          }
          l2();
        }, v2 = (t4) => {
          a2.delete(t4.pointerId), t4.relatedTarget && t4.relatedTarget !== document.documentElement || g2(t4);
        }, b2 = (t4) => {
          p2 && (t4.stopPropagation(), t4.preventDefault());
        }, y2 = (t4) => {
          t4.defaultPrevented || a2.size > 1 || p2 && t4.preventDefault();
        };
        document.addEventListener("pointermove", f2), document.addEventListener("pointerup", g2), document.addEventListener("pointerout", v2), document.addEventListener("pointercancel", v2), document.addEventListener("touchmove", y2, { passive: false }), document.addEventListener("click", b2, { capture: true }), l2 = () => {
          document.removeEventListener("pointermove", f2), document.removeEventListener("pointerup", g2), document.removeEventListener("pointerout", v2), document.removeEventListener("pointercancel", v2), document.removeEventListener("touchmove", y2), setTimeout(() => {
            document.removeEventListener("click", b2, { capture: true });
          }, 10);
        };
      };
      return t3.addEventListener("pointerdown", c2), () => {
        l2(), t3.removeEventListener("pointerdown", c2), a2.clear();
      };
    }(this.wrapper, (t3, e3, i3) => {
      const n2 = this.wrapper.getBoundingClientRect().width;
      this.emit("drag", h(i3 / n2));
    }, (t3) => {
      this.isDragging = true;
      const e3 = this.wrapper.getBoundingClientRect().width;
      this.emit("dragstart", h(t3 / e3));
    }, (t3) => {
      this.isDragging = false;
      const e3 = this.wrapper.getBoundingClientRect().width;
      this.emit("dragend", h(t3 / e3));
    }), this.subscriptions.push(this.dragUnsubscribe));
  }
  initHtml() {
    const t3 = document.createElement("div"), e3 = t3.attachShadow({ mode: "open" }), i3 = this.options.cspNonce && "string" == typeof this.options.cspNonce ? this.options.cspNonce.replace(/"/g, "") : "";
    return e3.innerHTML = `
      <style${i3 ? ` nonce="${i3}"` : ""}>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height, this.options.splitChannels)}px;
          pointer-events: none;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `, [t3, e3];
  }
  setOptions(t3) {
    if (this.options.container !== t3.container) {
      const e3 = this.parentFromOptionsContainer(t3.container);
      e3.appendChild(this.container), this.parent = e3;
    }
    true !== t3.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.options = t3, this.reRender();
  }
  getWrapper() {
    return this.wrapper;
  }
  getWidth() {
    return this.scrollContainer.clientWidth;
  }
  getScroll() {
    return this.scrollContainer.scrollLeft;
  }
  setScroll(t3) {
    this.scrollContainer.scrollLeft = t3;
  }
  setScrollPercentage(t3) {
    const { scrollWidth: e3 } = this.scrollContainer, i3 = e3 * t3;
    this.setScroll(i3);
  }
  destroy() {
    var t3;
    this.subscriptions.forEach((t4) => t4()), this.container.remove(), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), null === (t3 = this.unsubscribeOnScroll) || void 0 === t3 || t3.forEach((t4) => t4()), this.unsubscribeOnScroll = [];
  }
  createDelay(t3 = 10) {
    let e3, i3;
    const n2 = () => {
      e3 && (clearTimeout(e3), e3 = void 0), i3 && (i3(), i3 = void 0);
    };
    return this.timeouts.push(n2), () => new Promise((s3, r2) => {
      n2(), i3 = r2, e3 = setTimeout(() => {
        e3 = void 0, i3 = void 0, s3();
      }, t3);
    });
  }
  getHeight(t3, e3) {
    var i3;
    const n2 = (null === (i3 = this.audioData) || void 0 === i3 ? void 0 : i3.numberOfChannels) || 1;
    return function({ optionsHeight: t4, optionsSplitChannels: e4, parentHeight: i4, numberOfChannels: n3, defaultHeight: s3 = 128 }) {
      if (null == t4) return s3;
      const r2 = Number(t4);
      if (!isNaN(r2)) return r2;
      if ("auto" === t4) {
        const t5 = i4 || s3;
        return (null == e4 ? void 0 : e4.every((t6) => !t6.overlay)) ? t5 / n3 : t5;
      }
      return s3;
    }({ optionsHeight: t3, optionsSplitChannels: e3, parentHeight: this.parent.clientHeight, numberOfChannels: n2, defaultHeight: 128 });
  }
  convertColorValues(t3) {
    return function(t4, e3) {
      if (!Array.isArray(t4)) return t4 || "";
      if (0 === t4.length) return "#999";
      if (t4.length < 2) return t4[0] || "";
      const i3 = document.createElement("canvas"), n2 = i3.getContext("2d"), s3 = i3.height * e3, r2 = n2.createLinearGradient(0, 0, 0, s3 || e3), o2 = 1 / (t4.length - 1);
      return t4.forEach((t5, e4) => {
        r2.addColorStop(e4 * o2, t5);
      }), r2;
    }(t3, this.getPixelRatio());
  }
  getPixelRatio() {
    return t3 = window.devicePixelRatio, Math.max(1, t3 || 1);
    var t3;
  }
  renderBarWaveform(t3, e3, i3, n2) {
    const { width: s3, height: r2 } = i3.canvas, { halfHeight: o2, barWidth: a2, barRadius: h2, barIndexScale: d2, barSpacing: u2 } = function({ width: t4, height: e4, length: i4, options: n3, pixelRatio: s4 }) {
      const r3 = e4 / 2, o3 = n3.barWidth ? n3.barWidth * s4 : 1, a3 = n3.barGap ? n3.barGap * s4 : n3.barWidth ? o3 / 2 : 0, h3 = o3 + a3 || 1;
      return { halfHeight: r3, barWidth: o3, barGap: a3, barRadius: n3.barRadius || 0, barIndexScale: i4 > 0 ? t4 / h3 / i4 : 0, barSpacing: h3 };
    }({ width: s3, height: r2, length: (t3[0] || []).length, options: e3, pixelRatio: this.getPixelRatio() }), p2 = function({ channelData: t4, barIndexScale: e4, barSpacing: i4, barWidth: n3, halfHeight: s4, vScale: r3, canvasHeight: o3, barAlign: a3 }) {
      const h3 = t4[0] || [], d3 = t4[1] || h3, u3 = h3.length, p3 = [];
      let m2 = 0, f2 = 0, g2 = 0;
      for (let t5 = 0; t5 <= u3; t5++) {
        const u4 = Math.round(t5 * e4);
        if (u4 > m2) {
          const { topHeight: t6, totalHeight: e5 } = l({ maxTop: f2, maxBottom: g2, halfHeight: s4, vScale: r3 }), h4 = c({ barAlign: a3, halfHeight: s4, topHeight: t6, totalHeight: e5, canvasHeight: o3 });
          p3.push({ x: m2 * i4, y: h4, width: n3, height: e5 }), m2 = u4, f2 = 0, g2 = 0;
        }
        const v2 = Math.abs(h3[t5] || 0), b2 = Math.abs(d3[t5] || 0);
        v2 > f2 && (f2 = v2), b2 > g2 && (g2 = b2);
      }
      return p3;
    }({ channelData: t3, barIndexScale: d2, barSpacing: u2, barWidth: a2, halfHeight: o2, vScale: n2, canvasHeight: r2, barAlign: e3.barAlign });
    i3.beginPath();
    for (const t4 of p2) h2 && "roundRect" in i3 ? i3.roundRect(t4.x, t4.y, t4.width, t4.height, h2) : i3.rect(t4.x, t4.y, t4.width, t4.height);
    i3.fill(), i3.closePath();
  }
  renderLineWaveform(t3, e3, i3, n2) {
    const { width: s3, height: r2 } = i3.canvas, o2 = function({ channelData: t4, width: e4, height: i4, vScale: n3 }) {
      const s4 = i4 / 2, r3 = t4[0] || [];
      return [r3, t4[1] || r3].map((t5, i5) => {
        const r4 = t5.length, o3 = r4 ? e4 / r4 : 0, a2 = s4, h2 = 0 === i5 ? -1 : 1, l2 = [{ x: 0, y: a2 }];
        let c2 = 0, d2 = 0;
        for (let e5 = 0; e5 <= r4; e5++) {
          const i6 = Math.round(e5 * o3);
          if (i6 > c2) {
            const t6 = a2 + (Math.round(d2 * s4 * n3) || 1) * h2;
            l2.push({ x: c2, y: t6 }), c2 = i6, d2 = 0;
          }
          const r5 = Math.abs(t5[e5] || 0);
          r5 > d2 && (d2 = r5);
        }
        return l2.push({ x: c2, y: a2 }), l2;
      });
    }({ channelData: t3, width: s3, height: r2, vScale: n2 });
    i3.beginPath();
    for (const t4 of o2) if (t4.length) {
      i3.moveTo(t4[0].x, t4[0].y);
      for (let e4 = 1; e4 < t4.length; e4++) {
        const n3 = t4[e4];
        i3.lineTo(n3.x, n3.y);
      }
    }
    i3.fill(), i3.closePath();
  }
  renderWaveform(t3, e3, i3) {
    if (i3.fillStyle = this.convertColorValues(e3.waveColor), e3.renderFunction) return void e3.renderFunction(t3, i3);
    const n2 = function({ channelData: t4, barHeight: e4, normalize: i4 }) {
      var n3;
      const s3 = e4 || 1;
      if (!i4) return s3;
      const r2 = t4[0];
      if (!r2 || 0 === r2.length) return s3;
      let o2 = 0;
      for (let t5 = 0; t5 < r2.length; t5++) {
        const e5 = null !== (n3 = r2[t5]) && void 0 !== n3 ? n3 : 0, i5 = Math.abs(e5);
        i5 > o2 && (o2 = i5);
      }
      return o2 ? s3 / o2 : s3;
    }({ channelData: t3, barHeight: e3.barHeight, normalize: e3.normalize });
    u(e3) ? this.renderBarWaveform(t3, e3, i3, n2) : this.renderLineWaveform(t3, e3, i3, n2);
  }
  renderSingleCanvas(t3, e3, i3, n2, s3, r2, o2) {
    const a2 = this.getPixelRatio(), h2 = document.createElement("canvas");
    h2.width = Math.round(i3 * a2), h2.height = Math.round(n2 * a2), h2.style.width = `${i3}px`, h2.style.height = `${n2}px`, h2.style.left = `${Math.round(s3)}px`, r2.appendChild(h2);
    const l2 = h2.getContext("2d");
    if (e3.renderFunction ? (l2.fillStyle = this.convertColorValues(e3.waveColor), e3.renderFunction(t3, l2)) : this.renderWaveform(t3, e3, l2), h2.width > 0 && h2.height > 0) {
      const t4 = h2.cloneNode(), i4 = t4.getContext("2d");
      i4.drawImage(h2, 0, 0), i4.globalCompositeOperation = "source-in", i4.fillStyle = this.convertColorValues(e3.progressColor), i4.fillRect(0, 0, h2.width, h2.height), o2.appendChild(t4);
    }
  }
  renderMultiCanvas(t3, e3, i3, n2, s3, r2) {
    const o2 = this.getPixelRatio(), { clientWidth: a2 } = this.scrollContainer, h2 = i3 / o2, l2 = function({ clientWidth: t4, totalWidth: e4, options: i4 }) {
      return p(Math.min(8e3, t4, e4), i4);
    }({ clientWidth: a2, totalWidth: h2, options: e3 });
    let c2 = {};
    if (0 === l2) return;
    const d2 = (i4) => {
      if (i4 < 0 || i4 >= u2) return;
      if (c2[i4]) return;
      c2[i4] = true;
      const o3 = i4 * l2;
      let a3 = Math.min(h2 - o3, l2);
      if (a3 = p(a3, e3), a3 <= 0) return;
      const d3 = function({ channelData: t4, offset: e4, clampedWidth: i5, totalWidth: n3 }) {
        return t4.map((t5) => {
          const s4 = Math.floor(e4 / n3 * t5.length), r3 = Math.floor((e4 + i5) / n3 * t5.length);
          return t5.slice(s4, r3);
        });
      }({ channelData: t3, offset: o3, clampedWidth: a3, totalWidth: h2 });
      this.renderSingleCanvas(d3, e3, a3, n2, o3, s3, r2);
    }, u2 = Math.ceil(h2 / l2);
    if (!this.isScrollable) {
      for (let t4 = 0; t4 < u2; t4++) d2(t4);
      return;
    }
    if (m({ scrollLeft: this.scrollContainer.scrollLeft, totalWidth: h2, numCanvases: u2 }).forEach((t4) => d2(t4)), u2 > 1) {
      const t4 = this.on("scroll", () => {
        const { scrollLeft: t5 } = this.scrollContainer;
        Object.keys(c2).length > 10 && (s3.innerHTML = "", r2.innerHTML = "", c2 = {}), m({ scrollLeft: t5, totalWidth: h2, numCanvases: u2 }).forEach((t6) => d2(t6));
      });
      this.unsubscribeOnScroll.push(t4);
    }
  }
  renderChannel(t3, e3, i3, n2) {
    var { overlay: s3 } = e3, r2 = function(t4, e4) {
      var i4 = {};
      for (var n3 in t4) Object.prototype.hasOwnProperty.call(t4, n3) && e4.indexOf(n3) < 0 && (i4[n3] = t4[n3]);
      if (null != t4 && "function" == typeof Object.getOwnPropertySymbols) {
        var s4 = 0;
        for (n3 = Object.getOwnPropertySymbols(t4); s4 < n3.length; s4++) e4.indexOf(n3[s4]) < 0 && Object.prototype.propertyIsEnumerable.call(t4, n3[s4]) && (i4[n3[s4]] = t4[n3[s4]]);
      }
      return i4;
    }(e3, ["overlay"]);
    const o2 = document.createElement("div"), a2 = this.getHeight(r2.height, r2.splitChannels);
    o2.style.height = `${a2}px`, s3 && n2 > 0 && (o2.style.marginTop = `-${a2}px`), this.canvasWrapper.style.minHeight = `${a2}px`, this.canvasWrapper.appendChild(o2);
    const h2 = o2.cloneNode();
    this.progressWrapper.appendChild(h2), this.renderMultiCanvas(t3, r2, i3, a2, o2, h2);
  }
  render(e3) {
    return t$2(this, void 0, void 0, function* () {
      var t3;
      this.timeouts.forEach((t4) => t4()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", null != this.options.width && (this.scrollContainer.style.width = "number" == typeof this.options.width ? `${this.options.width}px` : this.options.width);
      const i3 = this.getPixelRatio(), n2 = this.scrollContainer.clientWidth, { scrollWidth: s3, isScrollable: r2, useParentWidth: o2, width: a2 } = function({ duration: t4, minPxPerSec: e4 = 0, parentWidth: i4, fillParent: n3, pixelRatio: s4 }) {
        const r3 = Math.ceil(t4 * e4), o3 = r3 > i4, a3 = Boolean(n3 && !o3);
        return { scrollWidth: r3, isScrollable: o3, useParentWidth: a3, width: (a3 ? i4 : r3) * s4 };
      }({ duration: e3.duration, minPxPerSec: this.options.minPxPerSec || 0, parentWidth: n2, fillParent: this.options.fillParent, pixelRatio: i3 });
      if (this.isScrollable = r2, this.wrapper.style.width = o2 ? "100%" : `${s3}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e3, this.emit("render"), this.options.splitChannels) for (let i4 = 0; i4 < e3.numberOfChannels; i4++) {
        const n3 = Object.assign(Object.assign({}, this.options), null === (t3 = this.options.splitChannels) || void 0 === t3 ? void 0 : t3[i4]);
        this.renderChannel([e3.getChannelData(i4)], n3, a2, i4);
      }
      else {
        const t4 = [e3.getChannelData(0)];
        e3.numberOfChannels > 1 && t4.push(e3.getChannelData(1)), this.renderChannel(t4, this.options, a2, 0);
      }
      Promise.resolve().then(() => this.emit("rendered"));
    });
  }
  reRender() {
    if (this.unsubscribeOnScroll.forEach((t4) => t4()), this.unsubscribeOnScroll = [], !this.audioData) return;
    const { scrollWidth: t3 } = this.scrollContainer, { right: e3 } = this.progressWrapper.getBoundingClientRect();
    if (this.render(this.audioData), this.isScrollable && t3 !== this.scrollContainer.scrollWidth) {
      const { right: t4 } = this.progressWrapper.getBoundingClientRect(), i3 = function(t5) {
        const e4 = 2 * t5;
        return (e4 < 0 ? Math.floor(e4) : Math.ceil(e4)) / 2;
      }(t4 - e3);
      this.scrollContainer.scrollLeft += i3;
    }
  }
  zoom(t3) {
    this.options.minPxPerSec = t3, this.reRender();
  }
  scrollIntoView(t3, e3 = false) {
    const { scrollLeft: i3, scrollWidth: n2, clientWidth: s3 } = this.scrollContainer, r2 = t3 * n2, o2 = i3, a2 = i3 + s3, h2 = s3 / 2;
    if (this.isDragging) {
      const t4 = 30;
      r2 + t4 > a2 ? this.scrollContainer.scrollLeft += t4 : r2 - t4 < o2 && (this.scrollContainer.scrollLeft -= t4);
    } else {
      (r2 < o2 || r2 > a2) && (this.scrollContainer.scrollLeft = r2 - (this.options.autoCenter ? h2 : 0));
      const t4 = r2 - i3 - h2;
      e3 && this.options.autoCenter && t4 > 0 && (this.scrollContainer.scrollLeft += t4);
    }
    {
      const t4 = this.scrollContainer.scrollLeft, { startX: e4, endX: i4 } = f({ scrollLeft: t4, scrollWidth: n2, clientWidth: s3 });
      this.emit("scroll", e4, i4, t4, t4 + s3);
    }
  }
  renderProgress(t3, e3) {
    if (isNaN(t3)) return;
    const i3 = 100 * t3;
    this.canvasWrapper.style.clipPath = `polygon(${i3}% 0%, 100% 0%, 100% 100%, ${i3}% 100%)`, this.progressWrapper.style.width = `${i3}%`, this.cursor.style.left = `${i3}%`, this.cursor.style.transform = this.options.cursorWidth ? `translateX(-${t3 * this.options.cursorWidth}px)` : "", this.isScrollable && this.options.autoScroll && this.scrollIntoView(t3, e3);
  }
  exportImage(e3, i3, n2) {
    return t$2(this, void 0, void 0, function* () {
      const t3 = this.canvasWrapper.querySelectorAll("canvas");
      if (!t3.length) throw new Error("No waveform data");
      if ("dataURL" === n2) {
        const n3 = Array.from(t3).map((t4) => t4.toDataURL(e3, i3));
        return Promise.resolve(n3);
      }
      return Promise.all(Array.from(t3).map((t4) => new Promise((n3, s3) => {
        t4.toBlob((t5) => {
          t5 ? n3(t5) : s3(new Error("Could not export image"));
        }, e3, i3);
      })));
    });
  }
}
class v extends e$2 {
  constructor() {
    super(...arguments), this.animationFrameId = null, this.isRunning = false;
  }
  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    const t3 = () => {
      this.isRunning && (this.emit("tick"), this.animationFrameId = requestAnimationFrame(t3));
    };
    t3();
  }
  stop() {
    this.isRunning = false, null !== this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null);
  }
  destroy() {
    this.stop();
  }
}
class b extends e$2 {
  constructor(t3 = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = false, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = true, this.crossOrigin = null, this.seeking = false, this.autoplay = false, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = t3, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return t$2(this, void 0, void 0, function* () {
    });
  }
  get src() {
    return this.currentSrc;
  }
  set src(t3) {
    if (this.currentSrc = t3, this._duration = void 0, !t3) return this.buffer = null, void this.emit("emptied");
    fetch(t3).then((e3) => {
      if (e3.status >= 400) throw new Error(`Failed to fetch ${t3}: ${e3.status} (${e3.statusText})`);
      return e3.arrayBuffer();
    }).then((e3) => this.currentSrc !== t3 ? null : this.audioContext.decodeAudioData(e3)).then((e3) => {
      this.currentSrc === t3 && (this.buffer = e3, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play());
    }).catch((t4) => {
      console.error("WebAudioPlayer load error:", t4);
    });
  }
  _play() {
    if (!this.paused) return;
    this.paused = false, this.bufferNode && (this.bufferNode.onended = null, this.bufferNode.disconnect()), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
    let t3 = this.playedDuration * this._playbackRate;
    (t3 >= this.duration || t3 < 0) && (t3 = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, t3), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = () => {
      this.currentTime >= this.duration && (this.pause(), this.emit("ended"));
    };
  }
  _pause() {
    var t3;
    this.paused = true, null === (t3 = this.bufferNode) || void 0 === t3 || t3.stop(), this.playedDuration += this.audioContext.currentTime - this.playStartTime;
  }
  play() {
    return t$2(this, void 0, void 0, function* () {
      this.paused && (this._play(), this.emit("play"));
    });
  }
  pause() {
    this.paused || (this._pause(), this.emit("pause"));
  }
  stopAt(t3) {
    const e3 = t3 - this.currentTime, i3 = this.bufferNode;
    null == i3 || i3.stop(this.audioContext.currentTime + e3), null == i3 || i3.addEventListener("ended", () => {
      i3 === this.bufferNode && (this.bufferNode = null, this.pause());
    }, { once: true });
  }
  setSinkId(e3) {
    return t$2(this, void 0, void 0, function* () {
      return this.audioContext.setSinkId(e3);
    });
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(t3) {
    this._playbackRate = t3, this.bufferNode && (this.bufferNode.playbackRate.value = t3);
  }
  get currentTime() {
    return (this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime)) * this._playbackRate;
  }
  set currentTime(t3) {
    const e3 = !this.paused;
    e3 && this._pause(), this.playedDuration = t3 / this._playbackRate, e3 && this._play(), this.emit("seeking"), this.emit("timeupdate");
  }
  get duration() {
    var t3, e3;
    return null !== (t3 = this._duration) && void 0 !== t3 ? t3 : (null === (e3 = this.buffer) || void 0 === e3 ? void 0 : e3.duration) || 0;
  }
  set duration(t3) {
    this._duration = t3;
  }
  get volume() {
    return this.gainNode.gain.value;
  }
  set volume(t3) {
    this.gainNode.gain.value = t3, this.emit("volumechange");
  }
  get muted() {
    return this._muted;
  }
  set muted(t3) {
    this._muted !== t3 && (this._muted = t3, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination));
  }
  canPlayType(t3) {
    return /^(audio|video)\//.test(t3);
  }
  getGainNode() {
    return this.gainNode;
  }
  getChannelData() {
    const t3 = [];
    if (!this.buffer) return t3;
    const e3 = this.buffer.numberOfChannels;
    for (let i3 = 0; i3 < e3; i3++) t3.push(this.buffer.getChannelData(i3));
    return t3;
  }
  removeAttribute(t3) {
    switch (t3) {
      case "src":
        this.src = "";
        break;
      case "playbackRate":
        this.playbackRate = 0;
        break;
      case "currentTime":
        this.currentTime = 0;
        break;
      case "duration":
        this.duration = 0;
        break;
      case "volume":
        this.volume = 0;
        break;
      case "muted":
        this.muted = false;
    }
  }
}
const y = { waveColor: "#999", progressColor: "#555", cursorWidth: 1, minPxPerSec: 0, fillParent: true, interact: true, dragToSeek: false, autoScroll: true, autoCenter: true, sampleRate: 8e3 };
class C extends a {
  static create(t3) {
    return new C(t3);
  }
  constructor(t3) {
    const e3 = t3.media || ("WebAudio" === t3.backend ? new b() : void 0);
    super({ media: e3, mediaControls: t3.mediaControls, autoplay: t3.autoplay, playbackRate: t3.audioRate }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, y, t3), this.timer = new v();
    const i3 = e3 ? void 0 : this.getMediaElement();
    this.renderer = new g(this.options, i3), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
    const n2 = this.options.url || this.getSrc() || "";
    Promise.resolve().then(() => {
      this.emit("init");
      const { peaks: t4, duration: e4 } = this.options;
      (n2 || t4 && e4) && this.load(n2, t4, e4).catch((t5) => {
        this.emit("error", t5 instanceof Error ? t5 : new Error(String(t5)));
      });
    });
  }
  updateProgress(t3 = this.getCurrentTime()) {
    return this.renderer.renderProgress(t3 / this.getDuration(), this.isPlaying()), t3;
  }
  initTimerEvents() {
    this.subscriptions.push(this.timer.on("tick", () => {
      if (!this.isSeeking()) {
        const t3 = this.updateProgress();
        this.emit("timeupdate", t3), this.emit("audioprocess", t3), null != this.stopAtPosition && this.isPlaying() && t3 >= this.stopAtPosition && this.pause();
      }
    }));
  }
  initPlayerEvents() {
    this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", () => {
      const t3 = this.updateProgress();
      this.emit("timeupdate", t3);
    }), this.onMediaEvent("play", () => {
      this.emit("play"), this.timer.start();
    }), this.onMediaEvent("pause", () => {
      this.emit("pause"), this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("emptied", () => {
      this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("ended", () => {
      this.emit("timeupdate", this.getDuration()), this.emit("finish"), this.stopAtPosition = null;
    }), this.onMediaEvent("seeking", () => {
      this.emit("seeking", this.getCurrentTime());
    }), this.onMediaEvent("error", () => {
      var t3;
      this.emit("error", null !== (t3 = this.getMediaElement().error) && void 0 !== t3 ? t3 : new Error("Media error")), this.stopAtPosition = null;
    }));
  }
  initRendererEvents() {
    this.subscriptions.push(this.renderer.on("click", (t3, e3) => {
      this.options.interact && (this.seekTo(t3), this.emit("interaction", t3 * this.getDuration()), this.emit("click", t3, e3));
    }), this.renderer.on("dblclick", (t3, e3) => {
      this.emit("dblclick", t3, e3);
    }), this.renderer.on("scroll", (t3, e3, i3, n2) => {
      const s3 = this.getDuration();
      this.emit("scroll", t3 * s3, e3 * s3, i3, n2);
    }), this.renderer.on("render", () => {
      this.emit("redraw");
    }), this.renderer.on("rendered", () => {
      this.emit("redrawcomplete");
    }), this.renderer.on("dragstart", (t3) => {
      this.emit("dragstart", t3);
    }), this.renderer.on("dragend", (t3) => {
      this.emit("dragend", t3);
    }), this.renderer.on("resize", () => {
      this.emit("resize");
    }));
    {
      let t3;
      const e3 = this.renderer.on("drag", (e4) => {
        var i3;
        if (!this.options.interact) return;
        this.renderer.renderProgress(e4), clearTimeout(t3);
        let n2 = 0;
        const s3 = this.options.dragToSeek;
        this.isPlaying() ? n2 = 0 : true === s3 ? n2 = 200 : s3 && "object" == typeof s3 && (n2 = null !== (i3 = s3.debounceTime) && void 0 !== i3 ? i3 : 200), t3 = setTimeout(() => {
          this.seekTo(e4);
        }, n2), this.emit("interaction", e4 * this.getDuration()), this.emit("drag", e4);
      });
      this.subscriptions.push(() => {
        clearTimeout(t3), e3();
      });
    }
  }
  initPlugins() {
    var t3;
    (null === (t3 = this.options.plugins) || void 0 === t3 ? void 0 : t3.length) && this.options.plugins.forEach((t4) => {
      this.registerPlugin(t4);
    });
  }
  unsubscribePlayerEvents() {
    this.mediaSubscriptions.forEach((t3) => t3()), this.mediaSubscriptions = [];
  }
  setOptions(t3) {
    this.options = Object.assign({}, this.options, t3), t3.duration && !t3.peaks && (this.decodedData = i$2.createBuffer(this.exportPeaks(), t3.duration)), t3.peaks && t3.duration && (this.decodedData = i$2.createBuffer(t3.peaks, t3.duration)), this.renderer.setOptions(this.options), t3.audioRate && this.setPlaybackRate(t3.audioRate), null != t3.mediaControls && (this.getMediaElement().controls = t3.mediaControls);
  }
  registerPlugin(t3) {
    if (this.plugins.includes(t3)) return t3;
    t3._init(this), this.plugins.push(t3);
    const e3 = t3.once("destroy", () => {
      this.plugins = this.plugins.filter((e4) => e4 !== t3), this.subscriptions = this.subscriptions.filter((t4) => t4 !== e3);
    });
    return this.subscriptions.push(e3), t3;
  }
  unregisterPlugin(t3) {
    this.plugins = this.plugins.filter((e3) => e3 !== t3), t3.destroy();
  }
  getWrapper() {
    return this.renderer.getWrapper();
  }
  getWidth() {
    return this.renderer.getWidth();
  }
  getScroll() {
    return this.renderer.getScroll();
  }
  setScroll(t3) {
    return this.renderer.setScroll(t3);
  }
  setScrollTime(t3) {
    const e3 = t3 / this.getDuration();
    this.renderer.setScrollPercentage(e3);
  }
  getActivePlugins() {
    return this.plugins;
  }
  loadAudio(e3, n2, s3, r2) {
    return t$2(this, void 0, void 0, function* () {
      var t3;
      if (this.emit("load", e3), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, null === (t3 = this.abortController) || void 0 === t3 || t3.abort(), this.abortController = null, !n2 && !s3) {
        const t4 = this.options.fetchParams || {};
        window.AbortController && !t4.signal && (this.abortController = new AbortController(), t4.signal = this.abortController.signal);
        const i3 = (t5) => this.emit("loading", t5);
        n2 = yield o$1.fetchBlob(e3, i3, t4);
        const s4 = this.options.blobMimeType;
        s4 && (n2 = new Blob([n2], { type: s4 }));
      }
      this.setSrc(e3, n2);
      const a2 = yield new Promise((t4) => {
        const e4 = r2 || this.getDuration();
        e4 ? t4(e4) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", () => t4(this.getDuration()), { once: true }));
      });
      if (!e3 && !n2) {
        const t4 = this.getMediaElement();
        t4 instanceof b && (t4.duration = a2);
      }
      if (s3) this.decodedData = i$2.createBuffer(s3, a2 || 0);
      else if (n2) {
        const t4 = yield n2.arrayBuffer();
        this.decodedData = yield i$2.decode(t4, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(e3, i3, n2) {
    return t$2(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(e3, void 0, i3, n2);
      } catch (t3) {
        throw this.emit("error", t3), t3;
      }
    });
  }
  loadBlob(e3, i3, n2) {
    return t$2(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio("", e3, i3, n2);
      } catch (t3) {
        throw this.emit("error", t3), t3;
      }
    });
  }
  zoom(t3) {
    if (!this.decodedData) throw new Error("No audio loaded");
    this.renderer.zoom(t3), this.emit("zoom", t3);
  }
  getDecodedData() {
    return this.decodedData;
  }
  exportPeaks({ channels: t3 = 2, maxLength: e3 = 8e3, precision: i3 = 1e4 } = {}) {
    if (!this.decodedData) throw new Error("The audio has not been decoded yet");
    const n2 = Math.min(t3, this.decodedData.numberOfChannels), s3 = [];
    for (let t4 = 0; t4 < n2; t4++) {
      const n3 = this.decodedData.getChannelData(t4), r2 = [], o2 = n3.length / e3;
      for (let t5 = 0; t5 < e3; t5++) {
        const e4 = n3.slice(Math.floor(t5 * o2), Math.ceil((t5 + 1) * o2));
        let s4 = 0;
        for (let t6 = 0; t6 < e4.length; t6++) {
          const i4 = e4[t6];
          Math.abs(i4) > Math.abs(s4) && (s4 = i4);
        }
        r2.push(Math.round(s4 * i3) / i3);
      }
      s3.push(r2);
    }
    return s3;
  }
  getDuration() {
    let t3 = super.getDuration() || 0;
    return 0 !== t3 && t3 !== 1 / 0 || !this.decodedData || (t3 = this.decodedData.duration), t3;
  }
  toggleInteraction(t3) {
    this.options.interact = t3;
  }
  setTime(t3) {
    this.stopAtPosition = null, super.setTime(t3), this.updateProgress(t3), this.emit("timeupdate", t3);
  }
  seekTo(t3) {
    const e3 = this.getDuration() * t3;
    this.setTime(e3);
  }
  play(e3, i3) {
    const n2 = Object.create(null, { play: { get: () => super.play } });
    return t$2(this, void 0, void 0, function* () {
      null != e3 && this.setTime(e3);
      const t3 = yield n2.play.call(this);
      return null != i3 && (this.media instanceof b ? this.media.stopAt(i3) : this.stopAtPosition = i3), t3;
    });
  }
  playPause() {
    return t$2(this, void 0, void 0, function* () {
      return this.isPlaying() ? this.pause() : this.play();
    });
  }
  stop() {
    this.pause(), this.setTime(0);
  }
  skip(t3) {
    this.setTime(this.getCurrentTime() + t3);
  }
  empty() {
    this.load("", [[0]], 1e-3);
  }
  setMediaElement(t3) {
    this.unsubscribePlayerEvents(), super.setMediaElement(t3), this.initPlayerEvents();
  }
  exportImage() {
    return t$2(this, arguments, void 0, function* (t3 = "image/png", e3 = 1, i3 = "dataURL") {
      return this.renderer.exportImage(t3, e3, i3);
    });
  }
  destroy() {
    var t3;
    this.emit("destroy"), null === (t3 = this.abortController) || void 0 === t3 || t3.abort(), this.plugins.forEach((t4) => t4.destroy()), this.subscriptions.forEach((t4) => t4()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
}
C.BasePlugin = class extends e$2 {
  constructor(t3) {
    super(), this.subscriptions = [], this.isDestroyed = false, this.options = t3;
  }
  onInit() {
  }
  _init(t3) {
    this.isDestroyed && (this.subscriptions = [], this.isDestroyed = false), this.wavesurfer = t3, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach((t3) => t3()), this.subscriptions = [], this.isDestroyed = true, this.wavesurfer = void 0;
  }
}, C.dom = r$1;
let t$1 = class t {
  constructor() {
    this.listeners = {};
  }
  on(t3, i3, e3) {
    if (this.listeners[t3] || (this.listeners[t3] = /* @__PURE__ */ new Set()), null == e3 ? void 0 : e3.once) {
      const e4 = (...s3) => {
        this.un(t3, e4), i3(...s3);
      };
      return this.listeners[t3].add(e4), () => this.un(t3, e4);
    }
    return this.listeners[t3].add(i3), () => this.un(t3, i3);
  }
  un(t3, i3) {
    var e3;
    null === (e3 = this.listeners[t3]) || void 0 === e3 || e3.delete(i3);
  }
  once(t3, i3) {
    return this.on(t3, i3, { once: true });
  }
  unAll() {
    this.listeners = {};
  }
  emit(t3, ...i3) {
    this.listeners[t3] && this.listeners[t3].forEach((t4) => t4(...i3));
  }
};
let i$1 = class i extends t$1 {
  constructor(t3) {
    super(), this.subscriptions = [], this.isDestroyed = false, this.options = t3;
  }
  onInit() {
  }
  _init(t3) {
    this.isDestroyed && (this.subscriptions = [], this.isDestroyed = false), this.wavesurfer = t3, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach((t3) => t3()), this.subscriptions = [], this.isDestroyed = true, this.wavesurfer = void 0;
  }
};
const e$1 = { scale: 0.5, deltaThreshold: 5, exponentialZooming: false, iterations: 20 };
let s$1 = class s extends i$1 {
  constructor(t3) {
    super(t3 || {}), this.wrapper = void 0, this.container = null, this.accumulatedDelta = 0, this.pointerTime = 0, this.oldX = 0, this.endZoom = 0, this.startZoom = 0, this.isPinching = false, this.initialPinchDistance = 0, this.initialZoom = 0, this.onWheel = (t4) => {
      if (this.wavesurfer && this.container && !(Math.abs(t4.deltaX) >= Math.abs(t4.deltaY)) && (t4.preventDefault(), this.accumulatedDelta += -t4.deltaY, 0 === this.startZoom && this.options.exponentialZooming && (this.startZoom = this.wavesurfer.getWrapper().clientWidth / this.wavesurfer.getDuration()), 0 === this.options.deltaThreshold || Math.abs(this.accumulatedDelta) >= this.options.deltaThreshold)) {
        const i3 = this.wavesurfer.getDuration(), e3 = 0 === this.wavesurfer.options.minPxPerSec ? this.wavesurfer.getWrapper().scrollWidth / i3 : this.wavesurfer.options.minPxPerSec, s3 = t4.clientX - this.container.getBoundingClientRect().left, n2 = this.container.clientWidth, o2 = this.wavesurfer.getScroll();
        s3 === this.oldX && 0 !== this.oldX || (this.pointerTime = (o2 + s3) / e3), this.oldX = s3;
        const h2 = this.calculateNewZoom(e3, this.accumulatedDelta), r2 = n2 / h2 * (s3 / n2);
        h2 * i3 < n2 ? (this.wavesurfer.zoom(n2 / i3), this.container.scrollLeft = 0) : (this.wavesurfer.zoom(h2), this.container.scrollLeft = (this.pointerTime - r2) * h2), this.accumulatedDelta = 0;
      }
    }, this.calculateNewZoom = (t4, i3) => {
      let e3;
      if (this.options.exponentialZooming) {
        const s3 = i3 > 0 ? Math.pow(this.endZoom / this.startZoom, 1 / (this.options.iterations - 1)) : Math.pow(this.startZoom / this.endZoom, 1 / (this.options.iterations - 1));
        e3 = Math.max(0, t4 * s3);
      } else e3 = Math.max(0, t4 + i3 * this.options.scale);
      return Math.min(e3, this.options.maxZoom);
    }, this.onTouchStart = (t4) => {
      if (this.wavesurfer && this.container && 2 === t4.touches.length) {
        t4.preventDefault(), this.isPinching = true, this.initialPinchDistance = this.getTouchDistance(t4);
        const i3 = this.wavesurfer.getDuration();
        this.initialZoom = 0 === this.wavesurfer.options.minPxPerSec ? this.wavesurfer.getWrapper().scrollWidth / i3 : this.wavesurfer.options.minPxPerSec;
        const e3 = this.getTouchCenterX(t4) - this.container.getBoundingClientRect().left, s3 = this.wavesurfer.getScroll();
        this.pointerTime = (s3 + e3) / this.initialZoom, this.oldX = e3;
      }
    }, this.onTouchMove = (t4) => {
      if (!this.isPinching || 2 !== t4.touches.length || !this.wavesurfer || !this.container) return;
      t4.preventDefault();
      const i3 = this.getTouchDistance(t4) / this.initialPinchDistance;
      let e3 = this.initialZoom * i3;
      e3 = Math.min(e3, this.options.maxZoom);
      const s3 = this.wavesurfer.getDuration(), n2 = this.container.clientWidth, o2 = n2 / s3;
      e3 < o2 && (e3 = o2);
      const h2 = n2 / e3 * (this.oldX / n2);
      e3 === o2 ? (this.wavesurfer.zoom(o2), this.container.scrollLeft = 0) : (this.wavesurfer.zoom(e3), this.container.scrollLeft = (this.pointerTime - h2) * e3);
    }, this.onTouchEnd = (t4) => {
      this.isPinching && t4.touches.length < 2 && (this.isPinching = false, this.initialPinchDistance = 0, this.initialZoom = 0);
    }, this.options = Object.assign({}, e$1, t3);
  }
  static create(t3) {
    return new s(t3);
  }
  onInit() {
    var t3;
    this.wrapper = null === (t3 = this.wavesurfer) || void 0 === t3 ? void 0 : t3.getWrapper(), this.wrapper && (this.container = this.wrapper.parentElement, this.container.addEventListener("wheel", this.onWheel), this.container.addEventListener("touchstart", this.onTouchStart, { passive: false, capture: true }), this.container.addEventListener("touchmove", this.onTouchMove, { passive: false, capture: true }), this.container.addEventListener("touchend", this.onTouchEnd, { passive: false, capture: true }), this.container.addEventListener("touchcancel", this.onTouchEnd, { passive: false, capture: true }), void 0 === this.options.maxZoom && (this.options.maxZoom = this.container.clientWidth), this.endZoom = this.options.maxZoom);
  }
  getTouchDistance(t3) {
    const i3 = t3.touches[0], e3 = t3.touches[1];
    return Math.sqrt(Math.pow(e3.clientX - i3.clientX, 2) + Math.pow(e3.clientY - i3.clientY, 2));
  }
  getTouchCenterX(t3) {
    const i3 = t3.touches[0], e3 = t3.touches[1];
    return (i3.clientX + e3.clientX) / 2;
  }
  destroy() {
    this.container && (this.container.removeEventListener("wheel", this.onWheel), this.container.removeEventListener("touchstart", this.onTouchStart), this.container.removeEventListener("touchmove", this.onTouchMove), this.container.removeEventListener("touchend", this.onTouchEnd), this.container.removeEventListener("touchcancel", this.onTouchEnd)), super.destroy();
  }
};
class t2 {
  constructor() {
    this.listeners = {};
  }
  on(t3, e3, i3) {
    if (this.listeners[t3] || (this.listeners[t3] = /* @__PURE__ */ new Set()), null == i3 ? void 0 : i3.once) {
      const i4 = (...n2) => {
        this.un(t3, i4), e3(...n2);
      };
      return this.listeners[t3].add(i4), () => this.un(t3, i4);
    }
    return this.listeners[t3].add(e3), () => this.un(t3, e3);
  }
  un(t3, e3) {
    var i3;
    null === (i3 = this.listeners[t3]) || void 0 === i3 || i3.delete(e3);
  }
  once(t3, e3) {
    return this.on(t3, e3, { once: true });
  }
  unAll() {
    this.listeners = {};
  }
  emit(t3, ...e3) {
    this.listeners[t3] && this.listeners[t3].forEach((t4) => t4(...e3));
  }
}
class e2 extends t2 {
  constructor(t3) {
    super(), this.subscriptions = [], this.isDestroyed = false, this.options = t3;
  }
  onInit() {
  }
  _init(t3) {
    this.isDestroyed && (this.subscriptions = [], this.isDestroyed = false), this.wavesurfer = t3, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach((t3) => t3()), this.subscriptions = [], this.isDestroyed = true, this.wavesurfer = void 0;
  }
}
function i2(t3, e3, i3, n2, s3 = 3, r2 = 0, o2 = 100) {
  if (!t3) return () => {
  };
  const h2 = /* @__PURE__ */ new Map(), a2 = matchMedia("(pointer: coarse)").matches;
  let l2 = () => {
  };
  const d2 = (d3) => {
    if (d3.button !== r2) return;
    if (h2.set(d3.pointerId, d3), h2.size > 1) return;
    let c2 = d3.clientX, u2 = d3.clientY, v2 = false;
    const g2 = Date.now(), p2 = (n3) => {
      if (n3.defaultPrevented || h2.size > 1) return;
      if (a2 && Date.now() - g2 < o2) return;
      const r3 = n3.clientX, l3 = n3.clientY, d4 = r3 - c2, p3 = l3 - u2;
      if (v2 || Math.abs(d4) > s3 || Math.abs(p3) > s3) {
        n3.preventDefault(), n3.stopPropagation();
        const s4 = t3.getBoundingClientRect(), { left: o3, top: h3 } = s4;
        v2 || (null == i3 || i3(c2 - o3, u2 - h3), v2 = true), e3(d4, p3, r3 - o3, l3 - h3), c2 = r3, u2 = l3;
      }
    }, m2 = (e4) => {
      if (h2.delete(e4.pointerId), v2) {
        const i4 = e4.clientX, s4 = e4.clientY, r3 = t3.getBoundingClientRect(), { left: o3, top: h3 } = r3;
        null == n2 || n2(i4 - o3, s4 - h3);
      }
      l2();
    }, f2 = (t4) => {
      h2.delete(t4.pointerId), t4.relatedTarget && t4.relatedTarget !== document.documentElement || m2(t4);
    }, b2 = (t4) => {
      v2 && (t4.stopPropagation(), t4.preventDefault());
    }, E = (t4) => {
      t4.defaultPrevented || h2.size > 1 || v2 && t4.preventDefault();
    };
    document.addEventListener("pointermove", p2), document.addEventListener("pointerup", m2), document.addEventListener("pointerout", f2), document.addEventListener("pointercancel", f2), document.addEventListener("touchmove", E, { passive: false }), document.addEventListener("click", b2, { capture: true }), l2 = () => {
      document.removeEventListener("pointermove", p2), document.removeEventListener("pointerup", m2), document.removeEventListener("pointerout", f2), document.removeEventListener("pointercancel", f2), document.removeEventListener("touchmove", E), setTimeout(() => {
        document.removeEventListener("click", b2, { capture: true });
      }, 10);
    };
  };
  return t3.addEventListener("pointerdown", d2), () => {
    l2(), t3.removeEventListener("pointerdown", d2), h2.clear();
  };
}
function n(t3, e3) {
  const i3 = e3.xmlns ? document.createElementNS(e3.xmlns, t3) : document.createElement(t3);
  for (const [t4, s3] of Object.entries(e3)) if ("children" === t4 && s3) for (const [t5, e4] of Object.entries(s3)) e4 instanceof Node ? i3.appendChild(e4) : "string" == typeof e4 ? i3.appendChild(document.createTextNode(e4)) : i3.appendChild(n(t5, e4));
  else "style" === t4 ? Object.assign(i3.style, s3) : "textContent" === t4 ? i3.textContent = s3 : i3.setAttribute(t4, s3.toString());
  return i3;
}
function s2(t3, e3, i3) {
  const s3 = n(t3, e3 || {});
  return null == i3 || i3.appendChild(s3), s3;
}
class r extends t2 {
  constructor(t3, e3, i3 = 0) {
    var n2, s3, r2, o2, h2, a2, l2, d2, c2, u2;
    super(), this.totalDuration = e3, this.numberOfChannels = i3, this.element = null, this.minLength = 0, this.maxLength = 1 / 0, this.contentEditable = false, this.subscriptions = [], this.updatingSide = void 0, this.isRemoved = false, this.subscriptions = [], this.id = t3.id || `region-${Math.random().toString(32).slice(2)}`, this.start = this.clampPosition(t3.start), this.end = this.clampPosition(null !== (n2 = t3.end) && void 0 !== n2 ? n2 : t3.start), this.drag = null === (s3 = t3.drag) || void 0 === s3 || s3, this.resize = null === (r2 = t3.resize) || void 0 === r2 || r2, this.resizeStart = null === (o2 = t3.resizeStart) || void 0 === o2 || o2, this.resizeEnd = null === (h2 = t3.resizeEnd) || void 0 === h2 || h2, this.color = null !== (a2 = t3.color) && void 0 !== a2 ? a2 : "rgba(0, 0, 0, 0.1)", this.minLength = null !== (l2 = t3.minLength) && void 0 !== l2 ? l2 : this.minLength, this.maxLength = null !== (d2 = t3.maxLength) && void 0 !== d2 ? d2 : this.maxLength, this.channelIdx = null !== (c2 = t3.channelIdx) && void 0 !== c2 ? c2 : -1, this.contentEditable = null !== (u2 = t3.contentEditable) && void 0 !== u2 ? u2 : this.contentEditable, this.element = this.initElement(), this.setContent(t3.content), this.setPart(), this.renderPosition(), this.initMouseEvents();
  }
  clampPosition(t3) {
    return Math.max(0, Math.min(this.totalDuration, t3));
  }
  setPart() {
    var t3;
    const e3 = this.start === this.end;
    null === (t3 = this.element) || void 0 === t3 || t3.setAttribute("part", `${e3 ? "marker" : "region"} ${this.id}`);
  }
  addResizeHandles(t3) {
    const e3 = { position: "absolute", zIndex: "2", width: "6px", height: "100%", top: "0", cursor: "ew-resize", wordBreak: "keep-all" }, n2 = s2("div", { part: "region-handle region-handle-left", style: Object.assign(Object.assign({}, e3), { left: "0", borderLeft: "2px solid rgba(0, 0, 0, 0.5)", borderRadius: "2px 0 0 2px" }) }, t3), r2 = s2("div", { part: "region-handle region-handle-right", style: Object.assign(Object.assign({}, e3), { right: "0", borderRight: "2px solid rgba(0, 0, 0, 0.5)", borderRadius: "0 2px 2px 0" }) }, t3);
    this.subscriptions.push(i2(n2, (t4) => this.onResize(t4, "start"), () => null, () => this.onEndResizing("start"), 1), i2(r2, (t4) => this.onResize(t4, "end"), () => null, () => this.onEndResizing("end"), 1));
  }
  removeResizeHandles(t3) {
    const e3 = t3.querySelector('[part*="region-handle-left"]'), i3 = t3.querySelector('[part*="region-handle-right"]');
    e3 && t3.removeChild(e3), i3 && t3.removeChild(i3);
  }
  initElement() {
    if (this.isRemoved) return null;
    const t3 = this.start === this.end;
    let e3 = 0, i3 = 100;
    this.channelIdx >= 0 && this.numberOfChannels > 0 && this.channelIdx < this.numberOfChannels && (i3 = 100 / this.numberOfChannels, e3 = i3 * this.channelIdx);
    const n2 = s2("div", { style: { position: "absolute", top: `${e3}%`, height: `${i3}%`, backgroundColor: t3 ? "none" : this.color, borderLeft: t3 ? "2px solid " + this.color : "none", borderRadius: "2px", boxSizing: "border-box", transition: "background-color 0.2s ease", cursor: this.drag ? "grab" : "default", pointerEvents: "all" } });
    return !t3 && this.resize && this.addResizeHandles(n2), n2;
  }
  renderPosition() {
    if (!this.element) return;
    const t3 = this.start / this.totalDuration, e3 = (this.totalDuration - this.end) / this.totalDuration;
    this.element.style.left = 100 * t3 + "%", this.element.style.right = 100 * e3 + "%";
  }
  toggleCursor(t3) {
    var e3;
    this.drag && (null === (e3 = this.element) || void 0 === e3 ? void 0 : e3.style) && (this.element.style.cursor = t3 ? "grabbing" : "grab");
  }
  initMouseEvents() {
    const { element: t3 } = this;
    t3 && (t3.addEventListener("click", (t4) => this.emit("click", t4)), t3.addEventListener("mouseenter", (t4) => this.emit("over", t4)), t3.addEventListener("mouseleave", (t4) => this.emit("leave", t4)), t3.addEventListener("dblclick", (t4) => this.emit("dblclick", t4)), t3.addEventListener("pointerdown", () => this.toggleCursor(true)), t3.addEventListener("pointerup", () => this.toggleCursor(false)), this.subscriptions.push(i2(t3, (t4) => this.onMove(t4), () => this.toggleCursor(true), () => {
      this.toggleCursor(false), this.drag && this.emit("update-end");
    })), this.contentEditable && this.content && (this.contentClickListener = (t4) => this.onContentClick(t4), this.contentBlurListener = () => this.onContentBlur(), this.content.addEventListener("click", this.contentClickListener), this.content.addEventListener("blur", this.contentBlurListener)));
  }
  _onUpdate(t3, e3, i3) {
    var n2;
    if (!(null === (n2 = this.element) || void 0 === n2 ? void 0 : n2.parentElement)) return;
    const { width: s3 } = this.element.parentElement.getBoundingClientRect(), r2 = t3 / s3 * this.totalDuration;
    let o2 = e3 && "start" !== e3 ? this.start : this.start + r2, h2 = e3 && "end" !== e3 ? this.end : this.end + r2;
    const a2 = void 0 !== i3;
    a2 && this.updatingSide && this.updatingSide !== e3 && ("start" === this.updatingSide ? o2 = i3 : h2 = i3), o2 = Math.max(0, o2), h2 = Math.min(this.totalDuration, h2);
    const l2 = h2 - o2;
    this.updatingSide = e3;
    const d2 = l2 >= this.minLength && l2 <= this.maxLength;
    o2 <= h2 && (d2 || a2) && (this.start = o2, this.end = h2, this.renderPosition(), this.emit("update", e3));
  }
  onMove(t3) {
    this.drag && this._onUpdate(t3);
  }
  onResize(t3, e3) {
    this.resize && (this.resizeStart || "start" !== e3) && (this.resizeEnd || "end" !== e3) && this._onUpdate(t3, e3);
  }
  onEndResizing(t3) {
    this.resize && (this.emit("update-end", t3), this.updatingSide = void 0);
  }
  onContentClick(t3) {
    t3.stopPropagation();
    t3.target.focus(), this.emit("click", t3);
  }
  onContentBlur() {
    this.emit("update-end");
  }
  _setTotalDuration(t3) {
    this.totalDuration = t3, this.renderPosition();
  }
  play(t3) {
    this.emit("play", t3 && this.end !== this.start ? this.end : void 0);
  }
  getContent(t3 = false) {
    var e3;
    return t3 ? this.content || void 0 : this.element instanceof HTMLElement ? (null === (e3 = this.content) || void 0 === e3 ? void 0 : e3.innerHTML) || void 0 : "";
  }
  setContent(t3) {
    var e3;
    if (this.element) if (this.content && this.contentEditable && (this.contentClickListener && this.content.removeEventListener("click", this.contentClickListener), this.contentBlurListener && this.content.removeEventListener("blur", this.contentBlurListener)), null === (e3 = this.content) || void 0 === e3 || e3.remove(), t3) {
      if ("string" == typeof t3) {
        const e4 = this.start === this.end;
        this.content = s2("div", { style: { padding: `0.2em ${e4 ? 0.2 : 0.4}em`, display: "inline-block" }, textContent: t3 });
      } else this.content = t3;
      this.contentEditable && (this.content.contentEditable = "true", this.contentClickListener = (t4) => this.onContentClick(t4), this.contentBlurListener = () => this.onContentBlur(), this.content.addEventListener("click", this.contentClickListener), this.content.addEventListener("blur", this.contentBlurListener)), this.content.setAttribute("part", "region-content"), this.element.appendChild(this.content), this.emit("content-changed");
    } else this.content = void 0;
  }
  setOptions(t3) {
    var e3, i3;
    if (this.element) {
      if (t3.color && (this.color = t3.color, this.element.style.backgroundColor = this.color), void 0 !== t3.drag && (this.drag = t3.drag, this.element.style.cursor = this.drag ? "grab" : "default"), void 0 !== t3.start || void 0 !== t3.end) {
        const n2 = this.start === this.end;
        this.start = this.clampPosition(null !== (e3 = t3.start) && void 0 !== e3 ? e3 : this.start), this.end = this.clampPosition(null !== (i3 = t3.end) && void 0 !== i3 ? i3 : n2 ? this.start : this.end), this.renderPosition(), this.setPart();
      }
      if (t3.content && this.setContent(t3.content), t3.id && (this.id = t3.id, this.setPart()), void 0 !== t3.resize && t3.resize !== this.resize) {
        const e4 = this.start === this.end;
        this.resize = t3.resize, this.resize && !e4 ? this.addResizeHandles(this.element) : this.removeResizeHandles(this.element);
      }
      void 0 !== t3.resizeStart && (this.resizeStart = t3.resizeStart), void 0 !== t3.resizeEnd && (this.resizeEnd = t3.resizeEnd);
    }
  }
  remove() {
    this.isRemoved = true, this.emit("remove"), this.subscriptions.forEach((t3) => t3()), this.element && (this.element.remove(), this.element = null);
  }
}
class o extends e2 {
  constructor(t3) {
    super(t3), this.regions = [], this.regionsContainer = this.initRegionsContainer();
  }
  static create(t3) {
    return new o(t3);
  }
  onInit() {
    if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
    this.wavesurfer.getWrapper().appendChild(this.regionsContainer), this.subscriptions.push(this.wavesurfer.on("ready", (t4) => {
      this.regions.forEach((e3) => e3._setTotalDuration(t4));
    }));
    let t3 = [];
    this.subscriptions.push(this.wavesurfer.on("timeupdate", (e3) => {
      const i3 = this.regions.filter((t4) => t4.start <= e3 && (t4.end === t4.start ? t4.start + 0.05 : t4.end) >= e3);
      i3.forEach((e4) => {
        t3.includes(e4) || this.emit("region-in", e4);
      }), t3.forEach((t4) => {
        i3.includes(t4) || this.emit("region-out", t4);
      }), t3 = i3;
    }));
  }
  initRegionsContainer() {
    return s2("div", { part: "regions-container", style: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "5", pointerEvents: "none" } });
  }
  getRegions() {
    return this.regions;
  }
  avoidOverlapping(t3) {
    t3.content && setTimeout(() => {
      const e3 = t3.content, i3 = e3.getBoundingClientRect(), n2 = this.regions.map((e4) => {
        if (e4 === t3 || !e4.content) return 0;
        const n3 = e4.content.getBoundingClientRect();
        return i3.left < n3.left + n3.width && n3.left < i3.left + i3.width ? n3.height : 0;
      }).reduce((t4, e4) => t4 + e4, 0);
      e3.style.marginTop = `${n2}px`;
    }, 10);
  }
  adjustScroll(t3) {
    var e3, i3;
    if (!t3.element) return;
    const n2 = null === (i3 = null === (e3 = this.wavesurfer) || void 0 === e3 ? void 0 : e3.getWrapper()) || void 0 === i3 ? void 0 : i3.parentElement;
    if (!n2) return;
    const { clientWidth: s3, scrollWidth: r2 } = n2;
    if (r2 <= s3) return;
    const o2 = n2.getBoundingClientRect(), h2 = t3.element.getBoundingClientRect(), a2 = h2.left - o2.left, l2 = h2.right - o2.left;
    a2 < 0 ? n2.scrollLeft += a2 : l2 > s3 && (n2.scrollLeft += l2 - s3);
  }
  virtualAppend(t3, e3, i3) {
    const n2 = () => {
      if (!this.wavesurfer) return;
      const n3 = this.wavesurfer.getWidth(), s3 = this.wavesurfer.getScroll(), r2 = e3.clientWidth, o2 = this.wavesurfer.getDuration(), h2 = Math.round(t3.start / o2 * r2), a2 = h2 + (Math.round((t3.end - t3.start) / o2 * r2) || 1) > s3 && h2 < s3 + n3;
      a2 && !i3.parentElement ? e3.appendChild(i3) : !a2 && i3.parentElement && i3.remove();
    };
    setTimeout(() => {
      if (!this.wavesurfer || !t3.element) return;
      n2();
      const e4 = this.wavesurfer.on("scroll", n2), i4 = this.wavesurfer.on("zoom", n2), s3 = this.wavesurfer.on("resize", n2);
      this.subscriptions.push(e4, i4, s3), t3.once("remove", () => {
        e4(), i4(), s3();
      });
    }, 0);
  }
  saveRegion(t3) {
    if (!t3.element) return;
    this.virtualAppend(t3, this.regionsContainer, t3.element), this.avoidOverlapping(t3), this.regions.push(t3);
    const e3 = [t3.on("update", (e4) => {
      e4 || this.adjustScroll(t3), this.emit("region-update", t3, e4);
    }), t3.on("update-end", (e4) => {
      this.avoidOverlapping(t3), this.emit("region-updated", t3, e4);
    }), t3.on("play", (e4) => {
      var i3;
      null === (i3 = this.wavesurfer) || void 0 === i3 || i3.play(t3.start, e4);
    }), t3.on("click", (e4) => {
      this.emit("region-clicked", t3, e4);
    }), t3.on("dblclick", (e4) => {
      this.emit("region-double-clicked", t3, e4);
    }), t3.on("content-changed", () => {
      this.emit("region-content-changed", t3);
    }), t3.once("remove", () => {
      e3.forEach((t4) => t4()), this.regions = this.regions.filter((e4) => e4 !== t3), this.emit("region-removed", t3);
    })];
    this.subscriptions.push(...e3), this.emit("region-created", t3);
  }
  addRegion(t3) {
    var e3, i3;
    if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
    const n2 = this.wavesurfer.getDuration(), s3 = null === (i3 = null === (e3 = this.wavesurfer) || void 0 === e3 ? void 0 : e3.getDecodedData()) || void 0 === i3 ? void 0 : i3.numberOfChannels, o2 = new r(t3, n2, s3);
    return this.emit("region-initialized", o2), n2 ? this.saveRegion(o2) : this.subscriptions.push(this.wavesurfer.once("ready", (t4) => {
      o2._setTotalDuration(t4), this.saveRegion(o2);
    })), o2;
  }
  enableDragSelection(t3, e3 = 3) {
    var n2;
    const s3 = null === (n2 = this.wavesurfer) || void 0 === n2 ? void 0 : n2.getWrapper();
    if (!(s3 && s3 instanceof HTMLElement)) return () => {
    };
    let o2 = null, h2 = 0, a2 = 0;
    return i2(s3, (t4, e4, i3) => {
      o2 && o2._onUpdate(t4, i3 > h2 ? "end" : "start", a2);
    }, (e4) => {
      var i3, n3;
      if (h2 = e4, !this.wavesurfer) return;
      const s4 = this.wavesurfer.getDuration(), l2 = null === (n3 = null === (i3 = this.wavesurfer) || void 0 === i3 ? void 0 : i3.getDecodedData()) || void 0 === n3 ? void 0 : n3.numberOfChannels, { width: d2 } = this.wavesurfer.getWrapper().getBoundingClientRect();
      a2 = h2 / d2 * s4;
      const c2 = e4 / d2 * s4, u2 = (e4 + 5) / d2 * s4;
      o2 = new r(Object.assign(Object.assign({}, t3), { start: c2, end: u2 }), s4, l2), this.emit("region-initialized", o2), o2.element && this.regionsContainer.appendChild(o2.element);
    }, () => {
      o2 && (this.saveRegion(o2), o2.updatingSide = void 0, o2 = null);
    }, e3);
  }
  clearRegions() {
    this.regions.slice().forEach((t3) => t3.remove()), this.regions = [];
  }
  destroy() {
    this.clearRegions(), super.destroy(), this.regionsContainer.remove();
  }
}
function useWaveform(videoInstance) {
  const notice = useNotification();
  const ws = ref(null);
  const waveformLoading = ref(false);
  const waveformVisible = useStorage("cut-waveform-visible", true);
  let currentVideoFile = null;
  let regionsPlugin = null;
  let isSyncing = false;
  let videoTimeUpdateHandler = null;
  let videoPlayHandler = null;
  let videoPauseHandler = null;
  let waveformInteractionHandler = null;
  let segmentEventHandler = null;
  const setupSyncWithVideo = () => {
    if (!ws.value || !videoInstance.value) return;
    videoTimeUpdateHandler = () => {
      if (videoInstance.value && ws.value) {
        ws.value.setTime(videoInstance.value.currentTime);
      }
    };
    videoInstance.value.on("video:timeupdate", videoTimeUpdateHandler);
    waveformInteractionHandler = (time) => {
      if (videoInstance.value) {
        videoInstance.value.currentTime = time;
      }
    };
    ws.value.on("interaction", waveformInteractionHandler);
  };
  const cleanupSyncWithVideo = () => {
    if (videoInstance.value && videoTimeUpdateHandler) {
      videoInstance.value.off("video:timeupdate", videoTimeUpdateHandler);
      videoTimeUpdateHandler = null;
    }
    if (videoInstance.value && videoPlayHandler) ;
    if (videoInstance.value && videoPauseHandler) ;
    if (ws.value && waveformInteractionHandler) {
      ws.value.un("interaction", waveformInteractionHandler);
      ws.value.un("seeking", waveformInteractionHandler);
      waveformInteractionHandler = null;
    }
  };
  const initWaveform = async (rawVideoFile) => {
    currentVideoFile = rawVideoFile;
    if (ws.value) return;
    if (!rawVideoFile) return;
    if (!videoInstance.value) return;
    if (waveformLoading.value) return;
    if (!waveformVisible.value) return;
    waveformLoading.value = true;
    let peaks = [];
    try {
      const res = await task.extractPeaks(rawVideoFile);
      peaks = res.output.data;
    } catch (error) {
      waveformLoading.value = false;
      console.error("Error extracting audio for waveform:", error);
      return { error: "提取音频失败，无法生成波形图。" };
    }
    const regions = o.create();
    regionsPlugin = regions;
    ws.value = C.create({
      container: "#waveform",
      waveColor: "#4F4A85",
      progressColor: "#978fae",
      height: 64,
      normalize: false,
      dragToSeek: true,
      hideScrollbar: false,
      // media: videoInstance.value!.video,
      // url: output.file,
      peaks: [peaks],
      plugins: [regions],
      duration: videoInstance.value.duration
      // minPxPerSec: 5,
    });
    setupSyncWithVideo();
    ws.value.registerPlugin(
      s$1.create({
        exponentialZooming: true
      })
    );
    const segmentStore = useSegmentStore();
    const { cuts } = storeToRefs(segmentStore);
    ws.value.once("decode", () => {
      waveformLoading.value = false;
      for (const cut of cuts.value) {
        regions.addRegion({
          drag: false,
          resize: true,
          minLength: 1,
          start: cut.start,
          end: cut.end,
          color: generateDistinctColor(cut.index),
          content: cut.name,
          id: cut.id
        });
      }
      regions.on("region-updated", (region) => {
        if (isSyncing) return;
        isSyncing = true;
        segmentStore.updateSegment(region.id, {
          start: region.start,
          end: region.end
        });
        isSyncing = false;
      });
      regions.on("region-removed", (region) => {
        if (isSyncing) return;
        isSyncing = true;
        segmentStore.removeSegment(region.id);
        isSyncing = false;
      });
      regions.on("region-double-clicked", (region) => {
        if (videoInstance.value) {
          videoInstance.value.currentTime = region.start;
          segmentStore.selectCut(region.id);
        }
      });
      segmentEventHandler = (data) => {
        if (isSyncing || !regionsPlugin) return;
        isSyncing = true;
        try {
          if (data.type === "add" && data.segment) {
            regionsPlugin.addRegion({
              drag: false,
              resize: true,
              minLength: 1,
              start: data.segment.start,
              end: data.segment.end,
              color: generateDistinctColor(data.segment.index),
              content: data.segment.name,
              id: data.segment.id
            });
          } else if (data.type === "remove" && data.id) {
            const region = regionsPlugin.getRegions().find((r2) => r2.id === data.id);
            if (region) {
              region.remove();
            }
          } else if (data.type === "update" && data.segment) {
            const region = regionsPlugin.getRegions().find((r2) => r2.id === data.segment.id);
            if (region) {
              if (region.start !== data.segment.start || region.end !== data.segment.end) {
                region.setOptions({ start: data.segment.start, end: data.segment.end });
              }
              if (region.content?.textContent !== data.segment.name) {
                region.setOptions({ content: data.segment.name });
              }
              if (region.color !== generateDistinctColor(data.segment.index, data.segment.checked)) {
                region.setOptions({
                  color: generateDistinctColor(data.segment.index, data.segment.checked)
                });
              }
            }
          } else if (data.type === "clear") {
            regionsPlugin.clearRegions();
          }
        } finally {
          isSyncing = false;
        }
      };
      segmentStore.on(segmentEventHandler);
    });
    return { error: null };
  };
  const destroyWaveform = () => {
    cleanupSyncWithVideo();
    if (segmentEventHandler) {
      const segmentStore = useSegmentStore();
      segmentStore.off(segmentEventHandler);
      segmentEventHandler = null;
    }
    regionsPlugin = null;
    if (ws.value) {
      ws.value.destroy();
      ws.value = null;
      waveformLoading.value = false;
    }
  };
  watch(waveformVisible, async (visible) => {
    if (visible && currentVideoFile) {
      const result = await initWaveform(currentVideoFile);
      if (result?.error) {
        notice.info({
          title: result.error,
          duration: 2e3
        });
        waveformVisible.value = false;
      }
    }
  });
  return {
    ws,
    waveformLoading,
    waveformVisible,
    initWaveform,
    destroyWaveform
  };
}
function useKeyboardShortcuts(handlers, videoInstance) {
  const registerShortcuts = () => {
    hotkeys("ctrl+z", handlers.onUndo);
    hotkeys("ctrl+shift+z", handlers.onRedo);
    hotkeys("ctrl+s", (event) => {
      event.preventDefault();
      handlers.onSave();
    });
    hotkeys("ctrl+shift+s", (event) => {
      event.preventDefault();
      handlers.onSaveAs();
    });
    hotkeys("ctrl+enter", handlers.onExport);
    hotkeys("space", (event) => {
      if (event?.target?.tagName === "BUTTON") return;
      if (event?.target?.className.includes("artplayer")) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();
      handlers.onTogglePlay();
    });
    hotkeys("ctrl+left", () => {
      if (!videoInstance.value) return;
      videoInstance.value.backward = 1;
      handlers.onBackward?.(1);
    });
    hotkeys("ctrl+right", () => {
      if (!videoInstance.value) return;
      videoInstance.value.forward = 1;
      handlers.onForward?.(1);
    });
  };
  const unregisterShortcuts = () => {
    hotkeys.unbind();
  };
  onActivated(() => {
    registerShortcuts();
  });
  onDeactivated(() => {
    unregisterShortcuts();
  });
  onUnmounted(() => {
    unregisterShortcuts();
  });
  return {
    registerShortcuts,
    unregisterShortcuts
  };
}
const _hoisted_1 = {
  id: "cut-tool",
  class: "container"
};
const _hoisted_2 = { class: "upper-section" };
const _hoisted_3 = { class: "segment-section" };
const _hoisted_4 = { class: "btns page-header" };
const _hoisted_5 = { class: "segment-list-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "videoCut"
  },
  __name: "Index",
  setup(__props) {
    const clientOptions = useStorage("cut-hotprogress", {
      showSetting: true,
      sampling: 10,
      height: 50,
      fillColor: "#f9f5f3",
      color: "#333333"
    });
    const hotProgressVisible = useStorage("cut-hotprogress-visible", true);
    const danmaSearchMask = useStorage("cut-danma-search-mask", true);
    const showVideoTime = useStorage("cut-show-video-time", true);
    const waveformAnalyzerConfig = useStorage("cut-waveform-analyzer-config-new", {
      energyPercentile: 50,
      // 能量百分位阈值 (0-100)
      minSegmentDuration: 25,
      // 最小片段时长（秒）
      maxGapDuration: 15,
      // 最大间隔时长（秒）
      smoothWindowSize: 4
      // 平滑窗口大小（秒）
    });
    const waveformAnalyzerDialogVisible = ref(false);
    const notice = useNotification();
    const isWeb = ref(window.isWeb);
    const files = ref({
      videoPath: null,
      danmuPath: null,
      originDanmuPath: null,
      originVideoPath: null
    });
    const openSubWindow = async () => {
      if (isWeb.value) {
        notice.warning({
          title: "网页版不支持打开新窗口~",
          duration: 2e3
        });
        return;
      }
      await window.api.common.createSubWindow();
    };
    const {
      handleProjectAction,
      projectMenuOptions,
      saveProject,
      saveProjectAs,
      loadProjectFile,
      resetProjectState,
      readProjectFile
    } = useProjectManager(files);
    const { appConfig } = storeToRefs(useAppConfig());
    const segmentStore = useSegmentStore();
    const { undo, redo, clear: clearCuts, getCombinedLyrics } = useSegmentStore();
    const { selectedCuts } = storeToRefs(useSegmentStore());
    const videoVCutOptions = toReactive(
      computed({
        get: () => appConfig.value.tool.videoCut,
        set: (value) => {
          appConfig.value.tool.videoCut = value;
        }
      })
    );
    const projectMenuItems = computed(() => {
      const list = [
        { label: "导入项目文件", key: "importProject" },
        { label: "加载弹幕", key: "importDanmu" },
        ...projectMenuOptions.value,
        { label: "关闭", key: "closeVideo", disabled: !files.value.videoPath }
      ];
      if (!isWeb.value) {
        list.push({
          label: "分割线",
          key: "divider1",
          type: "divider"
        });
        list.push({
          label: "打开独立窗口",
          key: "openSubWindow"
        });
      }
      list.push({
        label: "分割线",
        key: "divider2",
        type: "divider"
      });
      list.push({
        label: "快速歌切",
        key: "openQuickSongCut"
      });
      return list;
    });
    const confirm = useConfirm();
    const {
      videoInstance,
      videoRef: videoPlayerRef,
      loadVideo: loadVideoCore,
      togglePlay,
      handleVideoReady
    } = useVideoPlayer(isWeb);
    const { duration: videoDuration } = storeToRefs(useSegmentStore());
    const {
      danmaList,
      xmlConvertVisible,
      convertDanmuLoading,
      loadDanmuFile,
      confirmAndConvertDanmu: confirmConvert,
      closeConvertDialog,
      generateDanmakuData
    } = useDanmu(videoInstance, videoPlayerRef, videoDuration, showVideoTime);
    const { waveformLoading, waveformVisible, initWaveform, destroyWaveform } = useWaveform(videoInstance);
    provide("videoInstance", videoInstance);
    const videoRef = ref(null);
    watch(
      videoRef,
      (newVal) => {
        if (newVal) {
          videoPlayerRef.value = newVal.videoRef;
        }
      },
      { immediate: true }
    );
    const handleDroppedFiles = (droppedFiles) => {
      if (!droppedFiles.length) return;
      const file = droppedFiles[0];
      const { path, ext } = file;
      if (ext === ".llc") {
        loadProject(path);
      } else {
        loadProject(path);
      }
    };
    const handleDanmuFile = async (filePath) => {
      if (filePath.endsWith(".xml")) {
        if (!files.value.videoPath) {
          notice.error({
            title: "请先加载视频文件",
            duration: 2e3
          });
          return;
        }
      } else if (filePath.endsWith(".ass")) {
        if (!files.value.videoPath) {
          notice.error({
            title: "请先加载视频文件",
            duration: 2e3
          });
          return;
        }
        files.value.originDanmuPath = filePath;
        files.value.danmuPath = filePath;
      } else {
        throw new Error("不支持的弹幕文件格式");
      }
      await loadDanmuFile(filePath);
    };
    const selectLoadFile = async (extensions) => {
      const selectedFiles = await showFileDialog({
        extensions
      });
      if (!selectedFiles || selectedFiles.length === 0) return;
      const filePath = selectedFiles[0];
      if (filePath.endsWith(".xml")) {
        await handleDanmuFile(filePath);
      } else if (filePath.endsWith(".ass")) {
        await handleDanmuFile(filePath);
      } else if (filePath.endsWith(".llc")) {
        await loadProject(filePath);
      } else {
        await loadProject(filePath);
      }
    };
    const loadProject = async (filePath) => {
      let videoPath;
      let projectFile;
      if (filePath.endsWith(".llc")) {
        projectFile = filePath;
        const projectData = await readProjectFile(filePath);
        const mediaFileName = projectData.mediaFileName;
        const possibleVideoPath = window.path.join(window.path.dirname(filePath), mediaFileName);
        const exists = await common.fileExists(possibleVideoPath);
        if (exists) {
          videoPath = possibleVideoPath;
        } else {
          alert("项目关联的视频文件不存在，无法加载");
          return;
        }
      } else {
        videoPath = filePath;
        const { dir, name } = window.path.parse(filePath);
        const possibleProjectFile = window.path.join(dir, `${name}-proj.llc`);
        const exists = await common.fileExists(possibleProjectFile);
        if (exists) {
          projectFile = possibleProjectFile;
        }
      }
      loadVideo(videoPath);
      if (projectFile) {
        await loadProjectFile(projectFile);
        const combinedLyrics = getCombinedLyrics();
        videoInstance?.value?.artplayerPluginSubtitle?.setContent(combinedLyrics, "srt");
      }
    };
    const loadVideo = async (path) => {
      files.value.originVideoPath = path;
      destroyWaveform();
      const videoUrl = await loadVideoCore(path);
      files.value.videoPath = videoUrl;
      autoLoadDanmuFile(path);
    };
    const closeAllResources = async () => {
      const [status] = await confirm.warning({
        content: "是否确认关闭？相关数据将被清理，且无法恢复"
      });
      if (!status) return;
      await loadVideo("");
      videoPlayerRef.value?.clearFiles();
      files.value.danmuPath = null;
      files.value.originDanmuPath = null;
      resetProjectState();
      clearCuts();
      if (videoInstance.value?.artplayerTimestamp) {
        videoInstance.value.artplayerTimestamp.setTimestamp(0);
      }
    };
    const handleProjectMenuClick = async (key2) => {
      if (!key2) {
        selectLoadFile([...supportedVideoExtensions, "xml", "ass"]);
        return;
      }
      if (key2 === "closeVideo") {
        await closeAllResources();
      } else if (key2 === "importDanmu") {
        await selectLoadFile(["ass", "xml"]);
      } else if (key2 === "openSubWindow") {
        openSubWindow();
      } else if (key2 === "importProject") {
        await selectLoadFile(["llc"]);
      } else if (key2 === "openQuickSongCut") {
        openWaveformAnalyzerDialog();
      } else {
        handleProjectAction(key2);
      }
    };
    const autoLoadDanmuFile = async (videoPath) => {
      const { dir, name } = window.path.parse(videoPath);
      const assFilepath = window.path.join(dir, `${name}.ass`);
      if (await common.fileExists(assFilepath)) {
        await loadDanmuFile(assFilepath);
        return;
      }
      const xmlFilepath = window.path.join(dir, `${name}.xml`);
      if (await common.fileExists(xmlFilepath)) {
        await loadDanmuFile(xmlFilepath);
      }
    };
    const handleVideoDurationChange = (duration) => {
      videoDuration.value = duration;
      initWaveform(files.value.originVideoPath);
    };
    const handleCancelConvertDanmu = () => {
      closeConvertDialog();
    };
    const handleConfirmConvertDanmu = async (config) => {
      const [output, original] = await confirmConvert(config);
      files.value.danmuPath = output;
      files.value.originDanmuPath = original;
      await generateDanmakuData(original);
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
      if (convertDanmuLoading.value) {
        notice.error({
          title: "弹幕转换中，请稍后",
          duration: 1e3
        });
        return;
      }
      exportVisible.value = true;
    };
    useKeyboardShortcuts(
      {
        onUndo: () => undo(),
        onRedo: () => redo(),
        onSave: () => saveProject(),
        onSaveAs: () => saveProjectAs(),
        onExport: () => exportCuts(),
        onTogglePlay: () => togglePlay()
      },
      videoInstance
    );
    const { videoCutDrive } = useDrive();
    onMounted(() => {
      if (!isWeb.value) {
        videoCutDrive();
      }
    });
    watch(
      clientOptions,
      () => {
        if (!videoInstance.value) return;
        if (!videoInstance.value.artplayerPluginHeatmap) return;
        videoInstance.value.artplayerPluginHeatmap.setOptions(clientOptions.value);
      },
      {
        deep: true
      }
    );
    const setHotProgressVisible = (visible) => {
      if (!videoInstance.value) return;
      if (!videoInstance.value.artplayerPluginHeatmap) return;
      if (visible) {
        videoInstance.value.artplayerPluginHeatmap.show();
      } else {
        videoInstance.value.artplayerPluginHeatmap.hide();
      }
    };
    watch(hotProgressVisible, () => {
      setHotProgressVisible(hotProgressVisible.value);
    });
    watch(showVideoTime, () => {
      switchShowVideoTime();
    });
    const switchShowVideoTime = () => {
      if (!videoInstance.value) return;
      if (!videoInstance.value.artplayerTimestamp) return;
      if (showVideoTime.value) {
        videoInstance.value.artplayerTimestamp.show();
      } else {
        videoInstance.value.artplayerTimestamp.hide();
      }
    };
    const openWaveformAnalyzerDialog = () => {
      waveformAnalyzerDialogVisible.value = true;
    };
    const waveformAnalyzerConfirm = async (data) => {
      segmentStore.clear();
      segmentStore.init(
        data.map((seg) => ({
          start: seg.startTime,
          end: seg.endTime,
          name: "",
          checked: true
        }))
      );
    };
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(VideoPlayer, {
              ref_key: "videoPlayerRef",
              ref: videoPlayerRef,
              "video-path": unref(files).videoPath,
              "heatmap-options": unref(clientOptions),
              onReady: unref(handleVideoReady),
              onDurationChange: handleVideoDurationChange,
              onFilesDropped: handleDroppedFiles
            }, null, 8, ["video-path", "heatmap-options", "onReady"]),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(ButtonGroup, {
                  options: unref(projectMenuItems),
                  onClick: handleProjectMenuClick,
                  size: "small"
                }, {
                  default: withCtx(() => _cache[9] || (_cache[9] = [
                    createTextVNode("添加/替换")
                  ])),
                  _: 1
                }, 8, ["options"]),
                createVNode(_component_n_button, {
                  class: "cut-export",
                  type: "info",
                  disabled: !unref(files).videoPath,
                  onClick: exportCuts,
                  size: "small"
                }, {
                  default: withCtx(() => _cache[10] || (_cache[10] = [
                    createTextVNode(" 导出 ")
                  ])),
                  _: 1
                }, 8, ["disabled"])
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(SegmentList, {
                  "danma-list": unref(danmaList),
                  files: unref(files),
                  danmaSearchMask: unref(danmaSearchMask)
                }, null, 8, ["danma-list", "files", "danmaSearchMask"])
              ])
            ])
          ]),
          createVNode(ConfigPanel, {
            "client-options": unref(clientOptions),
            "hot-progress-visible": unref(hotProgressVisible),
            "onUpdate:hotProgressVisible": _cache[0] || (_cache[0] = ($event) => isRef(hotProgressVisible) ? hotProgressVisible.value = $event : null),
            "show-video-time": unref(showVideoTime),
            "onUpdate:showVideoTime": _cache[1] || (_cache[1] = ($event) => isRef(showVideoTime) ? showVideoTime.value = $event : null),
            "danma-search-mask": unref(danmaSearchMask),
            "onUpdate:danmaSearchMask": _cache[2] || (_cache[2] = ($event) => isRef(danmaSearchMask) ? danmaSearchMask.value = $event : null),
            "waveform-visible": unref(waveformVisible),
            "onUpdate:waveformVisible": _cache[3] || (_cache[3] = ($event) => isRef(waveformVisible) ? waveformVisible.value = $event : null),
            "waveform-loading": unref(waveformLoading)
          }, null, 8, ["client-options", "hot-progress-visible", "show-video-time", "danma-search-mask", "waveform-visible", "waveform-loading"])
        ]),
        createVNode(DanmuFactorySettingDailog, {
          visible: unref(xmlConvertVisible),
          "onUpdate:visible": _cache[4] || (_cache[4] = ($event) => isRef(xmlConvertVisible) ? xmlConvertVisible.value = $event : null),
          modelValue: unref(videoVCutOptions).danmuPresetId,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(videoVCutOptions).danmuPresetId = $event),
          "show-preset": true,
          onConfirm: handleConfirmConvertDanmu,
          onCancel: handleCancelConvertDanmu
        }, null, 8, ["visible", "modelValue"]),
        createVNode(ExportModal, {
          modelValue: unref(exportVisible),
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(exportVisible) ? exportVisible.value = $event : null),
          files: unref(files)
        }, null, 8, ["modelValue", "files"]),
        createVNode(WaveformAnalyzerDialog, {
          visible: unref(waveformAnalyzerDialogVisible),
          "onUpdate:visible": _cache[7] || (_cache[7] = ($event) => isRef(waveformAnalyzerDialogVisible) ? waveformAnalyzerDialogVisible.value = $event : null),
          modelValue: unref(waveformAnalyzerConfig),
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isRef(waveformAnalyzerConfig) ? waveformAnalyzerConfig.value = $event : null),
          "file-path": unref(files).originVideoPath,
          onConfirm: waveformAnalyzerConfirm
        }, null, 8, ["visible", "modelValue", "file-path"])
      ], 64);
    };
  }
});
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2dc13bb3"]]);
export {
  Index as default
};
