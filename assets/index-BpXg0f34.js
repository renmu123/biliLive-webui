import { cf as cloneArrayBuffer, aR as Symbol$1, cg as cloneTypedArray, ch as isObjectLike, aW as baseUnary, ci as nodeUtil, ap as isObject, cj as isBuffer, ck as cloneBuffer, cl as initCloneObject, cm as Stack, aS as isArray, cn as assignValue, k as api, co as defineStore, r as ref, x as computed, a4 as storeToRefs, a5 as watch, ca as readonly } from "./index-gjuLIDoI.js";
import { C as CryptoJS, c as config } from "./_plugin-vue_export-helper-B1lyReKF.js";
import { g as getTag, b as getAllKeys } from "./_getTag-NYFG1GAg.js";
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
function filenameReservedRegex() {
  return /[<>:"/\\|?*\u0000-\u001F]|[. ]$/g;
}
function windowsReservedNameRegex() {
  return /^(con|prn|aux|nul|com\d|lpt\d)$/i;
}
const MAX_FILENAME_LENGTH = 100;
const reRelativePath = /^\.+(\\|\/)|^\.+$/;
const reTrailingDotsAndSpaces = /[. ]+$/;
const reControlChars = /[\p{Control}\p{Format}\p{Zl}\p{Zp}\uFFF0-\uFFFF]/gu;
const reControlCharsTest = /[\p{Control}\p{Format}\p{Zl}\p{Zp}\uFFF0-\uFFFF]/u;
const isZeroWidthJoiner = (char) => char === "‍";
const reRepeatedReservedCharacters = /([<>:"/\\|?*\u0000-\u001F]){2,}/g;
const reUnicodeWhitespace = /[\t\n\r\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]+/g;
let segmenter;
function getSegmenter() {
  segmenter ??= new Intl.Segmenter(void 0, { granularity: "grapheme" });
  return segmenter;
}
function filenamify(string, options2 = {}) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }
  const replacement = options2.replacement ?? "!";
  if (filenameReservedRegex().test(replacement) || [...replacement].some((char) => reControlCharsTest.test(char) && !isZeroWidthJoiner(char))) {
    throw new Error("Replacement string cannot contain reserved filename characters");
  }
  string = string.normalize("NFC");
  string = string.replaceAll(reUnicodeWhitespace, " ");
  if (replacement.length > 0) {
    string = string.replaceAll(reRepeatedReservedCharacters, "$1");
  }
  string = string.replace(reTrailingDotsAndSpaces, "");
  string = string.replace(reRelativePath, replacement);
  string = string.replace(filenameReservedRegex(), replacement);
  string = string.replaceAll(reControlChars, (char) => isZeroWidthJoiner(char) ? char : replacement);
  if (string.length === 0) {
    string = replacement;
  }
  string = windowsReservedNameRegex().test(string) ? string + replacement : string;
  const allowedLength = typeof options2.maxLength === "number" ? options2.maxLength : MAX_FILENAME_LENGTH;
  if (string.length > allowedLength) {
    const extensionIndex = string.lastIndexOf(".");
    if (extensionIndex === -1) {
      string = truncateByGraphemeBudget(string, allowedLength);
    } else {
      const filename = string.slice(0, extensionIndex);
      const extension = string.slice(extensionIndex);
      const baseBudget = Math.max(0, allowedLength - extension.length);
      string = truncateByGraphemeBudget(filename, baseBudget) + extension;
    }
  }
  return string;
}
function truncateByGraphemeBudget(input, budget) {
  if (input.length <= budget) {
    return input;
  }
  let count = 0;
  let output = "";
  for (const { segment } of getSegmenter().segment(input)) {
    const next = count + segment.length;
    if (next > budget) {
      break;
    }
    output += segment;
    count = next;
  }
  return output;
}
const deepRaw = (data) => {
  return JSON.parse(JSON.stringify(data));
};
const uuid = () => {
  return Math.random().toString(36).slice(2);
};
function formatSeconds(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  if (hours === 0 && minutes === 0) {
    return `${String(remainingSeconds)}秒`;
  }
  if (hours === 0) {
    return `${String(minutes)}分钟${String(remainingSeconds).padStart(2, "0")}秒`;
  }
  const formattedTime = `${String(hours).padStart(2, "0")}小时${String(minutes).padStart(
    2,
    "0"
  )}分钟${String(remainingSeconds).padStart(2, "0")}秒`;
  return formattedTime;
}
function sanitizeFileName(fileName) {
  return filenamify(fileName, { replacement: "_" });
}
function secondsToTimemark(seconds, showMilliseconds = true) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  const secs = seconds % 60;
  const milliseconds = Math.round(secs % 1 * 1e3);
  const secsFloor = Math.floor(secs);
  const hoursStr = hours.toString().padStart(2, "0");
  const minutesStr = minutes.toString().padStart(2, "0");
  const secsStr = secsFloor.toString().padStart(2, "0");
  const millisecondsStr = milliseconds.toString().padStart(3, "0");
  if (!showMilliseconds) {
    const timemark = `${hoursStr}:${minutesStr}:${secsStr}.${millisecondsStr}`;
    return timemark;
  } else {
    const timemark = `${hoursStr}:${minutesStr}:${secsStr}`;
    return timemark;
  }
}
const formatTime = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
const supportedVideoExtensions = [
  "mp4",
  "flv",
  "avi",
  "wmv",
  "mov",
  "webm",
  "mpeg",
  "ts",
  "mpg",
  "rm",
  "rmvb",
  "mkv",
  "m4s"
];
function formatFile(filepath) {
  const formatFile2 = window.path.parse(filepath);
  return { ...formatFile2, path: filepath, filename: formatFile2.base };
}
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function generateHMACSHA256(message, secretKey) {
  const messageUtf8 = CryptoJS.enc.Utf8.parse(message);
  const secretKeyUtf8 = CryptoJS.enc.Utf8.parse(secretKey);
  const hmac = CryptoJS.HmacSHA256(messageUtf8, secretKeyUtf8);
  return hmac.toString(CryptoJS.enc.Hex);
}
function sha256(message) {
  return CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
}
function replaceExtName(filePath, newExtName) {
  return window.path.join(
    window.path.dirname(filePath),
    window.path.basename(filePath, window.path.extname(filePath)) + newExtName
  );
}
const generateDistinctColor = (index, active = true) => {
  const goldenRatio = 0.618033988749895;
  const hue = index * goldenRatio * 360 % 360;
  let saturation = 65;
  let lightness = 60;
  let alpha = 0.5;
  if (!active) {
    saturation = 30;
    lightness = 50;
    alpha = 0.35;
  }
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
};
function buildRoomLink(platform, roomId) {
  const platformLower = platform.toLowerCase();
  const platformRoomLinkMap = {
    bilibili: (id) => `https://live.bilibili.com/${id}`,
    huya: (id) => `https://www.huya.com/${id}`,
    douyu: (id) => `https://www.douyu.com/${id}`,
    douyin: (id) => `https://live.douyin.com/${id}`
  };
  const link = platformRoomLinkMap[platformLower]?.(roomId);
  return link ?? null;
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
const userApi = {
  getList: getUserList,
  refresh,
  delete: deleteUser,
  updateAuth,
  getCookie
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
  const uploadPreset = ref({
    config: {}
  });
  async function getUploadPresets() {
    uploadPresets.value = await videoPreset.list();
  }
  const uploaPresetsOptions = computed(() => {
    return uploadPresets.value.map((item) => {
      return {
        label: item.name,
        value: item.id
      };
    });
  });
  getUploadPresets();
  return {
    uploadPresets,
    getUploadPresets,
    uploaPresetsOptions,
    upladPresetId,
    uploadPreset
  };
});
const useQueueStore = defineStore("queue", () => {
  const runningTaskNum = ref(0);
  const queue = ref([]);
  const params = ref({ type: "" });
  const getQuenu = async () => {
    const res = await task.list(params.value);
    if (isArray(res)) {
      queue.value = res.reverse();
    } else {
      queue.value = res.list.reverse();
    }
  };
  const setRunningTaskNum = (num) => {
    runningTaskNum.value = num;
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
    setRunningTaskNum
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
        exportSubtitle: true
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
    currentSegment.start = previousSegment.start;
    if (!currentSegment.name && previousSegment.name) {
      currentSegment.name = previousSegment.name;
    }
    if (previousSegment.lyrics) {
      currentSegment.lyrics = (previousSegment.lyrics || "") + "\n" + (currentSegment.lyrics || "");
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
    currentSegment.end = nextSegment.end;
    if (!currentSegment.name && nextSegment.name) {
      currentSegment.name = nextSegment.name;
    }
    if (nextSegment.lyrics) {
      currentSegment.lyrics = (currentSegment.lyrics || "") + "\n" + (nextSegment.lyrics || "");
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
    recordHistory();
    emit("clear");
  };
  const getCombinedLyrics = () => {
    return cuts.value.filter((segment) => segment.lyrics).map((segment) => segment.lyrics).join("\n");
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
  userApi as A,
  useUserInfoStore as a,
  uuid as b,
  cloneDeep as c,
  useAppConfig as d,
  ffmpegPreset as e,
  formatTime as f,
  deepRaw as g,
  useQueueStore as h,
  useFfmpegPreset as i,
  sleep as j,
  danmuPreset as k,
  buildRoomLink as l,
  useUploadPreset as m,
  supportedVideoExtensions as n,
  formatFile as o,
  filenamify as p,
  sanitizeFileName as q,
  replaceExtName as r,
  sha256 as s,
  task as t,
  useDanmuPreset as u,
  videoPreset as v,
  useSegmentStore as w,
  secondsToTimemark as x,
  generateDistinctColor as y,
  formatSeconds as z
};
