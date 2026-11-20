import { A as createTextVNode, C as computed, D as createElementBlock, E as createCommentVNode, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, T as createBlock, Tt as unref, U as onActivated, Y as onUnmounted, Z as openBlock, Zt as toDisplayString, at as watch, ft as init_reactivity_esm_bundler, j as createVNode, mt as isRef, o as useRouter, q as onDeactivated, st as withCtx, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { A as supportedVideoExtensions, F as text_default, S as formatFile, f as task, i as danma, t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { t as Dropdown_default } from "./Dropdown-BGb63-e4.js";
import { t as useAppConfig } from "./stores-Cc_-mi5a.js";
import { t as Alert_default } from "./Alert-BpcX7FJC.js";
import { t as Checkbox_default } from "./Checkbox-C9dpLVBG.js";
import { n as useConfirm } from "./hooks-BIRfeUqh.js";
import { K as Button, W as Card_default, i as storeToRefs } from "./index-CPQhEiaa.js";
import { g as toReactive } from "./core-DWew9NA7.js";
import { t as useNotice } from "./useNotice-DqXLG4Nf.js";
import { t as hotkeys } from "./hotkeys.esm-DhVljeNg.js";
import { r as showSaveDialog } from "./fileSystem-DX81WPkK.js";
import { t as FileSelect_default } from "./FileSelect-Bz8b2ukH.js";
//#region src/renderer/src/pages/Tools/pages/VideoMerge.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "tool-workbench" };
var _hoisted_2 = { class: "page-header" };
var _hoisted_3 = { class: "workspace-grid" };
var _hoisted_4 = { class: "file-actions" };
var _hoisted_5 = { class: "setting-section source-option" };
var _hoisted_6 = { class: "setting-section" };
var _hoisted_7 = { key: 0 };
var _hoisted_8 = { key: 1 };
var _hoisted_9 = { key: 2 };
var _hoisted_10 = { class: "submit-bar" };
var _hoisted_11 = { class: "submit-summary" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoMerge.vue
var VideoMerge_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "VideoMerge",
	__name: "VideoMerge",
	setup(__props) {
		const notice = useNotice();
		const confirm = useConfirm();
		const router = useRouter();
		const isWeb = window.isWeb;
		const { appConfig } = storeToRefs(useAppConfig());
		const fileList = ref([]);
		const fileSelect = ref(null);
		const submitting = ref(false);
		const submissionResult = ref(null);
		watch(submissionResult, (result, _, onCleanup) => {
			if (!result?.videoSubmitted || result.xmlError) return;
			const timer = setTimeout(() => {
				submissionResult.value = null;
			}, 1e4);
			onCleanup(() => clearTimeout(timer));
		});
		const options = toReactive(computed({
			get: () => appConfig.value.tool.videoMerge,
			set: (value) => {
				appConfig.value.tool.videoMerge = value;
			}
		}));
		const sortOptions = [{
			key: "asc",
			label: "文件名升序"
		}, {
			key: "desc",
			label: "文件名降序"
		}];
		const sortFiles = (key) => {
			const direction = key === "asc" ? 1 : -1;
			fileList.value.sort((a, b) => direction * a.videoPath.localeCompare(b.videoPath, "zh-Hans-CN", { numeric: true }));
		};
		const canMerge = computed(() => !submitting.value && fileList.value.length >= 2 && (!options.mergeXml || fileList.value.every((item) => !!item.danmakuPath)));
		const submitHint = computed(() => {
			if (submitting.value) return "正在检查并提交合并任务";
			if (fileList.value.length < 2) return "请至少添加两个视频文件";
			if (options.mergeXml && fileList.value.some((item) => !item.danmakuPath)) return "请为每个视频选择弹幕文件";
			return options.saveOriginPath ? "输出到首个视频所在文件夹" : "提交时选择输出文件";
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
			if (fileList.value.length < 2) {
				notice.error({ title: "至少选择2个文件" });
				return;
			}
			if (options.mergeXml && fileList.value.some((item) => !item.danmakuPath)) {
				notice.error({ title: "所有视频文件必须全部选择弹幕文件" });
				return;
			}
			submitting.value = true;
			submissionResult.value = null;
			const files = fileList.value.map((item) => ({ ...item }));
			const taskOptions = { ...options };
			try {
				const result = await task.checkMergeVideos(files.map((item) => item.videoPath));
				if (result.errors.length || result.warnings.length) {
					const [status] = await confirm.warning({
						title: "继续合并很有可能出现问题，是否继续？",
						content: [...result.errors, ...result.warnings].join("\n")
					});
					if (!status) return;
				}
				let videoOutput;
				let xmlOutput;
				if (!taskOptions.saveOriginPath) {
					const video = formatFile(files[0].videoPath);
					videoOutput = await showSaveDialog({ defaultPath: window.path.join(video.dir, `${video.name}-合并.mp4`) });
					if (!videoOutput) return;
					if (taskOptions.mergeXml) {
						const xml = formatFile(files[0].danmakuPath);
						xmlOutput = await showSaveDialog({ defaultPath: window.path.join(xml.dir, `${xml.name}-合并.xml`) });
						if (!xmlOutput) return;
					}
				}
				await task.mergeVideos(files.map((item) => item.videoPath), {
					output: videoOutput,
					...taskOptions
				});
				fileList.value = fileList.value.filter((item) => !files.some((file) => file.id === item.id));
				submissionResult.value = { videoSubmitted: true };
				if (taskOptions.mergeXml) try {
					await danma.mergeXml(files.map((item) => ({
						videoPath: item.videoPath,
						danmakuPath: item.danmakuPath
					})), {
						output: xmlOutput,
						saveOriginPath: taskOptions.saveOriginPath,
						saveMeta: true
					});
					submissionResult.value = {
						videoSubmitted: true,
						xmlMerged: true
					};
				} catch (error) {
					submissionResult.value = {
						videoSubmitted: true,
						xmlError: error instanceof Error ? error.message : String(error)
					};
				}
			} catch (error) {
				submissionResult.value = {
					videoSubmitted: false,
					videoError: error instanceof Error ? error.message : String(error)
				};
			} finally {
				submitting.value = false;
			}
		};
		const addVideo = () => fileSelect.value?.select();
		const clear = () => {
			fileList.value = [];
		};
		const openQueue = () => router.push({ name: "Queue" });
		return (_ctx, _cache) => {
			const _component_n_button = Button;
			const _component_n_text = text_default;
			const _component_n_dropdown = Dropdown_default;
			const _component_n_alert = Alert_default;
			const _component_n_card = Card_default;
			const _component_n_checkbox = Checkbox_default;
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("header", _hoisted_2, [_cache[5] || (_cache[5] = createBaseVNode("div", null, [createBaseVNode("h2", null, "视频合并"), createBaseVNode("p", null, "按文件列表顺序合并多个视频，可同时合并对应弹幕")], -1)), createVNode(_component_n_button, {
					text: "",
					type: "primary",
					onClick: openQueue
				}, {
					default: withCtx(() => _cache[4] || (_cache[4] = [createTextVNode("查看任务队列")])),
					_: 1
				})]),
				createBaseVNode("div", _hoisted_3, [createVNode(_component_n_card, {
					class: "workspace-card file-card",
					bordered: false
				}, {
					header: withCtx(() => _cache[6] || (_cache[6] = [createBaseVNode("div", { class: "card-heading" }, [createBaseVNode("span", { class: "step-number" }, "1"), createTextVNode("输入文件")], -1)])),
					"header-extra": withCtx(() => [createBaseVNode("div", _hoisted_4, [
						createVNode(_component_n_text, { depth: "3" }, {
							default: withCtx(() => [createTextVNode("已选择 " + toDisplayString(unref(fileList).length) + " 个", 1)]),
							_: 1
						}),
						createVNode(_component_n_dropdown, {
							options: sortOptions,
							disabled: unref(fileList).length < 2 || unref(submitting),
							onSelect: sortFiles
						}, {
							default: withCtx(() => [createVNode(_component_n_button, {
								size: "small",
								disabled: unref(fileList).length < 2 || unref(submitting)
							}, {
								default: withCtx(() => _cache[7] || (_cache[7] = [createTextVNode("排序")])),
								_: 1
							}, 8, ["disabled"])]),
							_: 1
						}, 8, ["disabled"]),
						createVNode(_component_n_button, {
							size: "small",
							disabled: unref(submitting),
							onClick: addVideo
						}, {
							default: withCtx(() => _cache[8] || (_cache[8] = [createTextVNode("添加文件")])),
							_: 1
						}, 8, ["disabled"]),
						createVNode(_component_n_button, {
							size: "small",
							disabled: unref(fileList).length === 0 || unref(submitting),
							onClick: clear
						}, {
							default: withCtx(() => _cache[9] || (_cache[9] = [createTextVNode(" 清空 ")])),
							_: 1
						}, 8, ["disabled"])
					])]),
					default: withCtx(() => [
						createVNode(FileSelect_default, {
							ref_key: "fileSelect",
							ref: fileSelect,
							modelValue: unref(fileList),
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(fileList) ? fileList.value = $event : null),
							extensions: [...unref(supportedVideoExtensions), "xml"],
							"disable-edit": true,
							"area-placeholder": "请选择至少两个视频文件"
						}, null, 8, ["modelValue", "extensions"]),
						createVNode(_component_n_text, {
							depth: "3",
							class: "file-hint"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(isWeb) ? "可一次选择多个视频及对应 XML 文件" : "可拖动调整顺序，或点击选择视频及对应 XML 文件"), 1)]),
							_: 1
						}),
						createVNode(_component_n_alert, {
							type: "warning",
							style: { "margin-top": "8px" }
						}, {
							default: withCtx(() => _cache[10] || (_cache[10] = [createTextVNode(" 并非所有容器都支持流复制。如果出现播放问题或未合并文件，可能需要重新编码。 ")])),
							_: 1
						})
					]),
					_: 1
				}), createVNode(_component_n_card, {
					class: "workspace-card settings-card",
					bordered: false
				}, {
					header: withCtx(() => _cache[11] || (_cache[11] = [createBaseVNode("div", { class: "card-heading" }, [createBaseVNode("span", { class: "step-number" }, "2"), createTextVNode("设置")], -1)])),
					default: withCtx(() => [createBaseVNode("div", _hoisted_5, [createVNode(_component_n_checkbox, {
						checked: unref(options).mergeXml,
						"onUpdate:checked": _cache[1] || (_cache[1] = ($event) => unref(options).mergeXml = $event)
					}, {
						default: withCtx(() => _cache[12] || (_cache[12] = [createTextVNode("合并弹幕")])),
						_: 1
					}, 8, ["checked"]), createVNode(_component_n_text, { depth: "3" }, {
						default: withCtx(() => _cache[13] || (_cache[13] = [createTextVNode("需要为每个视频选择对应的弹幕文件")])),
						_: 1
					})]), createBaseVNode("div", _hoisted_6, [
						_cache[15] || (_cache[15] = createBaseVNode("div", { class: "setting-title" }, "保存位置", -1)),
						createVNode(_component_n_checkbox, {
							checked: unref(options).saveOriginPath,
							"onUpdate:checked": _cache[2] || (_cache[2] = ($event) => unref(options).saveOriginPath = $event)
						}, {
							default: withCtx(() => _cache[14] || (_cache[14] = [createTextVNode("保存到首个视频所在文件夹")])),
							_: 1
						}, 8, ["checked"]),
						createVNode(_component_n_text, {
							depth: "3",
							class: "setting-hint"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(options).saveOriginPath ? "输出文件将自动命名" : "提交时选择视频输出文件"), 1)]),
							_: 1
						})
					])]),
					_: 1
				})]),
				unref(submissionResult) ? (openBlock(), createBlock(_component_n_alert, {
					key: 0,
					class: "submission-result",
					type: unref(submissionResult).videoSubmitted ? unref(submissionResult).xmlError ? "warning" : "success" : "error",
					title: unref(submissionResult).videoSubmitted ? "视频合并任务已提交" : "视频合并任务未提交",
					closable: "",
					onClose: _cache[3] || (_cache[3] = ($event) => submissionResult.value = null)
				}, {
					default: withCtx(() => [
						unref(submissionResult).videoError ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(unref(submissionResult).videoError), 1)) : createCommentVNode("", true),
						unref(submissionResult).xmlError ? (openBlock(), createElementBlock("div", _hoisted_8, "弹幕合并失败：" + toDisplayString(unref(submissionResult).xmlError), 1)) : unref(submissionResult).xmlMerged ? (openBlock(), createElementBlock("div", _hoisted_9, "弹幕合并成功")) : createCommentVNode("", true),
						unref(submissionResult).videoSubmitted ? (openBlock(), createBlock(_component_n_button, {
							key: 3,
							text: "",
							type: "primary",
							onClick: openQueue
						}, {
							default: withCtx(() => _cache[16] || (_cache[16] = [createTextVNode(" 查看任务队列 ")])),
							_: 1
						})) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, ["type", "title"])) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("strong", null, toDisplayString(unref(fileList).length) + " 个文件待合并", 1), createVNode(_component_n_text, {
					depth: "3",
					title: unref(submitHint)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(submitHint)), 1)]),
					_: 1
				}, 8, ["title"])]), createVNode(_component_n_button, {
					type: "primary",
					size: "large",
					loading: unref(submitting),
					disabled: !unref(canMerge),
					title: "快捷键 Ctrl+Enter",
					onClick: convert
				}, {
					default: withCtx(() => [createTextVNode(" 开始合并（" + toDisplayString(unref(fileList).length) + " 个文件） ", 1)]),
					_: 1
				}, 8, ["loading", "disabled"])])
			]);
		};
	}
}), [["__scopeId", "data-v-55cab06b"]]);
//#endregion
export { VideoMerge_default as default };
