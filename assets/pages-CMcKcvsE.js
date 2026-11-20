import { r as router } from "./request-CkCeAZAO.js";
import { a as recordHistory_default, p as recoder } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { t as common } from "./common-CBeNn3OB.js";
//#region src/renderer/src/utils/pages.ts
/**
* 打开指定目录。Web 端进入文件浏览器，中键点击在新标签页打开；桌面端打开目录，
* 有 revealPath 时在系统文件管理器中定位该文件。
* @param resolveLocation 获取目标目录；返回 null 时不执行跳转
* @param newTab 是否在 Web 端新标签页打开
*/
var openFolderLocation = async (resolveLocation, newTab = false) => {
	const tab = window.isWeb && newTab ? window.open("", "_blank") : null;
	try {
		if (window.isWeb && newTab && !tab) throw new Error("无法打开新标签页");
		const location = await resolveLocation();
		if (!location) {
			tab?.close();
			return;
		}
		if (window.isWeb) {
			const destination = {
				name: "FileBrowser",
				query: { path: location.folderPath }
			};
			if (tab) tab.location.href = new URL(router.resolve(destination).href, window.location.href).href;
			else await router.push(destination);
		} else if (location.revealPath) await window.api.common.showItemInFolder(location.revealPath);
		else await window.api.openPath(location.folderPath);
	} catch (error) {
		tab?.close();
		throw error;
	}
};
/**
* 打开录制器的文件夹。录制中使用当前文件路径，否则查询最近一次录制的文件夹。
* @param recorderId 录制器 ID
* @param recordingPath 当前录制文件路径
* @param newTab 是否在 Web 端新标签页打开
*/
async function openRecorderFolder(recorderId, recordingPath, newTab = false) {
	await openFolderLocation(async () => {
		return { folderPath: recordingPath ? window.path.dirname(recordingPath) : (await recoder.getRecentRecordFolder(recorderId)).folderPath };
	}, newTab);
}
/**
* 打开录制历史对应的文件夹；桌面端会在文件管理器中定位视频文件。
* @param id 录制历史记录 ID
* @param newTab 是否在 Web 端新标签页打开
*/
async function openHistoryRecordFolder(id, newTab = false) {
	await openFolderLocation(async () => {
		const { videoFilePath } = await recordHistory_default.getFileInfo(id);
		if (!videoFilePath) return null;
		return {
			folderPath: window.path.dirname(videoFilePath),
			revealPath: videoFilePath
		};
	}, newTab);
}
async function toVideoPlayerPage(opts) {
	if (!opts.videoFilePath && !opts.videoId) throw new Error("缺少视频文件路径或视频ID");
	if (opts.videoId && opts.videoType === void 0) throw new Error("存在videoId时必选视频类型");
	let videoId = opts.videoId;
	let videoType = opts.videoType;
	let danmaId = opts.danmaId;
	if (!videoId && opts.videoFilePath) {
		const data = await common.applyVideoId(opts.videoFilePath);
		videoId = data.videoId;
		videoType = data.type;
	}
	if (!danmaId && opts.videoFilePath) danmaId = (await recordHistory_default.getDanmaFileInfo(opts.videoFilePath)).danmaFileId || void 0;
	if (videoId && videoType !== void 0) {
		if (videoType === "ts") throw new Error("ts文件暂不支持播放");
		const query = {
			videoId,
			type: videoType
		};
		if (danmaId) query.danmaId = danmaId;
		if (window.isWeb) {
			const url = router.resolve({
				name: "VideoPlayer",
				query
			}).href;
			window.open(url, "_blank");
		} else window.api.common.createSubWindow({
			routeName: "videoPlayer",
			hideAside: true,
			hideMenuBar: true,
			query
		});
	} else throw new Error("无法播放");
}
/**
* 获取直播流地址并打开直播播放器。Web 端使用新标签页，桌面端使用子窗口。
* @param opts 录制器 ID 和主播名称
*/
async function toLiveVideoPlayerPage(opts) {
	const data = await recoder.getStreamUrl(opts.liveId);
	if (!data.url) throw new Error("无法获取可供播放的流");
	const query = {
		liveId: opts.liveId,
		url: data.url,
		owner: opts.owner
	};
	if (window.isWeb) {
		const url = router.resolve({
			name: "LiveVideoPlayer",
			query
		}).href;
		window.open(url, "_blank");
	} else window.api.common.createSubWindow({
		routeName: "liveVideoPlayer",
		hideAside: true,
		hideMenuBar: true,
		query
	});
}
//#endregion
export { toVideoPlayerPage as i, openRecorderFolder as n, toLiveVideoPlayerPage as r, openHistoryRecordFolder as t };
