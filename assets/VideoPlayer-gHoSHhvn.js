import { C as computed, D as createElementBlock, J as onMounted, L as init_runtime_core_esm_bundler, M as defineComponent, Tt as unref, Z as openBlock, a as useRoute, ft as init_reactivity_esm_bundler, j as createVNode, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { i as danma, t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { t as common } from "./common-CBeNn3OB.js";
import { t as useNotice } from "./useNotice-DqXLG4Nf.js";
import { t as Index_default } from "./Index-DVrPaNfC.js";
//#region src/renderer/src/pages/VideoPlayer/index.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler();
var _hoisted_1 = { class: "file-player-page" };
var _hoisted_2 = { class: "player" };
//#endregion
//#region src/renderer/src/pages/VideoPlayer/index.vue
var VideoPlayer_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "VideoPlayer",
	__name: "index",
	setup(__props) {
		const route = useRoute();
		const notice = useNotice();
		const loading = ref(false);
		const videoUrl = ref("");
		const playerRef = ref(null);
		const playerReady = ref(false);
		const videoId = computed(() => typeof route.query.videoId === "string" ? route.query.videoId : "");
		const fileType = computed(() => typeof route.query.type === "string" ? route.query.type : "");
		const danmaId = computed(() => typeof route.query.danmaId === "string" ? route.query.danmaId : "");
		const playerOptions = computed(() => ({ fullscreen: true }));
		const syncPlayerSource = async () => {
			if (!playerReady.value || !videoUrl.value) return;
			await playerRef.value?.switchUrl(videoUrl.value, fileType.value);
		};
		const syncDanmaSource = async () => {
			if (!playerReady.value) return;
			if (!danmaId.value) return;
			const data = await danma.getParsedContentById(danmaId.value);
			if (data.danmaType === "ass") {
				const content = typeof data.content === "string" ? data.content : "";
				await playerRef.value?.switchAss(content);
				return;
			}
			if (data.danmaType === "xml") {
				const danmuku = Array.isArray(data.content) ? data.content : [];
				await playerRef.value?.switchDanmuku(danmuku);
				return;
			}
			notice.warning({ title: `暂不支持加载 ${data.danmaType} 格式的弹幕` });
		};
		const loadVideo = async () => {
			if (!videoId.value) {
				videoUrl.value = "";
				return;
			}
			loading.value = true;
			try {
				videoUrl.value = await common.getVideo(videoId.value);
			} catch (error) {
				videoUrl.value = "";
				notice.error({ title: error?.message || error || "获取播放地址失败" });
			} finally {
				loading.value = false;
			}
		};
		const handlePlayerReady = async (_instance) => {
			playerReady.value = true;
			await syncPlayerSource();
			await syncDanmaSource();
		};
		onMounted(() => {
			loadVideo();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createVNode(Index_default, {
				ref_key: "playerRef",
				ref: playerRef,
				option: unref(playerOptions),
				plugins: ["ass", "danmuku"],
				onReady: handlePlayerReady
			}, null, 8, ["option"])])]);
		};
	}
}), [["__scopeId", "data-v-c234cd01"]]);
//#endregion
export { VideoPlayer_default as default };
