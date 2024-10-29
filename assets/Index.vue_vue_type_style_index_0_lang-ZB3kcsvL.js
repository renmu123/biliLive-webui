import { d7 as commonjsGlobal, L as getDefaultExportFromCjs, d as defineComponent, r as ref, E as onMounted, T as nextTick, p as computed, ca as onBeforeUnmount, o as openBlock, ah as createElementBlock } from "./index-BdK_bIY-.js";
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var artplayer = { exports: {} };
artplayer.exports;
(function(module, exports) {
  /*!
   * artplayer.js v5.1.7
   * Github: https://github.com/zhw2590582/ArtPlayer
   * (c) 2017-2024 Harvey Zack
   * Released under the MIT License.
   */
  !function(e, t, r, a, i) {
    var o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof commonjsGlobal ? commonjsGlobal : {}, n = "function" == typeof o[a] && o[a], s = n.cache || {}, l = "function" == typeof commonjsRequire && commonjsRequire.bind(module);
    function c(t2, r2) {
      if (!s[t2]) {
        if (!e[t2]) {
          var i2 = "function" == typeof o[a] && o[a];
          if (!r2 && i2) return i2(t2, true);
          if (n) return n(t2, true);
          if (l && "string" == typeof t2) return l(t2);
          var u2 = Error("Cannot find module '" + t2 + "'");
          throw u2.code = "MODULE_NOT_FOUND", u2;
        }
        d.resolve = function(r3) {
          var a2 = e[t2][1][r3];
          return null != a2 ? a2 : r3;
        }, d.cache = {};
        var p2 = s[t2] = new c.Module(t2);
        e[t2][0].call(p2.exports, d, p2, p2.exports, this);
      }
      return s[t2].exports;
      function d(e2) {
        var t3 = d.resolve(e2);
        return false === t3 ? {} : c(t3);
      }
    }
    c.isParcelRequire = true, c.Module = function(e2) {
      this.id = e2, this.bundle = c, this.exports = {};
    }, c.modules = e, c.cache = s, c.parent = n, c.register = function(t2, r2) {
      e[t2] = [function(e2, t3) {
        t3.exports = r2;
      }, {}];
    }, Object.defineProperty(c, "root", { get: function() {
      return o[a];
    } }), o[a] = c;
    for (var u = 0; u < t.length; u++) c(t[u]);
    {
      var p = c(r);
      module.exports = p;
    }
  }({ abjMI: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("bundle-text:./style/index.less"), o = a.interopDefault(i), n = e("option-validator"), s = a.interopDefault(n), l = e("./utils/emitter"), c = a.interopDefault(l), u = e("./utils"), p = e("./scheme"), d = a.interopDefault(p), f = e("./config"), h = a.interopDefault(f), m = e("./template"), g = a.interopDefault(m), v = e("./i18n"), y = a.interopDefault(v), b = e("./player"), x = a.interopDefault(b), w = e("./control"), j = a.interopDefault(w), k = e("./contextmenu"), S = a.interopDefault(k), I = e("./info"), T = a.interopDefault(I), O = e("./subtitle"), E = a.interopDefault(O), M = e("./events"), $ = a.interopDefault(M), F = e("./hotkey"), C = a.interopDefault(F), D = e("./layer"), H = a.interopDefault(D), B = e("./loading"), z = a.interopDefault(B), R = e("./notice"), A = a.interopDefault(R), L = e("./mask"), P = a.interopDefault(L), N = e("./icons"), Z = a.interopDefault(N), _ = e("./setting"), q = a.interopDefault(_), V = e("./storage"), W = a.interopDefault(V), U = e("./plugins"), Y = a.interopDefault(U);
    let K = 0, X = [];
    class G extends c.default {
      constructor(e2, t2) {
        super(), this.id = ++K;
        let r2 = u.mergeDeep(G.option, e2);
        if (r2.container = e2.container, this.option = (0, s.default)(r2, d.default), this.isLock = false, this.isReady = false, this.isFocus = false, this.isInput = false, this.isRotate = false, this.isDestroy = false, this.template = new g.default(this), this.events = new $.default(this), this.storage = new W.default(this), this.icons = new Z.default(this), this.i18n = new y.default(this), this.notice = new A.default(this), this.player = new x.default(this), this.layers = new H.default(this), this.controls = new j.default(this), this.contextmenu = new S.default(this), this.subtitle = new E.default(this), this.info = new T.default(this), this.loading = new z.default(this), this.hotkey = new C.default(this), this.mask = new P.default(this), this.setting = new q.default(this), this.plugins = new Y.default(this), "function" == typeof t2 && this.on("ready", () => t2.call(this, this)), G.DEBUG) {
          let e3 = (e4) => console.log(`[ART.${this.id}] -> ${e4}`);
          e3("Version@" + G.version), e3("Env@" + G.env), e3("Build@" + G.build);
          for (let t3 = 0; t3 < h.default.events.length; t3++) this.on("video:" + h.default.events[t3], (t4) => e3("Event@" + t4.type));
        }
        X.push(this);
      }
      static get instances() {
        return X;
      }
      static get version() {
        return "5.1.7";
      }
      static get env() {
        return "production";
      }
      static get build() {
        return "2024-08-15 23:27:07";
      }
      static get config() {
        return h.default;
      }
      static get utils() {
        return u;
      }
      static get scheme() {
        return d.default;
      }
      static get Emitter() {
        return c.default;
      }
      static get validator() {
        return s.default;
      }
      static get kindOf() {
        return s.default.kindOf;
      }
      static get html() {
        return g.default.html;
      }
      static get option() {
        return { id: "", container: "#artplayer", url: "", poster: "", type: "", theme: "#f00", volume: 0.7, isLive: false, muted: false, autoplay: false, autoSize: false, autoMini: false, loop: false, flip: false, playbackRate: false, aspectRatio: false, screenshot: false, setting: false, hotkey: true, pip: false, mutex: true, backdrop: true, fullscreen: false, fullscreenWeb: false, subtitleOffset: false, miniProgressBar: false, useSSR: false, playsInline: true, lock: false, fastForward: false, autoPlayback: false, autoOrientation: false, airplay: false, layers: [], contextmenu: [], controls: [], settings: [], quality: [], highlight: [], plugins: [], thumbnails: { url: "", number: 60, column: 10, width: 0, height: 0 }, subtitle: { url: "", type: "", style: {}, name: "", escape: true, encoding: "utf-8", onVttLoad: (e2) => e2 }, moreVideoAttr: { controls: false, preload: u.isSafari ? "auto" : "metadata" }, i18n: {}, icons: {}, cssVar: {}, customType: {}, lang: navigator.language.toLowerCase() };
      }
      get proxy() {
        return this.events.proxy;
      }
      get query() {
        return this.template.query;
      }
      get video() {
        return this.template.$video;
      }
      destroy(e2 = true) {
        this.events.destroy(), this.template.destroy(e2), X.splice(X.indexOf(this), 1), this.isDestroy = true, this.emit("destroy");
      }
    }
    r.default = G, G.STYLE = o.default, G.DEBUG = false, G.CONTEXTMENU = true, G.NOTICE_TIME = 2e3, G.SETTING_WIDTH = 250, G.SETTING_ITEM_WIDTH = 200, G.SETTING_ITEM_HEIGHT = 35, G.RESIZE_TIME = 200, G.SCROLL_TIME = 200, G.SCROLL_GAP = 50, G.AUTO_PLAYBACK_MAX = 10, G.AUTO_PLAYBACK_MIN = 5, G.AUTO_PLAYBACK_TIMEOUT = 3e3, G.RECONNECT_TIME_MAX = 5, G.RECONNECT_SLEEP_TIME = 1e3, G.CONTROL_HIDE_TIME = 3e3, G.DBCLICK_TIME = 300, G.DBCLICK_FULLSCREEN = true, G.MOBILE_DBCLICK_PLAY = true, G.MOBILE_CLICK_PLAY = false, G.AUTO_ORIENTATION_TIME = 200, G.INFO_LOOP_TIME = 1e3, G.FAST_FORWARD_VALUE = 3, G.FAST_FORWARD_TIME = 1e3, G.TOUCH_MOVE_RATIO = 0.5, G.VOLUME_STEP = 0.1, G.SEEK_STEP = 5, G.PLAYBACK_RATE = [0.5, 0.75, 1, 1.25, 1.5, 2], G.ASPECT_RATIO = ["default", "4:3", "16:9"], G.FLIP = ["normal", "horizontal", "vertical"], G.FULLSCREEN_WEB_IN_BODY = false, G.LOG_VERSION = true, G.USE_RAF = false, u.isBrowser && (window.Artplayer = G, u.setStyleText("artplayer-style", o.default), setTimeout(() => {
      G.LOG_VERSION && console.log(`%c ArtPlayer %c ${G.version} %c https://artplayer.org`, "color: #fff; background: #5f5f5f", "color: #fff; background: #4bc729", "");
    }, 100));
  }, { "bundle-text:./style/index.less": "kfOe8", "option-validator": "9I0i9", "./utils/emitter": "2bGVu", "./utils": "h3rH9", "./scheme": "AdvwB", "./config": "9Xmqu", "./template": "2gKYH", "./i18n": "1AdeF", "./player": "556MW", "./control": "14IBq", "./contextmenu": "7iUum", "./info": "hD2Lg", "./subtitle": "lum0D", "./events": "1Epl5", "./hotkey": "eTow4", "./layer": "4fDoD", "./loading": "fE0Sp", "./notice": "9PuGy", "./mask": "2etr0", "./icons": "6dYSr", "./setting": "bRHiA", "./storage": "f2Thp", "./plugins": "96ThS", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], kfOe8: [function(e, t, r) {
    t.exports = '.art-video-player{--art-theme:red;--art-font-color:#fff;--art-background-color:#000;--art-text-shadow-color:#00000080;--art-transition-duration:.2s;--art-padding:10px;--art-border-radius:3px;--art-progress-height:6px;--art-progress-color:#ffffff40;--art-hover-color:#ffffff40;--art-loaded-color:#ffffff40;--art-state-size:80px;--art-state-opacity:.8;--art-bottom-height:100px;--art-bottom-offset:20px;--art-bottom-gap:5px;--art-highlight-width:8px;--art-highlight-color:#ffffff80;--art-control-height:46px;--art-control-opacity:.75;--art-control-icon-size:36px;--art-control-icon-scale:1.1;--art-volume-height:120px;--art-volume-handle-size:14px;--art-lock-size:36px;--art-indicator-scale:0;--art-indicator-size:16px;--art-fullscreen-web-index:9999;--art-settings-icon-size:24px;--art-settings-max-height:300px;--art-selector-max-height:300px;--art-contextmenus-min-width:250px;--art-subtitle-font-size:20px;--art-subtitle-gap:5px;--art-subtitle-bottom:15px;--art-subtitle-border:#000;--art-widget-background:#000000d9;--art-tip-background:#000000b3;--art-scrollbar-size:4px;--art-scrollbar-background:#ffffff40;--art-scrollbar-background-hover:#ffffff80;--art-mini-progress-height:2px}.art-bg-cover{background-position:50%;background-repeat:no-repeat;background-size:cover}.art-bottom-gradient{background-image:linear-gradient(#0000,#0006,#000);background-position:bottom;background-repeat:repeat-x}.art-backdrop-filter{backdrop-filter:saturate(180%)blur(20px);background-color:#000000bf!important}.art-truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.art-video-player{zoom:1;text-align:left;user-select:none;box-sizing:border-box;color:var(--art-font-color);background-color:var(--art-background-color);text-shadow:0 0 2px var(--art-text-shadow-color);-webkit-tap-highlight-color:#0000;-ms-touch-action:manipulation;touch-action:manipulation;-ms-high-contrast-adjust:none;direction:ltr;outline:0;width:100%;height:100%;margin:0 auto;padding:0;font-family:PingFang SC,Helvetica Neue,Microsoft YaHei,Roboto,Arial,sans-serif;font-size:14px;line-height:1.3;position:relative}.art-video-player *,.art-video-player :before,.art-video-player :after{box-sizing:border-box}.art-video-player ::-webkit-scrollbar{width:var(--art-scrollbar-size);height:var(--art-scrollbar-size)}.art-video-player ::-webkit-scrollbar-thumb{background-color:var(--art-scrollbar-background)}.art-video-player ::-webkit-scrollbar-thumb:hover{background-color:var(--art-scrollbar-background-hover)}.art-video-player img{vertical-align:top;max-width:100%}.art-video-player svg{fill:var(--art-font-color)}.art-video-player a{color:var(--art-font-color);text-decoration:none}.art-icon{justify-content:center;align-items:center;line-height:1;display:flex}.art-video-player.art-backdrop .art-contextmenus,.art-video-player.art-backdrop .art-info,.art-video-player.art-backdrop .art-settings,.art-video-player.art-backdrop .art-layer-auto-playback,.art-video-player.art-backdrop .art-selector-list,.art-video-player.art-backdrop .art-volume-inner{backdrop-filter:saturate(180%)blur(20px);background-color:#000000bf!important}.art-video{z-index:10;cursor:pointer;width:100%;height:100%;position:absolute;inset:0}.art-poster{z-index:11;pointer-events:none;background-position:50%;background-repeat:no-repeat;background-size:cover;width:100%;height:100%;position:absolute;inset:0}.art-video-player .art-subtitle{z-index:20;text-align:center;pointer-events:none;justify-content:center;align-items:center;gap:var(--art-subtitle-gap);bottom:var(--art-subtitle-bottom);font-size:var(--art-subtitle-font-size);transition:bottom var(--art-transition-duration)ease;text-shadow:var(--art-subtitle-border)1px 0 1px,var(--art-subtitle-border)0 1px 1px,var(--art-subtitle-border)-1px 0 1px,var(--art-subtitle-border)0 -1px 1px,var(--art-subtitle-border)1px 1px 1px,var(--art-subtitle-border)-1px -1px 1px,var(--art-subtitle-border)1px -1px 1px,var(--art-subtitle-border)-1px 1px 1px;flex-direction:column;width:100%;padding:0 5%;display:none;position:absolute}.art-video-player.art-subtitle-show .art-subtitle{display:flex}.art-video-player.art-control-show .art-subtitle{bottom:calc(var(--art-control-height) + var(--art-subtitle-bottom))}.art-danmuku{z-index:30;pointer-events:none;width:100%;height:100%;position:absolute;inset:0;overflow:hidden}.art-video-player .art-layers{z-index:40;pointer-events:none;width:100%;height:100%;display:none;position:absolute;inset:0}.art-video-player .art-layers .art-layer{pointer-events:auto}.art-video-player.art-layer-show .art-layers{display:flex}.art-video-player .art-mask{z-index:50;pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;inset:0}.art-video-player .art-mask .art-state{opacity:0;width:var(--art-state-size);height:var(--art-state-size);transition:all var(--art-transition-duration)ease;justify-content:center;align-items:center;display:flex;transform:scale(2)}.art-video-player.art-mask-show .art-state{cursor:pointer;pointer-events:auto;opacity:var(--art-state-opacity);transform:scale(1)}.art-video-player.art-loading-show .art-state{display:none}.art-video-player .art-loading{z-index:70;pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:none;position:absolute;inset:0}.art-video-player.art-loading-show .art-loading{display:flex}.art-video-player .art-bottom{z-index:60;opacity:0;pointer-events:none;padding:0 var(--art-padding);transition:all var(--art-transition-duration)ease;background-size:100% var(--art-bottom-height);background-image:linear-gradient(#0000,#0006,#000);background-position:bottom;background-repeat:repeat-x;flex-direction:column;justify-content:flex-end;width:100%;height:100%;display:flex;position:absolute;inset:0;overflow:hidden}.art-video-player .art-bottom .art-controls,.art-video-player .art-bottom .art-progress{transform:translateY(var(--art-bottom-offset));transition:transform var(--art-transition-duration)ease}.art-video-player.art-control-show .art-bottom,.art-video-player.art-hover .art-bottom{opacity:1}.art-video-player.art-control-show .art-bottom .art-controls,.art-video-player.art-hover .art-bottom .art-controls,.art-video-player.art-control-show .art-bottom .art-progress,.art-video-player.art-hover .art-bottom .art-progress{transform:translateY(0)}.art-bottom .art-progress{z-index:0;pointer-events:auto;padding-bottom:var(--art-bottom-gap);position:relative}.art-bottom .art-progress .art-control-progress{cursor:pointer;height:var(--art-progress-height);justify-content:center;align-items:center;display:flex;position:relative}.art-bottom .art-progress .art-control-progress .art-control-progress-inner{transition:height var(--art-transition-duration)ease;background-color:var(--art-progress-color);align-items:center;width:100%;height:50%;display:flex;position:relative}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-hover{z-index:0;background-color:var(--art-hover-color);width:0%;height:100%;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-loaded{z-index:10;background-color:var(--art-loaded-color);width:0%;height:100%;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-played{z-index:20;background-color:var(--art-theme);width:0%;height:100%;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight{z-index:30;pointer-events:none;width:100%;height:100%;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight span{z-index:0;pointer-events:auto;transform:translateX(calc(var(--art-highlight-width)/-2));background-color:var(--art-highlight-color);width:100%;height:100%;position:absolute;inset:0 auto 0 0;width:var(--art-highlight-width)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{z-index:40;width:var(--art-indicator-size);height:var(--art-indicator-size);transform:scale(var(--art-indicator-scale));margin-left:calc(var(--art-indicator-size)/-2);transition:transform var(--art-transition-duration)ease;border-radius:50%;justify-content:center;align-items:center;display:flex;position:absolute;left:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator .art-icon{pointer-events:none;width:100%;height:100%}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:hover{transform:scale(1.2)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:active{transform:scale(1)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip{z-index:50;border-radius:var(--art-border-radius);white-space:nowrap;background-color:var(--art-tip-background);padding:3px 5px;font-size:12px;line-height:1;display:none;position:absolute;top:-25px;left:0}.art-bottom .art-progress .art-control-progress:hover .art-control-progress-inner{height:100%}.art-bottom .art-progress .art-control-thumbnails{bottom:calc(var(--art-bottom-gap) + 10px);border-radius:var(--art-border-radius);pointer-events:none;background-color:var(--art-widget-background);display:none;position:absolute;left:0;box-shadow:0 1px 3px #0003,0 1px 2px -1px #0003}.art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{transform:scale(1)}.art-controls{z-index:10;pointer-events:auto;height:var(--art-control-height);justify-content:space-between;align-items:center;display:flex;position:relative}.art-controls .art-controls-left,.art-controls .art-controls-right{height:100%;display:flex}.art-controls .art-controls-center{flex:1;justify-content:center;align-items:center;height:100%;padding:0 10px;display:none}.art-controls .art-controls-right{justify-content:flex-end}.art-controls .art-control{cursor:pointer;white-space:nowrap;opacity:var(--art-control-opacity);min-height:var(--art-control-height);min-width:var(--art-control-height);transition:opacity var(--art-transition-duration)ease;flex-shrink:0;justify-content:center;align-items:center;display:flex}.art-controls .art-control .art-icon{height:var(--art-control-icon-size);width:var(--art-control-icon-size);transform:scale(var(--art-control-icon-scale));transition:transform var(--art-transition-duration)ease}.art-controls .art-control .art-icon:active{transform:scale(calc(var(--art-control-icon-scale)*.8))}.art-controls .art-control:hover{opacity:1}.art-control-volume{position:relative}.art-control-volume .art-volume-panel{text-align:center;cursor:default;opacity:0;pointer-events:none;left:0;right:0;bottom:var(--art-control-height);width:var(--art-control-height);height:var(--art-volume-height);transition:all var(--art-transition-duration)ease;justify-content:center;align-items:center;padding:0 5px;font-size:12px;display:flex;position:absolute;transform:translateY(10px)}.art-control-volume .art-volume-panel .art-volume-inner{border-radius:var(--art-border-radius);background-color:var(--art-widget-background);flex-direction:column;align-items:center;gap:10px;width:100%;height:100%;padding:10px 0 12px;display:flex}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider{cursor:pointer;flex:1;justify-content:center;width:100%;display:flex;position:relative}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle{border-radius:var(--art-border-radius);background-color:#ffffff40;justify-content:center;width:2px;display:flex;position:relative;overflow:hidden}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle .art-volume-loaded{z-index:0;background-color:var(--art-theme);width:100%;height:100%;position:absolute;inset:0}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-indicator{width:var(--art-volume-handle-size);height:var(--art-volume-handle-size);margin-top:calc(var(--art-volume-handle-size)/-2);background-color:var(--art-theme);transition:transform var(--art-transition-duration)ease;border-radius:100%;flex-shrink:0;position:absolute;transform:scale(1)}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider:active .art-volume-indicator{transform:scale(.9)}.art-control-volume:hover .art-volume-panel{opacity:1;pointer-events:auto;transform:translateY(0)}.art-video-player .art-notice{z-index:80;padding:var(--art-padding);pointer-events:none;width:100%;height:auto;display:none;position:absolute;inset:0 0 auto}.art-video-player .art-notice .art-notice-inner{border-radius:var(--art-border-radius);background-color:var(--art-tip-background);padding:5px;line-height:1;display:inline-flex}.art-video-player.art-notice-show .art-notice{display:flex}.art-video-player .art-contextmenus{z-index:120;border-radius:var(--art-border-radius);background-color:var(--art-widget-background);min-width:var(--art-contextmenus-min-width);flex-direction:column;padding:5px 0;font-size:12px;display:none;position:absolute}.art-video-player .art-contextmenus .art-contextmenu{cursor:pointer;border-bottom:1px solid #ffffff1a;padding:10px 15px;display:flex}.art-video-player .art-contextmenus .art-contextmenu span{padding:0 8px}.art-video-player .art-contextmenus .art-contextmenu span:hover,.art-video-player .art-contextmenus .art-contextmenu span.art-current{color:var(--art-theme)}.art-video-player .art-contextmenus .art-contextmenu:hover{background-color:#ffffff1a}.art-video-player .art-contextmenus .art-contextmenu:last-child{border-bottom:none}.art-video-player.art-contextmenu-show .art-contextmenus{display:flex}.art-video-player .art-settings{z-index:90;border-radius:var(--art-border-radius);transform-origin:100% 100%;max-height:var(--art-settings-max-height);left:auto;right:var(--art-padding);bottom:var(--art-control-height);transform:scale(var(--art-settings-scale));transition:all var(--art-transition-duration)ease;background-color:var(--art-widget-background);flex-direction:column;display:none;position:absolute;overflow:hidden auto}.art-video-player .art-settings .art-setting-panel{flex-direction:column;display:none}.art-video-player .art-settings .art-setting-panel.art-current{display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item{cursor:pointer;transition:background-color var(--art-transition-duration)ease;justify-content:space-between;align-items:center;padding:0 5px;display:flex;overflow:hidden}.art-video-player .art-settings .art-setting-panel .art-setting-item:hover{background-color:#ffffff1a}.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current{color:var(--art-theme)}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-icon-check{visibility:hidden;height:15px}.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current .art-icon-check{visibility:visible}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left{justify-content:center;align-items:center;gap:5px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left .art-setting-item-left-icon{height:var(--art-settings-icon-size);width:var(--art-settings-icon-size);justify-content:center;align-items:center;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right{justify-content:center;align-items:center;gap:5px;font-size:12px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-tooltip{white-space:nowrap;color:#ffffff80}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-icon{justify-content:center;align-items:center;min-width:32px;height:24px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-range{appearance:none;background-color:#fff3;outline:none;width:80px;height:3px}.art-video-player .art-settings .art-setting-panel .art-setting-item-back{border-bottom:1px solid #ffffff1a}.art-video-player.art-setting-show .art-settings{display:flex}.art-video-player .art-info{left:var(--art-padding);top:var(--art-padding);z-index:100;border-radius:var(--art-border-radius);background-color:var(--art-widget-background);padding:10px;font-size:12px;display:none;position:absolute}.art-video-player .art-info .art-info-panel{flex-direction:column;gap:5px;display:flex}.art-video-player .art-info .art-info-panel .art-info-item{align-items:center;gap:5px;display:flex}.art-video-player .art-info .art-info-panel .art-info-item .art-info-title{text-align:right;width:100px}.art-video-player .art-info .art-info-panel .art-info-item .art-info-content{text-overflow:ellipsis;white-space:nowrap;user-select:all;width:250px;overflow:hidden}.art-video-player .art-info .art-info-close{cursor:pointer;position:absolute;top:5px;right:5px}.art-video-player.art-info-show .art-info{display:flex}.art-hide-cursor *{cursor:none!important}.art-video-player[data-aspect-ratio]{overflow:hidden}.art-video-player[data-aspect-ratio] .art-video{object-fit:fill;box-sizing:content-box}.art-fullscreen{--art-progress-height:8px;--art-indicator-size:20px;--art-control-height:60px;--art-control-icon-scale:1.3}.art-fullscreen-web{--art-progress-height:8px;--art-indicator-size:20px;--art-control-height:60px;--art-control-icon-scale:1.3;z-index:var(--art-fullscreen-web-index);width:100%;height:100%;position:fixed;inset:0}.art-mini-popup{z-index:9999;border-radius:var(--art-border-radius);cursor:move;user-select:none;background:#000;width:320px;height:180px;transition:opacity .2s;position:fixed;overflow:hidden;box-shadow:0 0 5px #00000080}.art-mini-popup svg{fill:#fff}.art-mini-popup .art-video{pointer-events:none}.art-mini-popup .art-mini-close{z-index:20;cursor:pointer;opacity:0;transition:opacity .2s;position:absolute;top:10px;right:10px}.art-mini-popup .art-mini-state{z-index:30;pointer-events:none;opacity:0;background-color:#00000040;justify-content:center;align-items:center;width:100%;height:100%;transition:opacity .2s;display:flex;position:absolute;inset:0}.art-mini-popup .art-mini-state .art-icon{opacity:.75;cursor:pointer;pointer-events:auto;transition:transform .2s;transform:scale(3)}.art-mini-popup .art-mini-state .art-icon:active{transform:scale(2.5)}.art-mini-popup.art-mini-droging{opacity:.9}.art-mini-popup:hover .art-mini-close,.art-mini-popup:hover .art-mini-state{opacity:1}.art-video-player[data-flip=horizontal] .art-video{transform:scaleX(-1)}.art-video-player[data-flip=vertical] .art-video{transform:scaleY(-1)}.art-video-player .art-layer-lock{height:var(--art-lock-size);width:var(--art-lock-size);top:50%;left:var(--art-padding);background-color:var(--art-tip-background);border-radius:50%;justify-content:center;align-items:center;display:none;position:absolute;transform:translateY(-50%)}.art-video-player .art-layer-auto-playback{border-radius:var(--art-border-radius);left:var(--art-padding);bottom:calc(var(--art-control-height) + var(--art-bottom-gap) + 10px);background-color:var(--art-widget-background);align-items:center;gap:10px;padding:10px;line-height:1;display:none;position:absolute}.art-video-player .art-layer-auto-playback .art-auto-playback-close{cursor:pointer;justify-content:center;align-items:center;display:flex}.art-video-player .art-layer-auto-playback .art-auto-playback-close svg{fill:var(--art-theme);width:15px;height:15px}.art-video-player .art-layer-auto-playback .art-auto-playback-jump{color:var(--art-theme);cursor:pointer}.art-video-player.art-lock .art-subtitle{bottom:var(--art-subtitle-bottom)!important}.art-video-player.art-mini-progress-bar .art-bottom,.art-video-player.art-lock .art-bottom{opacity:1;background-image:none;padding:0}.art-video-player.art-mini-progress-bar .art-bottom .art-controls,.art-video-player.art-lock .art-bottom .art-controls,.art-video-player.art-mini-progress-bar .art-bottom .art-progress,.art-video-player.art-lock .art-bottom .art-progress{transform:translateY(calc(var(--art-control-height) + var(--art-bottom-gap) + var(--art-progress-height)/4))}.art-video-player.art-mini-progress-bar .art-bottom .art-progress-indicator,.art-video-player.art-lock .art-bottom .art-progress-indicator{display:none!important}.art-video-player.art-control-show .art-layer-lock{display:flex}.art-control-selector{position:relative}.art-control-selector .art-selector-list{text-align:center;border-radius:var(--art-border-radius);opacity:0;pointer-events:none;bottom:var(--art-control-height);max-height:var(--art-selector-max-height);background-color:var(--art-widget-background);transition:all var(--art-transition-duration)ease;flex-direction:column;align-items:center;display:flex;position:absolute;overflow:hidden auto;transform:translateY(10px)}.art-control-selector .art-selector-list .art-selector-item{flex-shrink:0;justify-content:center;align-items:center;width:100%;padding:10px 15px;line-height:1;display:flex}.art-control-selector .art-selector-list .art-selector-item:hover{background-color:#ffffff1a}.art-control-selector .art-selector-list .art-selector-item:hover,.art-control-selector .art-selector-list .art-selector-item.art-current{color:var(--art-theme)}.art-control-selector:hover .art-selector-list{opacity:1;pointer-events:auto;transform:translateY(0)}[class*=hint--]{font-style:normal;display:inline-block;position:relative}[class*=hint--]:before,[class*=hint--]:after{visibility:hidden;opacity:0;z-index:1000000;pointer-events:none;transition:all .3s;position:absolute;transform:translate(0,0)}[class*=hint--]:hover:before,[class*=hint--]:hover:after{visibility:visible;opacity:1;transition-delay:.1s}[class*=hint--]:before{content:"";z-index:1000001;background:0 0;border:6px solid #0000;position:absolute}[class*=hint--]:after{color:#fff;white-space:nowrap;background:#000;padding:8px 10px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:12px}[class*=hint--][aria-label]:after{content:attr(aria-label)}[class*=hint--][data-hint]:after{content:attr(data-hint)}[aria-label=""]:before,[aria-label=""]:after,[data-hint=""]:before,[data-hint=""]:after{display:none!important}.hint--top-left:before,.hint--top-right:before,.hint--top:before{border-top-color:#000}.hint--bottom-left:before,.hint--bottom-right:before,.hint--bottom:before{border-bottom-color:#000}.hint--left:before{border-left-color:#000}.hint--right:before{border-right-color:#000}.hint--top:before{margin-bottom:-11px}.hint--top:before,.hint--top:after{bottom:100%;left:50%}.hint--top:before{left:calc(50% - 6px)}.hint--top:after{transform:translate(-50%)}.hint--top:hover:before{transform:translateY(-8px)}.hint--top:hover:after{transform:translate(-50%)translateY(-8px)}.hint--bottom:before{margin-top:-11px}.hint--bottom:before,.hint--bottom:after{top:100%;left:50%}.hint--bottom:before{left:calc(50% - 6px)}.hint--bottom:after{transform:translate(-50%)}.hint--bottom:hover:before{transform:translateY(8px)}.hint--bottom:hover:after{transform:translate(-50%)translateY(8px)}.hint--right:before{margin-bottom:-6px;margin-left:-11px}.hint--right:after{margin-bottom:-14px}.hint--right:before,.hint--right:after{bottom:50%;left:100%}.hint--right:hover:before,.hint--right:hover:after{transform:translate(8px)}.hint--left:before{margin-bottom:-6px;margin-right:-11px}.hint--left:after{margin-bottom:-14px}.hint--left:before,.hint--left:after{bottom:50%;right:100%}.hint--left:hover:before,.hint--left:hover:after{transform:translate(-8px)}.hint--top-left:before{margin-bottom:-11px}.hint--top-left:before,.hint--top-left:after{bottom:100%;left:50%}.hint--top-left:before{left:calc(50% - 6px)}.hint--top-left:after{margin-left:12px;transform:translate(-100%)}.hint--top-left:hover:before{transform:translateY(-8px)}.hint--top-left:hover:after{transform:translate(-100%)translateY(-8px)}.hint--top-right:before{margin-bottom:-11px}.hint--top-right:before,.hint--top-right:after{bottom:100%;left:50%}.hint--top-right:before{left:calc(50% - 6px)}.hint--top-right:after{margin-left:-12px;transform:translate(0)}.hint--top-right:hover:before,.hint--top-right:hover:after{transform:translateY(-8px)}.hint--bottom-left:before{margin-top:-11px}.hint--bottom-left:before,.hint--bottom-left:after{top:100%;left:50%}.hint--bottom-left:before{left:calc(50% - 6px)}.hint--bottom-left:after{margin-left:12px;transform:translate(-100%)}.hint--bottom-left:hover:before{transform:translateY(8px)}.hint--bottom-left:hover:after{transform:translate(-100%)translateY(8px)}.hint--bottom-right:before{margin-top:-11px}.hint--bottom-right:before,.hint--bottom-right:after{top:100%;left:50%}.hint--bottom-right:before{left:calc(50% - 6px)}.hint--bottom-right:after{margin-left:-12px;transform:translate(0)}.hint--bottom-right:hover:before,.hint--bottom-right:hover:after{transform:translateY(8px)}.hint--small:after,.hint--medium:after,.hint--large:after{white-space:normal;word-wrap:break-word;line-height:1.4em}.hint--small:after{width:80px}.hint--medium:after{width:150px}.hint--large:after{width:300px}[class*=hint--]:after{text-shadow:0 -1px #000;box-shadow:4px 4px 8px #0000004d}.hint--error:after{text-shadow:0 -1px #592726;background-color:#b34e4d}.hint--error.hint--top-left:before,.hint--error.hint--top-right:before,.hint--error.hint--top:before{border-top-color:#b34e4d}.hint--error.hint--bottom-left:before,.hint--error.hint--bottom-right:before,.hint--error.hint--bottom:before{border-bottom-color:#b34e4d}.hint--error.hint--left:before{border-left-color:#b34e4d}.hint--error.hint--right:before{border-right-color:#b34e4d}.hint--warning:after{text-shadow:0 -1px #6c5328;background-color:#c09854}.hint--warning.hint--top-left:before,.hint--warning.hint--top-right:before,.hint--warning.hint--top:before{border-top-color:#c09854}.hint--warning.hint--bottom-left:before,.hint--warning.hint--bottom-right:before,.hint--warning.hint--bottom:before{border-bottom-color:#c09854}.hint--warning.hint--left:before{border-left-color:#c09854}.hint--warning.hint--right:before{border-right-color:#c09854}.hint--info:after{text-shadow:0 -1px #1a3c4d;background-color:#3986ac}.hint--info.hint--top-left:before,.hint--info.hint--top-right:before,.hint--info.hint--top:before{border-top-color:#3986ac}.hint--info.hint--bottom-left:before,.hint--info.hint--bottom-right:before,.hint--info.hint--bottom:before{border-bottom-color:#3986ac}.hint--info.hint--left:before{border-left-color:#3986ac}.hint--info.hint--right:before{border-right-color:#3986ac}.hint--success:after{text-shadow:0 -1px #1a321a;background-color:#458746}.hint--success.hint--top-left:before,.hint--success.hint--top-right:before,.hint--success.hint--top:before{border-top-color:#458746}.hint--success.hint--bottom-left:before,.hint--success.hint--bottom-right:before,.hint--success.hint--bottom:before{border-bottom-color:#458746}.hint--success.hint--left:before{border-left-color:#458746}.hint--success.hint--right:before{border-right-color:#458746}.hint--always:after,.hint--always:before{opacity:1;visibility:visible}.hint--always.hint--top:before{transform:translateY(-8px)}.hint--always.hint--top:after{transform:translate(-50%)translateY(-8px)}.hint--always.hint--top-left:before{transform:translateY(-8px)}.hint--always.hint--top-left:after{transform:translate(-100%)translateY(-8px)}.hint--always.hint--top-right:before,.hint--always.hint--top-right:after{transform:translateY(-8px)}.hint--always.hint--bottom:before{transform:translateY(8px)}.hint--always.hint--bottom:after{transform:translate(-50%)translateY(8px)}.hint--always.hint--bottom-left:before{transform:translateY(8px)}.hint--always.hint--bottom-left:after{transform:translate(-100%)translateY(8px)}.hint--always.hint--bottom-right:before,.hint--always.hint--bottom-right:after{transform:translateY(8px)}.hint--always.hint--left:before,.hint--always.hint--left:after{transform:translate(-8px)}.hint--always.hint--right:before,.hint--always.hint--right:after{transform:translate(8px)}.hint--rounded:after{border-radius:4px}.hint--no-animate:before,.hint--no-animate:after{transition-duration:0s}.hint--bounce:before,.hint--bounce:after{-webkit-transition:opacity .3s,visibility .3s,-webkit-transform .3s cubic-bezier(.71,1.7,.77,1.24);-moz-transition:opacity .3s,visibility .3s,-moz-transform .3s cubic-bezier(.71,1.7,.77,1.24);transition:opacity .3s,visibility .3s,transform .3s cubic-bezier(.71,1.7,.77,1.24)}.hint--no-shadow:before,.hint--no-shadow:after{text-shadow:initial;box-shadow:initial}.hint--no-arrow:before{display:none}.art-video-player.art-mobile{--art-bottom-gap:10px;--art-control-height:38px;--art-control-icon-scale:1;--art-state-size:60px;--art-settings-max-height:180px;--art-selector-max-height:180px;--art-indicator-scale:1;--art-control-opacity:1}.art-video-player.art-mobile .art-controls-left{margin-left:calc(var(--art-padding)/-1)}.art-video-player.art-mobile .art-controls-right{margin-right:calc(var(--art-padding)/-1)}';
  }, {}], "9I0i9": [function(e, t, r) {
    var a;
    a = function() {
      function e2(t3) {
        return (e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(t3);
      }
      var t2 = Object.prototype.toString, r2 = function(r3) {
        if (void 0 === r3) return "undefined";
        if (null === r3) return "null";
        var i2 = e2(r3);
        if ("boolean" === i2) return "boolean";
        if ("string" === i2) return "string";
        if ("number" === i2) return "number";
        if ("symbol" === i2) return "symbol";
        if ("function" === i2) return "GeneratorFunction" === a2(r3) ? "generatorfunction" : "function";
        if (Array.isArray ? Array.isArray(r3) : r3 instanceof Array) return "array";
        if (r3.constructor && "function" == typeof r3.constructor.isBuffer && r3.constructor.isBuffer(r3)) return "buffer";
        if (function(e3) {
          try {
            if ("number" == typeof e3.length && "function" == typeof e3.callee) return true;
          } catch (e4) {
            if (-1 !== e4.message.indexOf("callee")) return true;
          }
          return false;
        }(r3)) return "arguments";
        if (r3 instanceof Date || "function" == typeof r3.toDateString && "function" == typeof r3.getDate && "function" == typeof r3.setDate) return "date";
        if (r3 instanceof Error || "string" == typeof r3.message && r3.constructor && "number" == typeof r3.constructor.stackTraceLimit) return "error";
        if (r3 instanceof RegExp || "string" == typeof r3.flags && "boolean" == typeof r3.ignoreCase && "boolean" == typeof r3.multiline && "boolean" == typeof r3.global) return "regexp";
        switch (a2(r3)) {
          case "Symbol":
            return "symbol";
          case "Promise":
            return "promise";
          case "WeakMap":
            return "weakmap";
          case "WeakSet":
            return "weakset";
          case "Map":
            return "map";
          case "Set":
            return "set";
          case "Int8Array":
            return "int8array";
          case "Uint8Array":
            return "uint8array";
          case "Uint8ClampedArray":
            return "uint8clampedarray";
          case "Int16Array":
            return "int16array";
          case "Uint16Array":
            return "uint16array";
          case "Int32Array":
            return "int32array";
          case "Uint32Array":
            return "uint32array";
          case "Float32Array":
            return "float32array";
          case "Float64Array":
            return "float64array";
        }
        if ("function" == typeof r3.throw && "function" == typeof r3.return && "function" == typeof r3.next) return "generator";
        switch (i2 = t2.call(r3)) {
          case "[object Object]":
            return "object";
          case "[object Map Iterator]":
            return "mapiterator";
          case "[object Set Iterator]":
            return "setiterator";
          case "[object String Iterator]":
            return "stringiterator";
          case "[object Array Iterator]":
            return "arrayiterator";
        }
        return i2.slice(8, -1).toLowerCase().replace(/\s/g, "");
      };
      function a2(e3) {
        return e3.constructor ? e3.constructor.name : null;
      }
      function i(e3, t3) {
        var a3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ["option"];
        return o(e3, t3, a3), n(e3, t3, a3), function(e4, t4, a4) {
          var s = r2(t4), l = r2(e4);
          if ("object" === s) {
            if ("object" !== l) throw Error("[Type Error]: '".concat(a4.join("."), "' require 'object' type, but got '").concat(l, "'"));
            Object.keys(t4).forEach(function(r3) {
              var s2 = e4[r3], l2 = t4[r3], c = a4.slice();
              c.push(r3), o(s2, l2, c), n(s2, l2, c), i(s2, l2, c);
            });
          }
          if ("array" === s) {
            if ("array" !== l) throw Error("[Type Error]: '".concat(a4.join("."), "' require 'array' type, but got '").concat(l, "'"));
            e4.forEach(function(r3, s2) {
              var l2 = e4[s2], c = t4[s2] || t4[0], u = a4.slice();
              u.push(s2), o(l2, c, u), n(l2, c, u), i(l2, c, u);
            });
          }
        }(e3, t3, a3), e3;
      }
      function o(e3, t3, a3) {
        if ("string" === r2(t3)) {
          var i2 = r2(e3);
          if ("?" === t3[0] && (t3 = t3.slice(1) + "|undefined"), !(-1 < t3.indexOf("|") ? t3.split("|").map(function(e4) {
            return e4.toLowerCase().trim();
          }).filter(Boolean).some(function(e4) {
            return i2 === e4;
          }) : t3.toLowerCase().trim() === i2)) throw Error("[Type Error]: '".concat(a3.join("."), "' require '").concat(t3, "' type, but got '").concat(i2, "'"));
        }
      }
      function n(e3, t3, a3) {
        if ("function" === r2(t3)) {
          var i2 = t3(e3, r2(e3), a3);
          if (true !== i2) {
            var o2 = r2(i2);
            throw "string" === o2 ? Error(i2) : "error" === o2 ? i2 : Error("[Validator Error]: The scheme for '".concat(a3.join("."), "' validator require return true, but got '").concat(i2, "'"));
          }
        }
      }
      return i.kindOf = r2, i;
    }, t.exports = a();
  }, {}], "2bGVu": [function(e, t, r) {
    e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = class {
      on(e2, t2, r2) {
        let a = this.e || (this.e = {});
        return (a[e2] || (a[e2] = [])).push({ fn: t2, ctx: r2 }), this;
      }
      once(e2, t2, r2) {
        let a = this;
        function i(...o) {
          a.off(e2, i), t2.apply(r2, o);
        }
        return i._ = t2, this.on(e2, i, r2);
      }
      emit(e2, ...t2) {
        let r2 = ((this.e || (this.e = {}))[e2] || []).slice();
        for (let e3 = 0; e3 < r2.length; e3 += 1) r2[e3].fn.apply(r2[e3].ctx, t2);
        return this;
      }
      off(e2, t2) {
        let r2 = this.e || (this.e = {}), a = r2[e2], i = [];
        if (a && t2) for (let e3 = 0, r3 = a.length; e3 < r3; e3 += 1) a[e3].fn !== t2 && a[e3].fn._ !== t2 && i.push(a[e3]);
        return i.length ? r2[e2] = i : delete r2[e2], this;
      }
    };
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], guZOB: [function(e, t, r) {
    r.interopDefault = function(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }, r.defineInteropFlag = function(e2) {
      Object.defineProperty(e2, "__esModule", { value: true });
    }, r.exportAll = function(e2, t2) {
      return Object.keys(e2).forEach(function(r2) {
        "default" === r2 || "__esModule" === r2 || Object.prototype.hasOwnProperty.call(t2, r2) || Object.defineProperty(t2, r2, { enumerable: true, get: function() {
          return e2[r2];
        } });
      }), t2;
    }, r.export = function(e2, t2, r2) {
      Object.defineProperty(e2, t2, { enumerable: true, get: r2 });
    };
  }, {}], h3rH9: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("./dom");
    a.exportAll(i, r);
    var o = e("./error");
    a.exportAll(o, r);
    var n = e("./subtitle");
    a.exportAll(n, r);
    var s = e("./file");
    a.exportAll(s, r);
    var l = e("./property");
    a.exportAll(l, r);
    var c = e("./time");
    a.exportAll(c, r);
    var u = e("./format");
    a.exportAll(u, r);
    var p = e("./compatibility");
    a.exportAll(p, r);
  }, { "./dom": "XgAQE", "./error": "2nFlF", "./subtitle": "yqFoT", "./file": "1VRQn", "./property": "3weX2", "./time": "7kBIx", "./format": "13atT", "./compatibility": "luXC1", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], XgAQE: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "query", () => o), a.export(r, "queryAll", () => n), a.export(r, "addClass", () => s), a.export(r, "removeClass", () => l), a.export(r, "hasClass", () => c), a.export(r, "append", () => u), a.export(r, "remove", () => p), a.export(r, "setStyle", () => d), a.export(r, "setStyles", () => f), a.export(r, "getStyle", () => h), a.export(r, "sublings", () => m), a.export(r, "inverseClass", () => g), a.export(r, "tooltip", () => v), a.export(r, "isInViewport", () => y), a.export(r, "includeFromEvent", () => b), a.export(r, "replaceElement", () => x), a.export(r, "createElement", () => w), a.export(r, "getIcon", () => j), a.export(r, "setStyleText", () => k), a.export(r, "supportsFlex", () => S), a.export(r, "getRect", () => I);
    var i = e("./compatibility");
    function o(e2, t2 = document) {
      return t2.querySelector(e2);
    }
    function n(e2, t2 = document) {
      return Array.from(t2.querySelectorAll(e2));
    }
    function s(e2, t2) {
      return e2.classList.add(t2);
    }
    function l(e2, t2) {
      return e2.classList.remove(t2);
    }
    function c(e2, t2) {
      return e2.classList.contains(t2);
    }
    function u(e2, t2) {
      return t2 instanceof Element ? e2.appendChild(t2) : e2.insertAdjacentHTML("beforeend", String(t2)), e2.lastElementChild || e2.lastChild;
    }
    function p(e2) {
      return e2.parentNode.removeChild(e2);
    }
    function d(e2, t2, r2) {
      return e2.style[t2] = r2, e2;
    }
    function f(e2, t2) {
      for (let r2 in t2) d(e2, r2, t2[r2]);
      return e2;
    }
    function h(e2, t2, r2 = true) {
      let a2 = window.getComputedStyle(e2, null).getPropertyValue(t2);
      return r2 ? parseFloat(a2) : a2;
    }
    function m(e2) {
      return Array.from(e2.parentElement.children).filter((t2) => t2 !== e2);
    }
    function g(e2, t2) {
      m(e2).forEach((e3) => l(e3, t2)), s(e2, t2);
    }
    function v(e2, t2, r2 = "top") {
      i.isMobile || (e2.setAttribute("aria-label", t2), s(e2, "hint--rounded"), s(e2, `hint--${r2}`));
    }
    function y(e2, t2 = 0) {
      let r2 = e2.getBoundingClientRect(), a2 = window.innerHeight || document.documentElement.clientHeight, i2 = window.innerWidth || document.documentElement.clientWidth, o2 = r2.top - t2 <= a2 && r2.top + r2.height + t2 >= 0, n2 = r2.left - t2 <= i2 + t2 && r2.left + r2.width + t2 >= 0;
      return o2 && n2;
    }
    function b(e2, t2) {
      return e2.composedPath && e2.composedPath().indexOf(t2) > -1;
    }
    function x(e2, t2) {
      return t2.parentNode.replaceChild(e2, t2), e2;
    }
    function w(e2) {
      return document.createElement(e2);
    }
    function j(e2 = "", t2 = "") {
      let r2 = w("i");
      return s(r2, "art-icon"), s(r2, `art-icon-${e2}`), u(r2, t2), r2;
    }
    function k(e2, t2) {
      let r2 = document.getElementById(e2);
      if (r2) r2.textContent = t2;
      else {
        let r3 = w("style");
        r3.id = e2, r3.textContent = t2, document.head.appendChild(r3);
      }
    }
    function S() {
      let e2 = document.createElement("div");
      return e2.style.display = "flex", "flex" === e2.style.display;
    }
    function I(e2) {
      return e2.getBoundingClientRect();
    }
  }, { "./compatibility": "luXC1", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], luXC1: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "userAgent", () => i), a.export(r, "isSafari", () => o), a.export(r, "isWechat", () => n), a.export(r, "isIE", () => s), a.export(r, "isAndroid", () => l), a.export(r, "isIOS", () => c), a.export(r, "isIOS13", () => u), a.export(r, "isMobile", () => p), a.export(r, "isBrowser", () => d);
    let i = "undefined" != typeof navigator ? navigator.userAgent : "", o = /^((?!chrome|android).)*safari/i.test(i), n = /MicroMessenger/i.test(i), s = /MSIE|Trident/i.test(i), l = /android/i.test(i), c = /iPad|iPhone|iPod/i.test(i) && !window.MSStream, u = c || i.includes("Macintosh") && navigator.maxTouchPoints >= 1, p = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(i) || u, d = "undefined" != typeof window;
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2nFlF": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "ArtPlayerError", () => i), a.export(r, "errorHandle", () => o);
    class i extends Error {
      constructor(e2, t2) {
        super(e2), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t2 || this.constructor), this.name = "ArtPlayerError";
      }
    }
    function o(e2, t2) {
      if (!e2) throw new i(t2);
      return e2;
    }
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], yqFoT: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    function i(e2) {
      return "WEBVTT \r\n\r\n".concat(e2.replace(/(\d\d:\d\d:\d\d)[,.](\d+)/g, (e3, t2, r2) => {
        let a2 = r2.slice(0, 3);
        return 1 === r2.length && (a2 = r2 + "00"), 2 === r2.length && (a2 = r2 + "0"), `${t2},${a2}`;
      }).replace(/\{\\([ibu])\}/g, "</$1>").replace(/\{\\([ibu])1\}/g, "<$1>").replace(/\{([ibu])\}/g, "<$1>").replace(/\{\/([ibu])\}/g, "</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2").replace(/{[\s\S]*?}/g, "").concat("\r\n\r\n"));
    }
    function o(e2) {
      return URL.createObjectURL(new Blob([e2], { type: "text/vtt" }));
    }
    function n(e2) {
      let t2 = RegExp("Dialogue:\\s\\d,(\\d+:\\d\\d:\\d\\d.\\d\\d),(\\d+:\\d\\d:\\d\\d.\\d\\d),([^,]*),([^,]*),(?:[^,]*,){4}([\\s\\S]*)$", "i");
      function r2(e3 = "") {
        return e3.split(/[:.]/).map((e4, t3, r3) => {
          if (t3 === r3.length - 1) {
            if (1 === e4.length) return `.${e4}00`;
            if (2 === e4.length) return `.${e4}0`;
          } else if (1 === e4.length) return (0 === t3 ? "0" : ":0") + e4;
          return 0 === t3 ? e4 : t3 === r3.length - 1 ? `.${e4}` : `:${e4}`;
        }).join("");
      }
      return "WEBVTT\n\n" + e2.split(/\r?\n/).map((e3) => {
        let a2 = e3.match(t2);
        return a2 ? { start: r2(a2[1].trim()), end: r2(a2[2].trim()), text: a2[5].replace(/{[\s\S]*?}/g, "").replace(/(\\N)/g, "\n").trim().split(/\r?\n/).map((e4) => e4.trim()).join("\n") } : null;
      }).filter((e3) => e3).map((e3, t3) => e3 ? t3 + 1 + `
${e3.start} --> ${e3.end}
${e3.text}` : "").filter((e3) => e3.trim()).join("\n\n");
    }
    a.defineInteropFlag(r), a.export(r, "srtToVtt", () => i), a.export(r, "vttToBlob", () => o), a.export(r, "assToVtt", () => n);
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "1VRQn": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    function i(e2, t2) {
      let r2 = document.createElement("a");
      r2.style.display = "none", r2.href = e2, r2.download = t2, document.body.appendChild(r2), r2.click(), document.body.removeChild(r2);
    }
    a.defineInteropFlag(r), a.export(r, "getExt", () => function e2(t2) {
      return t2.includes("?") ? e2(t2.split("?")[0]) : t2.includes("#") ? e2(t2.split("#")[0]) : t2.trim().toLowerCase().split(".").pop();
    }), a.export(r, "download", () => i);
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "3weX2": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "def", () => i), a.export(r, "has", () => n), a.export(r, "get", () => s), a.export(r, "mergeDeep", () => function e2(...t2) {
      let r2 = (e3) => e3 && "object" == typeof e3 && !Array.isArray(e3);
      return t2.reduce((t3, a2) => (Object.keys(a2).forEach((i2) => {
        let o2 = t3[i2], n2 = a2[i2];
        Array.isArray(o2) && Array.isArray(n2) ? t3[i2] = o2.concat(...n2) : r2(o2) && r2(n2) ? t3[i2] = e2(o2, n2) : t3[i2] = n2;
      }), t3), {});
    });
    let i = Object.defineProperty, { hasOwnProperty: o } = Object.prototype;
    function n(e2, t2) {
      return o.call(e2, t2);
    }
    function s(e2, t2) {
      return Object.getOwnPropertyDescriptor(e2, t2);
    }
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7kBIx": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    function i(e2 = 0) {
      return new Promise((t2) => setTimeout(t2, e2));
    }
    function o(e2, t2) {
      let r2;
      return function(...a2) {
        clearTimeout(r2), r2 = setTimeout(() => (r2 = null, e2.apply(this, a2)), t2);
      };
    }
    function n(e2, t2) {
      let r2 = false;
      return function(...a2) {
        r2 || (e2.apply(this, a2), r2 = true, setTimeout(function() {
          r2 = false;
        }, t2));
      };
    }
    a.defineInteropFlag(r), a.export(r, "sleep", () => i), a.export(r, "debounce", () => o), a.export(r, "throttle", () => n);
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "13atT": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    function i(e2, t2, r2) {
      return Math.max(Math.min(e2, Math.max(t2, r2)), Math.min(t2, r2));
    }
    function o(e2) {
      return e2.charAt(0).toUpperCase() + e2.slice(1);
    }
    function n(e2) {
      return ["string", "number"].includes(typeof e2);
    }
    function s(e2) {
      if (!e2) return "00:00";
      let t2 = Math.floor(e2 / 3600), r2 = Math.floor((e2 - 3600 * t2) / 60), a2 = Math.floor(e2 - 3600 * t2 - 60 * r2);
      return (t2 > 0 ? [t2, r2, a2] : [r2, a2]).map((e3) => e3 < 10 ? `0${e3}` : String(e3)).join(":");
    }
    function l(e2) {
      return e2.replace(/[&<>'"]/g, (e3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[e3] || e3);
    }
    function c(e2) {
      let t2 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&#39;": "'", "&quot;": '"' }, r2 = RegExp(`(${Object.keys(t2).join("|")})`, "g");
      return e2.replace(r2, (e3) => t2[e3] || e3);
    }
    a.defineInteropFlag(r), a.export(r, "clamp", () => i), a.export(r, "capitalize", () => o), a.export(r, "isStringOrNumber", () => n), a.export(r, "secondToTime", () => s), a.export(r, "escape", () => l), a.export(r, "unescape", () => c);
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], AdvwB: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "ComponentOption", () => d);
    var i = e("../utils");
    let o = "array", n = "boolean", s = "string", l = "number", c = "object", u = "function";
    function p(e2, t2, r2) {
      return (0, i.errorHandle)(t2 === s || t2 === l || e2 instanceof Element, `${r2.join(".")} require '${s}' or 'Element' type`);
    }
    let d = { html: p, disable: `?${n}`, name: `?${s}`, index: `?${l}`, style: `?${c}`, click: `?${u}`, mounted: `?${u}`, tooltip: `?${s}|${l}`, width: `?${l}`, selector: `?${o}`, onSelect: `?${u}`, switch: `?${n}`, onSwitch: `?${u}`, range: `?${o}`, onRange: `?${u}`, onChange: `?${u}` };
    r.default = { id: s, container: p, url: s, poster: s, type: s, theme: s, lang: s, volume: l, isLive: n, muted: n, autoplay: n, autoSize: n, autoMini: n, loop: n, flip: n, playbackRate: n, aspectRatio: n, screenshot: n, setting: n, hotkey: n, pip: n, mutex: n, backdrop: n, fullscreen: n, fullscreenWeb: n, subtitleOffset: n, miniProgressBar: n, useSSR: n, playsInline: n, lock: n, fastForward: n, autoPlayback: n, autoOrientation: n, airplay: n, plugins: [u], layers: [d], contextmenu: [d], settings: [d], controls: [{ ...d, position: (e2, t2, r2) => {
      let a2 = ["top", "left", "right"];
      return (0, i.errorHandle)(a2.includes(e2), `${r2.join(".")} only accept ${a2.toString()} as parameters`);
    } }], quality: [{ default: `?${n}`, html: s, url: s }], highlight: [{ time: l, text: s }], thumbnails: { url: s, number: l, column: l, width: l, height: l }, subtitle: { url: s, name: s, type: s, style: c, escape: n, encoding: s, onVttLoad: u }, moreVideoAttr: c, i18n: c, icons: c, cssVar: c, customType: c };
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9Xmqu": [function(e, t, r) {
    e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = { propertys: ["audioTracks", "autoplay", "buffered", "controller", "controls", "crossOrigin", "currentSrc", "currentTime", "defaultMuted", "defaultPlaybackRate", "duration", "ended", "error", "loop", "mediaGroup", "muted", "networkState", "paused", "playbackRate", "played", "preload", "readyState", "seekable", "seeking", "src", "startDate", "textTracks", "videoTracks", "volume"], methods: ["addTextTrack", "canPlayType", "load", "play", "pause"], events: ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], prototypes: ["width", "height", "videoWidth", "videoHeight", "poster", "webkitDecodedFrameCount", "webkitDroppedFrameCount", "playsInline", "webkitSupportsFullscreen", "webkitDisplayingFullscreen", "onenterpictureinpicture", "onleavepictureinpicture", "disablePictureInPicture", "cancelVideoFrameCallback", "requestVideoFrameCallback", "getVideoPlaybackQuality", "requestPictureInPicture", "webkitEnterFullScreen", "webkitEnterFullscreen", "webkitExitFullScreen", "webkitExitFullscreen"] };
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2gKYH": [function(e, t, r) {
    e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
    var a = e("./utils");
    class i {
      constructor(e2) {
        this.art = e2;
        let { option: t2, constructor: r2 } = e2;
        t2.container instanceof Element ? this.$container = t2.container : (this.$container = (0, a.query)(t2.container), (0, a.errorHandle)(this.$container, `No container element found by ${t2.container}`)), (0, a.errorHandle)((0, a.supportsFlex)(), "The current browser does not support flex layout");
        let i2 = this.$container.tagName.toLowerCase();
        (0, a.errorHandle)("div" === i2, `Unsupported container element type, only support 'div' but got '${i2}'`), (0, a.errorHandle)(r2.instances.every((e3) => e3.template.$container !== this.$container), "Cannot mount multiple instances on the same dom element"), this.query = this.query.bind(this), this.$container.dataset.artId = e2.id, this.init();
      }
      static get html() {
        return `<div class="art-video-player art-subtitle-show art-layer-show art-control-show art-mask-show"><video class="art-video"><track default kind="metadata" src=""></track></video><div class="art-poster"></div><div class="art-subtitle"></div><div class="art-danmuku"></div><div class="art-layers"></div><div class="art-mask"><div class="art-state"></div></div><div class="art-bottom"><div class="art-progress"></div><div class="art-controls"><div class="art-controls-left"></div><div class="art-controls-center"></div><div class="art-controls-right"></div></div></div><div class="art-loading"></div><div class="art-notice"><div class="art-notice-inner"></div></div><div class="art-settings"></div><div class="art-info"><div class="art-info-panel"><div class="art-info-item"><div class="art-info-title">Player version:</div><div class="art-info-content">5.1.7</div></div><div class="art-info-item"><div class="art-info-title">Video url:</div><div class="art-info-content" data-video="src"></div></div><div class="art-info-item"><div class="art-info-title">Video volume:</div><div class="art-info-content" data-video="volume"></div></div><div class="art-info-item"><div class="art-info-title">Video time:</div><div class="art-info-content" data-video="currentTime"></div></div><div class="art-info-item"><div class="art-info-title">Video duration:</div><div class="art-info-content" data-video="duration"></div></div><div class="art-info-item"><div class="art-info-title">Video resolution:</div><div class="art-info-content"><span data-video="videoWidth"></span>x<span data-video="videoHeight"></span></div></div></div><div class="art-info-close">[x]</div></div><div class="art-contextmenus"></div></div>`;
      }
      query(e2) {
        return (0, a.query)(e2, this.$container);
      }
      init() {
        let { option: e2 } = this.art;
        e2.useSSR || (this.$container.innerHTML = i.html), this.$player = this.query(".art-video-player"), this.$video = this.query(".art-video"), this.$track = this.query("track"), this.$poster = this.query(".art-poster"), this.$subtitle = this.query(".art-subtitle"), this.$danmuku = this.query(".art-danmuku"), this.$bottom = this.query(".art-bottom"), this.$progress = this.query(".art-progress"), this.$controls = this.query(".art-controls"), this.$controlsLeft = this.query(".art-controls-left"), this.$controlsCenter = this.query(".art-controls-center"), this.$controlsRight = this.query(".art-controls-right"), this.$layer = this.query(".art-layers"), this.$loading = this.query(".art-loading"), this.$notice = this.query(".art-notice"), this.$noticeInner = this.query(".art-notice-inner"), this.$mask = this.query(".art-mask"), this.$state = this.query(".art-state"), this.$setting = this.query(".art-settings"), this.$info = this.query(".art-info"), this.$infoPanel = this.query(".art-info-panel"), this.$infoClose = this.query(".art-info-close"), this.$contextmenu = this.query(".art-contextmenus"), e2.backdrop && (0, a.addClass)(this.$player, "art-backdrop"), a.isMobile && (0, a.addClass)(this.$player, "art-mobile");
      }
      destroy(e2) {
        e2 ? this.$container.innerHTML = "" : (0, a.addClass)(this.$player, "art-destroy");
      }
    }
    r.default = i;
  }, { "./utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "1AdeF": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("../utils"), o = e("./zh-cn"), n = a.interopDefault(o);
    r.default = class {
      constructor(e2) {
        this.art = e2, this.languages = { "zh-cn": n.default }, this.language = {}, this.update(e2.option.i18n);
      }
      init() {
        let e2 = this.art.option.lang.toLowerCase();
        this.language = this.languages[e2] || {};
      }
      get(e2) {
        return this.language[e2] || e2;
      }
      update(e2) {
        this.languages = (0, i.mergeDeep)(this.languages, e2), this.init();
      }
    };
  }, { "../utils": "h3rH9", "./zh-cn": "3ZSKq", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "3ZSKq": [function(e, t, r) {
    e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
    let a = { "Video Info": "统计信息", Close: "关闭", "Video Load Failed": "加载失败", Volume: "音量", Play: "播放", Pause: "暂停", Rate: "速度", Mute: "静音", "Video Flip": "画面翻转", Horizontal: "水平", Vertical: "垂直", Reconnect: "重新连接", "Show Setting": "显示设置", "Hide Setting": "隐藏设置", Screenshot: "截图", "Play Speed": "播放速度", "Aspect Ratio": "画面比例", Default: "默认", Normal: "正常", Open: "打开", "Switch Video": "切换", "Switch Subtitle": "切换字幕", Fullscreen: "全屏", "Exit Fullscreen": "退出全屏", "Web Fullscreen": "网页全屏", "Exit Web Fullscreen": "退出网页全屏", "Mini Player": "迷你播放器", "PIP Mode": "开启画中画", "Exit PIP Mode": "退出画中画", "PIP Not Supported": "不支持画中画", "Fullscreen Not Supported": "不支持全屏", "Subtitle Offset": "字幕偏移", "Last Seen": "上次看到", "Jump Play": "跳转播放", AirPlay: "隔空播放", "AirPlay Not Available": "隔空播放不可用" };
    r.default = a, "undefined" != typeof window && (window["artplayer-i18n-zh-cn"] = a);
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "556MW": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("./urlMix"), o = a.interopDefault(i), n = e("./attrMix"), s = a.interopDefault(n), l = e("./playMix"), c = a.interopDefault(l), u = e("./pauseMix"), p = a.interopDefault(u), d = e("./toggleMix"), f = a.interopDefault(d), h = e("./seekMix"), m = a.interopDefault(h), g = e("./volumeMix"), v = a.interopDefault(g), y = e("./currentTimeMix"), b = a.interopDefault(y), x = e("./durationMix"), w = a.interopDefault(x), j = e("./switchMix"), k = a.interopDefault(j), S = e("./playbackRateMix"), I = a.interopDefault(S), T = e("./aspectRatioMix"), O = a.interopDefault(T), E = e("./screenshotMix"), M = a.interopDefault(E), $ = e("./fullscreenMix"), F = a.interopDefault($), C = e("./fullscreenWebMix"), D = a.interopDefault(C), H = e("./pipMix"), B = a.interopDefault(H), z = e("./loadedMix"), R = a.interopDefault(z), A = e("./playedMix"), L = a.interopDefault(A), P = e("./playingMix"), N = a.interopDefault(P), Z = e("./autoSizeMix"), _ = a.interopDefault(Z), q = e("./rectMix"), V = a.interopDefault(q), W = e("./flipMix"), U = a.interopDefault(W), Y = e("./miniMix"), K = a.interopDefault(Y), X = e("./posterMix"), G = a.interopDefault(X), J = e("./autoHeightMix"), Q = a.interopDefault(J), ee = e("./cssVarMix"), et = a.interopDefault(ee), er = e("./themeMix"), ea = a.interopDefault(er), ei = e("./typeMix"), eo = a.interopDefault(ei), en = e("./stateMix"), es = a.interopDefault(en), el = e("./subtitleOffsetMix"), ec = a.interopDefault(el), eu = e("./airplayMix"), ep = a.interopDefault(eu), ed = e("./qualityMix"), ef = a.interopDefault(ed), eh = e("./thumbnailsMix"), em = a.interopDefault(eh), eg = e("./optionInit"), ev = a.interopDefault(eg), ey = e("./eventInit"), eb = a.interopDefault(ey);
    r.default = class {
      constructor(e2) {
        (0, o.default)(e2), (0, s.default)(e2), (0, c.default)(e2), (0, p.default)(e2), (0, f.default)(e2), (0, m.default)(e2), (0, v.default)(e2), (0, b.default)(e2), (0, w.default)(e2), (0, k.default)(e2), (0, I.default)(e2), (0, O.default)(e2), (0, M.default)(e2), (0, F.default)(e2), (0, D.default)(e2), (0, B.default)(e2), (0, R.default)(e2), (0, L.default)(e2), (0, N.default)(e2), (0, _.default)(e2), (0, V.default)(e2), (0, U.default)(e2), (0, K.default)(e2), (0, G.default)(e2), (0, Q.default)(e2), (0, et.default)(e2), (0, ea.default)(e2), (0, eo.default)(e2), (0, es.default)(e2), (0, ec.default)(e2), (0, ep.default)(e2), (0, ef.default)(e2), (0, em.default)(e2), (0, eb.default)(e2), (0, ev.default)(e2);
      }
    };
  }, { "./urlMix": "2mRAc", "./attrMix": "2EA19", "./playMix": "fD2Tc", "./pauseMix": "c3LGJ", "./toggleMix": "fVsAa", "./seekMix": "dmROF", "./volumeMix": "9jtfB", "./currentTimeMix": "7NCDR", "./durationMix": "YS7JL", "./switchMix": "dzUqN", "./playbackRateMix": "5I2mT", "./aspectRatioMix": "7m6R8", "./screenshotMix": "2dgtR", "./fullscreenMix": "fKDW8", "./fullscreenWebMix": "lNvYI", "./pipMix": "8j7oC", "./loadedMix": "dwVOT", "./playedMix": "dDeLx", "./playingMix": "ceoBp", "./autoSizeMix": "lcWXX", "./rectMix": "f7y88", "./flipMix": "l4qt5", "./miniMix": "9ZPBQ", "./posterMix": "5K8hA", "./autoHeightMix": "3T5ls", "./cssVarMix": "6KfHs", "./themeMix": "7lcSc", "./typeMix": "8JgTw", "./stateMix": "cebt1", "./subtitleOffsetMix": "hJvIy", "./airplayMix": "4Tp0U", "./qualityMix": "3wZgN", "./thumbnailsMix": "k56Iy", "./optionInit": "iPdgW", "./eventInit": "3mj0J", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2mRAc": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { option: t2, template: { $video: r2 } } = e2;
      (0, i.def)(e2, "url", { get: () => r2.src, async set(a2) {
        if (a2) {
          let o2 = e2.url, n = t2.type || (0, i.getExt)(a2), s = t2.customType[n];
          n && s ? (await (0, i.sleep)(), e2.loading.show = true, s.call(e2, r2, a2, e2)) : (URL.revokeObjectURL(o2), r2.src = a2), o2 !== e2.url && (e2.option.url = a2, e2.isReady && o2 && e2.once("video:canplay", () => {
            e2.emit("restart", a2);
          }));
        } else await (0, i.sleep)(), e2.loading.show = true;
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2EA19": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { template: { $video: t2 } } = e2;
      (0, i.def)(e2, "attr", { value(e3, r2) {
        if (void 0 === r2) return t2[e3];
        t2[e3] = r2;
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], fD2Tc: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { i18n: t2, notice: r2, option: a2, constructor: { instances: o2 }, template: { $video: n } } = e2;
      (0, i.def)(e2, "play", { value: async function() {
        let i2 = await n.play();
        if (r2.show = t2.get("Play"), e2.emit("play"), a2.mutex) for (let t3 = 0; t3 < o2.length; t3++) {
          let r3 = o2[t3];
          r3 !== e2 && r3.pause();
        }
        return i2;
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], c3LGJ: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { template: { $video: t2 }, i18n: r2, notice: a2 } = e2;
      (0, i.def)(e2, "pause", { value() {
        let i2 = t2.pause();
        return a2.show = r2.get("Pause"), e2.emit("pause"), i2;
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], fVsAa: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      (0, i.def)(e2, "toggle", { value: () => e2.playing ? e2.pause() : e2.play() });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], dmROF: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { notice: t2 } = e2;
      (0, i.def)(e2, "seek", { set(r2) {
        e2.currentTime = r2, e2.emit("seek", e2.currentTime), e2.duration && (t2.show = `${(0, i.secondToTime)(e2.currentTime)} / ${(0, i.secondToTime)(e2.duration)}`);
      } }), (0, i.def)(e2, "forward", { set(t3) {
        e2.seek = e2.currentTime + t3;
      } }), (0, i.def)(e2, "backward", { set(t3) {
        e2.seek = e2.currentTime - t3;
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9jtfB": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { template: { $video: t2 }, i18n: r2, notice: a2, storage: o2 } = e2;
      (0, i.def)(e2, "volume", { get: () => t2.volume || 0, set: (e3) => {
        t2.volume = (0, i.clamp)(e3, 0, 1), a2.show = `${r2.get("Volume")}: ${parseInt(100 * t2.volume, 10)}`, 0 !== t2.volume && o2.set("volume", t2.volume);
      } }), (0, i.def)(e2, "muted", { get: () => t2.muted, set: (r3) => {
        t2.muted = r3, e2.emit("muted", r3);
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7NCDR": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { $video: t2 } = e2.template;
      (0, i.def)(e2, "currentTime", { get: () => t2.currentTime || 0, set: (r2) => {
        Number.isNaN(r2 = parseFloat(r2)) || (t2.currentTime = (0, i.clamp)(r2, 0, e2.duration));
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], YS7JL: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      (0, i.def)(e2, "duration", { get: () => {
        let { duration: t2 } = e2.template.$video;
        return t2 === 1 / 0 ? 0 : t2 || 0;
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], dzUqN: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      function t2(t3, r2) {
        return new Promise((a2, i2) => {
          if (t3 === e2.url) return;
          let { playing: o2, aspectRatio: n, playbackRate: s } = e2;
          e2.pause(), e2.url = t3, e2.notice.show = "", e2.once("video:error", i2), e2.once("video:loadedmetadata", () => {
            e2.currentTime = r2;
          }), e2.once("video:canplay", async () => {
            e2.playbackRate = s, e2.aspectRatio = n, o2 && await e2.play(), e2.notice.show = "", a2();
          });
        });
      }
      (0, i.def)(e2, "switchQuality", { value: (r2) => t2(r2, e2.currentTime) }), (0, i.def)(e2, "switchUrl", { value: (e3) => t2(e3, 0) }), (0, i.def)(e2, "switch", { set: e2.switchUrl });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "5I2mT": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { template: { $video: t2 }, i18n: r2, notice: a2 } = e2;
      (0, i.def)(e2, "playbackRate", { get: () => t2.playbackRate, set(i2) {
        i2 ? i2 !== t2.playbackRate && (t2.playbackRate = i2, a2.show = `${r2.get("Rate")}: ${1 === i2 ? r2.get("Normal") : `${i2}x`}`) : e2.playbackRate = 1;
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7m6R8": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { i18n: t2, notice: r2, template: { $video: a2, $player: o2 } } = e2;
      (0, i.def)(e2, "aspectRatio", { get: () => o2.dataset.aspectRatio || "default", set(n) {
        if (n || (n = "default"), "default" === n) (0, i.setStyle)(a2, "width", null), (0, i.setStyle)(a2, "height", null), (0, i.setStyle)(a2, "margin", null), delete o2.dataset.aspectRatio;
        else {
          let e3 = n.split(":").map(Number), { clientWidth: t3, clientHeight: r3 } = o2, s = e3[0] / e3[1];
          t3 / r3 > s ? ((0, i.setStyle)(a2, "width", `${s * r3}px`), (0, i.setStyle)(a2, "height", "100%"), (0, i.setStyle)(a2, "margin", "0 auto")) : ((0, i.setStyle)(a2, "width", "100%"), (0, i.setStyle)(a2, "height", `${t3 / s}px`), (0, i.setStyle)(a2, "margin", "auto 0")), o2.dataset.aspectRatio = n;
        }
        r2.show = `${t2.get("Aspect Ratio")}: ${"default" === n ? t2.get("Default") : n}`, e2.emit("aspectRatio", n);
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2dgtR": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { notice: t2, template: { $video: r2 } } = e2, a2 = (0, i.createElement)("canvas");
      (0, i.def)(e2, "getDataURL", { value: () => new Promise((e3, i2) => {
        try {
          a2.width = r2.videoWidth, a2.height = r2.videoHeight, a2.getContext("2d").drawImage(r2, 0, 0), e3(a2.toDataURL("image/png"));
        } catch (e4) {
          t2.show = e4, i2(e4);
        }
      }) }), (0, i.def)(e2, "getBlobUrl", { value: () => new Promise((e3, i2) => {
        try {
          a2.width = r2.videoWidth, a2.height = r2.videoHeight, a2.getContext("2d").drawImage(r2, 0, 0), a2.toBlob((t3) => {
            e3(URL.createObjectURL(t3));
          });
        } catch (e4) {
          t2.show = e4, i2(e4);
        }
      }) }), (0, i.def)(e2, "screenshot", { value: async (t3) => {
        let a3 = await e2.getDataURL(), o2 = t3 || `artplayer_${(0, i.secondToTime)(r2.currentTime)}`;
        return (0, i.download)(a3, `${o2}.png`), e2.emit("screenshot", a3), a3;
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], fKDW8: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => s);
    var i = e("../libs/screenfull"), o = a.interopDefault(i), n = e("../utils");
    function s(e2) {
      let { i18n: t2, notice: r2, template: { $video: a2, $player: i2 } } = e2, s2 = (e3) => {
        o.default.on("change", () => {
          e3.emit("fullscreen", o.default.isFullscreen);
        }), o.default.on("error", (t3) => {
          e3.emit("fullscreenError", t3);
        }), (0, n.def)(e3, "fullscreen", { get: () => o.default.isFullscreen, async set(t3) {
          t3 ? (e3.state = "fullscreen", await o.default.request(i2), (0, n.addClass)(i2, "art-fullscreen")) : (await o.default.exit(), (0, n.removeClass)(i2, "art-fullscreen")), e3.emit("resize");
        } });
      }, l = (e3) => {
        e3.proxy(document, "webkitfullscreenchange", () => {
          e3.emit("fullscreen", e3.fullscreen), e3.emit("resize");
        }), (0, n.def)(e3, "fullscreen", { get: () => document.fullscreenElement === a2, set(t3) {
          t3 ? (e3.state = "fullscreen", a2.webkitEnterFullscreen()) : a2.webkitExitFullscreen();
        } });
      };
      e2.once("video:loadedmetadata", () => {
        o.default.isEnabled ? s2(e2) : a2.webkitSupportsFullscreen ? l(e2) : (0, n.def)(e2, "fullscreen", { get: () => false, set() {
          r2.show = t2.get("Fullscreen Not Supported");
        } }), (0, n.def)(e2, "fullscreen", (0, n.get)(e2, "fullscreen"));
      });
    }
  }, { "../libs/screenfull": "lUahW", "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], lUahW: [function(e, t, r) {
    e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
    let a = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], i = (() => {
      if ("undefined" == typeof document) return false;
      let e2 = a[0], t2 = {};
      for (let r2 of a) if (r2[1] in document) {
        for (let [a2, i2] of r2.entries()) t2[e2[a2]] = i2;
        return t2;
      }
      return false;
    })(), o = { change: i.fullscreenchange, error: i.fullscreenerror }, n = { request: (e2 = document.documentElement, t2) => new Promise((r2, a2) => {
      let o2 = () => {
        n.off("change", o2), r2();
      };
      n.on("change", o2);
      let s = e2[i.requestFullscreen](t2);
      s instanceof Promise && s.then(o2).catch(a2);
    }), exit: () => new Promise((e2, t2) => {
      if (!n.isFullscreen) {
        e2();
        return;
      }
      let r2 = () => {
        n.off("change", r2), e2();
      };
      n.on("change", r2);
      let a2 = document[i.exitFullscreen]();
      a2 instanceof Promise && a2.then(r2).catch(t2);
    }), toggle: (e2, t2) => n.isFullscreen ? n.exit() : n.request(e2, t2), onchange(e2) {
      n.on("change", e2);
    }, onerror(e2) {
      n.on("error", e2);
    }, on(e2, t2) {
      let r2 = o[e2];
      r2 && document.addEventListener(r2, t2, false);
    }, off(e2, t2) {
      let r2 = o[e2];
      r2 && document.removeEventListener(r2, t2, false);
    }, raw: i };
    Object.defineProperties(n, { isFullscreen: { get: () => !!document[i.fullscreenElement] }, element: { enumerable: true, get: () => document[i.fullscreenElement] }, isEnabled: { enumerable: true, get: () => !!document[i.fullscreenEnabled] } }), i || (n = { isEnabled: false }), r.default = n;
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], lNvYI: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { constructor: t2, template: { $container: r2, $player: a2 } } = e2, o2 = "";
      (0, i.def)(e2, "fullscreenWeb", { get: () => (0, i.hasClass)(a2, "art-fullscreen-web"), set(n) {
        n ? (o2 = a2.style.cssText, t2.FULLSCREEN_WEB_IN_BODY && (0, i.append)(document.body, a2), e2.state = "fullscreenWeb", (0, i.setStyle)(a2, "width", "100%"), (0, i.setStyle)(a2, "height", "100%"), (0, i.addClass)(a2, "art-fullscreen-web"), e2.emit("fullscreenWeb", true)) : (t2.FULLSCREEN_WEB_IN_BODY && (0, i.append)(r2, a2), o2 && (a2.style.cssText = o2, o2 = ""), (0, i.removeClass)(a2, "art-fullscreen-web"), e2.emit("fullscreenWeb", false)), e2.emit("resize");
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "8j7oC": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { i18n: t2, notice: r2, template: { $video: a2 } } = e2;
      document.pictureInPictureEnabled ? function(e3) {
        let { template: { $video: t3 }, proxy: r3, notice: a3 } = e3;
        t3.disablePictureInPicture = false, (0, i.def)(e3, "pip", { get: () => document.pictureInPictureElement, set(r4) {
          r4 ? (e3.state = "pip", t3.requestPictureInPicture().catch((e4) => {
            throw a3.show = e4, e4;
          })) : document.exitPictureInPicture().catch((e4) => {
            throw a3.show = e4, e4;
          });
        } }), r3(t3, "enterpictureinpicture", () => {
          e3.emit("pip", true);
        }), r3(t3, "leavepictureinpicture", () => {
          e3.emit("pip", false);
        });
      }(e2) : a2.webkitSupportsPresentationMode ? function(e3) {
        let { $video: t3 } = e3.template;
        t3.webkitSetPresentationMode("inline"), (0, i.def)(e3, "pip", { get: () => "picture-in-picture" === t3.webkitPresentationMode, set(r3) {
          r3 ? (e3.state = "pip", t3.webkitSetPresentationMode("picture-in-picture"), e3.emit("pip", true)) : (t3.webkitSetPresentationMode("inline"), e3.emit("pip", false));
        } });
      }(e2) : (0, i.def)(e2, "pip", { get: () => false, set() {
        r2.show = t2.get("PIP Not Supported");
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], dwVOT: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { $video: t2 } = e2.template;
      (0, i.def)(e2, "loaded", { get: () => e2.loadedTime / t2.duration }), (0, i.def)(e2, "loadedTime", { get: () => t2.buffered.length ? t2.buffered.end(t2.buffered.length - 1) : 0 });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], dDeLx: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      (0, i.def)(e2, "played", { get: () => e2.currentTime / e2.duration });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], ceoBp: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { $video: t2 } = e2.template;
      (0, i.def)(e2, "playing", { get: () => !!(t2.currentTime > 0 && !t2.paused && !t2.ended && t2.readyState > 2) });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], lcWXX: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { $container: t2, $player: r2, $video: a2 } = e2.template;
      (0, i.def)(e2, "autoSize", { value() {
        let { videoWidth: o2, videoHeight: n } = a2, { width: s, height: l } = (0, i.getRect)(t2), c = o2 / n;
        s / l > c ? ((0, i.setStyle)(r2, "width", `${l * c / s * 100}%`), (0, i.setStyle)(r2, "height", "100%")) : ((0, i.setStyle)(r2, "width", "100%"), (0, i.setStyle)(r2, "height", `${s / c / l * 100}%`)), e2.emit("autoSize", { width: e2.width, height: e2.height });
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], f7y88: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      (0, i.def)(e2, "rect", { get: () => (0, i.getRect)(e2.template.$player) });
      let t2 = ["bottom", "height", "left", "right", "top", "width"];
      for (let r2 = 0; r2 < t2.length; r2++) {
        let a2 = t2[r2];
        (0, i.def)(e2, a2, { get: () => e2.rect[a2] });
      }
      (0, i.def)(e2, "x", { get: () => e2.left + window.pageXOffset }), (0, i.def)(e2, "y", { get: () => e2.top + window.pageYOffset });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], l4qt5: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { template: { $player: t2 }, i18n: r2, notice: a2 } = e2;
      (0, i.def)(e2, "flip", { get: () => t2.dataset.flip || "normal", set(o2) {
        o2 || (o2 = "normal"), "normal" === o2 ? delete t2.dataset.flip : t2.dataset.flip = o2, a2.show = `${r2.get("Video Flip")}: ${r2.get((0, i.capitalize)(o2))}`, e2.emit("flip", o2);
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9ZPBQ": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { icons: t2, proxy: r2, storage: a2, template: { $player: o2, $video: n } } = e2, s = false, l = 0, c = 0;
      function u() {
        let { $mini: t3 } = e2.template;
        t3 && ((0, i.removeClass)(o2, "art-mini"), (0, i.setStyle)(t3, "display", "none"), o2.prepend(n), e2.emit("mini", false));
      }
      function p(t3, r3) {
        e2.playing ? ((0, i.setStyle)(t3, "display", "none"), (0, i.setStyle)(r3, "display", "flex")) : ((0, i.setStyle)(t3, "display", "flex"), (0, i.setStyle)(r3, "display", "none"));
      }
      function d() {
        let { $mini: t3 } = e2.template, r3 = (0, i.getRect)(t3), o3 = window.innerHeight - r3.height - 50, n2 = window.innerWidth - r3.width - 50;
        a2.set("top", o3), a2.set("left", n2), (0, i.setStyle)(t3, "top", `${o3}px`), (0, i.setStyle)(t3, "left", `${n2}px`);
      }
      (0, i.def)(e2, "mini", { get: () => (0, i.hasClass)(o2, "art-mini"), set(f) {
        if (f) {
          e2.state = "mini", (0, i.addClass)(o2, "art-mini");
          let f2 = function() {
            let { $mini: o3 } = e2.template;
            if (o3) return (0, i.append)(o3, n), (0, i.setStyle)(o3, "display", "flex");
            {
              let o4 = (0, i.createElement)("div");
              (0, i.addClass)(o4, "art-mini-popup"), (0, i.append)(document.body, o4), e2.template.$mini = o4, (0, i.append)(o4, n);
              let d2 = (0, i.append)(o4, '<div class="art-mini-close"></div>');
              (0, i.append)(d2, t2.close), r2(d2, "click", u);
              let f3 = (0, i.append)(o4, '<div class="art-mini-state"></div>'), h2 = (0, i.append)(f3, t2.play), m2 = (0, i.append)(f3, t2.pause);
              return r2(h2, "click", () => e2.play()), r2(m2, "click", () => e2.pause()), p(h2, m2), e2.on("video:playing", () => p(h2, m2)), e2.on("video:pause", () => p(h2, m2)), e2.on("video:timeupdate", () => p(h2, m2)), r2(o4, "mousedown", (e3) => {
                s = 0 === e3.button, l = e3.pageX, c = e3.pageY;
              }), e2.on("document:mousemove", (e3) => {
                if (s) {
                  (0, i.addClass)(o4, "art-mini-droging");
                  let t3 = e3.pageX - l, r3 = e3.pageY - c;
                  (0, i.setStyle)(o4, "transform", `translate(${t3}px, ${r3}px)`);
                }
              }), e2.on("document:mouseup", () => {
                if (s) {
                  s = false, (0, i.removeClass)(o4, "art-mini-droging");
                  let e3 = (0, i.getRect)(o4);
                  a2.set("left", e3.left), a2.set("top", e3.top), (0, i.setStyle)(o4, "left", `${e3.left}px`), (0, i.setStyle)(o4, "top", `${e3.top}px`), (0, i.setStyle)(o4, "transform", null);
                }
              }), o4;
            }
          }(), h = a2.get("top"), m = a2.get("left");
          h && m ? ((0, i.setStyle)(f2, "top", `${h}px`), (0, i.setStyle)(f2, "left", `${m}px`), (0, i.isInViewport)(f2) || d()) : d(), e2.emit("mini", true);
        } else u();
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "5K8hA": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { template: { $poster: t2 } } = e2;
      (0, i.def)(e2, "poster", { get: () => {
        try {
          return t2.style.backgroundImage.match(/"(.*)"/)[1];
        } catch (e3) {
          return "";
        }
      }, set(e3) {
        (0, i.setStyle)(t2, "backgroundImage", `url(${e3})`);
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "3T5ls": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { template: { $container: t2, $video: r2 } } = e2;
      (0, i.def)(e2, "autoHeight", { value() {
        let { clientWidth: a2 } = t2, { videoHeight: o2, videoWidth: n } = r2, s = a2 / n * o2;
        (0, i.setStyle)(t2, "height", s + "px"), e2.emit("autoHeight", s);
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "6KfHs": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { $player: t2 } = e2.template;
      (0, i.def)(e2, "cssVar", { value: (e3, r2) => r2 ? t2.style.setProperty(e3, r2) : getComputedStyle(t2).getPropertyValue(e3) });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7lcSc": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      (0, i.def)(e2, "theme", { get: () => e2.cssVar("--art-theme"), set(t2) {
        e2.cssVar("--art-theme", t2);
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "8JgTw": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      (0, i.def)(e2, "type", { get: () => e2.option.type, set(t2) {
        e2.option.type = t2;
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], cebt1: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let t2 = ["mini", "pip", "fullscreen", "fullscreenWeb"];
      (0, i.def)(e2, "state", { get: () => t2.find((t3) => e2[t3]) || "standard", set(r2) {
        for (let a2 = 0; a2 < t2.length; a2++) {
          let i2 = t2[a2];
          i2 !== r2 && e2[i2] && (e2[i2] = false);
        }
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], hJvIy: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { clamp: t2 } = e2.constructor.utils, { notice: r2, template: a2, i18n: o2 } = e2, n = 0, s = [];
      e2.on("subtitle:switch", () => {
        s = [];
      }), (0, i.def)(e2, "subtitleOffset", { get: () => n, set(i2) {
        if (a2.$track && a2.$track.track) {
          let l = Array.from(a2.$track.track.cues);
          n = t2(i2, -5, 5);
          for (let r3 = 0; r3 < l.length; r3++) {
            let a3 = l[r3];
            s[r3] || (s[r3] = { startTime: a3.startTime, endTime: a3.endTime }), a3.startTime = t2(s[r3].startTime + n, 0, e2.duration), a3.endTime = t2(s[r3].endTime + n, 0, e2.duration);
          }
          e2.subtitle.update(), r2.show = `${o2.get("Subtitle Offset")}: ${i2}s`, e2.emit("subtitleOffset", i2);
        } else e2.emit("subtitleOffset", 0);
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "4Tp0U": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { i18n: t2, notice: r2, proxy: a2, template: { $video: o2 } } = e2, n = true;
      window.WebKitPlaybackTargetAvailabilityEvent && o2.webkitShowPlaybackTargetPicker ? a2(o2, "webkitplaybacktargetavailabilitychanged", (e3) => {
        switch (e3.availability) {
          case "available":
            n = true;
            break;
          case "not-available":
            n = false;
        }
      }) : n = false, (0, i.def)(e2, "airplay", { value() {
        n ? (o2.webkitShowPlaybackTargetPicker(), e2.emit("airplay")) : r2.show = t2.get("AirPlay Not Available");
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "3wZgN": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      (0, i.def)(e2, "quality", { set(t2) {
        let { controls: r2, notice: a2, i18n: i2 } = e2, o2 = t2.find((e3) => e3.default) || t2[0];
        r2.update({ name: "quality", position: "right", index: 10, style: { marginRight: "10px" }, html: o2 ? o2.html : "", selector: t2, async onSelect(t3) {
          await e2.switchQuality(t3.url), a2.show = `${i2.get("Switch Video")}: ${t3.html}`;
        } });
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], k56Iy: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { option: t2, events: { loadImg: r2 }, template: { $progress: a2, $video: o2 } } = e2, n = null, s = null, l = false, c = false;
      e2.on("setBar", async (u, p, d) => {
        let f = e2.controls?.thumbnails, { url: h } = t2.thumbnails;
        if (!f || !h) return;
        let m = "played" === u && d && i.isMobile;
        if ("hover" === u || m) {
          if (l || (l = true, s = await r2(h), c = true), !c) return;
          let u2 = a2.clientWidth * p;
          (0, i.setStyle)(f, "display", "flex"), u2 > 0 && u2 < a2.clientWidth ? function(r3) {
            let n2 = e2.controls?.thumbnails;
            if (!n2) return;
            let { url: l2, number: c2, column: u3, width: p2, height: d2 } = t2.thumbnails, f2 = p2 || s.naturalWidth / u3, h2 = d2 || f2 / (o2.videoWidth / o2.videoHeight), m2 = Math.floor(r3 / (a2.clientWidth / c2)), g = Math.ceil(m2 / u3) - 1;
            (0, i.setStyle)(n2, "backgroundImage", `url(${l2})`), (0, i.setStyle)(n2, "height", `${h2}px`), (0, i.setStyle)(n2, "width", `${f2}px`), (0, i.setStyle)(n2, "backgroundPosition", `-${(m2 % u3 || u3 - 1) * f2}px -${g * h2}px`), r3 <= f2 / 2 ? (0, i.setStyle)(n2, "left", 0) : r3 > a2.clientWidth - f2 / 2 ? (0, i.setStyle)(n2, "left", `${a2.clientWidth - f2}px`) : (0, i.setStyle)(n2, "left", `${r3 - f2 / 2}px`);
          }(u2) : i.isMobile || (0, i.setStyle)(f, "display", "none"), m && (clearTimeout(n), n = setTimeout(() => {
            (0, i.setStyle)(f, "display", "none");
          }, 500));
        }
      }), (0, i.def)(e2, "thumbnails", { get: () => e2.option.thumbnails, set(t3) {
        t3.url && !e2.option.isLive && (e2.option.thumbnails = t3, clearTimeout(n), n = null, s = null, l = false, c = false);
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], iPdgW: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { option: t2, storage: r2, template: { $video: a2, $poster: o2 } } = e2;
      for (let r3 in t2.moreVideoAttr) e2.attr(r3, t2.moreVideoAttr[r3]);
      t2.muted && (e2.muted = t2.muted), t2.volume && (a2.volume = (0, i.clamp)(t2.volume, 0, 1));
      let n = r2.get("volume");
      for (let r3 in "number" == typeof n && (a2.volume = (0, i.clamp)(n, 0, 1)), t2.poster && (0, i.setStyle)(o2, "backgroundImage", `url(${t2.poster})`), t2.autoplay && (a2.autoplay = t2.autoplay), t2.playsInline && (a2.playsInline = true, a2["webkit-playsinline"] = true), t2.theme && (t2.cssVar["--art-theme"] = t2.theme), t2.cssVar) e2.cssVar(r3, t2.cssVar[r3]);
      e2.url = t2.url;
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "3mj0J": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => s);
    var i = e("../config"), o = a.interopDefault(i), n = e("../utils");
    function s(e2) {
      let { i18n: t2, notice: r2, option: a2, constructor: i2, proxy: s2, template: { $player: l, $video: c, $poster: u } } = e2, p = 0;
      for (let t3 = 0; t3 < o.default.events.length; t3++) s2(c, o.default.events[t3], (t4) => {
        e2.emit(`video:${t4.type}`, t4);
      });
      e2.on("video:canplay", () => {
        p = 0, e2.loading.show = false;
      }), e2.once("video:canplay", () => {
        e2.loading.show = false, e2.controls.show = true, e2.mask.show = true, e2.isReady = true, e2.emit("ready");
      }), e2.on("video:ended", () => {
        a2.loop ? (e2.seek = 0, e2.play(), e2.controls.show = false, e2.mask.show = false) : (e2.controls.show = true, e2.mask.show = true);
      }), e2.on("video:error", async (o2) => {
        p < i2.RECONNECT_TIME_MAX ? (await (0, n.sleep)(i2.RECONNECT_SLEEP_TIME), p += 1, e2.url = a2.url, r2.show = `${t2.get("Reconnect")}: ${p}`, e2.emit("error", o2, p)) : (e2.mask.show = true, e2.loading.show = false, e2.controls.show = true, (0, n.addClass)(l, "art-error"), await (0, n.sleep)(i2.RECONNECT_SLEEP_TIME), r2.show = t2.get("Video Load Failed"));
      }), e2.on("video:loadedmetadata", () => {
        e2.emit("resize"), n.isMobile && (e2.loading.show = false, e2.controls.show = true, e2.mask.show = true);
      }), e2.on("video:loadstart", () => {
        e2.loading.show = true, e2.mask.show = false, e2.controls.show = true;
      }), e2.on("video:pause", () => {
        e2.controls.show = true, e2.mask.show = true;
      }), e2.on("video:play", () => {
        e2.mask.show = false, (0, n.setStyle)(u, "display", "none");
      }), e2.on("video:playing", () => {
        e2.mask.show = false;
      }), e2.on("video:progress", () => {
        e2.playing && (e2.loading.show = false);
      }), e2.on("video:seeked", () => {
        e2.loading.show = false, e2.mask.show = true;
      }), e2.on("video:seeking", () => {
        e2.loading.show = true, e2.mask.show = false;
      }), e2.on("video:timeupdate", () => {
        e2.mask.show = false;
      }), e2.on("video:waiting", () => {
        e2.loading.show = true, e2.mask.show = false;
      });
    }
  }, { "../config": "9Xmqu", "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "14IBq": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("../utils"), o = e("../utils/component"), n = a.interopDefault(o), s = e("./fullscreen"), l = a.interopDefault(s), c = e("./fullscreenWeb"), u = a.interopDefault(c), p = e("./pip"), d = a.interopDefault(p), f = e("./playAndPause"), h = a.interopDefault(f), m = e("./progress"), g = a.interopDefault(m), v = e("./time"), y = a.interopDefault(v), b = e("./volume"), x = a.interopDefault(b), w = e("./setting"), j = a.interopDefault(w), k = e("./screenshot"), S = a.interopDefault(k), I = e("./airplay"), T = a.interopDefault(I);
    class O extends n.default {
      constructor(e2) {
        super(e2), this.isHover = false, this.name = "control", this.timer = Date.now();
        let { constructor: t2 } = e2, { $player: r2, $bottom: a2 } = this.art.template;
        e2.on("mousemove", () => {
          i.isMobile || (this.show = true);
        }), e2.on("click", () => {
          i.isMobile ? this.toggle() : this.show = true;
        }), e2.on("document:mousemove", (e3) => {
          this.isHover = (0, i.includeFromEvent)(e3, a2);
        }), e2.on("video:timeupdate", () => {
          !e2.setting.show && !this.isHover && !e2.isInput && e2.playing && this.show && Date.now() - this.timer >= t2.CONTROL_HIDE_TIME && (this.show = false);
        }), e2.on("control", (e3) => {
          e3 ? ((0, i.removeClass)(r2, "art-hide-cursor"), (0, i.addClass)(r2, "art-hover"), this.timer = Date.now()) : ((0, i.addClass)(r2, "art-hide-cursor"), (0, i.removeClass)(r2, "art-hover"));
        }), this.init();
      }
      init() {
        let { option: e2 } = this.art;
        e2.isLive || this.add((0, g.default)({ name: "progress", position: "top", index: 10 })), this.add({ name: "thumbnails", position: "top", index: 20 }), this.add((0, h.default)({ name: "playAndPause", position: "left", index: 10 })), this.add((0, x.default)({ name: "volume", position: "left", index: 20 })), e2.isLive || this.add((0, y.default)({ name: "time", position: "left", index: 30 })), e2.quality.length && (0, i.sleep)().then(() => {
          this.art.quality = e2.quality;
        }), e2.screenshot && !i.isMobile && this.add((0, S.default)({ name: "screenshot", position: "right", index: 20 })), e2.setting && this.add((0, j.default)({ name: "setting", position: "right", index: 30 })), e2.pip && this.add((0, d.default)({ name: "pip", position: "right", index: 40 })), e2.airplay && window.WebKitPlaybackTargetAvailabilityEvent && this.add((0, T.default)({ name: "airplay", position: "right", index: 50 })), e2.fullscreenWeb && this.add((0, u.default)({ name: "fullscreenWeb", position: "right", index: 60 })), e2.fullscreen && this.add((0, l.default)({ name: "fullscreen", position: "right", index: 70 }));
        for (let t2 = 0; t2 < e2.controls.length; t2++) this.add(e2.controls[t2]);
      }
      add(e2) {
        let t2 = "function" == typeof e2 ? e2(this.art) : e2, { $progress: r2, $controlsLeft: a2, $controlsRight: o2 } = this.art.template;
        switch (t2.position) {
          case "top":
            this.$parent = r2;
            break;
          case "left":
            this.$parent = a2;
            break;
          case "right":
            this.$parent = o2;
            break;
          default:
            (0, i.errorHandle)(false, "Control option.position must one of 'top', 'left', 'right'");
        }
        super.add(t2);
      }
    }
    r.default = O;
  }, { "../utils": "h3rH9", "../utils/component": "guki8", "./fullscreen": "cxHNK", "./fullscreenWeb": "66eEC", "./pip": "kCFkA", "./playAndPause": "iRhgD", "./progress": "aBBSH", "./time": "7H0CE", "./volume": "lMwFm", "./setting": "8BrCu", "./screenshot": "c1GeG", "./airplay": "6GRju", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], guki8: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("./dom"), o = e("./format"), n = e("./error"), s = e("option-validator"), l = a.interopDefault(s), c = e("../scheme");
    r.default = class {
      constructor(e2) {
        this.id = 0, this.art = e2, this.cache = /* @__PURE__ */ new Map(), this.add = this.add.bind(this), this.remove = this.remove.bind(this), this.update = this.update.bind(this);
      }
      get show() {
        return (0, i.hasClass)(this.art.template.$player, `art-${this.name}-show`);
      }
      set show(e2) {
        let { $player: t2 } = this.art.template, r2 = `art-${this.name}-show`;
        e2 ? (0, i.addClass)(t2, r2) : (0, i.removeClass)(t2, r2), this.art.emit(this.name, e2);
      }
      toggle() {
        this.show = !this.show;
      }
      add(e2) {
        let t2 = "function" == typeof e2 ? e2(this.art) : e2;
        if (t2.html = t2.html || "", (0, l.default)(t2, c.ComponentOption), !this.$parent || !this.name || t2.disable) return;
        let r2 = t2.name || `${this.name}${this.id}`, a2 = this.cache.get(r2);
        (0, n.errorHandle)(!a2, `Can't add an existing [${r2}] to the [${this.name}]`), this.id += 1;
        let o2 = (0, i.createElement)("div");
        (0, i.addClass)(o2, `art-${this.name}`), (0, i.addClass)(o2, `art-${this.name}-${r2}`);
        let s2 = Array.from(this.$parent.children);
        o2.dataset.index = t2.index || this.id;
        let u = s2.find((e3) => Number(e3.dataset.index) >= Number(o2.dataset.index));
        u ? u.insertAdjacentElement("beforebegin", o2) : (0, i.append)(this.$parent, o2), t2.html && (0, i.append)(o2, t2.html), t2.style && (0, i.setStyles)(o2, t2.style), t2.tooltip && (0, i.tooltip)(o2, t2.tooltip);
        let p = [];
        if (t2.click) {
          let e3 = this.art.events.proxy(o2, "click", (e4) => {
            e4.preventDefault(), t2.click.call(this.art, this, e4);
          });
          p.push(e3);
        }
        return t2.selector && ["left", "right"].includes(t2.position) && this.addSelector(t2, o2, p), this[r2] = o2, this.cache.set(r2, { $ref: o2, events: p, option: t2 }), t2.mounted && t2.mounted.call(this.art, o2), o2;
      }
      addSelector(e2, t2, r2) {
        let { hover: a2, proxy: n2 } = this.art.events;
        (0, i.addClass)(t2, "art-control-selector");
        let s2 = (0, i.createElement)("div");
        (0, i.addClass)(s2, "art-selector-value"), (0, i.append)(s2, e2.html), t2.innerText = "", (0, i.append)(t2, s2);
        let l2 = e2.selector.map((e3, t3) => `<div class="art-selector-item ${e3.default ? "art-current" : ""}" data-index="${t3}">${e3.html}</div>`).join(""), c2 = (0, i.createElement)("div");
        (0, i.addClass)(c2, "art-selector-list"), (0, i.append)(c2, l2), (0, i.append)(t2, c2);
        let u = () => {
          let e3 = (0, i.getStyle)(t2, "width"), r3 = (0, i.getStyle)(c2, "width");
          c2.style.left = `${e3 / 2 - r3 / 2}px`;
        };
        a2(t2, u);
        let p = n2(c2, "click", async (t3) => {
          let r3 = (t3.composedPath() || []).find((e3) => (0, i.hasClass)(e3, "art-selector-item"));
          if (!r3) return;
          (0, i.inverseClass)(r3, "art-current");
          let a3 = Number(r3.dataset.index), n3 = e2.selector[a3] || {};
          if (s2.innerText = r3.innerText, e2.onSelect) {
            let a4 = await e2.onSelect.call(this.art, n3, r3, t3);
            (0, o.isStringOrNumber)(a4) && (s2.innerHTML = a4);
          }
          u();
        });
        r2.push(p);
      }
      remove(e2) {
        let t2 = this.cache.get(e2);
        (0, n.errorHandle)(t2, `Can't find [${e2}] from the [${this.name}]`), t2.option.beforeUnmount && t2.option.beforeUnmount.call(this.art, t2.$ref);
        for (let e3 = 0; e3 < t2.events.length; e3++) this.art.events.remove(t2.events[e3]);
        this.cache.delete(e2), delete this[e2], (0, i.remove)(t2.$ref);
      }
      update(e2) {
        let t2 = this.cache.get(e2.name);
        return t2 && (e2 = Object.assign(t2.option, e2), this.remove(e2.name)), this.add(e2);
      }
    };
  }, { "./dom": "XgAQE", "./format": "13atT", "./error": "2nFlF", "option-validator": "9I0i9", "../scheme": "AdvwB", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], cxHNK: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      return (t2) => ({ ...e2, tooltip: t2.i18n.get("Fullscreen"), mounted: (e3) => {
        let { proxy: r2, icons: a2, i18n: o2 } = t2, n = (0, i.append)(e3, a2.fullscreenOn), s = (0, i.append)(e3, a2.fullscreenOff);
        (0, i.setStyle)(s, "display", "none"), r2(e3, "click", () => {
          t2.fullscreen = !t2.fullscreen;
        }), t2.on("fullscreen", (t3) => {
          t3 ? ((0, i.tooltip)(e3, o2.get("Exit Fullscreen")), (0, i.setStyle)(n, "display", "none"), (0, i.setStyle)(s, "display", "inline-flex")) : ((0, i.tooltip)(e3, o2.get("Fullscreen")), (0, i.setStyle)(n, "display", "inline-flex"), (0, i.setStyle)(s, "display", "none"));
        });
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "66eEC": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      return (t2) => ({ ...e2, tooltip: t2.i18n.get("Web Fullscreen"), mounted: (e3) => {
        let { proxy: r2, icons: a2, i18n: o2 } = t2, n = (0, i.append)(e3, a2.fullscreenWebOn), s = (0, i.append)(e3, a2.fullscreenWebOff);
        (0, i.setStyle)(s, "display", "none"), r2(e3, "click", () => {
          t2.fullscreenWeb = !t2.fullscreenWeb;
        }), t2.on("fullscreenWeb", (t3) => {
          t3 ? ((0, i.tooltip)(e3, o2.get("Exit Web Fullscreen")), (0, i.setStyle)(n, "display", "none"), (0, i.setStyle)(s, "display", "inline-flex")) : ((0, i.tooltip)(e3, o2.get("Web Fullscreen")), (0, i.setStyle)(n, "display", "inline-flex"), (0, i.setStyle)(s, "display", "none"));
        });
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], kCFkA: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      return (t2) => ({ ...e2, tooltip: t2.i18n.get("PIP Mode"), mounted: (e3) => {
        let { proxy: r2, icons: a2, i18n: o2 } = t2;
        (0, i.append)(e3, a2.pip), r2(e3, "click", () => {
          t2.pip = !t2.pip;
        }), t2.on("pip", (t3) => {
          (0, i.tooltip)(e3, o2.get(t3 ? "Exit PIP Mode" : "PIP Mode"));
        });
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], iRhgD: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      return (t2) => ({ ...e2, mounted: (e3) => {
        let { proxy: r2, icons: a2, i18n: o2 } = t2, n = (0, i.append)(e3, a2.play), s = (0, i.append)(e3, a2.pause);
        function l() {
          (0, i.setStyle)(n, "display", "flex"), (0, i.setStyle)(s, "display", "none");
        }
        function c() {
          (0, i.setStyle)(n, "display", "none"), (0, i.setStyle)(s, "display", "flex");
        }
        (0, i.tooltip)(n, o2.get("Play")), (0, i.tooltip)(s, o2.get("Pause")), r2(n, "click", () => {
          t2.play();
        }), r2(s, "click", () => {
          t2.pause();
        }), t2.playing ? c() : l(), t2.on("video:playing", () => {
          c();
        }), t2.on("video:pause", () => {
          l();
        });
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], aBBSH: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "getPosFromEvent", () => o), a.export(r, "setCurrentTime", () => n), a.export(r, "default", () => s);
    var i = e("../utils");
    function o(e2, t2) {
      let { $progress: r2 } = e2.template, { left: a2 } = (0, i.getRect)(r2), o2 = i.isMobile ? t2.touches[0].clientX : t2.clientX, n2 = (0, i.clamp)(o2 - a2, 0, r2.clientWidth), s2 = n2 / r2.clientWidth * e2.duration, l = (0, i.secondToTime)(s2), c = (0, i.clamp)(n2 / r2.clientWidth, 0, 1);
      return { second: s2, time: l, width: n2, percentage: c };
    }
    function n(e2, t2) {
      if (e2.isRotate) {
        let r2 = t2.touches[0].clientY / e2.height, a2 = r2 * e2.duration;
        e2.emit("setBar", "played", r2, t2), e2.seek = a2;
      } else {
        let { second: r2, percentage: a2 } = o(e2, t2);
        e2.emit("setBar", "played", a2, t2), e2.seek = r2;
      }
    }
    function s(e2) {
      return (t2) => {
        let { icons: r2, option: a2, proxy: s2 } = t2;
        return { ...e2, html: `<div class="art-control-progress-inner"><div class="art-progress-hover"></div><div class="art-progress-loaded"></div><div class="art-progress-played"></div><div class="art-progress-highlight"></div><div class="art-progress-indicator"></div><div class="art-progress-tip"></div></div>`, mounted: (e3) => {
          let l = null, c = false, u = (0, i.query)(".art-progress-hover", e3), p = (0, i.query)(".art-progress-loaded", e3), d = (0, i.query)(".art-progress-played", e3), f = (0, i.query)(".art-progress-highlight", e3), h = (0, i.query)(".art-progress-indicator", e3), m = (0, i.query)(".art-progress-tip", e3);
          function g(r3, a3) {
            let { width: n2, time: s3 } = a3 || o(t2, r3);
            m.innerText = s3;
            let l2 = m.clientWidth;
            n2 <= l2 / 2 ? (0, i.setStyle)(m, "left", 0) : n2 > e3.clientWidth - l2 / 2 ? (0, i.setStyle)(m, "left", `${e3.clientWidth - l2}px`) : (0, i.setStyle)(m, "left", `${n2 - l2 / 2}px`);
          }
          r2.indicator ? (0, i.append)(h, r2.indicator) : (0, i.setStyle)(h, "backgroundColor", "var(--art-theme)"), t2.on("setBar", function(r3, a3, o2) {
            let n2 = "played" === r3 && o2 && i.isMobile;
            "loaded" === r3 && (0, i.setStyle)(p, "width", `${100 * a3}%`), "hover" === r3 && (0, i.setStyle)(u, "width", `${100 * a3}%`), "played" === r3 && ((0, i.setStyle)(d, "width", `${100 * a3}%`), (0, i.setStyle)(h, "left", `${100 * a3}%`)), n2 && ((0, i.setStyle)(m, "display", "flex"), g(o2, { width: e3.clientWidth * a3, time: (0, i.secondToTime)(a3 * t2.duration) }), clearTimeout(l), l = setTimeout(() => {
              (0, i.setStyle)(m, "display", "none");
            }, 500));
          }), t2.on("video:loadedmetadata", function() {
            f.innerText = "";
            for (let e4 = 0; e4 < a2.highlight.length; e4++) {
              let r3 = a2.highlight[e4], o2 = (0, i.clamp)(r3.time, 0, t2.duration) / t2.duration * 100, n2 = `<span data-text="${r3.text}" data-time="${r3.time}" style="left: ${o2}%"></span>`;
              (0, i.append)(f, n2);
            }
          }), t2.on("video:progress", () => {
            t2.emit("setBar", "loaded", t2.loaded);
          }), t2.constructor.USE_RAF ? t2.on("raf", () => {
            t2.emit("setBar", "played", t2.played);
          }) : t2.on("video:timeupdate", () => {
            t2.emit("setBar", "played", t2.played);
          }), t2.on("video:ended", () => {
            t2.emit("setBar", "played", 1);
          }), t2.emit("setBar", "loaded", t2.loaded || 0), i.isMobile || (s2(e3, "click", (e4) => {
            e4.target !== h && n(t2, e4);
          }), s2(e3, "mousemove", (r3) => {
            let { percentage: a3 } = o(t2, r3);
            t2.emit("setBar", "hover", a3, r3), (0, i.setStyle)(m, "display", "flex"), (0, i.includeFromEvent)(r3, f) ? function(r4) {
              let { width: a4 } = o(t2, r4), { text: n2 } = r4.target.dataset;
              m.innerText = n2;
              let s3 = m.clientWidth;
              a4 <= s3 / 2 ? (0, i.setStyle)(m, "left", 0) : a4 > e3.clientWidth - s3 / 2 ? (0, i.setStyle)(m, "left", `${e3.clientWidth - s3}px`) : (0, i.setStyle)(m, "left", `${a4 - s3 / 2}px`);
            }(r3) : g(r3);
          }), s2(e3, "mouseleave", (e4) => {
            (0, i.setStyle)(m, "display", "none"), t2.emit("setBar", "hover", 0, e4);
          }), s2(e3, "mousedown", (e4) => {
            c = 0 === e4.button;
          }), t2.on("document:mousemove", (e4) => {
            if (c) {
              let { second: r3, percentage: a3 } = o(t2, e4);
              t2.emit("setBar", "played", a3, e4), t2.seek = r3;
            }
          }), t2.on("document:mouseup", () => {
            c && (c = false);
          }));
        } };
      };
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7H0CE": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      return (t2) => ({ ...e2, style: i.isMobile ? { fontSize: "12px", padding: "0 5px" } : { cursor: "auto", padding: "0 10px" }, mounted: (e3) => {
        function r2() {
          let r3 = `${(0, i.secondToTime)(t2.currentTime)} / ${(0, i.secondToTime)(t2.duration)}`;
          r3 !== e3.innerText && (e3.innerText = r3);
        }
        r2();
        let a2 = ["video:loadedmetadata", "video:timeupdate", "video:progress"];
        for (let e4 = 0; e4 < a2.length; e4++) t2.on(a2[e4], r2);
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], lMwFm: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      return (t2) => ({ ...e2, mounted: (e3) => {
        let { proxy: r2, icons: a2 } = t2, o2 = (0, i.append)(e3, a2.volume), n = (0, i.append)(e3, a2.volumeClose), s = (0, i.append)(e3, '<div class="art-volume-panel"></div>'), l = (0, i.append)(s, '<div class="art-volume-inner"></div>'), c = (0, i.append)(l, '<div class="art-volume-val"></div>'), u = (0, i.append)(l, '<div class="art-volume-slider"></div>'), p = (0, i.append)(u, '<div class="art-volume-handle"></div>'), d = (0, i.append)(p, '<div class="art-volume-loaded"></div>'), f = (0, i.append)(u, '<div class="art-volume-indicator"></div>');
        function h(e4) {
          let { top: t3, height: r3 } = (0, i.getRect)(u);
          return 1 - (e4.clientY - t3) / r3;
        }
        function m() {
          if (t2.muted || 0 === t2.volume) (0, i.setStyle)(o2, "display", "none"), (0, i.setStyle)(n, "display", "flex"), (0, i.setStyle)(f, "top", "100%"), (0, i.setStyle)(d, "top", "100%"), c.innerText = 0;
          else {
            let e4 = 100 * t2.volume;
            (0, i.setStyle)(o2, "display", "flex"), (0, i.setStyle)(n, "display", "none"), (0, i.setStyle)(f, "top", `${100 - e4}%`), (0, i.setStyle)(d, "top", `${100 - e4}%`), c.innerText = Math.floor(e4);
          }
        }
        if (m(), t2.on("video:volumechange", m), r2(o2, "click", () => {
          t2.muted = true;
        }), r2(n, "click", () => {
          t2.muted = false;
        }), i.isMobile) (0, i.setStyle)(s, "display", "none");
        else {
          let e4 = false;
          r2(u, "mousedown", (r3) => {
            e4 = 0 === r3.button, t2.volume = h(r3);
          }), t2.on("document:mousemove", (r3) => {
            e4 && (t2.muted = false, t2.volume = h(r3));
          }), t2.on("document:mouseup", () => {
            e4 && (e4 = false);
          });
        }
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "8BrCu": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      return (t2) => ({ ...e2, tooltip: t2.i18n.get("Show Setting"), mounted: (e3) => {
        let { proxy: r2, icons: a2, i18n: o2 } = t2;
        (0, i.append)(e3, a2.setting), r2(e3, "click", () => {
          t2.setting.toggle(), t2.setting.updateStyle();
        }), t2.on("setting", (t3) => {
          (0, i.tooltip)(e3, o2.get(t3 ? "Hide Setting" : "Show Setting"));
        });
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], c1GeG: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      return (t2) => ({ ...e2, tooltip: t2.i18n.get("Screenshot"), mounted: (e3) => {
        let { proxy: r2, icons: a2 } = t2;
        (0, i.append)(e3, a2.screenshot), r2(e3, "click", () => {
          t2.screenshot();
        });
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "6GRju": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      return (t2) => ({ ...e2, tooltip: t2.i18n.get("AirPlay"), mounted: (e3) => {
        let { proxy: r2, icons: a2 } = t2;
        (0, i.append)(e3, a2.airplay), r2(e3, "click", () => t2.airplay());
      } });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7iUum": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("../utils"), o = e("../utils/component"), n = a.interopDefault(o), s = e("./playbackRate"), l = a.interopDefault(s), c = e("./aspectRatio"), u = a.interopDefault(c), p = e("./flip"), d = a.interopDefault(p), f = e("./info"), h = a.interopDefault(f), m = e("./version"), g = a.interopDefault(m), v = e("./close"), y = a.interopDefault(v);
    class b extends n.default {
      constructor(e2) {
        super(e2), this.name = "contextmenu", this.$parent = e2.template.$contextmenu, i.isMobile || this.init();
      }
      init() {
        let { option: e2, proxy: t2, template: { $player: r2, $contextmenu: a2 } } = this.art;
        e2.playbackRate && this.add((0, l.default)({ name: "playbackRate", index: 10 })), e2.aspectRatio && this.add((0, u.default)({ name: "aspectRatio", index: 20 })), e2.flip && this.add((0, d.default)({ name: "flip", index: 30 })), this.add((0, h.default)({ name: "info", index: 40 })), this.add((0, g.default)({ name: "version", index: 50 })), this.add((0, y.default)({ name: "close", index: 60 }));
        for (let t3 = 0; t3 < e2.contextmenu.length; t3++) this.add(e2.contextmenu[t3]);
        t2(r2, "contextmenu", (e3) => {
          if (!this.art.constructor.CONTEXTMENU) return;
          e3.preventDefault(), this.show = true;
          let t3 = e3.clientX, o2 = e3.clientY, { height: n2, width: s2, left: l2, top: c2 } = (0, i.getRect)(r2), { height: u2, width: p2 } = (0, i.getRect)(a2), d2 = t3 - l2, f2 = o2 - c2;
          t3 + p2 > l2 + s2 && (d2 = s2 - p2), o2 + u2 > c2 + n2 && (f2 = n2 - u2), (0, i.setStyles)(a2, { top: `${f2}px`, left: `${d2}px` });
        }), t2(r2, "click", (e3) => {
          (0, i.includeFromEvent)(e3, a2) || (this.show = false);
        }), this.art.on("blur", () => {
          this.show = false;
        });
      }
    }
    r.default = b;
  }, { "../utils": "h3rH9", "../utils/component": "guki8", "./playbackRate": "f1W36", "./aspectRatio": "afxZC", "./flip": "9jCuX", "./info": "k8wIZ", "./version": "bb0TU", "./close": "9zTkI", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], f1W36: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      return (t2) => {
        let { i18n: r2, constructor: { PLAYBACK_RATE: a2 } } = t2, o2 = a2.map((e3) => `<span data-value="${e3}">${1 === e3 ? r2.get("Normal") : e3.toFixed(1)}</span>`).join("");
        return { ...e2, html: `${r2.get("Play Speed")}: ${o2}`, click: (e3, r3) => {
          let { value: a3 } = r3.target.dataset;
          a3 && (t2.playbackRate = Number(a3), e3.show = false);
        }, mounted: (e3) => {
          let r3 = (0, i.query)('[data-value="1"]', e3);
          r3 && (0, i.inverseClass)(r3, "art-current"), t2.on("video:ratechange", () => {
            let r4 = (0, i.queryAll)("span", e3).find((e4) => Number(e4.dataset.value) === t2.playbackRate);
            r4 && (0, i.inverseClass)(r4, "art-current");
          });
        } };
      };
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], afxZC: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      return (t2) => {
        let { i18n: r2, constructor: { ASPECT_RATIO: a2 } } = t2, o2 = a2.map((e3) => `<span data-value="${e3}">${"default" === e3 ? r2.get("Default") : e3}</span>`).join("");
        return { ...e2, html: `${r2.get("Aspect Ratio")}: ${o2}`, click: (e3, r3) => {
          let { value: a3 } = r3.target.dataset;
          a3 && (t2.aspectRatio = a3, e3.show = false);
        }, mounted: (e3) => {
          let r3 = (0, i.query)('[data-value="default"]', e3);
          r3 && (0, i.inverseClass)(r3, "art-current"), t2.on("aspectRatio", (t3) => {
            let r4 = (0, i.queryAll)("span", e3).find((e4) => e4.dataset.value === t3);
            r4 && (0, i.inverseClass)(r4, "art-current");
          });
        } };
      };
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9jCuX": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      return (t2) => {
        let { i18n: r2, constructor: { FLIP: a2 } } = t2, o2 = a2.map((e3) => `<span data-value="${e3}">${r2.get((0, i.capitalize)(e3))}</span>`).join("");
        return { ...e2, html: `${r2.get("Video Flip")}: ${o2}`, click: (e3, r3) => {
          let { value: a3 } = r3.target.dataset;
          a3 && (t2.flip = a3.toLowerCase(), e3.show = false);
        }, mounted: (e3) => {
          let r3 = (0, i.query)('[data-value="normal"]', e3);
          r3 && (0, i.inverseClass)(r3, "art-current"), t2.on("flip", (t3) => {
            let r4 = (0, i.queryAll)("span", e3).find((e4) => e4.dataset.value === t3);
            r4 && (0, i.inverseClass)(r4, "art-current");
          });
        } };
      };
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], k8wIZ: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    function i(e2) {
      return (t2) => ({ ...e2, html: t2.i18n.get("Video Info"), click: (e3) => {
        t2.info.show = true, e3.show = false;
      } });
    }
    a.defineInteropFlag(r), a.export(r, "default", () => i);
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], bb0TU: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    function i(e2) {
      return { ...e2, html: '<a href="https://artplayer.org" target="_blank">ArtPlayer 5.1.7</a>' };
    }
    a.defineInteropFlag(r), a.export(r, "default", () => i);
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9zTkI": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    function i(e2) {
      return (t2) => ({ ...e2, html: t2.i18n.get("Close"), click: (e3) => {
        e3.show = false;
      } });
    }
    a.defineInteropFlag(r), a.export(r, "default", () => i);
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], hD2Lg: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("./utils"), o = e("./utils/component"), n = a.interopDefault(o);
    class s extends n.default {
      constructor(e2) {
        super(e2), this.name = "info", i.isMobile || this.init();
      }
      init() {
        let { proxy: e2, constructor: t2, template: { $infoPanel: r2, $infoClose: a2, $video: o2 } } = this.art;
        e2(a2, "click", () => {
          this.show = false;
        });
        let n2 = null, s2 = (0, i.queryAll)("[data-video]", r2) || [];
        this.art.on("destroy", () => clearTimeout(n2)), function e3() {
          for (let e4 = 0; e4 < s2.length; e4++) {
            let t3 = s2[e4], r3 = o2[t3.dataset.video], a3 = "number" == typeof r3 ? r3.toFixed(2) : r3;
            t3.innerText !== a3 && (t3.innerText = a3);
          }
          n2 = setTimeout(e3, t2.INFO_LOOP_TIME);
        }();
      }
    }
    r.default = s;
  }, { "./utils": "h3rH9", "./utils/component": "guki8", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], lum0D: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("./utils"), o = e("./utils/component"), n = a.interopDefault(o), s = e("option-validator"), l = a.interopDefault(s), c = e("./scheme"), u = a.interopDefault(c);
    class p extends n.default {
      constructor(e2) {
        super(e2), this.name = "subtitle", this.eventDestroy = () => null, this.init(e2.option.subtitle);
        let t2 = false;
        e2.on("video:timeupdate", () => {
          if (!this.url) return;
          let e3 = this.art.template.$video.webkitDisplayingFullscreen;
          "boolean" == typeof e3 && e3 !== t2 && (t2 = e3, this.createTrack(e3 ? "subtitles" : "metadata", this.url));
        });
      }
      get url() {
        return this.art.template.$track.src;
      }
      set url(e2) {
        this.switch(e2);
      }
      get textTrack() {
        return this.art.template.$video.textTracks[0];
      }
      get activeCue() {
        return this.textTrack.activeCues[0];
      }
      style(e2, t2) {
        let { $subtitle: r2 } = this.art.template;
        return "object" == typeof e2 ? (0, i.setStyles)(r2, e2) : (0, i.setStyle)(r2, e2, t2);
      }
      update() {
        let { $subtitle: e2 } = this.art.template;
        e2.innerHTML = "", this.activeCue && (this.art.option.subtitle.escape ? e2.innerHTML = this.activeCue.text.split(/\r?\n/).map((e3) => `<div class="art-subtitle-line">${(0, i.escape)(e3)}</div>`).join("") : e2.innerHTML = this.activeCue.text, this.art.emit("subtitleUpdate", this.activeCue.text));
      }
      async switch(e2, t2 = {}) {
        let { i18n: r2, notice: a2, option: i2 } = this.art, o2 = { ...i2.subtitle, ...t2, url: e2 }, n2 = await this.init(o2);
        return t2.name && (a2.show = `${r2.get("Switch Subtitle")}: ${t2.name}`), n2;
      }
      createTrack(e2, t2) {
        let { template: r2, proxy: a2, option: o2 } = this.art, { $video: n2, $track: s2 } = r2, l2 = (0, i.createElement)("track");
        l2.default = true, l2.kind = e2, l2.src = t2, l2.label = o2.subtitle.name || "Artplayer", l2.track.mode = "hidden", this.eventDestroy(), (0, i.remove)(s2), (0, i.append)(n2, l2), r2.$track = l2, this.eventDestroy = a2(this.textTrack, "cuechange", () => this.update());
      }
      async init(e2) {
        let { notice: t2, template: { $subtitle: r2 } } = this.art;
        if ((0, l.default)(e2, u.default.subtitle), e2.url) return this.style(e2.style), fetch(e2.url).then((e3) => e3.arrayBuffer()).then((t3) => {
          let r3 = new TextDecoder(e2.encoding).decode(t3);
          switch (this.art.emit("subtitleLoad", e2.url), e2.type || (0, i.getExt)(e2.url)) {
            case "srt": {
              let t4 = (0, i.srtToVtt)(r3), a2 = e2.onVttLoad(t4);
              return (0, i.vttToBlob)(a2);
            }
            case "ass": {
              let t4 = (0, i.assToVtt)(r3), a2 = e2.onVttLoad(t4);
              return (0, i.vttToBlob)(a2);
            }
            case "vtt": {
              let t4 = e2.onVttLoad(r3);
              return (0, i.vttToBlob)(t4);
            }
            default:
              return e2.url;
          }
        }).then((e3) => (r2.innerHTML = "", this.url === e3 || (URL.revokeObjectURL(this.url), this.createTrack("metadata", e3), this.art.emit("subtitleSwitch", e3)), e3)).catch((e3) => {
          throw r2.innerHTML = "", t2.show = e3, e3;
        });
      }
    }
    r.default = p;
  }, { "./utils": "h3rH9", "./utils/component": "guki8", "option-validator": "9I0i9", "./scheme": "AdvwB", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "1Epl5": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("../utils/error"), o = e("./clickInit"), n = a.interopDefault(o), s = e("./hoverInit"), l = a.interopDefault(s), c = e("./moveInit"), u = a.interopDefault(c), p = e("./resizeInit"), d = a.interopDefault(p), f = e("./gestureInit"), h = a.interopDefault(f), m = e("./viewInit"), g = a.interopDefault(m), v = e("./documentInit"), y = a.interopDefault(v), b = e("./updateInit"), x = a.interopDefault(b);
    r.default = class {
      constructor(e2) {
        this.destroyEvents = [], this.proxy = this.proxy.bind(this), this.hover = this.hover.bind(this), this.loadImg = this.loadImg.bind(this), (0, n.default)(e2, this), (0, l.default)(e2, this), (0, u.default)(e2, this), (0, d.default)(e2, this), (0, h.default)(e2, this), (0, g.default)(e2, this), (0, y.default)(e2, this), (0, x.default)(e2, this);
      }
      proxy(e2, t2, r2, a2 = {}) {
        if (Array.isArray(t2)) return t2.map((t3) => this.proxy(e2, t3, r2, a2));
        e2.addEventListener(t2, r2, a2);
        let i2 = () => e2.removeEventListener(t2, r2, a2);
        return this.destroyEvents.push(i2), i2;
      }
      hover(e2, t2, r2) {
        t2 && this.proxy(e2, "mouseenter", t2), r2 && this.proxy(e2, "mouseleave", r2);
      }
      loadImg(e2) {
        return new Promise((t2, r2) => {
          let a2;
          if (e2 instanceof HTMLImageElement) a2 = e2;
          else {
            if ("string" != typeof e2) return r2(new i.ArtPlayerError("Unable to get Image"));
            (a2 = new Image()).src = e2;
          }
          if (a2.complete) return t2(a2);
          this.proxy(a2, "load", () => t2(a2)), this.proxy(a2, "error", () => r2(new i.ArtPlayerError(`Failed to load Image: ${a2.src}`)));
        });
      }
      remove(e2) {
        let t2 = this.destroyEvents.indexOf(e2);
        t2 > -1 && (e2(), this.destroyEvents.splice(t2, 1));
      }
      destroy() {
        for (let e2 = 0; e2 < this.destroyEvents.length; e2++) this.destroyEvents[e2]();
      }
    };
  }, { "../utils/error": "2nFlF", "./clickInit": "gzL6e", "./hoverInit": "kpTJf", "./moveInit": "ef6qz", "./resizeInit": "9TXOX", "./gestureInit": "dePMU", "./viewInit": "hDyWF", "./documentInit": "7RjDP", "./updateInit": "8SmBT", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], gzL6e: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2, t2) {
      let { constructor: r2, template: { $player: a2, $video: o2 } } = e2;
      t2.proxy(document, ["click", "contextmenu"], (t3) => {
        (0, i.includeFromEvent)(t3, a2) ? (e2.isInput = "INPUT" === t3.target.tagName, e2.isFocus = true, e2.emit("focus", t3)) : (e2.isInput = false, e2.isFocus = false, e2.emit("blur", t3));
      });
      let n = [];
      t2.proxy(o2, "click", (t3) => {
        let a3 = Date.now();
        n.push(a3);
        let { MOBILE_CLICK_PLAY: o3, DBCLICK_TIME: s, MOBILE_DBCLICK_PLAY: l, DBCLICK_FULLSCREEN: c } = r2, u = n.filter((e3) => a3 - e3 <= s);
        switch (u.length) {
          case 1:
            e2.emit("click", t3), i.isMobile ? !e2.isLock && o3 && e2.toggle() : e2.toggle(), n = u;
            break;
          case 2:
            e2.emit("dblclick", t3), i.isMobile ? !e2.isLock && l && e2.toggle() : c && (e2.fullscreen = !e2.fullscreen), n = [];
            break;
          default:
            n = [];
        }
      });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], kpTJf: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2, t2) {
      let { $player: r2 } = e2.template;
      t2.hover(r2, (t3) => {
        (0, i.addClass)(r2, "art-hover"), e2.emit("hover", true, t3);
      }, (t3) => {
        (0, i.removeClass)(r2, "art-hover"), e2.emit("hover", false, t3);
      });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], ef6qz: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    function i(e2, t2) {
      let { $player: r2 } = e2.template;
      t2.proxy(r2, "mousemove", (t3) => {
        e2.emit("mousemove", t3);
      });
    }
    a.defineInteropFlag(r), a.export(r, "default", () => i);
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9TXOX": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2, t2) {
      let { option: r2, constructor: a2 } = e2;
      e2.on("resize", () => {
        let { aspectRatio: t3, notice: a3 } = e2;
        "standard" === e2.state && r2.autoSize && e2.autoSize(), e2.aspectRatio = t3, a3.show = "";
      });
      let o2 = (0, i.debounce)(() => e2.emit("resize"), a2.RESIZE_TIME);
      t2.proxy(window, ["orientationchange", "resize"], () => o2()), screen && screen.orientation && screen.orientation.onchange && t2.proxy(screen.orientation, "change", () => o2());
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], dePMU: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => n);
    var i = e("../utils"), o = e("../control/progress");
    function n(e2, t2) {
      if (i.isMobile && !e2.option.isLive) {
        let { $video: r2, $progress: a2 } = e2.template, n2 = null, s = false, l = 0, c = 0, u = 0, p = (t3) => {
          if (1 === t3.touches.length && !e2.isLock) {
            n2 === a2 && (0, o.setCurrentTime)(e2, t3), s = true;
            let { pageX: r3, pageY: i2 } = t3.touches[0];
            l = r3, c = i2, u = e2.currentTime;
          }
        }, d = (t3) => {
          if (1 === t3.touches.length && s && e2.duration) {
            let { pageX: a3, pageY: o2 } = t3.touches[0], s2 = function(e3, t4, r3, a4) {
              var i2 = t4 - a4, o3 = r3 - e3, n3 = 0;
              if (2 > Math.abs(o3) && 2 > Math.abs(i2)) return n3;
              var s3 = 180 * Math.atan2(i2, o3) / Math.PI;
              return s3 >= -45 && s3 < 45 ? n3 = 4 : s3 >= 45 && s3 < 135 ? n3 = 1 : s3 >= -135 && s3 < -45 ? n3 = 2 : (s3 >= 135 && s3 <= 180 || s3 >= -180 && s3 < -135) && (n3 = 3), n3;
            }(l, c, a3, o2), p2 = [3, 4].includes(s2), d2 = [1, 2].includes(s2);
            if (p2 && !e2.isRotate || d2 && e2.isRotate) {
              let s3 = (0, i.clamp)((a3 - l) / e2.width, -1, 1), p3 = (0, i.clamp)((o2 - c) / e2.height, -1, 1), d3 = e2.isRotate ? p3 : s3, f = n2 === r2 ? e2.constructor.TOUCH_MOVE_RATIO : 1, h = (0, i.clamp)(u + e2.duration * d3 * f, 0, e2.duration);
              e2.seek = h, e2.emit("setBar", "played", (0, i.clamp)(h / e2.duration, 0, 1), t3), e2.notice.show = `${(0, i.secondToTime)(h)} / ${(0, i.secondToTime)(e2.duration)}`;
            }
          }
        };
        t2.proxy(a2, "touchstart", (e3) => {
          n2 = a2, p(e3);
        }), t2.proxy(r2, "touchstart", (e3) => {
          n2 = r2, p(e3);
        }), t2.proxy(r2, "touchmove", d), t2.proxy(a2, "touchmove", d), t2.proxy(document, "touchend", () => {
          s && (l = 0, c = 0, u = 0, s = false, n2 = null);
        });
      }
    }
  }, { "../utils": "h3rH9", "../control/progress": "aBBSH", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], hDyWF: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2, t2) {
      let { option: r2, constructor: a2, template: { $container: o2 } } = e2, n = (0, i.throttle)(() => {
        e2.emit("view", (0, i.isInViewport)(o2, a2.SCROLL_GAP));
      }, a2.SCROLL_TIME);
      t2.proxy(window, "scroll", () => n()), e2.on("view", (t3) => {
        r2.autoMini && (e2.mini = !t3);
      });
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7RjDP": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    function i(e2, t2) {
      t2.proxy(document, "mousemove", (t3) => {
        e2.emit("document:mousemove", t3);
      }), t2.proxy(document, "mouseup", (t3) => {
        e2.emit("document:mouseup", t3);
      });
    }
    a.defineInteropFlag(r), a.export(r, "default", () => i);
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "8SmBT": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    function i(e2) {
      if (e2.constructor.USE_RAF) {
        let t2 = null;
        !function r2() {
          e2.playing && e2.emit("raf"), e2.isDestroy || (t2 = requestAnimationFrame(r2));
        }(), e2.on("destroy", () => {
          cancelAnimationFrame(t2);
        });
      }
    }
    a.defineInteropFlag(r), a.export(r, "default", () => i);
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], eTow4: [function(e, t, r) {
    e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
    var a = e("./utils");
    r.default = class {
      constructor(e2) {
        this.art = e2, this.keys = {}, e2.option.hotkey && !a.isMobile && this.init();
      }
      init() {
        let { proxy: e2, constructor: t2 } = this.art;
        this.add(27, () => {
          this.art.fullscreenWeb && (this.art.fullscreenWeb = false);
        }), this.add(32, () => {
          this.art.toggle();
        }), this.add(37, () => {
          this.art.backward = t2.SEEK_STEP;
        }), this.add(38, () => {
          this.art.volume += t2.VOLUME_STEP;
        }), this.add(39, () => {
          this.art.forward = t2.SEEK_STEP;
        }), this.add(40, () => {
          this.art.volume -= t2.VOLUME_STEP;
        }), e2(window, "keydown", (e3) => {
          if (this.art.isFocus) {
            let t3 = document.activeElement.tagName.toUpperCase(), r2 = document.activeElement.getAttribute("contenteditable");
            if ("INPUT" !== t3 && "TEXTAREA" !== t3 && "" !== r2 && "true" !== r2 && !e3.altKey && !e3.ctrlKey && !e3.metaKey && !e3.shiftKey) {
              let t4 = this.keys[e3.keyCode];
              if (t4) {
                e3.preventDefault();
                for (let r3 = 0; r3 < t4.length; r3++) t4[r3].call(this.art, e3);
                this.art.emit("hotkey", e3);
              }
            }
          }
        });
      }
      add(e2, t2) {
        return this.keys[e2] ? this.keys[e2].push(t2) : this.keys[e2] = [t2], this;
      }
      remove(e2, t2) {
        if (this.keys[e2]) {
          let r2 = this.keys[e2].indexOf(t2);
          -1 !== r2 && this.keys[e2].splice(r2, 1);
        }
        return this;
      }
    };
  }, { "./utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "4fDoD": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("./utils/component"), o = a.interopDefault(i);
    class n extends o.default {
      constructor(e2) {
        super(e2);
        let { option: t2, template: { $layer: r2 } } = e2;
        this.name = "layer", this.$parent = r2;
        for (let e3 = 0; e3 < t2.layers.length; e3++) this.add(t2.layers[e3]);
      }
    }
    r.default = n;
  }, { "./utils/component": "guki8", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], fE0Sp: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("./utils"), o = e("./utils/component"), n = a.interopDefault(o);
    class s extends n.default {
      constructor(e2) {
        super(e2), this.name = "loading", (0, i.append)(e2.template.$loading, e2.icons.loading);
      }
    }
    r.default = s;
  }, { "./utils": "h3rH9", "./utils/component": "guki8", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9PuGy": [function(e, t, r) {
    e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
    var a = e("./utils");
    r.default = class {
      constructor(e2) {
        this.art = e2, this.timer = null;
      }
      set show(e2) {
        let { constructor: t2, template: { $player: r2, $noticeInner: i } } = this.art;
        e2 ? (i.innerText = e2 instanceof Error ? e2.message.trim() : e2, (0, a.addClass)(r2, "art-notice-show"), clearTimeout(this.timer), this.timer = setTimeout(() => {
          i.innerText = "", (0, a.removeClass)(r2, "art-notice-show");
        }, t2.NOTICE_TIME)) : (0, a.removeClass)(r2, "art-notice-show");
      }
    };
  }, { "./utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2etr0": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("./utils"), o = e("./utils/component"), n = a.interopDefault(o);
    class s extends n.default {
      constructor(e2) {
        super(e2), this.name = "mask";
        let { template: t2, icons: r2, events: a2 } = e2, o2 = (0, i.append)(t2.$state, r2.state), n2 = (0, i.append)(t2.$state, r2.error);
        (0, i.setStyle)(n2, "display", "none"), e2.on("destroy", () => {
          (0, i.setStyle)(o2, "display", "none"), (0, i.setStyle)(n2, "display", null);
        }), a2.proxy(t2.$state, "click", () => e2.play());
      }
    }
    r.default = s;
  }, { "./utils": "h3rH9", "./utils/component": "guki8", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "6dYSr": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("../utils"), o = e("bundle-text:./loading.svg"), n = a.interopDefault(o), s = e("bundle-text:./state.svg"), l = a.interopDefault(s), c = e("bundle-text:./check.svg"), u = a.interopDefault(c), p = e("bundle-text:./play.svg"), d = a.interopDefault(p), f = e("bundle-text:./pause.svg"), h = a.interopDefault(f), m = e("bundle-text:./volume.svg"), g = a.interopDefault(m), v = e("bundle-text:./volume-close.svg"), y = a.interopDefault(v), b = e("bundle-text:./screenshot.svg"), x = a.interopDefault(b), w = e("bundle-text:./setting.svg"), j = a.interopDefault(w), k = e("bundle-text:./arrow-left.svg"), S = a.interopDefault(k), I = e("bundle-text:./arrow-right.svg"), T = a.interopDefault(I), O = e("bundle-text:./playback-rate.svg"), E = a.interopDefault(O), M = e("bundle-text:./aspect-ratio.svg"), $ = a.interopDefault(M), F = e("bundle-text:./config.svg"), C = a.interopDefault(F), D = e("bundle-text:./pip.svg"), H = a.interopDefault(D), B = e("bundle-text:./lock.svg"), z = a.interopDefault(B), R = e("bundle-text:./unlock.svg"), A = a.interopDefault(R), L = e("bundle-text:./fullscreen-off.svg"), P = a.interopDefault(L), N = e("bundle-text:./fullscreen-on.svg"), Z = a.interopDefault(N), _ = e("bundle-text:./fullscreen-web-off.svg"), q = a.interopDefault(_), V = e("bundle-text:./fullscreen-web-on.svg"), W = a.interopDefault(V), U = e("bundle-text:./switch-on.svg"), Y = a.interopDefault(U), K = e("bundle-text:./switch-off.svg"), X = a.interopDefault(K), G = e("bundle-text:./flip.svg"), J = a.interopDefault(G), Q = e("bundle-text:./error.svg"), ee = a.interopDefault(Q), et = e("bundle-text:./close.svg"), er = a.interopDefault(et), ea = e("bundle-text:./airplay.svg"), ei = a.interopDefault(ea);
    r.default = class {
      constructor(e2) {
        let t2 = { loading: n.default, state: l.default, play: d.default, pause: h.default, check: u.default, volume: g.default, volumeClose: y.default, screenshot: x.default, setting: j.default, pip: H.default, arrowLeft: S.default, arrowRight: T.default, playbackRate: E.default, aspectRatio: $.default, config: C.default, lock: z.default, flip: J.default, unlock: A.default, fullscreenOff: P.default, fullscreenOn: Z.default, fullscreenWebOff: q.default, fullscreenWebOn: W.default, switchOn: Y.default, switchOff: X.default, error: ee.default, close: er.default, airplay: ei.default, ...e2.option.icons };
        for (let e3 in t2) (0, i.def)(this, e3, { get: () => (0, i.getIcon)(e3, t2[e3]) });
      }
    };
  }, { "../utils": "h3rH9", "bundle-text:./loading.svg": "fY5Gt", "bundle-text:./state.svg": "iNfLt", "bundle-text:./check.svg": "jtE9u", "bundle-text:./play.svg": "elgfY", "bundle-text:./pause.svg": "eKokJ", "bundle-text:./volume.svg": "hNB4y", "bundle-text:./volume-close.svg": "i9vta", "bundle-text:./screenshot.svg": "kB3Mf", "bundle-text:./setting.svg": "3MONs", "bundle-text:./arrow-left.svg": "iMCpk", "bundle-text:./arrow-right.svg": "3oe4L", "bundle-text:./playback-rate.svg": "liE22", "bundle-text:./aspect-ratio.svg": "8HqYc", "bundle-text:./config.svg": "hYAAH", "bundle-text:./pip.svg": "jmNrH", "bundle-text:./lock.svg": "cIqko", "bundle-text:./unlock.svg": "65zy4", "bundle-text:./fullscreen-off.svg": "jaJRT", "bundle-text:./fullscreen-on.svg": "cRY1X", "bundle-text:./fullscreen-web-off.svg": "3aVGL", "bundle-text:./fullscreen-web-on.svg": "4DiVn", "bundle-text:./switch-on.svg": "kwdKE", "bundle-text:./switch-off.svg": "bWfXZ", "bundle-text:./flip.svg": "h3zZ9", "bundle-text:./error.svg": "7Oyth", "bundle-text:./close.svg": "U5Jcy", "bundle-text:./airplay.svg": "jK5Fx", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], fY5Gt: [function(e, t, r) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default"><path fill="none" class="bk" d="M0 0h100v100H0z"/><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-1s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(30 105.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(60 75.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(90 65 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(120 58.66 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(150 54.02 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(180 50 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-150 45.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-120 41.34 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-90 35 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-60 24.02 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-30 -5.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/></rect></svg>';
  }, {}], iNfLt: [function(e, t, r) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="#fff" d="M9.5 9.325v5.35q0 .575.525.875t1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05t-.525.875ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>';
  }, {}], jtE9u: [function(e, t, r) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:100%;height:100%"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff"/></svg>';
  }, {}], elgfY: [function(e, t, r) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M17.982 9.275 8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z"/></svg>';
  }, {}], eKokJ: [function(e, t, r) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zm8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z"/></svg>';
  }, {}], hNB4y: [function(e, t, r) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M10.188 4.65 6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zm4.258-.872a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z"/><path d="M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z"/></svg>';
  }, {}], i9vta: [function(e, t, r) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z"/><path d="M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zm5.195 13.195-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z"/></svg>';
  }, {}], kB3Mf: [function(e, t, r) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 50 50"><path d="M19.402 6a5 5 0 0 0-4.902 4.012L14.098 12H9a5 5 0 0 0-5 5v21a5 5 0 0 0 5 5h32a5 5 0 0 0 5-5V17a5 5 0 0 0-5-5h-5.098l-.402-1.988A5 5 0 0 0 30.598 6ZM25 17c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10Zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8Z"/></svg>';
  }, {}], "3MONs": [function(e, t, r) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><circle cx="11" cy="11" r="2"/><path d="M19.164 8.861 17.6 8.6a6.978 6.978 0 0 0-1.186-2.099l.574-1.533a1 1 0 0 0-.436-1.217l-1.997-1.153a1.001 1.001 0 0 0-1.272.23l-1.008 1.225a7.04 7.04 0 0 0-2.55.001L8.716 2.829a1 1 0 0 0-1.272-.23L5.447 3.751a1 1 0 0 0-.436 1.217l.574 1.533A6.997 6.997 0 0 0 4.4 8.6l-1.564.261A.999.999 0 0 0 2 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 0 0 1.228 2.075l-.558 1.487a1 1 0 0 0 .436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 0 0 2.272 0l1.04 1.263a1 1 0 0 0 1.272.23l1.997-1.153a1 1 0 0 0 .436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 0 0 .835-.986V9.847a.999.999 0 0 0-.836-.986zM11 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>';
  }, {}], iMCpk: [function(e, t, r) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path d="m19.41 20.09-4.58-4.59 4.58-4.59L18 9.5l-6 6 6 6z" fill="#fff"/></svg>';
  }, {}], "3oe4L": [function(e, t, r) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path d="m12.59 20.34 4.58-4.59-4.58-4.59L14 9.75l6 6-6 6z" fill="#fff"/></svg>';
  }, {}], liE22: [function(e, t, r) {
    t.exports = '<svg height="24" width="24"><path d="M10 8v8l6-4-6-4zM6.3 5l-.6-.8C7.2 3 9 2.2 11 2l.1 1c-1.8.2-3.4.9-4.8 2zM5 6.3l-.8-.6C3 7.2 2.2 9 2 11l1 .1c.2-1.8.9-3.4 2-4.8zm0 11.4c-1.1-1.4-1.8-3.1-2-4.8L2 13c.2 2 1 3.8 2.2 5.4l.8-.7zm6.1 3.3c-1.8-.2-3.4-.9-4.8-2l-.6.8C7.2 21 9 21.8 11 22l.1-1zM22 12c0-5.2-3.9-9.4-9-10l-.1 1c4.6.5 8.1 4.3 8.1 9s-3.5 8.5-8.1 9l.1 1c5.2-.5 9-4.8 9-10z" fill="#fff" style="--darkreader-inline-fill:#a8a6a4"/></svg>';
  }, {}], "8HqYc": [function(e, t, r) {
    t.exports = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" style="width:100%;height:100%;transform:translate(0,0)"><defs><clipPath id="__lottie_element_216"><path d="M0 0h88v88H0z"/></clipPath></defs><g style="display:block" clip-path="url('#__lottie_element_216')"><path fill="#FFF" d="m12.438-12.702-2.82 2.82c-.79.79-.79 2.05 0 2.83l7.07 7.07-7.07 7.07c-.79.79-.79 2.05 0 2.83l2.82 2.83c.79.78 2.05.78 2.83 0l11.32-11.31c.78-.78.78-2.05 0-2.83l-11.32-11.31c-.78-.79-2.04-.79-2.83 0zm-24.88 0c-.74-.74-1.92-.78-2.7-.12l-.13.12-11.31 11.31a2 2 0 0 0-.12 2.7l.12.13 11.31 11.31a2 2 0 0 0 2.7.12l.13-.12 2.83-2.83c.74-.74.78-1.91.11-2.7l-.11-.13-7.07-7.07 7.07-7.07c.74-.74.78-1.91.11-2.7l-.11-.13-2.83-2.82zM28-28c4.42 0 8 3.58 8 8v40c0 4.42-3.58 8-8 8h-56c-4.42 0-8-3.58-8-8v-40c0-4.42 3.58-8 8-8h56z" style="--darkreader-inline-fill:#a8a6a4" transform="translate(44 44)"/></g></svg>`;
  }, {}], hYAAH: [function(e, t, r) {
    t.exports = '<svg height="24" width="24"><path d="M15 17h6v1h-6v-1zm-4 0H3v1h8v2h1v-5h-1v2zm3-9h1V3h-1v2H3v1h11v2zm4-3v1h3V5h-3zM6 14h1V9H6v2H3v1h3v2zm4-2h11v-1H10v1z" fill="#fff" style="--darkreader-inline-fill:#a8a6a4"/></svg>';
  }, {}], jmNrH: [function(e, t, r) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" height="32" width="32"><path d="M25 17h-8v6h8v-6Zm4 8V10.98C29 9.88 28.1 9 27 9H9c-1.1 0-2 .88-2 1.98V25c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2Zm-2 .02H9V10.97h18v14.05Z"/></svg>';
  }, {}], cIqko: [function(e, t, r) {
    t.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M298.667 426.667v-85.334a213.333 213.333 0 1 1 426.666 0v85.334H768A85.333 85.333 0 0 1 853.333 512v256A85.333 85.333 0 0 1 768 853.333H256A85.333 85.333 0 0 1 170.667 768V512A85.333 85.333 0 0 1 256 426.667h42.667zM512 213.333a128 128 0 0 0-128 128v85.334h256v-85.334a128 128 0 0 0-128-128z" fill="#fff"/></svg>';
  }, {}], "65zy4": [function(e, t, r) {
    t.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="m666.752 194.517-49.365 74.112A128 128 0 0 0 384 341.333l.043 85.334h384A85.333 85.333 0 0 1 853.376 512v256a85.333 85.333 0 0 1-85.333 85.333H256A85.333 85.333 0 0 1 170.667 768V512A85.333 85.333 0 0 1 256 426.667h42.667v-85.334a213.333 213.333 0 0 1 368.085-146.816z" fill="#fff"/></svg>';
  }, {}], jaJRT: [function(e, t, r) {
    t.exports = '<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M768 298.667h170.667V384h-256V128H768v170.667zM341.333 384h-256v-85.333H256V128h85.333v256zM768 725.333V896h-85.333V640h256v85.333H768zM341.333 640v256H256V725.333H85.333V640h256z"/></svg>';
  }, {}], cRY1X: [function(e, t, r) {
    t.exports = '<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M625.778 256H768v142.222h113.778v-256h-256V256zM256 398.222V256h142.222V142.222h-256v256H256zm512 227.556V768H625.778v113.778h256v-256H768zM398.222 768H256V625.778H142.222v256h256V768z"/></svg>';
  }, {}], "3aVGL": [function(e, t, r) {
    t.exports = '<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4a76.8 76.8 0 0 0 76.8 76.8h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zM896 512a64 64 0 0 1 7.488 127.552L896 640H768v128a64 64 0 0 1-56.512 63.552L704 832a64 64 0 0 1-63.552-56.512L640 768V582.592c0-34.496 25.024-66.112 61.632-70.208l8-.384H896zm-640 0a64 64 0 0 1-7.488-127.552L256 384h128V256a64 64 0 0 1 56.512-63.552L448 192a64 64 0 0 1 63.552 56.512L512 256v185.408c0 34.432-25.024 66.112-61.632 70.144l-8 .448H256z"/></svg>';
  }, {}], "4DiVn": [function(e, t, r) {
    t.exports = '<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4a76.8 76.8 0 0 0 76.8 76.8h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zm-576 64a64 64 0 0 1 7.488 127.552L448 320H320v128a64 64 0 0 1-56.512 63.552L256 512a64 64 0 0 1-63.552-56.512L192 448V262.592c0-34.432 25.024-66.112 61.632-70.144l8-.448H448zm256 640a64 64 0 0 1-7.488-127.552L704 704h128V576a64 64 0 0 1 56.512-63.552L896 512a64 64 0 0 1 63.552 56.512L960 576v185.408c0 34.496-25.024 66.112-61.632 70.208l-8 .384H704z"/></svg>';
  }, {}], kwdKE: [function(e, t, r) {
    t.exports = '<svg class="icon" width="26" height="26" viewBox="0 0 1664 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#648FFC" d="M1152 0H512a512 512 0 0 0 0 1024h640a512 512 0 0 0 0-1024zm0 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448z"/></svg>';
  }, {}], bWfXZ: [function(e, t, r) {
    t.exports = '<svg class="icon" width="26" height="26" viewBox="0 0 1740 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M511.898 1024h670.515c282.419-.41 511.18-229.478 511.18-511.898 0-282.419-228.761-511.488-511.18-511.897H511.898C229.478.615.717 229.683.717 512.102c0 282.42 228.761 511.488 511.18 511.898zm-.564-975.36A464.589 464.589 0 1 1 48.026 513.024 463.872 463.872 0 0 1 511.334 48.435v.205z"/></svg>';
  }, {}], h3zZ9: [function(e, t, r) {
    t.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M554.667 810.667V896h-85.334v-85.333h85.334zm-384-632.662a42.667 42.667 0 0 1 34.986 18.219l203.904 291.328a42.667 42.667 0 0 1 0 48.896L205.611 827.776A42.667 42.667 0 0 1 128 803.328V220.672a42.667 42.667 0 0 1 42.667-42.667zm682.666 0a42.667 42.667 0 0 1 42.368 37.718l.299 4.949v582.656a42.667 42.667 0 0 1-74.24 28.63l-3.413-4.182-203.904-291.328a42.667 42.667 0 0 1-3.03-43.861l3.03-5.035 203.946-291.328a42.667 42.667 0 0 1 34.944-18.219zM554.667 640v85.333h-85.334V640h85.334zm-358.4-320.896V716.8L335.957 512 196.31 319.104zm358.4 150.23v85.333h-85.334v-85.334h85.334zm0-170.667V384h-85.334v-85.333h85.334zm0-170.667v85.333h-85.334V128h85.334z" fill="#fff"/></svg>';
  }, {}], "7Oyth": [function(e, t, r) {
    t.exports = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M593.818 168.55 949.82 763.76c26.153 43.746 10.732 99.738-34.447 125.052-14.397 8.069-30.72 12.308-47.37 12.308H155.976c-52.224 0-94.536-40.96-94.536-91.505 0-16.097 4.383-31.928 12.718-45.875l356.004-595.19c26.173-43.724 84.009-58.654 129.208-33.341a93.082 93.082 0 0 1 34.448 33.341zM512 819.2a61.44 61.44 0 1 0 0-122.88 61.44 61.44 0 0 0 0 122.88zm0-512a72.315 72.315 0 0 0-71.762 81.306l25.723 205.721a46.408 46.408 0 0 0 92.078 0l25.723-205.742A72.315 72.315 0 0 0 512 307.2z"/></svg>';
  }, {}], U5Jcy: [function(e, t, r) {
    t.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"/></svg>';
  }, {}], jK5Fx: [function(e, t, r) {
    t.exports = '<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="M16 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2H3V3h12v8h-2v2h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/><path d="M4 17h10l-5-6z"/></g></svg>';
  }, {}], bRHiA: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("./flip"), o = a.interopDefault(i), n = e("./aspectRatio"), s = a.interopDefault(n), l = e("./playbackRate"), c = a.interopDefault(l), u = e("./subtitleOffset"), p = a.interopDefault(u), d = e("../utils/component"), f = a.interopDefault(d), h = e("../utils/error"), m = e("../utils");
    class g extends f.default {
      constructor(e2) {
        super(e2);
        let { option: t2, controls: r2, template: { $setting: a2 } } = e2;
        this.name = "setting", this.$parent = a2, this.option = [], this.events = [], this.cache = /* @__PURE__ */ new Map(), t2.setting && (this.init(), e2.on("blur", () => {
          this.show && (this.show = false, this.render(this.option));
        }), e2.on("focus", (e3) => {
          let t3 = (0, m.includeFromEvent)(e3, r2.setting), a3 = (0, m.includeFromEvent)(e3, this.$parent);
          !this.show || t3 || a3 || (this.show = false, this.render(this.option));
        }));
      }
      static makeRecursion(e2, t2, r2) {
        for (let a2 = 0; a2 < e2.length; a2++) {
          let i2 = e2[a2];
          i2.$parentItem = t2, i2.$parentList = r2, g.makeRecursion(i2.selector || [], i2, e2);
        }
        return e2;
      }
      get defaultSettings() {
        let e2 = [], { option: t2 } = this.art;
        return t2.playbackRate && e2.push((0, c.default)(this.art)), t2.aspectRatio && e2.push((0, s.default)(this.art)), t2.flip && e2.push((0, o.default)(this.art)), t2.subtitleOffset && e2.push((0, p.default)(this.art)), e2;
      }
      init() {
        let { option: e2 } = this.art, t2 = [...this.defaultSettings, ...e2.settings];
        this.option = g.makeRecursion(t2), this.destroy(), this.render(this.option);
      }
      destroy() {
        for (let e2 = 0; e2 < this.events.length; e2++) this.art.events.remove(this.events[e2]);
        this.$parent.innerHTML = "", this.events = [], this.cache = /* @__PURE__ */ new Map();
      }
      find(e2 = "", t2 = this.option) {
        for (let r2 = 0; r2 < t2.length; r2++) {
          let a2 = t2[r2];
          if (a2.name === e2) return a2;
          {
            let t3 = this.find(e2, a2.selector || []);
            if (t3) return t3;
          }
        }
      }
      remove(e2) {
        let t2 = this.find(e2);
        (0, h.errorHandle)(t2, `Can't find [${e2}] from the [setting]`);
        let r2 = t2.$parentItem ? t2.$parentItem.selector : this.option;
        return r2.splice(r2.indexOf(t2), 1), this.option = g.makeRecursion(this.option), this.destroy(), this.render(this.option), this.option;
      }
      update(e2) {
        let t2 = this.find(e2.name);
        return t2 ? (Object.assign(t2, e2), this.option = g.makeRecursion(this.option), this.destroy(), this.render(this.option)) : this.add(e2), this.option;
      }
      add(e2) {
        return this.option.push(e2), this.option = g.makeRecursion(this.option), this.destroy(), this.render(this.option), this.option;
      }
      creatHeader(e2) {
        let { icons: t2, proxy: r2, constructor: a2 } = this.art, i2 = (0, m.createElement)("div");
        (0, m.setStyle)(i2, "height", `${a2.SETTING_ITEM_HEIGHT}px`), (0, m.addClass)(i2, "art-setting-item"), (0, m.addClass)(i2, "art-setting-item-back");
        let o2 = (0, m.append)(i2, '<div class="art-setting-item-left"></div>'), n2 = (0, m.createElement)("div");
        (0, m.addClass)(n2, "art-setting-item-left-icon"), (0, m.append)(n2, t2.arrowLeft), (0, m.append)(o2, n2), (0, m.append)(o2, e2.$parentItem.html);
        let s2 = r2(i2, "click", () => this.render(e2.$parentList));
        return this.events.push(s2), i2;
      }
      creatItem(e2, t2) {
        let { icons: r2, proxy: a2, constructor: i2 } = this.art, o2 = (0, m.createElement)("div");
        (0, m.addClass)(o2, "art-setting-item"), (0, m.setStyle)(o2, "height", `${i2.SETTING_ITEM_HEIGHT}px`), (0, m.isStringOrNumber)(t2.name) && (o2.dataset.name = t2.name), (0, m.isStringOrNumber)(t2.value) && (o2.dataset.value = t2.value);
        let n2 = (0, m.append)(o2, '<div class="art-setting-item-left"></div>'), s2 = (0, m.append)(o2, '<div class="art-setting-item-right"></div>'), l2 = (0, m.createElement)("div");
        switch ((0, m.addClass)(l2, "art-setting-item-left-icon"), e2) {
          case "switch":
          case "range":
            (0, m.append)(l2, (0, m.isStringOrNumber)(t2.icon) || t2.icon instanceof Element ? t2.icon : r2.config);
            break;
          case "selector":
            t2.selector && t2.selector.length ? (0, m.append)(l2, (0, m.isStringOrNumber)(t2.icon) || t2.icon instanceof Element ? t2.icon : r2.config) : (0, m.append)(l2, r2.check);
        }
        (0, m.append)(n2, l2), t2.$icon = l2, (0, m.def)(t2, "icon", { configurable: true, get: () => l2.innerHTML, set(e3) {
          (0, m.isStringOrNumber)(e3) && (l2.innerHTML = e3);
        } });
        let c2 = (0, m.createElement)("div");
        (0, m.addClass)(c2, "art-setting-item-left-text"), (0, m.append)(c2, t2.html || ""), (0, m.append)(n2, c2), t2.$html = c2, (0, m.def)(t2, "html", { configurable: true, get: () => c2.innerHTML, set(e3) {
          (0, m.isStringOrNumber)(e3) && (c2.innerHTML = e3);
        } });
        let u2 = (0, m.createElement)("div");
        switch ((0, m.addClass)(u2, "art-setting-item-right-tooltip"), (0, m.append)(u2, t2.tooltip || ""), (0, m.append)(s2, u2), t2.$tooltip = u2, (0, m.def)(t2, "tooltip", { configurable: true, get: () => u2.innerHTML, set(e3) {
          (0, m.isStringOrNumber)(e3) && (u2.innerHTML = e3);
        } }), e2) {
          case "switch": {
            let e3 = (0, m.createElement)("div");
            (0, m.addClass)(e3, "art-setting-item-right-icon");
            let a3 = (0, m.append)(e3, r2.switchOn), i3 = (0, m.append)(e3, r2.switchOff);
            (0, m.setStyle)(t2.switch ? i3 : a3, "display", "none"), (0, m.append)(s2, e3), t2.$switch = t2.switch, (0, m.def)(t2, "switch", { configurable: true, get: () => t2.$switch, set(e4) {
              t2.$switch = e4, e4 ? ((0, m.setStyle)(i3, "display", "none"), (0, m.setStyle)(a3, "display", null)) : ((0, m.setStyle)(i3, "display", null), (0, m.setStyle)(a3, "display", "none"));
            } });
            break;
          }
          case "range":
            {
              let e3 = (0, m.createElement)("div");
              (0, m.addClass)(e3, "art-setting-item-right-icon");
              let r3 = (0, m.append)(e3, '<input type="range">');
              r3.value = t2.range[0] || 0, r3.min = t2.range[1] || 0, r3.max = t2.range[2] || 10, r3.step = t2.range[3] || 1, (0, m.addClass)(r3, "art-setting-range"), (0, m.append)(s2, e3), t2.$range = r3, (0, m.def)(t2, "range", { configurable: true, get: () => r3.valueAsNumber, set(e4) {
                r3.value = Number(e4);
              } });
            }
            break;
          case "selector":
            if (t2.selector && t2.selector.length) {
              let e3 = (0, m.createElement)("div");
              (0, m.addClass)(e3, "art-setting-item-right-icon"), (0, m.append)(e3, r2.arrowRight), (0, m.append)(s2, e3);
            }
        }
        switch (e2) {
          case "switch":
            if (t2.onSwitch) {
              let e3 = a2(o2, "click", async (e4) => {
                t2.switch = await t2.onSwitch.call(this.art, t2, o2, e4);
              });
              this.events.push(e3);
            }
            break;
          case "range":
            if (t2.$range) {
              if (t2.onRange) {
                let e3 = a2(t2.$range, "change", async (e4) => {
                  t2.tooltip = await t2.onRange.call(this.art, t2, o2, e4);
                });
                this.events.push(e3);
              }
              if (t2.onChange) {
                let e3 = a2(t2.$range, "input", async (e4) => {
                  t2.tooltip = await t2.onChange.call(this.art, t2, o2, e4);
                });
                this.events.push(e3);
              }
            }
            break;
          case "selector": {
            let e3 = a2(o2, "click", async (e4) => {
              if (t2.selector && t2.selector.length) this.render(t2.selector, t2.width);
              else {
                (0, m.inverseClass)(o2, "art-current");
                for (let e5 = 0; e5 < t2.$parentItem.selector.length; e5++) {
                  let r3 = t2.$parentItem.selector[e5];
                  r3.default = r3 === t2;
                }
                if (t2.$parentList && this.render(t2.$parentList), t2.$parentItem && t2.$parentItem.onSelect) {
                  let r3 = await t2.$parentItem.onSelect.call(this.art, t2, o2, e4);
                  t2.$parentItem.$tooltip && (0, m.isStringOrNumber)(r3) && (t2.$parentItem.$tooltip.innerHTML = r3);
                }
              }
            });
            this.events.push(e3), t2.default && (0, m.addClass)(o2, "art-current");
          }
        }
        return o2;
      }
      updateStyle(e2) {
        let { controls: t2, constructor: r2, template: { $player: a2, $setting: i2 } } = this.art;
        if (t2.setting && !m.isMobile) {
          let o2 = e2 || r2.SETTING_WIDTH, { left: n2, width: s2 } = (0, m.getRect)(t2.setting), { left: l2, width: c2 } = (0, m.getRect)(a2), u2 = n2 - l2 + s2 / 2 - o2 / 2;
          u2 + o2 > c2 ? ((0, m.setStyle)(i2, "left", null), (0, m.setStyle)(i2, "right", null)) : ((0, m.setStyle)(i2, "left", `${u2}px`), (0, m.setStyle)(i2, "right", "auto"));
        }
      }
      render(e2, t2) {
        let { constructor: r2 } = this.art;
        if (this.cache.has(e2)) {
          let t3 = this.cache.get(e2);
          (0, m.inverseClass)(t3, "art-current"), (0, m.setStyle)(this.$parent, "width", `${t3.dataset.width}px`), (0, m.setStyle)(this.$parent, "height", `${t3.dataset.height}px`), this.updateStyle(Number(t3.dataset.width));
        } else {
          let a2 = (0, m.createElement)("div");
          (0, m.addClass)(a2, "art-setting-panel"), a2.dataset.width = t2 || r2.SETTING_WIDTH, a2.dataset.height = e2.length * r2.SETTING_ITEM_HEIGHT, e2[0] && e2[0].$parentItem && ((0, m.append)(a2, this.creatHeader(e2[0])), a2.dataset.height = Number(a2.dataset.height) + r2.SETTING_ITEM_HEIGHT);
          for (let t3 = 0; t3 < e2.length; t3++) {
            let r3 = e2[t3];
            (0, m.has)(r3, "switch") ? (0, m.append)(a2, this.creatItem("switch", r3)) : (0, m.has)(r3, "range") ? (0, m.append)(a2, this.creatItem("range", r3)) : (0, m.append)(a2, this.creatItem("selector", r3));
          }
          (0, m.append)(this.$parent, a2), this.cache.set(e2, a2), (0, m.inverseClass)(a2, "art-current"), (0, m.setStyle)(this.$parent, "width", `${a2.dataset.width}px`), (0, m.setStyle)(this.$parent, "height", `${a2.dataset.height}px`), this.updateStyle(Number(a2.dataset.width)), e2[0] && e2[0].$parentItem && e2[0].$parentItem.mounted && e2[0].$parentItem.mounted.call(this.art, a2, e2[0].$parentItem);
        }
      }
    }
    r.default = g;
  }, { "./flip": "bNOaj", "./aspectRatio": "5lAsp", "./playbackRate": "e6hsR", "./subtitleOffset": "fFNEr", "../utils/component": "guki8", "../utils/error": "2nFlF", "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], bNOaj: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { i18n: t2, icons: r2, constructor: { SETTING_ITEM_WIDTH: a2, FLIP: o2 } } = e2;
      function n(e3, r3, a3) {
        r3 && (r3.innerText = t2.get((0, i.capitalize)(a3)));
        let o3 = (0, i.queryAll)(".art-setting-item", e3).find((e4) => e4.dataset.value === a3);
        o3 && (0, i.inverseClass)(o3, "art-current");
      }
      return { width: a2, name: "flip", html: t2.get("Video Flip"), tooltip: t2.get((0, i.capitalize)(e2.flip)), icon: r2.flip, selector: o2.map((r3) => ({ value: r3, name: `aspect-ratio-${r3}`, default: r3 === e2.flip, html: t2.get((0, i.capitalize)(r3)) })), onSelect: (t3) => (e2.flip = t3.value, t3.html), mounted: (t3, r3) => {
        n(t3, r3.$tooltip, e2.flip), e2.on("flip", () => {
          n(t3, r3.$tooltip, e2.flip);
        });
      } };
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "5lAsp": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { i18n: t2, icons: r2, constructor: { SETTING_ITEM_WIDTH: a2, ASPECT_RATIO: o2 } } = e2;
      function n(e3) {
        return "default" === e3 ? t2.get("Default") : e3;
      }
      function s(e3, t3, r3) {
        t3 && (t3.innerText = n(r3));
        let a3 = (0, i.queryAll)(".art-setting-item", e3).find((e4) => e4.dataset.value === r3);
        a3 && (0, i.inverseClass)(a3, "art-current");
      }
      return { width: a2, name: "aspect-ratio", html: t2.get("Aspect Ratio"), icon: r2.aspectRatio, tooltip: n(e2.aspectRatio), selector: o2.map((t3) => ({ value: t3, name: `aspect-ratio-${t3}`, default: t3 === e2.aspectRatio, html: n(t3) })), onSelect: (t3) => (e2.aspectRatio = t3.value, t3.html), mounted: (t3, r3) => {
        s(t3, r3.$tooltip, e2.aspectRatio), e2.on("aspectRatio", () => {
          s(t3, r3.$tooltip, e2.aspectRatio);
        });
      } };
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], e6hsR: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { i18n: t2, icons: r2, constructor: { SETTING_ITEM_WIDTH: a2, PLAYBACK_RATE: o2 } } = e2;
      function n(e3) {
        return 1 === e3 ? t2.get("Normal") : e3.toFixed(1);
      }
      function s(e3, t3, r3) {
        t3 && (t3.innerText = n(r3));
        let a3 = (0, i.queryAll)(".art-setting-item", e3).find((e4) => Number(e4.dataset.value) === r3);
        a3 && (0, i.inverseClass)(a3, "art-current");
      }
      return { width: a2, name: "playback-rate", html: t2.get("Play Speed"), tooltip: n(e2.playbackRate), icon: r2.playbackRate, selector: o2.map((t3) => ({ value: t3, name: `aspect-ratio-${t3}`, default: t3 === e2.playbackRate, html: n(t3) })), onSelect: (t3) => (e2.playbackRate = t3.value, t3.html), mounted: (t3, r3) => {
        s(t3, r3.$tooltip, e2.playbackRate), e2.on("video:ratechange", () => {
          s(t3, r3.$tooltip, e2.playbackRate);
        });
      } };
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], fFNEr: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    function i(e2) {
      let { i18n: t2, icons: r2, constructor: a2 } = e2;
      return { width: a2.SETTING_ITEM_WIDTH, name: "subtitle-offset", html: t2.get("Subtitle Offset"), icon: r2.subtitle, tooltip: "0s", range: [0, -5, 5, 0.1], onChange: (t3) => (e2.subtitleOffset = t3.range, t3.range + "s") };
    }
    a.defineInteropFlag(r), a.export(r, "default", () => i);
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], f2Thp: [function(e, t, r) {
    e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = class {
      constructor() {
        this.name = "artplayer_settings", this.settings = {};
      }
      get(e2) {
        try {
          let t2 = JSON.parse(window.localStorage.getItem(this.name)) || {};
          return e2 ? t2[e2] : t2;
        } catch (t2) {
          return e2 ? this.settings[e2] : this.settings;
        }
      }
      set(e2, t2) {
        try {
          let r2 = Object.assign({}, this.get(), { [e2]: t2 });
          window.localStorage.setItem(this.name, JSON.stringify(r2));
        } catch (r2) {
          this.settings[e2] = t2;
        }
      }
      del(e2) {
        try {
          let t2 = this.get();
          delete t2[e2], window.localStorage.setItem(this.name, JSON.stringify(t2));
        } catch (t2) {
          delete this.settings[e2];
        }
      }
      clear() {
        try {
          window.localStorage.removeItem(this.name);
        } catch (e2) {
          this.settings = {};
        }
      }
    };
  }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "96ThS": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r);
    var i = e("../utils"), o = e("./miniProgressBar"), n = a.interopDefault(o), s = e("./autoOrientation"), l = a.interopDefault(s), c = e("./autoPlayback"), u = a.interopDefault(c), p = e("./fastForward"), d = a.interopDefault(p), f = e("./lock"), h = a.interopDefault(f);
    r.default = class {
      constructor(e2) {
        this.art = e2, this.id = 0;
        let { option: t2 } = e2;
        t2.miniProgressBar && !t2.isLive && this.add(n.default), t2.lock && i.isMobile && this.add(h.default), t2.autoPlayback && !t2.isLive && this.add(u.default), t2.autoOrientation && i.isMobile && this.add(l.default), t2.fastForward && i.isMobile && !t2.isLive && this.add(d.default);
        for (let e3 = 0; e3 < t2.plugins.length; e3++) this.add(t2.plugins[e3]);
      }
      add(e2) {
        this.id += 1;
        let t2 = e2.call(this.art, this.art);
        return t2 instanceof Promise ? t2.then((t3) => this.next(e2, t3)) : this.next(e2, t2);
      }
      next(e2, t2) {
        let r2 = t2 && t2.name || e2.name || `plugin${this.id}`;
        return (0, i.errorHandle)(!(0, i.has)(this, r2), `Cannot add a plugin that already has the same name: ${r2}`), (0, i.def)(this, r2, { value: t2 }), this;
      }
    };
  }, { "../utils": "h3rH9", "./miniProgressBar": "iBx4M", "./autoOrientation": "2O9qO", "./autoPlayback": "iiOc1", "./fastForward": "d9NUE", "./lock": "5dnKh", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], iBx4M: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      return e2.on("control", (t2) => {
        t2 ? (0, i.removeClass)(e2.template.$player, "art-mini-progress-bar") : (0, i.addClass)(e2.template.$player, "art-mini-progress-bar");
      }), { name: "mini-progress-bar" };
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2O9qO": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { constructor: t2, template: { $player: r2, $video: a2 } } = e2;
      return e2.on("fullscreenWeb", (o2) => {
        if (o2) {
          let { videoWidth: o3, videoHeight: n } = a2, { clientWidth: s, clientHeight: l } = document.documentElement;
          (o3 > n && s < l || o3 < n && s > l) && setTimeout(() => {
            (0, i.setStyle)(r2, "width", `${l}px`), (0, i.setStyle)(r2, "height", `${s}px`), (0, i.setStyle)(r2, "transform-origin", "0 0"), (0, i.setStyle)(r2, "transform", `rotate(90deg) translate(0, -${s}px)`), (0, i.addClass)(r2, "art-auto-orientation"), e2.isRotate = true, e2.emit("resize");
          }, t2.AUTO_ORIENTATION_TIME);
        } else (0, i.hasClass)(r2, "art-auto-orientation") && ((0, i.removeClass)(r2, "art-auto-orientation"), e2.isRotate = false, e2.emit("resize"));
      }), e2.on("fullscreen", async (e3) => {
        if (!screen?.orientation?.lock) return;
        let t3 = screen.orientation.type;
        if (e3) {
          let { videoWidth: e4, videoHeight: o2 } = a2, { clientWidth: n, clientHeight: s } = document.documentElement;
          if (e4 > o2 && n < s || e4 < o2 && n > s) {
            let e5 = t3.startsWith("portrait") ? "landscape" : "portrait";
            await screen.orientation.lock(e5), (0, i.addClass)(r2, "art-auto-orientation-fullscreen");
          }
        } else (0, i.hasClass)(r2, "art-auto-orientation-fullscreen") && (await screen.orientation.lock(t3), (0, i.removeClass)(r2, "art-auto-orientation-fullscreen"));
      }), { name: "autoOrientation", get state() {
        return (0, i.hasClass)(r2, "art-auto-orientation");
      } };
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], iiOc1: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { i18n: t2, icons: r2, storage: a2, constructor: o2, proxy: n, template: { $poster: s } } = e2, l = e2.layers.add({ name: "auto-playback", html: `<div class="art-auto-playback-close"></div><div class="art-auto-playback-last"></div><div class="art-auto-playback-jump"></div>` }), c = (0, i.query)(".art-auto-playback-last", l), u = (0, i.query)(".art-auto-playback-jump", l), p = (0, i.query)(".art-auto-playback-close", l);
      return e2.on("video:timeupdate", () => {
        if (e2.playing) {
          let t3 = a2.get("times") || {}, r3 = Object.keys(t3);
          r3.length > o2.AUTO_PLAYBACK_MAX && delete t3[r3[0]], t3[e2.option.id || e2.option.url] = e2.currentTime, a2.set("times", t3);
        }
      }), e2.on("ready", () => {
        let d = (a2.get("times") || {})[e2.option.id || e2.option.url];
        d && d >= o2.AUTO_PLAYBACK_MIN && ((0, i.append)(p, r2.close), (0, i.setStyle)(l, "display", "flex"), c.innerText = `${t2.get("Last Seen")} ${(0, i.secondToTime)(d)}`, u.innerText = t2.get("Jump Play"), n(p, "click", () => {
          (0, i.setStyle)(l, "display", "none");
        }), n(u, "click", () => {
          e2.seek = d, e2.play(), (0, i.setStyle)(s, "display", "none"), (0, i.setStyle)(l, "display", "none");
        }), e2.once("video:timeupdate", () => {
          setTimeout(() => {
            (0, i.setStyle)(l, "display", "none");
          }, o2.AUTO_PLAYBACK_TIMEOUT);
        }));
      }), { name: "auto-playback", get times() {
        return a2.get("times") || {};
      }, clear: () => a2.del("times"), delete(e3) {
        let t3 = a2.get("times") || {};
        return delete t3[e3], a2.set("times", t3), t3;
      } };
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], d9NUE: [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { constructor: t2, proxy: r2, template: { $player: a2, $video: o2 } } = e2, n = null, s = false, l = 1, c = () => {
        clearTimeout(n), s && (s = false, e2.playbackRate = l, (0, i.removeClass)(a2, "art-fast-forward"));
      };
      return r2(o2, "touchstart", (r3) => {
        1 === r3.touches.length && e2.playing && !e2.isLock && (n = setTimeout(() => {
          s = true, l = e2.playbackRate, e2.playbackRate = t2.FAST_FORWARD_VALUE, (0, i.addClass)(a2, "art-fast-forward");
        }, t2.FAST_FORWARD_TIME));
      }), r2(document, "touchmove", c), r2(document, "touchend", c), { name: "fastForward", get state() {
        return (0, i.hasClass)(a2, "art-fast-forward");
      } };
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "5dnKh": [function(e, t, r) {
    var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
    a.defineInteropFlag(r), a.export(r, "default", () => o);
    var i = e("../utils");
    function o(e2) {
      let { layers: t2, icons: r2, template: { $player: a2 } } = e2;
      function o2() {
        return (0, i.hasClass)(a2, "art-lock");
      }
      function n() {
        (0, i.addClass)(a2, "art-lock"), e2.isLock = true, e2.emit("lock", true);
      }
      function s() {
        (0, i.removeClass)(a2, "art-lock"), e2.isLock = false, e2.emit("lock", false);
      }
      return t2.add({ name: "lock", mounted(t3) {
        let a3 = (0, i.append)(t3, r2.lock), o3 = (0, i.append)(t3, r2.unlock);
        (0, i.setStyle)(a3, "display", "none"), e2.on("lock", (e3) => {
          e3 ? ((0, i.setStyle)(a3, "display", "inline-flex"), (0, i.setStyle)(o3, "display", "none")) : ((0, i.setStyle)(a3, "display", "none"), (0, i.setStyle)(o3, "display", "inline-flex"));
        });
      }, click() {
        o2() ? s() : n();
      } }), { name: "lock", get state() {
        return o2();
      }, set state(value) {
        value ? n() : s();
      } };
    }
  }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }] }, ["abjMI"], "abjMI", "parcelRequireb749");
})(artplayer, artplayer.exports);
var artplayerExports = artplayer.exports;
const Artplayer = /* @__PURE__ */ getDefaultExportFromCjs(artplayerExports);
var flv = { exports: {} };
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(self, function() {
    return (
      /******/
      function() {
        var __webpack_modules__ = {
          /***/
          "./node_modules/es6-promise/dist/es6-promise.js": (
            /*!******************************************************!*\
              !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
              \******************************************************/
            /***/
            function(module2, __unused_webpack_exports, __webpack_require__2) {
              /*!
               * @overview es6-promise - a tiny implementation of Promises/A+.
               * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
               * @license   Licensed under MIT license
               *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
               * @version   v4.2.8+1e68dce6
               */
              (function(global, factory) {
                module2.exports = factory();
              })(this, function() {
                function objectOrFunction(x) {
                  var type = typeof x;
                  return x !== null && (type === "object" || type === "function");
                }
                function isFunction(x) {
                  return typeof x === "function";
                }
                var _isArray = void 0;
                if (Array.isArray) {
                  _isArray = Array.isArray;
                } else {
                  _isArray = function(x) {
                    return Object.prototype.toString.call(x) === "[object Array]";
                  };
                }
                var isArray = _isArray;
                var len = 0;
                var vertxNext = void 0;
                var customSchedulerFn = void 0;
                var asap = function asap2(callback, arg) {
                  queue[len] = callback;
                  queue[len + 1] = arg;
                  len += 2;
                  if (len === 2) {
                    if (customSchedulerFn) {
                      customSchedulerFn(flush);
                    } else {
                      scheduleFlush();
                    }
                  }
                };
                function setScheduler(scheduleFn) {
                  customSchedulerFn = scheduleFn;
                }
                function setAsap(asapFn) {
                  asap = asapFn;
                }
                var browserWindow = typeof window !== "undefined" ? window : void 0;
                var browserGlobal = browserWindow || {};
                var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
                var isNode = typeof self === "undefined" && typeof process !== "undefined" && {}.toString.call(process) === "[object process]";
                var isWorker = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
                function useNextTick() {
                  return function() {
                    return process.nextTick(flush);
                  };
                }
                function useVertxTimer() {
                  if (typeof vertxNext !== "undefined") {
                    return function() {
                      vertxNext(flush);
                    };
                  }
                  return useSetTimeout();
                }
                function useMutationObserver() {
                  var iterations = 0;
                  var observer = new BrowserMutationObserver(flush);
                  var node = document.createTextNode("");
                  observer.observe(node, { characterData: true });
                  return function() {
                    node.data = iterations = ++iterations % 2;
                  };
                }
                function useMessageChannel() {
                  var channel = new MessageChannel();
                  channel.port1.onmessage = flush;
                  return function() {
                    return channel.port2.postMessage(0);
                  };
                }
                function useSetTimeout() {
                  var globalSetTimeout = setTimeout;
                  return function() {
                    return globalSetTimeout(flush, 1);
                  };
                }
                var queue = new Array(1e3);
                function flush() {
                  for (var i = 0; i < len; i += 2) {
                    var callback = queue[i];
                    var arg = queue[i + 1];
                    callback(arg);
                    queue[i] = void 0;
                    queue[i + 1] = void 0;
                  }
                  len = 0;
                }
                function attemptVertx() {
                  try {
                    var vertx = Function("return this")().require("vertx");
                    vertxNext = vertx.runOnLoop || vertx.runOnContext;
                    return useVertxTimer();
                  } catch (e) {
                    return useSetTimeout();
                  }
                }
                var scheduleFlush = void 0;
                if (isNode) {
                  scheduleFlush = useNextTick();
                } else if (BrowserMutationObserver) {
                  scheduleFlush = useMutationObserver();
                } else if (isWorker) {
                  scheduleFlush = useMessageChannel();
                } else if (browserWindow === void 0 && true) {
                  scheduleFlush = attemptVertx();
                } else {
                  scheduleFlush = useSetTimeout();
                }
                function then(onFulfillment, onRejection) {
                  var parent = this;
                  var child = new this.constructor(noop);
                  if (child[PROMISE_ID] === void 0) {
                    makePromise(child);
                  }
                  var _state = parent._state;
                  if (_state) {
                    var callback = arguments[_state - 1];
                    asap(function() {
                      return invokeCallback(_state, child, callback, parent._result);
                    });
                  } else {
                    subscribe(parent, child, onFulfillment, onRejection);
                  }
                  return child;
                }
                function resolve$1(object) {
                  var Constructor = this;
                  if (object && typeof object === "object" && object.constructor === Constructor) {
                    return object;
                  }
                  var promise = new Constructor(noop);
                  resolve(promise, object);
                  return promise;
                }
                var PROMISE_ID = Math.random().toString(36).substring(2);
                function noop() {
                }
                var PENDING = void 0;
                var FULFILLED = 1;
                var REJECTED = 2;
                function selfFulfillment() {
                  return new TypeError("You cannot resolve a promise with itself");
                }
                function cannotReturnOwn() {
                  return new TypeError("A promises callback cannot return that same promise.");
                }
                function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
                  try {
                    then$$1.call(value, fulfillmentHandler, rejectionHandler);
                  } catch (e) {
                    return e;
                  }
                }
                function handleForeignThenable(promise, thenable, then$$1) {
                  asap(function(promise2) {
                    var sealed = false;
                    var error = tryThen(then$$1, thenable, function(value) {
                      if (sealed) {
                        return;
                      }
                      sealed = true;
                      if (thenable !== value) {
                        resolve(promise2, value);
                      } else {
                        fulfill(promise2, value);
                      }
                    }, function(reason) {
                      if (sealed) {
                        return;
                      }
                      sealed = true;
                      reject(promise2, reason);
                    }, "Settle: " + (promise2._label || " unknown promise"));
                    if (!sealed && error) {
                      sealed = true;
                      reject(promise2, error);
                    }
                  }, promise);
                }
                function handleOwnThenable(promise, thenable) {
                  if (thenable._state === FULFILLED) {
                    fulfill(promise, thenable._result);
                  } else if (thenable._state === REJECTED) {
                    reject(promise, thenable._result);
                  } else {
                    subscribe(thenable, void 0, function(value) {
                      return resolve(promise, value);
                    }, function(reason) {
                      return reject(promise, reason);
                    });
                  }
                }
                function handleMaybeThenable(promise, maybeThenable, then$$1) {
                  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
                    handleOwnThenable(promise, maybeThenable);
                  } else {
                    if (then$$1 === void 0) {
                      fulfill(promise, maybeThenable);
                    } else if (isFunction(then$$1)) {
                      handleForeignThenable(promise, maybeThenable, then$$1);
                    } else {
                      fulfill(promise, maybeThenable);
                    }
                  }
                }
                function resolve(promise, value) {
                  if (promise === value) {
                    reject(promise, selfFulfillment());
                  } else if (objectOrFunction(value)) {
                    var then$$1 = void 0;
                    try {
                      then$$1 = value.then;
                    } catch (error) {
                      reject(promise, error);
                      return;
                    }
                    handleMaybeThenable(promise, value, then$$1);
                  } else {
                    fulfill(promise, value);
                  }
                }
                function publishRejection(promise) {
                  if (promise._onerror) {
                    promise._onerror(promise._result);
                  }
                  publish(promise);
                }
                function fulfill(promise, value) {
                  if (promise._state !== PENDING) {
                    return;
                  }
                  promise._result = value;
                  promise._state = FULFILLED;
                  if (promise._subscribers.length !== 0) {
                    asap(publish, promise);
                  }
                }
                function reject(promise, reason) {
                  if (promise._state !== PENDING) {
                    return;
                  }
                  promise._state = REJECTED;
                  promise._result = reason;
                  asap(publishRejection, promise);
                }
                function subscribe(parent, child, onFulfillment, onRejection) {
                  var _subscribers = parent._subscribers;
                  var length = _subscribers.length;
                  parent._onerror = null;
                  _subscribers[length] = child;
                  _subscribers[length + FULFILLED] = onFulfillment;
                  _subscribers[length + REJECTED] = onRejection;
                  if (length === 0 && parent._state) {
                    asap(publish, parent);
                  }
                }
                function publish(promise) {
                  var subscribers = promise._subscribers;
                  var settled = promise._state;
                  if (subscribers.length === 0) {
                    return;
                  }
                  var child = void 0, callback = void 0, detail = promise._result;
                  for (var i = 0; i < subscribers.length; i += 3) {
                    child = subscribers[i];
                    callback = subscribers[i + settled];
                    if (child) {
                      invokeCallback(settled, child, callback, detail);
                    } else {
                      callback(detail);
                    }
                  }
                  promise._subscribers.length = 0;
                }
                function invokeCallback(settled, promise, callback, detail) {
                  var hasCallback = isFunction(callback), value = void 0, error = void 0, succeeded = true;
                  if (hasCallback) {
                    try {
                      value = callback(detail);
                    } catch (e) {
                      succeeded = false;
                      error = e;
                    }
                    if (promise === value) {
                      reject(promise, cannotReturnOwn());
                      return;
                    }
                  } else {
                    value = detail;
                  }
                  if (promise._state !== PENDING) ;
                  else if (hasCallback && succeeded) {
                    resolve(promise, value);
                  } else if (succeeded === false) {
                    reject(promise, error);
                  } else if (settled === FULFILLED) {
                    fulfill(promise, value);
                  } else if (settled === REJECTED) {
                    reject(promise, value);
                  }
                }
                function initializePromise(promise, resolver) {
                  try {
                    resolver(function resolvePromise(value) {
                      resolve(promise, value);
                    }, function rejectPromise(reason) {
                      reject(promise, reason);
                    });
                  } catch (e) {
                    reject(promise, e);
                  }
                }
                var id = 0;
                function nextId() {
                  return id++;
                }
                function makePromise(promise) {
                  promise[PROMISE_ID] = id++;
                  promise._state = void 0;
                  promise._result = void 0;
                  promise._subscribers = [];
                }
                function validationError() {
                  return new Error("Array Methods must be provided an Array");
                }
                var Enumerator = function() {
                  function Enumerator2(Constructor, input) {
                    this._instanceConstructor = Constructor;
                    this.promise = new Constructor(noop);
                    if (!this.promise[PROMISE_ID]) {
                      makePromise(this.promise);
                    }
                    if (isArray(input)) {
                      this.length = input.length;
                      this._remaining = input.length;
                      this._result = new Array(this.length);
                      if (this.length === 0) {
                        fulfill(this.promise, this._result);
                      } else {
                        this.length = this.length || 0;
                        this._enumerate(input);
                        if (this._remaining === 0) {
                          fulfill(this.promise, this._result);
                        }
                      }
                    } else {
                      reject(this.promise, validationError());
                    }
                  }
                  Enumerator2.prototype._enumerate = function _enumerate(input) {
                    for (var i = 0; this._state === PENDING && i < input.length; i++) {
                      this._eachEntry(input[i], i);
                    }
                  };
                  Enumerator2.prototype._eachEntry = function _eachEntry(entry, i) {
                    var c = this._instanceConstructor;
                    var resolve$$1 = c.resolve;
                    if (resolve$$1 === resolve$1) {
                      var _then = void 0;
                      var error = void 0;
                      var didError = false;
                      try {
                        _then = entry.then;
                      } catch (e) {
                        didError = true;
                        error = e;
                      }
                      if (_then === then && entry._state !== PENDING) {
                        this._settledAt(entry._state, i, entry._result);
                      } else if (typeof _then !== "function") {
                        this._remaining--;
                        this._result[i] = entry;
                      } else if (c === Promise$1) {
                        var promise = new c(noop);
                        if (didError) {
                          reject(promise, error);
                        } else {
                          handleMaybeThenable(promise, entry, _then);
                        }
                        this._willSettleAt(promise, i);
                      } else {
                        this._willSettleAt(new c(function(resolve$$12) {
                          return resolve$$12(entry);
                        }), i);
                      }
                    } else {
                      this._willSettleAt(resolve$$1(entry), i);
                    }
                  };
                  Enumerator2.prototype._settledAt = function _settledAt(state, i, value) {
                    var promise = this.promise;
                    if (promise._state === PENDING) {
                      this._remaining--;
                      if (state === REJECTED) {
                        reject(promise, value);
                      } else {
                        this._result[i] = value;
                      }
                    }
                    if (this._remaining === 0) {
                      fulfill(promise, this._result);
                    }
                  };
                  Enumerator2.prototype._willSettleAt = function _willSettleAt(promise, i) {
                    var enumerator = this;
                    subscribe(promise, void 0, function(value) {
                      return enumerator._settledAt(FULFILLED, i, value);
                    }, function(reason) {
                      return enumerator._settledAt(REJECTED, i, reason);
                    });
                  };
                  return Enumerator2;
                }();
                function all(entries) {
                  return new Enumerator(this, entries).promise;
                }
                function race(entries) {
                  var Constructor = this;
                  if (!isArray(entries)) {
                    return new Constructor(function(_, reject2) {
                      return reject2(new TypeError("You must pass an array to race."));
                    });
                  } else {
                    return new Constructor(function(resolve2, reject2) {
                      var length = entries.length;
                      for (var i = 0; i < length; i++) {
                        Constructor.resolve(entries[i]).then(resolve2, reject2);
                      }
                    });
                  }
                }
                function reject$1(reason) {
                  var Constructor = this;
                  var promise = new Constructor(noop);
                  reject(promise, reason);
                  return promise;
                }
                function needsResolver() {
                  throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                }
                function needsNew() {
                  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }
                var Promise$1 = function() {
                  function Promise2(resolver) {
                    this[PROMISE_ID] = nextId();
                    this._result = this._state = void 0;
                    this._subscribers = [];
                    if (noop !== resolver) {
                      typeof resolver !== "function" && needsResolver();
                      this instanceof Promise2 ? initializePromise(this, resolver) : needsNew();
                    }
                  }
                  Promise2.prototype.catch = function _catch(onRejection) {
                    return this.then(null, onRejection);
                  };
                  Promise2.prototype.finally = function _finally(callback) {
                    var promise = this;
                    var constructor = promise.constructor;
                    if (isFunction(callback)) {
                      return promise.then(function(value) {
                        return constructor.resolve(callback()).then(function() {
                          return value;
                        });
                      }, function(reason) {
                        return constructor.resolve(callback()).then(function() {
                          throw reason;
                        });
                      });
                    }
                    return promise.then(callback, callback);
                  };
                  return Promise2;
                }();
                Promise$1.prototype.then = then;
                Promise$1.all = all;
                Promise$1.race = race;
                Promise$1.resolve = resolve$1;
                Promise$1.reject = reject$1;
                Promise$1._setScheduler = setScheduler;
                Promise$1._setAsap = setAsap;
                Promise$1._asap = asap;
                function polyfill() {
                  var local = void 0;
                  if (typeof __webpack_require__2.g !== "undefined") {
                    local = __webpack_require__2.g;
                  } else if (typeof self !== "undefined") {
                    local = self;
                  } else {
                    try {
                      local = Function("return this")();
                    } catch (e) {
                      throw new Error("polyfill failed because global object is unavailable in this environment");
                    }
                  }
                  var P = local.Promise;
                  if (P) {
                    var promiseToString = null;
                    try {
                      promiseToString = Object.prototype.toString.call(P.resolve());
                    } catch (e) {
                    }
                    if (promiseToString === "[object Promise]" && !P.cast) {
                      return;
                    }
                  }
                  local.Promise = Promise$1;
                }
                Promise$1.polyfill = polyfill;
                Promise$1.Promise = Promise$1;
                return Promise$1;
              });
            }
          ),
          /***/
          "./node_modules/events/events.js": (
            /*!***************************************!*\
              !*** ./node_modules/events/events.js ***!
              \***************************************/
            /***/
            function(module2) {
              var R = typeof Reflect === "object" ? Reflect : null;
              var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
                return Function.prototype.apply.call(target, receiver, args);
              };
              var ReflectOwnKeys;
              if (R && typeof R.ownKeys === "function") {
                ReflectOwnKeys = R.ownKeys;
              } else if (Object.getOwnPropertySymbols) {
                ReflectOwnKeys = function ReflectOwnKeys2(target) {
                  return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
                };
              } else {
                ReflectOwnKeys = function ReflectOwnKeys2(target) {
                  return Object.getOwnPropertyNames(target);
                };
              }
              function ProcessEmitWarning(warning) {
                if (console && console.warn)
                  console.warn(warning);
              }
              var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
                return value !== value;
              };
              function EventEmitter() {
                EventEmitter.init.call(this);
              }
              module2.exports = EventEmitter;
              module2.exports.once = once;
              EventEmitter.EventEmitter = EventEmitter;
              EventEmitter.prototype._events = void 0;
              EventEmitter.prototype._eventsCount = 0;
              EventEmitter.prototype._maxListeners = void 0;
              var defaultMaxListeners = 10;
              function checkListener(listener) {
                if (typeof listener !== "function") {
                  throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
                }
              }
              Object.defineProperty(EventEmitter, "defaultMaxListeners", {
                enumerable: true,
                get: function() {
                  return defaultMaxListeners;
                },
                set: function(arg) {
                  if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
                  }
                  defaultMaxListeners = arg;
                }
              });
              EventEmitter.init = function() {
                if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
                  this._events = /* @__PURE__ */ Object.create(null);
                  this._eventsCount = 0;
                }
                this._maxListeners = this._maxListeners || void 0;
              };
              EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
                if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
                  throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
                }
                this._maxListeners = n;
                return this;
              };
              function _getMaxListeners(that) {
                if (that._maxListeners === void 0)
                  return EventEmitter.defaultMaxListeners;
                return that._maxListeners;
              }
              EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
                return _getMaxListeners(this);
              };
              EventEmitter.prototype.emit = function emit(type) {
                var args = [];
                for (var i = 1; i < arguments.length; i++)
                  args.push(arguments[i]);
                var doError = type === "error";
                var events = this._events;
                if (events !== void 0)
                  doError = doError && events.error === void 0;
                else if (!doError)
                  return false;
                if (doError) {
                  var er;
                  if (args.length > 0)
                    er = args[0];
                  if (er instanceof Error) {
                    throw er;
                  }
                  var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
                  err.context = er;
                  throw err;
                }
                var handler = events[type];
                if (handler === void 0)
                  return false;
                if (typeof handler === "function") {
                  ReflectApply(handler, this, args);
                } else {
                  var len = handler.length;
                  var listeners = arrayClone(handler, len);
                  for (var i = 0; i < len; ++i)
                    ReflectApply(listeners[i], this, args);
                }
                return true;
              };
              function _addListener(target, type, listener, prepend) {
                var m;
                var events;
                var existing;
                checkListener(listener);
                events = target._events;
                if (events === void 0) {
                  events = target._events = /* @__PURE__ */ Object.create(null);
                  target._eventsCount = 0;
                } else {
                  if (events.newListener !== void 0) {
                    target.emit("newListener", type, listener.listener ? listener.listener : listener);
                    events = target._events;
                  }
                  existing = events[type];
                }
                if (existing === void 0) {
                  existing = events[type] = listener;
                  ++target._eventsCount;
                } else {
                  if (typeof existing === "function") {
                    existing = events[type] = prepend ? [listener, existing] : [existing, listener];
                  } else if (prepend) {
                    existing.unshift(listener);
                  } else {
                    existing.push(listener);
                  }
                  m = _getMaxListeners(target);
                  if (m > 0 && existing.length > m && !existing.warned) {
                    existing.warned = true;
                    var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    w.name = "MaxListenersExceededWarning";
                    w.emitter = target;
                    w.type = type;
                    w.count = existing.length;
                    ProcessEmitWarning(w);
                  }
                }
                return target;
              }
              EventEmitter.prototype.addListener = function addListener(type, listener) {
                return _addListener(this, type, listener, false);
              };
              EventEmitter.prototype.on = EventEmitter.prototype.addListener;
              EventEmitter.prototype.prependListener = function prependListener(type, listener) {
                return _addListener(this, type, listener, true);
              };
              function onceWrapper() {
                if (!this.fired) {
                  this.target.removeListener(this.type, this.wrapFn);
                  this.fired = true;
                  if (arguments.length === 0)
                    return this.listener.call(this.target);
                  return this.listener.apply(this.target, arguments);
                }
              }
              function _onceWrap(target, type, listener) {
                var state = { fired: false, wrapFn: void 0, target, type, listener };
                var wrapped = onceWrapper.bind(state);
                wrapped.listener = listener;
                state.wrapFn = wrapped;
                return wrapped;
              }
              EventEmitter.prototype.once = function once2(type, listener) {
                checkListener(listener);
                this.on(type, _onceWrap(this, type, listener));
                return this;
              };
              EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
                checkListener(listener);
                this.prependListener(type, _onceWrap(this, type, listener));
                return this;
              };
              EventEmitter.prototype.removeListener = function removeListener(type, listener) {
                var list, events, position, i, originalListener;
                checkListener(listener);
                events = this._events;
                if (events === void 0)
                  return this;
                list = events[type];
                if (list === void 0)
                  return this;
                if (list === listener || list.listener === listener) {
                  if (--this._eventsCount === 0)
                    this._events = /* @__PURE__ */ Object.create(null);
                  else {
                    delete events[type];
                    if (events.removeListener)
                      this.emit("removeListener", type, list.listener || listener);
                  }
                } else if (typeof list !== "function") {
                  position = -1;
                  for (i = list.length - 1; i >= 0; i--) {
                    if (list[i] === listener || list[i].listener === listener) {
                      originalListener = list[i].listener;
                      position = i;
                      break;
                    }
                  }
                  if (position < 0)
                    return this;
                  if (position === 0)
                    list.shift();
                  else {
                    spliceOne(list, position);
                  }
                  if (list.length === 1)
                    events[type] = list[0];
                  if (events.removeListener !== void 0)
                    this.emit("removeListener", type, originalListener || listener);
                }
                return this;
              };
              EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
              EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
                var listeners, events, i;
                events = this._events;
                if (events === void 0)
                  return this;
                if (events.removeListener === void 0) {
                  if (arguments.length === 0) {
                    this._events = /* @__PURE__ */ Object.create(null);
                    this._eventsCount = 0;
                  } else if (events[type] !== void 0) {
                    if (--this._eventsCount === 0)
                      this._events = /* @__PURE__ */ Object.create(null);
                    else
                      delete events[type];
                  }
                  return this;
                }
                if (arguments.length === 0) {
                  var keys = Object.keys(events);
                  var key;
                  for (i = 0; i < keys.length; ++i) {
                    key = keys[i];
                    if (key === "removeListener")
                      continue;
                    this.removeAllListeners(key);
                  }
                  this.removeAllListeners("removeListener");
                  this._events = /* @__PURE__ */ Object.create(null);
                  this._eventsCount = 0;
                  return this;
                }
                listeners = events[type];
                if (typeof listeners === "function") {
                  this.removeListener(type, listeners);
                } else if (listeners !== void 0) {
                  for (i = listeners.length - 1; i >= 0; i--) {
                    this.removeListener(type, listeners[i]);
                  }
                }
                return this;
              };
              function _listeners(target, type, unwrap) {
                var events = target._events;
                if (events === void 0)
                  return [];
                var evlistener = events[type];
                if (evlistener === void 0)
                  return [];
                if (typeof evlistener === "function")
                  return unwrap ? [evlistener.listener || evlistener] : [evlistener];
                return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
              }
              EventEmitter.prototype.listeners = function listeners(type) {
                return _listeners(this, type, true);
              };
              EventEmitter.prototype.rawListeners = function rawListeners(type) {
                return _listeners(this, type, false);
              };
              EventEmitter.listenerCount = function(emitter, type) {
                if (typeof emitter.listenerCount === "function") {
                  return emitter.listenerCount(type);
                } else {
                  return listenerCount.call(emitter, type);
                }
              };
              EventEmitter.prototype.listenerCount = listenerCount;
              function listenerCount(type) {
                var events = this._events;
                if (events !== void 0) {
                  var evlistener = events[type];
                  if (typeof evlistener === "function") {
                    return 1;
                  } else if (evlistener !== void 0) {
                    return evlistener.length;
                  }
                }
                return 0;
              }
              EventEmitter.prototype.eventNames = function eventNames() {
                return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
              };
              function arrayClone(arr, n) {
                var copy = new Array(n);
                for (var i = 0; i < n; ++i)
                  copy[i] = arr[i];
                return copy;
              }
              function spliceOne(list, index) {
                for (; index + 1 < list.length; index++)
                  list[index] = list[index + 1];
                list.pop();
              }
              function unwrapListeners(arr) {
                var ret = new Array(arr.length);
                for (var i = 0; i < ret.length; ++i) {
                  ret[i] = arr[i].listener || arr[i];
                }
                return ret;
              }
              function once(emitter, name) {
                return new Promise(function(resolve, reject) {
                  function errorListener(err) {
                    emitter.removeListener(name, resolver);
                    reject(err);
                  }
                  function resolver() {
                    if (typeof emitter.removeListener === "function") {
                      emitter.removeListener("error", errorListener);
                    }
                    resolve([].slice.call(arguments));
                  }
                  eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
                  if (name !== "error") {
                    addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
                  }
                });
              }
              function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
                if (typeof emitter.on === "function") {
                  eventTargetAgnosticAddListener(emitter, "error", handler, flags);
                }
              }
              function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
                if (typeof emitter.on === "function") {
                  if (flags.once) {
                    emitter.once(name, listener);
                  } else {
                    emitter.on(name, listener);
                  }
                } else if (typeof emitter.addEventListener === "function") {
                  emitter.addEventListener(name, function wrapListener(arg) {
                    if (flags.once) {
                      emitter.removeEventListener(name, wrapListener);
                    }
                    listener(arg);
                  });
                } else {
                  throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
                }
              }
            }
          ),
          /***/
          "./node_modules/webworkify-webpack/index.js": (
            /*!**************************************************!*\
              !*** ./node_modules/webworkify-webpack/index.js ***!
              \**************************************************/
            /***/
            function(module2, __unused_webpack_exports, __webpack_require__2) {
              function webpackBootstrapFunc(modules) {
                var installedModules = {};
                function __nested_webpack_require_164__(moduleId) {
                  if (installedModules[moduleId])
                    return installedModules[moduleId].exports;
                  var module3 = installedModules[moduleId] = {
                    /******/
                    i: moduleId,
                    /******/
                    l: false,
                    /******/
                    exports: {}
                    /******/
                  };
                  modules[moduleId].call(module3.exports, module3, module3.exports, __nested_webpack_require_164__);
                  module3.l = true;
                  return module3.exports;
                }
                __nested_webpack_require_164__.m = modules;
                __nested_webpack_require_164__.c = installedModules;
                __nested_webpack_require_164__.i = function(value) {
                  return value;
                };
                __nested_webpack_require_164__.d = function(exports2, name, getter) {
                  if (!__nested_webpack_require_164__.o(exports2, name)) {
                    Object.defineProperty(exports2, name, {
                      /******/
                      configurable: false,
                      /******/
                      enumerable: true,
                      /******/
                      get: getter
                      /******/
                    });
                  }
                };
                __nested_webpack_require_164__.r = function(exports2) {
                  Object.defineProperty(exports2, "__esModule", { value: true });
                };
                __nested_webpack_require_164__.n = function(module3) {
                  var getter = module3 && module3.__esModule ? (
                    /******/
                    function getDefault() {
                      return module3["default"];
                    }
                  ) : (
                    /******/
                    function getModuleExports() {
                      return module3;
                    }
                  );
                  __nested_webpack_require_164__.d(getter, "a", getter);
                  return getter;
                };
                __nested_webpack_require_164__.o = function(object, property) {
                  return Object.prototype.hasOwnProperty.call(object, property);
                };
                __nested_webpack_require_164__.p = "/";
                __nested_webpack_require_164__.oe = function(err) {
                  console.error(err);
                  throw err;
                };
                var f = __nested_webpack_require_164__(__nested_webpack_require_164__.s = ENTRY_MODULE);
                return f.default || f;
              }
              var moduleNameReqExp = "[\\.|\\-|\\+|\\w|/|@]+";
              var dependencyRegExp = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + moduleNameReqExp + ").*?\\)";
              function quoteRegExp(str) {
                return (str + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
              }
              function isNumeric(n) {
                return !isNaN(1 * n);
              }
              function getModuleDependencies(sources, module3, queueName) {
                var retval = {};
                retval[queueName] = [];
                var fnString = module3.toString();
                var wrapperSignature = fnString.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
                if (!wrapperSignature)
                  return retval;
                var webpackRequireName = wrapperSignature[1];
                var re = new RegExp("(\\\\n|\\W)" + quoteRegExp(webpackRequireName) + dependencyRegExp, "g");
                var match;
                while (match = re.exec(fnString)) {
                  if (match[3] === "dll-reference")
                    continue;
                  retval[queueName].push(match[3]);
                }
                re = new RegExp("\\(" + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, "g");
                while (match = re.exec(fnString)) {
                  if (!sources[match[2]]) {
                    retval[queueName].push(match[1]);
                    sources[match[2]] = __webpack_require__2(match[1]).m;
                  }
                  retval[match[2]] = retval[match[2]] || [];
                  retval[match[2]].push(match[4]);
                }
                var keys = Object.keys(retval);
                for (var i = 0; i < keys.length; i++) {
                  for (var j = 0; j < retval[keys[i]].length; j++) {
                    if (isNumeric(retval[keys[i]][j])) {
                      retval[keys[i]][j] = 1 * retval[keys[i]][j];
                    }
                  }
                }
                return retval;
              }
              function hasValuesInQueues(queues) {
                var keys = Object.keys(queues);
                return keys.reduce(function(hasValues, key) {
                  return hasValues || queues[key].length > 0;
                }, false);
              }
              function getRequiredModules(sources, moduleId) {
                var modulesQueue = {
                  main: [moduleId]
                };
                var requiredModules = {
                  main: []
                };
                var seenModules = {
                  main: {}
                };
                while (hasValuesInQueues(modulesQueue)) {
                  var queues = Object.keys(modulesQueue);
                  for (var i = 0; i < queues.length; i++) {
                    var queueName = queues[i];
                    var queue = modulesQueue[queueName];
                    var moduleToCheck = queue.pop();
                    seenModules[queueName] = seenModules[queueName] || {};
                    if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck])
                      continue;
                    seenModules[queueName][moduleToCheck] = true;
                    requiredModules[queueName] = requiredModules[queueName] || [];
                    requiredModules[queueName].push(moduleToCheck);
                    var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName);
                    var newModulesKeys = Object.keys(newModules);
                    for (var j = 0; j < newModulesKeys.length; j++) {
                      modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || [];
                      modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]]);
                    }
                  }
                }
                return requiredModules;
              }
              module2.exports = function(moduleId, options) {
                options = options || {};
                var sources = {
                  main: __webpack_require__2.m
                };
                var requiredModules = options.all ? { main: Object.keys(sources.main) } : getRequiredModules(sources, moduleId);
                var src = "";
                Object.keys(requiredModules).filter(function(m) {
                  return m !== "main";
                }).forEach(function(module3) {
                  var entryModule = 0;
                  while (requiredModules[module3][entryModule]) {
                    entryModule++;
                  }
                  requiredModules[module3].push(entryModule);
                  sources[module3][entryModule] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })";
                  src = src + "var " + module3 + " = (" + webpackBootstrapFunc.toString().replace("ENTRY_MODULE", JSON.stringify(entryModule)) + ")({" + requiredModules[module3].map(function(id) {
                    return "" + JSON.stringify(id) + ": " + sources[module3][id].toString();
                  }).join(",") + "});\n";
                });
                src = src + "new ((" + webpackBootstrapFunc.toString().replace("ENTRY_MODULE", JSON.stringify(moduleId)) + ")({" + requiredModules.main.map(function(id) {
                  return "" + JSON.stringify(id) + ": " + sources.main[id].toString();
                }).join(",") + "}))(self);";
                var blob = new window.Blob([src], { type: "text/javascript" });
                if (options.bare) {
                  return blob;
                }
                var URL2 = window.URL || window.webkitURL || window.mozURL || window.msURL;
                var workerUrl = URL2.createObjectURL(blob);
                var worker = new window.Worker(workerUrl);
                worker.objectURL = workerUrl;
                return worker;
              };
            }
          ),
          /***/
          "./src/config.js": (
            /*!***********************!*\
              !*** ./src/config.js ***!
              \***********************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "defaultConfig": function() {
                  return (
                    /* binding */
                    defaultConfig
                  );
                },
                /* harmony export */
                "createDefaultConfig": function() {
                  return (
                    /* binding */
                    createDefaultConfig
                  );
                }
                /* harmony export */
              });
              var defaultConfig = {
                enableWorker: false,
                enableStashBuffer: true,
                stashInitialSize: void 0,
                isLive: false,
                lazyLoad: true,
                lazyLoadMaxDuration: 3 * 60,
                lazyLoadRecoverDuration: 30,
                deferLoadAfterSourceOpen: true,
                // autoCleanupSourceBuffer: default as false, leave unspecified
                autoCleanupMaxBackwardDuration: 3 * 60,
                autoCleanupMinBackwardDuration: 2 * 60,
                statisticsInfoReportInterval: 600,
                fixAudioTimestampGap: true,
                accurateSeek: false,
                seekType: "range",
                seekParamStart: "bstart",
                seekParamEnd: "bend",
                rangeLoadZeroStart: false,
                customSeekHandler: void 0,
                reuseRedirectedURL: false,
                // referrerPolicy: leave as unspecified
                headers: void 0,
                customLoader: void 0
              };
              function createDefaultConfig() {
                return Object.assign({}, defaultConfig);
              }
            }
          ),
          /***/
          "./src/core/features.js": (
            /*!******************************!*\
              !*** ./src/core/features.js ***!
              \******************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var _io_io_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ../io/io-controller.js */
                "./src/io/io-controller.js"
              );
              var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ../config.js */
                "./src/config.js"
              );
              var Features = (
                /** @class */
                function() {
                  function Features2() {
                  }
                  Features2.supportMSEH264Playback = function() {
                    return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
                  };
                  Features2.supportNetworkStreamIO = function() {
                    var ioctl = new _io_io_controller_js__WEBPACK_IMPORTED_MODULE_0__.default({}, (0, _config_js__WEBPACK_IMPORTED_MODULE_1__.createDefaultConfig)());
                    var loaderType = ioctl.loaderType;
                    ioctl.destroy();
                    return loaderType == "fetch-stream-loader" || loaderType == "xhr-moz-chunked-loader";
                  };
                  Features2.getNetworkLoaderTypeName = function() {
                    var ioctl = new _io_io_controller_js__WEBPACK_IMPORTED_MODULE_0__.default({}, (0, _config_js__WEBPACK_IMPORTED_MODULE_1__.createDefaultConfig)());
                    var loaderType = ioctl.loaderType;
                    ioctl.destroy();
                    return loaderType;
                  };
                  Features2.supportNativeMediaPlayback = function(mimeType) {
                    if (Features2.videoElement == void 0) {
                      Features2.videoElement = window.document.createElement("video");
                    }
                    var canPlay = Features2.videoElement.canPlayType(mimeType);
                    return canPlay === "probably" || canPlay == "maybe";
                  };
                  Features2.getFeatureList = function() {
                    var features = {
                      mseFlvPlayback: false,
                      mseLiveFlvPlayback: false,
                      networkStreamIO: false,
                      networkLoaderName: "",
                      nativeMP4H264Playback: false,
                      nativeWebmVP8Playback: false,
                      nativeWebmVP9Playback: false
                    };
                    features.mseFlvPlayback = Features2.supportMSEH264Playback();
                    features.networkStreamIO = Features2.supportNetworkStreamIO();
                    features.networkLoaderName = Features2.getNetworkLoaderTypeName();
                    features.mseLiveFlvPlayback = features.mseFlvPlayback && features.networkStreamIO;
                    features.nativeMP4H264Playback = Features2.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"');
                    features.nativeWebmVP8Playback = Features2.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"');
                    features.nativeWebmVP9Playback = Features2.supportNativeMediaPlayback('video/webm; codecs="vp9"');
                    return features;
                  };
                  return Features2;
                }()
              );
              __webpack_exports__2["default"] = Features;
            }
          ),
          /***/
          "./src/core/media-info.js": (
            /*!********************************!*\
              !*** ./src/core/media-info.js ***!
              \********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var MediaInfo = (
                /** @class */
                function() {
                  function MediaInfo2() {
                    this.mimeType = null;
                    this.duration = null;
                    this.hasAudio = null;
                    this.hasVideo = null;
                    this.audioCodec = null;
                    this.videoCodec = null;
                    this.audioDataRate = null;
                    this.videoDataRate = null;
                    this.audioSampleRate = null;
                    this.audioChannelCount = null;
                    this.width = null;
                    this.height = null;
                    this.fps = null;
                    this.profile = null;
                    this.level = null;
                    this.refFrames = null;
                    this.chromaFormat = null;
                    this.sarNum = null;
                    this.sarDen = null;
                    this.metadata = null;
                    this.segments = null;
                    this.segmentCount = null;
                    this.hasKeyframesIndex = null;
                    this.keyframesIndex = null;
                  }
                  MediaInfo2.prototype.isComplete = function() {
                    var audioInfoComplete = this.hasAudio === false || this.hasAudio === true && this.audioCodec != null && this.audioSampleRate != null && this.audioChannelCount != null;
                    var videoInfoComplete = this.hasVideo === false || this.hasVideo === true && this.videoCodec != null && this.width != null && this.height != null && this.fps != null && this.profile != null && this.level != null && this.refFrames != null && this.chromaFormat != null && this.sarNum != null && this.sarDen != null;
                    return this.mimeType != null && this.duration != null && this.metadata != null && this.hasKeyframesIndex != null && audioInfoComplete && videoInfoComplete;
                  };
                  MediaInfo2.prototype.isSeekable = function() {
                    return this.hasKeyframesIndex === true;
                  };
                  MediaInfo2.prototype.getNearestKeyframe = function(milliseconds) {
                    if (this.keyframesIndex == null) {
                      return null;
                    }
                    var table = this.keyframesIndex;
                    var keyframeIdx = this._search(table.times, milliseconds);
                    return {
                      index: keyframeIdx,
                      milliseconds: table.times[keyframeIdx],
                      fileposition: table.filepositions[keyframeIdx]
                    };
                  };
                  MediaInfo2.prototype._search = function(list, value) {
                    var idx = 0;
                    var last = list.length - 1;
                    var mid = 0;
                    var lbound = 0;
                    var ubound = last;
                    if (value < list[0]) {
                      idx = 0;
                      lbound = ubound + 1;
                    }
                    while (lbound <= ubound) {
                      mid = lbound + Math.floor((ubound - lbound) / 2);
                      if (mid === last || value >= list[mid] && value < list[mid + 1]) {
                        idx = mid;
                        break;
                      } else if (list[mid] < value) {
                        lbound = mid + 1;
                      } else {
                        ubound = mid - 1;
                      }
                    }
                    return idx;
                  };
                  return MediaInfo2;
                }()
              );
              __webpack_exports__2["default"] = MediaInfo;
            }
          ),
          /***/
          "./src/core/media-segment-info.js": (
            /*!****************************************!*\
              !*** ./src/core/media-segment-info.js ***!
              \****************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "SampleInfo": function() {
                  return (
                    /* binding */
                    SampleInfo
                  );
                },
                /* harmony export */
                "MediaSegmentInfo": function() {
                  return (
                    /* binding */
                    MediaSegmentInfo
                  );
                },
                /* harmony export */
                "IDRSampleList": function() {
                  return (
                    /* binding */
                    IDRSampleList
                  );
                },
                /* harmony export */
                "MediaSegmentInfoList": function() {
                  return (
                    /* binding */
                    MediaSegmentInfoList
                  );
                }
                /* harmony export */
              });
              var SampleInfo = (
                /** @class */
                /* @__PURE__ */ function() {
                  function SampleInfo2(dts, pts, duration, originalDts, isSync) {
                    this.dts = dts;
                    this.pts = pts;
                    this.duration = duration;
                    this.originalDts = originalDts;
                    this.isSyncPoint = isSync;
                    this.fileposition = null;
                  }
                  return SampleInfo2;
                }()
              );
              var MediaSegmentInfo = (
                /** @class */
                function() {
                  function MediaSegmentInfo2() {
                    this.beginDts = 0;
                    this.endDts = 0;
                    this.beginPts = 0;
                    this.endPts = 0;
                    this.originalBeginDts = 0;
                    this.originalEndDts = 0;
                    this.syncPoints = [];
                    this.firstSample = null;
                    this.lastSample = null;
                  }
                  MediaSegmentInfo2.prototype.appendSyncPoint = function(sampleInfo) {
                    sampleInfo.isSyncPoint = true;
                    this.syncPoints.push(sampleInfo);
                  };
                  return MediaSegmentInfo2;
                }()
              );
              var IDRSampleList = (
                /** @class */
                function() {
                  function IDRSampleList2() {
                    this._list = [];
                  }
                  IDRSampleList2.prototype.clear = function() {
                    this._list = [];
                  };
                  IDRSampleList2.prototype.appendArray = function(syncPoints) {
                    var list = this._list;
                    if (syncPoints.length === 0) {
                      return;
                    }
                    if (list.length > 0 && syncPoints[0].originalDts < list[list.length - 1].originalDts) {
                      this.clear();
                    }
                    Array.prototype.push.apply(list, syncPoints);
                  };
                  IDRSampleList2.prototype.getLastSyncPointBeforeDts = function(dts) {
                    if (this._list.length == 0) {
                      return null;
                    }
                    var list = this._list;
                    var idx = 0;
                    var last = list.length - 1;
                    var mid = 0;
                    var lbound = 0;
                    var ubound = last;
                    if (dts < list[0].dts) {
                      idx = 0;
                      lbound = ubound + 1;
                    }
                    while (lbound <= ubound) {
                      mid = lbound + Math.floor((ubound - lbound) / 2);
                      if (mid === last || dts >= list[mid].dts && dts < list[mid + 1].dts) {
                        idx = mid;
                        break;
                      } else if (list[mid].dts < dts) {
                        lbound = mid + 1;
                      } else {
                        ubound = mid - 1;
                      }
                    }
                    return this._list[idx];
                  };
                  return IDRSampleList2;
                }()
              );
              var MediaSegmentInfoList = (
                /** @class */
                function() {
                  function MediaSegmentInfoList2(type) {
                    this._type = type;
                    this._list = [];
                    this._lastAppendLocation = -1;
                  }
                  Object.defineProperty(MediaSegmentInfoList2.prototype, "type", {
                    get: function() {
                      return this._type;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(MediaSegmentInfoList2.prototype, "length", {
                    get: function() {
                      return this._list.length;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  MediaSegmentInfoList2.prototype.isEmpty = function() {
                    return this._list.length === 0;
                  };
                  MediaSegmentInfoList2.prototype.clear = function() {
                    this._list = [];
                    this._lastAppendLocation = -1;
                  };
                  MediaSegmentInfoList2.prototype._searchNearestSegmentBefore = function(originalBeginDts) {
                    var list = this._list;
                    if (list.length === 0) {
                      return -2;
                    }
                    var last = list.length - 1;
                    var mid = 0;
                    var lbound = 0;
                    var ubound = last;
                    var idx = 0;
                    if (originalBeginDts < list[0].originalBeginDts) {
                      idx = -1;
                      return idx;
                    }
                    while (lbound <= ubound) {
                      mid = lbound + Math.floor((ubound - lbound) / 2);
                      if (mid === last || originalBeginDts > list[mid].lastSample.originalDts && originalBeginDts < list[mid + 1].originalBeginDts) {
                        idx = mid;
                        break;
                      } else if (list[mid].originalBeginDts < originalBeginDts) {
                        lbound = mid + 1;
                      } else {
                        ubound = mid - 1;
                      }
                    }
                    return idx;
                  };
                  MediaSegmentInfoList2.prototype._searchNearestSegmentAfter = function(originalBeginDts) {
                    return this._searchNearestSegmentBefore(originalBeginDts) + 1;
                  };
                  MediaSegmentInfoList2.prototype.append = function(mediaSegmentInfo) {
                    var list = this._list;
                    var msi = mediaSegmentInfo;
                    var lastAppendIdx = this._lastAppendLocation;
                    var insertIdx = 0;
                    if (lastAppendIdx !== -1 && lastAppendIdx < list.length && msi.originalBeginDts >= list[lastAppendIdx].lastSample.originalDts && (lastAppendIdx === list.length - 1 || lastAppendIdx < list.length - 1 && msi.originalBeginDts < list[lastAppendIdx + 1].originalBeginDts)) {
                      insertIdx = lastAppendIdx + 1;
                    } else {
                      if (list.length > 0) {
                        insertIdx = this._searchNearestSegmentBefore(msi.originalBeginDts) + 1;
                      }
                    }
                    this._lastAppendLocation = insertIdx;
                    this._list.splice(insertIdx, 0, msi);
                  };
                  MediaSegmentInfoList2.prototype.getLastSegmentBefore = function(originalBeginDts) {
                    var idx = this._searchNearestSegmentBefore(originalBeginDts);
                    if (idx >= 0) {
                      return this._list[idx];
                    } else {
                      return null;
                    }
                  };
                  MediaSegmentInfoList2.prototype.getLastSampleBefore = function(originalBeginDts) {
                    var segment = this.getLastSegmentBefore(originalBeginDts);
                    if (segment != null) {
                      return segment.lastSample;
                    } else {
                      return null;
                    }
                  };
                  MediaSegmentInfoList2.prototype.getLastSyncPointBefore = function(originalBeginDts) {
                    var segmentIdx = this._searchNearestSegmentBefore(originalBeginDts);
                    var syncPoints = this._list[segmentIdx].syncPoints;
                    while (syncPoints.length === 0 && segmentIdx > 0) {
                      segmentIdx--;
                      syncPoints = this._list[segmentIdx].syncPoints;
                    }
                    if (syncPoints.length > 0) {
                      return syncPoints[syncPoints.length - 1];
                    } else {
                      return null;
                    }
                  };
                  return MediaSegmentInfoList2;
                }()
              );
            }
          ),
          /***/
          "./src/core/mse-controller.js": (
            /*!************************************!*\
              !*** ./src/core/mse-controller.js ***!
              \************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! events */
                "./node_modules/events/events.js"
              );
              var events__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(events__WEBPACK_IMPORTED_MODULE_0__);
              var _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              );
              var _utils_browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              );
              var _mse_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                /*! ./mse-events.js */
                "./src/core/mse-events.js"
              );
              var _media_segment_info_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(
                /*! ./media-segment-info.js */
                "./src/core/media-segment-info.js"
              );
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              var MSEController = (
                /** @class */
                function() {
                  function MSEController2(config) {
                    this.TAG = "MSEController";
                    this._config = config;
                    this._emitter = new (events__WEBPACK_IMPORTED_MODULE_0___default())();
                    if (this._config.isLive && this._config.autoCleanupSourceBuffer == void 0) {
                      this._config.autoCleanupSourceBuffer = true;
                    }
                    this.e = {
                      onSourceOpen: this._onSourceOpen.bind(this),
                      onSourceEnded: this._onSourceEnded.bind(this),
                      onSourceClose: this._onSourceClose.bind(this),
                      onSourceBufferError: this._onSourceBufferError.bind(this),
                      onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this)
                    };
                    this._mediaSource = null;
                    this._mediaSourceObjectURL = null;
                    this._mediaElement = null;
                    this._isBufferFull = false;
                    this._hasPendingEos = false;
                    this._requireSetMediaDuration = false;
                    this._pendingMediaDuration = 0;
                    this._pendingSourceBufferInit = [];
                    this._mimeTypes = {
                      video: null,
                      audio: null
                    };
                    this._sourceBuffers = {
                      video: null,
                      audio: null
                    };
                    this._lastInitSegments = {
                      video: null,
                      audio: null
                    };
                    this._pendingSegments = {
                      video: [],
                      audio: []
                    };
                    this._pendingRemoveRanges = {
                      video: [],
                      audio: []
                    };
                    this._idrList = new _media_segment_info_js__WEBPACK_IMPORTED_MODULE_4__.IDRSampleList();
                  }
                  MSEController2.prototype.destroy = function() {
                    if (this._mediaElement || this._mediaSource) {
                      this.detachMediaElement();
                    }
                    this.e = null;
                    this._emitter.removeAllListeners();
                    this._emitter = null;
                  };
                  MSEController2.prototype.on = function(event, listener) {
                    this._emitter.addListener(event, listener);
                  };
                  MSEController2.prototype.off = function(event, listener) {
                    this._emitter.removeListener(event, listener);
                  };
                  MSEController2.prototype.attachMediaElement = function(mediaElement) {
                    if (this._mediaSource) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_5__.IllegalStateException("MediaSource has been attached to an HTMLMediaElement!");
                    }
                    var ms = this._mediaSource = new window.MediaSource();
                    ms.addEventListener("sourceopen", this.e.onSourceOpen);
                    ms.addEventListener("sourceended", this.e.onSourceEnded);
                    ms.addEventListener("sourceclose", this.e.onSourceClose);
                    this._mediaElement = mediaElement;
                    this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource);
                    mediaElement.src = this._mediaSourceObjectURL;
                  };
                  MSEController2.prototype.detachMediaElement = function() {
                    if (this._mediaSource) {
                      var ms = this._mediaSource;
                      for (var type in this._sourceBuffers) {
                        var ps = this._pendingSegments[type];
                        ps.splice(0, ps.length);
                        this._pendingSegments[type] = null;
                        this._pendingRemoveRanges[type] = null;
                        this._lastInitSegments[type] = null;
                        var sb = this._sourceBuffers[type];
                        if (sb) {
                          if (ms.readyState !== "closed") {
                            try {
                              ms.removeSourceBuffer(sb);
                            } catch (error) {
                              _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.e(this.TAG, error.message);
                            }
                            sb.removeEventListener("error", this.e.onSourceBufferError);
                            sb.removeEventListener("updateend", this.e.onSourceBufferUpdateEnd);
                          }
                          this._mimeTypes[type] = null;
                          this._sourceBuffers[type] = null;
                        }
                      }
                      if (ms.readyState === "open") {
                        try {
                          ms.endOfStream();
                        } catch (error) {
                          _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.e(this.TAG, error.message);
                        }
                      }
                      ms.removeEventListener("sourceopen", this.e.onSourceOpen);
                      ms.removeEventListener("sourceended", this.e.onSourceEnded);
                      ms.removeEventListener("sourceclose", this.e.onSourceClose);
                      this._pendingSourceBufferInit = [];
                      this._isBufferFull = false;
                      this._idrList.clear();
                      this._mediaSource = null;
                    }
                    if (this._mediaElement) {
                      this._mediaElement.src = "";
                      this._mediaElement.removeAttribute("src");
                      this._mediaElement = null;
                    }
                    if (this._mediaSourceObjectURL) {
                      window.URL.revokeObjectURL(this._mediaSourceObjectURL);
                      this._mediaSourceObjectURL = null;
                    }
                  };
                  MSEController2.prototype.appendInitSegment = function(initSegment, deferred) {
                    if (!this._mediaSource || this._mediaSource.readyState !== "open") {
                      this._pendingSourceBufferInit.push(initSegment);
                      this._pendingSegments[initSegment.type].push(initSegment);
                      return;
                    }
                    var is = initSegment;
                    var mimeType = "" + is.container;
                    if (is.codec && is.codec.length > 0) {
                      mimeType += ";codecs=" + is.codec;
                    }
                    var firstInitSegment = false;
                    _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.v(this.TAG, "Received Initialization Segment, mimeType: " + mimeType);
                    this._lastInitSegments[is.type] = is;
                    if (mimeType !== this._mimeTypes[is.type]) {
                      if (!this._mimeTypes[is.type]) {
                        firstInitSegment = true;
                        try {
                          var sb = this._sourceBuffers[is.type] = this._mediaSource.addSourceBuffer(mimeType);
                          sb.addEventListener("error", this.e.onSourceBufferError);
                          sb.addEventListener("updateend", this.e.onSourceBufferUpdateEnd);
                        } catch (error) {
                          _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.e(this.TAG, error.message);
                          this._emitter.emit(_mse_events_js__WEBPACK_IMPORTED_MODULE_3__.default.ERROR, { code: error.code, msg: error.message });
                          return;
                        }
                      } else {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.v(this.TAG, "Notice: " + is.type + " mimeType changed, origin: " + this._mimeTypes[is.type] + ", target: " + mimeType);
                      }
                      this._mimeTypes[is.type] = mimeType;
                    }
                    if (!deferred) {
                      this._pendingSegments[is.type].push(is);
                    }
                    if (!firstInitSegment) {
                      if (this._sourceBuffers[is.type] && !this._sourceBuffers[is.type].updating) {
                        this._doAppendSegments();
                      }
                    }
                    if (_utils_browser_js__WEBPACK_IMPORTED_MODULE_2__.default.safari && is.container === "audio/mpeg" && is.mediaDuration > 0) {
                      this._requireSetMediaDuration = true;
                      this._pendingMediaDuration = is.mediaDuration / 1e3;
                      this._updateMediaSourceDuration();
                    }
                  };
                  MSEController2.prototype.appendMediaSegment = function(mediaSegment) {
                    var ms = mediaSegment;
                    this._pendingSegments[ms.type].push(ms);
                    if (this._config.autoCleanupSourceBuffer && this._needCleanupSourceBuffer()) {
                      this._doCleanupSourceBuffer();
                    }
                    var sb = this._sourceBuffers[ms.type];
                    if (sb && !sb.updating && !this._hasPendingRemoveRanges()) {
                      this._doAppendSegments();
                    }
                  };
                  MSEController2.prototype.seek = function(seconds) {
                    for (var type in this._sourceBuffers) {
                      if (!this._sourceBuffers[type]) {
                        continue;
                      }
                      var sb = this._sourceBuffers[type];
                      if (this._mediaSource.readyState === "open") {
                        try {
                          sb.abort();
                        } catch (error) {
                          _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.e(this.TAG, error.message);
                        }
                      }
                      this._idrList.clear();
                      var ps = this._pendingSegments[type];
                      ps.splice(0, ps.length);
                      if (this._mediaSource.readyState === "closed") {
                        continue;
                      }
                      for (var i = 0; i < sb.buffered.length; i++) {
                        var start = sb.buffered.start(i);
                        var end = sb.buffered.end(i);
                        this._pendingRemoveRanges[type].push({ start, end });
                      }
                      if (!sb.updating) {
                        this._doRemoveRanges();
                      }
                      if (_utils_browser_js__WEBPACK_IMPORTED_MODULE_2__.default.safari) {
                        var lastInitSegment = this._lastInitSegments[type];
                        if (lastInitSegment) {
                          this._pendingSegments[type].push(lastInitSegment);
                          if (!sb.updating) {
                            this._doAppendSegments();
                          }
                        }
                      }
                    }
                  };
                  MSEController2.prototype.endOfStream = function() {
                    var ms = this._mediaSource;
                    var sb = this._sourceBuffers;
                    if (!ms || ms.readyState !== "open") {
                      if (ms && ms.readyState === "closed" && this._hasPendingSegments()) {
                        this._hasPendingEos = true;
                      }
                      return;
                    }
                    if (sb.video && sb.video.updating || sb.audio && sb.audio.updating) {
                      this._hasPendingEos = true;
                    } else {
                      this._hasPendingEos = false;
                      ms.endOfStream();
                    }
                  };
                  MSEController2.prototype.getNearestKeyframe = function(dts) {
                    return this._idrList.getLastSyncPointBeforeDts(dts);
                  };
                  MSEController2.prototype._needCleanupSourceBuffer = function() {
                    if (!this._config.autoCleanupSourceBuffer) {
                      return false;
                    }
                    var currentTime = this._mediaElement.currentTime;
                    for (var type in this._sourceBuffers) {
                      var sb = this._sourceBuffers[type];
                      if (sb) {
                        var buffered = sb.buffered;
                        if (buffered.length >= 1) {
                          if (currentTime - buffered.start(0) >= this._config.autoCleanupMaxBackwardDuration) {
                            return true;
                          }
                        }
                      }
                    }
                    return false;
                  };
                  MSEController2.prototype._doCleanupSourceBuffer = function() {
                    var currentTime = this._mediaElement.currentTime;
                    for (var type in this._sourceBuffers) {
                      var sb = this._sourceBuffers[type];
                      if (sb) {
                        var buffered = sb.buffered;
                        var doRemove = false;
                        for (var i = 0; i < buffered.length; i++) {
                          var start = buffered.start(i);
                          var end = buffered.end(i);
                          if (start <= currentTime && currentTime < end + 3) {
                            if (currentTime - start >= this._config.autoCleanupMaxBackwardDuration) {
                              doRemove = true;
                              var removeEnd = currentTime - this._config.autoCleanupMinBackwardDuration;
                              this._pendingRemoveRanges[type].push({ start, end: removeEnd });
                            }
                          } else if (end < currentTime) {
                            doRemove = true;
                            this._pendingRemoveRanges[type].push({ start, end });
                          }
                        }
                        if (doRemove && !sb.updating) {
                          this._doRemoveRanges();
                        }
                      }
                    }
                  };
                  MSEController2.prototype._updateMediaSourceDuration = function() {
                    var sb = this._sourceBuffers;
                    if (this._mediaElement.readyState === 0 || this._mediaSource.readyState !== "open") {
                      return;
                    }
                    if (sb.video && sb.video.updating || sb.audio && sb.audio.updating) {
                      return;
                    }
                    var current = this._mediaSource.duration;
                    var target = this._pendingMediaDuration;
                    if (target > 0 && (isNaN(current) || target > current)) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.v(this.TAG, "Update MediaSource duration from " + current + " to " + target);
                      this._mediaSource.duration = target;
                    }
                    this._requireSetMediaDuration = false;
                    this._pendingMediaDuration = 0;
                  };
                  MSEController2.prototype._doRemoveRanges = function() {
                    for (var type in this._pendingRemoveRanges) {
                      if (!this._sourceBuffers[type] || this._sourceBuffers[type].updating) {
                        continue;
                      }
                      var sb = this._sourceBuffers[type];
                      var ranges = this._pendingRemoveRanges[type];
                      while (ranges.length && !sb.updating) {
                        var range = ranges.shift();
                        sb.remove(range.start, range.end);
                      }
                    }
                  };
                  MSEController2.prototype._doAppendSegments = function() {
                    var pendingSegments = this._pendingSegments;
                    for (var type in pendingSegments) {
                      if (!this._sourceBuffers[type] || this._sourceBuffers[type].updating) {
                        continue;
                      }
                      if (pendingSegments[type].length > 0) {
                        var segment = pendingSegments[type].shift();
                        if (segment.timestampOffset) {
                          var currentOffset = this._sourceBuffers[type].timestampOffset;
                          var targetOffset = segment.timestampOffset / 1e3;
                          var delta = Math.abs(currentOffset - targetOffset);
                          if (delta > 0.1) {
                            _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.v(this.TAG, "Update MPEG audio timestampOffset from " + currentOffset + " to " + targetOffset);
                            this._sourceBuffers[type].timestampOffset = targetOffset;
                          }
                          delete segment.timestampOffset;
                        }
                        if (!segment.data || segment.data.byteLength === 0) {
                          continue;
                        }
                        try {
                          this._sourceBuffers[type].appendBuffer(segment.data);
                          this._isBufferFull = false;
                          if (type === "video" && segment.hasOwnProperty("info")) {
                            this._idrList.appendArray(segment.info.syncPoints);
                          }
                        } catch (error) {
                          this._pendingSegments[type].unshift(segment);
                          if (error.code === 22) {
                            if (!this._isBufferFull) {
                              this._emitter.emit(_mse_events_js__WEBPACK_IMPORTED_MODULE_3__.default.BUFFER_FULL);
                            }
                            this._isBufferFull = true;
                          } else {
                            _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.e(this.TAG, error.message);
                            this._emitter.emit(_mse_events_js__WEBPACK_IMPORTED_MODULE_3__.default.ERROR, { code: error.code, msg: error.message });
                          }
                        }
                      }
                    }
                  };
                  MSEController2.prototype._onSourceOpen = function() {
                    _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.v(this.TAG, "MediaSource onSourceOpen");
                    this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen);
                    if (this._pendingSourceBufferInit.length > 0) {
                      var pendings = this._pendingSourceBufferInit;
                      while (pendings.length) {
                        var segment = pendings.shift();
                        this.appendInitSegment(segment, true);
                      }
                    }
                    if (this._hasPendingSegments()) {
                      this._doAppendSegments();
                    }
                    this._emitter.emit(_mse_events_js__WEBPACK_IMPORTED_MODULE_3__.default.SOURCE_OPEN);
                  };
                  MSEController2.prototype._onSourceEnded = function() {
                    _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.v(this.TAG, "MediaSource onSourceEnded");
                  };
                  MSEController2.prototype._onSourceClose = function() {
                    _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.v(this.TAG, "MediaSource onSourceClose");
                    if (this._mediaSource && this.e != null) {
                      this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen);
                      this._mediaSource.removeEventListener("sourceended", this.e.onSourceEnded);
                      this._mediaSource.removeEventListener("sourceclose", this.e.onSourceClose);
                    }
                  };
                  MSEController2.prototype._hasPendingSegments = function() {
                    var ps = this._pendingSegments;
                    return ps.video.length > 0 || ps.audio.length > 0;
                  };
                  MSEController2.prototype._hasPendingRemoveRanges = function() {
                    var prr = this._pendingRemoveRanges;
                    return prr.video.length > 0 || prr.audio.length > 0;
                  };
                  MSEController2.prototype._onSourceBufferUpdateEnd = function() {
                    if (this._requireSetMediaDuration) {
                      this._updateMediaSourceDuration();
                    } else if (this._hasPendingRemoveRanges()) {
                      this._doRemoveRanges();
                    } else if (this._hasPendingSegments()) {
                      this._doAppendSegments();
                    } else if (this._hasPendingEos) {
                      this.endOfStream();
                    }
                    this._emitter.emit(_mse_events_js__WEBPACK_IMPORTED_MODULE_3__.default.UPDATE_END);
                  };
                  MSEController2.prototype._onSourceBufferError = function(e) {
                    _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.e(this.TAG, "SourceBuffer Error: " + e);
                  };
                  return MSEController2;
                }()
              );
              __webpack_exports__2["default"] = MSEController;
            }
          ),
          /***/
          "./src/core/mse-events.js": (
            /*!********************************!*\
              !*** ./src/core/mse-events.js ***!
              \********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var MSEEvents = {
                ERROR: "error",
                SOURCE_OPEN: "source_open",
                UPDATE_END: "update_end",
                BUFFER_FULL: "buffer_full"
              };
              __webpack_exports__2["default"] = MSEEvents;
            }
          ),
          /***/
          "./src/core/transmuxer.js": (
            /*!********************************!*\
              !*** ./src/core/transmuxer.js ***!
              \********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! events */
                "./node_modules/events/events.js"
              );
              var events__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(events__WEBPACK_IMPORTED_MODULE_0__);
              var webworkify_webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! webworkify-webpack */
                "./node_modules/webworkify-webpack/index.js"
              );
              var webworkify_webpack__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__2.n(webworkify_webpack__WEBPACK_IMPORTED_MODULE_1__);
              var _utils_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              );
              var _utils_logging_control_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                /*! ../utils/logging-control.js */
                "./src/utils/logging-control.js"
              );
              var _transmuxing_controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(
                /*! ./transmuxing-controller.js */
                "./src/core/transmuxing-controller.js"
              );
              var _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(
                /*! ./transmuxing-events.js */
                "./src/core/transmuxing-events.js"
              );
              var _media_info_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__2(
                /*! ./media-info.js */
                "./src/core/media-info.js"
              );
              var Transmuxer = (
                /** @class */
                function() {
                  function Transmuxer2(mediaDataSource, config) {
                    this.TAG = "Transmuxer";
                    this._emitter = new (events__WEBPACK_IMPORTED_MODULE_0___default())();
                    if (config.enableWorker && typeof Worker !== "undefined") {
                      try {
                        this._worker = webworkify_webpack__WEBPACK_IMPORTED_MODULE_1___default()(
                          /*require.resolve*/
                          /*! ./transmuxing-worker */
                          "./src/core/transmuxing-worker.js"
                        );
                        this._workerDestroying = false;
                        this._worker.addEventListener("message", this._onWorkerMessage.bind(this));
                        this._worker.postMessage({ cmd: "init", param: [mediaDataSource, config] });
                        this.e = {
                          onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this)
                        };
                        _utils_logging_control_js__WEBPACK_IMPORTED_MODULE_3__.default.registerListener(this.e.onLoggingConfigChanged);
                        this._worker.postMessage({ cmd: "logging_config", param: _utils_logging_control_js__WEBPACK_IMPORTED_MODULE_3__.default.getConfig() });
                      } catch (error) {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_2__.default.e(this.TAG, "Error while initialize transmuxing worker, fallback to inline transmuxing");
                        this._worker = null;
                        this._controller = new _transmuxing_controller_js__WEBPACK_IMPORTED_MODULE_4__.default(mediaDataSource, config);
                      }
                    } else {
                      this._controller = new _transmuxing_controller_js__WEBPACK_IMPORTED_MODULE_4__.default(mediaDataSource, config);
                    }
                    if (this._controller) {
                      var ctl = this._controller;
                      ctl.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.IO_ERROR, this._onIOError.bind(this));
                      ctl.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.DEMUX_ERROR, this._onDemuxError.bind(this));
                      ctl.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.INIT_SEGMENT, this._onInitSegment.bind(this));
                      ctl.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.MEDIA_SEGMENT, this._onMediaSegment.bind(this));
                      ctl.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.LOADING_COMPLETE, this._onLoadingComplete.bind(this));
                      ctl.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this));
                      ctl.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.MEDIA_INFO, this._onMediaInfo.bind(this));
                      ctl.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.METADATA_ARRIVED, this._onMetaDataArrived.bind(this));
                      ctl.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.SCRIPTDATA_ARRIVED, this._onScriptDataArrived.bind(this));
                      ctl.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.STATISTICS_INFO, this._onStatisticsInfo.bind(this));
                      ctl.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this));
                    }
                  }
                  Transmuxer2.prototype.destroy = function() {
                    if (this._worker) {
                      if (!this._workerDestroying) {
                        this._workerDestroying = true;
                        this._worker.postMessage({ cmd: "destroy" });
                        _utils_logging_control_js__WEBPACK_IMPORTED_MODULE_3__.default.removeListener(this.e.onLoggingConfigChanged);
                        this.e = null;
                      }
                    } else {
                      this._controller.destroy();
                      this._controller = null;
                    }
                    this._emitter.removeAllListeners();
                    this._emitter = null;
                  };
                  Transmuxer2.prototype.on = function(event, listener) {
                    this._emitter.addListener(event, listener);
                  };
                  Transmuxer2.prototype.off = function(event, listener) {
                    this._emitter.removeListener(event, listener);
                  };
                  Transmuxer2.prototype.hasWorker = function() {
                    return this._worker != null;
                  };
                  Transmuxer2.prototype.open = function() {
                    if (this._worker) {
                      this._worker.postMessage({ cmd: "start" });
                    } else {
                      this._controller.start();
                    }
                  };
                  Transmuxer2.prototype.close = function() {
                    if (this._worker) {
                      this._worker.postMessage({ cmd: "stop" });
                    } else {
                      this._controller.stop();
                    }
                  };
                  Transmuxer2.prototype.seek = function(milliseconds) {
                    if (this._worker) {
                      this._worker.postMessage({ cmd: "seek", param: milliseconds });
                    } else {
                      this._controller.seek(milliseconds);
                    }
                  };
                  Transmuxer2.prototype.pause = function() {
                    if (this._worker) {
                      this._worker.postMessage({ cmd: "pause" });
                    } else {
                      this._controller.pause();
                    }
                  };
                  Transmuxer2.prototype.resume = function() {
                    if (this._worker) {
                      this._worker.postMessage({ cmd: "resume" });
                    } else {
                      this._controller.resume();
                    }
                  };
                  Transmuxer2.prototype._onInitSegment = function(type, initSegment) {
                    var _this = this;
                    Promise.resolve().then(function() {
                      _this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.INIT_SEGMENT, type, initSegment);
                    });
                  };
                  Transmuxer2.prototype._onMediaSegment = function(type, mediaSegment) {
                    var _this = this;
                    Promise.resolve().then(function() {
                      _this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.MEDIA_SEGMENT, type, mediaSegment);
                    });
                  };
                  Transmuxer2.prototype._onLoadingComplete = function() {
                    var _this = this;
                    Promise.resolve().then(function() {
                      _this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.LOADING_COMPLETE);
                    });
                  };
                  Transmuxer2.prototype._onRecoveredEarlyEof = function() {
                    var _this = this;
                    Promise.resolve().then(function() {
                      _this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.RECOVERED_EARLY_EOF);
                    });
                  };
                  Transmuxer2.prototype._onMediaInfo = function(mediaInfo) {
                    var _this = this;
                    Promise.resolve().then(function() {
                      _this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.MEDIA_INFO, mediaInfo);
                    });
                  };
                  Transmuxer2.prototype._onMetaDataArrived = function(metadata) {
                    var _this = this;
                    Promise.resolve().then(function() {
                      _this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.METADATA_ARRIVED, metadata);
                    });
                  };
                  Transmuxer2.prototype._onScriptDataArrived = function(data) {
                    var _this = this;
                    Promise.resolve().then(function() {
                      _this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.SCRIPTDATA_ARRIVED, data);
                    });
                  };
                  Transmuxer2.prototype._onStatisticsInfo = function(statisticsInfo) {
                    var _this = this;
                    Promise.resolve().then(function() {
                      _this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.STATISTICS_INFO, statisticsInfo);
                    });
                  };
                  Transmuxer2.prototype._onIOError = function(type, info) {
                    var _this = this;
                    Promise.resolve().then(function() {
                      _this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.IO_ERROR, type, info);
                    });
                  };
                  Transmuxer2.prototype._onDemuxError = function(type, info) {
                    var _this = this;
                    Promise.resolve().then(function() {
                      _this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.DEMUX_ERROR, type, info);
                    });
                  };
                  Transmuxer2.prototype._onRecommendSeekpoint = function(milliseconds) {
                    var _this = this;
                    Promise.resolve().then(function() {
                      _this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.RECOMMEND_SEEKPOINT, milliseconds);
                    });
                  };
                  Transmuxer2.prototype._onLoggingConfigChanged = function(config) {
                    if (this._worker) {
                      this._worker.postMessage({ cmd: "logging_config", param: config });
                    }
                  };
                  Transmuxer2.prototype._onWorkerMessage = function(e) {
                    var message = e.data;
                    var data = message.data;
                    if (message.msg === "destroyed" || this._workerDestroying) {
                      this._workerDestroying = false;
                      this._worker.terminate();
                      this._worker = null;
                      return;
                    }
                    switch (message.msg) {
                      case _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.INIT_SEGMENT:
                      case _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.MEDIA_SEGMENT:
                        this._emitter.emit(message.msg, data.type, data.data);
                        break;
                      case _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.LOADING_COMPLETE:
                      case _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.RECOVERED_EARLY_EOF:
                        this._emitter.emit(message.msg);
                        break;
                      case _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.MEDIA_INFO:
                        Object.setPrototypeOf(data, _media_info_js__WEBPACK_IMPORTED_MODULE_6__.default.prototype);
                        this._emitter.emit(message.msg, data);
                        break;
                      case _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.METADATA_ARRIVED:
                      case _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.SCRIPTDATA_ARRIVED:
                      case _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.STATISTICS_INFO:
                        this._emitter.emit(message.msg, data);
                        break;
                      case _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.IO_ERROR:
                      case _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.DEMUX_ERROR:
                        this._emitter.emit(message.msg, data.type, data.info);
                        break;
                      case _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.RECOMMEND_SEEKPOINT:
                        this._emitter.emit(message.msg, data);
                        break;
                      case "logcat_callback":
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_2__.default.emitter.emit("log", data.type, data.logcat);
                        break;
                    }
                  };
                  return Transmuxer2;
                }()
              );
              __webpack_exports__2["default"] = Transmuxer;
            }
          ),
          /***/
          "./src/core/transmuxing-controller.js": (
            /*!********************************************!*\
              !*** ./src/core/transmuxing-controller.js ***!
              \********************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! events */
                "./node_modules/events/events.js"
              );
              var events__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(events__WEBPACK_IMPORTED_MODULE_0__);
              var _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              );
              var _utils_browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              );
              var _media_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                /*! ./media-info.js */
                "./src/core/media-info.js"
              );
              var _demux_flv_demuxer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(
                /*! ../demux/flv-demuxer.js */
                "./src/demux/flv-demuxer.js"
              );
              var _remux_mp4_remuxer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(
                /*! ../remux/mp4-remuxer.js */
                "./src/remux/mp4-remuxer.js"
              );
              var _demux_demux_errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__2(
                /*! ../demux/demux-errors.js */
                "./src/demux/demux-errors.js"
              );
              var _io_io_controller_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__2(
                /*! ../io/io-controller.js */
                "./src/io/io-controller.js"
              );
              var _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__2(
                /*! ./transmuxing-events.js */
                "./src/core/transmuxing-events.js"
              );
              var TransmuxingController = (
                /** @class */
                function() {
                  function TransmuxingController2(mediaDataSource, config) {
                    this.TAG = "TransmuxingController";
                    this._emitter = new (events__WEBPACK_IMPORTED_MODULE_0___default())();
                    this._config = config;
                    if (!mediaDataSource.segments) {
                      mediaDataSource.segments = [{
                        duration: mediaDataSource.duration,
                        filesize: mediaDataSource.filesize,
                        url: mediaDataSource.url
                      }];
                    }
                    if (typeof mediaDataSource.cors !== "boolean") {
                      mediaDataSource.cors = true;
                    }
                    if (typeof mediaDataSource.withCredentials !== "boolean") {
                      mediaDataSource.withCredentials = false;
                    }
                    this._mediaDataSource = mediaDataSource;
                    this._currentSegmentIndex = 0;
                    var totalDuration = 0;
                    this._mediaDataSource.segments.forEach(function(segment) {
                      segment.timestampBase = totalDuration;
                      totalDuration += segment.duration;
                      segment.cors = mediaDataSource.cors;
                      segment.withCredentials = mediaDataSource.withCredentials;
                      if (config.referrerPolicy) {
                        segment.referrerPolicy = config.referrerPolicy;
                      }
                    });
                    if (!isNaN(totalDuration) && this._mediaDataSource.duration !== totalDuration) {
                      this._mediaDataSource.duration = totalDuration;
                    }
                    this._mediaInfo = null;
                    this._demuxer = null;
                    this._remuxer = null;
                    this._ioctl = null;
                    this._pendingSeekTime = null;
                    this._pendingResolveSeekPoint = null;
                    this._statisticsReporter = null;
                  }
                  TransmuxingController2.prototype.destroy = function() {
                    this._mediaInfo = null;
                    this._mediaDataSource = null;
                    if (this._statisticsReporter) {
                      this._disableStatisticsReporter();
                    }
                    if (this._ioctl) {
                      this._ioctl.destroy();
                      this._ioctl = null;
                    }
                    if (this._demuxer) {
                      this._demuxer.destroy();
                      this._demuxer = null;
                    }
                    if (this._remuxer) {
                      this._remuxer.destroy();
                      this._remuxer = null;
                    }
                    this._emitter.removeAllListeners();
                    this._emitter = null;
                  };
                  TransmuxingController2.prototype.on = function(event, listener) {
                    this._emitter.addListener(event, listener);
                  };
                  TransmuxingController2.prototype.off = function(event, listener) {
                    this._emitter.removeListener(event, listener);
                  };
                  TransmuxingController2.prototype.start = function() {
                    this._loadSegment(0);
                    this._enableStatisticsReporter();
                  };
                  TransmuxingController2.prototype._loadSegment = function(segmentIndex, optionalFrom) {
                    this._currentSegmentIndex = segmentIndex;
                    var dataSource = this._mediaDataSource.segments[segmentIndex];
                    var ioctl = this._ioctl = new _io_io_controller_js__WEBPACK_IMPORTED_MODULE_7__.default(dataSource, this._config, segmentIndex);
                    ioctl.onError = this._onIOException.bind(this);
                    ioctl.onSeeked = this._onIOSeeked.bind(this);
                    ioctl.onComplete = this._onIOComplete.bind(this);
                    ioctl.onRedirect = this._onIORedirect.bind(this);
                    ioctl.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this);
                    if (optionalFrom) {
                      this._demuxer.bindDataSource(this._ioctl);
                    } else {
                      ioctl.onDataArrival = this._onInitChunkArrival.bind(this);
                    }
                    ioctl.open(optionalFrom);
                  };
                  TransmuxingController2.prototype.stop = function() {
                    this._internalAbort();
                    this._disableStatisticsReporter();
                  };
                  TransmuxingController2.prototype._internalAbort = function() {
                    if (this._ioctl) {
                      this._ioctl.destroy();
                      this._ioctl = null;
                    }
                  };
                  TransmuxingController2.prototype.pause = function() {
                    if (this._ioctl && this._ioctl.isWorking()) {
                      this._ioctl.pause();
                      this._disableStatisticsReporter();
                    }
                  };
                  TransmuxingController2.prototype.resume = function() {
                    if (this._ioctl && this._ioctl.isPaused()) {
                      this._ioctl.resume();
                      this._enableStatisticsReporter();
                    }
                  };
                  TransmuxingController2.prototype.seek = function(milliseconds) {
                    if (this._mediaInfo == null || !this._mediaInfo.isSeekable()) {
                      return;
                    }
                    var targetSegmentIndex = this._searchSegmentIndexContains(milliseconds);
                    if (targetSegmentIndex === this._currentSegmentIndex) {
                      var segmentInfo = this._mediaInfo.segments[targetSegmentIndex];
                      if (segmentInfo == void 0) {
                        this._pendingSeekTime = milliseconds;
                      } else {
                        var keyframe = segmentInfo.getNearestKeyframe(milliseconds);
                        this._remuxer.seek(keyframe.milliseconds);
                        this._ioctl.seek(keyframe.fileposition);
                        this._pendingResolveSeekPoint = keyframe.milliseconds;
                      }
                    } else {
                      var targetSegmentInfo = this._mediaInfo.segments[targetSegmentIndex];
                      if (targetSegmentInfo == void 0) {
                        this._pendingSeekTime = milliseconds;
                        this._internalAbort();
                        this._remuxer.seek();
                        this._remuxer.insertDiscontinuity();
                        this._loadSegment(targetSegmentIndex);
                      } else {
                        var keyframe = targetSegmentInfo.getNearestKeyframe(milliseconds);
                        this._internalAbort();
                        this._remuxer.seek(milliseconds);
                        this._remuxer.insertDiscontinuity();
                        this._demuxer.resetMediaInfo();
                        this._demuxer.timestampBase = this._mediaDataSource.segments[targetSegmentIndex].timestampBase;
                        this._loadSegment(targetSegmentIndex, keyframe.fileposition);
                        this._pendingResolveSeekPoint = keyframe.milliseconds;
                        this._reportSegmentMediaInfo(targetSegmentIndex);
                      }
                    }
                    this._enableStatisticsReporter();
                  };
                  TransmuxingController2.prototype._searchSegmentIndexContains = function(milliseconds) {
                    var segments = this._mediaDataSource.segments;
                    var idx = segments.length - 1;
                    for (var i = 0; i < segments.length; i++) {
                      if (milliseconds < segments[i].timestampBase) {
                        idx = i - 1;
                        break;
                      }
                    }
                    return idx;
                  };
                  TransmuxingController2.prototype._onInitChunkArrival = function(data, byteStart) {
                    var _this = this;
                    var probeData = null;
                    var consumed = 0;
                    if (byteStart > 0) {
                      this._demuxer.bindDataSource(this._ioctl);
                      this._demuxer.timestampBase = this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase;
                      consumed = this._demuxer.parseChunks(data, byteStart);
                    } else if ((probeData = _demux_flv_demuxer_js__WEBPACK_IMPORTED_MODULE_4__.default.probe(data)).match) {
                      this._demuxer = new _demux_flv_demuxer_js__WEBPACK_IMPORTED_MODULE_4__.default(probeData, this._config);
                      if (!this._remuxer) {
                        this._remuxer = new _remux_mp4_remuxer_js__WEBPACK_IMPORTED_MODULE_5__.default(this._config);
                      }
                      var mds = this._mediaDataSource;
                      if (mds.duration != void 0 && !isNaN(mds.duration)) {
                        this._demuxer.overridedDuration = mds.duration;
                      }
                      if (typeof mds.hasAudio === "boolean") {
                        this._demuxer.overridedHasAudio = mds.hasAudio;
                      }
                      if (typeof mds.hasVideo === "boolean") {
                        this._demuxer.overridedHasVideo = mds.hasVideo;
                      }
                      this._demuxer.timestampBase = mds.segments[this._currentSegmentIndex].timestampBase;
                      this._demuxer.onError = this._onDemuxException.bind(this);
                      this._demuxer.onMediaInfo = this._onMediaInfo.bind(this);
                      this._demuxer.onMetaDataArrived = this._onMetaDataArrived.bind(this);
                      this._demuxer.onScriptDataArrived = this._onScriptDataArrived.bind(this);
                      this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl));
                      this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this);
                      this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this);
                      consumed = this._demuxer.parseChunks(data, byteStart);
                    } else {
                      probeData = null;
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.e(this.TAG, "Non-FLV, Unsupported media type!");
                      Promise.resolve().then(function() {
                        _this._internalAbort();
                      });
                      this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_8__.default.DEMUX_ERROR, _demux_demux_errors_js__WEBPACK_IMPORTED_MODULE_6__.default.FORMAT_UNSUPPORTED, "Non-FLV, Unsupported media type");
                      consumed = 0;
                    }
                    return consumed;
                  };
                  TransmuxingController2.prototype._onMediaInfo = function(mediaInfo) {
                    var _this = this;
                    if (this._mediaInfo == null) {
                      this._mediaInfo = Object.assign({}, mediaInfo);
                      this._mediaInfo.keyframesIndex = null;
                      this._mediaInfo.segments = [];
                      this._mediaInfo.segmentCount = this._mediaDataSource.segments.length;
                      Object.setPrototypeOf(this._mediaInfo, _media_info_js__WEBPACK_IMPORTED_MODULE_3__.default.prototype);
                    }
                    var segmentInfo = Object.assign({}, mediaInfo);
                    Object.setPrototypeOf(segmentInfo, _media_info_js__WEBPACK_IMPORTED_MODULE_3__.default.prototype);
                    this._mediaInfo.segments[this._currentSegmentIndex] = segmentInfo;
                    this._reportSegmentMediaInfo(this._currentSegmentIndex);
                    if (this._pendingSeekTime != null) {
                      Promise.resolve().then(function() {
                        var target = _this._pendingSeekTime;
                        _this._pendingSeekTime = null;
                        _this.seek(target);
                      });
                    }
                  };
                  TransmuxingController2.prototype._onMetaDataArrived = function(metadata) {
                    this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_8__.default.METADATA_ARRIVED, metadata);
                  };
                  TransmuxingController2.prototype._onScriptDataArrived = function(data) {
                    this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_8__.default.SCRIPTDATA_ARRIVED, data);
                  };
                  TransmuxingController2.prototype._onIOSeeked = function() {
                    this._remuxer.insertDiscontinuity();
                  };
                  TransmuxingController2.prototype._onIOComplete = function(extraData) {
                    var segmentIndex = extraData;
                    var nextSegmentIndex = segmentIndex + 1;
                    if (nextSegmentIndex < this._mediaDataSource.segments.length) {
                      this._internalAbort();
                      this._remuxer.flushStashedSamples();
                      this._loadSegment(nextSegmentIndex);
                    } else {
                      this._remuxer.flushStashedSamples();
                      this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_8__.default.LOADING_COMPLETE);
                      this._disableStatisticsReporter();
                    }
                  };
                  TransmuxingController2.prototype._onIORedirect = function(redirectedURL) {
                    var segmentIndex = this._ioctl.extraData;
                    this._mediaDataSource.segments[segmentIndex].redirectedURL = redirectedURL;
                  };
                  TransmuxingController2.prototype._onIORecoveredEarlyEof = function() {
                    this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_8__.default.RECOVERED_EARLY_EOF);
                  };
                  TransmuxingController2.prototype._onIOException = function(type, info) {
                    _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.e(this.TAG, "IOException: type = " + type + ", code = " + info.code + ", msg = " + info.msg);
                    this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_8__.default.IO_ERROR, type, info);
                    this._disableStatisticsReporter();
                  };
                  TransmuxingController2.prototype._onDemuxException = function(type, info) {
                    _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.e(this.TAG, "DemuxException: type = " + type + ", info = " + info);
                    this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_8__.default.DEMUX_ERROR, type, info);
                  };
                  TransmuxingController2.prototype._onRemuxerInitSegmentArrival = function(type, initSegment) {
                    this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_8__.default.INIT_SEGMENT, type, initSegment);
                  };
                  TransmuxingController2.prototype._onRemuxerMediaSegmentArrival = function(type, mediaSegment) {
                    if (this._pendingSeekTime != null) {
                      return;
                    }
                    this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_8__.default.MEDIA_SEGMENT, type, mediaSegment);
                    if (this._pendingResolveSeekPoint != null && type === "video") {
                      var syncPoints = mediaSegment.info.syncPoints;
                      var seekpoint = this._pendingResolveSeekPoint;
                      this._pendingResolveSeekPoint = null;
                      if (_utils_browser_js__WEBPACK_IMPORTED_MODULE_2__.default.safari && syncPoints.length > 0 && syncPoints[0].originalDts === seekpoint) {
                        seekpoint = syncPoints[0].pts;
                      }
                      this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_8__.default.RECOMMEND_SEEKPOINT, seekpoint);
                    }
                  };
                  TransmuxingController2.prototype._enableStatisticsReporter = function() {
                    if (this._statisticsReporter == null) {
                      this._statisticsReporter = self.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval);
                    }
                  };
                  TransmuxingController2.prototype._disableStatisticsReporter = function() {
                    if (this._statisticsReporter) {
                      self.clearInterval(this._statisticsReporter);
                      this._statisticsReporter = null;
                    }
                  };
                  TransmuxingController2.prototype._reportSegmentMediaInfo = function(segmentIndex) {
                    var segmentInfo = this._mediaInfo.segments[segmentIndex];
                    var exportInfo = Object.assign({}, segmentInfo);
                    exportInfo.duration = this._mediaInfo.duration;
                    exportInfo.segmentCount = this._mediaInfo.segmentCount;
                    delete exportInfo.segments;
                    delete exportInfo.keyframesIndex;
                    this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_8__.default.MEDIA_INFO, exportInfo);
                  };
                  TransmuxingController2.prototype._reportStatisticsInfo = function() {
                    var info = {};
                    info.url = this._ioctl.currentURL;
                    info.hasRedirect = this._ioctl.hasRedirect;
                    if (info.hasRedirect) {
                      info.redirectedURL = this._ioctl.currentRedirectedURL;
                    }
                    info.speed = this._ioctl.currentSpeed;
                    info.loaderType = this._ioctl.loaderType;
                    info.currentSegmentIndex = this._currentSegmentIndex;
                    info.totalSegmentCount = this._mediaDataSource.segments.length;
                    this._emitter.emit(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_8__.default.STATISTICS_INFO, info);
                  };
                  return TransmuxingController2;
                }()
              );
              __webpack_exports__2["default"] = TransmuxingController;
            }
          ),
          /***/
          "./src/core/transmuxing-events.js": (
            /*!****************************************!*\
              !*** ./src/core/transmuxing-events.js ***!
              \****************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var TransmuxingEvents = {
                IO_ERROR: "io_error",
                DEMUX_ERROR: "demux_error",
                INIT_SEGMENT: "init_segment",
                MEDIA_SEGMENT: "media_segment",
                LOADING_COMPLETE: "loading_complete",
                RECOVERED_EARLY_EOF: "recovered_early_eof",
                MEDIA_INFO: "media_info",
                METADATA_ARRIVED: "metadata_arrived",
                SCRIPTDATA_ARRIVED: "scriptdata_arrived",
                STATISTICS_INFO: "statistics_info",
                RECOMMEND_SEEKPOINT: "recommend_seekpoint"
              };
              __webpack_exports__2["default"] = TransmuxingEvents;
            }
          ),
          /***/
          "./src/core/transmuxing-worker.js": (
            /*!****************************************!*\
              !*** ./src/core/transmuxing-worker.js ***!
              \****************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var _utils_logging_control_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ../utils/logging-control.js */
                "./src/utils/logging-control.js"
              );
              var _utils_polyfill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ../utils/polyfill.js */
                "./src/utils/polyfill.js"
              );
              var _transmuxing_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ./transmuxing-controller.js */
                "./src/core/transmuxing-controller.js"
              );
              var _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                /*! ./transmuxing-events.js */
                "./src/core/transmuxing-events.js"
              );
              var TransmuxingWorker = function(self2) {
                var controller = null;
                var logcatListener = onLogcatCallback.bind(this);
                _utils_polyfill_js__WEBPACK_IMPORTED_MODULE_1__.default.install();
                self2.addEventListener("message", function(e) {
                  switch (e.data.cmd) {
                    case "init":
                      controller = new _transmuxing_controller_js__WEBPACK_IMPORTED_MODULE_2__.default(e.data.param[0], e.data.param[1]);
                      controller.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.IO_ERROR, onIOError.bind(this));
                      controller.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.DEMUX_ERROR, onDemuxError.bind(this));
                      controller.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.INIT_SEGMENT, onInitSegment.bind(this));
                      controller.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.MEDIA_SEGMENT, onMediaSegment.bind(this));
                      controller.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.LOADING_COMPLETE, onLoadingComplete.bind(this));
                      controller.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.RECOVERED_EARLY_EOF, onRecoveredEarlyEof.bind(this));
                      controller.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.MEDIA_INFO, onMediaInfo.bind(this));
                      controller.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.METADATA_ARRIVED, onMetaDataArrived.bind(this));
                      controller.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.SCRIPTDATA_ARRIVED, onScriptDataArrived.bind(this));
                      controller.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.STATISTICS_INFO, onStatisticsInfo.bind(this));
                      controller.on(_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.RECOMMEND_SEEKPOINT, onRecommendSeekpoint.bind(this));
                      break;
                    case "destroy":
                      if (controller) {
                        controller.destroy();
                        controller = null;
                      }
                      self2.postMessage({ msg: "destroyed" });
                      break;
                    case "start":
                      controller.start();
                      break;
                    case "stop":
                      controller.stop();
                      break;
                    case "seek":
                      controller.seek(e.data.param);
                      break;
                    case "pause":
                      controller.pause();
                      break;
                    case "resume":
                      controller.resume();
                      break;
                    case "logging_config": {
                      var config = e.data.param;
                      _utils_logging_control_js__WEBPACK_IMPORTED_MODULE_0__.default.applyConfig(config);
                      if (config.enableCallback === true) {
                        _utils_logging_control_js__WEBPACK_IMPORTED_MODULE_0__.default.addLogListener(logcatListener);
                      } else {
                        _utils_logging_control_js__WEBPACK_IMPORTED_MODULE_0__.default.removeLogListener(logcatListener);
                      }
                      break;
                    }
                  }
                });
                function onInitSegment(type, initSegment) {
                  var obj = {
                    msg: _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.INIT_SEGMENT,
                    data: {
                      type,
                      data: initSegment
                    }
                  };
                  self2.postMessage(obj, [initSegment.data]);
                }
                function onMediaSegment(type, mediaSegment) {
                  var obj = {
                    msg: _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.MEDIA_SEGMENT,
                    data: {
                      type,
                      data: mediaSegment
                    }
                  };
                  self2.postMessage(obj, [mediaSegment.data]);
                }
                function onLoadingComplete() {
                  var obj = {
                    msg: _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.LOADING_COMPLETE
                  };
                  self2.postMessage(obj);
                }
                function onRecoveredEarlyEof() {
                  var obj = {
                    msg: _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.RECOVERED_EARLY_EOF
                  };
                  self2.postMessage(obj);
                }
                function onMediaInfo(mediaInfo) {
                  var obj = {
                    msg: _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.MEDIA_INFO,
                    data: mediaInfo
                  };
                  self2.postMessage(obj);
                }
                function onMetaDataArrived(metadata) {
                  var obj = {
                    msg: _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.METADATA_ARRIVED,
                    data: metadata
                  };
                  self2.postMessage(obj);
                }
                function onScriptDataArrived(data) {
                  var obj = {
                    msg: _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.SCRIPTDATA_ARRIVED,
                    data
                  };
                  self2.postMessage(obj);
                }
                function onStatisticsInfo(statInfo) {
                  var obj = {
                    msg: _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.STATISTICS_INFO,
                    data: statInfo
                  };
                  self2.postMessage(obj);
                }
                function onIOError(type, info) {
                  self2.postMessage({
                    msg: _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.IO_ERROR,
                    data: {
                      type,
                      info
                    }
                  });
                }
                function onDemuxError(type, info) {
                  self2.postMessage({
                    msg: _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.DEMUX_ERROR,
                    data: {
                      type,
                      info
                    }
                  });
                }
                function onRecommendSeekpoint(milliseconds) {
                  self2.postMessage({
                    msg: _transmuxing_events_js__WEBPACK_IMPORTED_MODULE_3__.default.RECOMMEND_SEEKPOINT,
                    data: milliseconds
                  });
                }
                function onLogcatCallback(type, str) {
                  self2.postMessage({
                    msg: "logcat_callback",
                    data: {
                      type,
                      logcat: str
                    }
                  });
                }
              };
              __webpack_exports__2["default"] = TransmuxingWorker;
            }
          ),
          /***/
          "./src/demux/amf-parser.js": (
            /*!*********************************!*\
              !*** ./src/demux/amf-parser.js ***!
              \*********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              );
              var _utils_utf8_conv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ../utils/utf8-conv.js */
                "./src/utils/utf8-conv.js"
              );
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              var le = function() {
                var buf = new ArrayBuffer(2);
                new DataView(buf).setInt16(0, 256, true);
                return new Int16Array(buf)[0] === 256;
              }();
              var AMF = (
                /** @class */
                function() {
                  function AMF2() {
                  }
                  AMF2.parseScriptData = function(arrayBuffer, dataOffset, dataSize) {
                    var data = {};
                    try {
                      var name_1 = AMF2.parseValue(arrayBuffer, dataOffset, dataSize);
                      var value = AMF2.parseValue(arrayBuffer, dataOffset + name_1.size, dataSize - name_1.size);
                      data[name_1.data] = value.data;
                    } catch (e) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.e("AMF", e.toString());
                    }
                    return data;
                  };
                  AMF2.parseObject = function(arrayBuffer, dataOffset, dataSize) {
                    if (dataSize < 3) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_2__.IllegalStateException("Data not enough when parse ScriptDataObject");
                    }
                    var name = AMF2.parseString(arrayBuffer, dataOffset, dataSize);
                    var value = AMF2.parseValue(arrayBuffer, dataOffset + name.size, dataSize - name.size);
                    var isObjectEnd = value.objectEnd;
                    return {
                      data: {
                        name: name.data,
                        value: value.data
                      },
                      size: name.size + value.size,
                      objectEnd: isObjectEnd
                    };
                  };
                  AMF2.parseVariable = function(arrayBuffer, dataOffset, dataSize) {
                    return AMF2.parseObject(arrayBuffer, dataOffset, dataSize);
                  };
                  AMF2.parseString = function(arrayBuffer, dataOffset, dataSize) {
                    if (dataSize < 2) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_2__.IllegalStateException("Data not enough when parse String");
                    }
                    var v = new DataView(arrayBuffer, dataOffset, dataSize);
                    var length = v.getUint16(0, !le);
                    var str;
                    if (length > 0) {
                      str = (0, _utils_utf8_conv_js__WEBPACK_IMPORTED_MODULE_1__.default)(new Uint8Array(arrayBuffer, dataOffset + 2, length));
                    } else {
                      str = "";
                    }
                    return {
                      data: str,
                      size: 2 + length
                    };
                  };
                  AMF2.parseLongString = function(arrayBuffer, dataOffset, dataSize) {
                    if (dataSize < 4) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_2__.IllegalStateException("Data not enough when parse LongString");
                    }
                    var v = new DataView(arrayBuffer, dataOffset, dataSize);
                    var length = v.getUint32(0, !le);
                    var str;
                    if (length > 0) {
                      str = (0, _utils_utf8_conv_js__WEBPACK_IMPORTED_MODULE_1__.default)(new Uint8Array(arrayBuffer, dataOffset + 4, length));
                    } else {
                      str = "";
                    }
                    return {
                      data: str,
                      size: 4 + length
                    };
                  };
                  AMF2.parseDate = function(arrayBuffer, dataOffset, dataSize) {
                    if (dataSize < 10) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_2__.IllegalStateException("Data size invalid when parse Date");
                    }
                    var v = new DataView(arrayBuffer, dataOffset, dataSize);
                    var timestamp = v.getFloat64(0, !le);
                    var localTimeOffset = v.getInt16(8, !le);
                    timestamp += localTimeOffset * 60 * 1e3;
                    return {
                      data: new Date(timestamp),
                      size: 8 + 2
                    };
                  };
                  AMF2.parseValue = function(arrayBuffer, dataOffset, dataSize) {
                    if (dataSize < 1) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_2__.IllegalStateException("Data not enough when parse Value");
                    }
                    var v = new DataView(arrayBuffer, dataOffset, dataSize);
                    var offset = 1;
                    var type = v.getUint8(0);
                    var value;
                    var objectEnd = false;
                    try {
                      switch (type) {
                        case 0:
                          value = v.getFloat64(1, !le);
                          offset += 8;
                          break;
                        case 1: {
                          var b = v.getUint8(1);
                          value = b ? true : false;
                          offset += 1;
                          break;
                        }
                        case 2: {
                          var amfstr = AMF2.parseString(arrayBuffer, dataOffset + 1, dataSize - 1);
                          value = amfstr.data;
                          offset += amfstr.size;
                          break;
                        }
                        case 3: {
                          value = {};
                          var terminal = 0;
                          if ((v.getUint32(dataSize - 4, !le) & 16777215) === 9) {
                            terminal = 3;
                          }
                          while (offset < dataSize - 4) {
                            var amfobj = AMF2.parseObject(arrayBuffer, dataOffset + offset, dataSize - offset - terminal);
                            if (amfobj.objectEnd)
                              break;
                            value[amfobj.data.name] = amfobj.data.value;
                            offset += amfobj.size;
                          }
                          if (offset <= dataSize - 3) {
                            var marker = v.getUint32(offset - 1, !le) & 16777215;
                            if (marker === 9) {
                              offset += 3;
                            }
                          }
                          break;
                        }
                        case 8: {
                          value = {};
                          offset += 4;
                          var terminal = 0;
                          if ((v.getUint32(dataSize - 4, !le) & 16777215) === 9) {
                            terminal = 3;
                          }
                          while (offset < dataSize - 8) {
                            var amfvar = AMF2.parseVariable(arrayBuffer, dataOffset + offset, dataSize - offset - terminal);
                            if (amfvar.objectEnd)
                              break;
                            value[amfvar.data.name] = amfvar.data.value;
                            offset += amfvar.size;
                          }
                          if (offset <= dataSize - 3) {
                            var marker = v.getUint32(offset - 1, !le) & 16777215;
                            if (marker === 9) {
                              offset += 3;
                            }
                          }
                          break;
                        }
                        case 9:
                          value = void 0;
                          offset = 1;
                          objectEnd = true;
                          break;
                        case 10: {
                          value = [];
                          var strictArrayLength = v.getUint32(1, !le);
                          offset += 4;
                          for (var i = 0; i < strictArrayLength; i++) {
                            var val = AMF2.parseValue(arrayBuffer, dataOffset + offset, dataSize - offset);
                            value.push(val.data);
                            offset += val.size;
                          }
                          break;
                        }
                        case 11: {
                          var date = AMF2.parseDate(arrayBuffer, dataOffset + 1, dataSize - 1);
                          value = date.data;
                          offset += date.size;
                          break;
                        }
                        case 12: {
                          var amfLongStr = AMF2.parseString(arrayBuffer, dataOffset + 1, dataSize - 1);
                          value = amfLongStr.data;
                          offset += amfLongStr.size;
                          break;
                        }
                        default:
                          offset = dataSize;
                          _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w("AMF", "Unsupported AMF value type " + type);
                      }
                    } catch (e) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.e("AMF", e.toString());
                    }
                    return {
                      data: value,
                      size: offset,
                      objectEnd
                    };
                  };
                  return AMF2;
                }()
              );
              __webpack_exports__2["default"] = AMF;
            }
          ),
          /***/
          "./src/demux/demux-errors.js": (
            /*!***********************************!*\
              !*** ./src/demux/demux-errors.js ***!
              \***********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var DemuxErrors = {
                OK: "OK",
                FORMAT_ERROR: "FormatError",
                FORMAT_UNSUPPORTED: "FormatUnsupported",
                CODEC_UNSUPPORTED: "CodecUnsupported"
              };
              __webpack_exports__2["default"] = DemuxErrors;
            }
          ),
          /***/
          "./src/demux/exp-golomb.js": (
            /*!*********************************!*\
              !*** ./src/demux/exp-golomb.js ***!
              \*********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              var ExpGolomb = (
                /** @class */
                function() {
                  function ExpGolomb2(uint8array) {
                    this.TAG = "ExpGolomb";
                    this._buffer = uint8array;
                    this._buffer_index = 0;
                    this._total_bytes = uint8array.byteLength;
                    this._total_bits = uint8array.byteLength * 8;
                    this._current_word = 0;
                    this._current_word_bits_left = 0;
                  }
                  ExpGolomb2.prototype.destroy = function() {
                    this._buffer = null;
                  };
                  ExpGolomb2.prototype._fillCurrentWord = function() {
                    var buffer_bytes_left = this._total_bytes - this._buffer_index;
                    if (buffer_bytes_left <= 0)
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_0__.IllegalStateException("ExpGolomb: _fillCurrentWord() but no bytes available");
                    var bytes_read = Math.min(4, buffer_bytes_left);
                    var word = new Uint8Array(4);
                    word.set(this._buffer.subarray(this._buffer_index, this._buffer_index + bytes_read));
                    this._current_word = new DataView(word.buffer).getUint32(0, false);
                    this._buffer_index += bytes_read;
                    this._current_word_bits_left = bytes_read * 8;
                  };
                  ExpGolomb2.prototype.readBits = function(bits) {
                    if (bits > 32)
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentException("ExpGolomb: readBits() bits exceeded max 32bits!");
                    if (bits <= this._current_word_bits_left) {
                      var result_1 = this._current_word >>> 32 - bits;
                      this._current_word <<= bits;
                      this._current_word_bits_left -= bits;
                      return result_1;
                    }
                    var result = this._current_word_bits_left ? this._current_word : 0;
                    result = result >>> 32 - this._current_word_bits_left;
                    var bits_need_left = bits - this._current_word_bits_left;
                    this._fillCurrentWord();
                    var bits_read_next = Math.min(bits_need_left, this._current_word_bits_left);
                    var result2 = this._current_word >>> 32 - bits_read_next;
                    this._current_word <<= bits_read_next;
                    this._current_word_bits_left -= bits_read_next;
                    result = result << bits_read_next | result2;
                    return result;
                  };
                  ExpGolomb2.prototype.readBool = function() {
                    return this.readBits(1) === 1;
                  };
                  ExpGolomb2.prototype.readByte = function() {
                    return this.readBits(8);
                  };
                  ExpGolomb2.prototype._skipLeadingZero = function() {
                    var zero_count;
                    for (zero_count = 0; zero_count < this._current_word_bits_left; zero_count++) {
                      if (0 !== (this._current_word & 2147483648 >>> zero_count)) {
                        this._current_word <<= zero_count;
                        this._current_word_bits_left -= zero_count;
                        return zero_count;
                      }
                    }
                    this._fillCurrentWord();
                    return zero_count + this._skipLeadingZero();
                  };
                  ExpGolomb2.prototype.readUEG = function() {
                    var leading_zeros = this._skipLeadingZero();
                    return this.readBits(leading_zeros + 1) - 1;
                  };
                  ExpGolomb2.prototype.readSEG = function() {
                    var value = this.readUEG();
                    if (value & 1) {
                      return value + 1 >>> 1;
                    } else {
                      return -1 * (value >>> 1);
                    }
                  };
                  return ExpGolomb2;
                }()
              );
              __webpack_exports__2["default"] = ExpGolomb;
            }
          ),
          /***/
          "./src/demux/flv-demuxer.js": (
            /*!**********************************!*\
              !*** ./src/demux/flv-demuxer.js ***!
              \**********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              );
              var _amf_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ./amf-parser.js */
                "./src/demux/amf-parser.js"
              );
              var _sps_parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ./sps-parser.js */
                "./src/demux/sps-parser.js"
              );
              var _demux_errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                /*! ./demux-errors.js */
                "./src/demux/demux-errors.js"
              );
              var _core_media_info_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(
                /*! ../core/media-info.js */
                "./src/core/media-info.js"
              );
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              function ReadBig32(array, index) {
                return array[index] << 24 | array[index + 1] << 16 | array[index + 2] << 8 | array[index + 3];
              }
              var FLVDemuxer = (
                /** @class */
                function() {
                  function FLVDemuxer2(probeData, config) {
                    this.TAG = "FLVDemuxer";
                    this._config = config;
                    this._onError = null;
                    this._onMediaInfo = null;
                    this._onMetaDataArrived = null;
                    this._onScriptDataArrived = null;
                    this._onTrackMetadata = null;
                    this._onDataAvailable = null;
                    this._dataOffset = probeData.dataOffset;
                    this._firstParse = true;
                    this._dispatch = false;
                    this._hasAudio = probeData.hasAudioTrack;
                    this._hasVideo = probeData.hasVideoTrack;
                    this._hasAudioFlagOverrided = false;
                    this._hasVideoFlagOverrided = false;
                    this._audioInitialMetadataDispatched = false;
                    this._videoInitialMetadataDispatched = false;
                    this._mediaInfo = new _core_media_info_js__WEBPACK_IMPORTED_MODULE_4__.default();
                    this._mediaInfo.hasAudio = this._hasAudio;
                    this._mediaInfo.hasVideo = this._hasVideo;
                    this._metadata = null;
                    this._audioMetadata = null;
                    this._videoMetadata = null;
                    this._naluLengthSize = 4;
                    this._timestampBase = 0;
                    this._timescale = 1e3;
                    this._duration = 0;
                    this._durationOverrided = false;
                    this._referenceFrameRate = {
                      fixed: true,
                      fps: 23.976,
                      fps_num: 23976,
                      fps_den: 1e3
                    };
                    this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3];
                    this._mpegSamplingRates = [
                      96e3,
                      88200,
                      64e3,
                      48e3,
                      44100,
                      32e3,
                      24e3,
                      22050,
                      16e3,
                      12e3,
                      11025,
                      8e3,
                      7350
                    ];
                    this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0];
                    this._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0];
                    this._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0];
                    this._mpegAudioL1BitRateTable = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1];
                    this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1];
                    this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1];
                    this._videoTrack = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 };
                    this._audioTrack = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 };
                    this._littleEndian = function() {
                      var buf = new ArrayBuffer(2);
                      new DataView(buf).setInt16(0, 256, true);
                      return new Int16Array(buf)[0] === 256;
                    }();
                  }
                  FLVDemuxer2.prototype.destroy = function() {
                    this._mediaInfo = null;
                    this._metadata = null;
                    this._audioMetadata = null;
                    this._videoMetadata = null;
                    this._videoTrack = null;
                    this._audioTrack = null;
                    this._onError = null;
                    this._onMediaInfo = null;
                    this._onMetaDataArrived = null;
                    this._onScriptDataArrived = null;
                    this._onTrackMetadata = null;
                    this._onDataAvailable = null;
                  };
                  FLVDemuxer2.probe = function(buffer) {
                    var data = new Uint8Array(buffer);
                    var mismatch = { match: false };
                    if (data[0] !== 70 || data[1] !== 76 || data[2] !== 86 || data[3] !== 1) {
                      return mismatch;
                    }
                    var hasAudio = (data[4] & 4) >>> 2 !== 0;
                    var hasVideo = (data[4] & 1) !== 0;
                    var offset = ReadBig32(data, 5);
                    if (offset < 9) {
                      return mismatch;
                    }
                    return {
                      match: true,
                      consumed: offset,
                      dataOffset: offset,
                      hasAudioTrack: hasAudio,
                      hasVideoTrack: hasVideo
                    };
                  };
                  FLVDemuxer2.prototype.bindDataSource = function(loader) {
                    loader.onDataArrival = this.parseChunks.bind(this);
                    return this;
                  };
                  Object.defineProperty(FLVDemuxer2.prototype, "onTrackMetadata", {
                    // prototype: function(type: string, metadata: any): void
                    get: function() {
                      return this._onTrackMetadata;
                    },
                    set: function(callback) {
                      this._onTrackMetadata = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FLVDemuxer2.prototype, "onMediaInfo", {
                    // prototype: function(mediaInfo: MediaInfo): void
                    get: function() {
                      return this._onMediaInfo;
                    },
                    set: function(callback) {
                      this._onMediaInfo = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FLVDemuxer2.prototype, "onMetaDataArrived", {
                    get: function() {
                      return this._onMetaDataArrived;
                    },
                    set: function(callback) {
                      this._onMetaDataArrived = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FLVDemuxer2.prototype, "onScriptDataArrived", {
                    get: function() {
                      return this._onScriptDataArrived;
                    },
                    set: function(callback) {
                      this._onScriptDataArrived = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FLVDemuxer2.prototype, "onError", {
                    // prototype: function(type: number, info: string): void
                    get: function() {
                      return this._onError;
                    },
                    set: function(callback) {
                      this._onError = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FLVDemuxer2.prototype, "onDataAvailable", {
                    // prototype: function(videoTrack: any, audioTrack: any): void
                    get: function() {
                      return this._onDataAvailable;
                    },
                    set: function(callback) {
                      this._onDataAvailable = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FLVDemuxer2.prototype, "timestampBase", {
                    // timestamp base for output samples, must be in milliseconds
                    get: function() {
                      return this._timestampBase;
                    },
                    set: function(base) {
                      this._timestampBase = base;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FLVDemuxer2.prototype, "overridedDuration", {
                    get: function() {
                      return this._duration;
                    },
                    // Force-override media duration. Must be in milliseconds, int32
                    set: function(duration) {
                      this._durationOverrided = true;
                      this._duration = duration;
                      this._mediaInfo.duration = duration;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FLVDemuxer2.prototype, "overridedHasAudio", {
                    // Force-override audio track present flag, boolean
                    set: function(hasAudio) {
                      this._hasAudioFlagOverrided = true;
                      this._hasAudio = hasAudio;
                      this._mediaInfo.hasAudio = hasAudio;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FLVDemuxer2.prototype, "overridedHasVideo", {
                    // Force-override video track present flag, boolean
                    set: function(hasVideo) {
                      this._hasVideoFlagOverrided = true;
                      this._hasVideo = hasVideo;
                      this._mediaInfo.hasVideo = hasVideo;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  FLVDemuxer2.prototype.resetMediaInfo = function() {
                    this._mediaInfo = new _core_media_info_js__WEBPACK_IMPORTED_MODULE_4__.default();
                  };
                  FLVDemuxer2.prototype._isInitialMetadataDispatched = function() {
                    if (this._hasAudio && this._hasVideo) {
                      return this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched;
                    }
                    if (this._hasAudio && !this._hasVideo) {
                      return this._audioInitialMetadataDispatched;
                    }
                    if (!this._hasAudio && this._hasVideo) {
                      return this._videoInitialMetadataDispatched;
                    }
                    return false;
                  };
                  FLVDemuxer2.prototype.parseChunks = function(chunk, byteStart) {
                    if (!this._onError || !this._onMediaInfo || !this._onTrackMetadata || !this._onDataAvailable) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_5__.IllegalStateException("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
                    }
                    var offset = 0;
                    var le = this._littleEndian;
                    if (byteStart === 0) {
                      if (chunk.byteLength > 13) {
                        var probeData = FLVDemuxer2.probe(chunk);
                        offset = probeData.dataOffset;
                      } else {
                        return 0;
                      }
                    }
                    if (this._firstParse) {
                      this._firstParse = false;
                      if (byteStart + offset !== this._dataOffset) {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "First time parsing but chunk byteStart invalid!");
                      }
                      var v = new DataView(chunk, offset);
                      var prevTagSize0 = v.getUint32(0, !le);
                      if (prevTagSize0 !== 0) {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "PrevTagSize0 !== 0 !!!");
                      }
                      offset += 4;
                    }
                    while (offset < chunk.byteLength) {
                      this._dispatch = true;
                      var v = new DataView(chunk, offset);
                      if (offset + 11 + 4 > chunk.byteLength) {
                        break;
                      }
                      var tagType = v.getUint8(0);
                      var dataSize = v.getUint32(0, !le) & 16777215;
                      if (offset + 11 + dataSize + 4 > chunk.byteLength) {
                        break;
                      }
                      if (tagType !== 8 && tagType !== 9 && tagType !== 18) {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Unsupported tag type " + tagType + ", skipped");
                        offset += 11 + dataSize + 4;
                        continue;
                      }
                      var ts2 = v.getUint8(4);
                      var ts1 = v.getUint8(5);
                      var ts0 = v.getUint8(6);
                      var ts3 = v.getUint8(7);
                      var timestamp = ts0 | ts1 << 8 | ts2 << 16 | ts3 << 24;
                      var streamId = v.getUint32(7, !le) & 16777215;
                      if (streamId !== 0) {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Meet tag which has StreamID != 0!");
                      }
                      var dataOffset = offset + 11;
                      switch (tagType) {
                        case 8:
                          this._parseAudioData(chunk, dataOffset, dataSize, timestamp);
                          break;
                        case 9:
                          this._parseVideoData(chunk, dataOffset, dataSize, timestamp, byteStart + offset);
                          break;
                        case 18:
                          this._parseScriptData(chunk, dataOffset, dataSize);
                          break;
                      }
                      var prevTagSize = v.getUint32(11 + dataSize, !le);
                      if (prevTagSize !== 11 + dataSize) {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Invalid PrevTagSize " + prevTagSize);
                      }
                      offset += 11 + dataSize + 4;
                    }
                    if (this._isInitialMetadataDispatched()) {
                      if (this._dispatch && (this._audioTrack.length || this._videoTrack.length)) {
                        this._onDataAvailable(this._audioTrack, this._videoTrack);
                      }
                    }
                    return offset;
                  };
                  FLVDemuxer2.prototype._parseScriptData = function(arrayBuffer, dataOffset, dataSize) {
                    var scriptData = _amf_parser_js__WEBPACK_IMPORTED_MODULE_1__.default.parseScriptData(arrayBuffer, dataOffset, dataSize);
                    if (scriptData.hasOwnProperty("onMetaData")) {
                      if (scriptData.onMetaData == null || typeof scriptData.onMetaData !== "object") {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Invalid onMetaData structure!");
                        return;
                      }
                      if (this._metadata) {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Found another onMetaData tag!");
                      }
                      this._metadata = scriptData;
                      var onMetaData = this._metadata.onMetaData;
                      if (this._onMetaDataArrived) {
                        this._onMetaDataArrived(Object.assign({}, onMetaData));
                      }
                      if (typeof onMetaData.hasAudio === "boolean") {
                        if (this._hasAudioFlagOverrided === false) {
                          this._hasAudio = onMetaData.hasAudio;
                          this._mediaInfo.hasAudio = this._hasAudio;
                        }
                      }
                      if (typeof onMetaData.hasVideo === "boolean") {
                        if (this._hasVideoFlagOverrided === false) {
                          this._hasVideo = onMetaData.hasVideo;
                          this._mediaInfo.hasVideo = this._hasVideo;
                        }
                      }
                      if (typeof onMetaData.audiodatarate === "number") {
                        this._mediaInfo.audioDataRate = onMetaData.audiodatarate;
                      }
                      if (typeof onMetaData.videodatarate === "number") {
                        this._mediaInfo.videoDataRate = onMetaData.videodatarate;
                      }
                      if (typeof onMetaData.width === "number") {
                        this._mediaInfo.width = onMetaData.width;
                      }
                      if (typeof onMetaData.height === "number") {
                        this._mediaInfo.height = onMetaData.height;
                      }
                      if (typeof onMetaData.duration === "number") {
                        if (!this._durationOverrided) {
                          var duration = Math.floor(onMetaData.duration * this._timescale);
                          this._duration = duration;
                          this._mediaInfo.duration = duration;
                        }
                      } else {
                        this._mediaInfo.duration = 0;
                      }
                      if (typeof onMetaData.framerate === "number") {
                        var fps_num = Math.floor(onMetaData.framerate * 1e3);
                        if (fps_num > 0) {
                          var fps = fps_num / 1e3;
                          this._referenceFrameRate.fixed = true;
                          this._referenceFrameRate.fps = fps;
                          this._referenceFrameRate.fps_num = fps_num;
                          this._referenceFrameRate.fps_den = 1e3;
                          this._mediaInfo.fps = fps;
                        }
                      }
                      if (typeof onMetaData.keyframes === "object") {
                        this._mediaInfo.hasKeyframesIndex = true;
                        var keyframes = onMetaData.keyframes;
                        this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(keyframes);
                        onMetaData.keyframes = null;
                      } else {
                        this._mediaInfo.hasKeyframesIndex = false;
                      }
                      this._dispatch = false;
                      this._mediaInfo.metadata = onMetaData;
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.v(this.TAG, "Parsed onMetaData");
                      if (this._mediaInfo.isComplete()) {
                        this._onMediaInfo(this._mediaInfo);
                      }
                    }
                    if (Object.keys(scriptData).length > 0) {
                      if (this._onScriptDataArrived) {
                        this._onScriptDataArrived(Object.assign({}, scriptData));
                      }
                    }
                  };
                  FLVDemuxer2.prototype._parseKeyframesIndex = function(keyframes) {
                    var times = [];
                    var filepositions = [];
                    for (var i = 1; i < keyframes.times.length; i++) {
                      var time = this._timestampBase + Math.floor(keyframes.times[i] * 1e3);
                      times.push(time);
                      filepositions.push(keyframes.filepositions[i]);
                    }
                    return {
                      times,
                      filepositions
                    };
                  };
                  FLVDemuxer2.prototype._parseAudioData = function(arrayBuffer, dataOffset, dataSize, tagTimestamp) {
                    if (dataSize <= 1) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Flv: Invalid audio packet, missing SoundData payload!");
                      return;
                    }
                    if (this._hasAudioFlagOverrided === true && this._hasAudio === false) {
                      return;
                    }
                    this._littleEndian;
                    var v = new DataView(arrayBuffer, dataOffset, dataSize);
                    var soundSpec = v.getUint8(0);
                    var soundFormat = soundSpec >>> 4;
                    if (soundFormat !== 2 && soundFormat !== 10) {
                      this._onError(_demux_errors_js__WEBPACK_IMPORTED_MODULE_3__.default.CODEC_UNSUPPORTED, "Flv: Unsupported audio codec idx: " + soundFormat);
                      return;
                    }
                    var soundRate = 0;
                    var soundRateIndex = (soundSpec & 12) >>> 2;
                    if (soundRateIndex >= 0 && soundRateIndex <= 4) {
                      soundRate = this._flvSoundRateTable[soundRateIndex];
                    } else {
                      this._onError(_demux_errors_js__WEBPACK_IMPORTED_MODULE_3__.default.FORMAT_ERROR, "Flv: Invalid audio sample rate idx: " + soundRateIndex);
                      return;
                    }
                    var soundType = soundSpec & 1;
                    var meta = this._audioMetadata;
                    var track = this._audioTrack;
                    if (!meta) {
                      if (this._hasAudio === false && this._hasAudioFlagOverrided === false) {
                        this._hasAudio = true;
                        this._mediaInfo.hasAudio = true;
                      }
                      meta = this._audioMetadata = {};
                      meta.type = "audio";
                      meta.id = track.id;
                      meta.timescale = this._timescale;
                      meta.duration = this._duration;
                      meta.audioSampleRate = soundRate;
                      meta.channelCount = soundType === 0 ? 1 : 2;
                    }
                    if (soundFormat === 10) {
                      var aacData = this._parseAACAudioData(arrayBuffer, dataOffset + 1, dataSize - 1);
                      if (aacData == void 0) {
                        return;
                      }
                      if (aacData.packetType === 0) {
                        if (meta.config) {
                          _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Found another AudioSpecificConfig!");
                        }
                        var misc = aacData.data;
                        meta.audioSampleRate = misc.samplingRate;
                        meta.channelCount = misc.channelCount;
                        meta.codec = misc.codec;
                        meta.originalCodec = misc.originalCodec;
                        meta.config = misc.config;
                        meta.refSampleDuration = 1024 / meta.audioSampleRate * meta.timescale;
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.v(this.TAG, "Parsed AudioSpecificConfig");
                        if (this._isInitialMetadataDispatched()) {
                          if (this._dispatch && (this._audioTrack.length || this._videoTrack.length)) {
                            this._onDataAvailable(this._audioTrack, this._videoTrack);
                          }
                        } else {
                          this._audioInitialMetadataDispatched = true;
                        }
                        this._dispatch = false;
                        this._onTrackMetadata("audio", meta);
                        var mi = this._mediaInfo;
                        mi.audioCodec = meta.originalCodec;
                        mi.audioSampleRate = meta.audioSampleRate;
                        mi.audioChannelCount = meta.channelCount;
                        if (mi.hasVideo) {
                          if (mi.videoCodec != null) {
                            mi.mimeType = 'video/x-flv; codecs="' + mi.videoCodec + "," + mi.audioCodec + '"';
                          }
                        } else {
                          mi.mimeType = 'video/x-flv; codecs="' + mi.audioCodec + '"';
                        }
                        if (mi.isComplete()) {
                          this._onMediaInfo(mi);
                        }
                      } else if (aacData.packetType === 1) {
                        var dts = this._timestampBase + tagTimestamp;
                        var aacSample = { unit: aacData.data, length: aacData.data.byteLength, dts, pts: dts };
                        track.samples.push(aacSample);
                        track.length += aacData.data.length;
                      } else {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.e(this.TAG, "Flv: Unsupported AAC data type " + aacData.packetType);
                      }
                    } else if (soundFormat === 2) {
                      if (!meta.codec) {
                        var misc = this._parseMP3AudioData(arrayBuffer, dataOffset + 1, dataSize - 1, true);
                        if (misc == void 0) {
                          return;
                        }
                        meta.audioSampleRate = misc.samplingRate;
                        meta.channelCount = misc.channelCount;
                        meta.codec = misc.codec;
                        meta.originalCodec = misc.originalCodec;
                        meta.refSampleDuration = 1152 / meta.audioSampleRate * meta.timescale;
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.v(this.TAG, "Parsed MPEG Audio Frame Header");
                        this._audioInitialMetadataDispatched = true;
                        this._onTrackMetadata("audio", meta);
                        var mi = this._mediaInfo;
                        mi.audioCodec = meta.codec;
                        mi.audioSampleRate = meta.audioSampleRate;
                        mi.audioChannelCount = meta.channelCount;
                        mi.audioDataRate = misc.bitRate;
                        if (mi.hasVideo) {
                          if (mi.videoCodec != null) {
                            mi.mimeType = 'video/x-flv; codecs="' + mi.videoCodec + "," + mi.audioCodec + '"';
                          }
                        } else {
                          mi.mimeType = 'video/x-flv; codecs="' + mi.audioCodec + '"';
                        }
                        if (mi.isComplete()) {
                          this._onMediaInfo(mi);
                        }
                      }
                      var data = this._parseMP3AudioData(arrayBuffer, dataOffset + 1, dataSize - 1, false);
                      if (data == void 0) {
                        return;
                      }
                      var dts = this._timestampBase + tagTimestamp;
                      var mp3Sample = { unit: data, length: data.byteLength, dts, pts: dts };
                      track.samples.push(mp3Sample);
                      track.length += data.length;
                    }
                  };
                  FLVDemuxer2.prototype._parseAACAudioData = function(arrayBuffer, dataOffset, dataSize) {
                    if (dataSize <= 1) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Flv: Invalid AAC packet, missing AACPacketType or/and Data!");
                      return;
                    }
                    var result = {};
                    var array = new Uint8Array(arrayBuffer, dataOffset, dataSize);
                    result.packetType = array[0];
                    if (array[0] === 0) {
                      result.data = this._parseAACAudioSpecificConfig(arrayBuffer, dataOffset + 1, dataSize - 1);
                    } else {
                      result.data = array.subarray(1);
                    }
                    return result;
                  };
                  FLVDemuxer2.prototype._parseAACAudioSpecificConfig = function(arrayBuffer, dataOffset, dataSize) {
                    var array = new Uint8Array(arrayBuffer, dataOffset, dataSize);
                    var config = null;
                    var audioObjectType = 0;
                    var originalAudioObjectType = 0;
                    var samplingIndex = 0;
                    var extensionSamplingIndex = null;
                    audioObjectType = originalAudioObjectType = array[0] >>> 3;
                    samplingIndex = (array[0] & 7) << 1 | array[1] >>> 7;
                    if (samplingIndex < 0 || samplingIndex >= this._mpegSamplingRates.length) {
                      this._onError(_demux_errors_js__WEBPACK_IMPORTED_MODULE_3__.default.FORMAT_ERROR, "Flv: AAC invalid sampling frequency index!");
                      return;
                    }
                    var samplingFrequence = this._mpegSamplingRates[samplingIndex];
                    var channelConfig = (array[1] & 120) >>> 3;
                    if (channelConfig < 0 || channelConfig >= 8) {
                      this._onError(_demux_errors_js__WEBPACK_IMPORTED_MODULE_3__.default.FORMAT_ERROR, "Flv: AAC invalid channel configuration");
                      return;
                    }
                    if (audioObjectType === 5) {
                      extensionSamplingIndex = (array[1] & 7) << 1 | array[2] >>> 7;
                      (array[2] & 124) >>> 2;
                    }
                    var userAgent = self.navigator.userAgent.toLowerCase();
                    if (userAgent.indexOf("firefox") !== -1) {
                      if (samplingIndex >= 6) {
                        audioObjectType = 5;
                        config = new Array(4);
                        extensionSamplingIndex = samplingIndex - 3;
                      } else {
                        audioObjectType = 2;
                        config = new Array(2);
                        extensionSamplingIndex = samplingIndex;
                      }
                    } else if (userAgent.indexOf("android") !== -1) {
                      audioObjectType = 2;
                      config = new Array(2);
                      extensionSamplingIndex = samplingIndex;
                    } else {
                      audioObjectType = 5;
                      extensionSamplingIndex = samplingIndex;
                      config = new Array(4);
                      if (samplingIndex >= 6) {
                        extensionSamplingIndex = samplingIndex - 3;
                      } else if (channelConfig === 1) {
                        audioObjectType = 2;
                        config = new Array(2);
                        extensionSamplingIndex = samplingIndex;
                      }
                    }
                    config[0] = audioObjectType << 3;
                    config[0] |= (samplingIndex & 15) >>> 1;
                    config[1] = (samplingIndex & 15) << 7;
                    config[1] |= (channelConfig & 15) << 3;
                    if (audioObjectType === 5) {
                      config[1] |= (extensionSamplingIndex & 15) >>> 1;
                      config[2] = (extensionSamplingIndex & 1) << 7;
                      config[2] |= 2 << 2;
                      config[3] = 0;
                    }
                    return {
                      config,
                      samplingRate: samplingFrequence,
                      channelCount: channelConfig,
                      codec: "mp4a.40." + audioObjectType,
                      originalCodec: "mp4a.40." + originalAudioObjectType
                    };
                  };
                  FLVDemuxer2.prototype._parseMP3AudioData = function(arrayBuffer, dataOffset, dataSize, requestHeader) {
                    if (dataSize < 4) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Flv: Invalid MP3 packet, header missing!");
                      return;
                    }
                    this._littleEndian;
                    var array = new Uint8Array(arrayBuffer, dataOffset, dataSize);
                    var result = null;
                    if (requestHeader) {
                      if (array[0] !== 255) {
                        return;
                      }
                      var ver = array[1] >>> 3 & 3;
                      var layer = (array[1] & 6) >> 1;
                      var bitrate_index = (array[2] & 240) >>> 4;
                      var sampling_freq_index = (array[2] & 12) >>> 2;
                      var channel_mode = array[3] >>> 6 & 3;
                      var channel_count = channel_mode !== 3 ? 2 : 1;
                      var sample_rate = 0;
                      var bit_rate = 0;
                      var codec = "mp3";
                      switch (ver) {
                        case 0:
                          sample_rate = this._mpegAudioV25SampleRateTable[sampling_freq_index];
                          break;
                        case 2:
                          sample_rate = this._mpegAudioV20SampleRateTable[sampling_freq_index];
                          break;
                        case 3:
                          sample_rate = this._mpegAudioV10SampleRateTable[sampling_freq_index];
                          break;
                      }
                      switch (layer) {
                        case 1:
                          if (bitrate_index < this._mpegAudioL3BitRateTable.length) {
                            bit_rate = this._mpegAudioL3BitRateTable[bitrate_index];
                          }
                          break;
                        case 2:
                          if (bitrate_index < this._mpegAudioL2BitRateTable.length) {
                            bit_rate = this._mpegAudioL2BitRateTable[bitrate_index];
                          }
                          break;
                        case 3:
                          if (bitrate_index < this._mpegAudioL1BitRateTable.length) {
                            bit_rate = this._mpegAudioL1BitRateTable[bitrate_index];
                          }
                          break;
                      }
                      result = {
                        bitRate: bit_rate,
                        samplingRate: sample_rate,
                        channelCount: channel_count,
                        codec,
                        originalCodec: codec
                      };
                    } else {
                      result = array;
                    }
                    return result;
                  };
                  FLVDemuxer2.prototype._parseVideoData = function(arrayBuffer, dataOffset, dataSize, tagTimestamp, tagPosition) {
                    if (dataSize <= 1) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Flv: Invalid video packet, missing VideoData payload!");
                      return;
                    }
                    if (this._hasVideoFlagOverrided === true && this._hasVideo === false) {
                      return;
                    }
                    var spec = new Uint8Array(arrayBuffer, dataOffset, dataSize)[0];
                    var frameType = (spec & 240) >>> 4;
                    var codecId = spec & 15;
                    if (codecId !== 7) {
                      this._onError(_demux_errors_js__WEBPACK_IMPORTED_MODULE_3__.default.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: " + codecId);
                      return;
                    }
                    this._parseAVCVideoPacket(arrayBuffer, dataOffset + 1, dataSize - 1, tagTimestamp, tagPosition, frameType);
                  };
                  FLVDemuxer2.prototype._parseAVCVideoPacket = function(arrayBuffer, dataOffset, dataSize, tagTimestamp, tagPosition, frameType) {
                    if (dataSize < 4) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");
                      return;
                    }
                    var le = this._littleEndian;
                    var v = new DataView(arrayBuffer, dataOffset, dataSize);
                    var packetType = v.getUint8(0);
                    var cts_unsigned = v.getUint32(0, !le) & 16777215;
                    var cts = cts_unsigned << 8 >> 8;
                    if (packetType === 0) {
                      this._parseAVCDecoderConfigurationRecord(arrayBuffer, dataOffset + 4, dataSize - 4);
                    } else if (packetType === 1) {
                      this._parseAVCVideoData(arrayBuffer, dataOffset + 4, dataSize - 4, tagTimestamp, tagPosition, frameType, cts);
                    } else if (packetType === 2) ;
                    else {
                      this._onError(_demux_errors_js__WEBPACK_IMPORTED_MODULE_3__.default.FORMAT_ERROR, "Flv: Invalid video packet type " + packetType);
                      return;
                    }
                  };
                  FLVDemuxer2.prototype._parseAVCDecoderConfigurationRecord = function(arrayBuffer, dataOffset, dataSize) {
                    if (dataSize < 7) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");
                      return;
                    }
                    var meta = this._videoMetadata;
                    var track = this._videoTrack;
                    var le = this._littleEndian;
                    var v = new DataView(arrayBuffer, dataOffset, dataSize);
                    if (!meta) {
                      if (this._hasVideo === false && this._hasVideoFlagOverrided === false) {
                        this._hasVideo = true;
                        this._mediaInfo.hasVideo = true;
                      }
                      meta = this._videoMetadata = {};
                      meta.type = "video";
                      meta.id = track.id;
                      meta.timescale = this._timescale;
                      meta.duration = this._duration;
                    } else {
                      if (typeof meta.avcc !== "undefined") {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Found another AVCDecoderConfigurationRecord!");
                      }
                    }
                    var version = v.getUint8(0);
                    var avcProfile = v.getUint8(1);
                    v.getUint8(2);
                    v.getUint8(3);
                    if (version !== 1 || avcProfile === 0) {
                      this._onError(_demux_errors_js__WEBPACK_IMPORTED_MODULE_3__.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord");
                      return;
                    }
                    this._naluLengthSize = (v.getUint8(4) & 3) + 1;
                    if (this._naluLengthSize !== 3 && this._naluLengthSize !== 4) {
                      this._onError(_demux_errors_js__WEBPACK_IMPORTED_MODULE_3__.default.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
                      return;
                    }
                    var spsCount = v.getUint8(5) & 31;
                    if (spsCount === 0) {
                      this._onError(_demux_errors_js__WEBPACK_IMPORTED_MODULE_3__.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No SPS");
                      return;
                    } else if (spsCount > 1) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: SPS Count = " + spsCount);
                    }
                    var offset = 6;
                    for (var i = 0; i < spsCount; i++) {
                      var len = v.getUint16(offset, !le);
                      offset += 2;
                      if (len === 0) {
                        continue;
                      }
                      var sps = new Uint8Array(arrayBuffer, dataOffset + offset, len);
                      offset += len;
                      var config = _sps_parser_js__WEBPACK_IMPORTED_MODULE_2__.default.parseSPS(sps);
                      if (i !== 0) {
                        continue;
                      }
                      meta.codecWidth = config.codec_size.width;
                      meta.codecHeight = config.codec_size.height;
                      meta.presentWidth = config.present_size.width;
                      meta.presentHeight = config.present_size.height;
                      meta.profile = config.profile_string;
                      meta.level = config.level_string;
                      meta.bitDepth = config.bit_depth;
                      meta.chromaFormat = config.chroma_format;
                      meta.sarRatio = config.sar_ratio;
                      meta.frameRate = config.frame_rate;
                      if (config.frame_rate.fixed === false || config.frame_rate.fps_num === 0 || config.frame_rate.fps_den === 0) {
                        meta.frameRate = this._referenceFrameRate;
                      }
                      var fps_den = meta.frameRate.fps_den;
                      var fps_num = meta.frameRate.fps_num;
                      meta.refSampleDuration = meta.timescale * (fps_den / fps_num);
                      var codecArray = sps.subarray(1, 4);
                      var codecString = "avc1.";
                      for (var j = 0; j < 3; j++) {
                        var h = codecArray[j].toString(16);
                        if (h.length < 2) {
                          h = "0" + h;
                        }
                        codecString += h;
                      }
                      meta.codec = codecString;
                      var mi = this._mediaInfo;
                      mi.width = meta.codecWidth;
                      mi.height = meta.codecHeight;
                      mi.fps = meta.frameRate.fps;
                      mi.profile = meta.profile;
                      mi.level = meta.level;
                      mi.refFrames = config.ref_frames;
                      mi.chromaFormat = config.chroma_format_string;
                      mi.sarNum = meta.sarRatio.width;
                      mi.sarDen = meta.sarRatio.height;
                      mi.videoCodec = codecString;
                      if (mi.hasAudio) {
                        if (mi.audioCodec != null) {
                          mi.mimeType = 'video/x-flv; codecs="' + mi.videoCodec + "," + mi.audioCodec + '"';
                        }
                      } else {
                        mi.mimeType = 'video/x-flv; codecs="' + mi.videoCodec + '"';
                      }
                      if (mi.isComplete()) {
                        this._onMediaInfo(mi);
                      }
                    }
                    var ppsCount = v.getUint8(offset);
                    if (ppsCount === 0) {
                      this._onError(_demux_errors_js__WEBPACK_IMPORTED_MODULE_3__.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No PPS");
                      return;
                    } else if (ppsCount > 1) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: PPS Count = " + ppsCount);
                    }
                    offset++;
                    for (var i = 0; i < ppsCount; i++) {
                      var len = v.getUint16(offset, !le);
                      offset += 2;
                      if (len === 0) {
                        continue;
                      }
                      offset += len;
                    }
                    meta.avcc = new Uint8Array(dataSize);
                    meta.avcc.set(new Uint8Array(arrayBuffer, dataOffset, dataSize), 0);
                    _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.v(this.TAG, "Parsed AVCDecoderConfigurationRecord");
                    if (this._isInitialMetadataDispatched()) {
                      if (this._dispatch && (this._audioTrack.length || this._videoTrack.length)) {
                        this._onDataAvailable(this._audioTrack, this._videoTrack);
                      }
                    } else {
                      this._videoInitialMetadataDispatched = true;
                    }
                    this._dispatch = false;
                    this._onTrackMetadata("video", meta);
                  };
                  FLVDemuxer2.prototype._parseAVCVideoData = function(arrayBuffer, dataOffset, dataSize, tagTimestamp, tagPosition, frameType, cts) {
                    var le = this._littleEndian;
                    var v = new DataView(arrayBuffer, dataOffset, dataSize);
                    var units = [], length = 0;
                    var offset = 0;
                    var lengthSize = this._naluLengthSize;
                    var dts = this._timestampBase + tagTimestamp;
                    var keyframe = frameType === 1;
                    while (offset < dataSize) {
                      if (offset + 4 >= dataSize) {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Malformed Nalu near timestamp " + dts + ", offset = " + offset + ", dataSize = " + dataSize);
                        break;
                      }
                      var naluSize = v.getUint32(offset, !le);
                      if (lengthSize === 3) {
                        naluSize >>>= 8;
                      }
                      if (naluSize > dataSize - lengthSize) {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Malformed Nalus near timestamp " + dts + ", NaluSize > DataSize!");
                        return;
                      }
                      var unitType = v.getUint8(offset + lengthSize) & 31;
                      if (unitType === 5) {
                        keyframe = true;
                      }
                      var data = new Uint8Array(arrayBuffer, dataOffset + offset, lengthSize + naluSize);
                      var unit = { type: unitType, data };
                      units.push(unit);
                      length += data.byteLength;
                      offset += lengthSize + naluSize;
                    }
                    if (units.length) {
                      var track = this._videoTrack;
                      var avcSample = {
                        units,
                        length,
                        isKeyframe: keyframe,
                        dts,
                        cts,
                        pts: dts + cts
                      };
                      if (keyframe) {
                        avcSample.fileposition = tagPosition;
                      }
                      track.samples.push(avcSample);
                      track.length += length;
                    }
                  };
                  return FLVDemuxer2;
                }()
              );
              __webpack_exports__2["default"] = FLVDemuxer;
            }
          ),
          /***/
          "./src/demux/sps-parser.js": (
            /*!*********************************!*\
              !*** ./src/demux/sps-parser.js ***!
              \*********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var _exp_golomb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ./exp-golomb.js */
                "./src/demux/exp-golomb.js"
              );
              var SPSParser = (
                /** @class */
                function() {
                  function SPSParser2() {
                  }
                  SPSParser2._ebsp2rbsp = function(uint8array) {
                    var src = uint8array;
                    var src_length = src.byteLength;
                    var dst = new Uint8Array(src_length);
                    var dst_idx = 0;
                    for (var i = 0; i < src_length; i++) {
                      if (i >= 2) {
                        if (src[i] === 3 && src[i - 1] === 0 && src[i - 2] === 0) {
                          continue;
                        }
                      }
                      dst[dst_idx] = src[i];
                      dst_idx++;
                    }
                    return new Uint8Array(dst.buffer, 0, dst_idx);
                  };
                  SPSParser2.parseSPS = function(uint8array) {
                    var rbsp = SPSParser2._ebsp2rbsp(uint8array);
                    var gb = new _exp_golomb_js__WEBPACK_IMPORTED_MODULE_0__.default(rbsp);
                    gb.readByte();
                    var profile_idc = gb.readByte();
                    gb.readByte();
                    var level_idc = gb.readByte();
                    gb.readUEG();
                    var profile_string = SPSParser2.getProfileString(profile_idc);
                    var level_string = SPSParser2.getLevelString(level_idc);
                    var chroma_format_idc = 1;
                    var chroma_format = 420;
                    var chroma_format_table = [0, 420, 422, 444];
                    var bit_depth = 8;
                    if (profile_idc === 100 || profile_idc === 110 || profile_idc === 122 || profile_idc === 244 || profile_idc === 44 || profile_idc === 83 || profile_idc === 86 || profile_idc === 118 || profile_idc === 128 || profile_idc === 138 || profile_idc === 144) {
                      chroma_format_idc = gb.readUEG();
                      if (chroma_format_idc === 3) {
                        gb.readBits(1);
                      }
                      if (chroma_format_idc <= 3) {
                        chroma_format = chroma_format_table[chroma_format_idc];
                      }
                      bit_depth = gb.readUEG() + 8;
                      gb.readUEG();
                      gb.readBits(1);
                      if (gb.readBool()) {
                        var scaling_list_count = chroma_format_idc !== 3 ? 8 : 12;
                        for (var i = 0; i < scaling_list_count; i++) {
                          if (gb.readBool()) {
                            if (i < 6) {
                              SPSParser2._skipScalingList(gb, 16);
                            } else {
                              SPSParser2._skipScalingList(gb, 64);
                            }
                          }
                        }
                      }
                    }
                    gb.readUEG();
                    var pic_order_cnt_type = gb.readUEG();
                    if (pic_order_cnt_type === 0) {
                      gb.readUEG();
                    } else if (pic_order_cnt_type === 1) {
                      gb.readBits(1);
                      gb.readSEG();
                      gb.readSEG();
                      var num_ref_frames_in_pic_order_cnt_cycle = gb.readUEG();
                      for (var i = 0; i < num_ref_frames_in_pic_order_cnt_cycle; i++) {
                        gb.readSEG();
                      }
                    }
                    var ref_frames = gb.readUEG();
                    gb.readBits(1);
                    var pic_width_in_mbs_minus1 = gb.readUEG();
                    var pic_height_in_map_units_minus1 = gb.readUEG();
                    var frame_mbs_only_flag = gb.readBits(1);
                    if (frame_mbs_only_flag === 0) {
                      gb.readBits(1);
                    }
                    gb.readBits(1);
                    var frame_crop_left_offset = 0;
                    var frame_crop_right_offset = 0;
                    var frame_crop_top_offset = 0;
                    var frame_crop_bottom_offset = 0;
                    var frame_cropping_flag = gb.readBool();
                    if (frame_cropping_flag) {
                      frame_crop_left_offset = gb.readUEG();
                      frame_crop_right_offset = gb.readUEG();
                      frame_crop_top_offset = gb.readUEG();
                      frame_crop_bottom_offset = gb.readUEG();
                    }
                    var sar_width = 1, sar_height = 1;
                    var fps = 0, fps_fixed = true, fps_num = 0, fps_den = 0;
                    var vui_parameters_present_flag = gb.readBool();
                    if (vui_parameters_present_flag) {
                      if (gb.readBool()) {
                        var aspect_ratio_idc = gb.readByte();
                        var sar_w_table = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2];
                        var sar_h_table = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
                        if (aspect_ratio_idc > 0 && aspect_ratio_idc < 16) {
                          sar_width = sar_w_table[aspect_ratio_idc - 1];
                          sar_height = sar_h_table[aspect_ratio_idc - 1];
                        } else if (aspect_ratio_idc === 255) {
                          sar_width = gb.readByte() << 8 | gb.readByte();
                          sar_height = gb.readByte() << 8 | gb.readByte();
                        }
                      }
                      if (gb.readBool()) {
                        gb.readBool();
                      }
                      if (gb.readBool()) {
                        gb.readBits(4);
                        if (gb.readBool()) {
                          gb.readBits(24);
                        }
                      }
                      if (gb.readBool()) {
                        gb.readUEG();
                        gb.readUEG();
                      }
                      if (gb.readBool()) {
                        var num_units_in_tick = gb.readBits(32);
                        var time_scale = gb.readBits(32);
                        fps_fixed = gb.readBool();
                        fps_num = time_scale;
                        fps_den = num_units_in_tick * 2;
                        fps = fps_num / fps_den;
                      }
                    }
                    var sarScale = 1;
                    if (sar_width !== 1 || sar_height !== 1) {
                      sarScale = sar_width / sar_height;
                    }
                    var crop_unit_x = 0, crop_unit_y = 0;
                    if (chroma_format_idc === 0) {
                      crop_unit_x = 1;
                      crop_unit_y = 2 - frame_mbs_only_flag;
                    } else {
                      var sub_wc = chroma_format_idc === 3 ? 1 : 2;
                      var sub_hc = chroma_format_idc === 1 ? 2 : 1;
                      crop_unit_x = sub_wc;
                      crop_unit_y = sub_hc * (2 - frame_mbs_only_flag);
                    }
                    var codec_width = (pic_width_in_mbs_minus1 + 1) * 16;
                    var codec_height = (2 - frame_mbs_only_flag) * ((pic_height_in_map_units_minus1 + 1) * 16);
                    codec_width -= (frame_crop_left_offset + frame_crop_right_offset) * crop_unit_x;
                    codec_height -= (frame_crop_top_offset + frame_crop_bottom_offset) * crop_unit_y;
                    var present_width = Math.ceil(codec_width * sarScale);
                    gb.destroy();
                    gb = null;
                    return {
                      profile_string,
                      level_string,
                      bit_depth,
                      ref_frames,
                      chroma_format,
                      chroma_format_string: SPSParser2.getChromaFormatString(chroma_format),
                      frame_rate: {
                        fixed: fps_fixed,
                        fps,
                        fps_den,
                        fps_num
                      },
                      sar_ratio: {
                        width: sar_width,
                        height: sar_height
                      },
                      codec_size: {
                        width: codec_width,
                        height: codec_height
                      },
                      present_size: {
                        width: present_width,
                        height: codec_height
                      }
                    };
                  };
                  SPSParser2._skipScalingList = function(gb, count) {
                    var last_scale = 8, next_scale = 8;
                    var delta_scale = 0;
                    for (var i = 0; i < count; i++) {
                      if (next_scale !== 0) {
                        delta_scale = gb.readSEG();
                        next_scale = (last_scale + delta_scale + 256) % 256;
                      }
                      last_scale = next_scale === 0 ? last_scale : next_scale;
                    }
                  };
                  SPSParser2.getProfileString = function(profile_idc) {
                    switch (profile_idc) {
                      case 66:
                        return "Baseline";
                      case 77:
                        return "Main";
                      case 88:
                        return "Extended";
                      case 100:
                        return "High";
                      case 110:
                        return "High10";
                      case 122:
                        return "High422";
                      case 244:
                        return "High444";
                      default:
                        return "Unknown";
                    }
                  };
                  SPSParser2.getLevelString = function(level_idc) {
                    return (level_idc / 10).toFixed(1);
                  };
                  SPSParser2.getChromaFormatString = function(chroma) {
                    switch (chroma) {
                      case 420:
                        return "4:2:0";
                      case 422:
                        return "4:2:2";
                      case 444:
                        return "4:4:4";
                      default:
                        return "Unknown";
                    }
                  };
                  return SPSParser2;
                }()
              );
              __webpack_exports__2["default"] = SPSParser;
            }
          ),
          /***/
          "./src/flv.js": (
            /*!********************!*\
              !*** ./src/flv.js ***!
              \********************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var _utils_polyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ./utils/polyfill.js */
                "./src/utils/polyfill.js"
              );
              var _core_features_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ./core/features.js */
                "./src/core/features.js"
              );
              var _io_loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ./io/loader.js */
                "./src/io/loader.js"
              );
              var _player_flv_player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                /*! ./player/flv-player.js */
                "./src/player/flv-player.js"
              );
              var _player_native_player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(
                /*! ./player/native-player.js */
                "./src/player/native-player.js"
              );
              var _player_player_events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(
                /*! ./player/player-events.js */
                "./src/player/player-events.js"
              );
              var _player_player_errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__2(
                /*! ./player/player-errors.js */
                "./src/player/player-errors.js"
              );
              var _utils_logging_control_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__2(
                /*! ./utils/logging-control.js */
                "./src/utils/logging-control.js"
              );
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__2(
                /*! ./utils/exception.js */
                "./src/utils/exception.js"
              );
              _utils_polyfill_js__WEBPACK_IMPORTED_MODULE_0__.default.install();
              function createPlayer(mediaDataSource, optionalConfig) {
                var mds = mediaDataSource;
                if (mds == null || typeof mds !== "object") {
                  throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_8__.InvalidArgumentException("MediaDataSource must be an javascript object!");
                }
                if (!mds.hasOwnProperty("type")) {
                  throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_8__.InvalidArgumentException("MediaDataSource must has type field to indicate video file type!");
                }
                switch (mds.type) {
                  case "flv":
                    return new _player_flv_player_js__WEBPACK_IMPORTED_MODULE_3__.default(mds, optionalConfig);
                  default:
                    return new _player_native_player_js__WEBPACK_IMPORTED_MODULE_4__.default(mds, optionalConfig);
                }
              }
              function isSupported() {
                return _core_features_js__WEBPACK_IMPORTED_MODULE_1__.default.supportMSEH264Playback();
              }
              function getFeatureList() {
                return _core_features_js__WEBPACK_IMPORTED_MODULE_1__.default.getFeatureList();
              }
              var flvjs2 = {};
              flvjs2.createPlayer = createPlayer;
              flvjs2.isSupported = isSupported;
              flvjs2.getFeatureList = getFeatureList;
              flvjs2.BaseLoader = _io_loader_js__WEBPACK_IMPORTED_MODULE_2__.BaseLoader;
              flvjs2.LoaderStatus = _io_loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderStatus;
              flvjs2.LoaderErrors = _io_loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderErrors;
              flvjs2.Events = _player_player_events_js__WEBPACK_IMPORTED_MODULE_5__.default;
              flvjs2.ErrorTypes = _player_player_errors_js__WEBPACK_IMPORTED_MODULE_6__.ErrorTypes;
              flvjs2.ErrorDetails = _player_player_errors_js__WEBPACK_IMPORTED_MODULE_6__.ErrorDetails;
              flvjs2.FlvPlayer = _player_flv_player_js__WEBPACK_IMPORTED_MODULE_3__.default;
              flvjs2.NativePlayer = _player_native_player_js__WEBPACK_IMPORTED_MODULE_4__.default;
              flvjs2.LoggingControl = _utils_logging_control_js__WEBPACK_IMPORTED_MODULE_7__.default;
              Object.defineProperty(flvjs2, "version", {
                enumerable: true,
                get: function() {
                  return "1.6.2";
                }
              });
              __webpack_exports__2["default"] = flvjs2;
            }
          ),
          /***/
          "./src/index.js": (
            /*!**********************!*\
              !*** ./src/index.js ***!
              \**********************/
            /***/
            function(module2, __unused_webpack_exports, __webpack_require__2) {
              module2.exports = __webpack_require__2(
                /*! ./flv.js */
                "./src/flv.js"
              ).default;
            }
          ),
          /***/
          "./src/io/fetch-stream-loader.js": (
            /*!***************************************!*\
              !*** ./src/io/fetch-stream-loader.js ***!
              \***************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var _utils_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              );
              var _loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ./loader.js */
                "./src/io/loader.js"
              );
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              var __extends = /* @__PURE__ */ function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  if (typeof b !== "function" && b !== null)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              }();
              var FetchStreamLoader = (
                /** @class */
                function(_super) {
                  __extends(FetchStreamLoader2, _super);
                  function FetchStreamLoader2(seekHandler, config) {
                    var _this = _super.call(this, "fetch-stream-loader") || this;
                    _this.TAG = "FetchStreamLoader";
                    _this._seekHandler = seekHandler;
                    _this._config = config;
                    _this._needStash = true;
                    _this._requestAbort = false;
                    _this._contentLength = null;
                    _this._receivedLength = 0;
                    return _this;
                  }
                  FetchStreamLoader2.isSupported = function() {
                    try {
                      var isWorkWellEdge = _utils_browser_js__WEBPACK_IMPORTED_MODULE_0__.default.msedge && _utils_browser_js__WEBPACK_IMPORTED_MODULE_0__.default.version.minor >= 15048;
                      var browserNotBlacklisted = _utils_browser_js__WEBPACK_IMPORTED_MODULE_0__.default.msedge ? isWorkWellEdge : true;
                      return self.fetch && self.ReadableStream && browserNotBlacklisted;
                    } catch (e) {
                      return false;
                    }
                  };
                  FetchStreamLoader2.prototype.destroy = function() {
                    if (this.isWorking()) {
                      this.abort();
                    }
                    _super.prototype.destroy.call(this);
                  };
                  FetchStreamLoader2.prototype.open = function(dataSource, range) {
                    var _this = this;
                    this._dataSource = dataSource;
                    this._range = range;
                    var sourceURL = dataSource.url;
                    if (this._config.reuseRedirectedURL && dataSource.redirectedURL != void 0) {
                      sourceURL = dataSource.redirectedURL;
                    }
                    var seekConfig = this._seekHandler.getConfig(sourceURL, range);
                    var headers = new self.Headers();
                    if (typeof seekConfig.headers === "object") {
                      var configHeaders = seekConfig.headers;
                      for (var key in configHeaders) {
                        if (configHeaders.hasOwnProperty(key)) {
                          headers.append(key, configHeaders[key]);
                        }
                      }
                    }
                    var params = {
                      method: "GET",
                      headers,
                      mode: "cors",
                      cache: "default",
                      // The default policy of Fetch API in the whatwg standard
                      // Safari incorrectly indicates 'no-referrer' as default policy, fuck it
                      referrerPolicy: "no-referrer-when-downgrade"
                    };
                    if (typeof this._config.headers === "object") {
                      for (var key in this._config.headers) {
                        headers.append(key, this._config.headers[key]);
                      }
                    }
                    if (dataSource.cors === false) {
                      params.mode = "same-origin";
                    }
                    if (dataSource.withCredentials) {
                      params.credentials = "include";
                    }
                    if (dataSource.referrerPolicy) {
                      params.referrerPolicy = dataSource.referrerPolicy;
                    }
                    if (self.AbortController) {
                      this._abortController = new self.AbortController();
                      params.signal = this._abortController.signal;
                    }
                    this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kConnecting;
                    self.fetch(seekConfig.url, params).then(function(res) {
                      if (_this._requestAbort) {
                        _this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kIdle;
                        res.body.cancel();
                        return;
                      }
                      if (res.ok && (res.status >= 200 && res.status <= 299)) {
                        if (res.url !== seekConfig.url) {
                          if (_this._onURLRedirect) {
                            var redirectedURL = _this._seekHandler.removeURLParameters(res.url);
                            _this._onURLRedirect(redirectedURL);
                          }
                        }
                        var lengthHeader = res.headers.get("Content-Length");
                        if (lengthHeader != null) {
                          _this._contentLength = parseInt(lengthHeader);
                          if (_this._contentLength !== 0) {
                            if (_this._onContentLengthKnown) {
                              _this._onContentLengthKnown(_this._contentLength);
                            }
                          }
                        }
                        return _this._pump.call(_this, res.body.getReader());
                      } else {
                        _this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kError;
                        if (_this._onError) {
                          _this._onError(_loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: res.status, msg: res.statusText });
                        } else {
                          throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeException("FetchStreamLoader: Http code invalid, " + res.status + " " + res.statusText);
                        }
                      }
                    }).catch(function(e) {
                      if (_this._abortController && _this._abortController.signal.aborted) {
                        return;
                      }
                      _this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kError;
                      if (_this._onError) {
                        _this._onError(_loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderErrors.EXCEPTION, { code: -1, msg: e.message });
                      } else {
                        throw e;
                      }
                    });
                  };
                  FetchStreamLoader2.prototype.abort = function() {
                    this._requestAbort = true;
                    if (this._status !== _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kBuffering || !_utils_browser_js__WEBPACK_IMPORTED_MODULE_0__.default.chrome) {
                      if (this._abortController) {
                        try {
                          this._abortController.abort();
                        } catch (e) {
                        }
                      }
                    }
                  };
                  FetchStreamLoader2.prototype._pump = function(reader) {
                    var _this = this;
                    return reader.read().then(function(result) {
                      if (result.done) {
                        if (_this._contentLength !== null && _this._receivedLength < _this._contentLength) {
                          _this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kError;
                          var type = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderErrors.EARLY_EOF;
                          var info = { code: -1, msg: "Fetch stream meet Early-EOF" };
                          if (_this._onError) {
                            _this._onError(type, info);
                          } else {
                            throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeException(info.msg);
                          }
                        } else {
                          _this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kComplete;
                          if (_this._onComplete) {
                            _this._onComplete(_this._range.from, _this._range.from + _this._receivedLength - 1);
                          }
                        }
                      } else {
                        if (_this._abortController && _this._abortController.signal.aborted) {
                          _this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kComplete;
                          return;
                        } else if (_this._requestAbort === true) {
                          _this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kComplete;
                          return reader.cancel();
                        }
                        _this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kBuffering;
                        var chunk = result.value.buffer;
                        var byteStart = _this._range.from + _this._receivedLength;
                        _this._receivedLength += chunk.byteLength;
                        if (_this._onDataArrival) {
                          _this._onDataArrival(chunk, byteStart, _this._receivedLength);
                        }
                        _this._pump(reader);
                      }
                    }).catch(function(e) {
                      if (_this._abortController && _this._abortController.signal.aborted) {
                        _this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kComplete;
                        return;
                      }
                      if (e.code === 11 && _utils_browser_js__WEBPACK_IMPORTED_MODULE_0__.default.msedge) {
                        return;
                      }
                      _this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kError;
                      var type = 0;
                      var info = null;
                      if ((e.code === 19 || e.message === "network error") && // NETWORK_ERR
                      (_this._contentLength === null || _this._contentLength !== null && _this._receivedLength < _this._contentLength)) {
                        type = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderErrors.EARLY_EOF;
                        info = { code: e.code, msg: "Fetch stream meet Early-EOF" };
                      } else {
                        type = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderErrors.EXCEPTION;
                        info = { code: e.code, msg: e.message };
                      }
                      if (_this._onError) {
                        _this._onError(type, info);
                      } else {
                        throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeException(info.msg);
                      }
                    });
                  };
                  return FetchStreamLoader2;
                }(_loader_js__WEBPACK_IMPORTED_MODULE_1__.BaseLoader)
              );
              __webpack_exports__2["default"] = FetchStreamLoader;
            }
          ),
          /***/
          "./src/io/io-controller.js": (
            /*!*********************************!*\
              !*** ./src/io/io-controller.js ***!
              \*********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              );
              var _speed_sampler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ./speed-sampler.js */
                "./src/io/speed-sampler.js"
              );
              var _loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ./loader.js */
                "./src/io/loader.js"
              );
              var _fetch_stream_loader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                /*! ./fetch-stream-loader.js */
                "./src/io/fetch-stream-loader.js"
              );
              var _xhr_moz_chunked_loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(
                /*! ./xhr-moz-chunked-loader.js */
                "./src/io/xhr-moz-chunked-loader.js"
              );
              var _xhr_range_loader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(
                /*! ./xhr-range-loader.js */
                "./src/io/xhr-range-loader.js"
              );
              var _websocket_loader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__2(
                /*! ./websocket-loader.js */
                "./src/io/websocket-loader.js"
              );
              var _range_seek_handler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__2(
                /*! ./range-seek-handler.js */
                "./src/io/range-seek-handler.js"
              );
              var _param_seek_handler_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__2(
                /*! ./param-seek-handler.js */
                "./src/io/param-seek-handler.js"
              );
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__2(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              var IOController = (
                /** @class */
                function() {
                  function IOController2(dataSource, config, extraData) {
                    this.TAG = "IOController";
                    this._config = config;
                    this._extraData = extraData;
                    this._stashInitialSize = 1024 * 384;
                    if (config.stashInitialSize != void 0 && config.stashInitialSize > 0) {
                      this._stashInitialSize = config.stashInitialSize;
                    }
                    this._stashUsed = 0;
                    this._stashSize = this._stashInitialSize;
                    this._bufferSize = 1024 * 1024 * 3;
                    this._stashBuffer = new ArrayBuffer(this._bufferSize);
                    this._stashByteStart = 0;
                    this._enableStash = true;
                    if (config.enableStashBuffer === false) {
                      this._enableStash = false;
                    }
                    this._loader = null;
                    this._loaderClass = null;
                    this._seekHandler = null;
                    this._dataSource = dataSource;
                    this._isWebSocketURL = /wss?:\/\/(.+?)/.test(dataSource.url);
                    this._refTotalLength = dataSource.filesize ? dataSource.filesize : null;
                    this._totalLength = this._refTotalLength;
                    this._fullRequestFlag = false;
                    this._currentRange = null;
                    this._redirectedURL = null;
                    this._speedNormalized = 0;
                    this._speedSampler = new _speed_sampler_js__WEBPACK_IMPORTED_MODULE_1__.default();
                    this._speedNormalizeList = [64, 128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096];
                    this._isEarlyEofReconnecting = false;
                    this._paused = false;
                    this._resumeFrom = 0;
                    this._onDataArrival = null;
                    this._onSeeked = null;
                    this._onError = null;
                    this._onComplete = null;
                    this._onRedirect = null;
                    this._onRecoveredEarlyEof = null;
                    this._selectSeekHandler();
                    this._selectLoader();
                    this._createLoader();
                  }
                  IOController2.prototype.destroy = function() {
                    if (this._loader.isWorking()) {
                      this._loader.abort();
                    }
                    this._loader.destroy();
                    this._loader = null;
                    this._loaderClass = null;
                    this._dataSource = null;
                    this._stashBuffer = null;
                    this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0;
                    this._currentRange = null;
                    this._speedSampler = null;
                    this._isEarlyEofReconnecting = false;
                    this._onDataArrival = null;
                    this._onSeeked = null;
                    this._onError = null;
                    this._onComplete = null;
                    this._onRedirect = null;
                    this._onRecoveredEarlyEof = null;
                    this._extraData = null;
                  };
                  IOController2.prototype.isWorking = function() {
                    return this._loader && this._loader.isWorking() && !this._paused;
                  };
                  IOController2.prototype.isPaused = function() {
                    return this._paused;
                  };
                  Object.defineProperty(IOController2.prototype, "status", {
                    get: function() {
                      return this._loader.status;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(IOController2.prototype, "extraData", {
                    get: function() {
                      return this._extraData;
                    },
                    set: function(data) {
                      this._extraData = data;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(IOController2.prototype, "onDataArrival", {
                    // prototype: function onDataArrival(chunks: ArrayBuffer, byteStart: number): number
                    get: function() {
                      return this._onDataArrival;
                    },
                    set: function(callback) {
                      this._onDataArrival = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(IOController2.prototype, "onSeeked", {
                    get: function() {
                      return this._onSeeked;
                    },
                    set: function(callback) {
                      this._onSeeked = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(IOController2.prototype, "onError", {
                    // prototype: function onError(type: number, info: {code: number, msg: string}): void
                    get: function() {
                      return this._onError;
                    },
                    set: function(callback) {
                      this._onError = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(IOController2.prototype, "onComplete", {
                    get: function() {
                      return this._onComplete;
                    },
                    set: function(callback) {
                      this._onComplete = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(IOController2.prototype, "onRedirect", {
                    get: function() {
                      return this._onRedirect;
                    },
                    set: function(callback) {
                      this._onRedirect = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(IOController2.prototype, "onRecoveredEarlyEof", {
                    get: function() {
                      return this._onRecoveredEarlyEof;
                    },
                    set: function(callback) {
                      this._onRecoveredEarlyEof = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(IOController2.prototype, "currentURL", {
                    get: function() {
                      return this._dataSource.url;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(IOController2.prototype, "hasRedirect", {
                    get: function() {
                      return this._redirectedURL != null || this._dataSource.redirectedURL != void 0;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(IOController2.prototype, "currentRedirectedURL", {
                    get: function() {
                      return this._redirectedURL || this._dataSource.redirectedURL;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(IOController2.prototype, "currentSpeed", {
                    // in KB/s
                    get: function() {
                      if (this._loaderClass === _xhr_range_loader_js__WEBPACK_IMPORTED_MODULE_5__.default) {
                        return this._loader.currentSpeed;
                      }
                      return this._speedSampler.lastSecondKBps;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(IOController2.prototype, "loaderType", {
                    get: function() {
                      return this._loader.type;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  IOController2.prototype._selectSeekHandler = function() {
                    var config = this._config;
                    if (config.seekType === "range") {
                      this._seekHandler = new _range_seek_handler_js__WEBPACK_IMPORTED_MODULE_7__.default(this._config.rangeLoadZeroStart);
                    } else if (config.seekType === "param") {
                      var paramStart = config.seekParamStart || "bstart";
                      var paramEnd = config.seekParamEnd || "bend";
                      this._seekHandler = new _param_seek_handler_js__WEBPACK_IMPORTED_MODULE_8__.default(paramStart, paramEnd);
                    } else if (config.seekType === "custom") {
                      if (typeof config.customSeekHandler !== "function") {
                        throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_9__.InvalidArgumentException("Custom seekType specified in config but invalid customSeekHandler!");
                      }
                      this._seekHandler = new config.customSeekHandler();
                    } else {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_9__.InvalidArgumentException("Invalid seekType in config: " + config.seekType);
                    }
                  };
                  IOController2.prototype._selectLoader = function() {
                    if (this._config.customLoader != null) {
                      this._loaderClass = this._config.customLoader;
                    } else if (this._isWebSocketURL) {
                      this._loaderClass = _websocket_loader_js__WEBPACK_IMPORTED_MODULE_6__.default;
                    } else if (_fetch_stream_loader_js__WEBPACK_IMPORTED_MODULE_3__.default.isSupported()) {
                      this._loaderClass = _fetch_stream_loader_js__WEBPACK_IMPORTED_MODULE_3__.default;
                    } else if (_xhr_moz_chunked_loader_js__WEBPACK_IMPORTED_MODULE_4__.default.isSupported()) {
                      this._loaderClass = _xhr_moz_chunked_loader_js__WEBPACK_IMPORTED_MODULE_4__.default;
                    } else if (_xhr_range_loader_js__WEBPACK_IMPORTED_MODULE_5__.default.isSupported()) {
                      this._loaderClass = _xhr_range_loader_js__WEBPACK_IMPORTED_MODULE_5__.default;
                    } else {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_9__.RuntimeException("Your browser doesn't support xhr with arraybuffer responseType!");
                    }
                  };
                  IOController2.prototype._createLoader = function() {
                    this._loader = new this._loaderClass(this._seekHandler, this._config);
                    if (this._loader.needStashBuffer === false) {
                      this._enableStash = false;
                    }
                    this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this);
                    this._loader.onURLRedirect = this._onURLRedirect.bind(this);
                    this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this);
                    this._loader.onComplete = this._onLoaderComplete.bind(this);
                    this._loader.onError = this._onLoaderError.bind(this);
                  };
                  IOController2.prototype.open = function(optionalFrom) {
                    this._currentRange = { from: 0, to: -1 };
                    if (optionalFrom) {
                      this._currentRange.from = optionalFrom;
                    }
                    this._speedSampler.reset();
                    if (!optionalFrom) {
                      this._fullRequestFlag = true;
                    }
                    this._loader.open(this._dataSource, Object.assign({}, this._currentRange));
                  };
                  IOController2.prototype.abort = function() {
                    this._loader.abort();
                    if (this._paused) {
                      this._paused = false;
                      this._resumeFrom = 0;
                    }
                  };
                  IOController2.prototype.pause = function() {
                    if (this.isWorking()) {
                      this._loader.abort();
                      if (this._stashUsed !== 0) {
                        this._resumeFrom = this._stashByteStart;
                        this._currentRange.to = this._stashByteStart - 1;
                      } else {
                        this._resumeFrom = this._currentRange.to + 1;
                      }
                      this._stashUsed = 0;
                      this._stashByteStart = 0;
                      this._paused = true;
                    }
                  };
                  IOController2.prototype.resume = function() {
                    if (this._paused) {
                      this._paused = false;
                      var bytes = this._resumeFrom;
                      this._resumeFrom = 0;
                      this._internalSeek(bytes, true);
                    }
                  };
                  IOController2.prototype.seek = function(bytes) {
                    this._paused = false;
                    this._stashUsed = 0;
                    this._stashByteStart = 0;
                    this._internalSeek(bytes, true);
                  };
                  IOController2.prototype._internalSeek = function(bytes, dropUnconsumed) {
                    if (this._loader.isWorking()) {
                      this._loader.abort();
                    }
                    this._flushStashBuffer(dropUnconsumed);
                    this._loader.destroy();
                    this._loader = null;
                    var requestRange = { from: bytes, to: -1 };
                    this._currentRange = { from: requestRange.from, to: -1 };
                    this._speedSampler.reset();
                    this._stashSize = this._stashInitialSize;
                    this._createLoader();
                    this._loader.open(this._dataSource, requestRange);
                    if (this._onSeeked) {
                      this._onSeeked();
                    }
                  };
                  IOController2.prototype.updateUrl = function(url) {
                    if (!url || typeof url !== "string" || url.length === 0) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_9__.InvalidArgumentException("Url must be a non-empty string!");
                    }
                    this._dataSource.url = url;
                  };
                  IOController2.prototype._expandBuffer = function(expectedBytes) {
                    var bufferNewSize = this._stashSize;
                    while (bufferNewSize + 1024 * 1024 * 1 < expectedBytes) {
                      bufferNewSize *= 2;
                    }
                    bufferNewSize += 1024 * 1024 * 1;
                    if (bufferNewSize === this._bufferSize) {
                      return;
                    }
                    var newBuffer = new ArrayBuffer(bufferNewSize);
                    if (this._stashUsed > 0) {
                      var stashOldArray = new Uint8Array(this._stashBuffer, 0, this._stashUsed);
                      var stashNewArray = new Uint8Array(newBuffer, 0, bufferNewSize);
                      stashNewArray.set(stashOldArray, 0);
                    }
                    this._stashBuffer = newBuffer;
                    this._bufferSize = bufferNewSize;
                  };
                  IOController2.prototype._normalizeSpeed = function(input) {
                    var list = this._speedNormalizeList;
                    var last = list.length - 1;
                    var mid = 0;
                    var lbound = 0;
                    var ubound = last;
                    if (input < list[0]) {
                      return list[0];
                    }
                    while (lbound <= ubound) {
                      mid = lbound + Math.floor((ubound - lbound) / 2);
                      if (mid === last || input >= list[mid] && input < list[mid + 1]) {
                        return list[mid];
                      } else if (list[mid] < input) {
                        lbound = mid + 1;
                      } else {
                        ubound = mid - 1;
                      }
                    }
                  };
                  IOController2.prototype._adjustStashSize = function(normalized) {
                    var stashSizeKB = 0;
                    if (this._config.isLive) {
                      stashSizeKB = normalized;
                    } else {
                      if (normalized < 512) {
                        stashSizeKB = normalized;
                      } else if (normalized >= 512 && normalized <= 1024) {
                        stashSizeKB = Math.floor(normalized * 1.5);
                      } else {
                        stashSizeKB = normalized * 2;
                      }
                    }
                    if (stashSizeKB > 8192) {
                      stashSizeKB = 8192;
                    }
                    var bufferSize = stashSizeKB * 1024 + 1024 * 1024 * 1;
                    if (this._bufferSize < bufferSize) {
                      this._expandBuffer(bufferSize);
                    }
                    this._stashSize = stashSizeKB * 1024;
                  };
                  IOController2.prototype._dispatchChunks = function(chunks, byteStart) {
                    this._currentRange.to = byteStart + chunks.byteLength - 1;
                    return this._onDataArrival(chunks, byteStart);
                  };
                  IOController2.prototype._onURLRedirect = function(redirectedURL) {
                    this._redirectedURL = redirectedURL;
                    if (this._onRedirect) {
                      this._onRedirect(redirectedURL);
                    }
                  };
                  IOController2.prototype._onContentLengthKnown = function(contentLength) {
                    if (contentLength && this._fullRequestFlag) {
                      this._totalLength = contentLength;
                      this._fullRequestFlag = false;
                    }
                  };
                  IOController2.prototype._onLoaderChunkArrival = function(chunk, byteStart, receivedLength) {
                    if (!this._onDataArrival) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_9__.IllegalStateException("IOController: No existing consumer (onDataArrival) callback!");
                    }
                    if (this._paused) {
                      return;
                    }
                    if (this._isEarlyEofReconnecting) {
                      this._isEarlyEofReconnecting = false;
                      if (this._onRecoveredEarlyEof) {
                        this._onRecoveredEarlyEof();
                      }
                    }
                    this._speedSampler.addBytes(chunk.byteLength);
                    var KBps = this._speedSampler.lastSecondKBps;
                    if (KBps !== 0) {
                      var normalized = this._normalizeSpeed(KBps);
                      if (this._speedNormalized !== normalized) {
                        this._speedNormalized = normalized;
                        this._adjustStashSize(normalized);
                      }
                    }
                    if (!this._enableStash) {
                      if (this._stashUsed === 0) {
                        var consumed = this._dispatchChunks(chunk, byteStart);
                        if (consumed < chunk.byteLength) {
                          var remain = chunk.byteLength - consumed;
                          if (remain > this._bufferSize) {
                            this._expandBuffer(remain);
                          }
                          var stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                          stashArray.set(new Uint8Array(chunk, consumed), 0);
                          this._stashUsed += remain;
                          this._stashByteStart = byteStart + consumed;
                        }
                      } else {
                        if (this._stashUsed + chunk.byteLength > this._bufferSize) {
                          this._expandBuffer(this._stashUsed + chunk.byteLength);
                        }
                        var stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                        stashArray.set(new Uint8Array(chunk), this._stashUsed);
                        this._stashUsed += chunk.byteLength;
                        var consumed = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart);
                        if (consumed < this._stashUsed && consumed > 0) {
                          var remainArray = new Uint8Array(this._stashBuffer, consumed);
                          stashArray.set(remainArray, 0);
                        }
                        this._stashUsed -= consumed;
                        this._stashByteStart += consumed;
                      }
                    } else {
                      if (this._stashUsed === 0 && this._stashByteStart === 0) {
                        this._stashByteStart = byteStart;
                      }
                      if (this._stashUsed + chunk.byteLength <= this._stashSize) {
                        var stashArray = new Uint8Array(this._stashBuffer, 0, this._stashSize);
                        stashArray.set(new Uint8Array(chunk), this._stashUsed);
                        this._stashUsed += chunk.byteLength;
                      } else {
                        var stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                        if (this._stashUsed > 0) {
                          var buffer = this._stashBuffer.slice(0, this._stashUsed);
                          var consumed = this._dispatchChunks(buffer, this._stashByteStart);
                          if (consumed < buffer.byteLength) {
                            if (consumed > 0) {
                              var remainArray = new Uint8Array(buffer, consumed);
                              stashArray.set(remainArray, 0);
                              this._stashUsed = remainArray.byteLength;
                              this._stashByteStart += consumed;
                            }
                          } else {
                            this._stashUsed = 0;
                            this._stashByteStart += consumed;
                          }
                          if (this._stashUsed + chunk.byteLength > this._bufferSize) {
                            this._expandBuffer(this._stashUsed + chunk.byteLength);
                            stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                          }
                          stashArray.set(new Uint8Array(chunk), this._stashUsed);
                          this._stashUsed += chunk.byteLength;
                        } else {
                          var consumed = this._dispatchChunks(chunk, byteStart);
                          if (consumed < chunk.byteLength) {
                            var remain = chunk.byteLength - consumed;
                            if (remain > this._bufferSize) {
                              this._expandBuffer(remain);
                              stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                            }
                            stashArray.set(new Uint8Array(chunk, consumed), 0);
                            this._stashUsed += remain;
                            this._stashByteStart = byteStart + consumed;
                          }
                        }
                      }
                    }
                  };
                  IOController2.prototype._flushStashBuffer = function(dropUnconsumed) {
                    if (this._stashUsed > 0) {
                      var buffer = this._stashBuffer.slice(0, this._stashUsed);
                      var consumed = this._dispatchChunks(buffer, this._stashByteStart);
                      var remain = buffer.byteLength - consumed;
                      if (consumed < buffer.byteLength) {
                        if (dropUnconsumed) {
                          _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, remain + " bytes unconsumed data remain when flush buffer, dropped");
                        } else {
                          if (consumed > 0) {
                            var stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                            var remainArray = new Uint8Array(buffer, consumed);
                            stashArray.set(remainArray, 0);
                            this._stashUsed = remainArray.byteLength;
                            this._stashByteStart += consumed;
                          }
                          return 0;
                        }
                      }
                      this._stashUsed = 0;
                      this._stashByteStart = 0;
                      return remain;
                    }
                    return 0;
                  };
                  IOController2.prototype._onLoaderComplete = function(from, to) {
                    this._flushStashBuffer(true);
                    if (this._onComplete) {
                      this._onComplete(this._extraData);
                    }
                  };
                  IOController2.prototype._onLoaderError = function(type, data) {
                    _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.e(this.TAG, "Loader error, code = " + data.code + ", msg = " + data.msg);
                    this._flushStashBuffer(false);
                    if (this._isEarlyEofReconnecting) {
                      this._isEarlyEofReconnecting = false;
                      type = _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderErrors.UNRECOVERABLE_EARLY_EOF;
                    }
                    switch (type) {
                      case _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderErrors.EARLY_EOF: {
                        if (!this._config.isLive) {
                          if (this._totalLength) {
                            var nextFrom = this._currentRange.to + 1;
                            if (nextFrom < this._totalLength) {
                              _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Connection lost, trying reconnect...");
                              this._isEarlyEofReconnecting = true;
                              this._internalSeek(nextFrom, false);
                            }
                            return;
                          }
                        }
                        type = _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderErrors.UNRECOVERABLE_EARLY_EOF;
                        break;
                      }
                      case _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderErrors.UNRECOVERABLE_EARLY_EOF:
                      case _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderErrors.CONNECTING_TIMEOUT:
                      case _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderErrors.HTTP_STATUS_CODE_INVALID:
                      case _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderErrors.EXCEPTION:
                        break;
                    }
                    if (this._onError) {
                      this._onError(type, data);
                    } else {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_9__.RuntimeException("IOException: " + data.msg);
                    }
                  };
                  return IOController2;
                }()
              );
              __webpack_exports__2["default"] = IOController;
            }
          ),
          /***/
          "./src/io/loader.js": (
            /*!**************************!*\
              !*** ./src/io/loader.js ***!
              \**************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "LoaderStatus": function() {
                  return (
                    /* binding */
                    LoaderStatus
                  );
                },
                /* harmony export */
                "LoaderErrors": function() {
                  return (
                    /* binding */
                    LoaderErrors
                  );
                },
                /* harmony export */
                "BaseLoader": function() {
                  return (
                    /* binding */
                    BaseLoader
                  );
                }
                /* harmony export */
              });
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              var LoaderStatus = {
                kIdle: 0,
                kConnecting: 1,
                kBuffering: 2,
                kError: 3,
                kComplete: 4
              };
              var LoaderErrors = {
                OK: "OK",
                EXCEPTION: "Exception",
                HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid",
                CONNECTING_TIMEOUT: "ConnectingTimeout",
                EARLY_EOF: "EarlyEof",
                UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof"
              };
              var BaseLoader = (
                /** @class */
                function() {
                  function BaseLoader2(typeName) {
                    this._type = typeName || "undefined";
                    this._status = LoaderStatus.kIdle;
                    this._needStash = false;
                    this._onContentLengthKnown = null;
                    this._onURLRedirect = null;
                    this._onDataArrival = null;
                    this._onError = null;
                    this._onComplete = null;
                  }
                  BaseLoader2.prototype.destroy = function() {
                    this._status = LoaderStatus.kIdle;
                    this._onContentLengthKnown = null;
                    this._onURLRedirect = null;
                    this._onDataArrival = null;
                    this._onError = null;
                    this._onComplete = null;
                  };
                  BaseLoader2.prototype.isWorking = function() {
                    return this._status === LoaderStatus.kConnecting || this._status === LoaderStatus.kBuffering;
                  };
                  Object.defineProperty(BaseLoader2.prototype, "type", {
                    get: function() {
                      return this._type;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(BaseLoader2.prototype, "status", {
                    get: function() {
                      return this._status;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(BaseLoader2.prototype, "needStashBuffer", {
                    get: function() {
                      return this._needStash;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(BaseLoader2.prototype, "onContentLengthKnown", {
                    get: function() {
                      return this._onContentLengthKnown;
                    },
                    set: function(callback) {
                      this._onContentLengthKnown = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(BaseLoader2.prototype, "onURLRedirect", {
                    get: function() {
                      return this._onURLRedirect;
                    },
                    set: function(callback) {
                      this._onURLRedirect = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(BaseLoader2.prototype, "onDataArrival", {
                    get: function() {
                      return this._onDataArrival;
                    },
                    set: function(callback) {
                      this._onDataArrival = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(BaseLoader2.prototype, "onError", {
                    get: function() {
                      return this._onError;
                    },
                    set: function(callback) {
                      this._onError = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(BaseLoader2.prototype, "onComplete", {
                    get: function() {
                      return this._onComplete;
                    },
                    set: function(callback) {
                      this._onComplete = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  BaseLoader2.prototype.open = function(dataSource, range) {
                    throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_0__.NotImplementedException("Unimplemented abstract function!");
                  };
                  BaseLoader2.prototype.abort = function() {
                    throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_0__.NotImplementedException("Unimplemented abstract function!");
                  };
                  return BaseLoader2;
                }()
              );
            }
          ),
          /***/
          "./src/io/param-seek-handler.js": (
            /*!**************************************!*\
              !*** ./src/io/param-seek-handler.js ***!
              \**************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var ParamSeekHandler = (
                /** @class */
                function() {
                  function ParamSeekHandler2(paramStart, paramEnd) {
                    this._startName = paramStart;
                    this._endName = paramEnd;
                  }
                  ParamSeekHandler2.prototype.getConfig = function(baseUrl, range) {
                    var url = baseUrl;
                    if (range.from !== 0 || range.to !== -1) {
                      var needAnd = true;
                      if (url.indexOf("?") === -1) {
                        url += "?";
                        needAnd = false;
                      }
                      if (needAnd) {
                        url += "&";
                      }
                      url += this._startName + "=" + range.from.toString();
                      if (range.to !== -1) {
                        url += "&" + this._endName + "=" + range.to.toString();
                      }
                    }
                    return {
                      url,
                      headers: {}
                    };
                  };
                  ParamSeekHandler2.prototype.removeURLParameters = function(seekedURL) {
                    var baseURL = seekedURL.split("?")[0];
                    var params = void 0;
                    var queryIndex = seekedURL.indexOf("?");
                    if (queryIndex !== -1) {
                      params = seekedURL.substring(queryIndex + 1);
                    }
                    var resultParams = "";
                    if (params != void 0 && params.length > 0) {
                      var pairs = params.split("&");
                      for (var i = 0; i < pairs.length; i++) {
                        var pair = pairs[i].split("=");
                        var requireAnd = i > 0;
                        if (pair[0] !== this._startName && pair[0] !== this._endName) {
                          if (requireAnd) {
                            resultParams += "&";
                          }
                          resultParams += pairs[i];
                        }
                      }
                    }
                    return resultParams.length === 0 ? baseURL : baseURL + "?" + resultParams;
                  };
                  return ParamSeekHandler2;
                }()
              );
              __webpack_exports__2["default"] = ParamSeekHandler;
            }
          ),
          /***/
          "./src/io/range-seek-handler.js": (
            /*!**************************************!*\
              !*** ./src/io/range-seek-handler.js ***!
              \**************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var RangeSeekHandler = (
                /** @class */
                function() {
                  function RangeSeekHandler2(zeroStart) {
                    this._zeroStart = zeroStart || false;
                  }
                  RangeSeekHandler2.prototype.getConfig = function(url, range) {
                    var headers = {};
                    if (range.from !== 0 || range.to !== -1) {
                      var param = void 0;
                      if (range.to !== -1) {
                        param = "bytes=" + range.from.toString() + "-" + range.to.toString();
                      } else {
                        param = "bytes=" + range.from.toString() + "-";
                      }
                      headers["Range"] = param;
                    } else if (this._zeroStart) {
                      headers["Range"] = "bytes=0-";
                    }
                    return {
                      url,
                      headers
                    };
                  };
                  RangeSeekHandler2.prototype.removeURLParameters = function(seekedURL) {
                    return seekedURL;
                  };
                  return RangeSeekHandler2;
                }()
              );
              __webpack_exports__2["default"] = RangeSeekHandler;
            }
          ),
          /***/
          "./src/io/speed-sampler.js": (
            /*!*********************************!*\
              !*** ./src/io/speed-sampler.js ***!
              \*********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var SpeedSampler = (
                /** @class */
                function() {
                  function SpeedSampler2() {
                    this._firstCheckpoint = 0;
                    this._lastCheckpoint = 0;
                    this._intervalBytes = 0;
                    this._totalBytes = 0;
                    this._lastSecondBytes = 0;
                    if (self.performance && self.performance.now) {
                      this._now = self.performance.now.bind(self.performance);
                    } else {
                      this._now = Date.now;
                    }
                  }
                  SpeedSampler2.prototype.reset = function() {
                    this._firstCheckpoint = this._lastCheckpoint = 0;
                    this._totalBytes = this._intervalBytes = 0;
                    this._lastSecondBytes = 0;
                  };
                  SpeedSampler2.prototype.addBytes = function(bytes) {
                    if (this._firstCheckpoint === 0) {
                      this._firstCheckpoint = this._now();
                      this._lastCheckpoint = this._firstCheckpoint;
                      this._intervalBytes += bytes;
                      this._totalBytes += bytes;
                    } else if (this._now() - this._lastCheckpoint < 1e3) {
                      this._intervalBytes += bytes;
                      this._totalBytes += bytes;
                    } else {
                      this._lastSecondBytes = this._intervalBytes;
                      this._intervalBytes = bytes;
                      this._totalBytes += bytes;
                      this._lastCheckpoint = this._now();
                    }
                  };
                  Object.defineProperty(SpeedSampler2.prototype, "currentKBps", {
                    get: function() {
                      this.addBytes(0);
                      var durationSeconds = (this._now() - this._lastCheckpoint) / 1e3;
                      if (durationSeconds == 0)
                        durationSeconds = 1;
                      return this._intervalBytes / durationSeconds / 1024;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(SpeedSampler2.prototype, "lastSecondKBps", {
                    get: function() {
                      this.addBytes(0);
                      if (this._lastSecondBytes !== 0) {
                        return this._lastSecondBytes / 1024;
                      } else {
                        if (this._now() - this._lastCheckpoint >= 500) {
                          return this.currentKBps;
                        } else {
                          return 0;
                        }
                      }
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(SpeedSampler2.prototype, "averageKBps", {
                    get: function() {
                      var durationSeconds = (this._now() - this._firstCheckpoint) / 1e3;
                      return this._totalBytes / durationSeconds / 1024;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  return SpeedSampler2;
                }()
              );
              __webpack_exports__2["default"] = SpeedSampler;
            }
          ),
          /***/
          "./src/io/websocket-loader.js": (
            /*!************************************!*\
              !*** ./src/io/websocket-loader.js ***!
              \************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var _loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ./loader.js */
                "./src/io/loader.js"
              );
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              var __extends = /* @__PURE__ */ function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  if (typeof b !== "function" && b !== null)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              }();
              var WebSocketLoader = (
                /** @class */
                function(_super) {
                  __extends(WebSocketLoader2, _super);
                  function WebSocketLoader2() {
                    var _this = _super.call(this, "websocket-loader") || this;
                    _this.TAG = "WebSocketLoader";
                    _this._needStash = true;
                    _this._ws = null;
                    _this._requestAbort = false;
                    _this._receivedLength = 0;
                    return _this;
                  }
                  WebSocketLoader2.isSupported = function() {
                    try {
                      return typeof self.WebSocket !== "undefined";
                    } catch (e) {
                      return false;
                    }
                  };
                  WebSocketLoader2.prototype.destroy = function() {
                    if (this._ws) {
                      this.abort();
                    }
                    _super.prototype.destroy.call(this);
                  };
                  WebSocketLoader2.prototype.open = function(dataSource) {
                    try {
                      var ws = this._ws = new self.WebSocket(dataSource.url);
                      ws.binaryType = "arraybuffer";
                      ws.onopen = this._onWebSocketOpen.bind(this);
                      ws.onclose = this._onWebSocketClose.bind(this);
                      ws.onmessage = this._onWebSocketMessage.bind(this);
                      ws.onerror = this._onWebSocketError.bind(this);
                      this._status = _loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderStatus.kConnecting;
                    } catch (e) {
                      this._status = _loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderStatus.kError;
                      var info = { code: e.code, msg: e.message };
                      if (this._onError) {
                        this._onError(_loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderErrors.EXCEPTION, info);
                      } else {
                        throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeException(info.msg);
                      }
                    }
                  };
                  WebSocketLoader2.prototype.abort = function() {
                    var ws = this._ws;
                    if (ws && (ws.readyState === 0 || ws.readyState === 1)) {
                      this._requestAbort = true;
                      ws.close();
                    }
                    this._ws = null;
                    this._status = _loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderStatus.kComplete;
                  };
                  WebSocketLoader2.prototype._onWebSocketOpen = function(e) {
                    this._status = _loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderStatus.kBuffering;
                  };
                  WebSocketLoader2.prototype._onWebSocketClose = function(e) {
                    if (this._requestAbort === true) {
                      this._requestAbort = false;
                      return;
                    }
                    this._status = _loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderStatus.kComplete;
                    if (this._onComplete) {
                      this._onComplete(0, this._receivedLength - 1);
                    }
                  };
                  WebSocketLoader2.prototype._onWebSocketMessage = function(e) {
                    var _this = this;
                    if (e.data instanceof ArrayBuffer) {
                      this._dispatchArrayBuffer(e.data);
                    } else if (e.data instanceof Blob) {
                      var reader_1 = new FileReader();
                      reader_1.onload = function() {
                        _this._dispatchArrayBuffer(reader_1.result);
                      };
                      reader_1.readAsArrayBuffer(e.data);
                    } else {
                      this._status = _loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderStatus.kError;
                      var info = { code: -1, msg: "Unsupported WebSocket message type: " + e.data.constructor.name };
                      if (this._onError) {
                        this._onError(_loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderErrors.EXCEPTION, info);
                      } else {
                        throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeException(info.msg);
                      }
                    }
                  };
                  WebSocketLoader2.prototype._dispatchArrayBuffer = function(arraybuffer) {
                    var chunk = arraybuffer;
                    var byteStart = this._receivedLength;
                    this._receivedLength += chunk.byteLength;
                    if (this._onDataArrival) {
                      this._onDataArrival(chunk, byteStart, this._receivedLength);
                    }
                  };
                  WebSocketLoader2.prototype._onWebSocketError = function(e) {
                    this._status = _loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderStatus.kError;
                    var info = {
                      code: e.code,
                      msg: e.message
                    };
                    if (this._onError) {
                      this._onError(_loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderErrors.EXCEPTION, info);
                    } else {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeException(info.msg);
                    }
                  };
                  return WebSocketLoader2;
                }(_loader_js__WEBPACK_IMPORTED_MODULE_0__.BaseLoader)
              );
              __webpack_exports__2["default"] = WebSocketLoader;
            }
          ),
          /***/
          "./src/io/xhr-moz-chunked-loader.js": (
            /*!******************************************!*\
              !*** ./src/io/xhr-moz-chunked-loader.js ***!
              \******************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              );
              var _loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ./loader.js */
                "./src/io/loader.js"
              );
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              var __extends = /* @__PURE__ */ function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  if (typeof b !== "function" && b !== null)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              }();
              var MozChunkedLoader = (
                /** @class */
                function(_super) {
                  __extends(MozChunkedLoader2, _super);
                  function MozChunkedLoader2(seekHandler, config) {
                    var _this = _super.call(this, "xhr-moz-chunked-loader") || this;
                    _this.TAG = "MozChunkedLoader";
                    _this._seekHandler = seekHandler;
                    _this._config = config;
                    _this._needStash = true;
                    _this._xhr = null;
                    _this._requestAbort = false;
                    _this._contentLength = null;
                    _this._receivedLength = 0;
                    return _this;
                  }
                  MozChunkedLoader2.isSupported = function() {
                    try {
                      var xhr = new XMLHttpRequest();
                      xhr.open("GET", "https://example.com", true);
                      xhr.responseType = "moz-chunked-arraybuffer";
                      return xhr.responseType === "moz-chunked-arraybuffer";
                    } catch (e) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w("MozChunkedLoader", e.message);
                      return false;
                    }
                  };
                  MozChunkedLoader2.prototype.destroy = function() {
                    if (this.isWorking()) {
                      this.abort();
                    }
                    if (this._xhr) {
                      this._xhr.onreadystatechange = null;
                      this._xhr.onprogress = null;
                      this._xhr.onloadend = null;
                      this._xhr.onerror = null;
                      this._xhr = null;
                    }
                    _super.prototype.destroy.call(this);
                  };
                  MozChunkedLoader2.prototype.open = function(dataSource, range) {
                    this._dataSource = dataSource;
                    this._range = range;
                    var sourceURL = dataSource.url;
                    if (this._config.reuseRedirectedURL && dataSource.redirectedURL != void 0) {
                      sourceURL = dataSource.redirectedURL;
                    }
                    var seekConfig = this._seekHandler.getConfig(sourceURL, range);
                    this._requestURL = seekConfig.url;
                    var xhr = this._xhr = new XMLHttpRequest();
                    xhr.open("GET", seekConfig.url, true);
                    xhr.responseType = "moz-chunked-arraybuffer";
                    xhr.onreadystatechange = this._onReadyStateChange.bind(this);
                    xhr.onprogress = this._onProgress.bind(this);
                    xhr.onloadend = this._onLoadEnd.bind(this);
                    xhr.onerror = this._onXhrError.bind(this);
                    if (dataSource.withCredentials) {
                      xhr.withCredentials = true;
                    }
                    if (typeof seekConfig.headers === "object") {
                      var headers = seekConfig.headers;
                      for (var key in headers) {
                        if (headers.hasOwnProperty(key)) {
                          xhr.setRequestHeader(key, headers[key]);
                        }
                      }
                    }
                    if (typeof this._config.headers === "object") {
                      var headers = this._config.headers;
                      for (var key in headers) {
                        if (headers.hasOwnProperty(key)) {
                          xhr.setRequestHeader(key, headers[key]);
                        }
                      }
                    }
                    this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kConnecting;
                    xhr.send();
                  };
                  MozChunkedLoader2.prototype.abort = function() {
                    this._requestAbort = true;
                    if (this._xhr) {
                      this._xhr.abort();
                    }
                    this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kComplete;
                  };
                  MozChunkedLoader2.prototype._onReadyStateChange = function(e) {
                    var xhr = e.target;
                    if (xhr.readyState === 2) {
                      if (xhr.responseURL != void 0 && xhr.responseURL !== this._requestURL) {
                        if (this._onURLRedirect) {
                          var redirectedURL = this._seekHandler.removeURLParameters(xhr.responseURL);
                          this._onURLRedirect(redirectedURL);
                        }
                      }
                      if (xhr.status !== 0 && (xhr.status < 200 || xhr.status > 299)) {
                        this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kError;
                        if (this._onError) {
                          this._onError(_loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: xhr.status, msg: xhr.statusText });
                        } else {
                          throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeException("MozChunkedLoader: Http code invalid, " + xhr.status + " " + xhr.statusText);
                        }
                      } else {
                        this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kBuffering;
                      }
                    }
                  };
                  MozChunkedLoader2.prototype._onProgress = function(e) {
                    if (this._status === _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kError) {
                      return;
                    }
                    if (this._contentLength === null) {
                      if (e.total !== null && e.total !== 0) {
                        this._contentLength = e.total;
                        if (this._onContentLengthKnown) {
                          this._onContentLengthKnown(this._contentLength);
                        }
                      }
                    }
                    var chunk = e.target.response;
                    var byteStart = this._range.from + this._receivedLength;
                    this._receivedLength += chunk.byteLength;
                    if (this._onDataArrival) {
                      this._onDataArrival(chunk, byteStart, this._receivedLength);
                    }
                  };
                  MozChunkedLoader2.prototype._onLoadEnd = function(e) {
                    if (this._requestAbort === true) {
                      this._requestAbort = false;
                      return;
                    } else if (this._status === _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kError) {
                      return;
                    }
                    this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kComplete;
                    if (this._onComplete) {
                      this._onComplete(this._range.from, this._range.from + this._receivedLength - 1);
                    }
                  };
                  MozChunkedLoader2.prototype._onXhrError = function(e) {
                    this._status = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderStatus.kError;
                    var type = 0;
                    var info = null;
                    if (this._contentLength && e.loaded < this._contentLength) {
                      type = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderErrors.EARLY_EOF;
                      info = { code: -1, msg: "Moz-Chunked stream meet Early-Eof" };
                    } else {
                      type = _loader_js__WEBPACK_IMPORTED_MODULE_1__.LoaderErrors.EXCEPTION;
                      info = { code: -1, msg: e.constructor.name + " " + e.type };
                    }
                    if (this._onError) {
                      this._onError(type, info);
                    } else {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeException(info.msg);
                    }
                  };
                  return MozChunkedLoader2;
                }(_loader_js__WEBPACK_IMPORTED_MODULE_1__.BaseLoader)
              );
              __webpack_exports__2["default"] = MozChunkedLoader;
            }
          ),
          /***/
          "./src/io/xhr-range-loader.js": (
            /*!************************************!*\
              !*** ./src/io/xhr-range-loader.js ***!
              \************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              );
              var _speed_sampler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ./speed-sampler.js */
                "./src/io/speed-sampler.js"
              );
              var _loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ./loader.js */
                "./src/io/loader.js"
              );
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              var __extends = /* @__PURE__ */ function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  if (typeof b !== "function" && b !== null)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              }();
              var RangeLoader = (
                /** @class */
                function(_super) {
                  __extends(RangeLoader2, _super);
                  function RangeLoader2(seekHandler, config) {
                    var _this = _super.call(this, "xhr-range-loader") || this;
                    _this.TAG = "RangeLoader";
                    _this._seekHandler = seekHandler;
                    _this._config = config;
                    _this._needStash = false;
                    _this._chunkSizeKBList = [
                      128,
                      256,
                      384,
                      512,
                      768,
                      1024,
                      1536,
                      2048,
                      3072,
                      4096,
                      5120,
                      6144,
                      7168,
                      8192
                    ];
                    _this._currentChunkSizeKB = 384;
                    _this._currentSpeedNormalized = 0;
                    _this._zeroSpeedChunkCount = 0;
                    _this._xhr = null;
                    _this._speedSampler = new _speed_sampler_js__WEBPACK_IMPORTED_MODULE_1__.default();
                    _this._requestAbort = false;
                    _this._waitForTotalLength = false;
                    _this._totalLengthReceived = false;
                    _this._currentRequestURL = null;
                    _this._currentRedirectedURL = null;
                    _this._currentRequestRange = null;
                    _this._totalLength = null;
                    _this._contentLength = null;
                    _this._receivedLength = 0;
                    _this._lastTimeLoaded = 0;
                    return _this;
                  }
                  RangeLoader2.isSupported = function() {
                    try {
                      var xhr = new XMLHttpRequest();
                      xhr.open("GET", "https://example.com", true);
                      xhr.responseType = "arraybuffer";
                      return xhr.responseType === "arraybuffer";
                    } catch (e) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w("RangeLoader", e.message);
                      return false;
                    }
                  };
                  RangeLoader2.prototype.destroy = function() {
                    if (this.isWorking()) {
                      this.abort();
                    }
                    if (this._xhr) {
                      this._xhr.onreadystatechange = null;
                      this._xhr.onprogress = null;
                      this._xhr.onload = null;
                      this._xhr.onerror = null;
                      this._xhr = null;
                    }
                    _super.prototype.destroy.call(this);
                  };
                  Object.defineProperty(RangeLoader2.prototype, "currentSpeed", {
                    get: function() {
                      return this._speedSampler.lastSecondKBps;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  RangeLoader2.prototype.open = function(dataSource, range) {
                    this._dataSource = dataSource;
                    this._range = range;
                    this._status = _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderStatus.kConnecting;
                    var useRefTotalLength = false;
                    if (this._dataSource.filesize != void 0 && this._dataSource.filesize !== 0) {
                      useRefTotalLength = true;
                      this._totalLength = this._dataSource.filesize;
                    }
                    if (!this._totalLengthReceived && !useRefTotalLength) {
                      this._waitForTotalLength = true;
                      this._internalOpen(this._dataSource, { from: 0, to: -1 });
                    } else {
                      this._openSubRange();
                    }
                  };
                  RangeLoader2.prototype._openSubRange = function() {
                    var chunkSize = this._currentChunkSizeKB * 1024;
                    var from = this._range.from + this._receivedLength;
                    var to = from + chunkSize;
                    if (this._contentLength != null) {
                      if (to - this._range.from >= this._contentLength) {
                        to = this._range.from + this._contentLength - 1;
                      }
                    }
                    this._currentRequestRange = { from, to };
                    this._internalOpen(this._dataSource, this._currentRequestRange);
                  };
                  RangeLoader2.prototype._internalOpen = function(dataSource, range) {
                    this._lastTimeLoaded = 0;
                    var sourceURL = dataSource.url;
                    if (this._config.reuseRedirectedURL) {
                      if (this._currentRedirectedURL != void 0) {
                        sourceURL = this._currentRedirectedURL;
                      } else if (dataSource.redirectedURL != void 0) {
                        sourceURL = dataSource.redirectedURL;
                      }
                    }
                    var seekConfig = this._seekHandler.getConfig(sourceURL, range);
                    this._currentRequestURL = seekConfig.url;
                    var xhr = this._xhr = new XMLHttpRequest();
                    xhr.open("GET", seekConfig.url, true);
                    xhr.responseType = "arraybuffer";
                    xhr.onreadystatechange = this._onReadyStateChange.bind(this);
                    xhr.onprogress = this._onProgress.bind(this);
                    xhr.onload = this._onLoad.bind(this);
                    xhr.onerror = this._onXhrError.bind(this);
                    if (dataSource.withCredentials) {
                      xhr.withCredentials = true;
                    }
                    if (typeof seekConfig.headers === "object") {
                      var headers = seekConfig.headers;
                      for (var key in headers) {
                        if (headers.hasOwnProperty(key)) {
                          xhr.setRequestHeader(key, headers[key]);
                        }
                      }
                    }
                    if (typeof this._config.headers === "object") {
                      var headers = this._config.headers;
                      for (var key in headers) {
                        if (headers.hasOwnProperty(key)) {
                          xhr.setRequestHeader(key, headers[key]);
                        }
                      }
                    }
                    xhr.send();
                  };
                  RangeLoader2.prototype.abort = function() {
                    this._requestAbort = true;
                    this._internalAbort();
                    this._status = _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderStatus.kComplete;
                  };
                  RangeLoader2.prototype._internalAbort = function() {
                    if (this._xhr) {
                      this._xhr.onreadystatechange = null;
                      this._xhr.onprogress = null;
                      this._xhr.onload = null;
                      this._xhr.onerror = null;
                      this._xhr.abort();
                      this._xhr = null;
                    }
                  };
                  RangeLoader2.prototype._onReadyStateChange = function(e) {
                    var xhr = e.target;
                    if (xhr.readyState === 2) {
                      if (xhr.responseURL != void 0) {
                        var redirectedURL = this._seekHandler.removeURLParameters(xhr.responseURL);
                        if (xhr.responseURL !== this._currentRequestURL && redirectedURL !== this._currentRedirectedURL) {
                          this._currentRedirectedURL = redirectedURL;
                          if (this._onURLRedirect) {
                            this._onURLRedirect(redirectedURL);
                          }
                        }
                      }
                      if (xhr.status >= 200 && xhr.status <= 299) {
                        if (this._waitForTotalLength) {
                          return;
                        }
                        this._status = _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderStatus.kBuffering;
                      } else {
                        this._status = _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderStatus.kError;
                        if (this._onError) {
                          this._onError(_loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: xhr.status, msg: xhr.statusText });
                        } else {
                          throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeException("RangeLoader: Http code invalid, " + xhr.status + " " + xhr.statusText);
                        }
                      }
                    }
                  };
                  RangeLoader2.prototype._onProgress = function(e) {
                    if (this._status === _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderStatus.kError) {
                      return;
                    }
                    if (this._contentLength === null) {
                      var openNextRange = false;
                      if (this._waitForTotalLength) {
                        this._waitForTotalLength = false;
                        this._totalLengthReceived = true;
                        openNextRange = true;
                        var total = e.total;
                        this._internalAbort();
                        if (total != null & total !== 0) {
                          this._totalLength = total;
                        }
                      }
                      if (this._range.to === -1) {
                        this._contentLength = this._totalLength - this._range.from;
                      } else {
                        this._contentLength = this._range.to - this._range.from + 1;
                      }
                      if (openNextRange) {
                        this._openSubRange();
                        return;
                      }
                      if (this._onContentLengthKnown) {
                        this._onContentLengthKnown(this._contentLength);
                      }
                    }
                    var delta = e.loaded - this._lastTimeLoaded;
                    this._lastTimeLoaded = e.loaded;
                    this._speedSampler.addBytes(delta);
                  };
                  RangeLoader2.prototype._normalizeSpeed = function(input) {
                    var list = this._chunkSizeKBList;
                    var last = list.length - 1;
                    var mid = 0;
                    var lbound = 0;
                    var ubound = last;
                    if (input < list[0]) {
                      return list[0];
                    }
                    while (lbound <= ubound) {
                      mid = lbound + Math.floor((ubound - lbound) / 2);
                      if (mid === last || input >= list[mid] && input < list[mid + 1]) {
                        return list[mid];
                      } else if (list[mid] < input) {
                        lbound = mid + 1;
                      } else {
                        ubound = mid - 1;
                      }
                    }
                  };
                  RangeLoader2.prototype._onLoad = function(e) {
                    if (this._status === _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderStatus.kError) {
                      return;
                    }
                    if (this._waitForTotalLength) {
                      this._waitForTotalLength = false;
                      return;
                    }
                    this._lastTimeLoaded = 0;
                    var KBps = this._speedSampler.lastSecondKBps;
                    if (KBps === 0) {
                      this._zeroSpeedChunkCount++;
                      if (this._zeroSpeedChunkCount >= 3) {
                        KBps = this._speedSampler.currentKBps;
                      }
                    }
                    if (KBps !== 0) {
                      var normalized = this._normalizeSpeed(KBps);
                      if (this._currentSpeedNormalized !== normalized) {
                        this._currentSpeedNormalized = normalized;
                        this._currentChunkSizeKB = normalized;
                      }
                    }
                    var chunk = e.target.response;
                    var byteStart = this._range.from + this._receivedLength;
                    this._receivedLength += chunk.byteLength;
                    var reportComplete = false;
                    if (this._contentLength != null && this._receivedLength < this._contentLength) {
                      this._openSubRange();
                    } else {
                      reportComplete = true;
                    }
                    if (this._onDataArrival) {
                      this._onDataArrival(chunk, byteStart, this._receivedLength);
                    }
                    if (reportComplete) {
                      this._status = _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderStatus.kComplete;
                      if (this._onComplete) {
                        this._onComplete(this._range.from, this._range.from + this._receivedLength - 1);
                      }
                    }
                  };
                  RangeLoader2.prototype._onXhrError = function(e) {
                    this._status = _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderStatus.kError;
                    var type = 0;
                    var info = null;
                    if (this._contentLength && this._receivedLength > 0 && this._receivedLength < this._contentLength) {
                      type = _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderErrors.EARLY_EOF;
                      info = { code: -1, msg: "RangeLoader meet Early-Eof" };
                    } else {
                      type = _loader_js__WEBPACK_IMPORTED_MODULE_2__.LoaderErrors.EXCEPTION;
                      info = { code: -1, msg: e.constructor.name + " " + e.type };
                    }
                    if (this._onError) {
                      this._onError(type, info);
                    } else {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeException(info.msg);
                    }
                  };
                  return RangeLoader2;
                }(_loader_js__WEBPACK_IMPORTED_MODULE_2__.BaseLoader)
              );
              __webpack_exports__2["default"] = RangeLoader;
            }
          ),
          /***/
          "./src/player/flv-player.js": (
            /*!**********************************!*\
              !*** ./src/player/flv-player.js ***!
              \**********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! events */
                "./node_modules/events/events.js"
              );
              var events__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(events__WEBPACK_IMPORTED_MODULE_0__);
              var _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              );
              var _utils_browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              );
              var _player_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                /*! ./player-events.js */
                "./src/player/player-events.js"
              );
              var _core_transmuxer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(
                /*! ../core/transmuxer.js */
                "./src/core/transmuxer.js"
              );
              var _core_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(
                /*! ../core/transmuxing-events.js */
                "./src/core/transmuxing-events.js"
              );
              var _core_mse_controller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__2(
                /*! ../core/mse-controller.js */
                "./src/core/mse-controller.js"
              );
              var _core_mse_events_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__2(
                /*! ../core/mse-events.js */
                "./src/core/mse-events.js"
              );
              var _player_errors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__2(
                /*! ./player-errors.js */
                "./src/player/player-errors.js"
              );
              var _config_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__2(
                /*! ../config.js */
                "./src/config.js"
              );
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__2(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              var FlvPlayer = (
                /** @class */
                function() {
                  function FlvPlayer2(mediaDataSource, config) {
                    this.TAG = "FlvPlayer";
                    this._type = "FlvPlayer";
                    this._emitter = new (events__WEBPACK_IMPORTED_MODULE_0___default())();
                    this._config = (0, _config_js__WEBPACK_IMPORTED_MODULE_9__.createDefaultConfig)();
                    if (typeof config === "object") {
                      Object.assign(this._config, config);
                    }
                    if (mediaDataSource.type.toLowerCase() !== "flv") {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_10__.InvalidArgumentException("FlvPlayer requires an flv MediaDataSource input!");
                    }
                    if (mediaDataSource.isLive === true) {
                      this._config.isLive = true;
                    }
                    this.e = {
                      onvLoadedMetadata: this._onvLoadedMetadata.bind(this),
                      onvSeeking: this._onvSeeking.bind(this),
                      onvCanPlay: this._onvCanPlay.bind(this),
                      onvStalled: this._onvStalled.bind(this),
                      onvProgress: this._onvProgress.bind(this)
                    };
                    if (self.performance && self.performance.now) {
                      this._now = self.performance.now.bind(self.performance);
                    } else {
                      this._now = Date.now;
                    }
                    this._pendingSeekTime = null;
                    this._requestSetTime = false;
                    this._seekpointRecord = null;
                    this._progressChecker = null;
                    this._mediaDataSource = mediaDataSource;
                    this._mediaElement = null;
                    this._msectl = null;
                    this._transmuxer = null;
                    this._mseSourceOpened = false;
                    this._hasPendingLoad = false;
                    this._receivedCanPlay = false;
                    this._mediaInfo = null;
                    this._statisticsInfo = null;
                    var chromeNeedIDRFix = _utils_browser_js__WEBPACK_IMPORTED_MODULE_2__.default.chrome && (_utils_browser_js__WEBPACK_IMPORTED_MODULE_2__.default.version.major < 50 || _utils_browser_js__WEBPACK_IMPORTED_MODULE_2__.default.version.major === 50 && _utils_browser_js__WEBPACK_IMPORTED_MODULE_2__.default.version.build < 2661);
                    this._alwaysSeekKeyframe = chromeNeedIDRFix || _utils_browser_js__WEBPACK_IMPORTED_MODULE_2__.default.msedge || _utils_browser_js__WEBPACK_IMPORTED_MODULE_2__.default.msie ? true : false;
                    if (this._alwaysSeekKeyframe) {
                      this._config.accurateSeek = false;
                    }
                  }
                  FlvPlayer2.prototype.destroy = function() {
                    if (this._progressChecker != null) {
                      window.clearInterval(this._progressChecker);
                      this._progressChecker = null;
                    }
                    if (this._transmuxer) {
                      this.unload();
                    }
                    if (this._mediaElement) {
                      this.detachMediaElement();
                    }
                    this.e = null;
                    this._mediaDataSource = null;
                    this._emitter.removeAllListeners();
                    this._emitter = null;
                  };
                  FlvPlayer2.prototype.on = function(event, listener) {
                    var _this = this;
                    if (event === _player_events_js__WEBPACK_IMPORTED_MODULE_3__.default.MEDIA_INFO) {
                      if (this._mediaInfo != null) {
                        Promise.resolve().then(function() {
                          _this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_3__.default.MEDIA_INFO, _this.mediaInfo);
                        });
                      }
                    } else if (event === _player_events_js__WEBPACK_IMPORTED_MODULE_3__.default.STATISTICS_INFO) {
                      if (this._statisticsInfo != null) {
                        Promise.resolve().then(function() {
                          _this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_3__.default.STATISTICS_INFO, _this.statisticsInfo);
                        });
                      }
                    }
                    this._emitter.addListener(event, listener);
                  };
                  FlvPlayer2.prototype.off = function(event, listener) {
                    this._emitter.removeListener(event, listener);
                  };
                  FlvPlayer2.prototype.attachMediaElement = function(mediaElement) {
                    var _this = this;
                    this._mediaElement = mediaElement;
                    mediaElement.addEventListener("loadedmetadata", this.e.onvLoadedMetadata);
                    mediaElement.addEventListener("seeking", this.e.onvSeeking);
                    mediaElement.addEventListener("canplay", this.e.onvCanPlay);
                    mediaElement.addEventListener("stalled", this.e.onvStalled);
                    mediaElement.addEventListener("progress", this.e.onvProgress);
                    this._msectl = new _core_mse_controller_js__WEBPACK_IMPORTED_MODULE_6__.default(this._config);
                    this._msectl.on(_core_mse_events_js__WEBPACK_IMPORTED_MODULE_7__.default.UPDATE_END, this._onmseUpdateEnd.bind(this));
                    this._msectl.on(_core_mse_events_js__WEBPACK_IMPORTED_MODULE_7__.default.BUFFER_FULL, this._onmseBufferFull.bind(this));
                    this._msectl.on(_core_mse_events_js__WEBPACK_IMPORTED_MODULE_7__.default.SOURCE_OPEN, function() {
                      _this._mseSourceOpened = true;
                      if (_this._hasPendingLoad) {
                        _this._hasPendingLoad = false;
                        _this.load();
                      }
                    });
                    this._msectl.on(_core_mse_events_js__WEBPACK_IMPORTED_MODULE_7__.default.ERROR, function(info) {
                      _this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_3__.default.ERROR, _player_errors_js__WEBPACK_IMPORTED_MODULE_8__.ErrorTypes.MEDIA_ERROR, _player_errors_js__WEBPACK_IMPORTED_MODULE_8__.ErrorDetails.MEDIA_MSE_ERROR, info);
                    });
                    this._msectl.attachMediaElement(mediaElement);
                    if (this._pendingSeekTime != null) {
                      try {
                        mediaElement.currentTime = this._pendingSeekTime;
                        this._pendingSeekTime = null;
                      } catch (e) {
                      }
                    }
                  };
                  FlvPlayer2.prototype.detachMediaElement = function() {
                    if (this._mediaElement) {
                      this._msectl.detachMediaElement();
                      this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata);
                      this._mediaElement.removeEventListener("seeking", this.e.onvSeeking);
                      this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay);
                      this._mediaElement.removeEventListener("stalled", this.e.onvStalled);
                      this._mediaElement.removeEventListener("progress", this.e.onvProgress);
                      this._mediaElement = null;
                    }
                    if (this._msectl) {
                      this._msectl.destroy();
                      this._msectl = null;
                    }
                  };
                  FlvPlayer2.prototype.load = function() {
                    var _this = this;
                    if (!this._mediaElement) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_10__.IllegalStateException("HTMLMediaElement must be attached before load()!");
                    }
                    if (this._transmuxer) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_10__.IllegalStateException("FlvPlayer.load() has been called, please call unload() first!");
                    }
                    if (this._hasPendingLoad) {
                      return;
                    }
                    if (this._config.deferLoadAfterSourceOpen && this._mseSourceOpened === false) {
                      this._hasPendingLoad = true;
                      return;
                    }
                    if (this._mediaElement.readyState > 0) {
                      this._requestSetTime = true;
                      this._mediaElement.currentTime = 0;
                    }
                    this._transmuxer = new _core_transmuxer_js__WEBPACK_IMPORTED_MODULE_4__.default(this._mediaDataSource, this._config);
                    this._transmuxer.on(_core_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.INIT_SEGMENT, function(type, is) {
                      _this._msectl.appendInitSegment(is);
                    });
                    this._transmuxer.on(_core_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.MEDIA_SEGMENT, function(type, ms) {
                      _this._msectl.appendMediaSegment(ms);
                      if (_this._config.lazyLoad && !_this._config.isLive) {
                        var currentTime = _this._mediaElement.currentTime;
                        if (ms.info.endDts >= (currentTime + _this._config.lazyLoadMaxDuration) * 1e3) {
                          if (_this._progressChecker == null) {
                            _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.v(_this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task");
                            _this._suspendTransmuxer();
                          }
                        }
                      }
                    });
                    this._transmuxer.on(_core_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.LOADING_COMPLETE, function() {
                      _this._msectl.endOfStream();
                      _this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_3__.default.LOADING_COMPLETE);
                    });
                    this._transmuxer.on(_core_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.RECOVERED_EARLY_EOF, function() {
                      _this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_3__.default.RECOVERED_EARLY_EOF);
                    });
                    this._transmuxer.on(_core_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.IO_ERROR, function(detail, info) {
                      _this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_3__.default.ERROR, _player_errors_js__WEBPACK_IMPORTED_MODULE_8__.ErrorTypes.NETWORK_ERROR, detail, info);
                    });
                    this._transmuxer.on(_core_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.DEMUX_ERROR, function(detail, info) {
                      _this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_3__.default.ERROR, _player_errors_js__WEBPACK_IMPORTED_MODULE_8__.ErrorTypes.MEDIA_ERROR, detail, { code: -1, msg: info });
                    });
                    this._transmuxer.on(_core_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.MEDIA_INFO, function(mediaInfo) {
                      _this._mediaInfo = mediaInfo;
                      _this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_3__.default.MEDIA_INFO, Object.assign({}, mediaInfo));
                    });
                    this._transmuxer.on(_core_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.METADATA_ARRIVED, function(metadata) {
                      _this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_3__.default.METADATA_ARRIVED, metadata);
                    });
                    this._transmuxer.on(_core_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.SCRIPTDATA_ARRIVED, function(data) {
                      _this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_3__.default.SCRIPTDATA_ARRIVED, data);
                    });
                    this._transmuxer.on(_core_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.STATISTICS_INFO, function(statInfo) {
                      _this._statisticsInfo = _this._fillStatisticsInfo(statInfo);
                      _this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_3__.default.STATISTICS_INFO, Object.assign({}, _this._statisticsInfo));
                    });
                    this._transmuxer.on(_core_transmuxing_events_js__WEBPACK_IMPORTED_MODULE_5__.default.RECOMMEND_SEEKPOINT, function(milliseconds) {
                      if (_this._mediaElement && !_this._config.accurateSeek) {
                        _this._requestSetTime = true;
                        _this._mediaElement.currentTime = milliseconds / 1e3;
                      }
                    });
                    this._transmuxer.open();
                  };
                  FlvPlayer2.prototype.unload = function() {
                    if (this._mediaElement) {
                      this._mediaElement.pause();
                    }
                    if (this._msectl) {
                      this._msectl.seek(0);
                    }
                    if (this._transmuxer) {
                      this._transmuxer.close();
                      this._transmuxer.destroy();
                      this._transmuxer = null;
                    }
                  };
                  FlvPlayer2.prototype.play = function() {
                    return this._mediaElement.play();
                  };
                  FlvPlayer2.prototype.pause = function() {
                    this._mediaElement.pause();
                  };
                  Object.defineProperty(FlvPlayer2.prototype, "type", {
                    get: function() {
                      return this._type;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FlvPlayer2.prototype, "buffered", {
                    get: function() {
                      return this._mediaElement.buffered;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FlvPlayer2.prototype, "duration", {
                    get: function() {
                      return this._mediaElement.duration;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FlvPlayer2.prototype, "volume", {
                    get: function() {
                      return this._mediaElement.volume;
                    },
                    set: function(value) {
                      this._mediaElement.volume = value;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FlvPlayer2.prototype, "muted", {
                    get: function() {
                      return this._mediaElement.muted;
                    },
                    set: function(muted) {
                      this._mediaElement.muted = muted;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FlvPlayer2.prototype, "currentTime", {
                    get: function() {
                      if (this._mediaElement) {
                        return this._mediaElement.currentTime;
                      }
                      return 0;
                    },
                    set: function(seconds) {
                      if (this._mediaElement) {
                        this._internalSeek(seconds);
                      } else {
                        this._pendingSeekTime = seconds;
                      }
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FlvPlayer2.prototype, "mediaInfo", {
                    get: function() {
                      return Object.assign({}, this._mediaInfo);
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FlvPlayer2.prototype, "statisticsInfo", {
                    get: function() {
                      if (this._statisticsInfo == null) {
                        this._statisticsInfo = {};
                      }
                      this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo);
                      return Object.assign({}, this._statisticsInfo);
                    },
                    enumerable: false,
                    configurable: true
                  });
                  FlvPlayer2.prototype._fillStatisticsInfo = function(statInfo) {
                    statInfo.playerType = this._type;
                    if (!(this._mediaElement instanceof HTMLVideoElement)) {
                      return statInfo;
                    }
                    var hasQualityInfo = true;
                    var decoded = 0;
                    var dropped = 0;
                    if (this._mediaElement.getVideoPlaybackQuality) {
                      var quality = this._mediaElement.getVideoPlaybackQuality();
                      decoded = quality.totalVideoFrames;
                      dropped = quality.droppedVideoFrames;
                    } else if (this._mediaElement.webkitDecodedFrameCount != void 0) {
                      decoded = this._mediaElement.webkitDecodedFrameCount;
                      dropped = this._mediaElement.webkitDroppedFrameCount;
                    } else {
                      hasQualityInfo = false;
                    }
                    if (hasQualityInfo) {
                      statInfo.decodedFrames = decoded;
                      statInfo.droppedFrames = dropped;
                    }
                    return statInfo;
                  };
                  FlvPlayer2.prototype._onmseUpdateEnd = function() {
                    if (!this._config.lazyLoad || this._config.isLive) {
                      return;
                    }
                    var buffered = this._mediaElement.buffered;
                    var currentTime = this._mediaElement.currentTime;
                    var currentRangeEnd = 0;
                    for (var i = 0; i < buffered.length; i++) {
                      var start = buffered.start(i);
                      var end = buffered.end(i);
                      if (start <= currentTime && currentTime < end) {
                        currentRangeEnd = end;
                        break;
                      }
                    }
                    if (currentRangeEnd >= currentTime + this._config.lazyLoadMaxDuration && this._progressChecker == null) {
                      _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task");
                      this._suspendTransmuxer();
                    }
                  };
                  FlvPlayer2.prototype._onmseBufferFull = function() {
                    _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.v(this.TAG, "MSE SourceBuffer is full, suspend transmuxing task");
                    if (this._progressChecker == null) {
                      this._suspendTransmuxer();
                    }
                  };
                  FlvPlayer2.prototype._suspendTransmuxer = function() {
                    if (this._transmuxer) {
                      this._transmuxer.pause();
                      if (this._progressChecker == null) {
                        this._progressChecker = window.setInterval(this._checkProgressAndResume.bind(this), 1e3);
                      }
                    }
                  };
                  FlvPlayer2.prototype._checkProgressAndResume = function() {
                    var currentTime = this._mediaElement.currentTime;
                    var buffered = this._mediaElement.buffered;
                    var needResume = false;
                    for (var i = 0; i < buffered.length; i++) {
                      var from = buffered.start(i);
                      var to = buffered.end(i);
                      if (currentTime >= from && currentTime < to) {
                        if (currentTime >= to - this._config.lazyLoadRecoverDuration) {
                          needResume = true;
                        }
                        break;
                      }
                    }
                    if (needResume) {
                      window.clearInterval(this._progressChecker);
                      this._progressChecker = null;
                      if (needResume) {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.v(this.TAG, "Continue loading from paused position");
                        this._transmuxer.resume();
                      }
                    }
                  };
                  FlvPlayer2.prototype._isTimepointBuffered = function(seconds) {
                    var buffered = this._mediaElement.buffered;
                    for (var i = 0; i < buffered.length; i++) {
                      var from = buffered.start(i);
                      var to = buffered.end(i);
                      if (seconds >= from && seconds < to) {
                        return true;
                      }
                    }
                    return false;
                  };
                  FlvPlayer2.prototype._internalSeek = function(seconds) {
                    var directSeek = this._isTimepointBuffered(seconds);
                    var directSeekBegin = false;
                    var directSeekBeginTime = 0;
                    if (seconds < 1 && this._mediaElement.buffered.length > 0) {
                      var videoBeginTime = this._mediaElement.buffered.start(0);
                      if (videoBeginTime < 1 && seconds < videoBeginTime || _utils_browser_js__WEBPACK_IMPORTED_MODULE_2__.default.safari) {
                        directSeekBegin = true;
                        directSeekBeginTime = _utils_browser_js__WEBPACK_IMPORTED_MODULE_2__.default.safari ? 0.1 : videoBeginTime;
                      }
                    }
                    if (directSeekBegin) {
                      this._requestSetTime = true;
                      this._mediaElement.currentTime = directSeekBeginTime;
                    } else if (directSeek) {
                      if (!this._alwaysSeekKeyframe) {
                        this._requestSetTime = true;
                        this._mediaElement.currentTime = seconds;
                      } else {
                        var idr = this._msectl.getNearestKeyframe(Math.floor(seconds * 1e3));
                        this._requestSetTime = true;
                        if (idr != null) {
                          this._mediaElement.currentTime = idr.dts / 1e3;
                        } else {
                          this._mediaElement.currentTime = seconds;
                        }
                      }
                      if (this._progressChecker != null) {
                        this._checkProgressAndResume();
                      }
                    } else {
                      if (this._progressChecker != null) {
                        window.clearInterval(this._progressChecker);
                        this._progressChecker = null;
                      }
                      this._msectl.seek(seconds);
                      this._transmuxer.seek(Math.floor(seconds * 1e3));
                      if (this._config.accurateSeek) {
                        this._requestSetTime = true;
                        this._mediaElement.currentTime = seconds;
                      }
                    }
                  };
                  FlvPlayer2.prototype._checkAndApplyUnbufferedSeekpoint = function() {
                    if (this._seekpointRecord) {
                      if (this._seekpointRecord.recordTime <= this._now() - 100) {
                        var target = this._mediaElement.currentTime;
                        this._seekpointRecord = null;
                        if (!this._isTimepointBuffered(target)) {
                          if (this._progressChecker != null) {
                            window.clearTimeout(this._progressChecker);
                            this._progressChecker = null;
                          }
                          this._msectl.seek(target);
                          this._transmuxer.seek(Math.floor(target * 1e3));
                          if (this._config.accurateSeek) {
                            this._requestSetTime = true;
                            this._mediaElement.currentTime = target;
                          }
                        }
                      } else {
                        window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
                      }
                    }
                  };
                  FlvPlayer2.prototype._checkAndResumeStuckPlayback = function(stalled) {
                    var media = this._mediaElement;
                    if (stalled || !this._receivedCanPlay || media.readyState < 2) {
                      var buffered = media.buffered;
                      if (buffered.length > 0 && media.currentTime < buffered.start(0)) {
                        _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.w(this.TAG, "Playback seems stuck at " + media.currentTime + ", seek to " + buffered.start(0));
                        this._requestSetTime = true;
                        this._mediaElement.currentTime = buffered.start(0);
                        this._mediaElement.removeEventListener("progress", this.e.onvProgress);
                      }
                    } else {
                      this._mediaElement.removeEventListener("progress", this.e.onvProgress);
                    }
                  };
                  FlvPlayer2.prototype._onvLoadedMetadata = function(e) {
                    if (this._pendingSeekTime != null) {
                      this._mediaElement.currentTime = this._pendingSeekTime;
                      this._pendingSeekTime = null;
                    }
                  };
                  FlvPlayer2.prototype._onvSeeking = function(e) {
                    var target = this._mediaElement.currentTime;
                    var buffered = this._mediaElement.buffered;
                    if (this._requestSetTime) {
                      this._requestSetTime = false;
                      return;
                    }
                    if (target < 1 && buffered.length > 0) {
                      var videoBeginTime = buffered.start(0);
                      if (videoBeginTime < 1 && target < videoBeginTime || _utils_browser_js__WEBPACK_IMPORTED_MODULE_2__.default.safari) {
                        this._requestSetTime = true;
                        this._mediaElement.currentTime = _utils_browser_js__WEBPACK_IMPORTED_MODULE_2__.default.safari ? 0.1 : videoBeginTime;
                        return;
                      }
                    }
                    if (this._isTimepointBuffered(target)) {
                      if (this._alwaysSeekKeyframe) {
                        var idr = this._msectl.getNearestKeyframe(Math.floor(target * 1e3));
                        if (idr != null) {
                          this._requestSetTime = true;
                          this._mediaElement.currentTime = idr.dts / 1e3;
                        }
                      }
                      if (this._progressChecker != null) {
                        this._checkProgressAndResume();
                      }
                      return;
                    }
                    this._seekpointRecord = {
                      seekPoint: target,
                      recordTime: this._now()
                    };
                    window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
                  };
                  FlvPlayer2.prototype._onvCanPlay = function(e) {
                    this._receivedCanPlay = true;
                    this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay);
                  };
                  FlvPlayer2.prototype._onvStalled = function(e) {
                    this._checkAndResumeStuckPlayback(true);
                  };
                  FlvPlayer2.prototype._onvProgress = function(e) {
                    this._checkAndResumeStuckPlayback();
                  };
                  return FlvPlayer2;
                }()
              );
              __webpack_exports__2["default"] = FlvPlayer;
            }
          ),
          /***/
          "./src/player/native-player.js": (
            /*!*************************************!*\
              !*** ./src/player/native-player.js ***!
              \*************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! events */
                "./node_modules/events/events.js"
              );
              var events__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(events__WEBPACK_IMPORTED_MODULE_0__);
              var _player_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ./player-events.js */
                "./src/player/player-events.js"
              );
              var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ../config.js */
                "./src/config.js"
              );
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              var NativePlayer = (
                /** @class */
                function() {
                  function NativePlayer2(mediaDataSource, config) {
                    this.TAG = "NativePlayer";
                    this._type = "NativePlayer";
                    this._emitter = new (events__WEBPACK_IMPORTED_MODULE_0___default())();
                    this._config = (0, _config_js__WEBPACK_IMPORTED_MODULE_2__.createDefaultConfig)();
                    if (typeof config === "object") {
                      Object.assign(this._config, config);
                    }
                    if (mediaDataSource.type.toLowerCase() === "flv") {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_3__.InvalidArgumentException("NativePlayer does't support flv MediaDataSource input!");
                    }
                    if (mediaDataSource.hasOwnProperty("segments")) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_3__.InvalidArgumentException("NativePlayer(" + mediaDataSource.type + ") doesn't support multipart playback!");
                    }
                    this.e = {
                      onvLoadedMetadata: this._onvLoadedMetadata.bind(this)
                    };
                    this._pendingSeekTime = null;
                    this._statisticsReporter = null;
                    this._mediaDataSource = mediaDataSource;
                    this._mediaElement = null;
                  }
                  NativePlayer2.prototype.destroy = function() {
                    if (this._mediaElement) {
                      this.unload();
                      this.detachMediaElement();
                    }
                    this.e = null;
                    this._mediaDataSource = null;
                    this._emitter.removeAllListeners();
                    this._emitter = null;
                  };
                  NativePlayer2.prototype.on = function(event, listener) {
                    var _this = this;
                    if (event === _player_events_js__WEBPACK_IMPORTED_MODULE_1__.default.MEDIA_INFO) {
                      if (this._mediaElement != null && this._mediaElement.readyState !== 0) {
                        Promise.resolve().then(function() {
                          _this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_1__.default.MEDIA_INFO, _this.mediaInfo);
                        });
                      }
                    } else if (event === _player_events_js__WEBPACK_IMPORTED_MODULE_1__.default.STATISTICS_INFO) {
                      if (this._mediaElement != null && this._mediaElement.readyState !== 0) {
                        Promise.resolve().then(function() {
                          _this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_1__.default.STATISTICS_INFO, _this.statisticsInfo);
                        });
                      }
                    }
                    this._emitter.addListener(event, listener);
                  };
                  NativePlayer2.prototype.off = function(event, listener) {
                    this._emitter.removeListener(event, listener);
                  };
                  NativePlayer2.prototype.attachMediaElement = function(mediaElement) {
                    this._mediaElement = mediaElement;
                    mediaElement.addEventListener("loadedmetadata", this.e.onvLoadedMetadata);
                    if (this._pendingSeekTime != null) {
                      try {
                        mediaElement.currentTime = this._pendingSeekTime;
                        this._pendingSeekTime = null;
                      } catch (e) {
                      }
                    }
                  };
                  NativePlayer2.prototype.detachMediaElement = function() {
                    if (this._mediaElement) {
                      this._mediaElement.src = "";
                      this._mediaElement.removeAttribute("src");
                      this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata);
                      this._mediaElement = null;
                    }
                    if (this._statisticsReporter != null) {
                      window.clearInterval(this._statisticsReporter);
                      this._statisticsReporter = null;
                    }
                  };
                  NativePlayer2.prototype.load = function() {
                    if (!this._mediaElement) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_3__.IllegalStateException("HTMLMediaElement must be attached before load()!");
                    }
                    this._mediaElement.src = this._mediaDataSource.url;
                    if (this._mediaElement.readyState > 0) {
                      this._mediaElement.currentTime = 0;
                    }
                    this._mediaElement.preload = "auto";
                    this._mediaElement.load();
                    this._statisticsReporter = window.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval);
                  };
                  NativePlayer2.prototype.unload = function() {
                    if (this._mediaElement) {
                      this._mediaElement.src = "";
                      this._mediaElement.removeAttribute("src");
                    }
                    if (this._statisticsReporter != null) {
                      window.clearInterval(this._statisticsReporter);
                      this._statisticsReporter = null;
                    }
                  };
                  NativePlayer2.prototype.play = function() {
                    return this._mediaElement.play();
                  };
                  NativePlayer2.prototype.pause = function() {
                    this._mediaElement.pause();
                  };
                  Object.defineProperty(NativePlayer2.prototype, "type", {
                    get: function() {
                      return this._type;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(NativePlayer2.prototype, "buffered", {
                    get: function() {
                      return this._mediaElement.buffered;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(NativePlayer2.prototype, "duration", {
                    get: function() {
                      return this._mediaElement.duration;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(NativePlayer2.prototype, "volume", {
                    get: function() {
                      return this._mediaElement.volume;
                    },
                    set: function(value) {
                      this._mediaElement.volume = value;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(NativePlayer2.prototype, "muted", {
                    get: function() {
                      return this._mediaElement.muted;
                    },
                    set: function(muted) {
                      this._mediaElement.muted = muted;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(NativePlayer2.prototype, "currentTime", {
                    get: function() {
                      if (this._mediaElement) {
                        return this._mediaElement.currentTime;
                      }
                      return 0;
                    },
                    set: function(seconds) {
                      if (this._mediaElement) {
                        this._mediaElement.currentTime = seconds;
                      } else {
                        this._pendingSeekTime = seconds;
                      }
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(NativePlayer2.prototype, "mediaInfo", {
                    get: function() {
                      var mediaPrefix = this._mediaElement instanceof HTMLAudioElement ? "audio/" : "video/";
                      var info = {
                        mimeType: mediaPrefix + this._mediaDataSource.type
                      };
                      if (this._mediaElement) {
                        info.duration = Math.floor(this._mediaElement.duration * 1e3);
                        if (this._mediaElement instanceof HTMLVideoElement) {
                          info.width = this._mediaElement.videoWidth;
                          info.height = this._mediaElement.videoHeight;
                        }
                      }
                      return info;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(NativePlayer2.prototype, "statisticsInfo", {
                    get: function() {
                      var info = {
                        playerType: this._type,
                        url: this._mediaDataSource.url
                      };
                      if (!(this._mediaElement instanceof HTMLVideoElement)) {
                        return info;
                      }
                      var hasQualityInfo = true;
                      var decoded = 0;
                      var dropped = 0;
                      if (this._mediaElement.getVideoPlaybackQuality) {
                        var quality = this._mediaElement.getVideoPlaybackQuality();
                        decoded = quality.totalVideoFrames;
                        dropped = quality.droppedVideoFrames;
                      } else if (this._mediaElement.webkitDecodedFrameCount != void 0) {
                        decoded = this._mediaElement.webkitDecodedFrameCount;
                        dropped = this._mediaElement.webkitDroppedFrameCount;
                      } else {
                        hasQualityInfo = false;
                      }
                      if (hasQualityInfo) {
                        info.decodedFrames = decoded;
                        info.droppedFrames = dropped;
                      }
                      return info;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  NativePlayer2.prototype._onvLoadedMetadata = function(e) {
                    if (this._pendingSeekTime != null) {
                      this._mediaElement.currentTime = this._pendingSeekTime;
                      this._pendingSeekTime = null;
                    }
                    this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_1__.default.MEDIA_INFO, this.mediaInfo);
                  };
                  NativePlayer2.prototype._reportStatisticsInfo = function() {
                    this._emitter.emit(_player_events_js__WEBPACK_IMPORTED_MODULE_1__.default.STATISTICS_INFO, this.statisticsInfo);
                  };
                  return NativePlayer2;
                }()
              );
              __webpack_exports__2["default"] = NativePlayer;
            }
          ),
          /***/
          "./src/player/player-errors.js": (
            /*!*************************************!*\
              !*** ./src/player/player-errors.js ***!
              \*************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "ErrorTypes": function() {
                  return (
                    /* binding */
                    ErrorTypes
                  );
                },
                /* harmony export */
                "ErrorDetails": function() {
                  return (
                    /* binding */
                    ErrorDetails
                  );
                }
                /* harmony export */
              });
              var _io_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ../io/loader.js */
                "./src/io/loader.js"
              );
              var _demux_demux_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ../demux/demux-errors.js */
                "./src/demux/demux-errors.js"
              );
              var ErrorTypes = {
                NETWORK_ERROR: "NetworkError",
                MEDIA_ERROR: "MediaError",
                OTHER_ERROR: "OtherError"
              };
              var ErrorDetails = {
                NETWORK_EXCEPTION: _io_loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderErrors.EXCEPTION,
                NETWORK_STATUS_CODE_INVALID: _io_loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderErrors.HTTP_STATUS_CODE_INVALID,
                NETWORK_TIMEOUT: _io_loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderErrors.CONNECTING_TIMEOUT,
                NETWORK_UNRECOVERABLE_EARLY_EOF: _io_loader_js__WEBPACK_IMPORTED_MODULE_0__.LoaderErrors.UNRECOVERABLE_EARLY_EOF,
                MEDIA_MSE_ERROR: "MediaMSEError",
                MEDIA_FORMAT_ERROR: _demux_demux_errors_js__WEBPACK_IMPORTED_MODULE_1__.default.FORMAT_ERROR,
                MEDIA_FORMAT_UNSUPPORTED: _demux_demux_errors_js__WEBPACK_IMPORTED_MODULE_1__.default.FORMAT_UNSUPPORTED,
                MEDIA_CODEC_UNSUPPORTED: _demux_demux_errors_js__WEBPACK_IMPORTED_MODULE_1__.default.CODEC_UNSUPPORTED
              };
            }
          ),
          /***/
          "./src/player/player-events.js": (
            /*!*************************************!*\
              !*** ./src/player/player-events.js ***!
              \*************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var PlayerEvents = {
                ERROR: "error",
                LOADING_COMPLETE: "loading_complete",
                RECOVERED_EARLY_EOF: "recovered_early_eof",
                MEDIA_INFO: "media_info",
                METADATA_ARRIVED: "metadata_arrived",
                SCRIPTDATA_ARRIVED: "scriptdata_arrived",
                STATISTICS_INFO: "statistics_info"
              };
              __webpack_exports__2["default"] = PlayerEvents;
            }
          ),
          /***/
          "./src/remux/aac-silent.js": (
            /*!*********************************!*\
              !*** ./src/remux/aac-silent.js ***!
              \*********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var AAC = (
                /** @class */
                function() {
                  function AAC2() {
                  }
                  AAC2.getSilentFrame = function(codec, channelCount) {
                    if (codec === "mp4a.40.2") {
                      if (channelCount === 1) {
                        return new Uint8Array([0, 200, 0, 128, 35, 128]);
                      } else if (channelCount === 2) {
                        return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                      } else if (channelCount === 3) {
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                      } else if (channelCount === 4) {
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                      } else if (channelCount === 5) {
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                      } else if (channelCount === 6) {
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                      }
                    } else {
                      if (channelCount === 1) {
                        return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                      } else if (channelCount === 2) {
                        return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                      } else if (channelCount === 3) {
                        return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                      }
                    }
                    return null;
                  };
                  return AAC2;
                }()
              );
              __webpack_exports__2["default"] = AAC;
            }
          ),
          /***/
          "./src/remux/mp4-generator.js": (
            /*!************************************!*\
              !*** ./src/remux/mp4-generator.js ***!
              \************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var MP4 = (
                /** @class */
                function() {
                  function MP42() {
                  }
                  MP42.init = function() {
                    MP42.types = {
                      avc1: [],
                      avcC: [],
                      btrt: [],
                      dinf: [],
                      dref: [],
                      esds: [],
                      ftyp: [],
                      hdlr: [],
                      mdat: [],
                      mdhd: [],
                      mdia: [],
                      mfhd: [],
                      minf: [],
                      moof: [],
                      moov: [],
                      mp4a: [],
                      mvex: [],
                      mvhd: [],
                      sdtp: [],
                      stbl: [],
                      stco: [],
                      stsc: [],
                      stsd: [],
                      stsz: [],
                      stts: [],
                      tfdt: [],
                      tfhd: [],
                      traf: [],
                      trak: [],
                      trun: [],
                      trex: [],
                      tkhd: [],
                      vmhd: [],
                      smhd: [],
                      ".mp3": []
                    };
                    for (var name_1 in MP42.types) {
                      if (MP42.types.hasOwnProperty(name_1)) {
                        MP42.types[name_1] = [
                          name_1.charCodeAt(0),
                          name_1.charCodeAt(1),
                          name_1.charCodeAt(2),
                          name_1.charCodeAt(3)
                        ];
                      }
                    }
                    var constants = MP42.constants = {};
                    constants.FTYP = new Uint8Array([
                      105,
                      115,
                      111,
                      109,
                      0,
                      0,
                      0,
                      1,
                      105,
                      115,
                      111,
                      109,
                      97,
                      118,
                      99,
                      49
                      // avc1
                    ]);
                    constants.STSD_PREFIX = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1
                      // entry_count
                    ]);
                    constants.STTS = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0
                      // entry_count
                    ]);
                    constants.STSC = constants.STCO = constants.STTS;
                    constants.STSZ = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0
                      // sample_count
                    ]);
                    constants.HDLR_VIDEO = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      118,
                      105,
                      100,
                      101,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      86,
                      105,
                      100,
                      101,
                      111,
                      72,
                      97,
                      110,
                      100,
                      108,
                      101,
                      114,
                      0
                      // name: VideoHandler
                    ]);
                    constants.HDLR_AUDIO = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      115,
                      111,
                      117,
                      110,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      83,
                      111,
                      117,
                      110,
                      100,
                      72,
                      97,
                      110,
                      100,
                      108,
                      101,
                      114,
                      0
                      // name: SoundHandler
                    ]);
                    constants.DREF = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      12,
                      117,
                      114,
                      108,
                      32,
                      0,
                      0,
                      0,
                      1
                      // version(0) + flags
                    ]);
                    constants.SMHD = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0
                      // balance(2) + reserved(2)
                    ]);
                    constants.VMHD = new Uint8Array([
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0
                    ]);
                  };
                  MP42.box = function(type) {
                    var size = 8;
                    var result = null;
                    var datas = Array.prototype.slice.call(arguments, 1);
                    var arrayCount = datas.length;
                    for (var i = 0; i < arrayCount; i++) {
                      size += datas[i].byteLength;
                    }
                    result = new Uint8Array(size);
                    result[0] = size >>> 24 & 255;
                    result[1] = size >>> 16 & 255;
                    result[2] = size >>> 8 & 255;
                    result[3] = size & 255;
                    result.set(type, 4);
                    var offset = 8;
                    for (var i = 0; i < arrayCount; i++) {
                      result.set(datas[i], offset);
                      offset += datas[i].byteLength;
                    }
                    return result;
                  };
                  MP42.generateInitSegment = function(meta) {
                    var ftyp = MP42.box(MP42.types.ftyp, MP42.constants.FTYP);
                    var moov = MP42.moov(meta);
                    var result = new Uint8Array(ftyp.byteLength + moov.byteLength);
                    result.set(ftyp, 0);
                    result.set(moov, ftyp.byteLength);
                    return result;
                  };
                  MP42.moov = function(meta) {
                    var mvhd = MP42.mvhd(meta.timescale, meta.duration);
                    var trak = MP42.trak(meta);
                    var mvex = MP42.mvex(meta);
                    return MP42.box(MP42.types.moov, mvhd, trak, mvex);
                  };
                  MP42.mvhd = function(timescale, duration) {
                    return MP42.box(MP42.types.mvhd, new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      timescale >>> 24 & 255,
                      timescale >>> 16 & 255,
                      timescale >>> 8 & 255,
                      timescale & 255,
                      duration >>> 24 & 255,
                      duration >>> 16 & 255,
                      duration >>> 8 & 255,
                      duration & 255,
                      0,
                      1,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      64,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      255,
                      255,
                      255,
                      255
                      // next_track_ID
                    ]));
                  };
                  MP42.trak = function(meta) {
                    return MP42.box(MP42.types.trak, MP42.tkhd(meta), MP42.mdia(meta));
                  };
                  MP42.tkhd = function(meta) {
                    var trackId = meta.id, duration = meta.duration;
                    var width = meta.presentWidth, height = meta.presentHeight;
                    return MP42.box(MP42.types.tkhd, new Uint8Array([
                      0,
                      0,
                      0,
                      7,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      trackId >>> 24 & 255,
                      trackId >>> 16 & 255,
                      trackId >>> 8 & 255,
                      trackId & 255,
                      0,
                      0,
                      0,
                      0,
                      duration >>> 24 & 255,
                      duration >>> 16 & 255,
                      duration >>> 8 & 255,
                      duration & 255,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      64,
                      0,
                      0,
                      0,
                      width >>> 8 & 255,
                      width & 255,
                      0,
                      0,
                      height >>> 8 & 255,
                      height & 255,
                      0,
                      0
                    ]));
                  };
                  MP42.mdia = function(meta) {
                    return MP42.box(MP42.types.mdia, MP42.mdhd(meta), MP42.hdlr(meta), MP42.minf(meta));
                  };
                  MP42.mdhd = function(meta) {
                    var timescale = meta.timescale;
                    var duration = meta.duration;
                    return MP42.box(MP42.types.mdhd, new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      timescale >>> 24 & 255,
                      timescale >>> 16 & 255,
                      timescale >>> 8 & 255,
                      timescale & 255,
                      duration >>> 24 & 255,
                      duration >>> 16 & 255,
                      duration >>> 8 & 255,
                      duration & 255,
                      85,
                      196,
                      0,
                      0
                      // pre_defined = 0
                    ]));
                  };
                  MP42.hdlr = function(meta) {
                    var data = null;
                    if (meta.type === "audio") {
                      data = MP42.constants.HDLR_AUDIO;
                    } else {
                      data = MP42.constants.HDLR_VIDEO;
                    }
                    return MP42.box(MP42.types.hdlr, data);
                  };
                  MP42.minf = function(meta) {
                    var xmhd = null;
                    if (meta.type === "audio") {
                      xmhd = MP42.box(MP42.types.smhd, MP42.constants.SMHD);
                    } else {
                      xmhd = MP42.box(MP42.types.vmhd, MP42.constants.VMHD);
                    }
                    return MP42.box(MP42.types.minf, xmhd, MP42.dinf(), MP42.stbl(meta));
                  };
                  MP42.dinf = function() {
                    var result = MP42.box(MP42.types.dinf, MP42.box(MP42.types.dref, MP42.constants.DREF));
                    return result;
                  };
                  MP42.stbl = function(meta) {
                    var result = MP42.box(
                      MP42.types.stbl,
                      // type: stbl
                      MP42.stsd(meta),
                      // Sample Description Table
                      MP42.box(MP42.types.stts, MP42.constants.STTS),
                      // Time-To-Sample
                      MP42.box(MP42.types.stsc, MP42.constants.STSC),
                      // Sample-To-Chunk
                      MP42.box(MP42.types.stsz, MP42.constants.STSZ),
                      // Sample size
                      MP42.box(MP42.types.stco, MP42.constants.STCO)
                      // Chunk offset
                    );
                    return result;
                  };
                  MP42.stsd = function(meta) {
                    if (meta.type === "audio") {
                      if (meta.codec === "mp3") {
                        return MP42.box(MP42.types.stsd, MP42.constants.STSD_PREFIX, MP42.mp3(meta));
                      }
                      return MP42.box(MP42.types.stsd, MP42.constants.STSD_PREFIX, MP42.mp4a(meta));
                    } else {
                      return MP42.box(MP42.types.stsd, MP42.constants.STSD_PREFIX, MP42.avc1(meta));
                    }
                  };
                  MP42.mp3 = function(meta) {
                    var channelCount = meta.channelCount;
                    var sampleRate = meta.audioSampleRate;
                    var data = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      channelCount,
                      0,
                      16,
                      0,
                      0,
                      0,
                      0,
                      sampleRate >>> 8 & 255,
                      sampleRate & 255,
                      0,
                      0
                    ]);
                    return MP42.box(MP42.types[".mp3"], data);
                  };
                  MP42.mp4a = function(meta) {
                    var channelCount = meta.channelCount;
                    var sampleRate = meta.audioSampleRate;
                    var data = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      channelCount,
                      0,
                      16,
                      0,
                      0,
                      0,
                      0,
                      sampleRate >>> 8 & 255,
                      sampleRate & 255,
                      0,
                      0
                    ]);
                    return MP42.box(MP42.types.mp4a, data, MP42.esds(meta));
                  };
                  MP42.esds = function(meta) {
                    var config = meta.config || [];
                    var configSize = config.length;
                    var data = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      3,
                      23 + configSize,
                      0,
                      1,
                      0,
                      4,
                      15 + configSize,
                      64,
                      21,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      5
                      // descriptor_type
                    ].concat([
                      configSize
                    ]).concat(config).concat([
                      6,
                      1,
                      2
                      // GASpecificConfig
                    ]));
                    return MP42.box(MP42.types.esds, data);
                  };
                  MP42.avc1 = function(meta) {
                    var avcc = meta.avcc;
                    var width = meta.codecWidth, height = meta.codecHeight;
                    var data = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      width >>> 8 & 255,
                      width & 255,
                      height >>> 8 & 255,
                      height & 255,
                      0,
                      72,
                      0,
                      0,
                      0,
                      72,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      10,
                      120,
                      113,
                      113,
                      47,
                      102,
                      108,
                      118,
                      46,
                      106,
                      115,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      24,
                      255,
                      255
                      // pre_defined = -1
                    ]);
                    return MP42.box(MP42.types.avc1, data, MP42.box(MP42.types.avcC, avcc));
                  };
                  MP42.mvex = function(meta) {
                    return MP42.box(MP42.types.mvex, MP42.trex(meta));
                  };
                  MP42.trex = function(meta) {
                    var trackId = meta.id;
                    var data = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      trackId >>> 24 & 255,
                      trackId >>> 16 & 255,
                      trackId >>> 8 & 255,
                      trackId & 255,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      1
                      // default_sample_flags
                    ]);
                    return MP42.box(MP42.types.trex, data);
                  };
                  MP42.moof = function(track, baseMediaDecodeTime) {
                    return MP42.box(MP42.types.moof, MP42.mfhd(track.sequenceNumber), MP42.traf(track, baseMediaDecodeTime));
                  };
                  MP42.mfhd = function(sequenceNumber) {
                    var data = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      sequenceNumber >>> 24 & 255,
                      sequenceNumber >>> 16 & 255,
                      sequenceNumber >>> 8 & 255,
                      sequenceNumber & 255
                    ]);
                    return MP42.box(MP42.types.mfhd, data);
                  };
                  MP42.traf = function(track, baseMediaDecodeTime) {
                    var trackId = track.id;
                    var tfhd = MP42.box(MP42.types.tfhd, new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      trackId >>> 24 & 255,
                      trackId >>> 16 & 255,
                      trackId >>> 8 & 255,
                      trackId & 255
                    ]));
                    var tfdt = MP42.box(MP42.types.tfdt, new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      baseMediaDecodeTime >>> 24 & 255,
                      baseMediaDecodeTime >>> 16 & 255,
                      baseMediaDecodeTime >>> 8 & 255,
                      baseMediaDecodeTime & 255
                    ]));
                    var sdtp = MP42.sdtp(track);
                    var trun = MP42.trun(track, sdtp.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
                    return MP42.box(MP42.types.traf, tfhd, tfdt, trun, sdtp);
                  };
                  MP42.sdtp = function(track) {
                    var samples = track.samples || [];
                    var sampleCount = samples.length;
                    var data = new Uint8Array(4 + sampleCount);
                    for (var i = 0; i < sampleCount; i++) {
                      var flags = samples[i].flags;
                      data[i + 4] = flags.isLeading << 6 | flags.dependsOn << 4 | flags.isDependedOn << 2 | flags.hasRedundancy;
                    }
                    return MP42.box(MP42.types.sdtp, data);
                  };
                  MP42.trun = function(track, offset) {
                    var samples = track.samples || [];
                    var sampleCount = samples.length;
                    var dataSize = 12 + 16 * sampleCount;
                    var data = new Uint8Array(dataSize);
                    offset += 8 + dataSize;
                    data.set([
                      0,
                      0,
                      15,
                      1,
                      sampleCount >>> 24 & 255,
                      sampleCount >>> 16 & 255,
                      sampleCount >>> 8 & 255,
                      sampleCount & 255,
                      offset >>> 24 & 255,
                      offset >>> 16 & 255,
                      offset >>> 8 & 255,
                      offset & 255
                    ], 0);
                    for (var i = 0; i < sampleCount; i++) {
                      var duration = samples[i].duration;
                      var size = samples[i].size;
                      var flags = samples[i].flags;
                      var cts = samples[i].cts;
                      data.set([
                        duration >>> 24 & 255,
                        duration >>> 16 & 255,
                        duration >>> 8 & 255,
                        duration & 255,
                        size >>> 24 & 255,
                        size >>> 16 & 255,
                        size >>> 8 & 255,
                        size & 255,
                        flags.isLeading << 2 | flags.dependsOn,
                        flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.isNonSync,
                        0,
                        0,
                        cts >>> 24 & 255,
                        cts >>> 16 & 255,
                        cts >>> 8 & 255,
                        cts & 255
                      ], 12 + 16 * i);
                    }
                    return MP42.box(MP42.types.trun, data);
                  };
                  MP42.mdat = function(data) {
                    return MP42.box(MP42.types.mdat, data);
                  };
                  return MP42;
                }()
              );
              MP4.init();
              __webpack_exports__2["default"] = MP4;
            }
          ),
          /***/
          "./src/remux/mp4-remuxer.js": (
            /*!**********************************!*\
              !*** ./src/remux/mp4-remuxer.js ***!
              \**********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              );
              var _mp4_generator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ./mp4-generator.js */
                "./src/remux/mp4-generator.js"
              );
              var _aac_silent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                /*! ./aac-silent.js */
                "./src/remux/aac-silent.js"
              );
              var _utils_browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              );
              var _core_media_segment_info_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(
                /*! ../core/media-segment-info.js */
                "./src/core/media-segment-info.js"
              );
              var _utils_exception_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              var MP4Remuxer = (
                /** @class */
                function() {
                  function MP4Remuxer2(config) {
                    this.TAG = "MP4Remuxer";
                    this._config = config;
                    this._isLive = config.isLive === true ? true : false;
                    this._dtsBase = -1;
                    this._dtsBaseInited = false;
                    this._audioDtsBase = Infinity;
                    this._videoDtsBase = Infinity;
                    this._audioNextDts = void 0;
                    this._videoNextDts = void 0;
                    this._audioStashedLastSample = null;
                    this._videoStashedLastSample = null;
                    this._audioMeta = null;
                    this._videoMeta = null;
                    this._audioSegmentInfoList = new _core_media_segment_info_js__WEBPACK_IMPORTED_MODULE_4__.MediaSegmentInfoList("audio");
                    this._videoSegmentInfoList = new _core_media_segment_info_js__WEBPACK_IMPORTED_MODULE_4__.MediaSegmentInfoList("video");
                    this._onInitSegment = null;
                    this._onMediaSegment = null;
                    this._forceFirstIDR = _utils_browser_js__WEBPACK_IMPORTED_MODULE_3__.default.chrome && (_utils_browser_js__WEBPACK_IMPORTED_MODULE_3__.default.version.major < 50 || _utils_browser_js__WEBPACK_IMPORTED_MODULE_3__.default.version.major === 50 && _utils_browser_js__WEBPACK_IMPORTED_MODULE_3__.default.version.build < 2661) ? true : false;
                    this._fillSilentAfterSeek = _utils_browser_js__WEBPACK_IMPORTED_MODULE_3__.default.msedge || _utils_browser_js__WEBPACK_IMPORTED_MODULE_3__.default.msie;
                    this._mp3UseMpegAudio = !_utils_browser_js__WEBPACK_IMPORTED_MODULE_3__.default.firefox;
                    this._fillAudioTimestampGap = this._config.fixAudioTimestampGap;
                  }
                  MP4Remuxer2.prototype.destroy = function() {
                    this._dtsBase = -1;
                    this._dtsBaseInited = false;
                    this._audioMeta = null;
                    this._videoMeta = null;
                    this._audioSegmentInfoList.clear();
                    this._audioSegmentInfoList = null;
                    this._videoSegmentInfoList.clear();
                    this._videoSegmentInfoList = null;
                    this._onInitSegment = null;
                    this._onMediaSegment = null;
                  };
                  MP4Remuxer2.prototype.bindDataSource = function(producer) {
                    producer.onDataAvailable = this.remux.bind(this);
                    producer.onTrackMetadata = this._onTrackMetadataReceived.bind(this);
                    return this;
                  };
                  Object.defineProperty(MP4Remuxer2.prototype, "onInitSegment", {
                    /* prototype: function onInitSegment(type: string, initSegment: ArrayBuffer): void
                       InitSegment: {
                           type: string,
                           data: ArrayBuffer,
                           codec: string,
                           container: string
                       }
                    */
                    get: function() {
                      return this._onInitSegment;
                    },
                    set: function(callback) {
                      this._onInitSegment = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(MP4Remuxer2.prototype, "onMediaSegment", {
                    /* prototype: function onMediaSegment(type: string, mediaSegment: MediaSegment): void
                       MediaSegment: {
                           type: string,
                           data: ArrayBuffer,
                           sampleCount: int32
                           info: MediaSegmentInfo
                       }
                    */
                    get: function() {
                      return this._onMediaSegment;
                    },
                    set: function(callback) {
                      this._onMediaSegment = callback;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  MP4Remuxer2.prototype.insertDiscontinuity = function() {
                    this._audioNextDts = this._videoNextDts = void 0;
                  };
                  MP4Remuxer2.prototype.seek = function(originalDts) {
                    this._audioStashedLastSample = null;
                    this._videoStashedLastSample = null;
                    this._videoSegmentInfoList.clear();
                    this._audioSegmentInfoList.clear();
                  };
                  MP4Remuxer2.prototype.remux = function(audioTrack, videoTrack) {
                    if (!this._onMediaSegment) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_5__.IllegalStateException("MP4Remuxer: onMediaSegment callback must be specificed!");
                    }
                    if (!this._dtsBaseInited) {
                      this._calculateDtsBase(audioTrack, videoTrack);
                    }
                    this._remuxVideo(videoTrack);
                    this._remuxAudio(audioTrack);
                  };
                  MP4Remuxer2.prototype._onTrackMetadataReceived = function(type, metadata) {
                    var metabox = null;
                    var container = "mp4";
                    var codec = metadata.codec;
                    if (type === "audio") {
                      this._audioMeta = metadata;
                      if (metadata.codec === "mp3" && this._mp3UseMpegAudio) {
                        container = "mpeg";
                        codec = "";
                        metabox = new Uint8Array();
                      } else {
                        metabox = _mp4_generator_js__WEBPACK_IMPORTED_MODULE_1__.default.generateInitSegment(metadata);
                      }
                    } else if (type === "video") {
                      this._videoMeta = metadata;
                      metabox = _mp4_generator_js__WEBPACK_IMPORTED_MODULE_1__.default.generateInitSegment(metadata);
                    } else {
                      return;
                    }
                    if (!this._onInitSegment) {
                      throw new _utils_exception_js__WEBPACK_IMPORTED_MODULE_5__.IllegalStateException("MP4Remuxer: onInitSegment callback must be specified!");
                    }
                    this._onInitSegment(type, {
                      type,
                      data: metabox.buffer,
                      codec,
                      container: type + "/" + container,
                      mediaDuration: metadata.duration
                      // in timescale 1000 (milliseconds)
                    });
                  };
                  MP4Remuxer2.prototype._calculateDtsBase = function(audioTrack, videoTrack) {
                    if (this._dtsBaseInited) {
                      return;
                    }
                    if (audioTrack.samples && audioTrack.samples.length) {
                      this._audioDtsBase = audioTrack.samples[0].dts;
                    }
                    if (videoTrack.samples && videoTrack.samples.length) {
                      this._videoDtsBase = videoTrack.samples[0].dts;
                    }
                    this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase);
                    this._dtsBaseInited = true;
                  };
                  MP4Remuxer2.prototype.flushStashedSamples = function() {
                    var videoSample = this._videoStashedLastSample;
                    var audioSample = this._audioStashedLastSample;
                    var videoTrack = {
                      type: "video",
                      id: 1,
                      sequenceNumber: 0,
                      samples: [],
                      length: 0
                    };
                    if (videoSample != null) {
                      videoTrack.samples.push(videoSample);
                      videoTrack.length = videoSample.length;
                    }
                    var audioTrack = {
                      type: "audio",
                      id: 2,
                      sequenceNumber: 0,
                      samples: [],
                      length: 0
                    };
                    if (audioSample != null) {
                      audioTrack.samples.push(audioSample);
                      audioTrack.length = audioSample.length;
                    }
                    this._videoStashedLastSample = null;
                    this._audioStashedLastSample = null;
                    this._remuxVideo(videoTrack, true);
                    this._remuxAudio(audioTrack, true);
                  };
                  MP4Remuxer2.prototype._remuxAudio = function(audioTrack, force) {
                    if (this._audioMeta == null) {
                      return;
                    }
                    var track = audioTrack;
                    var samples = track.samples;
                    var dtsCorrection = void 0;
                    var firstDts = -1, lastDts = -1;
                    var refSampleDuration = this._audioMeta.refSampleDuration;
                    var mpegRawTrack = this._audioMeta.codec === "mp3" && this._mp3UseMpegAudio;
                    var firstSegmentAfterSeek = this._dtsBaseInited && this._audioNextDts === void 0;
                    var insertPrefixSilentFrame = false;
                    if (!samples || samples.length === 0) {
                      return;
                    }
                    if (samples.length === 1 && !force) {
                      return;
                    }
                    var offset = 0;
                    var mdatbox = null;
                    var mdatBytes = 0;
                    if (mpegRawTrack) {
                      offset = 0;
                      mdatBytes = track.length;
                    } else {
                      offset = 8;
                      mdatBytes = 8 + track.length;
                    }
                    var lastSample = null;
                    if (samples.length > 1) {
                      lastSample = samples.pop();
                      mdatBytes -= lastSample.length;
                    }
                    if (this._audioStashedLastSample != null) {
                      var sample = this._audioStashedLastSample;
                      this._audioStashedLastSample = null;
                      samples.unshift(sample);
                      mdatBytes += sample.length;
                    }
                    if (lastSample != null) {
                      this._audioStashedLastSample = lastSample;
                    }
                    var firstSampleOriginalDts = samples[0].dts - this._dtsBase;
                    if (this._audioNextDts) {
                      dtsCorrection = firstSampleOriginalDts - this._audioNextDts;
                    } else {
                      if (this._audioSegmentInfoList.isEmpty()) {
                        dtsCorrection = 0;
                        if (this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty()) {
                          if (this._audioMeta.originalCodec !== "mp3") {
                            insertPrefixSilentFrame = true;
                          }
                        }
                      } else {
                        var lastSample_1 = this._audioSegmentInfoList.getLastSampleBefore(firstSampleOriginalDts);
                        if (lastSample_1 != null) {
                          var distance = firstSampleOriginalDts - (lastSample_1.originalDts + lastSample_1.duration);
                          if (distance <= 3) {
                            distance = 0;
                          }
                          var expectedDts = lastSample_1.dts + lastSample_1.duration + distance;
                          dtsCorrection = firstSampleOriginalDts - expectedDts;
                        } else {
                          dtsCorrection = 0;
                        }
                      }
                    }
                    if (insertPrefixSilentFrame) {
                      var firstSampleDts = firstSampleOriginalDts - dtsCorrection;
                      var videoSegment = this._videoSegmentInfoList.getLastSegmentBefore(firstSampleOriginalDts);
                      if (videoSegment != null && videoSegment.beginDts < firstSampleDts) {
                        var silentUnit = _aac_silent_js__WEBPACK_IMPORTED_MODULE_2__.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                        if (silentUnit) {
                          var dts = videoSegment.beginDts;
                          var silentFrameDuration = firstSampleDts - videoSegment.beginDts;
                          _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.v(this.TAG, "InsertPrefixSilentAudio: dts: " + dts + ", duration: " + silentFrameDuration);
                          samples.unshift({ unit: silentUnit, dts, pts: dts });
                          mdatBytes += silentUnit.byteLength;
                        }
                      } else {
                        insertPrefixSilentFrame = false;
                      }
                    }
                    var mp4Samples = [];
                    for (var i = 0; i < samples.length; i++) {
                      var sample = samples[i];
                      var unit = sample.unit;
                      var originalDts = sample.dts - this._dtsBase;
                      var dts = originalDts;
                      var needFillSilentFrames = false;
                      var silentFrames = null;
                      var sampleDuration = 0;
                      if (originalDts < -1e-3) {
                        continue;
                      }
                      if (this._audioMeta.codec !== "mp3") {
                        var curRefDts = originalDts;
                        var maxAudioFramesDrift = 3;
                        if (this._audioNextDts) {
                          curRefDts = this._audioNextDts;
                        }
                        dtsCorrection = originalDts - curRefDts;
                        if (dtsCorrection <= -maxAudioFramesDrift * refSampleDuration) {
                          _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Dropping 1 audio frame (originalDts: " + originalDts + " ms ,curRefDts: " + curRefDts + " ms)  due to dtsCorrection: " + dtsCorrection + " ms overlap.");
                          continue;
                        } else if (dtsCorrection >= maxAudioFramesDrift * refSampleDuration && this._fillAudioTimestampGap && !_utils_browser_js__WEBPACK_IMPORTED_MODULE_3__.default.safari) {
                          needFillSilentFrames = true;
                          var frameCount = Math.floor(dtsCorrection / refSampleDuration);
                          _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\n" + ("originalDts: " + originalDts + " ms, curRefDts: " + curRefDts + " ms, ") + ("dtsCorrection: " + Math.round(dtsCorrection) + " ms, generate: " + frameCount + " frames"));
                          dts = Math.floor(curRefDts);
                          sampleDuration = Math.floor(curRefDts + refSampleDuration) - dts;
                          var silentUnit = _aac_silent_js__WEBPACK_IMPORTED_MODULE_2__.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                          if (silentUnit == null) {
                            _utils_logger_js__WEBPACK_IMPORTED_MODULE_0__.default.w(this.TAG, "Unable to generate silent frame for " + (this._audioMeta.originalCodec + " with " + this._audioMeta.channelCount + " channels, repeat last frame"));
                            silentUnit = unit;
                          }
                          silentFrames = [];
                          for (var j = 0; j < frameCount; j++) {
                            curRefDts = curRefDts + refSampleDuration;
                            var intDts = Math.floor(curRefDts);
                            var intDuration = Math.floor(curRefDts + refSampleDuration) - intDts;
                            var frame = {
                              dts: intDts,
                              pts: intDts,
                              cts: 0,
                              unit: silentUnit,
                              size: silentUnit.byteLength,
                              duration: intDuration,
                              originalDts,
                              flags: {
                                isLeading: 0,
                                dependsOn: 1,
                                isDependedOn: 0,
                                hasRedundancy: 0
                              }
                            };
                            silentFrames.push(frame);
                            mdatBytes += frame.size;
                          }
                          this._audioNextDts = curRefDts + refSampleDuration;
                        } else {
                          dts = Math.floor(curRefDts);
                          sampleDuration = Math.floor(curRefDts + refSampleDuration) - dts;
                          this._audioNextDts = curRefDts + refSampleDuration;
                        }
                      } else {
                        dts = originalDts - dtsCorrection;
                        if (i !== samples.length - 1) {
                          var nextDts = samples[i + 1].dts - this._dtsBase - dtsCorrection;
                          sampleDuration = nextDts - dts;
                        } else {
                          if (lastSample != null) {
                            var nextDts = lastSample.dts - this._dtsBase - dtsCorrection;
                            sampleDuration = nextDts - dts;
                          } else if (mp4Samples.length >= 1) {
                            sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
                          } else {
                            sampleDuration = Math.floor(refSampleDuration);
                          }
                        }
                        this._audioNextDts = dts + sampleDuration;
                      }
                      if (firstDts === -1) {
                        firstDts = dts;
                      }
                      mp4Samples.push({
                        dts,
                        pts: dts,
                        cts: 0,
                        unit: sample.unit,
                        size: sample.unit.byteLength,
                        duration: sampleDuration,
                        originalDts,
                        flags: {
                          isLeading: 0,
                          dependsOn: 1,
                          isDependedOn: 0,
                          hasRedundancy: 0
                        }
                      });
                      if (needFillSilentFrames) {
                        mp4Samples.push.apply(mp4Samples, silentFrames);
                      }
                    }
                    if (mp4Samples.length === 0) {
                      track.samples = [];
                      track.length = 0;
                      return;
                    }
                    if (mpegRawTrack) {
                      mdatbox = new Uint8Array(mdatBytes);
                    } else {
                      mdatbox = new Uint8Array(mdatBytes);
                      mdatbox[0] = mdatBytes >>> 24 & 255;
                      mdatbox[1] = mdatBytes >>> 16 & 255;
                      mdatbox[2] = mdatBytes >>> 8 & 255;
                      mdatbox[3] = mdatBytes & 255;
                      mdatbox.set(_mp4_generator_js__WEBPACK_IMPORTED_MODULE_1__.default.types.mdat, 4);
                    }
                    for (var i = 0; i < mp4Samples.length; i++) {
                      var unit = mp4Samples[i].unit;
                      mdatbox.set(unit, offset);
                      offset += unit.byteLength;
                    }
                    var latest = mp4Samples[mp4Samples.length - 1];
                    lastDts = latest.dts + latest.duration;
                    var info = new _core_media_segment_info_js__WEBPACK_IMPORTED_MODULE_4__.MediaSegmentInfo();
                    info.beginDts = firstDts;
                    info.endDts = lastDts;
                    info.beginPts = firstDts;
                    info.endPts = lastDts;
                    info.originalBeginDts = mp4Samples[0].originalDts;
                    info.originalEndDts = latest.originalDts + latest.duration;
                    info.firstSample = new _core_media_segment_info_js__WEBPACK_IMPORTED_MODULE_4__.SampleInfo(mp4Samples[0].dts, mp4Samples[0].pts, mp4Samples[0].duration, mp4Samples[0].originalDts, false);
                    info.lastSample = new _core_media_segment_info_js__WEBPACK_IMPORTED_MODULE_4__.SampleInfo(latest.dts, latest.pts, latest.duration, latest.originalDts, false);
                    if (!this._isLive) {
                      this._audioSegmentInfoList.append(info);
                    }
                    track.samples = mp4Samples;
                    track.sequenceNumber++;
                    var moofbox = null;
                    if (mpegRawTrack) {
                      moofbox = new Uint8Array();
                    } else {
                      moofbox = _mp4_generator_js__WEBPACK_IMPORTED_MODULE_1__.default.moof(track, firstDts);
                    }
                    track.samples = [];
                    track.length = 0;
                    var segment = {
                      type: "audio",
                      data: this._mergeBoxes(moofbox, mdatbox).buffer,
                      sampleCount: mp4Samples.length,
                      info
                    };
                    if (mpegRawTrack && firstSegmentAfterSeek) {
                      segment.timestampOffset = firstDts;
                    }
                    this._onMediaSegment("audio", segment);
                  };
                  MP4Remuxer2.prototype._remuxVideo = function(videoTrack, force) {
                    if (this._videoMeta == null) {
                      return;
                    }
                    var track = videoTrack;
                    var samples = track.samples;
                    var dtsCorrection = void 0;
                    var firstDts = -1, lastDts = -1;
                    var firstPts = -1, lastPts = -1;
                    if (!samples || samples.length === 0) {
                      return;
                    }
                    if (samples.length === 1 && !force) {
                      return;
                    }
                    var offset = 8;
                    var mdatbox = null;
                    var mdatBytes = 8 + videoTrack.length;
                    var lastSample = null;
                    if (samples.length > 1) {
                      lastSample = samples.pop();
                      mdatBytes -= lastSample.length;
                    }
                    if (this._videoStashedLastSample != null) {
                      var sample = this._videoStashedLastSample;
                      this._videoStashedLastSample = null;
                      samples.unshift(sample);
                      mdatBytes += sample.length;
                    }
                    if (lastSample != null) {
                      this._videoStashedLastSample = lastSample;
                    }
                    var firstSampleOriginalDts = samples[0].dts - this._dtsBase;
                    if (this._videoNextDts) {
                      dtsCorrection = firstSampleOriginalDts - this._videoNextDts;
                    } else {
                      if (this._videoSegmentInfoList.isEmpty()) {
                        dtsCorrection = 0;
                      } else {
                        var lastSample_2 = this._videoSegmentInfoList.getLastSampleBefore(firstSampleOriginalDts);
                        if (lastSample_2 != null) {
                          var distance = firstSampleOriginalDts - (lastSample_2.originalDts + lastSample_2.duration);
                          if (distance <= 3) {
                            distance = 0;
                          }
                          var expectedDts = lastSample_2.dts + lastSample_2.duration + distance;
                          dtsCorrection = firstSampleOriginalDts - expectedDts;
                        } else {
                          dtsCorrection = 0;
                        }
                      }
                    }
                    var info = new _core_media_segment_info_js__WEBPACK_IMPORTED_MODULE_4__.MediaSegmentInfo();
                    var mp4Samples = [];
                    for (var i = 0; i < samples.length; i++) {
                      var sample = samples[i];
                      var originalDts = sample.dts - this._dtsBase;
                      var isKeyframe = sample.isKeyframe;
                      var dts = originalDts - dtsCorrection;
                      var cts = sample.cts;
                      var pts = dts + cts;
                      if (firstDts === -1) {
                        firstDts = dts;
                        firstPts = pts;
                      }
                      var sampleDuration = 0;
                      if (i !== samples.length - 1) {
                        var nextDts = samples[i + 1].dts - this._dtsBase - dtsCorrection;
                        sampleDuration = nextDts - dts;
                      } else {
                        if (lastSample != null) {
                          var nextDts = lastSample.dts - this._dtsBase - dtsCorrection;
                          sampleDuration = nextDts - dts;
                        } else if (mp4Samples.length >= 1) {
                          sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
                        } else {
                          sampleDuration = Math.floor(this._videoMeta.refSampleDuration);
                        }
                      }
                      if (isKeyframe) {
                        var syncPoint = new _core_media_segment_info_js__WEBPACK_IMPORTED_MODULE_4__.SampleInfo(dts, pts, sampleDuration, sample.dts, true);
                        syncPoint.fileposition = sample.fileposition;
                        info.appendSyncPoint(syncPoint);
                      }
                      mp4Samples.push({
                        dts,
                        pts,
                        cts,
                        units: sample.units,
                        size: sample.length,
                        isKeyframe,
                        duration: sampleDuration,
                        originalDts,
                        flags: {
                          isLeading: 0,
                          dependsOn: isKeyframe ? 2 : 1,
                          isDependedOn: isKeyframe ? 1 : 0,
                          hasRedundancy: 0,
                          isNonSync: isKeyframe ? 0 : 1
                        }
                      });
                    }
                    mdatbox = new Uint8Array(mdatBytes);
                    mdatbox[0] = mdatBytes >>> 24 & 255;
                    mdatbox[1] = mdatBytes >>> 16 & 255;
                    mdatbox[2] = mdatBytes >>> 8 & 255;
                    mdatbox[3] = mdatBytes & 255;
                    mdatbox.set(_mp4_generator_js__WEBPACK_IMPORTED_MODULE_1__.default.types.mdat, 4);
                    for (var i = 0; i < mp4Samples.length; i++) {
                      var units = mp4Samples[i].units;
                      while (units.length) {
                        var unit = units.shift();
                        var data = unit.data;
                        mdatbox.set(data, offset);
                        offset += data.byteLength;
                      }
                    }
                    var latest = mp4Samples[mp4Samples.length - 1];
                    lastDts = latest.dts + latest.duration;
                    lastPts = latest.pts + latest.duration;
                    this._videoNextDts = lastDts;
                    info.beginDts = firstDts;
                    info.endDts = lastDts;
                    info.beginPts = firstPts;
                    info.endPts = lastPts;
                    info.originalBeginDts = mp4Samples[0].originalDts;
                    info.originalEndDts = latest.originalDts + latest.duration;
                    info.firstSample = new _core_media_segment_info_js__WEBPACK_IMPORTED_MODULE_4__.SampleInfo(mp4Samples[0].dts, mp4Samples[0].pts, mp4Samples[0].duration, mp4Samples[0].originalDts, mp4Samples[0].isKeyframe);
                    info.lastSample = new _core_media_segment_info_js__WEBPACK_IMPORTED_MODULE_4__.SampleInfo(latest.dts, latest.pts, latest.duration, latest.originalDts, latest.isKeyframe);
                    if (!this._isLive) {
                      this._videoSegmentInfoList.append(info);
                    }
                    track.samples = mp4Samples;
                    track.sequenceNumber++;
                    if (this._forceFirstIDR) {
                      var flags = mp4Samples[0].flags;
                      flags.dependsOn = 2;
                      flags.isNonSync = 0;
                    }
                    var moofbox = _mp4_generator_js__WEBPACK_IMPORTED_MODULE_1__.default.moof(track, firstDts);
                    track.samples = [];
                    track.length = 0;
                    this._onMediaSegment("video", {
                      type: "video",
                      data: this._mergeBoxes(moofbox, mdatbox).buffer,
                      sampleCount: mp4Samples.length,
                      info
                    });
                  };
                  MP4Remuxer2.prototype._mergeBoxes = function(moof, mdat) {
                    var result = new Uint8Array(moof.byteLength + mdat.byteLength);
                    result.set(moof, 0);
                    result.set(mdat, moof.byteLength);
                    return result;
                  };
                  return MP4Remuxer2;
                }()
              );
              __webpack_exports__2["default"] = MP4Remuxer;
            }
          ),
          /***/
          "./src/utils/browser.js": (
            /*!******************************!*\
              !*** ./src/utils/browser.js ***!
              \******************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var Browser = {};
              function detect() {
                var ua = self.navigator.userAgent.toLowerCase();
                var match = /(edge)\/([\w.]+)/.exec(ua) || /(opr)[\/]([\w.]+)/.exec(ua) || /(chrome)[ \/]([\w.]+)/.exec(ua) || /(iemobile)[\/]([\w.]+)/.exec(ua) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(ua) || [];
                var platform_match = /(ipad)/.exec(ua) || /(ipod)/.exec(ua) || /(windows phone)/.exec(ua) || /(iphone)/.exec(ua) || /(kindle)/.exec(ua) || /(android)/.exec(ua) || /(windows)/.exec(ua) || /(mac)/.exec(ua) || /(linux)/.exec(ua) || /(cros)/.exec(ua) || [];
                var matched = {
                  browser: match[5] || match[3] || match[1] || "",
                  version: match[2] || match[4] || "0",
                  majorVersion: match[4] || match[2] || "0",
                  platform: platform_match[0] || ""
                };
                var browser = {};
                if (matched.browser) {
                  browser[matched.browser] = true;
                  var versionArray = matched.majorVersion.split(".");
                  browser.version = {
                    major: parseInt(matched.majorVersion, 10),
                    string: matched.version
                  };
                  if (versionArray.length > 1) {
                    browser.version.minor = parseInt(versionArray[1], 10);
                  }
                  if (versionArray.length > 2) {
                    browser.version.build = parseInt(versionArray[2], 10);
                  }
                }
                if (matched.platform) {
                  browser[matched.platform] = true;
                }
                if (browser.chrome || browser.opr || browser.safari) {
                  browser.webkit = true;
                }
                if (browser.rv || browser.iemobile) {
                  if (browser.rv) {
                    delete browser.rv;
                  }
                  var msie = "msie";
                  matched.browser = msie;
                  browser[msie] = true;
                }
                if (browser.edge) {
                  delete browser.edge;
                  var msedge = "msedge";
                  matched.browser = msedge;
                  browser[msedge] = true;
                }
                if (browser.opr) {
                  var opera = "opera";
                  matched.browser = opera;
                  browser[opera] = true;
                }
                if (browser.safari && browser.android) {
                  var android = "android";
                  matched.browser = android;
                  browser[android] = true;
                }
                browser.name = matched.browser;
                browser.platform = matched.platform;
                for (var key in Browser) {
                  if (Browser.hasOwnProperty(key)) {
                    delete Browser[key];
                  }
                }
                Object.assign(Browser, browser);
              }
              detect();
              __webpack_exports__2["default"] = Browser;
            }
          ),
          /***/
          "./src/utils/exception.js": (
            /*!********************************!*\
              !*** ./src/utils/exception.js ***!
              \********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "RuntimeException": function() {
                  return (
                    /* binding */
                    RuntimeException
                  );
                },
                /* harmony export */
                "IllegalStateException": function() {
                  return (
                    /* binding */
                    IllegalStateException
                  );
                },
                /* harmony export */
                "InvalidArgumentException": function() {
                  return (
                    /* binding */
                    InvalidArgumentException
                  );
                },
                /* harmony export */
                "NotImplementedException": function() {
                  return (
                    /* binding */
                    NotImplementedException
                  );
                }
                /* harmony export */
              });
              var __extends = /* @__PURE__ */ function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  if (typeof b !== "function" && b !== null)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              }();
              var RuntimeException = (
                /** @class */
                function() {
                  function RuntimeException2(message) {
                    this._message = message;
                  }
                  Object.defineProperty(RuntimeException2.prototype, "name", {
                    get: function() {
                      return "RuntimeException";
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(RuntimeException2.prototype, "message", {
                    get: function() {
                      return this._message;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  RuntimeException2.prototype.toString = function() {
                    return this.name + ": " + this.message;
                  };
                  return RuntimeException2;
                }()
              );
              var IllegalStateException = (
                /** @class */
                function(_super) {
                  __extends(IllegalStateException2, _super);
                  function IllegalStateException2(message) {
                    return _super.call(this, message) || this;
                  }
                  Object.defineProperty(IllegalStateException2.prototype, "name", {
                    get: function() {
                      return "IllegalStateException";
                    },
                    enumerable: false,
                    configurable: true
                  });
                  return IllegalStateException2;
                }(RuntimeException)
              );
              var InvalidArgumentException = (
                /** @class */
                function(_super) {
                  __extends(InvalidArgumentException2, _super);
                  function InvalidArgumentException2(message) {
                    return _super.call(this, message) || this;
                  }
                  Object.defineProperty(InvalidArgumentException2.prototype, "name", {
                    get: function() {
                      return "InvalidArgumentException";
                    },
                    enumerable: false,
                    configurable: true
                  });
                  return InvalidArgumentException2;
                }(RuntimeException)
              );
              var NotImplementedException = (
                /** @class */
                function(_super) {
                  __extends(NotImplementedException2, _super);
                  function NotImplementedException2(message) {
                    return _super.call(this, message) || this;
                  }
                  Object.defineProperty(NotImplementedException2.prototype, "name", {
                    get: function() {
                      return "NotImplementedException";
                    },
                    enumerable: false,
                    configurable: true
                  });
                  return NotImplementedException2;
                }(RuntimeException)
              );
            }
          ),
          /***/
          "./src/utils/logger.js": (
            /*!*****************************!*\
              !*** ./src/utils/logger.js ***!
              \*****************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! events */
                "./node_modules/events/events.js"
              );
              var events__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(events__WEBPACK_IMPORTED_MODULE_0__);
              var Log = (
                /** @class */
                function() {
                  function Log2() {
                  }
                  Log2.e = function(tag, msg) {
                    if (!tag || Log2.FORCE_GLOBAL_TAG)
                      tag = Log2.GLOBAL_TAG;
                    var str = "[" + tag + "] > " + msg;
                    if (Log2.ENABLE_CALLBACK) {
                      Log2.emitter.emit("log", "error", str);
                    }
                    if (!Log2.ENABLE_ERROR) {
                      return;
                    }
                    if (console.error) {
                      console.error(str);
                    } else if (console.warn) {
                      console.warn(str);
                    } else {
                      console.log(str);
                    }
                  };
                  Log2.i = function(tag, msg) {
                    if (!tag || Log2.FORCE_GLOBAL_TAG)
                      tag = Log2.GLOBAL_TAG;
                    var str = "[" + tag + "] > " + msg;
                    if (Log2.ENABLE_CALLBACK) {
                      Log2.emitter.emit("log", "info", str);
                    }
                    if (!Log2.ENABLE_INFO) {
                      return;
                    }
                    if (console.info) {
                      console.info(str);
                    } else {
                      console.log(str);
                    }
                  };
                  Log2.w = function(tag, msg) {
                    if (!tag || Log2.FORCE_GLOBAL_TAG)
                      tag = Log2.GLOBAL_TAG;
                    var str = "[" + tag + "] > " + msg;
                    if (Log2.ENABLE_CALLBACK) {
                      Log2.emitter.emit("log", "warn", str);
                    }
                    if (!Log2.ENABLE_WARN) {
                      return;
                    }
                    if (console.warn) {
                      console.warn(str);
                    } else {
                      console.log(str);
                    }
                  };
                  Log2.d = function(tag, msg) {
                    if (!tag || Log2.FORCE_GLOBAL_TAG)
                      tag = Log2.GLOBAL_TAG;
                    var str = "[" + tag + "] > " + msg;
                    if (Log2.ENABLE_CALLBACK) {
                      Log2.emitter.emit("log", "debug", str);
                    }
                    if (!Log2.ENABLE_DEBUG) {
                      return;
                    }
                    if (console.debug) {
                      console.debug(str);
                    } else {
                      console.log(str);
                    }
                  };
                  Log2.v = function(tag, msg) {
                    if (!tag || Log2.FORCE_GLOBAL_TAG)
                      tag = Log2.GLOBAL_TAG;
                    var str = "[" + tag + "] > " + msg;
                    if (Log2.ENABLE_CALLBACK) {
                      Log2.emitter.emit("log", "verbose", str);
                    }
                    if (!Log2.ENABLE_VERBOSE) {
                      return;
                    }
                    console.log(str);
                  };
                  return Log2;
                }()
              );
              Log.GLOBAL_TAG = "flv.js";
              Log.FORCE_GLOBAL_TAG = false;
              Log.ENABLE_ERROR = true;
              Log.ENABLE_INFO = true;
              Log.ENABLE_WARN = true;
              Log.ENABLE_DEBUG = true;
              Log.ENABLE_VERBOSE = true;
              Log.ENABLE_CALLBACK = false;
              Log.emitter = new (events__WEBPACK_IMPORTED_MODULE_0___default())();
              __webpack_exports__2["default"] = Log;
            }
          ),
          /***/
          "./src/utils/logging-control.js": (
            /*!**************************************!*\
              !*** ./src/utils/logging-control.js ***!
              \**************************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                /*! events */
                "./node_modules/events/events.js"
              );
              var events__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(events__WEBPACK_IMPORTED_MODULE_0__);
              var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                /*! ./logger.js */
                "./src/utils/logger.js"
              );
              var LoggingControl = (
                /** @class */
                function() {
                  function LoggingControl2() {
                  }
                  Object.defineProperty(LoggingControl2, "forceGlobalTag", {
                    get: function() {
                      return _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.FORCE_GLOBAL_TAG;
                    },
                    set: function(enable) {
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.FORCE_GLOBAL_TAG = enable;
                      LoggingControl2._notifyChange();
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(LoggingControl2, "globalTag", {
                    get: function() {
                      return _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.GLOBAL_TAG;
                    },
                    set: function(tag) {
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.GLOBAL_TAG = tag;
                      LoggingControl2._notifyChange();
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(LoggingControl2, "enableAll", {
                    get: function() {
                      return _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_VERBOSE && _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_DEBUG && _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_INFO && _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_WARN && _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_ERROR;
                    },
                    set: function(enable) {
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_VERBOSE = enable;
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_DEBUG = enable;
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_INFO = enable;
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_WARN = enable;
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_ERROR = enable;
                      LoggingControl2._notifyChange();
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(LoggingControl2, "enableDebug", {
                    get: function() {
                      return _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_DEBUG;
                    },
                    set: function(enable) {
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_DEBUG = enable;
                      LoggingControl2._notifyChange();
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(LoggingControl2, "enableVerbose", {
                    get: function() {
                      return _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_VERBOSE;
                    },
                    set: function(enable) {
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_VERBOSE = enable;
                      LoggingControl2._notifyChange();
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(LoggingControl2, "enableInfo", {
                    get: function() {
                      return _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_INFO;
                    },
                    set: function(enable) {
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_INFO = enable;
                      LoggingControl2._notifyChange();
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(LoggingControl2, "enableWarn", {
                    get: function() {
                      return _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_WARN;
                    },
                    set: function(enable) {
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_WARN = enable;
                      LoggingControl2._notifyChange();
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(LoggingControl2, "enableError", {
                    get: function() {
                      return _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_ERROR;
                    },
                    set: function(enable) {
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_ERROR = enable;
                      LoggingControl2._notifyChange();
                    },
                    enumerable: false,
                    configurable: true
                  });
                  LoggingControl2.getConfig = function() {
                    return {
                      globalTag: _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.GLOBAL_TAG,
                      forceGlobalTag: _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.FORCE_GLOBAL_TAG,
                      enableVerbose: _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_VERBOSE,
                      enableDebug: _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_DEBUG,
                      enableInfo: _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_INFO,
                      enableWarn: _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_WARN,
                      enableError: _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_ERROR,
                      enableCallback: _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_CALLBACK
                    };
                  };
                  LoggingControl2.applyConfig = function(config) {
                    _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.GLOBAL_TAG = config.globalTag;
                    _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.FORCE_GLOBAL_TAG = config.forceGlobalTag;
                    _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_VERBOSE = config.enableVerbose;
                    _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_DEBUG = config.enableDebug;
                    _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_INFO = config.enableInfo;
                    _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_WARN = config.enableWarn;
                    _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_ERROR = config.enableError;
                    _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_CALLBACK = config.enableCallback;
                  };
                  LoggingControl2._notifyChange = function() {
                    var emitter = LoggingControl2.emitter;
                    if (emitter.listenerCount("change") > 0) {
                      var config = LoggingControl2.getConfig();
                      emitter.emit("change", config);
                    }
                  };
                  LoggingControl2.registerListener = function(listener) {
                    LoggingControl2.emitter.addListener("change", listener);
                  };
                  LoggingControl2.removeListener = function(listener) {
                    LoggingControl2.emitter.removeListener("change", listener);
                  };
                  LoggingControl2.addLogListener = function(listener) {
                    _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.emitter.addListener("log", listener);
                    if (_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.emitter.listenerCount("log") > 0) {
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_CALLBACK = true;
                      LoggingControl2._notifyChange();
                    }
                  };
                  LoggingControl2.removeLogListener = function(listener) {
                    _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.emitter.removeListener("log", listener);
                    if (_logger_js__WEBPACK_IMPORTED_MODULE_1__.default.emitter.listenerCount("log") === 0) {
                      _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.ENABLE_CALLBACK = false;
                      LoggingControl2._notifyChange();
                    }
                  };
                  return LoggingControl2;
                }()
              );
              LoggingControl.emitter = new (events__WEBPACK_IMPORTED_MODULE_0___default())();
              __webpack_exports__2["default"] = LoggingControl;
            }
          ),
          /***/
          "./src/utils/polyfill.js": (
            /*!*******************************!*\
              !*** ./src/utils/polyfill.js ***!
              \*******************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              var Polyfill = (
                /** @class */
                function() {
                  function Polyfill2() {
                  }
                  Polyfill2.install = function() {
                    Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
                      obj.__proto__ = proto;
                      return obj;
                    };
                    Object.assign = Object.assign || function(target) {
                      if (target === void 0 || target === null) {
                        throw new TypeError("Cannot convert undefined or null to object");
                      }
                      var output = Object(target);
                      for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        if (source !== void 0 && source !== null) {
                          for (var key in source) {
                            if (source.hasOwnProperty(key)) {
                              output[key] = source[key];
                            }
                          }
                        }
                      }
                      return output;
                    };
                    if (typeof self.Promise !== "function") {
                      __webpack_require__2(
                        /*! es6-promise */
                        "./node_modules/es6-promise/dist/es6-promise.js"
                      ).polyfill();
                    }
                  };
                  return Polyfill2;
                }()
              );
              Polyfill.install();
              __webpack_exports__2["default"] = Polyfill;
            }
          ),
          /***/
          "./src/utils/utf8-conv.js": (
            /*!********************************!*\
              !*** ./src/utils/utf8-conv.js ***!
              \********************************/
            /***/
            function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              function checkContinuation(uint8array, start, checkLength) {
                var array = uint8array;
                if (start + checkLength < array.length) {
                  while (checkLength--) {
                    if ((array[++start] & 192) !== 128)
                      return false;
                  }
                  return true;
                } else {
                  return false;
                }
              }
              function decodeUTF8(uint8array) {
                var out = [];
                var input = uint8array;
                var i = 0;
                var length = uint8array.length;
                while (i < length) {
                  if (input[i] < 128) {
                    out.push(String.fromCharCode(input[i]));
                    ++i;
                    continue;
                  } else if (input[i] < 192) ;
                  else if (input[i] < 224) {
                    if (checkContinuation(input, i, 1)) {
                      var ucs4 = (input[i] & 31) << 6 | input[i + 1] & 63;
                      if (ucs4 >= 128) {
                        out.push(String.fromCharCode(ucs4 & 65535));
                        i += 2;
                        continue;
                      }
                    }
                  } else if (input[i] < 240) {
                    if (checkContinuation(input, i, 2)) {
                      var ucs4 = (input[i] & 15) << 12 | (input[i + 1] & 63) << 6 | input[i + 2] & 63;
                      if (ucs4 >= 2048 && (ucs4 & 63488) !== 55296) {
                        out.push(String.fromCharCode(ucs4 & 65535));
                        i += 3;
                        continue;
                      }
                    }
                  } else if (input[i] < 248) {
                    if (checkContinuation(input, i, 3)) {
                      var ucs4 = (input[i] & 7) << 18 | (input[i + 1] & 63) << 12 | (input[i + 2] & 63) << 6 | input[i + 3] & 63;
                      if (ucs4 > 65536 && ucs4 < 1114112) {
                        ucs4 -= 65536;
                        out.push(String.fromCharCode(ucs4 >>> 10 | 55296));
                        out.push(String.fromCharCode(ucs4 & 1023 | 56320));
                        i += 4;
                        continue;
                      }
                    }
                  }
                  out.push(String.fromCharCode(65533));
                  ++i;
                }
                return out.join("");
              }
              __webpack_exports__2["default"] = decodeUTF8;
            }
          )
          /******/
        };
        var __webpack_module_cache__ = {};
        function __webpack_require__(moduleId) {
          var cachedModule = __webpack_module_cache__[moduleId];
          if (cachedModule !== void 0) {
            return cachedModule.exports;
          }
          var module2 = __webpack_module_cache__[moduleId] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          __webpack_modules__[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
          return module2.exports;
        }
        __webpack_require__.m = __webpack_modules__;
        !function() {
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              function() {
                return module2["default"];
              }
            ) : (
              /******/
              function() {
                return module2;
              }
            );
            __webpack_require__.d(getter, { a: getter });
            return getter;
          };
        }();
        !function() {
          __webpack_require__.d = function(exports2, definition) {
            for (var key in definition) {
              if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
              }
            }
          };
        }();
        !function() {
          __webpack_require__.g = function() {
            if (typeof globalThis === "object") return globalThis;
            try {
              return this || new Function("return this")();
            } catch (e) {
              if (typeof window === "object") return window;
            }
          }();
        }();
        !function() {
          __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          };
        }();
        !function() {
          __webpack_require__.r = function(exports2) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
        }();
        var __webpack_exports__ = __webpack_require__("./src/index.js");
        return __webpack_exports__;
      }()
    );
  });
})(flv);
var flvExports = flv.exports;
const flvjs = /* @__PURE__ */ getDefaultExportFromCjs(flvExports);
function parseEffect(text) {
  var param = text.toLowerCase().trim().split(/\s*;\s*/);
  if (param[0] === "banner") {
    return {
      name: param[0],
      delay: param[1] * 1 || 0,
      leftToRight: param[2] * 1 || 0,
      fadeAwayWidth: param[3] * 1 || 0
    };
  }
  if (/^scroll\s/.test(param[0])) {
    return {
      name: param[0],
      y1: Math.min(param[1] * 1, param[2] * 1),
      y2: Math.max(param[1] * 1, param[2] * 1),
      delay: param[3] * 1 || 0,
      fadeAwayHeight: param[4] * 1 || 0
    };
  }
  if (text !== "") {
    return { name: text };
  }
  return null;
}
function parseDrawing(text) {
  if (!text) {
    return [];
  }
  return text.toLowerCase().replace(/([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)/g, " $1 ").replace(/([mnlbspc])/g, " $1 ").trim().replace(/\s+/g, " ").split(/\s(?=[mnlbspc])/).map(function(cmd) {
    return cmd.split(" ").filter(function(x, i) {
      return !(i && isNaN(x * 1));
    });
  });
}
var numTags = [
  "b",
  "i",
  "u",
  "s",
  "fsp",
  "k",
  "K",
  "kf",
  "ko",
  "kt",
  "fe",
  "q",
  "p",
  "pbo",
  "a",
  "an",
  "fscx",
  "fscy",
  "fax",
  "fay",
  "frx",
  "fry",
  "frz",
  "fr",
  "be",
  "blur",
  "bord",
  "xbord",
  "ybord",
  "shad",
  "xshad",
  "yshad"
];
var numRegexs = numTags.map(function(nt) {
  return { name: nt, regex: new RegExp("^" + nt + "-?\\d") };
});
function parseTag(text) {
  var assign;
  var tag = {};
  for (var i = 0; i < numRegexs.length; i++) {
    var ref2 = numRegexs[i];
    var name = ref2.name;
    var regex = ref2.regex;
    if (regex.test(text)) {
      tag[name] = text.slice(name.length) * 1;
      return tag;
    }
  }
  if (/^fn/.test(text)) {
    tag.fn = text.slice(2);
  } else if (/^r/.test(text)) {
    tag.r = text.slice(1);
  } else if (/^fs[\d+-]/.test(text)) {
    tag.fs = text.slice(2);
  } else if (/^\d?c&?H?[0-9a-fA-F]+|^\d?c$/.test(text)) {
    var ref$1 = text.match(/^(\d?)c&?H?(\w*)/);
    var num = ref$1[1];
    var color = ref$1[2];
    tag["c" + (num || 1)] = color && ("000000" + color).slice(-6);
  } else if (/^\da&?H?[0-9a-fA-F]+/.test(text)) {
    var ref$2 = text.match(/^(\d)a&?H?([0-9a-f]+)/i);
    var num$1 = ref$2[1];
    var alpha = ref$2[2];
    tag["a" + num$1] = ("00" + alpha).slice(-2);
  } else if (/^alpha&?H?[0-9a-fA-F]+/.test(text)) {
    assign = text.match(/^alpha&?H?([0-9a-f]+)/i), tag.alpha = assign[1];
    tag.alpha = ("00" + tag.alpha).slice(-2);
  } else if (/^(?:pos|org|move|fad|fade)\([^)]+/.test(text)) {
    var ref$3 = text.match(/^(\w+)\((.*?)\)?$/);
    var key = ref$3[1];
    var value = ref$3[2];
    tag[key] = value.trim().split(/\s*,\s*/).map(Number);
  } else if (/^i?clip\([^)]+/.test(text)) {
    var p = text.match(/^i?clip\((.*?)\)?$/)[1].trim().split(/\s*,\s*/);
    tag.clip = {
      inverse: /iclip/.test(text),
      scale: 1,
      drawing: null,
      dots: null
    };
    if (p.length === 1) {
      tag.clip.drawing = parseDrawing(p[0]);
    }
    if (p.length === 2) {
      tag.clip.scale = p[0] * 1;
      tag.clip.drawing = parseDrawing(p[1]);
    }
    if (p.length === 4) {
      tag.clip.dots = p.map(Number);
    }
  } else if (/^t\(/.test(text)) {
    var p$1 = text.match(/^t\((.*?)\)?$/)[1].trim().replace(/\\.*/, function(x) {
      return x.replace(/,/g, "\n");
    }).split(/\s*,\s*/);
    if (!p$1[0]) {
      return tag;
    }
    tag.t = {
      t1: 0,
      t2: 0,
      accel: 1,
      tags: p$1[p$1.length - 1].replace(/\n/g, ",").split("\\").slice(1).map(parseTag)
    };
    if (p$1.length === 2) {
      tag.t.accel = p$1[0] * 1;
    }
    if (p$1.length === 3) {
      tag.t.t1 = p$1[0] * 1;
      tag.t.t2 = p$1[1] * 1;
    }
    if (p$1.length === 4) {
      tag.t.t1 = p$1[0] * 1;
      tag.t.t2 = p$1[1] * 1;
      tag.t.accel = p$1[2] * 1;
    }
  }
  return tag;
}
function parseTags(text) {
  var tags = [];
  var depth = 0;
  var str = "";
  var transText = text.split("\\").slice(1).concat("").join("\\");
  for (var i = 0; i < transText.length; i++) {
    var x = transText[i];
    if (x === "(") {
      depth++;
    }
    if (x === ")") {
      depth--;
    }
    if (depth < 0) {
      depth = 0;
    }
    if (!depth && x === "\\") {
      if (str) {
        tags.push(str);
      }
      str = "";
    } else {
      str += x;
    }
  }
  return tags.map(parseTag);
}
function parseText(text) {
  var pairs = text.split(/{([^{}]*?)}/);
  var parsed = [];
  if (pairs[0].length) {
    parsed.push({ tags: [], text: pairs[0], drawing: [] });
  }
  for (var i = 1; i < pairs.length; i += 2) {
    var tags = parseTags(pairs[i]);
    var isDrawing = tags.reduce(function(v, tag) {
      return tag.p === void 0 ? v : !!tag.p;
    }, false);
    parsed.push({
      tags,
      text: isDrawing ? "" : pairs[i + 1],
      drawing: isDrawing ? parseDrawing(pairs[i + 1]) : []
    });
  }
  return {
    raw: text,
    combined: parsed.map(function(frag) {
      return frag.text;
    }).join(""),
    parsed
  };
}
function parseTime(time) {
  var t = time.split(":");
  return t[0] * 3600 + t[1] * 60 + t[2] * 1;
}
function parseDialogue(text, format) {
  var fields = text.split(",");
  if (fields.length > format.length) {
    var textField = fields.slice(format.length - 1).join();
    fields = fields.slice(0, format.length - 1);
    fields.push(textField);
  }
  var dia = {};
  for (var i = 0; i < fields.length; i++) {
    var fmt = format[i];
    var fld = fields[i].trim();
    switch (fmt) {
      case "Layer":
      case "MarginL":
      case "MarginR":
      case "MarginV":
        dia[fmt] = fld * 1;
        break;
      case "Start":
      case "End":
        dia[fmt] = parseTime(fld);
        break;
      case "Effect":
        dia[fmt] = parseEffect(fld);
        break;
      case "Text":
        dia[fmt] = parseText(fld);
        break;
      default:
        dia[fmt] = fld;
    }
  }
  return dia;
}
var stylesFormat = ["Name", "Fontname", "Fontsize", "PrimaryColour", "SecondaryColour", "OutlineColour", "BackColour", "Bold", "Italic", "Underline", "StrikeOut", "ScaleX", "ScaleY", "Spacing", "Angle", "BorderStyle", "Outline", "Shadow", "Alignment", "MarginL", "MarginR", "MarginV", "Encoding"];
var eventsFormat = ["Layer", "Start", "End", "Style", "Name", "MarginL", "MarginR", "MarginV", "Effect", "Text"];
function parseFormat(text) {
  var fields = stylesFormat.concat(eventsFormat);
  return text.match(/Format\s*:\s*(.*)/i)[1].split(/\s*,\s*/).map(function(field) {
    var caseField = fields.find(function(f) {
      return f.toLowerCase() === field.toLowerCase();
    });
    return caseField || field;
  });
}
function parseStyle(text, format) {
  var values = text.match(/Style\s*:\s*(.*)/i)[1].split(/\s*,\s*/);
  return Object.assign.apply(Object, [{}].concat(format.map(function(fmt, idx) {
    var obj;
    return obj = {}, obj[fmt] = values[idx], obj;
  })));
}
function parse(text) {
  var tree = {
    info: {},
    styles: { format: [], style: [] },
    events: { format: [], comment: [], dialogue: [] }
  };
  var lines = text.split(/\r?\n/);
  var state = 0;
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (/^;/.test(line)) {
      continue;
    }
    if (/^\[Script Info\]/i.test(line)) {
      state = 1;
    } else if (/^\[V4\+? Styles\]/i.test(line)) {
      state = 2;
    } else if (/^\[Events\]/i.test(line)) {
      state = 3;
    } else if (/^\[.*\]/.test(line)) {
      state = 0;
    }
    if (state === 0) {
      continue;
    }
    if (state === 1) {
      if (/:/.test(line)) {
        var ref2 = line.match(/(.*?)\s*:\s*(.*)/);
        var key = ref2[1];
        var value = ref2[2];
        tree.info[key] = value;
      }
    }
    if (state === 2) {
      if (/^Format\s*:/i.test(line)) {
        tree.styles.format = parseFormat(line);
      }
      if (/^Style\s*:/i.test(line)) {
        tree.styles.style.push(parseStyle(line, tree.styles.format));
      }
    }
    if (state === 3) {
      if (/^Format\s*:/i.test(line)) {
        tree.events.format = parseFormat(line);
      }
      if (/^(?:Comment|Dialogue)\s*:/i.test(line)) {
        var ref$1 = line.match(/^(\w+?)\s*:\s*(.*)/i);
        var key$1 = ref$1[1];
        var value$1 = ref$1[2];
        tree.events[key$1.toLowerCase()].push(parseDialogue(value$1, tree.events.format));
      }
    }
  }
  return tree;
}
function createCommand(arr) {
  var cmd = {
    type: null,
    prev: null,
    next: null,
    points: []
  };
  if (/[mnlbs]/.test(arr[0])) {
    cmd.type = arr[0].toUpperCase().replace("N", "L").replace("B", "C");
  }
  for (var len = arr.length - !(arr.length & 1), i = 1; i < len; i += 2) {
    cmd.points.push({ x: arr[i] * 1, y: arr[i + 1] * 1 });
  }
  return cmd;
}
function isValid(cmd) {
  if (!cmd.points.length || !cmd.type) {
    return false;
  }
  if (/C|S/.test(cmd.type) && cmd.points.length < 3) {
    return false;
  }
  return true;
}
function getViewBox(commands) {
  var ref2;
  var minX = Infinity;
  var minY = Infinity;
  var maxX = -Infinity;
  var maxY = -Infinity;
  (ref2 = []).concat.apply(ref2, commands.map(function(ref3) {
    var points = ref3.points;
    return points;
  })).forEach(function(ref3) {
    var x = ref3.x;
    var y = ref3.y;
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  });
  return {
    minX,
    minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function s2b(points, prev, next) {
  var results = [];
  var bb1 = [0, 2 / 3, 1 / 3, 0];
  var bb2 = [0, 1 / 3, 2 / 3, 0];
  var bb3 = [0, 1 / 6, 2 / 3, 1 / 6];
  var dot4 = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  };
  var px = [points[points.length - 1].x, points[0].x, points[1].x, points[2].x];
  var py = [points[points.length - 1].y, points[0].y, points[1].y, points[2].y];
  results.push({
    type: prev === "M" ? "M" : "L",
    points: [{ x: dot4(bb3, px), y: dot4(bb3, py) }]
  });
  for (var i = 3; i < points.length; i++) {
    px = [points[i - 3].x, points[i - 2].x, points[i - 1].x, points[i].x];
    py = [points[i - 3].y, points[i - 2].y, points[i - 1].y, points[i].y];
    results.push({
      type: "C",
      points: [
        { x: dot4(bb1, px), y: dot4(bb1, py) },
        { x: dot4(bb2, px), y: dot4(bb2, py) },
        { x: dot4(bb3, px), y: dot4(bb3, py) }
      ]
    });
  }
  if (next === "L" || next === "C") {
    var last = points[points.length - 1];
    results.push({ type: "L", points: [{ x: last.x, y: last.y }] });
  }
  return results;
}
function toSVGPath(instructions) {
  return instructions.map(function(ref2) {
    var type = ref2.type;
    var points = ref2.points;
    return type + points.map(function(ref3) {
      var x = ref3.x;
      var y = ref3.y;
      return x + "," + y;
    }).join(",");
  }).join("");
}
function compileDrawing(rawCommands) {
  var ref$1;
  var commands = [];
  var i = 0;
  while (i < rawCommands.length) {
    var arr = rawCommands[i];
    var cmd = createCommand(arr);
    if (isValid(cmd)) {
      if (cmd.type === "S") {
        var ref2 = (commands[i - 1] || { points: [{ x: 0, y: 0 }] }).points.slice(-1)[0];
        var x = ref2.x;
        var y = ref2.y;
        cmd.points.unshift({ x, y });
      }
      if (i) {
        cmd.prev = commands[i - 1].type;
        commands[i - 1].next = cmd.type;
      }
      commands.push(cmd);
      i++;
    } else {
      if (i && commands[i - 1].type === "S") {
        var additionPoints = {
          p: cmd.points,
          c: commands[i - 1].points.slice(0, 3)
        };
        commands[i - 1].points = commands[i - 1].points.concat(
          (additionPoints[arr[0]] || []).map(function(ref3) {
            var x2 = ref3.x;
            var y2 = ref3.y;
            return { x: x2, y: y2 };
          })
        );
      }
      rawCommands.splice(i, 1);
    }
  }
  var instructions = (ref$1 = []).concat.apply(
    ref$1,
    commands.map(function(ref3) {
      var type = ref3.type;
      var points = ref3.points;
      var prev = ref3.prev;
      var next = ref3.next;
      return type === "S" ? s2b(points, prev, next) : { type, points };
    })
  );
  return Object.assign({ instructions, d: toSVGPath(instructions) }, getViewBox(commands));
}
var tTags = [
  "fs",
  "fsp",
  "clip",
  "c1",
  "c2",
  "c3",
  "c4",
  "a1",
  "a2",
  "a3",
  "a4",
  "alpha",
  "fscx",
  "fscy",
  "fax",
  "fay",
  "frx",
  "fry",
  "frz",
  "fr",
  "be",
  "blur",
  "bord",
  "xbord",
  "ybord",
  "shad",
  "xshad",
  "yshad"
];
function compileTag(tag, key, presets) {
  var obj, obj$1, obj$2;
  if (presets === void 0) presets = {};
  var value = tag[key];
  if (value === void 0) {
    return null;
  }
  if (key === "pos" || key === "org") {
    return value.length === 2 ? (obj = {}, obj[key] = { x: value[0], y: value[1] }, obj) : null;
  }
  if (key === "move") {
    var x1 = value[0];
    var y1 = value[1];
    var x2 = value[2];
    var y2 = value[3];
    var t1 = value[4];
    if (t1 === void 0) t1 = 0;
    var t2 = value[5];
    if (t2 === void 0) t2 = 0;
    return value.length === 4 || value.length === 6 ? { move: { x1, y1, x2, y2, t1, t2 } } : null;
  }
  if (key === "fad" || key === "fade") {
    if (value.length === 2) {
      var t1$1 = value[0];
      var t2$1 = value[1];
      return { fade: { type: "fad", t1: t1$1, t2: t2$1 } };
    }
    if (value.length === 7) {
      var a1 = value[0];
      var a2 = value[1];
      var a3 = value[2];
      var t1$2 = value[3];
      var t2$2 = value[4];
      var t3 = value[5];
      var t4 = value[6];
      return { fade: { type: "fade", a1, a2, a3, t1: t1$2, t2: t2$2, t3, t4 } };
    }
    return null;
  }
  if (key === "clip") {
    var inverse = value.inverse;
    var scale = value.scale;
    var drawing = value.drawing;
    var dots = value.dots;
    if (drawing) {
      return { clip: { inverse, scale, drawing: compileDrawing(drawing), dots } };
    }
    if (dots) {
      var x1$1 = dots[0];
      var y1$1 = dots[1];
      var x2$1 = dots[2];
      var y2$1 = dots[3];
      return { clip: { inverse, scale, drawing, dots: { x1: x1$1, y1: y1$1, x2: x2$1, y2: y2$1 } } };
    }
    return null;
  }
  if (/^[xy]?(bord|shad)$/.test(key)) {
    value = Math.max(value, 0);
  }
  if (key === "bord") {
    return { xbord: value, ybord: value };
  }
  if (key === "shad") {
    return { xshad: value, yshad: value };
  }
  if (/^c\d$/.test(key)) {
    return obj$1 = {}, obj$1[key] = value || presets[key], obj$1;
  }
  if (key === "alpha") {
    return { a1: value, a2: value, a3: value, a4: value };
  }
  if (key === "fr") {
    return { frz: value };
  }
  if (key === "fs") {
    return {
      fs: /^\+|-/.test(value) ? (value * 1 > -10 ? 1 + value / 10 : 1) * presets.fs : value * 1
    };
  }
  if (key === "K") {
    return { kf: value };
  }
  if (key === "t") {
    var t1$3 = value.t1;
    var accel = value.accel;
    var tags = value.tags;
    var t2$3 = value.t2 || (presets.end - presets.start) * 1e3;
    var compiledTag = {};
    tags.forEach(function(t) {
      var k = Object.keys(t)[0];
      if (~tTags.indexOf(k) && !(k === "clip" && !t[k].dots)) {
        Object.assign(compiledTag, compileTag(t, k, presets));
      }
    });
    return { t: { t1: t1$3, t2: t2$3, accel, tag: compiledTag } };
  }
  return obj$2 = {}, obj$2[key] = value, obj$2;
}
var a2an = [
  null,
  1,
  2,
  3,
  null,
  7,
  8,
  9,
  null,
  4,
  5,
  6
];
var globalTags = ["r", "a", "an", "pos", "org", "move", "fade", "fad", "clip"];
function inheritTag(pTag) {
  return JSON.parse(JSON.stringify(Object.assign({}, pTag, {
    k: void 0,
    kf: void 0,
    ko: void 0,
    kt: void 0
  })));
}
function compileText(ref2) {
  var styles = ref2.styles;
  var style = ref2.style;
  var parsed = ref2.parsed;
  var start = ref2.start;
  var end = ref2.end;
  var alignment;
  var q = { q: styles[style].tag.q };
  var pos;
  var org;
  var move;
  var fade;
  var clip;
  var slices = [];
  var slice = { style, fragments: [] };
  var prevTag = {};
  for (var i = 0; i < parsed.length; i++) {
    var ref$1 = parsed[i];
    var tags = ref$1.tags;
    var text = ref$1.text;
    var drawing = ref$1.drawing;
    var reset = void 0;
    for (var j = 0; j < tags.length; j++) {
      var tag = tags[j];
      reset = tag.r === void 0 ? reset : tag.r;
    }
    var fragment = {
      tag: reset === void 0 ? inheritTag(prevTag) : {},
      text,
      drawing: drawing.length ? compileDrawing(drawing) : null
    };
    for (var j$1 = 0; j$1 < tags.length; j$1++) {
      var tag$1 = tags[j$1];
      alignment = alignment || a2an[tag$1.a || 0] || tag$1.an;
      q = compileTag(tag$1, "q") || q;
      pos = pos || compileTag(tag$1, "pos");
      org = org || compileTag(tag$1, "org");
      move = move || compileTag(tag$1, "move");
      fade = fade || compileTag(tag$1, "fade") || compileTag(tag$1, "fad");
      clip = compileTag(tag$1, "clip") || clip;
      var key = Object.keys(tag$1)[0];
      if (key && !~globalTags.indexOf(key)) {
        var sliceTag = styles[style].tag;
        var c1 = sliceTag.c1;
        var c2 = sliceTag.c2;
        var c3 = sliceTag.c3;
        var c4 = sliceTag.c4;
        var fs = prevTag.fs || sliceTag.fs;
        var compiledTag = compileTag(tag$1, key, { start, end, c1, c2, c3, c4, fs });
        if (key === "t") {
          fragment.tag.t = fragment.tag.t || [];
          fragment.tag.t.push(compiledTag.t);
        } else {
          Object.assign(fragment.tag, compiledTag);
        }
      }
    }
    prevTag = fragment.tag;
    if (reset !== void 0) {
      slices.push(slice);
      slice = { style: styles[reset] ? reset : style, fragments: [] };
    }
    if (fragment.text || fragment.drawing) {
      var prev = slice.fragments[slice.fragments.length - 1] || {};
      if (prev.text && fragment.text && !Object.keys(fragment.tag).length) {
        prev.text += fragment.text;
      } else {
        slice.fragments.push(fragment);
      }
    }
  }
  slices.push(slice);
  return Object.assign({ alignment, slices }, q, pos, org, move, fade, clip);
}
function compileDialogues(ref2) {
  var styles = ref2.styles;
  var dialogues = ref2.dialogues;
  var minLayer = Infinity;
  var results = [];
  for (var i = 0; i < dialogues.length; i++) {
    var dia = dialogues[i];
    if (dia.Start >= dia.End) {
      continue;
    }
    if (!styles[dia.Style]) {
      dia.Style = "Default";
    }
    var stl = styles[dia.Style].style;
    var compiledText = compileText({
      styles,
      style: dia.Style,
      parsed: dia.Text.parsed,
      start: dia.Start,
      end: dia.End
    });
    var alignment = compiledText.alignment || stl.Alignment;
    minLayer = Math.min(minLayer, dia.Layer);
    results.push(Object.assign({
      layer: dia.Layer,
      start: dia.Start,
      end: dia.End,
      style: dia.Style,
      name: dia.Name,
      // reset style by `\r` will not effect margin and alignment
      margin: {
        left: dia.MarginL || stl.MarginL,
        right: dia.MarginR || stl.MarginR,
        vertical: dia.MarginV || stl.MarginV
      },
      effect: dia.Effect
    }, compiledText, { alignment }));
  }
  for (var i$1 = 0; i$1 < results.length; i$1++) {
    results[i$1].layer -= minLayer;
  }
  return results.sort(function(a, b) {
    return a.start - b.start || a.end - b.end;
  });
}
var DEFAULT_STYLE = {
  Name: "Default",
  Fontname: "Arial",
  Fontsize: "20",
  PrimaryColour: "&H00FFFFFF&",
  SecondaryColour: "&H000000FF&",
  OutlineColour: "&H00000000&",
  BackColour: "&H00000000&",
  Bold: "0",
  Italic: "0",
  Underline: "0",
  StrikeOut: "0",
  ScaleX: "100",
  ScaleY: "100",
  Spacing: "0",
  Angle: "0",
  BorderStyle: "1",
  Outline: "2",
  Shadow: "2",
  Alignment: "2",
  MarginL: "10",
  MarginR: "10",
  MarginV: "10",
  Encoding: "1"
};
function parseStyleColor(color) {
  if (/^(&|H|&H)[0-9a-f]{6,}/i.test(color)) {
    var ref2 = color.match(/&?H?([0-9a-f]{2})?([0-9a-f]{6})/i);
    var a = ref2[1];
    var c = ref2[2];
    return [a || "00", c];
  }
  var num = parseInt(color, 10);
  if (!isNaN(num)) {
    var min = -2147483648;
    var max = 2147483647;
    if (num < min) {
      return ["00", "000000"];
    }
    var aabbggrr = min <= num && num <= max ? ("00000000" + (num < 0 ? num + 4294967296 : num).toString(16)).slice(-8) : String(num).slice(0, 8);
    return [aabbggrr.slice(0, 2), aabbggrr.slice(2)];
  }
  return ["00", "000000"];
}
function compileStyles(ref2) {
  var info = ref2.info;
  var style = ref2.style;
  var defaultStyle = ref2.defaultStyle;
  var result = {};
  var styles = [Object.assign({}, defaultStyle, { Name: "Default" })].concat(style);
  var loop = function(i2) {
    var s = Object.assign({}, DEFAULT_STYLE, styles[i2]);
    if (/^(\*+)Default$/.test(s.Name)) {
      s.Name = "Default";
    }
    Object.keys(s).forEach(function(key) {
      if (key !== "Name" && key !== "Fontname" && !/Colour/.test(key)) {
        s[key] *= 1;
      }
    });
    var ref$1 = parseStyleColor(s.PrimaryColour);
    var a1 = ref$1[0];
    var c1 = ref$1[1];
    var ref$2 = parseStyleColor(s.SecondaryColour);
    var a2 = ref$2[0];
    var c2 = ref$2[1];
    var ref$3 = parseStyleColor(s.OutlineColour);
    var a3 = ref$3[0];
    var c3 = ref$3[1];
    var ref$4 = parseStyleColor(s.BackColour);
    var a4 = ref$4[0];
    var c4 = ref$4[1];
    var tag = {
      fn: s.Fontname,
      fs: s.Fontsize,
      c1,
      a1,
      c2,
      a2,
      c3,
      a3,
      c4,
      a4,
      b: Math.abs(s.Bold),
      i: Math.abs(s.Italic),
      u: Math.abs(s.Underline),
      s: Math.abs(s.StrikeOut),
      fscx: s.ScaleX,
      fscy: s.ScaleY,
      fsp: s.Spacing,
      frz: s.Angle,
      xbord: s.Outline,
      ybord: s.Outline,
      xshad: s.Shadow,
      yshad: s.Shadow,
      fe: s.Encoding,
      // TODO: [breaking change] remove `q` from style
      q: /^[0-3]$/.test(info.WrapStyle) ? info.WrapStyle * 1 : 2
    };
    result[s.Name] = { style: s, tag };
  };
  for (var i = 0; i < styles.length; i++) loop(i);
  return result;
}
function compile(text, options) {
  if (options === void 0) options = {};
  var tree = parse(text);
  var styles = compileStyles({
    info: tree.info,
    style: tree.styles.style,
    defaultStyle: options.defaultStyle || {}
  });
  return {
    info: tree.info,
    width: tree.info.PlayResX * 1 || null,
    height: tree.info.PlayResY * 1 || null,
    wrapStyle: /^[0-3]$/.test(tree.info.WrapStyle) ? tree.info.WrapStyle * 1 : 2,
    collisions: tree.info.Collisions || "Normal",
    styles,
    dialogues: compileDialogues({
      styles,
      dialogues: tree.events.dialogue
    })
  };
}
const useTextMetrics = "fontBoundingBoxAscent" in TextMetrics.prototype;
const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
const unitsPerEm = !useTextMetrics && isFirefox ? 512 : 2048;
const lineSpacing = /* @__PURE__ */ Object.create(null);
const ctx = document.createElement("canvas").getContext("2d");
const $div = document.createElement("div");
$div.className = "ASS-fix-font-size";
$div.style.fontSize = `${unitsPerEm}px`;
const $span = document.createElement("span");
$span.textContent = "0";
$div.append($span);
const $fixFontSize = useTextMetrics ? null : $div;
function getRealFontSize(fn, fs) {
  if (!lineSpacing[fn]) {
    if (useTextMetrics) {
      ctx.font = `${unitsPerEm}px "${fn}"`;
      const tm = ctx.measureText("");
      lineSpacing[fn] = tm.fontBoundingBoxAscent + tm.fontBoundingBoxDescent;
    } else {
      $span.style.fontFamily = `"${fn}"`;
      lineSpacing[fn] = $span.clientHeight;
    }
  }
  return fs * unitsPerEm / lineSpacing[fn];
}
function alpha2opacity(a) {
  return 1 - `0x${a}` / 255;
}
function color2rgba(c) {
  const t = c.match(/(\w\w)(\w\w)(\w\w)(\w\w)/);
  const a = alpha2opacity(t[1]);
  const b = +`0x${t[2]}`;
  const g = +`0x${t[3]}`;
  const r = +`0x${t[4]}`;
  return `rgba(${r},${g},${b},${a})`;
}
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.trunc(Math.random() * 16);
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
function createSVGEl(name, attrs = []) {
  const $el = document.createElementNS("http://www.w3.org/2000/svg", name);
  for (let i = 0; i < attrs.length; i += 1) {
    const attr = attrs[i];
    $el.setAttributeNS(
      attr[0] === "xlink:href" ? "http://www.w3.org/1999/xlink" : null,
      attr[0],
      attr[1]
    );
  }
  return $el;
}
const GLOBAL_CSS = '.ASS-box{font-family:Arial;overflow:hidden;pointer-events:none;position:absolute}.ASS-dialogue{font-size:0;width:max-content;position:absolute;z-index:0;transform:translate(calc(var(--ass-align-h)*-1),calc(var(--ass-align-v)*-1))}.ASS-dialogue span{display:inline-block}.ASS-dialogue [data-text]{display:inline-block;color:var(--ass-fill-color);font-size:calc(var(--ass-scale)*var(--ass-real-fs)*1px);line-height:calc(var(--ass-scale)*var(--ass-tag-fs)*1px);letter-spacing:calc(var(--ass-scale)*var(--ass-tag-fsp)*1px)}.ASS-dialogue[data-wrap-style="0"],.ASS-dialogue[data-wrap-style="3"]{text-wrap:balance;white-space:pre-wrap}.ASS-dialogue[data-wrap-style="1"]{word-break:break-word;white-space:normal}.ASS-dialogue[data-wrap-style="2"]{word-break:normal;white-space:nowrap}.ASS-dialogue [data-border-style="1"]{position:relative;filter:blur(calc(var(--ass-tag-blur)*calc(1 - sign(var(--ass-tag-xbord)))*calc(1 - sign(var(--ass-tag-ybord)))*1px))}.ASS-dialogue [data-border-style="1"]::after,.ASS-dialogue [data-border-style="1"]::before{content:attr(data-text);position:absolute;top:0;left:0;z-index:-1;filter:blur(calc(var(--ass-tag-blur)*1px))}.ASS-dialogue [data-border-style="1"]::before{color:var(--ass-shadow-color);transform:translate(calc(var(--ass-scale-stroke)*var(--ass-tag-xshad)*1px),calc(var(--ass-scale-stroke)*var(--ass-tag-yshad)*1px));-webkit-text-stroke:var(--ass-border-width) var(--ass-shadow-color);text-shadow:var(--ass-shadow-delta);opacity:var(--ass-shadow-opacity)}.ASS-dialogue [data-border-style="1"]::after{color:transparent;-webkit-text-stroke:var(--ass-border-width) var(--ass-border-color);text-shadow:var(--ass-border-delta);opacity:var(--ass-border-opacity)}.ASS-dialogue [data-border-style="3"]{padding:calc(var(--ass-scale-stroke)*var(--ass-tag-xbord)*1px) calc(var(--ass-scale-stroke)*var(--ass-tag-ybord)*1px);position:relative;filter:blur(calc(var(--ass-tag-blur)*1px))}.ASS-dialogue [data-border-style="3"]::after,.ASS-dialogue [data-border-style="3"]::before{content:"";width:100%;height:100%;position:absolute;z-index:-1}.ASS-dialogue [data-border-style="3"]::before{background-color:var(--ass-shadow-color);left:calc(var(--ass-scale-stroke)*var(--ass-tag-xshad)*1px);top:calc(var(--ass-scale-stroke)*var(--ass-tag-yshad)*1px)}.ASS-dialogue [data-border-style="3"]::after{background-color:var(--ass-border-color);left:0;top:0}@container style(--ass-tag-xbord: 0) and style(--ass-tag-ybord: 0){.ASS-dialogue [data-border-style="3"]::after{background-color:transparent}}@container style(--ass-tag-xshad: 0) and style(--ass-tag-yshad: 0){.ASS-dialogue [data-border-style="3"]::before{background-color:transparent}}.ASS-dialogue [data-rotate]{transform:perspective(312.5px) rotateY(calc(var(--ass-tag-fry)*1deg)) rotateX(calc(var(--ass-tag-frx)*1deg)) rotateZ(calc(var(--ass-tag-frz)*-1deg))}.ASS-dialogue [data-text][data-rotate]{transform-style:preserve-3d;word-break:normal;white-space:nowrap}.ASS-dialogue [data-scale],.ASS-dialogue [data-skew]{display:inline-block;transform:scale(var(--ass-tag-fscx),var(--ass-tag-fscy)) skew(calc(var(--ass-tag-fax)*1rad),calc(var(--ass-tag-fay)*1rad));transform-origin:var(--ass-align-h) var(--ass-align-v)}.ASS-fix-font-size{font-family:Arial;line-height:normal;width:0;height:0;position:absolute;visibility:hidden;overflow:hidden}.ASS-clip-area,.ASS-fix-font-size span{position:absolute}.ASS-clip-area{width:100%;height:100%;top:0;left:0}.ASS-effect-area{position:absolute;display:flex;width:100%;height:fit-content;overflow:hidden;mask-composite:intersect}.ASS-effect-area[data-effect=banner]{flex-direction:column;height:100%}.ASS-effect-area .ASS-dialogue{position:static;transform:none}';
function addGlobalStyle(container) {
  const rootNode = container.getRootNode() || document;
  const styleRoot = rootNode === document ? document.head : rootNode;
  let $style = styleRoot.querySelector("#ASS-global-style");
  if (!$style) {
    $style = document.createElement("style");
    $style.type = "text/css";
    $style.id = "ASS-global-style";
    $style.append(document.createTextNode(GLOBAL_CSS));
    styleRoot.append($style);
  }
}
function initAnimation($el, keyframes, options) {
  const animation = $el.animate(keyframes, options);
  animation.pause();
  return animation;
}
function batchAnimate(dia, action) {
  (dia.animations || []).forEach((animation) => {
    animation[action]();
  });
}
function createEffect(effect, duration) {
  const { name, delay, leftToRight } = effect;
  const translate = name === "banner" ? "X" : "Y";
  const dir = {
    X: leftToRight ? 1 : -1,
    Y: /up/.test(name) ? -1 : 1
  }[translate];
  const start = -100 * dir;
  const distance = duration / (delay || 1) * dir;
  const keyframes = [
    { offset: 0, transform: `translate${translate}(${start}%)` },
    { offset: 1, transform: `translate${translate}(calc(${start}% + var(--ass-scale) * ${distance}px))` }
  ];
  return [keyframes, { duration, fill: "forwards" }];
}
function multiplyScale(v) {
  return `calc(var(--ass-scale) * ${v}px)`;
}
function createMove(move, duration) {
  const { x1, y1, x2, y2, t1, t2 } = move;
  const start = `translate(${multiplyScale(x1)}, ${multiplyScale(y1)})`;
  const end = `translate(${multiplyScale(x2)}, ${multiplyScale(y2)})`;
  const moveDuration = Math.max(t2, duration);
  const keyframes = [
    { offset: 0, transform: start },
    t1 > 0 ? { offset: t1 / moveDuration, transform: start } : null,
    t2 > 0 && t2 < duration ? { offset: t2 / moveDuration, transform: end } : null,
    { offset: 1, transform: end }
  ].filter(Boolean);
  const options = { duration: moveDuration, fill: "forwards" };
  return [keyframes, options];
}
function createFadeList(fade, duration) {
  const { type, a1, a2, a3, t1, t2, t3, t4 } = fade;
  if (type === "fad") {
    const t1Keyframes = [{ offset: 0, opacity: 0 }, { offset: 1, opacity: 1 }];
    const t2Keyframes = [{ offset: 0, opacity: 1 }, { offset: 1, opacity: 0 }];
    return [
      [t2Keyframes, { duration: t2, delay: duration - t2, fill: "forwards" }],
      [t1Keyframes, { duration: t1, composite: "replace" }]
    ];
  }
  const fadeDuration = Math.max(duration, t4);
  const opacities = [a1, a2, a3].map((a) => 1 - a / 255);
  const offsets = [0, t1, t2, t3, t4].map((t) => t / fadeDuration);
  const keyframes = offsets.map((t, i) => ({ offset: t, opacity: opacities[i >> 1] }));
  return [
    [keyframes, { duration: fadeDuration, fill: "forwards" }]
  ];
}
function createAnimatableVars(tag) {
  return [
    ["real-fs", getRealFontSize(tag.fn, tag.fs)],
    ["tag-fs", tag.fs],
    ["tag-fsp", tag.fsp],
    ["fill-color", color2rgba(tag.a1 + tag.c1)]
  ].filter(([, v]) => v).map(([k, v]) => [`--ass-${k}`, v]);
}
if (window.CSS.registerProperty) {
  ["real-fs", "tag-fs", "tag-fsp"].forEach((k) => {
    window.CSS.registerProperty({
      name: `--ass-${k}`,
      syntax: "<number>",
      inherits: true,
      initialValue: "0"
    });
  });
  window.CSS.registerProperty({
    name: "--ass-fill-color",
    syntax: "<color>",
    inherits: true,
    initialValue: "transparent"
  });
}
function getEasing(duration, accel) {
  if (accel === 1) return "linear";
  const frames = Math.ceil(duration / 1e3 * 60);
  const points = Array.from({ length: frames + 1 }).map((_, i) => (i / frames) ** accel);
  return `linear(${points.join(",")})`;
}
function createDialogueAnimations(el, dialogue) {
  const { start, end, effect, move, fade } = dialogue;
  const duration = (end - start) * 1e3;
  return [
    effect && !move ? createEffect(effect, duration) : null,
    move ? createMove(move, duration) : null,
    ...fade ? createFadeList(fade, duration) : []
  ].filter(Boolean).map(([keyframes, options]) => initAnimation(el, keyframes, options));
}
function createTagKeyframes(fromTag, tag, key) {
  const value = tag[key];
  if (value === void 0) return [];
  if (key === "clip") return [];
  if (key === "a1" || key === "c1") {
    return [["fill-color", color2rgba((tag.a1 || fromTag.a1) + (tag.c1 || fromTag.c1))]];
  }
  if (key === "c3") {
    return [["border-color", color2rgba(`00${tag.c3}`)]];
  }
  if (key === "a3") {
    return [["border-opacity", alpha2opacity(tag.a3)]];
  }
  if (key === "c4") {
    return [["shadow-color", color2rgba(`00${tag.c4}`)]];
  }
  if (key === "a4") {
    return [["shadow-opacity", alpha2opacity(tag.a4)]];
  }
  if (key === "fs") {
    return [
      ["real-fs", getRealFontSize(tag.fn || fromTag.fn, tag.fs)],
      ["tag-fs", value]
    ];
  }
  if (key === "fscx" || key === "fscy") {
    return [[`tag-${key}`, (value || 100) / 100]];
  }
  return [[`tag-${key}`, value]];
}
function createTagAnimations(el, fragment, sliceTag) {
  const fromTag = { ...sliceTag, ...fragment.tag };
  return (fragment.tag.t || []).map(({ t1, t2, accel, tag }) => {
    const keyframe = Object.fromEntries(
      Object.keys(tag).flatMap((key) => createTagKeyframes(fromTag, tag, key)).map(([k, v]) => [`--ass-${k}`, v]).concat([["offset", 1]])
    );
    const duration = Math.max(0, t2 - t1);
    return initAnimation(el, [keyframe], {
      duration,
      delay: t1,
      fill: "forwards",
      easing: getEasing(duration, accel)
    });
  });
}
function createClipAnimations(el, dialogue, store) {
  return dialogue.slices.flatMap((slice) => slice.fragments).flatMap((fragment) => fragment.tag.t || []).filter(({ tag }) => tag.clip).map(({ t1, t2, accel, tag }) => {
    const keyframe = {
      offset: 1,
      clipPath: createRectClip(tag.clip, store.scriptRes.width, store.scriptRes.height)
    };
    const duration = Math.max(0, t2 - t1);
    return initAnimation(el, [keyframe], {
      duration,
      delay: t1,
      fill: "forwards",
      easing: getEasing(duration, accel)
    });
  });
}
function createRectClip(clip, sw, sh) {
  if (!clip.dots) return "";
  const { x1, y1, x2, y2 } = clip.dots;
  const polygon = [[x1, y1], [x1, y2], [x2, y2], [x2, y1], [x1, y1]].map(([x, y]) => [x / sw, y / sh]).concat(clip.inverse ? [[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]] : []).map((pair) => pair.map((n) => `${n * 100}%`).join(" ")).join(",");
  return `polygon(evenodd, ${polygon})`;
}
function createPathClip(clip, sw, sh, store) {
  if (!clip.drawing) return "";
  const scale = store.scale / (1 << clip.scale - 1);
  let d = clip.drawing.instructions.map(({ type, points }) => type + points.map(({ x, y }) => `${x * scale},${y * scale}`).join(",")).join("");
  if (clip.inverse) {
    d += `M0,0L0,${sh},${sw},${sh},${sw},0,0,0Z`;
  }
  return `path(evenodd, "${d}")`;
}
function getClipPath(dialogue, store) {
  const { clip, animations } = dialogue;
  if (!clip) return {};
  const { width, height } = store.scriptRes;
  const $clipArea = document.createElement("div");
  store.box.insertBefore($clipArea, dialogue.$div);
  $clipArea.append(dialogue.$div);
  $clipArea.className = "ASS-clip-area";
  $clipArea.style.zIndex = dialogue.$div.style.zIndex;
  $clipArea.style.clipPath = clip.dots ? createRectClip(clip, width, height) : createPathClip(clip, width, height, store);
  animations.push(...createClipAnimations($clipArea, dialogue, store));
  return { $div: $clipArea };
}
function createSVGStroke(tag, id, scale) {
  const hasBorder = tag.xbord || tag.ybord;
  const hasShadow = tag.xshad || tag.yshad;
  const isOpaque = tag.a1 !== "FF";
  const blur = tag.blur || tag.be || 0;
  const $filter = createSVGEl("filter", [["id", id]]);
  $filter.append(createSVGEl("feGaussianBlur", [
    ["stdDeviation", hasBorder ? 0 : blur],
    ["in", "SourceGraphic"],
    ["result", "sg_b"]
  ]));
  $filter.append(createSVGEl("feFlood", [
    ["flood-color", color2rgba(tag.a1 + tag.c1)],
    ["result", "c1"]
  ]));
  $filter.append(createSVGEl("feComposite", [
    ["operator", "in"],
    ["in", "c1"],
    ["in2", "sg_b"],
    ["result", "main"]
  ]));
  if (hasBorder) {
    $filter.append(createSVGEl("feMorphology", [
      ["radius", `${tag.xbord * scale} ${tag.ybord * scale}`],
      ["operator", "dilate"],
      ["in", "SourceGraphic"],
      ["result", "dil"]
    ]));
    $filter.append(createSVGEl("feGaussianBlur", [
      ["stdDeviation", blur],
      ["in", "dil"],
      ["result", "dil_b"]
    ]));
    $filter.append(createSVGEl("feComposite", [
      ["operator", "out"],
      ["in", "dil_b"],
      ["in2", "SourceGraphic"],
      ["result", "dil_b_o"]
    ]));
    $filter.append(createSVGEl("feFlood", [
      ["flood-color", color2rgba(tag.a3 + tag.c3)],
      ["result", "c3"]
    ]));
    $filter.append(createSVGEl("feComposite", [
      ["operator", "in"],
      ["in", "c3"],
      ["in2", "dil_b_o"],
      ["result", "border"]
    ]));
  }
  if (hasShadow && (hasBorder || isOpaque)) {
    $filter.append(createSVGEl("feOffset", [
      ["dx", tag.xshad * scale],
      ["dy", tag.yshad * scale],
      ["in", hasBorder ? "dil" : "SourceGraphic"],
      ["result", "off"]
    ]));
    $filter.append(createSVGEl("feGaussianBlur", [
      ["stdDeviation", blur],
      ["in", "off"],
      ["result", "off_b"]
    ]));
    if (!isOpaque) {
      $filter.append(createSVGEl("feOffset", [
        ["dx", tag.xshad * scale],
        ["dy", tag.yshad * scale],
        ["in", "SourceGraphic"],
        ["result", "sg_off"]
      ]));
      $filter.append(createSVGEl("feComposite", [
        ["operator", "out"],
        ["in", "off_b"],
        ["in2", "sg_off"],
        ["result", "off_b_o"]
      ]));
    }
    $filter.append(createSVGEl("feFlood", [
      ["flood-color", color2rgba(tag.a4 + tag.c4)],
      ["result", "c4"]
    ]));
    $filter.append(createSVGEl("feComposite", [
      ["operator", "in"],
      ["in", "c4"],
      ["in2", isOpaque ? "off_b" : "off_b_o"],
      ["result", "shadow"]
    ]));
  }
  const $merge = createSVGEl("feMerge", []);
  if (hasShadow && (hasBorder || isOpaque)) {
    $merge.append(createSVGEl("feMergeNode", [["in", "shadow"]]));
  }
  if (hasBorder) {
    $merge.append(createSVGEl("feMergeNode", [["in", "border"]]));
  }
  $merge.append(createSVGEl("feMergeNode", [["in", "main"]]));
  $filter.append($merge);
  return $filter;
}
function get4QuadrantPoints([x, y]) {
  return [[0, 0], [0, 1], [1, 0], [1, 1]].filter(([i, j]) => (i || x) && (j || y)).map(([i, j]) => [(i || -1) * x, (j || -1) * y]);
}
function getOffsets(x, y) {
  if (x === y) return [];
  const nx = Math.min(x, y);
  const ny = Math.max(x, y);
  return Array.from({ length: Math.ceil(ny) - 1 }, (_, i) => i + 1).concat(ny).map((n) => [(ny - n) / ny * nx, n]).map(([i, j]) => x > y ? [j, i] : [i, j]).flatMap(get4QuadrantPoints);
}
function createCSSStroke(tag, scale) {
  const bc = color2rgba(`00${tag.c3}`);
  const bx = tag.xbord * scale;
  const by = tag.ybord * scale;
  const sc = color2rgba(`00${tag.c4}`);
  const blur = tag.blur || tag.be || 0;
  const deltaOffsets = getOffsets(bx, by);
  return [
    ["border-width", `${Math.min(bx, by) * 2}px`],
    ["border-color", bc],
    ["border-opacity", alpha2opacity(tag.a3)],
    ["border-delta", deltaOffsets.map(([x, y]) => `${x}px ${y}px ${bc}`).join(",")],
    ["shadow-color", sc],
    ["shadow-opacity", alpha2opacity(tag.a4)],
    ["shadow-delta", deltaOffsets.map(([x, y]) => `${x}px ${y}px ${sc}`).join(",")],
    ["tag-blur", blur],
    ["tag-xbord", tag.xbord],
    ["tag-ybord", tag.ybord],
    ["tag-xshad", tag.xshad],
    ["tag-yshad", tag.yshad]
  ].map(([k, v]) => [`--ass-${k}`, v]);
}
if (window.CSS.registerProperty) {
  window.CSS.registerProperty({
    name: "--ass-border-width",
    syntax: "<length>",
    inherits: true,
    initialValue: "0px"
  });
  ["border-color", "shadow-color"].forEach((k) => {
    window.CSS.registerProperty({
      name: `--ass-${k}`,
      syntax: "<color>",
      inherits: true,
      initialValue: "transparent"
    });
  });
  ["border-opacity", "shadow-opacity"].forEach((k) => {
    window.CSS.registerProperty({
      name: `--ass-${k}`,
      syntax: "<number>",
      inherits: true,
      initialValue: "1"
    });
  });
  ["blur", "xbord", "ybord", "xshad", "yshad"].forEach((k) => {
    window.CSS.registerProperty({
      name: `--ass-tag-${k}`,
      syntax: "<number>",
      inherits: true,
      initialValue: "0"
    });
  });
}
function createDrawing(fragment, styleTag, store) {
  if (!fragment.drawing.d) return null;
  const tag = { ...styleTag, ...fragment.tag };
  const { minX, minY, width, height } = fragment.drawing;
  const baseScale = store.scale / (1 << tag.p - 1);
  const scaleX = (tag.fscx ? tag.fscx / 100 : 1) * baseScale;
  const scaleY = (tag.fscy ? tag.fscy / 100 : 1) * baseScale;
  const blur = tag.blur || tag.be || 0;
  const vbx = tag.xbord + (tag.xshad < 0 ? -tag.xshad : 0) + blur;
  const vby = tag.ybord + (tag.yshad < 0 ? -tag.yshad : 0) + blur;
  const vbw = width * scaleX + 2 * tag.xbord + Math.abs(tag.xshad) + 2 * blur;
  const vbh = height * scaleY + 2 * tag.ybord + Math.abs(tag.yshad) + 2 * blur;
  const $svg = createSVGEl("svg", [
    ["width", vbw],
    ["height", vbh],
    ["viewBox", `${-vbx} ${-vby} ${vbw} ${vbh}`]
  ]);
  const strokeScale = store.sbas ? store.scale : 1;
  const filterId = `ASS-${uuid()}`;
  const $defs = createSVGEl("defs");
  $defs.append(createSVGStroke(tag, filterId, strokeScale));
  $svg.append($defs);
  const symbolId = `ASS-${uuid()}`;
  const $symbol = createSVGEl("symbol", [
    ["id", symbolId],
    ["viewBox", `${minX} ${minY} ${width} ${height}`]
  ]);
  $symbol.append(createSVGEl("path", [["d", fragment.drawing.d]]));
  $svg.append($symbol);
  $svg.append(createSVGEl("use", [
    ["width", width * scaleX],
    ["height", height * scaleY],
    ["xlink:href", `#${symbolId}`],
    ["filter", `url(#${filterId})`]
  ]));
  $svg.style.cssText = `position:absolute;left:${minX * scaleX - vbx}px;top:${minY * scaleY - vby}px;`;
  return {
    $svg,
    cssText: `position:relative;width:${width * scaleX}px;height:${height * scaleY}px;`
  };
}
const rotateTags = ["frx", "fry", "frz"];
const scaleTags = ["fscx", "fscy"];
const skewTags = ["fax", "fay"];
if (window.CSS.registerProperty) {
  [...rotateTags, ...skewTags].forEach((tag) => {
    window.CSS.registerProperty({
      name: `--ass-tag-${tag}`,
      syntax: "<number>",
      inherits: true,
      initialValue: 0
    });
  });
  scaleTags.forEach((tag) => {
    window.CSS.registerProperty({
      name: `--ass-tag-${tag}`,
      syntax: "<number>",
      inherits: true,
      initialValue: 1
    });
  });
}
function createTransform(tag) {
  return [
    ...[...rotateTags, ...skewTags].map((x) => [`--ass-tag-${x}`, `${tag[x] || 0}`]),
    ...scaleTags.map((x) => [`--ass-tag-${x}`, tag.p ? 1 : (tag[x] || 100) / 100])
  ];
}
function setTransformOrigin(dialogue, scale) {
  const { align, width, height, x, y, $div: $div2 } = dialogue;
  const orgX = (dialogue.org ? dialogue.org.x * scale : x) + [0, width / 2, width][align.h];
  const orgY = (dialogue.org ? dialogue.org.y * scale : y) + [height, height / 2, 0][align.v];
  for (let i = $div2.childNodes.length - 1; i >= 0; i -= 1) {
    const node = $div2.childNodes[i];
    if (node.dataset.rotate === "") {
      const tox = orgX - x - node.offsetLeft;
      const toy = orgY - y - node.offsetTop;
      node.style.cssText += `transform-origin:${tox}px ${toy}px;`;
    }
  }
}
function encodeText(text, q) {
  return text.replace(/\\h/g, " ").replace(/\\N/g, "\n").replace(/\\n/g, q === 2 ? "\n" : " ");
}
function createDialogue(dialogue, store) {
  const { styles } = store;
  const $div2 = document.createElement("div");
  $div2.className = "ASS-dialogue";
  $div2.dataset.wrapStyle = dialogue.q;
  const df = document.createDocumentFragment();
  const { align, slices } = dialogue;
  [
    ["--ass-align-h", ["0%", "50%", "100%"][align.h]],
    ["--ass-align-v", ["100%", "50%", "0%"][align.v]]
  ].forEach(([k, v]) => {
    $div2.style.setProperty(k, v);
  });
  const animations = [];
  slices.forEach((slice) => {
    const sliceTag = styles[slice.style].tag;
    const borderStyle = styles[slice.style].style.BorderStyle;
    slice.fragments.forEach((fragment) => {
      const { text, drawing } = fragment;
      const tag = { ...sliceTag, ...fragment.tag };
      let cssText = "";
      const cssVars = [];
      if (!drawing) {
        cssVars.push(...createAnimatableVars(tag));
        const scale = store.sbas ? store.scale : 1;
        cssVars.push(...createCSSStroke(tag, scale));
        cssText += `font-family:"${tag.fn}";`;
        cssText += tag.b ? `font-weight:${tag.b === 1 ? "bold" : tag.b};` : "";
        cssText += tag.i ? "font-style:italic;" : "";
        cssText += tag.u || tag.s ? `text-decoration:${tag.u ? "underline" : ""} ${tag.s ? "line-through" : ""};` : "";
      }
      if (drawing && tag.pbo) {
        const pbo = -tag.pbo * (tag.fscy || 100) / 100;
        cssText += `vertical-align:calc(var(--ass-scale) * ${pbo}px);`;
      }
      cssVars.push(...createTransform(tag));
      const tags = [tag, ...(tag.t || []).map((t) => t.tag)];
      const hasRotate = rotateTags.some((x) => tags.some((t) => t[x]));
      const hasScale = scaleTags.some((x) => tags.some((t) => t[x] !== void 0 && t[x] !== 100));
      const hasSkew = skewTags.some((x) => tags.some((t) => t[x]));
      encodeText(text, tag.q).split("\n").forEach((content, idx) => {
        const $span2 = document.createElement("span");
        const $ssspan = document.createElement("span");
        if (hasScale || hasSkew) {
          if (hasScale) {
            $ssspan.dataset.scale = "";
          }
          if (hasSkew) {
            $ssspan.dataset.skew = "";
          }
          $ssspan.textContent = content;
        }
        if (hasRotate) {
          $span2.dataset.rotate = "";
        }
        if (drawing) {
          $span2.dataset.drawing = "";
          const obj = createDrawing(fragment, sliceTag, store);
          if (!obj) return;
          $span2.style.cssText = obj.cssText;
          $span2.append(obj.$svg);
        } else {
          if (idx) {
            df.append(document.createElement("br"));
          }
          if (!content) return;
          if (hasScale || hasSkew) {
            $span2.append($ssspan);
          } else {
            $span2.textContent = content;
          }
          const el = hasScale || hasSkew ? $ssspan : $span2;
          el.dataset.text = content;
          if (tag.xbord || tag.ybord || tag.xshad || tag.yshad) {
            el.dataset.borderStyle = borderStyle;
          }
        }
        $span2.style.cssText += cssText;
        cssVars.forEach(([k, v]) => {
          $span2.style.setProperty(k, v);
        });
        animations.push(...createTagAnimations($span2, fragment, sliceTag));
        df.append($span2);
      });
    });
  });
  animations.push(...createDialogueAnimations($div2, dialogue));
  $div2.append(df);
  return { $div: $div2, animations };
}
function allocate(dialogue, store) {
  const { video, space, scale } = store;
  const { layer, margin, width, height, alignment, end } = dialogue;
  const stageWidth = store.width - Math.trunc(scale * (margin.left + margin.right));
  const stageHeight = store.height;
  const vertical = Math.trunc(scale * margin.vertical);
  const vct = video.currentTime * 100;
  space[layer] = space[layer] || {
    left: { width: new Uint16Array(stageHeight + 1), end: new Uint32Array(stageHeight + 1) },
    center: { width: new Uint16Array(stageHeight + 1), end: new Uint32Array(stageHeight + 1) },
    right: { width: new Uint16Array(stageHeight + 1), end: new Uint32Array(stageHeight + 1) }
  };
  const channel = space[layer];
  const alignH = ["right", "left", "center"][alignment % 3];
  const willCollide = (y) => {
    const lw = channel.left.width[y];
    const cw = channel.center.width[y];
    const rw = channel.right.width[y];
    const le = channel.left.end[y];
    const ce = channel.center.end[y];
    const re = channel.right.end[y];
    return alignH === "left" && (le > vct && lw || ce > vct && cw && 2 * width + cw > stageWidth || re > vct && rw && width + rw > stageWidth) || alignH === "center" && (le > vct && lw && 2 * lw + width > stageWidth || ce > vct && cw || re > vct && rw && 2 * rw + width > stageWidth) || alignH === "right" && (le > vct && lw && lw + width > stageWidth || ce > vct && cw && 2 * width + cw > stageWidth || re > vct && rw);
  };
  let count = 0;
  let result = 0;
  const find = (y) => {
    count = willCollide(y) ? 0 : count + 1;
    if (count >= height) {
      result = y;
      return true;
    }
    return false;
  };
  if (alignment <= 3) {
    result = stageHeight - vertical - 1;
    for (let i = result; i > vertical; i -= 1) {
      if (find(i)) break;
    }
  } else if (alignment >= 7) {
    result = vertical + 1;
    for (let i = result; i < stageHeight - vertical; i += 1) {
      if (find(i)) break;
    }
  } else {
    result = stageHeight - height >> 1;
    for (let i = result; i < stageHeight - vertical; i += 1) {
      if (find(i)) break;
    }
  }
  if (alignment > 3) {
    result -= height - 1;
  }
  for (let i = result; i < result + height; i += 1) {
    channel[alignH].width[i] = width;
    channel[alignH].end[i] = end * 100;
  }
  return result;
}
function getPosition(dialogue, store) {
  const { scale } = store;
  const { move, align, width, height, margin, slices } = dialogue;
  let x = 0;
  let y = 0;
  if (dialogue.pos || move) {
    const pos = dialogue.pos || { x: 0, y: 0 };
    const sx = scale * pos.x;
    const sy = scale * pos.y;
    x = [sx, sx - width / 2, sx - width][align.h];
    y = [sy - height, sy - height / 2, sy][align.v];
  } else {
    x = [
      0,
      (store.width - width) / 2,
      store.width - width - scale * margin.right
    ][align.h];
    const hasT = slices.some((slice) => slice.fragments.some(({ keyframes }) => keyframes?.length));
    y = hasT ? [
      store.height - height - margin.vertical,
      (store.height - height) / 2,
      margin.vertical
    ][align.v] : allocate(dialogue, store);
  }
  return {
    x: x + [0, width / 2, width][align.h],
    y: y + [height, height / 2, 0][align.v]
  };
}
function createStyle(dialogue) {
  const { layer, align, effect, pos, margin, q } = dialogue;
  let cssText = "";
  if (layer) cssText += `z-index:${layer};`;
  cssText += `text-align:${["left", "center", "right"][align.h]};`;
  if (!effect) {
    if (q !== 2) {
      cssText += `max-width:calc(100% - var(--ass-scale) * ${margin.left + margin.right}px);`;
    }
    if (!pos) {
      if (align.h !== 0) {
        cssText += `padding-right:calc(var(--ass-scale) * ${margin.right}px);`;
      }
      if (align.h !== 2) {
        cssText += `padding-left:calc(var(--ass-scale) * ${margin.left}px);`;
      }
    }
  }
  return cssText;
}
function setEffect(dialogue, store) {
  const $area = document.createElement("div");
  $area.className = "ASS-effect-area";
  store.box.insertBefore($area, dialogue.$div);
  $area.append(dialogue.$div);
  const { width, height } = store.scriptRes;
  const { name, y1, y2, leftToRight, fadeAwayWidth, fadeAwayHeight } = dialogue.effect;
  const min = Math.min(y1, y2);
  const max = Math.max(y1, y2);
  $area.dataset.effect = name;
  if (name === "banner") {
    $area.style.alignItems = leftToRight ? "flex-start" : "flex-end";
    $area.style.justifyContent = ["flex-end", "center", "flex-start"][dialogue.align.v];
  }
  if (name.startsWith("scroll")) {
    const top = min / height * 100;
    const bottom = (height - max) / height * 100;
    $area.style.cssText = `top:${top}%;bottom:${bottom}%;`;
    $area.style.justifyContent = ["flex-start", "center", "flex-end"][dialogue.align.h];
  }
  if (fadeAwayHeight) {
    const p = fadeAwayHeight / (max - min) * 100;
    $area.style.maskImage = [
      `linear-gradient(#000 ${100 - p}%, transparent)`,
      `linear-gradient(transparent, #000 ${p}%)`
    ].join(",");
  }
  if (fadeAwayWidth) {
    const p = fadeAwayWidth / width * 100;
    $area.style.maskImage = `linear-gradient(90deg, transparent, #000 ${p}%)`;
  }
  return $area;
}
function renderer(dialogue, store) {
  const { $div: $div2, animations } = createDialogue(dialogue, store);
  Object.assign(dialogue, { $div: $div2, animations });
  store.box.append($div2);
  const { width } = $div2.getBoundingClientRect();
  Object.assign(dialogue, { width });
  $div2.style.cssText += createStyle(dialogue);
  const { height } = $div2.getBoundingClientRect();
  Object.assign(dialogue, { height });
  const { x, y } = getPosition(dialogue, store);
  Object.assign(dialogue, { x, y });
  $div2.style.cssText += `left:${x}px;top:${y}px;`;
  setTransformOrigin(dialogue, store.scale);
  Object.assign(dialogue, getClipPath(dialogue, store));
  if (dialogue.effect) {
    Object.assign(dialogue, { $div: setEffect(dialogue, store) });
  }
  return dialogue;
}
function clear(store) {
  const { box } = store;
  while (box.lastChild) {
    box.lastChild.remove();
  }
  store.actives = [];
  store.space = [];
}
function framing(store) {
  const { video, dialogues, actives } = store;
  const vct = video.currentTime - store.delay;
  for (let i = actives.length - 1; i >= 0; i -= 1) {
    const dia = actives[i];
    const { end } = dia;
    if (end < vct) {
      dia.$div.remove();
      actives.splice(i, 1);
    }
  }
  while (store.index < dialogues.length && vct >= dialogues[store.index].start) {
    if (vct < dialogues[store.index].end) {
      const dia = renderer(dialogues[store.index], store);
      (dia.animations || []).forEach((animation) => {
        animation.currentTime = (vct - dia.start) * 1e3;
      });
      if (!video.paused) {
        batchAnimate(dia, "play");
      }
      actives.push(dia);
    }
    store.index += 1;
  }
}
function createSeek(store) {
  return function seek() {
    clear(store);
    const { video, dialogues } = store;
    const vct = video.currentTime - store.delay;
    store.index = (() => {
      for (let i = 0; i < dialogues.length; i += 1) {
        if (vct < dialogues[i].end) {
          return i;
        }
      }
      return (dialogues.length || 1) - 1;
    })();
    framing(store);
  };
}
function createPlay(store) {
  return function play() {
    const frame = () => {
      framing(store);
      store.requestId = requestAnimationFrame(frame);
    };
    cancelAnimationFrame(store.requestId);
    store.requestId = requestAnimationFrame(frame);
    store.actives.forEach((dia) => {
      batchAnimate(dia, "play");
    });
  };
}
function createPause(store) {
  return function pause() {
    cancelAnimationFrame(store.requestId);
    store.requestId = 0;
    store.actives.forEach((dia) => {
      batchAnimate(dia, "pause");
    });
  };
}
function createResize(that, store) {
  const { video, box, layoutRes } = store;
  return function resize() {
    const cw = video.clientWidth;
    const ch = video.clientHeight;
    const vw = layoutRes.width || video.videoWidth || cw;
    const vh = layoutRes.height || video.videoHeight || ch;
    const sw = store.scriptRes.width;
    const sh = store.scriptRes.height;
    let rw = sw;
    let rh = sh;
    const videoScale = Math.min(cw / vw, ch / vh);
    if (that.resampling === "video_width") {
      rh = sw / vw * vh;
    }
    if (that.resampling === "video_height") {
      rw = sh / vh * vw;
    }
    store.scale = Math.min(cw / rw, ch / rh);
    if (that.resampling === "script_width") {
      store.scale = videoScale * (vw / rw);
    }
    if (that.resampling === "script_height") {
      store.scale = videoScale * (vh / rh);
    }
    const bw = store.scale * rw;
    const bh = store.scale * rh;
    store.width = bw;
    store.height = bh;
    store.resampledRes = { width: rw, height: rh };
    box.style.cssText = `width:${bw}px;height:${bh}px;top:${(ch - bh) / 2}px;left:${(cw - bw) / 2}px;`;
    box.style.setProperty("--ass-scale", store.scale);
    box.style.setProperty("--ass-scale-stroke", store.sbas ? store.scale : 1);
    createSeek(store)();
  };
}
class ASS {
  #store = {
    /** @type {HTMLVideoElement} */
    video: null,
    /** the box to display subtitles */
    box: document.createElement("div"),
    /**
     * video resize observer
     * @type {ResizeObserver}
     */
    observer: null,
    scale: 1,
    width: 0,
    height: 0,
    /** resolution from ASS file, it's PlayResX and PlayResY */
    scriptRes: {},
    /** resolution from ASS file, it's LayoutResX and LayoutResY */
    layoutRes: {},
    /** resolution after resampling */
    resampledRes: {},
    /** current index of dialogues to match currentTime */
    index: 0,
    /** @type {boolean} ScaledBorderAndShadow */
    sbas: true,
    /** @type {import('ass-compiler').CompiledASSStyle} */
    styles: {},
    /** @type {import('ass-compiler').Dialogue[]} */
    dialogues: [],
    /**
     * active dialogues
     * @type {import('ass-compiler').Dialogue[]}
     */
    actives: [],
    /** record dialogues' position */
    space: [],
    requestId: 0,
    delay: 0
  };
  #play;
  #pause;
  #seek;
  #resize;
  /**
   * Initialize an ASS instance
   * @param {string} content ASS content
   * @param {HTMLVideoElement} video The video element to be associated with
   * @param {ASSOption} [option]
   * @returns {ASS}
   * @example
   *
   * HTML:
   * ```html
   * <div id="container" style="position: relative;">
   *   <video
   *     id="video"
   *     src="./example.mp4"
   *     style="position: absolute; width: 100%; height: 100%;"
   *   ></video>
   *   <!-- ASS will be added here -->
   * </div>
   * ```
   *
   * JavaScript:
   * ```js
   * import ASS from 'assjs';
   *
   * const content = await fetch('/path/to/example.ass').then((res) => res.text());
   * const ass = new ASS(content, document.querySelector('#video'), {
   *   container: document.querySelector('#container'),
   * });
   * ```
   */
  constructor(content, video, { container = video.parentNode, resampling } = {}) {
    this.#store.video = video;
    if (!container) throw new Error("Missing container.");
    const { info, width, height, styles, dialogues } = compile(content);
    this.#store.sbas = /yes/i.test(info.ScaledBorderAndShadow);
    this.#store.layoutRes = {
      width: info.LayoutResX * 1 || video.videoWidth || video.clientWidth,
      height: info.LayoutResY * 1 || video.videoHeight || video.clientHeight
    };
    this.#store.scriptRes = {
      width: width || this.#store.layoutRes.width,
      height: height || this.#store.layoutRes.height
    };
    this.#store.styles = styles;
    this.#store.dialogues = dialogues.map((dia) => Object.assign(dia, {
      effect: ["banner", "scroll up", "scroll down"].includes(dia.effect?.name) ? dia.effect : null,
      align: {
        // 0: left, 1: center, 2: right
        h: (dia.alignment + 2) % 3,
        // 0: bottom, 1: center, 2: top
        v: Math.trunc((dia.alignment - 1) / 3)
      }
    }));
    if ($fixFontSize) {
      container.append($fixFontSize);
    }
    const { box } = this.#store;
    box.className = "ASS-box";
    container.append(box);
    addGlobalStyle(container);
    this.#play = createPlay(this.#store);
    this.#pause = createPause(this.#store);
    this.#seek = createSeek(this.#store);
    video.addEventListener("play", this.#play);
    video.addEventListener("pause", this.#pause);
    video.addEventListener("playing", this.#play);
    video.addEventListener("waiting", this.#pause);
    video.addEventListener("seeking", this.#seek);
    this.#resize = createResize(this, this.#store);
    this.#resize();
    this.resampling = resampling;
    const observer = new ResizeObserver(this.#resize);
    observer.observe(video);
    this.#store.observer = observer;
    return this;
  }
  /**
   * Desctroy the ASS instance
   * @returns {ASS}
   */
  destroy() {
    const { video, box, observer } = this.#store;
    this.#pause();
    clear(this.#store);
    video.removeEventListener("play", this.#play);
    video.removeEventListener("pause", this.#pause);
    video.removeEventListener("playing", this.#play);
    video.removeEventListener("waiting", this.#pause);
    video.removeEventListener("seeking", this.#seek);
    if ($fixFontSize) {
      $fixFontSize.remove();
    }
    box.remove();
    observer.unobserve(this.#store.video);
    this.#store.styles = {};
    this.#store.dialogues = [];
    return this;
  }
  /**
   * Show subtitles in the container
   * @returns {ASS}
   */
  show() {
    this.#store.box.style.visibility = "visible";
    return this;
  }
  /**
   * Hide subtitles in the container
   * @returns {ASS}
   */
  hide() {
    this.#store.box.style.visibility = "hidden";
    return this;
  }
  #resampling = "video_height";
  /** @type {ASSOption['resampling']} */
  get resampling() {
    return this.#resampling;
  }
  set resampling(r) {
    if (r === this.#resampling) return;
    if (/^(video|script)_(width|height)$/.test(r)) {
      this.#resampling = r;
      this.#resize();
    }
  }
  /** @type {number} Subtitle delay in seconds. */
  get delay() {
    return this.#store.delay;
  }
  set delay(d) {
    if (typeof d !== "number") return;
    this.#store.delay = d;
    this.#seek();
  }
  // addDialogue(dialogue) {
  // }
}
function artplayerPluginAss(option) {
  return (art) => {
    let ass = new ASS("", art.video, {
      // Subtitles will display in the container.
      container: art.video.parentNode
      // see resampling API below
      // resampling: "video_width",
    });
    const switchContent = (content) => {
      ass.destroy();
      ass = new ASS(content, art.video, {
        container: art.video.parentNode
      });
    };
    return {
      name: "artplayerPluginAss",
      ass,
      show: ass.show(),
      hide: ass.hide(),
      switch: switchContent,
      destroy: () => {
        ass.destroy();
      }
    };
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  props: {
    option: {}
  },
  emits: ["ready", "error", "seek", "video:durationchange"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const artRef = ref(null);
    let instance = null;
    onMounted(async () => {
      instance = new Artplayer({
        url: "",
        ...props.option,
        container: artRef.value,
        plugins: [
          artplayerPluginAss()
        ],
        customType: {
          flv: (video2, url, art) => {
            if (flvjs.isSupported()) {
              if (art.flv) art.flv.destroy();
              const flv2 = flvjs.createPlayer({ type: "flv", url });
              flv2.attachMediaElement(video2);
              flv2.load();
              art.flv = flv2;
              art.on("destroy", () => flv2.destroy());
            } else {
              art.notice.show = "Unsupported playback format: flv";
            }
          }
        }
      });
      await nextTick();
      emits("ready", instance);
      instance.on("error", (error, reconnectTime) => {
        emits("error", { error, reconnectTime });
      });
      instance.on("seek", (currentTime) => {
        emits("seek", currentTime);
      });
      instance.on("video:durationchange", () => {
        const duration = Number(instance.duration);
        emits("video:durationchange", duration);
      });
    });
    const switchUrl = async (url, type = "") => {
      if (instance) {
        instance.type = type;
        instance?.switchUrl(url);
      } else {
        console.error("instance is null");
      }
    };
    const switchAss = async (subtitle) => {
      if (instance) {
        instance.plugins.artplayerPluginAss.switch(subtitle || "");
      }
    };
    const video = computed(() => instance);
    __expose({
      switchUrl,
      video,
      switchAss
    });
    onBeforeUnmount(() => {
      if (instance && instance.destroy) {
        instance.destroy(false);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "artRef",
        ref: artRef,
        class: "artplayer"
      }, null, 512);
    };
  }
});
export {
  _sfc_main as _
};
