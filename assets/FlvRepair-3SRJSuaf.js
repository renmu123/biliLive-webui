import { h as hotkeys } from "./hotkeys.esm-BrStqqkp.js";
import { F as FileSelect } from "./FileSelect-CgztukHO.js";
import { d as useAppConfig, t as task } from "./index-FWk7a7hG.js";
import { d as defineComponent, an as storeToRefs, r as ref, x as computed, aC as onActivated, aD as onDeactivated, aE as onUnmounted, c as createElementBlock, e as createBaseVNode, a as createVNode, h as createCommentVNode, f as unref, w as withCtx, B as Button, i as isRef, j as createTextVNode, o as openBlock } from "./index-CB8xvhFr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { s as showDirectoryDialog } from "./fileSystem-DjZBa11j.js";
import { F as FolderOpenOutline } from "./FolderOpenOutline-vqwY7EUo.js";
import { u as useNotification } from "./use-notification-Bzrm1lu9.js";
import { b as toReactive } from "./index-CMOU2boc.js";
import { _ as __unplugin_components_5, a as __unplugin_components_3 } from "./RadioGroup-CJq397k5.js";
import { _ as __unplugin_components_2 } from "./Space-Dcg2rQj1.js";
import { _ as __unplugin_components_2$1 } from "./Input-C3jgSm1V.js";
import { N as NIcon } from "./Icon-D1o4HjX4.js";
import "./EditableText-qBZLWFoX.js";
import "./common-1CgNZfMf.js";
import "./index-guw4y6OO.js";
import "./showDirectoryDialog-CbG0Fkj3.js";
import "./text-BHgaUKrH.js";
import "./_getTag-22mR82vJ.js";
const _hoisted_1 = {
  class: "center",
  style: { "margin-bottom": "20px", "display": "flex", "align-items": "center", "justify-content": "center", "gap": "5px" }
};
const _hoisted_2 = {
  class: "flex align-center column",
  style: { "margin-top": "10px" }
};
const _hoisted_3 = { style: { "margin-top": "10px" } };
const _hoisted_4 = { style: { "text-align": "center", "margin-bottom": "10px" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "FlvRepair"
  },
  __name: "FlvRepair",
  setup(__props) {
    const notice = useNotification();
    const { appConfig } = storeToRefs(useAppConfig());
    const fileList = ref([]);
    const options = toReactive(
      computed({
        get: () => appConfig.value.tool.flvRepair,
        set: (value) => {
          appConfig.value.tool.flvRepair = value;
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
      for (const item of fileList.value) {
        try {
          task.flvRepair(item.path, item.title, options);
          notice.warning({
            title: `已加入任务，可在任务队列中查看进度`,
            duration: 1e3
          });
        } catch (err) {
          notice.error({
            title: err,
            duration: 1e3
          });
        }
      }
      fileList.value = [];
    };
    const fileSelect = ref(null);
    const addVideo = async () => {
      fileSelect.value?.select();
    };
    const clear = () => {
      fileList.value = [];
    };
    async function getDir() {
      let dir = await showDirectoryDialog({
        defaultPath: options.savePath
      });
      if (!dir) return;
      options.savePath = dir;
      options.saveRadio = 2;
    }
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_radio = __unplugin_components_3;
      const _component_n_radio_group = __unplugin_components_5;
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_icon = NIcon;
      const _component_n_space = __unplugin_components_2;
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
          createVNode(_component_n_button, {
            type: "primary",
            onClick: convert,
            title: "立即修复(ctrl+enter)"
          }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode(" 立即修复 ")
            ])),
            _: 1
          })
        ]),
        createVNode(FileSelect, {
          ref_key: "fileSelect",
          ref: fileSelect,
          modelValue: unref(fileList),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(fileList) ? fileList.value = $event : null),
          extensions: ["flv"]
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_2, [
          _cache[9] || (_cache[9] = createBaseVNode("div", null, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_n_radio_group, {
                value: unref(options).type,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(options).type = $event),
                class: "radio-group"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_radio, { value: "bililive" }, {
                    default: withCtx(() => _cache[6] || (_cache[6] = [
                      createTextVNode("录播姬")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_radio, { value: "mesio" }, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode("mesio")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            createVNode(_component_n_radio_group, {
              value: unref(options).saveRadio,
              "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(options).saveRadio = $event)
            }, {
              default: withCtx(() => [
                createVNode(_component_n_space, { class: "flex align-center column" }, {
                  default: withCtx(() => [
                    createVNode(_component_n_radio, { value: 1 }, {
                      default: withCtx(() => _cache[8] || (_cache[8] = [
                        createTextVNode(" 保存到原始文件夹 ")
                      ])),
                      _: 1
                    }),
                    createVNode(_component_n_radio, { value: 2 }),
                    createVNode(_component_n_input, {
                      value: unref(options).savePath,
                      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).savePath = $event),
                      placeholder: "选择文件夹",
                      style: { "width": "300px" },
                      title: unref(options).savePath
                    }, null, 8, ["value", "title"]),
                    createVNode(_component_n_icon, {
                      size: "30",
                      style: { "margin-left": "-10px" },
                      class: "pointer",
                      onClick: getDir
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(FolderOpenOutline))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])
          ])
        ])
      ]);
    };
  }
});
const FlvRepair = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bc1af375"]]);
export {
  FlvRepair as default
};
