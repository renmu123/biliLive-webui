import { A as AppendVideoDialog, B as BiliSetting } from "./BiliSetting-BHl5wY_d.js";
import { d as defineComponent, aj as mergeModels, al as storeToRefs, ak as useModel, r as ref, p as computed, F as watch, E as onMounted, o as openBlock, c as createBlock, w as withCtx, a as createVNode, b as unref, e as createBaseVNode, f as createTextVNode, ah as createElementBlock, am as createCommentVNode, a8 as Fragment, i as isRef, az as withKeys, ar as toRaw, B as Button, _ as __unplugin_components_2$2, aq as __unplugin_components_3$1, aA as onActivated, aB as onDeactivated, as as onUnmounted } from "./index-BdK_bIY-.js";
import { a as toReactive, u as useStorage } from "./index-Dx5QtryB.js";
import { h as hotkeys, _ as __unplugin_components_1$3 } from "./hotkeys.esm-DZlVWy2u.js";
import { D as DanmuFactorySetting } from "./DanmuFactorySetting-DE8WVch8.js";
import { H as HelpCircleOutline, _ as _sfc_main$3 } from "./Tip.vue_vue_type_script_setup_true_lang-ZS01Tq1J.js";
import { u as useConfirm, a as useBili } from "./index-CA7M0yjN.js";
import { u as uuid, d as deepRaw } from "./index-7WYu9wih.js";
import { l as useFfmpegPreset, i as useAppConfig, j as ffmpegPreset, g as cloneDeep, N as NIcon, _ as __unplugin_components_2, e as __unplugin_components_1$2, c as useDanmuPreset, d as useUserInfoStore, m as danmuPreset } from "./index-C4u8aLk_.js";
import { u as useNotification } from "./use-notification-Bd6vXVK5.js";
import { _ as __unplugin_components_0 } from "./Cascader-BWP4BJml.js";
import { _ as __unplugin_components_1, a as __unplugin_components_7 } from "./FormItem-CCWUUqVZ.js";
import { _ as __unplugin_components_1$1 } from "./Divider-DXs5FkMx.js";
import { _ as __unplugin_components_0$1 } from "./Select---nAiZoJ.js";
import { _ as __unplugin_components_4 } from "./InputNumber-BJpQhtBO.js";
import { _ as __unplugin_components_3, b as __unplugin_components_6, a as __unplugin_components_4$1 } from "./Tabs-BZfGlFDd.js";
import { _ as __unplugin_components_2$1 } from "./Input-B9R9uvsi.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CeIKdxzx.js";
import { _ as _sfc_main$4 } from "./Index.vue_vue_type_style_index_0_lang-ZB3kcsvL.js";
import { b as bili } from "./bili-CL9dLJwD.js";
import "./Suffix-BPiqXR0G.js";
import "./utils-CMU8sxwr.js";
import "./create-ref-setter-DH9gVfAq.js";
import "./Space-DiCJhQLR.js";
import "./RadioGroup-DAR76U5f.js";
import "./showDirectoryDialog-DEycIJ5C.js";
import "./common-BoyrrMWo.js";
import "./CloseOutline-WELlPCAp.js";
import "./InputGroup-BED7yoFa.js";
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
const _hoisted_6$1 = { class: "inline-flex" };
const _hoisted_7$1 = { class: "inline-flex" };
const _hoisted_8$1 = { class: "inline-flex" };
const _hoisted_9$1 = { class: "inline-flex" };
const _hoisted_10 = { class: "inline-flex" };
const _hoisted_11 = { class: "inline-flex" };
const _hoisted_12 = { class: "inline-flex" };
const _hoisted_13 = { class: "inline-flex" };
const _hoisted_14 = { class: "actions" };
const _hoisted_15 = { style: { "text-align": "right" } };
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
    const emits = __emit;
    const presetId = useModel(__props, "modelValue");
    const nvencPresets = [
      {
        value: "p1",
        label: "fastest"
      },
      {
        value: "p2",
        label: "faster"
      },
      {
        value: "p3",
        label: "fast"
      },
      {
        value: "p4",
        label: "medium"
      },
      {
        value: "p5",
        label: "slow"
      },
      {
        value: "p6",
        label: "slower"
      },
      {
        value: "p7",
        label: "slowest"
      }
    ];
    const qsvPresets = [
      {
        value: "veryfast",
        label: "veryfast"
      },
      {
        value: "faster",
        label: "faster"
      },
      {
        value: "fast",
        label: "fast"
      },
      {
        value: "medium",
        label: "medium"
      },
      {
        value: "slow",
        label: "slow"
      },
      {
        value: "slower",
        label: "slower"
      },
      {
        value: "veryslow",
        label: "veryslow"
      }
    ];
    const videoEncoders = ref([
      {
        value: "copy",
        label: "copy(复制流)",
        birateControls: [
          {
            value: "CRF",
            label: "CRF"
          }
        ]
      },
      {
        value: "libx264",
        label: "H.264(x264)",
        birateControls: [
          {
            value: "CRF",
            label: "CRF"
          },
          {
            value: "VBR",
            label: "平均比特率"
          }
        ],
        presets: [
          {
            value: "ultrafast",
            label: "ultrafast"
          },
          {
            value: "superfast",
            label: "superfast"
          },
          {
            value: "veryfast",
            label: "veryfast"
          },
          {
            value: "faster",
            label: "faster"
          },
          {
            value: "fast",
            label: "fast"
          },
          {
            value: "medium",
            label: "medium"
          },
          {
            value: "slow",
            label: "slow"
          },
          {
            value: "slower",
            label: "slower"
          },
          {
            value: "veryslow",
            label: "veryslow"
          },
          {
            value: "placebo",
            label: "placebo"
          }
        ]
      },
      {
        value: "h264_qsv",
        label: "H.264(Intel QSV)",
        birateControls: [
          {
            value: "ICQ",
            label: "ICQ"
          },
          {
            value: "VBR",
            label: "平均比特率"
          }
        ],
        presets: qsvPresets
      },
      {
        value: "h264_nvenc",
        label: "H.264(NVIDIA NVEnc)",
        birateControls: [
          {
            value: "CQ",
            label: "CQ"
          },
          {
            value: "VBR",
            label: "平均比特率"
          }
        ],
        presets: nvencPresets
      },
      {
        value: "h264_amf",
        label: "H.264(AMD AMF)",
        birateControls: [
          {
            value: "VBR",
            label: "平均比特率"
          }
        ]
      },
      {
        value: "libx265",
        label: "H.265(x265)",
        birateControls: [
          {
            value: "CRF",
            label: "CRF"
          },
          {
            value: "VBR",
            label: "平均比特率"
          }
        ],
        presets: [
          {
            value: "ultrafast",
            label: "ultrafast"
          },
          {
            value: "superfast",
            label: "superfast"
          },
          {
            value: "veryfast",
            label: "veryfast"
          },
          {
            value: "faster",
            label: "faster"
          },
          {
            value: "fast",
            label: "fast"
          },
          {
            value: "medium",
            label: "medium"
          },
          {
            value: "slow",
            label: "slow"
          },
          {
            value: "slower",
            label: "slower"
          },
          {
            value: "veryslow",
            label: "veryslow"
          },
          {
            value: "placebo",
            label: "placebo"
          }
        ]
      },
      {
        value: "hevc_qsv",
        label: "H.265(Intel QSV)",
        birateControls: [
          {
            value: "ICQ",
            label: "ICQ"
          },
          {
            value: "VBR",
            label: "平均比特率"
          }
        ],
        presets: qsvPresets
      },
      {
        value: "hevc_nvenc",
        label: "H.265(NVIDIA NVEnc)",
        birateControls: [
          {
            value: "CQ",
            label: "CQ"
          },
          {
            value: "VBR",
            label: "平均比特率"
          }
        ],
        presets: nvencPresets
      },
      {
        value: "hevc_amf",
        label: "H.265(AMD AMF)",
        birateControls: [
          {
            value: "VBR",
            label: "平均比特率"
          }
        ]
      },
      {
        value: "libsvtav1",
        label: "AV1 (libsvtav1)",
        birateControls: [
          {
            value: "CRF",
            label: "CRF"
          },
          {
            value: "VBR",
            label: "平均比特率"
          }
        ],
        presets: [
          {
            value: "0",
            label: "0"
          },
          {
            value: "1",
            label: "1"
          },
          {
            value: "2",
            label: "2"
          },
          {
            value: "3",
            label: "3"
          },
          {
            value: "4",
            label: "4"
          },
          {
            value: "5",
            label: "5"
          },
          {
            value: "6",
            label: "6"
          },
          {
            value: "7",
            label: "7"
          },
          {
            value: "8",
            label: "8"
          },
          {
            value: "9",
            label: "9"
          },
          {
            value: "10",
            label: "10"
          },
          {
            value: "11",
            label: "11"
          },
          {
            value: "12",
            label: "12"
          },
          {
            value: "13",
            label: "13"
          }
        ]
      },
      {
        value: "av1_qsv",
        label: "AV1 (Intel QSV)",
        birateControls: [
          {
            value: "ICQ",
            label: "ICQ"
          },
          {
            value: "VBR",
            label: "平均比特率"
          }
        ],
        presets: qsvPresets
      },
      {
        value: "av1_nvenc",
        label: "AV1 (NVIDIA NVEnc)",
        birateControls: [
          {
            value: "CQ",
            label: "CQ"
          },
          {
            value: "VBR",
            label: "平均比特率"
          }
        ],
        presets: nvencPresets
      },
      {
        value: "av1_amf",
        label: "AV1 (AMD AMF)",
        birateControls: [
          {
            value: "VBR",
            label: "平均比特率"
          }
        ]
      }
    ]);
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
    const encoderOptions = computed(() => {
      return videoEncoders.value.find((item) => item.value === ffmpegOptions.value?.config?.encoder);
    });
    const swsOptions = ref([
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
      ffmpegOptions.value = await ffmpegPreset.get(presetId.value);
    };
    watch(presetId, handlePresetChange);
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
    onMounted(async () => {
      await getPresetOptions();
      handlePresetChange();
    });
    return (_ctx, _cache) => {
      const _component_n_cascader = __unplugin_components_0;
      const _component_n_form_item = __unplugin_components_1;
      const _component_n_divider = __unplugin_components_1$1;
      const _component_n_icon = NIcon;
      const _component_n_popover = __unplugin_components_2;
      const _component_n_select = __unplugin_components_0$1;
      const _component_Tip = _sfc_main$3;
      const _component_n_input_number = __unplugin_components_4;
      const _component_n_checkbox = __unplugin_components_1$2;
      const _component_n_color_picker = __unplugin_components_3;
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_2$2;
      const _component_n_modal = __unplugin_components_3$1;
      const _component_n_form = __unplugin_components_7;
      return openBlock(), createBlock(_component_n_form, {
        ref: "formRef",
        "label-width": "130px",
        "label-placement": "left",
        "label-align": "right"
      }, {
        default: withCtx(() => [
          createVNode(_component_n_form_item, { label: "预设" }, {
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
                    _cache[24] || (_cache[24] = createTextVNode(" 视频编码器 ")),
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
                  _cache[25] || (_cache[25] = createBaseVNode("p", { style: { "color": "red" } }, "请勿选择不支持的硬件加速方案，如果报错请尝试更新驱动", -1)),
                  _cache[26] || (_cache[26] = createBaseVNode("p", null, "lib 使用 CPU 进行编码，无硬件加速，速度较慢，但效果可能是最好的", -1)),
                  _cache[27] || (_cache[27] = createBaseVNode("p", null, "QSV 是 Intel 的核显加速", -1)),
                  _cache[28] || (_cache[28] = createBaseVNode("p", null, "NVEnc 是 NVIDIA 的显卡加速", -1)),
                  _cache[29] || (_cache[29] = createBaseVNode("p", null, "AMF 是 AMD 的硬件加速", -1)),
                  _cache[30] || (_cache[30] = createBaseVNode("p", null, "H264泛用性较高，压缩率较低；H265 压缩率高于H264但可能低于AV1", -1)),
                  _cache[31] || (_cache[31] = createBaseVNode("p", null, "AV1 新一代的编码宠儿，需要新一代硬件才可硬件加速，如40系显卡", -1)),
                  _cache[32] || (_cache[32] = createBaseVNode("p", null, [
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
                options: unref(videoEncoders),
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
                  options: unref(encoderOptions)?.birateControls || []
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            unref(ffmpegOptions).config.bitrateControl === "CRF" || unref(ffmpegOptions).config.bitrateControl === "CQ" || unref(ffmpegOptions).config.bitrateControl === "ICQ" ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_2$1, [
                  unref(ffmpegOptions).config.bitrateControl === "CQ" ? (openBlock(), createElementBlock("span", _hoisted_3$1, "cq")) : unref(ffmpegOptions).config.bitrateControl === "ICQ" ? (openBlock(), createElementBlock("span", _hoisted_4$1, "ICQ")) : (openBlock(), createElementBlock("span", _hoisted_5$1, "crf")),
                  ["libx264", "libx265"].includes(unref(ffmpegOptions).config.encoder) ? (openBlock(), createBlock(_component_Tip, { key: 3 }, {
                    default: withCtx(() => _cache[33] || (_cache[33] = [
                      createBaseVNode("p", null, "CRF值为0：无损压缩，最高质量，最大文件大小。", -1),
                      createBaseVNode("p", null, " CRF值较低（例如，18-24）：高质量，较大文件大小。适用于需要高质量输出的情况，18为视觉无损。 ", -1),
                      createBaseVNode("p", null, "CRF值较高（例如，28-51）：较低质量，较小文件大小。适用于需要较小文件的情况。", -1),
                      createBaseVNode("p", null, "CRF值越小，压制越慢", -1)
                    ])),
                    _: 1
                  })) : ["h264_nvenc", "hevc_nvenc", "av1_nvenc"].includes(unref(ffmpegOptions).config.encoder) ? (openBlock(), createBlock(_component_Tip, { key: 4 }, {
                    default: withCtx(() => _cache[34] || (_cache[34] = [
                      createBaseVNode("p", null, "值为0：自动", -1),
                      createBaseVNode("p", null, "值为1-51：越小质量越高，越大质量越低", -1)
                    ])),
                    _: 1
                  })) : ["h264_qsv", "hevc_qsv", "av1_qsv"].includes(unref(ffmpegOptions).config.encoder) ? (openBlock(), createBlock(_component_Tip, { key: 5 }, {
                    default: withCtx(() => _cache[35] || (_cache[35] = [
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
                createBaseVNode("span", _hoisted_6$1, [
                  _cache[37] || (_cache[37] = createBaseVNode("span", null, "码率", -1)),
                  createVNode(_component_Tip, null, {
                    default: withCtx(() => _cache[36] || (_cache[36] = [
                      createTextVNode(" 如果你完全不懂参数代表什么，又觉得画质差，请拉高此参数。"),
                      createBaseVNode("br", null, null, -1),
                      createTextVNode(" 一般杂谈录播视频，码率 5000k 够了。如果是游戏，可以拉到 10000k及以上，如果弹幕较多，可以尝试拉到更高，具体码率可自行测试。 ")
                    ])),
                    _: 1
                  })
                ])
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
                  suffix: withCtx(() => _cache[38] || (_cache[38] = [
                    createTextVNode(" K ")
                  ])),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            (unref(encoderOptions)?.presets || []).length !== 0 ? (openBlock(), createBlock(_component_n_form_item, { key: 3 }, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_7$1, [
                  _cache[40] || (_cache[40] = createBaseVNode("span", null, "预设", -1)),
                  createVNode(_component_Tip, null, {
                    default: withCtx(() => _cache[39] || (_cache[39] = [
                      createTextVNode(" 推荐使用medium或者fast，不推荐任何人使用slowest ")
                    ])),
                    _: 1
                  })
                ])
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
            ["h264_nvenc", "hevc_nvenc", "av1_nvenc", "h264_amf", "hevc_amf", "av1_amf"].includes(
              unref(ffmpegOptions).config.encoder
            ) ? (openBlock(), createBlock(_component_n_form_item, { key: 4 }, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_8$1, [
                  _cache[42] || (_cache[42] = createBaseVNode("span", null, "硬件解码", -1)),
                  createVNode(_component_Tip, null, {
                    default: withCtx(() => _cache[41] || (_cache[41] = [
                      createTextVNode(" 使用硬件解码器，开启后"),
                      createBaseVNode("b", null, "可能", -1),
                      createTextVNode("会减少压制时间，nvidia会使用nvdec，如果压制失败请关闭 ")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_checkbox, {
                  checked: unref(ffmpegOptions).config.decode,
                  "onUpdate:checked": _cache[6] || (_cache[6] = ($event) => unref(ffmpegOptions).config.decode = $event)
                }, null, 8, ["checked"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            ["libsvtav1"].includes(unref(ffmpegOptions).config.encoder) ? (openBlock(), createBlock(_component_n_form_item, { key: 5 }, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_9$1, [
                  _cache[44] || (_cache[44] = createBaseVNode("span", null, "10bit", -1)),
                  createVNode(_component_Tip, null, {
                    default: withCtx(() => _cache[43] || (_cache[43] = [
                      createTextVNode(" AV1 10bit 会占用更多的硬件资源，但画质会更好，如果硬件支持，建议开启 ")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_checkbox, {
                  checked: unref(ffmpegOptions).config.bit10,
                  "onUpdate:checked": _cache[7] || (_cache[7] = ($event) => unref(ffmpegOptions).config.bit10 = $event)
                }, null, 8, ["checked"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_10, [
                  _cache[46] || (_cache[46] = createBaseVNode("span", null, "分辨率", -1)),
                  createVNode(_component_Tip, null, {
                    default: withCtx(() => _cache[45] || (_cache[45] = [
                      createBaseVNode("p", null, " 实质上不会提升画质，但由于B站4K可拥有更高码率，可以通过缩放分辨率来减少二压对码率的影响，会影响压制时间。 ", -1),
                      createBaseVNode("p", null, [
                        createTextVNode(" B站4k画质要求短边大于1600，如果原视频为1080，可以尝试设置为2880x1620"),
                        createBaseVNode("br"),
                        createTextVNode(" 也可以设置为-1:1620来进行自适应 ")
                      ], -1),
                      createBaseVNode("p", null, [
                        createTextVNode("4K：3840X2160"),
                        createBaseVNode("br"),
                        createTextVNode("2K：2560X1440"),
                        createBaseVNode("br"),
                        createTextVNode("1080：1920X1080")
                      ], -1),
                      createBaseVNode("p", null, " 如果你是放大分辨率，可以选择先渲染后缩放，如果是缩小分辨率，可以选择先缩放后渲染，自动策略为先渲染后缩放 ", -1)
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_checkbox, {
                  checked: unref(ffmpegOptions).config.resetResolution,
                  "onUpdate:checked": _cache[8] || (_cache[8] = ($event) => unref(ffmpegOptions).config.resetResolution = $event),
                  style: { "margin-right": "20px" }
                }, null, 8, ["checked"]),
                unref(ffmpegOptions).config.resetResolution ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createVNode(_component_n_input_number, {
                    value: unref(ffmpegOptions).config.resolutionWidth,
                    "onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(ffmpegOptions).config.resolutionWidth = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: -1,
                    step: 100,
                    title: "宽",
                    placeholder: "宽",
                    style: { "width": "100px" }
                  }, null, 8, ["value"]),
                  _cache[47] || (_cache[47] = createTextVNode(" X  ")),
                  createVNode(_component_n_input_number, {
                    value: unref(ffmpegOptions).config.resolutionHeight,
                    "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(ffmpegOptions).config.resolutionHeight = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: -1,
                    step: 100,
                    title: "高",
                    placeholder: "高",
                    style: { "width": "100px" }
                  }, null, 8, ["value"]),
                  createVNode(_component_n_select, {
                    value: unref(ffmpegOptions).config.swsFlags,
                    "onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(ffmpegOptions).config.swsFlags = $event),
                    options: unref(swsOptions),
                    title: "缩放算法",
                    placeholder: "请选择缩放算法，默认为自动",
                    clearable: "",
                    style: { "width": "200px", "flex": "none", "margin-left": "10px" }
                  }, null, 8, ["value", "options"]),
                  createVNode(_component_n_select, {
                    value: unref(ffmpegOptions).config.scaleMethod,
                    "onUpdate:value": _cache[12] || (_cache[12] = ($event) => unref(ffmpegOptions).config.scaleMethod = $event),
                    options: unref(scaleMethodOptions),
                    title: "缩放顺序",
                    placeholder: "请选择缩放顺序",
                    clearable: "",
                    style: { "width": "200px", "flex": "none", "margin-left": "10px" }
                  }, null, 8, ["value", "options"])
                ], 64)) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_11, [
                  _cache[49] || (_cache[49] = createBaseVNode("span", null, "时间戳", -1)),
                  createVNode(_component_Tip, null, {
                    default: withCtx(() => _cache[48] || (_cache[48] = [
                      createTextVNode(" 添加时间戳到视频中，优先从webhook中读取，其次是视频元数据读取（如录播姬注释）。"),
                      createBaseVNode("br", null, null, -1),
                      createTextVNode("即使你开启此选项，如果一条都未被匹配到，也是不会被渲染的 ")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_checkbox, {
                  checked: unref(ffmpegOptions).config.addTimestamp,
                  "onUpdate:checked": _cache[13] || (_cache[13] = ($event) => unref(ffmpegOptions).config.addTimestamp = $event),
                  style: { "margin-right": "20px" }
                }, null, 8, ["checked"]),
                unref(ffmpegOptions).config.addTimestamp ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createVNode(_component_n_input_number, {
                    value: unref(ffmpegOptions).config.timestampX,
                    "onUpdate:value": _cache[14] || (_cache[14] = ($event) => unref(ffmpegOptions).config.timestampX = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0,
                    step: 10,
                    title: "x轴坐标",
                    placeholder: "x轴坐标",
                    style: { "width": "120px", "margin-right": "10px" }
                  }, null, 8, ["value"]),
                  createVNode(_component_n_input_number, {
                    value: unref(ffmpegOptions).config.timestampY,
                    "onUpdate:value": _cache[15] || (_cache[15] = ($event) => unref(ffmpegOptions).config.timestampY = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0,
                    step: 10,
                    placeholder: "y轴坐标",
                    title: "y轴坐标",
                    style: { "width": "120px", "margin-right": "10px" }
                  }, null, 8, ["value"]),
                  createVNode(_component_n_input_number, {
                    value: unref(ffmpegOptions).config.timestampFontSize,
                    "onUpdate:value": _cache[16] || (_cache[16] = ($event) => unref(ffmpegOptions).config.timestampFontSize = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 10,
                    step: 1,
                    title: "字体大小",
                    placeholder: "字体大小",
                    style: { "width": "120px", "margin-right": "10px" }
                  }, null, 8, ["value"]),
                  createVNode(_component_n_color_picker, {
                    value: unref(ffmpegOptions).config.timestampFontColor,
                    "onUpdate:value": _cache[17] || (_cache[17] = ($event) => unref(ffmpegOptions).config.timestampFontColor = $event),
                    style: { "width": "120px" },
                    title: "字体颜色"
                  }, null, 8, ["value"])
                ], 64)) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ], 64)) : createCommentVNode("", true),
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createVNode(_component_n_popover, { trigger: "hover" }, {
                trigger: withCtx(() => _cache[50] || (_cache[50] = [
                  createBaseVNode("span", {
                    class: "flex align-center",
                    style: {
                      "justify-content": "flex-end"
                    }
                  }, " 音频编码器", -1)
                ])),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_n_select, {
                value: unref(ffmpegOptions).config.audioCodec,
                "onUpdate:value": _cache[18] || (_cache[18] = ($event) => unref(ffmpegOptions).config.audioCodec = $event),
                options: unref(audioEncoders)
              }, null, 8, ["value", "options"])
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createBaseVNode("span", _hoisted_12, [
                _cache[52] || (_cache[52] = createBaseVNode("span", null, "额外输出参数", -1)),
                createVNode(_component_Tip, null, {
                  default: withCtx(() => _cache[51] || (_cache[51] = [
                    createTextVNode(" 参数将被附加到ffmpeg输出参数中，参数错误可能会导致无法运行 ")
                  ])),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n_input, {
                value: unref(ffmpegOptions).config.extraOptions,
                "onUpdate:value": _cache[19] || (_cache[19] = ($event) => unref(ffmpegOptions).config.extraOptions = $event),
                type: "textarea",
                placeholder: "请输入额外参数",
                style: { "width": "100%" },
                "input-props": { spellcheck: "false" }
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createBaseVNode("span", _hoisted_13, [
                _cache[54] || (_cache[54] = createBaseVNode("span", null, "视频滤镜", -1)),
                createVNode(_component_Tip, null, {
                  default: withCtx(() => _cache[53] || (_cache[53] = [
                    createBaseVNode("code", null, "$origin", -1),
                    createTextVNode(" 是由其他配置生成的默认参数，如果没有该参数，谁也不知道会发生什么事"),
                    createBaseVNode("br", null, null, -1),
                    createTextVNode(" 例：hflip;$origin;transpose=1 解释：先水平翻转，然后应用默认参数，最后旋转90度 ")
                  ])),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n_input, {
                value: unref(ffmpegOptions).config.vf,
                "onUpdate:value": _cache[20] || (_cache[20] = ($event) => unref(ffmpegOptions).config.vf = $event),
                type: "textarea",
                placeholder: "请输入滤镜参数",
                style: { "width": "100%" },
                "input-props": { spellcheck: "false" }
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_14, [
            !presetId.value.startsWith("b_") && presetId.value !== "default" ? (openBlock(), createBlock(_component_n_button, {
              key: 0,
              ghost: "",
              quaternary: "",
              class: "btn",
              type: "error",
              onClick: deletePreset
            }, {
              default: withCtx(() => _cache[55] || (_cache[55] = [
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
              default: withCtx(() => _cache[56] || (_cache[56] = [
                createTextVNode("重命名")
              ])),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_button, {
              type: "primary",
              class: "btn",
              onClick: saveAs
            }, {
              default: withCtx(() => _cache[57] || (_cache[57] = [
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
              default: withCtx(() => _cache[58] || (_cache[58] = [
                createTextVNode("保存")
              ])),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          createVNode(_component_n_modal, {
            show: unref(nameModelVisible),
            "onUpdate:show": _cache[23] || (_cache[23] = ($event) => isRef(nameModelVisible) ? nameModelVisible.value = $event : null)
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
                      onClick: _cache[22] || (_cache[22] = ($event) => nameModelVisible.value = false)
                    }, {
                      default: withCtx(() => _cache[59] || (_cache[59] = [
                        createTextVNode("取消")
                      ])),
                      _: 1
                    }),
                    createVNode(_component_n_button, {
                      type: "primary",
                      style: { "margin-left": "10px" },
                      onClick: saveConfirm
                    }, {
                      default: withCtx(() => _cache[60] || (_cache[60] = [
                        createTextVNode("确认")
                      ])),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: unref(tempPresetName),
                    "onUpdate:value": _cache[21] || (_cache[21] = ($event) => isRef(tempPresetName) ? tempPresetName.value = $event : null),
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
      }, 512);
    };
  }
});
const ffmpegSetting = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-11b7b11b"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "previewModal",
  props: /* @__PURE__ */ mergeModels({
    files: { default: () => {
      return {
        video: "",
        danmu: "",
        isTempDanmu: false
      };
    } }
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
      () => props.files,
      async (files) => {
        if (files.danmu) {
          console.log(files.danmu);
          const content = await window.api.common.readFile(props.files.danmu);
          videoRef.value?.switchAss(content);
        }
      },
      { deep: true }
    );
    watch(showModal, (value) => {
      if (!value) {
        if (props.files.isTempDanmu) {
          window.api.common.deleteFile(props.files.danmu);
        }
      }
    });
    const videoInstance = ref(null);
    const handleVideoReady = async (instance) => {
      videoInstance.value = instance;
      if (props.files.video) {
        videoRef.value?.switchUrl(props.files.video, props.files.video.endsWith(".flv") ? "flv" : "");
      }
      if (props.files.danmu) {
        const content = await window.api.common.readFile(props.files.danmu);
        videoRef.value?.switchAss(content);
      }
    };
    return (_ctx, _cache) => {
      const _component_n_card = __unplugin_components_2$2;
      const _component_n_modal = __unplugin_components_3$1;
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
                option: {},
                onReady: handleVideoReady
              }, null, 512)
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
  style: { "display": "flex", "gap": "20px", "align-items": "center", "margin-top": "20px" }
};
const _hoisted_7 = {
  class: "flex",
  style: { "gap": "10px", "align-items": "center" }
};
const _hoisted_8 = {
  class: "footer flex",
  style: { "text-align": "right", "gap": "10px", "justify-content": "flex-end", "align-items": "center" }
};
const _hoisted_9 = { style: { "text-align": "right" } };
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
    const handleConvert = async () => {
      convert();
    };
    const preHandle = async (files, clientOptions2, danmuConfig, presetOptions2) => {
      if (files.length === 0) {
        return false;
      }
      if (clientOptions2.autoUpload && !aid.value) {
        await biliUpCheck(presetOptions2);
      }
      const videoFile = files.find(
        (item) => item.ext === ".flv" || item.ext === ".mp4" || item.ext === ".m4s" || item.ext === ".ts"
      );
      const danmuFile = files.find((item) => item.ext === ".xml" || item.ext === ".ass");
      const hasXmlFile = files.some((item) => item.ext === ".xml");
      if (!videoFile) {
        notice.error({
          title: "请选择一个flv、mp4、m4s、ts文件",
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
      if (clientOptions2.hotProgress && !hasXmlFile) {
        notice.error({
          title: "只有xml文件支持高能进度条",
          duration: 1e3
        });
        return false;
      }
      const videoMeta = await window.api.readVideoMeta(videoFile.path);
      const videoStream = videoMeta.streams.find((stream) => stream.codec_type === "video");
      const { width, height } = videoStream || {};
      if (danmuConfig.resolutionResponsive) {
        danmuConfig.resolution[0] = width;
        danmuConfig.resolution[1] = height;
      }
      if (width && danmuConfig.resolution[0] !== width && danmuConfig.resolution[1] !== height) {
        const [status] = await confirm.warning({
          content: `目标视频分辨率为${width}*${height}，与设置的弹幕分辨率不一致，是否继续？`,
          showCheckbox: true,
          showAgainKey: "danmuResolution"
        });
        if (!status) return false;
      }
      return {
        inputVideoFile: videoFile,
        inputDanmuFile: danmuFile
      };
    };
    const convert = async () => {
      const files = toRaw(fileList.value);
      const rawClientOptions = toRaw(clientOptions);
      const rawDanmuConfig = deepRaw(danmuPreset$1.value.config);
      const rawPresetOptions = toRaw(presetOptions.value);
      const rawFfmpegOptions = toRaw(ffmpegOptions.value);
      const rawAid = toRaw(aid.value);
      if (rawFfmpegOptions.encoder === "copy") {
        throw new Error("视频编码不能为copy");
      }
      const data = await preHandle(files, rawClientOptions, rawDanmuConfig, rawPresetOptions);
      if (!data) return false;
      const outputPath = await window.api.showSaveDialog({
        defaultPath: `${data.inputVideoFile.name}-弹幕版.mp4`,
        filters: [
          { name: "视频文件", extensions: ["mp4"] },
          { name: "所有文件", extensions: ["*"] }
        ]
      });
      if (!outputPath) return false;
      let { inputDanmuFile } = data;
      const rawInputDanmuFile = inputDanmuFile;
      const { inputVideoFile } = data;
      if (inputDanmuFile.ext === ".xml") {
        const targetAssFile = await handleXmlFile(
          inputDanmuFile,
          { ...rawClientOptions, removeOrigin: false },
          rawDanmuConfig
        );
        console.log("targetAssFilePath", targetAssFile);
        inputDanmuFile = targetAssFile;
      }
      let hotProgressInput = void 0;
      if (rawClientOptions.hotProgress) {
        hotProgressInput = await genHotProgress(inputDanmuFile.path, {
          interval: rawClientOptions.hotProgressSample,
          height: rawClientOptions.hotProgressHeight,
          color: rawClientOptions.hotProgressColor,
          fillColor: rawClientOptions.hotProgressFillColor,
          videoPath: inputVideoFile.path
        });
      }
      const output = await handleVideoMerge(
        {
          inputVideoFilePath: inputVideoFile?.path,
          inputAssFilePath: inputDanmuFile.path,
          inputHotProgressFilePath: hotProgressInput,
          outputPath,
          rawInputDanmuFile
        },
        rawClientOptions,
        rawFfmpegOptions
      );
      if (rawClientOptions.autoUpload) {
        await upload(output, rawPresetOptions, rawAid);
      }
      return true;
    };
    const genHotProgress = async (input, options) => {
      const tempPath = await window.api.common.getTempPath();
      return new Promise((resolve, reject) => {
        const outputPath = `${window.path.join(tempPath, uuid())}.mp4`;
        window.api.danmu.genHotProgress(input, outputPath, options).then((result) => {
          const taskId = result.taskId;
          window.api.task.on(taskId, "end", (data) => {
            console.log("end", data);
            notice.success({
              title: "高能进度条转换成功",
              duration: 3e3
            });
            resolve(data.output);
          });
          window.api.task.on(taskId, "error", (data) => {
            reject(data.err);
          });
        });
      });
    };
    const handleXmlFile = async (danmuFile, options, danmuConfig) => {
      const isEmpty = await window.api.danmu.isEmptyDanmu(danmuFile.path);
      if (isEmpty) {
        const msg = "弹幕文件中不存在弹幕，无需压制";
        notice.warning({
          title: msg,
          duration: 1e3
        });
        throw new Error(msg);
      }
      const targetAssFilePath = await convertDanmu2Ass(
        {
          input: danmuFile.path,
          output: uuid()
        },
        { ...options, saveRadio: 2, savePath: await window.api.common.getTempPath() },
        danmuConfig
      );
      return window.api.formatFile(targetAssFilePath);
    };
    const convertDanmu2Ass = async (file, options, config) => {
      return new Promise((resolve, reject) => {
        window.api.danmu.convertXml2Ass(file, config, { ...options, copyInput: true }).then((result) => {
          const taskId = result.taskId;
          window.api.task.on(taskId, "end", (data) => {
            resolve(data.output);
          });
          window.api.task.on(taskId, "error", (data) => {
            reject(data.err);
          });
        });
      });
    };
    const handleVideoMerge = async (convertOptions, options, ffmpegOptions2) => {
      const { inputVideoFilePath, inputAssFilePath, outputPath, inputHotProgressFilePath } = convertOptions;
      notice.info({
        title: "已加入队列，根据不同设置压制需要消耗大量时间，CPU，GPU，期间请勿关闭本软件",
        duration: 3e3
      });
      let output;
      try {
        output = await createMergeVideoAssTask(
          inputVideoFilePath,
          inputAssFilePath,
          inputHotProgressFilePath,
          outputPath,
          deepRaw(options),
          ffmpegOptions2
        );
      } catch (err) {
        let msg = "转换失败";
        if (err) {
          msg = msg + err;
        }
        throw new Error(msg);
      } finally {
        if (convertOptions.rawInputDanmuFile.ext === ".xml") {
          window.api.trashItem(convertOptions.inputAssFilePath);
        }
      }
      return output;
    };
    const createMergeVideoAssTask = async (videoFilePath, assFilePath, hotProgressFilePath, outputPath, options, ffmpegOptions2) => {
      return new Promise((resolve, reject) => {
        window.api.mergeAssMp4(
          {
            videoFilePath,
            assFilePath,
            outputPath,
            hotProgressFilePath
          },
          { ...options, removeOrigin: false },
          ffmpegOptions2
        ).then(({ taskId, output }) => {
          if (!taskId) return resolve(output);
          fileList.value = [];
          aid.value = "";
          window.api.task.on(taskId, "end", (data) => {
            console.log("end", data);
            notice.success({
              title: "压制成功",
              duration: 3e3
            });
            resolve(data.output);
          });
          window.api.task.on(taskId, "error", (data) => {
            reject(data.err);
          });
        });
      });
    };
    const biliUpCheck = async (presetOptions2) => {
      const hasLogin = !!userInfo.value.uid;
      if (!hasLogin) {
        throw new Error(`请先进行登录`);
      }
      await bili.validUploadParams(presetOptions2.config);
      return true;
    };
    const upload = async (file, presetOptions2, aid2) => {
      if (aid2) {
        appendVideo(aid2, file, presetOptions2);
      } else {
        uploadVideo(file, presetOptions2);
      }
    };
    const uploadVideo = async (file, presetOptions2) => {
      await window.api.bili.uploadVideo(userInfo.value.uid, [file], presetOptions2.config);
    };
    const appendVideoVisible = ref(false);
    const aid = ref();
    const appendVideo = async (aid2, file, presetOptions2) => {
      await window.api.bili.appendVideo(userInfo.value.uid, [file], {
        ...presetOptions2.config,
        vid: aid2
      });
    };
    const ffmpegOptions = ref({});
    const handleFfmpegSettingChange = (preset) => {
      ffmpegOptions.value = preset.config;
    };
    const simpledMode = useStorage("simpledMode", false);
    const handleDanmuChange = (value) => {
      danmuPreset$1.value.config = value;
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
    watch(
      () => danmuPresetId.value,
      async (value) => {
        danmuPreset$1.value = await danmuPreset.get(value);
      },
      {
        immediate: true
      }
    );
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
      isTempDanmu: false
    });
    const preview = async () => {
      const files = toRaw(fileList.value);
      const rawClientOptions = toRaw(clientOptions);
      const rawDanmuConfig = deepRaw(danmuPreset$1.value.config);
      const rawPresetOptions = toRaw(presetOptions.value);
      const data = await preHandle(files, rawClientOptions, rawDanmuConfig, rawPresetOptions);
      if (!data) return;
      previewFiles.value.video = data.inputVideoFile.path;
      previewModalVisible.value = true;
      if (data.inputDanmuFile.path.endsWith(".xml")) {
        previewFiles.value.danmu = "";
        const targetAssFile = await handleXmlFile(
          data.inputDanmuFile,
          { ...rawClientOptions, removeOrigin: false },
          rawDanmuConfig
        );
        previewFiles.value.danmu = targetAssFile.path;
        previewFiles.value.isTempDanmu = true;
      } else if (data.inputDanmuFile.path.endsWith(".ass")) {
        previewFiles.value.danmu = data.inputDanmuFile.path;
        previewFiles.value.isTempDanmu = false;
      }
    };
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_checkbox = __unplugin_components_1$2;
      const _component_n_input_number = __unplugin_components_4;
      const _component_n_color_picker = __unplugin_components_3;
      const _component_n_tab_pane = __unplugin_components_4$1;
      const _component_n_select = __unplugin_components_0$1;
      const _component_n_tabs = __unplugin_components_6;
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_card = __unplugin_components_2$2;
      const _component_n_modal = __unplugin_components_3$1;
      const _component_AppendVideoDialog = AppendVideoDialog;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_n_button, {
              type: "primary",
              title: "仅供参考，以实际渲染为主！",
              disabled: unref(isWeb),
              onClick: preview
            }, {
              default: withCtx(() => _cache[19] || (_cache[19] = [
                createTextVNode(" 预览 ")
              ])),
              _: 1
            }, 8, ["disabled"]),
            createVNode(_component_n_button, {
              type: "primary",
              disabled: unref(isWeb),
              onClick: handleConvert
            }, {
              default: withCtx(() => _cache[20] || (_cache[20] = [
                createTextVNode(" 启动！ ")
              ])),
              _: 1
            }, 8, ["disabled"])
          ])
        ]),
        createVNode(__unplugin_components_1$3, {
          modelValue: unref(fileList),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(fileList) ? fileList.value = $event : null),
          extensions: ["flv", "mp4", "ass", "xml", "m4s", "ts"],
          desc: "请选择视频以及弹幕文件，如果为xml将自动转换为ass",
          max: 2
        }, null, 8, ["modelValue"]),
        createVNode(_component_n_tabs, {
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
                  _cache[30] || (_cache[30] = createBaseVNode("div", null, null, -1)),
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(clientOptions).hotProgress,
                      "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => unref(clientOptions).hotProgress = $event)
                    }, {
                      default: withCtx(() => _cache[21] || (_cache[21] = [
                        createTextVNode(" 高能进度条 ")
                      ])),
                      _: 1
                    }, 8, ["checked"]),
                    createVNode(_component_n_checkbox, {
                      checked: unref(clientOptions).autoUpload,
                      "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => unref(clientOptions).autoUpload = $event)
                    }, {
                      default: withCtx(() => _cache[22] || (_cache[22] = [
                        createTextVNode(" 完成后自动上传 ")
                      ])),
                      _: 1
                    }, 8, ["checked"]),
                    unref(clientOptions).autoUpload ? (openBlock(), createBlock(_component_n_button, {
                      key: 0,
                      ghost: "",
                      type: "primary",
                      onClick: _cache[3] || (_cache[3] = ($event) => appendVideoVisible.value = true)
                    }, {
                      default: withCtx(() => [
                        _cache[23] || (_cache[23] = createTextVNode(" 续传 ")),
                        unref(aid) ? (openBlock(), createElementBlock("span", _hoisted_5, "(已选择)")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(clientOptions).hotProgress ? (openBlock(), createElementBlock("div", _hoisted_6, [
                      createBaseVNode("div", null, [
                        _cache[25] || (_cache[25] = createTextVNode(" 采样间隔 ")),
                        createVNode(_component_n_input_number, {
                          value: unref(clientOptions).hotProgressSample,
                          "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(clientOptions).hotProgressSample = $event),
                          placeholder: "单位秒",
                          min: "1",
                          style: { "width": "140px" }
                        }, {
                          suffix: withCtx(() => _cache[24] || (_cache[24] = [
                            createTextVNode(" 秒 ")
                          ])),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      createBaseVNode("div", null, [
                        _cache[27] || (_cache[27] = createTextVNode(" 高度 ")),
                        createVNode(_component_n_input_number, {
                          value: unref(clientOptions).hotProgressHeight,
                          "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(clientOptions).hotProgressHeight = $event),
                          placeholder: "单位像素",
                          min: "10",
                          style: { "width": "140px" }
                        }, {
                          suffix: withCtx(() => _cache[26] || (_cache[26] = [
                            createTextVNode(" 像素 ")
                          ])),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      createBaseVNode("div", null, [
                        _cache[28] || (_cache[28] = createBaseVNode("div", null, "默认颜色", -1)),
                        createVNode(_component_n_color_picker, {
                          value: unref(clientOptions).hotProgressColor,
                          "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(clientOptions).hotProgressColor = $event),
                          style: { "width": "140px" }
                        }, null, 8, ["value"])
                      ]),
                      createBaseVNode("div", null, [
                        _cache[29] || (_cache[29] = createBaseVNode("div", null, "覆盖颜色", -1)),
                        createVNode(_component_n_color_picker, {
                          value: unref(clientOptions).hotProgressFillColor,
                          "onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(clientOptions).hotProgressFillColor = $event),
                          style: { "width": "140px" }
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
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(clientOptions).uploadPresetId = $event),
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
                createBaseVNode("div", _hoisted_7, [
                  _cache[31] || (_cache[31] = createBaseVNode("span", { style: { "flex": "none" } }, "预设", -1)),
                  createVNode(_component_n_select, {
                    value: unref(danmuPresetId),
                    "onUpdate:value": _cache[9] || (_cache[9] = ($event) => isRef(danmuPresetId) ? danmuPresetId.value = $event : null),
                    options: unref(danmuPresetsOptions),
                    placeholder: "选择预设"
                  }, null, 8, ["value", "options"])
                ]),
                unref(danmuPreset$1).id ? (openBlock(), createBlock(DanmuFactorySetting, {
                  key: 0,
                  modelValue: unref(danmuPreset$1).config,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(danmuPreset$1).config = $event),
                  "simpled-mode": unref(simpledMode),
                  onChange: handleDanmuChange
                }, null, 8, ["modelValue", "simpled-mode"])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_8, [
                  createVNode(_component_n_checkbox, {
                    checked: unref(simpledMode),
                    "onUpdate:checked": _cache[11] || (_cache[11] = ($event) => isRef(simpledMode) ? simpledMode.value = $event : null)
                  }, {
                    default: withCtx(() => _cache[32] || (_cache[32] = [
                      createTextVNode(" 简易配置 ")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  unref(danmuPresetId) !== "default" ? (openBlock(), createBlock(_component_n_button, {
                    key: 0,
                    ghost: "",
                    quaternary: "",
                    type: "error",
                    onClick: deleteDanmu
                  }, {
                    default: withCtx(() => _cache[33] || (_cache[33] = [
                      createTextVNode("删除")
                    ])),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_n_button, {
                    type: "primary",
                    onClick: renameDanmu
                  }, {
                    default: withCtx(() => _cache[34] || (_cache[34] = [
                      createTextVNode("重命名")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    onClick: saveAsDanmu
                  }, {
                    default: withCtx(() => _cache[35] || (_cache[35] = [
                      createTextVNode("另存为")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    onClick: saveDanmuPreset
                  }, {
                    default: withCtx(() => _cache[36] || (_cache[36] = [
                      createTextVNode("保存")
                    ])),
                    _: 1
                  })
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
                createVNode(ffmpegSetting, {
                  modelValue: unref(clientOptions).ffmpegPresetId,
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(clientOptions).ffmpegPresetId = $event),
                  onChange: handleFfmpegSettingChange
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_n_modal, {
          show: unref(nameModelVisible),
          "onUpdate:show": _cache[15] || (_cache[15] = ($event) => isRef(nameModelVisible) ? nameModelVisible.value = $event : null)
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "600px" },
              bordered: false,
              role: "dialog",
              "aria-modal": "true"
            }, {
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_9, [
                  createVNode(_component_n_button, {
                    onClick: _cache[14] || (_cache[14] = ($event) => nameModelVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[37] || (_cache[37] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    style: { "margin-left": "10px" },
                    onClick: saveConfirm
                  }, {
                    default: withCtx(() => _cache[38] || (_cache[38] = [
                      createTextVNode("确认")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(tempPresetName),
                  "onUpdate:value": _cache[13] || (_cache[13] = ($event) => isRef(tempPresetName) ? tempPresetName.value = $event : null),
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
          "onUpdate:visible": _cache[16] || (_cache[16] = ($event) => isRef(appendVideoVisible) ? appendVideoVisible.value = $event : null),
          modelValue: unref(aid),
          "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => isRef(aid) ? aid.value = $event : null)
        }, null, 8, ["visible", "modelValue"]),
        createVNode(_sfc_main$1, {
          visible: unref(previewModalVisible),
          "onUpdate:visible": _cache[18] || (_cache[18] = ($event) => isRef(previewModalVisible) ? previewModalVisible.value = $event : null),
          files: unref(previewFiles)
        }, null, 8, ["visible", "files"])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-74a5ae1f"]]);
export {
  index as default
};
