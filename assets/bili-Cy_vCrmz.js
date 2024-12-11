import { g as api } from "./index-NC0giMhn.js";
const validUploadParams = async (data) => {
  const res = await api.post("/bili/validUploadParams", data);
  return res.data;
};
const getArchives = async (params, uid) => {
  const res = await api.get("/bili/archives", {
    params: { ...params, uid }
  });
  return res.data;
};
const getArchiveDetail = async (bvid, uid) => {
  const res = await api.get(`/bili/user/archive/${bvid}`, {
    params: { uid }
  });
  return res.data;
};
const checkTag = async (tag, uid) => {
  const res = await api.post("/bili/checkTag", {
    tag,
    uid
  });
  return res.data;
};
const searchTopic = async (keyword, uid) => {
  const res = await api.get("/bili/searchTopic", {
    params: { keyword, uid }
  });
  return res.data;
};
const getSeasonList = async (uid) => {
  const res = await api.get("/bili/seasons", {
    params: { uid }
  });
  return res.data;
};
const getSessionId = async (aid, uid) => {
  const res = await api.get(`/bili//season/${aid}`, {
    params: { uid }
  });
  return res.data;
};
const getPlatformArchiveDetail = async (aid, uid) => {
  const res = await api.get("/bili/platformArchiveDetail", {
    params: { aid, uid }
  });
  return res.data;
};
const getPlatformPre = async (uid) => {
  const res = await api.get("/bili/platformPre", {
    params: { uid }
  });
  return res.data;
};
const getTypeDesc = async (tid, uid) => {
  const res = await api.get("/bili/typeDesc", {
    params: { tid, uid }
  });
  return res.data;
};
const download = async (options, uid) => {
  const res = await api.post("/bili/download", {
    options,
    uid
  });
  return res.data;
};
const qrcode = async () => {
  const res = await api.post("/bili/login");
  return res.data;
};
const loginCancel = async (id) => {
  const res = await api.post("/bili/login/cancel", {
    id
  });
  return res.data;
};
const loginPoll = async (id) => {
  const res = await api.get("/bili/login/poll", {
    params: { id }
  });
  return res.data;
};
const bili = {
  validUploadParams,
  getArchives,
  checkTag,
  searchTopic,
  getSeasonList,
  getArchiveDetail,
  getSessionId,
  getPlatformArchiveDetail,
  getPlatformPre,
  getTypeDesc,
  download,
  qrcode,
  loginCancel,
  loginPoll
};
export {
  bili as b
};
