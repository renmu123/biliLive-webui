import { k as api } from "./index-CB8xvhFr.js";
const syncTestUpload = async (data) => {
  const res = await api.post(`/sync/uploadTest`, data);
  return res.data;
};
const syncTestLogin = async (data) => {
  const res = await api.get(`/sync/isLogin`, { params: data });
  return res.data;
};
const baiduPCSLogin = async (data) => {
  const res = await api.post(`/sync/baiduPCSLogin`, data);
  return res.data;
};
const aliyunpanLogin = async (data) => {
  const res = await api.get(`/sync/aliyunpanLogin`, { params: data });
  return res.data;
};
const pan123Login = async (data) => {
  const res = await api.post(`/sync/pan123Login`, data);
  return res.data;
};
const sync = async (data) => {
  const res = await api.post(`/sync/sync`, data);
  return res.data;
};
const syncApi = {
  syncTestUpload,
  syncTestLogin,
  baiduPCSLogin,
  aliyunpanLogin,
  pan123Login,
  sync
};
export {
  syncApi as s
};
