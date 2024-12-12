import { d as defineComponent, r as ref, c as createElementBlock, am as toDisplayString, e as unref, o as openBlock } from "./index-B3txP6HV.js";
import { c as common } from "./common-BAA1HpBD.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-BI19-qja.js";
const _hoisted_1 = { class: "center" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const appStartTime = ref(0);
    const getTime = async () => {
      const time = await common.appStartTime();
      appStartTime.value = time;
    };
    getTime();
    const now = ref(Date.now());
    setInterval(() => {
      now.value = Date.now();
    }, 1e3);
    const formatTime = (time) => {
      const seconds = Math.floor(time / 1e3 % 60);
      const minutes = Math.floor(time / 1e3 / 60 % 60);
      const hours = Math.floor(time / 1e3 / 60 / 60 % 24);
      return `${hours}小时${minutes}分钟${seconds}秒`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("h1", _hoisted_1, "已运行" + toDisplayString(formatTime(unref(now) - unref(appStartTime))), 1);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9649c085"]]);
export {
  index as default
};
