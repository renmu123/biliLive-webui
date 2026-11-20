import { J as onMounted, L as init_runtime_core_esm_bundler, M as defineComponent, T as createBlock, Tt as unref, Z as openBlock, a as useRoute, ft as init_reactivity_esm_bundler, yt as ref } from "./request-CkCeAZAO.js";
import { r as getDanmaStream } from "./common-CBeNn3OB.js";
import { l as useTitle } from "./core-DWew9NA7.js";
import { t as Index_default$1 } from "./Index-DVrPaNfC.js";
//#region src/renderer/src/pages/LiveVideoPlayer/Index.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler();
//#endregion
//#region src/renderer/src/pages/LiveVideoPlayer/Index.vue
var Index_default = /* @__PURE__ */ defineComponent({
	name: "LiveVideoPlayer",
	__name: "Index",
	setup(__props) {
		const query = useRoute().query;
		useTitle(`${query.owner} 直播中`);
		let eventSource = null;
		async function streamLogs() {
			eventSource = await getDanmaStream(query.liveId);
			eventSource.onmessage = function(event) {
				const data = JSON.parse(event.data);
				if (!videoInstance.value) return;
				if (!data.text) return;
				let mode = 0;
				if ([
					1,
					2,
					3
				].includes(data.mode ?? "")) mode = 0;
				else if (data.mode === 4) mode = 2;
				else if (data.mode === 5) mode = 1;
				videoInstance?.value?.artplayerPluginDanmuku?.emit({
					mode,
					text: data.text,
					color: data.color,
					border: false
				});
			};
		}
		onMounted(() => {
			streamLogs();
		});
		const videoInstance = ref(null);
		const handleVideoReady = async (instance) => {
			videoInstance.value = instance;
			if (query.url) {}
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Index_default$1, {
				ref: "videoRef",
				style: { "aspect-ratio": "16 / 9" },
				option: {
					fullscreen: true,
					url: unref(query).url
				},
				"is-live": "",
				plugins: ["danmuku", "hls"],
				onReady: handleVideoReady
			}, null, 8, ["option"]);
		};
	}
});
//#endregion
export { Index_default as default };
