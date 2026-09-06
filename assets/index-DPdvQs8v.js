import { A as AppendVideoDialog } from "./AppendVideoDialog-0ZIiB-px.js";
import { d as defineComponent, al as mergeModels, an as storeToRefs, x as computed, am as useModel, r as ref, Y as watch, g as createBlock, w as withCtx, a as createVNode, c as createElementBlock, h as createCommentVNode, e as createBaseVNode, f as unref, j as createTextVNode, F as Fragment, B as Button, ar as __unplugin_components_3, i as isRef, _ as __unplugin_components_3$1, aB as withKeys, au as toRaw, o as openBlock, aC as onActivated, aD as onDeactivated, aE as onUnmounted } from "./index-CB8xvhFr.js";
import { b as toReactive, a as useStorage } from "./index-CMOU2boc.js";
import { u as useDrive, F as FileArea } from "./drive-NTdViwE0.js";
import { u as usePresetFile, D as DanmuFactorySetting } from "./danmuPreset-wrxB0gYL.js";
import { _ as __unplugin_components_2$2, B as BiliSetting } from "./BiliSetting-Wua-gkDk.js";
import { _ as _sfc_main$3 } from "./Tip.vue_vue_type_script_setup_true_lang-BVeN5TP1.js";
import { u as useConfirm, a as useBili } from "./index--O4HUYks.js";
import { u as uuid, d as deepRaw } from "./index-guw4y6OO.js";
import { h as useFfmpegPreset, d as useAppConfig, e as ffmpegPreset, c as cloneDeep, u as useDanmuPreset, a as useUserInfoStore, i as danmuPreset, t as task } from "./index-FWk7a7hG.js";
import { v as videoEncoders } from "./enum-DWbwatii.js";
import { H as HelpCircleOutline } from "./HelpCircleOutline-DC8ljYG3.js";
import { u as useNotification } from "./use-notification-Bzrm1lu9.js";
import { u as useBreakpoints } from "./useBreakpoints-y2ktmuab.js";
import { _ as __unplugin_components_2, b as __unplugin_components_5 } from "./Switch-n0tH4Ke1.js";
import { _ as __unplugin_components_0 } from "./Cascader-C6SA_wAP.js";
import { _ as __unplugin_components_1 } from "./Divider-CA3TQbOA.js";
import { _ as __unplugin_components_0$1 } from "./Select-CYnthXY-.js";
import { _ as __unplugin_components_2$1 } from "./Popover-D4v8saSe.js";
import { N as NIcon } from "./Icon-D1o4HjX4.js";
import { _ as __unplugin_components_1$1 } from "./InputNumber-DuVe1x-P.js";
import { _ as __unplugin_components_1$2 } from "./Checkbox-Buw5q29r.js";
import { _ as __unplugin_components_2$3 } from "./Input-C3jgSm1V.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { _ as _sfc_main$4 } from "./Index.vue_vue_type_style_index_0_lang-CddyytYf.js";
import { c as common } from "./common-1CgNZfMf.js";
import { d as danma } from "./danma-EdR82Jkd.js";
import { h as hotkeys } from "./hotkeys.esm-BrStqqkp.js";
import { b as showSaveDialog } from "./fileSystem-DjZBa11j.js";
import { B as ButtonGroup } from "./ButtonGroup-DKNdEWrH.js";
import { _ as __unplugin_components_9, a as __unplugin_components_6 } from "./Tabs-Bty2OdIu.js";
import "./Pagination-DTxcX5iK.js";
import "./Forward-C2N4dC5_.js";
import "./create-DfXrl36C.js";
import "./create-ref-setter-slkfdNqs.js";
import "./showDirectoryDialog-CbG0Fkj3.js";
import "./CloseOutline-Drabg5To.js";
import "./text-BHgaUKrH.js";
import "./useNotice-D8AmCNaE.js";
import "./RadioGroup-CJq397k5.js";
import "./Space-Dcg2rQj1.js";
import "./showInput-DT3gy469.js";
import "./DatePicker-bHyidnXI.js";
import "./TimePicker-WQrinlQm.js";
import "./_getTag-22mR82vJ.js";
import "./ChevronRight-BrIDHZkd.js";
import "./Dropdown-CwFZzQPI.js";
const _hoisted_1$1 = {
  class: "flex align-center",
  style: {
    "justify-content": "flex-end"
  }
};
const _hoisted_2$1 = {
  class: "flex align-center",
  style: {
    "justify-content": "flex-end"
  }
};
const _hoisted_3$1 = { key: 0 };
const _hoisted_4$1 = { key: 1 };
const _hoisted_5$1 = { key: 2 };
const _hoisted_6$1 = {
  key: 0,
  class: "resolution-settings"
};
const _hoisted_7$1 = { class: "resolution-dimension-group" };
const _hoisted_8$1 = {
  key: 0,
  class: "resolution-option-group"
};
const _hoisted_9$1 = { class: "resolution-option-group" };
const _hoisted_10$1 = { class: "resolution-option-group" };
const _hoisted_11$1 = {
  key: 1,
  class: "resolution-option-group"
};
const _hoisted_12$1 = { class: "resolution-option-group" };
const _hoisted_13$1 = { class: "actions" };
const _hoisted_14$1 = { style: { "text-align": "right" } };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ffmpegSetting",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const notice = useNotification();
    const confirmDialog = useConfirm();
    const { ffmpegOptions: options } = storeToRefs(useFfmpegPreset());
    const { getPresetOptions } = useFfmpegPreset();
    const { isMobile } = useBreakpoints();
    const labelWidth = computed(() => {
      return isMobile.value ? "90px" : "120px";
    });
    const emits = __emit;
    const presetId = useModel(__props, "modelValue");
    const audioEncoders = ref([
      {
        value: "copy",
        label: "copy(复制流)"
      },
      {
        value: "aac",
        label: "AAC"
      },
      {
        value: "libmp3lame",
        label: "MP3"
      },
      {
        value: "libopus",
        label: "Opus"
      },
      {
        value: "ac3",
        label: "AC3"
      },
      {
        value: "flac",
        label: "FLAC"
      }
    ]);
    const videoEncoders$1 = ref(videoEncoders);
    const encoderOptions = computed(() => {
      return videoEncoders$1.value.find((item) => item.value === ffmpegOptions.value?.config?.encoder);
    });
    const swsOptions = ref([
      {
        value: "auto",
        label: "默认"
      },
      {
        value: "bilinear",
        label: "bilinear(双线性插值)"
      },
      {
        value: "bicubic",
        label: "bicubic(三次插值)"
      },
      {
        value: "lanczos",
        label: "lanczos(Lanczos插值)"
      },
      {
        value: "neighbor",
        label: "neighbor(最近邻插值)"
      }
    ]);
    const scaleMethodOptions = ref([
      {
        value: "auto",
        label: "自动"
      },
      {
        value: "before",
        label: "先缩放后渲染"
      },
      {
        value: "after",
        label: "先渲染后缩放"
      }
    ]);
    const forceOriginalAspectRatioOptions = ref([
      {
        value: "auto",
        label: "自动"
      },
      {
        value: "decrease",
        label: "缩小"
      },
      {
        value: "increase",
        label: "放大"
      }
    ]);
    const ffmpegOptions = ref({
      id: "",
      name: "",
      config: {}
    });
    watch(
      () => ffmpegOptions.value,
      (value) => {
        emits("change", value);
      }
    );
    const handlePresetChange = async () => {
      if (!presetId.value) return;
      ffmpegOptions.value = await ffmpegPreset.get(presetId.value);
    };
    watch(presetId, handlePresetChange, {
      immediate: true
    });
    const rename = async () => {
      tempPresetName.value = ffmpegOptions.value.name;
      isRename.value = true;
      nameModelVisible.value = true;
    };
    const saveAs = async () => {
      isRename.value = false;
      tempPresetName.value = "";
      nameModelVisible.value = true;
    };
    const { appConfig } = storeToRefs(useAppConfig());
    const deletePreset = async () => {
      let ids = Object.entries(appConfig.value.webhook.rooms || {}).map(([, value]) => {
        return value?.ffmpegPreset;
      });
      ids.push(appConfig.value.webhook?.ffmpegPreset);
      ids = ids.filter((id) => id !== void 0 && id !== "");
      const msg = ids.includes(presetId.value) ? "该预设正在被使用中，删除后使用该预设的功能将失效，是否确认删除？" : "是否确认删除该预设？";
      const [status] = await confirmDialog.warning({
        content: msg
      });
      if (!status) return;
      await ffmpegPreset.remove(presetId.value);
      presetId.value = "default";
      getPresetOptions();
    };
    const nameModelVisible = ref(false);
    const tempPresetName = ref("");
    const isRename = ref(false);
    const saveConfig = async () => {
      await ffmpegPreset.save(toRaw(ffmpegOptions.value));
      notice.success({
        title: "保存成功",
        duration: 1e3
      });
    };
    const saveConfirm = async () => {
      if (!tempPresetName.value) {
        notice.warning({
          title: "预设名称不得为空",
          duration: 2e3
        });
        return;
      }
      const preset = cloneDeep(ffmpegOptions.value);
      if (!isRename.value) preset.id = uuid();
      preset.name = tempPresetName.value;
      await ffmpegPreset.save(preset);
      nameModelVisible.value = false;
      notice.success({
        title: "保存成功",
        duration: 1e3
      });
      getPresetOptions();
      if (isRename.value) {
        ffmpegOptions.value.name = tempPresetName.value;
      }
    };
    const handleVideoEncoderChange = (value) => {
      ffmpegOptions.value.config.encoder = value;
      if ((encoderOptions.value?.birateControls || []).map((item) => item.value).includes(ffmpegOptions.value?.config?.bitrateControl || "")) ;
      else {
        ffmpegOptions.value.config.bitrateControl = encoderOptions.value?.birateControls[0].value;
      }
    };
    const crfMinMax = computed(() => {
      if (ffmpegOptions.value.config.encoder === "libsvtav1") {
        return [0, 63];
      } else if (ffmpegOptions.value.config.encoder === "libx264") {
        return [0, 51];
      } else {
        return [0, 51];
      }
    });
    const hardwareAcceleration = computed(() => {
      const encoder = ffmpegOptions.value.config.encoder;
      if (["h264_nvenc", "hevc_nvenc", "av1_nvenc"].includes(encoder)) {
        return "nvenc";
      } else if (["h264_qsv", "hevc_qsv", "av1_qsv"].includes(encoder)) {
        return "qsv";
      } else if (["h264_amf", "hevc_amf", "av1_amf"].includes(encoder)) {
        return "amf";
      } else if (["copy"].includes(encoder)) {
        return "copy";
      } else if (["libx264", "libx265", "libsvtav1"].includes(encoder)) {
        return "cpu";
      } else {
        return "unknown";
      }
    });
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$3;
      const _component_n_cascader = __unplugin_components_0;
      const _component_n_form_item = __unplugin_components_2;
      const _component_n_divider = __unplugin_components_1;
      const _component_n_icon = NIcon;
      const _component_n_popover = __unplugin_components_2$1;
      const _component_n_select = __unplugin_components_0$1;
      const _component_n_input_number = __unplugin_components_1$1;
      const _component_n_checkbox = __unplugin_components_1$2;
      const _component_n_color_picker = __unplugin_components_2$2;
      const _component_n_form = __unplugin_components_5;
      const _component_n_input = __unplugin_components_2$3;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_3$1;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_form, {
        ref: "formRef",
        "label-width": unref(labelWidth),
        "label-placement": "left",
        "label-align": "right"
      }, {
        default: withCtx(() => [
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createVNode(_component_Tip, { text: "预设" }, {
                default: withCtx(() => _cache[32] || (_cache[32] = [
                  createTextVNode(" 修改编码器时优先从预设中修改，不同的预设会有不同的默认参数 ")
                ])),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_n_cascader, {
                value: presetId.value,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => presetId.value = $event),
                placeholder: "请选择预设",
                "expand-trigger": "click",
                options: unref(options),
                "check-strategy": "child",
                "show-path": false,
                filterable: true
              }, null, 8, ["value", "options"])
            ]),
            _: 1
          }),
          createVNode(_component_n_divider),
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createVNode(_component_n_popover, { trigger: "hover" }, {
                trigger: withCtx(() => [
                  createBaseVNode("span", _hoisted_1$1, [
                    _cache[33] || (_cache[33] = createTextVNode(" 视频编码 ")),
                    createVNode(_component_n_icon, {
                      size: "18",
                      class: "pointer"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(HelpCircleOutline))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  _cache[34] || (_cache[34] = createBaseVNode("p", { style: { "color": "red" } }, "请勿选择不支持的硬件加速方案，如果报错请尝试更新驱动", -1)),
                  _cache[35] || (_cache[35] = createBaseVNode("p", null, [
                    createTextVNode(" 如果想更换编码器，最好从预设中修改，不同的编码器会有一些不同的默认参数，"),
                    createBaseVNode("b", null, "请多多尝试来确定使用的编码")
                  ], -1)),
                  _cache[36] || (_cache[36] = createBaseVNode("p", null, "lib 使用 CPU 进行编码，无硬件加速，速度较慢，但效果可能是最好的", -1)),
                  _cache[37] || (_cache[37] = createBaseVNode("p", null, "QSV 是 Intel 的核显加速", -1)),
                  _cache[38] || (_cache[38] = createBaseVNode("p", null, "NVEnc 是 NVIDIA 的显卡加速", -1)),
                  _cache[39] || (_cache[39] = createBaseVNode("p", null, "AMF 是 AMD 的硬件加速", -1)),
                  _cache[40] || (_cache[40] = createBaseVNode("p", null, "H264泛用性较高，压缩率较低；H265 压缩率高于H264但可能低于AV1", -1)),
                  _cache[41] || (_cache[41] = createBaseVNode("p", null, "AV1 新一代的编码宠儿，需要新一代硬件才可硬件加速，如40系显卡", -1)),
                  _cache[42] || (_cache[42] = createBaseVNode("p", null, "如果是 apple 专用编码，请使用相关专业编码，AV1 需要ffmpeg8.0及以上", -1)),
                  _cache[43] || (_cache[43] = createBaseVNode("p", null, [
                    createTextVNode("copy为复制原始流，不做任何更改，"),
                    createBaseVNode("b", null, "如果你需要压制弹幕请不要使用这个参数")
                  ], -1))
                ]),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_n_select, {
                value: unref(ffmpegOptions).config.encoder,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(ffmpegOptions).config.encoder = $event),
                options: unref(videoEncoders$1),
                "on-update:value": handleVideoEncoderChange
              }, null, 8, ["value", "options"])
            ]),
            _: 1
          }),
          unref(ffmpegOptions).config.encoder !== "copy" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            (unref(encoderOptions)?.birateControls || []).length !== 0 ? (openBlock(), createBlock(_component_n_form_item, {
              key: 0,
              label: "码率控制"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: unref(ffmpegOptions).config.bitrateControl,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(ffmpegOptions).config.bitrateControl = $event),
                  options: unref(encoderOptions)?.birateControls || [],
                  clearable: ""
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            unref(ffmpegOptions).config.bitrateControl === "CRF" || unref(ffmpegOptions).config.bitrateControl === "CQ" || unref(ffmpegOptions).config.bitrateControl === "ICQ" ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_2$1, [
                  unref(ffmpegOptions).config.bitrateControl === "CQ" ? (openBlock(), createElementBlock("span", _hoisted_3$1, "cq")) : unref(ffmpegOptions).config.bitrateControl === "ICQ" ? (openBlock(), createElementBlock("span", _hoisted_4$1, "ICQ")) : (openBlock(), createElementBlock("span", _hoisted_5$1, "crf")),
                  ["libx264", "libx265"].includes(unref(ffmpegOptions).config.encoder) ? (openBlock(), createBlock(_component_Tip, { key: 3 }, {
                    default: withCtx(() => _cache[44] || (_cache[44] = [
                      createBaseVNode("p", null, "CRF值为0：无损压缩，最高质量，最大文件大小。", -1),
                      createBaseVNode("p", null, " CRF值较低（例如，18-24）：高质量，较大文件大小。适用于需要高质量输出的情况，18为视觉无损。 ", -1),
                      createBaseVNode("p", null, "CRF值较高（例如，28-51）：较低质量，较小文件大小。适用于需要较小文件的情况。", -1),
                      createBaseVNode("p", null, "CRF值越小，压制越慢", -1)
                    ])),
                    _: 1
                  })) : ["h264_nvenc", "hevc_nvenc", "av1_nvenc"].includes(unref(ffmpegOptions).config.encoder) ? (openBlock(), createBlock(_component_Tip, { key: 4 }, {
                    default: withCtx(() => _cache[45] || (_cache[45] = [
                      createBaseVNode("p", null, "值为0：自动", -1),
                      createBaseVNode("p", null, "值为1-51：越小质量越高，越大质量越低", -1)
                    ])),
                    _: 1
                  })) : ["h264_qsv", "hevc_qsv", "av1_qsv"].includes(unref(ffmpegOptions).config.encoder) ? (openBlock(), createBlock(_component_Tip, { key: 5 }, {
                    default: withCtx(() => _cache[46] || (_cache[46] = [
                      createBaseVNode("p", null, "类似x264中的crf值，值为1-51：越小质量越高，越大质量越低", -1)
                    ])),
                    _: 1
                  })) : createCommentVNode("", true)
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: unref(ffmpegOptions).config.crf,
                  "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(ffmpegOptions).config.crf = $event),
                  valueModifiers: { number: true },
                  class: "input-number",
                  min: unref(crfMinMax)[0],
                  max: unref(crfMinMax)[1]
                }, null, 8, ["value", "min", "max"])
              ]),
              _: 1
            })) : unref(ffmpegOptions).config.bitrateControl === "VBR" ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
              label: withCtx(() => [
                createVNode(_component_Tip, { text: "码率" }, {
                  default: withCtx(() => _cache[47] || (_cache[47] = [
                    createTextVNode(" 如果你完全不懂参数代表什么，又觉得画质差，请拉高此参数。"),
                    createBaseVNode("br", null, null, -1),
                    createTextVNode(" 一般杂谈录播视频，码率 5000k 够了。如果是游戏，可以拉到 10000k及以上，如果弹幕较多，可以尝试拉到更高，具体码率可自行测试。 ")
                  ])),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: unref(ffmpegOptions).config.bitrate,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(ffmpegOptions).config.bitrate = $event),
                  valueModifiers: { number: true },
                  class: "input-number",
                  step: 500,
                  placeholder: "请输入码率"
                }, {
                  suffix: withCtx(() => _cache[48] || (_cache[48] = [
                    createTextVNode(" K ")
                  ])),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            (unref(encoderOptions)?.presets || []).length !== 0 ? (openBlock(), createBlock(_component_n_form_item, { key: 3 }, {
              label: withCtx(() => [
                createVNode(_component_Tip, { text: "preset" }, {
                  default: withCtx(() => _cache[49] || (_cache[49] = [
                    createTextVNode(" 推荐使用medium及以上参数 ")
                  ])),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: unref(ffmpegOptions).config.preset,
                  "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(ffmpegOptions).config.preset = $event),
                  options: unref(encoderOptions)?.presets || [],
                  placeholder: "请选择预设"
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, { text: "帧率" }, {
                  default: withCtx(() => _cache[50] || (_cache[50] = [
                    createTextVNode(" 使用 fps 滤镜控制输出帧率，留空时不生效。"),
                    createBaseVNode("br", null, null, -1),
                    createTextVNode(" 一般用于电台等帧率极低的视频，来避免滚动弹幕时出现卡顿 ")
                  ])),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: unref(ffmpegOptions).config.fps,
                  "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(ffmpegOptions).config.fps = $event),
                  valueModifiers: { number: true },
                  class: "input-number",
                  min: 0.01,
                  step: 1,
                  placeholder: "留空则不生效",
                  style: { "width": "120px", "flex": "none" }
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            ["libsvtav1"].includes(unref(ffmpegOptions).config.encoder) ? (openBlock(), createBlock(_component_n_form_item, { key: 4 }, {
              label: withCtx(() => [
                createVNode(_component_Tip, { text: "10bit" }, {
                  default: withCtx(() => _cache[51] || (_cache[51] = [
                    createTextVNode(" AV1 10bit 会占用更多的硬件资源，但画质会更好，如果硬件支持，建议开启 ")
                  ])),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_checkbox, {
                  checked: unref(ffmpegOptions).config.bit10,
                  "onUpdate:checked": _cache[7] || (_cache[7] = ($event) => unref(ffmpegOptions).config.bit10 = $event)
                }, null, 8, ["checked"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            ["qsv", "nvenc"].includes(unref(hardwareAcceleration)) ? (openBlock(), createBlock(_component_n_form_item, { key: 5 }, {
              label: withCtx(() => [
                createVNode(_component_Tip, { text: "硬件解码" }, {
                  default: withCtx(() => _cache[52] || (_cache[52] = [
                    createTextVNode(" 仅在未使用滤镜时才会开启硬件解码 ")
                  ])),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_checkbox, {
                  checked: unref(ffmpegOptions).config.decode,
                  "onUpdate:checked": _cache[8] || (_cache[8] = ($event) => unref(ffmpegOptions).config.decode = $event)
                }, null, 8, ["checked"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "分辨率",
                  class: "resolution-label"
                }, {
                  default: withCtx(() => _cache[53] || (_cache[53] = [
                    createBaseVNode("p", null, " 实质上不会提升画质，但由于B站4K可拥有更高码率，可以通过缩放分辨率来减少二压对码率的影响，会影响压制时间。 ", -1),
                    createBaseVNode("p", null, "可以尝试开启硬件过滤器，某些情况下可以大幅加快，也有可能并不能。", -1),
                    createBaseVNode("p", null, [
                      createTextVNode(" B站4k画质要求短边大于1600，如果原视频为1080，可以尝试设置为2880x1620"),
                      createBaseVNode("br"),
                      createTextVNode(" 也可以设置为-2:1620来进行自适应，"),
                      createBaseVNode("b", null, "请尽量将分辨率设置为偶数")
                    ], -1),
                    createBaseVNode("p", null, [
                      createTextVNode("4K：3840X2160"),
                      createBaseVNode("br"),
                      createTextVNode("2K：2560X1440"),
                      createBaseVNode("br"),
                      createTextVNode("1080：1920X1080")
                    ], -1),
                    createBaseVNode("p", null, " 如果需要放大分辨率，可以选择先渲染后缩放，如果是缩小分辨率，可以选择先缩放后渲染，自动策略为先渲染后缩放 ", -1),
                    createBaseVNode("p", null, "强制宽高比：具体参数含义自行尝试或查询文档", -1),
                    createBaseVNode("p", null, [
                      createTextVNode(" pk优化：特调解决上传B站后pk视频被拉伸，在开启后“强制宽高比”参数会被强制为“缩小”，会添加“pad=with:height:(ow-iw)/2:(oh-ih)/2”滤镜。"),
                      createBaseVNode("br"),
                      createTextVNode(" 在webhook使用时转码时进行分辨率检测，只会存在多个分辨率时才会进行转码（不针对弹幕）。"),
                      createBaseVNode("br"),
                      createTextVNode(" 如果你不知道分辨率如何设置，可以尝试设置为1920*1080，如果你在使用cpu转码，推荐码率控制使用crf，并设置在23或更大，再根据配置调整 preset 参数。 "),
                      createBaseVNode("b", null, "如果没有相关需求，请不要开启")
                    ], -1)
                  ])),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_checkbox, {
                  checked: unref(ffmpegOptions).config.resetResolution,
                  "onUpdate:checked": _cache[9] || (_cache[9] = ($event) => unref(ffmpegOptions).config.resetResolution = $event),
                  style: { "margin-right": "20px" }
                }, null, 8, ["checked"]),
                unref(ffmpegOptions).config.resetResolution ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
                  createBaseVNode("div", _hoisted_7$1, [
                    createVNode(_component_n_input_number, {
                      value: unref(ffmpegOptions).config.resolutionWidth,
                      "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(ffmpegOptions).config.resolutionWidth = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: -2,
                      step: 100,
                      title: "宽",
                      placeholder: "宽",
                      style: { "width": "100px", "flex": "none" }
                    }, null, 8, ["value"]),
                    _cache[54] || (_cache[54] = createBaseVNode("span", { class: "dimension-separator" }, "X", -1)),
                    createVNode(_component_n_input_number, {
                      value: unref(ffmpegOptions).config.resolutionHeight,
                      "onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(ffmpegOptions).config.resolutionHeight = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: -2,
                      step: 100,
                      title: "高",
                      placeholder: "高",
                      style: { "width": "100px", "flex": "none" }
                    }, null, 8, ["value"])
                  ]),
                  unref(hardwareAcceleration) !== "qsv" ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
                    _cache[55] || (_cache[55] = createBaseVNode("div", { class: "resolution-section-title" }, "缩放算法", -1)),
                    createVNode(_component_n_select, {
                      value: unref(ffmpegOptions).config.swsFlags,
                      "onUpdate:value": _cache[12] || (_cache[12] = ($event) => unref(ffmpegOptions).config.swsFlags = $event),
                      options: unref(swsOptions),
                      title: "缩放算法",
                      placeholder: "请选择缩放算法，默认为自动",
                      style: { "width": "200px" }
                    }, null, 8, ["value", "options"])
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_9$1, [
                    _cache[56] || (_cache[56] = createBaseVNode("div", { class: "resolution-section-title" }, "处理顺序", -1)),
                    createVNode(_component_n_select, {
                      value: unref(ffmpegOptions).config.scaleMethod,
                      "onUpdate:value": _cache[13] || (_cache[13] = ($event) => unref(ffmpegOptions).config.scaleMethod = $event),
                      options: unref(scaleMethodOptions),
                      title: "缩放顺序",
                      placeholder: "请选择缩放顺序",
                      style: { "width": "150px" }
                    }, null, 8, ["value", "options"])
                  ]),
                  createBaseVNode("div", _hoisted_10$1, [
                    _cache[57] || (_cache[57] = createBaseVNode("div", { class: "resolution-section-title" }, "强制宽高比", -1)),
                    createVNode(_component_n_select, {
                      value: unref(ffmpegOptions).config.forceOriginalAspectRatio,
                      "onUpdate:value": _cache[14] || (_cache[14] = ($event) => unref(ffmpegOptions).config.forceOriginalAspectRatio = $event),
                      options: unref(forceOriginalAspectRatioOptions),
                      title: "force_original_aspect_ratio",
                      style: { "width": "100px" }
                    }, null, 8, ["value", "options"])
                  ]),
                  ["qsv", "nvenc"].includes(unref(hardwareAcceleration)) ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(ffmpegOptions).config.hardwareScaleFilter,
                      "onUpdate:checked": _cache[15] || (_cache[15] = ($event) => unref(ffmpegOptions).config.hardwareScaleFilter = $event)
                    }, {
                      default: withCtx(() => _cache[58] || (_cache[58] = [
                        createTextVNode("硬件过滤器")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_12$1, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(ffmpegOptions).config.pkOptimize,
                      "onUpdate:checked": _cache[16] || (_cache[16] = ($event) => unref(ffmpegOptions).config.pkOptimize = $event)
                    }, {
                      default: withCtx(() => _cache[59] || (_cache[59] = [
                        createTextVNode("pk优化")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, { text: "时间戳" }, {
                  default: withCtx(() => _cache[60] || (_cache[60] = [
                    createTextVNode(" 添加时间戳到视频中，优先从webhook中读取、其次是弹幕元数据（支持录播姬、blrec、本软件下载的录播）、最后是视频元数据（如录播姬注释）。"),
                    createBaseVNode("br", null, null, -1),
                    createTextVNode(" 即使你开启此选项，如果一条都未被匹配到，也是不会被渲染的"),
                    createBaseVNode("br", null, null, -1)
                  ])),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_checkbox, {
                  checked: unref(ffmpegOptions).config.addTimestamp,
                  "onUpdate:checked": _cache[17] || (_cache[17] = ($event) => unref(ffmpegOptions).config.addTimestamp = $event),
                  style: { "margin-right": "20px" }
                }, null, 8, ["checked"]),
                unref(ffmpegOptions).config.addTimestamp ? (openBlock(), createBlock(_component_n_form, {
                  key: 0,
                  inline: "",
                  "label-placement": "left",
                  "label-align": "right",
                  "show-feedback": false,
                  "label-width": "40px",
                  style: { "flex-wrap": "wrap" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, { label: "x轴" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_input_number, {
                          value: unref(ffmpegOptions).config.timestampX,
                          "onUpdate:value": _cache[18] || (_cache[18] = ($event) => unref(ffmpegOptions).config.timestampX = $event),
                          valueModifiers: { number: true },
                          class: "input-number",
                          min: 0,
                          step: 10,
                          title: "x轴坐标",
                          placeholder: "x轴坐标",
                          style: { "width": "120px" }
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, { label: "y轴" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_input_number, {
                          value: unref(ffmpegOptions).config.timestampY,
                          "onUpdate:value": _cache[19] || (_cache[19] = ($event) => unref(ffmpegOptions).config.timestampY = $event),
                          valueModifiers: { number: true },
                          class: "input-number",
                          min: 0,
                          step: 10,
                          title: "y轴坐标",
                          placeholder: "y轴坐标",
                          style: { "width": "120px" }
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, { label: "字体大小" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_input_number, {
                          value: unref(ffmpegOptions).config.timestampFontSize,
                          "onUpdate:value": _cache[20] || (_cache[20] = ($event) => unref(ffmpegOptions).config.timestampFontSize = $event),
                          valueModifiers: { number: true },
                          class: "input-number",
                          min: 10,
                          step: 1,
                          title: "字体大小",
                          placeholder: "字体大小",
                          style: { "width": "120px" }
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, {
                      label: "字体颜色",
                      style: { "width": "120px" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_color_picker, {
                          value: unref(ffmpegOptions).config.timestampFontColor,
                          "onUpdate:value": _cache[21] || (_cache[21] = ($event) => unref(ffmpegOptions).config.timestampFontColor = $event),
                          title: "字体颜色"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, {
                      label: "跟随弹幕字体",
                      "label-width": "100px"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_checkbox, {
                          checked: unref(ffmpegOptions).config.timestampFollowDanmu,
                          "onUpdate:checked": _cache[22] || (_cache[22] = ($event) => unref(ffmpegOptions).config.timestampFollowDanmu = $event)
                        }, null, 8, ["checked"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            unref(ffmpegOptions).config.addTimestamp ? (openBlock(), createBlock(_component_n_form_item, { key: 6 }, {
              label: withCtx(() => [
                createVNode(_component_Tip, { text: "时间戳参数" }, {
                  default: withCtx(() => _cache[61] || (_cache[61] = [
                    createTextVNode(" 内容格式占位符具体见 "),
                    createBaseVNode("a", {
                      target: "_blank",
                      href: "https://strftime.org/"
                    }, "strftime", -1),
                    createTextVNode(" （"),
                    createBaseVNode("code", null, ":", -1),
                    createTextVNode(" 需要额外转义）"),
                    createBaseVNode("br", null, null, -1),
                    createTextVNode(" 自定义参数具体见 "),
                    createBaseVNode("a", {
                      target: "_blank",
                      href: "https://ffmpeg.org/ffmpeg-filters.html#drawtext-1"
                    }, "ffmpeg滤镜文档", -1),
                    createTextVNode("，示例："),
                    createBaseVNode("code", null, "box=1:boxcolor=#ff0000", -1)
                  ])),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_form, {
                  inline: "",
                  "label-placement": "left",
                  "label-align": "right",
                  "show-feedback": false,
                  "label-width": "80px",
                  style: { "width": "100%" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form_item, { label: "内容格式" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(ffmpegOptions).config.timestampFormat,
                          "onUpdate:value": _cache[23] || (_cache[23] = ($event) => unref(ffmpegOptions).config.timestampFormat = $event),
                          placeholder: "请输入内容格式",
                          "input-props": { spellcheck: "false" }
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, { label: "额外参数" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(ffmpegOptions).config.timestampExtra,
                          "onUpdate:value": _cache[24] || (_cache[24] = ($event) => unref(ffmpegOptions).config.timestampExtra = $event),
                          placeholder: "请输入额外参数",
                          "input-props": { spellcheck: "false" }
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, { text: "编码线程数" }, {
                  default: withCtx(() => _cache[62] || (_cache[62] = [
                    createTextVNode(" 默认值为-1，由ffmpeg自动选择 ")
                  ])),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: unref(ffmpegOptions).config.encoderThreads,
                  "onUpdate:value": _cache[25] || (_cache[25] = ($event) => unref(ffmpegOptions).config.encoderThreads = $event),
                  valueModifiers: { number: true },
                  class: "input-number",
                  min: -1,
                  step: 1,
                  placeholder: "编码线程数",
                  style: { "width": "100px", "flex": "none" }
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ], 64)) : createCommentVNode("", true),
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createVNode(_component_Tip, { text: "音频编码器" }, {
                default: withCtx(() => _cache[63] || (_cache[63] = [
                  createTextVNode(" 你也可以不选，在输出参数中完全自定义 ")
                ])),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_n_select, {
                value: unref(ffmpegOptions).config.audioCodec,
                "onUpdate:value": _cache[26] || (_cache[26] = ($event) => unref(ffmpegOptions).config.audioCodec = $event),
                options: unref(audioEncoders),
                clearable: "",
                placeholder: "请选择音频编码器"
              }, null, 8, ["value", "options"])
            ]),
            _: 1
          }),
          unref(ffmpegOptions).config.encoder !== "copy" ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
            label: withCtx(() => [
              createVNode(_component_Tip, { text: "视频滤镜" }, {
                default: withCtx(() => _cache[64] || (_cache[64] = [
                  createBaseVNode("code", null, "$origin", -1),
                  createTextVNode(" 是由其他配置生成的默认参数，如果没有该参数，谁也不知道会发生什么事"),
                  createBaseVNode("br", null, null, -1),
                  createTextVNode(" 例：hflip;$origin;transpose=1 解释：先水平翻转，然后应用默认参数，最后旋转90度"),
                  createBaseVNode("br", null, null, -1),
                  createTextVNode(" 如果使用了该自定义设置，那么分辨率参数可能不会如你所愿，请手动设置 ")
                ])),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_n_input, {
                value: unref(ffmpegOptions).config.vf,
                "onUpdate:value": _cache[27] || (_cache[27] = ($event) => unref(ffmpegOptions).config.vf = $event),
                type: "textarea",
                placeholder: "请输入滤镜参数",
                style: { "width": "100%" },
                "input-props": { spellcheck: "false" }
              }, null, 8, ["value"])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createVNode(_component_Tip, { text: "额外输出参数" }, {
                default: withCtx(() => _cache[65] || (_cache[65] = [
                  createTextVNode(" 参数将被附加到ffmpeg输出参数中，参数错误可能会导致无法运行 ")
                ])),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_n_input, {
                value: unref(ffmpegOptions).config.extraOptions,
                "onUpdate:value": _cache[28] || (_cache[28] = ($event) => unref(ffmpegOptions).config.extraOptions = $event),
                type: "textarea",
                placeholder: "请输入额外参数",
                style: { "width": "100%" },
                "input-props": { spellcheck: "false" }
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_13$1, [
            !presetId.value.startsWith("b_") && presetId.value !== "default" ? (openBlock(), createBlock(_component_n_button, {
              key: 0,
              ghost: "",
              quaternary: "",
              class: "btn",
              type: "error",
              onClick: deletePreset
            }, {
              default: withCtx(() => _cache[66] || (_cache[66] = [
                createTextVNode("删除")
              ])),
              _: 1
            })) : createCommentVNode("", true),
            !presetId.value.startsWith("b_") ? (openBlock(), createBlock(_component_n_button, {
              key: 1,
              type: "primary",
              class: "btn",
              onClick: rename
            }, {
              default: withCtx(() => _cache[67] || (_cache[67] = [
                createTextVNode("重命名")
              ])),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_button, {
              type: "primary",
              class: "btn",
              onClick: saveAs
            }, {
              default: withCtx(() => _cache[68] || (_cache[68] = [
                createTextVNode("另存为")
              ])),
              _: 1
            }),
            !presetId.value.startsWith("b_") ? (openBlock(), createBlock(_component_n_button, {
              key: 2,
              type: "primary",
              class: "btn",
              onClick: saveConfig
            }, {
              default: withCtx(() => _cache[69] || (_cache[69] = [
                createTextVNode("保存")
              ])),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          createVNode(_component_n_modal, {
            show: unref(nameModelVisible),
            "onUpdate:show": _cache[31] || (_cache[31] = ($event) => isRef(nameModelVisible) ? nameModelVisible.value = $event : null)
          }, {
            default: withCtx(() => [
              createVNode(_component_n_card, {
                style: { "width": "600px" },
                bordered: false,
                role: "dialog",
                "aria-modal": "true"
              }, {
                footer: withCtx(() => [
                  createBaseVNode("div", _hoisted_14$1, [
                    createVNode(_component_n_button, {
                      onClick: _cache[30] || (_cache[30] = ($event) => nameModelVisible.value = false)
                    }, {
                      default: withCtx(() => _cache[70] || (_cache[70] = [
                        createTextVNode("取消")
                      ])),
                      _: 1
                    }),
                    createVNode(_component_n_button, {
                      type: "primary",
                      style: { "margin-left": "10px" },
                      onClick: saveConfirm
                    }, {
                      default: withCtx(() => _cache[71] || (_cache[71] = [
                        createTextVNode("确认")
                      ])),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: unref(tempPresetName),
                    "onUpdate:value": _cache[29] || (_cache[29] = ($event) => isRef(tempPresetName) ? tempPresetName.value = $event : null),
                    placeholder: "请输入预设名称",
                    maxlength: "15",
                    onKeyup: withKeys(saveConfirm, ["enter"])
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["show"])
        ]),
        _: 1
      }, 8, ["label-width"]);
    };
  }
});
const ffmpegSetting = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d373ff1f"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "previewModal",
  props: /* @__PURE__ */ mergeModels({
    files: { default: () => {
      return {
        video: "",
        danmu: "",
        type: ""
      };
    } },
    hotProgress: {}
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  }),
  emits: ["update:visible"],
  setup(__props) {
    const showModal = useModel(__props, "visible");
    const props = __props;
    const videoRef = ref(null);
    watch(
      () => props.files.danmu,
      async () => {
        initDanma();
      }
    );
    const initDanma = async () => {
      if (!props.files.danmu) return;
      if (props.files.danmu.endsWith(".ass")) {
        const content = await common.readDanma(props.files.danmu);
        videoRef.value?.switchAss(content);
      } else if (props.files.danmu.endsWith(".xml")) {
        const content = await danma.parseForArtPlayer(props.files.danmu);
        videoRef.value?.switchDanmuku(content);
      } else {
        throw new Error("不支持的弹幕格式");
      }
      if (props.hotProgress.visible) {
        const data = await common.genTimeData(props.files.danmu);
        videoInstance.value && videoInstance.value.artplayerPluginHeatmap.setData(data);
        setTimeout(() => {
          videoInstance.value.artplayerPluginHeatmap.setOptions(props.hotProgress);
          videoInstance.value?.artplayerPluginHeatmap.show();
        }, 200);
      } else {
        videoInstance.value?.artplayerPluginHeatmap.hide();
      }
    };
    const videoInstance = ref(null);
    const handleVideoReady = async (instance) => {
      videoInstance.value = instance;
      if (props.files.video) {
        videoRef.value?.switchUrl(props.files.video, props.files.type);
      }
      initDanma();
    };
    return (_ctx, _cache) => {
      const _component_n_card = __unplugin_components_3$1;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showModal.value = $event)
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "80%" },
            bordered: false,
            role: "dialog",
            "aria-modal": "true"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$4, {
                ref_key: "videoRef",
                ref: videoRef,
                style: { "aspect-ratio": "16 / 9" },
                option: {
                  fullscreen: true,
                  plugins: {
                    heatmap: {
                      option: props.hotProgress
                    }
                  }
                },
                plugins: ["ass", "heatmap", "danmuku"],
                onReady: handleVideoReady
              }, null, 8, ["option"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const _hoisted_1 = {
  class: "flex justify-center column align-center",
  style: { "margin-bottom": "20px" }
};
const _hoisted_2 = {
  class: "flex",
  style: { "gap": "10px" }
};
const _hoisted_3 = { class: "flex column" };
const _hoisted_4 = { style: { "margin-top": "10px" } };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = {
  key: 1,
  style: { "display": "flex", "gap": "10px", "align-items": "center", "margin-top": "20px" }
};
const _hoisted_7 = { style: { "flex-basis": "140px", "min-width": "120px" } };
const _hoisted_8 = { style: { "flex-basis": "140px", "min-width": "120px" } };
const _hoisted_9 = { style: { "width": "140px" } };
const _hoisted_10 = { style: { "width": "140px" } };
const _hoisted_11 = {
  class: "flex",
  style: { "gap": "10px", "align-items": "center" }
};
const _hoisted_12 = { class: "home-danmu-setting" };
const _hoisted_13 = {
  class: "footer flex",
  style: { "text-align": "right", "gap": "10px", "justify-content": "flex-end", "align-items": "center" }
};
const _hoisted_14 = { class: "home-ffmpeg-setting" };
const _hoisted_15 = { style: { "text-align": "right" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Home"
  },
  __name: "index",
  setup(__props) {
    onActivated(() => {
      hotkeys("ctrl+enter", function() {
        handleConvert();
      });
    });
    onDeactivated(() => {
      hotkeys.unbind();
    });
    onUnmounted(() => {
      hotkeys.unbind();
    });
    const notice = useNotification();
    const confirm = useConfirm();
    const activeTab = ref("common-setting");
    const { homeDrive } = useDrive();
    const { danmuPresetsOptions, danmuPresetId, danmuPreset: danmuPreset$1 } = storeToRefs(useDanmuPreset());
    const { getDanmuPresets } = useDanmuPreset();
    const { userInfo } = storeToRefs(useUserInfoStore());
    const { appConfig } = storeToRefs(useAppConfig());
    const { handlePresetOptions, presetOptions } = useBili();
    const isWeb = computed(() => window.isWeb);
    const fileList = ref([]);
    const clientOptions = toReactive(
      computed({
        get: () => appConfig.value.tool.home,
        set: (value) => {
          appConfig.value.tool.home = value;
        }
      })
    );
    const preHandle = async (files, clientOptions2, danmuConfig) => {
      if (files.length === 0) {
        return false;
      }
      if (ffmpegOptions.value.encoder === "copy") throw new Error("视频编码不能为copy");
      if (clientOptions2.autoUpload) await biliUpCheck();
      const videoFile = files.find(
        (item) => item.ext === ".flv" || item.ext === ".mp4" || item.ext === ".m4s" || item.ext === ".ts" || item.ext === ".mkv"
      );
      const danmuFile = files.find((item) => item.ext === ".xml" || item.ext === ".ass");
      if (!videoFile) {
        notice.error({
          title: "请选择一个flv、mp4、m4s、ts、mkv文件",
          duration: 1e3
        });
        return false;
      }
      if (!danmuFile) {
        notice.error({
          title: "请选择一个xml或者ass文件",
          duration: 1e3
        });
        return false;
      }
      if (danmuFile.ext === ".xml") {
        const videoMeta = await task.readVideoMeta(videoFile.path);
        const videoStream = videoMeta?.streams?.find((stream) => stream.codec_type === "video");
        const { width, height } = videoStream || {};
        if (width && !danmuConfig.resolutionResponsive && danmuConfig.resolution[0] !== width && danmuConfig.resolution[1] !== height) {
          const [status] = await confirm.warning({
            content: `目标视频分辨率为${width}*${height}，与设置的弹幕分辨率不一致，是否继续？`,
            showCheckbox: true,
            showAgainKey: "danmuResolution"
          });
          if (!status) return false;
        }
      }
      return {
        inputVideoFile: videoFile,
        inputDanmuFile: danmuFile
      };
    };
    const handleConvert = async () => {
      const files = toRaw(fileList.value);
      const rawClientOptions = toRaw(clientOptions);
      const data = await preHandle(files, rawClientOptions, danmuPreset$1.value.config);
      if (!data) return;
      const outputPath = await showSaveDialog({
        defaultPath: `${data.inputVideoFile.name}-弹幕版.mp4`
      });
      if (!outputPath) return;
      const { inputVideoFile, inputDanmuFile } = data;
      await task.burn(
        {
          videoFilePath: inputVideoFile.path,
          subtitleFilePath: inputDanmuFile.path
        },
        outputPath,
        {
          danmaOptions: danmuPreset$1.value.config,
          ffmpegOptions: ffmpegOptions.value,
          hotProgressOptions: {
            interval: rawClientOptions.hotProgressSample,
            height: rawClientOptions.hotProgressHeight,
            color: rawClientOptions.hotProgressColor,
            fillColor: rawClientOptions.hotProgressFillColor
          },
          hasHotProgress: rawClientOptions.hotProgress,
          override: true,
          uploadOptions: {
            upload: rawClientOptions.autoUpload,
            config: presetOptions.value.config,
            aid: aid.value,
            filePath: outputPath,
            uid: userInfo.value.uid,
            removeOriginAfterUploadCheck: rawClientOptions.removeOriginAfterUploadCheck
          }
        }
      );
      fileList.value = [];
    };
    const showTutorial = async (action) => {
      try {
        const data = JSON.parse(localStorage.getItem("notShowAgain") || "{}");
        if (!data["burnHelp"]) {
          homeDrive((tab) => {
            activeTab.value = tab;
          });
          data["burnHelp"] = true;
          localStorage.setItem("notShowAgain", JSON.stringify(data));
          return;
        }
      } catch (e) {
        localStorage.removeItem("notShowAgain");
        console.error("Failed to set notShowAgain in localStorage", e);
      }
      await action();
    };
    const handleStart = () => showTutorial(handleConvert);
    const handlePreview = () => showTutorial(preview);
    const biliUpCheck = async () => {
      const hasLogin = !!userInfo.value.uid;
      if (!hasLogin) {
        throw new Error(`请先进行登录`);
      }
      return true;
    };
    const appendVideoVisible = ref(false);
    const aid = ref();
    const ffmpegOptions = ref({});
    const handleFfmpegSettingChange = (preset) => {
      ffmpegOptions.value = preset.config;
    };
    const simpledMode = useStorage("simpledMode", false);
    const handleDanmuChange = (value) => {
      danmuPreset$1.value.config = value;
    };
    window?.api?.onMainNotify((_event, data) => {
      notice[data.type]({
        title: data.content,
        duration: 5e3
      });
    });
    const previewModalVisible = ref(false);
    const previewFiles = ref({
      video: "",
      danmu: "",
      type: ""
    });
    const preview = async () => {
      const files = toRaw(fileList.value);
      const rawClientOptions = toRaw(clientOptions);
      const rawDanmuConfig = deepRaw(danmuPreset$1.value.config);
      const data = await preHandle(files, rawClientOptions, rawDanmuConfig);
      if (!data) return;
      if (isWeb.value) {
        const { videoId, type } = await common.applyVideoId(data.inputVideoFile.path);
        const videoUrl = await common.getVideo(videoId);
        previewFiles.value.video = videoUrl;
        previewFiles.value.type = type;
      } else {
        previewFiles.value.video = data.inputVideoFile.path;
        if (data.inputVideoFile.path.endsWith(".flv")) {
          previewFiles.value.type = "flv";
        }
      }
      previewModalVisible.value = true;
      if (data.inputDanmuFile.path.endsWith(".xml")) {
        previewFiles.value.danmu = "";
        const { output } = await task.convertXml2Ass(
          data.inputDanmuFile.path,
          "随便取个名字",
          rawDanmuConfig,
          {
            removeOrigin: false,
            saveRadio: 2,
            savePath: "",
            temp: true,
            sync: true
          }
        );
        previewFiles.value.danmu = output;
      } else if (data.inputDanmuFile.path.endsWith(".ass")) {
        previewFiles.value.danmu = data.inputDanmuFile.path;
      }
    };
    const { exportPreset, importPreset } = usePresetFile();
    const actionBtns = ref([
      { label: "另存为", key: "saveAnother" },
      { label: "重命名", key: "rename" },
      { label: "导出", key: "export" },
      { label: "导入", key: "import" }
    ]);
    const handleActionClick = async (key) => {
      switch (key) {
        case "saveAnother":
          saveAsDanmu();
          break;
        case "rename":
          renameDanmu();
          break;
        case "export":
          exportPreset(danmuPreset$1.value.config, danmuPreset$1.value.name);
          break;
        case "import":
          importPreset();
          break;
        case void 0:
          saveDanmuPreset();
          break;
      }
    };
    const nameModelVisible = ref(false);
    const tempPresetName = ref("");
    const isRename = ref(false);
    const renameDanmu = async () => {
      tempPresetName.value = danmuPreset$1.value.name;
      isRename.value = true;
      nameModelVisible.value = true;
    };
    const saveAsDanmu = async () => {
      isRename.value = false;
      tempPresetName.value = "";
      nameModelVisible.value = true;
    };
    const deleteDanmu = async () => {
      const [status] = await confirm.warning({
        content: "是否确认删除该预设？"
      });
      if (!status) return;
      await danmuPreset.remove(danmuPresetId.value);
      danmuPresetId.value = "default";
      await getDanmuPresets();
    };
    const saveConfirm = async () => {
      if (!tempPresetName.value) {
        notice.warning({
          title: "预设名称不得为空",
          duration: 2e3
        });
        return;
      }
      const preset = cloneDeep(danmuPreset$1.value);
      if (!isRename.value) preset.id = uuid();
      preset.name = tempPresetName.value;
      await danmuPreset.save(preset);
      nameModelVisible.value = false;
      notice.success({
        title: "保存成功",
        duration: 1e3
      });
      getDanmuPresets();
      if (isRename.value) {
        danmuPreset$1.value.name = tempPresetName.value;
      }
    };
    const saveDanmuPreset = async () => {
      const preset = cloneDeep(danmuPreset$1.value);
      await danmuPreset.save(preset);
      notice.success({
        title: "保存成功",
        duration: 1e3
      });
      getDanmuPresets();
    };
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_checkbox = __unplugin_components_1$2;
      const _component_n_input_number = __unplugin_components_1$1;
      const _component_n_color_picker = __unplugin_components_2$2;
      const _component_n_tab_pane = __unplugin_components_6;
      const _component_n_select = __unplugin_components_0$1;
      const _component_n_tabs = __unplugin_components_9;
      const _component_n_input = __unplugin_components_2$3;
      const _component_n_card = __unplugin_components_3$1;
      const _component_n_modal = __unplugin_components_3;
      const _component_AppendVideoDialog = AppendVideoDialog;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_n_button, {
              title: "仅供参考，以实际渲染为主！",
              onClick: handlePreview
            }, {
              default: withCtx(() => _cache[21] || (_cache[21] = [
                createTextVNode(" 预览 ")
              ])),
              _: 1
            }),
            createVNode(_component_n_button, {
              type: "primary",
              onClick: handleStart,
              title: "启动！(ctrl+enter)"
            }, {
              default: withCtx(() => _cache[22] || (_cache[22] = [
                createTextVNode(" 启动！ ")
              ])),
              _: 1
            })
          ])
        ]),
        createVNode(FileArea, {
          modelValue: unref(fileList),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(fileList) ? fileList.value = $event : null),
          class: "home-file-area",
          extensions: ["flv", "mp4", "ass", "xml", "m4s", "ts", "mkv"],
          desc: "将视频和弹幕压制到一个文件中，请选择视频以及弹幕文件，如果为xml将自动转换为ass",
          max: 2
        }, null, 8, ["modelValue"]),
        createVNode(_component_n_tabs, {
          value: unref(activeTab),
          "onUpdate:value": _cache[14] || (_cache[14] = ($event) => isRef(activeTab) ? activeTab.value = $event : null),
          type: "segment",
          style: { "margin-top": "10px" },
          class: "tabs"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_tab_pane, {
              name: "common-setting",
              tab: "基础设置",
              "display-directive": "show:lazy"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3, [
                  _cache[33] || (_cache[33] = createBaseVNode("div", null, null, -1)),
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(clientOptions).hotProgress,
                      "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => unref(clientOptions).hotProgress = $event)
                    }, {
                      default: withCtx(() => _cache[23] || (_cache[23] = [
                        createTextVNode(" 高能进度条 ")
                      ])),
                      _: 1
                    }, 8, ["checked"]),
                    createVNode(_component_n_checkbox, {
                      checked: unref(clientOptions).autoUpload,
                      "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => unref(clientOptions).autoUpload = $event)
                    }, {
                      default: withCtx(() => _cache[24] || (_cache[24] = [
                        createTextVNode(" 完成后自动上传 ")
                      ])),
                      _: 1
                    }, 8, ["checked"]),
                    unref(clientOptions).autoUpload ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createVNode(_component_n_button, {
                        ghost: "",
                        type: "primary",
                        onClick: _cache[3] || (_cache[3] = ($event) => appendVideoVisible.value = true)
                      }, {
                        default: withCtx(() => [
                          _cache[25] || (_cache[25] = createTextVNode(" 续传 ")),
                          unref(aid) ? (openBlock(), createElementBlock("span", _hoisted_5, "(已选择)")) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_checkbox, {
                        checked: unref(clientOptions).removeOriginAfterUploadCheck,
                        "onUpdate:checked": _cache[4] || (_cache[4] = ($event) => unref(clientOptions).removeOriginAfterUploadCheck = $event),
                        style: { "margin-left": "10px" }
                      }, {
                        default: withCtx(() => _cache[26] || (_cache[26] = [
                          createTextVNode(" 审核后通过删除源文件 ")
                        ])),
                        _: 1
                      }, 8, ["checked"])
                    ], 64)) : createCommentVNode("", true),
                    unref(clientOptions).hotProgress ? (openBlock(), createElementBlock("div", _hoisted_6, [
                      createBaseVNode("div", _hoisted_7, [
                        _cache[28] || (_cache[28] = createTextVNode(" 采样间隔 ")),
                        createVNode(_component_n_input_number, {
                          value: unref(clientOptions).hotProgressSample,
                          "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(clientOptions).hotProgressSample = $event),
                          placeholder: "单位秒",
                          min: "1",
                          style: { "width": "100%" }
                        }, {
                          suffix: withCtx(() => _cache[27] || (_cache[27] = [
                            createTextVNode(" 秒 ")
                          ])),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      createBaseVNode("div", _hoisted_8, [
                        _cache[30] || (_cache[30] = createTextVNode(" 高度 ")),
                        createVNode(_component_n_input_number, {
                          value: unref(clientOptions).hotProgressHeight,
                          "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(clientOptions).hotProgressHeight = $event),
                          placeholder: "单位像素",
                          min: "10",
                          style: { "width": "100%" }
                        }, {
                          suffix: withCtx(() => _cache[29] || (_cache[29] = [
                            createTextVNode(" 像素 ")
                          ])),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      createBaseVNode("div", _hoisted_9, [
                        _cache[31] || (_cache[31] = createBaseVNode("div", null, "默认颜色", -1)),
                        createVNode(_component_n_color_picker, {
                          value: unref(clientOptions).hotProgressColor,
                          "onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(clientOptions).hotProgressColor = $event)
                        }, null, 8, ["value"])
                      ]),
                      createBaseVNode("div", _hoisted_10, [
                        _cache[32] || (_cache[32] = createBaseVNode("div", null, "覆盖颜色", -1)),
                        createVNode(_component_n_color_picker, {
                          value: unref(clientOptions).hotProgressFillColor,
                          "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(clientOptions).hotProgressFillColor = $event)
                        }, null, 8, ["value"])
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_tab_pane, {
              name: "upload-setting",
              tab: "上传设置",
              "display-directive": "show"
            }, {
              default: withCtx(() => [
                createVNode(BiliSetting, {
                  modelValue: unref(clientOptions).uploadPresetId,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(clientOptions).uploadPresetId = $event),
                  onChange: unref(handlePresetOptions)
                }, null, 8, ["modelValue", "onChange"])
              ]),
              _: 1
            }),
            createVNode(_component_n_tab_pane, {
              name: "danmukufactory-setting",
              tab: "弹幕设置",
              "display-directive": "show"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_11, [
                  _cache[34] || (_cache[34] = createBaseVNode("span", { style: { "flex": "none" } }, "预设", -1)),
                  createVNode(_component_n_select, {
                    value: unref(danmuPresetId),
                    "onUpdate:value": _cache[10] || (_cache[10] = ($event) => isRef(danmuPresetId) ? danmuPresetId.value = $event : null),
                    options: unref(danmuPresetsOptions),
                    placeholder: "选择预设"
                  }, null, 8, ["value", "options"])
                ]),
                createBaseVNode("div", _hoisted_12, [
                  unref(danmuPreset$1).id ? (openBlock(), createBlock(DanmuFactorySetting, {
                    key: 0,
                    modelValue: unref(danmuPreset$1).config,
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(danmuPreset$1).config = $event),
                    "simpled-mode": unref(simpledMode),
                    onChange: handleDanmuChange
                  }, null, 8, ["modelValue", "simpled-mode"])) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_13, [
                  createVNode(_component_n_checkbox, {
                    checked: unref(simpledMode),
                    "onUpdate:checked": _cache[12] || (_cache[12] = ($event) => isRef(simpledMode) ? simpledMode.value = $event : null)
                  }, {
                    default: withCtx(() => _cache[35] || (_cache[35] = [
                      createTextVNode(" 简易配置 ")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  unref(danmuPresetId) !== "default" ? (openBlock(), createBlock(_component_n_button, {
                    key: 0,
                    text: "",
                    type: "error",
                    onClick: deleteDanmu
                  }, {
                    default: withCtx(() => _cache[36] || (_cache[36] = [
                      createTextVNode("删除")
                    ])),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(ButtonGroup, {
                    options: unref(actionBtns),
                    onClick: handleActionClick
                  }, {
                    default: withCtx(() => _cache[37] || (_cache[37] = [
                      createTextVNode("保存")
                    ])),
                    _: 1
                  }, 8, ["options"])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_tab_pane, {
              name: "ffmpeg-setting",
              tab: "ffmpeg设置",
              "display-directive": "show"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_14, [
                  createVNode(ffmpegSetting, {
                    modelValue: unref(clientOptions).ffmpegPresetId,
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(clientOptions).ffmpegPresetId = $event),
                    onChange: handleFfmpegSettingChange
                  }, null, 8, ["modelValue"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value"]),
        createVNode(_component_n_modal, {
          show: unref(nameModelVisible),
          "onUpdate:show": _cache[17] || (_cache[17] = ($event) => isRef(nameModelVisible) ? nameModelVisible.value = $event : null)
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "600px" },
              bordered: false,
              role: "dialog",
              "aria-modal": "true"
            }, {
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_15, [
                  createVNode(_component_n_button, {
                    onClick: _cache[16] || (_cache[16] = ($event) => nameModelVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[38] || (_cache[38] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    style: { "margin-left": "10px" },
                    onClick: saveConfirm
                  }, {
                    default: withCtx(() => _cache[39] || (_cache[39] = [
                      createTextVNode("确认")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(tempPresetName),
                  "onUpdate:value": _cache[15] || (_cache[15] = ($event) => isRef(tempPresetName) ? tempPresetName.value = $event : null),
                  placeholder: "请输入预设名称",
                  maxlength: "15",
                  onKeyup: withKeys(saveConfirm, ["enter"])
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(_component_AppendVideoDialog, {
          visible: unref(appendVideoVisible),
          "onUpdate:visible": _cache[18] || (_cache[18] = ($event) => isRef(appendVideoVisible) ? appendVideoVisible.value = $event : null),
          modelValue: unref(aid),
          "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => isRef(aid) ? aid.value = $event : null)
        }, null, 8, ["visible", "modelValue"]),
        createVNode(_sfc_main$1, {
          visible: unref(previewModalVisible),
          "onUpdate:visible": _cache[20] || (_cache[20] = ($event) => isRef(previewModalVisible) ? previewModalVisible.value = $event : null),
          files: unref(previewFiles),
          hotProgress: {
            visible: unref(clientOptions).hotProgress,
            sampling: unref(clientOptions).hotProgressSample,
            height: unref(clientOptions).hotProgressHeight,
            color: unref(clientOptions).hotProgressColor,
            fillColor: unref(clientOptions).hotProgressFillColor
          }
        }, null, 8, ["visible", "files", "hotProgress"])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-22d0121c"]]);
export {
  index as default
};
