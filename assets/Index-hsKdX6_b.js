import { d as defineComponent, av as useRoute, ax as onMounted, r as ref, g as createBlock, f as unref, o as openBlock } from "./index-CB8xvhFr.js";
import { _ as _sfc_main$1 } from "./Index.vue_vue_type_style_index_0_lang-CddyytYf.js";
import { q as useTitle } from "./index-CMOU2boc.js";
import { h as getDanmaStream } from "./common-1CgNZfMf.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LiveVideoPlayer"
  },
  __name: "Index",
  setup(__props) {
    const route = useRoute();
    const query = route.query;
    useTitle(`${query.owner} 直播中`);
    let eventSource = null;
    async function streamLogs() {
      eventSource = await getDanmaStream(query.liveId);
      eventSource.onmessage = function(event) {
        const data = JSON.parse(event.data);
        if (!videoInstance.value) return;
        if (!data.text) return;
        let mode = 0;
        if ([1, 2, 3].includes(data.mode ?? "")) {
          mode = 0;
        } else if (data.mode === 4) {
          mode = 2;
        } else if (data.mode === 5) {
          mode = 1;
        }
        videoInstance?.value?.artplayerPluginDanmuku?.emit({
          // mode，0: 滚动(默认)，1: 顶部，2: 底部
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
      if (query.url) ;
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
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
export {
  _sfc_main as default
};
