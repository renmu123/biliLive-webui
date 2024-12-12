import { p as c, x as cB, cP as fadeInTransition, y as cM, G as useTheme, d as defineComponent, A as useConfig, l as computed, I as useThemeClass, r as ref, ab as watchEffect, m as h, a2 as NBaseLoading, V as Transition, cQ as spinLight, cR as pxfy, aJ as createKey, o as openBlock, c as createElementBlock, f as createBaseVNode, af as mergeModels, ah as storeToRefs, c4 as reactive, ag as useModel, ai as createBlock, w as withCtx, am as toDisplayString, a as createVNode, e as unref, g as createTextVNode, ak as renderList, aw as withKeys, F as Fragment, aj as createCommentVNode, B as Button, an as __unplugin_components_3$1, i as isRef } from "./index-B3txP6HV.js";
import { b as useCompitable, i as useAppConfig, e as __unplugin_components_1, N as NIcon, h as __unplugin_components_2$2, d as useUserInfoStore } from "./index-Be9rHucp.js";
import { a as sanitizeFileName } from "./index-Cfb3FODH.js";
import { s as showDirectoryDialog } from "./showDirectoryDialog-CW96unRZ.js";
import { F as FolderOpenOutline } from "./FolderOpenOutline-0U4FjUFl.js";
import { _ as __unplugin_components_2$1 } from "./Input-B6k2JVGe.js";
import { _ as __unplugin_components_3, a as __unplugin_components_5 } from "./RadioGroup-9W9i5aqG.js";
import { _ as __unplugin_components_4 } from "./Space-C3OZuoMs.js";
import { _ as __unplugin_components_0 } from "./Select-cKie_tgm.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-BI19-qja.js";
import { c as common } from "./common-BAA1HpBD.js";
import { b as bili } from "./bili-Cfip0Zwk.js";
import { u as useNotification } from "./use-notification-_uZSor1V.js";
import "./index-CNQhkSN1.js";
import "./Suffix-DS84fk-A.js";
import "./utils-CpJTLUg0.js";
const style = c([c("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), cB("spin-container", `
 position: relative;
 `, [cB("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [fadeInTransition()])]), cB("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), cB("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [cM("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]), cB("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), cB("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [cM("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);
const STROKE_WIDTH = {
  small: 20,
  medium: 18,
  large: 16
};
const spinProps = Object.assign(Object.assign({}, useTheme.props), {
  contentClass: String,
  contentStyle: [Object, String],
  description: String,
  stroke: String,
  size: {
    type: [String, Number],
    default: "medium"
  },
  show: {
    type: Boolean,
    default: true
  },
  strokeWidth: Number,
  rotate: {
    type: Boolean,
    default: true
  },
  spinning: {
    type: Boolean,
    validator: () => {
      return true;
    },
    default: void 0
  },
  delay: Number
});
const __unplugin_components_2 = defineComponent({
  name: "Spin",
  props: spinProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Spin", "-spin", style, spinLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        size: spinSize
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self
      } = themeRef.value;
      const {
        opacitySpinning,
        color,
        textColor
      } = self;
      const size = typeof spinSize === "number" ? pxfy(spinSize) : self[createKey("size", spinSize)];
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-opacity-spinning": opacitySpinning,
        "--n-size": size,
        "--n-color": color,
        "--n-text-color": textColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("spin", computed(() => {
      const {
        size
      } = props;
      return typeof size === "number" ? String(size) : size[0];
    }), cssVarsRef, props) : void 0;
    const compitableShow = useCompitable(props, ["spinning", "show"]);
    const activeRef = ref(false);
    watchEffect((onCleanup) => {
      let timerId;
      if (compitableShow.value) {
        const {
          delay
        } = props;
        if (delay) {
          timerId = window.setTimeout(() => {
            activeRef.value = true;
          }, delay);
          onCleanup(() => {
            clearTimeout(timerId);
          });
          return;
        }
      }
      activeRef.value = compitableShow.value;
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      active: activeRef,
      mergedStrokeWidth: computed(() => {
        const {
          strokeWidth
        } = props;
        if (strokeWidth !== void 0) return strokeWidth;
        const {
          size
        } = props;
        return STROKE_WIDTH[typeof size === "number" ? "medium" : size];
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a, _b;
    const {
      $slots,
      mergedClsPrefix,
      description
    } = this;
    const rotate = $slots.icon && this.rotate;
    const descriptionNode = (description || $slots.description) && h("div", {
      class: `${mergedClsPrefix}-spin-description`
    }, description || ((_a = $slots.description) === null || _a === void 0 ? void 0 : _a.call($slots)));
    const icon = $slots.icon ? h("div", {
      class: [`${mergedClsPrefix}-spin-body`, this.themeClass]
    }, h("div", {
      class: [`${mergedClsPrefix}-spin`, rotate && `${mergedClsPrefix}-spin--rotate`],
      style: $slots.default ? "" : this.cssVars
    }, $slots.icon()), descriptionNode) : h("div", {
      class: [`${mergedClsPrefix}-spin-body`, this.themeClass]
    }, h(NBaseLoading, {
      clsPrefix: mergedClsPrefix,
      style: $slots.default ? "" : this.cssVars,
      stroke: this.stroke,
      "stroke-width": this.mergedStrokeWidth,
      class: `${mergedClsPrefix}-spin`
    }), descriptionNode);
    (_b = this.onRender) === null || _b === void 0 ? void 0 : _b.call(this);
    return $slots.default ? h("div", {
      class: [`${mergedClsPrefix}-spin-container`, this.themeClass],
      style: this.cssVars
    }, h("div", {
      class: [`${mergedClsPrefix}-spin-content`, this.active && `${mergedClsPrefix}-spin-content--spinning`, this.contentClass],
      style: this.contentStyle
    }, $slots), h(Transition, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? icon : null
    })) : icon;
  }
});
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1 = [_hoisted_2$2];
const EditOutlined = defineComponent({
  name: "EditOutlined",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$1);
  }
});
const _hoisted_1$1 = { class: "container" };
const _hoisted_2$1 = { style: { "margin-bottom": "10px" } };
const _hoisted_3 = { class: "file-container" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { style: { "margin-top": "10px", "display": "flex", "align-items": "center" } };
const _hoisted_6 = {
  key: 0,
  style: { "margin-top": "10px", "display": "flex", "align-items": "center" }
};
const _hoisted_7 = {
  key: 1,
  style: { "margin-top": "10px", "display": "flex", "align-items": "center" }
};
const _hoisted_8 = { style: { "margin-top": "10px" } };
const _hoisted_9 = { class: "path" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DownloadConfirm",
  props: /* @__PURE__ */ mergeModels({
    detail: {},
    cOptions: {},
    resoltions: {}
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
    const options = reactive(appConfig.value?.tool?.download ?? {});
    const showModal = useModel(__props, "visible");
    const selectIds = useModel(__props, "selectIds");
    const props = __props;
    const emits = __emit;
    const download = () => {
      emits("confirm", {
        ids: selectIds.value,
        savePath: options.savePath,
        danmu: options.danmu,
        resoltion: options.douyuResolution,
        override: options.override
      });
      showModal.value = false;
    };
    const editPart = (file) => {
      file.part = sanitizeFileName(file.part);
      if (file.part.trim() === "") {
        file.part = "未命名";
      }
      file.editable = !file.editable;
    };
    const selectFolder = async () => {
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
    };
    const allChecked = computed({
      get: () => selectIds.value.length === props.detail.pages.length,
      set: (value) => {
        selectIds.value = value ? props.detail.pages.map((p) => p.cid) : [];
      }
    });
    const handleCheckedChange = (value) => {
      allChecked.value = value;
    };
    return (_ctx, _cache) => {
      const _component_n_checkbox = __unplugin_components_1;
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_icon = NIcon;
      const _component_n_checkbox_group = __unplugin_components_2$2;
      const _component_n_radio = __unplugin_components_3;
      const _component_n_space = __unplugin_components_4;
      const _component_n_radio_group = __unplugin_components_5;
      const _component_n_select = __unplugin_components_0;
      const _component_n_button = Button;
      const _component_n_modal = __unplugin_components_3$1;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[5] || (_cache[5] = ($event) => showModal.value = $event),
        "mask-closable": false,
        "auto-focus": "",
        preset: "dialog",
        "show-icon": false
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("h4", null, toDisplayString(props.detail.title), 1),
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(_component_n_checkbox, {
                checked: unref(allChecked),
                "onUpdate:checked": handleCheckedChange
              }, null, 8, ["checked"]),
              createTextVNode(" 选集：(" + toDisplayString(selectIds.value.length) + "/" + toDisplayString(props.detail.pages.length) + ") ", 1)
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_n_checkbox_group, {
                value: selectIds.value,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => selectIds.value = $event)
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(props.detail.pages, (file) => {
                    return openBlock(), createElementBlock("div", {
                      key: file.cid,
                      class: "file"
                    }, [
                      createVNode(_component_n_checkbox, {
                        value: file.cid,
                        style: { "margin-right": "10px" }
                      }, null, 8, ["value"]),
                      !file.editable ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(file.part) + ".mp4", 1)) : (openBlock(), createBlock(_component_n_input, {
                        key: 1,
                        value: file.part,
                        "onUpdate:value": ($event) => file.part = $event,
                        placeholder: "请输入文件名",
                        onKeyup: withKeys(($event) => editPart(file), ["enter"])
                      }, {
                        suffix: withCtx(() => _cache[6] || (_cache[6] = [
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
            createBaseVNode("div", _hoisted_5, [
              _cache[9] || (_cache[9] = createBaseVNode("span", { style: { "font-size": "12px", "flex": "none" } }, "文件冲突：", -1)),
              createVNode(_component_n_radio_group, {
                value: unref(options).override,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(options).override = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, null, {
                    default: withCtx(() => [
                      createVNode(_component_n_radio, { value: true }, {
                        default: withCtx(() => _cache[7] || (_cache[7] = [
                          createTextVNode(" 覆盖文件 ")
                        ])),
                        _: 1
                      }),
                      createVNode(_component_n_radio, { value: false }, {
                        default: withCtx(() => _cache[8] || (_cache[8] = [
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
            _ctx.resoltions.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
              _cache[10] || (_cache[10] = createBaseVNode("span", {
                style: { "font-size": "12px", "flex": "none" },
                title: "清晰度取第一P视频，如果后续视频不存在相应分清晰度，取最好清晰度"
              }, "清晰度：", -1)),
              createVNode(_component_n_select, {
                value: unref(options).douyuResolution,
                "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).douyuResolution = $event),
                options: _ctx.resoltions,
                style: { "width": "150px" }
              }, null, 8, ["value", "options"])
            ])) : createCommentVNode("", true),
            _ctx.cOptions.hasDanmuOptions ? (openBlock(), createElementBlock("div", _hoisted_7, [
              _cache[11] || (_cache[11] = createBaseVNode("span", { style: { "font-size": "12px", "flex": "none" } }, "弹幕：", -1)),
              createVNode(_component_n_select, {
                value: unref(options).danmu,
                "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(options).danmu = $event),
                options: danmuOptions,
                style: { "width": "100px" }
              }, null, 8, ["value"])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_8, [
              _cache[12] || (_cache[12] = createBaseVNode("div", { style: { "font-size": "12px" } }, "下载到：", -1)),
              createBaseVNode("div", _hoisted_9, [
                createVNode(_component_n_input, {
                  value: unref(options).savePath,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(options).savePath = $event),
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
              default: withCtx(() => _cache[13] || (_cache[13] = [
                createTextVNode(" 下载 ")
              ])),
              _: 1
            }, 8, ["disabled"])
          ])
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const DownloadConfirm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-20d239bb"]]);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "input" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VideoDownload",
  setup(__props) {
    const notice = useNotification();
    const { userInfo } = storeToRefs(useUserInfoStore());
    const url = ref("");
    const archiveDeatil = ref({
      vid: "",
      title: "",
      pages: []
    });
    const downloadOptions = ref({
      hasDanmuOptions: false
    });
    const selectCids = ref([]);
    const uid = computed(() => {
      return userInfo.value.uid;
    });
    function extractBVNumber(videoUrl) {
      const bvMatch = videoUrl.match(/\/BV([A-Za-z0-9]+)/);
      if (bvMatch && bvMatch[1]) {
        return `BV${bvMatch[1]}`;
      } else {
        return null;
      }
    }
    const videoType = ref("bili");
    const parse = async () => {
      const formatUrl = url.value.trim();
      if (!formatUrl) return;
      if (formatUrl.includes("douyu")) {
        videoType.value = "douyu";
        await handleDouyu(formatUrl);
        downloadOptions.value = {
          hasDanmuOptions: true
        };
      } else if (formatUrl.includes("bilibili")) {
        videoType.value = "bili";
        await handleBili(formatUrl);
        downloadOptions.value = {
          hasDanmuOptions: false
        };
      }
    };
    const handleBili = async (formatUrl) => {
      const bvid = extractBVNumber(formatUrl);
      if (!bvid) {
        throw new Error("请输入正确的b站视频链接");
      }
      selectCids.value = [];
      const data = await bili.getArchiveDetail(bvid, uid.value);
      archiveDeatil.value = {
        vid: data.View.bvid,
        title: data.View.title,
        pages: data.View.pages.map((item) => {
          item["editable"] = false;
          item.part = sanitizeFileName(item.part);
          return item;
        })
      };
      resoltions.value = [];
      selectCids.value = data.View.pages.map((item) => item.cid);
    };
    const resoltions = ref([]);
    const handleDouyu = async (formatUrl) => {
      const douyuMatch = formatUrl.match(/show\/([A-Za-z0-9]+)/);
      if (!douyuMatch) {
        throw new Error("请输入正确的斗鱼视频链接");
      }
      try {
        const data = await common.douyuVideoParse(formatUrl);
        archiveDeatil.value = {
          vid: "anything",
          title: data[0].seo_title,
          pages: data.map((item) => {
            let room_title = item.ROOM.name;
            if (room_title.startsWith("【") && room_title.split("：").length > 1) {
              room_title = room_title.split("：").slice(1).join("：");
            }
            const metadata = {
              user_name: item.ROOM.author_name,
              room_id: item.DATA.content.room_id,
              room_title,
              live_start_time: new Date(item.DATA.liveShow.starttime * 1e3).toISOString(),
              video_start_time: new Date(item.DATA.content.start_time * 1e3).toISOString(),
              platform: "douyu",
              vid: item.ROOM.vid
            };
            return {
              cid: item.decodeData,
              part: item.seo_title,
              editable: false,
              metadata
            };
          })
        };
        if (archiveDeatil.value.pages.length === 0) {
          throw new Error("解析失败，请检查链接是否正确");
        }
        resoltions.value = await common.getVideoStreams({
          decodeData: archiveDeatil.value.pages[0].cid
        });
        selectCids.value = archiveDeatil.value.pages.map((item) => item.cid);
      } catch (e) {
        console.log(e);
        throw new Error("解析失败，请检查链接是否正确");
      }
    };
    const download = async () => {
      if (!url.value) return;
      if (!url.value.trim()) {
        throw new Error("请输入合法的视频链接");
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
      const selectPages = archiveDeatil.value.pages.filter((item) => options.ids.includes(item.cid));
      for (const page of selectPages) {
        if (videoType.value === "douyu") {
          await common.douyuVideoDownload(
            window.path.join(options.savePath, `${sanitizeFileName(page.part)}.mp4`),
            page.cid,
            {
              danmu: options.danmu,
              resoltion: options.resoltion,
              override: options.override,
              ...page.metadata
            }
          );
        } else if (videoType.value === "bili") {
          bili.download(
            {
              output: window.path.join(options.savePath, `${sanitizeFileName(page.part)}.mp4`),
              cid: page.cid,
              bvid: archiveDeatil.value.vid,
              override: options.override
            },
            uid.value
          );
        }
      }
      notice.success({
        title: "已加入队列",
        duration: 1e3
      });
    };
    const visible = ref(false);
    const loading = ref(false);
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_button = Button;
      const _component_n_spin = __unplugin_components_2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n_spin, { show: unref(loading) }, {
          default: withCtx(() => [
            _cache[4] || (_cache[4] = createBaseVNode("h2", null, "支持B站以及斗鱼录播下载", -1)),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_n_input, {
                value: unref(url),
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(url) ? url.value = $event : null),
                style: { width: "80%" },
                placeholder: "请输入视频链接，比如：https://www.bilibili.com/video/BV1u94y1K7nr、https://v.douyu.com/show/brN0MmQqKl6MpyxA",
                onKeyup: withKeys(download, ["enter"])
              }, null, 8, ["value"]),
              createVNode(_component_n_button, {
                type: "primary",
                ghost: "",
                disabled: !unref(url),
                onClick: download
              }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode(" 下载 ")
                ])),
                _: 1
              }, 8, ["disabled"])
            ]),
            createVNode(DownloadConfirm, {
              visible: unref(visible),
              "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => isRef(visible) ? visible.value = $event : null),
              "select-ids": unref(selectCids),
              "onUpdate:selectIds": _cache[2] || (_cache[2] = ($event) => isRef(selectCids) ? selectCids.value = $event : null),
              detail: unref(archiveDeatil),
              "c-options": unref(downloadOptions),
              resoltions: unref(resoltions),
              onConfirm: confirm
            }, null, 8, ["visible", "select-ids", "detail", "c-options", "resoltions"])
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
});
const VideoDownload = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f57f0d55"]]);
export {
  VideoDownload as default
};
