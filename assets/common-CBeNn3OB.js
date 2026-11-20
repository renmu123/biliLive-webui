import { t as api } from "./request-CkCeAZAO.js";
//#region src/renderer/src/apis/config.ts
var get = async () => {
	if (window.isWeb) return (await api.get(`/config`)).data;
	else return window.api.config.getAll();
};
var set = async (key, value) => {
	if (window.isWeb) return (await api.post(`/config/set`, {
		key,
		value
	})).data;
	else return window.api.config.set(key, value);
};
var save = async (data) => {
	if (window.isWeb) return (await api.post(`/config`, data)).data;
	else return window.api.config.save(data);
};
var resetBin = async (type) => {
	return (await api.post(`/config/reset-bin`, { type })).data;
};
var notifyTest = async (title, desp, options, notifyType) => {
	return (await api.post(`/config/notifyTest`, {
		title,
		desp,
		options,
		notifyType
	})).data;
};
var exportConfig = async () => {
	return (await api.get(`/config/export`, { responseType: "blob" })).data;
};
var importConfig = async (file) => {
	const formData = new FormData();
	formData.append("file", file);
	return (await api.post(`/config/import`, formData, { headers: { "Content-Type": "multipart/form-data" } })).data;
};
var verifyBiliKey = async (key) => {
	return (await api.post(`/config/verifyBiliKey`, { key })).data;
};
var config = {
	get,
	set,
	save,
	resetBin,
	notifyTest,
	exportConfig,
	importConfig,
	verifyBiliKey
};
//#endregion
//#region src/renderer/src/apis/common.ts
var getStreamLogs = async () => {
	let key = window.localStorage.getItem("key");
	if (!window.isWeb) key = (await config.get()).passKey;
	return new EventSource(`${api.defaults.baseURL}/sse/streamLogs?auth=${key}`);
};
var exportLogs = async () => {
	return (await api.get(`/common/exportLogs`, { responseType: "blob" })).data;
};
var getLogContent = async () => {
	return (await api.get(`/common/getLogContent`)).data;
};
var getDanmaStream = async (recorderId) => {
	let key = window.localStorage.getItem("key");
	if (!window.isWeb) key = (await config.get()).passKey;
	return new EventSource(`${api.defaults.baseURL}/sse/recorder/danma?auth=${key}&id=${recorderId}`);
};
var getRunningTaskNum = async () => {
	let key = window.localStorage.getItem("key");
	if (!window.isWeb) key = (await config.get()).passKey;
	return new EventSource(`${api.defaults.baseURL}/sse/task/runningNum?auth=${key}`);
};
var version = async () => {
	return (await api.get(`/common/version`)).data;
};
var versionTest = async (api$1, Authorization) => {
	return (await api.get(`${api$1}/common/version`, { headers: { Authorization } })).data;
};
var getFiles = async (params) => {
	return (await api.get(`/common/files`, { params: {
		...params,
		exts: (params?.exts || []).join("|")
	} })).data;
};
var fileJoin = async (dir, name) => {
	return (await api.post(`/files/join`, {
		dir,
		name
	})).data;
};
async function readXmlTimestamp(filepath) {
	return (await api.post(`/common/danma/timestamp`, { filepath })).data;
}
async function parseMeta(files) {
	return (await api.post("/common/parse-video-metadata", files)).data;
}
async function getFontList() {
	return (await api.get(`/common/fonts`)).data;
}
async function uploadCover(file) {
	const formData = new FormData();
	formData.append("file", file);
	return (await api.post("/files/cover/upload", formData, { headers: { "Content-Type": "multipart/form-data" } })).data;
}
async function appStartTime() {
	return (await api.get(`/common/appStartTime`)).data;
}
async function appStatistics() {
	return (await api.get(`/common/statistics`)).data;
}
async function readDanma(filepath) {
	return (await api.post("/common/readDanma", { filepath })).data;
}
async function readLLCProject(filepath) {
	return (await api.post("/common/readLLC", { filepath })).data;
}
async function writeLLCProject(filepath, content) {
	await api.post("/common/writeLLC", {
		filepath,
		content
	});
}
async function genTimeData(filepath) {
	return (await api.post("/common/genTimeData", { filepath })).data;
}
var applyVideoId = async (videoPath) => {
	return (await api.post(`/common/applyVideoId`, { videoPath })).data;
};
var getVideo = (videoId) => {
	return `${api.defaults.baseURL}/common/video/${videoId}`;
};
var parseDanmu = async (filepath) => {
	return (await api.post("/common/parseDanmu", { filepath })).data;
};
/**
* 测试webhook是否存在不正常数据，如果有则返回相关id以及文件
*/
var testWebhook = async () => {
	return (await api.post("/common/testWebhook")).data;
};
/**
* 处理webhook不正常数据
*/
var handleWebhook = async (data) => {
	return (await api.post("/common/handleWebhook", { data })).data;
};
/**
* 为什么上传失败
* @param roomId 房间号
* @returns
*/
var whyUploadFailed = async (roomId) => {
	return (await api.get("/common/whyUploadFailed", { params: { roomId } })).data;
};
/**
* 检查更新
*
*/
var checkUpdate = async () => {
	return (await api.get("/common/checkUpdate")).data;
};
/**
* 获取缓存文件夹路径
*/
var getTempPath = async () => {
	return (await api.get("/files/temp")).data;
};
/**
* 文件是否存在
*/
var fileExists = async (filepath) => {
	return (await api.post("/files/exists", { filepath })).data;
};
/**
* 获取磁盘空间信息
*/
var getDiskSpace = async () => {
	return (await api.get("/common/diskSpace")).data;
};
var common = {
	getStreamLogs,
	version,
	versionTest,
	getFiles,
	readXmlTimestamp,
	getFontList,
	uploadCover,
	appStartTime,
	appStatistics,
	getDanmaStream,
	exportLogs,
	getLogContent,
	parseMeta,
	getRunningTaskNum,
	fileJoin,
	readDanma,
	genTimeData,
	getVideo,
	applyVideoId,
	parseDanmu,
	testWebhook,
	handleWebhook,
	whyUploadFailed,
	checkUpdate,
	getTempPath,
	readLLCProject,
	writeLLCProject,
	fileExists,
	getDiskSpace
};
//#endregion
export { config as a, getLogContent as i, exportLogs as n, getDanmaStream as r, common as t };
