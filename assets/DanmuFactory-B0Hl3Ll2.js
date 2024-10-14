import { _ as _sfc_main$1 } from "./FileSelect.vue_vue_type_script_setup_true_lang-DhnYlAqq.js";
import { D as DanmuFactorySettingDailog } from "./DanmuFactorySettingDailog-9PDYyqs5.js";
import { d as defineComponent, f as openBlock, n as createElementBlock, k as createBaseVNode, s as storeToRefs, T as useDanmuPreset, V as useAppConfig, u as useNotification, a as useConfirm, r as ref, Q as onActivated, R as onDeactivated, S as onUnmounted, j as unref, p as createCommentVNode, i as createVNode, h as withCtx, q as isRef, $ as danmuPreset, Y as deepRaw, I as Button, B as __unplugin_components_0, N as NIcon, l as createTextVNode, aL as FolderOpenOutline, G as __unplugin_components_2, aE as __unplugin_components_4, P as _export_sfc } from "./index--gUAYtmw.js";
import { h as hotkeys } from "./hotkeys.esm-1zIhzqwe.js";
import { a as __unplugin_components_5, _ as __unplugin_components_3 } from "./RadioGroup-BP8eQLS8.js";
import "./filenamify-DOXWXCz-.js";
import "./DanmuFactorySetting-KZCTPVr2.js";
import "./Divider-DnSgvn6o.js";
import "./CloseOutline-2NJFdTs4.js";
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "circle",
  {
    cx: "256",
    cy: "256",
    r: "48",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175.21 175.21 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11zm-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = [_hoisted_2$1, _hoisted_3];
const SettingIcon = defineComponent({
  name: "Settings",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4);
  }
});
const _hoisted_1 = {
  class: "flex justify-center align-center",
  style: { "margin-bottom": "20px", "gap": "10px" }
};
const _hoisted_2 = {
  class: "flex align-center column",
  style: { "margin-top": "10px" }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DanmuFactory",
  setup(__props) {
    const { danmuPresetsOptions, danmuPresetId } = storeToRefs(useDanmuPreset());
    const { appConfig } = storeToRefs(useAppConfig());
    const notice = useNotification();
    const confirm = useConfirm();
    const fileList = ref([]);
    const options = appConfig.value.tool.danmu;
    onActivated(() => {
      hotkeys("ctrl+enter", function() {
        convert();
      });
    });
    onDeactivated(() => {
      hotkeys.unbind();
    });
    onUnmounted(() => {
      hotkeys.unbind();
    });
    const convert = async () => {
      if (fileList.value.length === 0) {
        notice.error({
          title: `至少选择一个文件`,
          duration: 1e3
        });
        return;
      }
      if (options.saveRadio === 2 && !await window.api.exits(options.savePath)) {
        notice.error({
          title: `保存文件夹不存在`,
          duration: 1e3
        });
        return;
      }
      const [status] = await confirm.warning({
        title: "确认转换",
        content: `输出文件名中请勿包含emoji或奇怪符号，否则可能导致转换失败`,
        showCheckbox: true,
        showAgainKey: "danmuFactoryConvert-filename"
      });
      console.log(status);
      if (!status) return;
      const presetId = danmuPresetId.value;
      notice.info({
        title: `生成${fileList.value.length}个任务，可在任务列表中查看进度`,
        duration: 1e3
      });
      const config = (await danmuPreset.get(presetId)).config;
      for (let i = 0; i < fileList.value.length; i++) {
        const file = {
          input: fileList.value[i].path,
          output: fileList.value[i].title
        };
        try {
          await window.api.danmu.convertXml2Ass(file, config, {
            ...deepRaw(options),
            copyInput: true
          });
        } catch (err) {
          notice.error({
            title: err,
            duration: 1e3
          });
        }
      }
      fileList.value = [];
    };
    const show = ref(false);
    const openSetting = () => {
      show.value = true;
    };
    async function getDir() {
      const path = await window.api.openDirectory({
        defaultPath: options.savePath
      });
      if (!path) return;
      options.savePath = path;
      options.saveRadio = 2;
    }
    const fileSelect = ref(null);
    const addVideo = async () => {
      fileSelect.value?.select();
    };
    const clear = () => {
      fileList.value = [];
    };
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_select = __unplugin_components_0;
      const _component_n_icon = NIcon;
      const _component_n_radio = __unplugin_components_3;
      const _component_n_input = __unplugin_components_2;
      const _component_n_space = __unplugin_components_4;
      const _component_n_radio_group = __unplugin_components_5;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          unref(fileList).length !== 0 ? (openBlock(), createElementBlock("span", {
            key: 0,
            style: { "cursor": "pointer", "color": "#958e8e" },
            onClick: clear
          }, "清空")) : createCommentVNode("", true),
          createVNode(_component_n_button, { onClick: addVideo }, {
            default: withCtx(() => [
              createTextVNode(" 添加 ")
            ]),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            onClick: convert
          }, {
            default: withCtx(() => [
              createTextVNode(" 立即转换 ")
            ]),
            _: 1
          }),
          createVNode(_component_n_select, {
            value: unref(danmuPresetId),
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(danmuPresetId) ? danmuPresetId.value = $event : null),
            options: unref(danmuPresetsOptions),
            placeholder: "选择预设",
            style: { "width": "140px" }
          }, null, 8, ["value", "options"]),
          createVNode(_component_n_icon, {
            size: "25",
            class: "pointer",
            onClick: openSetting
          }, {
            default: withCtx(() => [
              createVNode(unref(SettingIcon))
            ]),
            _: 1
          })
        ]),
        createVNode(_sfc_main$1, {
          ref_key: "fileSelect",
          ref: fileSelect,
          modelValue: unref(fileList),
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(fileList) ? fileList.value = $event : null),
          "area-placeholder": "请选择xml文件",
          extensions: ["xml"],
          sort: false
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_n_radio_group, {
            value: unref(options).saveRadio,
            "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(options).saveRadio = $event),
            class: "radio-group"
          }, {
            default: withCtx(() => [
              createVNode(_component_n_space, { class: "flex align-center column" }, {
                default: withCtx(() => [
                  createVNode(_component_n_radio, { value: 1 }, {
                    default: withCtx(() => [
                      createTextVNode(" 保存到原始文件夹 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_n_radio, { value: 2 }, {
                    default: withCtx(() => [
                      createVNode(_component_n_input, {
                        value: unref(options).savePath,
                        "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).savePath = $event),
                        type: "text",
                        placeholder: "选择文件夹",
                        style: { "width": "300px" }
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_n_icon, {
                    size: "30",
                    style: { "margin-left": "-10px" },
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
        createVNode(DanmuFactorySettingDailog, {
          visible: unref(show),
          "onUpdate:visible": _cache[4] || (_cache[4] = ($event) => isRef(show) ? show.value = $event : null),
          modelValue: unref(danmuPresetId),
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(danmuPresetId) ? danmuPresetId.value = $event : null)
        }, null, 8, ["visible", "modelValue"])
      ]);
    };
  }
});
const DanmuFactory = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bd6d20b3"]]);
export {
  DanmuFactory as default
};
