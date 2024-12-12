import { h as api } from "./index-B3txP6HV.js";
import { c as config } from "./_plugin-vue_export-helper-BI19-qja.js";
const previewWebhookTitle = async (template) => {
  const res = await api.post(`/common/formatTitle`, {
    template
  });
  return res.data;
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
async function getVideoStreams(params) {
  const res = await api.get(`/common/download/streams`, {
    params
  });
  return res.data;
}
async function douyuVideoParse(url) {
  const res = await api.post(`/common/douyu/parse`, {
    url
  });
  return res.data;
}
async function douyuVideoDownload(output, decodeData, options) {
  const res = await api.post(`/common/douyu/download`, {
    output,
    decodeData,
    options
  });
  return res.data;
}
async function readXmlTimestamp(filepath) {
  const res = await api.post(`/common/danma/timestamp`, {
    filepath
  });
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
const common = {
  previewWebhookTitle,
  getStreamLogs,
  version,
  versionTest,
  getFiles,
  douyuVideoParse,
  douyuVideoDownload,
  getVideoStreams,
  readXmlTimestamp,
  getFontList,
  uploadCover,
  appStartTime,
  getDanmaStream,
  exportLogs
};
export {
  getDanmaStream as a,
  common as c,
  exportLogs as e,
  getStreamLogs as g,
  previewWebhookTitle as p
};
