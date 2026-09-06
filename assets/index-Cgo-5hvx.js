import { d as defineComponent, r as ref, c as createElementBlock, a as createVNode, b as createStaticVNode, w as withCtx, _ as __unplugin_components_3, F as Fragment, u as useRouter, o as openBlock, e as createBaseVNode, t as toDisplayString, f as unref, g as createBlock, h as createCommentVNode, i as isRef, B as Button, j as createTextVNode, k as api } from "./index-CB8xvhFr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { c as common } from "./common-1CgNZfMf.js";
import { u as useNotification } from "./use-notification-Bzrm1lu9.js";
import { _ as __unplugin_components_2 } from "./Space-Dcg2rQj1.js";
import { _ as __unplugin_components_2$1 } from "./Input-C3jgSm1V.js";
const _hoisted_1 = { style: { "text-align": "center" } };
const _hoisted_2 = { style: { "gap": "10px", "display": "flex" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const notice = useNotification();
    const router = useRouter();
    const api$1 = ref("");
    const key = ref("");
    const login = async () => {
      const confirm = await test();
      if (!confirm) return;
      window.localStorage.setItem("api", api$1.value);
      window.localStorage.setItem("key", key.value);
      router.push({ name: "Home" });
      api.defaults.baseURL = api$1.value;
    };
    const test = async () => {
      if (!api$1.value || !key.value) {
        notice.error({ title: "请输入API地址和密钥", duration: 1e3 });
        return;
      }
      try {
        const serverVersion = await common.versionTest(api$1.value, key.value);
        if (serverVersion.includes('id="app"')) {
          notice.error({ title: "不要使用前端地址啊！！", duration: 1e3 });
          return;
        }
        const webVersion = "3.21.0";
        if (serverVersion != webVersion) {
          notice.warning({
            title: "版本不一致，请尽量保存一致，否则无法保证功能正常",
            content: `接口版本为：${serverVersion}，网页版本为：${webVersion}`,
            duration: 5e3
          });
        } else {
          notice.success({
            title: "成功",
            content: `接口版本为：${serverVersion}`,
            duration: 5e3
          });
        }
        return true;
      } catch (error) {
        if (error === "Forbidden") {
          notice.error({ title: "密钥错误", duration: 5e3 });
          return;
        }
        notice.error({ title: "无法连接，请检查配置，API地址可能有误", duration: 5e3 });
        return false;
      }
    };
    api$1.value = `${window.location.protocol}//${window.location.hostname}:18010`;
    const isFullstack = ref(window.isFullstack);
    if (window.localStorage.getItem("api")) {
      window.localStorage.removeItem("api");
      window.location.reload();
    }
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_button = Button;
      const _component_n_space = __unplugin_components_2;
      const _component_n_card = __unplugin_components_3;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_n_card, { class: "login-card" }, {
          default: withCtx(() => [
            createBaseVNode("h3", _hoisted_1, toDisplayString(unref(isFullstack) ? "请配置密钥进行登录" : "请配置API地址和密钥进行登录"), 1),
            createVNode(_component_n_space, {
              vertical: "",
              style: { "text-align": "center" }
            }, {
              default: withCtx(() => [
                !unref(isFullstack) ? (openBlock(), createBlock(_component_n_input, {
                  key: 0,
                  value: unref(api$1),
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(api$1) ? api$1.value = $event : null),
                  placeholder: "请输入API地址，如http://127.0.0.1:18010"
                }, null, 8, ["value"])) : createCommentVNode("", true),
                createVNode(_component_n_input, {
                  value: unref(key),
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(key) ? key.value = $event : null),
                  placeholder: "密钥",
                  type: "password"
                }, null, 8, ["value"]),
                createBaseVNode("div", _hoisted_2, [
                  createVNode(_component_n_button, {
                    type: "warning",
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
        }),
        _cache[4] || (_cache[4] = createStaticVNode('<a href="https://github.com/renmu123/biliLive-tools" target="_blank" class="github-corner" aria-label="View source on Github" data-v-70ee8398><svg viewBox="0 0 250 250" aria-hidden="true" data-v-70ee8398><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" data-v-70ee8398></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin:130px 106px;" class="octo-arm" data-v-70ee8398></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body" data-v-70ee8398></path></svg></a>', 1))
      ], 64);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-70ee8398"]]);
export {
  index as default
};
