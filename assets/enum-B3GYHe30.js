var TaskType;
(function(TaskType2) {
  TaskType2["danmu"] = "danmu";
  TaskType2["ffmpeg"] = "ffmpeg";
  TaskType2["bili"] = "bili";
  TaskType2["biliUpload"] = "biliUpload";
  TaskType2["biliDownload"] = "biliDownload";
  TaskType2["douyuDownload"] = "douyuDownload";
  TaskType2["subtitleTranslate"] = "subtitleTranslate";
})(TaskType || (TaskType = {}));
var NotificationType;
(function(NotificationType2) {
  NotificationType2["server"] = "server";
  NotificationType2["mail"] = "mail";
  NotificationType2["tg"] = "tg";
  NotificationType2["system"] = "system";
  NotificationType2["ntfy"] = "ntfy";
  NotificationType2["allInOne"] = "allInOne";
})(NotificationType || (NotificationType = {}));
var LLMType;
(function(LLMType2) {
  LLMType2["ollama"] = "ollama";
})(LLMType || (LLMType = {}));
export {
  NotificationType as N,
  TaskType as T
};
