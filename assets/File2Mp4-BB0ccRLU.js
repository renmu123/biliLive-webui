import { d as defineComponent, u as useNotification, a as useConfirm, s as storeToRefs, V as useAppConfig, b as useFfmpegPreset, r as ref, Q as onActivated, R as onDeactivated, S as onUnmounted, n as createElementBlock, k as createBaseVNode, j as unref, p as createCommentVNode, i as createVNode, h as withCtx, q as isRef, v as toRaw, I as Button, _ as __unplugin_components_0, f as openBlock, l as createTextVNode, aL as FolderOpenOutline, G as __unplugin_components_2, N as NIcon, aE as __unplugin_components_4, P as _export_sfc } from "./index--gUAYtmw.js";
import { _ as _sfc_main$1 } from "./FileSelect.vue_vue_type_script_setup_true_lang-DhnYlAqq.js";
import { h as hotkeys } from "./hotkeys.esm-1zIhzqwe.js";
import { a as __unplugin_components_5, _ as __unplugin_components_3 } from "./RadioGroup-BP8eQLS8.js";
import "./filenamify-DOXWXCz-.js";
import "./CloseOutline-2NJFdTs4.js";
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
    const fileList = ref([]);
    const options = appConfig.value.tool.video2mp4;
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
      const ffmpegConfig = await window.api.ffmpeg.getPreset(options.ffmpegPresetId);
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
          ])
        ])
      ]);
    };
  }
});
const File2Mp4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-faa86312"]]);
export {
  File2Mp4 as default
};
