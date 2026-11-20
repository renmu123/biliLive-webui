import { D as createElementBlock, L as init_runtime_core_esm_bundler, M as defineComponent, Z as openBlock, t as api, w as createBaseVNode } from "./request-CkCeAZAO.js";
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/ArrowUpOutline.js
init_runtime_core_esm_bundler();
var _hoisted_1 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var ArrowUpOutline_default = defineComponent({
	name: "ArrowUpOutline",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			fill: "none",
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "48",
			d: "M112 244l144-144l144 144"
		}, null, -1), createBaseVNode("path", {
			fill: "none",
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "48",
			d: "M256 120v292"
		}, null, -1)]));
	}
});
//#endregion
//#region src/renderer/src/apis/monitorRoom.ts
var getMonitorRoomLayout = async () => {
	return (await api.get("/common/monitor-room")).data.payload;
};
var saveMonitorRoomLayout = async (layout) => {
	return (await api.put("/common/monitor-room", layout)).data.payload;
};
//#endregion
//#region src/renderer/src/pages/Tools/pages/Recorder/data.ts
var platformOptions = [
	{
		label: "斗鱼",
		value: "DouYu"
	},
	{
		label: "B站",
		value: "Bilibili"
	},
	{
		label: "虎牙",
		value: "HuYa"
	},
	{
		label: "抖音",
		value: "DouYin"
	},
	{
		label: "小红书",
		value: "XHS"
	},
	{
		label: "TikTok",
		value: "TikTok"
	}
];
//#endregion
export { ArrowUpOutline_default as i, getMonitorRoomLayout as n, saveMonitorRoomLayout as r, platformOptions as t };
