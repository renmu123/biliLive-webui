import { d as useAppConfig, m as useUploadPreset, a as useUserInfoStore, g as deepRaw, v as videoPreset, c as cloneDeep, b as uuid } from "./index-BpXg0f34.js";
import { d as defineComponent, a2 as mergeModels, a4 as storeToRefs, a3 as useModel, r as ref, a5 as watch, g as createBlock, w as withCtx, a9 as __unplugin_components_3, a as createVNode, e as createBaseVNode, f as unref, i as isRef, B as Button, j as createTextVNode, c as createElementBlock, a6 as renderList, a7 as normalizeClass, t as toDisplayString, F as Fragment, _ as __unplugin_components_4$1, o as openBlock, x as computed, k as api, h as createCommentVNode, af as normalizeStyle, aj as withKeys, a0 as watchEffect, a8 as nextTick } from "./index-gjuLIDoI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-B1lyReKF.js";
import { b as bili } from "./bili-CUSHIAIC.js";
import { _ as __unplugin_components_6 } from "./Pagination-kMhNeoDI.js";
import { u as useNotification } from "./use-notification-LRtjAvoZ.js";
import { c as common } from "./common-Da25N27f.js";
import { N as NIcon } from "./Icon-D2Zo6Coc.js";
import { _ as _sfc_main$4 } from "./Tip.vue_vue_type_script_setup_true_lang-x9PvGp7f.js";
import { u as useConfirm } from "./index-BZWV_urK.js";
import { u as uploadTitleTemplate } from "./index-ad3zSNQt.js";
import { t as templateRef } from "./index-bqczNda1.js";
import { _ as __unplugin_components_0 } from "./Input--Gp3P9gj.js";
import { _ as __unplugin_components_0$3 } from "./DatePicker-BJdnwtM2.js";
import { a as __unplugin_components_5, _ as __unplugin_components_2 } from "./FormItem-Kj27K3vk.js";
import { _ as __unplugin_components_0$1 } from "./Select-xWcqChuz.js";
import { _ as __unplugin_components_1 } from "./Divider-CcENGeqI.js";
import { _ as __unplugin_components_5$1, a as __unplugin_components_3$2 } from "./RadioGroup-Bd7Skk-n.js";
import { _ as __unplugin_components_3$1 } from "./Space-BBiSHRV-.js";
import { _ as __unplugin_components_0$2 } from "./Cascader-C6rHCto0.js";
import { _ as __unplugin_components_1$1 } from "./Checkbox-pQXdXXSK.js";
const _hoisted_1$3 = { style: { "display": "flex", "gap": "10px", "align-items": "center" } };
const _hoisted_2$1 = { class: "media-container" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = { class: "title" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppendVideoDialog",
  props: {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {},
    "modelValue": { required: false },
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["confirm"], ["update:visible", "update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const { appConfig } = storeToRefs(useAppConfig());
    const showModal = useModel(__props, "visible");
    const aid = useModel(__props, "modelValue");
    const emits = __emit;
    const notice = useNotification();
    const list = ref([]);
    const page = ref(1);
    const pageCount = ref(1);
    watch(
      () => page.value,
      () => {
        getArchives();
      }
    );
    const getArchives = async () => {
      const uid = appConfig.value.uid;
      if (!uid) {
        notice.warning({
          title: "请先登录",
          duration: 500
        });
        return;
      }
      const data = await bili.getArchives(
        {
          pn: page.value,
          ps: 20
        },
        uid
      );
      pageCount.value = Math.ceil(data.page.count / data.page.ps);
      list.value = data.arc_audits;
    };
    const handleOpen = () => {
      getArchives();
    };
    const close = () => {
      aid.value = "";
      showModal.value = false;
    };
    const confirm = async () => {
      if (!aid.value) {
        return;
      }
      emits("confirm", aid.value);
      showModal.value = false;
    };
    const selectMedia = (item) => {
      aid.value = String(item.Archive.aid);
    };
    return (_ctx, _cache) => {
      const _component_n_pagination = __unplugin_components_6;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_4$1;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showModal.value = $event),
        "mask-closable": false,
        "auto-focus": "",
        "on-after-enter": handleOpen
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "calc(100% - 60px)", "max-height": "80%" },
            bordered: false,
            size: "huge",
            role: "dialog",
            "aria-modal": "true",
            class: "card"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                _cache[4] || (_cache[4] = createBaseVNode("p", null, "续传只会增加分p，不会对稿件进行编辑", -1)),
                createBaseVNode("div", _hoisted_1$3, [
                  createVNode(_component_n_pagination, {
                    page: unref(page),
                    "onUpdate:page": _cache[0] || (_cache[0] = ($event) => isRef(page) ? page.value = $event : null),
                    "page-count": unref(pageCount),
                    size: "medium",
                    "show-quick-jumper": ""
                  }, null, 8, ["page", "page-count"]),
                  createVNode(_component_n_button, {
                    style: { "margin-left": "auto" },
                    class: "btn",
                    onClick: close
                  }, {
                    default: withCtx(() => _cache[2] || (_cache[2] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    class: "btn",
                    onClick: confirm
                  }, {
                    default: withCtx(() => _cache[3] || (_cache[3] = [
                      createTextVNode(" 确认 ")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_2$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (item) => {
                    return openBlock(), createElementBlock("div", {
                      key: item.Archive.aid,
                      class: normalizeClass(["media", { selected: aid.value == item.Archive.aid }]),
                      onClick: ($event) => selectMedia(item)
                    }, [
                      createBaseVNode("img", {
                        src: item.Archive.cover,
                        referrerpolicy: "no-referrer",
                        class: "cover"
                      }, null, 8, _hoisted_4$1),
                      createBaseVNode("div", _hoisted_5$1, toDisplayString(item.Archive.title), 1)
                    ], 10, _hoisted_3$1);
                  }), 128))
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const AppendVideoDialog = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-136c6a5d"]]);
const _hoisted_1$2 = ["src"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ImageCrop",
  props: /* @__PURE__ */ mergeModels({
    height: { default: "100px" },
    width: { default: "160px" }
  }, {
    "modelValue": { required: true, default: "" },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const filename = useModel(__props, "modelValue");
    const src = computed(() => {
      if (filename.value) {
        if (window.path.isAbsolute(filename.value)) {
          return filename.value;
        } else {
          return `${api.defaults.baseURL}/assets/cover/${filename.value}`;
        }
      }
      return "";
    });
    const props = __props;
    const notice = useNotification();
    const handleCoverChange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      console.log(file);
      if (file.size > 1024 * 1024 * 2) {
        notice.warning({
          title: "图片大小超过2M可能导致无法上传成功~",
          duration: 2e3
        });
      }
      const res = await common.uploadCover(file);
      filename.value = res.name;
    };
    const fileInputRef = ref(null);
    const selectImage = () => {
      if (fileInputRef.value) {
        fileInputRef.value.value = "";
      }
      fileInputRef.value?.click();
    };
    const remove = () => {
      filename.value = "";
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("input", {
          ref_key: "fileInputRef",
          ref: fileInputRef,
          type: "file",
          accept: ".png,.jpg,.jpeg",
          style: { "display": "none" },
          onChange: handleCoverChange
        }, null, 544),
        createBaseVNode("div", {
          style: normalizeStyle({
            height: props.height,
            width: props.width
          }),
          class: "image-container"
        }, [
          unref(src) ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "image",
            src: unref(src),
            onClick: selectImage
          }, null, 8, _hoisted_1$2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: "empty-image",
            onClick: selectImage
          }, "选择图片")),
          unref(src) ? (openBlock(), createBlock(_component_n_icon, {
            key: 2,
            size: "14",
            class: "remove",
            onClick: remove
          }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createBaseVNode("svg", {
                viewBox: "0 0 12 12",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true"
              }, [
                createBaseVNode("g", {
                  stroke: "none",
                  "stroke-width": "1",
                  fill: "none",
                  "fill-rule": "evenodd"
                }, [
                  createBaseVNode("g", {
                    fill: "currentColor",
                    "fill-rule": "nonzero"
                  }, [
                    createBaseVNode("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" })
                  ])
                ])
              ], -1)
            ])),
            _: 1
          })) : createCommentVNode("", true)
        ], 4)
      ]);
    };
  }
});
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0b8a6599"]]);
const _hoisted_1$1 = { class: "dynamic-tags" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DynamicTags",
  props: /* @__PURE__ */ mergeModels({
    max: { default: -1 },
    beforeCreate: {},
    placeholder: { default: "回车输入内容" },
    loading: { type: Boolean }
  }, {
    "modelValue": { required: true, default: [] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const tags = useModel(__props, "modelValue");
    const newTag = ref("");
    const canAddTag = computed(() => props.max === -1 || tags.value.length < props.max);
    const addTag = async () => {
      if (!newTag.value) return;
      try {
        const canCreate = props.beforeCreate ? await props.beforeCreate(newTag.value) : true;
        if (canCreate && canAddTag.value) {
          tags.value.push(newTag.value);
          newTag.value = "";
        }
      } catch (e) {
        console.error(e);
      }
    };
    const removeTag = (index) => {
      tags.value.splice(index, 1);
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_input = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (tag, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "tag"
          }, [
            createTextVNode(toDisplayString(tag) + " ", 1),
            createVNode(_component_n_icon, {
              size: "14",
              class: "remove-icon",
              onClick: ($event) => removeTag(index)
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createBaseVNode("svg", {
                  viewBox: "0 0 12 12",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "aria-hidden": "true"
                }, [
                  createBaseVNode("g", {
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd"
                  }, [
                    createBaseVNode("g", {
                      fill: "currentColor",
                      "fill-rule": "nonzero"
                    }, [
                      createBaseVNode("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" })
                    ])
                  ])
                ], -1)
              ])),
              _: 2
            }, 1032, ["onClick"])
          ]);
        }), 128)),
        canAddTag.value ? (openBlock(), createBlock(_component_n_input, {
          key: 0,
          value: newTag.value,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => newTag.value = $event),
          placeholder: _ctx.placeholder,
          class: "tag-input",
          loading: _ctx.loading,
          onKeyup: withKeys(addTag, ["enter"])
        }, null, 8, ["value", "placeholder", "loading"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const DynamicTags = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f099f975"]]);
const _hoisted_1 = ["title", "onClick"];
const _hoisted_2 = ["title", "onClick"];
const _hoisted_3 = { class: "inline-items" };
const _hoisted_4 = { class: "inline-items" };
const _hoisted_5 = { class: "inline-item" };
const _hoisted_6 = { class: "inline-item" };
const _hoisted_7 = { class: "inline-items" };
const _hoisted_8 = { class: "inline-item" };
const _hoisted_9 = { class: "inline-item" };
const _hoisted_10 = { class: "inline-item" };
const _hoisted_11 = { class: "inline-item" };
const _hoisted_12 = { class: "inline-items" };
const _hoisted_13 = { class: "inline-flex" };
const _hoisted_14 = {
  class: "inline-items",
  style: { "align-items": "center" }
};
const _hoisted_15 = { style: { "text-align": "right" } };
const _hoisted_16 = { style: { "text-align": "right" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BiliSetting",
  props: {
    "modelValue": { required: false },
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const confirm = useConfirm();
    const { getUploadPresets } = useUploadPreset();
    const { appConfig } = storeToRefs(useAppConfig());
    const { uploaPresetsOptions } = storeToRefs(useUploadPreset());
    const emits = __emit;
    const presetId = useModel(__props, "modelValue");
    const options = ref({
      config: {
        uid: void 0,
        seasonId: void 0
      }
    });
    const handlePresetChange = async (value) => {
      const preset = await videoPreset.get(value);
      if (preset) {
        options.value = preset;
      } else {
        options.value = {
          // @ts-ignore
          config: {}
        };
      }
    };
    const noSideSpace = (value) => !value.startsWith(" ") && !value.endsWith(" ");
    watch(
      () => presetId.value,
      (value) => {
        value && handlePresetChange(value);
      },
      {
        immediate: true
      }
    );
    const notice = useNotification();
    const tagCreateLoading = ref(false);
    const beforeTagCreate = async (tag) => {
      if (!appConfig.value.uid) {
        notice.warning({
          title: "请先登录",
          duration: 1e3
        });
        return false;
      }
      if ((options.value?.config?.tag ?? []).includes(tag)) {
        notice.warning({
          title: "Σ( ° △ °|||) 该输入标签已经存在",
          duration: 1e3
        });
        return false;
      }
      tagCreateLoading.value = true;
      try {
        const res = await bili.checkTag(tag, appConfig.value.uid);
        if (res.code !== 0) {
          notice.error({
            title: res.message,
            duration: 1e3
          });
          return false;
        }
        return true;
      } catch (e) {
        notice.error({
          title: String(e),
          duration: 1e3
        });
        return false;
      } finally {
        tagCreateLoading.value = false;
      }
    };
    const nameModelVisible = ref(false);
    const tempPresetName = ref("");
    const saveAnotherPreset = () => {
      isRename.value = false;
      tempPresetName.value = "";
      nameModelVisible.value = true;
    };
    const isRename = ref(false);
    const rename = () => {
      tempPresetName.value = options.value.name;
      isRename.value = true;
      nameModelVisible.value = true;
    };
    const scheduledDatetimeRule = {
      trigger: ["blur", "change"],
      validator() {
        if (!options.value.config.dtime) {
          return true;
        }
        const now = Date.now() / 1e3;
        const dtime = options.value.config.dtime;
        if (dtime < now + 2 * 60 * 60) {
          return new Error("定时发布时间必须≥当前时间+2小时");
        }
        if (dtime > now + 15 * 24 * 60 * 60) {
          return new Error("定时发布时间必须≤当前时间+15天");
        }
        return true;
      }
    };
    const scheduledTimestampMillis = computed({
      get() {
        return options.value.config.dtime ? options.value.config.dtime * 1e3 : void 0;
      },
      set(value) {
        options.value.config.dtime = value ? Math.floor(value / 1e3) : void 0;
      }
    });
    const saveAnotherPresetConfirm = async () => {
      if (!tempPresetName.value) {
        notice.warning({
          title: "预设名称不得为空",
          duration: 500
        });
        return;
      }
      const preset = cloneDeep(options.value);
      if (!isRename.value) preset.id = uuid();
      preset.name = tempPresetName.value;
      await _savePreset(preset);
      nameModelVisible.value = false;
      notice.success({
        title: "保存成功",
        duration: 1e3
      });
      await getUploadPresets();
      presetId.value = preset.id;
      handlePresetChange(preset.id);
    };
    const deletePreset = async () => {
      let ids = Object.entries(appConfig.value.webhook.rooms || {}).map(([, value]) => {
        return value?.uploadPresetId;
      });
      ids.push(appConfig.value.webhook?.uploadPresetId);
      ids = ids.filter((id2) => id2 !== void 0 && id2 !== "");
      const msg = ids.includes(options.value.id) ? "该预设正在被使用中，删除后使用该预设的功能将失效，是否确认删除？" : "是否确认删除该预设？";
      const [status] = await confirm.warning({
        content: msg
      });
      if (!status) return;
      const id = options.value.id;
      await videoPreset.remove(id);
      getUploadPresets();
      presetId.value = "default";
      handlePresetChange("default");
    };
    const savePreset = async () => {
      const data = options.value;
      if (userInfoStore.userInfo?.uid) {
        data.config.uid = userInfoStore.userInfo.uid;
      }
      await _savePreset(options.value);
      if (options.value.config.dtime) {
        notice.warning({
          title: "保存成功，但定时发布不会保存到配置文件中",
          duration: 1e3
        });
        return;
      }
      notice.success({
        title: "保存成功",
        duration: 1e3
      });
    };
    const _savePreset = async (data) => {
      await bili.validUploadParams(deepRaw(data.config));
      await videoPreset.save(deepRaw(data));
    };
    watch(
      () => options.value,
      (value) => {
        emits("change", value);
      },
      {
        deep: true
      }
    );
    watchEffect(() => {
      if (options.value?.config?.closeReply) {
        options.value.config.selectiionReply = 0;
      }
    });
    watchEffect(() => {
      if (options.value?.config?.selectiionReply) {
        options.value.config.closeReply = 0;
      }
    });
    const userInfoStore = useUserInfoStore();
    const seasonList = ref([]);
    const currentSections = computed(() => {
      return seasonList.value.find((item) => item.value === options.value.config.seasonId)?.sections;
    });
    const getSeasonList = async (force) => {
      if (!userInfoStore?.userInfo?.uid) {
        seasonList.value = [];
        return;
      }
      const rawLocalData = window.localStorage.getItem("seasonListWithUID");
      if (!force && rawLocalData) {
        try {
          const data2 = JSON.parse(rawLocalData);
          if (userInfoStore?.userInfo?.uid && data2?.[userInfoStore.userInfo.uid]) {
            seasonList.value = data2[userInfoStore.userInfo.uid];
            return;
          }
        } catch (e) {
          console.error(e);
        }
      }
      const data = await bili.getSeasonList(userInfoStore.userInfo.uid);
      seasonList.value = (data.seasons || []).map((item) => {
        return {
          label: item.season.title,
          value: item.season.id,
          sections: item?.sections?.sections || []
        };
      });
      try {
        if (rawLocalData) {
          const data2 = JSON.parse(rawLocalData);
          data2[userInfoStore.userInfo.uid] = seasonList.value;
          window.localStorage.setItem("seasonListWithUID", JSON.stringify(data2));
        } else {
          window.localStorage.setItem(
            "seasonListWithUID",
            JSON.stringify({ [userInfoStore.userInfo.uid]: seasonList.value })
          );
        }
        if (force) {
          notice.success({
            title: "刷新成功",
            duration: 1e3
          });
        }
      } catch (e) {
        console.error(e);
      }
    };
    const areaData = ref([]);
    const getPlatformTypes = async () => {
      const rawLocalData = window.localStorage.getItem("areaData");
      if (rawLocalData) {
        try {
          areaData.value = JSON.parse(rawLocalData);
          return;
        } catch (e) {
          console.error(e);
        }
      }
      if (!userInfoStore?.userInfo?.uid) {
        return;
      }
      const data = await bili.getPlatformPre(userInfoStore.userInfo.uid);
      areaData.value = data.typelist;
      window.localStorage.setItem("areaData", JSON.stringify(data.typelist));
    };
    const descMaxLength = ref(2e3);
    watch(
      () => options.value.config.seasonId,
      () => {
        options.value.config.uid = userInfoStore.userInfo?.uid;
      }
    );
    watchEffect(() => {
      if (!userInfoStore.userInfo) return;
      getSeasonList();
      getPlatformTypes();
    });
    const topicLoading = ref(false);
    const topicOptions = ref([]);
    const handleSearch = async (query) => {
      if (!appConfig.value.uid) {
        topicOptions.value = [];
        return;
      }
      if (!query.length) {
        topicOptions.value = [];
        return;
      }
      topicLoading.value = true;
      const data = await bili.searchTopic(query, appConfig.value.uid);
      topicOptions.value = data.result.topics.map((item) => {
        return {
          ...item,
          label: item.name,
          value: item.name
        };
      });
      topicLoading.value = false;
    };
    const handleTopicChange = (topicName) => {
      options.value.config.topic_name = topicName;
      if (options.value.config.topic_name) {
        options.value.config.topic_id = topicOptions.value.find(
          (item) => item.value === options.value.config.topic_name
        )?.id;
        options.value.config.mission_id = topicOptions.value.find(
          (item) => item.value === options.value.config.topic_name
        )?.mission_id;
      } else {
        options.value.config.topic_id = void 0;
        options.value.config.mission_id = void 0;
      }
    };
    const titleList = ref(uploadTitleTemplate);
    const titleTip = computed(() => {
      const base = `上限80字，多余的会被截断。<br/>
  占位符用于支持webhook中的相关功能，如【{{user}}】{{title}}-{{now}}<br/>
  不要在直播开始后修改字段，本场直播不会生效，更多模板引擎等高级用法见文档<br/>`;
      return titleList.value.map((item) => {
        return `${item.label}：${item.value}<br/>`;
      }).reduce((prev, cur) => prev + cur, base);
    });
    const partTitleList = ref([
      {
        label: "标题",
        value: "{{title}}"
      },
      {
        value: "{{user}}",
        label: "主播名"
      },
      {
        value: "{{roomId}}",
        label: "房间号"
      },
      {
        label: "文件名",
        value: "{{filename}}"
      },
      {
        label: "序号",
        value: "{{index}}"
      },
      {
        label: "弹幕版or纯享版",
        value: "{{hasDanmaStr}}"
      },
      {
        value: "{{yyyy}}",
        label: "年"
      },
      {
        value: "{{MM}}",
        label: "月（补零）"
      },
      {
        value: "{{dd}}",
        label: "日（补零）"
      },
      {
        value: "{{HH}}",
        label: "时（补零）"
      },
      {
        value: "{{mm}}",
        label: "分（补零）"
      },
      {
        value: "{{ss}}",
        label: "秒（补零）"
      }
    ]);
    const partTitleTip = computed(() => {
      const base = `留空则使用当前分P标题。<br/>更多模板引擎等高级用法见文档<br/>`;
      return partTitleList.value.map((item) => {
        return `${item.label}：${item.value}<br/>`;
      }).reduce((prev, cur) => prev + cur, base);
    });
    const partTitleInput = templateRef("partTitleInput");
    const setPartTitleVar = async (value) => {
      if (!options.value.config.partTitleTemplate) {
        options.value.config.partTitleTemplate = "";
      }
      const input = partTitleInput.value?.inputElRef;
      if (input) {
        const currentValue = options.value.config.partTitleTemplate || "";
        const start = input.selectionStart ?? currentValue.length;
        const end = input.selectionEnd ?? currentValue.length;
        options.value.config.partTitleTemplate = currentValue.slice(0, start) + value + currentValue.slice(end);
        input.focus();
        await nextTick();
        input.setSelectionRange(start + value.length, start + value.length);
      } else {
        options.value.config.partTitleTemplate = (options.value.config.partTitleTemplate || "") + value;
      }
    };
    const previewPartTitle = async (template) => {
      if (!template) {
        notice.warning({
          title: "请输入分P标题模板",
          duration: 2e3
        });
        return;
      }
      const data = await bili.formatWebhookPartTitle(template);
      notice.info({
        title: data,
        duration: 3e3
      });
    };
    const previewTitle = async (template) => {
      const data = await bili.formatWebhookTitle(template);
      notice.warning({
        title: data,
        duration: 3e3
      });
    };
    const titleInput = templateRef("titleInput");
    const setTitleVar = async (value) => {
      const input = titleInput.value?.inputElRef;
      if (input) {
        const start = input.selectionStart ?? options.value.config.title.length;
        const end = input.selectionEnd ?? options.value.config.title.length;
        const oldValue = options.value.config.title;
        options.value.config.title = oldValue.slice(0, start) + value + oldValue.slice(end);
        input.focus();
        await nextTick();
        input.setSelectionRange(start + value.length, start + value.length);
      } else {
        options.value.config.title += value;
      }
    };
    const setTitle = (name) => {
      options.value.config.title = name;
    };
    const getTitle = () => {
      return options.value?.config?.title;
    };
    __expose({
      setTitle,
      getTitle
    });
    const humanTypeList = ref([
      {
        id: 1001,
        name: "影视"
      },
      {
        id: 1002,
        name: "娱乐"
      },
      {
        id: 1003,
        name: "音乐"
      },
      {
        id: 1004,
        name: "舞蹈"
      },
      {
        id: 1005,
        name: "动画"
      },
      {
        id: 1006,
        name: "绘画"
      },
      {
        id: 1007,
        name: "鬼畜"
      },
      {
        id: 1008,
        name: "游戏"
      },
      {
        id: 1009,
        name: "资讯"
      },
      {
        id: 1010,
        name: "知识"
      },
      {
        id: 1011,
        name: "人工智能"
      },
      {
        id: 1012,
        name: "科技数码"
      },
      {
        id: 1013,
        name: "汽车"
      },
      {
        id: 1014,
        name: "时尚美妆"
      },
      {
        id: 1015,
        name: "家装房产"
      },
      {
        id: 1016,
        name: "户外潮流"
      },
      {
        id: 1017,
        name: "健身"
      },
      {
        id: 1018,
        name: "体育运动"
      },
      {
        id: 1019,
        name: "手工"
      },
      {
        id: 1020,
        name: "美食"
      },
      {
        id: 1021,
        name: "小剧场"
      },
      {
        id: 1022,
        name: "旅游出行"
      },
      {
        id: 1023,
        name: "三农"
      },
      {
        id: 1024,
        name: "动物"
      },
      {
        id: 1025,
        name: "亲子"
      },
      {
        id: 1026,
        name: "健康"
      },
      {
        id: 1027,
        name: "情感"
      },
      {
        id: 1029,
        name: "vlog"
      },
      {
        id: 1030,
        name: "生活兴趣"
      },
      {
        id: 1031,
        name: "生活经验"
      }
    ]);
    return (_ctx, _cache) => {
      const _component_n_select = __unplugin_components_0$1;
      const _component_n_form_item = __unplugin_components_2;
      const _component_n_divider = __unplugin_components_1;
      const _component_Tip = _sfc_main$4;
      const _component_image_crop = __unplugin_components_4;
      const _component_n_input = __unplugin_components_0;
      const _component_n_button = Button;
      const _component_n_radio = __unplugin_components_3$2;
      const _component_n_space = __unplugin_components_3$1;
      const _component_n_radio_group = __unplugin_components_5$1;
      const _component_n_cascader = __unplugin_components_0$2;
      const _component_n_date_picker = __unplugin_components_0$3;
      const _component_n_checkbox = __unplugin_components_1$1;
      const _component_n_form = __unplugin_components_5;
      const _component_n_card = __unplugin_components_4$1;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_n_form, {
          ref: "formRef",
          "label-width": "120px",
          "label-placement": "left",
          "label-align": "right"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_form_item, { label: "预设" }, {
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: presetId.value,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => presetId.value = $event),
                  options: unref(uploaPresetsOptions)
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            }),
            createVNode(_component_n_divider),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "非必选，不设置B站会自动进行选择",
                  text: "封面"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_image_crop, {
                  modelValue: unref(options).config.cover,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(options).config.cover = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "视频标题" }, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: titleTip.value,
                  text: "视频标题"
                }, null, 8, ["tip"])
              ]),
              feedback: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(titleList), (item) => {
                  return openBlock(), createElementBlock("span", {
                    key: item.value,
                    title: item.label,
                    class: "title-var",
                    onClick: ($event) => setTitleVar(item.value)
                  }, toDisplayString(item.value), 9, _hoisted_1);
                }), 128))
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  ref_key: "titleInput",
                  ref: titleInput,
                  value: unref(options).config.title,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).config.title = $event),
                  placeholder: "请输入视频标题",
                  clearable: ""
                }, null, 8, ["value"]),
                createVNode(_component_n_button, {
                  style: { "margin-right": "10px" },
                  onClick: _cache[3] || (_cache[3] = ($event) => previewTitle(unref(options).config.title))
                }, {
                  default: withCtx(() => _cache[33] || (_cache[33] = [
                    createTextVNode("预览")
                  ])),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, {
              label: "分P标题",
              style: { "margin-top": "34px" }
            }, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: partTitleTip.value,
                  text: "分P标题"
                }, null, 8, ["tip"])
              ]),
              feedback: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(partTitleList), (item) => {
                  return openBlock(), createElementBlock("span", {
                    key: item.value,
                    title: item.label,
                    class: "title-var",
                    onClick: ($event) => setPartTitleVar(item.value)
                  }, toDisplayString(item.value), 9, _hoisted_2);
                }), 128))
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  ref_key: "partTitleInput",
                  ref: partTitleInput,
                  value: unref(options).config.partTitleTemplate,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(options).config.partTitleTemplate = $event),
                  placeholder: "留空则使用当前分P标题",
                  clearable: "",
                  style: { "margin-right": "10px" },
                  spellcheck: "false"
                }, null, 8, ["value"]),
                createVNode(_component_n_button, {
                  style: { "margin-right": "10px" },
                  onClick: _cache[5] || (_cache[5] = ($event) => previewPartTitle(unref(options).config.partTitleTemplate || ""))
                }, {
                  default: withCtx(() => _cache[34] || (_cache[34] = [
                    createTextVNode("预览")
                  ])),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "稿件类型" }, {
              default: withCtx(() => [
                createVNode(_component_n_radio_group, {
                  value: unref(options).config.copyright,
                  "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(options).config.copyright = $event),
                  name: "radiogroup"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_space, null, {
                      default: withCtx(() => [
                        createVNode(_component_n_radio, { value: 1 }, {
                          default: withCtx(() => _cache[35] || (_cache[35] = [
                            createTextVNode(" 自制 ")
                          ])),
                          _: 1
                        }),
                        createVNode(_component_n_radio, { value: 2 }, {
                          default: withCtx(() => _cache[36] || (_cache[36] = [
                            createTextVNode(" 转载 ")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            unref(options).config.copyright === 2 ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "如果为空，在webhook使用时，会尝试会替换为直播间链接，如果无法匹配到，会被替换为直播间号",
                  text: "转载来源"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(options).config.source,
                  "onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(options).config.source = $event),
                  placeholder: "注明视频来源网址",
                  "allow-input": noSideSpace,
                  clearable: "",
                  maxlength: "200",
                  "show-count": ""
                }, null, 8, ["value"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "仍在使用的分区，但是官方投稿已无法手动选择，这里你还是可以手动选的",
                  text: "旧分区"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_cascader, {
                  value: unref(options).config.tid,
                  "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(options).config.tid = $event),
                  "label-field": "name",
                  "value-field": "id",
                  options: unref(areaData),
                  "check-strategy": "child",
                  filterable: ""
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "分区" }, {
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: unref(options).config.human_type2,
                  "onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(options).config.human_type2 = $event),
                  options: unref(humanTypeList),
                  "key-field": "id",
                  "label-field": "name",
                  "value-field": "id"
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "留着默认的tag，秋梨膏(๑>◡<๑)",
                  text: "标签"
                })
              ]),
              default: withCtx(() => [
                createVNode(DynamicTags, {
                  modelValue: unref(options).config.tag,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(options).config.tag = $event),
                  max: 10,
                  "before-create": beforeTagCreate,
                  placeholder: "回车输入标签，最多十个",
                  loading: unref(tagCreateLoading)
                }, null, 8, ["modelValue", "loading"])
              ]),
              _: 1
            }),
            unref(options).config.copyright === 1 ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "话题也会占据一个tag栏~",
                  text: "话题"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: unref(options).config.topic_name,
                  "onUpdate:value": handleTopicChange,
                  filterable: "",
                  placeholder: "搜索话题",
                  options: unref(topicOptions),
                  loading: unref(topicLoading),
                  clearable: "",
                  remote: "",
                  "clear-filter-after-select": false,
                  onSearch: handleSearch
                }, null, 8, ["value", "options", "loading"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "视频简介",
                  tip: "可以输入[暮色312]<10995238>来进行艾特用户，前面的值为用户名，后面的值为用户id，请务必保持用户名与uid对应。"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(options).config.desc,
                  "onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(options).config.desc = $event),
                  placeholder: "请输入视频简介",
                  clearable: "",
                  maxlength: unref(descMaxLength),
                  "show-count": "",
                  type: "textarea",
                  autosize: {
                    minRows: 4
                  }
                }, null, 8, ["value", "maxlength"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, {
              path: "dtime",
              rule: scheduledDatetimeRule
            }, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "定时发布",
                  tip: "可选择距离当前最早≥2小时/最晚≤15天的时间，花火稿件或距发布不足5分钟时不可修改/取消，不会保存到配置中"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_date_picker, {
                  type: "datetime",
                  clearable: "",
                  placeholder: "请选择定时发布时间",
                  value: scheduledTimestampMillis.value,
                  "on-update:value": (value) => {
                    scheduledTimestampMillis.value = value;
                  }
                }, null, 8, ["value", "on-update:value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "粉丝动态" }, {
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(options).config.dynamic,
                  "onUpdate:value": _cache[12] || (_cache[12] = ($event) => unref(options).config.dynamic = $event),
                  placeholder: "请输入粉丝动态",
                  clearable: "",
                  maxlength: "233",
                  "show-count": "",
                  type: "textarea",
                  autosize: {
                    minRows: 2
                  }
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            unref(options).config.copyright === 1 ? (openBlock(), createBlock(_component_n_form_item, {
              key: 2,
              label: "添加水印"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_checkbox, {
                  checked: unref(options).config.watermark,
                  "onUpdate:checked": _cache[13] || (_cache[13] = ($event) => unref(options).config.watermark = $event),
                  "checked-value": 1,
                  "unchecked-value": 0,
                  title: "开启"
                }, {
                  default: withCtx(() => _cache[37] || (_cache[37] = [
                    createTextVNode("开启")
                  ])),
                  _: 1
                }, 8, ["checked"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, { label: "自制声明" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3, [
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.noReprint,
                    "onUpdate:checked": _cache[14] || (_cache[14] = ($event) => unref(options).config.noReprint = $event),
                    "checked-value": 1,
                    "unchecked-value": 0
                  }, {
                    default: withCtx(() => _cache[38] || (_cache[38] = [
                      createTextVNode("未经作者授权 禁止转载")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.recreate,
                    "onUpdate:checked": _cache[15] || (_cache[15] = ($event) => unref(options).config.recreate = $event),
                    "checked-value": 1,
                    "unchecked-value": -1,
                    title: "勾选即允许创作者基于您的投稿视频内容进行二创"
                  }, {
                    default: withCtx(() => _cache[39] || (_cache[39] = [
                      createTextVNode("二创声明")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "充电设置" }, {
              default: withCtx(() => [
                createVNode(_component_n_checkbox, {
                  checked: unref(options).config.openElec,
                  "onUpdate:checked": _cache[16] || (_cache[16] = ($event) => unref(options).config.openElec = $event),
                  "checked-value": 1,
                  "unchecked-value": 0
                }, {
                  default: withCtx(() => _cache[40] || (_cache[40] = [
                    createTextVNode("启用充电面板")
                  ])),
                  _: 1
                }, 8, ["checked"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "高级设置" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.dolby,
                      "onUpdate:checked": _cache[17] || (_cache[17] = ($event) => unref(options).config.dolby = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[41] || (_cache[41] = [
                        createTextVNode("杜比音效")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ]),
                  createBaseVNode("div", _hoisted_6, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.hires,
                      "onUpdate:checked": _cache[18] || (_cache[18] = ($event) => unref(options).config.hires = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[42] || (_cache[42] = [
                        createTextVNode("Hi-Res无损音质 ")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "互动管理" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.closeDanmu,
                      "onUpdate:checked": _cache[19] || (_cache[19] = ($event) => unref(options).config.closeDanmu = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[43] || (_cache[43] = [
                        createTextVNode("关闭弹幕")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ]),
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.closeReply,
                      "onUpdate:checked": _cache[20] || (_cache[20] = ($event) => unref(options).config.closeReply = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[44] || (_cache[44] = [
                        createTextVNode("关闭评论 ")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ]),
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.selectiionReply,
                      "onUpdate:checked": _cache[21] || (_cache[21] = ($event) => unref(options).config.selectiionReply = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[45] || (_cache[45] = [
                        createTextVNode("开启精选评论 ")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ]),
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_component_n_radio_group, {
                      value: unref(options).config.is_only_self,
                      "onUpdate:value": _cache[22] || (_cache[22] = ($event) => unref(options).config.is_only_self = $event),
                      name: "radiogroup"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_space, null, {
                          default: withCtx(() => [
                            createVNode(_component_n_radio, { value: 0 }, {
                              default: withCtx(() => _cache[46] || (_cache[46] = [
                                createTextVNode(" 公开可见 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_radio, { value: 1 }, {
                              default: withCtx(() => _cache[47] || (_cache[47] = [
                                createTextVNode(" 仅自己可见 ")
                              ])),
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
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "谨慎使用，可能会导致评论被阿瓦隆风控，以及可能的风控等级上升",
                  text: "自动评论"
                })
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_12, [
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.autoComment,
                    "onUpdate:checked": _cache[23] || (_cache[23] = ($event) => unref(options).config.autoComment = $event),
                    title: "审核后自动进行评论，续传不会被处理"
                  }, {
                    default: withCtx(() => _cache[48] || (_cache[48] = [
                      createTextVNode("自动评论")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.commentTop,
                    "onUpdate:checked": _cache[24] || (_cache[24] = ($event) => unref(options).config.commentTop = $event)
                  }, {
                    default: withCtx(() => _cache[49] || (_cache[49] = [
                      createTextVNode("置顶")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ])
              ]),
              _: 1
            }),
            unref(options).config.autoComment ? (openBlock(), createBlock(_component_n_form_item, { key: 3 }, {
              label: withCtx(() => _cache[50] || (_cache[50] = [
                createBaseVNode("span", { class: "inline-flex" }, [
                  createBaseVNode("span", null, "自动评论")
                ], -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(options).config.comment,
                  "onUpdate:value": _cache[25] || (_cache[25] = ($event) => unref(options).config.comment = $event),
                  placeholder: "请输入评论内容",
                  clearable: "",
                  maxlength: 1e3,
                  "show-count": "",
                  type: "textarea",
                  autosize: {
                    minRows: 4
                  }
                }, null, 8, ["value"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_13, [
                  _cache[51] || (_cache[51] = createBaseVNode("span", null, "合集", -1)),
                  createVNode(_component_Tip, {
                    tip: `此处的合集为投稿中的合集功能，仅适用于设置合集的账户(${unref(options).config.uid})`
                  }, null, 8, ["tip"])
                ])
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_14, [
                  createVNode(_component_n_select, {
                    value: unref(options).config.seasonId,
                    "onUpdate:value": _cache[26] || (_cache[26] = ($event) => unref(options).config.seasonId = $event),
                    options: unref(seasonList),
                    placeholder: "请选择合集",
                    style: { "width": "250px", "flex": "none" },
                    clearable: ""
                  }, null, 8, ["value", "options"]),
                  unref(options).config.seasonId ? (openBlock(), createBlock(_component_n_select, {
                    key: 0,
                    value: unref(options).config.sectionId,
                    "onUpdate:value": _cache[27] || (_cache[27] = ($event) => unref(options).config.sectionId = $event),
                    options: currentSections.value,
                    "label-field": "title",
                    "value-field": "id",
                    placeholder: "请选择小节",
                    style: { "width": "250px", "flex": "none" },
                    clearable: ""
                  }, null, 8, ["value", "options"])) : createCommentVNode("", true),
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.no_disturbance,
                    "onUpdate:checked": _cache[28] || (_cache[28] = ($event) => unref(options).config.no_disturbance = $event),
                    "checked-value": 1,
                    "unchecked-value": 0,
                    style: { "flex": "none" }
                  }, {
                    default: withCtx(() => _cache[52] || (_cache[52] = [
                      createTextVNode("此稿件不生成更新推送")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  createVNode(_component_n_button, {
                    onClick: _cache[29] || (_cache[29] = ($event) => getSeasonList(true)),
                    type: "primary"
                  }, {
                    default: withCtx(() => _cache[53] || (_cache[53] = [
                      createTextVNode("强制刷新")
                    ])),
                    _: 1
                  })
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 512),
        createBaseVNode("div", _hoisted_15, [
          unref(options).id !== "default" ? (openBlock(), createBlock(_component_n_button, {
            key: 0,
            text: "",
            type: "error",
            onClick: deletePreset
          }, {
            default: withCtx(() => _cache[54] || (_cache[54] = [
              createTextVNode("删除")
            ])),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_n_button, {
            type: "primary",
            style: { "margin-left": "10px" },
            onClick: rename
          }, {
            default: withCtx(() => _cache[55] || (_cache[55] = [
              createTextVNode("重命名")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            style: { "margin-left": "10px" },
            onClick: saveAnotherPreset
          }, {
            default: withCtx(() => _cache[56] || (_cache[56] = [
              createTextVNode("另存为")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            style: { "margin-left": "10px" },
            onClick: savePreset
          }, {
            default: withCtx(() => _cache[57] || (_cache[57] = [
              createTextVNode("保存")
            ])),
            _: 1
          })
        ]),
        createVNode(_component_n_modal, {
          show: unref(nameModelVisible),
          "onUpdate:show": _cache[32] || (_cache[32] = ($event) => isRef(nameModelVisible) ? nameModelVisible.value = $event : null)
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "600px" },
              bordered: false,
              role: "dialog",
              "aria-modal": "true"
            }, {
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_16, [
                  createVNode(_component_n_button, {
                    onClick: _cache[31] || (_cache[31] = ($event) => nameModelVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[58] || (_cache[58] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    style: { "margin-left": "10px" },
                    onClick: saveAnotherPresetConfirm
                  }, {
                    default: withCtx(() => _cache[59] || (_cache[59] = [
                      createTextVNode("确认")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(tempPresetName),
                  "onUpdate:value": _cache[30] || (_cache[30] = ($event) => isRef(tempPresetName) ? tempPresetName.value = $event : null),
                  placeholder: "请输入预设名称",
                  maxlength: "15",
                  onKeyup: withKeys(saveAnotherPresetConfirm, ["enter"])
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
});
const BiliSetting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f7d9447"]]);
export {
  AppendVideoDialog as A,
  BiliSetting as B
};
