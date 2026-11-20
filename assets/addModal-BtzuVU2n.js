import { A as createTextVNode, B as mergeModels, C as computed, D as createElementBlock, E as createCommentVNode, F as h, G as onBeforeUnmount, J as onMounted, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, R as inject, T as createBlock, Tt as unref, Z as openBlock, Zt as toDisplayString, at as watch, ft as init_reactivity_esm_bundler, j as createVNode, mt as isRef, ot as watchEffect, rt as useModel, st as withCtx, v as Fragment, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { I as Input_default, p as recoder, t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { n as FormItem_default, r as Form_default } from "./HelpCircleOutline-C_D4MbKX.js";
import { a as tagInjectionKey, t as Select_default } from "./Select-DRoqCGUj.js";
import { c as useUserInfoStore, d as cloneDeep, r as useDouyuUserStore, t as useAppConfig } from "./stores-Cc_-mi5a.js";
import { n as InputNumber_default, t as Tip_default } from "./Tip-DCxAtPKG.js";
import { t as TimePicker_default } from "./TimePicker-DurCNh_G.js";
import { t as Checkbox_default } from "./Checkbox-C9dpLVBG.js";
import { n as useConfirm, r as useBreakpoints } from "./hooks-BIRfeUqh.js";
import { t as useNotification } from "./use-notification-BORvHMZV.js";
import { t as Switch_default } from "./Switch-CKftpity.js";
import { $n as color2Class, $r as cE, Bn as resolveWrappedSlot, E as Modal_default, K as Button, Mn as useThemeClass, Nn as useConfig, Rn as resolveSlot, St as useTheme, W as Card_default, X as avatarLight, Xr as c, Zr as cB, _r as createInjectionKey, fr as isBrowser, i as storeToRefs, ii as insidePopover, ni as createKey, ri as insideModal, tr as VResizeObserver_default } from "./index-CPQhEiaa.js";
import { r as defaultRecordConfig } from "./enum-BoxTpF4C.js";
import { _ as recorderTypeOptions, a as douyinCookieModeOptions, b as tiktokQualityOptions, c as douyuApiTypeOptions, d as douyuStreamCodecOptions, f as huyaApiTypeOptions, g as recorderDebugLevelOptions, h as qualityOptions, i as douyinApiTypeOptions, l as douyuQualityOptions, m as huyaSourceOptions, n as biliStreamCodecOptions, o as douyinQualityOptions, p as huyaQualityOptions, r as biliStreamFormatOptions, s as douyinStreamFormatOptions, t as biliQualityOptions, u as douyuSourceOptions, v as textInfo, x as videoFormatOptions, y as tiktokApiTypeOptions } from "./recorder-Ci2YrwWD.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/env/is-native-lazy-load.mjs
var isImageSupportNativeLazy = isBrowser && "loading" in document.createElement("img");
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/image/src/utils.mjs
function resolveOptionsAndHash(options = {}) {
	var _a;
	const { root = null } = options;
	return {
		hash: `${options.rootMargin || "0px 0px 0px 0px"}-${Array.isArray(options.threshold) ? options.threshold.join(",") : (_a = options.threshold) !== null && _a !== void 0 ? _a : "0"}`,
		options: Object.assign(Object.assign({}, options), { root: (typeof root === "string" ? document.querySelector(root) : root) || document.documentElement })
	};
}
var observers = /* @__PURE__ */ new WeakMap();
var unobserveHandleMap = /* @__PURE__ */ new WeakMap();
var shouldStartLoadingRefMap = /* @__PURE__ */ new WeakMap();
var observeIntersection = (el, options, shouldStartLoadingRef) => {
	if (!el) return () => {};
	const resolvedOptionsAndHash = resolveOptionsAndHash(options);
	const { root } = resolvedOptionsAndHash.options;
	let rootObservers;
	const _rootObservers = observers.get(root);
	if (_rootObservers) rootObservers = _rootObservers;
	else {
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
					if (_shouldStartLoadingRef) _shouldStartLoadingRef.value = true;
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
		if (observerAndObservedElements[1].size <= 0) rootObservers.delete(resolvedOptionsAndHash.hash);
		if (!rootObservers.size) observers.delete(root);
	};
	unobserveHandleMap.set(el, unobserve);
	shouldStartLoadingRefMap.set(el, shouldStartLoadingRef);
	return unobserve;
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/avatar/src/context.mjs
var avatarGroupInjectionKey = createInjectionKey("n-avatar-group");
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/avatar/src/styles/index.cssr.mjs
var index_cssr_default = cB("avatar", `
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
`, [
	insideModal(c("&", "--n-merged-color: var(--n-color-modal);")),
	insidePopover(c("&", "--n-merged-color: var(--n-color-popover);")),
	c("img", `
 width: 100%;
 height: 100%;
 `),
	cE("text", `
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),
	cB("icon", `
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),
	cE("text", "line-height: 1.25")
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/avatar/src/Avatar.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var avatarProps = Object.assign(Object.assign({}, useTheme.props), {
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
var Avatar_default = defineComponent({
	name: "Avatar",
	props: avatarProps,
	slots: Object,
	setup(props) {
		const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
		const hasLoadErrorRef = ref(false);
		let memoedTextHtml = null;
		const textRef = ref(null);
		const selfRef = ref(null);
		const fitTextTransform = () => {
			const { value: textEl } = textRef;
			if (textEl) {
				if (memoedTextHtml === null || memoedTextHtml !== textEl.innerHTML) {
					memoedTextHtml = textEl.innerHTML;
					const { value: selfEl } = selfRef;
					if (selfEl) {
						const { offsetWidth: elWidth, offsetHeight: elHeight } = selfEl;
						const { offsetWidth: textWidth, offsetHeight: textHeight } = textEl;
						const radix = .9;
						const ratio = Math.min(elWidth / textWidth * radix, elHeight / textHeight * radix, 1);
						textEl.style.transform = `translateX(-50%) translateY(-50%) scale(${ratio})`;
					}
				}
			}
		};
		const NAvatarGroup = inject(avatarGroupInjectionKey, null);
		const mergedSizeRef = computed(() => {
			const { size } = props;
			if (size) return size;
			const { size: avatarGroupSize } = NAvatarGroup || {};
			if (avatarGroupSize) return avatarGroupSize;
			return "medium";
		});
		const themeRef = useTheme("Avatar", "-avatar", index_cssr_default, avatarLight, props, mergedClsPrefixRef);
		const TagInjection = inject(tagInjectionKey, null);
		const mergedRoundRef = computed(() => {
			if (NAvatarGroup) return true;
			const { round, circle } = props;
			if (round !== void 0 || circle !== void 0) return round || circle;
			if (TagInjection) return TagInjection.roundRef.value;
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
			const { color: propColor } = props;
			const { self: { borderRadius, fontSize, color, border, colorModal, colorPopover }, common: { cubicBezierEaseInOut } } = themeRef.value;
			let height;
			if (typeof size === "number") height = `${size}px`;
			else height = themeRef.value.self[createKey("height", size)];
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
			const { color } = props;
			let hash = "";
			if (size) {
				if (typeof size === "number") hash += `a${size}`;
				else hash += size[0];
			}
			if (round) hash += "b";
			if (bordered) hash += "c";
			if (color) hash += color2Class(color);
			return hash;
		}), cssVarsRef, props) : void 0;
		const shouldStartLoadingRef = ref(!props.lazy);
		onMounted(() => {
			if (props.lazy && props.intersectionObserverOptions) {
				let unobserve;
				const stopWatchHandle = watchEffect(() => {
					unobserve === null || unobserve === void 0 || unobserve();
					unobserve = void 0;
					if (props.lazy) unobserve = observeIntersection(selfRef.value, props.intersectionObserverOptions, shouldStartLoadingRef);
				});
				onBeforeUnmount(() => {
					stopWatchHandle();
					unobserve === null || unobserve === void 0 || unobserve();
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
				const { onError, imgProps: { onError: imgPropsOnError } = {} } = props;
				onError === null || onError === void 0 || onError(e);
				imgPropsOnError === null || imgPropsOnError === void 0 || imgPropsOnError(e);
			},
			mergedOnLoad: (e) => {
				const { onLoad, imgProps: { onLoad: imgPropsOnLoad } = {} } = props;
				onLoad === null || onLoad === void 0 || onLoad(e);
				imgPropsOnLoad === null || imgPropsOnLoad === void 0 || imgPropsOnLoad(e);
				loadedRef.value = true;
			}
		};
	},
	render() {
		var _a, _b;
		const { $slots, src, mergedClsPrefix, lazy, onRender, loaded, hasLoadError, imgProps = {} } = this;
		onRender === null || onRender === void 0 || onRender();
		let img;
		const placeholderNode = !loaded && !hasLoadError && (this.renderPlaceholder ? this.renderPlaceholder() : (_b = (_a = this.$slots).placeholder) === null || _b === void 0 ? void 0 : _b.call(_a));
		if (this.hasLoadError) img = this.renderFallback ? this.renderFallback() : resolveSlot($slots.fallback, () => [h("img", {
			src: this.fallbackSrc,
			style: { objectFit: this.objectFit }
		})]);
		else img = resolveWrappedSlot($slots.default, (children) => {
			if (children) return h(VResizeObserver_default, { onResize: this.fitTextTransform }, { default: () => h("span", {
				ref: "textRef",
				class: `${mergedClsPrefix}-avatar__text`
			}, children) });
			else if (src || imgProps.src) {
				const loadSrc = this.src || imgProps.src;
				return h("img", Object.assign(Object.assign({}, imgProps), {
					loading: isImageSupportNativeLazy && !this.intersectionObserverOptions && lazy ? "lazy" : "eager",
					src: lazy && this.intersectionObserverOptions ? this.shouldStartLoading ? loadSrc : void 0 : loadSrc,
					"data-image-src": loadSrc,
					onLoad: this.mergedOnLoad,
					onError: this.mergedOnError,
					style: [
						imgProps.style || "",
						{ objectFit: this.objectFit },
						placeholderNode ? {
							height: "0",
							width: "0",
							visibility: "hidden",
							position: "absolute"
						} : ""
					]
				}));
			}
		});
		return h("span", {
			ref: "selfRef",
			class: [`${mergedClsPrefix}-avatar`, this.themeClass],
			style: this.cssVars
		}, img, lazy && placeholderNode);
	}
});
//#endregion
//#region src/renderer/src/pages/Tools/pages/Recorder/components/addModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "footer" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/Recorder/components/addModal.vue
var addModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "addModal",
	props: /*@__PURE__*/ mergeModels({ id: {} }, {
		"visible": {
			type: Boolean,
			required: true,
			default: false
		},
		"visibleModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["confirm"], ["update:visible"]),
	setup(__props, { emit: __emit }) {
		const notice = useNotification();
		const { appConfig } = storeToRefs(useAppConfig());
		const { userList } = storeToRefs(useUserInfoStore());
		const { userList: douyuUserList } = storeToRefs(useDouyuUserStore());
		const showModal = useModel(__props, "visible");
		const props = __props;
		const emits = __emit;
		const { isMobile } = useBreakpoints();
		const labelWidth = computed(() => {
			return isMobile.value ? "100px" : "150px";
		});
		const globalFieldsObj = ref({
			quality: true,
			disableProvideCommentsWhenRecording: true,
			saveGiftDanma: true,
			saveSCDanma: true,
			saveDanmaStats2DB: true,
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
			cookieMode: true,
			proxy: true,
			doubleScreen: true,
			useServerTimestamp: true,
			debugLevel: true,
			api: true
		});
		const recordConfig = cloneDeep(defaultRecordConfig);
		const config = ref(recordConfig);
		const xhsRedId = computed({
			get: () => String(config.value.uid ?? "").split("-")[1] ?? "",
			set: (value) => {
				const roomId = String(config.value.uid ?? "").split("-")[0];
				config.value.uid = `${roomId}-${value}`;
			}
		});
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
			if (config.value.providerId === "DouYu" && !config.value.uid) {
				const [status] = await confirmDialog.warning({
					title: "确认添加",
					content: `斗鱼录制高清画质需要设置账号，未登录也可能导致流过期时间为五分钟。你可能尚未设置账号，是否继续？`,
					showCheckbox: true,
					showAgainKey: "recorder-douyu-account"
				});
				if (!status) return;
			}
			config.value.noGlobalFollowFields = Object.keys(globalFieldsObj.value).filter((key) => !globalFieldsObj.value[key]);
			if (isEdit.value) {
				if (!props.id) return;
				await recoder.update(props.id, {
					id: props.id,
					...config.value
				});
			} else await recoder.add(config.value);
			emits("confirm");
			showModal.value = false;
		};
		const cancel = () => {
			showModal.value = false;
		};
		const getRecordSetting = async () => {
			if (!props.id) return;
			config.value = await recoder.get(props.id);
			config.value.cookieMode ??= "all";
			if (!config.value.handleTime) config.value.handleTime = [null, null];
			if (!config.value.weight) config.value.weight = 10;
			if (config.value.chargeLiveNotification === void 0) config.value.chargeLiveNotification = true;
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
				disableProvideCommentsWhenRecording: !(config.value?.noGlobalFollowFields ?? []).includes("disableProvideCommentsWhenRecording"),
				saveGiftDanma: !(config.value?.noGlobalFollowFields ?? []).includes("saveGiftDanma"),
				saveSCDanma: !(config.value?.noGlobalFollowFields ?? []).includes("saveSCDanma"),
				saveDanmaStats2DB: !(config.value?.noGlobalFollowFields ?? []).includes("saveDanmaStats2DB"),
				segment: !(config.value?.noGlobalFollowFields ?? []).includes("segment"),
				uid: !(config.value?.noGlobalFollowFields ?? []).includes("uid"),
				saveCover: !(config.value?.noGlobalFollowFields ?? []).includes("saveCover"),
				convert2Mp4: !(config.value?.noGlobalFollowFields ?? []).includes("convert2Mp4"),
				qualityRetry: !(config.value?.noGlobalFollowFields ?? []).includes("qualityRetry"),
				formatName: !(config.value?.noGlobalFollowFields ?? []).includes("formatName"),
				useM3U8Proxy: !(config.value?.noGlobalFollowFields ?? []).includes("useM3U8Proxy"),
				customHost: !(config.value?.noGlobalFollowFields ?? []).includes("customHost"),
				segmentOnTitleChange: !(config.value?.noGlobalFollowFields ?? []).includes("segmentOnTitleChange"),
				codecName: !(config.value?.noGlobalFollowFields ?? []).includes("codecName"),
				source: !(config.value?.noGlobalFollowFields ?? []).includes("source"),
				videoFormat: !(config.value?.noGlobalFollowFields ?? []).includes("videoFormat"),
				recorderType: !(config.value?.noGlobalFollowFields ?? []).includes("recorderType"),
				cookie: !(config.value?.noGlobalFollowFields ?? []).includes("cookie"),
				cookieMode: !(config.value?.noGlobalFollowFields ?? []).includes("cookieMode"),
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
				if (props.id) await getRecordSetting();
				initGlobalFields();
			}
		});
		watch(() => globalFieldsObj.value, (val) => {
			console.log("globalFieldsObj changed:", val, config.value);
			if (val.quality) {
				if (config.value.providerId === "Bilibili") config.value.quality = appConfig.value.recorder.bilibili.quality;
				else if (config.value.providerId === "DouYu") config.value.quality = appConfig.value.recorder.douyu.quality;
				else if (config.value.providerId === "HuYa") config.value.quality = appConfig.value.recorder.huya.quality;
				else if (config.value.providerId === "DouYin") config.value.quality = appConfig.value.recorder.douyin.quality;
				else if (config.value.providerId === "TikTok") config.value.quality = appConfig.value.recorder.tiktok.quality;
				else config.value.quality = appConfig.value.recorder.quality;
			}
			if (val.formatName) {
				if (config.value.providerId === "Bilibili") config.value.formatName = appConfig.value.recorder.bilibili.formatName;
				else if (config.value.providerId === "DouYin") config.value.formatName = appConfig.value.recorder.douyin.formatName;
				else if (config.value.providerId === "HuYa") config.value.formatName = appConfig.value.recorder.huya.formatName;
				else if (config.value.providerId === "TikTok") config.value.formatName = appConfig.value.recorder.tiktok.formatName;
			}
			if (val.disableProvideCommentsWhenRecording) config.value.disableProvideCommentsWhenRecording = appConfig.value.recorder.disableProvideCommentsWhenRecording;
			if (val.saveGiftDanma) config.value.saveGiftDanma = appConfig.value.recorder.saveGiftDanma;
			if (val.saveSCDanma) config.value.saveSCDanma = appConfig.value.recorder.saveSCDanma;
			if (val.saveDanmaStats2DB) config.value.saveDanmaStats2DB = appConfig.value.recorder.saveDanmaStats2DB;
			if (val.segment) config.value.segment = appConfig.value.recorder.segment;
			if (val.uid) {
				if (config.value.providerId === "Bilibili") config.value.uid = appConfig.value.recorder.bilibili.uid;
				else if (config.value.providerId === "DouYu") config.value.uid = appConfig.value.recorder.douyu.uid;
			}
			if (val.saveCover) config.value.saveCover = appConfig.value.recorder.saveCover;
			if (val.convert2Mp4) config.value.convert2Mp4 = appConfig.value.recorder.convert2Mp4;
			if (val.qualityRetry) config.value.qualityRetry = appConfig.value.recorder.qualityRetry;
			if (val.useM3U8Proxy) config.value.useM3U8Proxy = appConfig.value.recorder.bilibili.useM3U8Proxy;
			if (val.codecName) {
				if (config.value.providerId === "Bilibili") config.value.codecName = appConfig.value.recorder.bilibili.codecName;
				else if (config.value.providerId === "DouYu") config.value.codecName = appConfig.value.recorder.douyu.codecName;
				else if (config.value.providerId === "TikTok") config.value.codecName = appConfig.value.recorder.tiktok.codecName;
			}
			if (val.source) {
				if (config.value.providerId === "DouYu") config.value.source = appConfig.value.recorder.douyu.source;
				else if (config.value.providerId === "HuYa") config.value.source = appConfig.value.recorder.huya.source;
				else config.value.source = "auto";
			}
			if (val.videoFormat) config.value.videoFormat = appConfig.value.recorder.videoFormat;
			if (val.recorderType) config.value.recorderType = appConfig.value.recorder.recorderType;
			if (val.cookie) {
				if (config.value.providerId === "DouYin") config.value.cookie = appConfig.value.recorder.douyin.cookie;
				else if (config.value.providerId === "XHS") config.value.cookie = appConfig.value.recorder.xhs.cookie;
				else if (config.value.providerId === "TikTok") config.value.cookie = appConfig.value.recorder.tiktok.cookie;
			}
			if (val.cookieMode && config.value.providerId === "DouYin") config.value.cookieMode = appConfig.value.recorder.douyin.cookieMode ?? "all";
			if (val.proxy && config.value.providerId === "TikTok") config.value.proxy = appConfig.value.recorder.tiktok.proxy;
			if (val.doubleScreen) config.value.doubleScreen = appConfig.value.recorder.douyin.doubleScreen;
			if (val.useServerTimestamp) config.value.useServerTimestamp = appConfig.value.recorder.useServerTimestamp;
			if (val.debugLevel) config.value.debugLevel = appConfig.value.recorder.debugLevel;
			if (val.api) {
				if (config.value.providerId === "DouYin") config.value.api = appConfig.value.recorder.douyin.api;
				else if (config.value.providerId === "HuYa") config.value.api = appConfig.value.recorder.huya.api;
				else if (config.value.providerId === "DouYu") config.value.api = appConfig.value.recorder.douyu.api;
				else if (config.value.providerId === "TikTok") config.value.api = appConfig.value.recorder.tiktok.api;
			}
			if (val.customHost) config.value.customHost = appConfig.value.recorder.bilibili.customHost;
			if (val.segmentOnTitleChange) config.value.segmentOnTitleChange = appConfig.value.recorder.bilibili.segmentOnTitleChange;
		}, { deep: true });
		return (_ctx, _cache) => {
			const _component_Tip = Tip_default;
			const _component_n_input = Input_default;
			const _component_n_form_item = FormItem_default;
			const _component_n_switch = Switch_default;
			const _component_n_select = Select_default;
			const _component_n_checkbox = Checkbox_default;
			const _component_n_input_number = InputNumber_default;
			const _component_n_time_picker = TimePicker_default;
			const _component_n_form = Form_default;
			const _component_n_button = Button;
			const _component_n_card = Card_default;
			const _component_n_modal = Modal_default;
			return openBlock(), createBlock(_component_n_modal, {
				show: showModal.value,
				"onUpdate:show": _cache[101] || (_cache[101] = ($event) => showModal.value = $event),
				"show-icon": false,
				closable: false
			}, {
				default: withCtx(() => [createVNode(_component_n_card, {
					style: { "width": "700px" },
					bordered: false,
					size: "huge",
					role: "dialog",
					"aria-modal": "true",
					class: "card"
				}, {
					footer: withCtx(() => [createBaseVNode("div", _hoisted_1, [createVNode(_component_n_button, {
						class: "btn",
						onClick: cancel
					}, {
						default: withCtx(() => _cache[157] || (_cache[157] = [createTextVNode(" 取消 ")])),
						_: 1
					}), createVNode(_component_n_button, {
						type: "primary",
						class: "btn",
						onClick: confirm
					}, {
						default: withCtx(() => _cache[158] || (_cache[158] = [createTextVNode(" 确认 ")])),
						_: 1
					})])]),
					default: withCtx(() => [createVNode(_component_n_form, {
						"label-placement": "left",
						"label-width": unref(labelWidth)
					}, {
						default: withCtx(() => [!unref(isEdit) ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
							label: withCtx(() => [createVNode(_component_Tip, {
								text: "直播间链接",
								tip: "如果链接无法解析，请尝试使用标准直播间链接<br/>斗鱼：https://www.douyu.com/房间号<br/>虎牙：https://www.huya.com/房间号<br/>B站：https://live.bilibili.com/房间号<br/>抖音：https://live.douyin.com/房间号<br/>抖音：https://www.douyin.com/user/xxxxx<br/>小红书：http://xhslink.com/m/54KhCYhGUZA（手机端分享链接）<br/>TikTok：https://www.tiktok.com/@用户名/live"
							})]),
							default: withCtx(() => [createVNode(_component_n_input, {
								value: unref(channelIdUrl),
								"onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(channelIdUrl) ? channelIdUrl.value = $event : null),
								valueModifiers: { trim: true },
								placeholder: "输入后自动解析",
								loading: unref(channelIdResolving),
								onBlur: onChannelIdInputEnd
							}, null, 8, ["value", "loading"])]),
							_: 1
						})) : createCommentVNode("", true), unref(config).channelId ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
							!unref(isEdit) ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
								label: withCtx(() => _cache[102] || (_cache[102] = [createBaseVNode("span", { class: "inline-flex" }, " 主播名称 ", -1)])),
								default: withCtx(() => [createVNode(_component_n_input, {
									value: unref(owner),
									"onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(owner) ? owner.value = $event : null),
									valueModifiers: { trim: true },
									disabled: true,
									placeholder: "输入房间链接后自动解析"
								}, null, 8, ["value"])]),
								_: 1
							})) : createCommentVNode("", true),
							createVNode(_component_n_form_item, { disabled: true }, {
								label: withCtx(() => _cache[103] || (_cache[103] = [createBaseVNode("span", { class: "inline-flex" }, " 房间号 ", -1)])),
								default: withCtx(() => [createVNode(_component_n_input, {
									value: unref(config).channelId,
									"onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(config).channelId = $event),
									valueModifiers: { trim: true },
									disabled: true,
									placeholder: "输入房间链接后自动解析"
								}, null, 8, ["value"])]),
								_: 1
							}),
							unref(config).providerId === "XHS" ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
								label: withCtx(() => [createVNode(_component_Tip, {
									text: "小红书号",
									tip: "如果需要使用cookie，那么这个选项必须填写，否则无法使用cookie"
								})]),
								default: withCtx(() => [createVNode(_component_n_input, {
									value: unref(xhsRedId),
									"onUpdate:value": _cache[3] || (_cache[3] = ($event) => isRef(xhsRedId) ? xhsRedId.value = $event : null),
									valueModifiers: { trim: true },
									placeholder: "请输入小红书号（可选）"
								}, null, 8, ["value"])]),
								_: 1
							})) : createCommentVNode("", true),
							createVNode(_component_n_form_item, { disabled: unref(isEdit) }, {
								label: withCtx(() => _cache[104] || (_cache[104] = [createBaseVNode("span", { class: "inline-flex" }, " 备注 ", -1)])),
								default: withCtx(() => [createVNode(_component_n_input, {
									value: unref(config).remarks,
									"onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(config).remarks = $event),
									placeholder: "请输入备注（可选）"
								}, null, 8, ["value"])]),
								_: 1
							}, 8, ["disabled"]),
							createVNode(_component_n_form_item, null, {
								label: withCtx(() => _cache[105] || (_cache[105] = [createBaseVNode("span", { class: "inline-flex" }, " 自动录制 ", -1)])),
								default: withCtx(() => [createVNode(_component_n_switch, {
									value: unref(config).disableAutoCheck,
									"onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(config).disableAutoCheck = $event),
									"checked-value": false,
									"unchecked-value": true
								}, null, 8, ["value"])]),
								_: 1
							}),
							createVNode(_component_n_form_item, null, {
								label: withCtx(() => [createVNode(_component_Tip, {
									text: "发送至webhook",
									tip: "你可以在设置中进行处理，主要用于弹幕压制以及上传功能"
								})]),
								default: withCtx(() => [createVNode(_component_n_switch, {
									value: unref(config).sendToWebhook,
									"onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(config).sendToWebhook = $event)
								}, null, 8, ["value"])]),
								_: 1
							}),
							_cache[154] || (_cache[154] = createBaseVNode("h2", null, "文件", -1)),
							(openBlock(), createElementBlock(Fragment, { key: 2 }, [
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).common.recorderType.text,
										tip: unref(textInfo).common.recorderType.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).recorderType,
										"onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(config).recorderType = $event),
										options: unref(recorderTypeOptions),
										disabled: unref(globalFieldsObj).recorderType
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).recorderType,
										"onUpdate:checked": _cache[8] || (_cache[8] = ($event) => unref(globalFieldsObj).recorderType = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[106] || (_cache[106] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).common.format.text,
										tip: unref(textInfo).common.format.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).videoFormat,
										"onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(config).videoFormat = $event),
										options: unref(videoFormatOptions),
										disabled: unref(globalFieldsObj).videoFormat
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).videoFormat,
										"onUpdate:checked": _cache[10] || (_cache[10] = ($event) => unref(globalFieldsObj).videoFormat = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[107] || (_cache[107] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "分段",
										tip: "0为不分段，默认为时间分段，单位分钟。<br/>如果以B,KB,MB,GB结尾，会尝试使用文件大小分段，<b>不推荐在ffmpeg引擎中使用</b>"
									})]),
									default: withCtx(() => [createVNode(_component_n_input, {
										value: unref(config).segment,
										"onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(config).segment = $event),
										disabled: unref(globalFieldsObj).segment,
										placeholder: "请输入分段参数"
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).segment,
										"onUpdate:checked": _cache[12] || (_cache[12] = ($event) => unref(globalFieldsObj).segment = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[108] || (_cache[108] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								unref(config).providerId === "Bilibili" ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).bili.segmentOnTitleChange.text,
										tip: unref(textInfo).bili.segmentOnTitleChange.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_switch, {
										value: unref(config).segmentOnTitleChange,
										"onUpdate:value": _cache[13] || (_cache[13] = ($event) => unref(config).segmentOnTitleChange = $event),
										disabled: unref(globalFieldsObj).segmentOnTitleChange
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).segmentOnTitleChange,
										"onUpdate:checked": _cache[14] || (_cache[14] = ($event) => unref(globalFieldsObj).segmentOnTitleChange = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[109] || (_cache[109] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								})) : createCommentVNode("", true),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).common.convert2Mp4.text,
										tip: unref(textInfo).common.convert2Mp4.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_switch, {
										value: unref(config).convert2Mp4,
										"onUpdate:value": _cache[15] || (_cache[15] = ($event) => unref(config).convert2Mp4 = $event),
										disabled: unref(globalFieldsObj).convert2Mp4
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).convert2Mp4,
										"onUpdate:checked": _cache[16] || (_cache[16] = ($event) => unref(globalFieldsObj).convert2Mp4 = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[110] || (_cache[110] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								})
							], 64)),
							_cache[155] || (_cache[155] = createBaseVNode("h2", null, "直播流", -1)),
							unref(config).providerId !== "Bilibili" && unref(config).providerId !== "DouYu" && unref(config).providerId !== "HuYa" && unref(config).providerId !== "DouYin" && unref(config).providerId !== "TikTok" ? (openBlock(), createBlock(_component_n_form_item, { key: 3 }, {
								label: withCtx(() => _cache[111] || (_cache[111] = [createBaseVNode("span", { class: "inline-flex" }, " 画质 ", -1)])),
								default: withCtx(() => [createVNode(_component_n_select, {
									value: unref(config).quality,
									"onUpdate:value": _cache[17] || (_cache[17] = ($event) => unref(config).quality = $event),
									options: unref(qualityOptions),
									disabled: unref(globalFieldsObj).quality
								}, null, 8, [
									"value",
									"options",
									"disabled"
								]), createVNode(_component_n_checkbox, {
									checked: unref(globalFieldsObj).quality,
									"onUpdate:checked": _cache[18] || (_cache[18] = ($event) => unref(globalFieldsObj).quality = $event),
									class: "global-checkbox"
								}, {
									default: withCtx(() => _cache[112] || (_cache[112] = [createTextVNode("全局")])),
									_: 1
								}, 8, ["checked"])]),
								_: 1
							})) : createCommentVNode("", true),
							unref(config).providerId === "Bilibili" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, { text: unref(textInfo).bili.uid.text }, {
										default: withCtx(() => [createTextVNode(toDisplayString(unref(textInfo).bili.uid.tip), 1)]),
										_: 1
									}, 8, ["text"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).uid,
										"onUpdate:value": _cache[19] || (_cache[19] = ($event) => unref(config).uid = $event),
										options: unref(userList),
										"label-field": "name",
										"value-field": "uid",
										clearable: "",
										disabled: unref(globalFieldsObj).uid
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).uid,
										"onUpdate:checked": _cache[20] || (_cache[20] = ($event) => unref(globalFieldsObj).uid = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[113] || (_cache[113] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).bili.quality.text,
										tip: unref(textInfo).bili.quality.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).quality,
										"onUpdate:value": _cache[21] || (_cache[21] = ($event) => unref(config).quality = $event),
										options: unref(biliQualityOptions),
										disabled: unref(globalFieldsObj).quality
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).quality,
										"onUpdate:checked": _cache[22] || (_cache[22] = ($event) => unref(globalFieldsObj).quality = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[114] || (_cache[114] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).bili.formatName.text,
										tip: unref(textInfo).bili.formatName.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).formatName,
										"onUpdate:value": _cache[23] || (_cache[23] = ($event) => unref(config).formatName = $event),
										options: unref(biliStreamFormatOptions),
										disabled: unref(globalFieldsObj).formatName
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).formatName,
										"onUpdate:checked": _cache[24] || (_cache[24] = ($event) => unref(globalFieldsObj).formatName = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[115] || (_cache[115] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).bili.codecName.text,
										tip: unref(textInfo).bili.codecName.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).codecName,
										"onUpdate:value": _cache[25] || (_cache[25] = ($event) => unref(config).codecName = $event),
										options: unref(biliStreamCodecOptions),
										disabled: unref(globalFieldsObj).codecName
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).codecName,
										"onUpdate:checked": _cache[26] || (_cache[26] = ($event) => unref(globalFieldsObj).codecName = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[116] || (_cache[116] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								unref(config).formatName !== "flv_only" ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
									label: withCtx(() => [createVNode(_component_Tip, {
										tip: unref(textInfo).bili.useM3U8Proxy.tip,
										text: unref(textInfo).bili.useM3U8Proxy.text
									}, null, 8, ["tip", "text"])]),
									default: withCtx(() => [createVNode(_component_n_switch, {
										value: unref(config).useM3U8Proxy,
										"onUpdate:value": _cache[27] || (_cache[27] = ($event) => unref(config).useM3U8Proxy = $event),
										disabled: unref(globalFieldsObj).useM3U8Proxy
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).useM3U8Proxy,
										"onUpdate:checked": _cache[28] || (_cache[28] = ($event) => unref(globalFieldsObj).useM3U8Proxy = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[117] || (_cache[117] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								})) : createCommentVNode("", true),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										tip: unref(textInfo).bili.customHost.tip,
										text: unref(textInfo).bili.customHost.text
									}, null, 8, ["tip", "text"])]),
									default: withCtx(() => [createVNode(_component_n_input, {
										value: unref(config).customHost,
										"onUpdate:value": _cache[29] || (_cache[29] = ($event) => unref(config).customHost = $event),
										placeholder: "例如：cn-jsyz-ct-03-32.bilivideo.com",
										clearable: "",
										disabled: unref(globalFieldsObj).customHost
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).customHost,
										"onUpdate:checked": _cache[30] || (_cache[30] = ($event) => unref(globalFieldsObj).customHost = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[118] || (_cache[118] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).bili.titleKeywords.text,
										tip: unref(textInfo).bili.titleKeywords.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_input, {
										value: unref(config).titleKeywords,
										"onUpdate:value": _cache[31] || (_cache[31] = ($event) => unref(config).titleKeywords = $event),
										placeholder: unref(textInfo).bili.titleKeywords.placeholder,
										clearable: ""
									}, null, 8, ["value", "placeholder"])]),
									_: 1
								})
							], 64)) : createCommentVNode("", true),
							unref(config).providerId === "DouYu" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "画质",
										tip: "如果找不到对应画质，会使用较清晰的源"
									})]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).quality,
										"onUpdate:value": _cache[32] || (_cache[32] = ($event) => unref(config).quality = $event),
										options: unref(douyuQualityOptions),
										disabled: unref(globalFieldsObj).quality
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).quality,
										"onUpdate:checked": _cache[33] || (_cache[33] = ($event) => unref(globalFieldsObj).quality = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[119] || (_cache[119] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "线路",
										tip: "如果设置的不存在，会采用默认"
									})]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).source,
										"onUpdate:value": _cache[34] || (_cache[34] = ($event) => unref(config).source = $event),
										options: unref(douyuSourceOptions),
										disabled: unref(globalFieldsObj).source
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).source,
										"onUpdate:checked": _cache[35] || (_cache[35] = ($event) => unref(globalFieldsObj).source = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[120] || (_cache[120] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).douyu.api.text,
										tip: unref(textInfo).douyu.api.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).api,
										"onUpdate:value": _cache[36] || (_cache[36] = ($event) => unref(config).api = $event),
										options: unref(douyuApiTypeOptions),
										disabled: unref(globalFieldsObj).api
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).api,
										"onUpdate:checked": _cache[37] || (_cache[37] = ($event) => unref(globalFieldsObj).api = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[121] || (_cache[121] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								unref(config).api !== "oldAPI" ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).douyu.codecName.text,
										tip: unref(textInfo).douyu.codecName.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).codecName,
										"onUpdate:value": _cache[38] || (_cache[38] = ($event) => unref(config).codecName = $event),
										options: unref(douyuStreamCodecOptions),
										disabled: unref(globalFieldsObj).codecName
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).codecName,
										"onUpdate:checked": _cache[39] || (_cache[39] = ($event) => unref(globalFieldsObj).codecName = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[122] || (_cache[122] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								})) : createCommentVNode("", true),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "账号",
										tip: "未选择账号时将以未登录状态请求斗鱼接口，请先在用户页登录斗鱼账号"
									})]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).uid,
										"onUpdate:value": _cache[40] || (_cache[40] = ($event) => unref(config).uid = $event),
										options: unref(douyuUserList),
										"label-field": "name",
										"value-field": "uid",
										clearable: "",
										disabled: unref(globalFieldsObj).uid
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).uid,
										"onUpdate:checked": _cache[41] || (_cache[41] = ($event) => unref(globalFieldsObj).uid = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[123] || (_cache[123] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).common.titleKeywords.text,
										tip: unref(textInfo).common.titleKeywords.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_input, {
										value: unref(config).titleKeywords,
										"onUpdate:value": _cache[42] || (_cache[42] = ($event) => unref(config).titleKeywords = $event),
										placeholder: unref(textInfo).common.titleKeywords.placeholder,
										clearable: ""
									}, null, 8, ["value", "placeholder"])]),
									_: 1
								})
							], 64)) : createCommentVNode("", true),
							unref(config).providerId === "HuYa" ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "画质",
										tip: "如果找不到对应画质，会使用较清晰的源"
									})]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).quality,
										"onUpdate:value": _cache[43] || (_cache[43] = ($event) => unref(config).quality = $event),
										options: unref(huyaQualityOptions),
										disabled: unref(globalFieldsObj).quality
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).quality,
										"onUpdate:checked": _cache[44] || (_cache[44] = ($event) => unref(globalFieldsObj).quality = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[124] || (_cache[124] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).douyin.formatName.text,
										tip: unref(textInfo).douyin.formatName.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).formatName,
										"onUpdate:value": _cache[45] || (_cache[45] = ($event) => unref(config).formatName = $event),
										options: unref(douyinStreamFormatOptions),
										disabled: unref(globalFieldsObj).formatName
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).formatName,
										"onUpdate:checked": _cache[46] || (_cache[46] = ($event) => unref(globalFieldsObj).formatName = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[125] || (_cache[125] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "线路",
										tip: "如果设置的不存在，会采用默认"
									})]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).source,
										"onUpdate:value": _cache[47] || (_cache[47] = ($event) => unref(config).source = $event),
										options: unref(huyaSourceOptions),
										disabled: unref(globalFieldsObj).source
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).source,
										"onUpdate:checked": _cache[48] || (_cache[48] = ($event) => unref(globalFieldsObj).source = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[126] || (_cache[126] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).huya.api.text,
										tip: unref(textInfo).huya.api.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).api,
										"onUpdate:value": _cache[49] || (_cache[49] = ($event) => unref(config).api = $event),
										options: unref(huyaApiTypeOptions),
										disabled: unref(globalFieldsObj).api
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).api,
										"onUpdate:checked": _cache[50] || (_cache[50] = ($event) => unref(globalFieldsObj).api = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[127] || (_cache[127] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).common.titleKeywords.text,
										tip: unref(textInfo).common.titleKeywords.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_input, {
										value: unref(config).titleKeywords,
										"onUpdate:value": _cache[51] || (_cache[51] = ($event) => unref(config).titleKeywords = $event),
										placeholder: unref(textInfo).common.titleKeywords.placeholder,
										clearable: ""
									}, null, 8, ["value", "placeholder"])]),
									_: 1
								})
							], 64)) : createCommentVNode("", true),
							unref(config).providerId === "XHS" ? (openBlock(), createBlock(_component_n_form_item, { key: 7 }, {
								label: withCtx(() => [createVNode(_component_Tip, {
									text: "Cookie",
									tip: "用于自动监听直播间"
								})]),
								default: withCtx(() => [createVNode(_component_n_input, {
									value: unref(config).cookie,
									"onUpdate:value": _cache[52] || (_cache[52] = ($event) => unref(config).cookie = $event),
									type: "password",
									disabled: unref(globalFieldsObj).cookie
								}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
									checked: unref(globalFieldsObj).cookie,
									"onUpdate:checked": _cache[53] || (_cache[53] = ($event) => unref(globalFieldsObj).cookie = $event),
									class: "global-checkbox"
								}, {
									default: withCtx(() => _cache[128] || (_cache[128] = [createTextVNode("全局")])),
									_: 1
								}, 8, ["checked"])]),
								_: 1
							})) : createCommentVNode("", true),
							unref(config).providerId === "DouYin" ? (openBlock(), createElementBlock(Fragment, { key: 8 }, [
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).douyin.quality.text,
										tip: unref(textInfo).douyin.quality.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).quality,
										"onUpdate:value": _cache[54] || (_cache[54] = ($event) => unref(config).quality = $event),
										options: unref(douyinQualityOptions),
										disabled: unref(globalFieldsObj).quality
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).quality,
										"onUpdate:checked": _cache[55] || (_cache[55] = ($event) => unref(globalFieldsObj).quality = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[129] || (_cache[129] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).douyin.formatName.text,
										tip: unref(textInfo).douyin.formatName.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).formatName,
										"onUpdate:value": _cache[56] || (_cache[56] = ($event) => unref(config).formatName = $event),
										options: unref(douyinStreamFormatOptions),
										disabled: unref(globalFieldsObj).formatName
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).formatName,
										"onUpdate:checked": _cache[57] || (_cache[57] = ($event) => unref(globalFieldsObj).formatName = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[130] || (_cache[130] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).douyin.api.text,
										tip: unref(textInfo).douyin.api.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).api,
										"onUpdate:value": _cache[58] || (_cache[58] = ($event) => unref(config).api = $event),
										options: unref(douyinApiTypeOptions),
										disabled: unref(globalFieldsObj).api
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).api,
										"onUpdate:checked": _cache[59] || (_cache[59] = ($event) => unref(globalFieldsObj).api = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[131] || (_cache[131] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "Cookie",
										tip: "使用mobile接口时Cookie不会被应用"
									})]),
									default: withCtx(() => [createVNode(_component_n_input, {
										value: unref(config).cookie,
										"onUpdate:value": _cache[60] || (_cache[60] = ($event) => unref(config).cookie = $event),
										type: "password",
										disabled: unref(globalFieldsObj).cookie
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).cookie,
										"onUpdate:checked": _cache[61] || (_cache[61] = ($event) => unref(globalFieldsObj).cookie = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[132] || (_cache[132] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								unref(config).cookie ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).douyin.cookieMode.text,
										tip: unref(textInfo).douyin.cookieMode.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).cookieMode,
										"onUpdate:value": _cache[62] || (_cache[62] = ($event) => unref(config).cookieMode = $event),
										options: unref(douyinCookieModeOptions),
										disabled: unref(globalFieldsObj).cookieMode
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).cookieMode,
										"onUpdate:checked": _cache[63] || (_cache[63] = ($event) => unref(globalFieldsObj).cookieMode = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[133] || (_cache[133] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								})) : createCommentVNode("", true),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "双屏直播流",
										tip: "开启后如果是双屏直播，那么就使用拼接的流"
									})]),
									default: withCtx(() => [createVNode(_component_n_switch, {
										value: unref(config).doubleScreen,
										"onUpdate:value": _cache[64] || (_cache[64] = ($event) => unref(config).doubleScreen = $event),
										disabled: unref(globalFieldsObj).doubleScreen
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).doubleScreen,
										"onUpdate:checked": _cache[65] || (_cache[65] = ($event) => unref(globalFieldsObj).doubleScreen = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[134] || (_cache[134] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).common.titleKeywords.text,
										tip: unref(textInfo).common.titleKeywords.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_input, {
										value: unref(config).titleKeywords,
										"onUpdate:value": _cache[66] || (_cache[66] = ($event) => unref(config).titleKeywords = $event),
										placeholder: unref(textInfo).common.titleKeywords.placeholder,
										clearable: ""
									}, null, 8, ["value", "placeholder"])]),
									_: 1
								})
							], 64)) : createCommentVNode("", true),
							unref(config).providerId === "TikTok" ? (openBlock(), createElementBlock(Fragment, { key: 9 }, [
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "画质",
										tip: "如果指定画质不可用，会根据画质重试配置决定是否回退"
									})]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).quality,
										"onUpdate:value": _cache[67] || (_cache[67] = ($event) => unref(config).quality = $event),
										options: unref(tiktokQualityOptions),
										disabled: unref(globalFieldsObj).quality
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).quality,
										"onUpdate:checked": _cache[68] || (_cache[68] = ($event) => unref(globalFieldsObj).quality = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[135] || (_cache[135] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "流格式",
										tip: "默认优先 FLV，其次 HLS"
									})]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).formatName,
										"onUpdate:value": _cache[69] || (_cache[69] = ($event) => unref(config).formatName = $event),
										options: unref(douyinStreamFormatOptions),
										disabled: unref(globalFieldsObj).formatName
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).formatName,
										"onUpdate:checked": _cache[70] || (_cache[70] = ($event) => unref(globalFieldsObj).formatName = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[136] || (_cache[136] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "流编码",
										tip: "自动和 AVC 默认使用 AVC 流，也可优先或强制使用 HEVC"
									})]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).codecName,
										"onUpdate:value": _cache[71] || (_cache[71] = ($event) => unref(config).codecName = $event),
										options: unref(biliStreamCodecOptions),
										disabled: unref(globalFieldsObj).codecName
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).codecName,
										"onUpdate:checked": _cache[72] || (_cache[72] = ($event) => unref(globalFieldsObj).codecName = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[137] || (_cache[137] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "请求接口",
										tip: "随机模式会在 web 接口和直播 html 解析之间随机选择"
									})]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).api,
										"onUpdate:value": _cache[73] || (_cache[73] = ($event) => unref(config).api = $event),
										options: unref(tiktokApiTypeOptions),
										disabled: unref(globalFieldsObj).api
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).api,
										"onUpdate:checked": _cache[74] || (_cache[74] = ($event) => unref(globalFieldsObj).api = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[138] || (_cache[138] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "Cookie",
										tip: "遇到年龄限制或风控时可填写 TikTok Cookie"
									})]),
									default: withCtx(() => [createVNode(_component_n_input, {
										value: unref(config).cookie,
										"onUpdate:value": _cache[75] || (_cache[75] = ($event) => unref(config).cookie = $event),
										type: "password",
										disabled: unref(globalFieldsObj).cookie
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).cookie,
										"onUpdate:checked": _cache[76] || (_cache[76] = ($event) => unref(globalFieldsObj).cookie = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[139] || (_cache[139] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: unref(textInfo).common.titleKeywords.text,
										tip: unref(textInfo).common.titleKeywords.tip
									}, null, 8, ["text", "tip"])]),
									default: withCtx(() => [createVNode(_component_n_input, {
										value: unref(config).titleKeywords,
										"onUpdate:value": _cache[77] || (_cache[77] = ($event) => unref(config).titleKeywords = $event),
										placeholder: unref(textInfo).common.titleKeywords.placeholder,
										clearable: ""
									}, null, 8, ["value", "placeholder"])]),
									_: 1
								})
							], 64)) : createCommentVNode("", true),
							unref(config).providerId === "Bilibili" || unref(config).providerId === "DouYu" ? (openBlock(), createBlock(_component_n_form_item, { key: 10 }, {
								label: withCtx(() => [createVNode(_component_Tip, {
									text: "只录制音频",
									tip: "会选择纯音频流，B站只支持flv流，抖音请在画质中选择"
								})]),
								default: withCtx(() => [createVNode(_component_n_switch, {
									value: unref(config).onlyAudio,
									"onUpdate:value": _cache[78] || (_cache[78] = ($event) => unref(config).onlyAudio = $event)
								}, null, 8, ["value"])]),
								_: 1
							})) : createCommentVNode("", true),
							createVNode(_component_n_form_item, null, {
								label: withCtx(() => [createVNode(_component_Tip, {
									tip: unref(textInfo).bili.qualityRetry.tip,
									text: unref(textInfo).bili.qualityRetry.text
								}, null, 8, ["tip", "text"])]),
								default: withCtx(() => [createVNode(_component_n_input_number, {
									value: unref(config).qualityRetry,
									"onUpdate:value": _cache[79] || (_cache[79] = ($event) => unref(config).qualityRetry = $event),
									min: "-1",
									step: "1",
									disabled: unref(globalFieldsObj).qualityRetry
								}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
									checked: unref(globalFieldsObj).qualityRetry,
									"onUpdate:checked": _cache[80] || (_cache[80] = ($event) => unref(globalFieldsObj).qualityRetry = $event),
									class: "global-checkbox"
								}, {
									default: withCtx(() => _cache[140] || (_cache[140] = [createTextVNode("全局")])),
									_: 1
								}, 8, ["checked"])]),
								_: 1
							}),
							!unref(config).disableAutoCheck ? (openBlock(), createBlock(_component_n_form_item, { key: 11 }, {
								label: withCtx(() => [createVNode(_component_Tip, {
									text: "监控时间段",
									tip: "仅在时间段内进行监控，有助于减少风控的可能，<b>注意是监控时间段并非录制时间段</b>"
								})]),
								default: withCtx(() => [
									createVNode(_component_n_time_picker, {
										"formatted-value": unref(config).handleTime[0],
										"onUpdate:formattedValue": _cache[81] || (_cache[81] = ($event) => unref(config).handleTime[0] = $event),
										clearable: ""
									}, null, 8, ["formatted-value"]),
									_cache[141] || (_cache[141] = createTextVNode(" ~ ")),
									createVNode(_component_n_time_picker, {
										"formatted-value": unref(config).handleTime[1],
										"onUpdate:formattedValue": _cache[82] || (_cache[82] = ($event) => unref(config).handleTime[1] = $event),
										clearable: ""
									}, null, 8, ["formatted-value"])
								]),
								_: 1
							})) : createCommentVNode("", true),
							_cache[156] || (_cache[156] = createBaseVNode("h2", null, "其他", -1)),
							(openBlock(), createElementBlock(Fragment, { key: 12 }, [
								!unref(config).disableAutoCheck ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "录制开始通知",
										tip: "默认使用系统通知，具体前往设置通知中修改，一般一场直播只会通知一次"
									})]),
									default: withCtx(() => [createVNode(_component_n_switch, {
										value: unref(config).liveStartNotification,
										"onUpdate:value": _cache[83] || (_cache[83] = ($event) => unref(config).liveStartNotification = $event)
									}, null, 8, ["value"])]),
									_: 1
								})) : createCommentVNode("", true),
								!unref(config).disableAutoCheck ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "录制结束通知",
										tip: "默认使用系统通知，具体前往设置通知中修改，会在一次录制结束后三分钟检查录制状态，如果为不在录制中状态，则进行通知"
									})]),
									default: withCtx(() => [createVNode(_component_n_switch, {
										value: unref(config).liveEndNotification,
										"onUpdate:value": _cache[84] || (_cache[84] = ($event) => unref(config).liveEndNotification = $event)
									}, null, 8, ["value"])]),
									_: 1
								})) : createCommentVNode("", true),
								!unref(config).disableAutoCheck && unref(config).providerId === "Bilibili" ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "付费直播推送",
										tip: "检测到付费直播(DRM 加密直播)时推送通知。此类直播为 DRM 加密，无法自动录制，仅作提醒。"
									})]),
									default: withCtx(() => [createVNode(_component_n_switch, {
										value: unref(config).chargeLiveNotification,
										"onUpdate:value": _cache[85] || (_cache[85] = ($event) => unref(config).chargeLiveNotification = $event)
									}, null, 8, ["value"])]),
									_: 1
								})) : createCommentVNode("", true),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "展示权重",
										tip: "值越大，UI显示越靠前"
									})]),
									default: withCtx(() => [createVNode(_component_n_input_number, {
										value: unref(config).weight,
										"onUpdate:value": _cache[86] || (_cache[86] = ($event) => unref(config).weight = $event),
										min: "1",
										step: "1",
										style: { "width": "100%" }
									}, null, 8, ["value"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => [createVNode(_component_Tip, {
										tip: "如果你遇到特定直播间的录制问题，请打开此开关",
										text: "调试模式"
									})]),
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(config).debugLevel,
										"onUpdate:value": _cache[87] || (_cache[87] = ($event) => unref(config).debugLevel = $event),
										options: unref(recorderDebugLevelOptions),
										style: { "width": "220px" },
										disabled: unref(globalFieldsObj).debugLevel
									}, null, 8, [
										"value",
										"options",
										"disabled"
									]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).debugLevel,
										"onUpdate:checked": _cache[88] || (_cache[88] = ($event) => unref(globalFieldsObj).debugLevel = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[142] || (_cache[142] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								unref(config).providerId !== "XHS" ? (openBlock(), createBlock(_component_n_form_item, { key: 3 }, {
									label: withCtx(() => _cache[143] || (_cache[143] = [createBaseVNode("span", { class: "inline-flex" }, " 保存封面 ", -1)])),
									default: withCtx(() => [createVNode(_component_n_switch, {
										value: unref(config).saveCover,
										"onUpdate:value": _cache[89] || (_cache[89] = ($event) => unref(config).saveCover = $event),
										disabled: unref(globalFieldsObj).saveCover
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).saveCover,
										"onUpdate:checked": _cache[90] || (_cache[90] = ($event) => unref(globalFieldsObj).saveCover = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[144] || (_cache[144] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								})) : createCommentVNode("", true)
							], 64)),
							unref(config).providerId !== "XHS" ? (openBlock(), createElementBlock(Fragment, { key: 13 }, [
								_cache[153] || (_cache[153] = createBaseVNode("h2", null, "弹幕", -1)),
								createVNode(_component_n_form_item, null, {
									label: withCtx(() => _cache[145] || (_cache[145] = [createBaseVNode("span", { class: "inline-flex" }, " 弹幕录制 ", -1)])),
									default: withCtx(() => [createVNode(_component_n_switch, {
										value: unref(config).disableProvideCommentsWhenRecording,
										"onUpdate:value": _cache[91] || (_cache[91] = ($event) => unref(config).disableProvideCommentsWhenRecording = $event),
										disabled: unref(globalFieldsObj).disableProvideCommentsWhenRecording,
										"checked-value": false,
										"unchecked-value": true
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).disableProvideCommentsWhenRecording,
										"onUpdate:checked": _cache[92] || (_cache[92] = ($event) => unref(globalFieldsObj).disableProvideCommentsWhenRecording = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[146] || (_cache[146] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								!unref(config).disableProvideCommentsWhenRecording && unref(config).providerId !== "TikTok" ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
									label: withCtx(() => _cache[147] || (_cache[147] = [createBaseVNode("span", { class: "inline-flex" }, " 保存礼物 ", -1)])),
									default: withCtx(() => [createVNode(_component_n_switch, {
										value: unref(config).saveGiftDanma,
										"onUpdate:value": _cache[93] || (_cache[93] = ($event) => unref(config).saveGiftDanma = $event),
										disabled: unref(globalFieldsObj).saveGiftDanma
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).saveGiftDanma,
										"onUpdate:checked": _cache[94] || (_cache[94] = ($event) => unref(globalFieldsObj).saveGiftDanma = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[148] || (_cache[148] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								})) : createCommentVNode("", true),
								!unref(config).disableProvideCommentsWhenRecording && ["Bilibili", "DouYu"].includes(unref(config).providerId) ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
									label: withCtx(() => _cache[149] || (_cache[149] = [createBaseVNode("span", { class: "inline-flex" }, " 高能弹幕(SC) ", -1)])),
									default: withCtx(() => [createVNode(_component_n_switch, {
										value: unref(config).saveSCDanma,
										"onUpdate:value": _cache[95] || (_cache[95] = ($event) => unref(config).saveSCDanma = $event),
										disabled: unref(globalFieldsObj).saveSCDanma
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).saveSCDanma,
										"onUpdate:checked": _cache[96] || (_cache[96] = ($event) => unref(globalFieldsObj).saveSCDanma = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[150] || (_cache[150] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								})) : createCommentVNode("", true),
								!unref(config).disableProvideCommentsWhenRecording && !["HuYa", "TikTok"].includes(unref(config).providerId) ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "服务端时间戳",
										tip: "使用服务端返回的弹幕时间戳而非本地收到的时间戳，用于处理某些主播的弹幕时间戳不准确的问题"
									})]),
									default: withCtx(() => [createVNode(_component_n_switch, {
										value: unref(config).useServerTimestamp,
										"onUpdate:value": _cache[97] || (_cache[97] = ($event) => unref(config).useServerTimestamp = $event),
										disabled: unref(globalFieldsObj).useServerTimestamp
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).useServerTimestamp,
										"onUpdate:checked": _cache[98] || (_cache[98] = ($event) => unref(globalFieldsObj).useServerTimestamp = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[151] || (_cache[151] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								})) : createCommentVNode("", true),
								!unref(config).disableProvideCommentsWhenRecording ? (openBlock(), createBlock(_component_n_form_item, { key: 3 }, {
									label: withCtx(() => [createVNode(_component_Tip, {
										text: "弹幕统计入库",
										tip: "录制结束后，将弹幕时间分布保存到数据库，供录制历史和主播详情展示"
									})]),
									default: withCtx(() => [createVNode(_component_n_switch, {
										value: unref(config).saveDanmaStats2DB,
										"onUpdate:value": _cache[99] || (_cache[99] = ($event) => unref(config).saveDanmaStats2DB = $event),
										disabled: unref(globalFieldsObj).saveDanmaStats2DB
									}, null, 8, ["value", "disabled"]), createVNode(_component_n_checkbox, {
										checked: unref(globalFieldsObj).saveDanmaStats2DB,
										"onUpdate:checked": _cache[100] || (_cache[100] = ($event) => unref(globalFieldsObj).saveDanmaStats2DB = $event),
										class: "global-checkbox"
									}, {
										default: withCtx(() => _cache[152] || (_cache[152] = [createTextVNode("全局")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								})) : createCommentVNode("", true)
							], 64)) : createCommentVNode("", true)
						], 64)) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["label-width"])]),
					_: 1
				})]),
				_: 1
			}, 8, ["show"]);
		};
	}
}), [["__scopeId", "data-v-03058224"]]);
//#endregion
export { Avatar_default as n, addModal_default as t };
