import { d as defineComponent, al as mergeModels, am as useModel, r as ref, x as computed, ax as onMounted, as as useThemeStore, g as createBlock, w as withCtx, a as createVNode, _ as __unplugin_components_3, e as createBaseVNode, aB as withKeys, f as unref, i as isRef, c as createElementBlock, h as createCommentVNode, ao as renderList, F as Fragment, j as createTextVNode, t as toDisplayString, B as Button, ar as __unplugin_components_3$1, c6 as dateZhCN, c7 as zhCN, c8 as __unplugin_components_4, o as openBlock, ap as normalizeClass, c9 as createApp } from "./index-CB8xvhFr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { c as common } from "./common-1CgNZfMf.js";
import { a as useStorage } from "./index-CMOU2boc.js";
import { _ as __unplugin_components_2 } from "./Input-C3jgSm1V.js";
const _hoisted_1 = { class: "file-browser-content" };
const _hoisted_2 = { class: "file-list" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "file-name" };
const _hoisted_5 = {
  key: 0,
  class: "file-size"
};
const _hoisted_6 = { style: { "display": "flex", "justify-content": "space-between" } };
const _hoisted_7 = { style: { "flex": "1" } };
const _hoisted_8 = { style: { "flex": "none" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FileBrowserDialog",
  props: /* @__PURE__ */ mergeModels({
    type: { default: "file" },
    multi: { type: Boolean, default: false },
    exts: { default: () => [] },
    extension: { default: "" },
    defaultPath: { default: "" },
    close: { type: Function, default: () => {
    } },
    confirm: { type: Function, default: () => {
    } }
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  }),
  emits: ["update:visible"],
  setup(__props) {
    const showModal = useModel(__props, "visible");
    const props = __props;
    const files = ref([]);
    const currentPath = useStorage("file-store", "/");
    const filename = ref("");
    const selectedFiles = ref([]);
    const parentPath = ref();
    let runCount = 0;
    const fetchFiles = async () => {
      selectedFiles.value = [];
      const typeMap = {
        file: "file",
        directory: "directory",
        save: "directory"
      };
      const res = await common.getFiles({
        path: currentPath.value,
        exts: props.exts,
        type: typeMap[props.type]
      }).catch((err) => {
        runCount++;
        currentPath.value = "/";
        if (runCount > 4) {
          throw err;
        }
        fetchFiles();
        throw err;
      });
      runCount = 0;
      files.value = res.list;
      parentPath.value = res.parent;
    };
    const confirmText = computed(() => {
      if (props.type === "directory") {
        return "选择文件夹";
      } else if (props.type === "save") {
        return "保存";
      } else if (props.type === "file") {
        return "打开";
      } else {
        return "确定";
      }
    });
    const showFileSize = computed(() => props.type === "file");
    const formatFileSize = (size) => {
      if (typeof size !== "number" || Number.isNaN(size) || size < 0) {
        return "";
      }
      if (size < 1024) {
        return `${size} B`;
      }
      const units = ["KB", "MB", "GB", "TB"];
      let value = size / 1024;
      let unitIndex = 0;
      while (value >= 1024 && unitIndex < units.length - 1) {
        value /= 1024;
        unitIndex++;
      }
      return `${value.toFixed(value < 10 ? 1 : 0)} ${units[unitIndex]}`;
    };
    const openDirectory = (file) => {
      currentPath.value = file.path;
      fetchFiles();
    };
    const goUpDirectory = () => {
      currentPath.value = parentPath.value || "/";
      fetchFiles();
    };
    const selectFile = (file) => {
      if (props.type === "file" && file.type === "directory") {
        openDirectory(file);
        return;
      }
      if (props.type !== file.type) return;
      if (props.multi) {
        if (selectedFiles.value.includes(file.path)) {
          selectedFiles.value = selectedFiles.value.filter((path) => path !== file.path);
        } else {
          selectedFiles.value = [...selectedFiles.value, file.path];
        }
      } else {
        selectedFiles.value = [file.path];
      }
    };
    const closeDialog = () => {
      showModal.value = false;
      props.close();
    };
    const confirm = async () => {
      let result = selectedFiles.value;
      if (props.type === "directory" && !result.length) {
        result = [currentPath.value];
      } else if (props.type === "save") {
        if (!filename.value) {
          return;
        }
        const filePath = await common.fileJoin(currentPath.value, filename.value);
        result = [filePath + `.${props.extension}`];
      }
      showModal.value = false;
      props.confirm(result);
    };
    onMounted(() => {
      if (props.defaultPath) {
        if (window.path.isAbsolute(props.defaultPath)) {
          currentPath.value = window.path.dirname(props.defaultPath);
        }
        filename.value = window.path.basename(
          props.defaultPath,
          window.path.extname(props.defaultPath)
        );
      }
      fetchFiles();
    });
    const themeStore = useThemeStore();
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_2;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_3;
      const _component_n_modal = __unplugin_components_3$1;
      const _component_n_config_provider = __unplugin_components_4;
      return openBlock(), createBlock(_component_n_config_provider, {
        theme: unref(themeStore).themeUI,
        locale: unref(zhCN),
        "date-locale": unref(dateZhCN)
      }, {
        default: withCtx(() => [
          createVNode(_component_n_modal, {
            show: showModal.value,
            "onUpdate:show": _cache[3] || (_cache[3] = ($event) => showModal.value = $event),
            "transform-origin": "center",
            "auto-focus": false
          }, {
            default: withCtx(() => [
              createVNode(_component_n_card, {
                style: { "width": "800px" },
                title: "文件浏览器",
                bordered: false
              }, {
                footer: withCtx(() => [
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("div", _hoisted_7, [
                      props.type === "save" ? (openBlock(), createBlock(_component_n_input, {
                        key: 0,
                        value: unref(filename),
                        "onUpdate:value": _cache[2] || (_cache[2] = ($event) => isRef(filename) ? filename.value = $event : null),
                        placeholder: "请输入文件名",
                        onKeyup: withKeys(confirm, ["enter"])
                      }, {
                        suffix: withCtx(() => [
                          createTextVNode(toDisplayString(props.extension ? `.${props.extension}` : ""), 1)
                        ]),
                        _: 1
                      }, 8, ["value"])) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_8, [
                      createVNode(_component_n_button, { onClick: closeDialog }, {
                        default: withCtx(() => _cache[4] || (_cache[4] = [
                          createTextVNode("取消")
                        ])),
                        _: 1
                      }),
                      createVNode(_component_n_button, {
                        disabled: !unref(selectedFiles),
                        type: "primary",
                        style: { "margin-left": "10px" },
                        onClick: confirm
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(confirmText)), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ])
                ]),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("div", null, [
                      createVNode(_component_n_input, {
                        value: unref(currentPath),
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(currentPath) ? currentPath.value = $event : null),
                        placeholder: "请输入文件夹路径",
                        onKeyup: _cache[1] || (_cache[1] = withKeys(($event) => openDirectory({ path: unref(currentPath) }), ["enter"]))
                      }, null, 8, ["value"])
                    ]),
                    createBaseVNode("ul", _hoisted_2, [
                      unref(currentPath) && unref(currentPath) !== "/" ? (openBlock(), createElementBlock("li", {
                        key: 0,
                        onClick: goUpDirectory
                      }, "上一层")) : createCommentVNode("", true),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(files), (file, index) => {
                        return openBlock(), createElementBlock("li", {
                          key: index,
                          class: normalizeClass(["file", { selected: unref(selectedFiles).includes(file.path) }]),
                          onClick: ($event) => selectFile(file)
                        }, [
                          createBaseVNode("span", _hoisted_4, toDisplayString(file.type === "directory" ? "📁" : "📄") + " " + toDisplayString(file.name), 1),
                          unref(showFileSize) && file.type === "file" ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(formatFileSize(file.size)), 1)) : createCommentVNode("", true)
                        ], 10, _hoisted_3);
                      }), 128))
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["show"])
        ]),
        _: 1
      }, 8, ["theme", "locale", "date-locale"]);
    };
  }
});
const FileBrowserDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f8f08746"]]);
async function showDirectoryDialog(options = {}) {
  return new Promise((resolve) => {
    const mountNode = document.createElement("div");
    let dialogApp = createApp(FileBrowserDialog, {
      visible: true,
      ...options,
      close: () => {
        if (dialogApp) {
          dialogApp.unmount();
          document.body.removeChild(mountNode);
          dialogApp = void 0;
          resolve(void 0);
        }
      },
      confirm: (path) => {
        resolve(path);
        dialogApp?.unmount();
        document.body.removeChild(mountNode);
        dialogApp = void 0;
      }
    });
    document.body.appendChild(mountNode);
    dialogApp.mount(mountNode);
  });
}
export {
  showDirectoryDialog as s
};
