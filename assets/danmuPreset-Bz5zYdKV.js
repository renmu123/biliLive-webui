import { _ as _sfc_main$1 } from "./Tip.vue_vue_type_script_setup_true_lang-x9PvGp7f.js";
import { d as defineComponent, a2 as mergeModels, a3 as useModel, x as computed, r as ref, ae as onMounted, a5 as watch, c as createElementBlock, e as createBaseVNode, a as createVNode, h as createCommentVNode, g as createBlock, w as withCtx, j as createTextVNode, B as Button, f as unref, F as Fragment, a9 as __unplugin_components_3$2, i as isRef, _ as __unplugin_components_4, a6 as renderList, o as openBlock } from "./index-gjuLIDoI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-B1lyReKF.js";
import { c as common } from "./common-Da25N27f.js";
import { u as useNotice } from "./useNotice-BnaW_JYm.js";
import { a as __unplugin_components_5, _ as __unplugin_components_2 } from "./FormItem-Kj27K3vk.js";
import { _ as __unplugin_components_0 } from "./InputNumber-CaUnxb7j.js";
import { _ as __unplugin_components_1, a as __unplugin_components_2$1 } from "./Checkbox-pQXdXXSK.js";
import { _ as __unplugin_components_0$1 } from "./Select-xWcqChuz.js";
import { _ as __unplugin_components_1$1 } from "./Divider-CcENGeqI.js";
import { _ as __unplugin_components_5$1, a as __unplugin_components_3$1 } from "./RadioGroup-Bd7Skk-n.js";
import { _ as __unplugin_components_3 } from "./Space-BBiSHRV-.js";
import { _ as __unplugin_components_2$2 } from "./Popover-T5GorXob.js";
import { _ as __unplugin_components_0$2 } from "./Input--Gp3P9gj.js";
import { _ as __unplugin_components_1$2 } from "./Switch-ChpQMtl0.js";
import { u as useDanmuPreset, k as danmuPreset, b as uuid } from "./index-BpXg0f34.js";
import { u as useFileDialog } from "./index-bqczNda1.js";
const _imports_0 = "" + new URL("gift-postion-D-rDrqRq.png", import.meta.url).href;
const _hoisted_1 = { class: "content" };
const _hoisted_2 = { class: "card" };
const _hoisted_3 = {
  key: 0,
  class: "card"
};
const _hoisted_4 = { class: "card" };
const _hoisted_5 = { class: "card" };
const _hoisted_6 = { class: "card" };
const _hoisted_7 = { style: { "margin-left": "10px", "display": "inline-block" } };
const _hoisted_8 = { style: { "text-align": "right" } };
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
    const notice = useNotice();
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
      } else {
        try {
          const data = await common.getFontList();
          fontOptions.value = data.map((item) => {
            return {
              label: item.fullName,
              value: item.postscriptName
            };
          });
        } catch (error) {
          fontOptions.value = [];
          console.error(error);
        }
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
    const fontSizeResponsiveVisible = ref(false);
    const sizeResponsiveParams = ref([]);
    const changeFontSizeResponsive = () => {
      fontSizeResponsiveVisible.value = true;
      sizeResponsiveParams.value = config.value.fontSizeResponsiveParams;
    };
    const fontSizeResponsiveConfirm = () => {
      const data = sizeResponsiveParams.value.toSorted((a, b) => a[0] - b[0]);
      for (let i = 0; i < data.length - 1; i++) {
        if (data[i][0] === data[i + 1][0]) {
          notice.error("分辨率高度不能重复");
          return;
        }
      }
      for (let i = 0; i < data.length - 1; i++) {
        if (data[i][1] >= data[i + 1][1]) {
          notice.error("分辨率高度较大的字体大小需大于等于分辨率高度较小的字体大小");
          return;
        }
      }
      config.value.fontSizeResponsiveParams = data;
      fontSizeResponsiveVisible.value = false;
    };
    return (_ctx, _cache) => {
      const _component_n_input_number = __unplugin_components_0;
      const _component_n_checkbox = __unplugin_components_1;
      const _component_n_button = Button;
      const _component_n_form_item = __unplugin_components_2;
      const _component_n_select = __unplugin_components_0$1;
      const _component_n_form = __unplugin_components_5;
      const _component_n_divider = __unplugin_components_1$1;
      const _component_n_radio = __unplugin_components_3$1;
      const _component_n_space = __unplugin_components_3;
      const _component_n_radio_group = __unplugin_components_5$1;
      const _component_n_checkbox_group = __unplugin_components_2$1;
      const _component_n_popover = __unplugin_components_2$2;
      const _component_n_switch = __unplugin_components_1$2;
      const _component_n_input = __unplugin_components_0$2;
      const _component_n_card = __unplugin_components_4;
      const _component_n_modal = __unplugin_components_3$2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[44] || (_cache[44] = createBaseVNode("h2", null, "文字", -1)),
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
                  }, null, 8, ["value"]),
                  createVNode(_component_n_checkbox, {
                    checked: config.value.fontSizeResponsive,
                    "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => config.value.fontSizeResponsive = $event),
                    style: { "margin-left": "10px" }
                  }, {
                    default: withCtx(() => _cache[39] || (_cache[39] = [
                      createTextVNode(" 自适应分辨率 ")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  config.value.fontSizeResponsive ? (openBlock(), createBlock(_component_n_button, {
                    key: 0,
                    type: "primary",
                    onClick: changeFontSizeResponsive
                  }, {
                    default: withCtx(() => _cache[40] || (_cache[40] = [
                      createTextVNode("修改配置")
                    ])),
                    _: 1
                  })) : createCommentVNode("", true)
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
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => config.value.shadow = $event),
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
                    "onUpdate:value": _cache[3] || (_cache[3] = ($event) => config.value.outline = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0,
                    max: 4
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                key: 2,
                label: "描边模糊半径"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value["outline-blur"],
                    "onUpdate:value": _cache[4] || (_cache[4] = ($event) => config.value["outline-blur"] = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_n_form_item, { label: "文字不透明度" }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value.opacity100,
                    "onUpdate:value": _cache[5] || (_cache[5] = ($event) => config.value.opacity100 = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0,
                    max: 100,
                    style: { "width": "130px" },
                    precision: 2
                  }, {
                    suffix: withCtx(() => _cache[41] || (_cache[41] = [
                      createTextVNode(" % ")
                    ])),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, { label: "描边不透明度" }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value["outline-opacity-percentage"],
                    "onUpdate:value": _cache[6] || (_cache[6] = ($event) => config.value["outline-opacity-percentage"] = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0,
                    max: 100,
                    style: { "width": "130px" },
                    precision: 2
                  }, {
                    suffix: withCtx(() => _cache[42] || (_cache[42] = [
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
                    "onUpdate:checked": _cache[7] || (_cache[7] = ($event) => config.value.bold = $event)
                  }, {
                    default: withCtx(() => _cache[43] || (_cache[43] = [
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
                    "onUpdate:value": _cache[8] || (_cache[8] = ($event) => config.value.fontname = $event),
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
          _cache[61] || (_cache[61] = createBaseVNode("h2", null, "弹幕", -1)),
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
                    "onUpdate:value": _cache[9] || (_cache[9] = ($event) => config.value.density = $event),
                    name: "density"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_n_space, null, {
                        default: withCtx(() => [
                          createVNode(_component_n_radio, { value: 0 }, {
                            default: withCtx(() => _cache[45] || (_cache[45] = [
                              createTextVNode(" 无限 ")
                            ])),
                            _: 1
                          }),
                          createVNode(_component_n_radio, { value: -1 }, {
                            default: withCtx(() => _cache[46] || (_cache[46] = [
                              createTextVNode(" 不重叠 ")
                            ])),
                            _: 1
                          }),
                          createVNode(_component_n_radio, { value: -2 }, {
                            default: withCtx(() => _cache[47] || (_cache[47] = [
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
                    "onUpdate:value": _cache[10] || (_cache[10] = ($event) => config.value.customDensity = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 1
                  }, {
                    suffix: withCtx(() => _cache[48] || (_cache[48] = [
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
                    "onUpdate:value": _cache[11] || (_cache[11] = ($event) => config.value.scrolltime = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0
                  }, {
                    suffix: withCtx(() => _cache[49] || (_cache[49] = [
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
                    "onUpdate:value": _cache[12] || (_cache[12] = ($event) => config.value.fixtime = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 0
                  }, {
                    suffix: withCtx(() => _cache[50] || (_cache[50] = [
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
                    "onUpdate:value": _cache[13] || (_cache[13] = ($event) => config.value.timeshift = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    style: { "width": "120px" },
                    precision: 2
                  }, {
                    suffix: withCtx(() => _cache[51] || (_cache[51] = [
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
                    "onUpdate:checked": _cache[14] || (_cache[14] = ($event) => config.value.showusernames = $event)
                  }, {
                    default: withCtx(() => _cache[52] || (_cache[52] = [
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
                    "onUpdate:checked": _cache[15] || (_cache[15] = ($event) => config.value.saveblocked = $event)
                  }, {
                    default: withCtx(() => _cache[53] || (_cache[53] = [
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
                      "onUpdate:value": _cache[16] || (_cache[16] = ($event) => config.value.blockmode = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_space, null, {
                          default: withCtx(() => [
                            createVNode(_component_n_checkbox, { value: "R2L" }, {
                              default: withCtx(() => _cache[54] || (_cache[54] = [
                                createTextVNode(" 右左滚动 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "L2R" }, {
                              default: withCtx(() => _cache[55] || (_cache[55] = [
                                createTextVNode(" 左右滚动 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "TOP" }, {
                              default: withCtx(() => _cache[56] || (_cache[56] = [
                                createTextVNode(" 顶部固定 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "BOTTOM" }, {
                              default: withCtx(() => _cache[57] || (_cache[57] = [
                                createTextVNode(" 底部固定 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "SPECIAL" }, {
                              default: withCtx(() => _cache[58] || (_cache[58] = [
                                createTextVNode(" 特殊 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "COLOR" }, {
                              default: withCtx(() => _cache[59] || (_cache[59] = [
                                createTextVNode(" 非白色 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "REPEAT" }, {
                              default: withCtx(() => _cache[60] || (_cache[60] = [
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
          _cache[66] || (_cache[66] = createBaseVNode("h2", null, "画面", -1)),
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
                    "onUpdate:value": _cache[17] || (_cache[17] = ($event) => config.value.scrollarea = $event),
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
                    "onUpdate:value": _cache[18] || (_cache[18] = ($event) => config.value.displayarea = $event),
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
                key: 2,
                label: "行间距"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value["line-spacing"],
                    "onUpdate:value": _cache[19] || (_cache[19] = ($event) => config.value["line-spacing"] = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    step: 1
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                key: 3,
                label: "顶部间距"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value["top-margin"],
                    "onUpdate:value": _cache[20] || (_cache[20] = ($event) => config.value["top-margin"] = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    step: 1
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                key: 4,
                label: "底部间距"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value["bottom-margin"],
                    "onUpdate:value": _cache[21] || (_cache[21] = ($event) => config.value["bottom-margin"] = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    step: 1
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_n_form_item, { label: "分辨率" }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: config.value.resolution[0],
                    "onUpdate:value": _cache[22] || (_cache[22] = ($event) => config.value.resolution[0] = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 1,
                    step: 100,
                    placeholder: "宽"
                  }, null, 8, ["value"]),
                  _cache[63] || (_cache[63] = createTextVNode(" X  ")),
                  createVNode(_component_n_input_number, {
                    value: config.value.resolution[1],
                    "onUpdate:value": _cache[23] || (_cache[23] = ($event) => config.value.resolution[1] = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: 1,
                    step: 100,
                    placeholder: "高"
                  }, null, 8, ["value"]),
                  createVNode(_component_n_checkbox, {
                    checked: config.value.resolutionResponsive,
                    "onUpdate:checked": _cache[24] || (_cache[24] = ($event) => config.value.resolutionResponsive = $event),
                    style: { "margin-left": "20px" },
                    title: "启用后在压制弹幕至视频中时，以视频的分辨率为主，开启分辨率缩放后会失效"
                  }, {
                    default: withCtx(() => _cache[62] || (_cache[62] = [
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
                      "onUpdate:value": _cache[25] || (_cache[25] = ($event) => config.value.statmode = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_space, null, {
                          default: withCtx(() => [
                            createVNode(_component_n_checkbox, { value: "TABLE" }, {
                              default: withCtx(() => _cache[64] || (_cache[64] = [
                                createTextVNode(" 统计图 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "HISTOGRAM" }, {
                              default: withCtx(() => _cache[65] || (_cache[65] = [
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
          _cache[73] || (_cache[73] = createBaseVNode("h2", { title: "仅限blrec&录播姬弹幕格式" }, "礼物栏", -1)),
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
                  createVNode(_component_n_popover, { trigger: "hover" }, {
                    trigger: withCtx(() => [
                      createVNode(_component_n_checkbox, {
                        checked: config.value.showmsgbox,
                        "onUpdate:checked": _cache[26] || (_cache[26] = ($event) => config.value.showmsgbox = $event)
                      }, {
                        default: withCtx(() => _cache[67] || (_cache[67] = [
                          createTextVNode(" 显示礼物框 ")
                        ])),
                        _: 1
                      }, 8, ["checked"])
                    ]),
                    default: withCtx(() => [
                      _cache[68] || (_cache[68] = createBaseVNode("div", null, [
                        createBaseVNode("div", null, [
                          createBaseVNode("img", {
                            width: "450",
                            height: "300",
                            src: _imports_0
                          })
                        ]),
                        createBaseVNode("h3", null, "注意礼物框高度不要高过分辨率")
                      ], -1))
                    ]),
                    _: 1
                  })
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
                      "onUpdate:value": _cache[27] || (_cache[27] = ($event) => config.value.msgboxsize[0] = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: 0,
                      step: 100,
                      title: "宽"
                    }, null, 8, ["value"]),
                    _cache[69] || (_cache[69] = createTextVNode(" X  ")),
                    createVNode(_component_n_input_number, {
                      value: config.value.msgboxsize[1],
                      "onUpdate:value": _cache[28] || (_cache[28] = ($event) => config.value.msgboxsize[1] = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: 0,
                      step: 100,
                      title: "高"
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_form_item, {
                  key: 1,
                  label: "礼物框位置"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input_number, {
                      value: config.value.msgboxpos[0],
                      "onUpdate:value": _cache[29] || (_cache[29] = ($event) => config.value.msgboxpos[0] = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      title: "X轴",
                      step: 10
                    }, null, 8, ["value"]),
                    _cache[70] || (_cache[70] = createTextVNode(" X  ")),
                    createVNode(_component_n_input_number, {
                      value: config.value.msgboxpos[1],
                      "onUpdate:value": _cache[30] || (_cache[30] = ($event) => config.value.msgboxpos[1] = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      title: "Y轴，负值向上",
                      step: 10
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_n_form_item, { label: "礼物框文字大小" }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input_number, {
                      value: config.value.msgboxfontsize,
                      "onUpdate:value": _cache[31] || (_cache[31] = ($event) => config.value.msgboxfontsize = $event),
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
                      "onUpdate:value": _cache[32] || (_cache[32] = ($event) => config.value.msgboxduration = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: 0,
                      style: { "width": "140px" }
                    }, {
                      suffix: withCtx(() => _cache[71] || (_cache[71] = [
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
                      "onUpdate:value": _cache[33] || (_cache[33] = ($event) => config.value.giftminprice = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: 0,
                      style: { "width": "140px" }
                    }, {
                      suffix: withCtx(() => _cache[72] || (_cache[72] = [
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
          _cache[74] || (_cache[74] = createBaseVNode("h2", null, "其他", -1)),
          createVNode(_component_n_form_item, { style: { "width": "100%" } }, {
            label: withCtx(() => [
              createVNode(_sfc_main$1, {
                text: "屏蔽规则",
                tip: "\n              目前支持四种屏蔽规则，分别是：<br/>\n              <ol>\n                <li>关键词屏蔽：弹幕（包括SC）内容中包含屏蔽词的，将会被屏蔽</li>\n                <li>UID屏蔽：弹幕由指定的UID发送的，将会被屏蔽。格式示例：<10995238></li>\n                <li>用户名屏蔽：弹幕由指定的用户名发送的，将会被屏蔽。格式示例：[暮色312]</li>\n                <li>正则表达式屏蔽：弹幕内容符合正则表达式的，将会被屏蔽</li>\n              </ol>\n\n              Ps: 弹幕姬用户注意：出于性能原因，即使已开启了记录raw，UID屏蔽也是<strong>无法使用</strong>的，请使用用户名屏蔽替代<br/>"
              }),
              createBaseVNode("div", _hoisted_7, [
                createVNode(_component_n_switch, {
                  value: config.value["blacklist-regex"],
                  "onUpdate:value": _cache[34] || (_cache[34] = ($event) => config.value["blacklist-regex"] = $event),
                  style: { "margin-right": "4px" }
                }, null, 8, ["value"]),
                createVNode(_sfc_main$1, {
                  text: "正则表达式匹配",
                  tip: "开启后，<strong>所有屏蔽规则</strong>将被视为正则表达式，<strong>UID屏蔽和用户名屏蔽</strong>将会失效！"
                })
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n_input, {
                value: config.value.blacklist,
                "onUpdate:value": _cache[35] || (_cache[35] = ($event) => config.value.blacklist = $event),
                type: "textarea",
                placeholder: "请输入屏蔽规则，使用英文逗号分隔",
                style: { "width": "100%" },
                "input-props": { spellcheck: "false" }
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, { style: { "width": "100%" } }, {
            label: withCtx(() => [
              createVNode(_sfc_main$1, {
                text: "自定义函数",
                tip: "此功能为biliLive-tools的原生实现，非danmakufactory实现，具体使用见文档"
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_n_input, {
                value: config.value.filterFunction,
                "onUpdate:value": _cache[36] || (_cache[36] = ($event) => config.value.filterFunction = $event),
                type: "textarea",
                placeholder: "使用自定义函数来实现更多复杂功能，支持运行时改变参数以及过滤弹幕，具体使用见文档",
                style: { "width": "100%" },
                "input-props": { spellcheck: "false" }
              }, null, 8, ["value"])
            ]),
            _: 1
          })
        ]),
        createVNode(_component_n_modal, {
          show: unref(fontSizeResponsiveVisible),
          "onUpdate:show": _cache[38] || (_cache[38] = ($event) => isRef(fontSizeResponsiveVisible) ? fontSizeResponsiveVisible.value = $event : null)
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "600px" },
              bordered: false,
              role: "dialog",
              "aria-modal": "true"
            }, {
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_8, [
                  createVNode(_component_n_button, {
                    onClick: _cache[37] || (_cache[37] = ($event) => fontSizeResponsiveVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[77] || (_cache[77] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    style: { "margin-left": "10px" },
                    onClick: fontSizeResponsiveConfirm
                  }, {
                    default: withCtx(() => _cache[78] || (_cache[78] = [
                      createTextVNode("确认")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                _cache[79] || (_cache[79] = createBaseVNode("h3", null, " 可以为不同分辨率高度设置不同的字体大小，如果最后高度在你设置的两个高度之间，会采用线性方法计算。 第一个参数为高度，第二个为字体大小 ", -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sizeResponsiveParams), (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    style: { "display": "flex", "gap": "10px", "margin-bottom": "10px" }
                  }, [
                    createVNode(_component_n_input_number, {
                      value: item[0],
                      "onUpdate:value": ($event) => item[0] = $event,
                      placeholder: "请输入预定的分辨率高度",
                      min: "0",
                      step: "100"
                    }, null, 8, ["value", "onUpdate:value"]),
                    createVNode(_component_n_input_number, {
                      value: item[1],
                      "onUpdate:value": ($event) => item[1] = $event,
                      placeholder: "请输入分辨率高度下的字体大小",
                      min: "0",
                      step: "1"
                    }, null, 8, ["value", "onUpdate:value"]),
                    unref(sizeResponsiveParams).length !== 1 ? (openBlock(), createBlock(_component_n_button, {
                      key: 0,
                      type: "error",
                      onClick: ($event) => unref(sizeResponsiveParams).splice(index, 1)
                    }, {
                      default: withCtx(() => _cache[75] || (_cache[75] = [
                        createTextVNode("删除")
                      ])),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true),
                    createVNode(_component_n_button, {
                      type: "primary",
                      onClick: ($event) => unref(sizeResponsiveParams).splice(index + 1, 0, [0, 0])
                    }, {
                      default: withCtx(() => _cache[76] || (_cache[76] = [
                        createTextVNode("新增")
                      ])),
                      _: 2
                    }, 1032, ["onClick"])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
});
const DanmuFactorySetting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7abec2af"]]);
const usePresetFile = () => {
  const notice = useNotice();
  const { getDanmuPresets } = useDanmuPreset();
  const exportPreset = async (config, name) => {
    const preset = config;
    const blob = new Blob([JSON.stringify(preset)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const { open, onChange } = useFileDialog({
    accept: ".json",
    // Set to accept only image files
    directory: false,
    // Select directories instead of files if set true
    multiple: false
  });
  onChange((files) => {
    if (!files) return;
    if (files.length === 0) return;
    importPreset(files[0]);
  });
  const importPreset = async (file) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const config = JSON.parse(e.target?.result);
      await danmuPreset.save({
        id: uuid(),
        name: file.name.replace(".json", ""),
        config
      });
      notice.success({
        title: "导入成功",
        duration: 1e3
      });
      getDanmuPresets();
    };
    reader.readAsText(file);
  };
  return {
    exportPreset,
    importPreset: open
  };
};
export {
  DanmuFactorySetting as D,
  usePresetFile as u
};
