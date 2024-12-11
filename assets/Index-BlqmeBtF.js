import { g as api, d as defineComponent, aj as mergeModels, al as storeToRefs, ak as useModel, r as ref, p as computed, ae as watchEffect, F as watch, c as createBlock, w as withCtx, aq as __unplugin_components_3, o as openBlock, a as createVNode, e as createBaseVNode, f as createTextVNode, b as unref, i as isRef, am as createCommentVNode, B as Button, _ as __unplugin_components_2$2, ah as createElementBlock, aB as onDeactivated, aA as onActivated, a8 as Fragment, an as renderList, ap as toDisplayString } from "./index-NC0giMhn.js";
import { u as useConfirm } from "./index-BTHtQTk-.js";
import { _ as _sfc_main$2 } from "./Tip.vue_vue_type_script_setup_true_lang-DQS4Qhgb.js";
import { i as useAppConfig, d as useUserInfoStore, e as __unplugin_components_1$1, N as NIcon, _ as __unplugin_components_2$3 } from "./index-DAcKDtwE.js";
import { u as useNotification } from "./use-notification-zXzPItCr.js";
import { _ as __unplugin_components_2 } from "./Input-CrXhrixo.js";
import { _ as __unplugin_components_1, a as __unplugin_components_7 } from "./FormItem-Cg1Wkqd_.js";
import { _ as __unplugin_components_2$1 } from "./Switch-BDPrBYDt.js";
import { _ as __unplugin_components_4 } from "./InputNumber-CTd6lysa.js";
import { _ as __unplugin_components_0 } from "./Select-BuQXYfCe.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-Dum2ZqS2.js";
import { E as EllipsisHorizontalOutline } from "./EllipsisHorizontalOutline-BF1JF27J.js";
import "./Suffix-7DVZuGw_.js";
import "./utils-C7pbjsii.js";
const infoList = async () => {
  const res = await api.get(`/recorder/list`);
  return res.data.payload;
};
const get = async (id) => {
  const res = await api.get(`/recorder/${id}`);
  return res.data.payload;
};
const add = async (data) => {
  const res = await api.post(`/recorder/add`, data);
  return res.data.payload;
};
const remove = async (id) => {
  const res = await api.delete(`/recorder/${id}`);
  return res.data.payload;
};
const update = async (id, preset) => {
  const res = await api.put(`/recorder/${id}`, preset);
  return res.data.payload;
};
const startRecord = async (id) => {
  const res = await api.post(`/recorder/${id}/start_record`, {
    id
  });
  return res.data.payload;
};
const stopRecord = async (id) => {
  const res = await api.post(`/recorder/${id}/stop_record`, {
    id
  });
  return res.data.payload;
};
const resolveChannel = async (url) => {
  const res = await api.get(`/recorder/manager/resolveChannel`, {
    params: { url }
  });
  return res.data.payload;
};
const getLiveInfo = async () => {
  const res = await api.get(`/recorder/manager/liveInfo`);
  return res.data.payload;
};
const recoder = {
  infoList,
  get,
  add,
  remove,
  update,
  stopRecord,
  startRecord,
  resolveChannel,
  getLiveInfo
};
const _hoisted_1$2 = { class: "inline-flex" };
const _hoisted_2$2 = { class: "inline-flex" };
const _hoisted_3$2 = { class: "footer" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "addModal",
  props: /* @__PURE__ */ mergeModels({
    id: {}
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["confirm"], ["update:visible"]),
  setup(__props, { emit: __emit }) {
    const notice = useNotification();
    const { appConfig } = storeToRefs(useAppConfig());
    const { userList } = storeToRefs(useUserInfoStore());
    const showModal = useModel(__props, "visible");
    const props = __props;
    const emits = __emit;
    const hasGlobalFields = [
      "quality",
      "line",
      "disableProvideCommentsWhenRecording",
      "saveGiftDanma",
      "saveSCDanma",
      "segment"
    ];
    const globalFieldsObj = ref({});
    for (const key of hasGlobalFields) {
      globalFieldsObj.value[key] = true;
    }
    const config = ref({
      providerId: "DouYu",
      channelId: "",
      segment: 60,
      quality: "highest",
      disableProvideCommentsWhenRecording: false,
      saveGiftDanma: false,
      saveSCDanma: true,
      streamPriorities: [],
      sourcePriorities: [],
      disableAutoCheck: false,
      sendToWebhook: false,
      noGlobalFollowFields: []
    });
    const qualityOptions = [
      { value: "highest", label: "最高" },
      { value: "high", label: "高" },
      { value: "medium", label: "中" },
      { value: "low", label: "低" },
      { value: "lowest", label: "最低" }
    ];
    const confirm = async () => {
      if (!config.value.channelId) {
        notice.error({
          title: "请输入正确的房间链接",
          duration: 1e3
        });
        return;
      }
      config.value.noGlobalFollowFields = Object.keys(globalFieldsObj.value).filter(
        (key) => !globalFieldsObj.value[key]
      );
      if (isEdit.value) {
        if (!props.id) return;
        await recoder.update(props.id, { id: props.id, ...config.value });
      } else {
        await recoder.add(config.value);
      }
      emits("confirm");
      showModal.value = false;
    };
    const cancel = () => {
      showModal.value = false;
    };
    const getRecordSetting = async () => {
      if (!props.id) return;
      config.value = await recoder.get(props.id);
    };
    const isEdit = computed(() => !!props.id);
    const channelIdUrl = ref("");
    const owner = ref("");
    const onChannelIdInputEnd = async () => {
      if (!channelIdUrl.value) return;
      console.log("onChannelIdInputEnd");
      const res = await recoder.resolveChannel(channelIdUrl.value);
      if (!res) {
        notice.error({
          title: "解析失败",
          duration: 1e3
        });
        return;
      }
      config.value.channelId = res.channelId;
      config.value.providerId = res.providerId;
      owner.value = res.owner;
    };
    watchEffect(async () => {
      if (showModal.value) {
        channelIdUrl.value = "";
        owner.value = "";
        config.value = {
          providerId: "DouYu",
          channelId: "",
          segment: 60,
          quality: "highest",
          disableProvideCommentsWhenRecording: true,
          saveGiftDanma: false,
          saveSCDanma: true,
          streamPriorities: [],
          sourcePriorities: [],
          disableAutoCheck: false,
          sendToWebhook: false,
          noGlobalFollowFields: [],
          uid: ""
        };
      }
      if (props.id) {
        await getRecordSetting();
      }
      globalFieldsObj.value = {
        quality: !(config.value?.noGlobalFollowFields ?? []).includes("quality"),
        line: !(config.value?.noGlobalFollowFields ?? []).includes("line"),
        disableProvideCommentsWhenRecording: !(config.value?.noGlobalFollowFields ?? []).includes(
          "disableProvideCommentsWhenRecording"
        ),
        saveGiftDanma: !(config.value?.noGlobalFollowFields ?? []).includes("saveGiftDanma"),
        saveSCDanma: !(config.value?.noGlobalFollowFields ?? []).includes("saveSCDanma"),
        segment: !(config.value?.noGlobalFollowFields ?? []).includes("segment"),
        uid: !(config.value?.noGlobalFollowFields ?? []).includes("uid")
      };
    });
    watch(
      () => globalFieldsObj.value,
      (val) => {
        if (val.quality) {
          config.value.quality = appConfig.value.recorder.quality;
        }
        if (val.disableProvideCommentsWhenRecording) {
          config.value.disableProvideCommentsWhenRecording = appConfig.value.recorder.disableProvideCommentsWhenRecording;
        }
        if (val.saveGiftDanma) {
          config.value.saveGiftDanma = appConfig.value.recorder.saveGiftDanma;
        }
        if (val.saveSCDanma) {
          config.value.saveSCDanma = appConfig.value.recorder.saveSCDanma;
        }
        if (val.segment) {
          config.value.segment = appConfig.value.recorder.segment;
        }
        if (val.uid) {
          config.value.uid = appConfig.value.recorder.uid;
        }
      },
      {
        deep: true
      }
    );
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_2;
      const _component_n_form_item = __unplugin_components_1;
      const _component_n_switch = __unplugin_components_2$1;
      const _component_Tip = _sfc_main$2;
      const _component_n_input_number = __unplugin_components_4;
      const _component_n_checkbox = __unplugin_components_1$1;
      const _component_n_select = __unplugin_components_0;
      const _component_n_form = __unplugin_components_7;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_2$2;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[19] || (_cache[19] = ($event) => showModal.value = $event),
        "show-icon": false,
        closable: false
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "700px" },
            bordered: false,
            size: "huge",
            role: "dialog",
            "aria-modal": "true",
            class: "card"
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_3$2, [
                createVNode(_component_n_button, {
                  class: "btn",
                  onClick: cancel
                }, {
                  default: withCtx(() => _cache[42] || (_cache[42] = [
                    createTextVNode(" 取消 ")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "primary",
                  class: "btn",
                  onClick: confirm
                }, {
                  default: withCtx(() => _cache[43] || (_cache[43] = [
                    createTextVNode(" 确认 ")
                  ])),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n_form, {
                "label-placement": "left",
                "label-width": 140
              }, {
                default: withCtx(() => [
                  !unref(isEdit) ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                    label: withCtx(() => _cache[20] || (_cache[20] = [
                      createBaseVNode("span", { class: "inline-flex" }, " 直播间链接 ", -1)
                    ])),
                    default: withCtx(() => [
                      createVNode(_component_n_input, {
                        value: unref(channelIdUrl),
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(channelIdUrl) ? channelIdUrl.value = $event : null),
                        valueModifiers: { trim: true },
                        placeholder: "输入后自动解析",
                        onBlur: onChannelIdInputEnd
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  !unref(isEdit) ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
                    label: withCtx(() => _cache[21] || (_cache[21] = [
                      createBaseVNode("span", { class: "inline-flex" }, " 主播名称 ", -1)
                    ])),
                    default: withCtx(() => [
                      createVNode(_component_n_input, {
                        value: unref(owner),
                        "onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(owner) ? owner.value = $event : null),
                        valueModifiers: { trim: true },
                        disabled: true,
                        placeholder: "输入房间链接后自动解析"
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_n_form_item, { disabled: true }, {
                    label: withCtx(() => _cache[22] || (_cache[22] = [
                      createBaseVNode("span", { class: "inline-flex" }, " 房间号 ", -1)
                    ])),
                    default: withCtx(() => [
                      createVNode(_component_n_input, {
                        value: unref(config).channelId,
                        "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(config).channelId = $event),
                        valueModifiers: { trim: true },
                        disabled: true,
                        placeholder: "输入房间链接后自动解析"
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_n_form_item, { disabled: unref(isEdit) }, {
                    label: withCtx(() => _cache[23] || (_cache[23] = [
                      createBaseVNode("span", { class: "inline-flex" }, " 备注 ", -1)
                    ])),
                    default: withCtx(() => [
                      createVNode(_component_n_input, {
                        value: unref(config).remarks,
                        "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(config).remarks = $event),
                        placeholder: "请输入备注（可选）"
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(_component_n_form_item, null, {
                    label: withCtx(() => _cache[24] || (_cache[24] = [
                      createBaseVNode("span", { class: "inline-flex" }, " 禁用自动录制 ", -1)
                    ])),
                    default: withCtx(() => [
                      createVNode(_component_n_switch, {
                        value: unref(config).disableAutoCheck,
                        "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(config).disableAutoCheck = $event)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_n_form_item, null, {
                    label: withCtx(() => [
                      createBaseVNode("span", _hoisted_1$2, [
                        _cache[25] || (_cache[25] = createTextVNode(" 发送至webhook ")),
                        createVNode(_component_Tip, { tip: "用于弹幕压制以及上传功能" })
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n_switch, {
                        value: unref(config).sendToWebhook,
                        "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(config).sendToWebhook = $event)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_n_form_item, null, {
                    label: withCtx(() => [
                      createBaseVNode("span", _hoisted_2$2, [
                        _cache[26] || (_cache[26] = createTextVNode(" 分段录制 ")),
                        createVNode(_component_Tip, { tip: "0为不分段" })
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n_input_number, {
                        value: unref(config).segment,
                        "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(config).segment = $event),
                        min: "0",
                        step: "10",
                        style: { "width": "100%" },
                        disabled: unref(globalFieldsObj).segment
                      }, {
                        suffix: withCtx(() => _cache[27] || (_cache[27] = [
                          createTextVNode("分钟")
                        ])),
                        _: 1
                      }, 8, ["value", "disabled"]),
                      createVNode(_component_n_checkbox, {
                        checked: unref(globalFieldsObj).segment,
                        "onUpdate:checked": _cache[7] || (_cache[7] = ($event) => unref(globalFieldsObj).segment = $event),
                        class: "global-checkbox"
                      }, {
                        default: withCtx(() => _cache[28] || (_cache[28] = [
                          createTextVNode("全局")
                        ])),
                        _: 1
                      }, 8, ["checked"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_n_form_item, null, {
                    label: withCtx(() => _cache[29] || (_cache[29] = [
                      createBaseVNode("span", { class: "inline-flex" }, " 画质 ", -1)
                    ])),
                    default: withCtx(() => [
                      createVNode(_component_n_select, {
                        value: unref(config).quality,
                        "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(config).quality = $event),
                        options: qualityOptions,
                        disabled: unref(globalFieldsObj).quality
                      }, null, 8, ["value", "disabled"]),
                      createVNode(_component_n_checkbox, {
                        checked: unref(globalFieldsObj).quality,
                        "onUpdate:checked": _cache[9] || (_cache[9] = ($event) => unref(globalFieldsObj).quality = $event),
                        class: "global-checkbox"
                      }, {
                        default: withCtx(() => _cache[30] || (_cache[30] = [
                          createTextVNode("全局")
                        ])),
                        _: 1
                      }, 8, ["checked"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_n_form_item, null, {
                    label: withCtx(() => _cache[31] || (_cache[31] = [
                      createBaseVNode("span", { class: "inline-flex" }, " 线路 ", -1)
                    ])),
                    default: withCtx(() => [
                      _cache[33] || (_cache[33] = createTextVNode(" 待实现 ")),
                      createVNode(_component_n_checkbox, {
                        checked: unref(globalFieldsObj).line,
                        "onUpdate:checked": _cache[10] || (_cache[10] = ($event) => unref(globalFieldsObj).line = $event),
                        class: "global-checkbox"
                      }, {
                        default: withCtx(() => _cache[32] || (_cache[32] = [
                          createTextVNode("全局")
                        ])),
                        _: 1
                      }, 8, ["checked"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_n_form_item, null, {
                    label: withCtx(() => [
                      createVNode(_component_Tip, {
                        text: "录制账号",
                        tip: "目前只支持B站账号"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n_select, {
                        value: unref(config).uid,
                        "onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(config).uid = $event),
                        options: unref(userList),
                        "label-field": "name",
                        "value-field": "uid",
                        clearable: "",
                        disabled: unref(globalFieldsObj).uid
                      }, null, 8, ["value", "options", "disabled"]),
                      createVNode(_component_n_checkbox, {
                        checked: unref(globalFieldsObj).uid,
                        "onUpdate:checked": _cache[12] || (_cache[12] = ($event) => unref(globalFieldsObj).uid = $event),
                        class: "global-checkbox"
                      }, {
                        default: withCtx(() => _cache[34] || (_cache[34] = [
                          createTextVNode("全局")
                        ])),
                        _: 1
                      }, 8, ["checked"])
                    ]),
                    _: 1
                  }),
                  _cache[41] || (_cache[41] = createBaseVNode("h2", null, "弹幕录制", -1)),
                  createVNode(_component_n_form_item, null, {
                    label: withCtx(() => _cache[35] || (_cache[35] = [
                      createBaseVNode("span", { class: "inline-flex" }, " 弹幕录制 ", -1)
                    ])),
                    default: withCtx(() => [
                      createVNode(_component_n_switch, {
                        value: unref(config).disableProvideCommentsWhenRecording,
                        "onUpdate:value": _cache[13] || (_cache[13] = ($event) => unref(config).disableProvideCommentsWhenRecording = $event),
                        disabled: unref(globalFieldsObj).disableProvideCommentsWhenRecording,
                        "checked-value": false,
                        "unchecked-value": true
                      }, null, 8, ["value", "disabled"]),
                      createVNode(_component_n_checkbox, {
                        checked: unref(globalFieldsObj).disableProvideCommentsWhenRecording,
                        "onUpdate:checked": _cache[14] || (_cache[14] = ($event) => unref(globalFieldsObj).disableProvideCommentsWhenRecording = $event),
                        class: "global-checkbox"
                      }, {
                        default: withCtx(() => _cache[36] || (_cache[36] = [
                          createTextVNode("全局")
                        ])),
                        _: 1
                      }, 8, ["checked"])
                    ]),
                    _: 1
                  }),
                  !unref(config).disableProvideCommentsWhenRecording ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
                    label: withCtx(() => _cache[37] || (_cache[37] = [
                      createBaseVNode("span", { class: "inline-flex" }, " 保存礼物 ", -1)
                    ])),
                    default: withCtx(() => [
                      createVNode(_component_n_switch, {
                        value: unref(config).saveGiftDanma,
                        "onUpdate:value": _cache[15] || (_cache[15] = ($event) => unref(config).saveGiftDanma = $event),
                        disabled: unref(globalFieldsObj).saveGiftDanma
                      }, null, 8, ["value", "disabled"]),
                      createVNode(_component_n_checkbox, {
                        checked: unref(globalFieldsObj).saveGiftDanma,
                        "onUpdate:checked": _cache[16] || (_cache[16] = ($event) => unref(globalFieldsObj).saveGiftDanma = $event),
                        class: "global-checkbox"
                      }, {
                        default: withCtx(() => _cache[38] || (_cache[38] = [
                          createTextVNode("全局")
                        ])),
                        _: 1
                      }, 8, ["checked"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  !unref(config).disableProvideCommentsWhenRecording ? (openBlock(), createBlock(_component_n_form_item, { key: 3 }, {
                    label: withCtx(() => _cache[39] || (_cache[39] = [
                      createBaseVNode("span", { class: "inline-flex" }, " 保存高能弹幕 ", -1)
                    ])),
                    default: withCtx(() => [
                      createVNode(_component_n_switch, {
                        value: unref(config).saveSCDanma,
                        "onUpdate:value": _cache[17] || (_cache[17] = ($event) => unref(config).saveSCDanma = $event),
                        disabled: unref(globalFieldsObj).saveSCDanma
                      }, null, 8, ["value", "disabled"]),
                      createVNode(_component_n_checkbox, {
                        checked: unref(globalFieldsObj).saveSCDanma,
                        "onUpdate:checked": _cache[18] || (_cache[18] = ($event) => unref(globalFieldsObj).saveSCDanma = $event),
                        class: "global-checkbox"
                      }, {
                        default: withCtx(() => _cache[40] || (_cache[40] = [
                          createTextVNode("全局")
                        ])),
                        _: 1
                      }, 8, ["checked"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const addModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2a2c8c5a"]]);
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    fill: "none"
  },
  [
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M5.99 4.929a.75.75 0 0 1 0 1.06a8.5 8.5 0 0 0 0 12.021a.75.75 0 0 1-1.061 1.06c-3.905-3.905-3.905-10.236 0-14.141a.75.75 0 0 1 1.06 0zm13.081 0c3.905 3.905 3.905 10.236 0 14.142a.75.75 0 0 1-1.06-1.06a8.5 8.5 0 0 0 0-12.022a.75.75 0 1 1 1.06-1.06zM8.818 7.757a.75.75 0 0 1 0 1.06a4.5 4.5 0 0 0 0 6.365a.75.75 0 0 1-1.06 1.06a6 6 0 0 1 0-8.485a.75.75 0 0 1 1.06 0zm7.425 0a6 6 0 0 1 0 8.485a.75.75 0 1 1-1.061-1.06a4.5 4.5 0 0 0 0-6.364a.75.75 0 0 1 1.06-1.06zM12 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3z",
      fill: "currentColor"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_3$1 = [_hoisted_2$1];
const Live24Regular = defineComponent({
  name: "Live24Regular",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
  }
});
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { style: { "display": "flex", "align-items": "center", "gap": "20px", "margin-bottom": "20px" } };
const _hoisted_3 = { class: "recorder-container" };
const _hoisted_4 = { class: "cover-container" };
const _hoisted_5 = ["src"];
const _hoisted_6 = {
  key: 1,
  class: "room-title"
};
const _hoisted_7 = {
  key: 2,
  class: "recording-container"
};
const _hoisted_8 = { class: "source" };
const _hoisted_9 = { class: "line" };
const _hoisted_10 = { class: "content" };
const _hoisted_11 = ["src"];
const _hoisted_12 = { style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between" } };
const _hoisted_13 = { style: { "display": "flex", "gap": "5px", "align-items": "center" } };
const _hoisted_14 = ["title"];
const _hoisted_15 = { class: "channel-id" };
const _hoisted_16 = ["href"];
const _hoisted_17 = {
  style: { "margin-top": "10px" },
  class: "section-container"
};
const _hoisted_18 = ["onClick"];
const _hoisted_19 = ["onClick"];
const _hoisted_20 = ["onClick"];
const _hoisted_21 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  setup(__props) {
    const recorderList = ref([]);
    const liveInfos = ref([]);
    const list = computed(() => {
      return recorderList.value.map((item) => {
        const liveInfo = liveInfos.value.find((liveInfo2) => liveInfo2.channelId === item.channelId);
        return {
          ...item,
          cover: liveInfo?.cover,
          owner: liveInfo?.owner,
          avatar: liveInfo?.avatar,
          roomTitle: liveInfo?.title,
          living: liveInfo?.living
        };
      });
    });
    const getList = async () => {
      recorderList.value = await recoder.infoList();
    };
    const addModalVisible = ref(false);
    const add2 = async () => {
      editId.value = "";
      addModalVisible.value = true;
    };
    const confirm = useConfirm();
    const remove2 = async (id) => {
      const [status] = await confirm.warning({
        content: "是否确认删除录制？"
      });
      if (!status) return;
      await recoder.remove(id);
      getList();
    };
    const startRecord2 = async (id) => {
      await recoder.startRecord(id);
      getList();
    };
    const stopRecord2 = async (id) => {
      await recoder.stopRecord(id);
      getList();
    };
    const editId = ref("");
    const edit = async (id) => {
      editId.value = id;
      addModalVisible.value = true;
    };
    const getLiveInfo2 = async () => {
      if (recorderList.value.length === 0) return;
      liveInfos.value = await recoder.getLiveInfo();
    };
    const init = async () => {
      await getList();
      await getLiveInfo2();
    };
    init();
    let intervalId = null;
    function createInterval() {
      const interval = window.isWeb ? 2e3 : 1e3;
      intervalId = setInterval(() => {
        getList();
      }, interval);
    }
    function cleanInterval() {
      intervalId && clearInterval(intervalId);
      intervalId = null;
    }
    onDeactivated(() => {
      cleanInterval();
    });
    onActivated(() => {
      createInterval();
    });
    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        cleanInterval();
      } else {
        createInterval();
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_icon = NIcon;
      const _component_n_popover = __unplugin_components_2$3;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_n_button, {
            type: "primary",
            onClick: add2
          }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("添加")
            ])),
            _: 1
          }),
          _cache[2] || (_cache[2] = createBaseVNode("div", null, "支持斗鱼、虎牙平台、B站，这并非是经过严格检测的录播工具，请谨慎在生产环境使用", -1))
        ]),
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (item, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "recorder"
            }, [
              createBaseVNode("div", _hoisted_4, [
                item.cover ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  class: "cover",
                  src: item.cover,
                  referrerpolicy: "no-referrer"
                }, null, 8, _hoisted_5)) : createCommentVNode("", true),
                item.roomTitle ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(item.roomTitle), 1)) : createCommentVNode("", true),
                item.state === "recording" ? (openBlock(), createElementBlock("div", _hoisted_7, [
                  _cache[3] || (_cache[3] = createBaseVNode("div", { class: "recording" }, null, -1)),
                  createBaseVNode("span", _hoisted_8, toDisplayString(item.usedSource), 1),
                  createBaseVNode("span", _hoisted_9, toDisplayString(item.usedStream), 1)
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("img", {
                  class: "avatar",
                  src: item.avatar,
                  referrerpolicy: "no-referrer"
                }, null, 8, _hoisted_11),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("div", {
                      class: "owner",
                      title: item.remarks
                    }, toDisplayString(item.owner), 9, _hoisted_14),
                    item.living ? (openBlock(), createBlock(_component_n_icon, {
                      key: 0,
                      size: "20",
                      title: "直播中"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Live24Regular))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    _cache[4] || (_cache[4] = createTextVNode(" 房间号：")),
                    createBaseVNode("a", {
                      class: "link",
                      target: "_blank",
                      href: item.channelURL
                    }, toDisplayString(item.channelId), 9, _hoisted_16)
                  ])
                ])
              ]),
              createVNode(_component_n_popover, {
                placement: "right-start",
                trigger: "hover"
              }, {
                trigger: withCtx(() => [
                  createVNode(_component_n_icon, {
                    size: "25",
                    class: "pointer menu"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(EllipsisHorizontalOutline))
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("div", {
                      class: "section",
                      onClick: ($event) => startRecord2(item.id)
                    }, "开始录制", 8, _hoisted_18),
                    createBaseVNode("div", {
                      class: "section",
                      onClick: ($event) => stopRecord2(item.id)
                    }, "停止录制", 8, _hoisted_19),
                    createBaseVNode("div", {
                      class: "section",
                      onClick: ($event) => edit(item.id)
                    }, "直播间设置", 8, _hoisted_20),
                    createBaseVNode("div", {
                      class: "section",
                      onClick: getLiveInfo2
                    }, "刷新直播间信息"),
                    createBaseVNode("div", {
                      class: "section",
                      style: { "color": "#e88080" },
                      onClick: ($event) => remove2(item.id)
                    }, "删除房间", 8, _hoisted_21)
                  ])
                ]),
                _: 2
              }, 1024)
            ]);
          }), 128))
        ]),
        createVNode(addModal, {
          id: unref(editId),
          visible: unref(addModalVisible),
          "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => isRef(addModalVisible) ? addModalVisible.value = $event : null),
          onConfirm: init
        }, null, 8, ["id", "visible"])
      ]);
    };
  }
});
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-55b9af33"]]);
export {
  Index as default
};
