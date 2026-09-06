import { d as draggable, M as MoveIcon, e as editableText, C as CloseIcon } from "./EditableText-qBZLWFoX.js";
import { c as filenamify, u as uuid, a as supportedVideoExtensions } from "./index-guw4y6OO.js";
import { d as defineComponent, al as mergeModels, am as useModel, x as computed, c as createElementBlock, a as createVNode, f as unref, w as withCtx, g as createBlock, h as createCommentVNode, t as toDisplayString, o as openBlock, r as ref, Y as watch, ap as normalizeClass, e as createBaseVNode, j as createTextVNode } from "./index-CB8xvhFr.js";
import { N as NIcon } from "./Icon-D1o4HjX4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { s as showDirectoryDialog } from "./showDirectoryDialog-CbG0Fkj3.js";
import { c as useDropZone } from "./index-CMOU2boc.js";
import { A as ArchiveIcon } from "./hotkeys.esm-BrStqqkp.js";
import { N as NText } from "./text-BHgaUKrH.js";
const _hoisted_1$1 = ["title"];
const _hoisted_2$1 = {
  key: 1,
  style: { "margin-left": "8px" }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PartArea",
  props: /* @__PURE__ */ mergeModels({
    sort: { type: Boolean, default: true },
    placeholder: { default: "请输入文件名" }
  }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const fileList = useModel(__props, "modelValue");
    const props = __props;
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
              class: "draggable",
              title: element.path
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
              createVNode(editableText, {
                modelValue: element.title,
                "onUpdate:modelValue": ($event) => element.title = $event,
                class: "editable-text",
                placeholder: _ctx.placeholder,
                validate,
                update
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
              element.ext ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(element.ext), 1)) : createCommentVNode("", true),
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
            ], 8, _hoisted_1$1))
          ]),
          _: 1
        }, 8, ["modelValue", "options"])
      ]);
    };
  }
});
const PartArea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5f9c3f6f"]]);
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
    extensions: { default: () => supportedVideoExtensions }
  }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const fileList = useModel(__props, "modelValue");
    const props = __props;
    const emits = __emit;
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
      const newFiles = files.filter((file) => {
        return !fileList.value.some((item) => item.path === file);
      }).map((file) => ({
        id: uuid(),
        title: window.path.parse(file).name,
        path: file,
        visible: false,
        ext: window.path.parse(file).ext
      }));
      fileList.value = fileList.value.concat(newFiles);
    };
    watch(
      fileList,
      () => {
        emits("change", fileList.value);
      },
      { deep: true }
    );
    function onDrop(files) {
      if (window.isWeb) return;
      if (files) {
        console.log("拖拽文件：", files);
        const filePaths = Array.from(files).map((file) => window.api.common.getPathForFile(file));
        const newFiles = filePaths.filter((file) => {
          if (fileList.value.some((item) => item.path === file)) return false;
          if (props.extensions && Array.isArray(props.extensions) && props.extensions.includes("*")) {
            return true;
          }
          const ext = window.path.extname(file).slice(1).toLowerCase();
          return props.extensions.some((allowedExt) => allowedExt.toLowerCase() === ext);
        }).map((file) => ({
          id: uuid(),
          title: window.path.parse(file).name,
          path: file,
          visible: false,
          ext: window.path.parse(file).ext
        }));
        fileList.value = fileList.value.concat(newFiles);
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
          placeholder: props.inputPlaceholder
        }, null, 8, ["modelValue", "sort", "placeholder"])) : (openBlock(), createElementBlock("div", {
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
const FileSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-56bbf2ed"]]);
export {
  FileSelect as F
};
