import { s as showDirectoryDialog$1 } from "./showDirectoryDialog-CbG0Fkj3.js";
const showSaveDialog = async (options) => {
  if (window.isWeb) {
    const filePath = (await showDirectoryDialog$1({
      type: "save",
      extension: options.extension ?? "mp4",
      defaultPath: options.defaultPath
    }))?.[0];
    return filePath;
  } else {
    const outputPath = await window.api.showSaveDialog({
      defaultPath: options.defaultPath,
      filters: [
        { name: "文件", extensions: [options.extension ?? "mp4"] },
        { name: "所有文件", extensions: ["*"] }
      ]
    });
    return outputPath;
  }
};
const showDirectoryDialog = async (options) => {
  if (window.isWeb) {
    const filePath = (await showDirectoryDialog$1({
      type: "directory"
    }))?.[0];
    return filePath;
  } else {
    const file = await window.api.openDirectory({
      defaultPath: options.defaultPath
    });
    return file;
  }
};
const showFileDialog = async (options) => {
  let files = [];
  if (window.isWeb) {
    files = await showDirectoryDialog$1({
      type: "file",
      multi: options.multi,
      exts: options.extensions
    });
  } else {
    files = await window.api.openFile({
      multi: options.multi,
      filters: [
        {
          name: "file",
          extensions: options.extensions
        },
        {
          name: "所有文件",
          extensions: ["*"]
        }
      ]
    });
  }
  return files;
};
export {
  showFileDialog as a,
  showSaveDialog as b,
  showDirectoryDialog as s
};
