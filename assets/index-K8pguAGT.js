import { k as api, d as defineComponent, c as createElementBlock, e as createBaseVNode, o as openBlock, al as mergeModels, an as storeToRefs, x as computed, am as useModel, g as createBlock, w as withCtx, h as createCommentVNode, a as createVNode, j as createTextVNode, f as unref, t as toDisplayString, F as Fragment, ao as renderList, aB as withKeys, B as Button, ar as __unplugin_components_3$1, _ as __unplugin_components_3$2, ap as normalizeClass, aF as renderSlot, r as ref, i as isRef } from "./index-CB8xvhFr.js";
import { e as sanitizeFileName } from "./index-guw4y6OO.js";
import { d as useAppConfig, t as task } from "./index-FWk7a7hG.js";
import { s as showDirectoryDialog } from "./showDirectoryDialog-CbG0Fkj3.js";
import { F as FolderOpenOutline } from "./FolderOpenOutline-vqwY7EUo.js";
import { b as toReactive } from "./index-CMOU2boc.js";
import { u as useNotification } from "./use-notification-Bzrm1lu9.js";
import { _ as __unplugin_components_1, a as __unplugin_components_2 } from "./Checkbox-Buw5q29r.js";
import { _ as __unplugin_components_2$1 } from "./Input-C3jgSm1V.js";
import { N as NIcon } from "./Icon-D1o4HjX4.js";
import { _ as __unplugin_components_5, a as __unplugin_components_3 } from "./RadioGroup-CJq397k5.js";
import { _ as __unplugin_components_2$2 } from "./Space-Dcg2rQj1.js";
import { _ as __unplugin_components_0 } from "./Select-CYnthXY-.js";
import { a as __unplugin_components_1$1, b as __unplugin_components_5$1, _ as __unplugin_components_2$3 } from "./Switch-n0tH4Ke1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { u as useNotice } from "./useNotice-D8AmCNaE.js";
import { u as useConfirm } from "./index--O4HUYks.js";
import { A as AccessTime24Regular, _ as __unplugin_components_2$4 } from "./AccessTime24Regular-BJsnM9tn.js";
import { H as HelpCircleOutline } from "./HelpCircleOutline-DC8ljYG3.js";
import { C as CloseOutline } from "./CloseOutline-Drabg5To.js";
import { _ as __unplugin_components_5$2 } from "./Spin-BBY6Rzmi.js";
import "./common-1CgNZfMf.js";
import "./_getTag-22mR82vJ.js";
import "./Popover-D4v8saSe.js";
import "./create-DfXrl36C.js";
const subParse = async (url) => {
  const res = await api.post(`/video/sub/parse`, { url });
  return res.data;
};
const addSub = async (data) => {
  const res = await api.post(`/video/sub/add`, data);
  return res.data;
};
const removeSub = async (id) => {
  const res = await api.post(`/video/sub/remove`, { id });
  return res.data;
};
const updateSub = async (data) => {
  const res = await api.post(`/video/sub/update`, data);
  return res.data;
};
const listSub = async () => {
  const res = await api.get(`/video/sub/list`);
  return res.data;
};
const checkSub = async (id) => {
  const res = await api.post(`/video/sub/check`, { id });
  return res.data;
};
const videoApi = {
  subParse,
  addSub,
  removeSub,
  updateSub,
  listSub,
  checkSub
};
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const EditOutlined = defineComponent({
  name: "EditOutlined",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$5,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z",
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
const _hoisted_1$4 = { class: "container" };
const _hoisted_2$3 = { style: { "margin-bottom": "10px" } };
const _hoisted_3$3 = { class: "file-container" };
const _hoisted_4$1 = { key: 0 };
const _hoisted_5$1 = { style: { "margin-top": "10px", "display": "flex", "align-items": "center" } };
const _hoisted_6 = {
  key: 0,
  style: { "margin-top": "10px", "display": "flex", "align-items": "center" }
};
const _hoisted_7 = {
  key: 1,
  style: { "margin-top": "10px", "display": "flex", "align-items": "center" }
};
const _hoisted_8 = {
  key: 2,
  style: { "margin-top": "10px", "display": "flex", "align-items": "center" }
};
const _hoisted_9 = {
  key: 3,
  style: { "margin-top": "10px", "display": "flex", "align-items": "center" }
};
const _hoisted_10 = { style: { "margin-top": "10px" } };
const _hoisted_11 = { class: "path" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DownloadModal",
  props: /* @__PURE__ */ mergeModels({
    detail: {},
    cOptions: {}
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {},
    "selectIds": { required: true, default: [] },
    "selectIdsModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["confirm"], ["update:visible", "update:selectIds"]),
  setup(__props, { emit: __emit }) {
    const danmuOptions = [
      { label: "无", value: "none" },
      { label: "xml", value: "xml" }
    ];
    const { appConfig } = storeToRefs(useAppConfig());
    const options = toReactive(
      computed({
        get: () => appConfig.value.tool.download,
        set: (value) => {
          appConfig.value.tool.download = value;
        }
      })
    );
    const showModal = useModel(__props, "visible");
    const selectIds = useModel(__props, "selectIds");
    const props = __props;
    const emits = __emit;
    const notice = useNotification();
    const download = () => {
      if (props.cOptions.hasDanmuOnlyOptions && options.onlyDanmu && options.danmu === "none") {
        notice.error({
          content: "只下载弹幕时，请选择弹幕格式",
          duration: 3e3
        });
        return;
      }
      emits("confirm", {
        ids: selectIds.value,
        savePath: options.savePath,
        danmu: options.danmu,
        onlyAudio: options.onlyAudio,
        resoltion: options.douyuResolution,
        override: options.override,
        onlyDanmu: options.onlyDanmu
      });
    };
    const editPart = (file) => {
      file.name = sanitizeFileName(file.name.trim());
      if (file.name === "") {
        file.name = "未命名";
      }
      file.isEditing = !file.isEditing;
    };
    const selectFolder = async () => {
      let dir;
      if (window.isWeb) {
        dir = (await showDirectoryDialog({
          type: "directory"
        }))?.[0];
      } else {
        dir = await window.api.openDirectory({
          defaultPath: options.savePath
        });
      }
      if (!dir) return;
      options.savePath = dir;
    };
    const allChecked = computed({
      get: () => selectIds.value.length === props.detail.parts.length,
      set: (value) => {
        selectIds.value = value ? props.detail.parts.map((p) => p.partId) : [];
      }
    });
    const handleCheckedChange = (value) => {
      allChecked.value = value;
    };
    return (_ctx, _cache) => {
      const _component_n_checkbox = __unplugin_components_1;
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_icon = NIcon;
      const _component_n_checkbox_group = __unplugin_components_2;
      const _component_n_radio = __unplugin_components_3;
      const _component_n_space = __unplugin_components_2$2;
      const _component_n_radio_group = __unplugin_components_5;
      const _component_n_select = __unplugin_components_0;
      const _component_n_switch = __unplugin_components_1$1;
      const _component_n_button = Button;
      const _component_n_modal = __unplugin_components_3$1;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[7] || (_cache[7] = ($event) => showModal.value = $event),
        "mask-closable": false,
        "auto-focus": "",
        preset: "dialog",
        "show-icon": false,
        title: props.detail.title
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$4, [
            createBaseVNode("div", _hoisted_2$3, [
              createVNode(_component_n_checkbox, {
                checked: unref(allChecked),
                "onUpdate:checked": handleCheckedChange
              }, null, 8, ["checked"]),
              createTextVNode(" 选集：(" + toDisplayString(selectIds.value.length) + "/" + toDisplayString(props.detail.parts.length) + ") ", 1)
            ]),
            createBaseVNode("div", _hoisted_3$3, [
              createVNode(_component_n_checkbox_group, {
                value: selectIds.value,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => selectIds.value = $event)
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(props.detail.parts, (file) => {
                    return openBlock(), createElementBlock("div", {
                      key: file.partId,
                      class: "file"
                    }, [
                      createVNode(_component_n_checkbox, {
                        value: file.partId,
                        style: { "margin-right": "10px" }
                      }, null, 8, ["value"]),
                      !file.isEditing ? (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString(file.name) + ".mp4", 1)) : (openBlock(), createBlock(_component_n_input, {
                        key: 1,
                        value: file.name,
                        "onUpdate:value": ($event) => file.name = $event,
                        placeholder: "请输入文件名",
                        onKeyup: withKeys(($event) => editPart(file), ["enter"])
                      }, {
                        suffix: withCtx(() => _cache[8] || (_cache[8] = [
                          createTextVNode(" .mp4 ")
                        ])),
                        _: 2
                      }, 1032, ["value", "onUpdate:value", "onKeyup"])),
                      createVNode(_component_n_icon, {
                        size: 13,
                        class: "btn pointer",
                        title: "编辑文件名",
                        style: { "margin-left": "5px" },
                        onClick: ($event) => editPart(file)
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(EditOutlined))
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            createBaseVNode("div", _hoisted_5$1, [
              _cache[11] || (_cache[11] = createBaseVNode("span", { style: { "flex": "none" } }, "文件冲突：", -1)),
              createVNode(_component_n_radio_group, {
                value: unref(options).override,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(options).override = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, null, {
                    default: withCtx(() => [
                      createVNode(_component_n_radio, { value: true }, {
                        default: withCtx(() => _cache[9] || (_cache[9] = [
                          createTextVNode(" 覆盖文件 ")
                        ])),
                        _: 1
                      }),
                      createVNode(_component_n_radio, { value: false }, {
                        default: withCtx(() => _cache[10] || (_cache[10] = [
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
            ]),
            props.detail.resolutions.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
              _cache[12] || (_cache[12] = createBaseVNode("span", {
                style: { "flex": "none" },
                title: "清晰度取第一P视频，如果后续视频不存在相应分清晰度，取最好清晰度"
              }, "清晰度：", -1)),
              createVNode(_component_n_select, {
                value: unref(options).douyuResolution,
                "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).douyuResolution = $event),
                options: props.detail.resolutions,
                style: { "width": "150px" }
              }, null, 8, ["value", "options"])
            ])) : createCommentVNode("", true),
            _ctx.cOptions.hasDanmuOptions ? (openBlock(), createElementBlock("div", _hoisted_7, [
              _cache[13] || (_cache[13] = createBaseVNode("span", { style: { "flex": "none" } }, "弹幕：", -1)),
              createVNode(_component_n_radio_group, {
                value: unref(options).danmu,
                "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(options).danmu = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, null, {
                    default: withCtx(() => [
                      (openBlock(), createElementBlock(Fragment, null, renderList(danmuOptions, (option) => {
                        return createVNode(_component_n_radio, {
                          key: option.value,
                          value: option.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(option.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ])) : createCommentVNode("", true),
            _ctx.cOptions.hasAudioOnlyOptions ? (openBlock(), createElementBlock("div", _hoisted_8, [
              _cache[14] || (_cache[14] = createBaseVNode("span", { style: { "flex": "none" } }, "只下载音频：", -1)),
              createVNode(_component_n_switch, {
                value: unref(options).onlyAudio,
                "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(options).onlyAudio = $event)
              }, null, 8, ["value"])
            ])) : createCommentVNode("", true),
            _ctx.cOptions.hasDanmuOnlyOptions ? (openBlock(), createElementBlock("div", _hoisted_9, [
              _cache[15] || (_cache[15] = createBaseVNode("span", { style: { "flex": "none" } }, "只下载弹幕：", -1)),
              createVNode(_component_n_switch, {
                value: unref(options).onlyDanmu,
                "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(options).onlyDanmu = $event)
              }, null, 8, ["value"])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_10, [
              _cache[16] || (_cache[16] = createBaseVNode("div", { style: { "font-size": "12px" } }, "下载到：", -1)),
              createBaseVNode("div", _hoisted_11, [
                createVNode(_component_n_input, {
                  value: unref(options).savePath,
                  "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(options).savePath = $event),
                  placeholder: "请输入下载目录"
                }, null, 8, ["value"]),
                createVNode(_component_n_icon, {
                  style: { "margin-left": "10px" },
                  size: "26",
                  class: "pointer",
                  onClick: selectFolder
                }, {
                  default: withCtx(() => [
                    createVNode(unref(FolderOpenOutline))
                  ]),
                  _: 1
                })
              ])
            ]),
            createVNode(_component_n_button, {
              disabled: selectIds.value.length === 0 || !unref(options).savePath,
              type: "primary",
              class: "download-btn",
              onClick: download
            }, {
              default: withCtx(() => _cache[17] || (_cache[17] = [
                createTextVNode(" 下载 ")
              ])),
              _: 1
            }, 8, ["disabled"])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"]);
    };
  }
});
const DownloadConfirm = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f4fcfafb"]]);
const _hoisted_1$3 = { class: "footer" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SubscribeModal",
  props: /* @__PURE__ */ mergeModels({
    data: {}
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["add", "update"], ["update:visible"]),
  setup(__props, { emit: __emit }) {
    const showModal = useModel(__props, "visible");
    const props = __props;
    const emits = __emit;
    const notice = useNotice();
    const type = computed(() => {
      return props.data.id ? "update" : "add";
    });
    const confirm = async () => {
      if (type.value === "add") {
        await videoApi.addSub(props.data);
        notice.success("订阅成功");
        emits("add");
      } else {
        await videoApi.updateSub(props.data);
        notice.success("更新成功");
        emits("update");
      }
      showModal.value = false;
    };
    const qualityOptions = computed(() => {
      if (props.data.platform === "douyu") {
        return [
          {
            label: "最高",
            value: "highest"
          },
          {
            label: "2k60",
            value: "1440p60a"
          },
          {
            label: "1080P60",
            value: "1080p60"
          },
          {
            label: "高清",
            value: "high"
          },
          {
            label: "标清",
            value: "normal"
          }
        ];
      } else if (props.data.platform === "huya") {
        return [
          {
            label: "最高",
            value: "highest"
          },
          { value: "4000", label: "1080P" },
          { value: "1300", label: "720P" },
          { value: "350", label: "360P" }
        ];
      } else {
        return [];
      }
    });
    return (_ctx, _cache) => {
      const _component_n_switch = __unplugin_components_1$1;
      const _component_n_form_item = __unplugin_components_2$3;
      const _component_n_select = __unplugin_components_0;
      const _component_n_form = __unplugin_components_5$1;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_3$2;
      const _component_n_modal = __unplugin_components_3$1;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[5] || (_cache[5] = ($event) => showModal.value = $event),
        "mask-closable": false,
        "auto-focus": "",
        "show-icon": false
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "500px" },
            bordered: false,
            size: "huge",
            role: "dialog",
            "aria-modal": "true",
            class: "card"
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_1$3, [
                createVNode(_component_n_button, {
                  type: "default",
                  class: "btn",
                  onClick: _cache[4] || (_cache[4] = ($event) => showModal.value = false)
                }, {
                  default: withCtx(() => _cache[10] || (_cache[10] = [
                    createTextVNode("取消")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "primary",
                  class: "btn",
                  onClick: confirm
                }, {
                  default: withCtx(() => _cache[11] || (_cache[11] = [
                    createTextVNode("确认")
                  ])),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n_form, {
                "label-placement": "left",
                "label-width": 150
              }, {
                default: withCtx(() => [
                  createBaseVNode("h3", null, toDisplayString(_ctx.data.name), 1),
                  createVNode(_component_n_form_item, null, {
                    label: withCtx(() => _cache[6] || (_cache[6] = [
                      createBaseVNode("span", { class: "inline-flex" }, "自动监听", -1)
                    ])),
                    default: withCtx(() => [
                      createVNode(_component_n_switch, {
                        value: _ctx.data.enable,
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.data.enable = $event)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_n_form_item, null, {
                    label: withCtx(() => _cache[7] || (_cache[7] = [
                      createBaseVNode("span", { class: "inline-flex" }, "清晰度", -1)
                    ])),
                    default: withCtx(() => [
                      createVNode(_component_n_select, {
                        value: _ctx.data.options.quality,
                        "onUpdate:value": _cache[1] || (_cache[1] = ($event) => _ctx.data.options.quality = $event),
                        options: unref(qualityOptions),
                        style: { "width": "150px" }
                      }, null, 8, ["value", "options"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_n_form_item, null, {
                    label: withCtx(() => _cache[8] || (_cache[8] = [
                      createBaseVNode("span", { class: "inline-flex" }, "发送至webhook", -1)
                    ])),
                    default: withCtx(() => [
                      createVNode(_component_n_switch, {
                        value: _ctx.data.options.sendWebhook,
                        "onUpdate:value": _cache[2] || (_cache[2] = ($event) => _ctx.data.options.sendWebhook = $event)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  _ctx.data.platform === "douyu" ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                    label: withCtx(() => _cache[9] || (_cache[9] = [
                      createBaseVNode("span", { class: "inline-flex" }, "弹幕", -1)
                    ])),
                    default: withCtx(() => [
                      createVNode(_component_n_switch, {
                        value: _ctx.data.options.danma,
                        "onUpdate:value": _cache[3] || (_cache[3] = ($event) => _ctx.data.options.danma = $event)
                      }, null, 8, ["value"])
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
const SubscribeModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-67d88b5a"]]);
const _hoisted_1$2 = ["disabled"];
const _hoisted_2$2 = {
  key: 0,
  class: "loading-spinner"
};
const _hoisted_3$2 = { class: "button-content" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "textButton",
  props: {
    type: {
      type: String,
      default: "default",
      // 可选值：default, primary, danger
      validator: (value) => ["default", "primary", "danger"].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["text-button", [__props.type ? `text-button--${__props.type}` : "", { "text-button--loading": __props.loading }]]),
        disabled: __props.disabled || __props.loading,
        onClick: handleClick
      }, [
        __props.loading ? (openBlock(), createElementBlock("span", _hoisted_2$2)) : createCommentVNode("", true),
        createBaseVNode("span", _hoisted_3$2, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ], 10, _hoisted_1$2);
    };
  }
});
const TextButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-82f80141"]]);
const _hoisted_1$1 = { class: "list" };
const _hoisted_2$1 = { class: "card-content" };
const _hoisted_3$1 = { class: "name" };
const _hoisted_4 = ["href"];
const _hoisted_5 = { class: "card-action" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SubVideoList",
  props: {
    list: {}
  },
  emits: ["remove", "edit"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const notice = useNotice();
    const confirm = useConfirm();
    const loadingIds = ref(/* @__PURE__ */ new Set());
    const removeSub2 = async (id) => {
      const [status] = await confirm.warning({
        content: "是否确认删除"
      });
      if (!status) return;
      await videoApi.removeSub(id);
      notice.success("取消订阅成功");
      emits("remove", id);
    };
    const editSub = (item) => {
      emits("edit", item);
    };
    const checkSub2 = async (id) => {
      try {
        loadingIds.value.add(id);
        await videoApi.checkSub(id);
        notice.success("检查完成");
      } catch (error) {
        notice.error("检查失败");
      } finally {
        loadingIds.value.delete(id);
      }
    };
    const hanleChannelURL = (platform, roomId) => {
      if (platform === "douyu") {
        return `https://www.douyu.com/${roomId}`;
      } else if (platform === "huya") {
        return `https://www.huya.com/${roomId}`;
      } else {
        return "";
      }
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.id,
            class: "card"
          }, [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("span", null, toDisplayString(item.name), 1),
                item.enable ? (openBlock(), createBlock(_component_n_icon, {
                  key: 0,
                  size: "20",
                  title: "自动监听"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(AccessTime24Regular), { style: { "color": "gray" } })
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                _cache[0] || (_cache[0] = createTextVNode(" 房间号：")),
                createBaseVNode("a", {
                  class: "link",
                  target: "_blank",
                  href: hanleChannelURL(item.platform, item.roomId)
                }, toDisplayString(item.roomId), 9, _hoisted_4)
              ])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(TextButton, {
                style: { "display": "inline-block" },
                type: "primary",
                loading: unref(loadingIds).has(item.id),
                onClick: ($event) => checkSub2(item.id)
              }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("运行")
                ])),
                _: 2
              }, 1032, ["loading", "onClick"]),
              createVNode(TextButton, {
                type: "primary",
                onClick: ($event) => editSub(item)
              }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("配置")
                ])),
                _: 2
              }, 1032, ["onClick"]),
              createVNode(TextButton, {
                type: "danger",
                onClick: ($event) => removeSub2(item.id)
              }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("删除")
                ])),
                _: 2
              }, 1032, ["onClick"])
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const SubVideoList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-876278f7"]]);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "input" };
const _hoisted_3 = { class: "help-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "BiliDownload"
  },
  __name: "index",
  setup(__props) {
    const notice = useNotification();
    const url = ref("");
    const downloadOptions = ref({
      hasDanmuOptions: false,
      hasAudioOnlyOptions: false,
      hasDanmuOnlyOptions: false
    });
    const selectCids = ref([]);
    const data = ref({
      platform: "bilibili",
      videoId: "",
      title: "",
      resolutions: [],
      parts: []
    });
    const parse = async () => {
      const videoInfo = await task.parseVideo(url.value);
      videoInfo.parts = videoInfo.parts.map((item) => {
        item.name = sanitizeFileName(item.name);
        return item;
      });
      data.value = videoInfo;
      selectCids.value = videoInfo.parts.map((item) => item.partId);
      if (videoInfo.platform === "bilibili") {
        downloadOptions.value = {
          hasDanmuOptions: true,
          hasAudioOnlyOptions: true,
          hasDanmuOnlyOptions: false
        };
      } else if (videoInfo.platform === "douyu") {
        downloadOptions.value = {
          hasDanmuOptions: true,
          hasAudioOnlyOptions: false,
          hasDanmuOnlyOptions: true
        };
      } else if (videoInfo.platform === "huya") {
        downloadOptions.value = {
          hasDanmuOptions: false,
          hasAudioOnlyOptions: false,
          hasDanmuOnlyOptions: false
        };
      } else {
        downloadOptions.value = {
          hasDanmuOptions: false,
          hasAudioOnlyOptions: false,
          hasDanmuOnlyOptions: false
        };
      }
    };
    const subData = ref({
      id: 0,
      platform: "douyu",
      enable: true,
      lastRunTime: 0,
      roomId: "",
      options: {
        quality: "highest",
        danma: false,
        sendWebhook: false
      },
      name: "",
      subId: ""
    });
    const subscribeVisible = ref(false);
    const subscribe = async () => {
      const res = await videoApi.subParse(url.value);
      subscribeVisible.value = true;
      subData.value = res;
    };
    const subVideoList = ref([]);
    const getSuscribeList = async () => {
      const res = await videoApi.listSub();
      subVideoList.value = res;
    };
    getSuscribeList();
    const download = async () => {
      if (!url.value) return;
      if (!url.value.trim()) {
        throw new Error("请输入视频链接");
      }
      loading.value = true;
      try {
        await parse();
        visible.value = true;
      } finally {
        loading.value = false;
      }
    };
    const confirm = async (options) => {
      const parts = data.value.parts.filter((item) => options.ids.includes(item.partId));
      const names = parts.map((item) => item.name);
      if (names.some((item) => !item)) {
        notice.error({
          title: "文件名不能为空",
          duration: 1e3
        });
        return;
      }
      if (new Set(names).size !== names.length) {
        notice.error({
          title: "文件名不能重复",
          duration: 3e3
        });
        return;
      }
      if (options.onlyDanmu && downloadOptions.value.hasDanmuOnlyOptions) {
        notice.info({
          title: `即将开始下载弹幕，请不要关闭此页面`,
          duration: 5e3
        });
      }
      for (const part of parts) {
        if (options.onlyDanmu && downloadOptions.value.hasDanmuOnlyOptions) {
          notice.info({
            title: `已开始下载弹幕：${part.name}`,
            duration: 5e3
          });
        }
        await task.downloadVideo({
          id: part.partId,
          platform: data.value.platform,
          savePath: options.savePath,
          filename: `${sanitizeFileName(part.name)}.ts`,
          resolution: options.resoltion,
          extra: part.extra,
          danmu: options.danmu,
          override: options.override,
          onlyAudio: options.onlyAudio,
          onlyDanmu: options.onlyDanmu
        });
        if (options.onlyDanmu && downloadOptions.value.hasDanmuOnlyOptions) {
          notice.info({
            title: `已结束下载弹幕：${part.name}`,
            duration: 5e3
          });
        }
      }
      if (!options.onlyDanmu && downloadOptions.value.hasDanmuOnlyOptions) {
        notice.success({
          title: "已加入队列",
          duration: 2e3
        });
      }
      visible.value = false;
    };
    const visible = ref(false);
    const loading = ref(false);
    const handleEdit = (item) => {
      subscribeVisible.value = true;
      subData.value = {
        id: item.id,
        platform: item.platform,
        options: item.options,
        name: item.name,
        subId: item.id.toString(),
        enable: item.enable,
        lastRunTime: item.lastRunTime,
        roomId: item.roomId
      };
    };
    const showHelpModal = ref(false);
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_button = Button;
      const _component_n_table = __unplugin_components_2$4;
      const _component_n_card = __unplugin_components_3$2;
      const _component_n_modal = __unplugin_components_3$1;
      const _component_n_spin = __unplugin_components_5$2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n_spin, { show: unref(loading) }, {
          default: withCtx(() => [
            createBaseVNode("h2", null, [
              _cache[7] || (_cache[7] = createTextVNode(" 支持B站视频、B站剪辑回放、斗鱼录播、虎牙录播、抖音录播、快手录播下载；斗鱼、虎牙录播订阅 ")),
              createVNode(_component_n_icon, {
                size: 24,
                style: { "vertical-align": "middle", "cursor": "pointer" },
                onClick: _cache[0] || (_cache[0] = ($event) => showHelpModal.value = true)
              }, {
                default: withCtx(() => [
                  createVNode(unref(HelpCircleOutline))
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_n_input, {
                value: unref(url),
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(url) ? url.value = $event : null),
                style: { width: "80%" },
                placeholder: "请输入视频链接或者直播间链接，比如：https://www.bilibili.com/video/BV1u94y1K7nr、https://v.douyu.com/show/brN0MmQqKl6MpyxA、https://www.huya.com/video/play/1043151558.html",
                onKeyup: withKeys(download, ["enter"])
              }, null, 8, ["value"]),
              createVNode(_component_n_button, {
                type: "primary",
                ghost: "",
                disabled: !unref(url),
                onClick: download
              }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [
                  createTextVNode(" 下载 ")
                ])),
                _: 1
              }, 8, ["disabled"]),
              createVNode(_component_n_button, {
                type: "primary",
                disabled: !unref(url),
                onClick: subscribe
              }, {
                default: withCtx(() => _cache[9] || (_cache[9] = [
                  createTextVNode(" 订阅 ")
                ])),
                _: 1
              }, 8, ["disabled"])
            ]),
            createVNode(SubVideoList, {
              list: unref(subVideoList),
              onRemove: getSuscribeList,
              onEdit: handleEdit
            }, null, 8, ["list"]),
            createVNode(DownloadConfirm, {
              visible: unref(visible),
              "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => isRef(visible) ? visible.value = $event : null),
              "select-ids": unref(selectCids),
              "onUpdate:selectIds": _cache[3] || (_cache[3] = ($event) => isRef(selectCids) ? selectCids.value = $event : null),
              detail: unref(data),
              "c-options": unref(downloadOptions),
              onConfirm: confirm
            }, null, 8, ["visible", "select-ids", "detail", "c-options"]),
            createVNode(SubscribeModal, {
              visible: unref(subscribeVisible),
              "onUpdate:visible": _cache[4] || (_cache[4] = ($event) => isRef(subscribeVisible) ? subscribeVisible.value = $event : null),
              data: unref(subData),
              onUpdate: getSuscribeList,
              onAdd: getSuscribeList
            }, null, 8, ["visible", "data"]),
            createVNode(_component_n_modal, {
              show: unref(showHelpModal),
              "onUpdate:show": _cache[6] || (_cache[6] = ($event) => isRef(showHelpModal) ? showHelpModal.value = $event : null)
            }, {
              default: withCtx(() => [
                createVNode(_component_n_card, {
                  style: { "width": "600px" },
                  title: "示例",
                  bordered: false,
                  size: "huge",
                  role: "dialog",
                  "aria-modal": "true"
                }, {
                  "header-extra": withCtx(() => [
                    createVNode(_component_n_button, {
                      quaternary: "",
                      circle: "",
                      onClick: _cache[5] || (_cache[5] = ($event) => showHelpModal.value = false)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_icon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(CloseOutline))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3, [
                      _cache[12] || (_cache[12] = createBaseVNode("h3", null, "下载", -1)),
                      createVNode(_component_n_table, {
                        bordered: false,
                        "single-line": false
                      }, {
                        default: withCtx(() => _cache[10] || (_cache[10] = [
                          createBaseVNode("thead", null, [
                            createBaseVNode("tr", null, [
                              createBaseVNode("th", null, "平台"),
                              createBaseVNode("th", null, "示例")
                            ])
                          ], -1),
                          createBaseVNode("tbody", null, [
                            createBaseVNode("tr", null, [
                              createBaseVNode("td", null, "B站视频"),
                              createBaseVNode("td", null, "https://www.bilibili.com/video/BV1Hs421M755/")
                            ]),
                            createBaseVNode("tr", null, [
                              createBaseVNode("td", null, "B站录播回放"),
                              createBaseVNode("td", null, "https://live.bilibili.com/32736947")
                            ]),
                            createBaseVNode("tr", null, [
                              createBaseVNode("td", null, "斗鱼录播"),
                              createBaseVNode("td", null, "https://v.douyu.com/show/yVY8WwDpGmovLOz9")
                            ]),
                            createBaseVNode("tr", null, [
                              createBaseVNode("td", null, "虎牙录播"),
                              createBaseVNode("td", null, "https://www.huya.com/video/play/1062079466.html")
                            ]),
                            createBaseVNode("tr", null, [
                              createBaseVNode("td", null, "快手录播"),
                              createBaseVNode("td", null, "https://live.kuaishou.com/playback/3xfhg6rsxsbrddq")
                            ]),
                            createBaseVNode("tr", null, [
                              createBaseVNode("td", null, "抖音录播"),
                              createBaseVNode("td", null, "https://www.douyin.com/vsdetail/7553114817708594226")
                            ])
                          ], -1)
                        ])),
                        _: 1
                      }),
                      _cache[13] || (_cache[13] = createBaseVNode("h3", { style: { "margin-top": "24px" } }, "订阅", -1)),
                      createVNode(_component_n_table, {
                        bordered: false,
                        "single-line": false
                      }, {
                        default: withCtx(() => _cache[11] || (_cache[11] = [
                          createBaseVNode("thead", null, [
                            createBaseVNode("tr", null, [
                              createBaseVNode("th", null, "平台"),
                              createBaseVNode("th", null, "示例")
                            ])
                          ], -1),
                          createBaseVNode("tbody", null, [
                            createBaseVNode("tr", null, [
                              createBaseVNode("td", null, "斗鱼录播"),
                              createBaseVNode("td", null, "https://www.douyu.com/93589")
                            ]),
                            createBaseVNode("tr", null, [
                              createBaseVNode("td", null, "虎牙录播"),
                              createBaseVNode("td", null, "https://www.huya.com/910323")
                            ])
                          ], -1)
                        ])),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["show"])
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6b0136b"]]);
export {
  index as default
};
