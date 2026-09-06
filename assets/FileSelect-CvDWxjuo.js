import { d as draggable, M as MoveIcon, e as editableText, C as CloseIcon } from "./EditableText-qBZLWFoX.js";
import { c as filenamify, u as uuid, a as supportedVideoExtensions } from "./index-guw4y6OO.js";
import { d as defineComponent, al as mergeModels, am as useModel, x as computed, c as createElementBlock, a as createVNode, f as unref, w as withCtx, g as createBlock, h as createCommentVNode, e as createBaseVNode, t as toDisplayString, o as openBlock, r as ref, ap as normalizeClass, j as createTextVNode } from "./index-CB8xvhFr.js";
import { N as NIcon } from "./Icon-D1o4HjX4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { s as showDirectoryDialog } from "./showDirectoryDialog-CbG0Fkj3.js";
import { c as useDropZone } from "./index-CMOU2boc.js";
import { A as ArchiveIcon } from "./hotkeys.esm-BrStqqkp.js";
import { N as NText } from "./text-BHgaUKrH.js";
const _hoisted_1$1 = ["title", "onClick"];
const _hoisted_2$1 = ["onClick"];
const _hoisted_3 = {
  key: 3,
  style: { "margin-left": "8px" }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PartArea",
  props: /* @__PURE__ */ mergeModels({
    sort: { type: Boolean, default: true },
    placeholder: { default: "请输入文件名" },
    disableEdit: { type: Boolean, default: false }
  }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["addDanmaku"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const fileList = useModel(__props, "modelValue");
    const props = __props;
    const emits = __emit;
    const options = computed(() => {
      return {
        handle: ".handle",
        animation: 250
      };
    });
    const remove = (index) => {
      fileList.value.splice(index, 1);
    };
    const validate = (value) => {
      return value.trim() !== "";
    };
    const update = (value) => {
      return filenamify(value.trim(), { replacement: "" });
    };
    const addDanmaku = (index) => {
      emits("addDanmaku", index);
    };
    const removeDanmaku = (index) => {
      fileList.value[index].danmakuPath = "";
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(draggable), {
          modelValue: fileList.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => fileList.value = $event),
          options: unref(options),
          "item-key": "id",
          handle: ".handle"
        }, {
          item: withCtx(({ element, index }) => [
            (openBlock(), createElementBlock("div", {
              key: element.id,
              class: "draggable"
            }, [
              props.sort ? (openBlock(), createBlock(_component_n_icon, {
                key: 0,
                size: "20",
                class: "handle"
              }, {
                default: withCtx(() => [
                  createVNode(unref(MoveIcon))
                ]),
                _: 1
              })) : createCommentVNode("", true),
              element.danmakuPath ? (openBlock(), createElementBlock("span", {
                key: 1,
                title: element.danmakuPath,
                style: { "display": "inline-flex" },
                onClick: ($event) => removeDanmaku(index)
              }, _cache[1] || (_cache[1] = [
                createBaseVNode("svg", {
                  class: "apd-icon apd-toggle-on",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  xmlns: "http://www.w3.org/2000/svg",
                  "data-pointer": "none",
                  viewBox: "0 0 24 24",
                  width: "20",
                  height: "20"
                }, [
                  createBaseVNode("path", {
                    fill: "currentColor",
                    d: "M11.989 4.828c-.47 0-.975.004-1.515.012l-1.71-2.566a1.008 1.008 0 0 0-1.678 1.118l.999 1.5c-.681.018-1.403.04-2.164.068a4.013 4.013 0 0 0-3.83 3.44c-.165 1.15-.245 2.545-.245 4.185 0 1.965.115 3.67.35 5.116a4.012 4.012 0 0 0 3.763 3.363l.906.046c1.205.063 1.808.095 3.607.095a.988.988 0 0 0 0-1.975c-1.758 0-2.339-.03-3.501-.092l-.915-.047a2.037 2.037 0 0 1-1.91-1.708c-.216-1.324-.325-2.924-.325-4.798 0-1.563.076-2.864.225-3.904.14-.977.96-1.713 1.945-1.747 2.444-.087 4.465-.13 6.063-.131 1.598 0 3.62.044 6.064.13.96.034 1.71.81 1.855 1.814.075.524.113 1.962.141 3.065v.002c.01.342.017.65.025.88a.987.987 0 1 0 1.974-.068c-.008-.226-.016-.523-.025-.856v-.027c-.03-1.118-.073-2.663-.16-3.276-.273-1.906-1.783-3.438-3.74-3.507-.9-.032-1.743-.058-2.531-.078l1.05-1.46a1.008 1.008 0 0 0-1.638-1.177l-1.862 2.59c-.38-.004-.744-.007-1.088-.007h-.13Zm.521 4.775h-1.32v4.631h2.222v.847h-2.618v1.078h2.618l.003.678c.36.026.714.163 1.01.407h.11v-1.085h2.694v-1.078h-2.695v-.847H16.8v-4.63h-1.276a8.59 8.59 0 0 0 .748-1.42L15.183 7.8a14.232 14.232 0 0 1-.814 1.804h-1.518l.693-.308a8.862 8.862 0 0 0-.814-1.408l-1.045.352c.297.396.572.847.825 1.364Zm-4.18 3.564.154-1.485h1.98V8.294h-3.2v.98H9.33v1.43H7.472l-.308 3.453h2.277c0 1.166-.044 1.925-.12 2.277-.078.352-.386.528-.936.528-.308 0-.616-.022-.902-.055l.297 1.067.062.005c.285.02.551.04.818.04 1.001-.067 1.562-.419 1.694-1.057.11-.638.176-1.903.176-3.795h-2.2Zm7.458.11v-.858h-1.254v.858h1.254Zm-2.376-.858v.858h-1.199v-.858h1.2Zm-1.199-.946h1.2v-.902h-1.2v.902Zm2.321 0v-.902h1.254v.902h-1.254Z",
                    "clip-rule": "evenodd"
                  }),
                  createBaseVNode("path", {
                    fill: "#00AEEC",
                    "fill-rule": "evenodd",
                    d: "M22.846 14.627a1 1 0 0 0-1.412.075l-5.091 5.703-2.216-2.275-.097-.086-.008-.005a1 1 0 0 0-1.322 1.493l2.963 3.041.093.083.007.005c.407.315 1 .27 1.354-.124l5.81-6.505.08-.102.005-.008a1 1 0 0 0-.166-1.295Z",
                    "clip-rule": "evenodd"
                  })
                ], -1)
              ]), 8, _hoisted_1$1)) : (openBlock(), createElementBlock("span", {
                key: 2,
                title: "点击添加弹幕",
                style: { "display": "inline-flex" },
                onClick: ($event) => addDanmaku(index)
              }, _cache[2] || (_cache[2] = [
                createBaseVNode("svg", {
                  class: "apd-icon apd-toggle-off",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  xmlns: "http://www.w3.org/2000/svg",
                  "data-pointer": "none",
                  viewBox: "0 0 24 24",
                  width: "20",
                  height: "20"
                }, [
                  createBaseVNode("path", {
                    fill: "currentColor",
                    d: "m8.085 4.891-.999-1.499a1.008 1.008 0 0 1 1.679-1.118l1.709 2.566c.54-.008 1.045-.012 1.515-.012h.13c.345 0 .707.003 1.088.007l1.862-2.59a1.008 1.008 0 0 1 1.637 1.177l-1.049 1.46c.788.02 1.631.046 2.53.078 1.958.069 3.468 1.6 3.74 3.507.088.613.13 2.158.16 3.276l.001.027c.01.333.017.63.025.856a.987.987 0 0 1-1.974.069c-.008-.23-.016-.539-.025-.881v-.002c-.028-1.103-.066-2.541-.142-3.065-.143-1.004-.895-1.78-1.854-1.813-2.444-.087-4.466-.13-6.064-.131-1.598 0-3.619.044-6.063.13a2.037 2.037 0 0 0-1.945 1.748c-.15 1.04-.225 2.341-.225 3.904 0 1.874.11 3.474.325 4.798.154.949.95 1.66 1.91 1.708a97.58 97.58 0 0 0 5.416.139.988.988 0 0 1 0 1.975c-2.196 0-3.61-.047-5.513-.141A4.012 4.012 0 0 1 2.197 17.7c-.236-1.446-.351-3.151-.351-5.116 0-1.64.08-3.035.245-4.184A4.013 4.013 0 0 1 5.92 4.96c.761-.027 1.483-.05 2.164-.069Zm4.436 4.707h-1.32v4.63h2.222v.848h-2.618v1.078h2.431a5.01 5.01 0 0 1 3.575-3.115V9.598h-1.276a8.59 8.59 0 0 0 .748-1.42l-1.089-.384a14.232 14.232 0 0 1-.814 1.804h-1.518l.693-.308a8.862 8.862 0 0 0-.814-1.408l-1.045.352c.297.396.572.847.825 1.364Zm-4.18 3.564.154-1.485h1.98V8.289h-3.2v.979h2.067v1.43H7.483l-.308 3.454h2.277c0 1.166-.044 1.925-.12 2.277-.078.352-.386.528-.936.528-.308 0-.616-.022-.902-.055l.297 1.067.062.004c.285.02.551.04.818.04 1.001-.066 1.562-.418 1.694-1.056.11-.638.176-1.903.176-3.795h-2.2Zm7.458.11v-.858h-1.254v.858H15.8Zm-2.376-.858v.858h-1.199v-.858h1.2Zm-1.199-.946h1.2v-.902h-1.2v.902Zm2.321 0v-.902H15.8v.902h-1.254Zm3.517 10.594a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-.002-1.502a2.5 2.5 0 0 1-2.217-3.657l3.326 3.398a2.49 2.49 0 0 1-1.109.259Zm2.5-2.5c0 .42-.103.815-.286 1.162l-3.328-3.401a2.5 2.5 0 0 1 3.614 2.239Z"
                  })
                ], -1)
              ]), 8, _hoisted_2$1)),
              createVNode(editableText, {
                modelValue: element.title,
                "onUpdate:modelValue": ($event) => element.title = $event,
                class: "editable-text",
                placeholder: _ctx.placeholder,
                validate,
                update,
                title: element.videoPath,
                disabled: props.disableEdit
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "title", "disabled"]),
              element.ext ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(element.ext), 1)) : createCommentVNode("", true),
              createVNode(_component_n_icon, {
                style: { "margin-left": "auto" },
                size: "20",
                class: "remove",
                onClick: ($event) => remove(index)
              }, {
                default: withCtx(() => [
                  createVNode(unref(CloseIcon))
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]))
          ]),
          _: 1
        }, 8, ["modelValue", "options"])
      ]);
    };
  }
});
const PartArea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0af4d87e"]]);
const _hoisted_1 = { style: { "margin-bottom": "12px" } };
const _hoisted_2 = {
  key: 0,
  style: { "margin": "8px 0 0 0" }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FileSelect",
  props: /* @__PURE__ */ mergeModels({
    sort: { type: Boolean, default: true },
    inputPlaceholder: { default: "请输入" },
    areaPlaceholder: { default: "请选择视频文件" },
    extensions: { default: () => supportedVideoExtensions },
    disableEdit: { type: Boolean }
  }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const fileList = useModel(__props, "modelValue");
    const props = __props;
    const dropZoneRef = ref(null);
    const select = async () => {
      let files = [];
      if (window.isWeb) {
        files = await showDirectoryDialog({
          type: "file",
          multi: true,
          exts: props.extensions
        });
      } else {
        files = await window.api.openFile({
          multi: true,
          filters: [
            {
              name: "file",
              extensions: props.extensions
            },
            {
              name: "所有文件",
              extensions: ["*"]
            }
          ]
        });
      }
      if (!files) return;
      if (files.length === 0) return;
      handleFiles(files);
    };
    const handleFiles = (files) => {
      const danmuFiles = [];
      const videoFiles = [];
      files.forEach((file) => {
        if (file.endsWith(".xml") || file.endsWith(".ass")) {
          danmuFiles.push(file);
        } else {
          videoFiles.push(file);
        }
      });
      const newFiles = videoFiles.filter((file) => {
        return !fileList.value.some((item) => item.videoPath === file);
      }).map((file) => ({
        id: uuid(),
        title: window.path.parse(file).name,
        videoPath: file,
        danmakuPath: "",
        ext: window.path.parse(file).ext
      }));
      const allFiles = fileList.value.concat(newFiles);
      const danmuItems = danmuFiles.map((file) => {
        return {
          path: file,
          name: window.path.parse(file).name
        };
      });
      if (danmuItems) {
        allFiles.forEach((item) => {
          if (item.danmakuPath) return;
          const videoName = window.path.parse(item.videoPath).name;
          const danmuItem = danmuItems.find((item2) => item2.name === videoName);
          if (danmuItem) {
            item.danmakuPath = danmuItem.path;
          }
        });
      }
      fileList.value = allFiles;
    };
    const addDanmaku = async (index) => {
      let files = [];
      const extensions = ["xml", "ass"];
      if (window.isWeb) {
        files = await showDirectoryDialog({
          type: "file",
          multi: false,
          exts: extensions
        });
      } else {
        files = await window.api.openFile({
          multi: false,
          filters: [
            {
              name: "file",
              extensions
            },
            {
              name: "所有文件",
              extensions: ["*"]
            }
          ]
        });
      }
      console.log("files", files);
      if (!files) return;
      if (files.length === 0) return;
      fileList.value[index].danmakuPath = files[0];
    };
    function onDrop(files) {
      if (window.isWeb) return;
      if (files) {
        const filePaths = Array.from(files).map((file) => window.api.common.getPathForFile(file));
        handleFiles(filePaths);
      }
    }
    function onOver(_files, event) {
      if (window.isWeb) return;
      event.dataTransfer.dropEffect = "copy";
    }
    const { isOverDropZone } = useDropZone(dropZoneRef, {
      onDrop,
      onOver
    });
    __expose({
      select
    });
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_text = NText;
      return openBlock(), createElementBlock("div", {
        ref_key: "dropZoneRef",
        ref: dropZoneRef,
        class: normalizeClass({ dragging: unref(isOverDropZone) }),
        style: { "border": "1px dashed rgb(224, 224, 230)", "border-radius": "4px", "transition": "border-color 0.2s" }
      }, [
        fileList.value.length !== 0 ? (openBlock(), createBlock(PartArea, {
          key: 0,
          modelValue: fileList.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => fileList.value = $event),
          sort: props.sort,
          placeholder: props.inputPlaceholder,
          onAddDanmaku: addDanmaku,
          disableEdit: props.disableEdit
        }, null, 8, ["modelValue", "sort", "placeholder", "disableEdit"])) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(["empty-area", { dragging: unref(isOverDropZone) }]),
          onClick: select
        }, [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_n_icon, {
              size: "48",
              depth: 3
            }, {
              default: withCtx(() => [
                createVNode(unref(ArchiveIcon))
              ]),
              _: 1
            })
          ]),
          createVNode(_component_n_text, { style: { "font-size": "16px" } }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("点击或拖拽文件到该区域")
            ])),
            _: 1
          }),
          props.areaPlaceholder ? (openBlock(), createElementBlock("p", _hoisted_2, toDisplayString(props.areaPlaceholder), 1)) : createCommentVNode("", true)
        ], 2))
      ], 2);
    };
  }
});
const FileSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-78306028"]]);
export {
  FileSelect as F
};
