import { d as defineComponent, r as ref, o as onMounted, n as createElementBlock, k as createBaseVNode, aI as toDisplayString, j as unref, bf as createStaticVNode, f as openBlock, M as pushScopeId, O as popScopeId, P as _export_sfc } from "./index--gUAYtmw.js";
const _withScopeId = (n) => (pushScopeId("data-v-94c1dc6e"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "biliLive-tools", -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, " 介绍：做这款工具的主要原因是为了解决录播工具的碎片化，往往想完整处理一场带有弹幕的录播要使用多个软件的配合，一些工具更是只有CLI，加大了使用难度。我想做一个能够一站式解决录播问题的工具，所以就有了这个项目。 ", -1));
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<p data-v-94c1dc6e> 作者：<a href="https://space.bilibili.com/10995238" class="external" target="_blank" data-v-94c1dc6e>renmu123</a> 点点关注吧，秋梨膏 </p><p data-v-94c1dc6e> 项目地址：<a href="https://github.com/renmu123/biliLive-tools" class="external" target="_blank" data-v-94c1dc6e>biliLive-tools</a></p><p data-v-94c1dc6e> 备用下载地址：<a href="https://www.alipan.com/s/iRyhxjdqGeL" class="external" target="_blank" data-v-94c1dc6e>biliLive-tools</a></p><p data-v-94c1dc6e><b data-v-94c1dc6e>帮助教程：<a href="https://www.bilibili.com/video/BV1Hs421M755/" class="external" target="_blank" data-v-94c1dc6e>https://www.bilibili.com/video/BV1Hs421M755/</a></b></p><p data-v-94c1dc6e> 请我喝瓶快乐水：<a href="https://afdian.com/a/renmu123" class="external" target="_blank" data-v-94c1dc6e>https://afdian.com/a/renmu123</a></p><p data-v-94c1dc6e> 如果你是大会员，也可以用免费的B币给我充电：<a href="https://space.bilibili.com/10995238" class="external" target="_blank" data-v-94c1dc6e>https://space.bilibili.com/10995238</a></p><p data-v-94c1dc6e> 更新历史：<a href="https://github.com/renmu123/biliLive-tools/blob/master/CHANGELOG.md" class="external" target="_blank" data-v-94c1dc6e>https://github.com/renmu123/biliLive-tools/blob/master/CHANGELOG.md</a></p><p data-v-94c1dc6e>QQ交流群：872011161</p><p data-v-94c1dc6e> 反馈地址：如果遇到bug，请在设置中将&quot;log等级&quot;调整至debug模式，并进行复现，之后在<a href="https://github.com/renmu123/biliLive-tools/issues" class="external" target="_blank" data-v-94c1dc6e>issues</a>中附上复现步骤，以及相应的日志文件 </p><p data-v-94c1dc6e>本软件为开源软件，采用GPLv3授权</p><div data-v-94c1dc6e> 感谢以下开源软件对本项目的贡献： <ul data-v-94c1dc6e><li data-v-94c1dc6e><a href="https://github.com/hihkm/DanmakuFactory" class="external" target="_blank" data-v-94c1dc6e>DanmakuFactory</a></li><li data-v-94c1dc6e><a href="https://github.com/biliup/biliup-rs" class="external" target="_blank" data-v-94c1dc6e>biliup-rs</a></li><li data-v-94c1dc6e><a href="https://github.com/BililiveRecorder/BililiveRecorder" class="external" target="_blank" data-v-94c1dc6e>BililiveRecorder</a></li><li data-v-94c1dc6e><a href="https://github.com/renmu123/biliAPI" class="external" target="_blank" data-v-94c1dc6e>biliAPI</a></li></ul></div>', 11);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About",
  setup(__props) {
    const version = ref();
    onMounted(async () => {
      version.value = await window.api.appVersion();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("p", null, "版本：" + toDisplayString(unref(version)), 1),
        _hoisted_3
      ]);
    };
  }
});
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-94c1dc6e"]]);
export {
  About as default
};
