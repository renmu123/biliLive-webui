import { _ as _sfc_main$1 } from "./FileSelect.vue_vue_type_script_setup_true_lang-Bv8UiuG2.js";
import { D as DanmuFactorySettingDailog } from "./DanmuFactorySettingDailog-CVuDJm9C.js";
import { s as showDirectoryDialog } from "./showDirectoryDialog-CW96unRZ.js";
import { c as useDanmuPreset, i as useAppConfig, m as danmuPreset, t as task, N as NIcon } from "./index-Be9rHucp.js";
import { d as defineComponent, o as openBlock, c as createElementBlock, f as createBaseVNode, ah as storeToRefs, r as ref, l as computed, ax as onActivated, ay as onDeactivated, ap as onUnmounted, e as unref, aj as createCommentVNode, a as createVNode, w as withCtx, i as isRef, B as Button, g as createTextVNode } from "./index-B3txP6HV.js";
import { u as useConfirm } from "./index-CQuQXiXy.js";
import { h as hotkeys } from "./hotkeys.esm-jdU0bUED.js";
import { F as FolderOpenOutline } from "./FolderOpenOutline-0U4FjUFl.js";
import { u as useNotification } from "./use-notification-_uZSor1V.js";
import { b as toReactive } from "./index-CNQhkSN1.js";
import { _ as __unplugin_components_0 } from "./Select-cKie_tgm.js";
import { a as __unplugin_components_5, _ as __unplugin_components_3 } from "./RadioGroup-9W9i5aqG.js";
import { _ as __unplugin_components_2 } from "./Input-B6k2JVGe.js";
import { _ as __unplugin_components_4 } from "./Space-C3OZuoMs.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-BI19-qja.js";
import "./_commonjsHelpers-BxmBWJD2.js";
import "./filenamify-DOXWXCz-.js";
import "./index-Cfb3FODH.js";
import "./DanmuFactorySetting-DZMjwgdV.js";
import "./Tip.vue_vue_type_script_setup_true_lang-DFBPcEmQ.js";
import "./common-BAA1HpBD.js";
import "./InputNumber-Bz27Zlni.js";
import "./Suffix-DS84fk-A.js";
import "./FormItem-Cdzklzq2.js";
import "./Divider-Dg2O_dra.js";
import "./Dropdown-E85TqFlF.js";
import "./ChevronRight-RAl1ruKH.js";
import "./utils-CpJTLUg0.js";
import "./CloseOutline-C8_XpVPS.js";
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
    const options = toReactive(
      computed({
        get: () => appConfig.value.tool.danmu,
        set: (value) => {
          appConfig.value.tool.danmu = value;
        }
      })
    );
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
      const [status] = await confirm.warning({
        title: "确认转换",
        content: `输出文件名中请勿包含emoji或奇怪符号，否则可能导致转换失败`,
        showCheckbox: true,
        showAgainKey: "danmuFactoryConvert-filename"
      });
      console.log(status);
      if (!status) return;
      const presetId = danmuPresetId.value;
      const config = (await danmuPreset.get(presetId)).config;
      for (let i = 0; i < fileList.value.length; i++) {
        const file = {
          input: fileList.value[i].path,
          output: fileList.value[i].title
        };
        try {
          await task.convertXml2Ass(file.input, file.output, config, options);
        } catch (err) {
          notice.error({
            title: err,
            duration: 1e3
          });
        }
      }
      notice.info({
        title: `生成${fileList.value.length}个任务，可在任务列表中查看进度`,
        duration: 1e3
      });
      fileList.value = [];
    };
    const show = ref(false);
    const openSetting = () => {
      show.value = true;
    };
    async function getDir() {
      let dir;
      if (window.isWeb) {
        dir = await showDirectoryDialog({
          type: "directory"
        })[0];
      } else {
        dir = await window.api.openDirectory({
          defaultPath: options.savePath
        });
      }
      if (!dir) return;
      options.savePath = dir;
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
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode(" 添加 ")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            onClick: convert
          }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createTextVNode(" 立即转换 ")
            ])),
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
                    default: withCtx(() => _cache[8] || (_cache[8] = [
                      createTextVNode(" 保存到原始文件夹 ")
                    ])),
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
const DanmuFactory = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61aad34d"]]);
export {
  DanmuFactory as default
};
