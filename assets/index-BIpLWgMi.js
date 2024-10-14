import { _ as _sfc_main$1 } from "./FileSelect.vue_vue_type_script_setup_true_lang-DhnYlAqq.js";
import { B as BiliSetting, A as AppendVideoDialog } from "./BiliSetting-CS3JcR01.js";
import { d as defineComponent, s as storeToRefs, U as useUserInfoStore, W as useBili, V as useAppConfig, u as useNotification, r as ref, Q as onActivated, R as onDeactivated, S as onUnmounted, n as createElementBlock, k as createBaseVNode, j as unref, p as createCommentVNode, i as createVNode, h as withCtx, q as isRef, Y as deepRaw, I as Button, f as openBlock, l as createTextVNode } from "./index--gUAYtmw.js";
import { h as hotkeys } from "./hotkeys.esm-1zIhzqwe.js";
import { _ as __unplugin_components_1 } from "./Divider-DnSgvn6o.js";
import "./filenamify-DOXWXCz-.js";
import "./RadioGroup-BP8eQLS8.js";
import "./CloseOutline-2NJFdTs4.js";
const _hoisted_1 = {
  class: "flex justify-center align-center",
  style: { "margin-bottom": "20px", "gap": "10px" }
};
const _hoisted_2 = {
  class: "",
  style: { "margin-top": "30px" }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { userInfo } = storeToRefs(useUserInfoStore());
    const { handlePresetOptions, presetOptions } = useBili();
    const { appConfig } = storeToRefs(useAppConfig());
    const notice = useNotification();
    const options = appConfig.value.tool.upload;
    const fileList = ref([]);
    onActivated(() => {
      hotkeys("ctrl+enter", function() {
        upload();
      });
    });
    onDeactivated(() => {
      hotkeys.unbind();
    });
    onUnmounted(() => {
      hotkeys.unbind();
    });
    const upload = async () => {
      const hasLogin = !!userInfo.value.uid;
      if (!hasLogin) {
        notice.error({
          title: `请点击左侧头像处先进行登录`,
          duration: 1e3
        });
        return;
      }
      if (fileList.value.length === 0) {
        notice.error({
          title: `至少选择一个文件`,
          duration: 1e3
        });
        return;
      }
      await window.api.bili.validUploadParams(deepRaw(presetOptions.value.config));
      notice.info({
        title: `开始上传`,
        duration: 1e3
      });
      const res = await window.api.bili.uploadVideo(
        userInfo.value.uid,
        deepRaw(fileList.value),
        deepRaw(presetOptions.value.config)
      );
      console.log(res);
      fileList.value = [];
    };
    const appendVideoVisible = ref(false);
    const aid = ref();
    const appendVideo = async () => {
      if (!aid.value) {
        return;
      }
      const hasLogin = !!userInfo.value.uid;
      if (!hasLogin) {
        notice.error({
          title: `请点击左侧头像处先进行登录`,
          duration: 1e3
        });
        return;
      }
      if (fileList.value.length === 0) {
        notice.error({
          title: `至少选择一个文件`,
          duration: 1e3
        });
        return;
      }
      notice.info({
        title: `开始上传`,
        duration: 1e3
      });
      await window.api.bili.appendVideo(userInfo.value.uid, deepRaw(fileList.value), {
        ...deepRaw(presetOptions.value.config),
        vid: aid.value
      });
      fileList.value = [];
    };
    const fileSelect = ref(null);
    const addVideo = async () => {
      fileSelect.value?.select();
    };
    const clear = () => {
      fileList.value = [];
    };
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_divider = __unplugin_components_1;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          unref(fileList).length !== 0 ? (openBlock(), createElementBlock("span", {
            key: 0,
            style: { "cursor": "pointer", "color": "#958e8e" },
            onClick: clear
          }, "清空")) : createCommentVNode("", true),
          createVNode(_component_n_button, { onClick: addVideo }, {
            default: withCtx(() => [
              createTextVNode(" 添加 ")
            ]),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            onClick: upload
          }, {
            default: withCtx(() => [
              createTextVNode(" 立即上传 ")
            ]),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => appendVideoVisible.value = true)
          }, {
            default: withCtx(() => [
              createTextVNode(" 续传 ")
            ]),
            _: 1
          })
        ]),
        createVNode(_sfc_main$1, {
          ref_key: "fileSelect",
          ref: fileSelect,
          modelValue: unref(fileList),
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(fileList) ? fileList.value = $event : null)
        }, null, 8, ["modelValue"]),
        createVNode(_component_n_divider),
        createBaseVNode("div", _hoisted_2, [
          createVNode(BiliSetting, {
            modelValue: unref(options).uploadPresetId,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(options).uploadPresetId = $event),
            onChange: unref(handlePresetOptions)
          }, null, 8, ["modelValue", "onChange"])
        ]),
        createVNode(AppendVideoDialog, {
          visible: unref(appendVideoVisible),
          "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => isRef(appendVideoVisible) ? appendVideoVisible.value = $event : null),
          modelValue: unref(aid),
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(aid) ? aid.value = $event : null),
          onConfirm: appendVideo
        }, null, 8, ["visible", "modelValue"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
