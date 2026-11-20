import { A as createTextVNode, C as computed, D as createElementBlock, E as createCommentVNode, F as h, J as onMounted, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, T as createBlock, Tt as unref, Z as openBlock, Zt as toDisplayString, _t as reactive, a as useRoute, ft as init_reactivity_esm_bundler, j as createVNode, mt as isRef, o as useRouter, st as withCtx, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { T as formatTime, a as recordHistory_default, t as _plugin_vue_export_helper_default, x as formatDuration } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { i as Tag_default, s as Empty_default } from "./Select-DRoqCGUj.js";
import { t as NIcon } from "./Icon-9AfBo3jH.js";
import { t as DataTable_default } from "./DataTable-BkpCVJkz.js";
import { t as Pagination_default } from "./Pagination-4O9O9wA1.js";
import { t as Space_default } from "./Space-B3s3-R0l.js";
import { t as DatePicker_default } from "./DatePicker-URHdw_S6.js";
import { n as useConfirm } from "./hooks-BIRfeUqh.js";
import { t as Spin_default } from "./Spin-COE9UcEU.js";
import { K as Button, W as Card_default } from "./index-CPQhEiaa.js";
import { l as useTitle } from "./core-DWew9NA7.js";
import { t as useNotice } from "./useNotice-DqXLG4Nf.js";
import { i as toVideoPlayerPage, t as openHistoryRecordFolder } from "./pages-CMcKcvsE.js";
import { n as DownloadOutline_default, t as FileOpenOutlined_default } from "./FileOpenOutlined-DuL5tpCp.js";
import { t as FolderOpenOutline_default } from "./FolderOpenOutline-BzyVunNB.js";
import { n as useVisibleColumns, t as ColumnSelector_default } from "./ColumnSelector-CBePLbDk.js";
//#region ../../node_modules/.pnpm/@vicons+fluent@0.13.0/node_modules/@vicons/fluent/es/Delete20Regular.js
init_runtime_core_esm_bundler();
var _hoisted_1$2 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 20 20"
};
var Delete20Regular_default = defineComponent({
	name: "Delete20Regular",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [createBaseVNode("g", { fill: "none" }, [createBaseVNode("path", {
			d: "M11.5 4a1.5 1.5 0 0 0-3 0h-1a2.5 2.5 0 0 1 5 0H17a.5.5 0 0 1 0 1h-.554L15.15 16.23A2 2 0 0 1 13.163 18H6.837a2 2 0 0 1-1.987-1.77L3.553 5H3a.5.5 0 0 1-.492-.41L2.5 4.5A.5.5 0 0 1 3 4h8.5zm3.938 1H4.561l1.282 11.115a1 1 0 0 0 .994.885h6.326a1 1 0 0 0 .993-.885L15.438 5zM8.5 7.5c.245 0 .45.155.492.359L9 7.938v6.125c0 .241-.224.437-.5.437c-.245 0-.45-.155-.492-.359L8 14.062V7.939c0-.242.224-.438.5-.438zm3 0c.245 0 .45.155.492.359l.008.079v6.125c0 .241-.224.437-.5.437c-.245 0-.45-.155-.492-.359L11 14.062V7.939c0-.242.224-.438.5-.438z",
			fill: "currentColor"
		})], -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+fluent@0.13.0/node_modules/@vicons/fluent/es/PlayCircle24Regular.js
init_runtime_core_esm_bundler();
var _hoisted_1$1 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 24 24"
};
var PlayCircle24Regular_default = defineComponent({
	name: "PlayCircle24Regular",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [createBaseVNode("g", { fill: "none" }, [createBaseVNode("path", {
			d: "M10.856 8.155A1.25 1.25 0 0 0 9 9.248v5.504a1.25 1.25 0 0 0 1.856 1.093l5.757-3.189a.75.75 0 0 0 0-1.312l-5.757-3.189zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zM3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0z",
			fill: "currentColor"
		})], -1)]));
	}
});
//#endregion
//#region src/renderer/src/pages/LiveHistory/index.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "live-history" };
var _hoisted_2 = { style: {
	"display": "flex",
	"align-items": "center",
	"gap": "10px",
	"margin-bottom": "20px"
} };
var _hoisted_3 = {
	key: 1,
	class: "result-container"
};
//#endregion
//#region src/renderer/src/pages/LiveHistory/index.vue
var LiveHistory_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "LiveHistory",
	__name: "index",
	setup(__props) {
		const route = useRoute();
		const pageTitle = useTitle();
		const isCalendarWindow = route.query.calendarWindow === "1" && !window.isWeb;
		const parseRouteDate = (value) => {
			if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
			const [year, month, day] = value.split("-").map(Number);
			const date = new Date(year, month - 1, day);
			if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
			return date.getTime();
		};
		const routeDate = parseRouteDate(route.query.date);
		const endOfLocalDay = (timestamp) => {
			const date = new Date(timestamp);
			return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1).getTime() - 1;
		};
		const streamerInfo = reactive({
			platform: route.query.platform || "",
			room_id: route.query.channelId || "",
			name: route.query.name || ""
		});
		pageTitle.value = `${streamerInfo.name} 录制历史`;
		const queryParams = reactive({
			room_id: streamerInfo.room_id,
			platform: streamerInfo.platform,
			liveId: route.query.liveId || void 0,
			page: 1,
			pageSize: 10,
			startTime: routeDate,
			endTime: routeDate
		});
		const recordList = ref([]);
		const pagination = reactive({
			page: 1,
			pageSize: 10,
			total: 0
		});
		const loading = ref(false);
		const hasQueried = ref(false);
		const columnConfig = [
			{
				value: "title",
				label: "标题"
			},
			{
				value: "live_start_time",
				label: "开播时间"
			},
			{
				value: "record_start_time",
				label: "视频录制开始"
			},
			{
				value: "record_end_time",
				label: "视频录制结束"
			},
			{
				value: "duration",
				label: "持续时长"
			},
			{
				value: "video_duration",
				label: "视频时长"
			},
			{
				value: "danma_num",
				label: "弹幕数量"
			},
			{
				value: "interact_num",
				label: "弹幕互动人数"
			},
			{
				value: "danma_density",
				label: "弹幕密度"
			},
			{
				value: "actions",
				label: "操作"
			}
		];
		const { visibleColumns } = useVisibleColumns({
			columns: columnConfig,
			storageKey: "live-history-visible-columns"
		});
		const allColumns = [
			{
				title: "标题",
				key: "title"
			},
			{
				title: "开播时间",
				key: "live_start_time",
				render: (row) => formatTime(row.live_start_time)
			},
			{
				title: "录制开始时间",
				key: "record_start_time",
				render: (row) => formatTime(row.record_start_time)
			},
			{
				title: "录制结束时间",
				key: "record_end_time",
				render: (row) => row.record_end_time ? formatTime(row.record_end_time) : "未结束"
			},
			{
				title: "持续时长",
				key: "duration",
				render: (row) => formatWithStart(row.record_start_time, row.record_end_time)
			},
			{
				title: "视频时长",
				key: "video_duration",
				render: (row) => formatDuration(row.video_duration)
			},
			{
				title: "弹幕数量",
				key: "danma_num"
			},
			{
				title: "弹幕互动人数",
				key: "interact_num"
			},
			{
				title: "弹幕密度",
				key: "danma_density",
				render: (row) => row.danma_density !== null && row.danma_density !== void 0 ? `${row.danma_density}/秒` : ""
			},
			{
				title: "操作",
				key: "actions",
				render: (row) => {
					const subNodes = [];
					subNodes.push(h(NIcon, {
						size: "20",
						style: { cursor: "pointer" },
						title: "视频预览",
						onClick: () => previewVideo(row.id)
					}, { default: () => h(PlayCircle24Regular_default) }));
					if (!window.isWeb) subNodes.push(h(NIcon, {
						size: "20",
						style: { cursor: "pointer" },
						title: "打开文件",
						onClick: () => openFile(row.id)
					}, { default: () => h(FileOpenOutlined_default) }));
					subNodes.push(h(NIcon, {
						size: "20",
						style: { cursor: "pointer" },
						title: "打开文件夹",
						onClick: () => openFolder(row.id),
						onMousedown: (event) => {
							if (event.button === 1) event.preventDefault();
						},
						onAuxclick: (event) => {
							if (event.button === 1) {
								event.preventDefault();
								openFolder(row.id, true);
							}
						}
					}, { default: () => h(FolderOpenOutline_default) }));
					if (window.isWeb) subNodes.push(h(NIcon, {
						size: "20",
						style: { cursor: "pointer" },
						title: "下载",
						onClick: () => downloadFile(row.id)
					}, { default: () => h(DownloadOutline_default) }));
					return h("div", { style: {
						display: "flex",
						alignItems: "center",
						gap: "8px"
					} }, [...subNodes, h(NIcon, {
						size: "20",
						style: { cursor: "pointer" },
						title: "删除记录",
						onClick: () => removeRecord(row.id)
					}, { default: () => h(Delete20Regular_default) })]);
				}
			}
		];
		const visibleTableColumns = computed(() => {
			return allColumns.filter((column) => visibleColumns.value.includes(column.key));
		});
		onMounted(() => {
			if (streamerInfo.room_id && streamerInfo.platform) handleQuery();
		});
		const handleQuery = async () => {
			queryParams.room_id = streamerInfo.room_id;
			queryParams.platform = streamerInfo.platform;
			queryParams.liveId = route.query.liveId;
			if (!queryParams.room_id || !queryParams.platform) {
				console.error("缺少必要的房间号或平台参数");
				return;
			}
			const endTime = queryParams.endTime;
			const apiParams = {
				room_id: queryParams.room_id,
				platform: queryParams.platform,
				liveId: queryParams.liveId,
				page: queryParams.page,
				pageSize: queryParams.pageSize,
				startTime: queryParams.startTime ?? void 0,
				endTime: endTime === null ? void 0 : endOfLocalDay(endTime)
			};
			loading.value = true;
			hasQueried.value = true;
			try {
				const result = await recordHistory_default.queryRecords(apiParams);
				recordList.value = result.data || [];
				pagination.total = result.pagination.total;
				pagination.page = result.pagination.page;
				pagination.pageSize = result.pagination.pageSize;
				if (result.data && result.data.length > 0 && result.data[0].streamer_name) {
					streamerInfo.name = result.data[0].streamer_name;
					pageTitle.value = `${streamerInfo.name} 录制历史`;
				}
			} catch (error) {
				console.error("查询直播记录失败", error);
			} finally {
				loading.value = false;
			}
		};
		const handlePageChange = (page) => {
			queryParams.page = page;
			handleQuery();
		};
		const handlePageSizeChange = (pageSize) => {
			queryParams.pageSize = pageSize;
			handleQuery();
		};
		const formatWithStart = (startTime, endTime) => {
			if (!startTime || !endTime) return "--";
			const duration = (endTime - startTime) / 1e3;
			return formatDuration(duration);
		};
		const openFile = async (id) => {
			try {
				const { videoFilePath } = await recordHistory_default.getFileInfo(id);
				if (!videoFilePath) return;
				window.api.openPath(videoFilePath);
			} catch (error) {
				notice.error({ title: error.message || error });
			}
		};
		const downloadFile = async (id) => {
			try {
				const fileUrl = await recordHistory_default.downloadFile(id);
				const a = document.createElement("a");
				a.href = fileUrl;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			} catch (error) {
				notice.error({ title: error.message || error });
			}
		};
		const openFolder = async (id, newTab = false) => {
			try {
				await openHistoryRecordFolder(id, newTab);
			} catch (error) {
				notice.error({ title: error.message || error });
			}
		};
		const confirm = useConfirm();
		const notice = useNotice();
		const removeRecord = async (id) => {
			const [status] = await confirm.warning({ content: "确定要删除这条直播记录吗？此操作不可撤销。" });
			if (!status) return;
			await recordHistory_default.removeRecord(id);
			notice.success({
				title: `删除成功`,
				duration: 1e3
			});
			await handleQuery();
		};
		const router = useRouter();
		const goBack = () => {
			if (isCalendarWindow) {
				window.close();
				return;
			}
			router.back();
		};
		const previewVideo = async (id) => {
			const { videoFileId, videoFileExt, danmaFileId } = await recordHistory_default.getFileInfo(id);
			toVideoPlayerPage({
				videoId: videoFileId,
				videoType: videoFileExt,
				danmaId: danmaFileId
			});
		};
		return (_ctx, _cache) => {
			const _component_n_date_picker = DatePicker_default;
			const _component_n_button = Button;
			const _component_n_tag = Tag_default;
			const _component_n_space = Space_default;
			const _component_n_card = Card_default;
			const _component_n_data_table = DataTable_default;
			const _component_n_pagination = Pagination_default;
			const _component_n_spin = Spin_default;
			const _component_n_empty = Empty_default;
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [
					createVNode(_component_n_date_picker, {
						value: unref(queryParams).startTime,
						"onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(queryParams).startTime = $event),
						type: "date",
						clearable: "",
						actions: ["clear", "confirm"],
						placeholder: "开始时间",
						style: { "width": "150px" }
					}, null, 8, ["value"]),
					createVNode(_component_n_date_picker, {
						value: unref(queryParams).endTime,
						"onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(queryParams).endTime = $event),
						type: "date",
						clearable: "",
						actions: ["clear", "confirm"],
						placeholder: "结束时间",
						style: { "width": "150px" }
					}, null, 8, ["value"]),
					createVNode(ColumnSelector_default, {
						modelValue: unref(visibleColumns),
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(visibleColumns) ? visibleColumns.value = $event : null),
						columns: columnConfig
					}, null, 8, ["modelValue"]),
					createVNode(_component_n_button, {
						type: "primary",
						onClick: handleQuery
					}, {
						default: withCtx(() => _cache[4] || (_cache[4] = [createTextVNode(" 查询 ")])),
						_: 1
					}),
					createVNode(_component_n_button, { onClick: goBack }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(isCalendarWindow) ? "关闭" : "返回"), 1)]),
						_: 1
					})
				]),
				unref(streamerInfo).room_id ? (openBlock(), createBlock(_component_n_card, {
					key: 0,
					class: "room-info",
					size: "small"
				}, {
					default: withCtx(() => [createVNode(_component_n_space, null, {
						default: withCtx(() => [
							createVNode(_component_n_tag, null, {
								default: withCtx(() => [createTextVNode("平台：" + toDisplayString(unref(streamerInfo).platform), 1)]),
								_: 1
							}),
							createVNode(_component_n_tag, null, {
								default: withCtx(() => [createTextVNode("房间号：" + toDisplayString(unref(streamerInfo).room_id), 1)]),
								_: 1
							}),
							unref(streamerInfo).name ? (openBlock(), createBlock(_component_n_tag, { key: 0 }, {
								default: withCtx(() => [createTextVNode("主播：" + toDisplayString(unref(streamerInfo).name), 1)]),
								_: 1
							})) : createCommentVNode("", true)
						]),
						_: 1
					})]),
					_: 1
				})) : createCommentVNode("", true),
				unref(recordList).length > 0 || unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(_component_n_spin, { show: unref(loading) }, {
					default: withCtx(() => [createVNode(_component_n_data_table, {
						columns: unref(visibleTableColumns),
						data: unref(recordList),
						pagination: false
					}, null, 8, ["columns", "data"]), unref(pagination).total > 0 ? (openBlock(), createBlock(_component_n_pagination, {
						key: 0,
						style: { "margin-top": "20px" },
						page: unref(pagination).page,
						"onUpdate:page": [_cache[3] || (_cache[3] = ($event) => unref(pagination).page = $event), handlePageChange],
						"page-size": unref(pagination).pageSize,
						"item-count": unref(pagination).total,
						"show-size-picker": "",
						"onUpdate:pageSize": handlePageSizeChange,
						"page-sizes": [
							10,
							20,
							30,
							40
						]
					}, null, 8, [
						"page",
						"page-size",
						"item-count"
					])) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["show"])])) : !unref(loading) && unref(hasQueried) ? (openBlock(), createBlock(_component_n_empty, {
					key: 2,
					description: "没有查询到相关记录"
				})) : createCommentVNode("", true)
			]);
		};
	}
}), [["__scopeId", "data-v-49e93f6e"]]);
//#endregion
export { LiveHistory_default as default };
