import { k as api } from "./index-CB8xvhFr.js";
const mergeXml = async (inputFiles, options) => {
  const res = await api.post("/danma/mergeXml", {
    inputFiles,
    options
  });
  return res.data;
};
const parseForArtPlayer = async (filepath) => {
  const res = await api.post("/danma/parseForArtPlayer", {
    filepath
  });
  return res.data;
};
const getParsedContentById = async (danmaId) => {
  const res = await api.get(`/danma/content/${danmaId}`);
  return res.data;
};
const danma = {
  mergeXml,
  parseForArtPlayer,
  getParsedContentById
};
export {
  danma as d
};
