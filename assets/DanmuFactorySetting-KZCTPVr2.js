import { d as defineComponent, m as mergeModels, c as useModel, e as computed, r as ref, o as onMounted, w as watch, f as openBlock, n as createElementBlock, k as createBaseVNode, i as createVNode, h as withCtx, j as unref, g as createBlock, p as createCommentVNode, l as createTextVNode, F as Fragment, C as _sfc_main$1, D as __unplugin_components_2, z as __unplugin_components_1, E as __unplugin_components_1$1, B as __unplugin_components_0, L as __unplugin_components_13, aE as __unplugin_components_4, cU as __unplugin_components_2$1, G as __unplugin_components_2$2, M as pushScopeId, O as popScopeId, P as _export_sfc } from "./index--gUAYtmw.js";
import { _ as __unplugin_components_1$2 } from "./Divider-DnSgvn6o.js";
import { _ as __unplugin_components_3, a as __unplugin_components_5 } from "./RadioGroup-BP8eQLS8.js";
const _withScopeId = (n) => (pushScopeId("data-v-09f60ccd"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "content" };
const _hoisted_2 = { class: "card" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "文字", -1));
const _hoisted_4 = {
  key: 0,
  class: "card"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "弹幕", -1));
const _hoisted_6 = { class: "card" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "画面", -1));
const _hoisted_8 = { class: "card" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { title: "仅限blrec&录播姬弹幕格式" }, "礼物栏", -1));
const _hoisted_10 = { class: "card" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "其他", -1));
const _hoisted_12 = { class: "inline-flex" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "屏蔽词", -1));
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
      const data = await window.queryLocalFonts();
      fontOptions.value = data.map((item) => {
        return {
          label: item.fullName,
          value: item.postscriptName
        };
      });
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
      const _component_n_input_number = __unplugin_components_2;
      const _component_n_form_item = __unplugin_components_1;
      const _component_n_checkbox = __unplugin_components_1$1;
      const _component_n_select = __unplugin_components_0;
      const _component_n_form = __unplugin_components_13;
      const _component_n_divider = __unplugin_components_1$2;
      const _component_n_radio = __unplugin_components_3;
      const _component_n_space = __unplugin_components_4;
      const _component_n_radio_group = __unplugin_components_5;
      const _component_n_checkbox_group = __unplugin_components_2$1;
      const _component_n_input = __unplugin_components_2$2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
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
                    suffix: withCtx(() => [
                      createTextVNode(" % ")
                    ]),
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
                    default: withCtx(() => [
                      createTextVNode(" 粗体 ")
                    ]),
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
        unref(isAdvancedMode) ? (openBlock(), createElementBlock("div", _hoisted_4, [
          _hoisted_5,
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
                            default: withCtx(() => [
                              createTextVNode(" 无限 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_n_radio, { value: -1 }, {
                            default: withCtx(() => [
                              createTextVNode(" 不重叠 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_n_radio, { value: -2 }, {
                            default: withCtx(() => [
                              createTextVNode(" 按条数 ")
                            ]),
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
                    suffix: withCtx(() => [
                      createTextVNode(" 条 ")
                    ]),
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
                    suffix: withCtx(() => [
                      createTextVNode(" 秒 ")
                    ]),
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
                    suffix: withCtx(() => [
                      createTextVNode(" 秒 ")
                    ]),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_n_form_item, { title: "如果有用户名的话" }, {
                default: withCtx(() => [
                  createVNode(_component_n_checkbox, {
                    checked: config.value.showusernames,
                    "onUpdate:checked": _cache[10] || (_cache[10] = ($event) => config.value.showusernames = $event)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 显示用户名 ")
                    ]),
                    _: 1
                  }, 8, ["checked"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, { title: "只支持部分屏蔽弹幕" }, {
                default: withCtx(() => [
                  createVNode(_component_n_checkbox, {
                    checked: config.value.saveblocked,
                    "onUpdate:checked": _cache[11] || (_cache[11] = ($event) => config.value.saveblocked = $event)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 保存屏蔽弹幕 ")
                    ]),
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
                      "onUpdate:value": _cache[12] || (_cache[12] = ($event) => config.value.blockmode = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_space, null, {
                          default: withCtx(() => [
                            createVNode(_component_n_checkbox, { value: "R2L" }, {
                              default: withCtx(() => [
                                createTextVNode(" 右左滚动 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "L2R" }, {
                              default: withCtx(() => [
                                createTextVNode(" 左右滚动 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "TOP" }, {
                              default: withCtx(() => [
                                createTextVNode(" 顶部固定 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "BOTTOM" }, {
                              default: withCtx(() => [
                                createTextVNode(" 底部固定 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "SPECIAL" }, {
                              default: withCtx(() => [
                                createTextVNode(" 特殊 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "COLOR" }, {
                              default: withCtx(() => [
                                createTextVNode(" 非白色 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "REPEAT" }, {
                              default: withCtx(() => [
                                createTextVNode(" 内容重复 ")
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
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 8, ["model"])
        ])) : createCommentVNode("", true),
        unref(isAdvancedMode) ? (openBlock(), createBlock(_component_n_divider, { key: 1 })) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_6, [
          _hoisted_7,
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
                    "onUpdate:value": _cache[13] || (_cache[13] = ($event) => config.value.scrollarea = $event),
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
                    "onUpdate:value": _cache[14] || (_cache[14] = ($event) => config.value.displayarea = $event),
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
                    "onUpdate:value": _cache[15] || (_cache[15] = ($event) => config.value.resolution[0] = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: -1,
                    step: 100,
                    placeholder: "宽"
                  }, null, 8, ["value"]),
                  createTextVNode(" X  "),
                  createVNode(_component_n_input_number, {
                    value: config.value.resolution[1],
                    "onUpdate:value": _cache[16] || (_cache[16] = ($event) => config.value.resolution[1] = $event),
                    valueModifiers: { number: true },
                    class: "input-number",
                    min: -1,
                    step: 100,
                    placeholder: "高"
                  }, null, 8, ["value"]),
                  createVNode(_component_n_checkbox, {
                    checked: config.value.resolutionResponsive,
                    "onUpdate:checked": _cache[17] || (_cache[17] = ($event) => config.value.resolutionResponsive = $event),
                    style: { "margin-left": "20px" },
                    title: "启用后在压制弹幕至视频中时，以视频的分辨率为主"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 自适应视频分辨率 ")
                    ]),
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
                      "onUpdate:value": _cache[18] || (_cache[18] = ($event) => config.value.statmode = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_space, null, {
                          default: withCtx(() => [
                            createVNode(_component_n_checkbox, { value: "TABLE" }, {
                              default: withCtx(() => [
                                createTextVNode(" 统计图 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_checkbox, { value: "HISTOGRAM" }, {
                              default: withCtx(() => [
                                createTextVNode(" 直方图 ")
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
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        createVNode(_component_n_divider),
        createBaseVNode("div", _hoisted_8, [
          _hoisted_9,
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
                    "onUpdate:checked": _cache[19] || (_cache[19] = ($event) => config.value.showmsgbox = $event)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 显示礼物框 ")
                    ]),
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
                      "onUpdate:value": _cache[20] || (_cache[20] = ($event) => config.value.msgboxsize[0] = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: 0,
                      step: 100
                    }, null, 8, ["value"]),
                    createTextVNode(" X  "),
                    createVNode(_component_n_input_number, {
                      value: config.value.msgboxsize[1],
                      "onUpdate:value": _cache[21] || (_cache[21] = ($event) => config.value.msgboxsize[1] = $event),
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
                      "onUpdate:value": _cache[22] || (_cache[22] = ($event) => config.value.msgboxpos[0] = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      step: 10
                    }, null, 8, ["value"]),
                    createTextVNode(" X  "),
                    createVNode(_component_n_input_number, {
                      value: config.value.msgboxpos[1],
                      "onUpdate:value": _cache[23] || (_cache[23] = ($event) => config.value.msgboxpos[1] = $event),
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
                      "onUpdate:value": _cache[24] || (_cache[24] = ($event) => config.value.msgboxfontsize = $event),
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
                      "onUpdate:value": _cache[25] || (_cache[25] = ($event) => config.value.msgboxduration = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: 0
                    }, {
                      suffix: withCtx(() => [
                        createTextVNode(" 秒 ")
                      ]),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_n_form_item, { label: "礼物最小价值" }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input_number, {
                      value: config.value.giftminprice,
                      "onUpdate:value": _cache[26] || (_cache[26] = ($event) => config.value.giftminprice = $event),
                      valueModifiers: { number: true },
                      class: "input-number",
                      min: 0,
                      style: { "width": "140px" }
                    }, {
                      suffix: withCtx(() => [
                        createTextVNode(" RMB ")
                      ]),
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
        createBaseVNode("div", _hoisted_10, [
          _hoisted_11,
          createVNode(_component_n_form_item, { style: { "width": "100%" } }, {
            label: withCtx(() => [
              createBaseVNode("span", _hoisted_12, [
                _hoisted_13,
                createVNode(_sfc_main$1, { tip: "\n              目前支持三种屏蔽方式，分别是弹幕内容，uid，用户名，需以英文逗号分隔<br/>\n              弹幕内容：部分匹配，包含sc内容<br/>\n              uid：全匹配，格式为<10995238>，弹幕姬用户注意，即是你开启了记录raw，出于性能原因，此过滤也是无法使用的，请使用用户名替代<br/>\n              用户名：全匹配，格式为<暮色312><br/>\n              此功能正在测试，如果出现开启后无法转换的情况请反馈" })
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n_input, {
                value: config.value.blacklist,
                "onUpdate:value": _cache[27] || (_cache[27] = ($event) => config.value.blacklist = $event),
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
const DanmuFactorySetting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-09f60ccd"]]);
export {
  DanmuFactorySetting as D
};
