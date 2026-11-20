import { $ as renderList, A as createTextVNode, C as computed, D as createElementBlock, E as createCommentVNode, G as onBeforeUnmount, J as onMounted, Jt as normalizeStyle, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, R as inject, T as createBlock, Tt as unref, Z as openBlock, Zt as toDisplayString, _t as reactive, ft as init_reactivity_esm_bundler, j as createVNode, st as withCtx, v as Fragment, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { I as Input_default, p as recoder, t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { s as Empty_default, t as Select_default } from "./Select-DRoqCGUj.js";
import { t as NIcon } from "./Icon-9AfBo3jH.js";
import { t as Divider_default } from "./Divider-7i3uOVWn.js";
import { n as Drawer_default, t as DrawerContent_default } from "./DrawerContent-BuYhJojB.js";
import { t as Spin_default } from "./Spin-COE9UcEU.js";
import { t as Switch_default } from "./Switch-CKftpity.js";
import { K as Button, T as messageApiInjectionKey, Yn as throwError } from "./index-CPQhEiaa.js";
import { i as ArrowUpOutline_default, n as getMonitorRoomLayout, r as saveMonitorRoomLayout, t as platformOptions } from "./data-BcEkRRJ5.js";
import { t as Index_default$1 } from "./Index-DVrPaNfC.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/message/src/use-message.mjs
init_runtime_core_esm_bundler();
function useMessage() {
	const api = inject(messageApiInjectionKey, null);
	if (api === null) throwError("use-message", "No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A.");
	return api;
}
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/ArrowDownOutline.js
init_runtime_core_esm_bundler();
var _hoisted_1$1 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var ArrowDownOutline_default = defineComponent({
	name: "ArrowDownOutline",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			fill: "none",
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "48",
			d: "M112 268l144 144l144-144"
		}, null, -1), createBaseVNode("path", {
			fill: "none",
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "48",
			d: "M256 392V100"
		}, null, -1)]));
	}
});
//#endregion
//#region src/renderer/src/pages/MonitorRoom/grid.ts
var GRID_SIZES = [
	"1x1",
	"2x1",
	"1x2",
	"2x2",
	"3x1",
	"1x3",
	"3x2",
	"2x3",
	"3x3"
];
function getGridSize(value) {
	return GRID_SIZES.find((size) => size === value) || "1x1";
}
/** Find room positions inside a fixed 3 × 3 grid, keeping room order stable. */
function packGrid(ids, sizes) {
	const dimensions = ids.map((id) => {
		const [width, height] = getGridSize(sizes[id]).split("x").map(Number);
		return {
			id,
			width,
			height
		};
	});
	if (dimensions.reduce((total, item) => total + item.width * item.height, 0) > 9) return null;
	const occupied = Array(9).fill(false);
	const placements = [];
	const place = (index) => {
		if (index === dimensions.length) return true;
		const { id, width, height } = dimensions[index];
		for (let row = 0; row <= 3 - height; row++) for (let column = 0; column <= 3 - width; column++) {
			const cells = [];
			for (let y = row; y < row + height; y++) for (let x = column; x < column + width; x++) cells.push(y * 3 + x);
			if (cells.some((cell) => occupied[cell])) continue;
			cells.forEach((cell) => occupied[cell] = true);
			placements.push({
				id,
				column: column + 1,
				row: row + 1,
				width,
				height
			});
			if (place(index + 1)) return true;
			placements.pop();
			cells.forEach((cell) => occupied[cell] = false);
		}
		return false;
	};
	return place(0) ? placements : null;
}
//#endregion
//#region src/renderer/src/pages/MonitorRoom/audio.ts
var DEFAULT_VOLUME = .7;
var normalizeRoomAudio = (value) => {
	const audio = value && typeof value === "object" ? value : {};
	const volume = audio.volume;
	return {
		muted: typeof audio.muted === "boolean" ? audio.muted : true,
		volume: typeof volume === "number" && Number.isFinite(volume) ? Math.min(1, Math.max(0, volume)) : DEFAULT_VOLUME
	};
};
//#endregion
//#region src/renderer/src/pages/MonitorRoom/Index.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = { class: "monitor-room" };
var _hoisted_2 = {
	key: 0,
	class: "monitor-room__toolbar"
};
var _hoisted_3 = { class: "monitor-room__title" };
var _hoisted_4 = {
	key: 1,
	class: "monitor-room__load-error"
};
var _hoisted_5 = {
	class: "monitor-room__board",
	"aria-label": "监控室九宫格"
};
var _hoisted_6 = [
	"aria-label",
	"onPointerenter",
	"onPointerleave"
];
var _hoisted_7 = {
	key: 1,
	class: "monitor-room__placeholder"
};
var _hoisted_8 = {
	key: 0,
	class: "monitor-room__window-setting"
};
var _hoisted_9 = {
	key: 1,
	class: "monitor-room__window-actions"
};
var _hoisted_10 = { class: "monitor-room__section-heading" };
var _hoisted_11 = { class: "monitor-room__managed-room-heading" };
var _hoisted_12 = { class: "monitor-room__room-label" };
var _hoisted_13 = ["title"];
var _hoisted_14 = { class: "monitor-room__order-controls" };
var _hoisted_15 = { class: "monitor-room__controls" };
var _hoisted_16 = { class: "monitor-room__section-heading" };
var _hoisted_17 = { class: "monitor-room__picker-list" };
var _hoisted_18 = { class: "monitor-room__room-label" };
var _hoisted_19 = ["title"];
//#endregion
//#region src/renderer/src/pages/MonitorRoom/Index.vue
var Index_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "MonitorRoom",
	__name: "Index",
	setup(__props) {
		const message = useMessage();
		const isWeb = window.isWeb;
		const selectedIds = ref([]);
		const roomSizes = ref({});
		const roomAudio = ref({});
		const toolbarVisible = ref(true);
		const rooms = ref([]);
		const roomStates = reactive({});
		const requestIds = /* @__PURE__ */ new Map();
		const players = /* @__PURE__ */ new Map();
		const hoveredRoomId = ref(null);
		const roomPickerVisible = ref(false);
		const layoutLoaded = ref(false);
		const initializing = ref(false);
		const loadingRooms = ref(false);
		const loadError = ref("");
		const saveError = ref("");
		const searchText = ref("");
		const hideTitleBar = ref(false);
		const closingRoom = ref(false);
		const setHideTitleBar = async (value) => {
			if (isWeb || !layoutLoaded.value || hideTitleBar.value === value) return;
			hideTitleBar.value = value;
			await persistLayout();
			if (!saveError.value) message.info("已保存，重新打开监控室窗口后生效", { duration: 3e3 });
		};
		const closeMonitorRoom = async () => {
			if (closingRoom.value) return;
			closingRoom.value = true;
			try {
				if (volumeSaveTimer) await persistLayout();
				else await saveQueue;
				window.close();
			} finally {
				closingRoom.value = false;
			}
		};
		const roomsById = computed(() => new Map(rooms.value.map((room) => [room.id, room])));
		const selectedRooms = computed(() => selectedIds.value.map((id) => roomsById.value.get(id)).filter((room) => !!room));
		const placements = computed(() => packGrid(selectedRooms.value.map((room) => room.id), roomSizes.value) || []);
		const occupiedCells = computed(() => placements.value.reduce((total, placement) => total + placement.width * placement.height, 0));
		const availableRooms = computed(() => {
			const query = searchText.value.trim().toLowerCase();
			return rooms.value.filter((room) => !selectedIds.value.includes(room.id) && (!query || [
				room.remarks,
				room.liveInfo?.owner,
				room.channelId
			].some((value) => value?.toLowerCase().includes(query))));
		});
		const roomName = (room) => room.remarks || room.liveInfo?.owner || room.channelId;
		const roomNameById = (id) => {
			const room = roomsById.value.get(id);
			return room ? roomName(room) : id;
		};
		const platformName = (providerId) => platformOptions.find((option) => option.value === providerId)?.label || providerId;
		const cellStyle = (cell) => ({
			gridColumn: String((cell - 1) % 3 + 1),
			gridRow: String(Math.floor((cell - 1) / 3) + 1)
		});
		const placementStyle = (placement) => ({
			gridColumn: `${placement.column} / span ${placement.width}`,
			gridRow: `${placement.row} / span ${placement.height}`
		});
		const roomSize = (id) => getGridSize(roomSizes.value[id]);
		const roomAudioFor = (id) => normalizeRoomAudio(roomAudio.value[id]);
		const currentLayout = () => ({
			manageButtonVisible: toolbarVisible.value,
			hideTitleBar: hideTitleBar.value,
			rooms: selectedIds.value.map((id) => ({
				id,
				size: roomSize(id),
				...roomAudioFor(id)
			}))
		});
		let saveQueue = Promise.resolve();
		let volumeSaveTimer;
		const persistLayout = () => {
			if (!layoutLoaded.value) return Promise.resolve();
			if (volumeSaveTimer) {
				clearTimeout(volumeSaveTimer);
				volumeSaveTimer = void 0;
			}
			const layout = currentLayout();
			saveQueue = saveQueue.then(async () => {
				try {
					await saveMonitorRoomLayout(layout);
					saveError.value = "";
				} catch (error) {
					saveError.value = `保存监控室配置失败：${String(error)}`;
				}
			});
			return saveQueue;
		};
		const scheduleVolumeSave = () => {
			if (volumeSaveTimer) clearTimeout(volumeSaveTimer);
			volumeSaveTimer = setTimeout(() => {
				volumeSaveTimer = void 0;
				persistLayout();
			}, 250);
		};
		const sizeOptionsFor = (id) => GRID_SIZES.map((size) => ({
			label: size.replace("x", " × "),
			value: size,
			disabled: !packGrid(selectedIds.value, {
				...roomSizes.value,
				[id]: size
			})
		}));
		const setRoomSize = (id, value) => {
			if (!selectedIds.value.includes(id)) return;
			const size = getGridSize(value);
			const nextSizes = {
				...roomSizes.value,
				[id]: size
			};
			if (!packGrid(selectedIds.value, nextSizes)) return;
			roomSizes.value = nextSizes;
			persistLayout();
		};
		const canAddRoom = (id) => packGrid([...selectedIds.value, id], {
			...roomSizes.value,
			[id]: "1x1"
		}) !== null;
		const roomMessage = (id) => {
			const state = roomStates[id];
			if (state?.status === "loading") return "正在检查直播状态…";
			if (state?.status === "offline") return "直播间未开播，请在房间管理中刷新";
			if (state?.status === "error") return state.message || "播放失败，请在房间管理中刷新";
			return "请在房间管理中刷新";
		};
		const registerPlayer = (id, player) => {
			players.set(id, player);
			const savedAudio = roomAudioFor(id);
			player.volume = savedAudio.volume;
			player.muted = savedAudio.muted;
			player.on("video:volumechange", () => {
				if (players.get(id) !== player || !selectedIds.value.includes(id)) return;
				const previous = roomAudioFor(id);
				const next = normalizeRoomAudio({
					muted: player.muted,
					volume: player.volume
				});
				if (previous.muted === next.muted && previous.volume === next.volume) return;
				roomAudio.value = {
					...roomAudio.value,
					[id]: next
				};
				if (previous.muted !== next.muted) persistLayout();
				else scheduleVolumeSave();
			});
		};
		const toggleSound = (id) => {
			const player = players.get(id);
			if (!player) return;
			const audio = roomAudioFor(id);
			roomAudio.value = {
				...roomAudio.value,
				[id]: {
					...audio,
					muted: !audio.muted
				}
			};
			player.muted = !audio.muted;
			persistLayout();
		};
		const clearHoveredRoom = (id) => {
			if (hoveredRoomId.value === id) hoveredRoomId.value = null;
		};
		const toggleToolbar = () => {
			if (!layoutLoaded.value) return;
			toolbarVisible.value = !toolbarVisible.value;
			persistLayout();
		};
		const handleToolbarHotkey = (event) => {
			if (event.key.toLowerCase() !== "m" || !event.ctrlKey || event.altKey || event.metaKey || event.shiftKey || event.repeat || event.isComposing || !layoutLoaded.value) return;
			event.preventDefault();
			event.stopImmediatePropagation();
			toggleToolbar();
		};
		const handleCloseHotkey = (event) => {
			if (isWeb || event.key.toLowerCase() !== "w" || !event.ctrlKey || event.altKey || event.metaKey || event.shiftKey || event.repeat || event.isComposing) return;
			event.preventDefault();
			event.stopImmediatePropagation();
			closeMonitorRoom();
		};
		const handleMuteHotkey = (event) => {
			if (event.key.toLowerCase() !== "m" || event.repeat || event.isComposing || event.ctrlKey || event.altKey || event.metaKey || roomPickerVisible.value) return;
			if (event.target instanceof HTMLElement && event.target.closest("input, textarea, [contenteditable], [role='textbox']")) return;
			const id = hoveredRoomId.value;
			if (!id || roomStates[id]?.status !== "playing" || !players.has(id)) return;
			event.preventDefault();
			event.stopImmediatePropagation();
			toggleSound(id);
		};
		const refreshRoom = async (id) => {
			if (!selectedIds.value.includes(id)) return;
			const requestId = (requestIds.get(id) || 0) + 1;
			requestIds.set(id, requestId);
			players.delete(id);
			roomStates[id] = {
				status: "loading",
				requestId
			};
			const isCurrent = () => requestIds.get(id) === requestId && selectedIds.value.includes(id);
			try {
				const liveInfos = await recoder.getLiveInfo([id], true);
				if (!isCurrent()) return;
				if (liveInfos[0]?.living === false) {
					roomStates[id] = {
						status: "offline",
						requestId
					};
					return;
				}
				const stream = await recoder.getStreamUrl(id);
				if (!isCurrent()) return;
				if (!stream.url) throw new Error("无法获取直播流，请点击刷新重试");
				roomStates[id] = {
					status: "playing",
					requestId,
					url: stream.url
				};
			} catch (error) {
				if (!isCurrent()) return;
				roomStates[id] = {
					status: "error",
					requestId,
					message: error instanceof Error ? error.message : "播放失败，请点击刷新重试"
				};
			}
		};
		const handlePlaybackError = (id) => {
			const state = roomStates[id];
			if (state?.status !== "playing") return;
			players.delete(id);
			roomStates[id] = {
				status: "error",
				requestId: state.requestId,
				message: "播放失败，请点击刷新重试"
			};
		};
		const addRoom = (id) => {
			if (!roomsById.value.has(id) || selectedIds.value.includes(id) || !canAddRoom(id)) return;
			roomSizes.value = {
				...roomSizes.value,
				[id]: "1x1"
			};
			roomAudio.value = {
				...roomAudio.value,
				[id]: normalizeRoomAudio(void 0)
			};
			selectedIds.value = [...selectedIds.value, id];
			persistLayout();
			refreshRoom(id);
		};
		const disposeRoom = (id) => {
			requestIds.set(id, (requestIds.get(id) || 0) + 1);
			clearHoveredRoom(id);
			players.delete(id);
			delete roomStates[id];
		};
		const removeRoom = (id) => {
			disposeRoom(id);
			selectedIds.value = selectedIds.value.filter((item) => item !== id);
			const nextSizes = { ...roomSizes.value };
			delete nextSizes[id];
			roomSizes.value = nextSizes;
			const nextAudio = { ...roomAudio.value };
			delete nextAudio[id];
			roomAudio.value = nextAudio;
			persistLayout();
		};
		const moveRoom = (id, direction) => {
			const index = selectedIds.value.indexOf(id);
			const nextIndex = index + direction;
			if (index < 0 || nextIndex < 0 || nextIndex >= selectedIds.value.length) return;
			const nextIds = [...selectedIds.value];
			[nextIds[index], nextIds[nextIndex]] = [nextIds[nextIndex], nextIds[index]];
			if (!packGrid(nextIds, roomSizes.value)) return;
			selectedIds.value = nextIds;
			persistLayout();
		};
		const loadRooms = async (refreshSelected) => {
			if (loadingRooms.value) return;
			loadingRooms.value = true;
			loadError.value = "";
			try {
				const allRooms = [];
				const pageSize = 100;
				let page = 1;
				while (true) {
					const result = await recoder.infoList({
						page,
						pageSize
					});
					allRooms.push(...result.data);
					if (result.data.length === 0 || page * pageSize >= result.pagination.total) break;
					page += 1;
				}
				const previousLayout = JSON.stringify(currentLayout());
				rooms.value = allRooms;
				const existingIds = new Set(allRooms.map((room) => room.id));
				const nextIds = [];
				const nextSizes = {};
				const nextAudio = {};
				for (const id of selectedIds.value) {
					if (!existingIds.has(id) || nextIds.includes(id)) continue;
					const preferredSize = getGridSize(roomSizes.value[id]);
					const size = packGrid([...nextIds, id], {
						...nextSizes,
						[id]: preferredSize
					}) ? preferredSize : "1x1";
					if (!packGrid([...nextIds, id], {
						...nextSizes,
						[id]: size
					})) continue;
					nextIds.push(id);
					nextSizes[id] = size;
					nextAudio[id] = roomAudioFor(id);
				}
				selectedIds.value.filter((id) => !nextIds.includes(id)).forEach(disposeRoom);
				roomSizes.value = nextSizes;
				roomAudio.value = nextAudio;
				selectedIds.value = nextIds;
				if (previousLayout !== JSON.stringify(currentLayout())) persistLayout();
				if (refreshSelected) await Promise.allSettled(selectedIds.value.map((id) => refreshRoom(id)));
			} catch (error) {
				loadError.value = error instanceof Error ? error.message : "加载房间列表失败";
			} finally {
				loadingRooms.value = false;
			}
		};
		const initialize = async () => {
			if (initializing.value) return;
			initializing.value = true;
			loadError.value = "";
			try {
				const layout = await getMonitorRoomLayout();
				toolbarVisible.value = layout?.manageButtonVisible ?? true;
				hideTitleBar.value = layout?.hideTitleBar ?? false;
				selectedIds.value = layout?.rooms.map((room) => room.id) || [];
				roomSizes.value = Object.fromEntries(layout?.rooms.map((room) => [room.id, room.size]) || []);
				roomAudio.value = Object.fromEntries(layout?.rooms.map((room) => [room.id, normalizeRoomAudio(room)]) || []);
				layoutLoaded.value = true;
				if (!toolbarVisible.value) message.info("顶部栏已隐藏，按 Ctrl+M 可重新显示", { duration: 4e3 });
				await loadRooms(true);
				if (!loadError.value && selectedIds.value.length === 0) roomPickerVisible.value = true;
			} catch (error) {
				loadError.value = `加载监控室配置失败：${String(error)}`;
			} finally {
				initializing.value = false;
			}
		};
		const retryError = () => {
			if (!layoutLoaded.value) initialize();
			else if (loadError.value) loadRooms(true);
			else persistLayout();
		};
		onMounted(() => {
			if (!isWeb) window.addEventListener("keydown", handleCloseHotkey, true);
			window.addEventListener("keydown", handleToolbarHotkey, true);
			window.addEventListener("keydown", handleMuteHotkey, true);
			initialize();
		});
		onBeforeUnmount(() => {
			if (!isWeb) window.removeEventListener("keydown", handleCloseHotkey, true);
			window.removeEventListener("keydown", handleToolbarHotkey, true);
			window.removeEventListener("keydown", handleMuteHotkey, true);
			if (volumeSaveTimer) {
				clearTimeout(volumeSaveTimer);
				persistLayout();
			}
			for (const id of selectedIds.value) requestIds.set(id, (requestIds.get(id) || 0) + 1);
			players.clear();
		});
		return (_ctx, _cache) => {
			const _component_n_button = Button;
			const _component_n_spin = Spin_default;
			const _component_n_switch = Switch_default;
			const _component_n_divider = Divider_default;
			const _component_n_icon = NIcon;
			const _component_n_select = Select_default;
			const _component_n_empty = Empty_default;
			const _component_n_input = Input_default;
			const _component_n_drawer_content = DrawerContent_default;
			const _component_n_drawer = Drawer_default;
			return openBlock(), createElementBlock("div", _hoisted_1, [
				toolbarVisible.value ? (openBlock(), createElementBlock("header", _hoisted_2, [createBaseVNode("div", _hoisted_3, [_cache[4] || (_cache[4] = createBaseVNode("h1", null, "监控室", -1)), createBaseVNode("span", null, "3 × 3 · 已使用 " + toDisplayString(occupiedCells.value) + " / 9 格", 1)]), createVNode(_component_n_button, {
					type: "primary",
					disabled: !layoutLoaded.value,
					title: "按 Ctrl+M 可隐藏顶部栏",
					onClick: _cache[0] || (_cache[0] = ($event) => roomPickerVisible.value = true)
				}, {
					default: withCtx(() => _cache[5] || (_cache[5] = [createTextVNode(" 管理 ")])),
					_: 1
				}, 8, ["disabled"])])) : createCommentVNode("", true),
				loadError.value || saveError.value ? (openBlock(), createElementBlock("div", _hoisted_4, [createTextVNode(toDisplayString(loadError.value || saveError.value) + " ", 1), createVNode(_component_n_button, {
					text: "",
					type: "primary",
					onClick: retryError
				}, {
					default: withCtx(() => _cache[6] || (_cache[6] = [createTextVNode("重试")])),
					_: 1
				})])) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_5, [(openBlock(), createElementBlock(Fragment, null, renderList(9, (cell) => {
					return createBaseVNode("div", {
						key: `cell-${cell}`,
						class: "monitor-room__cell",
						style: normalizeStyle(cellStyle(cell)),
						"aria-hidden": "true"
					}, null, 4);
				}), 64)), (openBlock(true), createElementBlock(Fragment, null, renderList(placements.value, (placement) => {
					return openBlock(), createElementBlock("article", {
						key: placement.id,
						class: "monitor-room__tile",
						style: normalizeStyle(placementStyle(placement)),
						"aria-label": roomNameById(placement.id),
						onPointerenter: ($event) => hoveredRoomId.value = placement.id,
						onPointerleave: ($event) => clearHoveredRoom(placement.id)
					}, [roomStates[placement.id]?.status === "playing" && roomStates[placement.id]?.url ? (openBlock(), createBlock(Index_default$1, {
						key: `${placement.id}:${roomStates[placement.id].requestId}`,
						option: {
							url: roomStates[placement.id].url,
							fullscreen: true,
							muted: roomAudioFor(placement.id).muted,
							volume: roomAudioFor(placement.id).volume,
							mutex: false
						},
						plugins: [],
						"is-live": "",
						onReady: ($event) => registerPlayer(placement.id, $event),
						onError: ($event) => handlePlaybackError(placement.id)
					}, null, 8, [
						"option",
						"onReady",
						"onError"
					])) : (openBlock(), createElementBlock("div", _hoisted_7, [roomStates[placement.id]?.status === "loading" ? (openBlock(), createBlock(_component_n_spin, {
						key: 0,
						size: "small"
					})) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(roomMessage(placement.id)), 1)]))], 44, _hoisted_6);
				}), 128))]),
				createVNode(_component_n_drawer, {
					show: roomPickerVisible.value,
					"onUpdate:show": _cache[3] || (_cache[3] = ($event) => roomPickerVisible.value = $event),
					width: 460,
					placement: "right"
				}, {
					default: withCtx(() => [createVNode(_component_n_drawer_content, {
						title: "管理",
						closable: ""
					}, {
						default: withCtx(() => [
							!unref(isWeb) ? (openBlock(), createElementBlock("div", _hoisted_8, [_cache[7] || (_cache[7] = createBaseVNode("div", { class: "monitor-room__window-setting-label" }, [createBaseVNode("strong", null, "隐藏窗口标题栏"), createBaseVNode("span", null, "隐藏最小化等窗口按钮；重新打开监控室后生效。")], -1)), createVNode(_component_n_switch, {
								value: hideTitleBar.value,
								disabled: !layoutLoaded.value,
								"onUpdate:value": setHideTitleBar
							}, null, 8, ["value", "disabled"])])) : createCommentVNode("", true),
							!unref(isWeb) ? (openBlock(), createElementBlock("div", _hoisted_9, [createVNode(_component_n_button, {
								size: "small",
								type: "error",
								tertiary: "",
								loading: closingRoom.value,
								title: "快捷键：Ctrl+W",
								"aria-keyshortcuts": "Control+W",
								onClick: closeMonitorRoom
							}, {
								default: withCtx(() => _cache[8] || (_cache[8] = [createTextVNode(" 关闭监控室窗口 ")])),
								_: 1
							}, 8, ["loading"])])) : createCommentVNode("", true),
							!unref(isWeb) ? (openBlock(), createBlock(_component_n_divider, { key: 2 })) : createCommentVNode("", true),
							createBaseVNode("div", _hoisted_10, [_cache[9] || (_cache[9] = createBaseVNode("h2", null, "已添加", -1)), createBaseVNode("span", null, toDisplayString(occupiedCells.value) + " / 9 格", 1)]),
							_cache[15] || (_cache[15] = createBaseVNode("p", { class: "monitor-room__hint" }, " 每个房间默认占 1 × 1 格，上下箭头可调整九宫格顺序。鼠标悬浮在画面上时按 M 可开声或静音，按 Ctrl+M 可显示或隐藏右上角顶部栏。 ", -1)),
							(openBlock(true), createElementBlock(Fragment, null, renderList(selectedRooms.value, (room, index) => {
								return openBlock(), createElementBlock("div", {
									key: room.id,
									class: "monitor-room__managed-room"
								}, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [createBaseVNode("strong", { title: roomName(room) }, toDisplayString(roomName(room)), 9, _hoisted_13), createBaseVNode("span", null, toDisplayString(platformName(room.providerId)) + " · " + toDisplayString(room.channelId), 1)]), createBaseVNode("div", _hoisted_14, [createVNode(_component_n_button, {
									quaternary: "",
									circle: "",
									size: "small",
									title: "上移",
									"aria-label": "上移房间",
									disabled: index === 0,
									onClick: ($event) => moveRoom(room.id, -1)
								}, {
									icon: withCtx(() => [createVNode(_component_n_icon, null, {
										default: withCtx(() => [createVNode(unref(ArrowUpOutline_default))]),
										_: 1
									})]),
									_: 2
								}, 1032, ["disabled", "onClick"]), createVNode(_component_n_button, {
									quaternary: "",
									circle: "",
									size: "small",
									title: "下移",
									"aria-label": "下移房间",
									disabled: index === selectedRooms.value.length - 1,
									onClick: ($event) => moveRoom(room.id, 1)
								}, {
									icon: withCtx(() => [createVNode(_component_n_icon, null, {
										default: withCtx(() => [createVNode(unref(ArrowDownOutline_default))]),
										_: 1
									})]),
									_: 2
								}, 1032, ["disabled", "onClick"])])]), createBaseVNode("div", _hoisted_15, [
									createVNode(_component_n_select, {
										value: roomSize(room.id),
										options: sizeOptionsFor(room.id),
										size: "small",
										class: "monitor-room__size-select",
										"onUpdate:value": ($event) => setRoomSize(room.id, $event)
									}, null, 8, [
										"value",
										"options",
										"onUpdate:value"
									]),
									createVNode(_component_n_button, {
										size: "small",
										loading: roomStates[room.id]?.status === "loading",
										onClick: ($event) => refreshRoom(room.id)
									}, {
										default: withCtx(() => _cache[10] || (_cache[10] = [createTextVNode(" 刷新 ")])),
										_: 2
									}, 1032, ["loading", "onClick"]),
									createVNode(_component_n_button, {
										size: "small",
										disabled: roomStates[room.id]?.status !== "playing",
										onClick: ($event) => toggleSound(room.id)
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(roomAudioFor(room.id).muted ? "开声" : "静音"), 1)]),
										_: 2
									}, 1032, ["disabled", "onClick"]),
									createVNode(_component_n_button, {
										size: "small",
										type: "error",
										tertiary: "",
										onClick: ($event) => removeRoom(room.id)
									}, {
										default: withCtx(() => _cache[11] || (_cache[11] = [createTextVNode(" 移除 ")])),
										_: 2
									}, 1032, ["onClick"])
								])]);
							}), 128)),
							!selectedRooms.value.length ? (openBlock(), createBlock(_component_n_empty, {
								key: 3,
								description: "尚未添加直播间"
							})) : createCommentVNode("", true),
							createVNode(_component_n_divider),
							createBaseVNode("div", _hoisted_16, [_cache[13] || (_cache[13] = createBaseVNode("h2", null, "添加房间", -1)), !loadingRooms.value ? (openBlock(), createBlock(_component_n_button, {
								key: 0,
								text: "",
								type: "primary",
								onClick: _cache[1] || (_cache[1] = ($event) => loadRooms(false))
							}, {
								default: withCtx(() => _cache[12] || (_cache[12] = [createTextVNode(" 刷新列表 ")])),
								_: 1
							})) : createCommentVNode("", true)]),
							createVNode(_component_n_input, {
								value: searchText.value,
								"onUpdate:value": _cache[2] || (_cache[2] = ($event) => searchText.value = $event),
								placeholder: "搜索备注、主播或房间号",
								clearable: ""
							}, null, 8, ["value"]),
							createVNode(_component_n_spin, { show: loadingRooms.value }, {
								default: withCtx(() => [createBaseVNode("div", _hoisted_17, [(openBlock(true), createElementBlock(Fragment, null, renderList(availableRooms.value, (room) => {
									return openBlock(), createElementBlock("div", {
										key: room.id,
										class: "monitor-room__picker-item"
									}, [createBaseVNode("div", _hoisted_18, [createBaseVNode("strong", { title: roomName(room) }, toDisplayString(roomName(room)), 9, _hoisted_19), createBaseVNode("span", null, toDisplayString(platformName(room.providerId)) + " · " + toDisplayString(room.channelId), 1)]), createVNode(_component_n_button, {
										size: "small",
										disabled: !canAddRoom(room.id),
										onClick: ($event) => addRoom(room.id)
									}, {
										default: withCtx(() => _cache[14] || (_cache[14] = [createTextVNode(" 添加 ")])),
										_: 2
									}, 1032, ["disabled", "onClick"])]);
								}), 128)), !loadingRooms.value && !availableRooms.value.length ? (openBlock(), createBlock(_component_n_empty, {
									key: 0,
									description: "没有可添加的直播间"
								})) : createCommentVNode("", true)])]),
								_: 1
							}, 8, ["show"])
						]),
						_: 1
					})]),
					_: 1
				}, 8, ["show"])
			]);
		};
	}
}), [["__scopeId", "data-v-fefe4ea0"]]);
//#endregion
export { Index_default as default };
