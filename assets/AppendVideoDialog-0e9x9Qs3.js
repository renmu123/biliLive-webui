import { $ as renderList, A as createTextVNode, B as mergeModels, D as createElementBlock, Jt as normalizeStyle, Kt as normalizeClass, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, T as createBlock, Tt as unref, Z as openBlock, Zt as toDisplayString, at as watch, ft as init_reactivity_esm_bundler, j as createVNode, mt as isRef, rt as useModel, st as withCtx, v as Fragment, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { c as bili, t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { t as Pagination_default } from "./Pagination-4O9O9wA1.js";
import { t as useAppConfig } from "./stores-Cc_-mi5a.js";
import { r as useBreakpoints } from "./hooks-BIRfeUqh.js";
import { t as useNotification } from "./use-notification-BORvHMZV.js";
import { E as Modal_default, K as Button, W as Card_default, i as storeToRefs } from "./index-CPQhEiaa.js";
//#region src/renderer/src/components/AppendVideoDialog.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = {
	class: "haeder",
	style: {
		"display": "flex",
		"gap": "10px",
		"align-items": "center"
	}
};
var _hoisted_2 = { class: "media-container" };
var _hoisted_3 = ["onClick"];
var _hoisted_4 = ["src"];
var _hoisted_5 = { class: "title" };
//#endregion
//#region src/renderer/src/components/AppendVideoDialog.vue
var AppendVideoDialog_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AppendVideoDialog",
	props: {
		"visible": {
			type: Boolean,
			required: true,
			default: false
		},
		"visibleModifiers": {},
		"modelValue": { required: false },
		"modelModifiers": {}
	},
	emits: /*@__PURE__*/ mergeModels(["confirm"], ["update:visible", "update:modelValue"]),
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
		watch(() => page.value, () => {
			getArchives();
		});
		const getArchives = async () => {
			const uid = appConfig.value.uid;
			if (!uid) {
				notice.warning({
					title: "请先登录",
					duration: 500
				});
				return;
			}
			const data = await bili.getArchives({
				pn: page.value,
				ps: 20
			}, uid);
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
			if (!aid.value) return;
			emits("confirm", aid.value);
			showModal.value = false;
		};
		const selectMedia = (item) => {
			aid.value = String(item.Archive.aid);
		};
		return (_ctx, _cache) => {
			const _component_n_pagination = Pagination_default;
			const _component_n_button = Button;
			const _component_n_card = Card_default;
			const _component_n_modal = Modal_default;
			return openBlock(), createBlock(_component_n_modal, {
				show: showModal.value,
				"onUpdate:show": _cache[1] || (_cache[1] = ($event) => showModal.value = $event),
				"mask-closable": false,
				"auto-focus": "",
				"on-after-enter": handleOpen
			}, {
				default: withCtx(() => [createVNode(_component_n_card, {
					style: normalizeStyle([{ "max-height": "80%" }, { width: unref(isMobile) ? "100%" : "calc(100% - 60px)" }]),
					bordered: false,
					role: "dialog",
					"aria-modal": "true",
					class: "card"
				}, {
					default: withCtx(() => [createBaseVNode("div", null, [
						_cache[4] || (_cache[4] = createBaseVNode("p", null, "续传只会增加分p，不会对稿件进行编辑", -1)),
						createBaseVNode("div", _hoisted_1, [
							createVNode(_component_n_pagination, {
								page: unref(page),
								"onUpdate:page": _cache[0] || (_cache[0] = ($event) => isRef(page) ? page.value = $event : null),
								"page-count": unref(pageCount),
								"show-quick-jumper": "",
								size: unref(isMobile) ? "small" : "medium",
								"page-slot": unref(isMobile) ? 6 : 9
							}, null, 8, [
								"page",
								"page-count",
								"size",
								"page-slot"
							]),
							createVNode(_component_n_button, {
								style: { "margin-left": "auto" },
								class: "btn",
								onClick: close
							}, {
								default: withCtx(() => _cache[2] || (_cache[2] = [createTextVNode("取消")])),
								_: 1
							}),
							createVNode(_component_n_button, {
								type: "primary",
								class: "btn",
								onClick: confirm
							}, {
								default: withCtx(() => _cache[3] || (_cache[3] = [createTextVNode(" 确认 ")])),
								_: 1
							})
						]),
						createBaseVNode("div", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (item) => {
							return openBlock(), createElementBlock("div", {
								key: item.Archive.aid,
								class: normalizeClass(["media", { selected: aid.value == item.Archive.aid }]),
								onClick: ($event) => selectMedia(item)
							}, [createBaseVNode("img", {
								src: item.Archive.cover,
								referrerpolicy: "no-referrer",
								class: "cover"
							}, null, 8, _hoisted_4), createBaseVNode("div", _hoisted_5, toDisplayString(item.Archive.title), 1)], 10, _hoisted_3);
						}), 128))])
					])]),
					_: 1
				}, 8, ["style"])]),
				_: 1
			}, 8, ["show"]);
		};
	}
}), [["__scopeId", "data-v-b00f9e18"]]);
//#endregion
export { AppendVideoDialog_default as t };
