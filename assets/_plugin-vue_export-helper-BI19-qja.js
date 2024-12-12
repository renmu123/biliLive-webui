import { h as api } from "./index-B3txP6HV.js";
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
  console.log("save", data);
  if (window.isWeb) {
    const res = await api.post(`/config`, data);
    return res.data;
  } else {
    return window.api.config.save(data);
  }
};
const resetBin = async (type) => {
  const res = await api.post(`/config/resetBin`, { type });
  return res.data;
};
const notifyTest = async (title, desp, options) => {
  const res = await api.post(`/config/notifyTest`, { title, desp, options });
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
const config = {
  get,
  set,
  save,
  resetBin,
  notifyTest,
  exportConfig,
  importConfig
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
export {
  _export_sfc as _,
  config as c
};
