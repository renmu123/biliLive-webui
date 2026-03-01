import { p as c, aP as commonVariables } from "./index-gjuLIDoI.js";
const {
  cubicBezierEaseInOut,
  cubicBezierEaseOut,
  cubicBezierEaseIn
} = commonVariables;
function fadeInHeightExpandTransition({
  overflow = "hidden",
  duration = ".3s",
  originalTransition = "",
  leavingDelay = "0s",
  foldPadding = false,
  enterToProps = void 0,
  leaveToProps = void 0,
  reverse = false
} = {}) {
  const enterClass = reverse ? "leave" : "enter";
  const leaveClass = reverse ? "enter" : "leave";
  return [c(`&.fade-in-height-expand-transition-${leaveClass}-from,
 &.fade-in-height-expand-transition-${enterClass}-to`, Object.assign(Object.assign({}, enterToProps), {
    opacity: 1
  })), c(`&.fade-in-height-expand-transition-${leaveClass}-to,
 &.fade-in-height-expand-transition-${enterClass}-from`, Object.assign(Object.assign({}, leaveToProps), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: foldPadding ? "0 !important" : void 0,
    paddingBottom: foldPadding ? "0 !important" : void 0
  })), c(`&.fade-in-height-expand-transition-${leaveClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 opacity ${duration} ${cubicBezierEaseOut} ${leavingDelay},
 margin-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 margin-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay}
 ${originalTransition ? `,${originalTransition}` : ""}
 `), c(`&.fade-in-height-expand-transition-${enterClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut},
 opacity ${duration} ${cubicBezierEaseIn},
 margin-top ${duration} ${cubicBezierEaseInOut},
 margin-bottom ${duration} ${cubicBezierEaseInOut},
 padding-top ${duration} ${cubicBezierEaseInOut},
 padding-bottom ${duration} ${cubicBezierEaseInOut}
 ${originalTransition ? `,${originalTransition}` : ""}
 `)];
}
const qualityOptions = [
  { value: "highest", label: "最高" },
  { value: "high", label: "高" },
  { value: "medium", label: "中" },
  { value: "low", label: "低" },
  { value: "lowest", label: "最低" }
];
const biliQualityOptions = [
  {
    value: 25e3,
    label: "原画真彩(25000)"
  },
  {
    value: 1e4,
    label: "原画(10000)"
  },
  {
    value: 3e4,
    label: "杜比(30000)"
  },
  {
    value: 2e4,
    label: "4K(20000)"
  },
  {
    value: 15e3,
    label: "2K(15000)"
  },
  {
    value: 400,
    label: "蓝光(400)"
  },
  {
    value: 250,
    label: "超清(250)"
  },
  {
    value: 150,
    label: "高清(150)"
  },
  {
    value: 80,
    label: "流畅(80)"
  }
];
const douyuQualityOptions = [
  {
    value: 0,
    label: "原画"
  },
  {
    value: 8,
    label: "蓝光8M"
  },
  {
    value: 4,
    label: "蓝光4M"
  },
  {
    value: 3,
    label: "超清"
  },
  {
    value: 2,
    label: "高清"
  }
];
const douyuSourceOptions = [
  {
    value: "auto",
    label: "自动"
  },
  {
    value: "scdnctshh",
    label: "线路1(scdnctshh)"
  },
  {
    value: "tctc-h5",
    label: "线路4(tctc-h5)"
  },
  {
    value: "tct-h5",
    label: "线路5(tct-h5)"
  },
  {
    value: "ali-h5",
    label: "线路6(ali-h5)"
  },
  {
    value: "hw-h5",
    label: "线路7(hw-h5)"
  },
  {
    value: "hs-h5",
    label: "线路13(hs-h5)"
  }
];
const huyaSourceOptions = [
  {
    value: "auto",
    label: "自动"
  },
  {
    value: "AL",
    label: "阿里(AL)"
  },
  {
    value: "TX",
    label: "腾讯(TX)"
  },
  {
    value: "HW",
    label: "华为(HW)"
  },
  {
    value: "HS",
    label: "火山(HS)"
  },
  {
    value: "WS",
    label: "网宿(WS)"
  },
  {
    value: "AL13",
    label: "阿里13(AL13)"
  },
  {
    value: "TX15",
    label: "腾讯15(TX15)"
  },
  {
    value: "HW16",
    label: "华为16(HW16)"
  },
  {
    value: "HYZJ",
    label: "虎牙自建(HYZJ)"
  }
];
const huyaQualityOptions = [
  {
    value: 0,
    label: "原画"
  },
  {
    value: -1,
    label: "真原画"
  },
  {
    value: 2e4,
    label: "蓝光20M"
  },
  {
    value: 1e4,
    label: "蓝光10M"
  },
  {
    value: 8e3,
    label: "蓝光8M"
  },
  {
    value: 4e3,
    label: "蓝光4M"
  },
  {
    value: 2e3,
    label: "超清"
  },
  {
    value: 500,
    label: "流畅"
  },
  {
    value: 14100,
    label: "2K HDR"
  },
  {
    value: 14e3,
    label: "2K"
  },
  {
    value: 4200,
    label: "HDR(10M)"
  }
];
const douyinQualityOptions = [
  {
    value: "origin",
    label: "原画"
  },
  {
    value: "uhd",
    label: "蓝光"
  },
  {
    value: "hd",
    label: "超清"
  },
  {
    value: "sd",
    label: "高清"
  },
  {
    value: "ld",
    label: "标清"
  },
  {
    value: "ao",
    label: "音频流"
  },
  {
    value: "real_origin",
    label: "真原画"
  }
];
const biliStreamFormatOptions = [
  {
    value: "auto",
    label: "自动"
  },
  {
    label: "优先flv",
    value: "flv"
  },
  {
    label: "优先hls(fmp4)",
    value: "fmp4"
  },
  {
    label: "优先hls(ts)",
    value: "hls"
  },
  {
    label: "强制flv",
    value: "flv_only"
  },
  {
    label: "强制hls(fmp4)",
    value: "fmp4_only"
  },
  {
    label: "强制hls(ts)",
    value: "hls_only"
  }
];
const streamCodecOptions = [
  {
    value: "auto",
    label: "自动"
  },
  {
    label: "优先avc",
    value: "avc"
  },
  {
    label: "优先hevc",
    value: "hevc"
  },
  {
    label: "强制avc",
    value: "avc_only"
  },
  {
    label: "强制hevc",
    value: "hevc_only"
  }
];
const videoFormatOptions = [
  {
    value: "auto",
    label: "自动"
  },
  {
    value: "ts",
    label: "TS"
  },
  {
    value: "mkv",
    label: "MKV"
  },
  {
    value: "flv",
    label: "FLV"
  }
];
const recorderTypeOptions = [
  {
    value: "auto",
    label: "自动"
  },
  {
    value: "ffmpeg",
    label: "ffmpeg优先"
  },
  {
    value: "mesio",
    label: "mesio优先"
  },
  {
    value: "bililive",
    label: "录播姬引擎优先"
  }
];
const recorderDebugLevelOptions = [
  {
    value: "none",
    label: "关闭"
  },
  {
    value: "basic",
    label: "基础"
  },
  {
    value: "verbose",
    label: "详细"
  }
];
const douyinStreamFormatOptions = [
  {
    value: "auto",
    label: "自动"
  },
  {
    label: "优先flv",
    value: "flv"
  },
  {
    label: "优先hls",
    value: "hls"
  },
  {
    label: "强制flv",
    value: "flv_only"
  },
  {
    label: "强制hls",
    value: "hls_only"
  }
];
const douyinApiTypeOptions = [
  { label: "随机", value: "random" },
  { label: "web接口", value: "web" },
  { label: "mobile接口", value: "mobile" },
  { label: "直播html解析", value: "webHTML" },
  { label: "用户html解析", value: "userHTML" },
  { label: "测试：负载均衡", value: "balance" }
];
const huyaApiTypeOptions = [
  { label: "自动", value: "auto" },
  { label: "web", value: "web" },
  { label: "mp", value: "mp" },
  { label: "wup", value: "wup" }
];
const qualityRetry = {
  text: "流匹配重试次数",
  tip: "根据次数强制查询匹配画质及其他强制参数，在未选择原画的情况下，可能会导致开头漏录。匹配次数结束后如果无法匹配对应画质时会自动选择其他画质，-1为强制匹配"
};
const quality = {
  text: "画质",
  tip: "如果无法找到对应画质，会结合其他选项后选择更清晰的画质"
};
const textInfo = {
  common: {
    format: {
      text: "视频格式",
      tip: "ffmpeg录制器：选择自动时，分段为ts，不分段为fmp4<br/>FLV存在分辨率变化或参数变化会花屏，请尝试修复<br/>mesio和录播姬引擎不支持指定"
    },
    recorderType: {
      text: "录制器",
      tip: "影响最底层的录制，自动选择默认使用ffmpeg。\n如果使用ffmpeg经常出现问题，如时间戳跳变，卡顿，音画不同步等，可以尝试切换mesio或录播姬引擎，录播姬引擎不支持只录制音频<b>目前仅推荐小规模测试使用</b>"
    },
    titleKeywords: {
      text: "禁止标题关键词",
      tip: "如果直播间标题包含这些关键词，则不会自动录制，多个关键词请用英文逗号分隔，或者使用正则表达式（如：/回放|录播/i），录制中的直播隔约每五分钟会查询接口检查，手动录制的不会被影响",
      placeholder: "例如：回放,录播,重播 或 /回放|录播/i"
    }
  },
  bili: {
    uid: {
      text: "录制账号",
      tip: "B站只有登录才能录制清晰画质，推荐使用小号避免可能的风控"
    },
    useM3U8Proxy: {
      text: "避免hls自动分段",
      tip: "由于B站hls流存在过期时间，ffmpeg命令行无法处理导致会被一小时强制分段，通过本地代理可以避免分段，但是会增加网络请求以及可能的不稳定性"
    },
    customHost: {
      text: "自定义Host",
      tip: "用于替换直播流链接中的host，用于使用自定义CDN或代理服务器，留空则使用B站原始host，此参数不存在校验，请自行注意可用性，可参考 https://rec.danmuji.org/dev/cdn-info/ 文档"
    },
    quality,
    qualityRetry,
    formatName: {
      text: "流格式",
      tip: "默认优先flv模式，其fmp4，最后为ts"
    },
    codecName: {
      text: "流编码",
      tip: "默认优先avc模式"
    }
  },
  douyu: {
    qualityRetry,
    quality
  },
  huya: {
    qualityRetry,
    quality,
    api: {
      text: "请求接口",
      tip: `为了星秀区而增加的参数，具体自己看文档吧~`
    }
  },
  douyin: {
    qualityRetry,
    quality: {
      text: "画质",
      tip: "如果无法找到对应画质，会结合其他选项后选择更清晰的画质，<b>真原画画质可能导致PK花屏</b>"
    },
    formatName: {
      text: "流格式",
      tip: "默认优先flv模式，其次hls"
    },
    api: {
      text: "请求接口",
      tip: `不同的接口对应的底层不同，如果哪天用不了，你也可以切切看，mobile和用户html解析接口必须在3.1.0及以后版本使用才能生效，更多区别见文档。<br/>
            mobile接口也许支持电台直播，该接口对IP有要求<br/>
            web接口支持双屏直播参数<br/>
            PS: mobile看起来更不容易触发风控，直播html接口是真容易触发风控`
    }
  }
};
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
const eventBus = mitt();
export {
  recorderDebugLevelOptions as a,
  biliQualityOptions as b,
  biliStreamFormatOptions as c,
  douyuQualityOptions as d,
  douyuSourceOptions as e,
  fadeInHeightExpandTransition as f,
  douyinStreamFormatOptions as g,
  huyaQualityOptions as h,
  huyaSourceOptions as i,
  huyaApiTypeOptions as j,
  douyinQualityOptions as k,
  douyinApiTypeOptions as l,
  eventBus as m,
  qualityOptions as q,
  recorderTypeOptions as r,
  streamCodecOptions as s,
  textInfo as t,
  videoFormatOptions as v
};
