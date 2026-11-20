import { $ as renderList, A as createTextVNode, C as computed, D as createElementBlock, E as createCommentVNode, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, T as createBlock, Tt as unref, U as onActivated, Y as onUnmounted, Z as openBlock, Zt as toDisplayString, at as watch, ft as init_reactivity_esm_bundler, j as createVNode, mt as isRef, o as useRouter, q as onDeactivated, st as withCtx, v as Fragment, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { F as text_default, I as Input_default, n as sync_default, t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { t as Select_default } from "./Select-DRoqCGUj.js";
import { t as useAppConfig } from "./stores-Cc_-mi5a.js";
import { t as Alert_default } from "./Alert-BpcX7FJC.js";
import { t as Checkbox_default } from "./Checkbox-C9dpLVBG.js";
import { K as Button, W as Card_default, i as storeToRefs } from "./index-CPQhEiaa.js";
import { g as toReactive } from "./core-DWew9NA7.js";
import { t as useNotice } from "./useNotice-DqXLG4Nf.js";
import { t as hotkeys } from "./hotkeys.esm-DhVljeNg.js";
import { t as FileSelect_default } from "./FileSelect-BuvNf7PM.js";
//#region src/renderer/src/pages/Tools/pages/FileSync/index.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "tool-workbench" };
var _hoisted_2 = { class: "page-header" };
var _hoisted_3 = { class: "workspace-grid" };
var _hoisted_4 = { class: "file-actions" };
var _hoisted_5 = { class: "setting-section" };
var _hoisted_6 = {
	key: 0,
	class: "setting-section"
};
var _hoisted_7 = { class: "setting-section" };
var _hoisted_8 = { class: "setting-section source-option" };
var _hoisted_9 = {
	key: 0,
	class: "failed-files"
};
var _hoisted_10 = { class: "submit-bar" };
var _hoisted_11 = { class: "submit-summary" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/FileSync/index.vue
var FileSync_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "FileSync",
	__name: "index",
	setup(__props) {
		const notice = useNotice();
		const router = useRouter();
		const isWeb = window.isWeb;
		const { appConfig } = storeToRefs(useAppConfig());
		const options = toReactive(computed({
			get: () => appConfig.value.tool.fileSync,
			set: (value) => {
				appConfig.value.tool.fileSync = value;
			}
		}));
		const targetPathDraft = ref("");
		watch(() => options.targetPath, (value) => {
			targetPathDraft.value = value;
		}, { immediate: true });
		const handleTargetPathBlur = () => {
			if (targetPathDraft.value !== options.targetPath) options.targetPath = targetPathDraft.value;
		};
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
		const syncConfigOptions = [
			{
				label: "百度网盘",
				value: "baiduPCS"
			},
			{
				label: "阿里云盘",
				value: "aliyunpan"
			},
			{
				label: "alist",
				value: "alist"
			},
			{
				label: "123网盘",
				value: "pan123"
			},
			{
				label: "夸克网盘",
				value: "quark"
			}
		];
		const aliyunpanDriveOptions = [{
			label: "备份盘",
			value: "backup"
		}, {
			label: "资源库",
			value: "resource"
		}];
		const canSync = computed(() => !submitting.value && fileList.value.length > 0 && !!options.syncType);
		const submitHint = computed(() => {
			if (submitting.value) return `正在提交 ${processedCount.value}/${submittingTotal.value} 个文件`;
			if (!fileList.value.length) return "请先添加文件";
			if (!options.syncType) return "请先选择同步网盘";
			return targetPathDraft.value.trim() || "上传到网盘默认位置";
		});
		onActivated(() => {
			hotkeys("ctrl+enter", () => {
				sync();
			});
		});
		onDeactivated(() => hotkeys.unbind("ctrl+enter"));
		onUnmounted(() => hotkeys.unbind("ctrl+enter"));
		const sync = async () => {
			if (submitting.value) return;
			if (!options.syncType) {
				notice.error({ title: "请选择同步网盘" });
				return;
			}
			if (!fileList.value.length) {
				notice.error({ title: "至少选择一个文件" });
				return;
			}
			handleTargetPathBlur();
			submitting.value = true;
			processedCount.value = 0;
			submissionResult.value = null;
			const files = [...fileList.value];
			const taskOptions = {
				type: options.syncType,
				targetPath: options.targetPath,
				aliyunpanDriveType: options.syncType === "aliyunpan" ? options.aliyunpanDriveType || "backup" : void 0,
				options: { removeOrigin: options.removeOrigin }
			};
			submittingTotal.value = files.length;
			try {
				const submittedIds = /* @__PURE__ */ new Set();
				const failed = [];
				for (const file of files) try {
					await sync_default.sync({
						file: file.path,
						...taskOptions
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
				fileList.value = fileList.value.filter((file) => !submittedIds.has(file.id));
				submissionResult.value = {
					submitted: submittedIds.size,
					failed
				};
			} finally {
				submitting.value = false;
			}
		};
		const addFiles = () => fileSelect.value?.select();
		const clear = () => {
			fileList.value = [];
		};
		const openQueue = () => router.push({ name: "Queue" });
		return (_ctx, _cache) => {
			const _component_n_button = Button;
			const _component_n_text = text_default;
			const _component_n_card = Card_default;
			const _component_n_select = Select_default;
			const _component_n_input = Input_default;
			const _component_n_checkbox = Checkbox_default;
			const _component_n_alert = Alert_default;
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("header", _hoisted_2, [_cache[7] || (_cache[7] = createBaseVNode("div", null, [createBaseVNode("h2", null, "文件同步"), createBaseVNode("p", null, "将本地文件批量上传到网盘")], -1)), createVNode(_component_n_button, {
					text: "",
					type: "primary",
					onClick: openQueue
				}, {
					default: withCtx(() => _cache[6] || (_cache[6] = [createTextVNode("查看任务队列")])),
					_: 1
				})]),
				createBaseVNode("div", _hoisted_3, [createVNode(_component_n_card, {
					class: "workspace-card file-card",
					bordered: false
				}, {
					header: withCtx(() => _cache[8] || (_cache[8] = [createBaseVNode("div", { class: "card-heading" }, [createBaseVNode("span", { class: "step-number" }, "1"), createTextVNode("输入文件")], -1)])),
					"header-extra": withCtx(() => [createBaseVNode("div", _hoisted_4, [
						createVNode(_component_n_text, { depth: "3" }, {
							default: withCtx(() => [createTextVNode("已选择 " + toDisplayString(unref(fileList).length) + " 个", 1)]),
							_: 1
						}),
						createVNode(_component_n_button, {
							size: "small",
							disabled: unref(submitting),
							onClick: addFiles
						}, {
							default: withCtx(() => _cache[9] || (_cache[9] = [createTextVNode("添加文件")])),
							_: 1
						}, 8, ["disabled"]),
						createVNode(_component_n_button, {
							size: "small",
							disabled: unref(fileList).length === 0 || unref(submitting),
							onClick: clear
						}, {
							default: withCtx(() => _cache[10] || (_cache[10] = [createTextVNode(" 清空 ")])),
							_: 1
						}, 8, ["disabled"])
					])]),
					default: withCtx(() => [createVNode(FileSelect_default, {
						ref_key: "fileSelect",
						ref: fileSelect,
						modelValue: unref(fileList),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(fileList) ? fileList.value = $event : null),
						sort: false,
						extensions: ["*"],
						"area-placeholder": "可选择任意文件"
					}, null, 8, ["modelValue"]), createVNode(_component_n_text, {
						depth: "3",
						class: "file-hint"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(isWeb) ? "可一次选择多个文件" : "可点击选择或拖入多个文件"), 1)]),
						_: 1
					})]),
					_: 1
				}), createVNode(_component_n_card, {
					class: "workspace-card settings-card",
					bordered: false
				}, {
					header: withCtx(() => _cache[11] || (_cache[11] = [createBaseVNode("div", { class: "card-heading" }, [createBaseVNode("span", { class: "step-number" }, "2"), createTextVNode("设置")], -1)])),
					default: withCtx(() => [
						createBaseVNode("div", _hoisted_5, [_cache[12] || (_cache[12] = createBaseVNode("div", { class: "setting-title" }, "同步网盘", -1)), createVNode(_component_n_select, {
							value: unref(options).syncType,
							"onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(options).syncType = $event),
							options: syncConfigOptions,
							placeholder: "选择同步网盘"
						}, null, 8, ["value"])]),
						unref(options).syncType === "aliyunpan" ? (openBlock(), createElementBlock("div", _hoisted_6, [_cache[13] || (_cache[13] = createBaseVNode("div", { class: "setting-title" }, "上传位置", -1)), createVNode(_component_n_select, {
							value: unref(options).aliyunpanDriveType,
							"onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).aliyunpanDriveType = $event),
							options: aliyunpanDriveOptions,
							placeholder: "选择上传位置"
						}, null, 8, ["value"])])) : createCommentVNode("", true),
						createBaseVNode("div", _hoisted_7, [_cache[14] || (_cache[14] = createBaseVNode("div", { class: "setting-title" }, "目标路径", -1)), createVNode(_component_n_input, {
							value: unref(targetPathDraft),
							"onUpdate:value": _cache[3] || (_cache[3] = ($event) => isRef(targetPathDraft) ? targetPathDraft.value = $event : null),
							placeholder: "请输入目标路径",
							onBlur: handleTargetPathBlur
						}, null, 8, ["value"])]),
						createBaseVNode("div", _hoisted_8, [createVNode(_component_n_checkbox, {
							checked: unref(options).removeOrigin,
							"onUpdate:checked": _cache[4] || (_cache[4] = ($event) => unref(options).removeOrigin = $event)
						}, {
							default: withCtx(() => _cache[15] || (_cache[15] = [createTextVNode("上传完成后移除源文件")])),
							_: 1
						}, 8, ["checked"]), createVNode(_component_n_text, { depth: "3" }, {
							default: withCtx(() => _cache[16] || (_cache[16] = [createTextVNode("仅在同步任务完成后处理源文件")])),
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
					onClose: _cache[5] || (_cache[5] = ($event) => submissionResult.value = null)
				}, {
					default: withCtx(() => [unref(submissionResult).failed.length ? (openBlock(), createElementBlock("div", _hoisted_9, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(submissionResult).failed, (failure) => {
						return openBlock(), createElementBlock("div", { key: failure.id }, toDisplayString(failure.name) + "：" + toDisplayString(failure.message), 1);
					}), 128))])) : createCommentVNode("", true), unref(submissionResult).submitted ? (openBlock(), createBlock(_component_n_button, {
						key: 1,
						text: "",
						type: "primary",
						onClick: openQueue
					}, {
						default: withCtx(() => _cache[17] || (_cache[17] = [createTextVNode(" 查看任务队列 ")])),
						_: 1
					})) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["type", "title"])) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("strong", null, toDisplayString(unref(fileList).length) + " 个文件待上传", 1), createVNode(_component_n_text, {
					depth: "3",
					title: unref(submitHint)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(submitHint)), 1)]),
					_: 1
				}, 8, ["title"])]), createVNode(_component_n_button, {
					type: "primary",
					size: "large",
					loading: unref(submitting),
					disabled: !unref(canSync),
					title: "快捷键 Ctrl+Enter",
					onClick: sync
				}, {
					default: withCtx(() => [createTextVNode(" 开始上传（" + toDisplayString(unref(fileList).length) + " 个文件） ", 1)]),
					_: 1
				}, 8, ["loading", "disabled"])])
			]);
		};
	}
}), [["__scopeId", "data-v-2fba3b4c"]]);
//#endregion
export { FileSync_default as default };
