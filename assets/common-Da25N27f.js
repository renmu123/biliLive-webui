import { k as api } from "./index-gjuLIDoI.js";
import { c as config } from "./_plugin-vue_export-helper-B1lyReKF.js";
const getStreamLogs = async () => {
  let key = window.localStorage.getItem("key");
  if (!window.isWeb) {
    const appConfig = await config.get();
    key = appConfig.passKey;
  }
  const eventSource = new EventSource(`${api.defaults.baseURL}/sse/streamLogs?auth=${key}`);
  return eventSource;
};
const exportLogs = async () => {
  const res = await api.get(`/common/exportLogs`, {
    responseType: "blob"
  });
  return res.data;
};
const getLogContent = async () => {
  const res = await api.get(`/common/getLogContent`);
  return res.data;
};
const getDanmaStream = async (recorderId) => {
  let key = window.localStorage.getItem("key");
  if (!window.isWeb) {
    const appConfig = await config.get();
    key = appConfig.passKey;
  }
  const eventSource = new EventSource(
    `${api.defaults.baseURL}/sse/recorder/danma?auth=${key}&id=${recorderId}`
  );
  return eventSource;
};
const getRunningTaskNum = async () => {
  let key = window.localStorage.getItem("key");
  if (!window.isWeb) {
    const appConfig = await config.get();
    key = appConfig.passKey;
  }
  const eventSource = new EventSource(
    `${api.defaults.baseURL}/sse/task/runningNum?auth=${key}`
  );
  return eventSource;
};
const version = async () => {
  const res = await api.get(`/common/version`);
  return res.data;
};
const versionTest = async (api$1, Authorization) => {
  const res = await api.get(`${api$1}/common/version`, {
    headers: {
      Authorization
    }
  });
  return res.data;
};
const getFiles = async (params) => {
  const res = await api.get(`/common/files`, {
    params: {
      ...params,
      exts: (params?.exts || []).join("|")
    }
  });
  return res.data;
};
const fileJoin = async (dir, name) => {
  const res = await api.post(`/common/fileJoin`, {
    dir,
    name
  });
  return res.data;
};
async function readXmlTimestamp(filepath) {
  const res = await api.post(`/common/danma/timestamp`, {
    filepath
  });
  return res.data;
}
async function parseMeta(files) {
  const res = await api.post("/common/parseMeta", files);
  return res.data;
}
async function getFontList() {
  const res = await api.get(`/common/fonts`);
  return res.data;
}
async function uploadCover(file) {
  const formData = new FormData();
  formData.append("file", file);
  const res = await api.post("/common/cover/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return res.data;
}
async function appStartTime() {
  const res = await api.get(`/common/appStartTime`);
  return res.data;
}
async function appStatistics() {
  const res = await api.get(`/common/statistics`);
  return res.data;
}
async function readDanma(filepath) {
  const res = await api.post("/common/readDanma", {
    filepath
  });
  return res.data;
}
async function readLLCProject(filepath) {
  const res = await api.post("/common/readLLC", {
    filepath
  });
  return res.data;
}
async function writeLLCProject(filepath, content) {
  await api.post("/common/writeLLC", {
    filepath,
    content
  });
}
async function genTimeData(filepath) {
  const res = await api.post("/common/genTimeData", {
    filepath
  });
  return res.data;
}
const applyVideoId = async (videoPath) => {
  const res = await api.post(`/common/apply-video-id`, {
    videoPath
  });
  return res.data;
};
const getVideo = async (videoId) => {
  return `${api.defaults.baseURL}/common/video/${videoId}`;
};
const parseDanmu = async (filepath) => {
  const res = await api.post("/common/parseDanmu", {
    filepath
  });
  return res.data;
};
const testWebhook = async () => {
  const res = await api.post("/common/testWebhook");
  return res.data;
};
const handleWebhook = async (data) => {
  const res = await api.post("/common/handleWebhook", { data });
  return res.data;
};
const whyUploadFailed = async (roomId) => {
  const res = await api.get("/common/whyUploadFailed", {
    params: {
      roomId
    }
  });
  return res.data;
};
const checkUpdate = async () => {
  const res = await api.get("/common/checkUpdate");
  return res.data;
};
const getTempPath = async () => {
  const res = await api.get("/common/tempPath");
  return res.data;
};
const fileExists = async (filepath) => {
  const res = await api.post("/common/fileExists", {
    filepath
  });
  return res.data;
};
const getDiskSpace = async () => {
  const res = await api.get("/common/diskSpace");
  return res.data;
};
const common = {
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
export {
  getDanmaStream as a,
  common as c,
  exportLogs as e,
  getLogContent as g
};
