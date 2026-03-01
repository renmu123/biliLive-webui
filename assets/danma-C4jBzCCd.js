import { k as api } from "./index-gjuLIDoI.js";
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
const danma = {
  mergeXml,
  parseForArtPlayer
};
export {
  danma as d
};
