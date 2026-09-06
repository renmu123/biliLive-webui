import { d as defineComponent, r as ref, x as computed, av as useRoute, ax as onMounted, c as createElementBlock, e as createBaseVNode, a as createVNode, f as unref, o as openBlock } from "./index-CB8xvhFr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { c as common } from "./common-1CgNZfMf.js";
import { d as danma } from "./danma-EdR82Jkd.js";
import { _ as _sfc_main$1 } from "./Index.vue_vue_type_style_index_0_lang-CddyytYf.js";
import { u as useNotice } from "./useNotice-D8AmCNaE.js";
import "./use-notification-Bzrm1lu9.js";
const _hoisted_1 = { class: "file-player-page" };
const _hoisted_2 = { class: "player" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VideoPlayer"
  },
  __name: "index",
  setup(__props) {
    const route = useRoute();
    const notice = useNotice();
    const loading = ref(false);
    const videoUrl = ref("");
    const playerRef = ref(null);
    const playerReady = ref(false);
    const videoId = computed(
      () => typeof route.query.videoId === "string" ? route.query.videoId : ""
    );
    const fileType = computed(() => typeof route.query.type === "string" ? route.query.type : "");
    const danmaId = computed(
      () => typeof route.query.danmaId === "string" ? route.query.danmaId : ""
    );
    const playerOptions = computed(() => ({
      fullscreen: true
    }));
    const syncPlayerSource = async () => {
      if (!playerReady.value || !videoUrl.value) {
        return;
      }
      await playerRef.value?.switchUrl(videoUrl.value, fileType.value);
    };
    const syncDanmaSource = async () => {
      if (!playerReady.value) {
        return;
      }
      if (!danmaId.value) {
        return;
      }
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
      notice.warning({
        title: `暂不支持加载 ${data.danmaType} 格式的弹幕`
      });
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
        notice.error({
          title: error?.message || error || "获取播放地址失败"
        });
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_sfc_main$1, {
            ref_key: "playerRef",
            ref: playerRef,
            option: unref(playerOptions),
            plugins: ["ass", "danmuku"],
            onReady: handlePlayerReady
          }, null, 8, ["option"])
        ])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c234cd01"]]);
export {
  index as default
};
