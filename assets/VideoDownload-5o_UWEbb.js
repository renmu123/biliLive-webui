import { d as defineComponent, o as openBlock, ah as createElementBlock, e as createBaseVNode, aj as mergeModels, al as storeToRefs, cn as reactive, ak as useModel, p as computed, c as createBlock, w as withCtx, ap as toDisplayString, a as createVNode, b as unref, f as createTextVNode, an as renderList, az as withKeys, a8 as Fragment, B as Button, aq as __unplugin_components_3, r as ref, i as isRef } from "./index--WEAc-yU.js";
import { e as useAppConfig, _ as __unplugin_components_1, N as NIcon, d as __unplugin_components_2$1, b as useUserInfoStore } from "./index-CEMlR3u9.js";
import { a as sanitizeFileName } from "./index-7WYu9wih.js";
import { s as showDirectoryDialog } from "./showDirectoryDialog-WwNRhPTU.js";
import { F as FolderOpenOutline } from "./FolderOpenOutline-CdtIGozP.js";
import { _ as __unplugin_components_2 } from "./Input-e5p23sTB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-BTOCZhDw.js";
import { c as common } from "./common-BSj9xfrx.js";
import { b as bili } from "./bili-CEzfPkaF.js";
import { _ as __unplugin_components_9 } from "./Spin-BdQRE0dR.js";
import { u as useNotification } from "./use-notification-kPOG22iR.js";
import "./Suffix-BQ4ungoP.js";
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
const _hoisted_5 = { style: { "margin-top": "20px" } };
const _hoisted_6 = { class: "path" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DownloadConfirm",
  props: /* @__PURE__ */ mergeModels({
    detail: {}
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {},
    "selectIds": { required: true, default: [] },
    "selectIdsModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["confirm"], ["update:visible", "update:selectIds"]),
  setup(__props, { emit: __emit }) {
    const { appConfig } = storeToRefs(useAppConfig());
    const options = reactive(appConfig.value?.tool?.download ?? {});
    const showModal = useModel(__props, "visible");
    const selectIds = useModel(__props, "selectIds");
    const props = __props;
    const emits = __emit;
    const download = () => {
      emits("confirm", { ids: selectIds.value, savePath: options.savePath });
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
      const _component_n_input = __unplugin_components_2;
      const _component_n_icon = NIcon;
      const _component_n_checkbox_group = __unplugin_components_2$1;
      const _component_n_button = Button;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[2] || (_cache[2] = ($event) => showModal.value = $event),
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
                        suffix: withCtx(() => _cache[3] || (_cache[3] = [
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
              _cache[4] || (_cache[4] = createBaseVNode("div", { style: { "font-size": "12px" } }, "下载到：", -1)),
              createBaseVNode("div", _hoisted_6, [
                createVNode(_component_n_input, {
                  value: unref(options).savePath,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(options).savePath = $event),
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
              default: withCtx(() => _cache[5] || (_cache[5] = [
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
const DownloadConfirm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b8ac11d2"]]);
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
      } else if (formatUrl.includes("bilibili")) {
        videoType.value = "bili";
        await handleBili(formatUrl);
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
      selectCids.value = data.View.pages.map((item) => item.cid);
    };
    const handleDouyu = async (formatUrl) => {
      const douyuMatch = formatUrl.match(/show\/([A-Za-z0-9]+)/);
      if (!douyuMatch) {
        throw new Error("请输入正确的斗鱼视频链接");
      }
      try {
        const data = await common.douyuVideoParse(formatUrl);
        archiveDeatil.value = {
          vid: "111",
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
              danmu: true,
              ...page.metadata
            }
          );
        } else if (videoType.value === "bili") {
          bili.download(
            {
              output: window.path.join(options.savePath, `${sanitizeFileName(page.part)}.mp4`),
              cid: page.cid,
              bvid: archiveDeatil.value.vid
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
      const _component_n_input = __unplugin_components_2;
      const _component_n_button = Button;
      const _component_n_spin = __unplugin_components_9;
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
              selectIds: unref(selectCids),
              "onUpdate:selectIds": _cache[2] || (_cache[2] = ($event) => isRef(selectCids) ? selectCids.value = $event : null),
              detail: unref(archiveDeatil),
              onConfirm: confirm
            }, null, 8, ["visible", "selectIds", "detail"])
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
});
const VideoDownload = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-51b7d2db"]]);
export {
  VideoDownload as default
};
