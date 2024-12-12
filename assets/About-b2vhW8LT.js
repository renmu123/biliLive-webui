import { d as defineComponent, l as computed, r as ref, C as onMounted, c as createElementBlock, f as createBaseVNode, am as toDisplayString, e as unref, aj as createCommentVNode, b as createStaticVNode, o as openBlock } from "./index-B3txP6HV.js";
import { c as common } from "./common-BAA1HpBD.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-BI19-qja.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About",
  setup(__props) {
    const isWeb = computed(() => window.isWeb);
    const webVersion = "1.7.0";
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
        _cache[2] || (_cache[2] = createStaticVNode('<p data-v-8b154a1a> 作者：<a href="https://space.bilibili.com/10995238" class="external" target="_blank" data-v-8b154a1a>renmu123</a> 点点关注吧，秋梨膏 </p><p data-v-8b154a1a> 项目地址：<a href="https://github.com/renmu123/biliLive-tools" class="external" target="_blank" data-v-8b154a1a>biliLive-tools</a></p><p data-v-8b154a1a> 备用下载地址：<a href="https://www.alipan.com/s/iRyhxjdqGeL" class="external" target="_blank" data-v-8b154a1a>biliLive-tools</a></p><p data-v-8b154a1a><b data-v-8b154a1a>帮助教程：<a href="https://www.bilibili.com/video/BV1Hs421M755/" class="external" target="_blank" data-v-8b154a1a>https://www.bilibili.com/video/BV1Hs421M755/</a></b></p><p data-v-8b154a1a> 请我喝瓶快乐水：<a href="https://afdian.com/a/renmu123" class="external" target="_blank" data-v-8b154a1a>https://afdian.com/a/renmu123</a></p><p data-v-8b154a1a> 如果你是大会员，也可以用免费的B币给我充电：<a href="https://space.bilibili.com/10995238" class="external" target="_blank" data-v-8b154a1a>https://space.bilibili.com/10995238</a></p><p data-v-8b154a1a> 更新历史：<a href="https://github.com/renmu123/biliLive-tools/blob/master/CHANGELOG.md" class="external" target="_blank" data-v-8b154a1a>https://github.com/renmu123/biliLive-tools/blob/master/CHANGELOG.md</a></p><p data-v-8b154a1a>QQ交流群：872011161</p><p data-v-8b154a1a> 反馈地址：如果遇到bug，请在设置中将&quot;log等级&quot;调整至debug模式，并进行复现，之后在<a href="https://github.com/renmu123/biliLive-tools/issues" class="external" target="_blank" data-v-8b154a1a>issues</a>中附上复现步骤，以及相应的日志文件 </p><p data-v-8b154a1a>本软件为开源软件，采用GPLv3授权</p><div data-v-8b154a1a> 感谢以下开源软件对本项目的贡献： <ul data-v-8b154a1a><li data-v-8b154a1a><a href="https://github.com/hihkm/DanmakuFactory" class="external" target="_blank" data-v-8b154a1a>DanmakuFactory</a></li><li data-v-8b154a1a><a href="https://github.com/biliup/biliup-rs" class="external" target="_blank" data-v-8b154a1a>biliup-rs</a></li><li data-v-8b154a1a><a href="https://github.com/BililiveRecorder/BililiveRecorder" class="external" target="_blank" data-v-8b154a1a>BililiveRecorder</a></li><li data-v-8b154a1a><a href="https://github.com/renmu123/biliAPI" class="external" target="_blank" data-v-8b154a1a>biliAPI</a></li><li data-v-8b154a1a><a href="https://github.com/WhiteMinds/LiveAutoRecord" class="external" target="_blank" data-v-8b154a1a>LiveAutoRecord</a></li></ul></div>', 11))
      ]);
    };
  }
});
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b154a1a"]]);
export {
  About as default
};