import { h as hotkeys } from "./hotkeys.esm-CkQxwFRj.js";
import { F as FileSelect } from "./FileSelect-H94La6Sx.js";
import { _ as _sfc_main$1 } from "./Tip.vue_vue_type_script_setup_true_lang-x9PvGp7f.js";
import { B as ButtonGroup } from "./ButtonGroup-CvzhfmEC.js";
import { d as useAppConfig, n as supportedVideoExtensions, t as task, o as formatFile } from "./index-BpXg0f34.js";
import { d as defineComponent, a4 as storeToRefs, r as ref, x as computed, ak as onActivated, al as onDeactivated, am as onUnmounted, c as createElementBlock, e as createBaseVNode, a as createVNode, h as createCommentVNode, f as unref, w as withCtx, B as Button, i as isRef, j as createTextVNode, o as openBlock } from "./index-gjuLIDoI.js";
import { d as danma } from "./danma-C4jBzCCd.js";
import { b as showSaveDialog } from "./fileSystem-C22lY_44.js";
import { u as useNotification } from "./use-notification-LRtjAvoZ.js";
import { b as toReactive } from "./index-bqczNda1.js";
import { _ as __unplugin_components_1 } from "./Checkbox-pQXdXXSK.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-B1lyReKF.js";
import "./EditableText-DJHDEqjl.js";
import "./Icon-D2Zo6Coc.js";
import "./showDirectoryDialog-CUR2gD_Z.js";
import "./common-Da25N27f.js";
import "./Input--Gp3P9gj.js";
import "./text-CwQ4I63s.js";
import "./Popover-T5GorXob.js";
import "./_getTag-NYFG1GAg.js";
import "./HelpCircleOutline-JWqllQs0.js";
import "./Dropdown-DBKZZG83.js";
import "./ChevronRight-CONDXL5I.js";
import "./create-DfXrl36C.js";
import "./create-ref-setter-DXkZaMbS.js";
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
  ...{
    name: "VideoMerge"
  },
  __name: "VideoMerge",
  setup(__props) {
    const notice = useNotification();
    const { appConfig } = storeToRefs(useAppConfig());
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
    const buttonGroupOptions = computed(() => {
      return [
        {
          key: "sortByFileAsc",
          label: "排序：文件名升序"
        },
        {
          key: "sortByFileDesc",
          label: "排序：文件名降序"
        }
      ];
    });
    const handleConfirm = (key) => {
      if (key === "sortByFileAsc") {
        fileList.value.sort((a, b) => {
          return a.videoPath.localeCompare(b.videoPath, "zh-Hans-CN", { numeric: true });
        });
      } else if (key === "sortByFileDesc") {
        fileList.value.sort((a, b) => {
          return b.videoPath.localeCompare(a.videoPath, "zh-Hans-CN", { numeric: true });
        });
      } else {
        convert();
      }
    };
    const convert = async () => {
      if (fileList.value.length < 2) {
        notice.error({
          title: `至少选择2个文件`,
          duration: 1e3
        });
        return;
      }
      const result = await task.checkMergeVideos(fileList.value.map((item) => item.videoPath));
      if (result.errors.length > 0) {
        notice.error({
          content: result.errors.join("\n"),
          duration: 5e3
        });
        return;
      }
      if (result.warnings.length > 0) {
        notice.warning({
          content: result.warnings.join("\n"),
          duration: 5e3
        });
      }
      if (options.mergeXml) {
        const hasDanmaku = fileList.value.every((item) => item.danmakuPath);
        if (!hasDanmaku) {
          notice.error({
            title: `所有视频文件必须全部选择弹幕文件`
          });
        }
      }
      let videoOutput = void 0;
      let xmlOutput = void 0;
      if (!options.saveOriginPath) {
        const { dir, name } = formatFile(fileList.value[0].videoPath);
        const filePath = window.path.join(dir, `${name}-合并.mp4`);
        const file = await showSaveDialog({
          defaultPath: filePath
        });
        if (!file) {
          return;
        }
        videoOutput = file;
        if (options.mergeXml) {
          const { dir: dir2, name: name2 } = formatFile(fileList.value[0].danmakuPath);
          const filePath2 = window.path.join(dir2, `${name2}-合并.xml`);
          const file2 = await showSaveDialog({
            defaultPath: filePath2
          });
          if (!file2) {
            return;
          }
          xmlOutput = file2;
        }
      }
      try {
        task.mergeVideos(
          fileList.value.map((item) => item.videoPath),
          { output: videoOutput, ...options }
        );
        notice.warning({
          title: `已加入任务，可在任务队列中查看进度`,
          duration: 1e3
        });
        if (options.mergeXml) {
          danma.mergeXml(fileList.value, { output: xmlOutput, saveMeta: options.keepFirstVideoMeta }).then(() => {
            notice.success({
              title: `弹幕合并成功`,
              duration: 1e3
            });
          }).catch((err) => {
            notice.error({
              title: err,
              duration: 1e3
            });
          });
        }
      } catch (err) {
        notice.error({
          title: err,
          duration: 1e3
        });
      } finally {
        fileList.value = [];
      }
    };
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
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode(" 添加 ")
            ])),
            _: 1
          }),
          createVNode(ButtonGroup, {
            options: unref(buttonGroupOptions),
            onClick: handleConfirm,
            title: "立即合并(ctrl+enter)"
          }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("立即合并")
            ])),
            _: 1
          }, 8, ["options"]),
          createVNode(_component_n_checkbox, {
            checked: unref(options).mergeXml,
            "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => unref(options).mergeXml = $event)
          }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode(" 合并弹幕 ")
            ])),
            _: 1
          }, 8, ["checked"]),
          createVNode(_sfc_main$1, {
            tip: "注意：并非所有容器都支持流复制。如果出现播放问题或未合并文件，则可能需要重新编码。",
            size: 26
          })
        ]),
        createVNode(FileSelect, {
          ref_key: "fileSelect",
          ref: fileSelect,
          modelValue: unref(fileList),
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(fileList) ? fileList.value = $event : null),
          extensions: [...unref(supportedVideoExtensions), "xml"]
        }, null, 8, ["modelValue", "extensions"]),
        createBaseVNode("div", _hoisted_2, [
          _cache[9] || (_cache[9] = createBaseVNode("div", null, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_n_checkbox, {
              checked: unref(options).saveOriginPath,
              "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => unref(options).saveOriginPath = $event)
            }, {
              default: withCtx(() => _cache[7] || (_cache[7] = [
                createTextVNode(" 保存到原始文件夹 ")
              ])),
              _: 1
            }, 8, ["checked"]),
            createVNode(_component_n_checkbox, {
              checked: unref(options).keepFirstVideoMeta,
              "onUpdate:checked": _cache[3] || (_cache[3] = ($event) => unref(options).keepFirstVideoMeta = $event),
              title: "将保留第一个文件的相关元数据，除了可能影响压制时间戳参数之外，对普通用户应该没啥太大用处"
            }, {
              default: withCtx(() => _cache[8] || (_cache[8] = [
                createTextVNode(" 保留元数据 ")
              ])),
              _: 1
            }, 8, ["checked"])
          ])
        ])
      ]);
    };
  }
});
const VideoMerge = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0cdde010"]]);
export {
  VideoMerge as default
};
