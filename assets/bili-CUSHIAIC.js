import { k as api } from "./index-gjuLIDoI.js";
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
const upload = async (options) => {
  const res = await api.post("/bili/upload", options);
  return res.data;
};
const formatWebhookTitle = async (template, options) => {
  const res = await api.post(`/bili/formatTitle`, {
    template,
    options: options || {
      title: "标题",
      username: "主播名",
      time: (/* @__PURE__ */ new Date()).toISOString(),
      roomId: 123456,
      filename: "文件名"
    }
  });
  return res.data;
};
const formatWebhookPartTitle = async (template, options) => {
  const res = await api.post(`/bili/formatPartTitle`, {
    template,
    options
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
  qrcode,
  loginCancel,
  loginPoll,
  upload,
  formatWebhookTitle,
  formatWebhookPartTitle
};
export {
  formatWebhookTitle as a,
  bili as b,
  formatWebhookPartTitle as f
};
