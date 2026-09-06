import { C as CryptoJS } from "./_plugin-vue_export-helper-uo42igUt.js";
import "./index-CB8xvhFr.js";
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
function filenamify(string, options = {}) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }
  const replacement = options.replacement ?? "!";
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
  const allowedLength = typeof options.maxLength === "number" ? options.maxLength : MAX_FILENAME_LENGTH;
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
  if (!date) return "--";
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
const formatDuration = (duration, zeroText = "--") => {
  if (!duration || duration <= 0) return zeroText;
  return secondsToTimemark(duration);
};
const normalizeTimestamp = (timestamp) => {
  if (!timestamp) return null;
  return timestamp < 1e10 ? timestamp * 1e3 : timestamp;
};
function formatRecentRecordTime(timestamp, options) {
  const normalizedTimestamp = normalizeTimestamp(timestamp);
  if (!normalizedTimestamp) return "--";
  const now = options?.now ?? Date.now();
  const diff = now - normalizedTimestamp;
  if (diff < 0) {
    return "--";
  }
  const minute = 60 * 1e3;
  const hour = 60 * minute;
  const day = 24 * hour;
  const fiveDays = 5 * day;
  if (diff < minute) {
    return "刚刚";
  }
  if (diff < hour) {
    return `${Math.floor(diff / minute)} 分钟前`;
  }
  if (diff < day) {
    return `${Math.floor(diff / hour)} 小时前`;
  }
  if (diff <= fiveDays) {
    return `${Math.floor(diff / day)} 天前`;
  }
  return formatTime(normalizedTimestamp);
}
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
function generateHMACSHA256(message, secretKey) {
  const messageUtf8 = CryptoJS.enc.Utf8.parse(message);
  const secretKeyUtf8 = CryptoJS.enc.Utf8.parse(secretKey);
  const hmac = CryptoJS.HmacSHA256(messageUtf8, secretKeyUtf8);
  return hmac.toString(CryptoJS.enc.Hex);
}
function sha256(message) {
  return CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
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
export {
  supportedVideoExtensions as a,
  formatFile as b,
  filenamify as c,
  deepRaw as d,
  sanitizeFileName as e,
  formatTime as f,
  formatRecentRecordTime as g,
  secondsToTimemark as h,
  generateDistinctColor as i,
  formatSeconds as j,
  formatDuration as k,
  generateHMACSHA256 as l,
  sha256 as s,
  uuid as u
};
