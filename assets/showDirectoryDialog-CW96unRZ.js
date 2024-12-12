import { d as defineComponent, af as mergeModels, ag as useModel, r as ref, C as onMounted, dw as useOsTheme, l as computed, o as openBlock, ai as createBlock, w as withCtx, a as createVNode, f as createBaseVNode, g as createTextVNode, e as unref, am as toDisplayString, c as createElementBlock, aj as createCommentVNode, ak as renderList, al as normalizeClass, F as Fragment, dx as zhCN, dy as dateZhCN, dz as darkTheme, dA as lightTheme, B as Button, _ as __unplugin_components_2, an as __unplugin_components_3, dB as __unplugin_components_3$1, bb as createApp } from "./index-B3txP6HV.js";
import { c as common } from "./common-BAA1HpBD.js";
import { a as useStorage } from "./index-CNQhkSN1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-BI19-qja.js";
const _hoisted_1 = { class: "file-browser-content" };
const _hoisted_2 = { class: "file-list" };
const _hoisted_3 = ["onClick", "onDblclick"];
const _hoisted_4 = { style: { "text-align": "right" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FileBrowserDialog",
  props: /* @__PURE__ */ mergeModels({
    type: { default: "file" },
    multi: { type: Boolean, default: false },
    exts: { default: () => [] },
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
    const selectedFiles = ref([]);
    const parentPath = ref();
    let runCount = 0;
    const fetchFiles = async () => {
      selectedFiles.value = [];
      const res = await common.getFiles({
        path: currentPath.value,
        exts: props.exts,
        type: props.type
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
    const openDirectory = (file) => {
      currentPath.value = file.path;
      fetchFiles();
    };
    const goUpDirectory = () => {
      currentPath.value = parentPath.value;
      fetchFiles();
    };
    const selectFile = (file) => {
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
    const confirm = () => {
      showModal.value = false;
      props.confirm(selectedFiles.value);
    };
    onMounted(() => {
      fetchFiles();
    });
    const osThemeRef = useOsTheme();
    const theme = computed(() => {
      if (osThemeRef.value === "dark") {
        return darkTheme;
      } else {
        return lightTheme;
      }
    });
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_2;
      const _component_n_modal = __unplugin_components_3;
      const _component_n_config_provider = __unplugin_components_3$1;
      return openBlock(), createBlock(_component_n_config_provider, {
        theme: unref(theme),
        locale: unref(zhCN),
        "date-locale": unref(dateZhCN)
      }, {
        default: withCtx(() => [
          createVNode(_component_n_modal, {
            show: showModal.value,
            "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showModal.value = $event),
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
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(_component_n_button, {
                      style: { "margin-left": "10px" },
                      onClick: closeDialog
                    }, {
                      default: withCtx(() => _cache[1] || (_cache[1] = [
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
                      default: withCtx(() => _cache[2] || (_cache[2] = [
                        createTextVNode("确认")
                      ])),
                      _: 1
                    }, 8, ["disabled"])
                  ])
                ]),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("p", null, "Current Path: " + toDisplayString(unref(currentPath)), 1),
                    createBaseVNode("ul", _hoisted_2, [
                      unref(currentPath) && unref(currentPath) !== "/" ? (openBlock(), createElementBlock("li", {
                        key: 0,
                        onClick: goUpDirectory
                      }, "上一级")) : createCommentVNode("", true),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(files), (file, index) => {
                        return openBlock(), createElementBlock("li", {
                          key: index,
                          class: normalizeClass(["file", { selected: unref(selectedFiles).includes(file.path) }]),
                          onClick: ($event) => selectFile(file),
                          onDblclick: ($event) => file.type === "directory" ? openDirectory(file) : ""
                        }, toDisplayString(file.type === "directory" ? "📁" : "📄") + " " + toDisplayString(file.name), 43, _hoisted_3);
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
const FileBrowserDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d3a4f6a"]]);
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
