import { _ as _sfc_main$1 } from "./Index.vue_vue_type_style_index_0_lang-CuMJDjM4.js";
import { d as defineComponent, a2 as mergeModels, a3 as useModel, r as ref, a5 as watch, g as createBlock, w as withCtx, a9 as __unplugin_components_3, a as createVNode, _ as __unplugin_components_4, o as openBlock } from "./index-gjuLIDoI.js";
import "./_plugin-vue_export-helper-B1lyReKF.js";
import { c as common } from "./common-Da25N27f.js";
import { d as danma } from "./danma-C4jBzCCd.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "previewModal",
  props: /* @__PURE__ */ mergeModels({
    files: { default: () => {
      return {
        video: "",
        danmu: "",
        type: ""
      };
    } },
    hotProgress: {}
  }, {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  }),
  emits: ["update:visible"],
  setup(__props) {
    const showModal = useModel(__props, "visible");
    const props = __props;
    const videoRef = ref(null);
    watch(
      () => props.files.danmu,
      async () => {
        initDanma();
      }
    );
    const initDanma = async () => {
      if (!props.files.danmu) return;
      if (props.files.danmu.endsWith(".ass")) {
        const content = await common.readDanma(props.files.danmu);
        videoRef.value?.switchAss(content);
      } else if (props.files.danmu.endsWith(".xml")) {
        const content = await danma.parseForArtPlayer(props.files.danmu);
        videoRef.value?.switchDanmuku(content);
      } else {
        throw new Error("不支持的弹幕格式");
      }
      if (props.hotProgress.visible) {
        const data = await common.genTimeData(props.files.danmu);
        videoInstance.value && videoInstance.value.artplayerPluginHeatmap.setData(data);
        setTimeout(() => {
          videoInstance.value.artplayerPluginHeatmap.setOptions(props.hotProgress);
          videoInstance.value?.artplayerPluginHeatmap.show();
        }, 200);
      } else {
        videoInstance.value?.artplayerPluginHeatmap.hide();
      }
    };
    const videoInstance = ref(null);
    const handleVideoReady = async (instance) => {
      videoInstance.value = instance;
      if (props.files.video) {
        videoRef.value?.switchUrl(props.files.video, props.files.type);
      }
      initDanma();
    };
    return (_ctx, _cache) => {
      const _component_n_card = __unplugin_components_4;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showModal.value = $event)
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "80%" },
            bordered: false,
            role: "dialog",
            "aria-modal": "true"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, {
                ref_key: "videoRef",
                ref: videoRef,
                style: { "aspect-ratio": "16 / 9" },
                option: {
                  fullscreen: true,
                  plugins: {
                    heatmap: {
                      option: props.hotProgress
                    }
                  }
                },
                plugins: ["ass", "heatmap", "danmuku"],
                onReady: handleVideoReady
              }, null, 8, ["option"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
export {
  _sfc_main as _
};
