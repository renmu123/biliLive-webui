import { d as defineComponent, al as mergeModels, am as useModel, r as ref, as as useThemeStore, x as computed, Y as watch, g as createBlock, o as openBlock, w as withCtx, a as createVNode, ar as __unplugin_components_3, _ as __unplugin_components_3$1, h as createCommentVNode, aB as withKeys, f as unref, i as isRef, j as createTextVNode, t as toDisplayString, e as createBaseVNode, B as Button, c6 as dateZhCN, c7 as zhCN, c8 as __unplugin_components_4, aq as nextTick, c9 as createApp } from "./index-CB8xvhFr.js";
import { _ as __unplugin_components_2 } from "./Input-C3jgSm1V.js";
import { N as NText } from "./text-BHgaUKrH.js";
const _hoisted_1 = { style: { "display": "flex", "justify-content": "flex-end", "gap": "12px" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InputDialog",
  props: /* @__PURE__ */ mergeModels({
    title: { default: "输入" },
    placeholder: { default: "请输入内容" },
    defaultValue: { default: "" },
    type: { default: "text" },
    maxlength: { default: void 0 },
    showCount: { type: Boolean, default: false },
    rows: { default: 3 },
    required: { type: Boolean, default: true },
    errorMessage: { default: "请输入内容" },
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
    const inputValue = ref(props.defaultValue);
    const inputRef = ref();
    const showError = ref(false);
    const currentErrorMessage = ref("");
    const themeStore = useThemeStore();
    const inputType = computed(() => {
      if (props.type === "textarea") {
        return "textarea";
      }
      if (props.type === "password") {
        return "password";
      }
      return "text";
    });
    watch(showModal, (newVal) => {
      if (newVal) {
        nextTick(() => {
          inputRef.value?.focus();
        });
      }
    });
    watch(inputValue, () => {
      if (showError.value) {
        showError.value = false;
      }
    });
    const handleClose = () => {
      props.close();
      showModal.value = false;
    };
    const handleConfirm = () => {
      if (props.required && (!inputValue.value || inputValue.value.trim() === "")) {
        showError.value = true;
        currentErrorMessage.value = props.errorMessage;
        return;
      }
      props.confirm(inputValue.value);
      showModal.value = false;
    };
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_2;
      const _component_n_text = NText;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_3$1;
      const _component_n_modal = __unplugin_components_3;
      const _component_n_config_provider = __unplugin_components_4;
      return openBlock(), createBlock(_component_n_config_provider, {
        theme: unref(themeStore).themeUI,
        locale: unref(zhCN),
        "date-locale": unref(dateZhCN)
      }, {
        default: withCtx(() => [
          createVNode(_component_n_modal, {
            show: showModal.value,
            "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showModal.value = $event),
            "transform-origin": "center",
            "mask-closable": false
          }, {
            default: withCtx(() => [
              createVNode(_component_n_card, {
                style: { "width": "400px" },
                title: _ctx.title,
                bordered: false
              }, {
                footer: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(_component_n_button, { onClick: handleClose }, {
                      default: withCtx(() => _cache[2] || (_cache[2] = [
                        createTextVNode("取消")
                      ])),
                      _: 1
                    }),
                    createVNode(_component_n_button, {
                      type: "primary",
                      onClick: handleConfirm
                    }, {
                      default: withCtx(() => _cache[3] || (_cache[3] = [
                        createTextVNode("确认")
                      ])),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    ref_key: "inputRef",
                    ref: inputRef,
                    value: unref(inputValue),
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(inputValue) ? inputValue.value = $event : null),
                    type: unref(inputType),
                    placeholder: _ctx.placeholder,
                    maxlength: _ctx.maxlength,
                    "show-count": _ctx.showCount,
                    rows: _ctx.rows,
                    status: unref(showError) ? "error" : void 0,
                    clearable: "",
                    onKeyup: withKeys(handleConfirm, ["enter"])
                  }, null, 8, ["value", "type", "placeholder", "maxlength", "show-count", "rows", "status"]),
                  unref(showError) ? (openBlock(), createBlock(_component_n_text, {
                    key: 0,
                    type: "error",
                    style: { "font-size": "12px", "margin-top": "4px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(currentErrorMessage)), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          }, 8, ["show"])
        ]),
        _: 1
      }, 8, ["theme", "locale", "date-locale"]);
    };
  }
});
async function showInput(options = {}) {
  return new Promise((resolve) => {
    const mountNode = document.createElement("div");
    let dialogApp = createApp(_sfc_main, {
      visible: true,
      ...options,
      close: () => {
        resolve(void 0);
        if (dialogApp) {
          dialogApp.unmount();
          document.body.removeChild(mountNode);
          dialogApp = void 0;
        }
      },
      confirm: (value) => {
        resolve(value);
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
  showInput as s
};
