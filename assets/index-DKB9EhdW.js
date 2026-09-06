import { u as useConfirm } from "./index--O4HUYks.js";
import { d as defineComponent, an as storeToRefs, r as ref, x as computed, aC as onActivated, aD as onDeactivated, aE as onUnmounted, c as createElementBlock, e as createBaseVNode, a as createVNode, h as createCommentVNode, f as unref, w as withCtx, B as Button, i as isRef, j as createTextVNode, o as openBlock } from "./index-CB8xvhFr.js";
import { a as supportedVideoExtensions } from "./index-guw4y6OO.js";
import { d as useAppConfig, h as useFfmpegPreset, u as useDanmuPreset, e as ffmpegPreset, i as danmuPreset, c as cloneDeep, t as task } from "./index-FWk7a7hG.js";
import { F as FileSelect } from "./FileSelect-CvDWxjuo.js";
import { s as showDirectoryDialog } from "./fileSystem-DjZBa11j.js";
import { h as hotkeys } from "./hotkeys.esm-BrStqqkp.js";
import { F as FolderOpenOutline } from "./FolderOpenOutline-vqwY7EUo.js";
import { u as useNotification } from "./use-notification-Bzrm1lu9.js";
import { b as toReactive } from "./index-CMOU2boc.js";
import { _ as __unplugin_components_0 } from "./Cascader-C6SA_wAP.js";
import { _ as __unplugin_components_0$1 } from "./Select-CYnthXY-.js";
import { _ as __unplugin_components_1 } from "./Checkbox-Buw5q29r.js";
import { _ as __unplugin_components_5, a as __unplugin_components_3 } from "./RadioGroup-CJq397k5.js";
import { _ as __unplugin_components_2 } from "./Space-Dcg2rQj1.js";
import { _ as __unplugin_components_2$1 } from "./Input-C3jgSm1V.js";
import { N as NIcon } from "./Icon-D1o4HjX4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import "./common-1CgNZfMf.js";
import "./_getTag-22mR82vJ.js";
import "./EditableText-qBZLWFoX.js";
import "./showDirectoryDialog-CbG0Fkj3.js";
import "./text-BHgaUKrH.js";
import "./ChevronRight-BrIDHZkd.js";
import "./create-DfXrl36C.js";
import "./Popover-D4v8saSe.js";
const _hoisted_1 = {
  class: "center btns",
  style: { "margin-bottom": "20px", "flex-wrap": "wrap" }
};
const _hoisted_2 = {
  class: "flex align-center column",
  style: { "margin-top": "10px" }
};
const _hoisted_3 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_4 = { style: { "margin-top": "10px" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Convert2Mp4"
  },
  __name: "index",
  setup(__props) {
    const notice = useNotification();
    const confirm = useConfirm();
    const { appConfig } = storeToRefs(useAppConfig());
    const { ffmpegOptions } = storeToRefs(useFfmpegPreset());
    const { danmuPresetsOptions } = storeToRefs(useDanmuPreset());
    const fileList = ref([]);
    const options = toReactive(
      computed({
        get: () => appConfig.value.tool.video2mp4,
        set: (value) => {
          appConfig.value.tool.video2mp4 = value;
        }
      })
    );
    const homeOptions = computed(() => {
      return appConfig.value.tool.home;
    });
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
      const rawDanmuConfig = await danmuPreset.get(options.danmuPresetId);
      if (!rawDanmuConfig) {
        notice.error({
          title: `弹幕预设不存在，请重新选择`,
          duration: 1e3
        });
        return;
      }
      const ffmpegOptions2 = ffmpegConfig.config;
      const danmuOptions = rawDanmuConfig?.config;
      if (fileList.value.length === 0) {
        notice.error({
          title: `至少选择一个文件`,
          duration: 1500
        });
        return;
      }
      if (ffmpegOptions2.encoder === "copy") {
        if (fileList.value.find((item) => item.danmakuPath)) {
          notice.error({
            title: `存在弹幕文件，视频预设编码器不允许使用 copy 选项`,
            duration: 1500
          });
          return;
        }
      }
      if (ffmpegOptions2.encoder !== "copy") {
        const [status] = await confirm.warning({
          content: "你可能正在对视频进行重编码，将耗费大量时间，是否继续？（如果你只是想转封装，可以选择预设中的 copy 选项）",
          showCheckbox: true,
          showAgainKey: "video2mp4Convert"
        });
        if (!status) return;
      }
      const files = cloneDeep(fileList.value);
      for (let i = 0; i < files.length; i++) {
        const videoPath = files[i].videoPath;
        const danmakuPath = files[i].danmakuPath;
        const outputName = `${files[i].title}.mp4`;
        if (!danmakuPath && options.hotProgress) {
          notice.error({
            title: `未选择弹幕文件，无法使用高能进度条`,
            duration: 1500
          });
          return;
        }
        if (options.saveRadio === 1) {
          const inputFileName = window.path.basename(videoPath);
          if (inputFileName === outputName) {
            notice.error({
              title: `输入文件与输出文件名相同：${inputFileName}，请修改保存路径或文件名`,
              duration: 3e3
            });
            return;
          }
        }
        if (danmakuPath) {
          await task.burn(
            {
              videoFilePath: videoPath,
              subtitleFilePath: danmakuPath
            },
            outputName,
            {
              danmaOptions: danmuOptions,
              ffmpegOptions: ffmpegOptions2,
              hotProgressOptions: {
                interval: homeOptions.value.hotProgressSample,
                height: homeOptions.value.hotProgressHeight,
                color: homeOptions.value.hotProgressColor,
                fillColor: homeOptions.value.hotProgressFillColor
              },
              hasHotProgress: options.hotProgress,
              override: options.override,
              removeOrigin: options.removeOrigin,
              savePath: options.savePath,
              saveType: options.saveRadio
            }
          );
        } else {
          await task.transcode(videoPath, outputName, ffmpegOptions2, {
            override: options.override,
            removeOrigin: options.removeOrigin,
            savePath: options.savePath,
            saveType: options.saveRadio
          });
        }
        fileList.value.shift();
      }
      notice.warning({
        title: `已加入任务，可在任务队列中查看进度`,
        duration: 1e3
      });
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
      const _component_n_cascader = __unplugin_components_0;
      const _component_n_select = __unplugin_components_0$1;
      const _component_n_checkbox = __unplugin_components_1;
      const _component_n_radio = __unplugin_components_3;
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_icon = NIcon;
      const _component_n_space = __unplugin_components_2;
      const _component_n_radio_group = __unplugin_components_5;
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
            title: "立即转化(ctrl+enter)"
          }, {
            default: withCtx(() => _cache[9] || (_cache[9] = [
              createTextVNode(" 立即转换 ")
            ])),
            _: 1
          }),
          createVNode(_component_n_cascader, {
            value: unref(options).ffmpegPresetId,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(options).ffmpegPresetId = $event),
            placeholder: "请选择视频预设",
            "expand-trigger": "click",
            options: unref(ffmpegOptions),
            "check-strategy": "child",
            "show-path": false,
            filterable: true,
            style: { "width": "140px", "text-align": "left" },
            title: "ffmpeg预设"
          }, null, 8, ["value", "options"]),
          createVNode(_component_n_select, {
            value: unref(options).danmuPresetId,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(options).danmuPresetId = $event),
            options: unref(danmuPresetsOptions),
            placeholder: "选择弹幕预设",
            style: { "width": "140px", "text-align": "left" }
          }, null, 8, ["value", "options"]),
          createVNode(_component_n_checkbox, {
            checked: unref(options).hotProgress,
            "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => unref(options).hotProgress = $event),
            title: "使用首页的数据"
          }, {
            default: withCtx(() => _cache[10] || (_cache[10] = [
              createTextVNode(" 高能进度条 ")
            ])),
            _: 1
          }, 8, ["checked"])
        ]),
        createVNode(FileSelect, {
          ref_key: "fileSelect",
          ref: fileSelect,
          modelValue: unref(fileList),
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(fileList) ? fileList.value = $event : null),
          sort: false,
          extensions: [...unref(supportedVideoExtensions), "xml", "ass"],
          inputPlaceholder: "输入内容将会被用为文件名"
        }, null, 8, ["modelValue", "extensions"]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", null, [
            createVNode(_component_n_radio_group, {
              value: unref(options).saveRadio,
              "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(options).saveRadio = $event)
            }, {
              default: withCtx(() => [
                createVNode(_component_n_space, { class: "flex align-center column" }, {
                  default: withCtx(() => [
                    createVNode(_component_n_radio, { value: 1 }, {
                      default: withCtx(() => _cache[11] || (_cache[11] = [
                        createTextVNode(" 保存到原始文件夹 ")
                      ])),
                      _: 1
                    }),
                    createVNode(_component_n_radio, {
                      value: 2,
                      style: { "display": "flex", "align-items": "center" }
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3, [
                          createVNode(_component_n_input, {
                            value: unref(options).savePath,
                            "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(options).savePath = $event),
                            placeholder: "选择文件夹",
                            style: { "width": "300px" },
                            title: unref(options).savePath
                          }, null, 8, ["value", "title"]),
                          createVNode(_component_n_icon, {
                            size: "30",
                            style: { "margin-left": "10px" },
                            class: "pointer",
                            onClick: getDir
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(FolderOpenOutline))
                            ]),
                            _: 1
                          })
                        ])
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
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_n_radio_group, {
              value: unref(options).override,
              "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(options).override = $event)
            }, {
              default: withCtx(() => [
                createVNode(_component_n_space, null, {
                  default: withCtx(() => [
                    createVNode(_component_n_radio, { value: true }, {
                      default: withCtx(() => _cache[12] || (_cache[12] = [
                        createTextVNode(" 覆盖文件 ")
                      ])),
                      _: 1
                    }),
                    createVNode(_component_n_radio, { value: false }, {
                      default: withCtx(() => _cache[13] || (_cache[13] = [
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
              "onUpdate:checked": _cache[7] || (_cache[7] = ($event) => unref(options).removeOrigin = $event)
            }, {
              default: withCtx(() => _cache[14] || (_cache[14] = [
                createTextVNode(" 完成后移除源文件 ")
              ])),
              _: 1
            }, 8, ["checked"])
          ])
        ])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a30689d"]]);
export {
  index as default
};
