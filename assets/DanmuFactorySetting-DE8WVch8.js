import { _ as _sfc_main$1 } from "./Tip.vue_vue_type_script_setup_true_lang-ZS01Tq1J.js";
import { _ as __unplugin_components_1$2 } from "./Divider-DXs5FkMx.js";
import { _ as __unplugin_components_3, a as __unplugin_components_5 } from "./RadioGroup-DAR76U5f.js";
import { d as defineComponent, aj as mergeModels, ak as useModel, p as computed, r as ref, E as onMounted, F as watch, o as openBlock, ah as createElementBlock, e as createBaseVNode, a as createVNode, w as withCtx, b as unref, c as createBlock, am as createCommentVNode, f as createTextVNode, a8 as Fragment } from "./index-BdK_bIY-.js";
import { _ as __unplugin_components_4 } from "./InputNumber-BJpQhtBO.js";
import { _ as __unplugin_components_1, a as __unplugin_components_7 } from "./FormItem-CCWUUqVZ.js";
import { e as __unplugin_components_1$1, h as __unplugin_components_2 } from "./index-C4u8aLk_.js";
import { _ as __unplugin_components_0 } from "./Select---nAiZoJ.js";
import { _ as __unplugin_components_4$1 } from "./Space-DiCJhQLR.js";
import { _ as __unplugin_components_2$1 } from "./Input-B9R9uvsi.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CeIKdxzx.js";
const _hoisted_1 = { class: "content" };
const _hoisted_2 = { class: "card" };
const _hoisted_3 = {
  key: 0,
  class: "card"
};
const _hoisted_4 = { class: "card" };
const _hoisted_5 = { class: "card" };
const _hoisted_6 = { class: "card" };
const _hoisted_7 = { class: "inline-flex" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DanmuFactorySetting",
  props: /* @__PURE__ */ mergeModels({
    simpledMode: { type: Boolean }
  }, {
    "modelValue": { required: true, default: {} },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const config = useModel(__props, "modelValue");
    const emits = __emit;
    const props = __props;
    const isAdvancedMode = computed(() => {
      return !props.simpledMode;
    });
    const fontOptions = ref([]);
    const getFonts = async () => {
      if (!window.isWeb) {
        const data = await window.queryLocalFonts();
        fontOptions.value = data.map((item) => {
          return {
            label: item.fullName,
            value: item.postscriptName
          };
        });
      }
    };
    onMounted(async () => {
      getFonts();
    });
    watch(
      () => config.value,
      (val) => {
        emits("change", val);
      },
      {
        deep: true
      }
    );
    return (_ctx, _cache) => {
      const _component_n_input_number = __unplugin_components_4;
      const _component_n_form_item = __unplugin_components_1;
      const _component_n_checkbox = __unplugin_components_1$1;
      const _component_n_select = __unplugin_components_0;
      const _component_n_form = __unplugin_components_7;
      const _component_n_divider = __unplugin_components_1$2;
      const _component_n_radio = __unplugin_components_3;
      const _component_n_space = __unplugin_components_4$1;
      const _component_n_radio_group = __unplugin_components_5;
      const _component_n_checkbox_group = __unplugin_components_2;
      const _component_n_input = __unplugin_components_2$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[31] || (_cache[31] = createBaseVNode("h2", null, "文字", -1)),
          createVNode(_component_n_form, {
            ref: "formRef",
            inline: "",
            model: config.value,
            "label-placement": "left",
            "label-align": "right"
          }, {
            default: withCtx(() => [
              createVNode(_component_n_form_item, { label: "文字大小" }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value.fontsize,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => config.value.fontsize = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                key: 0,
                label: "阴影"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value.shadow,
                    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => config.value.shadow = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0,
                    max: 4
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                key: 1,
                label: "描边"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value.outline,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => config.value.outline = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0,
                    max: 4
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_n_form_item, { label: "不透明度" }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value.opacity100,
                    "onUpdate:value": _cache[3] || (_cache[3] = ($event) => config.value.opacity100 = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0,
                    max: 100,
                    style: { "width": "130px" },
                    precision: 2
                  }, {
                    suffix: withCtx(() => _cache[29] || (_cache[29] = [
                      createTextVNode(" % ")
                    ])),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_n_checkbox, {
                    checked: config.value.bold,
                    "onUpdate:checked": _cache[4] || (_cache[4] = ($event) => config.value.bold = $event)
                  }, {
                    default: withCtx(() => _cache[30] || (_cache[30] = [
                      createTextVNode(" 粗体 ")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, { label: "字体" }, {
                default: withCtx(() => [
                  createVNode(_component_n_select, {
                    value: config.value.fontname,
                    "onUpdate:value": _cache[5] || (_cache[5] = ($event) => config.value.fontname = $event),
                    options: unref(fontOptions),
                    style: { "width": "300px" },
                    filterable: "",
                    "virtual-scroll": ""
                  }, null, 8, ["value", "options"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        createVNode(_component_n_divider),
        unref(isAdvancedMode) ? (openBlock(), createElementBlock("div", _hoisted_3, [
          _cache[48] || (_cache[48] = createBaseVNode("h2", null, "弹幕", -1)),
          createVNode(_component_n_form, {
            ref: "formRef",
            inline: "",
            model: config.value,
            "label-placement": "left",
            "label-align": "right"
          }, {
            default: withCtx(() => [
              unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                key: 0,
                label: "弹幕密度"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_radio_group, {
                    value: config.value.density,
                    "onUpdate:value": _cache[6] || (_cache[6] = ($event) => config.value.density = $event),
                    name: "density"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_n_space, null, {
                        default: withCtx(() => [
                          createVNode(_component_n_radio, { value: 0 }, {
                            default: withCtx(() => _cache[32] || (_cache[32] = [
                              createTextVNode(" 无限 ")
                            ])),
                            _: 1
                          }),
                          createVNode(_component_n_radio, { value: -1 }, {
                            default: withCtx(() => _cache[33] || (_cache[33] = [
                              createTextVNode(" 不重叠 ")
                            ])),
                            _: 1
                          }),
                          createVNode(_component_n_radio, { value: -2 }, {
                            default: withCtx(() => _cache[34] || (_cache[34] = [
                              createTextVNode(" 按条数 ")
                            ])),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["value"]),
                  config.value.density === -2 ? (openBlock(), createBlock(_component_n_input_number, {
                    key: 0,
                    value: config.value.customDensity,
                    "onUpdate:value": _cache[7] || (_cache[7] = ($event) => config.value.customDensity = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 1
                  }, {
                    suffix: withCtx(() => _cache[35] || (_cache[35] = [
                      createTextVNode(" 条 ")
                    ])),
                    _: 1
                  }, 8, ["value"])) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                key: 1,
                label: "滚动弹幕通过时间"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value.scrolltime,
                    "onUpdate:value": _cache[8] || (_cache[8] = ($event) => config.value.scrolltime = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0
                  }, {
                    suffix: withCtx(() => _cache[36] || (_cache[36] = [
                      createTextVNode(" 秒 ")
                    ])),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                key: 2,
                label: "固定弹幕停留时间"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value.fixtime,
                    "onUpdate:value": _cache[9] || (_cache[9] = ($event) => config.value.fixtime = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0
                  }, {
                    suffix: withCtx(() => _cache[37] || (_cache[37] = [
                      createTextVNode(" 秒 ")
                    ])),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                key: 3,
                label: "时间偏移"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value.timeshift,
                    "onUpdate:value": _cache[10] || (_cache[10] = ($event) => config.value.timeshift = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    style: { "width": "120px" },
                    precision: 2
                  }, {
                    suffix: withCtx(() => _cache[38] || (_cache[38] = [
                      createTextVNode(" 秒 ")
                    ])),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_n_form_item, { title: "如果有用户名的话" }, {
                default: withCtx(() => [
                  createVNode(_component_n_checkbox, {
                    checked: config.value.showusernames,
                    "onUpdate:checked": _cache[11] || (_cache[11] = ($event) => config.value.showusernames = $event)
                  }, {
                    default: withCtx(() => _cache[39] || (_cache[39] = [
                      createTextVNode(" 显示用户名 ")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, { title: "只支持部分屏蔽弹幕" }, {
                default: withCtx(() => [
                  createVNode(_component_n_checkbox, {
                    checked: config.value.saveblocked,
                    "onUpdate:checked": _cache[12] || (_cache[12] = ($event) => config.value.saveblocked = $event)
                  }, {
                    default: withCtx(() => _cache[40] || (_cache[40] = [
                      createTextVNode(" 保存屏蔽弹幕 ")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ]),
                _: 1
              }),
              createBaseVNode("div", null, [
                unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                  key: 0,
                  label: "按类型屏蔽",
                  "label-placement": "top",
                  "label-align": "left"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_checkbox_group, {
                      value: config.value.blockmode,
                      "onUpdate:value": _cache[13] || (_cache[13] = ($event) => config.value.blockmode = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_space, null, {
                          default: withCtx(() => [
                            createVNode(_component_n_checkbox, { value: "R2L" }, {
                              default: withCtx(() => _cache[41] || (_cache[41] = [
                                createTextVNode(" 右左滚动 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "L2R" }, {
                              default: withCtx(() => _cache[42] || (_cache[42] = [
                                createTextVNode(" 左右滚动 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "TOP" }, {
                              default: withCtx(() => _cache[43] || (_cache[43] = [
                                createTextVNode(" 顶部固定 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "BOTTOM" }, {
                              default: withCtx(() => _cache[44] || (_cache[44] = [
                                createTextVNode(" 底部固定 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "SPECIAL" }, {
                              default: withCtx(() => _cache[45] || (_cache[45] = [
                                createTextVNode(" 特殊 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "COLOR" }, {
                              default: withCtx(() => _cache[46] || (_cache[46] = [
                                createTextVNode(" 非白色 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "REPEAT" }, {
                              default: withCtx(() => _cache[47] || (_cache[47] = [
                                createTextVNode(" 内容重复 ")
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
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 8, ["model"])
        ])) : createCommentVNode("", true),
        unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_divider, { key: 1 })) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_4, [
          _cache[53] || (_cache[53] = createBaseVNode("h2", null, "画面", -1)),
          createVNode(_component_n_form, {
            ref: "formRef",
            inline: "",
            model: config.value,
            "label-placement": "left",
            "label-align": "right"
          }, {
            default: withCtx(() => [
              unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                key: 0,
                label: "滚动弹幕显示区域"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value.scrollarea,
                    "onUpdate:value": _cache[14] || (_cache[14] = ($event) => config.value.scrollarea = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0,
                    max: 1,
                    precision: 1,
                    step: 0.1
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                key: 1,
                label: "全部弹幕显示区域"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value.displayarea,
                    "onUpdate:value": _cache[15] || (_cache[15] = ($event) => config.value.displayarea = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0,
                    max: 1,
                    precision: 1,
                    step: 0.1
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_n_form_item, { label: "分辨率" }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value.resolution[0],
                    "onUpdate:value": _cache[16] || (_cache[16] = ($event) => config.value.resolution[0] = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: -1,
                    step: 100,
                    placeholder: "宽"
                  }, null, 8, ["value"]),
                  _cache[50] || (_cache[50] = createTextVNode(" X  ")),
                  createVNode(_component_n_input_number, {
                    value: config.value.resolution[1],
                    "onUpdate:value": _cache[17] || (_cache[17] = ($event) => config.value.resolution[1] = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: -1,
                    step: 100,
                    placeholder: "高"
                  }, null, 8, ["value"]),
                  createVNode(_component_n_checkbox, {
                    checked: config.value.resolutionResponsive,
                    "onUpdate:checked": _cache[18] || (_cache[18] = ($event) => config.value.resolutionResponsive = $event),
                    style: { "margin-left": "20px" },
                    title: "启用后在压制弹幕至视频中时，以视频的分辨率为主，开启分辨率缩放后会失效"
                  }, {
                    default: withCtx(() => _cache[49] || (_cache[49] = [
                      createTextVNode(" 自适应视频分辨率 ")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ]),
                _: 1
              }),
              createBaseVNode("div", null, [
                unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                  key: 0,
                  label: "调试"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_checkbox_group, {
                      value: config.value.statmode,
                      "onUpdate:value": _cache[19] || (_cache[19] = ($event) => config.value.statmode = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_space, null, {
                          default: withCtx(() => [
                            createVNode(_component_n_checkbox, { value: "TABLE" }, {
                              default: withCtx(() => _cache[51] || (_cache[51] = [
                                createTextVNode(" 统计图 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "HISTOGRAM" }, {
                              default: withCtx(() => _cache[52] || (_cache[52] = [
                                createTextVNode(" 直方图 ")
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
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        createVNode(_component_n_divider),
        createBaseVNode("div", _hoisted_5, [
          _cache[59] || (_cache[59] = createBaseVNode("h2", { title: "仅限blrec&录播姬弹幕格式" }, "礼物栏", -1)),
          createVNode(_component_n_form, {
            ref: "formRef",
            inline: "",
            model: config.value,
            "label-placement": "left",
            "label-align": "right"
          }, {
            default: withCtx(() => [
              createVNode(_component_n_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_n_checkbox, {
                    checked: config.value.showmsgbox,
                    "onUpdate:checked": _cache[20] || (_cache[20] = ($event) => config.value.showmsgbox = $event)
                  }, {
                    default: withCtx(() => _cache[54] || (_cache[54] = [
                      createTextVNode(" 显示礼物框 ")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ]),
                _: 1
              }),
              config.value.showmsgbox ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                  key: 0,
                  label: "礼物框尺寸"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input_number, {
                      value: config.value.msgboxsize[0],
                      "onUpdate:value": _cache[21] || (_cache[21] = ($event) => config.value.msgboxsize[0] = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: 0,
                      step: 100
                    }, null, 8, ["value"]),
                    _cache[55] || (_cache[55] = createTextVNode(" X  ")),
                    createVNode(_component_n_input_number, {
                      value: config.value.msgboxsize[1],
                      "onUpdate:value": _cache[22] || (_cache[22] = ($event) => config.value.msgboxsize[1] = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: 0,
                      step: 100
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                  key: 1,
                  label: "礼物框位置",
                  title: "第二个输入框修改为负数，可以向上调节位置"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input_number, {
                      value: config.value.msgboxpos[0],
                      "onUpdate:value": _cache[23] || (_cache[23] = ($event) => config.value.msgboxpos[0] = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      step: 10
                    }, null, 8, ["value"]),
                    _cache[56] || (_cache[56] = createTextVNode(" X  ")),
                    createVNode(_component_n_input_number, {
                      value: config.value.msgboxpos[1],
                      "onUpdate:value": _cache[24] || (_cache[24] = ($event) => config.value.msgboxpos[1] = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      step: 10
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_n_form_item, { label: "礼物框文字大小" }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input_number, {
                      value: config.value.msgboxfontsize,
                      "onUpdate:value": _cache[25] || (_cache[25] = ($event) => config.value.msgboxfontsize = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: 0
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_n_form_item, { label: "礼物框持续时间" }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input_number, {
                      value: config.value.msgboxduration,
                      "onUpdate:value": _cache[26] || (_cache[26] = ($event) => config.value.msgboxduration = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: 0,
                      style: { "width": "140px" }
                    }, {
                      suffix: withCtx(() => _cache[57] || (_cache[57] = [
                        createTextVNode(" 秒 ")
                      ])),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_n_form_item, { label: "礼物最小价值" }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input_number, {
                      value: config.value.giftminprice,
                      "onUpdate:value": _cache[27] || (_cache[27] = ($event) => config.value.giftminprice = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: 0,
                      style: { "width": "140px" }
                    }, {
                      suffix: withCtx(() => _cache[58] || (_cache[58] = [
                        createTextVNode(" RMB ")
                      ])),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  _: 1
                })
              ], 64)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        createBaseVNode("div", _hoisted_6, [
          _cache[61] || (_cache[61] = createBaseVNode("h2", null, "其他", -1)),
          createVNode(_component_n_form_item, { style: { "width": "100%" } }, {
            label: withCtx(() => [
              createBaseVNode("span", _hoisted_7, [
                _cache[60] || (_cache[60] = createBaseVNode("span", null, "屏蔽词", -1)),
                createVNode(_sfc_main$1, { tip: "\n              目前支持三种屏蔽方式，分别是弹幕内容，uid，用户名，需以英文逗号分隔<br/>\n              弹幕内容：部分匹配，包含sc内容<br/>\n              uid：全匹配，格式为<10995238>，弹幕姬用户注意，即是你开启了记录raw，出于性能原因，此过滤也是无法使用的，请使用用户名替代<br/>\n              用户名：全匹配，格式为<暮色312><br/>\n              此功能正在测试，如果出现开启后无法转换的情况请反馈" })
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n_input, {
                value: config.value.blacklist,
                "onUpdate:value": _cache[28] || (_cache[28] = ($event) => config.value.blacklist = $event),
                type: "textarea",
                placeholder: "请输入需要屏蔽的关键词，以英文逗号分隔",
                style: { "width": "100%" },
                "input-props": { spellcheck: "false" }
              }, null, 8, ["value"])
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const DanmuFactorySetting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-79c3a81c"]]);
export {
  DanmuFactorySetting as D
};
