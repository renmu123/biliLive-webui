import { d as useAppConfig, j as bili } from "./index-FWk7a7hG.js";
import { d as defineComponent, al as mergeModels, an as storeToRefs, am as useModel, r as ref, Y as watch, g as createBlock, w as withCtx, ar as __unplugin_components_3, a as createVNode, e as createBaseVNode, f as unref, i as isRef, B as Button, j as createTextVNode, c as createElementBlock, ao as renderList, ap as normalizeClass, t as toDisplayString, F as Fragment, at as normalizeStyle, _ as __unplugin_components_3$1, o as openBlock } from "./index-CB8xvhFr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { u as useBreakpoints } from "./useBreakpoints-y2ktmuab.js";
import { _ as __unplugin_components_8 } from "./Pagination-DTxcX5iK.js";
import { u as useNotification } from "./use-notification-Bzrm1lu9.js";
const _hoisted_1 = {
  class: "haeder",
  style: { "display": "flex", "gap": "10px", "align-items": "center" }
};
const _hoisted_2 = { class: "media-container" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const { isMobile } = useBreakpoints();
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
      const _component_n_pagination = __unplugin_components_8;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_3$1;
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
            style: normalizeStyle([{ "max-height": "80%" }, {
              width: unref(isMobile) ? "100%" : "calc(100% - 60px)"
            }]),
            bordered: false,
            role: "dialog",
            "aria-modal": "true",
            class: "card"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                _cache[4] || (_cache[4] = createBaseVNode("p", null, "续传只会增加分p，不会对稿件进行编辑", -1)),
                createBaseVNode("div", _hoisted_1, [
                  createVNode(_component_n_pagination, {
                    page: unref(page),
                    "onUpdate:page": _cache[0] || (_cache[0] = ($event) => isRef(page) ? page.value = $event : null),
                    "page-count": unref(pageCount),
                    "show-quick-jumper": "",
                    size: unref(isMobile) ? "small" : "medium",
                    "page-slot": unref(isMobile) ? 6 : 9
                  }, null, 8, ["page", "page-count", "size", "page-slot"]),
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
                createBaseVNode("div", _hoisted_2, [
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
                      }, null, 8, _hoisted_4),
                      createBaseVNode("div", _hoisted_5, toDisplayString(item.Archive.title), 1)
                    ], 10, _hoisted_3);
                  }), 128))
                ])
              ])
            ]),
            _: 1
          }, 8, ["style"])
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const AppendVideoDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b00f9e18"]]);
export {
  AppendVideoDialog as A
};
