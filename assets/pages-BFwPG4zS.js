import { d0 as router } from "./index-CB8xvhFr.js";
import "./_plugin-vue_export-helper-uo42igUt.js";
import { a as recordHistoryApi, r as recoder } from "./recordHistory-CX6UkL3E.js";
import { c as common } from "./common-1CgNZfMf.js";
async function toVideoPlayerPage(opts) {
  if (!opts.videoFilePath && !opts.videoId) {
    throw new Error("缺少视频文件路径或视频ID");
  }
  if (opts.videoId && opts.videoType === void 0) {
    throw new Error("存在videoId时必选视频类型");
  }
  let videoId = opts.videoId;
  let videoType = opts.videoType;
  let danmaId = opts.danmaId;
  if (!videoId && opts.videoFilePath) {
    const data = await common.applyVideoId(opts.videoFilePath);
    videoId = data.videoId;
    videoType = data.type;
  }
  if (!danmaId && opts.videoFilePath) {
    const data = await recordHistoryApi.getDanmaFileInfo(opts.videoFilePath);
    danmaId = data.danmaFileId || void 0;
  }
  if (videoId && videoType !== void 0) {
    if (videoType === "ts") {
      throw new Error("ts文件暂不支持播放");
    }
    const query = {
      videoId,
      type: videoType
    };
    if (danmaId) {
      query.danmaId = danmaId;
    }
    if (window.isWeb) {
      const url = router.resolve({
        name: "VideoPlayer",
        query
      }).href;
      window.open(url, "_blank");
    } else {
      window.api.common.createSubWindow({
        routeName: "videoPlayer",
        hideAside: true,
        hideMenuBar: true,
        query
      });
    }
  } else {
    throw new Error("无法播放");
  }
}
async function toLiveVideoPlayerPage(opts) {
  const data = await recoder.getStreamUrl(opts.liveId);
  if (!data.url) {
    throw new Error("无法获取可供播放的流");
  }
  const query = {
    liveId: opts.liveId,
    url: data.url,
    owner: opts.owner
  };
  if (window.isWeb) {
    const url = router.resolve({
      name: "LiveVideoPlayer",
      query
    }).href;
    window.open(url, "_blank");
  } else {
    window.api.common.createSubWindow({
      routeName: "liveVideoPlayer",
      hideAside: true,
      hideMenuBar: true,
      query
    });
  }
}
export {
  toVideoPlayerPage as a,
  toLiveVideoPlayerPage as t
};
