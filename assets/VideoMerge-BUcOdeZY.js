import { _ as _sfc_main$1 } from "./FileSelect.vue_vue_type_script_setup_true_lang-BpOCkYqA.js";
import { _ as _sfc_main$2 } from "./Tip.vue_vue_type_script_setup_true_lang-ZS01Tq1J.js";
import { i as useAppConfig, e as __unplugin_components_1 } from "./index-C4u8aLk_.js";
import { h as hotkeys } from "./hotkeys.esm-DZlVWy2u.js";
import { d as defineComponent, al as storeToRefs, p as computed, r as ref, aA as onActivated, aB as onDeactivated, as as onUnmounted, ah as createElementBlock, e as createBaseVNode, b as unref, am as createCommentVNode, a as createVNode, w as withCtx, i as isRef, ar as toRaw, B as Button, o as openBlock, f as createTextVNode } from "./index-BdK_bIY-.js";
import { u as useNotification } from "./use-notification-Bd6vXVK5.js";
import { a as toReactive } from "./index-Dx5QtryB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CeIKdxzx.js";
import "./filenamify-DOXWXCz-.js";
import "./showDirectoryDialog-DEycIJ5C.js";
import "./common-BoyrrMWo.js";
import "./index-7WYu9wih.js";
import "./CloseOutline-WELlPCAp.js";
const _hoisted_1 = {
  class: "center",
  style: { "margin-bottom": "20px", "display": "flex", "align-items": "center", "justify-content": "center", "gap": "5px" }
};
const _hoisted_2 = {
  class: "flex align-center column",
  style: { "margin-top": "10px" }
};
const _hoisted_3 = { style: { "margin-top": "10px" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VideoMerge",
  setup(__props) {
    const notice = useNotification();
    const { appConfig } = storeToRefs(useAppConfig());
    const isWeb = computed(() => window.isWeb);
    const fileList = ref([]);
    const options = toReactive(
      computed({
        get: () => appConfig.value.tool.videoMerge,
        set: (value) => {
          appConfig.value.tool.videoMerge = value;
        }
      })
    );
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
      if (fileList.value.length < 2) {
        notice.error({
          title: `至少选择2个文件`,
          duration: 1e3
        });
        return;
      }
      let filePath;
      const { dir, name } = window.api.formatFile(fileList.value[0].path);
      filePath = window.path.join(dir, `${name}-合并.mp4`);
      if (options.saveOriginPath) {
        if (await window.api.exits(filePath)) {
          notice.error({
            title: `${filePath}-文件已存在，请手动选择路径`,
            duration: 1e3
          });
          const file = await getDir(filePath);
          if (!file) {
            return;
          }
          filePath = file;
        }
      } else {
        const file = await getDir(filePath);
        if (!file) {
          return;
        }
        filePath = file;
      }
      const files = fileList.value.map((file) => {
        return window.api.formatFile(file.path);
      });
      try {
        window.api.mergeVideos(toRaw(files), { ...toRaw(options), savePath: filePath });
        notice.warning({
          title: `已加入任务队列，可在任务列表中查看进度`,
          duration: 1e3
        });
      } catch (err) {
        notice.error({
          title: err,
          duration: 1e3
        });
      } finally {
        fileList.value = [];
      }
    };
    async function getDir(defaultPath) {
      const path = await window.api.showSaveDialog({
        defaultPath,
        filters: [
          { name: "视频文件", extensions: ["mp4"] },
          { name: "所有文件", extensions: ["*"] }
        ]
      });
      return path;
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
      const _component_n_checkbox = __unplugin_components_1;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          unref(fileList).length !== 0 ? (openBlock(), createElementBlock("span", {
            key: 0,
            style: { "cursor": "pointer", "color": "#958e8e" },
            onClick: clear
          }, "清空")) : createCommentVNode("", true),
          createVNode(_component_n_button, { onClick: addVideo }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode(" 添加 ")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            disabled: unref(isWeb),
            onClick: convert
          }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode(" 立即合并 ")
            ])),
            _: 1
          }, 8, ["disabled"]),
          createVNode(_sfc_main$2, {
            tip: "注意：并非所有容器都支持流复制。如果出现播放问题或未合并文件，则可能需要重新编码。",
            size: 26
          })
        ]),
        createVNode(_sfc_main$1, {
          ref_key: "fileSelect",
          ref: fileSelect,
          modelValue: unref(fileList),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(fileList) ? fileList.value = $event : null)
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_2, [
          _cache[7] || (_cache[7] = createBaseVNode("div", null, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_n_checkbox, {
              checked: unref(options).saveOriginPath,
              "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => unref(options).saveOriginPath = $event)
            }, {
              default: withCtx(() => _cache[5] || (_cache[5] = [
                createTextVNode(" 保存到原始文件夹 ")
              ])),
              _: 1
            }, 8, ["checked"]),
            createVNode(_component_n_checkbox, {
              checked: unref(options).removeOrigin,
              "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => unref(options).removeOrigin = $event)
            }, {
              default: withCtx(() => _cache[6] || (_cache[6] = [
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
const VideoMerge = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-97f898f8"]]);
export {
  VideoMerge as default
};
