import { $ as renderList, A as createTextVNode, C as computed, D as createElementBlock, E as createCommentVNode, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, T as createBlock, Tt as unref, U as onActivated, Y as onUnmounted, Z as openBlock, Zt as toDisplayString, at as watch, ft as init_reactivity_esm_bundler, j as createVNode, mt as isRef, o as useRouter, q as onDeactivated, st as withCtx, v as Fragment, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { A as supportedVideoExtensions, F as text_default, I as Input_default, _ as danmuPreset, f as task, g as ffmpegPreset, t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { t as Select_default } from "./Select-DRoqCGUj.js";
import { t as NIcon } from "./Icon-9AfBo3jH.js";
import { t as Space_default } from "./Space-B3s3-R0l.js";
import { d as cloneDeep, i as useFfmpegPreset, n as useDanmuPreset, t as useAppConfig } from "./stores-Cc_-mi5a.js";
import { t as Cascader_default } from "./Cascader-BBry4DRN.js";
import { t as Alert_default } from "./Alert-BpcX7FJC.js";
import { t as Checkbox_default } from "./Checkbox-C9dpLVBG.js";
import { n as Radio_default, t as RadioGroup_default } from "./RadioGroup-DGqq_izP.js";
import { n as useConfirm } from "./hooks-BIRfeUqh.js";
import { K as Button, W as Card_default, i as storeToRefs } from "./index-CPQhEiaa.js";
import { g as toReactive } from "./core-DWew9NA7.js";
import { t as useNotice } from "./useNotice-DqXLG4Nf.js";
import { t as hotkeys } from "./hotkeys.esm-DhVljeNg.js";
import { t as FolderOpenOutline_default } from "./FolderOpenOutline-BzyVunNB.js";
import { t as showDirectoryDialog } from "./fileSystem-DX81WPkK.js";
import { t as FileSelect_default } from "./FileSelect-Bz8b2ukH.js";
//#region src/renderer/src/pages/Tools/pages/Burn/index.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "tool-workbench" };
var _hoisted_2 = { class: "page-header" };
var _hoisted_3 = { class: "workspace-grid" };
var _hoisted_4 = { class: "file-actions" };
var _hoisted_5 = { class: "setting-section" };
var _hoisted_6 = { class: "setting-section" };
var _hoisted_7 = { class: "setting-section source-option" };
var _hoisted_8 = { class: "setting-section" };
var _hoisted_9 = {
	key: 0,
	class: "path-control"
};
var _hoisted_10 = { class: "setting-section" };
var _hoisted_11 = { class: "setting-section source-option" };
var _hoisted_12 = {
	key: 0,
	class: "failed-files"
};
var _hoisted_13 = { class: "submit-bar" };
var _hoisted_14 = { class: "submit-summary" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/Burn/index.vue
var Burn_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "Convert2Mp4",
	__name: "index",
	setup(__props) {
		const notice = useNotice();
		const confirm = useConfirm();
		const router = useRouter();
		const isWeb = window.isWeb;
		const { appConfig } = storeToRefs(useAppConfig());
		const { ffmpegOptions } = storeToRefs(useFfmpegPreset());
		const { danmuPresetsOptions } = storeToRefs(useDanmuPreset());
		const fileList = ref([]);
		const fileSelect = ref(null);
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
			get: () => appConfig.value.tool.video2mp4,
			set: (value) => {
				appConfig.value.tool.video2mp4 = value;
			}
		}));
		const canConvert = computed(() => !submitting.value && fileList.value.length > 0 && !!options.ffmpegPresetId && !!options.danmuPresetId && (options.saveRadio !== 2 || options.savePath.trim().length > 0));
		const submitHint = computed(() => {
			if (submitting.value) return `正在提交 ${processedCount.value}/${submittingTotal.value} 个文件`;
			if (!fileList.value.length) return "请先添加视频文件";
			if (!options.ffmpegPresetId) return "请先选择视频预设";
			if (!options.danmuPresetId) return "请先选择弹幕预设";
			return options.saveRadio === 1 ? "输出到各源文件夹" : options.savePath.trim() || "请先选择保存目录";
		});
		onActivated(() => {
			hotkeys("ctrl+enter", () => {
				convert();
			});
		});
		onDeactivated(() => hotkeys.unbind("ctrl+enter"));
		onUnmounted(() => hotkeys.unbind("ctrl+enter"));
		const convert = async () => {
			if (submitting.value) return;
			if (!fileList.value.length) {
				notice.error({ title: "至少选择一个文件" });
				return;
			}
			if (options.saveRadio === 2 && !options.savePath.trim()) {
				notice.error({ title: "请选择保存目录" });
				return;
			}
			if (!options.ffmpegPresetId || !options.danmuPresetId) {
				notice.error({ title: "请选择视频和弹幕预设" });
				return;
			}
			submitting.value = true;
			processedCount.value = 0;
			submissionResult.value = null;
			const files = cloneDeep(fileList.value);
			const taskOptions = { ...options };
			const homeOptions = { ...appConfig.value.tool.home };
			submittingTotal.value = files.length;
			try {
				const ffmpegConfig = await ffmpegPreset.get(taskOptions.ffmpegPresetId);
				if (!ffmpegConfig) {
					notice.error({ title: "视频预设不存在，请重新选择" });
					return;
				}
				const rawDanmuConfig = await danmuPreset.get(taskOptions.danmuPresetId);
				if (!rawDanmuConfig) {
					notice.error({ title: "弹幕预设不存在，请重新选择" });
					return;
				}
				const ffmpegConfigOptions = ffmpegConfig.config;
				const danmuOptions = rawDanmuConfig.config;
				if (ffmpegConfigOptions.encoder === "copy" && files.some((item) => item.danmakuPath)) {
					notice.error({ title: "存在弹幕文件，视频预设编码器不允许使用 copy 选项" });
					return;
				}
				if (taskOptions.hotProgress && files.some((item) => !item.danmakuPath)) {
					notice.error({ title: "未选择弹幕文件，无法使用高能进度条" });
					return;
				}
				if (taskOptions.saveRadio === 1) {
					const conflict = files.find((item) => window.path.basename(item.videoPath) === `${item.title}.mp4`);
					if (conflict) {
						notice.error({
							title: `输入文件与输出文件名相同：${window.path.basename(conflict.videoPath)}，请修改保存路径或文件名`,
							duration: 3e3
						});
						return;
					}
				}
				if (ffmpegConfigOptions.encoder !== "copy") {
					const [status] = await confirm.warning({
						content: "你可能正在对视频进行重编码，将耗费大量时间，是否继续？（如果你只是想转封装，可以选择预设中的 copy 选项）",
						showCheckbox: true,
						showAgainKey: "video2mp4Convert"
					});
					if (!status) return;
				}
				const submittedIds = /* @__PURE__ */ new Set();
				const failed = [];
				for (const file of files) {
					const outputName = `${file.title}.mp4`;
					try {
						if (file.danmakuPath) await task.burn({
							videoFilePath: file.videoPath,
							subtitleFilePath: file.danmakuPath
						}, outputName, {
							danmaOptions: danmuOptions,
							ffmpegOptions: ffmpegConfigOptions,
							hotProgressOptions: {
								interval: homeOptions.hotProgressSample,
								height: homeOptions.hotProgressHeight,
								color: homeOptions.hotProgressColor,
								fillColor: homeOptions.hotProgressFillColor
							},
							hasHotProgress: taskOptions.hotProgress,
							override: taskOptions.override,
							removeOrigin: taskOptions.removeOrigin,
							savePath: taskOptions.savePath,
							saveType: taskOptions.saveRadio
						});
						else await task.transcode(file.videoPath, outputName, ffmpegConfigOptions, {
							override: taskOptions.override,
							removeOrigin: taskOptions.removeOrigin,
							savePath: taskOptions.savePath,
							saveType: taskOptions.saveRadio
						});
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
		async function getDir() {
			const dir = await showDirectoryDialog({ defaultPath: options.savePath });
			if (!dir) return;
			options.savePath = dir;
			options.saveRadio = 2;
		}
		const addVideo = () => fileSelect.value?.select();
		const clear = () => {
			fileList.value = [];
		};
		const openQueue = () => router.push({ name: "Queue" });
		return (_ctx, _cache) => {
			const _component_n_button = Button;
			const _component_n_text = text_default;
			const _component_n_card = Card_default;
			const _component_n_cascader = Cascader_default;
			const _component_n_select = Select_default;
			const _component_n_checkbox = Checkbox_default;
			const _component_n_radio = Radio_default;
			const _component_n_radio_group = RadioGroup_default;
			const _component_n_input = Input_default;
			const _component_n_icon = NIcon;
			const _component_n_space = Space_default;
			const _component_n_alert = Alert_default;
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("header", _hoisted_2, [_cache[10] || (_cache[10] = createBaseVNode("div", null, [createBaseVNode("h2", null, "视频转码"), createBaseVNode("p", null, "批量转换视频格式，或将弹幕烧录到视频中")], -1)), createVNode(_component_n_button, {
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
						sort: false,
						extensions: [
							...unref(supportedVideoExtensions),
							"xml",
							"ass"
						],
						"input-placeholder": "输入内容将会被用为文件名",
						"area-placeholder": "请选择视频文件，可同时选择对应的弹幕文件"
					}, null, 8, ["modelValue", "extensions"]), createVNode(_component_n_text, {
						depth: "3",
						class: "file-hint"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(isWeb) ? "可一次选择多个视频及弹幕文件" : "可点击选择或拖入多个视频及弹幕文件"), 1)]),
						_: 1
					})]),
					_: 1
				}), createVNode(_component_n_card, {
					class: "workspace-card settings-card",
					bordered: false
				}, {
					header: withCtx(() => _cache[14] || (_cache[14] = [createBaseVNode("div", { class: "card-heading" }, [createBaseVNode("span", { class: "step-number" }, "2"), createTextVNode("设置")], -1)])),
					default: withCtx(() => [
						createBaseVNode("div", _hoisted_5, [_cache[15] || (_cache[15] = createBaseVNode("div", { class: "setting-title" }, "视频预设", -1)), createVNode(_component_n_cascader, {
							value: unref(options).ffmpegPresetId,
							"onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(options).ffmpegPresetId = $event),
							placeholder: "请选择视频预设",
							"expand-trigger": "click",
							options: unref(ffmpegOptions),
							"check-strategy": "child",
							"show-path": false,
							filterable: true
						}, null, 8, ["value", "options"])]),
						createBaseVNode("div", _hoisted_6, [_cache[16] || (_cache[16] = createBaseVNode("div", { class: "setting-title" }, "弹幕预设", -1)), createVNode(_component_n_select, {
							value: unref(options).danmuPresetId,
							"onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).danmuPresetId = $event),
							options: unref(danmuPresetsOptions),
							placeholder: "选择弹幕预设"
						}, null, 8, ["value", "options"])]),
						createBaseVNode("div", _hoisted_7, [createVNode(_component_n_checkbox, {
							checked: unref(options).hotProgress,
							"onUpdate:checked": _cache[3] || (_cache[3] = ($event) => unref(options).hotProgress = $event)
						}, {
							default: withCtx(() => _cache[17] || (_cache[17] = [createTextVNode("高能进度条")])),
							_: 1
						}, 8, ["checked"]), createVNode(_component_n_text, { depth: "3" }, {
							default: withCtx(() => _cache[18] || (_cache[18] = [createTextVNode("使用首页的数据；每个视频都需要对应的弹幕文件")])),
							_: 1
						})]),
						createBaseVNode("div", _hoisted_8, [
							_cache[22] || (_cache[22] = createBaseVNode("div", { class: "setting-title" }, "保存位置", -1)),
							createVNode(_component_n_radio_group, {
								value: unref(options).saveRadio,
								"onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(options).saveRadio = $event),
								class: "save-location"
							}, {
								default: withCtx(() => [createVNode(_component_n_radio, { value: 1 }, {
									default: withCtx(() => _cache[19] || (_cache[19] = [createTextVNode("保存到源文件所在文件夹")])),
									_: 1
								}), createVNode(_component_n_radio, { value: 2 }, {
									default: withCtx(() => _cache[20] || (_cache[20] = [createTextVNode("保存到指定文件夹")])),
									_: 1
								})]),
								_: 1
							}, 8, ["value"]),
							unref(options).saveRadio === 2 ? (openBlock(), createElementBlock("div", _hoisted_9, [createVNode(_component_n_input, {
								value: unref(options).savePath,
								"onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(options).savePath = $event),
								placeholder: "选择或输入保存目录",
								title: "支持相对路径"
							}, null, 8, ["value"]), createVNode(_component_n_button, { onClick: getDir }, {
								icon: withCtx(() => [createVNode(_component_n_icon, null, {
									default: withCtx(() => [createVNode(unref(FolderOpenOutline_default))]),
									_: 1
								})]),
								default: withCtx(() => [_cache[21] || (_cache[21] = createTextVNode(" 浏览 "))]),
								_: 1
							})])) : createCommentVNode("", true)
						]),
						createBaseVNode("div", _hoisted_10, [_cache[25] || (_cache[25] = createBaseVNode("div", { class: "setting-title" }, "同名文件", -1)), createVNode(_component_n_radio_group, {
							value: unref(options).override,
							"onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(options).override = $event)
						}, {
							default: withCtx(() => [createVNode(_component_n_space, null, {
								default: withCtx(() => [createVNode(_component_n_radio, { value: false }, {
									default: withCtx(() => _cache[23] || (_cache[23] = [createTextVNode("不覆盖已有文件")])),
									_: 1
								}), createVNode(_component_n_radio, { value: true }, {
									default: withCtx(() => _cache[24] || (_cache[24] = [createTextVNode("覆盖已有文件")])),
									_: 1
								})]),
								_: 1
							})]),
							_: 1
						}, 8, ["value"])]),
						createBaseVNode("div", _hoisted_11, [createVNode(_component_n_checkbox, {
							checked: unref(options).removeOrigin,
							"onUpdate:checked": _cache[7] || (_cache[7] = ($event) => unref(options).removeOrigin = $event)
						}, {
							default: withCtx(() => _cache[26] || (_cache[26] = [createTextVNode("转换完成后移除源文件")])),
							_: 1
						}, 8, ["checked"]), createVNode(_component_n_text, { depth: "3" }, {
							default: withCtx(() => _cache[27] || (_cache[27] = [createTextVNode("仅在转换任务完成后处理源文件")])),
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
					onClose: _cache[8] || (_cache[8] = ($event) => submissionResult.value = null)
				}, {
					default: withCtx(() => [unref(submissionResult).failed.length ? (openBlock(), createElementBlock("div", _hoisted_12, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(submissionResult).failed, (failure) => {
						return openBlock(), createElementBlock("div", { key: failure.id }, toDisplayString(failure.name) + "：" + toDisplayString(failure.message), 1);
					}), 128))])) : createCommentVNode("", true), unref(submissionResult).submitted ? (openBlock(), createBlock(_component_n_button, {
						key: 1,
						text: "",
						type: "primary",
						onClick: openQueue
					}, {
						default: withCtx(() => _cache[28] || (_cache[28] = [createTextVNode(" 查看任务队列 ")])),
						_: 1
					})) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["type", "title"])) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, [createBaseVNode("strong", null, toDisplayString(unref(fileList).length) + " 个文件待转换", 1), createVNode(_component_n_text, {
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
				}, 8, ["loading", "disabled"])])
			]);
		};
	}
}), [["__scopeId", "data-v-04d11db2"]]);
//#endregion
export { Burn_default as default };
