import { _ as _sfc_main$1 } from "./FileSelect.vue_vue_type_script_setup_true_lang-MugdBD0X.js";
import { B as BiliSetting, A as AppendVideoDialog } from "./BiliSetting-CpUCU6Ds.js";
import { a as useBili } from "./index-DrmsQ8d7.js";
import { b as useUserInfoStore, e as useAppConfig } from "./index-CEMlR3u9.js";
import { d as defineComponent, al as storeToRefs, p as computed, r as ref, aA as onActivated, aB as onDeactivated, as as onUnmounted, ah as createElementBlock, e as createBaseVNode, b as unref, am as createCommentVNode, a as createVNode, w as withCtx, i as isRef, B as Button, o as openBlock, f as createTextVNode } from "./index--WEAc-yU.js";
import { b as bili } from "./bili-CEzfPkaF.js";
import { h as hotkeys } from "./hotkeys.esm-CGdGWlcN.js";
import { d as deepRaw } from "./index-7WYu9wih.js";
import { u as useNotification } from "./use-notification-kPOG22iR.js";
import { a as toReactive } from "./index-C4JkIIiP.js";
import { _ as __unplugin_components_1 } from "./Divider-BFHxE5jd.js";
import "./_plugin-vue_export-helper-BTOCZhDw.js";
import "./filenamify-DOXWXCz-.js";
import "./showDirectoryDialog-WwNRhPTU.js";
import "./common-BSj9xfrx.js";
import "./Suffix-BQ4ungoP.js";
import "./Input-e5p23sTB.js";
import "./Select-BJZLKoNA.js";
import "./utils-gbHn4zNK.js";
import "./Popover-BC17UgGB.js";
import "./create-ref-setter-DH9gVfAq.js";
import "./Tip.vue_vue_type_script_setup_true_lang-CneJYjyB.js";
import "./FormItem-C0YLffRX.js";
import "./Space-TxRUr9lU.js";
import "./RadioGroup-CQ9oU1B4.js";
import "./Cascader-yfeRzFJx.js";
import "./CloseOutline-UsA4hmla.js";
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
    const isWeb = computed(() => window.isWeb);
    const options = toReactive(
      computed({
        get: () => appConfig.value.tool.upload,
        set: (value) => {
          appConfig.value.tool.upload = value;
        }
      })
    );
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
      await bili.validUploadParams(deepRaw(presetOptions.value.config));
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
        vid: Number(aid.value)
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
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode(" 添加 ")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            disabled: unref(isWeb),
            onClick: upload
          }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode(" 立即上传 ")
            ])),
            _: 1
          }, 8, ["disabled"]),
          createVNode(_component_n_button, {
            type: "primary",
            disabled: unref(isWeb),
            onClick: _cache[0] || (_cache[0] = ($event) => appendVideoVisible.value = true)
          }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createTextVNode(" 续传 ")
            ])),
            _: 1
          }, 8, ["disabled"])
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
