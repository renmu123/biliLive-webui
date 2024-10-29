import { g as api } from "./index-BdK_bIY-.js";
import { c as config } from "./_plugin-vue_export-helper-CeIKdxzx.js";
const previewWebhookTitle = async (template) => {
  const res = await api.post(`/common/foramtTitle`, {
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
const common = {
  previewWebhookTitle,
  getStreamLogs,
  version,
  versionTest,
  getFiles,
  douyuVideoParse,
  douyuVideoDownload,
  getVideoStreams
};
export {
  common as c,
  getStreamLogs as g,
  previewWebhookTitle as p
};
