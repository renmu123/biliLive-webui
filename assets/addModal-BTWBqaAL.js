import { cn as isBrowser, D as createInjectionKey, m as cB, aP as insideModal, aQ as insidePopover, p as c, q as cE, d as defineComponent, aG as resolveSlot, l as h, aL as resolveWrappedSlot, aj as VResizeObserver, v as useConfig, r as ref, x as computed, S as inject, y as useTheme, co as avatarLight, aO as createKey, C as useThemeClass, cp as color2Class, ax as onMounted, X as watchEffect, Z as onBeforeUnmount, Y as watch, al as mergeModels, an as storeToRefs, am as useModel, g as createBlock, w as withCtx, ar as __unplugin_components_3, a as createVNode, f as unref, h as createCommentVNode, c as createElementBlock, i as isRef, e as createBaseVNode, F as Fragment, j as createTextVNode, t as toDisplayString, B as Button, _ as __unplugin_components_3$1, o as openBlock } from "./index-CB8xvhFr.js";
import { t as tagInjectionKey, _ as __unplugin_components_0$1 } from "./Select-CYnthXY-.js";
import { _ as _sfc_main$1 } from "./Tip.vue_vue_type_script_setup_true_lang-BVeN5TP1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { r as recoder } from "./recordHistory-CX6UkL3E.js";
import { d as useAppConfig, a as useUserInfoStore, c as cloneDeep } from "./index-FWk7a7hG.js";
import { r as recorderTypeOptions, t as textInfo, v as videoFormatOptions, q as qualityOptions, b as biliQualityOptions, c as biliStreamFormatOptions, d as biliStreamCodecOptions, e as douyuQualityOptions, f as douyuSourceOptions, g as douyuApiTypeOptions, h as douyuStreamCodecOptions, i as huyaQualityOptions, j as douyinStreamFormatOptions, k as huyaSourceOptions, l as huyaApiTypeOptions, m as douyinQualityOptions, n as douyinApiTypeOptions, o as tiktokQualityOptions, p as tiktokApiTypeOptions, a as recorderDebugLevelOptions } from "./recorder-h_P4r7Df.js";
import { u as useConfirm } from "./index--O4HUYks.js";
import { d as defaultRecordConfig } from "./enum-DWbwatii.js";
import { u as useNotification } from "./use-notification-Bzrm1lu9.js";
import { u as useBreakpoints } from "./useBreakpoints-y2ktmuab.js";
import { b as __unplugin_components_5, _ as __unplugin_components_2, a as __unplugin_components_1 } from "./Switch-n0tH4Ke1.js";
import { _ as __unplugin_components_2$1 } from "./Input-C3jgSm1V.js";
import { _ as __unplugin_components_1$1 } from "./Checkbox-Buw5q29r.js";
import { _ as __unplugin_components_1$2 } from "./InputNumber-DuVe1x-P.js";
import { _ as __unplugin_components_7 } from "./TimePicker-WQrinlQm.js";
const isImageSupportNativeLazy = isBrowser && "loading" in document.createElement("img");
function resolveOptionsAndHash(options = {}) {
  var _a;
  const {
    root = null
  } = options;
  return {
    hash: `${options.rootMargin || "0px 0px 0px 0px"}-${Array.isArray(options.threshold) ? options.threshold.join(",") : (_a = options.threshold) !== null && _a !== void 0 ? _a : "0"}`,
    options: Object.assign(Object.assign({}, options), {
      root: (typeof root === "string" ? document.querySelector(root) : root) || document.documentElement
    })
  };
}
const observers = /* @__PURE__ */ new WeakMap();
const unobserveHandleMap = /* @__PURE__ */ new WeakMap();
const shouldStartLoadingRefMap = /* @__PURE__ */ new WeakMap();
const observeIntersection = (el, options, shouldStartLoadingRef) => {
  if (!el) return () => {
  };
  const resolvedOptionsAndHash = resolveOptionsAndHash(options);
  const {
    root
  } = resolvedOptionsAndHash.options;
  let rootObservers;
  const _rootObservers = observers.get(root);
  if (_rootObservers) {
    rootObservers = _rootObservers;
  } else {
    rootObservers = /* @__PURE__ */ new Map();
    observers.set(root, rootObservers);
  }
  let observer;
  let observerAndObservedElements;
  if (rootObservers.has(resolvedOptionsAndHash.hash)) {
    observerAndObservedElements = rootObservers.get(resolvedOptionsAndHash.hash);
    if (!observerAndObservedElements[1].has(el)) {
      observer = observerAndObservedElements[0];
      observerAndObservedElements[1].add(el);
      observer.observe(el);
    }
  } else {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const _unobserve = unobserveHandleMap.get(entry.target);
          const _shouldStartLoadingRef = shouldStartLoadingRefMap.get(entry.target);
          if (_unobserve) _unobserve();
          if (_shouldStartLoadingRef) {
            _shouldStartLoadingRef.value = true;
          }
        }
      });
    }, resolvedOptionsAndHash.options);
    observer.observe(el);
    observerAndObservedElements = [observer, /* @__PURE__ */ new Set([el])];
    rootObservers.set(resolvedOptionsAndHash.hash, observerAndObservedElements);
  }
  let unobservered = false;
  const unobserve = () => {
    if (unobservered) return;
    unobserveHandleMap.delete(el);
    shouldStartLoadingRefMap.delete(el);
    unobservered = true;
    if (observerAndObservedElements[1].has(el)) {
      observerAndObservedElements[0].unobserve(el);
      observerAndObservedElements[1].delete(el);
    }
    if (observerAndObservedElements[1].size <= 0) {
      rootObservers.delete(resolvedOptionsAndHash.hash);
    }
    if (!rootObservers.size) {
      observers.delete(root);
    }
  };
  unobserveHandleMap.set(el, unobserve);
  shouldStartLoadingRefMap.set(el, shouldStartLoadingRef);
  return unobserve;
};
const avatarGroupInjectionKey = createInjectionKey("n-avatar-group");
const style = cB("avatar", `
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`, [insideModal(c("&", "--n-merged-color: var(--n-color-modal);")), insidePopover(c("&", "--n-merged-color: var(--n-color-popover);")), c("img", `
 width: 100%;
 height: 100%;
 `), cE("text", `
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `), cB("icon", `
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `), cE("text", "line-height: 1.25")]);
const avatarProps = Object.assign(Object.assign({}, useTheme.props), {
  size: [String, Number],
  src: String,
  circle: {
    type: Boolean,
    default: void 0
  },
  objectFit: String,
  round: {
    type: Boolean,
    default: void 0
  },
  bordered: {
    type: Boolean,
    default: void 0
  },
  onError: Function,
  fallbackSrc: String,
  intersectionObserverOptions: Object,
  lazy: Boolean,
  onLoad: Function,
  renderPlaceholder: Function,
  renderFallback: Function,
  imgProps: Object,
  /** @deprecated */
  color: String
});
const __unplugin_components_0 = defineComponent({
  name: "Avatar",
  props: avatarProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const hasLoadErrorRef = ref(false);
    let memoedTextHtml = null;
    const textRef = ref(null);
    const selfRef = ref(null);
    const fitTextTransform = () => {
      const {
        value: textEl
      } = textRef;
      if (textEl) {
        if (memoedTextHtml === null || memoedTextHtml !== textEl.innerHTML) {
          memoedTextHtml = textEl.innerHTML;
          const {
            value: selfEl
          } = selfRef;
          if (selfEl) {
            const {
              offsetWidth: elWidth,
              offsetHeight: elHeight
            } = selfEl;
            const {
              offsetWidth: textWidth,
              offsetHeight: textHeight
            } = textEl;
            const radix = 0.9;
            const ratio = Math.min(elWidth / textWidth * radix, elHeight / textHeight * radix, 1);
            textEl.style.transform = `translateX(-50%) translateY(-50%) scale(${ratio})`;
          }
        }
      }
    };
    const NAvatarGroup = inject(avatarGroupInjectionKey, null);
    const mergedSizeRef = computed(() => {
      const {
        size
      } = props;
      if (size) return size;
      const {
        size: avatarGroupSize
      } = NAvatarGroup || {};
      if (avatarGroupSize) return avatarGroupSize;
      return "medium";
    });
    const themeRef = useTheme("Avatar", "-avatar", style, avatarLight, props, mergedClsPrefixRef);
    const TagInjection = inject(tagInjectionKey, null);
    const mergedRoundRef = computed(() => {
      if (NAvatarGroup) return true;
      const {
        round,
        circle
      } = props;
      if (round !== void 0 || circle !== void 0) return round || circle;
      if (TagInjection) {
        return TagInjection.roundRef.value;
      }
      return false;
    });
    const mergedBorderedRef = computed(() => {
      if (NAvatarGroup) return true;
      return props.bordered || false;
    });
    const cssVarsRef = computed(() => {
      const size = mergedSizeRef.value;
      const round = mergedRoundRef.value;
      const bordered = mergedBorderedRef.value;
      const {
        color: propColor
      } = props;
      const {
        self: {
          borderRadius,
          fontSize,
          color,
          border,
          colorModal,
          colorPopover
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      let height;
      if (typeof size === "number") {
        height = `${size}px`;
      } else {
        height = themeRef.value.self[createKey("height", size)];
      }
      return {
        "--n-font-size": fontSize,
        "--n-border": bordered ? border : "none",
        "--n-border-radius": round ? "50%" : borderRadius,
        "--n-color": propColor || color,
        "--n-color-modal": propColor || colorModal,
        "--n-color-popover": propColor || colorPopover,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-merged-size": `var(--n-avatar-size-override, ${height})`
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("avatar", computed(() => {
      const size = mergedSizeRef.value;
      const round = mergedRoundRef.value;
      const bordered = mergedBorderedRef.value;
      const {
        color
      } = props;
      let hash = "";
      if (size) {
        if (typeof size === "number") {
          hash += `a${size}`;
        } else {
          hash += size[0];
        }
      }
      if (round) {
        hash += "b";
      }
      if (bordered) {
        hash += "c";
      }
      if (color) {
        hash += color2Class(color);
      }
      return hash;
    }), cssVarsRef, props) : void 0;
    const shouldStartLoadingRef = ref(!props.lazy);
    onMounted(() => {
      if (props.lazy && props.intersectionObserverOptions) {
        let unobserve;
        const stopWatchHandle = watchEffect(() => {
          unobserve === null || unobserve === void 0 ? void 0 : unobserve();
          unobserve = void 0;
          if (props.lazy) {
            unobserve = observeIntersection(selfRef.value, props.intersectionObserverOptions, shouldStartLoadingRef);
          }
        });
        onBeforeUnmount(() => {
          stopWatchHandle();
          unobserve === null || unobserve === void 0 ? void 0 : unobserve();
        });
      }
    });
    watch(() => {
      var _a;
      return props.src || ((_a = props.imgProps) === null || _a === void 0 ? void 0 : _a.src);
    }, () => {
      hasLoadErrorRef.value = false;
    });
    const loadedRef = ref(!props.lazy);
    return {
      textRef,
      selfRef,
      mergedRoundRef,
      mergedClsPrefix: mergedClsPrefixRef,
      fitTextTransform,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      hasLoadError: hasLoadErrorRef,
      shouldStartLoading: shouldStartLoadingRef,
      loaded: loadedRef,
      mergedOnError: (e) => {
        if (!shouldStartLoadingRef.value) return;
        hasLoadErrorRef.value = true;
        const {
          onError,
          imgProps: {
            onError: imgPropsOnError
          } = {}
        } = props;
        onError === null || onError === void 0 ? void 0 : onError(e);
        imgPropsOnError === null || imgPropsOnError === void 0 ? void 0 : imgPropsOnError(e);
      },
      mergedOnLoad: (e) => {
        const {
          onLoad,
          imgProps: {
            onLoad: imgPropsOnLoad
          } = {}
        } = props;
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(e);
        imgPropsOnLoad === null || imgPropsOnLoad === void 0 ? void 0 : imgPropsOnLoad(e);
        loadedRef.value = true;
      }
    };
  },
  render() {
    var _a, _b;
    const {
      $slots,
      src,
      mergedClsPrefix,
      lazy,
      onRender,
      loaded,
      hasLoadError,
      imgProps = {}
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    let img;
    const placeholderNode = !loaded && !hasLoadError && (this.renderPlaceholder ? this.renderPlaceholder() : (_b = (_a = this.$slots).placeholder) === null || _b === void 0 ? void 0 : _b.call(_a));
    if (this.hasLoadError) {
      img = this.renderFallback ? this.renderFallback() : resolveSlot($slots.fallback, () => [h("img", {
        src: this.fallbackSrc,
        style: {
          objectFit: this.objectFit
        }
      })]);
    } else {
      img = resolveWrappedSlot($slots.default, (children) => {
        if (children) {
          return h(VResizeObserver, {
            onResize: this.fitTextTransform
          }, {
            default: () => h("span", {
              ref: "textRef",
              class: `${mergedClsPrefix}-avatar__text`
            }, children)
          });
        } else if (src || imgProps.src) {
          const loadSrc = this.src || imgProps.src;
          return h("img", Object.assign(Object.assign({}, imgProps), {
            loading: (
              // If interseciton observer options is set, do not use native lazy
              isImageSupportNativeLazy && !this.intersectionObserverOptions && lazy ? "lazy" : "eager"
            ),
            src: lazy && this.intersectionObserverOptions ? this.shouldStartLoading ? loadSrc : void 0 : loadSrc,
            "data-image-src": loadSrc,
            onLoad: this.mergedOnLoad,
            onError: this.mergedOnError,
            style: [imgProps.style || "", {
              objectFit: this.objectFit
            }, placeholderNode ? {
              height: "0",
              width: "0",
              visibility: "hidden",
              position: "absolute"
            } : ""]
          }));
        }
      });
    }
    return h("span", {
      ref: "selfRef",
      class: [`${mergedClsPrefix}-avatar`, this.themeClass],
      style: this.cssVars
    }, img, lazy && placeholderNode);
  }
});
const _hoisted_1 = { class: "footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "addModal",
  props: /* @__PURE__ */ mergeModels({
    id: {}
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["confirm"], ["update:visible"]),
  setup(__props, { emit: __emit }) {
    const notice = useNotification();
    const { appConfig } = storeToRefs(useAppConfig());
    const { userList } = storeToRefs(useUserInfoStore());
    const showModal = useModel(__props, "visible");
    const props = __props;
    const emits = __emit;
    const { isMobile } = useBreakpoints();
    const labelWidth = computed(() => {
      return isMobile.value ? "100px" : "150px";
    });
    const globalFieldsObj = ref(
      {
        quality: true,
        disableProvideCommentsWhenRecording: true,
        saveGiftDanma: true,
        saveSCDanma: true,
        segment: true,
        uid: true,
        saveCover: true,
        convert2Mp4: true,
        qualityRetry: true,
        formatName: true,
        useM3U8Proxy: true,
        customHost: true,
        segmentOnTitleChange: true,
        codecName: true,
        source: true,
        videoFormat: true,
        recorderType: true,
        cookie: true,
        proxy: true,
        doubleScreen: true,
        useServerTimestamp: true,
        debugLevel: true,
        api: true
      }
    );
    const recordConfig = cloneDeep(defaultRecordConfig);
    const config = ref(recordConfig);
    const confirmDialog = useConfirm();
    const confirm = async () => {
      if (!config.value.channelId) {
        notice.error({
          title: "请输入正确的房间链接",
          duration: 1e3
        });
        return;
      }
      if (config.value.providerId === "Bilibili" && !config.value.uid) {
        const [status] = await confirmDialog.warning({
          title: "确认添加",
          content: `B站录制高清画质需要设置账号，你可能尚未设置，尽可能使用使用小号，使用此功能默认需要你为可能的风控负责，是否继续？`,
          showCheckbox: true,
          showAgainKey: "recorder-bili-account"
        });
        if (!status) return;
      }
      config.value.noGlobalFollowFields = Object.keys(globalFieldsObj.value).filter((key) => !globalFieldsObj.value[key]);
      if (isEdit.value) {
        if (!props.id) return;
        await recoder.update(props.id, { id: props.id, ...config.value });
      } else {
        await recoder.add(config.value);
      }
      emits("confirm");
      showModal.value = false;
    };
    const cancel = () => {
      showModal.value = false;
    };
    const getRecordSetting = async () => {
      if (!props.id) return;
      config.value = await recoder.get(props.id);
      if (!config.value.handleTime) {
        config.value.handleTime = [null, null];
      }
      if (!config.value.weight) {
        config.value.weight = 10;
      }
      if (config.value.chargeLiveNotification === void 0) {
        config.value.chargeLiveNotification = true;
      }
    };
    const isEdit = computed(() => !!props.id);
    const channelIdUrl = ref("");
    const owner = ref("");
    const channelIdResolving = ref(false);
    const onChannelIdInputEnd = async () => {
      if (!channelIdUrl.value) return;
      channelIdResolving.value = true;
      try {
        const res = await recoder.resolve(channelIdUrl.value);
        if (!res) {
          notice.error({
            title: "解析失败",
            duration: 1e3
          });
          return;
        }
        initGlobalFields();
        config.value = res;
        owner.value = res.remarks || "";
      } finally {
        channelIdResolving.value = false;
      }
    };
    const initGlobalFields = () => {
      globalFieldsObj.value = {
        quality: !(config.value?.noGlobalFollowFields ?? []).includes("quality"),
        disableProvideCommentsWhenRecording: !(config.value?.noGlobalFollowFields ?? []).includes(
          "disableProvideCommentsWhenRecording"
        ),
        saveGiftDanma: !(config.value?.noGlobalFollowFields ?? []).includes("saveGiftDanma"),
        saveSCDanma: !(config.value?.noGlobalFollowFields ?? []).includes("saveSCDanma"),
        segment: !(config.value?.noGlobalFollowFields ?? []).includes("segment"),
        uid: !(config.value?.noGlobalFollowFields ?? []).includes("uid"),
        saveCover: !(config.value?.noGlobalFollowFields ?? []).includes("saveCover"),
        convert2Mp4: !(config.value?.noGlobalFollowFields ?? []).includes("convert2Mp4"),
        qualityRetry: !(config.value?.noGlobalFollowFields ?? []).includes("qualityRetry"),
        formatName: !(config.value?.noGlobalFollowFields ?? []).includes("formatName"),
        useM3U8Proxy: !(config.value?.noGlobalFollowFields ?? []).includes("useM3U8Proxy"),
        customHost: !(config.value?.noGlobalFollowFields ?? []).includes("customHost"),
        segmentOnTitleChange: !(config.value?.noGlobalFollowFields ?? []).includes(
          "segmentOnTitleChange"
        ),
        codecName: !(config.value?.noGlobalFollowFields ?? []).includes("codecName"),
        source: !(config.value?.noGlobalFollowFields ?? []).includes("source"),
        videoFormat: !(config.value?.noGlobalFollowFields ?? []).includes("videoFormat"),
        recorderType: !(config.value?.noGlobalFollowFields ?? []).includes("recorderType"),
        cookie: !(config.value?.noGlobalFollowFields ?? []).includes("cookie"),
        proxy: !(config.value?.noGlobalFollowFields ?? []).includes("proxy"),
        doubleScreen: !(config.value?.noGlobalFollowFields ?? []).includes("doubleScreen"),
        useServerTimestamp: !(config.value?.noGlobalFollowFields ?? []).includes("useServerTimestamp"),
        debugLevel: !(config.value?.noGlobalFollowFields ?? []).includes("debugLevel"),
        api: !(config.value?.noGlobalFollowFields ?? []).includes("api")
      };
    };
    watch(showModal, async (val) => {
      if (val) {
        channelIdUrl.value = "";
        owner.value = "";
        config.value = recordConfig;
        if (props.id) {
          await getRecordSetting();
        }
        initGlobalFields();
      }
    });
    watch(
      () => globalFieldsObj.value,
      (val) => {
        console.log("globalFieldsObj changed:", val, config.value);
        if (val.quality) {
          if (config.value.providerId === "Bilibili") {
            config.value.quality = appConfig.value.recorder.bilibili.quality;
          } else if (config.value.providerId === "DouYu") {
            config.value.quality = appConfig.value.recorder.douyu.quality;
          } else if (config.value.providerId === "HuYa") {
            config.value.quality = appConfig.value.recorder.huya.quality;
          } else if (config.value.providerId === "DouYin") {
            config.value.quality = appConfig.value.recorder.douyin.quality;
          } else if (config.value.providerId === "TikTok") {
            config.value.quality = appConfig.value.recorder.tiktok.quality;
          } else {
            config.value.quality = appConfig.value.recorder.quality;
          }
        }
        if (val.formatName) {
          if (config.value.providerId === "Bilibili") {
            config.value.formatName = appConfig.value.recorder.bilibili.formatName;
          } else if (config.value.providerId === "DouYin") {
            config.value.formatName = appConfig.value.recorder.douyin.formatName;
          } else if (config.value.providerId === "HuYa") {
            config.value.formatName = appConfig.value.recorder.huya.formatName;
          } else if (config.value.providerId === "TikTok") {
            config.value.formatName = appConfig.value.recorder.tiktok.formatName;
          }
        }
        if (val.disableProvideCommentsWhenRecording) {
          config.value.disableProvideCommentsWhenRecording = appConfig.value.recorder.disableProvideCommentsWhenRecording;
        }
        if (val.saveGiftDanma) {
          config.value.saveGiftDanma = appConfig.value.recorder.saveGiftDanma;
        }
        if (val.saveSCDanma) {
          config.value.saveSCDanma = appConfig.value.recorder.saveSCDanma;
        }
        if (val.segment) {
          config.value.segment = appConfig.value.recorder.segment;
        }
        if (val.uid) {
          if (config.value.providerId === "Bilibili") {
            config.value.uid = appConfig.value.recorder.bilibili.uid;
          }
        }
        if (val.saveCover) {
          config.value.saveCover = appConfig.value.recorder.saveCover;
        }
        if (val.convert2Mp4) {
          config.value.convert2Mp4 = appConfig.value.recorder.convert2Mp4;
        }
        if (val.qualityRetry) {
          config.value.qualityRetry = appConfig.value.recorder.qualityRetry;
        }
        if (val.useM3U8Proxy) {
          config.value.useM3U8Proxy = appConfig.value.recorder.bilibili.useM3U8Proxy;
        }
        if (val.codecName) {
          if (config.value.providerId === "Bilibili") {
            config.value.codecName = appConfig.value.recorder.bilibili.codecName;
          } else if (config.value.providerId === "DouYu") {
            config.value.codecName = appConfig.value.recorder.douyu.codecName;
          } else if (config.value.providerId === "TikTok") {
            config.value.codecName = appConfig.value.recorder.tiktok.codecName;
          }
        }
        if (val.source) {
          if (config.value.providerId === "DouYu") {
            config.value.source = appConfig.value.recorder.douyu.source;
          } else if (config.value.providerId === "HuYa") {
            config.value.source = appConfig.value.recorder.huya.source;
          } else {
            config.value.source = "auto";
          }
        }
        if (val.videoFormat) {
          config.value.videoFormat = appConfig.value.recorder.videoFormat;
        }
        if (val.recorderType) {
          config.value.recorderType = appConfig.value.recorder.recorderType;
        }
        if (val.cookie) {
          if (config.value.providerId === "DouYin") {
            config.value.cookie = appConfig.value.recorder.douyin.cookie;
          } else if (config.value.providerId === "XHS") {
            config.value.cookie = appConfig.value.recorder.xhs.cookie;
          } else if (config.value.providerId === "TikTok") {
            config.value.cookie = appConfig.value.recorder.tiktok.cookie;
          }
        }
        if (val.proxy && config.value.providerId === "TikTok") {
          config.value.proxy = appConfig.value.recorder.tiktok.proxy;
        }
        if (val.doubleScreen) {
          config.value.doubleScreen = appConfig.value.recorder.douyin.doubleScreen;
        }
        if (val.useServerTimestamp) {
          config.value.useServerTimestamp = appConfig.value.recorder.useServerTimestamp;
        }
        if (val.debugLevel) {
          config.value.debugLevel = appConfig.value.recorder.debugLevel;
        }
        if (val.api) {
          if (config.value.providerId === "DouYin") {
            config.value.api = appConfig.value.recorder.douyin.api;
          } else if (config.value.providerId === "HuYa") {
            config.value.api = appConfig.value.recorder.huya.api;
          } else if (config.value.providerId === "DouYu") {
            config.value.api = appConfig.value.recorder.douyu.api;
          } else if (config.value.providerId === "TikTok") {
            config.value.api = appConfig.value.recorder.tiktok.api;
          }
        }
        if (val.customHost) {
          config.value.customHost = appConfig.value.recorder.bilibili.customHost;
        }
        if (val.segmentOnTitleChange) {
          config.value.segmentOnTitleChange = appConfig.value.recorder.bilibili.segmentOnTitleChange;
        }
      },
      {
        deep: true
      }
    );
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$1;
      const _component_n_input = __unplugin_components_2$1;
      const _component_n_form_item = __unplugin_components_2;
      const _component_n_switch = __unplugin_components_1;
      const _component_n_select = __unplugin_components_0$1;
      const _component_n_checkbox = __unplugin_components_1$1;
      const _component_n_input_number = __unplugin_components_1$2;
      const _component_n_time_picker = __unplugin_components_7;
      const _component_n_form = __unplugin_components_5;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_3$1;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[94] || (_cache[94] = ($event) => showModal.value = $event),
        "show-icon": false,
        closable: false
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "700px" },
            bordered: false,
            size: "huge",
            role: "dialog",
            "aria-modal": "true",
            class: "card"
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(_component_n_button, {
                  class: "btn",
                  onClick: cancel
                }, {
                  default: withCtx(() => _cache[147] || (_cache[147] = [
                    createTextVNode(" 取消 ")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "primary",
                  class: "btn",
                  onClick: confirm
                }, {
                  default: withCtx(() => _cache[148] || (_cache[148] = [
                    createTextVNode(" 确认 ")
                  ])),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n_form, {
                "label-placement": "left",
                "label-width": unref(labelWidth)
              }, {
                default: withCtx(() => [
                  !unref(isEdit) ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                    label: withCtx(() => [
                      createVNode(_component_Tip, {
                        text: "直播间链接",
                        tip: "如果链接无法解析，请尝试使用标准直播间链接<br/>斗鱼：https://www.douyu.com/房间号<br/>虎牙：https://www.huya.com/房间号<br/>B站：https://live.bilibili.com/房间号<br/>抖音：https://live.douyin.com/房间号<br/>抖音：https://www.douyin.com/user/xxxxx<br/>小红书：http://xhslink.com/m/54KhCYhGUZA（手机端分享链接）<br/>TikTok：https://www.tiktok.com/@用户名/live"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n_input, {
                        value: unref(channelIdUrl),
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(channelIdUrl) ? channelIdUrl.value = $event : null),
                        valueModifiers: { trim: true },
                        placeholder: "输入后自动解析",
                        loading: unref(channelIdResolving),
                        onBlur: onChannelIdInputEnd
                      }, null, 8, ["value", "loading"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(config).channelId ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    !unref(isEdit) ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                      label: withCtx(() => _cache[95] || (_cache[95] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 主播名称 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(owner),
                          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(owner) ? owner.value = $event : null),
                          valueModifiers: { trim: true },
                          disabled: true,
                          placeholder: "输入房间链接后自动解析"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_n_form_item, { disabled: true }, {
                      label: withCtx(() => _cache[96] || (_cache[96] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 房间号 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(config).channelId,
                          "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(config).channelId = $event),
                          valueModifiers: { trim: true },
                          disabled: true,
                          placeholder: "输入房间链接后自动解析"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, { disabled: unref(isEdit) }, {
                      label: withCtx(() => _cache[97] || (_cache[97] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 备注 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(config).remarks,
                          "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(config).remarks = $event),
                          placeholder: "请输入备注（可选）"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => _cache[98] || (_cache[98] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 自动录制 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: unref(config).disableAutoCheck,
                          "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(config).disableAutoCheck = $event),
                          "checked-value": false,
                          "unchecked-value": true
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "发送至webhook",
                          tip: "你可以在设置中进行处理，主要用于弹幕压制以及上传功能"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: unref(config).sendToWebhook,
                          "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(config).sendToWebhook = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    _cache[144] || (_cache[144] = createBaseVNode("h2", null, "文件", -1)),
                    true ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).common.recorderType.text,
                            tip: unref(textInfo).common.recorderType.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).recorderType,
                            "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(config).recorderType = $event),
                            options: unref(recorderTypeOptions),
                            disabled: unref(globalFieldsObj).recorderType
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).recorderType,
                            "onUpdate:checked": _cache[7] || (_cache[7] = ($event) => unref(globalFieldsObj).recorderType = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[99] || (_cache[99] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).common.format.text,
                            tip: unref(textInfo).common.format.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).videoFormat,
                            "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(config).videoFormat = $event),
                            options: unref(videoFormatOptions),
                            disabled: unref(globalFieldsObj).videoFormat
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).videoFormat,
                            "onUpdate:checked": _cache[9] || (_cache[9] = ($event) => unref(globalFieldsObj).videoFormat = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[100] || (_cache[100] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "分段",
                            tip: "0为不分段，默认为时间分段，单位分钟。<br/>如果以B,KB,MB,GB结尾，会尝试使用文件大小分段，<b>不推荐在ffmpeg引擎中使用</b>"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).segment,
                            "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(config).segment = $event),
                            disabled: unref(globalFieldsObj).segment,
                            placeholder: "请输入分段参数"
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).segment,
                            "onUpdate:checked": _cache[11] || (_cache[11] = ($event) => unref(globalFieldsObj).segment = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[101] || (_cache[101] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      unref(config).providerId === "Bilibili" ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).bili.segmentOnTitleChange.text,
                            tip: unref(textInfo).bili.segmentOnTitleChange.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).segmentOnTitleChange,
                            "onUpdate:value": _cache[12] || (_cache[12] = ($event) => unref(config).segmentOnTitleChange = $event),
                            disabled: unref(globalFieldsObj).segmentOnTitleChange
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).segmentOnTitleChange,
                            "onUpdate:checked": _cache[13] || (_cache[13] = ($event) => unref(globalFieldsObj).segmentOnTitleChange = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[102] || (_cache[102] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).common.convert2Mp4.text,
                            tip: unref(textInfo).common.convert2Mp4.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).convert2Mp4,
                            "onUpdate:value": _cache[14] || (_cache[14] = ($event) => unref(config).convert2Mp4 = $event),
                            disabled: unref(globalFieldsObj).convert2Mp4
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).convert2Mp4,
                            "onUpdate:checked": _cache[15] || (_cache[15] = ($event) => unref(globalFieldsObj).convert2Mp4 = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[103] || (_cache[103] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    _cache[145] || (_cache[145] = createBaseVNode("h2", null, "直播流", -1)),
                    unref(config).providerId !== "Bilibili" && unref(config).providerId !== "DouYu" && unref(config).providerId !== "HuYa" && unref(config).providerId !== "DouYin" && unref(config).providerId !== "TikTok" ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
                      label: withCtx(() => _cache[104] || (_cache[104] = [
                        createBaseVNode("span", { class: "inline-flex" }, " 画质 ", -1)
                      ])),
                      default: withCtx(() => [
                        createVNode(_component_n_select, {
                          value: unref(config).quality,
                          "onUpdate:value": _cache[16] || (_cache[16] = ($event) => unref(config).quality = $event),
                          options: unref(qualityOptions),
                          disabled: unref(globalFieldsObj).quality
                        }, null, 8, ["value", "options", "disabled"]),
                        createVNode(_component_n_checkbox, {
                          checked: unref(globalFieldsObj).quality,
                          "onUpdate:checked": _cache[17] || (_cache[17] = ($event) => unref(globalFieldsObj).quality = $event),
                          class: "global-checkbox"
                        }, {
                          default: withCtx(() => _cache[105] || (_cache[105] = [
                            createTextVNode("全局")
                          ])),
                          _: 1
                        }, 8, ["checked"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(config).providerId === "Bilibili" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).bili.uid.text
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(textInfo).bili.uid.tip), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).uid,
                            "onUpdate:value": _cache[18] || (_cache[18] = ($event) => unref(config).uid = $event),
                            options: unref(userList),
                            "label-field": "name",
                            "value-field": "uid",
                            clearable: "",
                            disabled: unref(globalFieldsObj).uid
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).uid,
                            "onUpdate:checked": _cache[19] || (_cache[19] = ($event) => unref(globalFieldsObj).uid = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[106] || (_cache[106] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).bili.quality.text,
                            tip: unref(textInfo).bili.quality.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).quality,
                            "onUpdate:value": _cache[20] || (_cache[20] = ($event) => unref(config).quality = $event),
                            options: unref(biliQualityOptions),
                            disabled: unref(globalFieldsObj).quality
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).quality,
                            "onUpdate:checked": _cache[21] || (_cache[21] = ($event) => unref(globalFieldsObj).quality = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[107] || (_cache[107] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).bili.formatName.text,
                            tip: unref(textInfo).bili.formatName.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).formatName,
                            "onUpdate:value": _cache[22] || (_cache[22] = ($event) => unref(config).formatName = $event),
                            options: unref(biliStreamFormatOptions),
                            disabled: unref(globalFieldsObj).formatName
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).formatName,
                            "onUpdate:checked": _cache[23] || (_cache[23] = ($event) => unref(globalFieldsObj).formatName = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[108] || (_cache[108] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).bili.codecName.text,
                            tip: unref(textInfo).bili.codecName.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).codecName,
                            "onUpdate:value": _cache[24] || (_cache[24] = ($event) => unref(config).codecName = $event),
                            options: unref(biliStreamCodecOptions),
                            disabled: unref(globalFieldsObj).codecName
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).codecName,
                            "onUpdate:checked": _cache[25] || (_cache[25] = ($event) => unref(globalFieldsObj).codecName = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[109] || (_cache[109] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      unref(config).formatName !== "flv_only" ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            tip: unref(textInfo).bili.useM3U8Proxy.tip,
                            text: unref(textInfo).bili.useM3U8Proxy.text
                          }, null, 8, ["tip", "text"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).useM3U8Proxy,
                            "onUpdate:value": _cache[26] || (_cache[26] = ($event) => unref(config).useM3U8Proxy = $event),
                            disabled: unref(globalFieldsObj).useM3U8Proxy
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).useM3U8Proxy,
                            "onUpdate:checked": _cache[27] || (_cache[27] = ($event) => unref(globalFieldsObj).useM3U8Proxy = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[110] || (_cache[110] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            tip: unref(textInfo).bili.customHost.tip,
                            text: unref(textInfo).bili.customHost.text
                          }, null, 8, ["tip", "text"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).customHost,
                            "onUpdate:value": _cache[28] || (_cache[28] = ($event) => unref(config).customHost = $event),
                            placeholder: "例如：cn-jsyz-ct-03-32.bilivideo.com",
                            clearable: "",
                            disabled: unref(globalFieldsObj).customHost
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).customHost,
                            "onUpdate:checked": _cache[29] || (_cache[29] = ($event) => unref(globalFieldsObj).customHost = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[111] || (_cache[111] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).bili.titleKeywords.text,
                            tip: unref(textInfo).bili.titleKeywords.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).titleKeywords,
                            "onUpdate:value": _cache[30] || (_cache[30] = ($event) => unref(config).titleKeywords = $event),
                            placeholder: unref(textInfo).bili.titleKeywords.placeholder,
                            clearable: ""
                          }, null, 8, ["value", "placeholder"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    unref(config).providerId === "DouYu" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "画质",
                            tip: "如果找不到对应画质，会使用较清晰的源"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).quality,
                            "onUpdate:value": _cache[31] || (_cache[31] = ($event) => unref(config).quality = $event),
                            options: unref(douyuQualityOptions),
                            disabled: unref(globalFieldsObj).quality
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).quality,
                            "onUpdate:checked": _cache[32] || (_cache[32] = ($event) => unref(globalFieldsObj).quality = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[112] || (_cache[112] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "线路",
                            tip: "如果设置的不存在，会采用默认"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).source,
                            "onUpdate:value": _cache[33] || (_cache[33] = ($event) => unref(config).source = $event),
                            options: unref(douyuSourceOptions),
                            disabled: unref(globalFieldsObj).source
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).source,
                            "onUpdate:checked": _cache[34] || (_cache[34] = ($event) => unref(globalFieldsObj).source = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[113] || (_cache[113] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).douyu.api.text,
                            tip: unref(textInfo).douyu.api.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).api,
                            "onUpdate:value": _cache[35] || (_cache[35] = ($event) => unref(config).api = $event),
                            options: unref(douyuApiTypeOptions),
                            disabled: unref(globalFieldsObj).api
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).api,
                            "onUpdate:checked": _cache[36] || (_cache[36] = ($event) => unref(globalFieldsObj).api = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[114] || (_cache[114] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      unref(config).api !== "oldAPI" ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).douyu.codecName.text,
                            tip: unref(textInfo).douyu.codecName.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).codecName,
                            "onUpdate:value": _cache[37] || (_cache[37] = ($event) => unref(config).codecName = $event),
                            options: unref(douyuStreamCodecOptions),
                            disabled: unref(globalFieldsObj).codecName
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).codecName,
                            "onUpdate:checked": _cache[38] || (_cache[38] = ($event) => unref(globalFieldsObj).codecName = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[115] || (_cache[115] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).common.titleKeywords.text,
                            tip: unref(textInfo).common.titleKeywords.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).titleKeywords,
                            "onUpdate:value": _cache[39] || (_cache[39] = ($event) => unref(config).titleKeywords = $event),
                            placeholder: unref(textInfo).common.titleKeywords.placeholder,
                            clearable: ""
                          }, null, 8, ["value", "placeholder"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    unref(config).providerId === "HuYa" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "画质",
                            tip: "如果找不到对应画质，会使用较清晰的源"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).quality,
                            "onUpdate:value": _cache[40] || (_cache[40] = ($event) => unref(config).quality = $event),
                            options: unref(huyaQualityOptions),
                            disabled: unref(globalFieldsObj).quality
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).quality,
                            "onUpdate:checked": _cache[41] || (_cache[41] = ($event) => unref(globalFieldsObj).quality = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[116] || (_cache[116] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).douyin.formatName.text,
                            tip: unref(textInfo).douyin.formatName.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).formatName,
                            "onUpdate:value": _cache[42] || (_cache[42] = ($event) => unref(config).formatName = $event),
                            options: unref(douyinStreamFormatOptions),
                            disabled: unref(globalFieldsObj).formatName
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).formatName,
                            "onUpdate:checked": _cache[43] || (_cache[43] = ($event) => unref(globalFieldsObj).formatName = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[117] || (_cache[117] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "线路",
                            tip: "如果设置的不存在，会采用默认"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).source,
                            "onUpdate:value": _cache[44] || (_cache[44] = ($event) => unref(config).source = $event),
                            options: unref(huyaSourceOptions),
                            disabled: unref(globalFieldsObj).source
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).source,
                            "onUpdate:checked": _cache[45] || (_cache[45] = ($event) => unref(globalFieldsObj).source = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[118] || (_cache[118] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).huya.api.text,
                            tip: unref(textInfo).huya.api.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).api,
                            "onUpdate:value": _cache[46] || (_cache[46] = ($event) => unref(config).api = $event),
                            options: unref(huyaApiTypeOptions),
                            disabled: unref(globalFieldsObj).api
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).api,
                            "onUpdate:checked": _cache[47] || (_cache[47] = ($event) => unref(globalFieldsObj).api = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[119] || (_cache[119] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).common.titleKeywords.text,
                            tip: unref(textInfo).common.titleKeywords.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).titleKeywords,
                            "onUpdate:value": _cache[48] || (_cache[48] = ($event) => unref(config).titleKeywords = $event),
                            placeholder: unref(textInfo).common.titleKeywords.placeholder,
                            clearable: ""
                          }, null, 8, ["value", "placeholder"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    unref(config).providerId === "XHS" ? (openBlock(), createBlock(_component_n_form_item, { key: 6 }, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "Cookie",
                          tip: "用于自动监听直播间"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input, {
                          value: unref(config).cookie,
                          "onUpdate:value": _cache[49] || (_cache[49] = ($event) => unref(config).cookie = $event),
                          type: "password",
                          disabled: unref(globalFieldsObj).cookie
                        }, null, 8, ["value", "disabled"]),
                        createVNode(_component_n_checkbox, {
                          checked: unref(globalFieldsObj).cookie,
                          "onUpdate:checked": _cache[50] || (_cache[50] = ($event) => unref(globalFieldsObj).cookie = $event),
                          class: "global-checkbox"
                        }, {
                          default: withCtx(() => _cache[120] || (_cache[120] = [
                            createTextVNode("全局")
                          ])),
                          _: 1
                        }, 8, ["checked"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(config).providerId === "DouYin" ? (openBlock(), createElementBlock(Fragment, { key: 7 }, [
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).douyin.quality.text,
                            tip: unref(textInfo).douyin.quality.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).quality,
                            "onUpdate:value": _cache[51] || (_cache[51] = ($event) => unref(config).quality = $event),
                            options: unref(douyinQualityOptions),
                            disabled: unref(globalFieldsObj).quality
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).quality,
                            "onUpdate:checked": _cache[52] || (_cache[52] = ($event) => unref(globalFieldsObj).quality = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[121] || (_cache[121] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).douyin.formatName.text,
                            tip: unref(textInfo).douyin.formatName.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).formatName,
                            "onUpdate:value": _cache[53] || (_cache[53] = ($event) => unref(config).formatName = $event),
                            options: unref(douyinStreamFormatOptions),
                            disabled: unref(globalFieldsObj).formatName
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).formatName,
                            "onUpdate:checked": _cache[54] || (_cache[54] = ($event) => unref(globalFieldsObj).formatName = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[122] || (_cache[122] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).douyin.api.text,
                            tip: unref(textInfo).douyin.api.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).api,
                            "onUpdate:value": _cache[55] || (_cache[55] = ($event) => unref(config).api = $event),
                            options: unref(douyinApiTypeOptions),
                            disabled: unref(globalFieldsObj).api
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).api,
                            "onUpdate:checked": _cache[56] || (_cache[56] = ($event) => unref(globalFieldsObj).api = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[123] || (_cache[123] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "Cookie",
                            tip: "使用mobile接口时Cookie不会被应用"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).cookie,
                            "onUpdate:value": _cache[57] || (_cache[57] = ($event) => unref(config).cookie = $event),
                            type: "password",
                            disabled: unref(globalFieldsObj).cookie
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).cookie,
                            "onUpdate:checked": _cache[58] || (_cache[58] = ($event) => unref(globalFieldsObj).cookie = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[124] || (_cache[124] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "双屏直播流",
                            tip: "开启后如果是双屏直播，那么就使用拼接的流"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).doubleScreen,
                            "onUpdate:value": _cache[59] || (_cache[59] = ($event) => unref(config).doubleScreen = $event),
                            disabled: unref(globalFieldsObj).doubleScreen
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).doubleScreen,
                            "onUpdate:checked": _cache[60] || (_cache[60] = ($event) => unref(globalFieldsObj).doubleScreen = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[125] || (_cache[125] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).common.titleKeywords.text,
                            tip: unref(textInfo).common.titleKeywords.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).titleKeywords,
                            "onUpdate:value": _cache[61] || (_cache[61] = ($event) => unref(config).titleKeywords = $event),
                            placeholder: unref(textInfo).common.titleKeywords.placeholder,
                            clearable: ""
                          }, null, 8, ["value", "placeholder"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    unref(config).providerId === "TikTok" ? (openBlock(), createElementBlock(Fragment, { key: 8 }, [
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "画质",
                            tip: "如果指定画质不可用，会根据画质重试配置决定是否回退"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).quality,
                            "onUpdate:value": _cache[62] || (_cache[62] = ($event) => unref(config).quality = $event),
                            options: unref(tiktokQualityOptions),
                            disabled: unref(globalFieldsObj).quality
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).quality,
                            "onUpdate:checked": _cache[63] || (_cache[63] = ($event) => unref(globalFieldsObj).quality = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[126] || (_cache[126] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "流格式",
                            tip: "默认优先 FLV，其次 HLS"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).formatName,
                            "onUpdate:value": _cache[64] || (_cache[64] = ($event) => unref(config).formatName = $event),
                            options: unref(douyinStreamFormatOptions),
                            disabled: unref(globalFieldsObj).formatName
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).formatName,
                            "onUpdate:checked": _cache[65] || (_cache[65] = ($event) => unref(globalFieldsObj).formatName = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[127] || (_cache[127] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "流编码",
                            tip: "自动和 AVC 默认使用 AVC 流，也可优先或强制使用 HEVC"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).codecName,
                            "onUpdate:value": _cache[66] || (_cache[66] = ($event) => unref(config).codecName = $event),
                            options: unref(biliStreamCodecOptions),
                            disabled: unref(globalFieldsObj).codecName
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).codecName,
                            "onUpdate:checked": _cache[67] || (_cache[67] = ($event) => unref(globalFieldsObj).codecName = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[128] || (_cache[128] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "请求接口",
                            tip: "随机模式会在 web 接口和直播 html 解析之间随机选择"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).api,
                            "onUpdate:value": _cache[68] || (_cache[68] = ($event) => unref(config).api = $event),
                            options: unref(tiktokApiTypeOptions),
                            disabled: unref(globalFieldsObj).api
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).api,
                            "onUpdate:checked": _cache[69] || (_cache[69] = ($event) => unref(globalFieldsObj).api = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[129] || (_cache[129] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "Cookie",
                            tip: "遇到年龄限制或风控时可填写 TikTok Cookie"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).cookie,
                            "onUpdate:value": _cache[70] || (_cache[70] = ($event) => unref(config).cookie = $event),
                            type: "password",
                            disabled: unref(globalFieldsObj).cookie
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).cookie,
                            "onUpdate:checked": _cache[71] || (_cache[71] = ($event) => unref(globalFieldsObj).cookie = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[130] || (_cache[130] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: unref(textInfo).common.titleKeywords.text,
                            tip: unref(textInfo).common.titleKeywords.tip
                          }, null, 8, ["text", "tip"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: unref(config).titleKeywords,
                            "onUpdate:value": _cache[72] || (_cache[72] = ($event) => unref(config).titleKeywords = $event),
                            placeholder: unref(textInfo).common.titleKeywords.placeholder,
                            clearable: ""
                          }, null, 8, ["value", "placeholder"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    unref(config).providerId === "Bilibili" || unref(config).providerId === "DouYu" ? (openBlock(), createBlock(_component_n_form_item, { key: 9 }, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "只录制音频",
                          tip: "会选择纯音频流，B站只支持flv流，抖音请在画质中选择"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_switch, {
                          value: unref(config).onlyAudio,
                          "onUpdate:value": _cache[73] || (_cache[73] = ($event) => unref(config).onlyAudio = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_n_form_item, null, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          tip: unref(textInfo).bili.qualityRetry.tip,
                          text: unref(textInfo).bili.qualityRetry.text
                        }, null, 8, ["tip", "text"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_input_number, {
                          value: unref(config).qualityRetry,
                          "onUpdate:value": _cache[74] || (_cache[74] = ($event) => unref(config).qualityRetry = $event),
                          min: "-1",
                          step: "1",
                          disabled: unref(globalFieldsObj).qualityRetry
                        }, null, 8, ["value", "disabled"]),
                        createVNode(_component_n_checkbox, {
                          checked: unref(globalFieldsObj).qualityRetry,
                          "onUpdate:checked": _cache[75] || (_cache[75] = ($event) => unref(globalFieldsObj).qualityRetry = $event),
                          class: "global-checkbox"
                        }, {
                          default: withCtx(() => _cache[131] || (_cache[131] = [
                            createTextVNode("全局")
                          ])),
                          _: 1
                        }, 8, ["checked"])
                      ]),
                      _: 1
                    }),
                    !unref(config).disableAutoCheck ? (openBlock(), createBlock(_component_n_form_item, { key: 10 }, {
                      label: withCtx(() => [
                        createVNode(_component_Tip, {
                          text: "监控时间段",
                          tip: "仅在时间段内进行监控，有助于减少风控的可能，<b>注意是监控时间段并非录制时间段</b>"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_time_picker, {
                          "formatted-value": unref(config).handleTime[0],
                          "onUpdate:formattedValue": _cache[76] || (_cache[76] = ($event) => unref(config).handleTime[0] = $event),
                          clearable: ""
                        }, null, 8, ["formatted-value"]),
                        _cache[132] || (_cache[132] = createTextVNode(" ~ ")),
                        createVNode(_component_n_time_picker, {
                          "formatted-value": unref(config).handleTime[1],
                          "onUpdate:formattedValue": _cache[77] || (_cache[77] = ($event) => unref(config).handleTime[1] = $event),
                          clearable: ""
                        }, null, 8, ["formatted-value"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    _cache[146] || (_cache[146] = createBaseVNode("h2", null, "其他", -1)),
                    true ? (openBlock(), createElementBlock(Fragment, { key: 11 }, [
                      !unref(config).disableAutoCheck ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "录制开始通知",
                            tip: "默认使用系统通知，具体前往设置通知中修改，一般一场直播只会通知一次"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).liveStartNotification,
                            "onUpdate:value": _cache[78] || (_cache[78] = ($event) => unref(config).liveStartNotification = $event)
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      !unref(config).disableAutoCheck ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "录制结束通知",
                            tip: "默认使用系统通知，具体前往设置通知中修改，会在一次录制结束后三分钟检查录制状态，如果为不在录制中状态，则进行通知"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).liveEndNotification,
                            "onUpdate:value": _cache[79] || (_cache[79] = ($event) => unref(config).liveEndNotification = $event)
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      !unref(config).disableAutoCheck && unref(config).providerId === "Bilibili" ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "付费直播推送",
                            tip: "检测到付费直播(DRM 加密直播)时推送通知。此类直播为 DRM 加密，无法自动录制，仅作提醒。"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).chargeLiveNotification,
                            "onUpdate:value": _cache[80] || (_cache[80] = ($event) => unref(config).chargeLiveNotification = $event)
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "展示权重",
                            tip: "值越大，UI显示越靠前"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_input_number, {
                            value: unref(config).weight,
                            "onUpdate:value": _cache[81] || (_cache[81] = ($event) => unref(config).weight = $event),
                            min: "1",
                            step: "1",
                            style: { "width": "100%" }
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            tip: "如果你遇到特定直播间的录制问题，请打开此开关",
                            text: "调试模式"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_select, {
                            value: unref(config).debugLevel,
                            "onUpdate:value": _cache[82] || (_cache[82] = ($event) => unref(config).debugLevel = $event),
                            options: unref(recorderDebugLevelOptions),
                            style: { "width": "220px" },
                            disabled: unref(globalFieldsObj).debugLevel
                          }, null, 8, ["value", "options", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).debugLevel,
                            "onUpdate:checked": _cache[83] || (_cache[83] = ($event) => unref(globalFieldsObj).debugLevel = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[133] || (_cache[133] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      unref(config).providerId !== "XHS" ? (openBlock(), createBlock(_component_n_form_item, { key: 3 }, {
                        label: withCtx(() => _cache[134] || (_cache[134] = [
                          createBaseVNode("span", { class: "inline-flex" }, " 保存封面 ", -1)
                        ])),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).saveCover,
                            "onUpdate:value": _cache[84] || (_cache[84] = ($event) => unref(config).saveCover = $event),
                            disabled: unref(globalFieldsObj).saveCover
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).saveCover,
                            "onUpdate:checked": _cache[85] || (_cache[85] = ($event) => unref(globalFieldsObj).saveCover = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[135] || (_cache[135] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ], 64)) : createCommentVNode("", true),
                    unref(config).providerId !== "XHS" ? (openBlock(), createElementBlock(Fragment, { key: 12 }, [
                      _cache[143] || (_cache[143] = createBaseVNode("h2", null, "弹幕", -1)),
                      createVNode(_component_n_form_item, null, {
                        label: withCtx(() => _cache[136] || (_cache[136] = [
                          createBaseVNode("span", { class: "inline-flex" }, " 弹幕录制 ", -1)
                        ])),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).disableProvideCommentsWhenRecording,
                            "onUpdate:value": _cache[86] || (_cache[86] = ($event) => unref(config).disableProvideCommentsWhenRecording = $event),
                            disabled: unref(globalFieldsObj).disableProvideCommentsWhenRecording,
                            "checked-value": false,
                            "unchecked-value": true
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).disableProvideCommentsWhenRecording,
                            "onUpdate:checked": _cache[87] || (_cache[87] = ($event) => unref(globalFieldsObj).disableProvideCommentsWhenRecording = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[137] || (_cache[137] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      }),
                      !unref(config).disableProvideCommentsWhenRecording && unref(config).providerId !== "TikTok" ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                        label: withCtx(() => _cache[138] || (_cache[138] = [
                          createBaseVNode("span", { class: "inline-flex" }, " 保存礼物 ", -1)
                        ])),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).saveGiftDanma,
                            "onUpdate:value": _cache[88] || (_cache[88] = ($event) => unref(config).saveGiftDanma = $event),
                            disabled: unref(globalFieldsObj).saveGiftDanma
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).saveGiftDanma,
                            "onUpdate:checked": _cache[89] || (_cache[89] = ($event) => unref(globalFieldsObj).saveGiftDanma = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[139] || (_cache[139] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      !unref(config).disableProvideCommentsWhenRecording && ["Bilibili", "DouYu"].includes(unref(config).providerId) ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
                        label: withCtx(() => _cache[140] || (_cache[140] = [
                          createBaseVNode("span", { class: "inline-flex" }, " 高能弹幕(SC) ", -1)
                        ])),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).saveSCDanma,
                            "onUpdate:value": _cache[90] || (_cache[90] = ($event) => unref(config).saveSCDanma = $event),
                            disabled: unref(globalFieldsObj).saveSCDanma
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).saveSCDanma,
                            "onUpdate:checked": _cache[91] || (_cache[91] = ($event) => unref(globalFieldsObj).saveSCDanma = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[141] || (_cache[141] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      !unref(config).disableProvideCommentsWhenRecording && !["HuYa", "TikTok"].includes(unref(config).providerId) ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
                        label: withCtx(() => [
                          createVNode(_component_Tip, {
                            text: "服务端时间戳",
                            tip: "使用服务端返回的弹幕时间戳而非本地收到的时间戳，用于处理某些主播的弹幕时间戳不准确的问题"
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_switch, {
                            value: unref(config).useServerTimestamp,
                            "onUpdate:value": _cache[92] || (_cache[92] = ($event) => unref(config).useServerTimestamp = $event),
                            disabled: unref(globalFieldsObj).useServerTimestamp
                          }, null, 8, ["value", "disabled"]),
                          createVNode(_component_n_checkbox, {
                            checked: unref(globalFieldsObj).useServerTimestamp,
                            "onUpdate:checked": _cache[93] || (_cache[93] = ($event) => unref(globalFieldsObj).useServerTimestamp = $event),
                            class: "global-checkbox"
                          }, {
                            default: withCtx(() => _cache[142] || (_cache[142] = [
                              createTextVNode("全局")
                            ])),
                            _: 1
                          }, 8, ["checked"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ], 64)) : createCommentVNode("", true)
                  ], 64)) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["label-width"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const AddRecorderModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9b8018e4"]]);
export {
  AddRecorderModal as A,
  __unplugin_components_0 as _
};
