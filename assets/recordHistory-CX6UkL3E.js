import { k as api } from "./index-CB8xvhFr.js";
const infoList = async (params) => {
  const res = await api.get(`/recorder/list`, { params });
  return res.data.payload;
};
const get = async (id) => {
  const res = await api.get(`/recorder/${id}`);
  return res.data.payload;
};
const getStreamUrl = async (id) => {
  const res = await api.post(`/recorder/${id}/stream`);
  return res.data.payload;
};
const add = async (data) => {
  const res = await api.post(`/recorder/add`, data);
  return res.data.payload;
};
const remove = async (id, removeHistory = false) => {
  const res = await api.delete(`/recorder/${id}`, {
    params: { removeHistory }
  });
  return res.data.payload;
};
const update = async (id, preset) => {
  const res = await api.put(`/recorder/${id}`, preset);
  return res.data.payload;
};
const startRecord = async (id) => {
  const res = await api.post(`/recorder/${id}/start`, {
    id
  });
  return res.data.payload;
};
const stopRecord = async (id) => {
  const res = await api.post(`/recorder/${id}/stop`, {
    id
  });
  return res.data.payload;
};
const cut = async (id) => {
  const res = await api.post(`/recorder/${id}/cut`, {
    id
  });
  return res.data.payload;
};
const getRecentRecordFolder = async (id) => {
  const res = await api.get(`/recorder/${id}/recent-record-folder`);
  return res.data.payload;
};
const batchStartRecord = async (ids) => {
  const res = await api.post(`/recorder/manager/batch_start_record`, { ids });
  return res.data.payload;
};
const batchStopRecord = async (ids) => {
  const res = await api.post(`/recorder/manager/batch_stop_record`, { ids });
  return res.data.payload;
};
const resolveChannel = async (url) => {
  const res = await api.get(`/recorder/manager/resolve-channel`, {
    params: { url }
  });
  return res.data.payload;
};
const resolve = async (url) => {
  const res = await api.get(`/recorder/manager/resolve`, {
    params: { url }
  });
  return res.data.payload;
};
const batchResolveChannel = async (channelURLs) => {
  const res = await api.post(`/recorder/manager/batchResolveChannel`, { channelURLs });
  return res.data.payload;
};
const getLiveInfo = async (ids, forceRequest) => {
  const res = await api.post(`/recorder/manager/live-info`, { ids, forceRequest });
  return res.data.payload;
};
const queryStreamerDetail = async (params) => {
  const res = await api.get(`/recorder/detail`, { params });
  return res.data.payload;
};
const recoder = {
  infoList,
  get,
  getStreamUrl,
  add,
  remove,
  update,
  stopRecord,
  startRecord,
  batchStartRecord,
  batchStopRecord,
  resolveChannel,
  resolve,
  batchResolveChannel,
  getLiveInfo,
  cut,
  getRecentRecordFolder,
  queryStreamerDetail
};
async function queryRecords(params) {
  const res = await api.get("/record-history/list", {
    params
  });
  return res.data;
}
async function queryRecentClips(params) {
  const res = await api.get("/record-history/recent-clips", {
    params
  });
  return res.data;
}
async function removeRecord(id) {
  const res = await api.delete(`/record-history/${id}`);
  return res.data;
}
async function getFileInfo(id) {
  const res = await api.get(`/record-history/file/${id}`);
  return res.data;
}
async function getDanmaFileInfo(videoFilePath) {
  const res = await api.post(`/record-history/danma-file`, {
    videoFilePath
  });
  return res.data;
}
async function downloadFile(id) {
  const { videoFileId } = await getFileInfo(id);
  return `${api.defaults.baseURL}/assets/download/${videoFileId}`;
}
const recordHistoryApi = {
  queryRecords,
  queryRecentClips,
  removeRecord,
  downloadFile,
  getFileInfo,
  getDanmaFileInfo
};
export {
  recordHistoryApi as a,
  recoder as r
};
