import { d as defineComponent, m as mergeModels, c as useModel, u as useNotification, a as useConfirm, T as useDanmuPreset, s as storeToRefs, X as useStorage, r as ref, w as watch, g as createBlock, h as withCtx, K as __unplugin_components_3, f as openBlock, i as createVNode, k as createBaseVNode, j as unref, q as isRef, l as createTextVNode, p as createCommentVNode, n as createElementBlock, t as withKeys, $ as danmuPreset, v as toRaw, x as cloneDeep, y as uuid, B as __unplugin_components_0, E as __unplugin_components_1, I as Button, G as __unplugin_components_2, J as __unplugin_components_2$1, M as pushScopeId, O as popScopeId, P as _export_sfc } from "./index--gUAYtmw.js";
import { D as DanmuFactorySetting } from "./DanmuFactorySetting-KZCTPVr2.js";
const _withScopeId = (n) => (pushScopeId("data-v-aca8f64f"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "flex",
  style: { "gap": "10px", "align-items": "center" }
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { style: { "flex": "none" } }, "预设", -1));
const _hoisted_3 = { class: "footer" };
const _hoisted_4 = { style: { "text-align": "right" } };
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
  emits: /* @__PURE__ */ mergeModels(["confirm"], ["update:visible", "update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const showModal = useModel(__props, "visible");
    const presetId = useModel(__props, "modelValue");
    const emits = __emit;
    const notice = useNotification();
    const confirmDialog = useConfirm();
    const { getDanmuPresets, getDanmuPreset } = useDanmuPreset();
    const { danmuPresetsOptions } = storeToRefs(useDanmuPreset());
    const simpledMode = useStorage("simpledMode", true);
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
    const deletePreset = async () => {
      const appConfig = await window.api.config.getAll();
      let ids = Object.entries(appConfig.webhook.rooms || {}).map(([, value]) => {
        return value?.danmuPreset;
      });
      ids.push(appConfig.webhook?.danmuPreset);
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
    return (_ctx, _cache) => {
      const _component_n_select = __unplugin_components_0;
      const _component_n_checkbox = __unplugin_components_1;
      const _component_n_button = Button;
      const _component_n_input = __unplugin_components_2;
      const _component_n_card = __unplugin_components_2$1;
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
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_n_checkbox, {
                  checked: unref(simpledMode),
                  "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => isRef(simpledMode) ? simpledMode.value = $event : null),
                  style: { "margin-right": "auto" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 简易配置 ")
                  ]),
                  _: 1
                }, 8, ["checked"]),
                unref(config).id !== "default" ? (openBlock(), createBlock(_component_n_button, {
                  key: 0,
                  ghost: "",
                  quaternary: "",
                  class: "btn",
                  type: "error",
                  onClick: deletePreset
                }, {
                  default: withCtx(() => [
                    createTextVNode("删除")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_n_button, {
                  class: "btn",
                  onClick: close
                }, {
                  default: withCtx(() => [
                    createTextVNode("取消")
                  ]),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "primary",
                  class: "btn",
                  onClick: rename
                }, {
                  default: withCtx(() => [
                    createTextVNode("重命名")
                  ]),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "primary",
                  class: "btn",
                  onClick: saveAs
                }, {
                  default: withCtx(() => [
                    createTextVNode("另存为")
                  ]),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "primary",
                  class: "btn",
                  onClick: saveConfig
                }, {
                  default: withCtx(() => [
                    createTextVNode("保存并确认")
                  ]),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              props.showPreset ? (openBlock(), createElementBlock("div", _hoisted_1, [
                _hoisted_2,
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
                      createBaseVNode("div", _hoisted_4, [
                        createVNode(_component_n_button, {
                          onClick: _cache[4] || (_cache[4] = ($event) => nameModelVisible.value = false)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("取消")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_n_button, {
                          type: "primary",
                          style: { "margin-left": "10px" },
                          onClick: saveConfirm
                        }, {
                          default: withCtx(() => [
                            createTextVNode("确认")
                          ]),
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
const DanmuFactorySettingDailog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aca8f64f"]]);
export {
  DanmuFactorySettingDailog as D
};
