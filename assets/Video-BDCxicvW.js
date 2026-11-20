import { $ as renderList, A as createTextVNode, B as mergeModels, C as computed, D as createElementBlock, E as createCommentVNode, Kt as normalizeClass, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, T as createBlock, Tt as unref, Z as openBlock, Zt as toDisplayString, et as renderSlot, ft as init_reactivity_esm_bundler, h as withKeys, j as createVNode, mt as isRef, rt as useModel, st as withCtx, u as init_runtime_dom_esm_bundler, v as Fragment, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { D as sanitizeFileName, I as Input_default, f as task, o as video_default, t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { n as FormItem_default, r as Form_default, t as HelpCircleOutline_default } from "./HelpCircleOutline-C_D4MbKX.js";
import { t as Select_default } from "./Select-DRoqCGUj.js";
import { t as NIcon } from "./Icon-9AfBo3jH.js";
import { t as Space_default } from "./Space-B3s3-R0l.js";
import { t as useAppConfig } from "./stores-Cc_-mi5a.js";
import { n as CheckboxGroup_default, t as Checkbox_default } from "./Checkbox-C9dpLVBG.js";
import { n as Radio_default, t as RadioGroup_default } from "./RadioGroup-DGqq_izP.js";
import { n as useConfirm } from "./hooks-BIRfeUqh.js";
import { t as useNotification } from "./use-notification-BORvHMZV.js";
import { t as Spin_default } from "./Spin-COE9UcEU.js";
import { t as Switch_default } from "./Switch-CKftpity.js";
import { n as Table_default, t as AccessTime24Regular_default } from "./AccessTime24Regular-Dh_ZYLTN.js";
import { E as Modal_default, K as Button, W as Card_default, i as storeToRefs } from "./index-CPQhEiaa.js";
import { g as toReactive } from "./core-DWew9NA7.js";
import { t as useNotice } from "./useNotice-DqXLG4Nf.js";
import { t as CloseOutline_default } from "./CloseOutline-DMwWmUlo.js";
import { t as FolderOpenOutline_default } from "./FolderOpenOutline-BzyVunNB.js";
import { t as showDirectoryDialog } from "./showDirectoryDialog-ljqlCXtc.js";
//#region ../../node_modules/.pnpm/@vicons+material@0.13.0/node_modules/@vicons/material/es/EditOutlined.js
init_runtime_core_esm_bundler();
var _hoisted_1$5 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 24 24"
};
var EditOutlined_default = defineComponent({
	name: "EditOutlined",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$5, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region src/renderer/src/pages/Tools/pages/Video/components/DownloadModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_shared_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$4 = { class: "modal-header" };
var _hoisted_2$3 = ["title"];
var _hoisted_3$3 = { class: "modal-content" };
var _hoisted_4$1 = { class: "section" };
var _hoisted_5$1 = { class: "section-header" };
var _hoisted_6 = { class: "file-container" };
var _hoisted_7 = ["title"];
var _hoisted_8 = { class: "section" };
var _hoisted_9 = { class: "option-list" };
var _hoisted_10 = { class: "option-row" };
var _hoisted_11 = {
	key: 0,
	class: "option-row"
};
var _hoisted_12 = {
	key: 1,
	class: "option-row"
};
var _hoisted_13 = {
	key: 2,
	class: "option-row"
};
var _hoisted_14 = {
	key: 3,
	class: "option-row"
};
var _hoisted_15 = { class: "section" };
var _hoisted_16 = { class: "path" };
var _hoisted_17 = { class: "modal-actions" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/Video/components/DownloadModal.vue
var DownloadModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "DownloadModal",
	props: /*@__PURE__*/ mergeModels({
		detail: {},
		cOptions: {}
	}, {
		"visible": {
			type: Boolean,
			required: true,
			default: false
		},
		"visibleModifiers": {},
		"selectIds": {
			required: true,
			default: []
		},
		"selectIdsModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["confirm"], ["update:visible", "update:selectIds"]),
	setup(__props, { emit: __emit }) {
		const danmuOptions = [{
			label: "无",
			value: "none"
		}, {
			label: "xml",
			value: "xml"
		}];
		const { appConfig } = storeToRefs(useAppConfig());
		const options = toReactive(computed({
			get: () => appConfig.value.tool.download,
			set: (value) => {
				appConfig.value.tool.download = value;
			}
		}));
		const showModal = useModel(__props, "visible");
		const selectIds = useModel(__props, "selectIds");
		const props = __props;
		const emits = __emit;
		const notice = useNotification();
		const download = () => {
			if (props.cOptions.hasDanmuOnlyOptions && options.onlyDanmu && options.danmu === "none") {
				notice.error({
					content: "只下载弹幕时，请选择弹幕格式",
					duration: 3e3
				});
				return;
			}
			emits("confirm", {
				ids: selectIds.value,
				savePath: options.savePath,
				danmu: options.danmu,
				onlyAudio: options.onlyAudio,
				resoltion: options.douyuResolution,
				override: options.override,
				onlyDanmu: options.onlyDanmu
			});
		};
		const editPart = (file) => {
			file.name = sanitizeFileName(file.name.trim());
			if (file.name === "") file.name = "未命名";
			file.isEditing = !file.isEditing;
		};
		const selectFolder = async () => {
			let dir;
			if (window.isWeb) dir = (await showDirectoryDialog({ type: "directory" }))?.[0];
			else dir = await window.api.openDirectory({ defaultPath: options.savePath });
			if (!dir) return;
			options.savePath = dir;
		};
		const allChecked = computed({
			get: () => selectIds.value.length === props.detail.parts.length,
			set: (value) => {
				selectIds.value = value ? props.detail.parts.map((p) => p.partId) : [];
			}
		});
		const handleCheckedChange = (value) => {
			allChecked.value = value;
		};
		return (_ctx, _cache) => {
			const _component_n_checkbox = Checkbox_default;
			const _component_n_input = Input_default;
			const _component_n_icon = NIcon;
			const _component_n_button = Button;
			const _component_n_checkbox_group = CheckboxGroup_default;
			const _component_n_radio = Radio_default;
			const _component_n_space = Space_default;
			const _component_n_radio_group = RadioGroup_default;
			const _component_n_select = Select_default;
			const _component_n_switch = Switch_default;
			const _component_n_card = Card_default;
			const _component_n_modal = Modal_default;
			return openBlock(), createBlock(_component_n_modal, {
				show: showModal.value,
				"onUpdate:show": _cache[9] || (_cache[9] = ($event) => showModal.value = $event),
				"mask-closable": false
			}, {
				default: withCtx(() => [createVNode(_component_n_card, {
					class: "download-modal",
					bordered: false,
					size: "large",
					role: "dialog",
					"aria-modal": "true",
					closable: "",
					onClose: _cache[8] || (_cache[8] = ($event) => showModal.value = false)
				}, {
					header: withCtx(() => [createBaseVNode("div", _hoisted_1$4, [_cache[10] || (_cache[10] = createBaseVNode("div", { class: "modal-title" }, "下载视频", -1)), createBaseVNode("div", {
						class: "video-title",
						title: props.detail.title
					}, toDisplayString(props.detail.title), 9, _hoisted_2$3)])]),
					footer: withCtx(() => [createBaseVNode("div", _hoisted_17, [createVNode(_component_n_button, { onClick: _cache[7] || (_cache[7] = ($event) => showModal.value = false) }, {
						default: withCtx(() => _cache[23] || (_cache[23] = [createTextVNode("取消")])),
						_: 1
					}), createVNode(_component_n_button, {
						type: "primary",
						disabled: selectIds.value.length === 0 || !unref(options).savePath,
						onClick: download
					}, {
						default: withCtx(() => _cache[24] || (_cache[24] = [createTextVNode(" 下载 ")])),
						_: 1
					}, 8, ["disabled"])])]),
					default: withCtx(() => [createBaseVNode("div", _hoisted_3$3, [
						createBaseVNode("section", _hoisted_4$1, [createBaseVNode("div", _hoisted_5$1, [_cache[11] || (_cache[11] = createBaseVNode("div", { class: "section-title" }, "选择文件", -1)), createVNode(_component_n_checkbox, {
							checked: unref(allChecked),
							indeterminate: selectIds.value.length > 0 && !unref(allChecked),
							"onUpdate:checked": handleCheckedChange
						}, {
							default: withCtx(() => [createTextVNode(" 全选（" + toDisplayString(selectIds.value.length) + "/" + toDisplayString(props.detail.parts.length) + "） ", 1)]),
							_: 1
						}, 8, ["checked", "indeterminate"])]), createBaseVNode("div", _hoisted_6, [createVNode(_component_n_checkbox_group, {
							value: selectIds.value,
							"onUpdate:value": _cache[0] || (_cache[0] = ($event) => selectIds.value = $event)
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(props.detail.parts, (file) => {
								return openBlock(), createElementBlock("div", {
									key: file.partId,
									class: "file"
								}, [
									createVNode(_component_n_checkbox, {
										value: file.partId,
										"aria-label": `选择 ${file.name}.mp4`
									}, null, 8, ["value", "aria-label"]),
									!file.isEditing ? (openBlock(), createElementBlock("span", {
										key: 0,
										class: "file-name",
										title: `${file.name}.mp4`
									}, toDisplayString(file.name) + ".mp4 ", 9, _hoisted_7)) : (openBlock(), createBlock(_component_n_input, {
										key: 1,
										value: file.name,
										"onUpdate:value": ($event) => file.name = $event,
										class: "file-name-input",
										size: "small",
										placeholder: "请输入文件名",
										onKeyup: withKeys(($event) => editPart(file), ["enter"])
									}, {
										suffix: withCtx(() => _cache[12] || (_cache[12] = [createTextVNode(".mp4")])),
										_: 2
									}, 1032, [
										"value",
										"onUpdate:value",
										"onKeyup"
									])),
									createVNode(_component_n_button, {
										quaternary: "",
										circle: "",
										size: "small",
										"aria-label": file.isEditing ? "完成编辑文件名" : "编辑文件名",
										title: file.isEditing ? "完成编辑文件名" : "编辑文件名",
										onClick: ($event) => editPart(file)
									}, {
										icon: withCtx(() => [createVNode(_component_n_icon, null, {
											default: withCtx(() => [createVNode(unref(EditOutlined_default))]),
											_: 1
										})]),
										_: 2
									}, 1032, [
										"aria-label",
										"title",
										"onClick"
									])
								]);
							}), 128))]),
							_: 1
						}, 8, ["value"])])]),
						createBaseVNode("section", _hoisted_8, [_cache[20] || (_cache[20] = createBaseVNode("div", { class: "section-title" }, "下载选项", -1)), createBaseVNode("div", _hoisted_9, [
							createBaseVNode("div", _hoisted_10, [_cache[15] || (_cache[15] = createBaseVNode("span", { class: "option-label" }, "文件冲突", -1)), createVNode(_component_n_radio_group, {
								value: unref(options).override,
								"onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(options).override = $event)
							}, {
								default: withCtx(() => [createVNode(_component_n_space, null, {
									default: withCtx(() => [createVNode(_component_n_radio, { value: true }, {
										default: withCtx(() => _cache[13] || (_cache[13] = [createTextVNode("覆盖文件")])),
										_: 1
									}), createVNode(_component_n_radio, { value: false }, {
										default: withCtx(() => _cache[14] || (_cache[14] = [createTextVNode("跳过存在文件")])),
										_: 1
									})]),
									_: 1
								})]),
								_: 1
							}, 8, ["value"])]),
							props.detail.resolutions.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_11, [_cache[16] || (_cache[16] = createBaseVNode("span", {
								class: "option-label",
								title: "清晰度取第一P视频，如果后续视频不存在相应清晰度，取最好清晰度"
							}, "清晰度", -1)), createVNode(_component_n_select, {
								value: unref(options).douyuResolution,
								"onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).douyuResolution = $event),
								options: props.detail.resolutions,
								class: "resolution-select"
							}, null, 8, ["value", "options"])])) : createCommentVNode("", true),
							_ctx.cOptions.hasDanmuOptions ? (openBlock(), createElementBlock("div", _hoisted_12, [_cache[17] || (_cache[17] = createBaseVNode("span", { class: "option-label" }, "弹幕", -1)), createVNode(_component_n_radio_group, {
								value: unref(options).danmu,
								"onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(options).danmu = $event)
							}, {
								default: withCtx(() => [createVNode(_component_n_space, null, {
									default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(danmuOptions, (option) => {
										return createVNode(_component_n_radio, {
											key: option.value,
											value: option.value
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(option.label), 1)]),
											_: 2
										}, 1032, ["value"]);
									}), 64))]),
									_: 1
								})]),
								_: 1
							}, 8, ["value"])])) : createCommentVNode("", true),
							_ctx.cOptions.hasAudioOnlyOptions ? (openBlock(), createElementBlock("div", _hoisted_13, [_cache[18] || (_cache[18] = createBaseVNode("span", { class: "option-label" }, "只下载音频", -1)), createVNode(_component_n_switch, {
								value: unref(options).onlyAudio,
								"onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(options).onlyAudio = $event)
							}, null, 8, ["value"])])) : createCommentVNode("", true),
							_ctx.cOptions.hasDanmuOnlyOptions ? (openBlock(), createElementBlock("div", _hoisted_14, [_cache[19] || (_cache[19] = createBaseVNode("span", { class: "option-label" }, "只下载弹幕", -1)), createVNode(_component_n_switch, {
								value: unref(options).onlyDanmu,
								"onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(options).onlyDanmu = $event)
							}, null, 8, ["value"])])) : createCommentVNode("", true)
						])]),
						createBaseVNode("section", _hoisted_15, [_cache[22] || (_cache[22] = createBaseVNode("label", {
							class: "section-title",
							for: "download-save-path"
						}, "保存位置", -1)), createBaseVNode("div", _hoisted_16, [createVNode(_component_n_input, {
							id: "download-save-path",
							value: unref(options).savePath,
							"onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(options).savePath = $event),
							placeholder: "请选择或输入下载目录"
						}, null, 8, ["value"]), createVNode(_component_n_button, {
							"aria-label": "选择下载目录",
							title: "选择下载目录",
							onClick: selectFolder
						}, {
							icon: withCtx(() => [createVNode(_component_n_icon, null, {
								default: withCtx(() => [createVNode(unref(FolderOpenOutline_default))]),
								_: 1
							})]),
							default: withCtx(() => [_cache[21] || (_cache[21] = createTextVNode(" 浏览 "))]),
							_: 1
						})])])
					])]),
					_: 1
				})]),
				_: 1
			}, 8, ["show"]);
		};
	}
}), [["__scopeId", "data-v-03e915b9"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/Video/components/SubscribeModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1$3 = { class: "footer" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/Video/components/SubscribeModal.vue
var SubscribeModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SubscribeModal",
	props: /*@__PURE__*/ mergeModels({ data: {} }, {
		"visible": {
			type: Boolean,
			required: true,
			default: false
		},
		"visibleModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["add", "update"], ["update:visible"]),
	setup(__props, { emit: __emit }) {
		const showModal = useModel(__props, "visible");
		const props = __props;
		const emits = __emit;
		const notice = useNotice();
		const type = computed(() => {
			return props.data.id ? "update" : "add";
		});
		const confirm = async () => {
			if (type.value === "add") {
				await video_default.addSub(props.data);
				notice.success("订阅成功");
				emits("add");
			} else {
				await video_default.updateSub(props.data);
				notice.success("更新成功");
				emits("update");
			}
			showModal.value = false;
		};
		const qualityOptions = computed(() => {
			if (props.data.platform === "douyu") return [
				{
					label: "最高",
					value: "highest"
				},
				{
					label: "2k60",
					value: "1440p60a"
				},
				{
					label: "1080P60",
					value: "1080p60"
				},
				{
					label: "高清",
					value: "high"
				},
				{
					label: "标清",
					value: "normal"
				}
			];
			else if (props.data.platform === "huya") return [
				{
					label: "最高",
					value: "highest"
				},
				{
					value: "4000",
					label: "1080P"
				},
				{
					value: "1300",
					label: "720P"
				},
				{
					value: "350",
					label: "360P"
				}
			];
			else return [];
		});
		return (_ctx, _cache) => {
			const _component_n_switch = Switch_default;
			const _component_n_form_item = FormItem_default;
			const _component_n_select = Select_default;
			const _component_n_form = Form_default;
			const _component_n_button = Button;
			const _component_n_card = Card_default;
			const _component_n_modal = Modal_default;
			return openBlock(), createBlock(_component_n_modal, {
				show: showModal.value,
				"onUpdate:show": _cache[5] || (_cache[5] = ($event) => showModal.value = $event),
				"mask-closable": false,
				"auto-focus": "",
				"show-icon": false
			}, {
				default: withCtx(() => [createVNode(_component_n_card, {
					style: { "width": "500px" },
					bordered: false,
					size: "huge",
					role: "dialog",
					"aria-modal": "true",
					class: "card"
				}, {
					footer: withCtx(() => [createBaseVNode("div", _hoisted_1$3, [createVNode(_component_n_button, {
						type: "default",
						class: "btn",
						onClick: _cache[4] || (_cache[4] = ($event) => showModal.value = false)
					}, {
						default: withCtx(() => _cache[10] || (_cache[10] = [createTextVNode("取消")])),
						_: 1
					}), createVNode(_component_n_button, {
						type: "primary",
						class: "btn",
						onClick: confirm
					}, {
						default: withCtx(() => _cache[11] || (_cache[11] = [createTextVNode("确认")])),
						_: 1
					})])]),
					default: withCtx(() => [createVNode(_component_n_form, {
						"label-placement": "left",
						"label-width": 150
					}, {
						default: withCtx(() => [
							createBaseVNode("h3", null, toDisplayString(_ctx.data.name), 1),
							createVNode(_component_n_form_item, null, {
								label: withCtx(() => _cache[6] || (_cache[6] = [createBaseVNode("span", { class: "inline-flex" }, "自动监听", -1)])),
								default: withCtx(() => [createVNode(_component_n_switch, {
									value: _ctx.data.enable,
									"onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.data.enable = $event)
								}, null, 8, ["value"])]),
								_: 1
							}),
							createVNode(_component_n_form_item, null, {
								label: withCtx(() => _cache[7] || (_cache[7] = [createBaseVNode("span", { class: "inline-flex" }, "清晰度", -1)])),
								default: withCtx(() => [createVNode(_component_n_select, {
									value: _ctx.data.options.quality,
									"onUpdate:value": _cache[1] || (_cache[1] = ($event) => _ctx.data.options.quality = $event),
									options: unref(qualityOptions),
									style: { "width": "150px" }
								}, null, 8, ["value", "options"])]),
								_: 1
							}),
							createVNode(_component_n_form_item, null, {
								label: withCtx(() => _cache[8] || (_cache[8] = [createBaseVNode("span", { class: "inline-flex" }, "发送至webhook", -1)])),
								default: withCtx(() => [createVNode(_component_n_switch, {
									value: _ctx.data.options.sendWebhook,
									"onUpdate:value": _cache[2] || (_cache[2] = ($event) => _ctx.data.options.sendWebhook = $event)
								}, null, 8, ["value"])]),
								_: 1
							}),
							_ctx.data.platform === "douyu" ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
								label: withCtx(() => _cache[9] || (_cache[9] = [createBaseVNode("span", { class: "inline-flex" }, "弹幕", -1)])),
								default: withCtx(() => [createVNode(_component_n_switch, {
									value: _ctx.data.options.danma,
									"onUpdate:value": _cache[3] || (_cache[3] = ($event) => _ctx.data.options.danma = $event)
								}, null, 8, ["value"])]),
								_: 1
							})) : createCommentVNode("", true)
						]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}, 8, ["show"]);
		};
	}
}), [["__scopeId", "data-v-67d88b5a"]]);
//#endregion
//#region src/renderer/src/components/textButton.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_shared_esm_bundler();
var _hoisted_1$2 = ["disabled"];
var _hoisted_2$2 = {
	key: 0,
	class: "loading-spinner"
};
var _hoisted_3$2 = { class: "button-content" };
//#endregion
//#region src/renderer/src/components/textButton.vue
var textButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "textButton",
	props: {
		type: {
			type: String,
			default: "default",
			validator: (value) => [
				"default",
				"primary",
				"danger"
			].includes(value)
		},
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const handleClick = (event) => {
			emit("click", event);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				class: normalizeClass(["text-button", [__props.type ? `text-button--${__props.type}` : "", { "text-button--loading": __props.loading }]]),
				disabled: __props.disabled || __props.loading,
				onClick: handleClick
			}, [__props.loading ? (openBlock(), createElementBlock("span", _hoisted_2$2)) : createCommentVNode("", true), createBaseVNode("span", _hoisted_3$2, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])], 10, _hoisted_1$2);
		};
	}
}), [["__scopeId", "data-v-82f80141"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/Video/components/SubVideoList.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1$1 = { class: "list" };
var _hoisted_2$1 = { class: "card-content" };
var _hoisted_3$1 = { class: "name" };
var _hoisted_4 = ["href"];
var _hoisted_5 = { class: "card-action" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/Video/components/SubVideoList.vue
var SubVideoList_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SubVideoList",
	props: { list: {} },
	emits: ["remove", "edit"],
	setup(__props, { emit: __emit }) {
		const emits = __emit;
		const notice = useNotice();
		const confirm = useConfirm();
		const loadingIds = ref(/* @__PURE__ */ new Set());
		const removeSub = async (id) => {
			const [status] = await confirm.warning({ content: "是否确认删除" });
			if (!status) return;
			await video_default.removeSub(id);
			notice.success("取消订阅成功");
			emits("remove", id);
		};
		const editSub = (item) => {
			emits("edit", item);
		};
		const checkSub = async (id) => {
			try {
				loadingIds.value.add(id);
				await video_default.checkSub(id);
				notice.success("检查完成");
			} catch (error) {
				notice.error("检查失败");
			} finally {
				loadingIds.value.delete(id);
			}
		};
		const hanleChannelURL = (platform, roomId) => {
			if (platform === "douyu") return `https://www.douyu.com/${roomId}`;
			else if (platform === "huya") return `https://www.huya.com/${roomId}`;
			else return "";
		};
		return (_ctx, _cache) => {
			const _component_n_icon = NIcon;
			return openBlock(), createElementBlock("div", _hoisted_1$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
				return openBlock(), createElementBlock("div", {
					key: item.id,
					class: "card"
				}, [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", _hoisted_3$1, [createBaseVNode("span", null, toDisplayString(item.name), 1), item.enable ? (openBlock(), createBlock(_component_n_icon, {
					key: 0,
					size: "20",
					title: "自动监听"
				}, {
					default: withCtx(() => [createVNode(unref(AccessTime24Regular_default), { style: { "color": "gray" } })]),
					_: 1
				})) : createCommentVNode("", true)]), createBaseVNode("div", null, [_cache[0] || (_cache[0] = createTextVNode(" 房间号：")), createBaseVNode("a", {
					class: "link",
					target: "_blank",
					href: hanleChannelURL(item.platform, item.roomId)
				}, toDisplayString(item.roomId), 9, _hoisted_4)])]), createBaseVNode("div", _hoisted_5, [
					createVNode(textButton_default, {
						style: { "display": "inline-block" },
						type: "primary",
						loading: unref(loadingIds).has(item.id),
						onClick: ($event) => checkSub(item.id)
					}, {
						default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode("运行")])),
						_: 2
					}, 1032, ["loading", "onClick"]),
					createVNode(textButton_default, {
						type: "primary",
						onClick: ($event) => editSub(item)
					}, {
						default: withCtx(() => _cache[2] || (_cache[2] = [createTextVNode("配置")])),
						_: 2
					}, 1032, ["onClick"]),
					createVNode(textButton_default, {
						type: "danger",
						onClick: ($event) => removeSub(item.id)
					}, {
						default: withCtx(() => _cache[3] || (_cache[3] = [createTextVNode("删除")])),
						_: 2
					}, 1032, ["onClick"])
				])]);
			}), 128))]);
		};
	}
}), [["__scopeId", "data-v-876278f7"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/Video/index.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = { class: "container" };
var _hoisted_2 = { class: "input" };
var _hoisted_3 = { class: "help-content" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/Video/index.vue
var Video_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "BiliDownload",
	__name: "index",
	setup(__props) {
		const notice = useNotification();
		const url = ref("");
		const downloadOptions = ref({
			hasDanmuOptions: false,
			hasAudioOnlyOptions: false,
			hasDanmuOnlyOptions: false
		});
		const selectCids = ref([]);
		const data = ref({
			platform: "bilibili",
			videoId: "",
			title: "",
			resolutions: [],
			parts: []
		});
		const parse = async () => {
			const videoInfo = await task.parseVideo(url.value);
			videoInfo.parts = videoInfo.parts.map((item) => {
				item.name = sanitizeFileName(item.name);
				return item;
			});
			data.value = videoInfo;
			selectCids.value = videoInfo.parts.map((item) => item.partId);
			if (videoInfo.platform === "bilibili") downloadOptions.value = {
				hasDanmuOptions: true,
				hasAudioOnlyOptions: true,
				hasDanmuOnlyOptions: false
			};
			else if (videoInfo.platform === "douyu") downloadOptions.value = {
				hasDanmuOptions: true,
				hasAudioOnlyOptions: false,
				hasDanmuOnlyOptions: true
			};
			else if (videoInfo.platform === "huya") downloadOptions.value = {
				hasDanmuOptions: false,
				hasAudioOnlyOptions: false,
				hasDanmuOnlyOptions: false
			};
			else downloadOptions.value = {
				hasDanmuOptions: false,
				hasAudioOnlyOptions: false,
				hasDanmuOnlyOptions: false
			};
		};
		const subData = ref({
			id: 0,
			platform: "douyu",
			enable: true,
			lastRunTime: 0,
			roomId: "",
			options: {
				quality: "highest",
				danma: false,
				sendWebhook: false
			},
			name: "",
			subId: ""
		});
		const subscribeVisible = ref(false);
		const subscribe = async () => {
			const res = await video_default.subParse(url.value);
			subscribeVisible.value = true;
			subData.value = res;
		};
		const subVideoList = ref([]);
		const getSuscribeList = async () => {
			const res = await video_default.listSub();
			subVideoList.value = res;
		};
		getSuscribeList();
		const download = async () => {
			if (!url.value) return;
			if (!url.value.trim()) throw new Error("请输入视频链接");
			loading.value = true;
			try {
				await parse();
				visible.value = true;
			} finally {
				loading.value = false;
			}
		};
		const confirm = async (options) => {
			const parts = data.value.parts.filter((item) => options.ids.includes(item.partId));
			const names = parts.map((item) => item.name);
			if (names.some((item) => !item)) {
				notice.error({
					title: "文件名不能为空",
					duration: 1e3
				});
				return;
			}
			if (new Set(names).size !== names.length) {
				notice.error({
					title: "文件名不能重复",
					duration: 3e3
				});
				return;
			}
			if (options.onlyDanmu && downloadOptions.value.hasDanmuOnlyOptions) notice.info({
				title: `即将开始下载弹幕，请不要关闭此页面`,
				duration: 5e3
			});
			for (const part of parts) {
				if (options.onlyDanmu && downloadOptions.value.hasDanmuOnlyOptions) notice.info({
					title: `已开始下载弹幕：${part.name}`,
					duration: 5e3
				});
				await task.downloadVideo({
					id: part.partId,
					platform: data.value.platform,
					savePath: options.savePath,
					filename: `${sanitizeFileName(part.name)}.ts`,
					resolution: options.resoltion,
					extra: part.extra,
					danmu: options.danmu,
					override: options.override,
					onlyAudio: options.onlyAudio,
					onlyDanmu: options.onlyDanmu
				});
				if (options.onlyDanmu && downloadOptions.value.hasDanmuOnlyOptions) notice.info({
					title: `已结束下载弹幕：${part.name}`,
					duration: 5e3
				});
			}
			if (!options.onlyDanmu && downloadOptions.value.hasDanmuOnlyOptions) notice.success({
				title: "已加入队列",
				duration: 2e3
			});
			visible.value = false;
		};
		const visible = ref(false);
		const loading = ref(false);
		const handleEdit = (item) => {
			subscribeVisible.value = true;
			subData.value = {
				id: item.id,
				platform: item.platform,
				options: item.options,
				name: item.name,
				subId: item.id.toString(),
				enable: item.enable,
				lastRunTime: item.lastRunTime,
				roomId: item.roomId
			};
		};
		const showHelpModal = ref(false);
		return (_ctx, _cache) => {
			const _component_n_icon = NIcon;
			const _component_n_input = Input_default;
			const _component_n_button = Button;
			const _component_n_table = Table_default;
			const _component_n_card = Card_default;
			const _component_n_modal = Modal_default;
			const _component_n_spin = Spin_default;
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_n_spin, { show: unref(loading) }, {
				default: withCtx(() => [
					createBaseVNode("h2", null, [_cache[7] || (_cache[7] = createTextVNode(" 支持B站视频、B站剪辑回放、斗鱼录播、虎牙录播、抖音录播、快手录播下载；斗鱼、虎牙录播订阅 ")), createVNode(_component_n_icon, {
						size: 24,
						style: {
							"vertical-align": "middle",
							"cursor": "pointer"
						},
						onClick: _cache[0] || (_cache[0] = ($event) => showHelpModal.value = true)
					}, {
						default: withCtx(() => [createVNode(unref(HelpCircleOutline_default))]),
						_: 1
					})]),
					createBaseVNode("div", _hoisted_2, [
						createVNode(_component_n_input, {
							value: unref(url),
							"onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(url) ? url.value = $event : null),
							style: { width: "80%" },
							placeholder: "请输入视频链接或者直播间链接，比如：https://www.bilibili.com/video/BV1u94y1K7nr、https://v.douyu.com/show/brN0MmQqKl6MpyxA、https://www.huya.com/video/play/1043151558.html",
							onKeyup: withKeys(download, ["enter"])
						}, null, 8, ["value"]),
						createVNode(_component_n_button, {
							type: "primary",
							ghost: "",
							disabled: !unref(url),
							onClick: download
						}, {
							default: withCtx(() => _cache[8] || (_cache[8] = [createTextVNode(" 下载 ")])),
							_: 1
						}, 8, ["disabled"]),
						createVNode(_component_n_button, {
							type: "primary",
							disabled: !unref(url),
							onClick: subscribe
						}, {
							default: withCtx(() => _cache[9] || (_cache[9] = [createTextVNode(" 订阅 ")])),
							_: 1
						}, 8, ["disabled"])
					]),
					createVNode(SubVideoList_default, {
						list: unref(subVideoList),
						onRemove: getSuscribeList,
						onEdit: handleEdit
					}, null, 8, ["list"]),
					createVNode(DownloadModal_default, {
						visible: unref(visible),
						"onUpdate:visible": _cache[2] || (_cache[2] = ($event) => isRef(visible) ? visible.value = $event : null),
						"select-ids": unref(selectCids),
						"onUpdate:selectIds": _cache[3] || (_cache[3] = ($event) => isRef(selectCids) ? selectCids.value = $event : null),
						detail: unref(data),
						"c-options": unref(downloadOptions),
						onConfirm: confirm
					}, null, 8, [
						"visible",
						"select-ids",
						"detail",
						"c-options"
					]),
					createVNode(SubscribeModal_default, {
						visible: unref(subscribeVisible),
						"onUpdate:visible": _cache[4] || (_cache[4] = ($event) => isRef(subscribeVisible) ? subscribeVisible.value = $event : null),
						data: unref(subData),
						onUpdate: getSuscribeList,
						onAdd: getSuscribeList
					}, null, 8, ["visible", "data"]),
					createVNode(_component_n_modal, {
						show: unref(showHelpModal),
						"onUpdate:show": _cache[6] || (_cache[6] = ($event) => isRef(showHelpModal) ? showHelpModal.value = $event : null)
					}, {
						default: withCtx(() => [createVNode(_component_n_card, {
							style: { "width": "600px" },
							title: "示例",
							bordered: false,
							size: "huge",
							role: "dialog",
							"aria-modal": "true"
						}, {
							"header-extra": withCtx(() => [createVNode(_component_n_button, {
								quaternary: "",
								circle: "",
								onClick: _cache[5] || (_cache[5] = ($event) => showHelpModal.value = false)
							}, {
								default: withCtx(() => [createVNode(_component_n_icon, { size: "24" }, {
									default: withCtx(() => [createVNode(unref(CloseOutline_default))]),
									_: 1
								})]),
								_: 1
							})]),
							default: withCtx(() => [createBaseVNode("div", _hoisted_3, [
								_cache[12] || (_cache[12] = createBaseVNode("h3", null, "下载", -1)),
								createVNode(_component_n_table, {
									bordered: false,
									"single-line": false
								}, {
									default: withCtx(() => _cache[10] || (_cache[10] = [createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th", null, "平台"), createBaseVNode("th", null, "示例")])], -1), createBaseVNode("tbody", null, [
										createBaseVNode("tr", null, [createBaseVNode("td", null, "B站视频"), createBaseVNode("td", null, "https://www.bilibili.com/video/BV1Hs421M755/")]),
										createBaseVNode("tr", null, [createBaseVNode("td", null, "B站录播回放"), createBaseVNode("td", null, "https://live.bilibili.com/32736947")]),
										createBaseVNode("tr", null, [createBaseVNode("td", null, "斗鱼录播"), createBaseVNode("td", null, "https://v.douyu.com/show/yVY8WwDpGmovLOz9")]),
										createBaseVNode("tr", null, [createBaseVNode("td", null, "虎牙录播"), createBaseVNode("td", null, "https://www.huya.com/video/play/1062079466.html")]),
										createBaseVNode("tr", null, [createBaseVNode("td", null, "快手录播"), createBaseVNode("td", null, "https://live.kuaishou.com/playback/3xfhg6rsxsbrddq")]),
										createBaseVNode("tr", null, [createBaseVNode("td", null, "抖音录播"), createBaseVNode("td", null, "https://www.douyin.com/vsdetail/7553114817708594226")])
									], -1)])),
									_: 1
								}),
								_cache[13] || (_cache[13] = createBaseVNode("h3", { style: { "margin-top": "24px" } }, "订阅", -1)),
								createVNode(_component_n_table, {
									bordered: false,
									"single-line": false
								}, {
									default: withCtx(() => _cache[11] || (_cache[11] = [createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th", null, "平台"), createBaseVNode("th", null, "示例")])], -1), createBaseVNode("tbody", null, [createBaseVNode("tr", null, [createBaseVNode("td", null, "斗鱼录播"), createBaseVNode("td", null, "https://www.douyu.com/93589")]), createBaseVNode("tr", null, [createBaseVNode("td", null, "虎牙录播"), createBaseVNode("td", null, "https://www.huya.com/910323")])], -1)])),
									_: 1
								})
							])]),
							_: 1
						})]),
						_: 1
					}, 8, ["show"])
				]),
				_: 1
			}, 8, ["show"])]);
		};
	}
}), [["__scopeId", "data-v-e6b0136b"]]);
//#endregion
export { Video_default as default };
