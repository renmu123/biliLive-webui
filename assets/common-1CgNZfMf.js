import { k as api } from "./index-CB8xvhFr.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      var isInstance = false;
      try {
        isInstance = this instanceof a2;
      } catch {
      }
      if (isInstance) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
const get = async () => {
  if (window.isWeb) {
    const res = await api.get(`/config`);
    return res.data;
  } else {
    return window.api.config.getAll();
  }
};
const set = async (key, value) => {
  if (window.isWeb) {
    const res = await api.post(`/config/set`, {
      key,
      value
    });
    return res.data;
  } else {
    return window.api.config.set(key, value);
  }
};
const save = async (data) => {
  if (window.isWeb) {
    const res = await api.post(`/config`, data);
    return res.data;
  } else {
    return window.api.config.save(data);
  }
};
const resetBin = async (type) => {
  const res = await api.post(`/config/reset-bin`, { type });
  return res.data;
};
const notifyTest = async (title, desp, options, notifyType) => {
  const res = await api.post(`/config/notifyTest`, { title, desp, options, notifyType });
  return res.data;
};
const exportConfig = async () => {
  const res = await api.get(`/config/export`, {
    responseType: "blob"
  });
  return res.data;
};
const importConfig = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const res = await api.post(`/config/import`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return res.data;
};
const verifyBiliKey = async (key) => {
  const res = await api.post(`/config/verifyBiliKey`, { key });
  return res.data;
};
const config = {
  get,
  set,
  save,
  resetBin,
  notifyTest,
  exportConfig,
  importConfig,
  verifyBiliKey
};
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
  const res = await api.post(`/files/join`, {
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
  const res = await api.post("/common/parse-video-metadata", files);
  return res.data;
}
async function getFontList() {
  const res = await api.get(`/common/fonts`);
  return res.data;
}
async function uploadCover(file) {
  const formData = new FormData();
  formData.append("file", file);
  const res = await api.post("/files/cover/upload", formData, {
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
  const res = await api.post(`/common/applyVideoId`, {
    videoPath
  });
  return res.data;
};
const getVideo = (videoId) => {
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
  const res = await api.get("/files/temp");
  return res.data;
};
const fileExists = async (filepath) => {
  const res = await api.post("/files/exists", {
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
  config as a,
  commonjsGlobal as b,
  common as c,
  getAugmentedNamespace as d,
  exportLogs as e,
  getDefaultExportFromCjs as f,
  getLogContent as g,
  getDanmaStream as h
};
