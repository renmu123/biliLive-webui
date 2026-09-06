import { d as defineComponent, al as mergeModels, am as useModel, an as storeToRefs, r as ref, Y as watch, g as createBlock, w as withCtx, ar as __unplugin_components_3, a as createVNode, c as createElementBlock, h as createCommentVNode, e as createBaseVNode, f as unref, i as isRef, _ as __unplugin_components_3$1, aB as withKeys, B as Button, j as createTextVNode, au as toRaw, o as openBlock } from "./index-CB8xvhFr.js";
import { a as useStorage } from "./index-CMOU2boc.js";
import { u as usePresetFile, D as DanmuFactorySetting } from "./danmuPreset-wrxB0gYL.js";
import { B as ButtonGroup } from "./ButtonGroup-DKNdEWrH.js";
import { u as useConfirm } from "./index--O4HUYks.js";
import { u as uuid } from "./index-guw4y6OO.js";
import { u as useDanmuPreset, d as useAppConfig, i as danmuPreset, c as cloneDeep } from "./index-FWk7a7hG.js";
import { u as useNotification } from "./use-notification-Bzrm1lu9.js";
import { _ as __unplugin_components_0 } from "./Select-CYnthXY-.js";
import { _ as __unplugin_components_2 } from "./Input-C3jgSm1V.js";
import { _ as __unplugin_components_1 } from "./Checkbox-Buw5q29r.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
const _hoisted_1 = {
  key: 0,
  class: "flex",
  style: { "gap": "10px", "align-items": "center" }
};
const _hoisted_2 = { class: "footer" };
const _hoisted_3 = { style: { "text-align": "right" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DanmuFactorySettingDailog",
  props: /* @__PURE__ */ mergeModels({
    showPreset: { type: Boolean, default: false }
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {},
    "modelValue": { required: true, default: "default" },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["confirm", "cancel"], ["update:visible", "update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const showModal = useModel(__props, "visible");
    const presetId = useModel(__props, "modelValue");
    const emits = __emit;
    const notice = useNotification();
    const confirmDialog = useConfirm();
    const { getDanmuPresets, getDanmuPreset } = useDanmuPreset();
    const { danmuPresetsOptions } = storeToRefs(useDanmuPreset());
    const simpledMode = useStorage("simpledMode", false);
    const config = ref({
      id: "",
      name: "",
      config: {}
    });
    const saveConfig = async () => {
      await danmuPreset.save(toRaw(config.value));
      confirm();
    };
    const confirm = () => {
      getDanmuPresets();
      getDanmuPreset();
      emits("confirm", config.value.config);
      close();
    };
    const close = () => {
      showModal.value = false;
    };
    const cancel = () => {
      close();
      emits("cancel");
    };
    watch(
      () => showModal.value,
      async (val) => {
        if (val) {
          config.value = await danmuPreset.get(presetId.value);
        }
      }
    );
    watch(
      () => presetId.value,
      async (val) => {
        config.value = await danmuPreset.get(val);
      }
    );
    const rename = async () => {
      tempPresetName.value = config.value.name;
      isRename.value = true;
      nameModelVisible.value = true;
    };
    const saveAs = async () => {
      isRename.value = false;
      tempPresetName.value = "";
      nameModelVisible.value = true;
    };
    const { appConfig } = storeToRefs(useAppConfig());
    const deletePreset = async () => {
      let ids = Object.entries(appConfig.value.webhook.rooms || {}).map(([, value]) => {
        return value?.danmuPreset;
      });
      ids.push(appConfig.value.webhook?.danmuPreset);
      ids = ids.filter((id) => id !== void 0 && id !== "");
      const msg = ids.includes(presetId.value) ? "该预设正在被使用中，删除后使用该预设的功能将失效，是否确认删除？" : "是否确认删除该预设？";
      const [status] = await confirmDialog.warning({
        content: msg
      });
      if (!status) return;
      await danmuPreset.remove(presetId.value);
      presetId.value = "default";
      confirm();
    };
    const nameModelVisible = ref(false);
    const tempPresetName = ref("");
    const isRename = ref(false);
    const saveConfirm = async () => {
      if (!tempPresetName.value) {
        notice.warning({
          title: "预设名称不得为空",
          duration: 2e3
        });
        return;
      }
      const preset = cloneDeep(config.value);
      if (!isRename.value) preset.id = uuid();
      preset.name = tempPresetName.value;
      await danmuPreset.save(preset);
      nameModelVisible.value = false;
      notice.success({
        title: "保存成功",
        duration: 1e3
      });
      confirm();
    };
    const actionBtns = ref([
      { label: "另存为", key: "saveAnother" },
      { label: "重命名", key: "rename" },
      { label: "导出", key: "export" },
      { label: "导入", key: "import" }
    ]);
    const { exportPreset, importPreset } = usePresetFile();
    const handleActionClick = async (key) => {
      switch (key) {
        case "saveAnother":
          saveAs();
          break;
        case "rename":
          rename();
          break;
        case "export":
          exportPreset(config.value.config, config.value.name);
          break;
        case "import":
          importPreset();
          break;
        case void 0:
          saveConfig();
          break;
      }
    };
    return (_ctx, _cache) => {
      const _component_n_select = __unplugin_components_0;
      const _component_n_checkbox = __unplugin_components_1;
      const _component_n_button = Button;
      const _component_n_input = __unplugin_components_2;
      const _component_n_card = __unplugin_components_3$1;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[6] || (_cache[6] = ($event) => showModal.value = $event),
        "mask-closable": false,
        "auto-focus": ""
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "calc(100% - 60px)" },
            bordered: false,
            size: "huge",
            role: "dialog",
            "aria-modal": "true",
            class: "card"
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createVNode(_component_n_checkbox, {
                  checked: unref(simpledMode),
                  "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => isRef(simpledMode) ? simpledMode.value = $event : null),
                  style: { "margin-right": "auto" }
                }, {
                  default: withCtx(() => _cache[8] || (_cache[8] = [
                    createTextVNode(" 简易配置 ")
                  ])),
                  _: 1
                }, 8, ["checked"]),
                unref(config).id !== "default" ? (openBlock(), createBlock(_component_n_button, {
                  key: 0,
                  text: "",
                  class: "btn",
                  type: "error",
                  onClick: deletePreset
                }, {
                  default: withCtx(() => _cache[9] || (_cache[9] = [
                    createTextVNode("删除")
                  ])),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_n_button, {
                  class: "btn",
                  onClick: cancel
                }, {
                  default: withCtx(() => _cache[10] || (_cache[10] = [
                    createTextVNode("取消")
                  ])),
                  _: 1
                }),
                createVNode(ButtonGroup, {
                  options: unref(actionBtns),
                  onClick: handleActionClick
                }, {
                  default: withCtx(() => _cache[11] || (_cache[11] = [
                    createTextVNode("保存")
                  ])),
                  _: 1
                }, 8, ["options"])
              ])
            ]),
            default: withCtx(() => [
              props.showPreset ? (openBlock(), createElementBlock("div", _hoisted_1, [
                _cache[7] || (_cache[7] = createBaseVNode("span", { style: { "flex": "none" } }, "预设", -1)),
                createVNode(_component_n_select, {
                  value: presetId.value,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => presetId.value = $event),
                  options: unref(danmuPresetsOptions),
                  placeholder: "选择预设"
                }, null, 8, ["value", "options"])
              ])) : createCommentVNode("", true),
              unref(config).id ? (openBlock(), createBlock(DanmuFactorySetting, {
                key: 1,
                modelValue: unref(config).config,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(config).config = $event),
                "simpled-mode": unref(simpledMode)
              }, null, 8, ["modelValue", "simpled-mode"])) : createCommentVNode("", true),
              createVNode(_component_n_modal, {
                show: unref(nameModelVisible),
                "onUpdate:show": _cache[5] || (_cache[5] = ($event) => isRef(nameModelVisible) ? nameModelVisible.value = $event : null)
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_card, {
                    style: { "width": "600px" },
                    bordered: false,
                    role: "dialog",
                    "aria-modal": "true"
                  }, {
                    footer: withCtx(() => [
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(_component_n_button, {
                          onClick: _cache[4] || (_cache[4] = ($event) => nameModelVisible.value = false)
                        }, {
                          default: withCtx(() => _cache[12] || (_cache[12] = [
                            createTextVNode("取消")
                          ])),
                          _: 1
                        }),
                        createVNode(_component_n_button, {
                          type: "primary",
                          style: { "margin-left": "10px" },
                          onClick: saveConfirm
                        }, {
                          default: withCtx(() => _cache[13] || (_cache[13] = [
                            createTextVNode("确认")
                          ])),
                          _: 1
                        })
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n_input, {
                        value: unref(tempPresetName),
                        "onUpdate:value": _cache[3] || (_cache[3] = ($event) => isRef(tempPresetName) ? tempPresetName.value = $event : null),
                        placeholder: "请输入预设名称",
                        maxlength: "15",
                        onKeyup: withKeys(saveConfirm, ["enter"])
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["show"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const DanmuFactorySettingDailog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-691368e9"]]);
export {
  DanmuFactorySettingDailog as D
};
