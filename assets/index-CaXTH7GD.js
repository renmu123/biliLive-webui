import { F as FileSelect } from "./FileSelect-B0aQpShO.js";
import { B as BiliSetting, A as AppendVideoDialog } from "./BiliSetting-9uf3u8KH.js";
import { a as useBili } from "./index-BZWV_urK.js";
import { a as useUserInfoStore, d as useAppConfig, g as deepRaw, r as replaceExtName, l as buildRoomLink } from "./index-BpXg0f34.js";
import { d as defineComponent, a4 as storeToRefs, x as computed, r as ref, ak as onActivated, al as onDeactivated, am as onUnmounted, c as createElementBlock, e as createBaseVNode, a as createVNode, h as createCommentVNode, f as unref, w as withCtx, B as Button, i as isRef, j as createTextVNode, o as openBlock, l as h } from "./index-gjuLIDoI.js";
import { c as common } from "./common-Da25N27f.js";
import { b as bili } from "./bili-CUSHIAIC.js";
import { h as hotkeys } from "./hotkeys.esm-CkQxwFRj.js";
import { u as useNotification } from "./use-notification-LRtjAvoZ.js";
import { b as toReactive } from "./index-bqczNda1.js";
import { _ as __unplugin_components_1 } from "./Checkbox-pQXdXXSK.js";
import { _ as __unplugin_components_1$1 } from "./Divider-CcENGeqI.js";
import "./EditableText-DJHDEqjl.js";
import "./_plugin-vue_export-helper-B1lyReKF.js";
import "./Icon-D2Zo6Coc.js";
import "./showDirectoryDialog-CUR2gD_Z.js";
import "./Input--Gp3P9gj.js";
import "./text-CwQ4I63s.js";
import "./Pagination-kMhNeoDI.js";
import "./Select-xWcqChuz.js";
import "./Popover-T5GorXob.js";
import "./_getTag-NYFG1GAg.js";
import "./create-DfXrl36C.js";
import "./create-ref-setter-DXkZaMbS.js";
import "./Tip.vue_vue_type_script_setup_true_lang-x9PvGp7f.js";
import "./HelpCircleOutline-JWqllQs0.js";
import "./index-ad3zSNQt.js";
import "./DatePicker-BJdnwtM2.js";
import "./TimePicker-6LkPrZvv.js";
import "./FormItem-Kj27K3vk.js";
import "./RadioGroup-Bd7Skk-n.js";
import "./Space-BBiSHRV-.js";
import "./Cascader-C6rHCto0.js";
import "./ChevronRight-CONDXL5I.js";
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
    const formatPartTitleTemplate = async (partTitleTemplate, videos) => {
      const hasPartTitleTemplate = partTitleTemplate && !!partTitleTemplate.trim();
      if (hasPartTitleTemplate) {
        await Promise.all(
          videos.map(async (video, index) => {
            try {
              const parseResult = await common.parseMeta({
                videoFilePath: video.path,
                danmaFilePath: replaceExtName(video.path, ".xml")
              });
              if (parseResult.title && parseResult.username && parseResult.roomId && parseResult.startTimestamp) {
                const previewTitle = await bili.formatWebhookPartTitle(partTitleTemplate, {
                  title: parseResult.title,
                  username: parseResult.username,
                  time: new Date((parseResult.startTimestamp ?? 0) * 1e3).toISOString(),
                  roomId: parseResult.roomId,
                  filename: window.path.basename(video.path),
                  index: index + 1
                  // 索引从 1 开始
                });
                video.title = previewTitle;
                notice.success({
                  title: `已解析并替换标题为：${previewTitle}`,
                  duration: 6e3
                });
              }
            } catch (e) {
              notice.warning({
                title: `尝试解析视频文件 ${video.title} 信息失败，继续上传`,
                duration: 2e3
              });
            }
          })
        );
      }
    };
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
      if (uploadConfig.title.includes("{{")) {
        try {
          const parseResult = await common.parseMeta({
            videoFilePath: fileList.value[0].path,
            danmaFilePath: replaceExtName(fileList.value[0].path, ".xml")
          });
          if (parseResult.title && parseResult.username && parseResult.roomId && parseResult.startTimestamp) {
            if (uploadConfig.title.includes("{{")) {
              const previewTitle = await bili.formatWebhookTitle(uploadConfig.title, {
                title: parseResult.title,
                username: parseResult.username,
                time: new Date((parseResult.startTimestamp ?? 0) * 1e3).toISOString(),
                roomId: parseResult.roomId,
                filename: window.path.basename(fileList.value[0].path)
              });
              uploadConfig.title = previewTitle;
              notice.success({
                title: `已解析并替换标题为：${previewTitle}`,
                duration: 6e3
              });
            }
          }
        } catch (e) {
          notice.warning({
            title: `尝试解析视频文件信息失败，继续上传`,
            duration: 2e3
          });
        }
      }
      if (uploadConfig.copyright === 2 && !uploadConfig.source) {
        const parseResult = await common.parseMeta({
          videoFilePath: fileList.value[0].path,
          danmaFilePath: replaceExtName(fileList.value[0].path, ".xml")
        });
        if (parseResult.platform) {
          uploadConfig.source = buildRoomLink(parseResult.platform, parseResult.roomId ?? "") ?? "";
        }
        if (!uploadConfig.source) {
          notice.error({
            title: `稿件类型为转载时转载来源不能为空`,
            duration: 1e3
          });
          return;
        }
      }
      const videos = deepRaw(fileList.value);
      await formatPartTitleTemplate(uploadConfig.partTitleTemplate, videos);
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
      await formatPartTitleTemplate(uploadConfig.partTitleTemplate, videos);
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
          onChange: fileChange
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
