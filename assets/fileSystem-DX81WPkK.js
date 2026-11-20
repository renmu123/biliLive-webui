import { t as showDirectoryDialog$1 } from "./showDirectoryDialog-ljqlCXtc.js";
//#region src/renderer/src/utils/fileSystem.ts
var showSaveDialog = async (options) => {
	if (window.isWeb) return (await showDirectoryDialog$1({
		type: "save",
		extension: options.extension ?? "mp4",
		defaultPath: options.defaultPath
	}))?.[0];
	else return await window.api.showSaveDialog({
		defaultPath: options.defaultPath,
		filters: [{
			name: "文件",
			extensions: [options.extension ?? "mp4"]
		}, {
			name: "所有文件",
			extensions: ["*"]
		}]
	});
};
var showDirectoryDialog = async (options) => {
	if (window.isWeb) return (await showDirectoryDialog$1({ type: "directory" }))?.[0];
	else return await window.api.openDirectory({ defaultPath: options.defaultPath });
};
var showFileDialog = async (options) => {
	let files = [];
	if (window.isWeb) files = await showDirectoryDialog$1({
		type: "file",
		multi: options.multi,
		exts: options.extensions
	});
	else files = await window.api.openFile({
		multi: options.multi,
		filters: [{
			name: "file",
			extensions: options.extensions
		}, {
			name: "所有文件",
			extensions: ["*"]
		}]
	});
	return files;
};
//#endregion
export { showFileDialog as n, showSaveDialog as r, showDirectoryDialog as t };
