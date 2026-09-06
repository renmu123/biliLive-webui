import { F as FileSelect } from "./FileSelect-CgztukHO.js";
import { B as BiliSetting } from "./BiliSetting-Wua-gkDk.js";
import { A as AppendVideoDialog } from "./AppendVideoDialog-0ZIiB-px.js";
import { a as useBili } from "./index--O4HUYks.js";
import { a as useUserInfoStore, d as useAppConfig, j as bili } from "./index-FWk7a7hG.js";
import { d as defineComponent, an as storeToRefs, x as computed, r as ref, aC as onActivated, aD as onDeactivated, aE as onUnmounted, c as createElementBlock, e as createBaseVNode, a as createVNode, h as createCommentVNode, f as unref, w as withCtx, B as Button, i as isRef, j as createTextVNode, o as openBlock, l as h } from "./index-CB8xvhFr.js";
import { d as deepRaw } from "./index-guw4y6OO.js";
import { h as hotkeys } from "./hotkeys.esm-BrStqqkp.js";
import { u as useNotification } from "./use-notification-Bzrm1lu9.js";
import { b as toReactive } from "./index-CMOU2boc.js";
import { _ as __unplugin_components_1 } from "./Checkbox-Buw5q29r.js";
import { _ as __unplugin_components_1$1 } from "./Divider-CA3TQbOA.js";
import "./EditableText-qBZLWFoX.js";
import "./common-1CgNZfMf.js";
import "./_plugin-vue_export-helper-uo42igUt.js";
import "./Icon-D1o4HjX4.js";
import "./showDirectoryDialog-CbG0Fkj3.js";
import "./Input-C3jgSm1V.js";
import "./text-BHgaUKrH.js";
import "./showInput-DT3gy469.js";
import "./Switch-n0tH4Ke1.js";
import "./Popover-D4v8saSe.js";
import "./_getTag-22mR82vJ.js";
import "./Select-CYnthXY-.js";
import "./create-DfXrl36C.js";
import "./InputNumber-DuVe1x-P.js";
import "./Tip.vue_vue_type_script_setup_true_lang-BVeN5TP1.js";
import "./HelpCircleOutline-DC8ljYG3.js";
import "./useBreakpoints-y2ktmuab.js";
import "./RadioGroup-CJq397k5.js";
import "./Space-Dcg2rQj1.js";
import "./DatePicker-bHyidnXI.js";
import "./TimePicker-WQrinlQm.js";
import "./create-ref-setter-slkfdNqs.js";
import "./Forward-C2N4dC5_.js";
import "./Pagination-DTxcX5iK.js";
const _hoisted_1 = {
  class: "flex justify-center align-center",
  style: { "margin-bottom": "20px", "gap": "10px" }
};
const _hoisted_2 = {
  class: "",
  style: { "margin-top": "30px" }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Upload"
  },
  __name: "index",
  setup(__props) {
    const { userInfo } = storeToRefs(useUserInfoStore());
    const { handlePresetOptions, presetOptions } = useBili();
    const appConfigStore = useAppConfig();
    const { appConfig } = storeToRefs(appConfigStore);
    const notice = useNotification();
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
      const uploadConfig = deepRaw(presetOptions.value.config);
      await bili.validUploadParams(uploadConfig);
      const videos = deepRaw(fileList.value);
      await bili.upload({
        uid: userInfo.value.uid,
        videos,
        config: uploadConfig,
        options: {
          removeOriginAfterUploadCheck: options.removeOriginAfterUploadCheck
        }
      });
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
      const uploadConfig = deepRaw(presetOptions.value.config);
      const videos = deepRaw(fileList.value);
      await bili.upload({
        uid: userInfo.value.uid,
        vid: Number(aid.value),
        videos,
        config: {
          ...uploadConfig
        },
        options: {
          removeOriginAfterUploadCheck: options.removeOriginAfterUploadCheck
        }
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
    const biliSettingRef = ref(null);
    const hasNotice = ref(false);
    const notification = useNotification();
    const fileChange = (files) => {
      if (files.length === 0) {
        hasNotice.value = false;
        return;
      }
      if (hasNotice.value) return;
      const name = files[0].title;
      if (biliSettingRef.value?.getTitle() === name) return;
      if (appConfig.value.biliUploadFileNameType === "never") return;
      if (appConfig.value.biliUploadFileNameType === "always") {
        biliSettingRef.value?.setTitle(name);
        return;
      }
      hasNotice.value = true;
      const n = notification.create({
        title: `是否将文件名改为视频标题？`,
        keepAliveOnHover: true,
        duration: 3e3,
        action: () => h(
          "div",
          {
            style: "display: flex; gap: 10px; justify-content: center; align-items: center;"
          },
          {
            default: () => [
              h(
                Button,
                {
                  type: "primary",
                  onClick: () => {
                    biliSettingRef.value?.setTitle(name);
                    n.destroy();
                  }
                },
                {
                  default: () => "确认"
                }
              ),
              h(
                Button,
                {
                  text: true,
                  type: "error",
                  onClick: () => {
                    appConfigStore.set("biliUploadFileNameType", "never");
                    n.destroy();
                  }
                },
                {
                  default: () => "不再提示"
                }
              )
            ]
          }
        )
      });
    };
    return (_ctx, _cache) => {
      const _component_n_checkbox = __unplugin_components_1;
      const _component_n_divider = __unplugin_components_1$1;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          unref(fileList).length !== 0 ? (openBlock(), createElementBlock("span", {
            key: 0,
            style: { "cursor": "pointer", "color": "#958e8e" },
            onClick: clear
          }, "清空")) : createCommentVNode("", true),
          createVNode(unref(Button), { onClick: addVideo }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode(" 添加 ")
            ])),
            _: 1
          }),
          createVNode(unref(Button), {
            type: "primary",
            onClick: upload,
            title: "立即上传(ctrl+enter)"
          }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createTextVNode(" 立即上传 ")
            ])),
            _: 1
          }),
          createVNode(unref(Button), {
            type: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => appendVideoVisible.value = true)
          }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode(" 续传 ")
            ])),
            _: 1
          }),
          createVNode(_component_n_checkbox, {
            checked: unref(options).removeOriginAfterUploadCheck,
            "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => unref(options).removeOriginAfterUploadCheck = $event)
          }, {
            default: withCtx(() => _cache[9] || (_cache[9] = [
              createTextVNode(" 审核通过后移除源文件 ")
            ])),
            _: 1
          }, 8, ["checked"])
        ]),
        createVNode(FileSelect, {
          ref_key: "fileSelect",
          ref: fileSelect,
          modelValue: unref(fileList),
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(fileList) ? fileList.value = $event : null),
          onChange: fileChange,
          inputPlaceholder: "输入内容将会被用为分P标题"
        }, null, 8, ["modelValue"]),
        createVNode(_component_n_divider),
        createBaseVNode("div", _hoisted_2, [
          createVNode(BiliSetting, {
            ref_key: "biliSettingRef",
            ref: biliSettingRef,
            modelValue: unref(options).uploadPresetId,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(options).uploadPresetId = $event),
            onChange: unref(handlePresetOptions)
          }, null, 8, ["modelValue", "onChange"])
        ]),
        createVNode(AppendVideoDialog, {
          visible: unref(appendVideoVisible),
          "onUpdate:visible": _cache[4] || (_cache[4] = ($event) => isRef(appendVideoVisible) ? appendVideoVisible.value = $event : null),
          modelValue: unref(aid),
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(aid) ? aid.value = $event : null),
          onConfirm: appendVideo
        }, null, 8, ["visible", "modelValue"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
