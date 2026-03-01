var TaskType;
(function(TaskType2) {
  TaskType2["danmu"] = "danmu";
  TaskType2["ffmpeg"] = "ffmpeg";
  TaskType2["bili"] = "bili";
  TaskType2["biliUpload"] = "biliUpload";
  TaskType2["biliDownload"] = "biliDownload";
  TaskType2["douyuDownload"] = "douyuDownload";
  TaskType2["m3u8Download"] = "m3u8Download";
  TaskType2["huyaDownload"] = "huyaDownload";
  TaskType2["kuaishouDownload"] = "kuaishouDownload";
  TaskType2["douyinLiveDownload"] = "douyinLiveDownload";
  TaskType2["subtitleTranslate"] = "subtitleTranslate";
  TaskType2["sync"] = "sync";
  TaskType2["flvRepair"] = "flvRepair";
})(TaskType || (TaskType = {}));
var NotificationType;
(function(NotificationType2) {
  NotificationType2["server"] = "server";
  NotificationType2["mail"] = "mail";
  NotificationType2["tg"] = "tg";
  NotificationType2["system"] = "system";
  NotificationType2["ntfy"] = "ntfy";
  NotificationType2["allInOne"] = "allInOne";
  NotificationType2["customHttp"] = "customHttp";
})(NotificationType || (NotificationType = {}));
var LLMType;
(function(LLMType2) {
  LLMType2["ollama"] = "ollama";
})(LLMType || (LLMType = {}));
const nvencPresets = [
  {
    value: "p1",
    label: "fastest"
  },
  {
    value: "p2",
    label: "faster"
  },
  {
    value: "p3",
    label: "fast"
  },
  {
    value: "p4",
    label: "medium"
  },
  {
    value: "p5",
    label: "slow"
  },
  {
    value: "p6",
    label: "slower"
  },
  {
    value: "p7",
    label: "slowest"
  }
];
const qsvPresets = [
  {
    value: "veryfast",
    label: "veryfast"
  },
  {
    value: "faster",
    label: "faster"
  },
  {
    value: "fast",
    label: "fast"
  },
  {
    value: "medium",
    label: "medium"
  },
  {
    value: "slow",
    label: "slow"
  },
  {
    value: "slower",
    label: "slower"
  },
  {
    value: "veryslow",
    label: "veryslow"
  }
];
const cpuPresets = [
  {
    value: "ultrafast",
    label: "ultrafast"
  },
  {
    value: "superfast",
    label: "superfast"
  },
  {
    value: "veryfast",
    label: "veryfast"
  },
  {
    value: "faster",
    label: "faster"
  },
  {
    value: "fast",
    label: "fast"
  },
  {
    value: "medium",
    label: "medium"
  },
  {
    value: "slow",
    label: "slow"
  },
  {
    value: "slower",
    label: "slower"
  },
  {
    value: "veryslow",
    label: "veryslow"
  },
  {
    value: "placebo",
    label: "placebo"
  }
];
const amfPresets = [
  {
    value: "speed",
    label: "speed"
  },
  {
    value: "balanced",
    label: "balanced"
  },
  {
    value: "quality",
    label: "quality"
  }
];
const amfAv1Presets = [
  ...amfPresets,
  {
    value: "high_quality",
    label: "high quality"
  }
];
const videoEncoders = [
  {
    value: "copy",
    label: "copy(复制流)",
    birateControls: [
      {
        value: "CRF",
        label: "CRF"
      }
    ]
  },
  {
    value: "libx264",
    label: "H.264(x264)",
    birateControls: [
      {
        value: "CRF",
        label: "CRF"
      },
      {
        value: "VBR",
        label: "平均比特率"
      }
    ],
    presets: cpuPresets
  },
  {
    value: "h264_qsv",
    label: "H.264(Intel QSV)",
    birateControls: [
      {
        value: "ICQ",
        label: "ICQ"
      },
      {
        value: "VBR",
        label: "平均比特率"
      }
    ],
    presets: qsvPresets
  },
  {
    value: "h264_nvenc",
    label: "H.264(NVIDIA NVEnc)",
    birateControls: [
      {
        value: "CQ",
        label: "CQ"
      },
      {
        value: "VBR",
        label: "平均比特率"
      }
    ],
    presets: nvencPresets
  },
  {
    value: "h264_amf",
    label: "H.264(AMD AMF)",
    birateControls: [
      {
        value: "VBR",
        label: "平均比特率"
      }
    ],
    presets: amfPresets
  },
  {
    value: "libx265",
    label: "H.265(x265)",
    birateControls: [
      {
        value: "CRF",
        label: "CRF"
      },
      {
        value: "VBR",
        label: "平均比特率"
      }
    ],
    presets: cpuPresets
  },
  {
    value: "hevc_qsv",
    label: "H.265(Intel QSV)",
    birateControls: [
      {
        value: "ICQ",
        label: "ICQ"
      },
      {
        value: "VBR",
        label: "平均比特率"
      }
    ],
    presets: qsvPresets
  },
  {
    value: "hevc_nvenc",
    label: "H.265(NVIDIA NVEnc)",
    birateControls: [
      {
        value: "CQ",
        label: "CQ"
      },
      {
        value: "VBR",
        label: "平均比特率"
      }
    ],
    presets: nvencPresets
  },
  {
    value: "hevc_amf",
    label: "H.265(AMD AMF)",
    birateControls: [
      {
        value: "VBR",
        label: "平均比特率"
      }
    ],
    presets: amfPresets
  },
  {
    value: "libsvtav1",
    label: "AV1 (libsvtav1)",
    birateControls: [
      {
        value: "CRF",
        label: "CRF"
      },
      {
        value: "VBR",
        label: "平均比特率"
      }
    ],
    presets: [
      {
        value: "0",
        label: "0"
      },
      {
        value: "1",
        label: "1"
      },
      {
        value: "2",
        label: "2"
      },
      {
        value: "3",
        label: "3"
      },
      {
        value: "4",
        label: "4"
      },
      {
        value: "5",
        label: "5"
      },
      {
        value: "6",
        label: "6"
      },
      {
        value: "7",
        label: "7"
      },
      {
        value: "8",
        label: "8"
      },
      {
        value: "9",
        label: "9"
      },
      {
        value: "10",
        label: "10"
      },
      {
        value: "11",
        label: "11"
      },
      {
        value: "12",
        label: "12"
      },
      {
        value: "13",
        label: "13"
      }
    ]
  },
  {
    value: "av1_qsv",
    label: "AV1 (Intel QSV)",
    birateControls: [
      {
        value: "ICQ",
        label: "ICQ"
      },
      {
        value: "VBR",
        label: "平均比特率"
      }
    ],
    presets: qsvPresets
  },
  {
    value: "av1_nvenc",
    label: "AV1 (NVIDIA NVEnc)",
    birateControls: [
      {
        value: "CQ",
        label: "CQ"
      },
      {
        value: "VBR",
        label: "平均比特率"
      }
    ],
    presets: nvencPresets
  },
  {
    value: "av1_amf",
    label: "AV1 (AMD AMF)",
    birateControls: [
      {
        value: "VBR",
        label: "平均比特率"
      }
    ],
    presets: amfAv1Presets
  }
];
const defaultRecordConfig = {
  providerId: "DouYu",
  channelId: "",
  segment: "60",
  quality: "highest",
  disableProvideCommentsWhenRecording: false,
  saveGiftDanma: false,
  saveSCDanma: true,
  streamPriorities: [],
  sourcePriorities: [],
  disableAutoCheck: false,
  sendToWebhook: false,
  noGlobalFollowFields: [],
  saveCover: false,
  extra: {},
  qualityRetry: 0,
  formatName: "auto",
  useM3U8Proxy: false,
  codecName: "auto",
  titleKeywords: "",
  liveStartNotification: false,
  liveEndNotification: false,
  weight: 10,
  source: "auto",
  videoFormat: "auto",
  recorderType: "ffmpeg",
  cookie: "",
  doubleScreen: true,
  useServerTimestamp: false,
  handleTime: [null, null],
  debugLevel: "none",
  api: "web"
};
export {
  NotificationType as N,
  TaskType as T,
  defaultRecordConfig as d,
  videoEncoders as v
};
