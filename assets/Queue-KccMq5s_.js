import { $ as renderList, A as createTextVNode, C as computed, D as createElementBlock, E as createCommentVNode, Jt as normalizeStyle, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, T as createBlock, Tt as unref, U as onActivated, Z as openBlock, Zt as toDisplayString, ft as init_reactivity_esm_bundler, j as createVNode, k as createStaticVNode, mt as isRef, q as onDeactivated, st as withCtx, v as Fragment, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { A as supportedVideoExtensions, N as showInput, b as deepRaw, f as task, t as _plugin_vue_export_helper_default, w as formatSeconds } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { s as Empty_default, t as Select_default } from "./Select-DRoqCGUj.js";
import { t as NIcon } from "./Icon-9AfBo3jH.js";
import { a as useQueueStore } from "./stores-Cc_-mi5a.js";
import { n as CheckboxGroup_default, t as Checkbox_default } from "./Checkbox-C9dpLVBG.js";
import { n as useConfirm } from "./hooks-BIRfeUqh.js";
import { t as useNotification } from "./use-notification-BORvHMZV.js";
import { n as Progress_default, t as AddCircleOutline_default } from "./AddCircleOutline-jYg4TbiK.js";
import { K as Button } from "./index-CPQhEiaa.js";
import { t as CloseOutline_default } from "./CloseOutline-DMwWmUlo.js";
import { n as DownloadOutline_default, t as FileOpenOutlined_default } from "./FileOpenOutlined-DuL5tpCp.js";
import { t as Refresh_default } from "./Refresh-DgNFx3II.js";
import { n as TaskType } from "./enum-BoxTpF4C.js";
import { n as showFileDialog } from "./fileSystem-DX81WPkK.js";
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/AlertCircleOutline.js
init_runtime_core_esm_bundler();
var _hoisted_1$9 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var AlertCircleOutline_default = defineComponent({
	name: "AlertCircleOutline",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$9, _cache[0] || (_cache[0] = [
			createBaseVNode("path", {
				d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",
				fill: "none",
				stroke: "currentColor",
				"stroke-miterlimit": "10",
				"stroke-width": "32"
			}, null, -1),
			createBaseVNode("path", {
				d: "M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6z",
				fill: "none",
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "32"
			}, null, -1),
			createBaseVNode("path", {
				d: "M256 367.91a20 20 0 1 1 20-20a20 20 0 0 1-20 20z",
				fill: "currentColor"
			}, null, -1)
		]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/CloseSharp.js
init_runtime_core_esm_bundler();
var _hoisted_1$8 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var CloseSharp_default = defineComponent({
	name: "CloseSharp",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$8, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M400 145.49L366.51 112L256 222.51L145.49 112L112 145.49L222.51 256L112 366.51L145.49 400L256 289.49L366.51 400L400 366.51L289.49 256L400 145.49z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/PauseSharp.js
init_runtime_core_esm_bundler();
var _hoisted_1$7 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var PauseSharp_default = defineComponent({
	name: "PauseSharp",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$7, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M224 432h-80V80h80z",
			fill: "currentColor"
		}, null, -1), createBaseVNode("path", {
			d: "M368 432h-80V80h80z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/PencilOutline.js
init_runtime_core_esm_bundler();
var _hoisted_1$6 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var PencilOutline_default = defineComponent({
	name: "PencilOutline",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$6, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			fill: "none",
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "32",
			d: "M364.13 125.25L87 403l-23 45l44.99-23l277.76-277.13l-22.62-22.62z"
		}, null, -1), createBaseVNode("path", {
			d: "M420.69 68.69l-22.62 22.62l22.62 22.63l22.62-22.63a16 16 0 0 0 0-22.62h0a16 16 0 0 0-22.62 0z",
			fill: "none",
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "32"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/PlaySharp.js
init_runtime_core_esm_bundler();
var _hoisted_1$5 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var PlaySharp_default = defineComponent({
	name: "PlaySharp",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$5, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M96 448l320-192L96 64v384z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/TrashOutline.js
init_runtime_core_esm_bundler();
var _hoisted_1$4 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var TrashOutline_default = defineComponent({
	name: "TrashOutline",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [createStaticVNode("<path d=\"M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"></path><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\" d=\"M80 112h352\" fill=\"currentColor\"></path><path d=\"M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"></path><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M256 176v224\"></path><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M184 176l8 224\"></path><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M328 176l-8 224\"></path>", 6)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+material@0.13.0/node_modules/@vicons/material/es/FolderOpenOutlined.js
init_runtime_core_esm_bundler();
var _hoisted_1$3 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 24 24"
};
var FolderOpenOutlined_default = defineComponent({
	name: "FolderOpenOutlined",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+material@0.13.0/node_modules/@vicons/material/es/LiveTvOutlined.js
init_runtime_core_esm_bundler();
var _hoisted_1$2 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 24 24"
};
var LiveTvOutlined_default = defineComponent({
	name: "LiveTvOutlined",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4l-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region src/renderer/src/pages/Queue/components/item.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$1 = { class: "container" };
var _hoisted_2$1 = { class: "content-container" };
var _hoisted_3$1 = { class: "name-container" };
var _hoisted_4 = ["title"];
var _hoisted_5 = { class: "btns" };
var _hoisted_6 = {
	key: 1,
	class: "detail-info"
};
var _hoisted_7 = { key: 0 };
var _hoisted_8 = { key: 1 };
//#endregion
//#region src/renderer/src/pages/Queue/components/item.vue
var item_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "item",
	props: {
		item: {},
		showProgress: {
			type: Boolean,
			default: true
		},
		showInfo: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		const item = computed(() => props.item);
		const isWeb = computed(() => window.isWeb);
		const formatFileSize = (size) => {
			if (!Number.isFinite(size) || size < 0) return "--";
			if (size < 1024) return `${size} B`;
			const units = [
				"KB",
				"MB",
				"GB",
				"TB"
			];
			let value = size / 1024;
			let unitIndex = 0;
			while (value >= 1024 && unitIndex < units.length - 1) {
				value /= 1024;
				unitIndex++;
			}
			return `${value.toFixed(value < 10 ? 1 : 0)} ${units[unitIndex]}`;
		};
		const confirm = useConfirm();
		const store = useQueueStore();
		const statusMap = {
			pending: {
				text: "等待中",
				color: "#999",
				progressStatus: "default"
			},
			running: {
				text: "运行中",
				color: "#1890ff",
				progressStatus: "default"
			},
			paused: {
				text: "已暂停",
				color: "#faad14",
				progressStatus: "warning"
			},
			completed: {
				text: "已完成",
				color: "#52c41a",
				progressStatus: "success"
			},
			error: {
				text: "错误",
				color: "#f5222d",
				progressStatus: "error"
			},
			canceled: {
				text: "已取消",
				color: "#f5222d",
				progressStatus: "error"
			}
		};
		const handleStart = (taskId, task$1) => {
			if (task$1.status === "paused") task.resume(taskId);
			else if (task$1.status === "pending") task.start(taskId);
			store.getQuenu();
		};
		const handlePause = async (taskId) => {
			await task.pause(taskId);
			store.getQuenu();
		};
		const handleKill = async (task$2) => {
			if (task$2.type === TaskType.ffmpeg) {
				const [status, notSavePorcess] = await confirm.warning({
					content: "确定要中止任务吗？注意保存进度需要额外时间",
					showCheckbox: true,
					checkboxText: "不保存进度"
				});
				if (!status) return;
				if (!notSavePorcess) task.interrupt(task$2.taskId);
				else task.cancel(task$2.taskId);
			} else {
				const [status] = await confirm.warning({ content: "确定要中止任务吗？" });
				if (!status) return;
				task.cancel(task$2.taskId);
			}
			store.getQuenu();
		};
		const handleOpenDir = (item) => {
			window.api.common.showItemInFolder(item.output);
		};
		const handleOpenFile = (item) => {
			window.api.openPath(item.output);
		};
		const openExternal = (item) => {
			if (isWeb.value) window.open(`https://member.bilibili.com/platform/upload/video/frame?type=edit&version=new&aid=${item?.output}`, "_blank");
			else window.api.openExternal(`https://member.bilibili.com/platform/upload/video/frame?type=edit&version=new&aid=${item?.output}`);
		};
		const handleRemoveRecord = async (taskId) => {
			await task.removeRecord(taskId);
			store.getQuenu();
		};
		const handleRestart = async (taskId) => {
			await task.restart(taskId);
			store.getQuenu();
		};
		const notice = useNotification();
		const handleRemoveFile = async (taskId) => {
			const [status] = await confirm.warning({
				content: "确定要删除输出文件吗？",
				showCheckbox: false
			});
			if (!status) return;
			await task.removeFile(taskId);
			notice.success({
				title: "移除成功",
				duration: 1e3
			});
		};
		const handleDownload = async (item) => {
			const url = await task.downloadFile(item.taskId);
			const a = document.createElement("a");
			a.href = url;
			a.download = window.path.basename(item.output);
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		};
		const addExtraVideoTask = async (taskId) => {
			const files = await showFileDialog({ extensions: supportedVideoExtensions });
			if (!files) return;
			const filePath = files?.[0];
			const partName = window.path.parse(filePath).name.slice(0, 80);
			task.addExtraVideoTask(taskId, filePath, partName);
			store.getQuenu();
		};
		const editVideoPartName = async (taskId, item) => {
			const partName = await showInput({
				title: "编辑分p名称",
				placeholder: "请输入分p名称",
				defaultValue: item?.extra?.title
			});
			if (!partName) return;
			task.editVideoPartName(taskId, partName);
			store.getQuenu();
		};
		return (_ctx, _cache) => {
			const _component_n_icon = NIcon;
			const _component_n_progress = Progress_default;
			return openBlock(), createElementBlock("div", _hoisted_1$1, [
				createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", _hoisted_3$1, [
					createBaseVNode("span", {
						class: "name",
						title: unref(item).output
					}, toDisplayString(unref(item).name), 9, _hoisted_4),
					createBaseVNode("span", {
						class: "status",
						style: normalizeStyle({
							color: statusMap[unref(item).status].color,
							marginRight: "5px"
						})
					}, toDisplayString(statusMap[unref(item).status].text), 5),
					unref(item).error ? (openBlock(), createBlock(_component_n_icon, {
						key: 0,
						size: 18,
						title: unref(item).error
					}, {
						default: withCtx(() => [createVNode(unref(AlertCircleOutline_default), { style: normalizeStyle({ color: statusMap[unref(item).status].color }) }, null, 8, ["style"])]),
						_: 1
					}, 8, ["title"])) : createCommentVNode("", true)
				]), createBaseVNode("div", _hoisted_5, [
					["error"].includes(unref(item).status) && unref(item).action.includes("restart") ? (openBlock(), createBlock(_component_n_icon, {
						key: 0,
						size: 20,
						class: "btn pointer",
						title: "重试任务",
						onClick: _cache[0] || (_cache[0] = ($event) => handleRestart(unref(item).taskId))
					}, {
						default: withCtx(() => [createVNode(unref(Refresh_default))]),
						_: 1
					})) : createCommentVNode("", true),
					[
						"pending",
						"running",
						"paused"
					].includes(unref(item).status) && unref(item).type === unref(TaskType).bili ? (openBlock(), createBlock(_component_n_icon, {
						key: 1,
						size: 20,
						class: "btn pointer",
						title: "添加视频",
						onClick: _cache[1] || (_cache[1] = ($event) => addExtraVideoTask(unref(item).taskId))
					}, {
						default: withCtx(() => [createVNode(unref(AddCircleOutline_default))]),
						_: 1
					})) : createCommentVNode("", true),
					[
						"pending",
						"running",
						"paused"
					].includes(unref(item).status) && unref(item).type === unref(TaskType).biliUpload ? (openBlock(), createBlock(_component_n_icon, {
						key: 2,
						size: 20,
						class: "btn pointer",
						title: "编辑名称",
						onClick: _cache[2] || (_cache[2] = ($event) => editVideoPartName(unref(item).taskId, unref(item)))
					}, {
						default: withCtx(() => [createVNode(unref(PencilOutline_default))]),
						_: 1
					})) : createCommentVNode("", true),
					unref(item).status === "pending" || unref(item).status === "paused" ? (openBlock(), createBlock(_component_n_icon, {
						key: 3,
						size: 20,
						class: "btn pointer",
						title: "开始",
						onClick: _cache[3] || (_cache[3] = ($event) => handleStart(unref(item).taskId, unref(item)))
					}, {
						default: withCtx(() => [createVNode(unref(PlaySharp_default))]),
						_: 1
					})) : createCommentVNode("", true),
					unref(item).action.includes("pause") && unref(item).status === "running" ? (openBlock(), createBlock(_component_n_icon, {
						key: 4,
						size: 20,
						class: "btn pointer",
						title: "暂停",
						onClick: _cache[4] || (_cache[4] = ($event) => handlePause(unref(item).taskId))
					}, {
						default: withCtx(() => [createVNode(unref(PauseSharp_default))]),
						_: 1
					})) : createCommentVNode("", true),
					unref(item).action.includes("kill") && unref(item).status === "running" || unref(item).status === "paused" ? (openBlock(), createBlock(_component_n_icon, {
						key: 5,
						size: 20,
						class: "btn pointer",
						title: "中止",
						onClick: _cache[5] || (_cache[5] = ($event) => handleKill(unref(item)))
					}, {
						default: withCtx(() => [createVNode(unref(CloseOutline_default))]),
						_: 1
					})) : createCommentVNode("", true),
					!unref(isWeb) ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [unref(item).status === "completed" && unref(item).type !== unref(TaskType).biliUpload && unref(item).type !== unref(TaskType).bili && unref(item).output ? (openBlock(), createBlock(_component_n_icon, {
						key: 0,
						size: 20,
						class: "btn pointer",
						title: "打开文件夹",
						onClick: _cache[6] || (_cache[6] = ($event) => handleOpenDir(unref(item)))
					}, {
						default: withCtx(() => [createVNode(unref(FolderOpenOutlined_default))]),
						_: 1
					})) : createCommentVNode("", true), unref(item).status === "completed" && unref(item).type !== unref(TaskType).biliUpload && unref(item).type !== unref(TaskType).bili && unref(item).type !== unref(TaskType).flvRepair && unref(item).output ? (openBlock(), createBlock(_component_n_icon, {
						key: 1,
						size: 20,
						class: "btn pointer",
						title: "打开文件",
						onClick: _cache[7] || (_cache[7] = ($event) => handleOpenFile(unref(item)))
					}, {
						default: withCtx(() => [createVNode(unref(FileOpenOutlined_default))]),
						_: 1
					})) : createCommentVNode("", true)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 7 }, [unref(item).status === "completed" && unref(item).type === unref(TaskType).ffmpeg && unref(item).output ? (openBlock(), createBlock(_component_n_icon, {
						key: 0,
						size: 20,
						class: "btn pointer",
						title: "下载",
						onClick: _cache[8] || (_cache[8] = ($event) => handleDownload(unref(item)))
					}, {
						default: withCtx(() => [createVNode(unref(DownloadOutline_default))]),
						_: 1
					})) : createCommentVNode("", true)], 64)),
					unref(item).status === "completed" && unref(item).type === unref(TaskType).bili && unref(item).output ? (openBlock(), createBlock(_component_n_icon, {
						key: 8,
						size: 20,
						class: "btn pointer",
						title: "打开稿件",
						onClick: _cache[9] || (_cache[9] = ($event) => openExternal(unref(item)))
					}, {
						default: withCtx(() => [createVNode(unref(LiveTvOutlined_default))]),
						_: 1
					})) : createCommentVNode("", true),
					unref(item).type === unref(TaskType).ffmpeg && unref(item).output && (unref(item).status === "error" || unref(item).status === "completed") ? (openBlock(), createBlock(_component_n_icon, {
						key: 9,
						size: 20,
						class: "btn pointer",
						title: "删除文件",
						onClick: _cache[10] || (_cache[10] = ($event) => handleRemoveFile(unref(item).taskId))
					}, {
						default: withCtx(() => [createVNode(unref(CloseSharp_default))]),
						_: 1
					})) : createCommentVNode("", true),
					unref(item).status === "completed" || unref(item).status === "error" || unref(item).status === "pending" || unref(item).status === "canceled" ? (openBlock(), createBlock(_component_n_icon, {
						key: 10,
						size: 20,
						class: "btn pointer",
						title: "删除记录",
						onClick: _cache[11] || (_cache[11] = ($event) => handleRemoveRecord(unref(item).taskId))
					}, {
						default: withCtx(() => [createVNode(unref(TrashOutline_default))]),
						_: 1
					})) : createCommentVNode("", true)
				])]),
				_ctx.showProgress ? (openBlock(), createBlock(_component_n_progress, {
					key: 0,
					class: "progress",
					status: statusMap[unref(item).status].progressStatus,
					type: "line",
					percentage: unref(item).progress,
					"indicator-placement": "outside",
					"show-indicator": true,
					style: { "--n-rail-height": "6px" }
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(item)?.progress && unref(item).progress.toFixed(1)) + "% ", 1)]),
					_: 1
				}, 8, ["status", "percentage"])) : createCommentVNode("", true),
				_ctx.showInfo && unref(item).startTime ? (openBlock(), createElementBlock("div", _hoisted_6, [
					createBaseVNode("span", null, "开始时间：" + toDisplayString(new Date(unref(item).startTime).toLocaleString()), 1),
					createBaseVNode("span", null, "持续时间：" + toDisplayString(unref(formatSeconds)(unref(item).duration / 1e3)), 1),
					unref(item).status === "running" ? (openBlock(), createElementBlock("span", _hoisted_7, " 预计还需：" + toDisplayString(unref(formatSeconds)(Number((unref(item).duration / 1e3 / unref(item).progress * (100 - unref(item).progress)).toFixed(0)))), 1)) : createCommentVNode("", true),
					unref(item).type === unref(TaskType).biliUpload && unref(item).extra?.fileSize !== void 0 ? (openBlock(), createElementBlock("span", _hoisted_8, " 文件大小：" + toDisplayString(formatFileSize(unref(item).extra.fileSize)), 1)) : createCommentVNode("", true),
					createBaseVNode("span", null, toDisplayString(unref(item).custsomProgressMsg), 1)
				])) : createCommentVNode("", true)
			]);
		};
	}
}), [["__scopeId", "data-v-1efc8654"]]);
//#endregion
//#region src/renderer/src/pages/Queue/index.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler();
var _hoisted_1 = { class: "container" };
var _hoisted_2 = { style: {
	"display": "flex",
	"align-items": "center"
} };
var _hoisted_3 = { style: {
	"margin-left": "auto",
	"display": "flex",
	"gap": "10px"
} };
//#endregion
//#region src/renderer/src/pages/Queue/index.vue
var Queue_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "Queue",
	__name: "index",
	setup(__props) {
		const notice = useNotification();
		const store = useQueueStore();
		const queue = computed(() => store.queue);
		const groupByPid = (data) => {
			const list = deepRaw(data);
			for (const item of list) if (item.pid) {
				const result = list.find((i) => i.taskId === item.pid);
				if (result) {
					if (result.children) result.children.push(item);
					else result.children = [item];
				}
			}
			return list.filter((item) => !item.pid);
		};
		const displayQueue = computed(() => {
			const filterData = queue.value.filter((item) => selectedStatus.value.includes(item.status));
			return groupByPid(filterData);
		});
		const typeOptions = ref([
			{
				value: "",
				label: "全部"
			},
			{
				value: TaskType.ffmpeg,
				label: "FFmpeg处理"
			},
			{
				value: TaskType.bili,
				label: "B站上传"
			},
			{
				value: TaskType.biliUpload,
				label: "B站分P上传"
			},
			{
				value: TaskType.danmu,
				label: "弹幕转换"
			},
			{
				value: TaskType.biliDownload,
				label: "B站视频下载"
			},
			{
				value: TaskType.douyuDownload,
				label: "斗鱼视频下载"
			},
			{
				value: TaskType.sync,
				label: "同步"
			}
		]);
		const selectedStatus = ref([
			"pending",
			"running",
			"paused",
			"completed",
			"error",
			"canceled"
		]);
		const handleRemoveEndTasks = async () => {
			const taskIds = [];
			for (const item of queue.value) if (item.status === "completed" || item.status === "canceled") {
				if (item.pid) {
					const pTask = queue.value.find((i) => i.taskId === item.pid);
					if (pTask && !["completed", "canceled"].includes(pTask.status)) continue;
				}
				taskIds.push(item.taskId);
			}
			await task.removeBatch(taskIds);
			notice.success({
				title: "移除成功",
				duration: 1e3
			});
			store.getQuenu();
		};
		const handlePauseTasks = async () => {
			for (const item of queue.value) if (item.status === "running") await task.pause(item.taskId);
			store.getQuenu();
		};
		let intervalId = null;
		const createInterval = () => {
			if (intervalId) return;
			const interval = window.isWeb ? 2e3 : 1e3;
			intervalId = setInterval(() => {
				store.getQuenu();
			}, interval);
		};
		function cleanInterval() {
			intervalId && clearInterval(intervalId);
			intervalId = null;
		}
		onDeactivated(() => {
			cleanInterval();
		});
		onActivated(() => {
			store.getQuenu();
			createInterval();
		});
		return (_ctx, _cache) => {
			const _component_n_select = Select_default;
			const _component_n_checkbox = Checkbox_default;
			const _component_n_checkbox_group = CheckboxGroup_default;
			const _component_n_button = Button;
			const _component_n_empty = Empty_default;
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createVNode(_component_n_select, {
					value: unref(store).params.type,
					"onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(store).params.type = $event),
					options: unref(typeOptions),
					style: {
						"width": "140px",
						"margin-right": "10px"
					},
					size: "small"
				}, null, 8, ["value", "options"]),
				createVNode(_component_n_checkbox_group, {
					value: unref(selectedStatus),
					"onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null)
				}, {
					default: withCtx(() => [
						createVNode(_component_n_checkbox, { value: "pending" }, {
							default: withCtx(() => _cache[2] || (_cache[2] = [createTextVNode("未开始")])),
							_: 1
						}),
						createVNode(_component_n_checkbox, { value: "running" }, {
							default: withCtx(() => _cache[3] || (_cache[3] = [createTextVNode("运行中")])),
							_: 1
						}),
						createVNode(_component_n_checkbox, { value: "paused" }, {
							default: withCtx(() => _cache[4] || (_cache[4] = [createTextVNode("已暂停")])),
							_: 1
						}),
						createVNode(_component_n_checkbox, { value: "completed" }, {
							default: withCtx(() => _cache[5] || (_cache[5] = [createTextVNode("已完成")])),
							_: 1
						}),
						createVNode(_component_n_checkbox, { value: "error" }, {
							default: withCtx(() => _cache[6] || (_cache[6] = [createTextVNode("错误")])),
							_: 1
						}),
						createVNode(_component_n_checkbox, { value: "canceled" }, {
							default: withCtx(() => _cache[7] || (_cache[7] = [createTextVNode("已取消")])),
							_: 1
						})
					]),
					_: 1
				}, 8, ["value"]),
				createBaseVNode("div", _hoisted_3, [unref(queue).length !== 0 ? (openBlock(), createBlock(_component_n_button, {
					key: 0,
					size: "small",
					type: "primary",
					onClick: handlePauseTasks
				}, {
					default: withCtx(() => _cache[8] || (_cache[8] = [createTextVNode("暂停全部")])),
					_: 1
				})) : createCommentVNode("", true), unref(queue).length !== 0 ? (openBlock(), createBlock(_component_n_button, {
					key: 1,
					size: "small",
					type: "error",
					onClick: handleRemoveEndTasks
				}, {
					default: withCtx(() => _cache[9] || (_cache[9] = [createTextVNode("清除记录")])),
					_: 1
				})) : createCommentVNode("", true)])
			]), unref(displayQueue).length !== 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(displayQueue), (item) => {
				return openBlock(), createElementBlock("div", {
					key: item.taskId,
					class: "item"
				}, [createVNode(item_default, {
					item,
					"show-progress": item.children ? false : true,
					"show-info": item.children ? false : true
				}, null, 8, [
					"item",
					"show-progress",
					"show-info"
				]), item.children ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(item.children, (child) => {
					return openBlock(), createElementBlock("div", {
						key: child.taskId,
						class: "sub-item"
					}, [createVNode(item_default, { item: child }, null, 8, ["item"])]);
				}), 128)) : createCommentVNode("", true)]);
			}), 128)) : (openBlock(), createBlock(_component_n_empty, {
				key: 1,
				class: "empty-state",
				description: unref(queue).length === 0 && !unref(store).params.type ? "暂无任务，快去添加一个试试吧" : "没有符合筛选条件的任务"
			}, null, 8, ["description"]))]);
		};
	}
}), [["__scopeId", "data-v-799ae9f5"]]);
//#endregion
export { Queue_default as default };
