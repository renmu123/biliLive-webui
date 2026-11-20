import { $ as renderList, A as createTextVNode, C as computed, D as createElementBlock, E as createCommentVNode, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, T as createBlock, Tt as unref, U as onActivated, Y as onUnmounted, Z as openBlock, Zt as toDisplayString, at as watch, ft as init_reactivity_esm_bundler, j as createVNode, mt as isRef, o as useRouter, q as onDeactivated, st as withCtx, v as Fragment, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { F as text_default, I as Input_default, _ as danmuPreset, f as task, t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { t as Select_default } from "./Select-DRoqCGUj.js";
import { t as NIcon } from "./Icon-9AfBo3jH.js";
import { t as Space_default } from "./Space-B3s3-R0l.js";
import { n as useDanmuPreset, t as useAppConfig } from "./stores-Cc_-mi5a.js";
import { t as Alert_default } from "./Alert-BpcX7FJC.js";
import { t as Checkbox_default } from "./Checkbox-C9dpLVBG.js";
import { n as Radio_default, t as RadioGroup_default } from "./RadioGroup-DGqq_izP.js";
import { K as Button, W as Card_default, i as storeToRefs } from "./index-CPQhEiaa.js";
import { g as toReactive } from "./core-DWew9NA7.js";
import { t as useNotice } from "./useNotice-DqXLG4Nf.js";
import { t as hotkeys } from "./hotkeys.esm-DhVljeNg.js";
import { t as FolderOpenOutline_default } from "./FolderOpenOutline-BzyVunNB.js";
import { t as showDirectoryDialog } from "./fileSystem-DX81WPkK.js";
import { t as DanmuFactorySettingDailog_default } from "./DanmuFactorySettingDailog--GKJjUax.js";
import { t as FileSelect_default } from "./FileSelect-BuvNf7PM.js";
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/Settings.js
init_runtime_core_esm_bundler();
var _hoisted_1$1 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var Settings_default = defineComponent({
	name: "Settings",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [createBaseVNode("circle", {
			cx: "256",
			cy: "256",
			r: "48",
			fill: "currentColor"
		}, null, -1), createBaseVNode("path", {
			d: "M470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175.21 175.21 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11zm-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region src/renderer/src/pages/Tools/pages/DanmuFactory.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "danmu-workbench" };
var _hoisted_2 = { class: "page-header" };
var _hoisted_3 = { class: "workspace-grid" };
var _hoisted_4 = { class: "file-actions" };
var _hoisted_5 = { class: "setting-section" };
var _hoisted_6 = { class: "preset-control" };
var _hoisted_7 = { class: "setting-section" };
var _hoisted_8 = {
	key: 0,
	class: "path-control"
};
var _hoisted_9 = { class: "setting-section" };
var _hoisted_10 = { class: "setting-section source-option" };
var _hoisted_11 = {
	key: 0,
	class: "failed-files"
};
var _hoisted_12 = { class: "submit-bar" };
var _hoisted_13 = { class: "submit-summary" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/DanmuFactory.vue
var DanmuFactory_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "DanmakuFactory",
	__name: "DanmuFactory",
	setup(__props) {
		const { danmuPresetsOptions, danmuPresetId } = storeToRefs(useDanmuPreset());
		const { appConfig } = storeToRefs(useAppConfig());
		const notice = useNotice();
		const router = useRouter();
		const isWeb = window.isWeb;
		const fileList = ref([]);
		const submitting = ref(false);
		const processedCount = ref(0);
		const submittingTotal = ref(0);
		const submissionResult = ref(null);
		watch(submissionResult, (result, _, onCleanup) => {
			if (!result?.submitted || result.failed.length) return;
			const timer = setTimeout(() => {
				submissionResult.value = null;
			}, 1e4);
			onCleanup(() => clearTimeout(timer));
		});
		const options = toReactive(computed({
			get: () => appConfig.value.tool.danmu,
			set: (value) => {
				appConfig.value.tool.danmu = value;
			}
		}));
		const canConvert = computed(() => !submitting.value && fileList.value.length > 0 && !!danmuPresetId.value && (options.saveRadio !== 2 || options.savePath.trim().length > 0));
		const submitHint = computed(() => {
			if (submitting.value) return `正在提交 ${processedCount.value}/${submittingTotal.value} 个文件`;
			if (!fileList.value.length) return "请先添加 XML 文件";
			if (!danmuPresetId.value) return "请先选择弹幕预设";
			return options.saveRadio === 1 ? "输出到各源文件夹" : options.savePath.trim() || "请先选择保存目录";
		});
		onActivated(() => {
			hotkeys("ctrl+enter", function() {
				convert();
			});
		});
		onDeactivated(() => {
			hotkeys.unbind("ctrl+enter");
		});
		onUnmounted(() => {
			hotkeys.unbind("ctrl+enter");
		});
		const convert = async () => {
			if (submitting.value) return;
			if (fileList.value.length === 0) {
				notice.error({ title: "至少选择一个文件" });
				return;
			}
			if (options.saveRadio === 2 && !options.savePath.trim()) {
				notice.error({ title: "请选择保存目录" });
				return;
			}
			if (!danmuPresetId.value) {
				notice.error({ title: "请选择弹幕预设" });
				return;
			}
			submitting.value = true;
			processedCount.value = 0;
			submissionResult.value = null;
			const files = [...fileList.value];
			const taskOptions = { ...options };
			submittingTotal.value = files.length;
			try {
				const config = (await danmuPreset.get(danmuPresetId.value)).config;
				if (config.resolutionResponsive) notice.warning({
					duration: 5e3,
					title: `本次转换无法使用自适应分辨率，将使用${config.resolution[0]}X${config.resolution[1]}分辨率，请确认与你的视频分辨率一致`
				});
				const submittedIds = /* @__PURE__ */ new Set();
				const failed = [];
				for (const file of files) try {
					await task.convertXml2Ass(file.path, file.title, config, taskOptions);
					submittedIds.add(file.id);
				} catch (error) {
					failed.push({
						id: file.id,
						name: file.title,
						message: error instanceof Error ? error.message : String(error)
					});
				} finally {
					processedCount.value += 1;
				}
				fileList.value = fileList.value.filter((file) => !submittedIds.has(file.id));
				submissionResult.value = {
					submitted: submittedIds.size,
					failed
				};
			} catch (error) {
				notice.error({ title: error instanceof Error ? error.message : String(error) });
			} finally {
				submitting.value = false;
			}
		};
		const show = ref(false);
		const openSetting = () => {
			show.value = true;
		};
		async function getDir() {
			let dir = await showDirectoryDialog({ defaultPath: options.savePath });
			if (!dir) return;
			options.savePath = dir;
			options.saveRadio = 2;
		}
		const fileSelect = ref(null);
		const addVideo = async () => {
			fileSelect.value?.select();
		};
		const clear = () => {
			fileList.value = [];
		};
		const openQueue = () => {
			router.push({ name: "Queue" });
		};
		return (_ctx, _cache) => {
			const _component_n_button = Button;
			const _component_n_text = text_default;
			const _component_n_card = Card_default;
			const _component_n_select = Select_default;
			const _component_n_icon = NIcon;
			const _component_n_radio = Radio_default;
			const _component_n_radio_group = RadioGroup_default;
			const _component_n_input = Input_default;
			const _component_n_space = Space_default;
			const _component_n_checkbox = Checkbox_default;
			const _component_n_alert = Alert_default;
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("header", _hoisted_2, [_cache[10] || (_cache[10] = createBaseVNode("div", null, [createBaseVNode("h2", null, "弹幕转换"), createBaseVNode("p", null, "将 XML 弹幕文件批量转换为 ASS 字幕")], -1)), createVNode(_component_n_button, {
					text: "",
					type: "primary",
					onClick: openQueue
				}, {
					default: withCtx(() => _cache[9] || (_cache[9] = [createTextVNode("查看任务队列")])),
					_: 1
				})]),
				createBaseVNode("div", _hoisted_3, [createVNode(_component_n_card, {
					class: "workspace-card file-card",
					bordered: false
				}, {
					header: withCtx(() => _cache[11] || (_cache[11] = [createBaseVNode("div", { class: "card-heading" }, [createBaseVNode("span", { class: "step-number" }, "1"), createTextVNode("输入文件")], -1)])),
					"header-extra": withCtx(() => [createBaseVNode("div", _hoisted_4, [
						createVNode(_component_n_text, { depth: "3" }, {
							default: withCtx(() => [createTextVNode("已选择 " + toDisplayString(unref(fileList).length) + " 个", 1)]),
							_: 1
						}),
						createVNode(_component_n_button, {
							size: "small",
							disabled: unref(submitting),
							onClick: addVideo
						}, {
							default: withCtx(() => _cache[12] || (_cache[12] = [createTextVNode("添加文件")])),
							_: 1
						}, 8, ["disabled"]),
						createVNode(_component_n_button, {
							size: "small",
							disabled: unref(fileList).length === 0 || unref(submitting),
							onClick: clear
						}, {
							default: withCtx(() => _cache[13] || (_cache[13] = [createTextVNode(" 清空 ")])),
							_: 1
						}, 8, ["disabled"])
					])]),
					default: withCtx(() => [createVNode(FileSelect_default, {
						ref_key: "fileSelect",
						ref: fileSelect,
						modelValue: unref(fileList),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(fileList) ? fileList.value = $event : null),
						"area-placeholder": "仅支持 XML 文件",
						extensions: ["xml"],
						sort: false
					}, null, 8, ["modelValue"]), createVNode(_component_n_text, {
						depth: "3",
						class: "file-hint"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(isWeb) ? "可一次选择多个 XML 文件" : "可点击选择或拖入多个 XML 文件"), 1)]),
						_: 1
					})]),
					_: 1
				}), createVNode(_component_n_card, {
					class: "workspace-card settings-card",
					bordered: false
				}, {
					header: withCtx(() => _cache[14] || (_cache[14] = [createBaseVNode("div", { class: "card-heading" }, [createBaseVNode("span", { class: "step-number" }, "2"), createTextVNode("设置")], -1)])),
					default: withCtx(() => [
						createBaseVNode("div", _hoisted_5, [_cache[16] || (_cache[16] = createBaseVNode("div", { class: "setting-title" }, "弹幕预设", -1)), createBaseVNode("div", _hoisted_6, [createVNode(_component_n_select, {
							value: unref(danmuPresetId),
							"onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(danmuPresetId) ? danmuPresetId.value = $event : null),
							options: unref(danmuPresetsOptions),
							placeholder: "选择预设"
						}, null, 8, ["value", "options"]), createVNode(_component_n_button, { onClick: openSetting }, {
							icon: withCtx(() => [createVNode(_component_n_icon, null, {
								default: withCtx(() => [createVNode(unref(Settings_default))]),
								_: 1
							})]),
							default: withCtx(() => [_cache[15] || (_cache[15] = createTextVNode(" 编辑预设 "))]),
							_: 1
						})])]),
						createBaseVNode("div", _hoisted_7, [
							_cache[20] || (_cache[20] = createBaseVNode("div", { class: "setting-title" }, "保存位置", -1)),
							createVNode(_component_n_radio_group, {
								value: unref(options).saveRadio,
								"onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).saveRadio = $event),
								class: "save-location"
							}, {
								default: withCtx(() => [createVNode(_component_n_radio, { value: 1 }, {
									default: withCtx(() => _cache[17] || (_cache[17] = [createTextVNode("保存到源文件所在文件夹")])),
									_: 1
								}), createVNode(_component_n_radio, { value: 2 }, {
									default: withCtx(() => _cache[18] || (_cache[18] = [createTextVNode("保存到指定文件夹")])),
									_: 1
								})]),
								_: 1
							}, 8, ["value"]),
							unref(options).saveRadio === 2 ? (openBlock(), createElementBlock("div", _hoisted_8, [createVNode(_component_n_input, {
								value: unref(options).savePath,
								"onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(options).savePath = $event),
								placeholder: "选择或输入保存目录",
								title: "支持相对路径"
							}, null, 8, ["value"]), createVNode(_component_n_button, { onClick: getDir }, {
								icon: withCtx(() => [createVNode(_component_n_icon, null, {
									default: withCtx(() => [createVNode(unref(FolderOpenOutline_default))]),
									_: 1
								})]),
								default: withCtx(() => [_cache[19] || (_cache[19] = createTextVNode(" 浏览 "))]),
								_: 1
							})])) : createCommentVNode("", true)
						]),
						createBaseVNode("div", _hoisted_9, [_cache[23] || (_cache[23] = createBaseVNode("div", { class: "setting-title" }, "同名文件", -1)), createVNode(_component_n_radio_group, {
							value: unref(options).override,
							"onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(options).override = $event)
						}, {
							default: withCtx(() => [createVNode(_component_n_space, null, {
								default: withCtx(() => [createVNode(_component_n_radio, { value: false }, {
									default: withCtx(() => _cache[21] || (_cache[21] = [createTextVNode("不覆盖已有文件")])),
									_: 1
								}), createVNode(_component_n_radio, { value: true }, {
									default: withCtx(() => _cache[22] || (_cache[22] = [createTextVNode("覆盖已有文件")])),
									_: 1
								})]),
								_: 1
							})]),
							_: 1
						}, 8, ["value"])]),
						createBaseVNode("div", _hoisted_10, [createVNode(_component_n_checkbox, {
							checked: unref(options).removeOrigin,
							"onUpdate:checked": _cache[5] || (_cache[5] = ($event) => unref(options).removeOrigin = $event)
						}, {
							default: withCtx(() => _cache[24] || (_cache[24] = [createTextVNode("转换成功后移除源 XML 文件")])),
							_: 1
						}, 8, ["checked"]), createVNode(_component_n_text, { depth: "3" }, {
							default: withCtx(() => _cache[25] || (_cache[25] = [createTextVNode("仅在转换任务完成后处理源文件")])),
							_: 1
						})])
					]),
					_: 1
				})]),
				unref(submissionResult) ? (openBlock(), createBlock(_component_n_alert, {
					key: 0,
					class: "submission-result",
					type: unref(submissionResult).failed.length ? unref(submissionResult).submitted ? "warning" : "error" : "success",
					title: `已提交 ${unref(submissionResult).submitted} 个任务${unref(submissionResult).failed.length ? `，${unref(submissionResult).failed.length} 个文件未提交` : ""}`,
					closable: "",
					onClose: _cache[6] || (_cache[6] = ($event) => submissionResult.value = null)
				}, {
					default: withCtx(() => [unref(submissionResult).failed.length ? (openBlock(), createElementBlock("div", _hoisted_11, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(submissionResult).failed, (failure) => {
						return openBlock(), createElementBlock("div", { key: failure.id }, toDisplayString(failure.name) + "：" + toDisplayString(failure.message), 1);
					}), 128))])) : createCommentVNode("", true), unref(submissionResult).submitted ? (openBlock(), createBlock(_component_n_button, {
						key: 1,
						text: "",
						type: "primary",
						onClick: openQueue
					}, {
						default: withCtx(() => _cache[26] || (_cache[26] = [createTextVNode(" 查看任务队列 ")])),
						_: 1
					})) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["type", "title"])) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [createBaseVNode("strong", null, toDisplayString(unref(fileList).length) + " 个文件待转换", 1), createVNode(_component_n_text, {
					depth: "3",
					title: unref(submitHint)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(submitHint)), 1)]),
					_: 1
				}, 8, ["title"])]), createVNode(_component_n_button, {
					type: "primary",
					size: "large",
					loading: unref(submitting),
					disabled: !unref(canConvert),
					title: "快捷键 Ctrl+Enter",
					onClick: convert
				}, {
					default: withCtx(() => [createTextVNode(" 开始转换（" + toDisplayString(unref(fileList).length) + " 个文件） ", 1)]),
					_: 1
				}, 8, ["loading", "disabled"])]),
				createVNode(DanmuFactorySettingDailog_default, {
					visible: unref(show),
					"onUpdate:visible": _cache[7] || (_cache[7] = ($event) => isRef(show) ? show.value = $event : null),
					modelValue: unref(danmuPresetId),
					"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isRef(danmuPresetId) ? danmuPresetId.value = $event : null)
				}, null, 8, ["visible", "modelValue"])
			]);
		};
	}
}), [["__scopeId", "data-v-de174c1f"]]);
//#endregion
export { DanmuFactory_default as default };
