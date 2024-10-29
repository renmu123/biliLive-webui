import { d as defineComponent, r as ref, c as createBlock, u as useRouter, o as openBlock, w as withCtx, a as createVNode, b as unref, i as isRef, e as createBaseVNode, f as createTextVNode, g as api, B as Button, _ as __unplugin_components_2$1 } from "./index-BdK_bIY-.js";
import { c as common } from "./common-BoyrrMWo.js";
import { u as useNotification } from "./use-notification-Bd6vXVK5.js";
import { _ as __unplugin_components_2 } from "./Input-B9R9uvsi.js";
import { _ as __unplugin_components_4 } from "./Space-DiCJhQLR.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CeIKdxzx.js";
import "./Suffix-BPiqXR0G.js";
const _hoisted_1 = { style: { "gap": "10px", "display": "flex" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const notice = useNotification();
    const router = useRouter();
    const api$1 = ref("");
    const key = ref("");
    const login = async () => {
      if (!api$1.value || !key.value) {
        notice.error({ title: "请输入API地址和密钥", duration: 1e3 });
        return;
      }
      await common.versionTest(api$1.value, key.value);
      window.localStorage.setItem("api", api$1.value);
      window.localStorage.setItem("key", key.value);
      router.push({ name: "Main" });
      api.defaults.baseURL = api$1.value;
    };
    const test = async () => {
      if (!api$1.value || !key.value) {
        notice.error({ title: "请输入API地址和密钥", duration: 1e3 });
        return;
      }
      try {
        const version = await common.versionTest(api$1.value, key.value);
        notice.success({ title: "成功", content: `接口版本为：${version}`, duration: 5e3 });
      } catch (error) {
        notice.error({ title: "无法连接，请检查配置", duration: 5e3 });
      }
    };
    const apiStorage = window.localStorage.getItem("api");
    const keyStorage = window.localStorage.getItem("key");
    api$1.value = apiStorage || "";
    key.value = keyStorage || "";
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_2;
      const _component_n_button = Button;
      const _component_n_space = __unplugin_components_4;
      const _component_n_card = __unplugin_components_2$1;
      return openBlock(), createBlock(_component_n_card, { class: "login-card" }, {
        default: withCtx(() => [
          createVNode(_component_n_space, {
            vertical: "",
            style: { "text-align": "center" }
          }, {
            default: withCtx(() => [
              createVNode(_component_n_input, {
                value: unref(api$1),
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(api$1) ? api$1.value = $event : null),
                placeholder: "请输入API地址，如http://127.0.0.1:18010"
              }, null, 8, ["value"]),
              createVNode(_component_n_input, {
                value: unref(key),
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(key) ? key.value = $event : null),
                placeholder: "密钥"
              }, null, 8, ["value"]),
              _cache[4] || (_cache[4] = createBaseVNode("p", null, "接口最低1.6.0如果遇到功能无法访问，请尝试更新至最新版", -1)),
              _cache[5] || (_cache[5] = createTextVNode(" 有个github链接 ")),
              createBaseVNode("div", _hoisted_1, [
                createVNode(_component_n_button, {
                  type: "primary",
                  style: { "flex": "1" },
                  onClick: test
                }, {
                  default: withCtx(() => _cache[2] || (_cache[2] = [
                    createTextVNode("联通测试")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "primary",
                  style: { "flex": "1" },
                  onClick: login
                }, {
                  default: withCtx(() => _cache[3] || (_cache[3] = [
                    createTextVNode("确认")
                  ])),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ce9ff6cf"]]);
export {
  index as default
};
