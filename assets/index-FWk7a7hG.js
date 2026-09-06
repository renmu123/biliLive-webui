import { cz as cloneArrayBuffer, aX as Symbol$1, cA as cloneTypedArray, cB as isObjectLike, b1 as baseUnary, cC as nodeUtil, ch as isObject, cD as isBuffer, cE as cloneBuffer, cF as initCloneObject, cG as Stack, aY as isArray, cH as assignValue, k as api, cI as defineStore, r as ref, x as computed, an as storeToRefs, Y as watch, cJ as readonly } from "./index-CB8xvhFr.js";
import { l as generateHMACSHA256, d as deepRaw } from "./index-guw4y6OO.js";
import { a as config, c as common } from "./common-1CgNZfMf.js";
import "./_plugin-vue_export-helper-uo42igUt.js";
import { g as getTag, b as getAllKeys } from "./_getTag-22mR82vJ.js";
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = cloneArrayBuffer(dataView.buffer);
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
var mapTag$1 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag$1;
}
var nodeIsMap = nodeUtil && nodeUtil.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var setTag$1 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag$1;
}
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var CLONE_DEEP_FLAG$1 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1;
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFunc ? {} : initCloneObject(value);
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = getAllKeys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
const getUserList = async () => {
  const res = await api.get(`/user/list`);
  return res.data;
};
const refresh = async (uid) => {
  const res = await api.post(`/user/update`, {
    uid
  });
  return res.data;
};
const deleteUser = async (uid) => {
  const res = await api.post(`/user/delete`, {
    uid
  });
  return res.data;
};
const updateAuth = async (uid) => {
  const res = await api.post(`/user/update_auth`, {
    uid
  });
  return res.data;
};
const getCookie = async (uid) => {
  const timestamp = Math.floor(Date.now() / 1e3);
  const secret = "r96gkr8ahc34fsrewr34";
  const signature = await generateHMACSHA256(`${uid}${timestamp}`, secret);
  const res = await api.post(`/user/get_cookie`, {
    uid,
    timestamp,
    signature
  });
  const data = res.data;
  return data;
};
const exportAll = async () => {
  const res = await api.get(`/user/export`);
  return res.data;
};
const exportSingle = async (uid) => {
  const res = await api.post(`/user/export_single`, {
    uid
  });
  return res.data;
};
const importAll = async (users) => {
  const res = await api.post(`/user/import`, {
    users
  });
  return res.data;
};
const importSingle = async (user) => {
  const res = await api.post(`/user/import_single`, {
    user
  });
  return res.data;
};
const userApi = {
  getList: getUserList,
  refresh,
  delete: deleteUser,
  updateAuth,
  getCookie,
  exportAll,
  exportSingle,
  importAll,
  importSingle
};
const list$3 = async () => {
  const res = await api.get(`/preset/danmu`);
  return res.data;
};
const get$3 = async (id) => {
  const res = await api.get(`/preset/danmu/${id}`);
  return res.data;
};
const add$2 = async (preset) => {
  return api.post(`/preset/danmu`, preset);
};
const remove$2 = async (id) => {
  return api.delete(`/preset/danmu/${id}`);
};
const update$2 = async (id, preset) => {
  return api.put(`/preset/danmu/${id}`, preset);
};
const save$2 = async (preset) => {
  if (preset.id) {
    return update$2(preset.id, preset);
  } else {
    return add$2(preset);
  }
};
const danmuPreset = {
  list: list$3,
  get: get$3,
  add: add$2,
  remove: remove$2,
  update: update$2,
  save: save$2
};
const list$2 = async () => {
  const res = await api.get(`/preset/ffmpeg`);
  return res.data;
};
const options = async () => {
  const res = await api.get(`/preset/ffmpeg/options`);
  return res.data;
};
const get$2 = async (id) => {
  const res = await api.get(`/preset/ffmpeg/${id}`);
  return res.data;
};
const add$1 = async (preset) => {
  return api.post(`/preset/ffmpeg`, preset);
};
const remove$1 = async (id) => {
  return api.delete(`/preset/ffmpeg/${id}`);
};
const update$1 = async (id, preset) => {
  return api.put(`/preset/ffmpeg/${id}`, preset);
};
const save$1 = async (preset) => {
  if (preset.id) {
    return update$1(preset.id, preset);
  } else {
    return add$1(preset);
  }
};
const ffmpegPreset = {
  list: list$2,
  get: get$2,
  add: add$1,
  remove: remove$1,
  update: update$1,
  save: save$1,
  options
};
const list$1 = async () => {
  const res = await api.get(`/preset/video`);
  return res.data;
};
const get$1 = async (id) => {
  const res = await api.get(`/preset/video/${id}`);
  return res.data;
};
const add = async (preset) => {
  return api.post(`/preset/video`, preset);
};
const remove = async (id) => {
  return api.delete(`/preset/video/${id}`);
};
const update = async (id, preset) => {
  return api.put(`/preset/video/${id}`, preset);
};
const save = async (preset) => {
  if (preset.id) {
    return update(preset.id, preset);
  } else {
    return add(preset);
  }
};
const videoPreset = {
  list: list$1,
  get: get$1,
  add,
  remove,
  update,
  save
};
const list = async (params) => {
  const res = await api.get(`/task`, { params });
  return res.data;
};
const get = async (id) => {
  const res = await api.get(`/task/${id}`);
  return res.data;
};
const pause = async (id) => {
  const res = await api.post(`/task/${id}/pause`);
  return res.data;
};
const resume = async (id) => {
  const res = await api.post(`/task/${id}/resume`);
  return res.data;
};
const cancel = async (id) => {
  const res = await api.post(`/task/${id}/kill`);
  return res.data;
};
const interrupt = async (id) => {
  const res = await api.post(`/task/${id}/interrupt`);
  return res.data;
};
const removeRecord = async (id) => {
  const res = await api.post(`/task/${id}/removeRecord`);
  return res.data;
};
const removeFile = async (id) => {
  const res = await api.post(`/task/${id}/removeFile`);
  return res.data;
};
const restart = async (id) => {
  const res = await api.post(`/task/${id}/restart`);
  return res.data;
};
const removeBatch = async (ids) => {
  const res = await api.post(`/task/removeBatch`, { ids });
  return res.data;
};
const start = async (id) => {
  const res = await api.post(`/task/${id}/start`);
  return res.data;
};
const convertXml2Ass = async (input, output, preset, options2) => {
  const res = await api.post(`/task/convertXml2Ass`, {
    input,
    output,
    options: options2,
    preset
  });
  return res.data;
};
const mergeVideos = async (inputVideos, options2) => {
  const res = await api.post(`/task/mergeVideo`, {
    inputVideos,
    options: options2
  });
  return res.data;
};
const checkMergeVideos = async (inputVideos) => {
  const res = await api.post(`/task/checkMergeVideos`, { inputVideos });
  return res.data;
};
const transcode = async (input, outputName, ffmpegOptions, options2) => {
  const res = await api.post(`/task/transcode`, {
    input,
    outputName,
    ffmpegOptions,
    options: options2
  });
  return res.data;
};
const burn = async (files, output, options2) => {
  const res = await api.post(`/task/burn`, {
    files,
    output,
    options: options2
  });
  return res.data;
};
const flvRepair = async (input, output, options2) => {
  const res = await api.post(`/task/flvRepair`, {
    input,
    output,
    options: options2
  });
  return res.data;
};
const cut = async (files, output, ffmpegOptions, options2) => {
  const res = await api.post(`/task/cut`, {
    files,
    output,
    options: options2,
    ffmpegOptions
  });
  return res.data;
};
const sendToWebhook = async (data) => {
  const res = await api.post(`/webhook/custom`, data);
  return res.data;
};
const readVideoMeta = async (input) => {
  const res = await api.post(`/task/videoMeta`, { file: input });
  return res.data;
};
const parseVideo = async (url) => {
  const res = await api.post(`/video/parse`, { url });
  return res.data;
};
const downloadVideo = async (data) => {
  const res = await api.post(`/video/download`, data);
  return res.data;
};
const addExtraVideoTask = async (taskId, filePath, partName) => {
  const res = await api.post(`/task/addExtraVideoTask`, { taskId, filePath, partName });
  return res.data;
};
const queryVideoStatus = async (taskId) => {
  const res = await api.post(`/task/queryVideoStatus`, { taskId });
  return res.data;
};
const editVideoPartName = async (taskId, partName) => {
  const res = await api.post(`/task/editVideoPartName`, { taskId, partName });
  return res.data;
};
const downloadFile = async (taskId) => {
  const res = await api.get(`/task/${taskId}/download`);
  const fileId = res.data;
  const fileUrl = `${api.defaults.baseURL}/assets/download/${fileId}`;
  return fileUrl;
};
const testVirtualRecord = async (config2, folderPath, startTime) => {
  const res = await api.post(`/task/testVirtualRecord`, {
    config: config2,
    folderPath,
    startTime
  });
  return res.data;
};
const executeVirtualRecord = async (config2, folderPath, startTime) => {
  const res = await api.post(`/task/executeVirtualRecord`, {
    config: config2,
    folderPath,
    startTime
  });
  return res.data;
};
const extractPeaks = async (input) => {
  const res = await api.post(`/task/extractPeaks`, {
    input,
    options: {
      sync: true
    }
  });
  return res.data;
};
const analyzerWaveform = async (input, config$1) => {
  let key = window.localStorage.getItem("key");
  if (!window.isWeb) {
    const appConfig = await config.get();
    key = appConfig.passKey;
  }
  const configStr = config$1 ? encodeURIComponent(JSON.stringify(config$1)) : "";
  const url = `${api.defaults.baseURL}/sse/analyzerWaveform?auth=${key}&input=${encodeURIComponent(input)}&config=${configStr}`;
  const eventSource = new EventSource(url);
  return eventSource;
};
const cutSubtitle = async (data) => {
  const res = await api.post(`/task/cutSubtitle`, data);
  return res.data;
};
const task = {
  list,
  get,
  pause,
  resume,
  cancel,
  interrupt,
  removeRecord,
  removeFile,
  start,
  convertXml2Ass,
  mergeVideos,
  transcode,
  burn,
  sendToWebhook,
  removeBatch,
  readVideoMeta,
  parseVideo,
  downloadVideo,
  cut,
  checkMergeVideos,
  addExtraVideoTask,
  downloadFile,
  editVideoPartName,
  queryVideoStatus,
  restart,
  testVirtualRecord,
  executeVirtualRecord,
  flvRepair,
  extractPeaks,
  analyzerWaveform,
  cutSubtitle
};
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
const getReserveList = async (uid) => {
  const res = await api.get("/bili/reserveList", {
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
const upload = async (options2) => {
  const res = await api.post("/bili/upload", options2);
  return res.data;
};
const formatWebhookTitle = async (template, options2) => {
  const res = await api.post(`/bili/formatTitle`, {
    template,
    options: options2 || {
      title: "标题",
      username: "主播名",
      time: (/* @__PURE__ */ new Date()).toISOString(),
      roomId: 123456,
      filename: "文件名"
    }
  });
  return res.data;
};
const formatWebhookPartTitle = async (template, options2) => {
  const res = await api.post(`/bili/formatPartTitle`, {
    template,
    options: options2
  });
  return res.data;
};
const formatWebhookDesc = async (template, options2) => {
  const res = await api.post(`/bili/formatDesc`, {
    template,
    options: options2 || {
      title: "标题",
      username: "主播名",
      time: (/* @__PURE__ */ new Date()).toISOString(),
      roomId: 123456,
      filename: "文件名"
    }
  });
  return res.data;
};
const bili = {
  validUploadParams,
  getArchives,
  getReserveList,
  checkTag,
  searchTopic,
  getSeasonList,
  getArchiveDetail,
  getSessionId,
  getPlatformArchiveDetail,
  qrcode,
  loginCancel,
  loginPoll,
  upload,
  formatWebhookTitle,
  formatWebhookPartTitle,
  formatWebhookDesc
};
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = {
  randomUUID
};
function v4(options2, buf, offset) {
  if (native.randomUUID && true && !options2) {
    return native.randomUUID();
  }
  options2 = options2 || {};
  var rnds = options2.random || (options2.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return unsafeStringify(rnds);
}
class Parser {
  seperator = ",";
  timestampToSeconds(srtTimestamp) {
    const [rest, millisecondsString] = srtTimestamp.split(",");
    const milliseconds = parseInt(millisecondsString);
    const [hours, minutes, seconds] = rest.split(":").map((x) => parseInt(x));
    const result = milliseconds * 1e-3 + seconds + 60 * minutes + 3600 * hours;
    return Math.round(result * 1e3) / 1e3;
  }
  correctFormat(time) {
    let str = time.replace(".", ",");
    var hour = null;
    var minute = null;
    var second = null;
    var millisecond = null;
    var [front, ms] = str.split(",");
    millisecond = this.fixed_str_digit(3, ms);
    var [a_hour, a_minute, a_second] = front.split(":");
    hour = this.fixed_str_digit(2, a_hour, false);
    minute = this.fixed_str_digit(2, a_minute, false);
    second = this.fixed_str_digit(2, a_second, false);
    return `${hour}:${minute}:${second},${millisecond}`;
  }
  /*
    // make sure string is 'how_many_digit' long
    // if str is shorter than how_many_digit, pad with 0
    // if str is longer than how_many_digit, slice from the beginning
    // Example:
  
    Input: fixed_str_digit(3, '100')
    Output: 100
    Explain: unchanged, because "100" is 3 digit
  
    Input: fixed_str_digit(3, '50')
    Output: 500
    Explain: pad end with 0
  
    Input: fixed_str_digit(3, '50', false)
    Output: 050
    Explain: pad start with 0
  
    Input: fixed_str_digit(3, '7771')
    Output: 777
    Explain: slice from beginning
    */
  fixed_str_digit(how_many_digit, str, padEnd = true) {
    if (str.length == how_many_digit) {
      return str;
    }
    if (str.length > how_many_digit) {
      return str.slice(0, how_many_digit);
    }
    if (str.length < how_many_digit) {
      if (padEnd) {
        return str.padEnd(how_many_digit, "0");
      } else {
        return str.padStart(how_many_digit, "0");
      }
    }
  }
  tryComma(data) {
    data = data.replace(/\r/g, "");
    var regex = /(\d+)\n(\d{1,2}:\d{2}:\d{2},\d{1,3}) --> (\d{1,2}:\d{2}:\d{2},\d{1,3})/g;
    let data_array = data.split(regex);
    data_array.shift();
    return data_array;
  }
  tryDot(data) {
    data = data.replace(/\r/g, "");
    var regex = /(\d+)\n(\d{1,2}:\d{2}:\d{2}\.\d{1,3}) --> (\d{1,2}:\d{2}:\d{2}\.\d{1,3})/g;
    let data_array = data.split(regex);
    data_array.shift();
    this.seperator = ".";
    return data_array;
  }
  fromSrt(data) {
    var originalData = data;
    var data_array = this.tryComma(originalData);
    if (data_array.length == 0) {
      data_array = this.tryDot(originalData);
    }
    var items = [];
    for (var i = 0; i < data_array.length; i += 4) {
      const startTime = this.correctFormat(data_array[i + 1].trim());
      const endTime = this.correctFormat(data_array[i + 2].trim());
      var new_line = {
        id: data_array[i].trim(),
        startTime,
        startSeconds: this.timestampToSeconds(startTime),
        endTime,
        endSeconds: this.timestampToSeconds(endTime),
        text: data_array[i + 3].trim()
      };
      items.push(new_line);
    }
    return items;
  }
  toSrt(data) {
    var res = "";
    const end_of_line = "\r\n";
    for (var i = 0; i < data.length; i++) {
      var s = data[i];
      res += s.id + end_of_line;
      res += s.startTime + " --> " + s.endTime + end_of_line;
      res += s.text.replace("\n", end_of_line) + end_of_line + end_of_line;
    }
    return res;
  }
}
const useSubtitles = defineStore("subtitles", () => {
  const items = ref([]);
  const getGlobal = () => {
    return items.value.filter((s) => s.sourceId === null);
  };
  const getBySourceId = (sourceId) => {
    return items.value.filter((s) => s.sourceId === sourceId);
  };
  const getById = (id) => {
    return items.value.find((s) => s.id === id);
  };
  const add2 = (subtitle) => {
    const newItem = {
      id: v4(),
      ...subtitle
    };
    items.value.push(newItem);
    return newItem;
  };
  const update2 = (id, content) => {
    const item = getById(id);
    if (item) {
      item.content = content;
    }
  };
  const remove2 = (id) => {
    items.value = items.value.filter((s) => s.id !== id);
  };
  const removeBySourceId = (sourceId) => {
    items.value = items.value.filter((s) => s.sourceId !== sourceId);
  };
  const clear = () => {
    items.value = [];
  };
  const setForSegment = (segmentId, content) => {
    removeBySourceId(segmentId);
    return add2({ sourceId: segmentId, content });
  };
  const setGlobal = (content) => {
    items.value = items.value.filter((s) => s.sourceId !== null);
    return add2({ sourceId: null, content });
  };
  const getCombinedForSegments = (segments) => {
    const parser = new Parser();
    const globalSubtitles = getGlobal();
    const globalSubtitle = globalSubtitles.length > 0 ? globalSubtitles[0] : null;
    let mergedNodes = [];
    if (globalSubtitle) {
      try {
        mergedNodes = parser.fromSrt(globalSubtitle.content);
      } catch (error) {
        console.error("解析全局字幕失败:", error);
      }
    }
    for (const segment of segments) {
      const segmentSubtitles = getBySourceId(segment.id);
      if (segmentSubtitles.length > 0) {
        mergedNodes = mergedNodes.filter(
          (node) => !(node.startSeconds >= segment.start && node.endSeconds <= segment.end)
        );
        try {
          const nodes = parser.fromSrt(segmentSubtitles[0].content);
          const filteredNodes = nodes.filter(
            (node) => node.startSeconds >= segment.start && node.endSeconds <= segment.end
          );
          mergedNodes.push(...filteredNodes);
        } catch (error) {
          console.error(`解析 segment ${segment.id} 的字幕失败:`, error);
        }
      }
    }
    mergedNodes.sort((a, b) => a.startSeconds - b.startSeconds);
    const allNodes = mergedNodes;
    if (allNodes.length === 0) {
      return "";
    }
    try {
      return parser.toSrt(allNodes);
    } catch (error) {
      console.error("生成合并字幕失败:", error);
      return "";
    }
  };
  return {
    items,
    // 查询
    getGlobal,
    getBySourceId,
    getById,
    // CRUD
    add: add2,
    update: update2,
    remove: remove2,
    removeBySourceId,
    clear,
    // 便捷方法
    setForSegment,
    setGlobal,
    // 合并逻辑
    getCombinedForSegments
  };
});
const useUserInfoStore = defineStore("userInfo", () => {
  const appConfigStore = useAppConfig();
  const userList = ref([]);
  const calcExpireTime = (expires) => {
    const date = /* @__PURE__ */ new Date();
    if (expires) {
      const expireTime = new Date(expires);
      if (date > expireTime) {
        return "已过期!";
      } else {
        const diff = expireTime.getTime() - date.getTime();
        const day = Math.floor(diff / (24 * 3600 * 1e3));
        return `${day}天后过期`;
      }
    }
    return "";
  };
  async function getUsers() {
    userList.value = (await getUserList()).map((item) => {
      return {
        ...item,
        expiresText: calcExpireTime(item.expires)
      };
    });
  }
  function changeUser(uid) {
    appConfigStore.set("uid", uid);
  }
  getUsers();
  const userInfo = computed(() => {
    const uid = appConfigStore.appConfig.uid;
    const user = userList.value.find((item) => item.uid === uid);
    return {
      uid,
      profile: {
        face: user?.face,
        name: user?.name
      }
    };
  });
  return { userInfo, getUsers, userList, changeUser };
});
const useDanmuPreset = defineStore("danmuPreset", () => {
  const { appConfig } = storeToRefs(useAppConfig());
  const danmuPresetId = computed({
    get: () => appConfig.value.tool.danmu.danmuPresetId,
    set: (value) => {
      appConfig.value.tool.danmu.danmuPresetId = value;
    }
  });
  const danmuPresets = ref([]);
  const danmuPreset$1 = ref({
    config: {}
  });
  async function getDanmuPresets() {
    danmuPresets.value = await danmuPreset.list();
  }
  async function getDanmuPreset() {
    danmuPreset$1.value = await danmuPreset.get(danmuPresetId.value);
  }
  const danmuPresetsOptions = computed(() => {
    return danmuPresets.value.map((item) => {
      return {
        label: item.name,
        value: item.id
      };
    });
  });
  watch(
    danmuPresetId,
    (newVal) => {
      newVal && getDanmuPreset();
    },
    {
      immediate: true
    }
  );
  getDanmuPresets();
  return {
    danmuPresets,
    getDanmuPresets,
    danmuPresetsOptions,
    danmuPresetId,
    danmuPreset: danmuPreset$1,
    getDanmuPreset
  };
});
const useFfmpegPreset = defineStore("ffmpegPreset", () => {
  const options2 = ref([]);
  const getPresetOptions = async () => {
    options2.value = await ffmpegPreset.options();
  };
  getPresetOptions();
  return {
    ffmpegOptions: options2,
    getPresetOptions
  };
});
const useUploadPreset = defineStore("uploadPreset", () => {
  const upladPresetId = ref("default");
  const uploadPresets = ref([]);
  const uploadPresetVersion = ref(0);
  const uploadPreset = ref({
    config: {}
  });
  async function getUploadPresets() {
    uploadPresets.value = await videoPreset.list();
  }
  async function saveUploadPreset(data) {
    await bili.validUploadParams(deepRaw(data.config));
    await videoPreset.save(deepRaw(data));
    await getUploadPresets();
    uploadPresetVersion.value += 1;
  }
  async function removeUploadPreset(id) {
    await videoPreset.remove(id);
    await getUploadPresets();
    uploadPresetVersion.value += 1;
  }
  const uploaPresetsOptions = computed(() => {
    return uploadPresets.value.map((item) => {
      return {
        label: item.name,
        value: item.id,
        options: item.config
      };
    });
  });
  getUploadPresets();
  return {
    uploadPresets,
    uploadPresetVersion,
    getUploadPresets,
    saveUploadPreset,
    removeUploadPreset,
    uploaPresetsOptions,
    upladPresetId,
    uploadPreset
  };
});
const useQueueStore = defineStore("queue", () => {
  const runningTaskNum = ref(0);
  const queue = ref([]);
  const params = ref({ type: "" });
  let eventSource = null;
  let checkTimer = null;
  const getQuenu = async () => {
    const res = await task.list(params.value);
    queue.value = res.list.reverse();
  };
  const setRunningTaskNum = (num) => {
    runningTaskNum.value = num;
  };
  const init = async () => {
    if (eventSource && eventSource.readyState !== 2) return;
    eventSource = await common.getRunningTaskNum();
    eventSource.onmessage = function(event) {
      const data = JSON.parse(event.data || "{}");
      setRunningTaskNum(data.num);
    };
    if (checkTimer) {
      clearInterval(checkTimer);
    }
    checkTimer = window.setInterval(
      () => {
        if (eventSource && eventSource.readyState === 2) {
          eventSource = null;
          init();
        }
      },
      10 * 60 * 1e3
    );
  };
  watch(
    () => params.value,
    () => {
      getQuenu();
    }
  );
  return {
    runningTaskNum,
    getQuenu,
    queue,
    params,
    setRunningTaskNum,
    init
  };
});
const useAppConfig = defineStore("appConfig", () => {
  const appConfig = ref({
    tool: {
      home: {
        uploadPresetId: "",
        danmuPresetId: "",
        ffmpegPresetId: "",
        removeOrigin: false,
        autoUpload: false,
        hotProgress: false,
        hotProgressSample: 30,
        hotProgressHeight: 60,
        hotProgressColor: "#f9f5f3",
        hotProgressFillColor: "#333333",
        removeOriginAfterUploadCheck: false
      },
      upload: {
        uploadPresetId: "",
        removeOriginAfterUploadCheck: false
      },
      fileSync: {
        removeOrigin: false,
        syncType: void 0,
        aliyunpanDriveType: "backup",
        targetPath: ""
      },
      danmu: {
        danmuPresetId: "",
        saveRadio: 1,
        savePath: "",
        removeOrigin: false,
        override: true
      },
      video2mp4: {
        saveRadio: 1,
        savePath: "",
        saveOriginPath: false,
        override: false,
        removeOrigin: false,
        ffmpegPresetId: "b_copy",
        danmuPresetId: "default",
        hotProgress: false
      },
      videoMerge: {
        saveOriginPath: false,
        removeOrigin: false,
        keepFirstVideoMeta: false,
        mergeXml: false
      },
      flvRepair: {
        type: "bililive",
        saveRadio: 1,
        savePath: ""
      },
      download: {
        savePath: "",
        danmu: "none",
        douyuResolution: "highest",
        override: false,
        onlyAudio: false,
        onlyDanmu: false
      },
      translate: {
        presetId: void 0
      },
      videoCut: {
        /** 保存类型 */
        saveRadio: 1,
        /** 保存路径 */
        savePath: ".\\导出文件夹",
        /** 覆盖已存在的文件 */
        override: false,
        /** ffmpeg预设 */
        ffmpegPresetId: "b_libx264",
        title: "{{filename}}-{{label}}-{{num}}",
        danmuPresetId: "default",
        ignoreDanmu: false,
        ignoreSubtitle: false,
        exportSubtitle: true,
        uploadPresetId: ""
      }
    }
  });
  async function getAppConfig() {
    appConfig.value = await config.get();
  }
  async function set(key, value) {
    await config.set(key, value);
    appConfig.value[key] = value;
  }
  watch(
    () => appConfig.value.tool,
    (newVal) => {
      config.set("tool", cloneDeep(newVal));
    },
    { deep: true }
  );
  return {
    appConfig,
    getAppConfig,
    set
  };
});
function useHistoryStore({ limit }) {
  let history = [];
  let current = -1;
  const state = ref();
  const add2 = (newState) => {
    if (current < history.length - 1) {
      history.splice(current + 1);
    }
    history.push(cloneDeep(newState));
    if (history.length > limit) {
      history.shift();
    } else {
      current++;
    }
    state.value = cloneDeep(newState);
  };
  const undo = () => {
    if (current > 0) {
      current--;
      state.value = cloneDeep(history[current]);
    }
  };
  const redo = () => {
    if (current < history.length - 1) {
      current++;
      state.value = cloneDeep(history[current]);
    }
  };
  const clear = () => {
    history = [];
    current = -1;
  };
  return { state, add: add2, undo, redo, clear, history };
}
const useSegmentStore = defineStore("segment", () => {
  const duration = ref(0);
  const selectCutId = ref(null);
  const rawCuts = ref([]);
  const cuts = readonly(
    computed(() => {
      return rawCuts.value.map((item) => {
        return {
          ...item,
          end: item.end || duration.value
        };
      });
    })
  );
  const historyStore = useHistoryStore({ limit: 30 });
  const subtitleStore = useSubtitles();
  const index = ref(0);
  const eventListeners = [];
  const on = (callback) => {
    eventListeners.push(callback);
  };
  const off = (callback) => {
    const idx = eventListeners.indexOf(callback);
    if (idx > -1) {
      eventListeners.splice(idx, 1);
    }
  };
  const emit = (type, data) => {
    eventListeners.forEach((callback) => {
      callback({ type, ...data });
    });
  };
  const recordHistory = () => {
    historyStore.add(rawCuts.value);
  };
  const clearHistory = () => {
    historyStore.clear();
  };
  const undo = () => {
    historyStore.undo();
    rawCuts.value = historyStore.state.value || [];
    emit("clear");
    rawCuts.value.forEach((segment) => {
      emit("add", { segment });
    });
  };
  const redo = () => {
    historyStore.redo();
    rawCuts.value = historyStore.state.value || [];
    emit("clear");
    rawCuts.value.forEach((segment) => {
      emit("add", { segment });
    });
  };
  const selectedCuts = computed(() => {
    return cuts.value.filter((item) => item.checked);
  });
  const selectedCut = computed(() => {
    return cuts.value.find((item) => item.id === selectCutId.value);
  });
  const selectCut = (id) => {
    selectCutId.value = id;
  };
  const init = (segments) => {
    rawCuts.value = [];
    index.value = 0;
    segments.forEach((segment) => {
      if (!segment.start) segment.start = 0;
      addSegment(segment);
    });
  };
  const addSegment = (cut2) => {
    const data = {
      id: v4(),
      ...cut2,
      index: index.value,
      // 新增 index 字段
      loading: false
    };
    rawCuts.value.push(data);
    index.value++;
    selectCutId.value = data.id;
    recordHistory();
    emit("add", { segment: data });
  };
  const insertSegmentAfter = (afterId, cut2) => {
    const targetIndex = rawCuts.value.findIndex((item) => item.id === afterId);
    if (targetIndex === -1) return null;
    const data = {
      id: v4(),
      ...cut2,
      index: index.value,
      loading: false
    };
    rawCuts.value.splice(targetIndex + 1, 0, data);
    index.value++;
    selectCutId.value = data.id;
    recordHistory();
    emit("add", { segment: data });
    return data;
  };
  const removeSegment = (id) => {
    const idx = rawCuts.value.findIndex((item) => item.id === id);
    if (idx !== -1) {
      rawCuts.value.splice(idx, 1);
      if (selectCutId.value === id) {
        if (rawCuts.value.length > 0) {
          selectCutId.value = rawCuts.value[rawCuts.value.length - 1].id;
        } else {
          selectCutId.value = null;
        }
      }
      subtitleStore.removeBySourceId(id);
      recordHistory();
      emit("remove", { id });
    }
  };
  const updateSegment = (id, options2, ignoreHistory = false) => {
    const cut2 = rawCuts.value.find((item) => item.id === id);
    if (cut2) {
      Object.assign(cut2, options2);
      if (!ignoreHistory) {
        recordHistory();
      }
      emit("update", { segment: cut2 });
    }
  };
  const toggleSegment = (id) => {
    const cut2 = rawCuts.value.find((item) => item.id === id);
    if (cut2) {
      cut2.checked = !cut2.checked;
      emit("update", { segment: cut2 });
      recordHistory();
    }
  };
  const mergeForward = (id) => {
    const currentIndex = rawCuts.value.findIndex((item) => item.id === id);
    if (currentIndex <= 0) return false;
    const currentSegment = rawCuts.value[currentIndex];
    const previousSegment = rawCuts.value[currentIndex - 1];
    const start2 = Math.min(currentSegment.start, previousSegment.start);
    const end = Math.max(currentSegment.end || 0, previousSegment.end || 0);
    currentSegment.start = start2;
    currentSegment.end = end;
    if (!currentSegment.name && previousSegment.name) {
      currentSegment.name = previousSegment.name;
    }
    const previousSegmentLyrics = subtitleStore.getBySourceId(previousSegment.id)?.[0]?.content;
    if (previousSegmentLyrics) {
      const currentSegmentLyrics = subtitleStore.getBySourceId(currentSegment.id)?.[0]?.content;
      subtitleStore.setForSegment(
        currentSegment.id,
        previousSegmentLyrics + (currentSegmentLyrics ? `
${currentSegmentLyrics}` : "")
      );
    }
    rawCuts.value.splice(currentIndex - 1, 1);
    recordHistory();
    emit("update", { segment: currentSegment });
    emit("remove", { id: previousSegment.id });
    return true;
  };
  const mergeBackward = (id) => {
    const currentIndex = rawCuts.value.findIndex((item) => item.id === id);
    if (currentIndex === -1 || currentIndex >= rawCuts.value.length - 1) return false;
    const currentSegment = rawCuts.value[currentIndex];
    const nextSegment = rawCuts.value[currentIndex + 1];
    const start2 = Math.min(currentSegment.start, nextSegment.start);
    const end = Math.max(currentSegment.end || 0, nextSegment.end || 0);
    currentSegment.start = start2;
    currentSegment.end = end;
    if (!currentSegment.name && nextSegment.name) {
      currentSegment.name = nextSegment.name;
    }
    const nextSegmentLyrics = subtitleStore.getBySourceId(nextSegment.id)?.[0]?.content;
    if (nextSegmentLyrics) {
      const currentSegmentLyrics = subtitleStore.getBySourceId(currentSegment.id)?.[0]?.content;
      subtitleStore.setForSegment(
        currentSegment.id,
        currentSegmentLyrics ? `${currentSegmentLyrics}
${nextSegmentLyrics}` : nextSegmentLyrics
      );
    }
    rawCuts.value.splice(currentIndex + 1, 1);
    recordHistory();
    emit("update", { segment: currentSegment });
    emit("remove", { id: nextSegment.id });
    return true;
  };
  const clear = () => {
    rawCuts.value = [];
    index.value = 0;
    selectCutId.value = null;
    subtitleStore.clear();
    recordHistory();
    emit("clear");
  };
  const getCombinedLyrics = () => {
    const segments = cuts.value.map((seg) => ({
      id: seg.id,
      start: seg.start,
      end: seg.end
    }));
    const content = subtitleStore.getCombinedForSegments(segments);
    return content;
  };
  return {
    cuts,
    selectedCuts,
    selectedCut,
    selectCutId,
    selectCut,
    duration,
    rawCuts,
    addSegment,
    insertSegmentAfter,
    removeSegment,
    updateSegment,
    toggleSegment,
    mergeForward,
    mergeBackward,
    clearHistory,
    undo,
    redo,
    init,
    clear,
    on,
    off,
    index,
    getCombinedLyrics
  };
});
export {
  Parser as P,
  useUserInfoStore as a,
  formatWebhookTitle as b,
  cloneDeep as c,
  useAppConfig as d,
  ffmpegPreset as e,
  formatWebhookPartTitle as f,
  useQueueStore as g,
  useFfmpegPreset as h,
  danmuPreset as i,
  bili as j,
  useSegmentStore as k,
  useUploadPreset as l,
  useSubtitles as m,
  userApi as n,
  task as t,
  useDanmuPreset as u,
  videoPreset as v
};
