import { u as useConfirm } from "./index-CA7M0yjN.js";
import { d as defineComponent, al as storeToRefs, p as computed, r as ref, aA as onActivated, aB as onDeactivated, as as onUnmounted, ah as createElementBlock, e as createBaseVNode, b as unref, am as createCommentVNode, a as createVNode, w as withCtx, i as isRef, ar as toRaw, B as Button, o as openBlock, f as createTextVNode } from "./index-BdK_bIY-.js";
import { i as useAppConfig, l as useFfmpegPreset, j as ffmpegPreset, N as NIcon } from "./index-C4u8aLk_.js";
import { _ as _sfc_main$1 } from "./FileSelect.vue_vue_type_script_setup_true_lang-BpOCkYqA.js";
import { s as showDirectoryDialog } from "./showDirectoryDialog-DEycIJ5C.js";
import { h as hotkeys } from "./hotkeys.esm-DZlVWy2u.js";
import { F as FolderOpenOutline } from "./FolderOpenOutline-CN7y3wC1.js";
import { u as useNotification } from "./use-notification-Bd6vXVK5.js";
import { a as toReactive } from "./index-Dx5QtryB.js";
import { _ as __unplugin_components_0 } from "./Cascader-BWP4BJml.js";
import { a as __unplugin_components_5, _ as __unplugin_components_3 } from "./RadioGroup-DAR76U5f.js";
import { _ as __unplugin_components_2 } from "./Input-B9R9uvsi.js";
import { _ as __unplugin_components_4 } from "./Space-DiCJhQLR.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CeIKdxzx.js";
import "./filenamify-DOXWXCz-.js";
import "./index-7WYu9wih.js";
import "./common-BoyrrMWo.js";
import "./CloseOutline-WELlPCAp.js";
import "./utils-CMU8sxwr.js";
import "./Suffix-BPiqXR0G.js";
const _hoisted_1 = {
  class: "center btns",
  style: { "margin-bottom": "20px" }
};
const _hoisted_2 = {
  class: "flex align-center column",
  style: { "margin-top": "10px" }
};
const _hoisted_3 = { style: { "margin-top": "10px" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "File2Mp4",
  setup(__props) {
    const notice = useNotification();
    const confirm = useConfirm();
    const { appConfig } = storeToRefs(useAppConfig());
    const { ffmpegOptions } = storeToRefs(useFfmpegPreset());
    const isWeb = computed(() => window.isWeb);
    const fileList = ref([]);
    const options = toReactive(
      computed({
        get: () => appConfig.value.tool.video2mp4,
        set: (value) => {
          appConfig.value.tool.video2mp4 = value;
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
      const ffmpegConfig = await ffmpegPreset.get(options.ffmpegPresetId);
      if (!ffmpegConfig) {
        notice.error({
          title: `预设不存在，请重新选择`,
          duration: 1e3
        });
        return;
      }
      const ffmpegOptions2 = ffmpegConfig.config;
      console.log(ffmpegOptions2);
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
      if (ffmpegOptions2.encoder !== "copy" || ffmpegOptions2.audioCodec !== "copy") {
        const [status] = await confirm.warning({
          content: "你可能正在对视频或音频进行重编码，将耗费大量时间，是否继续？（如果你只是想转换格式，可以选择预设中的 copy 选项）",
          showCheckbox: true,
          showAgainKey: "video2mp4Convert"
        });
        if (!status) return;
      }
      for (let i = 0; i < fileList.value.length; i++) {
        try {
          window.api.convertVideo2Mp4(
            { input: fileList.value[i].path, output: fileList.value[i].title },
            toRaw(options),
            ffmpegOptions2
          );
        } catch (err) {
          notice.error({
            title: err,
            duration: 1e3
          });
        }
      }
      fileList.value = [];
      notice.warning({
        title: `已加入任务队列，可在任务列表中查看进度`,
        duration: 1e3
      });
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
      const _component_n_cascader = __unplugin_components_0;
      const _component_n_radio = __unplugin_components_3;
      const _component_n_input = __unplugin_components_2;
      const _component_n_icon = NIcon;
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
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode(" 添加 ")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            disabled: unref(isWeb),
            onClick: convert
          }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode(" 立即转换 ")
            ])),
            _: 1
          }, 8, ["disabled"]),
          createVNode(_component_n_cascader, {
            value: unref(options).ffmpegPresetId,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(options).ffmpegPresetId = $event),
            placeholder: "请选择预设",
            "expand-trigger": "click",
            options: unref(ffmpegOptions),
            "check-strategy": "child",
            "show-path": false,
            filterable: true,
            style: { "width": "140px", "text-align": "left" }
          }, null, 8, ["value", "options"])
        ]),
        createVNode(_sfc_main$1, {
          ref_key: "fileSelect",
          ref: fileSelect,
          modelValue: unref(fileList),
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(fileList) ? fileList.value = $event : null),
          sort: false
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", null, [
            createVNode(_component_n_radio_group, {
              value: unref(options).saveRadio,
              "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(options).saveRadio = $event),
              class: "radio-group2"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_space, { class: "flex align-center column" }, {
                  default: withCtx(() => [
                    createVNode(_component_n_radio, { value: 1 }, {
                      default: withCtx(() => _cache[7] || (_cache[7] = [
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
                          style: { "width": "300px" },
                          title: unref(options).savePath
                        }, null, 8, ["value", "title"])
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
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_n_radio_group, {
              value: unref(options).override,
              "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(options).override = $event)
            }, {
              default: withCtx(() => [
                createVNode(_component_n_space, null, {
                  default: withCtx(() => [
                    createVNode(_component_n_radio, { value: true }, {
                      default: withCtx(() => _cache[8] || (_cache[8] = [
                        createTextVNode(" 覆盖文件 ")
                      ])),
                      _: 1
                    }),
                    createVNode(_component_n_radio, { value: false }, {
                      default: withCtx(() => _cache[9] || (_cache[9] = [
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
          ])
        ])
      ]);
    };
  }
});
const File2Mp4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab4cf522"]]);
export {
  File2Mp4 as default
};
