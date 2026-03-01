import { d as defineComponent, a2 as mergeModels, a3 as useModel, r as ref, x as computed, c as createElementBlock, af as normalizeStyle, a7 as normalizeClass, f as unref, F as Fragment, a6 as renderList, e as createBaseVNode, a as createVNode, w as withCtx, t as toDisplayString, aB as renderSlot, j as createTextVNode, o as openBlock, aN as withModifiers } from "./index-gjuLIDoI.js";
import { c as useDropZone } from "./index-bqczNda1.js";
import { s as showDirectoryDialog } from "./showDirectoryDialog-CUR2gD_Z.js";
import { o as formatFile } from "./index-BpXg0f34.js";
import { A as ArchiveIcon } from "./hotkeys.esm-CkQxwFRj.js";
import { C as CloseOutline } from "./CloseOutline-DroYSogW.js";
import { N as NIcon } from "./Icon-D2Zo6Coc.js";
import { _ as __unplugin_components_1 } from "./text-CwQ4I63s.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-B1lyReKF.js";
const _hoisted_1 = {
  key: 0,
  class: "files"
};
const _hoisted_2 = { class: "file-content" };
const _hoisted_3 = { class: "name" };
const _hoisted_4 = {
  key: 1,
  class: "empty"
};
const _hoisted_5 = { style: { "margin-bottom": "12px" } };
const _hoisted_6 = {
  key: 0,
  style: { "margin": "8px 0 0 0" }
};
const _hoisted_7 = {
  key: 1,
  style: { "margin": "8px 0 0 0" }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FileArea",
  props: /* @__PURE__ */ mergeModels({
    extensions: { default: () => ["*"] },
    desc: {},
    height: { default: "200px" },
    disabled: { type: Boolean, default: false },
    max: {}
  }, {
    "modelValue": { default: () => [] },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const fileList = useModel(__props, "modelValue");
    const fileSelectArea = ref(null);
    const isWeb = computed(() => window.isWeb);
    const handleFileSelect = async () => {
      if (props.disabled) return;
      let files = [];
      if (isWeb.value) {
        files = await showDirectoryDialog({
          type: "file",
          multi: true,
          exts: props.extensions
        });
      } else {
        files = await window.api.openFile({
          multi: props.max === 1 ? false : true,
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
      let items = files.map(formatFile).filter((file) => !fileList.value.map((item) => item.path).includes(file.path));
      if (props.max) {
        items = items.slice(0, props.max - fileList.value.length);
      }
      fileList.value.push(...items);
      emits("change", fileList.value);
    };
    const removeItem = (index) => {
      if (props.disabled) return;
      fileList.value.splice(index, 1);
      emits("change", fileList.value);
    };
    function onDrop(files) {
      if (window.isWeb) return;
      if (files) {
        let items = Array.from(files).map((file) => formatFile(window.api.common.getPathForFile(file))).filter((file) => !fileList.value.map((item) => item.path).includes(file.path)).filter((file) => {
          if (props.extensions.includes("*")) return true;
          if (props.extensions && props.extensions.length) {
            return props.extensions.includes(file.ext.slice(1));
          }
          return true;
        });
        if (props.max) {
          items = items.slice(0, props.max - fileList.value.length);
        }
        fileList.value.push(...items);
        emits("change", fileList.value);
      }
    }
    const onOver = (_files, event) => {
      if (window.isWeb) return;
      if (props.disabled) {
        event.dataTransfer.dropEffect = "none";
      } else {
        event.dataTransfer.dropEffect = "copy";
      }
      if (fileList.value.length >= props.max) {
        event.dataTransfer.dropEffect = "none";
      } else {
        event.dataTransfer.dropEffect = "copy";
      }
    };
    const { isOverDropZone } = useDropZone(fileSelectArea, {
      onDrop,
      onOver
    });
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_text = __unplugin_components_1;
      return openBlock(), createElementBlock("div", {
        ref_key: "fileSelectArea",
        ref: fileSelectArea,
        class: normalizeClass(["file-selet", {
          dragging: unref(isOverDropZone)
        }]),
        style: normalizeStyle({
          height: props.height,
          cursor: props.disabled ? "not-allowed" : "pointer"
        }),
        onClick: handleFileSelect
      }, [
        fileList.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(fileList.value, (file, index) => {
            return openBlock(), createElementBlock("div", {
              key: file.path,
              class: "file"
            }, [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("span", _hoisted_3, toDisplayString(file.filename), 1),
                createVNode(_component_n_icon, {
                  size: "20",
                  depth: 3,
                  class: normalizeClass(["remove-icon", {
                    "in-progress": props.disabled
                  }]),
                  onClick: withModifiers(($event) => removeItem(index), ["stop"])
                }, {
                  default: withCtx(() => [
                    createVNode(unref(CloseOutline))
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"])
              ])
            ]);
          }), 128))
        ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
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
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode(" 点击或拖拽文件到该区域 ")
            ])),
            _: 1
          }),
          _ctx.desc ? (openBlock(), createElementBlock("p", _hoisted_6, toDisplayString(props.desc), 1)) : (openBlock(), createElementBlock("p", _hoisted_7, [
            renderSlot(_ctx.$slots, "desc", {}, void 0, true)
          ]))
        ]))
      ], 6);
    };
  }
});
const FileArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-afd9751e"]]);
export {
  FileArea as F
};
