import { F as FileSelect } from "./FileSelect-B0aQpShO.js";
import { D as DanmuFactorySettingDailog } from "./DanmuFactorySettingDailog-DFgpP-0o.js";
import { s as showDirectoryDialog } from "./fileSystem-C22lY_44.js";
import { u as useDanmuPreset, d as useAppConfig, k as danmuPreset, t as task } from "./index-BpXg0f34.js";
import { d as defineComponent, c as createElementBlock, e as createBaseVNode, o as openBlock, a4 as storeToRefs, r as ref, x as computed, ak as onActivated, al as onDeactivated, am as onUnmounted, a as createVNode, h as createCommentVNode, f as unref, w as withCtx, B as Button, i as isRef, j as createTextVNode } from "./index-gjuLIDoI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-B1lyReKF.js";
import { h as hotkeys } from "./hotkeys.esm-CkQxwFRj.js";
import { u as useNotice } from "./useNotice-BnaW_JYm.js";
import { F as FolderOpenOutline } from "./FolderOpenOutline-K-p0ASPr.js";
import { b as toReactive } from "./index-bqczNda1.js";
import { _ as __unplugin_components_0 } from "./Select-xWcqChuz.js";
import { N as NIcon } from "./Icon-D2Zo6Coc.js";
import { _ as __unplugin_components_5, a as __unplugin_components_3$1 } from "./RadioGroup-Bd7Skk-n.js";
import { _ as __unplugin_components_1 } from "./Checkbox-pQXdXXSK.js";
import { _ as __unplugin_components_3 } from "./Space-BBiSHRV-.js";
import { _ as __unplugin_components_0$1 } from "./Input--Gp3P9gj.js";
import "./EditableText-DJHDEqjl.js";
import "./showDirectoryDialog-CUR2gD_Z.js";
import "./common-Da25N27f.js";
import "./text-CwQ4I63s.js";
import "./danmuPreset-Bz5zYdKV.js";
import "./Tip.vue_vue_type_script_setup_true_lang-x9PvGp7f.js";
import "./Popover-T5GorXob.js";
import "./_getTag-NYFG1GAg.js";
import "./use-notification-LRtjAvoZ.js";
import "./HelpCircleOutline-JWqllQs0.js";
import "./FormItem-Kj27K3vk.js";
import "./InputNumber-CaUnxb7j.js";
import "./Divider-CcENGeqI.js";
import "./Switch-ChpQMtl0.js";
import "./ButtonGroup-CvzhfmEC.js";
import "./Dropdown-DBKZZG83.js";
import "./ChevronRight-CONDXL5I.js";
import "./create-DfXrl36C.js";
import "./create-ref-setter-DXkZaMbS.js";
import "./index-BZWV_urK.js";
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const SettingIcon = defineComponent({
  name: "Settings",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$1,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
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
        ),
        createBaseVNode(
          "path",
          {
            d: "M470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175.21 175.21 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11zm-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67z",
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
const _hoisted_1 = {
  class: "flex justify-center align-center",
  style: { "margin-bottom": "20px", "gap": "10px" }
};
const _hoisted_2 = {
  class: "flex align-center column",
  style: { "margin-top": "10px" }
};
const _hoisted_3 = { style: { "margin-top": "10px" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "DanmakuFactory"
  },
  __name: "DanmuFactory",
  setup(__props) {
    const { danmuPresetsOptions, danmuPresetId } = storeToRefs(useDanmuPreset());
    const { appConfig } = storeToRefs(useAppConfig());
    const notice = useNotice();
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
          title: `至少选择一个文件`
        });
        return;
      }
      const presetId = danmuPresetId.value;
      const config = (await danmuPreset.get(presetId)).config;
      if (config.resolutionResponsive) {
        notice.warning({
          duration: 5e3,
          title: `本次转换无法使用自适应分辨率，将使用${config.resolution[0]}X${config.resolution[1]}分辨率，请确认与你的视频分辨率一致`
        });
      }
      for (let i = 0; i < fileList.value.length; i++) {
        const file = {
          input: fileList.value[i].path,
          output: fileList.value[i].title
        };
        try {
          await task.convertXml2Ass(file.input, file.output, config, options);
        } catch (err) {
          notice.error({
            title: err
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
      let dir = await showDirectoryDialog({
        defaultPath: options.savePath
      });
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
      const _component_n_radio = __unplugin_components_3$1;
      const _component_n_input = __unplugin_components_0$1;
      const _component_n_space = __unplugin_components_3;
      const _component_n_radio_group = __unplugin_components_5;
      const _component_n_checkbox = __unplugin_components_1;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          unref(fileList).length !== 0 ? (openBlock(), createElementBlock("span", {
            key: 0,
            style: { "cursor": "pointer", "color": "#958e8e" },
            onClick: clear
          }, "清空")) : createCommentVNode("", true),
          createVNode(_component_n_button, { onClick: addVideo }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode(" 添加 ")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            onClick: convert,
            title: "立即转换(ctrl+enter)"
          }, {
            default: withCtx(() => _cache[9] || (_cache[9] = [
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
        createVNode(FileSelect, {
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
                    default: withCtx(() => _cache[10] || (_cache[10] = [
                      createTextVNode(" 保存到原始文件夹 ")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_radio, { value: 2 }),
                  createVNode(_component_n_input, {
                    title: "支持相对路径",
                    value: unref(options).savePath,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).savePath = $event),
                    type: "text",
                    placeholder: "选择文件夹",
                    style: { "width": "300px" }
                  }, null, 8, ["value"]),
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
          }, 8, ["value"]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_n_radio_group, {
              value: unref(options).override,
              "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(options).override = $event)
            }, {
              default: withCtx(() => [
                createVNode(_component_n_space, null, {
                  default: withCtx(() => [
                    createVNode(_component_n_radio, { value: true }, {
                      default: withCtx(() => _cache[11] || (_cache[11] = [
                        createTextVNode(" 覆盖文件 ")
                      ])),
                      _: 1
                    }),
                    createVNode(_component_n_radio, { value: false }, {
                      default: withCtx(() => _cache[12] || (_cache[12] = [
                        createTextVNode(" 跳过存在文件 ")
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
              checked: unref(options).removeOrigin,
              "onUpdate:checked": _cache[5] || (_cache[5] = ($event) => unref(options).removeOrigin = $event)
            }, {
              default: withCtx(() => _cache[13] || (_cache[13] = [
                createTextVNode(" 完成后移除源文件 ")
              ])),
              _: 1
            }, 8, ["checked"])
          ])
        ]),
        createVNode(DanmuFactorySettingDailog, {
          visible: unref(show),
          "onUpdate:visible": _cache[6] || (_cache[6] = ($event) => isRef(show) ? show.value = $event : null),
          modelValue: unref(danmuPresetId),
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(danmuPresetId) ? danmuPresetId.value = $event : null)
        }, null, 8, ["visible", "modelValue"])
      ]);
    };
  }
});
const DanmuFactory = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8cf0bab1"]]);
export {
  DanmuFactory as default
};
