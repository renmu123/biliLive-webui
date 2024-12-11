import { d as defineComponent, p as computed, r as ref, E as onMounted, ah as createElementBlock, e as createBaseVNode, ap as toDisplayString, b as unref, am as createCommentVNode, ai as createStaticVNode, o as openBlock } from "./index-NC0giMhn.js";
import { c as common } from "./common-BvjuSFVx.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-Dum2ZqS2.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About",
  setup(__props) {
    const isWeb = computed(() => window.isWeb);
    const webVersion = "1.6.1";
    const version = ref();
    onMounted(async () => {
      version.value = await common.version();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[0] || (_cache[0] = createBaseVNode("h1", null, "biliLive-tools", -1)),
        _cache[1] || (_cache[1] = createBaseVNode("p", null, " 介绍：做这款工具的主要原因是为了解决录播工具的碎片化，往往想完整处理一场带有弹幕的录播要使用多个软件的配合，一些工具更是只有CLI，加大了使用难度。我想做一个能够一站式解决录播问题的工具，所以就有了这个项目。 ", -1)),
        createBaseVNode("p", null, toDisplayString(unref(isWeb) ? "接口" : "") + "版本：" + toDisplayString(unref(version)), 1),
        unref(isWeb) ? (openBlock(), createElementBlock("p", _hoisted_1, "网页版本：" + toDisplayString(unref(webVersion)), 1)) : createCommentVNode("", true),
        _cache[2] || (_cache[2] = createStaticVNode('<p data-v-309b66c6> 作者：<a href="https://space.bilibili.com/10995238" class="external" target="_blank" data-v-309b66c6>renmu123</a> 点点关注吧，秋梨膏 </p><p data-v-309b66c6> 项目地址：<a href="https://github.com/renmu123/biliLive-tools" class="external" target="_blank" data-v-309b66c6>biliLive-tools</a></p><p data-v-309b66c6> 备用下载地址：<a href="https://www.alipan.com/s/iRyhxjdqGeL" class="external" target="_blank" data-v-309b66c6>biliLive-tools</a></p><p data-v-309b66c6><b data-v-309b66c6>帮助教程：<a href="https://www.bilibili.com/video/BV1Hs421M755/" class="external" target="_blank" data-v-309b66c6>https://www.bilibili.com/video/BV1Hs421M755/</a></b></p><p data-v-309b66c6> 请我喝瓶快乐水：<a href="https://afdian.com/a/renmu123" class="external" target="_blank" data-v-309b66c6>https://afdian.com/a/renmu123</a></p><p data-v-309b66c6> 如果你是大会员，也可以用免费的B币给我充电：<a href="https://space.bilibili.com/10995238" class="external" target="_blank" data-v-309b66c6>https://space.bilibili.com/10995238</a></p><p data-v-309b66c6> 更新历史：<a href="https://github.com/renmu123/biliLive-tools/blob/master/CHANGELOG.md" class="external" target="_blank" data-v-309b66c6>https://github.com/renmu123/biliLive-tools/blob/master/CHANGELOG.md</a></p><p data-v-309b66c6>QQ交流群：872011161</p><p data-v-309b66c6> 反馈地址：如果遇到bug，请在设置中将&quot;log等级&quot;调整至debug模式，并进行复现，之后在<a href="https://github.com/renmu123/biliLive-tools/issues" class="external" target="_blank" data-v-309b66c6>issues</a>中附上复现步骤，以及相应的日志文件 </p><p data-v-309b66c6>本软件为开源软件，采用GPLv3授权</p><div data-v-309b66c6> 感谢以下开源软件对本项目的贡献： <ul data-v-309b66c6><li data-v-309b66c6><a href="https://github.com/hihkm/DanmakuFactory" class="external" target="_blank" data-v-309b66c6>DanmakuFactory</a></li><li data-v-309b66c6><a href="https://github.com/biliup/biliup-rs" class="external" target="_blank" data-v-309b66c6>biliup-rs</a></li><li data-v-309b66c6><a href="https://github.com/BililiveRecorder/BililiveRecorder" class="external" target="_blank" data-v-309b66c6>BililiveRecorder</a></li><li data-v-309b66c6><a href="https://github.com/renmu123/biliAPI" class="external" target="_blank" data-v-309b66c6>biliAPI</a></li><li data-v-309b66c6><a href="https://github.com/WhiteMinds/LiveAutoRecord" class="external" target="_blank" data-v-309b66c6>LiveAutoRecord</a></li></ul></div>', 11))
      ]);
    };
  }
});
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-309b66c6"]]);
export {
  About as default
};
