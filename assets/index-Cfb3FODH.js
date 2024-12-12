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
  const invalidChars = ["/", "\\\\", ":", "*", "?", '"', "<", ">", "|"];
  const sanitizedFileName = fileName.replace(
    new RegExp("[" + invalidChars.join("") + "]", "g"),
    " "
  );
  return sanitizedFileName;
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
  "mkv"
];
function formatFile(filepath) {
  const formatFile2 = window.path.parse(filepath);
  return { ...formatFile2, path: filepath, filename: formatFile2.base };
}
export {
  sanitizeFileName as a,
  secondsToTimemark as b,
  formatSeconds as c,
  deepRaw as d,
  formatFile as f,
  supportedVideoExtensions as s,
  uuid as u
};
