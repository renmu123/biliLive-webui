const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-C38lObSt.js","./common-BAA1HpBD.js","./_plugin-vue_export-helper-BI19-qja.js","./use-notification-_uZSor1V.js","./Input-B6k2JVGe.js","./Suffix-DS84fk-A.js","./Space-C3OZuoMs.js","./index-BeQZhFm_.css","./index-BJPScpvL.js","./index-CNQhkSN1.js","./Tip.vue_vue_type_script_setup_true_lang-DFBPcEmQ.js","./index-Be9rHucp.js","./Switch-C2-01-AM.js","./FormItem-Cdzklzq2.js","./Cascader-BstE6L4T.js","./utils-CpJTLUg0.js","./ChevronRight-RAl1ruKH.js","./Select-cKie_tgm.js","./InputNumber-Bz27Zlni.js","./ColorPicker-ItU6N3yR.js","./Dropdown-E85TqFlF.js","./Divider-Dg2O_dra.js","./index-CQuQXiXy.js","./enum-B3GYHe30.js","./showDirectoryDialog-CW96unRZ.js","./showDirectoryDialog-DsDpJKc4.css","./FolderOpenOutline-0U4FjUFl.js","./_commonjsHelpers-BxmBWJD2.js","./index-Cfb3FODH.js","./Tabs-DWIxJL6H.js","./index-onr4CO9S.css","./index-BnkuEmeY.js","./BiliSetting-UYuS_-j9.js","./bili-Cfip0Zwk.js","./RadioGroup-9W9i5aqG.js","./BiliSetting-DiqjTMDM.css","./hotkeys.esm-jdU0bUED.js","./CloseOutline-C8_XpVPS.js","./hotkeys-B34jH2ZQ.css","./DanmuFactorySetting-DZMjwgdV.js","./DanmuFactorySetting-BxMNerO7.css","./Index.vue_vue_type_style_index_0_lang-BgxBbrva.js","./Index-CWbaeCfg.css","./index-DAjfeqeu.css","./index-jX_CUYw0.js","./index-gdmXCtRi.css","./index-B_0Pz29p.js","./FileSelect.vue_vue_type_script_setup_true_lang-Bv8UiuG2.js","./filenamify-DOXWXCz-.js","./FileSelect-HZiGu__l.css","./DanmuFactory-DzsDx7KU.js","./DanmuFactorySettingDailog-CVuDJm9C.js","./DanmuFactorySettingDailog-W_JHspFl.css","./DanmuFactory-DvfgedVG.css","./File2Mp4-C6u6wUSD.js","./File2Mp4-l0MI26zw.css","./VideoMerge-gA6fU7r4.js","./VideoMerge-DWenhWZS.css","./VideoDownload-CvMZpmZ0.js","./VideoDownload-8ei93IRT.css","./Index-daZtNYvV.js","./EllipsisHorizontalOutline-Df0QTbol.js","./Index-B3_i3oJN.css","./Index-Cf_UgWWg.js","./Index-DXAHtN0k.css","./index-B81iPRxA.js","./index-BlMW-iyy.css","./index-f4shuDHx.js","./index-DpQDRCCE.css","./About-b2vhW8LT.js"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(",")) map[key] = 1;
  return (val) => val in map;
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend$1 = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$b = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$b.call(val, key);
const isArray$3 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate$1 = (val) => toTypeString(val) === "[object Date]";
const isRegExp$1 = (val) => toTypeString(val) === "[object RegExp]";
const isFunction$2 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol$1 = (val) => typeof val === "symbol";
const isObject$2 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject$2(val) || isFunction$2(val)) && isFunction$2(val.then) && isFunction$2(val.catch);
};
const objectToString$1 = Object.prototype.toString;
const toTypeString = (value) => objectToString$1.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$3 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction = (fn) => {
  const cache2 = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache2[str];
    return hit || (cache2[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction(
  (str) => {
    return str.replace(camelizeRE, (_, c2) => c2 ? c2.toUpperCase() : "");
  }
);
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction(
  (str) => {
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
  }
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](...arg);
  }
};
const def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString$1(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
function normalizeStyle(value) {
  if (isArray$3(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$1(value) || isObject$2(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$1(value)) {
    res = value;
  } else if (isArray$3(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$2(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props) return null;
  let { class: klass, style: style2 } = props;
  if (klass && !isString$1(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style2) {
    props.style = normalizeStyle(style2);
  }
  return props;
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b) return true;
  let aValidType = isDate$1(a);
  let bValidType = isDate$1(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol$1(a);
  bValidType = isSymbol$1(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray$3(a);
  bValidType = isArray$3(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$2(a);
  bValidType = isObject$2(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const isRef$1 = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val) => {
  return isString$1(val) ? val : val == null ? "" : isArray$3(val) || isObject$2(val) && (val.toString === objectToString$1 || !isFunction$2(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isRef$1(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i) => {
          entries[stringifySymbol(key, i) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol$1(val)) {
    return stringifySymbol(val);
  } else if (isObject$2(val) && !isArray$3(val) && !isPlainObject$3(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i = "") => {
  var _a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol$1(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i, l;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].pause();
        }
      }
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].pause();
      }
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i, l;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].resume();
          }
        }
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].resume();
        }
      }
    }
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      this.effects.length = 0;
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
let activeSub;
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
  constructor(fn) {
    this.fn = fn;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 1 | 4;
    this.next = void 0;
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope && activeEffectScope.active) {
      activeEffectScope.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= ~64;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= ~2;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= ~1;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  /**
   * @internal
   */
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed2 = false) {
  sub.flags |= 8;
  if (isComputed2) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e = batchedComputed;
    batchedComputed = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= ~8;
      e = next;
    }
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= ~8;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err) {
          if (!error) error = err;
        }
      }
      e = next;
    }
  }
  if (error) throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail) tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed2) {
  if (computed2.flags & 4 && !(computed2.flags & 16)) {
    return;
  }
  computed2.flags &= ~16;
  if (computed2.globalVersion === globalVersion) {
    return;
  }
  computed2.globalVersion = globalVersion;
  const dep = computed2.dep;
  computed2.flags |= 2;
  if (dep.version > 0 && !computed2.isSSR && computed2.deps && !isDirty(computed2)) {
    computed2.flags &= ~2;
    return;
  }
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed2;
  shouldTrack = true;
  try {
    prepareDeps(computed2);
    const value = computed2.fn(computed2._value);
    if (dep.version === 0 || hasChanged(value, computed2._value)) {
      computed2._value = value;
      dep.version++;
    }
  } catch (err) {
    dep.version++;
    throw err;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed2);
    computed2.flags &= ~2;
  }
}
function removeSub(link, soft = false) {
  const { dep, prevSub, nextSub } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= ~4;
      for (let l = dep.computed.deps; l; l = l.nextDep) {
        removeSub(l, true);
      }
    }
  }
  if (!soft && !--dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const { prevDep, nextDep } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
function effect(fn, options) {
  if (fn.effect instanceof ReactiveEffect) {
    fn = fn.effect.fn;
  }
  const e = new ReactiveEffect(fn);
  if (options) {
    extend$1(e, options);
  }
  try {
    e.run();
  } catch (err) {
    e.stop();
    throw err;
  }
  const runner = e.run.bind(e);
  runner.effect = e;
  return runner;
}
function stop(runner) {
  runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
  const { cleanup } = e;
  e.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}
let globalVersion = 0;
class Link {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dep {
  constructor(computed2) {
    this.computed = computed2;
    this.version = 0;
    this.activeLink = void 0;
    this.subs = void 0;
    this.map = void 0;
    this.key = void 0;
    this.sc = 0;
  }
  track(debugInfo) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    return link;
  }
  trigger(debugInfo) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (false) ;
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
}
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed2 = link.dep.computed;
    if (computed2 && !link.dep.subs) {
      computed2.flags |= 4 | 16;
      for (let l = computed2.deps; l; l = l.nextDep) {
        addSub(l);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail) currentTail.nextSub = link;
    }
    link.dep.subs = link;
  }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol(
  ""
);
const MAP_KEY_ITERATE_KEY = Symbol(
  ""
);
const ARRAY_ITERATE_KEY = Symbol(
  ""
);
function track(target, type, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    {
      dep.track();
    }
  }
}
function trigger$1(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = (dep) => {
    if (dep) {
      {
        dep.trigger();
      }
    }
  };
  startBatch();
  if (type === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = isArray$3(target);
    const isArrayIndex = targetIsArray && isIntegerKey(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol$1(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function getDepFromReactive(object, key) {
  const depMap = targetMap.get(object);
  return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
  const raw = toRaw(array);
  if (raw === array) return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
const arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, toReactive);
  },
  concat(...args) {
    return reactiveReadArray(this).concat(
      ...args.map((x) => isArray$3(x) ? reactiveReadArray(x) : x)
    );
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toReactive(value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply$1(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply$1(this, "filter", fn, thisArg, (v) => v.map(toReactive), arguments);
  },
  find(fn, thisArg) {
    return apply$1(this, "find", fn, thisArg, toReactive, arguments);
  },
  findIndex(fn, thisArg) {
    return apply$1(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply$1(this, "findLast", fn, thisArg, toReactive, arguments);
  },
  findLastIndex(fn, thisArg) {
    return apply$1(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn, thisArg) {
    return apply$1(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply$1(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn, thisArg) {
    return apply$1(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", toReactive);
  }
};
function iterator(self2, method, wrapValue) {
  const arr = shallowReadArray(self2);
  const iter = arr[method]();
  if (arr !== self2 && !isShallow(self2)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (result.value) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
const arrayProto$1 = Array.prototype;
function apply$1(self2, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self2);
  const needsWrap = arr !== self2 && !isShallow(self2);
  const methodFn = arr[method];
  if (methodFn !== arrayProto$1[method]) {
    const result2 = methodFn.apply(self2, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self2) {
    if (needsWrap) {
      wrappedFn = function(item, index) {
        return fn.call(this, toReactive(item), index, self2);
      };
    } else if (fn.length > 2) {
      wrappedFn = function(item, index) {
        return fn.call(this, item, index, self2);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self2, method, fn, args) {
  const arr = shallowReadArray(self2);
  let wrappedFn = fn;
  if (arr !== self2) {
    if (!isShallow(self2)) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, toReactive(item), index, self2);
      };
    } else if (fn.length > 3) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, item, index, self2);
      };
    }
  }
  return arr[method](wrappedFn, ...args);
}
function searchProxy(self2, method, args) {
  const arr = toRaw(self2);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && isProxy(args[0])) {
    args[0] = toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self2, method, args = []) {
  pauseTracking();
  startBatch();
  const res = toRaw(self2)[method].apply(self2, args);
  endBatch();
  resetTracking();
  return res;
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol$1)
);
function hasOwnProperty$a(key) {
  if (!isSymbol$1(key)) key = String(key);
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip") return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray$3(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key])) {
        return fn;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty$a;
      }
    }
    const res = Reflect.get(
      target,
      key,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      isRef(target) ? target : receiver
    );
    if (isSymbol$1(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject$2(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray$3(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArray$3(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(
      target,
      key,
      value,
      isRef(target) ? target : receiver
    );
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger$1(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger$1(target, "set", key, value);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger$1(target, "delete", key, void 0);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol$1(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray$3(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    return true;
  }
  deleteProperty(target, key) {
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly2, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  extend$1(
    instrumentations,
    readonly2 ? {
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear")
    } : {
      add(value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger$1(target, "add", value, value);
        }
        return this;
      },
      set(key, value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        }
        const oldValue = get.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger$1(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger$1(target, "set", key, value);
        }
        return this;
      },
      delete(key) {
        const target = toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        }
        get ? get.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger$1(target, "delete", key, void 0);
        }
        return result;
      },
      clear() {
        const target = toRaw(this);
        const hadItems = target.size !== 0;
        const result = target.clear();
        if (hadItems) {
          trigger$1(
            target,
            "clear",
            void 0,
            void 0
          );
        }
        return result;
      }
    }
  );
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly2, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$2(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => isObject$2(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$2(value) ? readonly(value) : value;
function isRef(r) {
  return r ? r["__v_isRef"] === true : false;
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    {
      this.dep.track();
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
    newValue = useDirectValue ? newValue : toRaw(newValue);
    if (hasChanged(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      {
        this.dep.trigger();
      }
    }
  }
}
function triggerRef(ref2) {
  if (ref2.dep) {
    {
      ref2.dep.trigger();
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
  return isFunction$2(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
  constructor(factory) {
    this["__v_isRef"] = true;
    this._value = void 0;
    const dep = this.dep = new Dep();
    const { get, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
    this._get = get;
    this._set = set;
  }
  get value() {
    return this._value = this._get();
  }
  set value(newVal) {
    this._set(newVal);
  }
}
function customRef(factory) {
  return new CustomRefImpl(factory);
}
function toRefs(object) {
  const ret = isArray$3(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this["__v_isRef"] = true;
    this._value = void 0;
  }
  get value() {
    const val = this._object[this._key];
    return this._value = val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this["__v_isRef"] = true;
    this["__v_isReadonly"] = true;
    this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function toRef(source, key, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if (isFunction$2(source)) {
    return new GetterRefImpl(source);
  } else if (isObject$2(source) && arguments.length > 1) {
    return propertyToRef(source, key, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key, defaultValue) {
  const val = source[key];
  return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}
class ComputedRefImpl {
  constructor(fn, setter, isSSR) {
    this.fn = fn;
    this.setter = setter;
    this._value = void 0;
    this.dep = new Dep(this);
    this.__v_isRef = true;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 16;
    this.globalVersion = globalVersion - 1;
    this.next = void 0;
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  /**
   * @internal
   */
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && // avoid infinite self recursion
    activeSub !== this) {
      batch(this, true);
      return true;
    }
  }
  get value() {
    const link = this.dep.track();
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    }
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if (isFunction$2(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  return cRef;
}
const TrackOpTypes = {
  "GET": "get",
  "HAS": "has",
  "ITERATE": "iterate"
};
const TriggerOpTypes = {
  "SET": "set",
  "ADD": "add",
  "DELETE": "delete",
  "CLEAR": "clear"
};
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function getCurrentWatcher() {
  return activeWatcher;
}
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups) cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  }
}
function watch$1(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, once, scheduler: scheduler2, augmentJob, call: call2 } = options;
  const reactiveGetter = (source2) => {
    if (deep) return source2;
    if (isShallow(source2) || deep === false || deep === 0)
      return traverse(source2, 1);
    return traverse(source2);
  };
  let effect2;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray$3(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return reactiveGetter(s);
      } else if (isFunction$2(s)) {
        return call2 ? call2(s, 2) : s();
      } else ;
    });
  } else if (isFunction$2(source)) {
    if (cb) {
      getter = call2 ? () => call2(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect2;
        try {
          return call2 ? call2(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect2.stop();
    if (scope && scope.active) {
      remove(scope.effects, effect2);
    }
  };
  if (once && cb) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      watchHandle();
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = (immediateFirstRun) => {
    if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        const currentWatcher = activeWatcher;
        activeWatcher = effect2;
        try {
          const args = [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            boundCleanup
          ];
          call2 ? call2(cb, 3, args) : (
            // @ts-expect-error
            cb(...args)
          );
          oldValue = newValue;
        } finally {
          activeWatcher = currentWatcher;
        }
      }
    } else {
      effect2.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect2 = new ReactiveEffect(getter);
  effect2.scheduler = scheduler2 ? () => scheduler2(job, false) : job;
  boundCleanup = (fn) => onWatcherCleanup(fn, false, effect2);
  cleanup = effect2.onStop = () => {
    const cleanups = cleanupMap.get(effect2);
    if (cleanups) {
      if (call2) {
        call2(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups) cleanup2();
      }
      cleanupMap.delete(effect2);
    }
  };
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect2.run();
    }
  } else if (scheduler2) {
    scheduler2(job.bind(null, true), true);
  } else {
    effect2.run();
  }
  watchHandle.pause = effect2.pause.bind(effect2);
  watchHandle.resume = effect2.resume.bind(effect2);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen2) {
  if (depth <= 0 || !isObject$2(value) || value["__v_skip"]) {
    return value;
  }
  seen2 = seen2 || /* @__PURE__ */ new Set();
  if (seen2.has(value)) {
    return value;
  }
  seen2.add(value);
  depth--;
  if (isRef(value)) {
    traverse(value.value, depth, seen2);
  } else if (isArray$3(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, seen2);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, depth, seen2);
    });
  } else if (isPlainObject$3(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen2);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen2);
      }
    }
  }
  return value;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const stack$1 = [];
function pushWarningContext(vnode) {
  stack$1.push(vnode);
}
function popWarningContext() {
  stack$1.pop();
}
let isWarning = false;
function warn$1$1(msg2, ...args) {
  if (isWarning) return;
  isWarning = true;
  pauseTracking();
  const instance = stack$1.length ? stack$1[stack$1.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        msg2 + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg2}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
  isWarning = false;
}
function getComponentTrace() {
  let currentVNode = stack$1[stack$1.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString$1(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction$2(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
function assertNumber(val, type) {
  return;
}
const ErrorCodes = {
  "SETUP_FUNCTION": 0,
  "0": "SETUP_FUNCTION",
  "RENDER_FUNCTION": 1,
  "1": "RENDER_FUNCTION",
  "NATIVE_EVENT_HANDLER": 5,
  "5": "NATIVE_EVENT_HANDLER",
  "COMPONENT_EVENT_HANDLER": 6,
  "6": "COMPONENT_EVENT_HANDLER",
  "VNODE_HOOK": 7,
  "7": "VNODE_HOOK",
  "DIRECTIVE_HOOK": 8,
  "8": "DIRECTIVE_HOOK",
  "TRANSITION_HOOK": 9,
  "9": "TRANSITION_HOOK",
  "APP_ERROR_HANDLER": 10,
  "10": "APP_ERROR_HANDLER",
  "APP_WARN_HANDLER": 11,
  "11": "APP_WARN_HANDLER",
  "FUNCTION_REF": 12,
  "12": "FUNCTION_REF",
  "ASYNC_COMPONENT_LOADER": 13,
  "13": "ASYNC_COMPONENT_LOADER",
  "SCHEDULER": 14,
  "14": "SCHEDULER",
  "COMPONENT_UPDATE": 15,
  "15": "COMPONENT_UPDATE",
  "APP_UNMOUNT_CLEANUP": 16,
  "16": "APP_UNMOUNT_CLEANUP"
};
const ErrorTypeStrings$1 = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush",
  [15]: "component update",
  [16]: "app unmount cleanup function"
};
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction$2(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  if (isArray$3(fn)) {
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  }
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler) {
      pauseTracking();
      callWithErrorHandling(errorHandler, null, 10, [
        err,
        exposedInstance,
        errorInfo
      ]);
      resetTracking();
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
  if (throwInProd) {
    throw err;
  } else {
    console.error(err);
  }
}
const queue = [];
let flushIndex = -1;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex$1(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue[queue.length - 1];
    if (!lastJob || // fast path when the job id is larger than the tail
    !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex$1(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$3(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen2, i = flushIndex + 1) {
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      if (cb.flags & 4) {
        cb.flags &= ~1;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= ~1;
      }
    }
  }
}
function flushPostFlushCbs(seen2) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b) => getId(a) - getId(b)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if (cb.flags & 4) {
        cb.flags &= ~1;
      }
      if (!(cb.flags & 8)) cb();
      cb.flags &= ~1;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen2) {
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && !(job.flags & 8)) {
        if (false) ;
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(
          job,
          job.i,
          job.i ? 15 : 14
        );
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        job.flags &= ~1;
      }
    }
    flushIndex = -1;
    queue.length = 0;
    flushPostFlushCbs();
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
let devtools$1;
let buffer = [];
function setDevtoolsHook$1(hook, target) {
  var _a, _b;
  devtools$1 = hook;
  if (devtools$1) {
    devtools$1.enabled = true;
    buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    // eslint-disable-next-line no-restricted-syntax
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook$1(newHook, target);
    });
    setTimeout(() => {
      if (!devtools$1) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        buffer = [];
      }
    }, 3e3);
  } else {
    buffer = [];
  }
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
const withScopeId = (_id) => withCtx;
function withCtx(fn, ctx2 = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx2) return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx2);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
    return vnode;
  }
  const instance = getComponentPublicInstance(currentRenderingInstance);
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (dir) {
      if (isFunction$2(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const TeleportEndKey = Symbol("_vte");
const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if (isString$1(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target = select(targetSelector);
      return target;
    }
  } else {
    return targetSelector;
  }
};
const TeleportImpl = {
  name: "Teleport",
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText("");
      const mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const mount2 = (container2, anchor2) => {
        if (shapeFlag & 16) {
          if (parentComponent && parentComponent.isCE) {
            parentComponent.ce._teleportTarget = container2;
          }
          mountChildren(
            children,
            container2,
            anchor2,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
        }
      };
      const mountToTarget = () => {
        const target = n2.target = resolveTarget(n2.props, querySelector);
        const targetAnchor = prepareAnchor(target, n2, createText, insert);
        if (target) {
          if (namespace2 !== "svg" && isTargetSVG(target)) {
            namespace2 = "svg";
          } else if (namespace2 !== "mathml" && isTargetMathML(target)) {
            namespace2 = "mathml";
          }
          if (!disabled) {
            mount2(target, targetAnchor);
            updateCssVars(n2, false);
          }
        }
      };
      if (disabled) {
        mount2(container, mainAnchor);
        updateCssVars(n2, true);
      }
      if (isTeleportDeferred(n2.props)) {
        queuePostRenderEffect(() => {
          mountToTarget();
          n2.el.__isMounted = true;
        }, parentSuspense);
      } else {
        mountToTarget();
      }
    } else {
      if (isTeleportDeferred(n2.props) && !n1.el.__isMounted) {
        queuePostRenderEffect(() => {
          TeleportImpl.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized,
            internals
          );
          delete n1.el.__isMounted;
        }, parentSuspense);
        return;
      }
      n2.el = n1.el;
      n2.targetStart = n1.targetStart;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (namespace2 === "svg" || isTargetSVG(target)) {
        namespace2 = "svg";
      } else if (namespace2 === "mathml" || isTargetMathML(target)) {
        namespace2 = "mathml";
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          currentContainer,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds
        );
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          currentContainer,
          currentAnchor,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds,
          false
        );
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(
            n2,
            container,
            mainAnchor,
            internals,
            1
          );
        } else {
          if (n2.props && n1.props && n2.props.to !== n1.props.to) {
            n2.props.to = n1.props.to;
          }
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(
            n2.props,
            querySelector
          );
          if (nextTarget) {
            moveTeleport(
              n2,
              nextTarget,
              null,
              internals,
              0
            );
          }
        } else if (wasDisabled) {
          moveTeleport(
            n2,
            target,
            targetAnchor,
            internals,
            1
          );
        }
      }
      updateCssVars(n2, disabled);
    }
  },
  remove(vnode, parentComponent, parentSuspense, { um: unmount2, o: { remove: hostRemove } }, doRemove) {
    const {
      shapeFlag,
      children,
      anchor,
      targetStart,
      targetAnchor,
      target,
      props
    } = vnode;
    if (target) {
      hostRemove(targetStart);
      hostRemove(targetAnchor);
    }
    doRemove && hostRemove(anchor);
    if (shapeFlag & 16) {
      const shouldRemove = doRemove || !isTeleportDisabled(props);
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        unmount2(
          child,
          parentComponent,
          parentSuspense,
          shouldRemove,
          !!child.dynamicChildren
        );
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(
          children[i],
          container,
          parentAnchor,
          2
        );
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: { nextSibling, parentNode, querySelector, insert, createText }
}, hydrateChildren) {
  const target = vnode.target = resolveTarget(
    vnode.props,
    querySelector
  );
  if (target) {
    const disabled = isTeleportDisabled(vnode.props);
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (disabled) {
        vnode.anchor = hydrateChildren(
          nextSibling(node),
          vnode,
          parentNode(node),
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        vnode.targetStart = targetNode;
        vnode.targetAnchor = targetNode && nextSibling(targetNode);
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          if (targetAnchor && targetAnchor.nodeType === 8) {
            if (targetAnchor.data === "teleport start anchor") {
              vnode.targetStart = targetAnchor;
            } else if (targetAnchor.data === "teleport anchor") {
              vnode.targetAnchor = targetAnchor;
              target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
              break;
            }
          }
          targetAnchor = nextSibling(targetAnchor);
        }
        if (!vnode.targetAnchor) {
          prepareAnchor(target, vnode, createText, insert);
        }
        hydrateChildren(
          targetNode && nextSibling(targetNode),
          vnode,
          target,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      }
    }
    updateCssVars(vnode, disabled);
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
  const ctx2 = vnode.ctx;
  if (ctx2 && ctx2.ut) {
    let node, anchor;
    if (isDisabled) {
      node = vnode.el;
      anchor = vnode.anchor;
    } else {
      node = vnode.targetStart;
      anchor = vnode.targetAnchor;
    }
    while (node && node !== anchor) {
      if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx2.uid);
      node = node.nextSibling;
    }
    ctx2.ut();
  }
}
function prepareAnchor(target, vnode, createText, insert) {
  const targetStart = vnode.targetStart = createText("");
  const targetAnchor = vnode.targetAnchor = createText("");
  targetStart[TeleportEndKey] = targetAnchor;
  if (target) {
    insert(targetStart, target);
    insert(targetAnchor, target);
  }
  return targetAnchor;
}
const leaveCbKey = Symbol("_leaveCb");
const enterCbKey$1 = Symbol("_enterCb");
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const recursiveGetSubtree = (instance) => {
  const subTree = instance.subTree;
  return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const child = findNonCommentChild(children);
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getInnerChild$1(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      let enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance,
        // #11061, ensure enterHooks is fresh after clone
        (hooks) => enterHooks = hooks
      );
      if (innerChild.type !== Comment) {
        setTransitionHooks(innerChild, enterHooks);
      }
      let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild) && recursiveGetSubtree(instance).type !== Comment) {
        let leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in" && innerChild.type !== Comment) {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (!(instance.job.flags & 8)) {
              instance.update();
            }
            delete leavingHooks.afterLeave;
            oldInnerChild = void 0;
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
            enterHooks.delayedLeave = () => {
              delayedLeave();
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
          };
        } else {
          oldInnerChild = void 0;
        }
      } else if (oldInnerChild) {
        oldInnerChild = void 0;
      }
      return child;
    };
  }
};
function findNonCommentChild(children) {
  let child = children[0];
  if (children.length > 1) {
    for (const c2 of children) {
      if (c2.type !== Comment) {
        child = c2;
        break;
      }
    }
  }
  return child;
}
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray$3(hook)) {
      if (hook.every((hook2) => hook2.length <= 1)) done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
        leavingVNode.el[leaveCbKey]();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el[enterCbKey$1] = (cancelled) => {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey$1] = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el[enterCbKey$1]) {
        el[enterCbKey$1](
          true
          /* cancelled */
        );
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el[leaveCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      const hooks2 = resolveTransitionHooks(
        vnode2,
        props,
        state,
        instance,
        postClone
      );
      if (postClone) postClone(hooks2);
      return hooks2;
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getInnerChild$1(vnode) {
  if (!isKeepAlive(vnode)) {
    if (isTeleport(vnode.type) && vnode.children) {
      return findNonCommentChild(vnode.children);
    }
    return vnode;
  }
  const { shapeFlag, children } = vnode;
  if (children) {
    if (shapeFlag & 16) {
      return children[0];
    }
    if (shapeFlag & 32 && isFunction$2(children.default)) {
      return children.default();
    }
  }
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks;
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128) keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction$2(options) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend$1({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
function useId() {
  const i = getCurrentInstance();
  if (i) {
    return (i.appContext.config.idPrefix || "v") + "-" + i.ids[0] + i.ids[1]++;
  }
  return "";
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}
function useTemplateRef(key) {
  const i = getCurrentInstance();
  const r = shallowRef(null);
  if (i) {
    const refs = i.refs === EMPTY_OBJ ? i.refs = {} : i.refs;
    {
      Object.defineProperty(refs, key, {
        enumerable: true,
        get: () => r.value,
        set: (val) => r.value = val
      });
    }
  }
  const ret = r;
  return ret;
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$3(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && (isArray$3(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref3 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = toRaw(setupState);
  const canSetSetupRef = setupState === EMPTY_OBJ ? () => false : (key) => {
    return hasOwn(rawSetupState, key);
  };
  if (oldRef != null && oldRef !== ref3) {
    if (isString$1(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction$2(ref3)) {
    callWithErrorHandling(ref3, owner, 12, [value, refs]);
  } else {
    const _isString = isString$1(ref3);
    const _isRef = isRef(ref3);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref3) ? setupState[ref3] : refs[ref3] : ref3.value;
          if (isUnmount) {
            isArray$3(existing) && remove(existing, refValue);
          } else {
            if (!isArray$3(existing)) {
              if (_isString) {
                refs[ref3] = [refValue];
                if (canSetSetupRef(ref3)) {
                  setupState[ref3] = refs[ref3];
                }
              } else {
                ref3.value = [refValue];
                if (rawRef.k) refs[rawRef.k] = ref3.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref3] = value;
          if (canSetSetupRef(ref3)) {
            setupState[ref3] = value;
          }
        } else if (_isRef) {
          ref3.value = value;
          if (rawRef.k) refs[rawRef.k] = value;
        } else ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
let hasLoggedMismatchError = false;
const logMismatchError = () => {
  if (hasLoggedMismatchError) {
    return;
  }
  console.error("Hydration completed but contains mismatches.");
  hasLoggedMismatchError = true;
};
const isSVGContainer = (container) => container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
const isMathMLContainer = (container) => container.namespaceURI.includes("MathML");
const getContainerType = (container) => {
  if (container.nodeType !== 1) return void 0;
  if (isSVGContainer(container)) return "svg";
  if (isMathMLContainer(container)) return "mathml";
  return void 0;
};
const isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  const {
    mt: mountComponent,
    p: patch,
    o: {
      patchProp: patchProp2,
      createText,
      nextSibling,
      parentNode,
      remove: remove2,
      insert,
      createComment
    }
  } = rendererInternals;
  const hydrate2 = (vnode, container) => {
    if (!container.hasChildNodes()) {
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const isFragmentStart = isComment(node) && node.data === "[";
    const onMismatch = () => handleMismatch(
      node,
      vnode,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      isFragmentStart
    );
    const { type, ref: ref3, shapeFlag, patchFlag } = vnode;
    let domType = node.nodeType;
    vnode.el = node;
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    let nextNode = null;
    switch (type) {
      case Text:
        if (domType !== 3) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            logMismatchError();
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (isTemplateNode(node)) {
          nextNode = nextSibling(node);
          replaceNode(
            vnode.el = node.content.firstChild,
            node,
            parentComponent
          );
        } else if (domType !== 8 || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (isFragmentStart) {
          node = nextSibling(node);
          domType = node.nodeType;
        }
        if (domType === 1 || domType === 3) {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent)
              vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return isFragmentStart ? nextSibling(nextNode) : nextNode;
        } else {
          onMismatch();
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
        }
        break;
      default:
        if (shapeFlag & 1) {
          if ((domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized
            );
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          if (isFragmentStart) {
            nextNode = locateClosingAnchor(node);
          } else if (isComment(node) && node.data === "teleport start") {
            nextNode = locateClosingAnchor(node, node.data, "teleport end");
          } else {
            nextNode = nextSibling(node);
          }
          mountComponent(
            vnode,
            container,
            null,
            parentComponent,
            parentSuspense,
            getContainerType(container),
            optimized
          );
          if (isAsyncWrapper(vnode) && !vnode.type.__asyncResolved) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized,
              rendererInternals,
              hydrateChildren
            );
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            getContainerType(parentNode(node)),
            slotScopeIds,
            optimized,
            rendererInternals,
            hydrateNode
          );
        } else ;
    }
    if (ref3 != null) {
      setRef(ref3, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type, props, patchFlag, shapeFlag, dirs, transition } = vnode;
    const forcePatch = type === "input" || type === "option";
    if (forcePatch || patchFlag !== -1) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      let needCallTransitionHooks = false;
      if (isTemplateNode(el)) {
        needCallTransitionHooks = needTransition(
          null,
          // no need check parentSuspense in hydration
          transition
        ) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
        const content = el.content.firstChild;
        if (needCallTransitionHooks) {
          transition.beforeEnter(content);
        }
        replaceNode(content, el, parentComponent);
        vnode.el = el = content;
      }
      if (shapeFlag & 16 && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(
          el.firstChild,
          vnode,
          el,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        while (next) {
          if (!isMismatchAllowed(
            el,
            1
            /* CHILDREN */
          )) {
            logMismatchError();
          }
          const cur = next;
          next = next.nextSibling;
          remove2(cur);
        }
      } else if (shapeFlag & 8) {
        let clientText = vnode.children;
        if (clientText[0] === "\n" && (el.tagName === "PRE" || el.tagName === "TEXTAREA")) {
          clientText = clientText.slice(1);
        }
        if (el.textContent !== clientText) {
          if (!isMismatchAllowed(
            el,
            0
            /* TEXT */
          )) {
            logMismatchError();
          }
          el.textContent = vnode.children;
        }
      }
      if (props) {
        if (forcePatch || !optimized || patchFlag & (16 | 32)) {
          const isCustomElement = el.tagName.includes("-");
          for (const key in props) {
            if (forcePatch && (key.endsWith("value") || key === "indeterminate") || isOn(key) && !isReservedProp(key) || // force hydrate v-bind with .prop modifiers
            key[0] === "." || isCustomElement) {
              patchProp2(el, key, null, props[key], void 0, parentComponent);
            }
          }
        } else if (props.onClick) {
          patchProp2(
            el,
            "onClick",
            null,
            props.onClick,
            void 0,
            parentComponent
          );
        } else if (patchFlag & 4 && isReactive(props.style)) {
          for (const key in props.style) props.style[key];
        }
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l = children.length;
    for (let i = 0; i < l; i++) {
      const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
      const isText = vnode.type === Text;
      if (node) {
        if (isText && !optimized) {
          if (i + 1 < l && normalizeVNode(children[i + 1]).type === Text) {
            insert(
              createText(
                node.data.slice(vnode.children.length)
              ),
              container,
              nextSibling(node)
            );
            node.data = vnode.children;
          }
        }
        node = hydrateNode(
          node,
          vnode,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      } else if (isText && !vnode.children) {
        insert(vnode.el = createText(""), container);
      } else {
        if (!isMismatchAllowed(
          container,
          1
          /* CHILDREN */
        )) {
          logMismatchError();
        }
        patch(
          null,
          vnode,
          container,
          null,
          parentComponent,
          parentSuspense,
          getContainerType(container),
          slotScopeIds
        );
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(
      nextSibling(node),
      vnode,
      container,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      optimized
    );
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      logMismatchError();
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    if (!isMismatchAllowed(
      node.parentElement,
      1
      /* CHILDREN */
    )) {
      logMismatchError();
    }
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove2(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove2(node);
    patch(
      null,
      vnode,
      container,
      next,
      parentComponent,
      parentSuspense,
      getContainerType(container),
      slotScopeIds
    );
    if (parentComponent) {
      parentComponent.vnode.el = vnode.el;
      updateHOCHostEl(parentComponent, vnode.el);
    }
    return next;
  };
  const locateClosingAnchor = (node, open = "[", close = "]") => {
    let match2 = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === open) match2++;
        if (node.data === close) {
          if (match2 === 0) {
            return nextSibling(node);
          } else {
            match2--;
          }
        }
      }
    }
    return node;
  };
  const replaceNode = (newNode, oldNode, parentComponent) => {
    const parentNode2 = oldNode.parentNode;
    if (parentNode2) {
      parentNode2.replaceChild(newNode, oldNode);
    }
    let parent = parentComponent;
    while (parent) {
      if (parent.vnode.el === oldNode) {
        parent.vnode.el = parent.subTree.el = newNode;
      }
      parent = parent.parent;
    }
  };
  const isTemplateNode = (node) => {
    return node.nodeType === 1 && node.tagName === "TEMPLATE";
  };
  return [hydrate2, hydrateNode];
}
const allowMismatchAttr = "data-allow-mismatch";
const MismatchTypeString = {
  [
    0
    /* TEXT */
  ]: "text",
  [
    1
    /* CHILDREN */
  ]: "children",
  [
    2
    /* CLASS */
  ]: "class",
  [
    3
    /* STYLE */
  ]: "style",
  [
    4
    /* ATTRIBUTE */
  ]: "attribute"
};
function isMismatchAllowed(el, allowedType) {
  if (allowedType === 0 || allowedType === 1) {
    while (el && !el.hasAttribute(allowMismatchAttr)) {
      el = el.parentElement;
    }
  }
  const allowedAttr = el && el.getAttribute(allowMismatchAttr);
  if (allowedAttr == null) {
    return false;
  } else if (allowedAttr === "") {
    return true;
  } else {
    const list = allowedAttr.split(",");
    if (allowedType === 0 && list.includes("children")) {
      return true;
    }
    return allowedAttr.split(",").includes(MismatchTypeString[allowedType]);
  }
}
const requestIdleCallback = getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
const cancelIdleCallback = getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
const hydrateOnIdle = (timeout = 1e4) => (hydrate2) => {
  const id = requestIdleCallback(hydrate2, { timeout });
  return () => cancelIdleCallback(id);
};
function elementIsVisibleInViewport(el) {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth);
}
const hydrateOnVisible = (opts) => (hydrate2, forEach2) => {
  const ob = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      ob.disconnect();
      hydrate2();
      break;
    }
  }, opts);
  forEach2((el) => {
    if (!(el instanceof Element)) return;
    if (elementIsVisibleInViewport(el)) {
      hydrate2();
      ob.disconnect();
      return false;
    }
    ob.observe(el);
  });
  return () => ob.disconnect();
};
const hydrateOnMediaQuery = (query) => (hydrate2) => {
  if (query) {
    const mql = matchMedia(query);
    if (mql.matches) {
      hydrate2();
    } else {
      mql.addEventListener("change", hydrate2, { once: true });
      return () => mql.removeEventListener("change", hydrate2);
    }
  }
};
const hydrateOnInteraction = (interactions = []) => (hydrate2, forEach2) => {
  if (isString$1(interactions)) interactions = [interactions];
  let hasHydrated = false;
  const doHydrate = (e) => {
    if (!hasHydrated) {
      hasHydrated = true;
      teardown();
      hydrate2();
      e.target.dispatchEvent(new e.constructor(e.type, e));
    }
  };
  const teardown = () => {
    forEach2((el) => {
      for (const i of interactions) {
        el.removeEventListener(i, doHydrate);
      }
    });
  };
  forEach2((el) => {
    for (const i of interactions) {
      el.addEventListener(i, doHydrate, { once: true });
    }
  });
  return teardown;
};
function forEachElement(node, cb) {
  if (isComment(node) && node.data === "[") {
    let depth = 1;
    let next = node.nextSibling;
    while (next) {
      if (next.nodeType === 1) {
        const result = cb(next);
        if (result === false) {
          break;
        }
      } else if (isComment(next)) {
        if (next.data === "]") {
          if (--depth === 0) break;
        } else if (next.data === "[") {
          depth++;
        }
      }
      next = next.nextSibling;
    }
  } else {
    cb(node);
  }
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
  if (isFunction$2(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay = 200,
    hydrate: hydrateStrategy,
    timeout,
    // undefined = never times out
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve2, reject) => {
          const userRetry = () => resolve2(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return /* @__PURE__ */ defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    __asyncHydrate(el, instance, hydrate2) {
      const doHydrate = hydrateStrategy ? () => {
        const teardown = hydrateStrategy(
          hydrate2,
          (cb) => forEachElement(el, cb)
        );
        if (teardown) {
          (instance.bum || (instance.bum = [])).push(teardown);
        }
      } : hydrate2;
      if (resolvedComp) {
        doHydrate();
      } else {
        load().then(() => !instance.isUnmounted && doHydrate());
      }
    },
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      markAsyncBoundary(instance);
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(
          err,
          instance,
          13,
          !errorComponent
        );
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded = ref(false);
      const error = ref();
      const delayed = ref(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(
              `Async component timed out after ${timeout}ms.`
            );
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          instance.parent.update();
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, parent) {
  const { ref: ref22, props, children, ce } = parent.vnode;
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref22;
  vnode.ce = ce;
  delete parent.vnode.ce;
  return vnode;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
  name: `KeepAlive`,
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const sharedContext = instance.ctx;
    if (!sharedContext.renderer) {
      return () => {
        const children = slots.default && slots.default();
        return children && children.length === 1 ? children[0] : children;
      };
    }
    const cache2 = /* @__PURE__ */ new Map();
    const keys = /* @__PURE__ */ new Set();
    let current = null;
    const parentSuspense = instance.suspense;
    const {
      renderer: {
        p: patch,
        m: move,
        um: _unmount,
        o: { createElement: createElement2 }
      }
    } = sharedContext;
    const storageContainer = createElement2("div");
    sharedContext.activate = (vnode, container, anchor, namespace2, optimized) => {
      const instance2 = vnode.component;
      move(vnode, container, anchor, 0, parentSuspense);
      patch(
        instance2.vnode,
        vnode,
        container,
        anchor,
        instance2,
        parentSuspense,
        namespace2,
        vnode.slotScopeIds,
        optimized
      );
      queuePostRenderEffect(() => {
        instance2.isDeactivated = false;
        if (instance2.a) {
          invokeArrayFns(instance2.a);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
      }, parentSuspense);
    };
    sharedContext.deactivate = (vnode) => {
      const instance2 = vnode.component;
      invalidateMount(instance2.m);
      invalidateMount(instance2.a);
      move(vnode, storageContainer, null, 1, parentSuspense);
      queuePostRenderEffect(() => {
        if (instance2.da) {
          invokeArrayFns(instance2.da);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
        instance2.isDeactivated = true;
      }, parentSuspense);
    };
    function unmount2(vnode) {
      resetShapeFlag(vnode);
      _unmount(vnode, instance, parentSuspense, true);
    }
    function pruneCache(filter2) {
      cache2.forEach((vnode, key) => {
        const name = getComponentName(vnode.type);
        if (name && !filter2(name)) {
          pruneCacheEntry(key);
        }
      });
    }
    function pruneCacheEntry(key) {
      const cached = cache2.get(key);
      if (cached && (!current || !isSameVNodeType(cached, current))) {
        unmount2(cached);
      } else if (current) {
        resetShapeFlag(current);
      }
      cache2.delete(key);
      keys.delete(key);
    }
    watch(
      () => [props.include, props.exclude],
      ([include, exclude]) => {
        include && pruneCache((name) => matches(include, name));
        exclude && pruneCache((name) => !matches(exclude, name));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: true }
    );
    let pendingCacheKey = null;
    const cacheSubtree = () => {
      if (pendingCacheKey != null) {
        if (isSuspense(instance.subTree.type)) {
          queuePostRenderEffect(() => {
            cache2.set(pendingCacheKey, getInnerChild(instance.subTree));
          }, instance.subTree.suspense);
        } else {
          cache2.set(pendingCacheKey, getInnerChild(instance.subTree));
        }
      }
    };
    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(() => {
      cache2.forEach((cached) => {
        const { subTree, suspense } = instance;
        const vnode = getInnerChild(subTree);
        if (cached.type === vnode.type && cached.key === vnode.key) {
          resetShapeFlag(vnode);
          const da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }
        unmount2(cached);
      });
    });
    return () => {
      pendingCacheKey = null;
      if (!slots.default) {
        return current = null;
      }
      const children = slots.default();
      const rawVNode = children[0];
      if (children.length > 1) {
        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
        current = null;
        return rawVNode;
      }
      let vnode = getInnerChild(rawVNode);
      if (vnode.type === Comment) {
        current = null;
        return vnode;
      }
      const comp = vnode.type;
      const name = getComponentName(
        isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp
      );
      const { include, exclude, max } = props;
      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        vnode.shapeFlag &= ~256;
        current = vnode;
        return rawVNode;
      }
      const key = vnode.key == null ? comp : vnode.key;
      const cachedVNode = cache2.get(key);
      if (vnode.el) {
        vnode = cloneVNode(vnode);
        if (rawVNode.shapeFlag & 128) {
          rawVNode.ssContent = vnode;
        }
      }
      pendingCacheKey = key;
      if (cachedVNode) {
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;
        if (vnode.transition) {
          setTransitionHooks(vnode, vnode.transition);
        }
        vnode.shapeFlag |= 512;
        keys.delete(key);
        keys.add(key);
      } else {
        keys.add(key);
        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      }
      vnode.shapeFlag |= 256;
      current = vnode;
      return isSuspense(rawVNode.type) ? rawVNode : vnode;
    };
  }
};
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
  if (isArray$3(pattern)) {
    return pattern.some((p2) => matches(p2, name));
  } else if (isString$1(pattern)) {
    return pattern.split(",").includes(name);
  } else if (isRegExp$1(pattern)) {
    pattern.lastIndex = 0;
    return pattern.test(name);
  }
  return false;
}
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function resetShapeFlag(vnode) {
  vnode.shapeFlag &= ~256;
  vnode.shapeFlag &= ~512;
}
function getInnerChild(vnode) {
  return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook(
  "bu"
);
const onUpdated = createHook("u");
const onBeforeUnmount = createHook(
  "bum"
);
const onUnmounted = createHook("um");
const onServerPrefetch = createHook(
  "sp"
);
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if (isString$1(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache2, index) {
  let ret;
  const cached = cache2 && cache2[index];
  const sourceIsArray = isArray$3(source);
  if (sourceIsArray || isString$1(source)) {
    const sourceIsReactiveArray = sourceIsArray && isReactive(source);
    let needsWrap = false;
    if (sourceIsReactiveArray) {
      needsWrap = !isShallow(source);
      source = shallowReadArray(source);
    }
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(
        needsWrap ? toReactive(source[i]) : source[i],
        i,
        void 0,
        cached && cached[i]
      );
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if (isObject$2(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached && cached[i])
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache2) {
    cache2[index] = ret;
  }
  return ret;
}
function createSlots(slots, dynamicSlots) {
  for (let i = 0; i < dynamicSlots.length; i++) {
    const slot = dynamicSlots[i];
    if (isArray$3(slot)) {
      for (let j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.key ? (...args) => {
        const res = slot.fn(...args);
        if (res) res.key = slot.key;
        return res;
      } : slot.fn;
    }
  }
  return slots;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
    if (name !== "default") props.name = name;
    return openBlock(), createBlock(
      Fragment,
      null,
      [createVNode("slot", props, fallback && fallback())],
      64
    );
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode$1(slot(props));
  const slotKey = props.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  validSlotContent && validSlotContent.key;
  const rendered = createBlock(
    Fragment,
    {
      key: (slotKey && !isSymbol$1(slotKey) ? slotKey : `_${name}`) + // #7256 force differentiate fallback content from actual content
      (!validSlotContent && fallback ? "_fb" : "")
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode$1(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode$1(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
  const ret = {};
  for (const key in obj) {
    ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
  }
  return ret;
}
const getPublicInstance = (i) => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getComponentPublicInstance(i);
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend$1(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => i.props,
    $attrs: (i) => i.attrs,
    $slots: (i) => i.slots,
    $refs: (i) => i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => {
      queueJob(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => instanceWatch.bind(i)
  })
);
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const { ctx: ctx2, setupState, data, props, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx2[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx2 !== EMPTY_OBJ && hasOwn(ctx2, key)) {
        accessCache[key] = 4;
        return ctx2[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance.attrs, "get", "");
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx2 !== EMPTY_OBJ && hasOwn(ctx2, key)) {
      accessCache[key] = 4;
      return ctx2[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else ;
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx: ctx2 } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx2[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx: ctx2, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx2, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
const RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ extend$1({}, PublicInstanceProxyHandlers, {
  get(target, key) {
    if (key === Symbol.unscopables) {
      return;
    }
    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has(_, key) {
    const has = key[0] !== "_" && !isGloballyAllowed(key);
    return has;
  }
});
function defineProps() {
  return null;
}
function defineEmits() {
  return null;
}
function defineExpose(exposed) {
}
function defineOptions(options) {
}
function defineSlots() {
  return null;
}
function defineModel() {
}
function withDefaults(props, defaults2) {
  return null;
}
function useSlots() {
  return getContext().slots;
}
function useAttrs() {
  return getContext().attrs;
}
function getContext() {
  const i = getCurrentInstance();
  return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
  return isArray$3(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
function mergeDefaults(raw, defaults2) {
  const props = normalizePropsOrEmits(raw);
  for (const key in defaults2) {
    if (key.startsWith("__skip")) continue;
    let opt = props[key];
    if (opt) {
      if (isArray$3(opt) || isFunction$2(opt)) {
        opt = props[key] = { type: opt, default: defaults2[key] };
      } else {
        opt.default = defaults2[key];
      }
    } else if (opt === null) {
      opt = props[key] = { default: defaults2[key] };
    } else ;
    if (opt && defaults2[`__skip_${key}`]) {
      opt.skipFactory = true;
    }
  }
  return props;
}
function mergeModels(a, b) {
  if (!a || !b) return a || b;
  if (isArray$3(a) && isArray$3(b)) return a.concat(b);
  return extend$1({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
}
function createPropsRestProxy(props, excludedKeys) {
  const ret = {};
  for (const key in props) {
    if (!excludedKeys.includes(key)) {
      Object.defineProperty(ret, key, {
        enumerable: true,
        get: () => props[key]
      });
    }
  }
  return ret;
}
function withAsyncContext(getAwaitable) {
  const ctx2 = getCurrentInstance();
  let awaitable = getAwaitable();
  unsetCurrentInstance();
  if (isPromise(awaitable)) {
    awaitable = awaitable.catch((e) => {
      setCurrentInstance(ctx2);
      throw e;
    });
  }
  return [awaitable, () => setCurrentInstance(ctx2)];
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx2 = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render2,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx2, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction$2(methodHandler)) {
        {
          ctx2[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject$2(data)) ;
    else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get = isFunction$2(opt) ? opt.bind(publicThis, publicThis) : isFunction$2(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set = !isFunction$2(opt) && isFunction$2(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c2 = computed({
        get,
        set
      });
      Object.defineProperty(ctx2, key, {
        enumerable: true,
        configurable: true,
        get: () => c2.value,
        set: (v) => c2.value = v
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx2, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction$2(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$3(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$3(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render2 && instance.render === NOOP) {
    instance.render = render2;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx2, checkDuplicateProperties = NOOP) {
  if (isArray$3(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$2(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx2, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx2[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray$3(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx2, publicThis, key) {
  let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$1(raw)) {
    const handler = ctx2[raw];
    if (isFunction$2(handler)) {
      {
        watch(getter, handler);
      }
    }
  } else if (isFunction$2(raw)) {
    {
      watch(getter, raw.bind(publicThis));
    }
  } else if (isObject$2(raw)) {
    if (isArray$3(raw)) {
      raw.forEach((r) => createWatcher(r, ctx2, publicThis, key));
    } else {
      const handler = isFunction$2(raw.handler) ? raw.handler.bind(publicThis) : ctx2[raw.handler];
      if (isFunction$2(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else ;
}
function resolveMergedOptions(instance) {
  const base2 = instance.type;
  const { mixins, extends: extendsOptions } = base2;
  const {
    mixins: globalMixins,
    optionsCache: cache2,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache2.get(base2);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base2;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions$1(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions$1(resolved, base2, optionMergeStrategies);
  }
  if (isObject$2(base2)) {
    cache2.set(base2, resolved);
  }
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions$1(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend$1(
      isFunction$2(to) ? to.call(this, this) : to,
      isFunction$2(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$3(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend$1(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray$3(to) && isArray$3(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend$1(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = extend$1(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render2, hydrate2) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction$2(rootComponent)) {
      rootComponent = extend$1({}, rootComponent);
    }
    if (rootProps != null && !isObject$2(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const pluginCleanupFns = [];
    let isMounted2 = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin2, ...options) {
        if (installedPlugins.has(plugin2)) ;
        else if (plugin2 && isFunction$2(plugin2.install)) {
          installedPlugins.add(plugin2);
          plugin2.install(app, ...options);
        } else if (isFunction$2(plugin2)) {
          installedPlugins.add(plugin2);
          plugin2(app, ...options);
        } else ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace2) {
        if (!isMounted2) {
          const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace2 === true) {
            namespace2 = "svg";
          } else if (namespace2 === false) {
            namespace2 = void 0;
          }
          if (isHydrate && hydrate2) {
            hydrate2(vnode, rootContainer);
          } else {
            render2(vnode, rootContainer, namespace2);
          }
          isMounted2 = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getComponentPublicInstance(vnode.component);
        }
      },
      onUnmount(cleanupFn) {
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted2) {
          callWithAsyncErrorHandling(
            pluginCleanupFns,
            app._instance,
            16
          );
          render2(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function provide(key, value) {
  if (!currentInstance) ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    const provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction$2(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else ;
  }
}
function hasInjectionContext() {
  return !!(currentInstance || currentRenderingInstance || currentApp);
}
const internalObjectProto = {};
const createInternalObject = () => Object.create(internalObjectProto);
const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger$1(instance.attrs, "set", "");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction$2(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key, value);
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
const mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache2 = asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache2.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction$2(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend$1(normalized, props);
      if (keys) needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$2(comp)) {
      cache2.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$3(raw)) {
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$3(opt) || isFunction$2(opt) ? { type: opt } : extend$1({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if (isArray$3(propType)) {
          for (let index = 0; index < propType.length; ++index) {
            const type = propType[index];
            const typeName = isFunction$2(type) && type.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = isFunction$2(propType) && propType.name === "Boolean";
        }
        prop[
          0
          /* shouldCast */
        ] = shouldCast;
        prop[
          1
          /* shouldCastTrue */
        ] = shouldCastTrue;
        if (shouldCast || hasOwn(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$2(comp)) {
    cache2.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  }
  return false;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray$3(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx2) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false) ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx2);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx2 = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key)) continue;
    const value = rawSlots[key];
    if (isFunction$2(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx2);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const assignSlots = (slots, children, optimized) => {
  for (const key in children) {
    if (optimized || key !== "_") {
      slots[key] = children[key];
    }
  }
};
const initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        def(slots, "_", type, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace2 = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount2(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref3, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace2);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized,
            internals
          );
        } else ;
    }
    if (ref3 != null && parentComponent) {
      setRef(ref3, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace2) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace2,
      n2.el,
      n2.anchor
    );
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace2 = "svg";
    } else if (n2.type === "math") {
      namespace2 = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        optimized
      );
    } else {
      patchElement(
        n1,
        n2,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        optimized
      );
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace2,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace2),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], namespace2, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace2);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace2),
        slotScopeIds
      );
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace2),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace2);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace2);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace2);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, namespace2, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace2);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace2, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace2) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace2,
              parentComponent
            );
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key)) continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, namespace2, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace2);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds
        );
        if (
          // #2080 if the stable fragment has a key, it's a <template v-for> that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it's a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null || parentComponent && n2 === parentComponent.subTree
        ) {
          traverseStaticChildren(
            n1,
            n2,
            true
            /* shallow */
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace2,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace2,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace2, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance, false, optimized);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
    } else {
      setupRenderEffect(
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace2,
        optimized
      );
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace2, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent, root: root2, type } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
          };
          if (isAsyncWrapperVNode && type.__asyncHydrate) {
            type.__asyncHydrate(
              el,
              instance,
              hydrateSubTree
            );
          } else {
            hydrateSubTree();
          }
        } else {
          if (root2.ce) {
            root2.ce._injectChildStyle(type);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            namespace2
          );
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace2
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
      }
    };
    instance.scope.on();
    const effect2 = instance.effect = new ReactiveEffect(componentUpdateFn);
    instance.scope.off();
    const update = instance.update = effect2.run.bind(effect2);
    const job = instance.job = effect2.runIfDirty.bind(effect2);
    job.i = instance;
    job.id = instance.uid;
    effect2.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount2(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount2(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount2(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount2 = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref3,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex
    } = vnode;
    if (patchFlag === -2) {
      optimized = false;
    }
    if (ref3 != null) {
      setRef(ref3, null, parentSuspense, vnode, true);
    }
    if (cacheIndex != null) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, job, subTree, um, m, a } = instance;
    invalidateMount(m);
    invalidateMount(a);
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount2(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount2(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  let isFlushing = false;
  const render2 = (vnode, container, namespace2) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount2(container._vnode, null, null, true);
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace2
      );
    }
    container._vnode = vnode;
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs();
      flushPostFlushCbs();
      isFlushing = false;
    }
  };
  const internals = {
    p: patch,
    um: unmount2,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate2;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate2, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render: render2,
    hydrate: hydrate2,
    createApp: createAppAPI(render2, hydrate2)
  };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect: effect2, job }, allowed) {
  if (allowed) {
    effect2.flags |= 32;
    job.flags |= 4;
  } else {
    effect2.flags &= ~32;
    job.flags &= ~4;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$3(ch1) && isArray$3(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c2;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c2 = u + v >> 1;
        if (arr[result[c2]] < arrI) {
          u = c2 + 1;
        } else {
          v = c2;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i = 0; i < hooks.length; i++)
      hooks[i].flags |= 8;
  }
}
const ssrContextKey$1 = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx2 = inject(ssrContextKey$1);
    return ctx2;
  }
};
function watchEffect(effect2, options) {
  return doWatch(effect2, null, options);
}
function watchPostEffect(effect2, options) {
  return doWatch(
    effect2,
    null,
    { flush: "post" }
  );
}
function watchSyncEffect(effect2, options) {
  return doWatch(
    effect2,
    null,
    { flush: "sync" }
  );
}
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, flush, once } = options;
  const baseWatchOptions = extend$1({}, options);
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx2 = useSSRContext();
      ssrCleanup = ctx2.__watcherHandles || (ctx2.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {
      };
      watchStopHandle.stop = NOOP;
      watchStopHandle.resume = NOOP;
      watchStopHandle.pause = NOOP;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = (job) => {
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = (job) => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = watch$1(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction$2(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx2, path2) {
  const segments = path2.split(".");
  return () => {
    let cur = ctx2;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function useModel(props, name, options = EMPTY_OBJ) {
  const i = getCurrentInstance();
  const camelizedName = camelize(name);
  const hyphenatedName = hyphenate(name);
  const modifiers = getModelModifiers(props, camelizedName);
  const res = customRef((track2, trigger2) => {
    let localValue;
    let prevSetValue = EMPTY_OBJ;
    let prevEmittedValue;
    watchSyncEffect(() => {
      const propValue = props[camelizedName];
      if (hasChanged(localValue, propValue)) {
        localValue = propValue;
        trigger2();
      }
    });
    return {
      get() {
        track2();
        return options.get ? options.get(localValue) : localValue;
      },
      set(value) {
        const emittedValue = options.set ? options.set(value) : value;
        if (!hasChanged(emittedValue, localValue) && !(prevSetValue !== EMPTY_OBJ && hasChanged(value, prevSetValue))) {
          return;
        }
        const rawProps = i.vnode.props;
        if (!(rawProps && // check if parent has passed v-model
        (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps))) {
          localValue = value;
          trigger2();
        }
        i.emit(`update:${name}`, emittedValue);
        if (hasChanged(value, emittedValue) && hasChanged(value, prevSetValue) && !hasChanged(emittedValue, prevEmittedValue)) {
          trigger2();
        }
        prevSetValue = value;
        prevEmittedValue = emittedValue;
      }
    };
  });
  res[Symbol.iterator] = () => {
    let i2 = 0;
    return {
      next() {
        if (i2 < 2) {
          return { value: i2++ ? modifiers || EMPTY_OBJ : res, done: false };
        } else {
          return { done: true };
        }
      }
    };
  };
  return res;
}
const getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted) return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map((a) => isString$1(a) ? a.trim() : a);
    }
    if (modifiers.number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache2 = appContext.emitsCache;
  const cached = cache2.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction$2(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend$1(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$2(comp)) {
      cache2.set(comp, null);
    }
    return null;
  }
  if (isArray$3(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend$1(normalized, raw);
  }
  if (isObject$2(comp)) {
    cache2.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render: render2,
    renderCache,
    props,
    data,
    setupState,
    ctx: ctx2,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = false ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1$1(
            `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render2.call(
          thisProxy,
          proxyToUse,
          renderCache,
          false ? shallowReadonly(props) : props,
          setupState,
          data,
          ctx2
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render22 = Component;
      if (false) ;
      result = normalizeVNode(
        render22.length > 1 ? render22(
          false ? shallowReadonly(props) : props,
          false ? {
            get attrs() {
              markAttrsAccessed();
              return shallowReadonly(attrs);
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render22(
          false ? shallowReadonly(props) : props,
          null
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root2 = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root2;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root2 = cloneVNode(root2, fallthroughAttrs, false, true);
      }
    }
  }
  if (vnode.dirs) {
    root2 = cloneVNode(root2, null, false, true);
    root2.dirs = root2.dirs ? root2.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    setTransitionHooks(root2, vnode.transition);
  }
  {
    result = root2;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
function filterSingleRoot(children, recurse = true) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent) {
    const root2 = parent.subTree;
    if (root2.suspense && root2.suspense.activeBranch === vnode) {
      root2.el = vnode.el;
    }
    if (root2 === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
const isSuspense = (type) => type.__isSuspense;
let suspenseId = 0;
const SuspenseImpl = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized, rendererInternals) {
    if (n1 == null) {
      mountSuspense(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        optimized,
        rendererInternals
      );
    } else {
      if (parentSuspense && parentSuspense.deps > 0 && !n1.suspense.isInFallback) {
        n2.suspense = n1.suspense;
        n2.suspense.vnode = n2;
        n2.el = n1.el;
        return;
      }
      patchSuspense(
        n1,
        n2,
        container,
        anchor,
        parentComponent,
        namespace2,
        slotScopeIds,
        optimized,
        rendererInternals
      );
    }
  },
  hydrate: hydrateSuspense,
  normalize: normalizeSuspenseChildren
};
const Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
  const eventListener = vnode.props && vnode.props[name];
  if (isFunction$2(eventListener)) {
    eventListener();
  }
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized, rendererInternals) {
  const {
    p: patch,
    o: { createElement: createElement2 }
  } = rendererInternals;
  const hiddenContainer = createElement2("div");
  const suspense = vnode.suspense = createSuspenseBoundary(
    vnode,
    parentSuspense,
    parentComponent,
    container,
    hiddenContainer,
    anchor,
    namespace2,
    slotScopeIds,
    optimized,
    rendererInternals
  );
  patch(
    null,
    suspense.pendingBranch = vnode.ssContent,
    hiddenContainer,
    null,
    parentComponent,
    suspense,
    namespace2,
    slotScopeIds
  );
  if (suspense.deps > 0) {
    triggerEvent(vnode, "onPending");
    triggerEvent(vnode, "onFallback");
    patch(
      null,
      vnode.ssFallback,
      container,
      anchor,
      parentComponent,
      null,
      // fallback tree will not have suspense context
      namespace2,
      slotScopeIds
    );
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    suspense.resolve(false, true);
  }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, namespace2, slotScopeIds, optimized, { p: patch, um: unmount2, o: { createElement: createElement2 } }) {
  const suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  const newBranch = n2.ssContent;
  const newFallback = n2.ssFallback;
  const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
  if (pendingBranch) {
    suspense.pendingBranch = newBranch;
    if (isSameVNodeType(newBranch, pendingBranch)) {
      patch(
        pendingBranch,
        newBranch,
        suspense.hiddenContainer,
        null,
        parentComponent,
        suspense,
        namespace2,
        slotScopeIds,
        optimized
      );
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        if (!isHydrating) {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            namespace2,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      }
    } else {
      suspense.pendingId = suspenseId++;
      if (isHydrating) {
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount2(pendingBranch, parentComponent, suspense);
      }
      suspense.deps = 0;
      suspense.effects.length = 0;
      suspense.hiddenContainer = createElement2("div");
      if (isInFallback) {
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace2,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            namespace2,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(
          activeBranch,
          newBranch,
          container,
          anchor,
          parentComponent,
          suspense,
          namespace2,
          slotScopeIds,
          optimized
        );
        suspense.resolve(true);
      } else {
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace2,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      patch(
        activeBranch,
        newBranch,
        container,
        anchor,
        parentComponent,
        suspense,
        namespace2,
        slotScopeIds,
        optimized
      );
      setActiveBranch(suspense, newBranch);
    } else {
      triggerEvent(n2, "onPending");
      suspense.pendingBranch = newBranch;
      if (newBranch.shapeFlag & 512) {
        suspense.pendingId = newBranch.component.suspenseId;
      } else {
        suspense.pendingId = suspenseId++;
      }
      patch(
        null,
        newBranch,
        suspense.hiddenContainer,
        null,
        parentComponent,
        suspense,
        namespace2,
        slotScopeIds,
        optimized
      );
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else {
        const { timeout, pendingId } = suspense;
        if (timeout > 0) {
          setTimeout(() => {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}
function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace2, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
  const {
    p: patch,
    m: move,
    um: unmount2,
    n: next,
    o: { parentNode, remove: remove2 }
  } = rendererInternals;
  let parentSuspenseId;
  const isSuspensible = isVNodeSuspensible(vnode);
  if (isSuspensible) {
    if (parentSuspense && parentSuspense.pendingBranch) {
      parentSuspenseId = parentSuspense.pendingId;
      parentSuspense.deps++;
    }
  }
  const timeout = vnode.props ? toNumber(vnode.props.timeout) : void 0;
  const initialAnchor = anchor;
  const suspense = {
    vnode,
    parent: parentSuspense,
    parentComponent,
    namespace: namespace2,
    container,
    hiddenContainer,
    deps: 0,
    pendingId: suspenseId++,
    timeout: typeof timeout === "number" ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !isHydrating,
    isHydrating,
    isUnmounted: false,
    effects: [],
    resolve(resume = false, sync = false) {
      const {
        vnode: vnode2,
        activeBranch,
        pendingBranch,
        pendingId,
        effects,
        parentComponent: parentComponent2,
        container: container2
      } = suspense;
      let delayEnter = false;
      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave = () => {
            if (pendingId === suspense.pendingId) {
              move(
                pendingBranch,
                container2,
                anchor === initialAnchor ? next(activeBranch) : anchor,
                0
              );
              queuePostFlushCb(effects);
            }
          };
        }
        if (activeBranch) {
          if (parentNode(activeBranch.el) === container2) {
            anchor = next(activeBranch);
          }
          unmount2(activeBranch, parentComponent2, suspense, true);
        }
        if (!delayEnter) {
          move(pendingBranch, container2, anchor, 0);
        }
      }
      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false;
      let parent = suspense.parent;
      let hasUnresolvedAncestor = false;
      while (parent) {
        if (parent.pendingBranch) {
          parent.effects.push(...effects);
          hasUnresolvedAncestor = true;
          break;
        }
        parent = parent.parent;
      }
      if (!hasUnresolvedAncestor && !delayEnter) {
        queuePostFlushCb(effects);
      }
      suspense.effects = [];
      if (isSuspensible) {
        if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
          parentSuspense.deps--;
          if (parentSuspense.deps === 0 && !sync) {
            parentSuspense.resolve();
          }
        }
      }
      triggerEvent(vnode2, "onResolve");
    },
    fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }
      const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, namespace: namespace22 } = suspense;
      triggerEvent(vnode2, "onFallback");
      const anchor2 = next(activeBranch);
      const mountFallback = () => {
        if (!suspense.isInFallback) {
          return;
        }
        patch(
          null,
          fallbackVNode,
          container2,
          anchor2,
          parentComponent2,
          null,
          // fallback tree will not have suspense context
          namespace22,
          slotScopeIds,
          optimized
        );
        setActiveBranch(suspense, fallbackVNode);
      };
      const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }
      suspense.isInFallback = true;
      unmount2(
        activeBranch,
        parentComponent2,
        null,
        // no suspense so unmount hooks fire now
        true
        // shouldRemove
      );
      if (!delayEnter) {
        mountFallback();
      }
    },
    move(container2, anchor2, type) {
      suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
      suspense.container = container2;
    },
    next() {
      return suspense.activeBranch && next(suspense.activeBranch);
    },
    registerDep(instance, setupRenderEffect, optimized2) {
      const isInPendingSuspense = !!suspense.pendingBranch;
      if (isInPendingSuspense) {
        suspense.deps++;
      }
      const hydratedEl = instance.vnode.el;
      instance.asyncDep.catch((err) => {
        handleError(err, instance, 0);
      }).then((asyncSetupResult) => {
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        }
        instance.asyncResolved = true;
        const { vnode: vnode2 } = instance;
        handleSetupResult(instance, asyncSetupResult, false);
        if (hydratedEl) {
          vnode2.el = hydratedEl;
        }
        const placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(
          instance,
          vnode2,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          parentNode(hydratedEl || instance.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          hydratedEl ? null : next(instance.subTree),
          suspense,
          namespace2,
          optimized2
        );
        if (placeholder) {
          remove2(placeholder);
        }
        updateHOCHostEl(instance, vnode2.el);
        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount(parentSuspense2, doRemove) {
      suspense.isUnmounted = true;
      if (suspense.activeBranch) {
        unmount2(
          suspense.activeBranch,
          parentComponent,
          parentSuspense2,
          doRemove
        );
      }
      if (suspense.pendingBranch) {
        unmount2(
          suspense.pendingBranch,
          parentComponent,
          parentSuspense2,
          doRemove
        );
      }
    }
  };
  return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  const suspense = vnode.suspense = createSuspenseBoundary(
    vnode,
    parentSuspense,
    parentComponent,
    node.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    namespace2,
    slotScopeIds,
    optimized,
    rendererInternals,
    true
  );
  const result = hydrateNode(
    node,
    suspense.pendingBranch = vnode.ssContent,
    parentComponent,
    suspense,
    slotScopeIds,
    optimized
  );
  if (suspense.deps === 0) {
    suspense.resolve(false, true);
  }
  return result;
}
function normalizeSuspenseChildren(vnode) {
  const { shapeFlag, children } = vnode;
  const isSlotChildren = shapeFlag & 32;
  vnode.ssContent = normalizeSuspenseSlot(
    isSlotChildren ? children.default : children
  );
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
  let block;
  if (isFunction$2(s)) {
    const trackBlock = isBlockTreeEnabled && s._c;
    if (trackBlock) {
      s._d = false;
      openBlock();
    }
    s = s();
    if (trackBlock) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }
  if (isArray$3(s)) {
    const singleChild = filterSingleRoot(s);
    s = singleChild;
  }
  s = normalizeVNode(s);
  if (block && !s.dynamicChildren) {
    s.dynamicChildren = block.filter((c2) => c2 !== s);
  }
  return s;
}
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$3(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  const { vnode, parentComponent } = suspense;
  let el = branch.el;
  while (!el && branch.component) {
    branch = branch.component.subTree;
    el = branch.el;
  }
  vnode.el = el;
  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}
function isVNodeSuspensible(vnode) {
  const suspensible = vnode.props && vnode.props.suspensible;
  return suspensible != null && suspensible !== false;
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
function transformVNodeArgs(transformer) {
}
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref: ref3,
  ref_key,
  ref_for
}) => {
  if (typeof ref3 === "number") {
    ref3 = "" + ref3;
  }
  return ref3 != null ? isString$1(ref3) || isRef(ref3) || isFunction$2(ref3) ? { i: currentRenderingInstance, r: ref3, k: ref_key, f: !!ref_for } : ref3 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString$1(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style: style2 } = props;
    if (klass && !isString$1(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$2(style2)) {
      if (isProxy(style2) && !isArray$3(style2)) {
        style2 = extend$1({}, style2);
      }
      props.style = normalizeStyle(style2);
    }
  }
  const shapeFlag = isString$1(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$2(type) ? 4 : isFunction$2(type) ? 2 : 0;
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props) return null;
  return isProxy(props) || isInternalObject(props) ? extend$1({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const { props, ref: ref3, patchFlag, children, transition } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref3 ? isArray$3(ref3) ? ref3.concat(normalizeRef(extraProps)) : [ref3, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref3,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(
      cloned,
      transition.clone(cloned)
    );
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$3(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$3(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction$2(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray$3(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    ids: parent ? parent.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key])) setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1) setters.forEach((set) => set(v));
      else setters[0](v);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v) => currentInstance = v
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v) => isInSSRComponentSetup = v
  );
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  const { setup } = Component;
  if (setup) {
    pauseTracking();
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
        instance.props,
        setupContext
      ]
    );
    const isAsyncSetup = isPromise(setupResult);
    resetTracking();
    reset();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction$2(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject$2(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else ;
  finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
function registerRuntimeCompiler(_compile) {
  compile = _compile;
  installWithProxy = (i) => {
    if (i.render._rc) {
      i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  };
}
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend$1(
          extend$1(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
    if (installWithProxy) {
      installWithProxy(instance);
    }
  }
  {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
}
const attrsProxyHandlers = {
  get(target, key) {
    track(target, "get", "");
    return target[key];
  }
};
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  {
    return {
      attrs: new Proxy(instance.attrs, attrsProxyHandlers),
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c2) => c2.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction$2(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match2 = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match2) {
      name = match2[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction$2(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  const c2 = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  return c2;
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject$2(propsOrChildren) && !isArray$3(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
function initCustomFormatter() {
  {
    return;
  }
}
function withMemo(memo, render2, cache2, index) {
  const cached = cache2[index];
  if (cached && isMemoSame(cached, memo)) {
    return cached;
  }
  const ret = render2();
  ret.memo = memo.slice();
  ret.cacheIndex = index;
  return cache2[index] = ret;
}
function isMemoSame(cached, memo) {
  const prev = cached.memo;
  if (prev.length != memo.length) {
    return false;
  }
  for (let i = 0; i < prev.length; i++) {
    if (hasChanged(prev[i], memo[i])) {
      return false;
    }
  }
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(cached);
  }
  return true;
}
const version = "3.5.13";
const warn$3 = NOOP;
const ErrorTypeStrings = ErrorTypeStrings$1;
const devtools = devtools$1;
const setDevtoolsHook = setDevtoolsHook$1;
const _ssrUtils = {
  createComponentInstance,
  setupComponent,
  renderComponentRoot,
  setCurrentRenderingInstance,
  isVNode,
  normalizeVNode,
  getComponentPublicInstance,
  ensureValidVNode: ensureValidVNode$1,
  pushWarningContext,
  popWarningContext
};
const ssrUtils = _ssrUtils;
const resolveFilter = null;
const compatUtils = null;
const DeprecationTypes = null;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let policy = void 0;
const tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) {
  try {
    policy = /* @__PURE__ */ tt.createPolicy("vue", {
      createHTML: (val) => val
    });
  } catch (e) {
  }
}
const unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace2, is, props) => {
    const el = namespace2 === "svg" ? doc.createElementNS(svgNS, tag) : namespace2 === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace2, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(
        namespace2 === "svg" ? `<svg>${content}</svg>` : namespace2 === "mathml" ? `<math>${content}</math>` : content
      );
      const template = templateContainer.content;
      if (namespace2 === "svg" || namespace2 === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = /* @__PURE__ */ extend$1(
  {},
  BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const decorate$1 = (t) => {
  t.displayName = "Transition";
  t.props = TransitionPropsValidators;
  return t;
};
const Transition = /* @__PURE__ */ decorate$1(
  (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots)
);
const callHook = (hook, args = []) => {
  if (isArray$3(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray$3(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration: duration2,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration2);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done, isCancelled) => {
    el._enterCancelled = isCancelled;
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend$1(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      if (!el._enterCancelled) {
        forceReflow();
        addTransitionClass(el, leaveActiveClass);
      } else {
        addTransitionClass(el, leaveActiveClass);
        forceReflow();
      }
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false, void 0, true);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true, void 0, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration2) {
  if (duration2 == null) {
    return null;
  } else if (isObject$2(duration2)) {
    return [NumberOf(duration2.enter), NumberOf(duration2.leave)];
  } else {
    const n = NumberOf(duration2);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c2) => c2 && el.classList.add(c2));
  (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c2) => c2 && el.classList.remove(c2));
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el[vtcKey] = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout != null) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  if (s === "auto") return 0;
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
function patchClass(el, value, isSVG2) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG2) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue) return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el[vShowOriginalDisplay] : "none";
  el[vShowHidden] = !value;
}
function initVShowForSSR() {
  vShow.getSSRProps = ({ value }) => {
    if (!value) {
      return { style: { display: "none" } };
    }
  };
}
const CSS_VAR_TEXT = Symbol("");
function useCssVars(getter) {
  const instance = getCurrentInstance();
  if (!instance) {
    return;
  }
  const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)
    ).forEach((node) => setVarsOnNode(node, vars));
  };
  const setVars = () => {
    const vars = getter(instance.proxy);
    if (instance.ce) {
      setVarsOnNode(instance.ce, vars);
    } else {
      setVarsOnVNode(instance.subTree, vars);
    }
    updateTeleports(vars);
  };
  onBeforeUpdate(() => {
    queuePostFlushCb(setVars);
  });
  onMounted(() => {
    watch(setVars, NOOP, { flush: "post" });
    const ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, { childList: true });
    onUnmounted(() => ob.disconnect());
  });
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === Fragment) {
    vnode.children.forEach((c2) => setVarsOnVNode(c2, vars));
  } else if (vnode.type === Static) {
    let { el, anchor } = vnode;
    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor) break;
      el = el.nextSibling;
    }
  }
}
function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style2 = el.style;
    let cssText = "";
    for (const key in vars) {
      style2.setProperty(`--${key}`, vars[key]);
      cssText += `--${key}: ${vars[key]};`;
    }
    style2[CSS_VAR_TEXT] = cssText;
  }
}
const displayRE = /(^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style2 = el.style;
  const isCssString = isString$1(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!isString$1(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style2, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style2, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style2, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style2[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style2.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style2.display : "";
    if (el[vShowHidden]) {
      style2.display = "none";
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style2, name, val) {
  if (isArray$3(val)) {
    val.forEach((v) => setStyle(style2, name, v));
  } else {
    if (val == null) val = "";
    if (name.startsWith("--")) {
      style2.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style2, name);
      if (importantRE.test(val)) {
        style2.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style2[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style2, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style2) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style2) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG2, instance, isBoolean2 = isSpecialBooleanAttr(key)) {
  if (isSVG2 && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(
        key,
        isBoolean2 ? "" : isSymbol$1(value) ? String(value) : value
      );
    }
  }
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
  if (key === "innerHTML" || key === "textContent") {
    if (value != null) {
      el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      el.type === "checkbox" ? "on" : ""
    ) : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
  }
  needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(
        nextValue,
        instance
      );
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray$3(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map(
      (fn) => (e2) => !e2._stopped && fn && fn(e2)
    );
  } else {
    return value;
  }
}
const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace2, parentComponent) => {
  const isSVG2 = namespace2 === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG2);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG2)) {
    patchDOMProp(el, key, nextValue);
    if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
      patchAttr(el, key, nextValue, isSVG2, parentComponent, key !== "value");
    }
  } else if (
    // #11081 force set props for possible async custom element
    el._isVueCE && (/[A-Z]/.test(key) || !isString$1(nextValue))
  ) {
    patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG2);
  }
};
function shouldSetAsProp(el, key, value, isSVG2) {
  if (isSVG2) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && isFunction$2(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && isString$1(value)) {
    return false;
  }
  return key in el;
}
const REMOVAL = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineCustomElement(options, extraOptions, _createApp) {
  const Comp = /* @__PURE__ */ defineComponent(options, extraOptions);
  if (isPlainObject$3(Comp)) extend$1(Comp, extraOptions);
  class VueCustomElement extends VueElement {
    constructor(initialProps) {
      super(Comp, initialProps, _createApp);
    }
  }
  VueCustomElement.def = Comp;
  return VueCustomElement;
}
/*! #__NO_SIDE_EFFECTS__ */
const defineSSRCustomElement = /* @__NO_SIDE_EFFECTS__ */ (options, extraOptions) => {
  return /* @__PURE__ */ defineCustomElement(options, extraOptions, createSSRApp);
};
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class VueElement extends BaseClass {
  constructor(_def, _props = {}, _createApp = createApp) {
    super();
    this._def = _def;
    this._props = _props;
    this._createApp = _createApp;
    this._isVueCE = true;
    this._instance = null;
    this._app = null;
    this._nonce = this._def.nonce;
    this._connected = false;
    this._resolved = false;
    this._numberProps = null;
    this._styleChildren = /* @__PURE__ */ new WeakSet();
    this._ob = null;
    if (this.shadowRoot && _createApp !== createApp) {
      this._root = this.shadowRoot;
    } else {
      if (_def.shadowRoot !== false) {
        this.attachShadow({ mode: "open" });
        this._root = this.shadowRoot;
      } else {
        this._root = this;
      }
    }
    if (!this._def.__asyncLoader) {
      this._resolveProps(this._def);
    }
  }
  connectedCallback() {
    if (!this.isConnected) return;
    if (!this.shadowRoot) {
      this._parseSlots();
    }
    this._connected = true;
    let parent = this;
    while (parent = parent && (parent.parentNode || parent.host)) {
      if (parent instanceof VueElement) {
        this._parent = parent;
        break;
      }
    }
    if (!this._instance) {
      if (this._resolved) {
        this._setParent();
        this._update();
      } else {
        if (parent && parent._pendingResolve) {
          this._pendingResolve = parent._pendingResolve.then(() => {
            this._pendingResolve = void 0;
            this._resolveDef();
          });
        } else {
          this._resolveDef();
        }
      }
    }
  }
  _setParent(parent = this._parent) {
    if (parent) {
      this._instance.parent = parent._instance;
      this._instance.provides = parent._instance.provides;
    }
  }
  disconnectedCallback() {
    this._connected = false;
    nextTick(() => {
      if (!this._connected) {
        if (this._ob) {
          this._ob.disconnect();
          this._ob = null;
        }
        this._app && this._app.unmount();
        if (this._instance) this._instance.ce = void 0;
        this._app = this._instance = null;
      }
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve) {
      return;
    }
    for (let i = 0; i < this.attributes.length; i++) {
      this._setAttr(this.attributes[i].name);
    }
    this._ob = new MutationObserver((mutations) => {
      for (const m of mutations) {
        this._setAttr(m.attributeName);
      }
    });
    this._ob.observe(this, { attributes: true });
    const resolve2 = (def2, isAsync = false) => {
      this._resolved = true;
      this._pendingResolve = void 0;
      const { props, styles } = def2;
      let numberProps;
      if (props && !isArray$3(props)) {
        for (const key in props) {
          const opt = props[key];
          if (opt === Number || opt && opt.type === Number) {
            if (key in this._props) {
              this._props[key] = toNumber(this._props[key]);
            }
            (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[camelize(key)] = true;
          }
        }
      }
      this._numberProps = numberProps;
      if (isAsync) {
        this._resolveProps(def2);
      }
      if (this.shadowRoot) {
        this._applyStyles(styles);
      }
      this._mount(def2);
    };
    const asyncDef = this._def.__asyncLoader;
    if (asyncDef) {
      this._pendingResolve = asyncDef().then(
        (def2) => resolve2(this._def = def2, true)
      );
    } else {
      resolve2(this._def);
    }
  }
  _mount(def2) {
    this._app = this._createApp(def2);
    if (def2.configureApp) {
      def2.configureApp(this._app);
    }
    this._app._ceVNode = this._createVNode();
    this._app.mount(this._root);
    const exposed = this._instance && this._instance.exposed;
    if (!exposed) return;
    for (const key in exposed) {
      if (!hasOwn(this, key)) {
        Object.defineProperty(this, key, {
          // unwrap ref to be consistent with public instance behavior
          get: () => unref(exposed[key])
        });
      }
    }
  }
  _resolveProps(def2) {
    const { props } = def2;
    const declaredPropKeys = isArray$3(props) ? props : Object.keys(props || {});
    for (const key of Object.keys(this)) {
      if (key[0] !== "_" && declaredPropKeys.includes(key)) {
        this._setProp(key, this[key]);
      }
    }
    for (const key of declaredPropKeys.map(camelize)) {
      Object.defineProperty(this, key, {
        get() {
          return this._getProp(key);
        },
        set(val) {
          this._setProp(key, val, true, true);
        }
      });
    }
  }
  _setAttr(key) {
    if (key.startsWith("data-v-")) return;
    const has = this.hasAttribute(key);
    let value = has ? this.getAttribute(key) : REMOVAL;
    const camelKey = camelize(key);
    if (has && this._numberProps && this._numberProps[camelKey]) {
      value = toNumber(value);
    }
    this._setProp(camelKey, value, false, true);
  }
  /**
   * @internal
   */
  _getProp(key) {
    return this._props[key];
  }
  /**
   * @internal
   */
  _setProp(key, val, shouldReflect = true, shouldUpdate = false) {
    if (val !== this._props[key]) {
      if (val === REMOVAL) {
        delete this._props[key];
      } else {
        this._props[key] = val;
        if (key === "key" && this._app) {
          this._app._ceVNode.key = val;
        }
      }
      if (shouldUpdate && this._instance) {
        this._update();
      }
      if (shouldReflect) {
        const ob = this._ob;
        ob && ob.disconnect();
        if (val === true) {
          this.setAttribute(hyphenate(key), "");
        } else if (typeof val === "string" || typeof val === "number") {
          this.setAttribute(hyphenate(key), val + "");
        } else if (!val) {
          this.removeAttribute(hyphenate(key));
        }
        ob && ob.observe(this, { attributes: true });
      }
    }
  }
  _update() {
    render$2(this._createVNode(), this._root);
  }
  _createVNode() {
    const baseProps = {};
    if (!this.shadowRoot) {
      baseProps.onVnodeMounted = baseProps.onVnodeUpdated = this._renderSlots.bind(this);
    }
    const vnode = createVNode(this._def, extend$1(baseProps, this._props));
    if (!this._instance) {
      vnode.ce = (instance) => {
        this._instance = instance;
        instance.ce = this;
        instance.isCE = true;
        const dispatch = (event, args) => {
          this.dispatchEvent(
            new CustomEvent(
              event,
              isPlainObject$3(args[0]) ? extend$1({ detail: args }, args[0]) : { detail: args }
            )
          );
        };
        instance.emit = (event, ...args) => {
          dispatch(event, args);
          if (hyphenate(event) !== event) {
            dispatch(hyphenate(event), args);
          }
        };
        this._setParent();
      };
    }
    return vnode;
  }
  _applyStyles(styles, owner) {
    if (!styles) return;
    if (owner) {
      if (owner === this._def || this._styleChildren.has(owner)) {
        return;
      }
      this._styleChildren.add(owner);
    }
    const nonce = this._nonce;
    for (let i = styles.length - 1; i >= 0; i--) {
      const s = document.createElement("style");
      if (nonce) s.setAttribute("nonce", nonce);
      s.textContent = styles[i];
      this.shadowRoot.prepend(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const slots = this._slots = {};
    let n;
    while (n = this.firstChild) {
      const slotName = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (slots[slotName] || (slots[slotName] = [])).push(n);
      this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const outlets = (this._teleportTarget || this).querySelectorAll("slot");
    const scopeId = this._instance.type.__scopeId;
    for (let i = 0; i < outlets.length; i++) {
      const o = outlets[i];
      const slotName = o.getAttribute("name") || "default";
      const content = this._slots[slotName];
      const parent = o.parentNode;
      if (content) {
        for (const n of content) {
          if (scopeId && n.nodeType === 1) {
            const id = scopeId + "-s";
            const walker = document.createTreeWalker(n, 1);
            n.setAttribute(id, "");
            let child;
            while (child = walker.nextNode()) {
              child.setAttribute(id, "");
            }
          }
          parent.insertBefore(n, o);
        }
      } else {
        while (o.firstChild) parent.insertBefore(o.firstChild, o);
      }
      parent.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(comp) {
    this._applyStyles(comp.styles, comp);
  }
  /**
   * @internal
   */
  _removeChildStyle(comp) {
  }
}
function useHost(caller) {
  const instance = getCurrentInstance();
  const el = instance && instance.ce;
  if (el) {
    return el;
  }
  return null;
}
function useShadowRoot() {
  const el = useHost();
  return el && el.shadowRoot;
}
function useCssModule(name = "$style") {
  {
    const instance = getCurrentInstance();
    if (!instance) {
      return EMPTY_OBJ;
    }
    const modules = instance.type.__cssModules;
    if (!modules) {
      return EMPTY_OBJ;
    }
    const mod = modules[name];
    if (!mod) {
      return EMPTY_OBJ;
    }
    return mod;
  }
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const moveCbKey = Symbol("_moveCb");
const enterCbKey = Symbol("_enterCb");
const decorate = (t) => {
  delete t.props.mode;
  return t;
};
const TransitionGroupImpl = /* @__PURE__ */ decorate({
  name: "TransitionGroup",
  props: /* @__PURE__ */ extend$1({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevChildren;
    let children;
    onUpdated(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(
        prevChildren[0].el,
        instance.vnode.el,
        moveClass
      )) {
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow();
      movedChildren.forEach((c2) => {
        const el = c2.el;
        const style2 = el.style;
        addTransitionClass(el, moveClass);
        style2.transform = style2.webkitTransform = style2.transitionDuration = "";
        const cb = el[moveCbKey] = (e) => {
          if (e && e.target !== el) {
            return;
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener("transitionend", cb);
            el[moveCbKey] = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
    });
    return () => {
      const rawProps = toRaw(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || Fragment;
      prevChildren = [];
      if (children) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child.el && child.el instanceof Element) {
            prevChildren.push(child);
            setTransitionHooks(
              child,
              resolveTransitionHooks(
                child,
                cssTransitionProps,
                state,
                instance
              )
            );
            positionMap.set(
              child,
              child.el.getBoundingClientRect()
            );
          }
        }
      }
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.key != null) {
          setTransitionHooks(
            child,
            resolveTransitionHooks(child, cssTransitionProps, state, instance)
          );
        }
      }
      return createVNode(tag, null, children);
    };
  }
});
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c2) {
  const el = c2.el;
  if (el[moveCbKey]) {
    el[moveCbKey]();
  }
  if (el[enterCbKey]) {
    el[enterCbKey]();
  }
}
function recordPosition(c2) {
  newPositionMap.set(c2, c2.el.getBoundingClientRect());
}
function applyTranslation(c2) {
  const oldPos = positionMap.get(c2);
  const newPos = newPositionMap.get(c2);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s = c2.el.style;
    s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
    s.transitionDuration = "0s";
    return c2;
  }
}
function hasCSSTransform(el, root2, moveClass) {
  const clone = el.cloneNode();
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c2) => c2 && clone.classList.remove(c2));
    });
  }
  moveClass.split(/\s+/).forEach((c2) => c2 && clone.classList.add(c2));
  clone.style.display = "none";
  const container = root2.nodeType === 1 ? root2 : root2.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}
const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"] || false;
  return isArray$3(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const assignKey = Symbol("_assign");
const vModelText = {
  created(el, { modifiers: { lazy, trim: trim2, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing) return;
      let domValue = el.value;
      if (trim2) {
        domValue = domValue.trim();
      }
      if (castToNumber) {
        domValue = looseToNumber(domValue);
      }
      el[assignKey](domValue);
    });
    if (trim2) {
      addEventListener(el, "change", () => {
        el.value = el.value.trim();
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim: trim2, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (el.composing) return;
    const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
    const newValue = value == null ? "" : value;
    if (elValue === newValue) {
      return;
    }
    if (document.activeElement === el && el.type !== "range") {
      if (lazy && value === oldValue) {
        return;
      }
      if (trim2 && el.value.trim() === newValue) {
        return;
      }
    }
    el.value = newValue;
  }
};
const vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created(el, _, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue$1(el);
      const checked = el.checked;
      const assign2 = el[assignKey];
      if (isArray$3(modelValue)) {
        const index = looseIndexOf(modelValue, elementValue);
        const found = index !== -1;
        if (checked && !found) {
          assign2(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index, 1);
          assign2(filtered);
        }
      } else if (isSet(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign2(cloned);
      } else {
        assign2(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, { value, oldValue }, vnode) {
  el._modelValue = value;
  let checked;
  if (isArray$3(value)) {
    checked = looseIndexOf(value, vnode.props.value) > -1;
  } else if (isSet(value)) {
    checked = value.has(vnode.props.value);
  } else {
    if (value === oldValue) return;
    checked = looseEqual(value, getCheckboxValue(el, true));
  }
  if (el.checked !== checked) {
    el.checked = checked;
  }
}
const vModelRadio = {
  created(el, { value }, vnode) {
    el.checked = looseEqual(value, vnode.props.value);
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el[assignKey](getValue$1(el));
    });
  },
  beforeUpdate(el, { value, oldValue }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = looseEqual(value, vnode.props.value);
    }
  }
};
const vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created(el, { value, modifiers: { number } }, vnode) {
    const isSetModel = isSet(value);
    addEventListener(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
        (o) => number ? looseToNumber(getValue$1(o)) : getValue$1(o)
      );
      el[assignKey](
        el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
      );
      el._assigning = true;
      nextTick(() => {
        el._assigning = false;
      });
    });
    el[assignKey] = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(el, { value }) {
    setSelected(el, value);
  },
  beforeUpdate(el, _binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
  },
  updated(el, { value }) {
    if (!el._assigning) {
      setSelected(el, value);
    }
  }
};
function setSelected(el, value) {
  const isMultiple = el.multiple;
  const isArrayValue = isArray$3(value);
  if (isMultiple && !isArrayValue && !isSet(value)) {
    return;
  }
  for (let i = 0, l = el.options.length; i < l; i++) {
    const option = el.options[i];
    const optionValue = getValue$1(option);
    if (isMultiple) {
      if (isArrayValue) {
        const optionType = typeof optionValue;
        if (optionType === "string" || optionType === "number") {
          option.selected = value.some((v) => String(v) === String(optionValue));
        } else {
          option.selected = looseIndexOf(value, optionValue) > -1;
        }
      } else {
        option.selected = value.has(optionValue);
      }
    } else if (looseEqual(getValue$1(option), value)) {
      if (el.selectedIndex !== i) el.selectedIndex = i;
      return;
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue$1(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
const vModelDynamic = {
  created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "created");
  },
  mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "mounted");
  },
  beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
  },
  updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "updated");
  }
};
function resolveDynamicModel(tagName, type) {
  switch (tagName) {
    case "SELECT":
      return vModelSelect;
    case "TEXTAREA":
      return vModelText;
    default:
      switch (type) {
        case "checkbox":
          return vModelCheckbox;
        case "radio":
          return vModelRadio;
        default:
          return vModelText;
      }
  }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
  const modelToUse = resolveDynamicModel(
    el.tagName,
    vnode.props && vnode.props.type
  );
  const fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}
function initVModelForSSR() {
  vModelText.getSSRProps = ({ value }) => ({ value });
  vModelRadio.getSSRProps = ({ value }, vnode) => {
    if (vnode.props && looseEqual(vnode.props.value, value)) {
      return { checked: true };
    }
  };
  vModelCheckbox.getSSRProps = ({ value }, vnode) => {
    if (isArray$3(value)) {
      if (vnode.props && looseIndexOf(value, vnode.props.value) > -1) {
        return { checked: true };
      }
    } else if (isSet(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return { checked: true };
      }
    } else if (value) {
      return { checked: true };
    }
  };
  vModelDynamic.getSSRProps = (binding, vnode) => {
    if (typeof vnode.type !== "string") {
      return;
    }
    const modelToUse = resolveDynamicModel(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      vnode.type.toUpperCase(),
      vnode.props && vnode.props.type
    );
    if (modelToUse.getSSRProps) {
      return modelToUse.getSSRProps(binding, vnode);
    }
  };
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  const cache2 = fn._withMods || (fn._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache2[cacheKey] || (cache2[cacheKey] = (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }
    return fn(event, ...args);
  });
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  const cache2 = fn._withKeys || (fn._withKeys = {});
  const cacheKey = modifiers.join(".");
  return cache2[cacheKey] || (cache2[cacheKey] = (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some(
      (k) => k === eventKey || keyNames[k] === eventKey
    )) {
      return fn(event);
    }
  });
};
const rendererOptions = /* @__PURE__ */ extend$1({ patchProp }, nodeOps);
let renderer;
let enabledHydration = false;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
  enabledHydration = true;
  return renderer;
}
const render$2 = (...args) => {
  ensureRenderer().render(...args);
};
const hydrate = (...args) => {
  ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  const { mount: mount2 } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container) return;
    const component = app._component;
    if (!isFunction$2(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    if (container.nodeType === 1) {
      container.textContent = "";
    }
    const proxy = mount2(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
const createSSRApp = (...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  const { mount: mount2 } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount2(container, true, resolveRootNamespace(container));
    }
  };
  return app;
};
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function normalizeContainer(container) {
  if (isString$1(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
let ssrDirectiveInitialized = false;
const initDirectivesForSSR = () => {
  if (!ssrDirectiveInitialized) {
    ssrDirectiveInitialized = true;
    initVModelForSSR();
    initVShowForSSR();
  }
};
function plugin$1(options) {
  let _bPrefix = ".";
  let _ePrefix = "__";
  let _mPrefix = "--";
  let c2;
  if (options) {
    let t = options.blockPrefix;
    if (t) {
      _bPrefix = t;
    }
    t = options.elementPrefix;
    if (t) {
      _ePrefix = t;
    }
    t = options.modifierPrefix;
    if (t) {
      _mPrefix = t;
    }
  }
  const _plugin = {
    install(instance) {
      c2 = instance.c;
      const ctx2 = instance.context;
      ctx2.bem = {};
      ctx2.bem.b = null;
      ctx2.bem.els = null;
    }
  };
  function b(arg) {
    let memorizedB;
    let memorizedE;
    return {
      before(ctx2) {
        memorizedB = ctx2.bem.b;
        memorizedE = ctx2.bem.els;
        ctx2.bem.els = null;
      },
      after(ctx2) {
        ctx2.bem.b = memorizedB;
        ctx2.bem.els = memorizedE;
      },
      $({ context, props }) {
        arg = typeof arg === "string" ? arg : arg({ context, props });
        context.bem.b = arg;
        return `${(props === null || props === void 0 ? void 0 : props.bPrefix) || _bPrefix}${context.bem.b}`;
      }
    };
  }
  function e(arg) {
    let memorizedE;
    return {
      before(ctx2) {
        memorizedE = ctx2.bem.els;
      },
      after(ctx2) {
        ctx2.bem.els = memorizedE;
      },
      $({ context, props }) {
        arg = typeof arg === "string" ? arg : arg({ context, props });
        context.bem.els = arg.split(",").map((v) => v.trim());
        return context.bem.els.map((el) => `${(props === null || props === void 0 ? void 0 : props.bPrefix) || _bPrefix}${context.bem.b}${_ePrefix}${el}`).join(", ");
      }
    };
  }
  function m(arg) {
    return {
      $({ context, props }) {
        arg = typeof arg === "string" ? arg : arg({ context, props });
        const modifiers = arg.split(",").map((v) => v.trim());
        function elementToSelector(el) {
          return modifiers.map((modifier) => `&${(props === null || props === void 0 ? void 0 : props.bPrefix) || _bPrefix}${context.bem.b}${el !== void 0 ? `${_ePrefix}${el}` : ""}${_mPrefix}${modifier}`).join(", ");
        }
        const els = context.bem.els;
        if (els !== null) {
          return elementToSelector(els[0]);
        } else {
          return elementToSelector();
        }
      }
    };
  }
  function notM(arg) {
    return {
      $({ context, props }) {
        arg = typeof arg === "string" ? arg : arg({ context, props });
        const els = context.bem.els;
        return `&:not(${(props === null || props === void 0 ? void 0 : props.bPrefix) || _bPrefix}${context.bem.b}${els !== null && els.length > 0 ? `${_ePrefix}${els[0]}` : ""}${_mPrefix}${arg})`;
      }
    };
  }
  const cB2 = (...args) => c2(b(args[0]), args[1], args[2]);
  const cE2 = (...args) => c2(e(args[0]), args[1], args[2]);
  const cM2 = (...args) => c2(m(args[0]), args[1], args[2]);
  const cNotM2 = (...args) => c2(notM(args[0]), args[1], args[2]);
  Object.assign(_plugin, {
    cB: cB2,
    cE: cE2,
    cM: cM2,
    cNotM: cNotM2
  });
  return _plugin;
}
function ampCount(selector) {
  let cnt = 0;
  for (let i = 0; i < selector.length; ++i) {
    if (selector[i] === "&")
      ++cnt;
  }
  return cnt;
}
const separatorRegex = /\s*,(?![^(]*\))\s*/g;
const extraSpaceRegex = /\s+/g;
function resolveSelectorWithAmp(amp, selector) {
  const nextAmp = [];
  selector.split(separatorRegex).forEach((partialSelector) => {
    let round = ampCount(partialSelector);
    if (!round) {
      amp.forEach((partialAmp) => {
        nextAmp.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (partialAmp && partialAmp + " ") + partialSelector
        );
      });
      return;
    } else if (round === 1) {
      amp.forEach((partialAmp) => {
        nextAmp.push(partialSelector.replace("&", partialAmp));
      });
      return;
    }
    let partialNextAmp = [
      partialSelector
    ];
    while (round--) {
      const nextPartialNextAmp = [];
      partialNextAmp.forEach((selectorItr) => {
        amp.forEach((partialAmp) => {
          nextPartialNextAmp.push(selectorItr.replace("&", partialAmp));
        });
      });
      partialNextAmp = nextPartialNextAmp;
    }
    partialNextAmp.forEach((part) => nextAmp.push(part));
  });
  return nextAmp;
}
function resolveSelector(amp, selector) {
  const nextAmp = [];
  selector.split(separatorRegex).forEach((partialSelector) => {
    amp.forEach((partialAmp) => {
      nextAmp.push((partialAmp && partialAmp + " ") + partialSelector);
    });
  });
  return nextAmp;
}
function parseSelectorPath(selectorPaths) {
  let amp = [""];
  selectorPaths.forEach((selector) => {
    selector = selector && selector.trim();
    if (
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      !selector
    ) {
      return;
    }
    if (selector.includes("&")) {
      amp = resolveSelectorWithAmp(amp, selector);
    } else {
      amp = resolveSelector(amp, selector);
    }
  });
  return amp.join(", ").replace(extraSpaceRegex, " ");
}
function removeElement(el) {
  if (!el)
    return;
  const parentElement = el.parentElement;
  if (parentElement)
    parentElement.removeChild(el);
}
function queryElement(id, parent) {
  return (parent !== null && parent !== void 0 ? parent : document.head).querySelector(`style[cssr-id="${id}"]`);
}
function createElement(id) {
  const el = document.createElement("style");
  el.setAttribute("cssr-id", id);
  return el;
}
function isMediaOrSupports(selector) {
  if (!selector)
    return false;
  return /^\s*@(s|m)/.test(selector);
}
const kebabRegex = /[A-Z]/g;
function kebabCase(pattern) {
  return pattern.replace(kebabRegex, (match2) => "-" + match2.toLowerCase());
}
function unwrapProperty(prop, indent = "  ") {
  if (typeof prop === "object" && prop !== null) {
    return " {\n" + Object.entries(prop).map((v) => {
      return indent + `  ${kebabCase(v[0])}: ${v[1]};`;
    }).join("\n") + "\n" + indent + "}";
  }
  return `: ${prop};`;
}
function unwrapProperties(props, instance, params) {
  if (typeof props === "function") {
    return props({
      context: instance.context,
      props: params
    });
  }
  return props;
}
function createStyle(selector, props, instance, params) {
  if (!props)
    return "";
  const unwrappedProps = unwrapProperties(props, instance, params);
  if (!unwrappedProps)
    return "";
  if (typeof unwrappedProps === "string") {
    return `${selector} {
${unwrappedProps}
}`;
  }
  const propertyNames = Object.keys(unwrappedProps);
  if (propertyNames.length === 0) {
    if (instance.config.keepEmptyBlock)
      return selector + " {\n}";
    return "";
  }
  const statements = selector ? [
    selector + " {"
  ] : [];
  propertyNames.forEach((propertyName) => {
    const property = unwrappedProps[propertyName];
    if (propertyName === "raw") {
      statements.push("\n" + property + "\n");
      return;
    }
    propertyName = kebabCase(propertyName);
    if (property !== null && property !== void 0) {
      statements.push(`  ${propertyName}${unwrapProperty(property)}`);
    }
  });
  if (selector) {
    statements.push("}");
  }
  return statements.join("\n");
}
function loopCNodeListWithCallback(children, options, callback) {
  if (!children)
    return;
  children.forEach((child) => {
    if (Array.isArray(child)) {
      loopCNodeListWithCallback(child, options, callback);
    } else if (typeof child === "function") {
      const grandChildren = child(options);
      if (Array.isArray(grandChildren)) {
        loopCNodeListWithCallback(grandChildren, options, callback);
      } else if (grandChildren) {
        callback(grandChildren);
      }
    } else if (child) {
      callback(child);
    }
  });
}
function traverseCNode(node, selectorPaths, styles, instance, params) {
  const $ = node.$;
  let blockSelector = "";
  if (!$ || typeof $ === "string") {
    if (isMediaOrSupports($)) {
      blockSelector = $;
    } else {
      selectorPaths.push($);
    }
  } else if (typeof $ === "function") {
    const selector2 = $({
      context: instance.context,
      props: params
    });
    if (isMediaOrSupports(selector2)) {
      blockSelector = selector2;
    } else {
      selectorPaths.push(selector2);
    }
  } else {
    if ($.before)
      $.before(instance.context);
    if (!$.$ || typeof $.$ === "string") {
      if (isMediaOrSupports($.$)) {
        blockSelector = $.$;
      } else {
        selectorPaths.push($.$);
      }
    } else if ($.$) {
      const selector2 = $.$({
        context: instance.context,
        props: params
      });
      if (isMediaOrSupports(selector2)) {
        blockSelector = selector2;
      } else {
        selectorPaths.push(selector2);
      }
    }
  }
  const selector = parseSelectorPath(selectorPaths);
  const style2 = createStyle(selector, node.props, instance, params);
  if (blockSelector) {
    styles.push(`${blockSelector} {`);
  } else if (style2.length) {
    styles.push(style2);
  }
  if (node.children) {
    loopCNodeListWithCallback(node.children, {
      context: instance.context,
      props: params
    }, (childNode) => {
      if (typeof childNode === "string") {
        const style3 = createStyle(selector, { raw: childNode }, instance, params);
        styles.push(style3);
      } else {
        traverseCNode(childNode, selectorPaths, styles, instance, params);
      }
    });
  }
  selectorPaths.pop();
  if (blockSelector) {
    styles.push("}");
  }
  if ($ && $.after)
    $.after(instance.context);
}
function render$1(node, instance, props) {
  const styles = [];
  traverseCNode(node, [], styles, instance, props);
  return styles.join("\n\n");
}
function murmur2(str) {
  var h2 = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h2 = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i) & 255;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = /* Math.imul(h, m): */
  (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
if (typeof window !== "undefined") {
  window.__cssrContext = {};
}
function unmount(instance, node, id, parent) {
  const { els } = node;
  if (id === void 0) {
    els.forEach(removeElement);
    node.els = [];
  } else {
    const target = queryElement(id, parent);
    if (target && els.includes(target)) {
      removeElement(target);
      node.els = els.filter((el) => el !== target);
    }
  }
}
function addElementToList(els, target) {
  els.push(target);
}
function mount(instance, node, id, props, head, force, anchorMetaName, parent, ssrAdapter2) {
  let style2;
  if (id === void 0) {
    style2 = node.render(props);
    id = murmur2(style2);
  }
  if (ssrAdapter2) {
    ssrAdapter2.adapter(id, style2 !== null && style2 !== void 0 ? style2 : node.render(props));
    return;
  }
  if (parent === void 0) {
    parent = document.head;
  }
  const queriedTarget = queryElement(id, parent);
  if (queriedTarget !== null && !force) {
    return queriedTarget;
  }
  const target = queriedTarget !== null && queriedTarget !== void 0 ? queriedTarget : createElement(id);
  if (style2 === void 0)
    style2 = node.render(props);
  target.textContent = style2;
  if (queriedTarget !== null)
    return queriedTarget;
  if (anchorMetaName) {
    const anchorMetaEl = parent.querySelector(`meta[name="${anchorMetaName}"]`);
    if (anchorMetaEl) {
      parent.insertBefore(target, anchorMetaEl);
      addElementToList(node.els, target);
      return target;
    }
  }
  if (head) {
    parent.insertBefore(target, parent.querySelector("style, link"));
  } else {
    parent.appendChild(target);
  }
  addElementToList(node.els, target);
  return target;
}
function wrappedRender(props) {
  return render$1(this, this.instance, props);
}
function wrappedMount(options = {}) {
  const { id, ssr, props, head = false, force = false, anchorMetaName, parent } = options;
  const targetElement = mount(this.instance, this, id, props, head, force, anchorMetaName, parent, ssr);
  return targetElement;
}
function wrappedUnmount(options = {}) {
  const { id, parent } = options;
  unmount(this.instance, this, id, parent);
}
const createCNode = function(instance, $, props, children) {
  return {
    instance,
    $,
    props,
    children,
    els: [],
    render: wrappedRender,
    mount: wrappedMount,
    unmount: wrappedUnmount
  };
};
const c$1 = function(instance, $, props, children) {
  if (Array.isArray($)) {
    return createCNode(instance, { $: null }, null, $);
  } else if (Array.isArray(props)) {
    return createCNode(instance, $, null, props);
  } else if (Array.isArray(children)) {
    return createCNode(instance, $, props, children);
  } else {
    return createCNode(instance, $, props, null);
  }
};
function CssRender(config = {}) {
  const cssr2 = {
    c: (...args) => c$1(cssr2, ...args),
    use: (plugin2, ...args) => plugin2.install(cssr2, ...args),
    find: queryElement,
    context: {},
    config
  };
  return cssr2;
}
function exists(id, ssr) {
  if (id === void 0)
    return false;
  if (ssr) {
    const { context: { ids } } = ssr;
    return ids.has(id);
  }
  return queryElement(id) !== null;
}
const namespace = "n";
const prefix$1 = `.${namespace}-`;
const elementPrefix = "__";
const modifierPrefix = "--";
const cssr = CssRender();
const plugin = plugin$1({
  blockPrefix: prefix$1,
  elementPrefix,
  modifierPrefix
});
cssr.use(plugin);
const {
  c,
  find
} = cssr;
const {
  cB,
  cE,
  cM,
  cNotM
} = plugin;
function insideModal(style2) {
  return c(({
    props: {
      bPrefix
    }
  }) => `${bPrefix || prefix$1}modal, ${bPrefix || prefix$1}drawer`, [style2]);
}
function insidePopover(style2) {
  return c(({
    props: {
      bPrefix
    }
  }) => `${bPrefix || prefix$1}popover`, [style2]);
}
function asModal(style2) {
  return c(({
    props: {
      bPrefix
    }
  }) => `&${bPrefix || prefix$1}modal`, style2);
}
const cCB = (...args) => {
  return c(">", [cB(...args)]);
};
function createKey(prefix2, suffix2) {
  return prefix2 + (suffix2 === "default" ? "" : suffix2.replace(/^[a-z]/, (startChar) => startChar.toUpperCase()));
}
function getPreciseEventTarget(event) {
  return event.composedPath()[0] || null;
}
function depx(value) {
  if (typeof value === "string") {
    if (value.endsWith("px")) {
      return Number(value.slice(0, value.length - 2));
    }
    return Number(value);
  }
  return value;
}
function pxfy(value) {
  if (value === void 0 || value === null)
    return void 0;
  if (typeof value === "number")
    return `${value}px`;
  if (value.endsWith("px"))
    return value;
  return `${value}px`;
}
function getMargin(value, position) {
  const parts = value.trim().split(/\s+/g);
  const margin = {
    top: parts[0]
  };
  switch (parts.length) {
    case 1:
      margin.right = parts[0];
      margin.bottom = parts[0];
      margin.left = parts[0];
      break;
    case 2:
      margin.right = parts[1];
      margin.left = parts[1];
      margin.bottom = parts[0];
      break;
    case 3:
      margin.right = parts[1];
      margin.bottom = parts[2];
      margin.left = parts[1];
      break;
    case 4:
      margin.right = parts[1];
      margin.bottom = parts[2];
      margin.left = parts[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + value + " is not a valid value.");
  }
  if (position === void 0)
    return margin;
  return margin[position];
}
function getGap(value, orient) {
  const [rowGap, colGap] = value.split(" ");
  return {
    row: rowGap,
    col: colGap || rowGap
  };
}
const colors = {
  black: "#000",
  silver: "#C0C0C0",
  gray: "#808080",
  white: "#FFF",
  maroon: "#800000",
  red: "#F00",
  purple: "#800080",
  fuchsia: "#F0F",
  green: "#008000",
  lime: "#0F0",
  olive: "#808000",
  yellow: "#FF0",
  navy: "#000080",
  blue: "#00F",
  teal: "#008080",
  aqua: "#0FF",
  transparent: "#0000"
};
const prefix = "^\\s*";
const suffix = "\\s*$";
const percent = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*";
const float = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*";
const hex = "([0-9A-Fa-f])";
const dhex = "([0-9A-Fa-f]{2})";
const hslRegex = new RegExp(`${prefix}hsl\\s*\\(${float},${percent},${percent}\\)${suffix}`);
const hsvRegex = new RegExp(`${prefix}hsv\\s*\\(${float},${percent},${percent}\\)${suffix}`);
const hslaRegex = new RegExp(`${prefix}hsla\\s*\\(${float},${percent},${percent},${float}\\)${suffix}`);
const hsvaRegex = new RegExp(`${prefix}hsva\\s*\\(${float},${percent},${percent},${float}\\)${suffix}`);
const rgbRegex = new RegExp(`${prefix}rgb\\s*\\(${float},${float},${float}\\)${suffix}`);
const rgbaRegex = new RegExp(`${prefix}rgba\\s*\\(${float},${float},${float},${float}\\)${suffix}`);
const sHexRegex = new RegExp(`${prefix}#${hex}${hex}${hex}${suffix}`);
const hexRegex = new RegExp(`${prefix}#${dhex}${dhex}${dhex}${suffix}`);
const sHexaRegex = new RegExp(`${prefix}#${hex}${hex}${hex}${hex}${suffix}`);
const hexaRegex = new RegExp(`${prefix}#${dhex}${dhex}${dhex}${dhex}${suffix}`);
function parseHex(value) {
  return parseInt(value, 16);
}
function hsla(color) {
  try {
    let i;
    if (i = hslaRegex.exec(color)) {
      return [
        roundDeg(i[1]),
        roundPercent(i[5]),
        roundPercent(i[9]),
        roundAlpha(i[13])
      ];
    } else if (i = hslRegex.exec(color)) {
      return [roundDeg(i[1]), roundPercent(i[5]), roundPercent(i[9]), 1];
    }
    throw new Error(`[seemly/hsla]: Invalid color value ${color}.`);
  } catch (e) {
    throw e;
  }
}
function hsva(color) {
  try {
    let i;
    if (i = hsvaRegex.exec(color)) {
      return [
        roundDeg(i[1]),
        roundPercent(i[5]),
        roundPercent(i[9]),
        roundAlpha(i[13])
      ];
    } else if (i = hsvRegex.exec(color)) {
      return [roundDeg(i[1]), roundPercent(i[5]), roundPercent(i[9]), 1];
    }
    throw new Error(`[seemly/hsva]: Invalid color value ${color}.`);
  } catch (e) {
    throw e;
  }
}
function rgba(color) {
  try {
    let i;
    if (i = hexRegex.exec(color)) {
      return [parseHex(i[1]), parseHex(i[2]), parseHex(i[3]), 1];
    } else if (i = rgbRegex.exec(color)) {
      return [roundChannel(i[1]), roundChannel(i[5]), roundChannel(i[9]), 1];
    } else if (i = rgbaRegex.exec(color)) {
      return [
        roundChannel(i[1]),
        roundChannel(i[5]),
        roundChannel(i[9]),
        roundAlpha(i[13])
      ];
    } else if (i = sHexRegex.exec(color)) {
      return [
        parseHex(i[1] + i[1]),
        parseHex(i[2] + i[2]),
        parseHex(i[3] + i[3]),
        1
      ];
    } else if (i = hexaRegex.exec(color)) {
      return [
        parseHex(i[1]),
        parseHex(i[2]),
        parseHex(i[3]),
        roundAlpha(parseHex(i[4]) / 255)
      ];
    } else if (i = sHexaRegex.exec(color)) {
      return [
        parseHex(i[1] + i[1]),
        parseHex(i[2] + i[2]),
        parseHex(i[3] + i[3]),
        roundAlpha(parseHex(i[4] + i[4]) / 255)
      ];
    } else if (color in colors) {
      return rgba(colors[color]);
    }
    throw new Error(`[seemly/rgba]: Invalid color value ${color}.`);
  } catch (e) {
    throw e;
  }
}
function normalizeAlpha(alphaValue) {
  return alphaValue > 1 ? 1 : alphaValue < 0 ? 0 : alphaValue;
}
function stringifyRgb(r, g, b) {
  return `rgb(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)})`;
}
function stringifyRgba(r, g, b, a) {
  return `rgba(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)}, ${normalizeAlpha(a)})`;
}
function compositeChannel(v1, a1, v2, a2, a) {
  return roundChannel((v1 * a1 * (1 - a2) + v2 * a2) / a);
}
function composite(background, overlay2) {
  if (!Array.isArray(background))
    background = rgba(background);
  if (!Array.isArray(overlay2))
    overlay2 = rgba(overlay2);
  const a1 = background[3];
  const a2 = overlay2[3];
  const alpha = roundAlpha(a1 + a2 - a1 * a2);
  return stringifyRgba(compositeChannel(background[0], a1, overlay2[0], a2, alpha), compositeChannel(background[1], a1, overlay2[1], a2, alpha), compositeChannel(background[2], a1, overlay2[2], a2, alpha), alpha);
}
function changeColor(base2, options) {
  const [r, g, b, a = 1] = Array.isArray(base2) ? base2 : rgba(base2);
  if (options.alpha) {
    return stringifyRgba(r, g, b, options.alpha);
  }
  return stringifyRgba(r, g, b, a);
}
function scaleColor(base2, options) {
  const [r, g, b, a = 1] = Array.isArray(base2) ? base2 : rgba(base2);
  const { lightness = 1, alpha = 1 } = options;
  return toRgbaString([r * lightness, g * lightness, b * lightness, a * alpha]);
}
function roundAlpha(value) {
  const v = Math.round(Number(value) * 100) / 100;
  if (v > 1)
    return 1;
  if (v < 0)
    return 0;
  return v;
}
function roundDeg(value) {
  const v = Math.round(Number(value));
  if (v >= 360)
    return 0;
  if (v < 0)
    return 0;
  return v;
}
function roundChannel(value) {
  const v = Math.round(Number(value));
  if (v > 255)
    return 255;
  if (v < 0)
    return 0;
  return v;
}
function roundPercent(value) {
  const v = Math.round(Number(value));
  if (v > 100)
    return 100;
  if (v < 0)
    return 0;
  return v;
}
function toRgbString(base2) {
  const [r, g, b] = Array.isArray(base2) ? base2 : rgba(base2);
  return stringifyRgb(r, g, b);
}
function toRgbaString(base2) {
  const [r, g, b] = base2;
  if (3 in base2) {
    return `rgba(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)}, ${roundAlpha(base2[3])})`;
  }
  return `rgba(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)}, 1)`;
}
function toHsvString(base2) {
  return `hsv(${roundDeg(base2[0])}, ${roundPercent(base2[1])}%, ${roundPercent(base2[2])}%)`;
}
function toHsvaString(base2) {
  const [h2, s, v] = base2;
  if (3 in base2) {
    return `hsva(${roundDeg(h2)}, ${roundPercent(s)}%, ${roundPercent(v)}%, ${roundAlpha(base2[3])})`;
  }
  return `hsva(${roundDeg(h2)}, ${roundPercent(s)}%, ${roundPercent(v)}%, 1)`;
}
function toHslString(base2) {
  return `hsl(${roundDeg(base2[0])}, ${roundPercent(base2[1])}%, ${roundPercent(base2[2])}%)`;
}
function toHslaString(base2) {
  const [h2, s, l] = base2;
  if (3 in base2) {
    return `hsla(${roundDeg(h2)}, ${roundPercent(s)}%, ${roundPercent(l)}%, ${roundAlpha(base2[3])})`;
  }
  return `hsla(${roundDeg(h2)}, ${roundPercent(s)}%, ${roundPercent(l)}%, 1)`;
}
function toHexaString(base2) {
  if (typeof base2 === "string") {
    let i;
    if (i = hexRegex.exec(base2)) {
      return `${i[0]}FF`;
    } else if (i = hexaRegex.exec(base2)) {
      return i[0];
    } else if (i = sHexRegex.exec(base2)) {
      return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}FF`;
    } else if (i = sHexaRegex.exec(base2)) {
      return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}${i[4]}${i[4]}`;
    }
    throw new Error(`[seemly/toHexString]: Invalid hex value ${base2}.`);
  }
  const hex2 = `#${base2.slice(0, 3).map((unit) => roundChannel(unit).toString(16).toUpperCase().padStart(2, "0")).join("")}`;
  const a = base2.length === 3 ? "FF" : roundChannel(base2[3] * 255).toString(16).padStart(2, "0").toUpperCase();
  return hex2 + a;
}
function toHexString(base2) {
  if (typeof base2 === "string") {
    let i;
    if (i = hexRegex.exec(base2)) {
      return i[0];
    } else if (i = hexaRegex.exec(base2)) {
      return i[0].slice(0, 7);
    } else if (i = sHexRegex.exec(base2) || sHexaRegex.exec(base2)) {
      return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`;
    }
    throw new Error(`[seemly/toHexString]: Invalid hex value ${base2}.`);
  }
  return `#${base2.slice(0, 3).map((unit) => roundChannel(unit).toString(16).toUpperCase().padStart(2, "0")).join("")}`;
}
function createId(length = 8) {
  return Math.random().toString(16).slice(2, 2 + length);
}
function getEventTarget(e) {
  const path2 = e.composedPath();
  return path2[0];
}
const traps = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function createTrapHandler(name, el, originalHandler) {
  if (name === "mousemoveoutside") {
    const moveHandler = (e) => {
      if (el.contains(getEventTarget(e)))
        return;
      originalHandler(e);
    };
    return {
      mousemove: moveHandler,
      touchstart: moveHandler
    };
  } else if (name === "clickoutside") {
    let mouseDownOutside = false;
    const downHandler = (e) => {
      mouseDownOutside = !el.contains(getEventTarget(e));
    };
    const upHanlder = (e) => {
      if (!mouseDownOutside)
        return;
      if (el.contains(getEventTarget(e)))
        return;
      originalHandler(e);
    };
    return {
      mousedown: downHandler,
      mouseup: upHanlder,
      touchstart: downHandler,
      touchend: upHanlder
    };
  }
  console.error(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `[evtd/create-trap-handler]: name \`${name}\` is invalid. This could be a bug of evtd.`
  );
  return {};
}
function ensureTrapHandlers(name, el, handler) {
  const handlers = traps[name];
  let elHandlers = handlers.get(el);
  if (elHandlers === void 0) {
    handlers.set(el, elHandlers = /* @__PURE__ */ new WeakMap());
  }
  let trapHandler = elHandlers.get(handler);
  if (trapHandler === void 0) {
    elHandlers.set(handler, trapHandler = createTrapHandler(name, el, handler));
  }
  return trapHandler;
}
function trapOn(name, el, handler, options) {
  if (name === "mousemoveoutside" || name === "clickoutside") {
    const trapHandlers = ensureTrapHandlers(name, el, handler);
    Object.keys(trapHandlers).forEach((key) => {
      on(key, document, trapHandlers[key], options);
    });
    return true;
  }
  return false;
}
function trapOff(name, el, handler, options) {
  if (name === "mousemoveoutside" || name === "clickoutside") {
    const trapHandlers = ensureTrapHandlers(name, el, handler);
    Object.keys(trapHandlers).forEach((key) => {
      off(key, document, trapHandlers[key], options);
    });
    return true;
  }
  return false;
}
function createDelegate() {
  if (typeof window === "undefined") {
    return {
      on: () => {
      },
      off: () => {
      }
    };
  }
  const propagationStopped = /* @__PURE__ */ new WeakMap();
  const immediatePropagationStopped = /* @__PURE__ */ new WeakMap();
  function trackPropagation() {
    propagationStopped.set(this, true);
  }
  function trackImmediate() {
    propagationStopped.set(this, true);
    immediatePropagationStopped.set(this, true);
  }
  function spy(event, propName, fn) {
    const source = event[propName];
    event[propName] = function() {
      fn.apply(event, arguments);
      return source.apply(event, arguments);
    };
    return event;
  }
  function unspy(event, propName) {
    event[propName] = Event.prototype[propName];
  }
  const currentTargets = /* @__PURE__ */ new WeakMap();
  const currentTargetDescriptor = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function getCurrentTarget() {
    var _a;
    return (_a = currentTargets.get(this)) !== null && _a !== void 0 ? _a : null;
  }
  function defineCurrentTarget(event, getter) {
    if (currentTargetDescriptor === void 0)
      return;
    Object.defineProperty(event, "currentTarget", {
      configurable: true,
      enumerable: true,
      get: getter !== null && getter !== void 0 ? getter : currentTargetDescriptor.get
    });
  }
  const phaseToTypeToElToHandlers = {
    bubble: {},
    capture: {}
  };
  const typeToWindowEventHandlers = {};
  function createUnifiedHandler() {
    const delegeteHandler = function(e) {
      const { type, eventPhase, bubbles } = e;
      const target = getEventTarget(e);
      if (eventPhase === 2)
        return;
      const phase = eventPhase === 1 ? "capture" : "bubble";
      let cursor = target;
      const path2 = [];
      while (true) {
        if (cursor === null)
          cursor = window;
        path2.push(cursor);
        if (cursor === window) {
          break;
        }
        cursor = cursor.parentNode || null;
      }
      const captureElToHandlers = phaseToTypeToElToHandlers.capture[type];
      const bubbleElToHandlers = phaseToTypeToElToHandlers.bubble[type];
      spy(e, "stopPropagation", trackPropagation);
      spy(e, "stopImmediatePropagation", trackImmediate);
      defineCurrentTarget(e, getCurrentTarget);
      if (phase === "capture") {
        if (captureElToHandlers === void 0)
          return;
        for (let i = path2.length - 1; i >= 0; --i) {
          if (propagationStopped.has(e))
            break;
          const target2 = path2[i];
          const handlers = captureElToHandlers.get(target2);
          if (handlers !== void 0) {
            currentTargets.set(e, target2);
            for (const handler of handlers) {
              if (immediatePropagationStopped.has(e))
                break;
              handler(e);
            }
          }
          if (i === 0 && !bubbles && bubbleElToHandlers !== void 0) {
            const bubbleHandlers = bubbleElToHandlers.get(target2);
            if (bubbleHandlers !== void 0) {
              for (const handler of bubbleHandlers) {
                if (immediatePropagationStopped.has(e))
                  break;
                handler(e);
              }
            }
          }
        }
      } else if (phase === "bubble") {
        if (bubbleElToHandlers === void 0)
          return;
        for (let i = 0; i < path2.length; ++i) {
          if (propagationStopped.has(e))
            break;
          const target2 = path2[i];
          const handlers = bubbleElToHandlers.get(target2);
          if (handlers !== void 0) {
            currentTargets.set(e, target2);
            for (const handler of handlers) {
              if (immediatePropagationStopped.has(e))
                break;
              handler(e);
            }
          }
        }
      }
      unspy(e, "stopPropagation");
      unspy(e, "stopImmediatePropagation");
      defineCurrentTarget(e);
    };
    delegeteHandler.displayName = "evtdUnifiedHandler";
    return delegeteHandler;
  }
  function createUnifiedWindowEventHandler() {
    const delegateHandler = function(e) {
      const { type, eventPhase } = e;
      if (eventPhase !== 2)
        return;
      const handlers = typeToWindowEventHandlers[type];
      if (handlers === void 0)
        return;
      handlers.forEach((handler) => handler(e));
    };
    delegateHandler.displayName = "evtdUnifiedWindowEventHandler";
    return delegateHandler;
  }
  const unifiedHandler = createUnifiedHandler();
  const unfiendWindowEventHandler = createUnifiedWindowEventHandler();
  function ensureElToHandlers(phase, type) {
    const phaseHandlers = phaseToTypeToElToHandlers[phase];
    if (phaseHandlers[type] === void 0) {
      phaseHandlers[type] = /* @__PURE__ */ new Map();
      window.addEventListener(type, unifiedHandler, phase === "capture");
    }
    return phaseHandlers[type];
  }
  function ensureWindowEventHandlers(type) {
    const windowEventHandlers = typeToWindowEventHandlers[type];
    if (windowEventHandlers === void 0) {
      typeToWindowEventHandlers[type] = /* @__PURE__ */ new Set();
      window.addEventListener(type, unfiendWindowEventHandler);
    }
    return typeToWindowEventHandlers[type];
  }
  function ensureHandlers(elToHandlers, el) {
    let elHandlers = elToHandlers.get(el);
    if (elHandlers === void 0) {
      elToHandlers.set(el, elHandlers = /* @__PURE__ */ new Set());
    }
    return elHandlers;
  }
  function handlerExist(el, phase, type, handler) {
    const elToHandlers = phaseToTypeToElToHandlers[phase][type];
    if (elToHandlers !== void 0) {
      const handlers = elToHandlers.get(el);
      if (handlers !== void 0) {
        if (handlers.has(handler))
          return true;
      }
    }
    return false;
  }
  function windowEventHandlerExist(type, handler) {
    const handlers = typeToWindowEventHandlers[type];
    if (handlers !== void 0) {
      if (handlers.has(handler)) {
        return true;
      }
    }
    return false;
  }
  function on2(type, el, handler, options) {
    let mergedHandler;
    if (typeof options === "object" && options.once === true) {
      mergedHandler = (e) => {
        off2(type, el, mergedHandler, options);
        handler(e);
      };
    } else {
      mergedHandler = handler;
    }
    const trapped = trapOn(type, el, mergedHandler, options);
    if (trapped)
      return;
    const phase = options === true || typeof options === "object" && options.capture === true ? "capture" : "bubble";
    const elToHandlers = ensureElToHandlers(phase, type);
    const handlers = ensureHandlers(elToHandlers, el);
    if (!handlers.has(mergedHandler))
      handlers.add(mergedHandler);
    if (el === window) {
      const windowEventHandlers = ensureWindowEventHandlers(type);
      if (!windowEventHandlers.has(mergedHandler)) {
        windowEventHandlers.add(mergedHandler);
      }
    }
  }
  function off2(type, el, handler, options) {
    const trapped = trapOff(type, el, handler, options);
    if (trapped)
      return;
    const capture = options === true || typeof options === "object" && options.capture === true;
    const phase = capture ? "capture" : "bubble";
    const elToHandlers = ensureElToHandlers(phase, type);
    const handlers = ensureHandlers(elToHandlers, el);
    if (el === window) {
      const mirrorPhase = capture ? "bubble" : "capture";
      if (!handlerExist(el, mirrorPhase, type, handler) && windowEventHandlerExist(type, handler)) {
        const windowEventHandlers = typeToWindowEventHandlers[type];
        windowEventHandlers.delete(handler);
        if (windowEventHandlers.size === 0) {
          window.removeEventListener(type, unfiendWindowEventHandler);
          typeToWindowEventHandlers[type] = void 0;
        }
      }
    }
    if (handlers.has(handler))
      handlers.delete(handler);
    if (handlers.size === 0) {
      elToHandlers.delete(el);
    }
    if (elToHandlers.size === 0) {
      window.removeEventListener(type, unifiedHandler, phase === "capture");
      phaseToTypeToElToHandlers[phase][type] = void 0;
    }
  }
  return {
    on: on2,
    off: off2
  };
}
const { on, off } = createDelegate();
function useFalseUntilTruthy(originalRef) {
  const currentRef = ref(!!originalRef.value);
  if (currentRef.value)
    return readonly(currentRef);
  const stop2 = watch(originalRef, (value) => {
    if (value) {
      currentRef.value = true;
      stop2();
    }
  });
  return readonly(currentRef);
}
function useMemo(getterOrOptions) {
  const computedValueRef = computed(getterOrOptions);
  const valueRef = ref(computedValueRef.value);
  watch(computedValueRef, (value) => {
    valueRef.value = value;
  });
  if (typeof getterOrOptions === "function") {
    return valueRef;
  } else {
    return {
      __v_isRef: true,
      get value() {
        return valueRef.value;
      },
      set value(v) {
        getterOrOptions.set(v);
      }
    };
  }
}
function hasInstance() {
  return getCurrentInstance() !== null;
}
const isBrowser$3 = typeof window !== "undefined";
const mousePositionRef = ref(null);
function clickHandler(e) {
  if (e.clientX > 0 || e.clientY > 0) {
    mousePositionRef.value = {
      x: e.clientX,
      y: e.clientY
    };
  } else {
    const { target } = e;
    if (target instanceof Element) {
      const { left, top, width, height } = target.getBoundingClientRect();
      if (left > 0 || top > 0) {
        mousePositionRef.value = {
          x: left + width / 2,
          y: top + height / 2
        };
      } else {
        mousePositionRef.value = { x: 0, y: 0 };
      }
    } else {
      mousePositionRef.value = null;
    }
  }
}
let usedCount$2 = 0;
let managable$2 = true;
function useClickPosition() {
  if (!isBrowser$3)
    return readonly(ref(null));
  if (usedCount$2 === 0)
    on("click", document, clickHandler, true);
  const setup = () => {
    usedCount$2 += 1;
  };
  if (managable$2 && (managable$2 = hasInstance())) {
    onBeforeMount(setup);
    onBeforeUnmount(() => {
      usedCount$2 -= 1;
      if (usedCount$2 === 0)
        off("click", document, clickHandler, true);
    });
  } else {
    setup();
  }
  return readonly(mousePositionRef);
}
const clickedTimeRef = ref(void 0);
let usedCount$1 = 0;
function handleClick() {
  clickedTimeRef.value = Date.now();
}
let managable$1 = true;
function useClicked(timeout) {
  if (!isBrowser$3)
    return readonly(ref(false));
  const clickedRef = ref(false);
  let timerId = null;
  function clearTimer() {
    if (timerId !== null)
      window.clearTimeout(timerId);
  }
  function clickedHandler() {
    clearTimer();
    clickedRef.value = true;
    timerId = window.setTimeout(() => {
      clickedRef.value = false;
    }, timeout);
  }
  if (usedCount$1 === 0) {
    on("click", window, handleClick, true);
  }
  const setup = () => {
    usedCount$1 += 1;
    on("click", window, clickedHandler, true);
  };
  if (managable$1 && (managable$1 = hasInstance())) {
    onBeforeMount(setup);
    onBeforeUnmount(() => {
      usedCount$1 -= 1;
      if (usedCount$1 === 0) {
        off("click", window, handleClick, true);
      }
      off("click", window, clickedHandler, true);
      clearTimer();
    });
  } else {
    setup();
  }
  return readonly(clickedRef);
}
let usedCount = 0;
const supportMatchMedia = typeof window !== "undefined" && window.matchMedia !== void 0;
const osTheme = ref(null);
let darkMql;
let lightMql;
function handleDarkMqlChange(e) {
  if (e.matches) {
    osTheme.value = "dark";
  }
}
function handleLightMqlChange(e) {
  if (e.matches) {
    osTheme.value = "light";
  }
}
function init$2() {
  darkMql = window.matchMedia("(prefers-color-scheme: dark)");
  lightMql = window.matchMedia("(prefers-color-scheme: light)");
  if (darkMql.matches) {
    osTheme.value = "dark";
  } else if (lightMql.matches) {
    osTheme.value = "light";
  } else {
    osTheme.value = null;
  }
  if (darkMql.addEventListener) {
    darkMql.addEventListener("change", handleDarkMqlChange);
    lightMql.addEventListener("change", handleLightMqlChange);
  } else if (darkMql.addListener) {
    darkMql.addListener(handleDarkMqlChange);
    lightMql.addListener(handleLightMqlChange);
  }
}
function clean() {
  if ("removeEventListener" in darkMql) {
    darkMql.removeEventListener("change", handleDarkMqlChange);
    lightMql.removeEventListener("change", handleLightMqlChange);
  } else if ("removeListener" in darkMql) {
    darkMql.removeListener(handleDarkMqlChange);
    lightMql.removeListener(handleLightMqlChange);
  }
  darkMql = void 0;
  lightMql = void 0;
}
let managable = true;
function useOsTheme() {
  if (!supportMatchMedia) {
    return readonly(osTheme);
  }
  if (usedCount === 0)
    init$2();
  if (managable && (managable = hasInstance())) {
    onBeforeMount(() => {
      usedCount += 1;
    });
    onBeforeUnmount(() => {
      usedCount -= 1;
      if (usedCount === 0)
        clean();
    });
  }
  return readonly(osTheme);
}
function isMounted() {
  const isMounted2 = ref(false);
  onMounted(() => {
    isMounted2.value = true;
  });
  return readonly(isMounted2);
}
const isIos = (typeof window === "undefined" ? false : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function useIsIos() {
  return isIos;
}
function createInjectionKey(key) {
  return key;
}
const drawerBodyInjectionKey = createInjectionKey("n-drawer-body");
const modalBodyInjectionKey = createInjectionKey("n-modal-body");
const modalProviderInjectionKey = createInjectionKey("n-modal-provider");
const modalInjectionKey = createInjectionKey("n-modal");
const popoverBodyInjectionKey = createInjectionKey("n-popover-body");
const isBrowser$2 = typeof document !== "undefined" && typeof window !== "undefined";
const isComposingRef = ref(false);
function compositionStartHandler() {
  isComposingRef.value = true;
}
function compositionEndHandler() {
  isComposingRef.value = false;
}
let mountedCount = 0;
function useIsComposing() {
  if (isBrowser$2) {
    onBeforeMount(() => {
      if (!mountedCount) {
        window.addEventListener("compositionstart", compositionStartHandler);
        window.addEventListener("compositionend", compositionEndHandler);
      }
      mountedCount++;
    });
    onBeforeUnmount(() => {
      if (mountedCount <= 1) {
        window.removeEventListener("compositionstart", compositionStartHandler);
        window.removeEventListener("compositionend", compositionEndHandler);
        mountedCount = 0;
      } else {
        mountedCount--;
      }
    });
  }
  return isComposingRef;
}
let lockCount = 0;
let originalMarginRight = "";
let originalOverflow = "";
let originalOverflowX = "";
let originalOverflowY = "";
const lockHtmlScrollRightCompensationRef = ref("0px");
function useLockHtmlScroll(lockRef) {
  if (typeof document === "undefined") return;
  const el = document.documentElement;
  let watchStopHandle;
  let activated = false;
  const unlock = () => {
    el.style.marginRight = originalMarginRight;
    el.style.overflow = originalOverflow;
    el.style.overflowX = originalOverflowX;
    el.style.overflowY = originalOverflowY;
    lockHtmlScrollRightCompensationRef.value = "0px";
  };
  onMounted(() => {
    watchStopHandle = watch(lockRef, (value) => {
      if (value) {
        if (!lockCount) {
          const scrollbarWidth = window.innerWidth - el.offsetWidth;
          if (scrollbarWidth > 0) {
            originalMarginRight = el.style.marginRight;
            el.style.marginRight = `${scrollbarWidth}px`;
            lockHtmlScrollRightCompensationRef.value = `${scrollbarWidth}px`;
          }
          originalOverflow = el.style.overflow;
          originalOverflowX = el.style.overflowX;
          originalOverflowY = el.style.overflowY;
          el.style.overflow = "hidden";
          el.style.overflowX = "hidden";
          el.style.overflowY = "hidden";
        }
        activated = true;
        lockCount++;
      } else {
        lockCount--;
        if (!lockCount) {
          unlock();
        }
        activated = false;
      }
    }, {
      immediate: true
    });
  });
  onBeforeUnmount(() => {
    watchStopHandle === null || watchStopHandle === void 0 ? void 0 : watchStopHandle();
    if (activated) {
      lockCount--;
      if (!lockCount) {
        unlock();
      }
      activated = false;
    }
  });
}
function useReactivated(callback) {
  const isDeactivatedRef = {
    isDeactivated: false
  };
  let activateStateInitialized = false;
  onActivated(() => {
    isDeactivatedRef.isDeactivated = false;
    if (!activateStateInitialized) {
      activateStateInitialized = true;
      return;
    }
    callback();
  });
  onDeactivated(() => {
    isDeactivatedRef.isDeactivated = true;
    if (!activateStateInitialized) {
      activateStateInitialized = true;
    }
  });
  return isDeactivatedRef;
}
function getSlot(scope, slots, slotName = "default") {
  const slot = slots[slotName];
  if (slot === void 0) {
    throw new Error(`[vueuc/${scope}]: slot[${slotName}] is empty.`);
  }
  return slot();
}
function flatten$1(vNodes, filterCommentNode = true, result = []) {
  vNodes.forEach((vNode) => {
    if (vNode === null)
      return;
    if (typeof vNode !== "object") {
      if (typeof vNode === "string" || typeof vNode === "number") {
        result.push(createTextVNode(String(vNode)));
      }
      return;
    }
    if (Array.isArray(vNode)) {
      flatten$1(vNode, filterCommentNode, result);
      return;
    }
    if (vNode.type === Fragment) {
      if (vNode.children === null)
        return;
      if (Array.isArray(vNode.children)) {
        flatten$1(vNode.children, filterCommentNode, result);
      }
    } else if (vNode.type !== Comment) {
      result.push(vNode);
    }
  });
  return result;
}
function getFirstVNode(scope, slots, slotName = "default") {
  const slot = slots[slotName];
  if (slot === void 0) {
    throw new Error(`[vueuc/${scope}]: slot[${slotName}] is empty.`);
  }
  const content = flatten$1(slot());
  if (content.length === 1) {
    return content[0];
  } else {
    throw new Error(`[vueuc/${scope}]: slot[${slotName}] should have exactly one child.`);
  }
}
const ctxKey = "@@coContext";
const clickoutside = {
  mounted(el, { value, modifiers }) {
    el[ctxKey] = {
      handler: void 0
    };
    if (typeof value === "function") {
      el[ctxKey].handler = value;
      on("clickoutside", el, value, {
        capture: modifiers.capture
      });
    }
  },
  updated(el, { value, modifiers }) {
    const ctx2 = el[ctxKey];
    if (typeof value === "function") {
      if (ctx2.handler) {
        if (ctx2.handler !== value) {
          off("clickoutside", el, ctx2.handler, {
            capture: modifiers.capture
          });
          ctx2.handler = value;
          on("clickoutside", el, value, {
            capture: modifiers.capture
          });
        }
      } else {
        el[ctxKey].handler = value;
        on("clickoutside", el, value, {
          capture: modifiers.capture
        });
      }
    } else {
      if (ctx2.handler) {
        off("clickoutside", el, ctx2.handler, {
          capture: modifiers.capture
        });
        ctx2.handler = void 0;
      }
    }
  },
  unmounted(el, { modifiers }) {
    const { handler } = el[ctxKey];
    if (handler) {
      off("clickoutside", el, handler, {
        capture: modifiers.capture
      });
    }
    el[ctxKey].handler = void 0;
  }
};
function warn$2(location2, message) {
  console.error(`[vdirs/${location2}]: ${message}`);
}
class ZIndexManager {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map();
    this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(el, zIndex) {
    const { elementZIndex } = this;
    if (zIndex !== void 0) {
      el.style.zIndex = `${zIndex}`;
      elementZIndex.delete(el);
      return;
    }
    const { nextZIndex } = this;
    if (elementZIndex.has(el)) {
      const currentZIndex = elementZIndex.get(el);
      if (currentZIndex + 1 === this.nextZIndex)
        return;
    }
    el.style.zIndex = `${nextZIndex}`;
    elementZIndex.set(el, nextZIndex);
    this.nextZIndex = nextZIndex + 1;
    this.squashState();
  }
  unregister(el, zIndex) {
    const { elementZIndex } = this;
    if (elementZIndex.has(el)) {
      elementZIndex.delete(el);
    } else if (zIndex === void 0) {
      warn$2("z-index-manager/unregister-element", "Element not found when unregistering.");
    }
    this.squashState();
  }
  squashState() {
    const { elementCount } = this;
    if (!elementCount) {
      this.nextZIndex = 2e3;
    }
    if (this.nextZIndex - elementCount > 2500)
      this.rearrange();
  }
  rearrange() {
    const elementZIndexPair = Array.from(this.elementZIndex.entries());
    elementZIndexPair.sort((pair1, pair2) => {
      return pair1[1] - pair2[1];
    });
    this.nextZIndex = 2e3;
    elementZIndexPair.forEach((pair) => {
      const el = pair[0];
      const zIndex = this.nextZIndex++;
      if (`${zIndex}` !== el.style.zIndex)
        el.style.zIndex = `${zIndex}`;
    });
  }
}
const zIndexManager = new ZIndexManager();
const ctx = "@@ziContext";
const zindexable = {
  mounted(el, bindings) {
    const { value = {} } = bindings;
    const { zIndex, enabled } = value;
    el[ctx] = {
      enabled: !!enabled,
      initialized: false
    };
    if (enabled) {
      zIndexManager.ensureZIndex(el, zIndex);
      el[ctx].initialized = true;
    }
  },
  updated(el, bindings) {
    const { value = {} } = bindings;
    const { zIndex, enabled } = value;
    const cachedEnabled = el[ctx].enabled;
    if (enabled && !cachedEnabled) {
      zIndexManager.ensureZIndex(el, zIndex);
      el[ctx].initialized = true;
    }
    el[ctx].enabled = !!enabled;
  },
  unmounted(el, bindings) {
    if (!el[ctx].initialized)
      return;
    const { value = {} } = bindings;
    const { zIndex } = value;
    zIndexManager.unregister(el, zIndex);
  }
};
const ssrContextKey = "@css-render/vue3-ssr";
function createStyleString(id, style2) {
  return `<style cssr-id="${id}">
${style2}
</style>`;
}
function ssrAdapter(id, style2, ssrContext) {
  const { styles, ids } = ssrContext;
  if (ids.has(id))
    return;
  if (styles !== null) {
    ids.add(id);
    styles.push(createStyleString(id, style2));
  }
}
const isBrowser$1 = typeof document !== "undefined";
function useSsrAdapter() {
  if (isBrowser$1)
    return void 0;
  const context = inject(ssrContextKey, null);
  if (context === null)
    return void 0;
  return {
    adapter: (id, style2) => ssrAdapter(id, style2, context),
    context
  };
}
function warn$1(location2, message) {
  console.error(`[vueuc/${location2}]: ${message}`);
}
function resolveTo(selector) {
  if (typeof selector === "string") {
    return document.querySelector(selector);
  }
  return selector();
}
const LazyTeleport = /* @__PURE__ */ defineComponent({
  name: "LazyTeleport",
  props: {
    to: {
      type: [String, Object],
      default: void 0
    },
    disabled: Boolean,
    show: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    return {
      showTeleport: useFalseUntilTruthy(toRef(props, "show")),
      mergedTo: computed(() => {
        const { to } = props;
        return to !== null && to !== void 0 ? to : "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? getSlot("lazy-teleport", this.$slots) : h(Teleport, {
      disabled: this.disabled,
      to: this.mergedTo
    }, getSlot("lazy-teleport", this.$slots)) : null;
  }
});
var resizeObservers = [];
var hasActiveObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.activeTargets.length > 0;
  });
};
var hasSkippedObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.skippedTargets.length > 0;
  });
};
var msg = "ResizeObserver loop completed with undelivered notifications.";
var deliverResizeLoopError = function() {
  var event;
  if (typeof ErrorEvent === "function") {
    event = new ErrorEvent("error", {
      message: msg
    });
  } else {
    event = document.createEvent("Event");
    event.initEvent("error", false, false);
    event.message = msg;
  }
  window.dispatchEvent(event);
};
var ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions2) {
  ResizeObserverBoxOptions2["BORDER_BOX"] = "border-box";
  ResizeObserverBoxOptions2["CONTENT_BOX"] = "content-box";
  ResizeObserverBoxOptions2["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
var freeze = function(obj) {
  return Object.freeze(obj);
};
var ResizeObserverSize = /* @__PURE__ */ function() {
  function ResizeObserverSize2(inlineSize, blockSize) {
    this.inlineSize = inlineSize;
    this.blockSize = blockSize;
    freeze(this);
  }
  return ResizeObserverSize2;
}();
var DOMRectReadOnly = function() {
  function DOMRectReadOnly2(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = this.y;
    this.left = this.x;
    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
    return freeze(this);
  }
  DOMRectReadOnly2.prototype.toJSON = function() {
    var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
    return { x, y, top, right, bottom, left, width, height };
  };
  DOMRectReadOnly2.fromRect = function(rectangle) {
    return new DOMRectReadOnly2(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  };
  return DOMRectReadOnly2;
}();
var isSVG = function(target) {
  return target instanceof SVGElement && "getBBox" in target;
};
var isHidden = function(target) {
  if (isSVG(target)) {
    var _a = target.getBBox(), width = _a.width, height = _a.height;
    return !width && !height;
  }
  var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
  return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function(obj) {
  var _a;
  if (obj instanceof Element) {
    return true;
  }
  var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
  return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function(target) {
  switch (target.tagName) {
    case "INPUT":
      if (target.type !== "image") {
        break;
      }
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
};
var global$1 = typeof window !== "undefined" ? window : {};
var cache = /* @__PURE__ */ new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test(global$1.navigator && global$1.navigator.userAgent);
var parseDimension = function(pixel) {
  return parseFloat(pixel || "0");
};
var size = function(inlineSize, blockSize, switchSizes) {
  if (inlineSize === void 0) {
    inlineSize = 0;
  }
  if (blockSize === void 0) {
    blockSize = 0;
  }
  if (switchSizes === void 0) {
    switchSizes = false;
  }
  return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
  devicePixelContentBoxSize: size(),
  borderBoxSize: size(),
  contentBoxSize: size(),
  contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function(target, forceRecalculation) {
  if (forceRecalculation === void 0) {
    forceRecalculation = false;
  }
  if (cache.has(target) && !forceRecalculation) {
    return cache.get(target);
  }
  if (isHidden(target)) {
    cache.set(target, zeroBoxes);
    return zeroBoxes;
  }
  var cs = getComputedStyle(target);
  var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
  var removePadding = !IE && cs.boxSizing === "border-box";
  var switchSizes = verticalRegexp.test(cs.writingMode || "");
  var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
  var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
  var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
  var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
  var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
  var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
  var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
  var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
  var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
  var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
  var horizontalPadding = paddingLeft + paddingRight;
  var verticalPadding = paddingTop + paddingBottom;
  var horizontalBorderArea = borderLeft + borderRight;
  var verticalBorderArea = borderTop + borderBottom;
  var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
  var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
  var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
  var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
  var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
  var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
  var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
  var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
  var boxes = freeze({
    devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
    borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
    contentBoxSize: size(contentWidth, contentHeight, switchSizes),
    contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
  });
  cache.set(target, boxes);
  return boxes;
};
var calculateBoxSize = function(target, observedBox, forceRecalculation) {
  var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
  switch (observedBox) {
    case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
      return devicePixelContentBoxSize;
    case ResizeObserverBoxOptions.BORDER_BOX:
      return borderBoxSize;
    default:
      return contentBoxSize;
  }
};
var ResizeObserverEntry = /* @__PURE__ */ function() {
  function ResizeObserverEntry2(target) {
    var boxes = calculateBoxSizes(target);
    this.target = target;
    this.contentRect = boxes.contentRect;
    this.borderBoxSize = freeze([boxes.borderBoxSize]);
    this.contentBoxSize = freeze([boxes.contentBoxSize]);
    this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
  }
  return ResizeObserverEntry2;
}();
var calculateDepthForNode = function(node) {
  if (isHidden(node)) {
    return Infinity;
  }
  var depth = 0;
  var parent = node.parentNode;
  while (parent) {
    depth += 1;
    parent = parent.parentNode;
  }
  return depth;
};
var broadcastActiveObservations = function() {
  var shallowestDepth = Infinity;
  var callbacks2 = [];
  resizeObservers.forEach(function processObserver(ro) {
    if (ro.activeTargets.length === 0) {
      return;
    }
    var entries = [];
    ro.activeTargets.forEach(function processTarget(ot) {
      var entry = new ResizeObserverEntry(ot.target);
      var targetDepth = calculateDepthForNode(ot.target);
      entries.push(entry);
      ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
      if (targetDepth < shallowestDepth) {
        shallowestDepth = targetDepth;
      }
    });
    callbacks2.push(function resizeObserverCallback() {
      ro.callback.call(ro.observer, entries, ro.observer);
    });
    ro.activeTargets.splice(0, ro.activeTargets.length);
  });
  for (var _i = 0, callbacks_1 = callbacks2; _i < callbacks_1.length; _i++) {
    var callback = callbacks_1[_i];
    callback();
  }
  return shallowestDepth;
};
var gatherActiveObservationsAtDepth = function(depth) {
  resizeObservers.forEach(function processObserver(ro) {
    ro.activeTargets.splice(0, ro.activeTargets.length);
    ro.skippedTargets.splice(0, ro.skippedTargets.length);
    ro.observationTargets.forEach(function processTarget(ot) {
      if (ot.isActive()) {
        if (calculateDepthForNode(ot.target) > depth) {
          ro.activeTargets.push(ot);
        } else {
          ro.skippedTargets.push(ot);
        }
      }
    });
  });
};
var process$1 = function() {
  var depth = 0;
  gatherActiveObservationsAtDepth(depth);
  while (hasActiveObservations()) {
    depth = broadcastActiveObservations();
    gatherActiveObservationsAtDepth(depth);
  }
  if (hasSkippedObservations()) {
    deliverResizeLoopError();
  }
  return depth > 0;
};
var trigger;
var callbacks = [];
var notify = function() {
  return callbacks.splice(0).forEach(function(cb) {
    return cb();
  });
};
var queueMicroTask = function(callback) {
  if (!trigger) {
    var toggle_1 = 0;
    var el_1 = document.createTextNode("");
    var config = { characterData: true };
    new MutationObserver(function() {
      return notify();
    }).observe(el_1, config);
    trigger = function() {
      el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
    };
  }
  callbacks.push(callback);
  trigger();
};
var queueResizeObserver = function(cb) {
  queueMicroTask(function ResizeObserver2() {
    requestAnimationFrame(cb);
  });
};
var watching = 0;
var isWatching = function() {
  return !!watching;
};
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
];
var time = function(timeout) {
  if (timeout === void 0) {
    timeout = 0;
  }
  return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = function() {
  function Scheduler2() {
    var _this = this;
    this.stopped = true;
    this.listener = function() {
      return _this.schedule();
    };
  }
  Scheduler2.prototype.run = function(timeout) {
    var _this = this;
    if (timeout === void 0) {
      timeout = CATCH_PERIOD;
    }
    if (scheduled) {
      return;
    }
    scheduled = true;
    var until = time(timeout);
    queueResizeObserver(function() {
      var elementsHaveResized = false;
      try {
        elementsHaveResized = process$1();
      } finally {
        scheduled = false;
        timeout = until - time();
        if (!isWatching()) {
          return;
        }
        if (elementsHaveResized) {
          _this.run(1e3);
        } else if (timeout > 0) {
          _this.run(timeout);
        } else {
          _this.start();
        }
      }
    });
  };
  Scheduler2.prototype.schedule = function() {
    this.stop();
    this.run();
  };
  Scheduler2.prototype.observe = function() {
    var _this = this;
    var cb = function() {
      return _this.observer && _this.observer.observe(document.body, observerConfig);
    };
    document.body ? cb() : global$1.addEventListener("DOMContentLoaded", cb);
  };
  Scheduler2.prototype.start = function() {
    var _this = this;
    if (this.stopped) {
      this.stopped = false;
      this.observer = new MutationObserver(this.listener);
      this.observe();
      events.forEach(function(name) {
        return global$1.addEventListener(name, _this.listener, true);
      });
    }
  };
  Scheduler2.prototype.stop = function() {
    var _this = this;
    if (!this.stopped) {
      this.observer && this.observer.disconnect();
      events.forEach(function(name) {
        return global$1.removeEventListener(name, _this.listener, true);
      });
      this.stopped = true;
    }
  };
  return Scheduler2;
}();
var scheduler = new Scheduler();
var updateCount = function(n) {
  !watching && n > 0 && scheduler.start();
  watching += n;
  !watching && scheduler.stop();
};
var skipNotifyOnElement = function(target) {
  return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline";
};
var ResizeObservation = function() {
  function ResizeObservation2(target, observedBox) {
    this.target = target;
    this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
    this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  ResizeObservation2.prototype.isActive = function() {
    var size2 = calculateBoxSize(this.target, this.observedBox, true);
    if (skipNotifyOnElement(this.target)) {
      this.lastReportedSize = size2;
    }
    if (this.lastReportedSize.inlineSize !== size2.inlineSize || this.lastReportedSize.blockSize !== size2.blockSize) {
      return true;
    }
    return false;
  };
  return ResizeObservation2;
}();
var ResizeObserverDetail = /* @__PURE__ */ function() {
  function ResizeObserverDetail2(resizeObserver, callback) {
    this.activeTargets = [];
    this.skippedTargets = [];
    this.observationTargets = [];
    this.observer = resizeObserver;
    this.callback = callback;
  }
  return ResizeObserverDetail2;
}();
var observerMap = /* @__PURE__ */ new WeakMap();
var getObservationIndex = function(observationTargets, target) {
  for (var i = 0; i < observationTargets.length; i += 1) {
    if (observationTargets[i].target === target) {
      return i;
    }
  }
  return -1;
};
var ResizeObserverController = function() {
  function ResizeObserverController2() {
  }
  ResizeObserverController2.connect = function(resizeObserver, callback) {
    var detail = new ResizeObserverDetail(resizeObserver, callback);
    observerMap.set(resizeObserver, detail);
  };
  ResizeObserverController2.observe = function(resizeObserver, target, options) {
    var detail = observerMap.get(resizeObserver);
    var firstObservation = detail.observationTargets.length === 0;
    if (getObservationIndex(detail.observationTargets, target) < 0) {
      firstObservation && resizeObservers.push(detail);
      detail.observationTargets.push(new ResizeObservation(target, options && options.box));
      updateCount(1);
      scheduler.schedule();
    }
  };
  ResizeObserverController2.unobserve = function(resizeObserver, target) {
    var detail = observerMap.get(resizeObserver);
    var index = getObservationIndex(detail.observationTargets, target);
    var lastObservation = detail.observationTargets.length === 1;
    if (index >= 0) {
      lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
      detail.observationTargets.splice(index, 1);
      updateCount(-1);
    }
  };
  ResizeObserverController2.disconnect = function(resizeObserver) {
    var _this = this;
    var detail = observerMap.get(resizeObserver);
    detail.observationTargets.slice().forEach(function(ot) {
      return _this.unobserve(resizeObserver, ot.target);
    });
    detail.activeTargets.splice(0, detail.activeTargets.length);
  };
  return ResizeObserverController2;
}();
var ResizeObserver = function() {
  function ResizeObserver2(callback) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    }
    ResizeObserverController.connect(this, callback);
  }
  ResizeObserver2.prototype.observe = function(target, options) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.observe(this, target, options);
  };
  ResizeObserver2.prototype.unobserve = function(target) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.unobserve(this, target);
  };
  ResizeObserver2.prototype.disconnect = function() {
    ResizeObserverController.disconnect(this);
  };
  ResizeObserver2.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  };
  return ResizeObserver2;
}();
class ResizeObserverDelegate {
  constructor() {
    this.handleResize = this.handleResize.bind(this);
    this.observer = new (typeof window !== "undefined" && window.ResizeObserver || ResizeObserver)(this.handleResize);
    this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(entries) {
    for (const entry of entries) {
      const handler = this.elHandlersMap.get(entry.target);
      if (handler !== void 0) {
        handler(entry);
      }
    }
  }
  registerHandler(el, handler) {
    this.elHandlersMap.set(el, handler);
    this.observer.observe(el);
  }
  unregisterHandler(el) {
    if (!this.elHandlersMap.has(el)) {
      return;
    }
    this.elHandlersMap.delete(el);
    this.observer.unobserve(el);
  }
}
const resizeObserverManager = new ResizeObserverDelegate();
const VResizeObserver = /* @__PURE__ */ defineComponent({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(props) {
    let registered = false;
    const proxy = getCurrentInstance().proxy;
    function handleResize(entry) {
      const { onResize } = props;
      if (onResize !== void 0)
        onResize(entry);
    }
    onMounted(() => {
      const el = proxy.$el;
      if (el === void 0) {
        warn$1("resize-observer", "$el does not exist.");
        return;
      }
      if (el.nextElementSibling !== el.nextSibling) {
        if (el.nodeType === 3 && el.nodeValue !== "") {
          warn$1("resize-observer", "$el can not be observed (it may be a text node).");
          return;
        }
      }
      if (el.nextElementSibling !== null) {
        resizeObserverManager.registerHandler(el.nextElementSibling, handleResize);
        registered = true;
      }
    });
    onBeforeUnmount(() => {
      if (registered) {
        resizeObserverManager.unregisterHandler(proxy.$el.nextElementSibling);
      }
    });
  },
  render() {
    return renderSlot(this.$slots, "default");
  }
});
function isHTMLElement(node) {
  return node instanceof HTMLElement;
}
function focusFirstDescendant(node) {
  for (let i = 0; i < node.childNodes.length; i++) {
    const child = node.childNodes[i];
    if (isHTMLElement(child)) {
      if (attemptFocus(child) || focusFirstDescendant(child)) {
        return true;
      }
    }
  }
  return false;
}
function focusLastDescendant(element) {
  for (let i = element.childNodes.length - 1; i >= 0; i--) {
    const child = element.childNodes[i];
    if (isHTMLElement(child)) {
      if (attemptFocus(child) || focusLastDescendant(child)) {
        return true;
      }
    }
  }
  return false;
}
function attemptFocus(element) {
  if (!isFocusable(element)) {
    return false;
  }
  try {
    element.focus({ preventScroll: true });
  } catch (e) {
  }
  return document.activeElement === element;
}
function isFocusable(element) {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.getAttribute("disabled")) {
    return false;
  }
  switch (element.nodeName) {
    case "A":
      return !!element.href && element.rel !== "ignore";
    case "INPUT":
      return element.type !== "hidden" && element.type !== "file";
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    default:
      return false;
  }
}
let stack = [];
const FocusTrap = /* @__PURE__ */ defineComponent({
  name: "FocusTrap",
  props: {
    disabled: Boolean,
    active: Boolean,
    autoFocus: {
      type: Boolean,
      default: true
    },
    onEsc: Function,
    initialFocusTo: String,
    finalFocusTo: String,
    returnFocusOnDeactivated: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const id = createId();
    const focusableStartRef = ref(null);
    const focusableEndRef = ref(null);
    let activated = false;
    let ignoreInternalFocusChange = false;
    const lastFocusedElement = typeof document === "undefined" ? null : document.activeElement;
    function isCurrentActive() {
      const currentActiveId = stack[stack.length - 1];
      return currentActiveId === id;
    }
    function handleDocumentKeydown(e) {
      var _a;
      if (e.code === "Escape") {
        if (isCurrentActive()) {
          (_a = props.onEsc) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }
      }
    }
    onMounted(() => {
      watch(() => props.active, (value) => {
        if (value) {
          activate();
          on("keydown", document, handleDocumentKeydown);
        } else {
          off("keydown", document, handleDocumentKeydown);
          if (activated) {
            deactivate();
          }
        }
      }, {
        immediate: true
      });
    });
    onBeforeUnmount(() => {
      off("keydown", document, handleDocumentKeydown);
      if (activated)
        deactivate();
    });
    function handleDocumentFocus(e) {
      if (ignoreInternalFocusChange)
        return;
      if (isCurrentActive()) {
        const mainEl = getMainEl();
        if (mainEl === null)
          return;
        if (mainEl.contains(getPreciseEventTarget(e)))
          return;
        resetFocusTo("first");
      }
    }
    function getMainEl() {
      const focusableStartEl = focusableStartRef.value;
      if (focusableStartEl === null)
        return null;
      let mainEl = focusableStartEl;
      while (true) {
        mainEl = mainEl.nextSibling;
        if (mainEl === null)
          break;
        if (mainEl instanceof Element && mainEl.tagName === "DIV") {
          break;
        }
      }
      return mainEl;
    }
    function activate() {
      var _a;
      if (props.disabled)
        return;
      stack.push(id);
      if (props.autoFocus) {
        const { initialFocusTo } = props;
        if (initialFocusTo === void 0) {
          resetFocusTo("first");
        } else {
          (_a = resolveTo(initialFocusTo)) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
        }
      }
      activated = true;
      document.addEventListener("focus", handleDocumentFocus, true);
    }
    function deactivate() {
      var _a;
      if (props.disabled)
        return;
      document.removeEventListener("focus", handleDocumentFocus, true);
      stack = stack.filter((idInStack) => idInStack !== id);
      if (isCurrentActive())
        return;
      const { finalFocusTo } = props;
      if (finalFocusTo !== void 0) {
        (_a = resolveTo(finalFocusTo)) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
      } else if (props.returnFocusOnDeactivated) {
        if (lastFocusedElement instanceof HTMLElement) {
          ignoreInternalFocusChange = true;
          lastFocusedElement.focus({ preventScroll: true });
          ignoreInternalFocusChange = false;
        }
      }
    }
    function resetFocusTo(target) {
      if (!isCurrentActive())
        return;
      if (props.active) {
        const focusableStartEl = focusableStartRef.value;
        const focusableEndEl = focusableEndRef.value;
        if (focusableStartEl !== null && focusableEndEl !== null) {
          const mainEl = getMainEl();
          if (mainEl == null || mainEl === focusableEndEl) {
            ignoreInternalFocusChange = true;
            focusableStartEl.focus({ preventScroll: true });
            ignoreInternalFocusChange = false;
            return;
          }
          ignoreInternalFocusChange = true;
          const focused = target === "first" ? focusFirstDescendant(mainEl) : focusLastDescendant(mainEl);
          ignoreInternalFocusChange = false;
          if (!focused) {
            ignoreInternalFocusChange = true;
            focusableStartEl.focus({ preventScroll: true });
            ignoreInternalFocusChange = false;
          }
        }
      }
    }
    function handleStartFocus(e) {
      if (ignoreInternalFocusChange)
        return;
      const mainEl = getMainEl();
      if (mainEl === null)
        return;
      if (e.relatedTarget !== null && mainEl.contains(e.relatedTarget)) {
        resetFocusTo("last");
      } else {
        resetFocusTo("first");
      }
    }
    function handleEndFocus(e) {
      if (ignoreInternalFocusChange)
        return;
      if (e.relatedTarget !== null && e.relatedTarget === focusableStartRef.value) {
        resetFocusTo("last");
      } else {
        resetFocusTo("first");
      }
    }
    return {
      focusableStartRef,
      focusableEndRef,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus,
      handleEndFocus
    };
  },
  render() {
    const { default: defaultSlot } = this.$slots;
    if (defaultSlot === void 0)
      return null;
    if (this.disabled)
      return defaultSlot();
    const { active, focusableStyle } = this;
    return h(Fragment, null, [
      h("div", {
        "aria-hidden": "true",
        tabindex: active ? "0" : "-1",
        ref: "focusableStartRef",
        style: focusableStyle,
        onFocus: this.handleStartFocus
      }),
      defaultSlot(),
      h("div", {
        "aria-hidden": "true",
        style: focusableStyle,
        ref: "focusableEndRef",
        tabindex: active ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
});
function color2Class(color) {
  return color.replace(/#|\(|\)|,|\s|\./g, "_");
}
function rtlInset(inset) {
  const {
    left,
    right,
    top,
    bottom
  } = getMargin(inset);
  return `${top} ${right} ${bottom} ${left}`;
}
const eventSet = /* @__PURE__ */ new WeakSet();
function markEventEffectPerformed(event) {
  eventSet.add(event);
}
function eventEffectNotPerformed(event) {
  return !eventSet.has(event);
}
function warn(location2, message) {
  console.error(`[naive/${location2}]: ${message}`);
}
function throwError(location2, message) {
  throw new Error(`[naive/${location2}]: ${message}`);
}
function call(funcs, ...args) {
  if (Array.isArray(funcs)) {
    funcs.forEach((func) => call(func, ...args));
  } else {
    return funcs(...args);
  }
}
function flatten(vNodes, filterCommentNode = true, result = []) {
  vNodes.forEach((vNode) => {
    if (vNode === null) return;
    if (typeof vNode !== "object") {
      if (typeof vNode === "string" || typeof vNode === "number") {
        result.push(createTextVNode(String(vNode)));
      }
      return;
    }
    if (Array.isArray(vNode)) {
      flatten(vNode, filterCommentNode, result);
      return;
    }
    if (vNode.type === Fragment) {
      if (vNode.children === null) return;
      if (Array.isArray(vNode.children)) {
        flatten(vNode.children, filterCommentNode, result);
      }
    } else {
      if (vNode.type === Comment && filterCommentNode) return;
      result.push(vNode);
    }
  });
  return result;
}
function getFirstSlotVNode(slots, slotName = "default", props = void 0) {
  const slot = slots[slotName];
  if (!slot) {
    warn("getFirstSlotVNode", `slot[${slotName}] is empty`);
    return null;
  }
  const slotContent = flatten(slot(props));
  if (slotContent.length === 1) {
    return slotContent[0];
  } else {
    warn("getFirstSlotVNode", `slot[${slotName}] should have exactly one child`);
    return null;
  }
}
function keep(object, keys = [], rest) {
  const keepedObject = {};
  keys.forEach((key) => {
    keepedObject[key] = object[key];
  });
  return Object.assign(keepedObject, rest);
}
function keysOf(obj) {
  return Object.keys(obj);
}
function omit(object, keys = [], rest) {
  const omitedObject = {};
  const originalKeys = Object.getOwnPropertyNames(object);
  originalKeys.forEach((originalKey) => {
    if (!keys.includes(originalKey)) {
      omitedObject[originalKey] = object[originalKey];
    }
  });
  return Object.assign(omitedObject, rest);
}
function render(r, ...args) {
  if (typeof r === "function") {
    return r(...args);
  } else if (typeof r === "string") {
    return createTextVNode(r);
  } else if (typeof r === "number") {
    return createTextVNode(String(r));
  } else {
    return null;
  }
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) {
      return true;
    }
    if (child.type === Comment) {
      return false;
    }
    if (child.type === Fragment && !ensureValidVNode(child.children)) {
      return false;
    }
    return true;
  }) ? vnodes : null;
}
function resolveSlot(slot, fallback) {
  return slot && ensureValidVNode(slot()) || fallback();
}
function resolveSlotWithProps(slot, props, fallback) {
  return slot && ensureValidVNode(slot(props)) || fallback(props);
}
function resolveWrappedSlot(slot, wrapper) {
  const children = slot && ensureValidVNode(slot());
  return wrapper(children || null);
}
function isSlotEmpty(slot) {
  return !(slot && ensureValidVNode(slot()));
}
const Wrapper = /* @__PURE__ */ defineComponent({
  render() {
    var _a, _b;
    return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
});
const configProviderInjectionKey = createInjectionKey("n-config-provider");
const defaultClsPrefix = "n";
function useConfig(props = {}, options = {
  defaultBordered: true
}) {
  const NConfigProvider = inject(configProviderInjectionKey, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.inlineThemeDisabled,
    mergedRtlRef: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedRtlRef,
    mergedComponentPropsRef: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedComponentPropsRef,
    mergedBreakpointsRef: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedBreakpointsRef,
    mergedBorderedRef: computed(() => {
      var _a, _b;
      const {
        bordered
      } = props;
      if (bordered !== void 0) return bordered;
      return (_b = (_a = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedBorderedRef.value) !== null && _a !== void 0 ? _a : options.defaultBordered) !== null && _b !== void 0 ? _b : true;
    }),
    mergedClsPrefixRef: NConfigProvider ? NConfigProvider.mergedClsPrefixRef : shallowRef(defaultClsPrefix),
    namespaceRef: computed(() => NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedNamespaceRef.value)
  };
}
function useThemeClass(componentName, hashRef, cssVarsRef, props) {
  if (!cssVarsRef) throwError("useThemeClass", "cssVarsRef is not passed");
  const NConfigProvider = inject(configProviderInjectionKey, null);
  const mergedThemeHashRef = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeHashRef;
  const styleMountTarget = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget;
  const themeClassRef = ref("");
  const ssrAdapter2 = useSsrAdapter();
  let renderCallback;
  const hashClassPrefix = `__${componentName}`;
  const mountStyle = () => {
    let finalThemeHash = hashClassPrefix;
    const hashValue = hashRef ? hashRef.value : void 0;
    const themeHash = mergedThemeHashRef === null || mergedThemeHashRef === void 0 ? void 0 : mergedThemeHashRef.value;
    if (themeHash) finalThemeHash += `-${themeHash}`;
    if (hashValue) finalThemeHash += `-${hashValue}`;
    const {
      themeOverrides,
      builtinThemeOverrides
    } = props;
    if (themeOverrides) {
      finalThemeHash += `-${murmur2(JSON.stringify(themeOverrides))}`;
    }
    if (builtinThemeOverrides) {
      finalThemeHash += `-${murmur2(JSON.stringify(builtinThemeOverrides))}`;
    }
    themeClassRef.value = finalThemeHash;
    renderCallback = () => {
      const cssVars = cssVarsRef.value;
      let style2 = "";
      for (const key in cssVars) {
        style2 += `${key}: ${cssVars[key]};`;
      }
      c(`.${finalThemeHash}`, style2).mount({
        id: finalThemeHash,
        ssr: ssrAdapter2,
        parent: styleMountTarget
      });
      renderCallback = void 0;
    };
  };
  watchEffect(() => {
    mountStyle();
  });
  return {
    themeClass: themeClassRef,
    onRender: () => {
      renderCallback === null || renderCallback === void 0 ? void 0 : renderCallback();
    }
  };
}
const formItemInjectionKey = createInjectionKey("n-form-item");
function useFormItem(props, {
  defaultSize = "medium",
  mergedSize,
  mergedDisabled
} = {}) {
  const NFormItem = inject(formItemInjectionKey, null);
  provide(formItemInjectionKey, null);
  const mergedSizeRef = computed(mergedSize ? () => mergedSize(NFormItem) : () => {
    const {
      size: size2
    } = props;
    if (size2) return size2;
    if (NFormItem) {
      const {
        mergedSize: mergedSize2
      } = NFormItem;
      if (mergedSize2.value !== void 0) {
        return mergedSize2.value;
      }
    }
    return defaultSize;
  });
  const mergedDisabledRef = computed(mergedDisabled ? () => mergedDisabled(NFormItem) : () => {
    const {
      disabled
    } = props;
    if (disabled !== void 0) {
      return disabled;
    }
    if (NFormItem) {
      return NFormItem.disabled.value;
    }
    return false;
  });
  const mergedStatusRef = computed(() => {
    const {
      status
    } = props;
    if (status) return status;
    return NFormItem === null || NFormItem === void 0 ? void 0 : NFormItem.mergedValidationStatus.value;
  });
  onBeforeUnmount(() => {
    if (NFormItem) {
      NFormItem.restoreValidation();
    }
  });
  return {
    mergedSizeRef,
    mergedDisabledRef,
    mergedStatusRef,
    nTriggerFormBlur() {
      if (NFormItem) {
        NFormItem.handleContentBlur();
      }
    },
    nTriggerFormChange() {
      if (NFormItem) {
        NFormItem.handleContentChange();
      }
    },
    nTriggerFormFocus() {
      if (NFormItem) {
        NFormItem.handleContentFocus();
      }
    },
    nTriggerFormInput() {
      if (NFormItem) {
        NFormItem.handleContentInput();
      }
    }
  };
}
const zhCN$1 = {
  name: "zh-CN",
  global: {
    undo: "撤销",
    redo: "重做",
    confirm: "确认",
    clear: "清除"
  },
  Popconfirm: {
    positiveText: "确认",
    negativeText: "取消"
  },
  Cascader: {
    placeholder: "请选择",
    loading: "加载中",
    loadingRequiredMessage: (label) => `加载全部 ${label} 的子节点后才可选中`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy年",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    weekFormat: "YYYY-w周",
    clear: "清除",
    now: "此刻",
    confirm: "确认",
    selectTime: "选择时间",
    selectDate: "选择日期",
    datePlaceholder: "选择日期",
    datetimePlaceholder: "选择日期时间",
    monthPlaceholder: "选择月份",
    yearPlaceholder: "选择年份",
    quarterPlaceholder: "选择季度",
    weekPlaceholder: "选择周",
    startDatePlaceholder: "开始日期",
    endDatePlaceholder: "结束日期",
    startDatetimePlaceholder: "开始日期时间",
    endDatetimePlaceholder: "结束日期时间",
    startMonthPlaceholder: "开始月份",
    endMonthPlaceholder: "结束月份",
    monthBeforeYear: false,
    firstDayOfWeek: 0,
    today: "今天"
  },
  DataTable: {
    checkTableAll: "选择全部表格数据",
    uncheckTableAll: "取消选择全部表格数据",
    confirm: "确认",
    clear: "重置"
  },
  LegacyTransfer: {
    sourceTitle: "源项",
    targetTitle: "目标项"
  },
  Transfer: {
    selectAll: "全选",
    clearAll: "清除",
    unselectAll: "取消全选",
    total: (num) => `共 ${num} 项`,
    selected: (num) => `已选 ${num} 项`
  },
  Empty: {
    description: "无数据"
  },
  Select: {
    placeholder: "请选择"
  },
  TimePicker: {
    placeholder: "请选择时间",
    positiveText: "确认",
    negativeText: "取消",
    now: "此刻",
    clear: "清除"
  },
  Pagination: {
    goto: "跳至",
    selectionSuffix: "页"
  },
  DynamicTags: {
    add: "添加"
  },
  Log: {
    loading: "加载中"
  },
  Input: {
    placeholder: "请输入"
  },
  InputNumber: {
    placeholder: "请输入"
  },
  DynamicInput: {
    create: "添加"
  },
  ThemeEditor: {
    title: "主题编辑器",
    clearAllVars: "清除全部变量",
    clearSearch: "清除搜索",
    filterCompName: "过滤组件名",
    filterVarName: "过滤变量名",
    import: "导入",
    export: "导出",
    restore: "恢复默认"
  },
  Image: {
    tipPrevious: "上一张（←）",
    tipNext: "下一张（→）",
    tipCounterclockwise: "向左旋转",
    tipClockwise: "向右旋转",
    tipZoomOut: "缩小",
    tipZoomIn: "放大",
    tipDownload: "下载",
    tipClose: "关闭（Esc）",
    tipOriginalSize: "缩放到原始尺寸"
  }
};
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      findKey$1(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey$1(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new argument.constructor(+argument);
  } else if (typeof argument === "number" || argStr === "[object Number]" || typeof argument === "string" || argStr === "[object String]") {
    return new Date(argument);
  } else {
    return /* @__PURE__ */ new Date(NaN);
  }
}
let defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function isSameWeek(dateLeft, dateRight, options) {
  const dateLeftStartOfWeek = startOfWeek(dateLeft, options);
  const dateRightStartOfWeek = startOfWeek(dateRight, options);
  return +dateLeftStartOfWeek === +dateRightStartOfWeek;
}
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "不到 1 秒",
    other: "不到 {{count}} 秒"
  },
  xSeconds: {
    one: "1 秒",
    other: "{{count}} 秒"
  },
  halfAMinute: "半分钟",
  lessThanXMinutes: {
    one: "不到 1 分钟",
    other: "不到 {{count}} 分钟"
  },
  xMinutes: {
    one: "1 分钟",
    other: "{{count}} 分钟"
  },
  xHours: {
    one: "1 小时",
    other: "{{count}} 小时"
  },
  aboutXHours: {
    one: "大约 1 小时",
    other: "大约 {{count}} 小时"
  },
  xDays: {
    one: "1 天",
    other: "{{count}} 天"
  },
  aboutXWeeks: {
    one: "大约 1 个星期",
    other: "大约 {{count}} 个星期"
  },
  xWeeks: {
    one: "1 个星期",
    other: "{{count}} 个星期"
  },
  aboutXMonths: {
    one: "大约 1 个月",
    other: "大约 {{count}} 个月"
  },
  xMonths: {
    one: "1 个月",
    other: "{{count}} 个月"
  },
  aboutXYears: {
    one: "大约 1 年",
    other: "大约 {{count}} 年"
  },
  xYears: {
    one: "1 年",
    other: "{{count}} 年"
  },
  overXYears: {
    one: "超过 1 年",
    other: "超过 {{count}} 年"
  },
  almostXYears: {
    one: "将近 1 年",
    other: "将近 {{count}} 年"
  }
};
const formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", String(count));
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + "内";
    } else {
      return result + "前";
    }
  }
  return result;
};
const dateFormats = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
};
const timeFormats = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
};
const dateTimeFormats = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
};
const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
function checkWeek(date, baseDate, options) {
  const baseFormat = "eeee p";
  if (isSameWeek(date, baseDate, options)) {
    return baseFormat;
  } else if (date.getTime() > baseDate.getTime()) {
    return "'下个'" + baseFormat;
  }
  return "'上个'" + baseFormat;
}
const formatRelativeLocale = {
  lastWeek: checkWeek,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: checkWeek,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
};
const formatRelative = (token, date, baseDate, options) => {
  const format = formatRelativeLocale[token];
  if (typeof format === "function") {
    return format(date, baseDate, options);
  }
  return format;
};
const eraValues = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
};
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
};
const monthValues = {
  narrow: [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二"
  ],
  abbreviated: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  wide: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ]
};
const dayValues = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
};
const dayPeriodValues = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
};
const formattingDayPeriodValues = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
};
const ordinalNumber = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  switch (options?.unit) {
    case "date":
      return number.toString() + "日";
    case "hour":
      return number.toString() + "时";
    case "minute":
      return number.toString() + "分";
    case "second":
      return number.toString() + "秒";
    default:
      return "第 " + number.toString();
  }
};
const localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
const matchOrdinalNumberPattern = /^(第\s*)?\d+(日|时|分|秒)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
};
const parseEraPatterns = {
  any: [/^(前)/i, /^(公元)/i]
};
const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
};
const parseQuarterPatterns = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
};
const matchMonthPatterns = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
};
const parseMonthPatterns = {
  narrow: [
    /^一/i,
    /^二/i,
    /^三/i,
    /^四/i,
    /^五/i,
    /^六/i,
    /^七/i,
    /^八/i,
    /^九/i,
    /^十(?!(一|二))/i,
    /^十一/i,
    /^十二/i
  ],
  any: [
    /^一|1/i,
    /^二|2/i,
    /^三|3/i,
    /^四|4/i,
    /^五|5/i,
    /^六|6/i,
    /^七|7/i,
    /^八|8/i,
    /^九|9/i,
    /^十(?!(一|二))|10/i,
    /^十一|11/i,
    /^十二|12/i
  ]
};
const matchDayPatterns = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
};
const parseDayPatterns = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
};
const matchDayPeriodPatterns = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^上午?/i,
    pm: /^下午?/i,
    midnight: /^午夜/i,
    noon: /^[中正]午/i,
    morning: /^早上/i,
    afternoon: /^下午/i,
    evening: /^晚上?/i,
    night: /^凌晨/i
  }
};
const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
const zhCN = {
  code: "zh-CN",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const dateZhCN = {
  name: "zh-CN",
  locale: zhCN
};
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$a = Object.prototype;
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
var nativeObjectToString$1 = objectProto$a.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$9 = Object.prototype;
var nativeObjectToString = objectProto$9.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var isArray$2 = Array.isArray;
var INFINITY = 1 / 0;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$2(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = function() {
  var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$8 = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$8 = objectProto$8.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var setToString = shortOut(baseSetToString);
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$7 = objectProto$7.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$7.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
function isIterateeCall(value, index, object) {
  if (!isObject$1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
    return eq(object[index], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var objectProto$6 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$6;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$1 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$1;
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$6 = objectProto$5.hasOwnProperty;
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$6.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$2 = moduleExports$2 ? root.Buffer : void 0;
var nativeIsBuffer = Buffer$2 ? Buffer$2.isBuffer : void 0;
var isBuffer$1 = nativeIsBuffer || stubFalse;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag$1 = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal.process;
var nodeUtil = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var objectProto$4 = Object.prototype;
var hasOwnProperty$5 = objectProto$4.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$5.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$3 = Object.prototype;
var hasOwnProperty$4 = objectProto$3.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject$1(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$4.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var nativeCreate = getNative(Object, "create");
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$2 = Object.prototype;
var hasOwnProperty$3 = objectProto$2.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$3.call(data, key) ? data[key] : void 0;
}
var objectProto$1 = Object.prototype;
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty$2.call(data, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root, "Map");
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size2 = data.size;
  data.set(key, value);
  this.size += data.size == size2 ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$1 = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$2(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$1.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function baseSlice(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
function castSlice(array, start, end) {
  var length = array.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
var rsZWJ$1 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + "]");
function hasUnicode(string) {
  return reHasUnicode.test(string);
}
function asciiToArray(string) {
  return string.split("");
}
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}
function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
function createCaseFirst(methodName) {
  return function(string) {
    string = toString$1(string);
    var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
var upperFirst = createCaseFirst("toUpperCase");
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer$1 = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
function cloneBuffer(buffer2, isDeep) {
  if (isDeep) {
    return buffer2.slice();
  }
  var length = buffer2.length, result = allocUnsafe ? allocUnsafe(length) : new buffer2.constructor(length);
  buffer2.copy(result);
  return result;
}
var Uint8Array$1 = root.Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer2 = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer2, typedArray.byteOffset, typedArray.length);
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack2) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack2.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack2) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$2(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$2(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject$2(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$1(objValue) || isFunction$1(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack2.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack2);
    stack2["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack2) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack2 || (stack2 = new Stack());
    if (isObject$1(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack2);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack2) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
var merge$1 = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
const cssrAnchorMetaName = "naive-ui-style";
function useRtl(mountId, rtlStateRef, clsPrefixRef) {
  if (!rtlStateRef) return void 0;
  const ssrAdapter2 = useSsrAdapter();
  const componentRtlStateRef = computed(() => {
    const {
      value: rtlState
    } = rtlStateRef;
    if (!rtlState) {
      return void 0;
    }
    const componentRtlState = rtlState[mountId];
    if (!componentRtlState) {
      return void 0;
    }
    return componentRtlState;
  });
  const NConfigProvider = inject(configProviderInjectionKey, null);
  const mountStyle = () => {
    watchEffect(() => {
      const {
        value: clsPrefix
      } = clsPrefixRef;
      const id = `${clsPrefix}${mountId}Rtl`;
      if (exists(id, ssrAdapter2)) return;
      const {
        value: componentRtlState
      } = componentRtlStateRef;
      if (!componentRtlState) return;
      componentRtlState.style.mount({
        id,
        head: true,
        anchorMetaName: cssrAnchorMetaName,
        props: {
          bPrefix: clsPrefix ? `.${clsPrefix}-` : void 0
        },
        ssr: ssrAdapter2,
        parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
      });
    });
  };
  if (ssrAdapter2) {
    mountStyle();
  } else {
    onBeforeMount(mountStyle);
  }
  return componentRtlStateRef;
}
const commonVariables$n = {
  fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",
  fontWeight: "400",
  fontWeightStrong: "500",
  cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)",
  cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)",
  cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)",
  borderRadius: "3px",
  borderRadiusSmall: "2px",
  fontSize: "14px",
  fontSizeMini: "12px",
  fontSizeTiny: "12px",
  fontSizeSmall: "14px",
  fontSizeMedium: "14px",
  fontSizeLarge: "15px",
  fontSizeHuge: "16px",
  lineHeight: "1.6",
  heightMini: "16px",
  // private now, it's too small
  heightTiny: "22px",
  heightSmall: "28px",
  heightMedium: "34px",
  heightLarge: "40px",
  heightHuge: "46px"
};
const {
  fontSize,
  fontFamily,
  lineHeight
} = commonVariables$n;
const globalStyle = c("body", `
 margin: 0;
 font-size: ${fontSize};
 font-family: ${fontFamily};
 line-height: ${lineHeight};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [c("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function useStyle(mountId, style2, clsPrefixRef) {
  if (!style2) {
    return;
  }
  const ssrAdapter2 = useSsrAdapter();
  const NConfigProvider = inject(configProviderInjectionKey, null);
  const mountStyle = () => {
    const clsPrefix = clsPrefixRef.value;
    style2.mount({
      id: clsPrefix === void 0 ? mountId : clsPrefix + mountId,
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      props: {
        bPrefix: clsPrefix ? `.${clsPrefix}-` : void 0
      },
      ssr: ssrAdapter2,
      parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
    });
    if (!(NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.preflightStyleDisabled)) {
      globalStyle.mount({
        id: "n-global",
        head: true,
        anchorMetaName: cssrAnchorMetaName,
        ssr: ssrAdapter2,
        parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
      });
    }
  };
  if (ssrAdapter2) {
    mountStyle();
  } else {
    onBeforeMount(mountStyle);
  }
}
function createTheme(theme) {
  return theme;
}
function useTheme(resolveId, mountId, style2, defaultTheme, props, clsPrefixRef) {
  const ssrAdapter2 = useSsrAdapter();
  const NConfigProvider = inject(configProviderInjectionKey, null);
  if (style2) {
    const mountStyle = () => {
      const clsPrefix = clsPrefixRef === null || clsPrefixRef === void 0 ? void 0 : clsPrefixRef.value;
      style2.mount({
        id: clsPrefix === void 0 ? mountId : clsPrefix + mountId,
        head: true,
        props: {
          bPrefix: clsPrefix ? `.${clsPrefix}-` : void 0
        },
        anchorMetaName: cssrAnchorMetaName,
        ssr: ssrAdapter2,
        parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
      });
      if (!(NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.preflightStyleDisabled)) {
        globalStyle.mount({
          id: "n-global",
          head: true,
          anchorMetaName: cssrAnchorMetaName,
          ssr: ssrAdapter2,
          parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
        });
      }
    };
    if (ssrAdapter2) {
      mountStyle();
    } else {
      onBeforeMount(mountStyle);
    }
  }
  const mergedThemeRef = computed(() => {
    var _a;
    const {
      theme: {
        common: selfCommon,
        self: self2,
        peers = {}
      } = {},
      themeOverrides: selfOverrides = {},
      builtinThemeOverrides: builtinOverrides = {}
    } = props;
    const {
      common: selfCommonOverrides,
      peers: peersOverrides
    } = selfOverrides;
    const {
      common: globalCommon = void 0,
      [resolveId]: {
        common: globalSelfCommon = void 0,
        self: globalSelf = void 0,
        peers: globalPeers = {}
      } = {}
    } = (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeRef.value) || {};
    const {
      common: globalCommonOverrides = void 0,
      [resolveId]: globalSelfOverrides = {}
    } = (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeOverridesRef.value) || {};
    const {
      common: globalSelfCommonOverrides,
      peers: globalPeersOverrides = {}
    } = globalSelfOverrides;
    const mergedCommon = merge$1({}, selfCommon || globalSelfCommon || globalCommon || defaultTheme.common, globalCommonOverrides, globalSelfCommonOverrides, selfCommonOverrides);
    const mergedSelf = merge$1(
      // {}, executed every time, no need for empty obj
      (_a = self2 || globalSelf || defaultTheme.self) === null || _a === void 0 ? void 0 : _a(mergedCommon),
      builtinOverrides,
      globalSelfOverrides,
      selfOverrides
    );
    return {
      common: mergedCommon,
      self: mergedSelf,
      peers: merge$1({}, defaultTheme.peers, globalPeers, peers),
      peerOverrides: merge$1({}, builtinOverrides.peers, globalPeersOverrides, peersOverrides)
    };
  });
  return mergedThemeRef;
}
useTheme.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const style$9 = cB("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [c("svg", `
 height: 1em;
 width: 1em;
 `)]);
const NBaseIcon = /* @__PURE__ */ defineComponent({
  name: "BaseIcon",
  props: {
    role: String,
    ariaLabel: String,
    ariaDisabled: {
      type: Boolean,
      default: void 0
    },
    ariaHidden: {
      type: Boolean,
      default: void 0
    },
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function,
    onMousedown: Function,
    onMouseup: Function
  },
  setup(props) {
    useStyle("-base-icon", style$9, toRef(props, "clsPrefix"));
  },
  render() {
    return h("i", {
      class: `${this.clsPrefix}-base-icon`,
      onClick: this.onClick,
      onMousedown: this.onMousedown,
      onMouseup: this.onMouseup,
      role: this.role,
      "aria-label": this.ariaLabel,
      "aria-hidden": this.ariaHidden,
      "aria-disabled": this.ariaDisabled
    }, this.$slots);
  }
});
const NIconSwitchTransition = /* @__PURE__ */ defineComponent({
  name: "BaseIconSwitchTransition",
  setup(_, {
    slots
  }) {
    const isMountedRef = isMounted();
    return () => h(Transition, {
      name: "icon-switch-transition",
      appear: isMountedRef.value
    }, slots);
  }
});
function replaceable(name, icon) {
  return /* @__PURE__ */ defineComponent({
    name: upperFirst(name),
    setup() {
      var _a;
      const mergedIconsRef = (_a = inject(configProviderInjectionKey, null)) === null || _a === void 0 ? void 0 : _a.mergedIconsRef;
      return () => {
        var _a2;
        const iconOverride = (_a2 = mergedIconsRef === null || mergedIconsRef === void 0 ? void 0 : mergedIconsRef.value) === null || _a2 === void 0 ? void 0 : _a2[name];
        return iconOverride ? iconOverride() : icon;
      };
    }
  });
}
const ErrorIcon$1 = replaceable("close", h("svg", {
  viewBox: "0 0 12 12",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h("path", {
  d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"
})))));
const ErrorIcon = replaceable("error", h("svg", {
  viewBox: "0 0 48 48",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, h("g", {
  "fill-rule": "nonzero"
}, h("path", {
  d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"
})))));
const InfoIcon = replaceable("info", h("svg", {
  viewBox: "0 0 28 28",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, h("g", {
  "fill-rule": "nonzero"
}, h("path", {
  d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"
})))));
const SuccessIcon = replaceable("success", h("svg", {
  viewBox: "0 0 48 48",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, h("g", {
  "fill-rule": "nonzero"
}, h("path", {
  d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"
})))));
const WarningIcon = replaceable("warning", h("svg", {
  viewBox: "0 0 24 24",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, h("g", {
  "fill-rule": "nonzero"
}, h("path", {
  d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"
})))));
const {
  cubicBezierEaseInOut: cubicBezierEaseInOut$2
} = commonVariables$n;
function iconSwitchTransition({
  originalTransform = "",
  left = 0,
  top = 0,
  transition = `all .3s ${cubicBezierEaseInOut$2} !important`
} = {}) {
  return [c("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${originalTransform} scale(0.75)`,
    left,
    top,
    opacity: 0
  }), c("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${originalTransform}`,
    left,
    top,
    opacity: 1
  }), c("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left,
    top,
    transition
  })];
}
const style$8 = cB("base-close", `
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`, [cM("absolute", `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `), c("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), cNotM("disabled", [c("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), c("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), c("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), c("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), c("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), cM("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), cM("round", [c("&::before", `
 border-radius: 50%;
 `)])]);
const NBaseClose = /* @__PURE__ */ defineComponent({
  name: "BaseClose",
  props: {
    isButtonTag: {
      type: Boolean,
      default: true
    },
    clsPrefix: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    focusable: {
      type: Boolean,
      default: true
    },
    round: Boolean,
    onClick: Function,
    absolute: Boolean
  },
  setup(props) {
    useStyle("-base-close", style$8, toRef(props, "clsPrefix"));
    return () => {
      const {
        clsPrefix,
        disabled,
        absolute,
        round,
        isButtonTag
      } = props;
      const Tag = isButtonTag ? "button" : "div";
      return h(Tag, {
        type: isButtonTag ? "button" : void 0,
        tabindex: disabled || !props.focusable ? -1 : 0,
        "aria-disabled": disabled,
        "aria-label": "close",
        role: isButtonTag ? void 0 : "button",
        disabled,
        class: [`${clsPrefix}-base-close`, absolute && `${clsPrefix}-base-close--absolute`, disabled && `${clsPrefix}-base-close--disabled`, round && `${clsPrefix}-base-close--round`],
        onMousedown: (e) => {
          if (!props.focusable) {
            e.preventDefault();
          }
        },
        onClick: props.onClick
      }, h(NBaseIcon, {
        clsPrefix
      }, {
        default: () => h(ErrorIcon$1, null)
      }));
    };
  }
});
const NFadeInExpandTransition = /* @__PURE__ */ defineComponent({
  name: "FadeInExpandTransition",
  props: {
    appear: Boolean,
    group: Boolean,
    mode: String,
    onLeave: Function,
    onAfterLeave: Function,
    onAfterEnter: Function,
    width: Boolean,
    // reverse mode is only used in tree
    // it make it from expanded to collapsed after mounted
    reverse: Boolean
  },
  setup(props, {
    slots
  }) {
    function handleBeforeLeave(el) {
      if (props.width) {
        el.style.maxWidth = `${el.offsetWidth}px`;
      } else {
        el.style.maxHeight = `${el.offsetHeight}px`;
      }
      void el.offsetWidth;
    }
    function handleLeave(el) {
      if (props.width) {
        el.style.maxWidth = "0";
      } else {
        el.style.maxHeight = "0";
      }
      void el.offsetWidth;
      const {
        onLeave
      } = props;
      if (onLeave) onLeave();
    }
    function handleAfterLeave(el) {
      if (props.width) {
        el.style.maxWidth = "";
      } else {
        el.style.maxHeight = "";
      }
      const {
        onAfterLeave
      } = props;
      if (onAfterLeave) onAfterLeave();
    }
    function handleEnter(el) {
      el.style.transition = "none";
      if (props.width) {
        const memorizedWidth = el.offsetWidth;
        el.style.maxWidth = "0";
        void el.offsetWidth;
        el.style.transition = "";
        el.style.maxWidth = `${memorizedWidth}px`;
      } else {
        if (props.reverse) {
          el.style.maxHeight = `${el.offsetHeight}px`;
          void el.offsetHeight;
          el.style.transition = "";
          el.style.maxHeight = "0";
        } else {
          const memorizedHeight = el.offsetHeight;
          el.style.maxHeight = "0";
          void el.offsetWidth;
          el.style.transition = "";
          el.style.maxHeight = `${memorizedHeight}px`;
        }
      }
      void el.offsetWidth;
    }
    function handleAfterEnter(el) {
      var _a;
      if (props.width) {
        el.style.maxWidth = "";
      } else {
        if (!props.reverse) {
          el.style.maxHeight = "";
        }
      }
      (_a = props.onAfterEnter) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return () => {
      const {
        group,
        width,
        appear,
        mode
      } = props;
      const type = group ? TransitionGroup : Transition;
      const resolvedProps = {
        name: width ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear,
        onEnter: handleEnter,
        onAfterEnter: handleAfterEnter,
        onBeforeLeave: handleBeforeLeave,
        onLeave: handleLeave,
        onAfterLeave: handleAfterLeave
      };
      if (!group) {
        resolvedProps.mode = mode;
      }
      return h(type, resolvedProps, slots);
    };
  }
});
const style$7 = c([c("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), cB("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [cE("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [iconSwitchTransition()]), cE("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [iconSwitchTransition({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), cE("container", `
 animation: rotator 3s linear infinite both;
 `, [cE("icon", `
 height: 1em;
 width: 1em;
 `)])])]);
const duration = "1.6s";
const exposedLoadingProps = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
};
const NBaseLoading = /* @__PURE__ */ defineComponent({
  name: "BaseLoading",
  props: Object.assign({
    clsPrefix: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      default: true
    },
    scale: {
      type: Number,
      default: 1
    },
    radius: {
      type: Number,
      default: 100
    }
  }, exposedLoadingProps),
  setup(props) {
    useStyle("-base-loading", style$7, toRef(props, "clsPrefix"));
  },
  render() {
    const {
      clsPrefix,
      radius,
      strokeWidth,
      stroke,
      scale
    } = this;
    const scaledRadius = radius / scale;
    return h("div", {
      class: `${clsPrefix}-base-loading`,
      role: "img",
      "aria-label": "loading"
    }, h(NIconSwitchTransition, null, {
      default: () => this.show ? h("div", {
        key: "icon",
        class: `${clsPrefix}-base-loading__transition-wrapper`
      }, h("div", {
        class: `${clsPrefix}-base-loading__container`
      }, h("svg", {
        class: `${clsPrefix}-base-loading__icon`,
        viewBox: `0 0 ${2 * scaledRadius} ${2 * scaledRadius}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          color: stroke
        }
      }, h("g", null, h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${scaledRadius} ${scaledRadius};270 ${scaledRadius} ${scaledRadius}`,
        begin: "0s",
        dur: duration,
        fill: "freeze",
        repeatCount: "indefinite"
      }), h("circle", {
        class: `${clsPrefix}-base-loading__icon`,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": strokeWidth,
        "stroke-linecap": "round",
        cx: scaledRadius,
        cy: scaledRadius,
        r: radius - strokeWidth / 2,
        "stroke-dasharray": 5.67 * radius,
        "stroke-dashoffset": 18.48 * radius
      }, h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${scaledRadius} ${scaledRadius};135 ${scaledRadius} ${scaledRadius};450 ${scaledRadius} ${scaledRadius}`,
        begin: "0s",
        dur: duration,
        fill: "freeze",
        repeatCount: "indefinite"
      }), h("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * radius};${1.42 * radius};${5.67 * radius}`,
        begin: "0s",
        dur: duration,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : h("div", {
        key: "placeholder",
        class: `${clsPrefix}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
});
const {
  cubicBezierEaseInOut: cubicBezierEaseInOut$1
} = commonVariables$n;
function fadeInTransition({
  name = "fade-in",
  enterDuration = "0.2s",
  leaveDuration = "0.2s",
  enterCubicBezier = cubicBezierEaseInOut$1,
  leaveCubicBezier = cubicBezierEaseInOut$1
} = {}) {
  return [c(`&.${name}-transition-enter-active`, {
    transition: `all ${enterDuration} ${enterCubicBezier}!important`
  }), c(`&.${name}-transition-leave-active`, {
    transition: `all ${leaveDuration} ${leaveCubicBezier}!important`
  }), c(`&.${name}-transition-enter-from, &.${name}-transition-leave-to`, {
    opacity: 0
  }), c(`&.${name}-transition-leave-from, &.${name}-transition-enter-to`, {
    opacity: 1
  })];
}
const base$1 = {
  neutralBase: "#000",
  neutralInvertBase: "#fff",
  neutralTextBase: "#fff",
  neutralPopover: "rgb(72, 72, 78)",
  neutralCard: "rgb(24, 24, 28)",
  neutralModal: "rgb(44, 44, 50)",
  neutralBody: "rgb(16, 16, 20)",
  alpha1: "0.9",
  alpha2: "0.82",
  alpha3: "0.52",
  alpha4: "0.38",
  alpha5: "0.28",
  alphaClose: "0.52",
  alphaDisabled: "0.38",
  alphaDisabledInput: "0.06",
  alphaPending: "0.09",
  alphaTablePending: "0.06",
  alphaTableStriped: "0.05",
  alphaPressed: "0.05",
  alphaAvatar: "0.18",
  alphaRail: "0.2",
  alphaProgressRail: "0.12",
  alphaBorder: "0.24",
  alphaDivider: "0.09",
  alphaInput: "0.1",
  alphaAction: "0.06",
  alphaTab: "0.04",
  alphaScrollbar: "0.2",
  alphaScrollbarHover: "0.3",
  alphaCode: "0.12",
  alphaTag: "0.2",
  // primary
  primaryHover: "#7fe7c4",
  primaryDefault: "#63e2b7",
  primaryActive: "#5acea7",
  primarySuppl: "rgb(42, 148, 125)",
  // info
  infoHover: "#8acbec",
  infoDefault: "#70c0e8",
  infoActive: "#66afd3",
  infoSuppl: "rgb(56, 137, 197)",
  // error
  errorHover: "#e98b8b",
  errorDefault: "#e88080",
  errorActive: "#e57272",
  errorSuppl: "rgb(208, 58, 82)",
  // warning
  warningHover: "#f5d599",
  warningDefault: "#f2c97d",
  warningActive: "#e6c260",
  warningSuppl: "rgb(240, 138, 0)",
  // success
  successHover: "#7fe7c4",
  successDefault: "#63e2b7",
  successActive: "#5acea7",
  successSuppl: "rgb(42, 148, 125)"
};
const baseBackgroundRgb$1 = rgba(base$1.neutralBase);
const baseInvertBackgroundRgb$1 = rgba(base$1.neutralInvertBase);
const overlayPrefix$1 = `rgba(${baseInvertBackgroundRgb$1.slice(0, 3).join(", ")}, `;
function overlay$1(alpha) {
  return `${overlayPrefix$1 + String(alpha)})`;
}
function neutral$1(alpha) {
  const overlayRgba = Array.from(baseInvertBackgroundRgb$1);
  overlayRgba[3] = Number(alpha);
  return composite(baseBackgroundRgb$1, overlayRgba);
}
const derived$1 = Object.assign(Object.assign({
  name: "common"
}, commonVariables$n), {
  baseColor: base$1.neutralBase,
  // primary color
  primaryColor: base$1.primaryDefault,
  primaryColorHover: base$1.primaryHover,
  primaryColorPressed: base$1.primaryActive,
  primaryColorSuppl: base$1.primarySuppl,
  // info color
  infoColor: base$1.infoDefault,
  infoColorHover: base$1.infoHover,
  infoColorPressed: base$1.infoActive,
  infoColorSuppl: base$1.infoSuppl,
  // success color
  successColor: base$1.successDefault,
  successColorHover: base$1.successHover,
  successColorPressed: base$1.successActive,
  successColorSuppl: base$1.successSuppl,
  // warning color
  warningColor: base$1.warningDefault,
  warningColorHover: base$1.warningHover,
  warningColorPressed: base$1.warningActive,
  warningColorSuppl: base$1.warningSuppl,
  // error color
  errorColor: base$1.errorDefault,
  errorColorHover: base$1.errorHover,
  errorColorPressed: base$1.errorActive,
  errorColorSuppl: base$1.errorSuppl,
  // text color
  textColorBase: base$1.neutralTextBase,
  textColor1: overlay$1(base$1.alpha1),
  textColor2: overlay$1(base$1.alpha2),
  textColor3: overlay$1(base$1.alpha3),
  // textColor4: overlay(base.alpha4), // disabled, placeholder, icon
  // textColor5: overlay(base.alpha5),
  textColorDisabled: overlay$1(base$1.alpha4),
  placeholderColor: overlay$1(base$1.alpha4),
  placeholderColorDisabled: overlay$1(base$1.alpha5),
  iconColor: overlay$1(base$1.alpha4),
  iconColorDisabled: overlay$1(base$1.alpha5),
  iconColorHover: overlay$1(Number(base$1.alpha4) * 1.25),
  iconColorPressed: overlay$1(Number(base$1.alpha4) * 0.8),
  opacity1: base$1.alpha1,
  opacity2: base$1.alpha2,
  opacity3: base$1.alpha3,
  opacity4: base$1.alpha4,
  opacity5: base$1.alpha5,
  dividerColor: overlay$1(base$1.alphaDivider),
  borderColor: overlay$1(base$1.alphaBorder),
  // close
  closeIconColorHover: overlay$1(Number(base$1.alphaClose)),
  closeIconColor: overlay$1(Number(base$1.alphaClose)),
  closeIconColorPressed: overlay$1(Number(base$1.alphaClose)),
  closeColorHover: "rgba(255, 255, 255, .12)",
  closeColorPressed: "rgba(255, 255, 255, .08)",
  // clear
  clearColor: overlay$1(base$1.alpha4),
  clearColorHover: scaleColor(overlay$1(base$1.alpha4), {
    alpha: 1.25
  }),
  clearColorPressed: scaleColor(overlay$1(base$1.alpha4), {
    alpha: 0.8
  }),
  scrollbarColor: overlay$1(base$1.alphaScrollbar),
  scrollbarColorHover: overlay$1(base$1.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: overlay$1(base$1.alphaProgressRail),
  railColor: overlay$1(base$1.alphaRail),
  popoverColor: base$1.neutralPopover,
  tableColor: base$1.neutralCard,
  cardColor: base$1.neutralCard,
  modalColor: base$1.neutralModal,
  bodyColor: base$1.neutralBody,
  tagColor: neutral$1(base$1.alphaTag),
  avatarColor: overlay$1(base$1.alphaAvatar),
  invertedColor: base$1.neutralBase,
  inputColor: overlay$1(base$1.alphaInput),
  codeColor: overlay$1(base$1.alphaCode),
  tabColor: overlay$1(base$1.alphaTab),
  actionColor: overlay$1(base$1.alphaAction),
  tableHeaderColor: overlay$1(base$1.alphaAction),
  hoverColor: overlay$1(base$1.alphaPending),
  tableColorHover: overlay$1(base$1.alphaTablePending),
  tableColorStriped: overlay$1(base$1.alphaTableStriped),
  pressedColor: overlay$1(base$1.alphaPressed),
  opacityDisabled: base$1.alphaDisabled,
  inputColorDisabled: overlay$1(base$1.alphaDisabledInput),
  buttonColor2: "rgba(255, 255, 255, .08)",
  buttonColor2Hover: "rgba(255, 255, 255, .12)",
  buttonColor2Pressed: "rgba(255, 255, 255, .08)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
});
const base = {
  neutralBase: "#FFF",
  neutralInvertBase: "#000",
  neutralTextBase: "#000",
  neutralPopover: "#fff",
  neutralCard: "#fff",
  neutralModal: "#fff",
  neutralBody: "#fff",
  alpha1: "0.82",
  alpha2: "0.72",
  alpha3: "0.38",
  alpha4: "0.24",
  // disabled text, placeholder, icon
  alpha5: "0.18",
  // disabled placeholder
  alphaClose: "0.6",
  alphaDisabled: "0.5",
  alphaDisabledInput: "0.02",
  alphaPending: "0.05",
  alphaTablePending: "0.02",
  alphaPressed: "0.07",
  alphaAvatar: "0.2",
  alphaRail: "0.14",
  alphaProgressRail: ".08",
  alphaBorder: "0.12",
  alphaDivider: "0.06",
  alphaInput: "0",
  alphaAction: "0.02",
  alphaTab: "0.04",
  alphaScrollbar: "0.25",
  alphaScrollbarHover: "0.4",
  alphaCode: "0.05",
  alphaTag: "0.02",
  // primary
  primaryHover: "#36ad6a",
  primaryDefault: "#18a058",
  primaryActive: "#0c7a43",
  primarySuppl: "#36ad6a",
  // info
  infoHover: "#4098fc",
  infoDefault: "#2080f0",
  infoActive: "#1060c9",
  infoSuppl: "#4098fc",
  // error
  errorHover: "#de576d",
  errorDefault: "#d03050",
  errorActive: "#ab1f3f",
  errorSuppl: "#de576d",
  // warning
  warningHover: "#fcb040",
  warningDefault: "#f0a020",
  warningActive: "#c97c10",
  warningSuppl: "#fcb040",
  // success
  successHover: "#36ad6a",
  successDefault: "#18a058",
  successActive: "#0c7a43",
  successSuppl: "#36ad6a"
};
const baseBackgroundRgb = rgba(base.neutralBase);
const baseInvertBackgroundRgb = rgba(base.neutralInvertBase);
const overlayPrefix = `rgba(${baseInvertBackgroundRgb.slice(0, 3).join(", ")}, `;
function overlay(alpha) {
  return `${overlayPrefix + String(alpha)})`;
}
function neutral(alpha) {
  const overlayRgba = Array.from(baseInvertBackgroundRgb);
  overlayRgba[3] = Number(alpha);
  return composite(baseBackgroundRgb, overlayRgba);
}
const derived = Object.assign(Object.assign({
  name: "common"
}, commonVariables$n), {
  baseColor: base.neutralBase,
  // primary color
  primaryColor: base.primaryDefault,
  primaryColorHover: base.primaryHover,
  primaryColorPressed: base.primaryActive,
  primaryColorSuppl: base.primarySuppl,
  // info color
  infoColor: base.infoDefault,
  infoColorHover: base.infoHover,
  infoColorPressed: base.infoActive,
  infoColorSuppl: base.infoSuppl,
  // success color
  successColor: base.successDefault,
  successColorHover: base.successHover,
  successColorPressed: base.successActive,
  successColorSuppl: base.successSuppl,
  // warning color
  warningColor: base.warningDefault,
  warningColorHover: base.warningHover,
  warningColorPressed: base.warningActive,
  warningColorSuppl: base.warningSuppl,
  // error color
  errorColor: base.errorDefault,
  errorColorHover: base.errorHover,
  errorColorPressed: base.errorActive,
  errorColorSuppl: base.errorSuppl,
  // text color
  textColorBase: base.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: neutral(base.alpha4),
  placeholderColor: neutral(base.alpha4),
  placeholderColorDisabled: neutral(base.alpha5),
  iconColor: neutral(base.alpha4),
  iconColorHover: scaleColor(neutral(base.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: scaleColor(neutral(base.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: neutral(base.alpha5),
  opacity1: base.alpha1,
  opacity2: base.alpha2,
  opacity3: base.alpha3,
  opacity4: base.alpha4,
  opacity5: base.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: neutral(Number(base.alphaClose)),
  closeIconColorHover: neutral(Number(base.alphaClose)),
  closeIconColorPressed: neutral(Number(base.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: neutral(base.alpha4),
  clearColorHover: scaleColor(neutral(base.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: scaleColor(neutral(base.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: overlay(base.alphaScrollbar),
  scrollbarColorHover: overlay(base.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: neutral(base.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: base.neutralPopover,
  tableColor: base.neutralCard,
  cardColor: base.neutralCard,
  modalColor: base.neutralModal,
  bodyColor: base.neutralBody,
  tagColor: "#eee",
  avatarColor: neutral(base.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: neutral(base.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: base.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
});
const commonVars$d = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function self$1j(vars) {
  const {
    scrollbarColor,
    scrollbarColorHover,
    scrollbarHeight,
    scrollbarWidth,
    scrollbarBorderRadius
  } = vars;
  return Object.assign(Object.assign({}, commonVars$d), {
    height: scrollbarHeight,
    width: scrollbarWidth,
    borderRadius: scrollbarBorderRadius,
    color: scrollbarColor,
    colorHover: scrollbarColorHover
  });
}
const scrollbarLight = {
  name: "Scrollbar",
  common: derived,
  self: self$1j
};
const scrollbarDark = {
  name: "Scrollbar",
  common: derived$1,
  self: self$1j
};
const style$6 = cB("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [c(">", [cB("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [c("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), c(">", [
  // We can't set overflow hidden since it affects positioning.
  cB("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), c(">, +", [cB("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [cM("horizontal", `
 height: var(--n-scrollbar-height);
 `, [c(">", [cE("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), cM("horizontal--top", `
 inset: var(--n-scrollbar-rail-inset-horizontal-top); 
 `), cM("horizontal--bottom", `
 inset: var(--n-scrollbar-rail-inset-horizontal-bottom); 
 `), cM("vertical", `
 width: var(--n-scrollbar-width);
 `, [c(">", [cE("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), cM("vertical--left", `
 inset: var(--n-scrollbar-rail-inset-vertical-left); 
 `), cM("vertical--right", `
 inset: var(--n-scrollbar-rail-inset-vertical-right); 
 `), cM("disabled", [c(">", [cE("scrollbar", "pointer-events: none;")])]), c(">", [cE("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [fadeInTransition(), c("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]);
const scrollbarProps = Object.assign(Object.assign({}, useTheme.props), {
  duration: {
    type: Number,
    default: 0
  },
  scrollable: {
    type: Boolean,
    default: true
  },
  xScrollable: Boolean,
  trigger: {
    type: String,
    default: "hover"
  },
  useUnifiedContainer: Boolean,
  triggerDisplayManually: Boolean,
  // If container is set, resize observer won't not attached
  container: Function,
  content: Function,
  containerClass: String,
  containerStyle: [String, Object],
  contentClass: [String, Array],
  contentStyle: [String, Object],
  horizontalRailStyle: [String, Object],
  verticalRailStyle: [String, Object],
  onScroll: Function,
  onWheel: Function,
  onResize: Function,
  internalOnUpdateScrollLeft: Function,
  internalHoistYRail: Boolean,
  yPlacement: {
    type: String,
    default: "right"
  },
  xPlacement: {
    type: String,
    default: "bottom"
  }
});
const Scrollbar = /* @__PURE__ */ defineComponent({
  name: "Scrollbar",
  props: scrollbarProps,
  inheritAttrs: false,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl("Scrollbar", mergedRtlRef, mergedClsPrefixRef);
    const wrapperRef = ref(null);
    const containerRef = ref(null);
    const contentRef = ref(null);
    const yRailRef = ref(null);
    const xRailRef = ref(null);
    const contentHeightRef = ref(null);
    const contentWidthRef = ref(null);
    const containerHeightRef = ref(null);
    const containerWidthRef = ref(null);
    const yRailSizeRef = ref(null);
    const xRailSizeRef = ref(null);
    const containerScrollTopRef = ref(0);
    const containerScrollLeftRef = ref(0);
    const isShowXBarRef = ref(false);
    const isShowYBarRef = ref(false);
    let yBarPressed = false;
    let xBarPressed = false;
    let xBarVanishTimerId;
    let yBarVanishTimerId;
    let memoYTop = 0;
    let memoXLeft = 0;
    let memoMouseX = 0;
    let memoMouseY = 0;
    const isIos2 = useIsIos();
    const themeRef = useTheme("Scrollbar", "-scrollbar", style$6, scrollbarLight, props, mergedClsPrefixRef);
    const yBarSizeRef = computed(() => {
      const {
        value: containerHeight
      } = containerHeightRef;
      const {
        value: contentHeight
      } = contentHeightRef;
      const {
        value: yRailSize
      } = yRailSizeRef;
      if (containerHeight === null || contentHeight === null || yRailSize === null) {
        return 0;
      } else {
        return Math.min(containerHeight, yRailSize * containerHeight / contentHeight + depx(themeRef.value.self.width) * 1.5);
      }
    });
    const yBarSizePxRef = computed(() => {
      return `${yBarSizeRef.value}px`;
    });
    const xBarSizeRef = computed(() => {
      const {
        value: containerWidth
      } = containerWidthRef;
      const {
        value: contentWidth
      } = contentWidthRef;
      const {
        value: xRailSize
      } = xRailSizeRef;
      if (containerWidth === null || contentWidth === null || xRailSize === null) {
        return 0;
      } else {
        return xRailSize * containerWidth / contentWidth + depx(themeRef.value.self.height) * 1.5;
      }
    });
    const xBarSizePxRef = computed(() => {
      return `${xBarSizeRef.value}px`;
    });
    const yBarTopRef = computed(() => {
      const {
        value: containerHeight
      } = containerHeightRef;
      const {
        value: containerScrollTop
      } = containerScrollTopRef;
      const {
        value: contentHeight
      } = contentHeightRef;
      const {
        value: yRailSize
      } = yRailSizeRef;
      if (containerHeight === null || contentHeight === null || yRailSize === null) {
        return 0;
      } else {
        const heightDiff = contentHeight - containerHeight;
        if (!heightDiff) return 0;
        return containerScrollTop / heightDiff * (yRailSize - yBarSizeRef.value);
      }
    });
    const yBarTopPxRef = computed(() => {
      return `${yBarTopRef.value}px`;
    });
    const xBarLeftRef = computed(() => {
      const {
        value: containerWidth
      } = containerWidthRef;
      const {
        value: containerScrollLeft
      } = containerScrollLeftRef;
      const {
        value: contentWidth
      } = contentWidthRef;
      const {
        value: xRailSize
      } = xRailSizeRef;
      if (containerWidth === null || contentWidth === null || xRailSize === null) {
        return 0;
      } else {
        const widthDiff = contentWidth - containerWidth;
        if (!widthDiff) return 0;
        return containerScrollLeft / widthDiff * (xRailSize - xBarSizeRef.value);
      }
    });
    const xBarLeftPxRef = computed(() => {
      return `${xBarLeftRef.value}px`;
    });
    const needYBarRef = computed(() => {
      const {
        value: containerHeight
      } = containerHeightRef;
      const {
        value: contentHeight
      } = contentHeightRef;
      return containerHeight !== null && contentHeight !== null && contentHeight > containerHeight;
    });
    const needXBarRef = computed(() => {
      const {
        value: containerWidth
      } = containerWidthRef;
      const {
        value: contentWidth
      } = contentWidthRef;
      return containerWidth !== null && contentWidth !== null && contentWidth > containerWidth;
    });
    const mergedShowXBarRef = computed(() => {
      const {
        trigger: trigger2
      } = props;
      return trigger2 === "none" || isShowXBarRef.value;
    });
    const mergedShowYBarRef = computed(() => {
      const {
        trigger: trigger2
      } = props;
      return trigger2 === "none" || isShowYBarRef.value;
    });
    const mergedContainerRef = computed(() => {
      const {
        container
      } = props;
      if (container) return container();
      return containerRef.value;
    });
    const mergedContentRef = computed(() => {
      const {
        content
      } = props;
      if (content) return content();
      return contentRef.value;
    });
    const scrollTo = (options, y) => {
      if (!props.scrollable) return;
      if (typeof options === "number") {
        scrollToPosition2(options, y !== null && y !== void 0 ? y : 0, 0, false, "auto");
        return;
      }
      const {
        left,
        top,
        index,
        elSize,
        position,
        behavior,
        el,
        debounce = true
      } = options;
      if (left !== void 0 || top !== void 0) {
        scrollToPosition2(left !== null && left !== void 0 ? left : 0, top !== null && top !== void 0 ? top : 0, 0, false, behavior);
      }
      if (el !== void 0) {
        scrollToPosition2(0, el.offsetTop, el.offsetHeight, debounce, behavior);
      } else if (index !== void 0 && elSize !== void 0) {
        scrollToPosition2(0, index * elSize, elSize, debounce, behavior);
      } else if (position === "bottom") {
        scrollToPosition2(0, Number.MAX_SAFE_INTEGER, 0, false, behavior);
      } else if (position === "top") {
        scrollToPosition2(0, 0, 0, false, behavior);
      }
    };
    const activateState = useReactivated(() => {
      if (!props.container) {
        scrollTo({
          top: containerScrollTopRef.value,
          left: containerScrollLeftRef.value
        });
      }
    });
    const handleContentResize = () => {
      if (activateState.isDeactivated) return;
      sync();
    };
    const handleContainerResize = (e) => {
      if (activateState.isDeactivated) return;
      const {
        onResize
      } = props;
      if (onResize) onResize(e);
      sync();
    };
    const scrollBy = (options, y) => {
      if (!props.scrollable) return;
      const {
        value: container
      } = mergedContainerRef;
      if (!container) return;
      if (typeof options === "object") {
        container.scrollBy(options);
      } else {
        container.scrollBy(options, y || 0);
      }
    };
    function scrollToPosition2(left, top, elSize, debounce, behavior) {
      const {
        value: container
      } = mergedContainerRef;
      if (!container) return;
      if (debounce) {
        const {
          scrollTop,
          offsetHeight
        } = container;
        if (top > scrollTop) {
          if (top + elSize <= scrollTop + offsetHeight) ;
          else {
            container.scrollTo({
              left,
              top: top + elSize - offsetHeight,
              behavior
            });
          }
          return;
        }
      }
      container.scrollTo({
        left,
        top,
        behavior
      });
    }
    function handleMouseEnterWrapper() {
      showXBar();
      showYBar();
      sync();
    }
    function handleMouseLeaveWrapper() {
      hideBar();
    }
    function hideBar() {
      hideYBar();
      hideXBar();
    }
    function hideYBar() {
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      yBarVanishTimerId = window.setTimeout(() => {
        isShowYBarRef.value = false;
      }, props.duration);
    }
    function hideXBar() {
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      xBarVanishTimerId = window.setTimeout(() => {
        isShowXBarRef.value = false;
      }, props.duration);
    }
    function showXBar() {
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      isShowXBarRef.value = true;
    }
    function showYBar() {
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      isShowYBarRef.value = true;
    }
    function handleScroll(e) {
      const {
        onScroll
      } = props;
      if (onScroll) onScroll(e);
      syncScrollState();
    }
    function syncScrollState() {
      const {
        value: container
      } = mergedContainerRef;
      if (container) {
        containerScrollTopRef.value = container.scrollTop;
        containerScrollLeftRef.value = container.scrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
      }
    }
    function syncPositionState() {
      const {
        value: content
      } = mergedContentRef;
      if (content) {
        contentHeightRef.value = content.offsetHeight;
        contentWidthRef.value = content.offsetWidth;
      }
      const {
        value: container
      } = mergedContainerRef;
      if (container) {
        containerHeightRef.value = container.offsetHeight;
        containerWidthRef.value = container.offsetWidth;
      }
      const {
        value: xRailEl
      } = xRailRef;
      const {
        value: yRailEl
      } = yRailRef;
      if (xRailEl) {
        xRailSizeRef.value = xRailEl.offsetWidth;
      }
      if (yRailEl) {
        yRailSizeRef.value = yRailEl.offsetHeight;
      }
    }
    function syncUnifiedContainer() {
      const {
        value: container
      } = mergedContainerRef;
      if (container) {
        containerScrollTopRef.value = container.scrollTop;
        containerScrollLeftRef.value = container.scrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
        containerHeightRef.value = container.offsetHeight;
        containerWidthRef.value = container.offsetWidth;
        contentHeightRef.value = container.scrollHeight;
        contentWidthRef.value = container.scrollWidth;
      }
      const {
        value: xRailEl
      } = xRailRef;
      const {
        value: yRailEl
      } = yRailRef;
      if (xRailEl) {
        xRailSizeRef.value = xRailEl.offsetWidth;
      }
      if (yRailEl) {
        yRailSizeRef.value = yRailEl.offsetHeight;
      }
    }
    function sync() {
      if (!props.scrollable) return;
      if (props.useUnifiedContainer) {
        syncUnifiedContainer();
      } else {
        syncPositionState();
        syncScrollState();
      }
    }
    function isMouseUpAway(e) {
      var _a;
      return !((_a = wrapperRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e)));
    }
    function handleXScrollMouseDown(e) {
      e.preventDefault();
      e.stopPropagation();
      xBarPressed = true;
      on("mousemove", window, handleXScrollMouseMove, true);
      on("mouseup", window, handleXScrollMouseUp, true);
      memoXLeft = containerScrollLeftRef.value;
      memoMouseX = (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? window.innerWidth - e.clientX : e.clientX;
    }
    function handleXScrollMouseMove(e) {
      if (!xBarPressed) return;
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      const {
        value: containerWidth
      } = containerWidthRef;
      const {
        value: contentWidth
      } = contentWidthRef;
      const {
        value: xBarSize
      } = xBarSizeRef;
      if (containerWidth === null || contentWidth === null) return;
      const dX = (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? window.innerWidth - e.clientX - memoMouseX : e.clientX - memoMouseX;
      const dScrollLeft = dX * (contentWidth - containerWidth) / (containerWidth - xBarSize);
      const toScrollLeftUpperBound = contentWidth - containerWidth;
      let toScrollLeft = memoXLeft + dScrollLeft;
      toScrollLeft = Math.min(toScrollLeftUpperBound, toScrollLeft);
      toScrollLeft = Math.max(toScrollLeft, 0);
      const {
        value: container
      } = mergedContainerRef;
      if (container) {
        container.scrollLeft = toScrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
        const {
          internalOnUpdateScrollLeft
        } = props;
        if (internalOnUpdateScrollLeft) internalOnUpdateScrollLeft(toScrollLeft);
      }
    }
    function handleXScrollMouseUp(e) {
      e.preventDefault();
      e.stopPropagation();
      off("mousemove", window, handleXScrollMouseMove, true);
      off("mouseup", window, handleXScrollMouseUp, true);
      xBarPressed = false;
      sync();
      if (isMouseUpAway(e)) {
        hideBar();
      }
    }
    function handleYScrollMouseDown(e) {
      e.preventDefault();
      e.stopPropagation();
      yBarPressed = true;
      on("mousemove", window, handleYScrollMouseMove, true);
      on("mouseup", window, handleYScrollMouseUp, true);
      memoYTop = containerScrollTopRef.value;
      memoMouseY = e.clientY;
    }
    function handleYScrollMouseMove(e) {
      if (!yBarPressed) return;
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      const {
        value: containerHeight
      } = containerHeightRef;
      const {
        value: contentHeight
      } = contentHeightRef;
      const {
        value: yBarSize
      } = yBarSizeRef;
      if (containerHeight === null || contentHeight === null) return;
      const dY = e.clientY - memoMouseY;
      const dScrollTop = dY * (contentHeight - containerHeight) / (containerHeight - yBarSize);
      const toScrollTopUpperBound = contentHeight - containerHeight;
      let toScrollTop = memoYTop + dScrollTop;
      toScrollTop = Math.min(toScrollTopUpperBound, toScrollTop);
      toScrollTop = Math.max(toScrollTop, 0);
      const {
        value: container
      } = mergedContainerRef;
      if (container) {
        container.scrollTop = toScrollTop;
      }
    }
    function handleYScrollMouseUp(e) {
      e.preventDefault();
      e.stopPropagation();
      off("mousemove", window, handleYScrollMouseMove, true);
      off("mouseup", window, handleYScrollMouseUp, true);
      yBarPressed = false;
      sync();
      if (isMouseUpAway(e)) {
        hideBar();
      }
    }
    watchEffect(() => {
      const {
        value: needXBar
      } = needXBarRef;
      const {
        value: needYBar
      } = needYBarRef;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      const {
        value: xRailEl
      } = xRailRef;
      const {
        value: yRailEl
      } = yRailRef;
      if (xRailEl) {
        if (!needXBar) {
          xRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        } else {
          xRailEl.classList.remove(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        }
      }
      if (yRailEl) {
        if (!needYBar) {
          yRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        } else {
          yRailEl.classList.remove(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        }
      }
    });
    onMounted(() => {
      if (props.container) return;
      sync();
    });
    onBeforeUnmount(() => {
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      off("mousemove", window, handleYScrollMouseMove, true);
      off("mouseup", window, handleYScrollMouseUp, true);
    });
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: {
          color,
          colorHover,
          height,
          width,
          borderRadius,
          railInsetHorizontalTop,
          railInsetHorizontalBottom,
          railInsetVerticalRight,
          railInsetVerticalLeft,
          railColor
        }
      } = themeRef.value;
      return {
        "--n-scrollbar-bezier": cubicBezierEaseInOut2,
        "--n-scrollbar-color": color,
        "--n-scrollbar-color-hover": colorHover,
        "--n-scrollbar-border-radius": borderRadius,
        "--n-scrollbar-width": width,
        "--n-scrollbar-height": height,
        "--n-scrollbar-rail-inset-horizontal-top": railInsetHorizontalTop,
        "--n-scrollbar-rail-inset-horizontal-bottom": railInsetHorizontalBottom,
        "--n-scrollbar-rail-inset-vertical-right": (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? rtlInset(railInsetVerticalRight) : railInsetVerticalRight,
        "--n-scrollbar-rail-inset-vertical-left": (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? rtlInset(railInsetVerticalLeft) : railInsetVerticalLeft,
        "--n-scrollbar-rail-color": railColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("scrollbar", void 0, cssVarsRef, props) : void 0;
    const exposedMethods = {
      scrollTo,
      scrollBy,
      sync,
      syncUnifiedContainer,
      handleMouseEnterWrapper,
      handleMouseLeaveWrapper
    };
    return Object.assign(Object.assign({}, exposedMethods), {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      containerScrollTop: containerScrollTopRef,
      wrapperRef,
      containerRef,
      contentRef,
      yRailRef,
      xRailRef,
      needYBar: needYBarRef,
      needXBar: needXBarRef,
      yBarSizePx: yBarSizePxRef,
      xBarSizePx: xBarSizePxRef,
      yBarTopPx: yBarTopPxRef,
      xBarLeftPx: xBarLeftPxRef,
      isShowXBar: mergedShowXBarRef,
      isShowYBar: mergedShowYBarRef,
      isIos: isIos2,
      handleScroll,
      handleContentResize,
      handleContainerResize,
      handleYScrollMouseDown,
      handleXScrollMouseDown,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a;
    const {
      $slots,
      mergedClsPrefix,
      triggerDisplayManually,
      rtlEnabled,
      internalHoistYRail,
      yPlacement,
      xPlacement,
      xScrollable
    } = this;
    if (!this.scrollable) return (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots);
    const triggerIsNone = this.trigger === "none";
    const createYRail = (className, style2) => {
      return h("div", {
        ref: "yRailRef",
        class: [`${mergedClsPrefix}-scrollbar-rail`, `${mergedClsPrefix}-scrollbar-rail--vertical`, `${mergedClsPrefix}-scrollbar-rail--vertical--${yPlacement}`, className],
        "data-scrollbar-rail": true,
        style: [style2 || "", this.verticalRailStyle],
        "aria-hidden": true
      }, h(triggerIsNone ? Wrapper : Transition, triggerIsNone ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needYBar && this.isShowYBar && !this.isIos ? h("div", {
          class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`,
          style: {
            height: this.yBarSizePx,
            top: this.yBarTopPx
          },
          onMousedown: this.handleYScrollMouseDown
        }) : null
      }));
    };
    const createChildren = () => {
      var _a2, _b;
      (_a2 = this.onRender) === null || _a2 === void 0 ? void 0 : _a2.call(this);
      return h("div", mergeProps(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${mergedClsPrefix}-scrollbar`, this.themeClass, rtlEnabled && `${mergedClsPrefix}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: triggerDisplayManually ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: triggerDisplayManually ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (_b = $slots.default) === null || _b === void 0 ? void 0 : _b.call($slots) : h("div", {
        role: "none",
        ref: "containerRef",
        class: [`${mergedClsPrefix}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, h(VResizeObserver, {
        onResize: this.handleContentResize
      }, {
        default: () => h("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${mergedClsPrefix}-scrollbar-content`, this.contentClass]
        }, $slots)
      })), internalHoistYRail ? null : createYRail(void 0, void 0), xScrollable && h("div", {
        ref: "xRailRef",
        class: [`${mergedClsPrefix}-scrollbar-rail`, `${mergedClsPrefix}-scrollbar-rail--horizontal`, `${mergedClsPrefix}-scrollbar-rail--horizontal--${xPlacement}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": true,
        "aria-hidden": true
      }, h(triggerIsNone ? Wrapper : Transition, triggerIsNone ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? h("div", {
          class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: rtlEnabled ? this.xBarLeftPx : void 0,
            left: rtlEnabled ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    };
    const scrollbarNode = this.container ? createChildren() : h(VResizeObserver, {
      onResize: this.handleContainerResize
    }, {
      default: createChildren
    });
    if (internalHoistYRail) {
      return h(Fragment, null, scrollbarNode, createYRail(this.themeClass, this.cssVars));
    } else {
      return scrollbarNode;
    }
  }
});
const XScrollbar = Scrollbar;
const commonVars$c = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function self$1i(vars) {
  const {
    textColorDisabled,
    iconColor,
    textColor2,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge
  } = vars;
  return Object.assign(Object.assign({}, commonVars$c), {
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge,
    textColor: textColorDisabled,
    iconColor,
    extraTextColor: textColor2
  });
}
const emptyLight = {
  name: "Empty",
  common: derived,
  self: self$1i
};
const emptyDark = {
  name: "Empty",
  common: derived$1,
  self: self$1i
};
const commonVariables$m = {
  height: "calc(var(--n-option-height) * 7.6)",
  paddingTiny: "4px 0",
  paddingSmall: "4px 0",
  paddingMedium: "4px 0",
  paddingLarge: "4px 0",
  paddingHuge: "4px 0",
  optionPaddingTiny: "0 12px",
  optionPaddingSmall: "0 12px",
  optionPaddingMedium: "0 12px",
  optionPaddingLarge: "0 12px",
  optionPaddingHuge: "0 12px",
  loadingSize: "18px"
};
function self$1h(vars) {
  const {
    borderRadius,
    popoverColor,
    textColor3,
    dividerColor,
    textColor2,
    primaryColorPressed,
    textColorDisabled,
    primaryColor,
    opacityDisabled,
    hoverColor,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$m), {
    optionFontSizeTiny: fontSizeTiny,
    optionFontSizeSmall: fontSizeSmall,
    optionFontSizeMedium: fontSizeMedium,
    optionFontSizeLarge: fontSizeLarge,
    optionFontSizeHuge: fontSizeHuge,
    optionHeightTiny: heightTiny,
    optionHeightSmall: heightSmall,
    optionHeightMedium: heightMedium,
    optionHeightLarge: heightLarge,
    optionHeightHuge: heightHuge,
    borderRadius,
    color: popoverColor,
    groupHeaderTextColor: textColor3,
    actionDividerColor: dividerColor,
    optionTextColor: textColor2,
    optionTextColorPressed: primaryColorPressed,
    optionTextColorDisabled: textColorDisabled,
    optionTextColorActive: primaryColor,
    optionOpacityDisabled: opacityDisabled,
    optionCheckColor: primaryColor,
    optionColorPending: hoverColor,
    optionColorActive: "rgba(0, 0, 0, 0)",
    optionColorActivePending: hoverColor,
    actionTextColor: textColor2,
    loadingColor: primaryColor
  });
}
const internalSelectMenuLight = createTheme({
  name: "InternalSelectMenu",
  common: derived,
  peers: {
    Scrollbar: scrollbarLight,
    Empty: emptyLight
  },
  self: self$1h
});
const internalSelectMenuDark = {
  name: "InternalSelectMenu",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarDark,
    Empty: emptyDark
  },
  self: self$1h
};
const {
  cubicBezierEaseIn,
  cubicBezierEaseOut
} = commonVariables$n;
function fadeInScaleUpTransition({
  transformOrigin = "inherit",
  duration: duration2 = ".2s",
  enterScale = ".9",
  originalTransform = "",
  originalTransition = ""
} = {}) {
  return [c("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin,
    transition: `opacity ${duration2} ${cubicBezierEaseIn}, transform ${duration2} ${cubicBezierEaseIn} ${originalTransition && `,${originalTransition}`}`
  }), c("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin,
    transition: `opacity ${duration2} ${cubicBezierEaseOut}, transform ${duration2} ${cubicBezierEaseOut} ${originalTransition && `,${originalTransition}`}`
  }), c("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${originalTransform} scale(${enterScale})`
  }), c("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${originalTransform} scale(1)`
  })];
}
const commonVariables$l = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function self$1g(vars) {
  const {
    boxShadow2,
    popoverColor,
    textColor2,
    borderRadius,
    fontSize: fontSize2,
    dividerColor
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$l), {
    fontSize: fontSize2,
    borderRadius,
    color: popoverColor,
    dividerColor,
    textColor: textColor2,
    boxShadow: boxShadow2
  });
}
const popoverLight = {
  name: "Popover",
  common: derived,
  self: self$1g
};
const popoverDark = {
  name: "Popover",
  common: derived$1,
  self: self$1g
};
const commonVariables$k = {
  closeIconSizeTiny: "12px",
  closeIconSizeSmall: "12px",
  closeIconSizeMedium: "14px",
  closeIconSizeLarge: "14px",
  closeSizeTiny: "16px",
  closeSizeSmall: "16px",
  closeSizeMedium: "18px",
  closeSizeLarge: "18px",
  padding: "0 7px",
  closeMargin: "0 0 0 4px"
};
const tagDark = {
  name: "Tag",
  common: derived$1,
  self(vars) {
    const {
      textColor2,
      primaryColorHover,
      primaryColorPressed,
      primaryColor,
      infoColor,
      successColor,
      warningColor,
      errorColor,
      baseColor,
      borderColor,
      tagColor,
      opacityDisabled,
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed,
      closeColorHover,
      closeColorPressed,
      borderRadiusSmall: borderRadius,
      fontSizeMini,
      fontSizeTiny,
      fontSizeSmall,
      fontSizeMedium,
      heightMini,
      heightTiny,
      heightSmall,
      heightMedium,
      buttonColor2Hover,
      buttonColor2Pressed,
      fontWeightStrong
    } = vars;
    return Object.assign(Object.assign({}, commonVariables$k), {
      closeBorderRadius: borderRadius,
      heightTiny: heightMini,
      heightSmall: heightTiny,
      heightMedium: heightSmall,
      heightLarge: heightMedium,
      borderRadius,
      opacityDisabled,
      fontSizeTiny: fontSizeMini,
      fontSizeSmall: fontSizeTiny,
      fontSizeMedium: fontSizeSmall,
      fontSizeLarge: fontSizeMedium,
      fontWeightStrong,
      // checked
      textColorCheckable: textColor2,
      textColorHoverCheckable: textColor2,
      textColorPressedCheckable: textColor2,
      textColorChecked: baseColor,
      colorCheckable: "#0000",
      colorHoverCheckable: buttonColor2Hover,
      colorPressedCheckable: buttonColor2Pressed,
      colorChecked: primaryColor,
      colorCheckedHover: primaryColorHover,
      colorCheckedPressed: primaryColorPressed,
      // default
      border: `1px solid ${borderColor}`,
      textColor: textColor2,
      color: tagColor,
      colorBordered: "#0000",
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed,
      closeColorHover,
      closeColorPressed,
      borderPrimary: `1px solid ${changeColor(primaryColor, {
        alpha: 0.3
      })}`,
      textColorPrimary: primaryColor,
      colorPrimary: changeColor(primaryColor, {
        alpha: 0.16
      }),
      colorBorderedPrimary: "#0000",
      closeIconColorPrimary: scaleColor(primaryColor, {
        lightness: 0.7
      }),
      closeIconColorHoverPrimary: scaleColor(primaryColor, {
        lightness: 0.7
      }),
      closeIconColorPressedPrimary: scaleColor(primaryColor, {
        lightness: 0.7
      }),
      closeColorHoverPrimary: changeColor(primaryColor, {
        alpha: 0.16
      }),
      closeColorPressedPrimary: changeColor(primaryColor, {
        alpha: 0.12
      }),
      borderInfo: `1px solid ${changeColor(infoColor, {
        alpha: 0.3
      })}`,
      textColorInfo: infoColor,
      colorInfo: changeColor(infoColor, {
        alpha: 0.16
      }),
      colorBorderedInfo: "#0000",
      closeIconColorInfo: scaleColor(infoColor, {
        alpha: 0.7
      }),
      closeIconColorHoverInfo: scaleColor(infoColor, {
        alpha: 0.7
      }),
      closeIconColorPressedInfo: scaleColor(infoColor, {
        alpha: 0.7
      }),
      closeColorHoverInfo: changeColor(infoColor, {
        alpha: 0.16
      }),
      closeColorPressedInfo: changeColor(infoColor, {
        alpha: 0.12
      }),
      borderSuccess: `1px solid ${changeColor(successColor, {
        alpha: 0.3
      })}`,
      textColorSuccess: successColor,
      colorSuccess: changeColor(successColor, {
        alpha: 0.16
      }),
      colorBorderedSuccess: "#0000",
      closeIconColorSuccess: scaleColor(successColor, {
        alpha: 0.7
      }),
      closeIconColorHoverSuccess: scaleColor(successColor, {
        alpha: 0.7
      }),
      closeIconColorPressedSuccess: scaleColor(successColor, {
        alpha: 0.7
      }),
      closeColorHoverSuccess: changeColor(successColor, {
        alpha: 0.16
      }),
      closeColorPressedSuccess: changeColor(successColor, {
        alpha: 0.12
      }),
      borderWarning: `1px solid ${changeColor(warningColor, {
        alpha: 0.3
      })}`,
      textColorWarning: warningColor,
      colorWarning: changeColor(warningColor, {
        alpha: 0.16
      }),
      colorBorderedWarning: "#0000",
      closeIconColorWarning: scaleColor(warningColor, {
        alpha: 0.7
      }),
      closeIconColorHoverWarning: scaleColor(warningColor, {
        alpha: 0.7
      }),
      closeIconColorPressedWarning: scaleColor(warningColor, {
        alpha: 0.7
      }),
      closeColorHoverWarning: changeColor(warningColor, {
        alpha: 0.16
      }),
      closeColorPressedWarning: changeColor(warningColor, {
        alpha: 0.11
      }),
      borderError: `1px solid ${changeColor(errorColor, {
        alpha: 0.3
      })}`,
      textColorError: errorColor,
      colorError: changeColor(errorColor, {
        alpha: 0.16
      }),
      colorBorderedError: "#0000",
      closeIconColorError: scaleColor(errorColor, {
        alpha: 0.7
      }),
      closeIconColorHoverError: scaleColor(errorColor, {
        alpha: 0.7
      }),
      closeIconColorPressedError: scaleColor(errorColor, {
        alpha: 0.7
      }),
      closeColorHoverError: changeColor(errorColor, {
        alpha: 0.16
      }),
      closeColorPressedError: changeColor(errorColor, {
        alpha: 0.12
      })
    });
  }
};
function self$1f(vars) {
  const {
    textColor2,
    primaryColorHover,
    primaryColorPressed,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    errorColor,
    baseColor,
    borderColor,
    opacityDisabled,
    tagColor,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    borderRadiusSmall: borderRadius,
    fontSizeMini,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    heightMini,
    heightTiny,
    heightSmall,
    heightMedium,
    closeColorHover,
    closeColorPressed,
    buttonColor2Hover,
    buttonColor2Pressed,
    fontWeightStrong
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$k), {
    closeBorderRadius: borderRadius,
    heightTiny: heightMini,
    heightSmall: heightTiny,
    heightMedium: heightSmall,
    heightLarge: heightMedium,
    borderRadius,
    opacityDisabled,
    fontSizeTiny: fontSizeMini,
    fontSizeSmall: fontSizeTiny,
    fontSizeMedium: fontSizeSmall,
    fontSizeLarge: fontSizeMedium,
    fontWeightStrong,
    // checked
    textColorCheckable: textColor2,
    textColorHoverCheckable: textColor2,
    textColorPressedCheckable: textColor2,
    textColorChecked: baseColor,
    colorCheckable: "#0000",
    colorHoverCheckable: buttonColor2Hover,
    colorPressedCheckable: buttonColor2Pressed,
    colorChecked: primaryColor,
    colorCheckedHover: primaryColorHover,
    colorCheckedPressed: primaryColorPressed,
    // default
    border: `1px solid ${borderColor}`,
    textColor: textColor2,
    color: tagColor,
    colorBordered: "rgb(250, 250, 252)",
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    borderPrimary: `1px solid ${changeColor(primaryColor, {
      alpha: 0.3
    })}`,
    textColorPrimary: primaryColor,
    colorPrimary: changeColor(primaryColor, {
      alpha: 0.12
    }),
    colorBorderedPrimary: changeColor(primaryColor, {
      alpha: 0.1
    }),
    closeIconColorPrimary: primaryColor,
    closeIconColorHoverPrimary: primaryColor,
    closeIconColorPressedPrimary: primaryColor,
    closeColorHoverPrimary: changeColor(primaryColor, {
      alpha: 0.12
    }),
    closeColorPressedPrimary: changeColor(primaryColor, {
      alpha: 0.18
    }),
    borderInfo: `1px solid ${changeColor(infoColor, {
      alpha: 0.3
    })}`,
    textColorInfo: infoColor,
    colorInfo: changeColor(infoColor, {
      alpha: 0.12
    }),
    colorBorderedInfo: changeColor(infoColor, {
      alpha: 0.1
    }),
    closeIconColorInfo: infoColor,
    closeIconColorHoverInfo: infoColor,
    closeIconColorPressedInfo: infoColor,
    closeColorHoverInfo: changeColor(infoColor, {
      alpha: 0.12
    }),
    closeColorPressedInfo: changeColor(infoColor, {
      alpha: 0.18
    }),
    borderSuccess: `1px solid ${changeColor(successColor, {
      alpha: 0.3
    })}`,
    textColorSuccess: successColor,
    colorSuccess: changeColor(successColor, {
      alpha: 0.12
    }),
    colorBorderedSuccess: changeColor(successColor, {
      alpha: 0.1
    }),
    closeIconColorSuccess: successColor,
    closeIconColorHoverSuccess: successColor,
    closeIconColorPressedSuccess: successColor,
    closeColorHoverSuccess: changeColor(successColor, {
      alpha: 0.12
    }),
    closeColorPressedSuccess: changeColor(successColor, {
      alpha: 0.18
    }),
    borderWarning: `1px solid ${changeColor(warningColor, {
      alpha: 0.35
    })}`,
    textColorWarning: warningColor,
    colorWarning: changeColor(warningColor, {
      alpha: 0.15
    }),
    colorBorderedWarning: changeColor(warningColor, {
      alpha: 0.12
    }),
    closeIconColorWarning: warningColor,
    closeIconColorHoverWarning: warningColor,
    closeIconColorPressedWarning: warningColor,
    closeColorHoverWarning: changeColor(warningColor, {
      alpha: 0.12
    }),
    closeColorPressedWarning: changeColor(warningColor, {
      alpha: 0.18
    }),
    borderError: `1px solid ${changeColor(errorColor, {
      alpha: 0.23
    })}`,
    textColorError: errorColor,
    colorError: changeColor(errorColor, {
      alpha: 0.1
    }),
    colorBorderedError: changeColor(errorColor, {
      alpha: 0.08
    }),
    closeIconColorError: errorColor,
    closeIconColorHoverError: errorColor,
    closeIconColorPressedError: errorColor,
    closeColorHoverError: changeColor(errorColor, {
      alpha: 0.12
    }),
    closeColorPressedError: changeColor(errorColor, {
      alpha: 0.18
    })
  });
}
const tagLight = {
  name: "Tag",
  common: derived,
  self: self$1f
};
const commonVariables$j = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
const internalSelectionDark = {
  name: "InternalSelection",
  common: derived$1,
  peers: {
    Popover: popoverDark
  },
  self(vars) {
    const {
      borderRadius,
      textColor2,
      textColorDisabled,
      inputColor,
      inputColorDisabled,
      primaryColor,
      primaryColorHover,
      warningColor,
      warningColorHover,
      errorColor,
      errorColorHover,
      iconColor,
      iconColorDisabled,
      clearColor,
      clearColorHover,
      clearColorPressed,
      placeholderColor,
      placeholderColorDisabled,
      fontSizeTiny,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      heightTiny,
      heightSmall,
      heightMedium,
      heightLarge,
      fontWeight
    } = vars;
    return Object.assign(Object.assign({}, commonVariables$j), {
      fontWeight,
      fontSizeTiny,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      heightTiny,
      heightSmall,
      heightMedium,
      heightLarge,
      borderRadius,
      // default
      textColor: textColor2,
      textColorDisabled,
      placeholderColor,
      placeholderColorDisabled,
      color: inputColor,
      colorDisabled: inputColorDisabled,
      colorActive: changeColor(primaryColor, {
        alpha: 0.1
      }),
      border: "1px solid #0000",
      borderHover: `1px solid ${primaryColorHover}`,
      borderActive: `1px solid ${primaryColor}`,
      borderFocus: `1px solid ${primaryColorHover}`,
      boxShadowHover: "none",
      boxShadowActive: `0 0 8px 0 ${changeColor(primaryColor, {
        alpha: 0.4
      })}`,
      boxShadowFocus: `0 0 8px 0 ${changeColor(primaryColor, {
        alpha: 0.4
      })}`,
      caretColor: primaryColor,
      arrowColor: iconColor,
      arrowColorDisabled: iconColorDisabled,
      loadingColor: primaryColor,
      // warning
      borderWarning: `1px solid ${warningColor}`,
      borderHoverWarning: `1px solid ${warningColorHover}`,
      borderActiveWarning: `1px solid ${warningColor}`,
      borderFocusWarning: `1px solid ${warningColorHover}`,
      boxShadowHoverWarning: "none",
      boxShadowActiveWarning: `0 0 8px 0 ${changeColor(warningColor, {
        alpha: 0.4
      })}`,
      boxShadowFocusWarning: `0 0 8px 0 ${changeColor(warningColor, {
        alpha: 0.4
      })}`,
      colorActiveWarning: changeColor(warningColor, {
        alpha: 0.1
      }),
      caretColorWarning: warningColor,
      // error
      borderError: `1px solid ${errorColor}`,
      borderHoverError: `1px solid ${errorColorHover}`,
      borderActiveError: `1px solid ${errorColor}`,
      borderFocusError: `1px solid ${errorColorHover}`,
      boxShadowHoverError: "none",
      boxShadowActiveError: `0 0 8px 0 ${changeColor(errorColor, {
        alpha: 0.4
      })}`,
      boxShadowFocusError: `0 0 8px 0 ${changeColor(errorColor, {
        alpha: 0.4
      })}`,
      colorActiveError: changeColor(errorColor, {
        alpha: 0.1
      }),
      caretColorError: errorColor,
      clearColor,
      clearColorHover,
      clearColorPressed
    });
  }
};
function self$1e(vars) {
  const {
    borderRadius,
    textColor2,
    textColorDisabled,
    inputColor,
    inputColorDisabled,
    primaryColor,
    primaryColorHover,
    warningColor,
    warningColorHover,
    errorColor,
    errorColorHover,
    borderColor,
    iconColor,
    iconColorDisabled,
    clearColor,
    clearColorHover,
    clearColorPressed,
    placeholderColor,
    placeholderColorDisabled,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    fontWeight
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$j), {
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    borderRadius,
    fontWeight,
    // default
    textColor: textColor2,
    textColorDisabled,
    placeholderColor,
    placeholderColorDisabled,
    color: inputColor,
    colorDisabled: inputColorDisabled,
    colorActive: inputColor,
    border: `1px solid ${borderColor}`,
    borderHover: `1px solid ${primaryColorHover}`,
    borderActive: `1px solid ${primaryColor}`,
    borderFocus: `1px solid ${primaryColorHover}`,
    boxShadowHover: "none",
    boxShadowActive: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    caretColor: primaryColor,
    arrowColor: iconColor,
    arrowColorDisabled: iconColorDisabled,
    loadingColor: primaryColor,
    // warning
    borderWarning: `1px solid ${warningColor}`,
    borderHoverWarning: `1px solid ${warningColorHover}`,
    borderActiveWarning: `1px solid ${warningColor}`,
    borderFocusWarning: `1px solid ${warningColorHover}`,
    boxShadowHoverWarning: "none",
    boxShadowActiveWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    boxShadowFocusWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    colorActiveWarning: inputColor,
    caretColorWarning: warningColor,
    // error
    borderError: `1px solid ${errorColor}`,
    borderHoverError: `1px solid ${errorColorHover}`,
    borderActiveError: `1px solid ${errorColor}`,
    borderFocusError: `1px solid ${errorColorHover}`,
    boxShadowHoverError: "none",
    boxShadowActiveError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    colorActiveError: inputColor,
    caretColorError: errorColor,
    clearColor,
    clearColorHover,
    clearColorPressed
  });
}
const internalSelectionLight = createTheme({
  name: "InternalSelection",
  common: derived,
  peers: {
    Popover: popoverLight
  },
  self: self$1e
});
const {
  cubicBezierEaseInOut
} = commonVariables$n;
function fadeInWidthExpandTransition({
  duration: duration2 = ".2s",
  delay = ".1s"
} = {}) {
  return [c("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", {
    opacity: 1
  }), c("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), c("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${duration2} ${cubicBezierEaseInOut},
 max-width ${duration2} ${cubicBezierEaseInOut} ${delay},
 margin-left ${duration2} ${cubicBezierEaseInOut} ${delay},
 margin-right ${duration2} ${cubicBezierEaseInOut} ${delay};
 `), c("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${duration2} ${cubicBezierEaseInOut} ${delay},
 max-width ${duration2} ${cubicBezierEaseInOut},
 margin-left ${duration2} ${cubicBezierEaseInOut},
 margin-right ${duration2} ${cubicBezierEaseInOut};
 `)];
}
const style$5 = cB("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`);
const NBaseWave = /* @__PURE__ */ defineComponent({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: true
    }
  },
  setup(props) {
    useStyle("-base-wave", style$5, toRef(props, "clsPrefix"));
    const selfRef = ref(null);
    const activeRef = ref(false);
    let animationTimerId = null;
    onBeforeUnmount(() => {
      if (animationTimerId !== null) {
        window.clearTimeout(animationTimerId);
      }
    });
    return {
      active: activeRef,
      selfRef,
      play() {
        if (animationTimerId !== null) {
          window.clearTimeout(animationTimerId);
          activeRef.value = false;
          animationTimerId = null;
        }
        void nextTick(() => {
          var _a;
          void ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.offsetHeight);
          activeRef.value = true;
          animationTimerId = window.setTimeout(() => {
            activeRef.value = false;
            animationTimerId = null;
          }, 1e3);
        });
      }
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      ref: "selfRef",
      "aria-hidden": true,
      class: [`${clsPrefix}-base-wave`, this.active && `${clsPrefix}-base-wave--active`]
    });
  }
});
const commonVars$b = {
  iconMargin: "11px 8px 0 12px",
  iconMarginRtl: "11px 12px 0 8px",
  iconSize: "24px",
  closeIconSize: "16px",
  closeSize: "20px",
  closeMargin: "13px 14px 0 0",
  closeMarginRtl: "13px 0 0 14px",
  padding: "13px"
};
const alertDark = {
  name: "Alert",
  common: derived$1,
  self(vars) {
    const {
      lineHeight: lineHeight2,
      borderRadius,
      fontWeightStrong,
      dividerColor,
      inputColor,
      textColor1,
      textColor2,
      closeColorHover,
      closeColorPressed,
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed,
      infoColorSuppl,
      successColorSuppl,
      warningColorSuppl,
      errorColorSuppl,
      fontSize: fontSize2
    } = vars;
    return Object.assign(Object.assign({}, commonVars$b), {
      fontSize: fontSize2,
      lineHeight: lineHeight2,
      titleFontWeight: fontWeightStrong,
      borderRadius,
      border: `1px solid ${dividerColor}`,
      color: inputColor,
      titleTextColor: textColor1,
      iconColor: textColor2,
      contentTextColor: textColor2,
      closeBorderRadius: borderRadius,
      closeColorHover,
      closeColorPressed,
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed,
      borderInfo: `1px solid ${changeColor(infoColorSuppl, {
        alpha: 0.35
      })}`,
      colorInfo: changeColor(infoColorSuppl, {
        alpha: 0.25
      }),
      titleTextColorInfo: textColor1,
      iconColorInfo: infoColorSuppl,
      contentTextColorInfo: textColor2,
      closeColorHoverInfo: closeColorHover,
      closeColorPressedInfo: closeColorPressed,
      closeIconColorInfo: closeIconColor,
      closeIconColorHoverInfo: closeIconColorHover,
      closeIconColorPressedInfo: closeIconColorPressed,
      borderSuccess: `1px solid ${changeColor(successColorSuppl, {
        alpha: 0.35
      })}`,
      colorSuccess: changeColor(successColorSuppl, {
        alpha: 0.25
      }),
      titleTextColorSuccess: textColor1,
      iconColorSuccess: successColorSuppl,
      contentTextColorSuccess: textColor2,
      closeColorHoverSuccess: closeColorHover,
      closeColorPressedSuccess: closeColorPressed,
      closeIconColorSuccess: closeIconColor,
      closeIconColorHoverSuccess: closeIconColorHover,
      closeIconColorPressedSuccess: closeIconColorPressed,
      borderWarning: `1px solid ${changeColor(warningColorSuppl, {
        alpha: 0.35
      })}`,
      colorWarning: changeColor(warningColorSuppl, {
        alpha: 0.25
      }),
      titleTextColorWarning: textColor1,
      iconColorWarning: warningColorSuppl,
      contentTextColorWarning: textColor2,
      closeColorHoverWarning: closeColorHover,
      closeColorPressedWarning: closeColorPressed,
      closeIconColorWarning: closeIconColor,
      closeIconColorHoverWarning: closeIconColorHover,
      closeIconColorPressedWarning: closeIconColorPressed,
      borderError: `1px solid ${changeColor(errorColorSuppl, {
        alpha: 0.35
      })}`,
      colorError: changeColor(errorColorSuppl, {
        alpha: 0.25
      }),
      titleTextColorError: textColor1,
      iconColorError: errorColorSuppl,
      contentTextColorError: textColor2,
      closeColorHoverError: closeColorHover,
      closeColorPressedError: closeColorPressed,
      closeIconColorError: closeIconColor,
      closeIconColorHoverError: closeIconColorHover,
      closeIconColorPressedError: closeIconColorPressed
    });
  }
};
function self$1d(vars) {
  const {
    lineHeight: lineHeight2,
    borderRadius,
    fontWeightStrong,
    baseColor,
    dividerColor,
    actionColor,
    textColor1,
    textColor2,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    infoColor,
    successColor,
    warningColor,
    errorColor,
    fontSize: fontSize2
  } = vars;
  return Object.assign(Object.assign({}, commonVars$b), {
    fontSize: fontSize2,
    lineHeight: lineHeight2,
    titleFontWeight: fontWeightStrong,
    borderRadius,
    border: `1px solid ${dividerColor}`,
    color: actionColor,
    titleTextColor: textColor1,
    iconColor: textColor2,
    contentTextColor: textColor2,
    closeBorderRadius: borderRadius,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    borderInfo: `1px solid ${composite(baseColor, changeColor(infoColor, {
      alpha: 0.25
    }))}`,
    colorInfo: composite(baseColor, changeColor(infoColor, {
      alpha: 0.08
    })),
    titleTextColorInfo: textColor1,
    iconColorInfo: infoColor,
    contentTextColorInfo: textColor2,
    closeColorHoverInfo: closeColorHover,
    closeColorPressedInfo: closeColorPressed,
    closeIconColorInfo: closeIconColor,
    closeIconColorHoverInfo: closeIconColorHover,
    closeIconColorPressedInfo: closeIconColorPressed,
    borderSuccess: `1px solid ${composite(baseColor, changeColor(successColor, {
      alpha: 0.25
    }))}`,
    colorSuccess: composite(baseColor, changeColor(successColor, {
      alpha: 0.08
    })),
    titleTextColorSuccess: textColor1,
    iconColorSuccess: successColor,
    contentTextColorSuccess: textColor2,
    closeColorHoverSuccess: closeColorHover,
    closeColorPressedSuccess: closeColorPressed,
    closeIconColorSuccess: closeIconColor,
    closeIconColorHoverSuccess: closeIconColorHover,
    closeIconColorPressedSuccess: closeIconColorPressed,
    borderWarning: `1px solid ${composite(baseColor, changeColor(warningColor, {
      alpha: 0.33
    }))}`,
    colorWarning: composite(baseColor, changeColor(warningColor, {
      alpha: 0.08
    })),
    titleTextColorWarning: textColor1,
    iconColorWarning: warningColor,
    contentTextColorWarning: textColor2,
    closeColorHoverWarning: closeColorHover,
    closeColorPressedWarning: closeColorPressed,
    closeIconColorWarning: closeIconColor,
    closeIconColorHoverWarning: closeIconColorHover,
    closeIconColorPressedWarning: closeIconColorPressed,
    borderError: `1px solid ${composite(baseColor, changeColor(errorColor, {
      alpha: 0.25
    }))}`,
    colorError: composite(baseColor, changeColor(errorColor, {
      alpha: 0.08
    })),
    titleTextColorError: textColor1,
    iconColorError: errorColor,
    contentTextColorError: textColor2,
    closeColorHoverError: closeColorHover,
    closeColorPressedError: closeColorPressed,
    closeIconColorError: closeIconColor,
    closeIconColorHoverError: closeIconColorHover,
    closeIconColorPressedError: closeIconColorPressed
  });
}
const alertLight = {
  name: "Alert",
  common: derived,
  self: self$1d
};
const commonVars$a = {
  linkFontSize: "13px",
  linkPadding: "0 0 0 16px",
  railWidth: "4px"
};
function self$1c(vars) {
  const {
    borderRadius,
    railColor,
    primaryColor,
    primaryColorHover,
    primaryColorPressed,
    textColor2
  } = vars;
  return Object.assign(Object.assign({}, commonVars$a), {
    borderRadius,
    railColor,
    railColorActive: primaryColor,
    linkColor: changeColor(primaryColor, {
      alpha: 0.15
    }),
    linkTextColor: textColor2,
    linkTextColorHover: primaryColorHover,
    linkTextColorPressed: primaryColorPressed,
    linkTextColorActive: primaryColor
  });
}
const anchorLight = {
  name: "Anchor",
  common: derived,
  self: self$1c
};
const anchorDark = {
  name: "Anchor",
  common: derived$1,
  self: self$1c
};
const isChrome = isBrowser$2 && "chrome" in window;
isBrowser$2 && navigator.userAgent.includes("Firefox");
const isSafari = isBrowser$2 && navigator.userAgent.includes("Safari") && !isChrome;
const commonVariables$i = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
const inputDark = {
  name: "Input",
  common: derived$1,
  self(vars) {
    const {
      textColor2,
      textColor3,
      textColorDisabled,
      primaryColor,
      primaryColorHover,
      inputColor,
      inputColorDisabled,
      warningColor,
      warningColorHover,
      errorColor,
      errorColorHover,
      borderRadius,
      lineHeight: lineHeight2,
      fontSizeTiny,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      heightTiny,
      heightSmall,
      heightMedium,
      heightLarge,
      clearColor,
      clearColorHover,
      clearColorPressed,
      placeholderColor,
      placeholderColorDisabled,
      iconColor,
      iconColorDisabled,
      iconColorHover,
      iconColorPressed,
      fontWeight
    } = vars;
    return Object.assign(Object.assign({}, commonVariables$i), {
      fontWeight,
      countTextColorDisabled: textColorDisabled,
      countTextColor: textColor3,
      heightTiny,
      heightSmall,
      heightMedium,
      heightLarge,
      fontSizeTiny,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      lineHeight: lineHeight2,
      lineHeightTextarea: lineHeight2,
      borderRadius,
      iconSize: "16px",
      groupLabelColor: inputColor,
      textColor: textColor2,
      textColorDisabled,
      textDecorationColor: textColor2,
      groupLabelTextColor: textColor2,
      caretColor: primaryColor,
      placeholderColor,
      placeholderColorDisabled,
      color: inputColor,
      colorDisabled: inputColorDisabled,
      colorFocus: changeColor(primaryColor, {
        alpha: 0.1
      }),
      groupLabelBorder: "1px solid #0000",
      border: "1px solid #0000",
      borderHover: `1px solid ${primaryColorHover}`,
      borderDisabled: "1px solid #0000",
      borderFocus: `1px solid ${primaryColorHover}`,
      boxShadowFocus: `0 0 8px 0 ${changeColor(primaryColor, {
        alpha: 0.3
      })}`,
      loadingColor: primaryColor,
      // warning
      loadingColorWarning: warningColor,
      borderWarning: `1px solid ${warningColor}`,
      borderHoverWarning: `1px solid ${warningColorHover}`,
      colorFocusWarning: changeColor(warningColor, {
        alpha: 0.1
      }),
      borderFocusWarning: `1px solid ${warningColorHover}`,
      boxShadowFocusWarning: `0 0 8px 0 ${changeColor(warningColor, {
        alpha: 0.3
      })}`,
      caretColorWarning: warningColor,
      // error
      loadingColorError: errorColor,
      borderError: `1px solid ${errorColor}`,
      borderHoverError: `1px solid ${errorColorHover}`,
      colorFocusError: changeColor(errorColor, {
        alpha: 0.1
      }),
      borderFocusError: `1px solid ${errorColorHover}`,
      boxShadowFocusError: `0 0 8px 0 ${changeColor(errorColor, {
        alpha: 0.3
      })}`,
      caretColorError: errorColor,
      clearColor,
      clearColorHover,
      clearColorPressed,
      iconColor,
      iconColorDisabled,
      iconColorHover,
      iconColorPressed,
      suffixTextColor: textColor2
    });
  }
};
function self$1b(vars) {
  const {
    textColor2,
    textColor3,
    textColorDisabled,
    primaryColor,
    primaryColorHover,
    inputColor,
    inputColorDisabled,
    borderColor,
    warningColor,
    warningColorHover,
    errorColor,
    errorColorHover,
    borderRadius,
    lineHeight: lineHeight2,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    actionColor,
    clearColor,
    clearColorHover,
    clearColorPressed,
    placeholderColor,
    placeholderColorDisabled,
    iconColor,
    iconColorDisabled,
    iconColorHover,
    iconColorPressed,
    fontWeight
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$i), {
    fontWeight,
    countTextColorDisabled: textColorDisabled,
    countTextColor: textColor3,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    lineHeight: lineHeight2,
    lineHeightTextarea: lineHeight2,
    borderRadius,
    iconSize: "16px",
    groupLabelColor: actionColor,
    groupLabelTextColor: textColor2,
    textColor: textColor2,
    textColorDisabled,
    textDecorationColor: textColor2,
    caretColor: primaryColor,
    placeholderColor,
    placeholderColorDisabled,
    color: inputColor,
    colorDisabled: inputColorDisabled,
    colorFocus: inputColor,
    groupLabelBorder: `1px solid ${borderColor}`,
    border: `1px solid ${borderColor}`,
    borderHover: `1px solid ${primaryColorHover}`,
    borderDisabled: `1px solid ${borderColor}`,
    borderFocus: `1px solid ${primaryColorHover}`,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    loadingColor: primaryColor,
    // warning
    loadingColorWarning: warningColor,
    borderWarning: `1px solid ${warningColor}`,
    borderHoverWarning: `1px solid ${warningColorHover}`,
    colorFocusWarning: inputColor,
    borderFocusWarning: `1px solid ${warningColorHover}`,
    boxShadowFocusWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    caretColorWarning: warningColor,
    // error
    loadingColorError: errorColor,
    borderError: `1px solid ${errorColor}`,
    borderHoverError: `1px solid ${errorColorHover}`,
    colorFocusError: inputColor,
    borderFocusError: `1px solid ${errorColorHover}`,
    boxShadowFocusError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    caretColorError: errorColor,
    clearColor,
    clearColorHover,
    clearColorPressed,
    iconColor,
    iconColorDisabled,
    iconColorHover,
    iconColorPressed,
    suffixTextColor: textColor2
  });
}
const inputLight = {
  name: "Input",
  common: derived,
  self: self$1b
};
function self$1a(vars) {
  const {
    boxShadow2
  } = vars;
  return {
    menuBoxShadow: boxShadow2
  };
}
const autoCompleteLight = createTheme({
  name: "AutoComplete",
  common: derived,
  peers: {
    InternalSelectMenu: internalSelectMenuLight,
    Input: inputLight
  },
  self: self$1a
});
const autoCompleteDark = {
  name: "AutoComplete",
  common: derived$1,
  peers: {
    InternalSelectMenu: internalSelectMenuDark,
    Input: inputDark
  },
  self: self$1a
};
function self$19(vars) {
  const {
    borderRadius,
    avatarColor,
    cardColor,
    fontSize: fontSize2,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge,
    modalColor,
    popoverColor
  } = vars;
  return {
    borderRadius,
    fontSize: fontSize2,
    border: `2px solid ${cardColor}`,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge,
    color: composite(cardColor, avatarColor),
    colorModal: composite(modalColor, avatarColor),
    colorPopover: composite(popoverColor, avatarColor)
  };
}
const avatarLight = {
  name: "Avatar",
  common: derived,
  self: self$19
};
const avatarDark = {
  name: "Avatar",
  common: derived$1,
  self: self$19
};
function self$18() {
  return {
    gap: "-12px"
  };
}
const avatarGroupLight = createTheme({
  name: "AvatarGroup",
  common: derived,
  peers: {
    Avatar: avatarLight
  },
  self: self$18
});
const avatarGroupDark = {
  name: "AvatarGroup",
  common: derived$1,
  peers: {
    Avatar: avatarDark
  },
  self: self$18
};
const commonVariables$h = {
  width: "44px",
  height: "44px",
  borderRadius: "22px",
  iconSize: "26px"
};
const backTopDark = {
  name: "BackTop",
  common: derived$1,
  self(vars) {
    const {
      popoverColor,
      textColor2,
      primaryColorHover,
      primaryColorPressed
    } = vars;
    return Object.assign(Object.assign({}, commonVariables$h), {
      color: popoverColor,
      textColor: textColor2,
      iconColor: textColor2,
      iconColorHover: primaryColorHover,
      iconColorPressed: primaryColorPressed,
      boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
      boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
      boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)"
    });
  }
};
function self$17(vars) {
  const {
    popoverColor,
    textColor2,
    primaryColorHover,
    primaryColorPressed
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$h), {
    color: popoverColor,
    textColor: textColor2,
    iconColor: textColor2,
    iconColorHover: primaryColorHover,
    iconColorPressed: primaryColorPressed,
    boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
    boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
    boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)"
  });
}
const backTopLight = {
  name: "BackTop",
  common: derived,
  self: self$17
};
const badgeDark = {
  name: "Badge",
  common: derived$1,
  self(vars) {
    const {
      errorColorSuppl,
      infoColorSuppl,
      successColorSuppl,
      warningColorSuppl,
      fontFamily: fontFamily2
    } = vars;
    return {
      color: errorColorSuppl,
      colorInfo: infoColorSuppl,
      colorSuccess: successColorSuppl,
      colorError: errorColorSuppl,
      colorWarning: warningColorSuppl,
      fontSize: "12px",
      fontFamily: fontFamily2
    };
  }
};
function self$16(vars) {
  const {
    errorColor,
    infoColor,
    successColor,
    warningColor,
    fontFamily: fontFamily2
  } = vars;
  return {
    color: errorColor,
    colorInfo: infoColor,
    colorSuccess: successColor,
    colorError: errorColor,
    colorWarning: warningColor,
    fontSize: "12px",
    fontFamily: fontFamily2
  };
}
const badgeLight = {
  name: "Badge",
  common: derived,
  self: self$16
};
const commonVariables$g = {
  fontWeightActive: "400"
};
function self$15(vars) {
  const {
    fontSize: fontSize2,
    textColor3,
    textColor2,
    borderRadius,
    buttonColor2Hover,
    buttonColor2Pressed
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$g), {
    fontSize: fontSize2,
    itemLineHeight: "1.25",
    itemTextColor: textColor3,
    itemTextColorHover: textColor2,
    itemTextColorPressed: textColor2,
    itemTextColorActive: textColor2,
    itemBorderRadius: borderRadius,
    itemColorHover: buttonColor2Hover,
    itemColorPressed: buttonColor2Pressed,
    separatorColor: textColor3
  });
}
const breadcrumbLight = {
  name: "Breadcrumb",
  common: derived,
  self: self$15
};
const breadcrumbDark = {
  name: "Breadcrumb",
  common: derived$1,
  self: self$15
};
function createHoverColor(rgb) {
  return composite(rgb, [255, 255, 255, 0.16]);
}
function createPressedColor(rgb) {
  return composite(rgb, [0, 0, 0, 0.12]);
}
const buttonGroupInjectionKey = createInjectionKey("n-button-group");
const commonVariables$f = {
  paddingTiny: "0 6px",
  paddingSmall: "0 10px",
  paddingMedium: "0 14px",
  paddingLarge: "0 18px",
  paddingRoundTiny: "0 10px",
  paddingRoundSmall: "0 14px",
  paddingRoundMedium: "0 18px",
  paddingRoundLarge: "0 22px",
  iconMarginTiny: "6px",
  iconMarginSmall: "6px",
  iconMarginMedium: "6px",
  iconMarginLarge: "6px",
  iconSizeTiny: "14px",
  iconSizeSmall: "18px",
  iconSizeMedium: "18px",
  iconSizeLarge: "20px",
  rippleDuration: ".6s"
};
function self$14(vars) {
  const {
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    borderRadius,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    opacityDisabled,
    textColor2,
    textColor3,
    primaryColorHover,
    primaryColorPressed,
    borderColor,
    primaryColor,
    baseColor,
    infoColor,
    infoColorHover,
    infoColorPressed,
    successColor,
    successColorHover,
    successColorPressed,
    warningColor,
    warningColorHover,
    warningColorPressed,
    errorColor,
    errorColorHover,
    errorColorPressed,
    fontWeight,
    buttonColor2,
    buttonColor2Hover,
    buttonColor2Pressed,
    fontWeightStrong
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$f), {
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    borderRadiusTiny: borderRadius,
    borderRadiusSmall: borderRadius,
    borderRadiusMedium: borderRadius,
    borderRadiusLarge: borderRadius,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    opacityDisabled,
    // secondary
    colorOpacitySecondary: "0.16",
    colorOpacitySecondaryHover: "0.22",
    colorOpacitySecondaryPressed: "0.28",
    colorSecondary: buttonColor2,
    colorSecondaryHover: buttonColor2Hover,
    colorSecondaryPressed: buttonColor2Pressed,
    // tertiary
    colorTertiary: buttonColor2,
    colorTertiaryHover: buttonColor2Hover,
    colorTertiaryPressed: buttonColor2Pressed,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: buttonColor2Hover,
    colorQuaternaryPressed: buttonColor2Pressed,
    // default type
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: textColor2,
    textColorTertiary: textColor3,
    textColorHover: primaryColorHover,
    textColorPressed: primaryColorPressed,
    textColorFocus: primaryColorHover,
    textColorDisabled: textColor2,
    textColorText: textColor2,
    textColorTextHover: primaryColorHover,
    textColorTextPressed: primaryColorPressed,
    textColorTextFocus: primaryColorHover,
    textColorTextDisabled: textColor2,
    textColorGhost: textColor2,
    textColorGhostHover: primaryColorHover,
    textColorGhostPressed: primaryColorPressed,
    textColorGhostFocus: primaryColorHover,
    textColorGhostDisabled: textColor2,
    border: `1px solid ${borderColor}`,
    borderHover: `1px solid ${primaryColorHover}`,
    borderPressed: `1px solid ${primaryColorPressed}`,
    borderFocus: `1px solid ${primaryColorHover}`,
    borderDisabled: `1px solid ${borderColor}`,
    rippleColor: primaryColor,
    // primary
    colorPrimary: primaryColor,
    colorHoverPrimary: primaryColorHover,
    colorPressedPrimary: primaryColorPressed,
    colorFocusPrimary: primaryColorHover,
    colorDisabledPrimary: primaryColor,
    textColorPrimary: baseColor,
    textColorHoverPrimary: baseColor,
    textColorPressedPrimary: baseColor,
    textColorFocusPrimary: baseColor,
    textColorDisabledPrimary: baseColor,
    textColorTextPrimary: primaryColor,
    textColorTextHoverPrimary: primaryColorHover,
    textColorTextPressedPrimary: primaryColorPressed,
    textColorTextFocusPrimary: primaryColorHover,
    textColorTextDisabledPrimary: textColor2,
    textColorGhostPrimary: primaryColor,
    textColorGhostHoverPrimary: primaryColorHover,
    textColorGhostPressedPrimary: primaryColorPressed,
    textColorGhostFocusPrimary: primaryColorHover,
    textColorGhostDisabledPrimary: primaryColor,
    borderPrimary: `1px solid ${primaryColor}`,
    borderHoverPrimary: `1px solid ${primaryColorHover}`,
    borderPressedPrimary: `1px solid ${primaryColorPressed}`,
    borderFocusPrimary: `1px solid ${primaryColorHover}`,
    borderDisabledPrimary: `1px solid ${primaryColor}`,
    rippleColorPrimary: primaryColor,
    // info
    colorInfo: infoColor,
    colorHoverInfo: infoColorHover,
    colorPressedInfo: infoColorPressed,
    colorFocusInfo: infoColorHover,
    colorDisabledInfo: infoColor,
    textColorInfo: baseColor,
    textColorHoverInfo: baseColor,
    textColorPressedInfo: baseColor,
    textColorFocusInfo: baseColor,
    textColorDisabledInfo: baseColor,
    textColorTextInfo: infoColor,
    textColorTextHoverInfo: infoColorHover,
    textColorTextPressedInfo: infoColorPressed,
    textColorTextFocusInfo: infoColorHover,
    textColorTextDisabledInfo: textColor2,
    textColorGhostInfo: infoColor,
    textColorGhostHoverInfo: infoColorHover,
    textColorGhostPressedInfo: infoColorPressed,
    textColorGhostFocusInfo: infoColorHover,
    textColorGhostDisabledInfo: infoColor,
    borderInfo: `1px solid ${infoColor}`,
    borderHoverInfo: `1px solid ${infoColorHover}`,
    borderPressedInfo: `1px solid ${infoColorPressed}`,
    borderFocusInfo: `1px solid ${infoColorHover}`,
    borderDisabledInfo: `1px solid ${infoColor}`,
    rippleColorInfo: infoColor,
    // success
    colorSuccess: successColor,
    colorHoverSuccess: successColorHover,
    colorPressedSuccess: successColorPressed,
    colorFocusSuccess: successColorHover,
    colorDisabledSuccess: successColor,
    textColorSuccess: baseColor,
    textColorHoverSuccess: baseColor,
    textColorPressedSuccess: baseColor,
    textColorFocusSuccess: baseColor,
    textColorDisabledSuccess: baseColor,
    textColorTextSuccess: successColor,
    textColorTextHoverSuccess: successColorHover,
    textColorTextPressedSuccess: successColorPressed,
    textColorTextFocusSuccess: successColorHover,
    textColorTextDisabledSuccess: textColor2,
    textColorGhostSuccess: successColor,
    textColorGhostHoverSuccess: successColorHover,
    textColorGhostPressedSuccess: successColorPressed,
    textColorGhostFocusSuccess: successColorHover,
    textColorGhostDisabledSuccess: successColor,
    borderSuccess: `1px solid ${successColor}`,
    borderHoverSuccess: `1px solid ${successColorHover}`,
    borderPressedSuccess: `1px solid ${successColorPressed}`,
    borderFocusSuccess: `1px solid ${successColorHover}`,
    borderDisabledSuccess: `1px solid ${successColor}`,
    rippleColorSuccess: successColor,
    // warning
    colorWarning: warningColor,
    colorHoverWarning: warningColorHover,
    colorPressedWarning: warningColorPressed,
    colorFocusWarning: warningColorHover,
    colorDisabledWarning: warningColor,
    textColorWarning: baseColor,
    textColorHoverWarning: baseColor,
    textColorPressedWarning: baseColor,
    textColorFocusWarning: baseColor,
    textColorDisabledWarning: baseColor,
    textColorTextWarning: warningColor,
    textColorTextHoverWarning: warningColorHover,
    textColorTextPressedWarning: warningColorPressed,
    textColorTextFocusWarning: warningColorHover,
    textColorTextDisabledWarning: textColor2,
    textColorGhostWarning: warningColor,
    textColorGhostHoverWarning: warningColorHover,
    textColorGhostPressedWarning: warningColorPressed,
    textColorGhostFocusWarning: warningColorHover,
    textColorGhostDisabledWarning: warningColor,
    borderWarning: `1px solid ${warningColor}`,
    borderHoverWarning: `1px solid ${warningColorHover}`,
    borderPressedWarning: `1px solid ${warningColorPressed}`,
    borderFocusWarning: `1px solid ${warningColorHover}`,
    borderDisabledWarning: `1px solid ${warningColor}`,
    rippleColorWarning: warningColor,
    // error
    colorError: errorColor,
    colorHoverError: errorColorHover,
    colorPressedError: errorColorPressed,
    colorFocusError: errorColorHover,
    colorDisabledError: errorColor,
    textColorError: baseColor,
    textColorHoverError: baseColor,
    textColorPressedError: baseColor,
    textColorFocusError: baseColor,
    textColorDisabledError: baseColor,
    textColorTextError: errorColor,
    textColorTextHoverError: errorColorHover,
    textColorTextPressedError: errorColorPressed,
    textColorTextFocusError: errorColorHover,
    textColorTextDisabledError: textColor2,
    textColorGhostError: errorColor,
    textColorGhostHoverError: errorColorHover,
    textColorGhostPressedError: errorColorPressed,
    textColorGhostFocusError: errorColorHover,
    textColorGhostDisabledError: errorColor,
    borderError: `1px solid ${errorColor}`,
    borderHoverError: `1px solid ${errorColorHover}`,
    borderPressedError: `1px solid ${errorColorPressed}`,
    borderFocusError: `1px solid ${errorColorHover}`,
    borderDisabledError: `1px solid ${errorColor}`,
    rippleColorError: errorColor,
    waveOpacity: "0.6",
    fontWeight,
    fontWeightStrong
  });
}
const buttonLight = {
  name: "Button",
  common: derived,
  self: self$14
};
const buttonDark = {
  name: "Button",
  common: derived$1,
  self(vars) {
    const commonSelf = self$14(vars);
    commonSelf.waveOpacity = "0.8";
    commonSelf.colorOpacitySecondary = "0.16";
    commonSelf.colorOpacitySecondaryHover = "0.2";
    commonSelf.colorOpacitySecondaryPressed = "0.12";
    return commonSelf;
  }
};
const style$4 = c([cB("button", `
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cM("color", [cE("border", {
  borderColor: "var(--n-border-color)"
}), cM("disabled", [cE("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), cNotM("disabled", [c("&:focus", [cE("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), c("&:hover", [cE("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), c("&:active", [cE("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), cM("pressed", [cE("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), cM("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [cE("border", {
  border: "var(--n-border-disabled)"
})]), cNotM("disabled", [c("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [cE("state-border", {
  border: "var(--n-border-focus)"
})]), c("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [cE("state-border", {
  border: "var(--n-border-hover)"
})]), c("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [cE("state-border", {
  border: "var(--n-border-pressed)"
})]), cM("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [cE("state-border", {
  border: "var(--n-border-pressed)"
})])]), cM("loading", "cursor: wait;"), cB("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [cM("active", {
  zIndex: 1,
  animationName: "button-wave-spread, button-wave-opacity"
})]), isBrowser$2 && "MozBoxSizing" in document.createElement("div").style ? c("&::moz-focus-inner", {
  border: 0
}) : null, cE("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), cE("border", {
  border: "var(--n-border)"
}), cE("state-border", {
  border: "var(--n-border)",
  borderColor: "#0000",
  zIndex: 1
}), cE("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [cB("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [iconSwitchTransition({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), fadeInWidthExpandTransition()]), cE("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [c("~", [cE("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), cM("block", `
 display: flex;
 width: 100%;
 `), cM("dashed", [cE("border, state-border", {
  borderStyle: "dashed !important"
})]), cM("disabled", {
  cursor: "not-allowed",
  opacity: "var(--n-opacity-disabled)"
})]), c("@keyframes button-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
  }
}), c("@keyframes button-wave-opacity", {
  from: {
    opacity: "var(--n-wave-opacity)"
  },
  to: {
    opacity: 0
  }
})]);
const buttonProps = Object.assign(Object.assign({}, useTheme.props), {
  color: String,
  textColor: String,
  text: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
  circle: Boolean,
  size: String,
  ghost: Boolean,
  round: Boolean,
  secondary: Boolean,
  tertiary: Boolean,
  quaternary: Boolean,
  strong: Boolean,
  focusable: {
    type: Boolean,
    default: true
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  tag: {
    type: String,
    default: "button"
  },
  type: {
    type: String,
    default: "default"
  },
  dashed: Boolean,
  renderIcon: Function,
  iconPlacement: {
    type: String,
    default: "left"
  },
  attrType: {
    type: String,
    default: "button"
  },
  bordered: {
    type: Boolean,
    default: true
  },
  onClick: [Function, Array],
  nativeFocusBehavior: {
    type: Boolean,
    default: !isSafari
  }
});
const Button = /* @__PURE__ */ defineComponent({
  name: "Button",
  props: buttonProps,
  setup(props) {
    const selfElRef = ref(null);
    const waveElRef = ref(null);
    const enterPressedRef = ref(false);
    const showBorderRef = useMemo(() => {
      return !props.quaternary && !props.tertiary && !props.secondary && !props.text && (!props.color || props.ghost || props.dashed) && props.bordered;
    });
    const NButtonGroup = inject(buttonGroupInjectionKey, {});
    const {
      mergedSizeRef
    } = useFormItem({}, {
      defaultSize: "medium",
      mergedSize: (NFormItem) => {
        const {
          size: size2
        } = props;
        if (size2) return size2;
        const {
          size: buttonGroupSize
        } = NButtonGroup;
        if (buttonGroupSize) return buttonGroupSize;
        const {
          mergedSize: formItemSize
        } = NFormItem || {};
        if (formItemSize) {
          return formItemSize.value;
        }
        return "medium";
      }
    });
    const mergedFocusableRef = computed(() => {
      return props.focusable && !props.disabled;
    });
    const handleMousedown = (e) => {
      var _a;
      if (!mergedFocusableRef.value) {
        e.preventDefault();
      }
      if (props.nativeFocusBehavior) {
        return;
      }
      e.preventDefault();
      if (props.disabled) {
        return;
      }
      if (mergedFocusableRef.value) {
        (_a = selfElRef.value) === null || _a === void 0 ? void 0 : _a.focus({
          preventScroll: true
        });
      }
    };
    const handleClick2 = (e) => {
      var _a;
      if (!props.disabled && !props.loading) {
        const {
          onClick
        } = props;
        if (onClick) call(onClick, e);
        if (!props.text) {
          (_a = waveElRef.value) === null || _a === void 0 ? void 0 : _a.play();
        }
      }
    };
    const handleKeyup = (e) => {
      switch (e.key) {
        case "Enter":
          if (!props.keyboard) {
            return;
          }
          enterPressedRef.value = false;
      }
    };
    const handleKeydown = (e) => {
      switch (e.key) {
        case "Enter":
          if (!props.keyboard || props.loading) {
            e.preventDefault();
            return;
          }
          enterPressedRef.value = true;
      }
    };
    const handleBlur = () => {
      enterPressedRef.value = false;
    };
    const {
      inlineThemeDisabled,
      mergedClsPrefixRef,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Button", "-button", style$4, buttonLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Button", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const theme = themeRef.value;
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2,
          cubicBezierEaseOut: cubicBezierEaseOut2
        },
        self: self2
      } = theme;
      const {
        rippleDuration,
        opacityDisabled,
        fontWeight,
        fontWeightStrong
      } = self2;
      const size2 = mergedSizeRef.value;
      const {
        dashed,
        type,
        ghost,
        text,
        color,
        round,
        circle,
        textColor,
        secondary,
        tertiary,
        quaternary,
        strong
      } = props;
      const fontProps = {
        "--n-font-weight": strong ? fontWeightStrong : fontWeight
      };
      let colorProps = {
        "--n-color": "initial",
        "--n-color-hover": "initial",
        "--n-color-pressed": "initial",
        "--n-color-focus": "initial",
        "--n-color-disabled": "initial",
        "--n-ripple-color": "initial",
        "--n-text-color": "initial",
        "--n-text-color-hover": "initial",
        "--n-text-color-pressed": "initial",
        "--n-text-color-focus": "initial",
        "--n-text-color-disabled": "initial"
      };
      const typeIsTertiary = type === "tertiary";
      const typeIsDefault = type === "default";
      const mergedType = typeIsTertiary ? "default" : type;
      if (text) {
        const propTextColor = textColor || color;
        const mergedTextColor = propTextColor || self2[createKey("textColorText", mergedType)];
        colorProps = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": mergedTextColor,
          "--n-text-color-hover": propTextColor ? createHoverColor(propTextColor) : self2[createKey("textColorTextHover", mergedType)],
          "--n-text-color-pressed": propTextColor ? createPressedColor(propTextColor) : self2[createKey("textColorTextPressed", mergedType)],
          "--n-text-color-focus": propTextColor ? createHoverColor(propTextColor) : self2[createKey("textColorTextHover", mergedType)],
          "--n-text-color-disabled": propTextColor || self2[createKey("textColorTextDisabled", mergedType)]
        };
      } else if (ghost || dashed) {
        const mergedTextColor = textColor || color;
        colorProps = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": color || self2[createKey("rippleColor", mergedType)],
          "--n-text-color": mergedTextColor || self2[createKey("textColorGhost", mergedType)],
          "--n-text-color-hover": mergedTextColor ? createHoverColor(mergedTextColor) : self2[createKey("textColorGhostHover", mergedType)],
          "--n-text-color-pressed": mergedTextColor ? createPressedColor(mergedTextColor) : self2[createKey("textColorGhostPressed", mergedType)],
          "--n-text-color-focus": mergedTextColor ? createHoverColor(mergedTextColor) : self2[createKey("textColorGhostHover", mergedType)],
          "--n-text-color-disabled": mergedTextColor || self2[createKey("textColorGhostDisabled", mergedType)]
        };
      } else if (secondary) {
        const typeTextColor = typeIsDefault ? self2.textColor : typeIsTertiary ? self2.textColorTertiary : self2[createKey("color", mergedType)];
        const mergedTextColor = color || typeTextColor;
        const isColoredType = type !== "default" && type !== "tertiary";
        colorProps = {
          "--n-color": isColoredType ? changeColor(mergedTextColor, {
            alpha: Number(self2.colorOpacitySecondary)
          }) : self2.colorSecondary,
          "--n-color-hover": isColoredType ? changeColor(mergedTextColor, {
            alpha: Number(self2.colorOpacitySecondaryHover)
          }) : self2.colorSecondaryHover,
          "--n-color-pressed": isColoredType ? changeColor(mergedTextColor, {
            alpha: Number(self2.colorOpacitySecondaryPressed)
          }) : self2.colorSecondaryPressed,
          "--n-color-focus": isColoredType ? changeColor(mergedTextColor, {
            alpha: Number(self2.colorOpacitySecondaryHover)
          }) : self2.colorSecondaryHover,
          "--n-color-disabled": self2.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": mergedTextColor,
          "--n-text-color-hover": mergedTextColor,
          "--n-text-color-pressed": mergedTextColor,
          "--n-text-color-focus": mergedTextColor,
          "--n-text-color-disabled": mergedTextColor
        };
      } else if (tertiary || quaternary) {
        const typeColor = typeIsDefault ? self2.textColor : typeIsTertiary ? self2.textColorTertiary : self2[createKey("color", mergedType)];
        const mergedColor = color || typeColor;
        if (tertiary) {
          colorProps["--n-color"] = self2.colorTertiary;
          colorProps["--n-color-hover"] = self2.colorTertiaryHover;
          colorProps["--n-color-pressed"] = self2.colorTertiaryPressed;
          colorProps["--n-color-focus"] = self2.colorSecondaryHover;
          colorProps["--n-color-disabled"] = self2.colorTertiary;
        } else {
          colorProps["--n-color"] = self2.colorQuaternary;
          colorProps["--n-color-hover"] = self2.colorQuaternaryHover;
          colorProps["--n-color-pressed"] = self2.colorQuaternaryPressed;
          colorProps["--n-color-focus"] = self2.colorQuaternaryHover;
          colorProps["--n-color-disabled"] = self2.colorQuaternary;
        }
        colorProps["--n-ripple-color"] = "#0000";
        colorProps["--n-text-color"] = mergedColor;
        colorProps["--n-text-color-hover"] = mergedColor;
        colorProps["--n-text-color-pressed"] = mergedColor;
        colorProps["--n-text-color-focus"] = mergedColor;
        colorProps["--n-text-color-disabled"] = mergedColor;
      } else {
        colorProps = {
          "--n-color": color || self2[createKey("color", mergedType)],
          "--n-color-hover": color ? createHoverColor(color) : self2[createKey("colorHover", mergedType)],
          "--n-color-pressed": color ? createPressedColor(color) : self2[createKey("colorPressed", mergedType)],
          "--n-color-focus": color ? createHoverColor(color) : self2[createKey("colorFocus", mergedType)],
          "--n-color-disabled": color || self2[createKey("colorDisabled", mergedType)],
          "--n-ripple-color": color || self2[createKey("rippleColor", mergedType)],
          "--n-text-color": textColor || (color ? self2.textColorPrimary : typeIsTertiary ? self2.textColorTertiary : self2[createKey("textColor", mergedType)]),
          "--n-text-color-hover": textColor || (color ? self2.textColorHoverPrimary : self2[createKey("textColorHover", mergedType)]),
          "--n-text-color-pressed": textColor || (color ? self2.textColorPressedPrimary : self2[createKey("textColorPressed", mergedType)]),
          "--n-text-color-focus": textColor || (color ? self2.textColorFocusPrimary : self2[createKey("textColorFocus", mergedType)]),
          "--n-text-color-disabled": textColor || (color ? self2.textColorDisabledPrimary : self2[createKey("textColorDisabled", mergedType)])
        };
      }
      let borderProps = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      if (text) {
        borderProps = {
          "--n-border": "none",
          "--n-border-hover": "none",
          "--n-border-pressed": "none",
          "--n-border-focus": "none",
          "--n-border-disabled": "none"
        };
      } else {
        borderProps = {
          "--n-border": self2[createKey("border", mergedType)],
          "--n-border-hover": self2[createKey("borderHover", mergedType)],
          "--n-border-pressed": self2[createKey("borderPressed", mergedType)],
          "--n-border-focus": self2[createKey("borderFocus", mergedType)],
          "--n-border-disabled": self2[createKey("borderDisabled", mergedType)]
        };
      }
      const {
        [createKey("height", size2)]: height,
        [createKey("fontSize", size2)]: fontSize2,
        [createKey("padding", size2)]: padding,
        [createKey("paddingRound", size2)]: paddingRound,
        [createKey("iconSize", size2)]: iconSize,
        [createKey("borderRadius", size2)]: borderRadius,
        [createKey("iconMargin", size2)]: iconMargin,
        waveOpacity
      } = self2;
      const sizeProps = {
        "--n-width": circle && !text ? height : "initial",
        "--n-height": text ? "initial" : height,
        "--n-font-size": fontSize2,
        "--n-padding": circle ? "initial" : text ? "initial" : round ? paddingRound : padding,
        "--n-icon-size": iconSize,
        "--n-icon-margin": iconMargin,
        "--n-border-radius": text ? "initial" : circle || round ? height : borderRadius
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-bezier-ease-out": cubicBezierEaseOut2,
        "--n-ripple-duration": rippleDuration,
        "--n-opacity-disabled": opacityDisabled,
        "--n-wave-opacity": waveOpacity
      }, fontProps), colorProps), borderProps), sizeProps);
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("button", computed(() => {
      let hash = "";
      const {
        dashed,
        type,
        ghost,
        text,
        color,
        round,
        circle,
        textColor,
        secondary,
        tertiary,
        quaternary,
        strong
      } = props;
      if (dashed) hash += "a";
      if (ghost) hash += "b";
      if (text) hash += "c";
      if (round) hash += "d";
      if (circle) hash += "e";
      if (secondary) hash += "f";
      if (tertiary) hash += "g";
      if (quaternary) hash += "h";
      if (strong) hash += "i";
      if (color) hash += `j${color2Class(color)}`;
      if (textColor) hash += `k${color2Class(textColor)}`;
      const {
        value: size2
      } = mergedSizeRef;
      hash += `l${size2[0]}`;
      hash += `m${type[0]}`;
      return hash;
    }), cssVarsRef, props) : void 0;
    return {
      selfElRef,
      waveElRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedFocusable: mergedFocusableRef,
      mergedSize: mergedSizeRef,
      showBorder: showBorderRef,
      enterPressed: enterPressedRef,
      rtlEnabled: rtlEnabledRef,
      handleMousedown,
      handleKeydown,
      handleBlur,
      handleKeyup,
      handleClick: handleClick2,
      customColorCssVars: computed(() => {
        const {
          color
        } = props;
        if (!color) return null;
        const hoverColor = createHoverColor(color);
        return {
          "--n-border-color": color,
          "--n-border-color-hover": hoverColor,
          "--n-border-color-pressed": createPressedColor(color),
          "--n-border-color-focus": hoverColor,
          "--n-border-color-disabled": color
        };
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix,
      tag: Component,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const children = resolveWrappedSlot(this.$slots.default, (children2) => children2 && h("span", {
      class: `${mergedClsPrefix}-button__content`
    }, children2));
    return h(Component, {
      ref: "selfElRef",
      class: [
        this.themeClass,
        `${mergedClsPrefix}-button`,
        `${mergedClsPrefix}-button--${this.type}-type`,
        `${mergedClsPrefix}-button--${this.mergedSize}-type`,
        this.rtlEnabled && `${mergedClsPrefix}-button--rtl`,
        this.disabled && `${mergedClsPrefix}-button--disabled`,
        this.block && `${mergedClsPrefix}-button--block`,
        this.enterPressed && `${mergedClsPrefix}-button--pressed`,
        !this.text && this.dashed && `${mergedClsPrefix}-button--dashed`,
        this.color && `${mergedClsPrefix}-button--color`,
        this.secondary && `${mergedClsPrefix}-button--secondary`,
        this.loading && `${mergedClsPrefix}-button--loading`,
        this.ghost && `${mergedClsPrefix}-button--ghost`
        // required for button group border collapse
      ],
      tabindex: this.mergedFocusable ? 0 : -1,
      type: this.attrType,
      style: this.cssVars,
      disabled: this.disabled,
      onClick: this.handleClick,
      onBlur: this.handleBlur,
      onMousedown: this.handleMousedown,
      onKeyup: this.handleKeyup,
      onKeydown: this.handleKeydown
    }, this.iconPlacement === "right" && children, h(NFadeInExpandTransition, {
      width: true
    }, {
      default: () => resolveWrappedSlot(this.$slots.icon, (children2) => (this.loading || this.renderIcon || children2) && h("span", {
        class: `${mergedClsPrefix}-button__icon`,
        style: {
          margin: isSlotEmpty(this.$slots.default) ? "0" : ""
        }
      }, h(NIconSwitchTransition, null, {
        default: () => this.loading ? h(NBaseLoading, {
          clsPrefix: mergedClsPrefix,
          key: "loading",
          class: `${mergedClsPrefix}-icon-slot`,
          strokeWidth: 20
        }) : h("div", {
          key: "icon",
          class: `${mergedClsPrefix}-icon-slot`,
          role: "none"
        }, this.renderIcon ? this.renderIcon() : children2)
      })))
    }), this.iconPlacement === "left" && children, !this.text ? h(NBaseWave, {
      ref: "waveElRef",
      clsPrefix: mergedClsPrefix
    }) : null, this.showBorder ? h("div", {
      "aria-hidden": true,
      class: `${mergedClsPrefix}-button__border`,
      style: this.customColorCssVars
    }) : null, this.showBorder ? h("div", {
      "aria-hidden": true,
      class: `${mergedClsPrefix}-button__state-border`,
      style: this.customColorCssVars
    }) : null);
  }
});
const XButton = Button;
const commonVariables$e = {
  titleFontSize: "22px"
};
function self$13(vars) {
  const {
    borderRadius,
    fontSize: fontSize2,
    lineHeight: lineHeight2,
    textColor2,
    textColor1,
    textColorDisabled,
    dividerColor,
    fontWeightStrong,
    primaryColor,
    baseColor,
    hoverColor,
    cardColor,
    modalColor,
    popoverColor
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$e), {
    borderRadius,
    borderColor: composite(cardColor, dividerColor),
    borderColorModal: composite(modalColor, dividerColor),
    borderColorPopover: composite(popoverColor, dividerColor),
    textColor: textColor2,
    titleFontWeight: fontWeightStrong,
    titleTextColor: textColor1,
    dayTextColor: textColorDisabled,
    fontSize: fontSize2,
    lineHeight: lineHeight2,
    dateColorCurrent: primaryColor,
    dateTextColorCurrent: baseColor,
    cellColorHover: composite(cardColor, hoverColor),
    cellColorHoverModal: composite(modalColor, hoverColor),
    cellColorHoverPopover: composite(popoverColor, hoverColor),
    cellColor: cardColor,
    cellColorModal: modalColor,
    cellColorPopover: popoverColor,
    barColor: primaryColor
  });
}
const calendarLight = createTheme({
  name: "Calendar",
  common: derived,
  peers: {
    Button: buttonLight
  },
  self: self$13
});
const calendarDark = {
  name: "Calendar",
  common: derived$1,
  peers: {
    Button: buttonDark
  },
  self: self$13
};
const commonVariables$d = {
  paddingSmall: "12px 16px 12px",
  paddingMedium: "19px 24px 20px",
  paddingLarge: "23px 32px 24px",
  paddingHuge: "27px 40px 28px",
  titleFontSizeSmall: "16px",
  titleFontSizeMedium: "18px",
  titleFontSizeLarge: "18px",
  titleFontSizeHuge: "18px",
  closeIconSize: "18px",
  closeSize: "22px"
};
function self$12(vars) {
  const {
    primaryColor,
    borderRadius,
    lineHeight: lineHeight2,
    fontSize: fontSize2,
    cardColor,
    textColor2,
    textColor1,
    dividerColor,
    fontWeightStrong,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    modalColor,
    boxShadow1,
    popoverColor,
    actionColor
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$d), {
    lineHeight: lineHeight2,
    color: cardColor,
    colorModal: modalColor,
    colorPopover: popoverColor,
    colorTarget: primaryColor,
    colorEmbedded: actionColor,
    colorEmbeddedModal: actionColor,
    colorEmbeddedPopover: actionColor,
    textColor: textColor2,
    titleTextColor: textColor1,
    borderColor: dividerColor,
    actionColor,
    titleFontWeight: fontWeightStrong,
    closeColorHover,
    closeColorPressed,
    closeBorderRadius: borderRadius,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    fontSizeSmall: fontSize2,
    fontSizeMedium: fontSize2,
    fontSizeLarge: fontSize2,
    fontSizeHuge: fontSize2,
    boxShadow: boxShadow1,
    borderRadius
  });
}
const cardLight = {
  name: "Card",
  common: derived,
  self: self$12
};
const cardDark = {
  name: "Card",
  common: derived$1,
  self(vars) {
    const commonSelf = self$12(vars);
    const {
      cardColor,
      modalColor,
      popoverColor
    } = vars;
    commonSelf.colorEmbedded = cardColor;
    commonSelf.colorEmbeddedModal = modalColor;
    commonSelf.colorEmbeddedPopover = popoverColor;
    return commonSelf;
  }
};
const style$3 = c([cB("card", `
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [asModal({
  background: "var(--n-color-modal)"
}), cM("hoverable", [c("&:hover", "box-shadow: var(--n-box-shadow);")]), cM("content-segmented", [c(">", [cE("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), cM("content-soft-segmented", [c(">", [cE("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), cM("footer-segmented", [c(">", [cE("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), cM("footer-soft-segmented", [c(">", [cE("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), c(">", [cB("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [cE("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), cE("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cE("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), cE("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), cE("content", "flex: 1; min-width: 0;"), cE("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [c("&:first-child", {
  paddingTop: "var(--n-padding-bottom)"
})]), cE("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), cB("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [c("img", `
 display: block;
 width: 100%;
 `)]), cM("bordered", `
 border: 1px solid var(--n-border-color);
 `, [c("&:target", "border-color: var(--n-color-target);")]), cM("action-segmented", [c(">", [cE("action", [c("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), cM("content-segmented, content-soft-segmented", [c(">", [cE("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [c("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), cM("footer-segmented, footer-soft-segmented", [c(">", [cE("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [c("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), cM("embedded", `
 background-color: var(--n-color-embedded);
 `)]), insideModal(cB("card", `
 background: var(--n-color-modal);
 `, [cM("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), insidePopover(cB("card", `
 background: var(--n-color-popover);
 `, [cM("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]);
const cardBaseProps = {
  title: [String, Function],
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  headerExtraClass: String,
  headerExtraStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  embedded: Boolean,
  segmented: {
    type: [Boolean, Object],
    default: false
  },
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: true
  },
  closable: Boolean,
  hoverable: Boolean,
  role: String,
  onClose: [Function, Array],
  tag: {
    type: String,
    default: "div"
  },
  cover: Function,
  content: [String, Function],
  footer: Function,
  action: Function,
  headerExtra: Function
};
const cardBasePropKeys = keysOf(cardBaseProps);
const cardProps = Object.assign(Object.assign({}, useTheme.props), cardBaseProps);
const __unplugin_components_2 = /* @__PURE__ */ defineComponent({
  name: "Card",
  props: cardProps,
  setup(props) {
    const handleCloseClick = () => {
      const {
        onClose
      } = props;
      if (onClose) call(onClose);
    };
    const {
      inlineThemeDisabled,
      mergedClsPrefixRef,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Card", "-card", style$3, cardLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Card", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        size: size2
      } = props;
      const {
        self: {
          color,
          colorModal,
          colorTarget,
          textColor,
          titleTextColor,
          titleFontWeight,
          borderColor,
          actionColor,
          borderRadius,
          lineHeight: lineHeight2,
          closeIconColor,
          closeIconColorHover,
          closeIconColorPressed,
          closeColorHover,
          closeColorPressed,
          closeBorderRadius,
          closeIconSize,
          closeSize,
          boxShadow,
          colorPopover,
          colorEmbedded,
          colorEmbeddedModal,
          colorEmbeddedPopover,
          [createKey("padding", size2)]: padding,
          [createKey("fontSize", size2)]: fontSize2,
          [createKey("titleFontSize", size2)]: titleFontSize
        },
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        }
      } = themeRef.value;
      const {
        top: paddingTop,
        left: paddingLeft,
        bottom: paddingBottom
      } = getMargin(padding);
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-border-radius": borderRadius,
        "--n-color": color,
        "--n-color-modal": colorModal,
        "--n-color-popover": colorPopover,
        "--n-color-embedded": colorEmbedded,
        "--n-color-embedded-modal": colorEmbeddedModal,
        "--n-color-embedded-popover": colorEmbeddedPopover,
        "--n-color-target": colorTarget,
        "--n-text-color": textColor,
        "--n-line-height": lineHeight2,
        "--n-action-color": actionColor,
        "--n-title-text-color": titleTextColor,
        "--n-title-font-weight": titleFontWeight,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-border-color": borderColor,
        "--n-box-shadow": boxShadow,
        // size
        "--n-padding-top": paddingTop,
        "--n-padding-bottom": paddingBottom,
        "--n-padding-left": paddingLeft,
        "--n-font-size": fontSize2,
        "--n-title-font-size": titleFontSize,
        "--n-close-size": closeSize,
        "--n-close-icon-size": closeIconSize,
        "--n-close-border-radius": closeBorderRadius
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("card", computed(() => {
      return props.size[0];
    }), cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      handleCloseClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      segmented,
      bordered,
      hoverable,
      mergedClsPrefix,
      rtlEnabled,
      onRender,
      embedded,
      tag: Component,
      $slots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(Component, {
      class: [`${mergedClsPrefix}-card`, this.themeClass, embedded && `${mergedClsPrefix}-card--embedded`, {
        [`${mergedClsPrefix}-card--rtl`]: rtlEnabled,
        [`${mergedClsPrefix}-card--content${typeof segmented !== "boolean" && segmented.content === "soft" ? "-soft" : ""}-segmented`]: segmented === true || segmented !== false && segmented.content,
        [`${mergedClsPrefix}-card--footer${typeof segmented !== "boolean" && segmented.footer === "soft" ? "-soft" : ""}-segmented`]: segmented === true || segmented !== false && segmented.footer,
        [`${mergedClsPrefix}-card--action-segmented`]: segmented === true || segmented !== false && segmented.action,
        [`${mergedClsPrefix}-card--bordered`]: bordered,
        [`${mergedClsPrefix}-card--hoverable`]: hoverable
      }],
      style: this.cssVars,
      role: this.role
    }, resolveWrappedSlot($slots.cover, (children) => {
      const mergedChildren = this.cover ? ensureValidVNode([this.cover()]) : children;
      return mergedChildren && h("div", {
        class: `${mergedClsPrefix}-card-cover`,
        role: "none"
      }, mergedChildren);
    }), resolveWrappedSlot($slots.header, (children) => {
      const {
        title
      } = this;
      const mergedChildren = title ? ensureValidVNode(typeof title === "function" ? [title()] : [title]) : children;
      return mergedChildren || this.closable ? h("div", {
        class: [`${mergedClsPrefix}-card-header`, this.headerClass],
        style: this.headerStyle,
        role: "heading"
      }, h("div", {
        class: `${mergedClsPrefix}-card-header__main`,
        role: "heading"
      }, mergedChildren), resolveWrappedSlot($slots["header-extra"], (children2) => {
        const mergedChildren2 = this.headerExtra ? ensureValidVNode([this.headerExtra()]) : children2;
        return mergedChildren2 && h("div", {
          class: [`${mergedClsPrefix}-card-header__extra`, this.headerExtraClass],
          style: this.headerExtraStyle
        }, mergedChildren2);
      }), this.closable && h(NBaseClose, {
        clsPrefix: mergedClsPrefix,
        class: `${mergedClsPrefix}-card-header__close`,
        onClick: this.handleCloseClick,
        absolute: true
      })) : null;
    }), resolveWrappedSlot($slots.default, (children) => {
      const {
        content
      } = this;
      const mergedChildren = content ? ensureValidVNode(typeof content === "function" ? [content()] : [content]) : children;
      return mergedChildren && h("div", {
        class: [`${mergedClsPrefix}-card__content`, this.contentClass],
        style: this.contentStyle,
        role: "none"
      }, mergedChildren);
    }), resolveWrappedSlot($slots.footer, (children) => {
      const mergedChildren = this.footer ? ensureValidVNode([this.footer()]) : children;
      return mergedChildren && h("div", {
        class: [`${mergedClsPrefix}-card__footer`, this.footerClass],
        style: this.footerStyle,
        role: "none"
      }, mergedChildren);
    }), resolveWrappedSlot($slots.action, (children) => {
      const mergedChildren = this.action ? ensureValidVNode([this.action()]) : children;
      return mergedChildren && h("div", {
        class: `${mergedClsPrefix}-card__action`,
        role: "none"
      }, mergedChildren);
    }));
  }
});
function self$11() {
  return {
    dotSize: "8px",
    dotColor: "rgba(255, 255, 255, .3)",
    dotColorActive: "rgba(255, 255, 255, 1)",
    dotColorFocus: "rgba(255, 255, 255, .5)",
    dotLineWidth: "16px",
    dotLineWidthActive: "24px",
    arrowColor: "#eee"
  };
}
const carouselLight = {
  name: "Carousel",
  common: derived,
  self: self$11
};
const carouselDark = {
  name: "Carousel",
  common: derived$1,
  self: self$11
};
const commonVariables$c = {
  sizeSmall: "14px",
  sizeMedium: "16px",
  sizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function self$10(vars) {
  const {
    baseColor,
    inputColorDisabled,
    cardColor,
    modalColor,
    popoverColor,
    textColorDisabled,
    borderColor,
    primaryColor,
    textColor2,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    borderRadiusSmall,
    lineHeight: lineHeight2
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$c), {
    labelLineHeight: lineHeight2,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    borderRadius: borderRadiusSmall,
    color: baseColor,
    colorChecked: primaryColor,
    colorDisabled: inputColorDisabled,
    colorDisabledChecked: inputColorDisabled,
    colorTableHeader: cardColor,
    colorTableHeaderModal: modalColor,
    colorTableHeaderPopover: popoverColor,
    checkMarkColor: baseColor,
    checkMarkColorDisabled: textColorDisabled,
    checkMarkColorDisabledChecked: textColorDisabled,
    border: `1px solid ${borderColor}`,
    borderDisabled: `1px solid ${borderColor}`,
    borderDisabledChecked: `1px solid ${borderColor}`,
    borderChecked: `1px solid ${primaryColor}`,
    borderFocus: `1px solid ${primaryColor}`,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.3
    })}`,
    textColor: textColor2,
    textColorDisabled
  });
}
const checkboxLight = {
  name: "Checkbox",
  common: derived,
  self: self$10
};
const checkboxDark = {
  name: "Checkbox",
  common: derived$1,
  self(vars) {
    const {
      cardColor
    } = vars;
    const commonSelf = self$10(vars);
    commonSelf.color = "#0000";
    commonSelf.checkMarkColor = cardColor;
    return commonSelf;
  }
};
function self$$(vars) {
  const {
    borderRadius,
    boxShadow2,
    popoverColor,
    textColor2,
    textColor3,
    primaryColor,
    textColorDisabled,
    dividerColor,
    hoverColor,
    fontSizeMedium,
    heightMedium
  } = vars;
  return {
    menuBorderRadius: borderRadius,
    menuColor: popoverColor,
    menuBoxShadow: boxShadow2,
    menuDividerColor: dividerColor,
    menuHeight: "calc(var(--n-option-height) * 6.6)",
    optionArrowColor: textColor3,
    optionHeight: heightMedium,
    optionFontSize: fontSizeMedium,
    optionColorHover: hoverColor,
    optionTextColor: textColor2,
    optionTextColorActive: primaryColor,
    optionTextColorDisabled: textColorDisabled,
    optionCheckMarkColor: primaryColor,
    loadingColor: primaryColor,
    columnWidth: "180px"
  };
}
const cascaderLight = createTheme({
  name: "Cascader",
  common: derived,
  peers: {
    InternalSelectMenu: internalSelectMenuLight,
    InternalSelection: internalSelectionLight,
    Scrollbar: scrollbarLight,
    Checkbox: checkboxLight,
    Empty: emptyLight
  },
  self: self$$
});
const cascaderDark = {
  name: "Cascader",
  common: derived$1,
  peers: {
    InternalSelectMenu: internalSelectMenuDark,
    InternalSelection: internalSelectionDark,
    Scrollbar: scrollbarDark,
    Checkbox: checkboxDark,
    Empty: emptyLight
  },
  self: self$$
};
const codeDark = {
  name: "Code",
  common: derived$1,
  self(vars) {
    const {
      textColor2,
      fontSize: fontSize2,
      fontWeightStrong,
      textColor3
    } = vars;
    return {
      textColor: textColor2,
      fontSize: fontSize2,
      fontWeightStrong,
      // extracted from hljs atom-one-dark.scss
      "mono-3": "#5c6370",
      "hue-1": "#56b6c2",
      "hue-2": "#61aeee",
      "hue-3": "#c678dd",
      "hue-4": "#98c379",
      "hue-5": "#e06c75",
      "hue-5-2": "#be5046",
      "hue-6": "#d19a66",
      "hue-6-2": "#e6c07b",
      // line-number styles
      lineNumberTextColor: textColor3
    };
  }
};
function self$_(vars) {
  const {
    textColor2,
    fontSize: fontSize2,
    fontWeightStrong,
    textColor3
  } = vars;
  return {
    textColor: textColor2,
    fontSize: fontSize2,
    fontWeightStrong,
    // extracted from hljs atom-one-light.scss
    "mono-3": "#a0a1a7",
    "hue-1": "#0184bb",
    "hue-2": "#4078f2",
    "hue-3": "#a626a4",
    "hue-4": "#50a14f",
    "hue-5": "#e45649",
    "hue-5-2": "#c91243",
    "hue-6": "#986801",
    "hue-6-2": "#c18401",
    // line-number styles
    lineNumberTextColor: textColor3
  };
}
const codeLight = {
  name: "Code",
  common: derived,
  self: self$_
};
function self$Z(vars) {
  const {
    fontWeight,
    textColor1,
    textColor2,
    textColorDisabled,
    dividerColor,
    fontSize: fontSize2
  } = vars;
  return {
    titleFontSize: fontSize2,
    titleFontWeight: fontWeight,
    dividerColor,
    titleTextColor: textColor1,
    titleTextColorDisabled: textColorDisabled,
    fontSize: fontSize2,
    textColor: textColor2,
    arrowColor: textColor2,
    arrowColorDisabled: textColorDisabled,
    itemMargin: "16px 0 0 0",
    titlePadding: "16px 0 0 0"
  };
}
const collapseLight = {
  name: "Collapse",
  common: derived,
  self: self$Z
};
const collapseDark = {
  name: "Collapse",
  common: derived$1,
  self: self$Z
};
function self$Y(vars) {
  const {
    cubicBezierEaseInOut: cubicBezierEaseInOut2
  } = vars;
  return {
    bezier: cubicBezierEaseInOut2
  };
}
const collapseTransitionLight = {
  name: "CollapseTransition",
  common: derived,
  self: self$Y
};
const collapseTransitionDark = {
  name: "CollapseTransition",
  common: derived$1,
  self: self$Y
};
function self$X(vars) {
  const {
    fontSize: fontSize2,
    boxShadow2,
    popoverColor,
    textColor2,
    borderRadius,
    borderColor,
    heightSmall,
    heightMedium,
    heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    dividerColor
  } = vars;
  return {
    panelFontSize: fontSize2,
    boxShadow: boxShadow2,
    color: popoverColor,
    textColor: textColor2,
    borderRadius,
    border: `1px solid ${borderColor}`,
    heightSmall,
    heightMedium,
    heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    dividerColor
  };
}
const colorPickerLight = createTheme({
  name: "ColorPicker",
  common: derived,
  peers: {
    Input: inputLight,
    Button: buttonLight
  },
  self: self$X
});
const colorPickerDark = {
  name: "ColorPicker",
  common: derived$1,
  peers: {
    Input: inputDark,
    Button: buttonDark
  },
  self: self$X
};
const configProviderProps = {
  abstract: Boolean,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clsPrefix: String,
  locale: Object,
  dateLocale: Object,
  namespace: String,
  rtl: Array,
  tag: {
    type: String,
    default: "div"
  },
  hljs: Object,
  katex: Object,
  theme: Object,
  themeOverrides: Object,
  componentOptions: Object,
  icons: Object,
  breakpoints: Object,
  preflightStyleDisabled: Boolean,
  styleMountTarget: Object,
  inlineThemeDisabled: {
    type: Boolean,
    default: void 0
  },
  // deprecated
  as: {
    type: String,
    validator: () => {
      warn("config-provider", "`as` is deprecated, please use `tag` instead.");
      return true;
    },
    default: void 0
  }
};
const __unplugin_components_3$1 = /* @__PURE__ */ defineComponent({
  name: "ConfigProvider",
  alias: ["App"],
  props: configProviderProps,
  setup(props) {
    const NConfigProvider = inject(configProviderInjectionKey, null);
    const mergedThemeRef = computed(() => {
      const {
        theme
      } = props;
      if (theme === null) return void 0;
      const inheritedTheme = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeRef.value;
      return theme === void 0 ? inheritedTheme : inheritedTheme === void 0 ? theme : Object.assign({}, inheritedTheme, theme);
    });
    const mergedThemeOverridesRef = computed(() => {
      const {
        themeOverrides
      } = props;
      if (themeOverrides === null) return void 0;
      if (themeOverrides === void 0) {
        return NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeOverridesRef.value;
      } else {
        const inheritedThemeOverrides = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeOverridesRef.value;
        if (inheritedThemeOverrides === void 0) {
          return themeOverrides;
        } else {
          return merge$1({}, inheritedThemeOverrides, themeOverrides);
        }
      }
    });
    const mergedNamespaceRef = useMemo(() => {
      const {
        namespace: namespace2
      } = props;
      return namespace2 === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedNamespaceRef.value : namespace2;
    });
    const mergedBorderedRef = useMemo(() => {
      const {
        bordered
      } = props;
      return bordered === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedBorderedRef.value : bordered;
    });
    const mergedIconsRef = computed(() => {
      const {
        icons
      } = props;
      return icons === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedIconsRef.value : icons;
    });
    const mergedComponentPropsRef = computed(() => {
      const {
        componentOptions
      } = props;
      if (componentOptions !== void 0) return componentOptions;
      return NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedComponentPropsRef.value;
    });
    const mergedClsPrefixRef = computed(() => {
      const {
        clsPrefix
      } = props;
      if (clsPrefix !== void 0) return clsPrefix;
      if (NConfigProvider) return NConfigProvider.mergedClsPrefixRef.value;
      return defaultClsPrefix;
    });
    const mergedRtlRef = computed(() => {
      var _a;
      const {
        rtl
      } = props;
      if (rtl === void 0) {
        return NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedRtlRef.value;
      }
      const rtlEnabledState = {};
      for (const rtlInfo of rtl) {
        rtlEnabledState[rtlInfo.name] = markRaw(rtlInfo);
        (_a = rtlInfo.peers) === null || _a === void 0 ? void 0 : _a.forEach((peerRtlInfo) => {
          if (!(peerRtlInfo.name in rtlEnabledState)) {
            rtlEnabledState[peerRtlInfo.name] = markRaw(peerRtlInfo);
          }
        });
      }
      return rtlEnabledState;
    });
    const mergedBreakpointsRef = computed(() => {
      return props.breakpoints || (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedBreakpointsRef.value);
    });
    const inlineThemeDisabled = props.inlineThemeDisabled || (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.inlineThemeDisabled);
    const preflightStyleDisabled = props.preflightStyleDisabled || (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.preflightStyleDisabled);
    const styleMountTarget = props.styleMountTarget || (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget);
    const mergedThemeHashRef = computed(() => {
      const {
        value: theme
      } = mergedThemeRef;
      const {
        value: mergedThemeOverrides
      } = mergedThemeOverridesRef;
      const hasThemeOverrides = mergedThemeOverrides && Object.keys(mergedThemeOverrides).length !== 0;
      const themeName = theme === null || theme === void 0 ? void 0 : theme.name;
      if (themeName) {
        if (hasThemeOverrides) {
          return `${themeName}-${murmur2(JSON.stringify(mergedThemeOverridesRef.value))}`;
        }
        return themeName;
      } else {
        if (hasThemeOverrides) {
          return murmur2(JSON.stringify(mergedThemeOverridesRef.value));
        }
        return "";
      }
    });
    provide(configProviderInjectionKey, {
      mergedThemeHashRef,
      mergedBreakpointsRef,
      mergedRtlRef,
      mergedIconsRef,
      mergedComponentPropsRef,
      mergedBorderedRef,
      mergedNamespaceRef,
      mergedClsPrefixRef,
      mergedLocaleRef: computed(() => {
        const {
          locale
        } = props;
        if (locale === null) return void 0;
        return locale === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedLocaleRef.value : locale;
      }),
      mergedDateLocaleRef: computed(() => {
        const {
          dateLocale
        } = props;
        if (dateLocale === null) return void 0;
        return dateLocale === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedDateLocaleRef.value : dateLocale;
      }),
      mergedHljsRef: computed(() => {
        const {
          hljs
        } = props;
        return hljs === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedHljsRef.value : hljs;
      }),
      mergedKatexRef: computed(() => {
        const {
          katex
        } = props;
        return katex === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedKatexRef.value : katex;
      }),
      mergedThemeRef,
      mergedThemeOverridesRef,
      inlineThemeDisabled: inlineThemeDisabled || false,
      preflightStyleDisabled: preflightStyleDisabled || false,
      styleMountTarget
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      mergedNamespace: mergedNamespaceRef,
      mergedTheme: mergedThemeRef,
      mergedThemeOverrides: mergedThemeOverridesRef
    };
  },
  render() {
    var _a, _b, _c, _d;
    return !this.abstract ? h(this.as || this.tag, {
      class: `${this.mergedClsPrefix || defaultClsPrefix}-config-provider`
    }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)) : (_d = (_c = this.$slots).default) === null || _d === void 0 ? void 0 : _d.call(_c);
  }
});
const popselect = {
  name: "Popselect",
  common: derived$1,
  peers: {
    Popover: popoverDark,
    InternalSelectMenu: internalSelectMenuDark
  }
};
function self$W(vars) {
  const {
    boxShadow2
  } = vars;
  return {
    menuBoxShadow: boxShadow2
  };
}
const popselectLight = createTheme({
  name: "Popselect",
  common: derived,
  peers: {
    Popover: popoverLight,
    InternalSelectMenu: internalSelectMenuLight
  },
  self: self$W
});
function self$V(vars) {
  const {
    boxShadow2
  } = vars;
  return {
    menuBoxShadow: boxShadow2
  };
}
const selectLight = createTheme({
  name: "Select",
  common: derived,
  peers: {
    InternalSelection: internalSelectionLight,
    InternalSelectMenu: internalSelectMenuLight
  },
  self: self$V
});
const selectDark = {
  name: "Select",
  common: derived$1,
  peers: {
    InternalSelection: internalSelectionDark,
    InternalSelectMenu: internalSelectMenuDark
  },
  self: self$V
};
const commonVariables$b = {
  itemPaddingSmall: "0 4px",
  itemMarginSmall: "0 0 0 8px",
  itemMarginSmallRtl: "0 8px 0 0",
  itemPaddingMedium: "0 4px",
  itemMarginMedium: "0 0 0 8px",
  itemMarginMediumRtl: "0 8px 0 0",
  itemPaddingLarge: "0 4px",
  itemMarginLarge: "0 0 0 8px",
  itemMarginLargeRtl: "0 8px 0 0",
  buttonIconSizeSmall: "14px",
  buttonIconSizeMedium: "16px",
  buttonIconSizeLarge: "18px",
  inputWidthSmall: "60px",
  selectWidthSmall: "unset",
  inputMarginSmall: "0 0 0 8px",
  inputMarginSmallRtl: "0 8px 0 0",
  selectMarginSmall: "0 0 0 8px",
  prefixMarginSmall: "0 8px 0 0",
  suffixMarginSmall: "0 0 0 8px",
  inputWidthMedium: "60px",
  selectWidthMedium: "unset",
  inputMarginMedium: "0 0 0 8px",
  inputMarginMediumRtl: "0 8px 0 0",
  selectMarginMedium: "0 0 0 8px",
  prefixMarginMedium: "0 8px 0 0",
  suffixMarginMedium: "0 0 0 8px",
  inputWidthLarge: "60px",
  selectWidthLarge: "unset",
  inputMarginLarge: "0 0 0 8px",
  inputMarginLargeRtl: "0 8px 0 0",
  selectMarginLarge: "0 0 0 8px",
  prefixMarginLarge: "0 8px 0 0",
  suffixMarginLarge: "0 0 0 8px"
};
function self$U(vars) {
  const {
    textColor2,
    primaryColor,
    primaryColorHover,
    primaryColorPressed,
    inputColorDisabled,
    textColorDisabled,
    borderColor,
    borderRadius,
    // item font size
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    // item size
    heightTiny,
    heightSmall,
    heightMedium
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$b), {
    buttonColor: "#0000",
    buttonColorHover: "#0000",
    buttonColorPressed: "#0000",
    buttonBorder: `1px solid ${borderColor}`,
    buttonBorderHover: `1px solid ${borderColor}`,
    buttonBorderPressed: `1px solid ${borderColor}`,
    buttonIconColor: textColor2,
    buttonIconColorHover: textColor2,
    buttonIconColorPressed: textColor2,
    itemTextColor: textColor2,
    itemTextColorHover: primaryColorHover,
    itemTextColorPressed: primaryColorPressed,
    itemTextColorActive: primaryColor,
    itemTextColorDisabled: textColorDisabled,
    itemColor: "#0000",
    itemColorHover: "#0000",
    itemColorPressed: "#0000",
    itemColorActive: "#0000",
    itemColorActiveHover: "#0000",
    itemColorDisabled: inputColorDisabled,
    itemBorder: "1px solid #0000",
    itemBorderHover: "1px solid #0000",
    itemBorderPressed: "1px solid #0000",
    itemBorderActive: `1px solid ${primaryColor}`,
    itemBorderDisabled: `1px solid ${borderColor}`,
    itemBorderRadius: borderRadius,
    itemSizeSmall: heightTiny,
    itemSizeMedium: heightSmall,
    itemSizeLarge: heightMedium,
    itemFontSizeSmall: fontSizeTiny,
    itemFontSizeMedium: fontSizeSmall,
    itemFontSizeLarge: fontSizeMedium,
    jumperFontSizeSmall: fontSizeTiny,
    jumperFontSizeMedium: fontSizeSmall,
    jumperFontSizeLarge: fontSizeMedium,
    jumperTextColor: textColor2,
    jumperTextColorDisabled: textColorDisabled
  });
}
const paginationLight = createTheme({
  name: "Pagination",
  common: derived,
  peers: {
    Select: selectLight,
    Input: inputLight,
    Popselect: popselectLight
  },
  self: self$U
});
const paginationDark = {
  name: "Pagination",
  common: derived$1,
  peers: {
    Select: selectDark,
    Input: inputDark,
    Popselect: popselect
  },
  self(vars) {
    const {
      primaryColor,
      opacity3
    } = vars;
    const borderColorActive = changeColor(primaryColor, {
      alpha: Number(opacity3)
    });
    const commonSelf = self$U(vars);
    commonSelf.itemBorderActive = `1px solid ${borderColorActive}`;
    commonSelf.itemBorderDisabled = "1px solid #0000";
    return commonSelf;
  }
};
const commonVariables$a = {
  padding: "4px 0",
  optionIconSizeSmall: "14px",
  optionIconSizeMedium: "16px",
  optionIconSizeLarge: "16px",
  optionIconSizeHuge: "18px",
  optionSuffixWidthSmall: "14px",
  optionSuffixWidthMedium: "14px",
  optionSuffixWidthLarge: "16px",
  optionSuffixWidthHuge: "16px",
  optionIconSuffixWidthSmall: "32px",
  optionIconSuffixWidthMedium: "32px",
  optionIconSuffixWidthLarge: "36px",
  optionIconSuffixWidthHuge: "36px",
  optionPrefixWidthSmall: "14px",
  optionPrefixWidthMedium: "14px",
  optionPrefixWidthLarge: "16px",
  optionPrefixWidthHuge: "16px",
  optionIconPrefixWidthSmall: "36px",
  optionIconPrefixWidthMedium: "36px",
  optionIconPrefixWidthLarge: "40px",
  optionIconPrefixWidthHuge: "40px"
};
function self$T(vars) {
  const {
    primaryColor,
    textColor2,
    dividerColor,
    hoverColor,
    popoverColor,
    invertedColor,
    borderRadius,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge,
    textColor3,
    opacityDisabled
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$a), {
    optionHeightSmall: heightSmall,
    optionHeightMedium: heightMedium,
    optionHeightLarge: heightLarge,
    optionHeightHuge: heightHuge,
    borderRadius,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge,
    // non-inverted
    optionTextColor: textColor2,
    optionTextColorHover: textColor2,
    optionTextColorActive: primaryColor,
    optionTextColorChildActive: primaryColor,
    color: popoverColor,
    dividerColor,
    suffixColor: textColor2,
    prefixColor: textColor2,
    optionColorHover: hoverColor,
    optionColorActive: changeColor(primaryColor, {
      alpha: 0.1
    }),
    groupHeaderTextColor: textColor3,
    // inverted
    optionTextColorInverted: "#BBB",
    optionTextColorHoverInverted: "#FFF",
    optionTextColorActiveInverted: "#FFF",
    optionTextColorChildActiveInverted: "#FFF",
    colorInverted: invertedColor,
    dividerColorInverted: "#BBB",
    suffixColorInverted: "#BBB",
    prefixColorInverted: "#BBB",
    optionColorHoverInverted: primaryColor,
    optionColorActiveInverted: primaryColor,
    groupHeaderTextColorInverted: "#AAA",
    optionOpacityDisabled: opacityDisabled
  });
}
const dropdownLight = createTheme({
  name: "Dropdown",
  common: derived,
  peers: {
    Popover: popoverLight
  },
  self: self$T
});
const dropdownDark = {
  name: "Dropdown",
  common: derived$1,
  peers: {
    Popover: popoverDark
  },
  self(vars) {
    const {
      primaryColorSuppl,
      primaryColor,
      popoverColor
    } = vars;
    const commonSelf = self$T(vars);
    commonSelf.colorInverted = popoverColor;
    commonSelf.optionColorActive = changeColor(primaryColor, {
      alpha: 0.15
    });
    commonSelf.optionColorActiveInverted = primaryColorSuppl;
    commonSelf.optionColorHoverInverted = primaryColorSuppl;
    return commonSelf;
  }
};
const commonVars$9 = {
  padding: "8px 14px"
};
const tooltipDark = {
  name: "Tooltip",
  common: derived$1,
  peers: {
    Popover: popoverDark
  },
  self(vars) {
    const {
      borderRadius,
      boxShadow2,
      popoverColor,
      textColor2
    } = vars;
    return Object.assign(Object.assign({}, commonVars$9), {
      borderRadius,
      boxShadow: boxShadow2,
      color: popoverColor,
      textColor: textColor2
    });
  }
};
function self$S(vars) {
  const {
    borderRadius,
    boxShadow2,
    baseColor
  } = vars;
  return Object.assign(Object.assign({}, commonVars$9), {
    borderRadius,
    boxShadow: boxShadow2,
    color: composite(baseColor, "rgba(0, 0, 0, .85)"),
    textColor: baseColor
  });
}
const tooltipLight = createTheme({
  name: "Tooltip",
  common: derived,
  peers: {
    Popover: popoverLight
  },
  self: self$S
});
const ellipsisDark = {
  name: "Ellipsis",
  common: derived$1,
  peers: {
    Tooltip: tooltipDark
  }
};
const ellipsisLight = createTheme({
  name: "Ellipsis",
  common: derived,
  peers: {
    Tooltip: tooltipLight
  }
});
const commonVariables$9 = {
  radioSizeSmall: "14px",
  radioSizeMedium: "16px",
  radioSizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
const radioDark = {
  name: "Radio",
  common: derived$1,
  self(vars) {
    const {
      borderColor,
      primaryColor,
      baseColor,
      textColorDisabled,
      inputColorDisabled,
      textColor2,
      opacityDisabled,
      borderRadius,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      heightSmall,
      heightMedium,
      heightLarge,
      lineHeight: lineHeight2
    } = vars;
    return Object.assign(Object.assign({}, commonVariables$9), {
      labelLineHeight: lineHeight2,
      buttonHeightSmall: heightSmall,
      buttonHeightMedium: heightMedium,
      buttonHeightLarge: heightLarge,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      boxShadow: `inset 0 0 0 1px ${borderColor}`,
      boxShadowActive: `inset 0 0 0 1px ${primaryColor}`,
      boxShadowFocus: `inset 0 0 0 1px ${primaryColor}, 0 0 0 2px ${changeColor(primaryColor, {
        alpha: 0.3
      })}`,
      boxShadowHover: `inset 0 0 0 1px ${primaryColor}`,
      boxShadowDisabled: `inset 0 0 0 1px ${borderColor}`,
      color: "#0000",
      colorDisabled: inputColorDisabled,
      colorActive: "#0000",
      textColor: textColor2,
      textColorDisabled,
      dotColorActive: primaryColor,
      dotColorDisabled: borderColor,
      buttonBorderColor: borderColor,
      buttonBorderColorActive: primaryColor,
      buttonBorderColorHover: primaryColor,
      buttonColor: "#0000",
      buttonColorActive: primaryColor,
      buttonTextColor: textColor2,
      buttonTextColorActive: baseColor,
      buttonTextColorHover: primaryColor,
      opacityDisabled,
      buttonBoxShadowFocus: `inset 0 0 0 1px ${primaryColor}, 0 0 0 2px ${changeColor(primaryColor, {
        alpha: 0.3
      })}`,
      buttonBoxShadowHover: `inset 0 0 0 1px ${primaryColor}`,
      buttonBoxShadow: "inset 0 0 0 1px #0000",
      buttonBorderRadius: borderRadius
    });
  }
};
function self$R(vars) {
  const {
    borderColor,
    primaryColor,
    baseColor,
    textColorDisabled,
    inputColorDisabled,
    textColor2,
    opacityDisabled,
    borderRadius,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightSmall,
    heightMedium,
    heightLarge,
    lineHeight: lineHeight2
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$9), {
    labelLineHeight: lineHeight2,
    buttonHeightSmall: heightSmall,
    buttonHeightMedium: heightMedium,
    buttonHeightLarge: heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    boxShadow: `inset 0 0 0 1px ${borderColor}`,
    boxShadowActive: `inset 0 0 0 1px ${primaryColor}`,
    boxShadowFocus: `inset 0 0 0 1px ${primaryColor}, 0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    boxShadowHover: `inset 0 0 0 1px ${primaryColor}`,
    boxShadowDisabled: `inset 0 0 0 1px ${borderColor}`,
    color: baseColor,
    colorDisabled: inputColorDisabled,
    colorActive: "#0000",
    textColor: textColor2,
    textColorDisabled,
    dotColorActive: primaryColor,
    dotColorDisabled: borderColor,
    buttonBorderColor: borderColor,
    buttonBorderColorActive: primaryColor,
    buttonBorderColorHover: borderColor,
    buttonColor: baseColor,
    buttonColorActive: baseColor,
    buttonTextColor: textColor2,
    buttonTextColorActive: primaryColor,
    buttonTextColorHover: primaryColor,
    opacityDisabled,
    buttonBoxShadowFocus: `inset 0 0 0 1px ${primaryColor}, 0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.3
    })}`,
    buttonBoxShadowHover: "inset 0 0 0 1px #0000",
    buttonBoxShadow: "inset 0 0 0 1px #0000",
    buttonBorderRadius: borderRadius
  });
}
const radioLight = {
  name: "Radio",
  common: derived,
  self: self$R
};
const commonVariables$8 = {
  thPaddingSmall: "8px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "8px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px",
  sorterSize: "15px",
  resizableContainerSize: "8px",
  resizableSize: "2px",
  filterSize: "15px",
  paginationMargin: "12px 0 0 0",
  emptyPadding: "48px 0",
  actionPadding: "8px 12px",
  actionButtonMargin: "0 8px 0 0"
};
function self$Q(vars) {
  const {
    cardColor,
    modalColor,
    popoverColor,
    textColor2,
    textColor1,
    tableHeaderColor,
    tableColorHover,
    iconColor,
    primaryColor,
    fontWeightStrong,
    borderRadius,
    lineHeight: lineHeight2,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    dividerColor,
    heightSmall,
    opacityDisabled,
    tableColorStriped
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$8), {
    actionDividerColor: dividerColor,
    lineHeight: lineHeight2,
    borderRadius,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    borderColor: composite(cardColor, dividerColor),
    tdColorHover: composite(cardColor, tableColorHover),
    tdColorSorting: composite(cardColor, tableColorHover),
    tdColorStriped: composite(cardColor, tableColorStriped),
    thColor: composite(cardColor, tableHeaderColor),
    thColorHover: composite(composite(cardColor, tableHeaderColor), tableColorHover),
    thColorSorting: composite(composite(cardColor, tableHeaderColor), tableColorHover),
    tdColor: cardColor,
    tdTextColor: textColor2,
    thTextColor: textColor1,
    thFontWeight: fontWeightStrong,
    thButtonColorHover: tableColorHover,
    thIconColor: iconColor,
    thIconColorActive: primaryColor,
    // modal
    borderColorModal: composite(modalColor, dividerColor),
    tdColorHoverModal: composite(modalColor, tableColorHover),
    tdColorSortingModal: composite(modalColor, tableColorHover),
    tdColorStripedModal: composite(modalColor, tableColorStriped),
    thColorModal: composite(modalColor, tableHeaderColor),
    thColorHoverModal: composite(composite(modalColor, tableHeaderColor), tableColorHover),
    thColorSortingModal: composite(composite(modalColor, tableHeaderColor), tableColorHover),
    tdColorModal: modalColor,
    // popover
    borderColorPopover: composite(popoverColor, dividerColor),
    tdColorHoverPopover: composite(popoverColor, tableColorHover),
    tdColorSortingPopover: composite(popoverColor, tableColorHover),
    tdColorStripedPopover: composite(popoverColor, tableColorStriped),
    thColorPopover: composite(popoverColor, tableHeaderColor),
    thColorHoverPopover: composite(composite(popoverColor, tableHeaderColor), tableColorHover),
    thColorSortingPopover: composite(composite(popoverColor, tableHeaderColor), tableColorHover),
    tdColorPopover: popoverColor,
    boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)",
    boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)",
    // loading
    loadingColor: primaryColor,
    loadingSize: heightSmall,
    opacityLoading: opacityDisabled
  });
}
const dataTableLight = createTheme({
  name: "DataTable",
  common: derived,
  peers: {
    Button: buttonLight,
    Checkbox: checkboxLight,
    Radio: radioLight,
    Pagination: paginationLight,
    Scrollbar: scrollbarLight,
    Empty: emptyLight,
    Popover: popoverLight,
    Ellipsis: ellipsisLight,
    Dropdown: dropdownLight
  },
  self: self$Q
});
const dataTableDark = {
  name: "DataTable",
  common: derived$1,
  peers: {
    Button: buttonDark,
    Checkbox: checkboxDark,
    Radio: radioDark,
    Pagination: paginationDark,
    Scrollbar: scrollbarDark,
    Empty: emptyDark,
    Popover: popoverDark,
    Ellipsis: ellipsisDark,
    Dropdown: dropdownDark
  },
  self(vars) {
    const commonSelf = self$Q(vars);
    commonSelf.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)";
    commonSelf.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)";
    return commonSelf;
  }
};
function self$P(vars) {
  const {
    textColorBase,
    opacity1,
    opacity2,
    opacity3,
    opacity4,
    opacity5
  } = vars;
  return {
    color: textColorBase,
    opacity1Depth: opacity1,
    opacity2Depth: opacity2,
    opacity3Depth: opacity3,
    opacity4Depth: opacity4,
    opacity5Depth: opacity5
  };
}
const iconLight = {
  name: "Icon",
  common: derived,
  self: self$P
};
const iconDark$1 = {
  name: "Icon",
  common: derived$1,
  self: self$P
};
const commonVars$8 = {
  itemFontSize: "12px",
  itemHeight: "36px",
  itemWidth: "52px",
  panelActionPadding: "8px 0"
};
function self$O(vars) {
  const {
    popoverColor,
    textColor2,
    primaryColor,
    hoverColor,
    dividerColor,
    opacityDisabled,
    boxShadow2,
    borderRadius,
    iconColor,
    iconColorDisabled
  } = vars;
  return Object.assign(Object.assign({}, commonVars$8), {
    panelColor: popoverColor,
    panelBoxShadow: boxShadow2,
    panelDividerColor: dividerColor,
    itemTextColor: textColor2,
    itemTextColorActive: primaryColor,
    itemColorHover: hoverColor,
    itemOpacityDisabled: opacityDisabled,
    itemBorderRadius: borderRadius,
    borderRadius,
    iconColor,
    iconColorDisabled
  });
}
const timePickerLight = createTheme({
  name: "TimePicker",
  common: derived,
  peers: {
    Scrollbar: scrollbarLight,
    Button: buttonLight,
    Input: inputLight
  },
  self: self$O
});
const timePickerDark = {
  name: "TimePicker",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarDark,
    Button: buttonDark,
    Input: inputDark
  },
  self: self$O
};
const commonVars$7 = {
  itemSize: "24px",
  itemCellWidth: "38px",
  itemCellHeight: "32px",
  scrollItemWidth: "80px",
  scrollItemHeight: "40px",
  panelExtraFooterPadding: "8px 12px",
  panelActionPadding: "8px 12px",
  calendarTitlePadding: "0",
  calendarTitleHeight: "28px",
  arrowSize: "14px",
  panelHeaderPadding: "8px 12px",
  calendarDaysHeight: "32px",
  calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px",
  // type
  calendarLeftPaddingDate: "6px 12px 4px 12px",
  calendarLeftPaddingDatetime: "4px 12px",
  calendarLeftPaddingDaterange: "6px 12px 4px 12px",
  calendarLeftPaddingDatetimerange: "4px 12px",
  calendarLeftPaddingMonth: "0",
  // TODO: make it actually effective
  calendarLeftPaddingYear: "0",
  calendarLeftPaddingQuarter: "0",
  calendarLeftPaddingMonthrange: "0",
  calendarLeftPaddingQuarterrange: "0",
  calendarLeftPaddingYearrange: "0",
  calendarLeftPaddingWeek: "6px 12px 4px 12px",
  calendarRightPaddingDate: "6px 12px 4px 12px",
  calendarRightPaddingDatetime: "4px 12px",
  calendarRightPaddingDaterange: "6px 12px 4px 12px",
  calendarRightPaddingDatetimerange: "4px 12px",
  calendarRightPaddingMonth: "0",
  calendarRightPaddingYear: "0",
  calendarRightPaddingQuarter: "0",
  calendarRightPaddingMonthrange: "0",
  calendarRightPaddingQuarterrange: "0",
  calendarRightPaddingYearrange: "0",
  calendarRightPaddingWeek: "0"
};
function self$N(vars) {
  const {
    hoverColor,
    fontSize: fontSize2,
    textColor2,
    textColorDisabled,
    popoverColor,
    primaryColor,
    borderRadiusSmall,
    iconColor,
    iconColorDisabled,
    textColor1,
    dividerColor,
    boxShadow2,
    borderRadius,
    fontWeightStrong
  } = vars;
  return Object.assign(Object.assign({}, commonVars$7), {
    itemFontSize: fontSize2,
    calendarDaysFontSize: fontSize2,
    calendarTitleFontSize: fontSize2,
    itemTextColor: textColor2,
    itemTextColorDisabled: textColorDisabled,
    itemTextColorActive: popoverColor,
    itemTextColorCurrent: primaryColor,
    itemColorIncluded: changeColor(primaryColor, {
      alpha: 0.1
    }),
    itemColorHover: hoverColor,
    itemColorDisabled: hoverColor,
    itemColorActive: primaryColor,
    itemBorderRadius: borderRadiusSmall,
    panelColor: popoverColor,
    panelTextColor: textColor2,
    arrowColor: iconColor,
    calendarTitleTextColor: textColor1,
    calendarTitleColorHover: hoverColor,
    calendarDaysTextColor: textColor2,
    panelHeaderDividerColor: dividerColor,
    calendarDaysDividerColor: dividerColor,
    calendarDividerColor: dividerColor,
    panelActionDividerColor: dividerColor,
    panelBoxShadow: boxShadow2,
    panelBorderRadius: borderRadius,
    calendarTitleFontWeight: fontWeightStrong,
    scrollItemBorderRadius: borderRadius,
    iconColor,
    iconColorDisabled
  });
}
const datePickerLight = createTheme({
  name: "DatePicker",
  common: derived,
  peers: {
    Input: inputLight,
    Button: buttonLight,
    TimePicker: timePickerLight,
    Scrollbar: scrollbarLight
  },
  self: self$N
});
const datePickerDark = {
  name: "DatePicker",
  common: derived$1,
  peers: {
    Input: inputDark,
    Button: buttonDark,
    TimePicker: timePickerDark,
    Scrollbar: scrollbarDark
  },
  self(vars) {
    const {
      popoverColor,
      hoverColor,
      primaryColor
    } = vars;
    const commonSelf = self$N(vars);
    commonSelf.itemColorDisabled = composite(popoverColor, hoverColor);
    commonSelf.itemColorIncluded = changeColor(primaryColor, {
      alpha: 0.15
    });
    commonSelf.itemColorHover = composite(popoverColor, hoverColor);
    return commonSelf;
  }
};
const commonVariables$7 = {
  thPaddingBorderedSmall: "8px 12px",
  thPaddingBorderedMedium: "12px 16px",
  thPaddingBorderedLarge: "16px 24px",
  thPaddingSmall: "0",
  thPaddingMedium: "0",
  thPaddingLarge: "0",
  tdPaddingBorderedSmall: "8px 12px",
  tdPaddingBorderedMedium: "12px 16px",
  tdPaddingBorderedLarge: "16px 24px",
  tdPaddingSmall: "0 0 8px 0",
  tdPaddingMedium: "0 0 12px 0",
  tdPaddingLarge: "0 0 16px 0"
};
function self$M(vars) {
  const {
    tableHeaderColor,
    textColor2,
    textColor1,
    cardColor,
    modalColor,
    popoverColor,
    dividerColor,
    borderRadius,
    fontWeightStrong,
    lineHeight: lineHeight2,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$7), {
    lineHeight: lineHeight2,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    titleTextColor: textColor1,
    thColor: composite(cardColor, tableHeaderColor),
    thColorModal: composite(modalColor, tableHeaderColor),
    thColorPopover: composite(popoverColor, tableHeaderColor),
    thTextColor: textColor1,
    thFontWeight: fontWeightStrong,
    tdTextColor: textColor2,
    tdColor: cardColor,
    tdColorModal: modalColor,
    tdColorPopover: popoverColor,
    borderColor: composite(cardColor, dividerColor),
    borderColorModal: composite(modalColor, dividerColor),
    borderColorPopover: composite(popoverColor, dividerColor),
    borderRadius
  });
}
const descriptionsLight = {
  name: "Descriptions",
  common: derived,
  self: self$M
};
const descriptionsDark = {
  name: "Descriptions",
  common: derived$1,
  self: self$M
};
const dialogProviderInjectionKey = createInjectionKey("n-dialog-provider");
const dialogApiInjectionKey = createInjectionKey("n-dialog-api");
const dialogReactiveListInjectionKey = createInjectionKey("n-dialog-reactive-list");
const commonVars$6 = {
  titleFontSize: "18px",
  padding: "16px 28px 20px 28px",
  iconSize: "28px",
  actionSpace: "12px",
  contentMargin: "8px 0 16px 0",
  iconMargin: "0 4px 0 0",
  iconMarginIconTop: "4px 0 8px 0",
  closeSize: "22px",
  closeIconSize: "18px",
  closeMargin: "20px 26px 0 0",
  closeMarginIconTop: "10px 16px 0 0"
};
function self$L(vars) {
  const {
    textColor1,
    textColor2,
    modalColor,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    infoColor,
    successColor,
    warningColor,
    errorColor,
    primaryColor,
    dividerColor,
    borderRadius,
    fontWeightStrong,
    lineHeight: lineHeight2,
    fontSize: fontSize2
  } = vars;
  return Object.assign(Object.assign({}, commonVars$6), {
    fontSize: fontSize2,
    lineHeight: lineHeight2,
    border: `1px solid ${dividerColor}`,
    titleTextColor: textColor1,
    textColor: textColor2,
    color: modalColor,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeBorderRadius: borderRadius,
    iconColor: primaryColor,
    iconColorInfo: infoColor,
    iconColorSuccess: successColor,
    iconColorWarning: warningColor,
    iconColorError: errorColor,
    borderRadius,
    titleFontWeight: fontWeightStrong
  });
}
const dialogLight = createTheme({
  name: "Dialog",
  common: derived,
  peers: {
    Button: buttonLight
  },
  self: self$L
});
const dialogDark = {
  name: "Dialog",
  common: derived$1,
  peers: {
    Button: buttonDark
  },
  self: self$L
};
const dialogProps = {
  icon: Function,
  type: {
    type: String,
    default: "default"
  },
  title: [String, Function],
  closable: {
    type: Boolean,
    default: true
  },
  negativeText: String,
  positiveText: String,
  positiveButtonProps: Object,
  negativeButtonProps: Object,
  content: [String, Function],
  action: Function,
  showIcon: {
    type: Boolean,
    default: true
  },
  loading: Boolean,
  bordered: Boolean,
  iconPlacement: String,
  titleClass: [String, Array],
  titleStyle: [String, Object],
  contentClass: [String, Array],
  contentStyle: [String, Object],
  actionClass: [String, Array],
  actionStyle: [String, Object],
  onPositiveClick: Function,
  onNegativeClick: Function,
  onClose: Function
};
const dialogPropKeys = keysOf(dialogProps);
const style$2 = c([cB("dialog", `
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `, [cE("icon", {
  color: "var(--n-icon-color)"
}), cM("bordered", {
  border: "var(--n-border)"
}), cM("icon-top", [cE("close", {
  margin: "var(--n-close-margin)"
}), cE("icon", {
  margin: "var(--n-icon-margin)"
}), cE("content", {
  textAlign: "center"
}), cE("title", {
  justifyContent: "center"
}), cE("action", {
  justifyContent: "center"
})]), cM("icon-left", [cE("icon", {
  margin: "var(--n-icon-margin)"
}), cM("closable", [cE("title", `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), cE("close", `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), cE("content", `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [cM("last", "margin-bottom: 0;")]), cE("action", `
 display: flex;
 justify-content: flex-end;
 `, [c("> *:not(:last-child)", `
 margin-right: var(--n-action-space);
 `)]), cE("icon", `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), cE("title", `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), cB("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), insideModal(cB("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), cB("dialog", [asModal(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]);
const iconRenderMap$1 = {
  default: () => h(InfoIcon, null),
  info: () => h(InfoIcon, null),
  success: () => h(SuccessIcon, null),
  warning: () => h(WarningIcon, null),
  error: () => h(ErrorIcon, null)
};
const NDialog = /* @__PURE__ */ defineComponent({
  name: "Dialog",
  alias: [
    "NimbusConfirmCard",
    // deprecated
    "Confirm"
    // deprecated
  ],
  props: Object.assign(Object.assign({}, useTheme.props), dialogProps),
  setup(props) {
    const {
      mergedComponentPropsRef,
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl("Dialog", mergedRtlRef, mergedClsPrefixRef);
    const mergedIconPlacementRef = computed(() => {
      var _a, _b;
      const {
        iconPlacement
      } = props;
      return iconPlacement || ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Dialog) === null || _b === void 0 ? void 0 : _b.iconPlacement) || "left";
    });
    function handlePositiveClick(e) {
      const {
        onPositiveClick
      } = props;
      if (onPositiveClick) onPositiveClick(e);
    }
    function handleNegativeClick(e) {
      const {
        onNegativeClick
      } = props;
      if (onNegativeClick) onNegativeClick(e);
    }
    function handleCloseClick() {
      const {
        onClose
      } = props;
      if (onClose) onClose();
    }
    const themeRef = useTheme("Dialog", "-dialog", style$2, dialogLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        type
      } = props;
      const iconPlacement = mergedIconPlacementRef.value;
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: {
          fontSize: fontSize2,
          lineHeight: lineHeight2,
          border,
          titleTextColor,
          textColor,
          color,
          closeBorderRadius,
          closeColorHover,
          closeColorPressed,
          closeIconColor,
          closeIconColorHover,
          closeIconColorPressed,
          closeIconSize,
          borderRadius,
          titleFontWeight,
          titleFontSize,
          padding,
          iconSize,
          actionSpace,
          contentMargin,
          closeSize,
          [iconPlacement === "top" ? "iconMarginIconTop" : "iconMargin"]: iconMargin,
          [iconPlacement === "top" ? "closeMarginIconTop" : "closeMargin"]: closeMargin,
          [createKey("iconColor", type)]: iconColor
        }
      } = themeRef.value;
      const iconMarginDiscrete = getMargin(iconMargin);
      return {
        "--n-font-size": fontSize2,
        "--n-icon-color": iconColor,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-close-margin": closeMargin,
        "--n-icon-margin-top": iconMarginDiscrete.top,
        "--n-icon-margin-right": iconMarginDiscrete.right,
        "--n-icon-margin-bottom": iconMarginDiscrete.bottom,
        "--n-icon-margin-left": iconMarginDiscrete.left,
        "--n-icon-size": iconSize,
        "--n-close-size": closeSize,
        "--n-close-icon-size": closeIconSize,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-color": color,
        "--n-text-color": textColor,
        "--n-border-radius": borderRadius,
        "--n-padding": padding,
        "--n-line-height": lineHeight2,
        "--n-border": border,
        "--n-content-margin": contentMargin,
        "--n-title-font-size": titleFontSize,
        "--n-title-font-weight": titleFontWeight,
        "--n-title-text-color": titleTextColor,
        "--n-action-space": actionSpace
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("dialog", computed(() => `${props.type[0]}${mergedIconPlacementRef.value[0]}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      mergedIconPlacement: mergedIconPlacementRef,
      mergedTheme: themeRef,
      handlePositiveClick,
      handleNegativeClick,
      handleCloseClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      bordered,
      mergedIconPlacement,
      cssVars,
      closable,
      showIcon,
      title,
      content,
      action,
      negativeText,
      positiveText,
      positiveButtonProps,
      negativeButtonProps,
      handlePositiveClick,
      handleNegativeClick,
      mergedTheme,
      loading,
      type,
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    const icon = showIcon ? h(NBaseIcon, {
      clsPrefix: mergedClsPrefix,
      class: `${mergedClsPrefix}-dialog__icon`
    }, {
      default: () => resolveWrappedSlot(this.$slots.icon, (children) => children || (this.icon ? render(this.icon) : iconRenderMap$1[this.type]()))
    }) : null;
    const actionNode = resolveWrappedSlot(this.$slots.action, (children) => children || positiveText || negativeText || action ? h("div", {
      class: [`${mergedClsPrefix}-dialog__action`, this.actionClass],
      style: this.actionStyle
    }, children || (action ? [render(action)] : [this.negativeText && h(Button, Object.assign({
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      ghost: true,
      size: "small",
      onClick: handleNegativeClick
    }, negativeButtonProps), {
      default: () => render(this.negativeText)
    }), this.positiveText && h(Button, Object.assign({
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "small",
      type: type === "default" ? "primary" : type,
      disabled: loading,
      loading,
      onClick: handlePositiveClick
    }, positiveButtonProps), {
      default: () => render(this.positiveText)
    })])) : null);
    return h("div", {
      class: [`${mergedClsPrefix}-dialog`, this.themeClass, this.closable && `${mergedClsPrefix}-dialog--closable`, `${mergedClsPrefix}-dialog--icon-${mergedIconPlacement}`, bordered && `${mergedClsPrefix}-dialog--bordered`, this.rtlEnabled && `${mergedClsPrefix}-dialog--rtl`],
      style: cssVars,
      role: "dialog"
    }, closable ? resolveWrappedSlot(this.$slots.close, (node) => {
      const classNames = [`${mergedClsPrefix}-dialog__close`, this.rtlEnabled && `${mergedClsPrefix}-dialog--rtl`];
      return node ? h("div", {
        class: classNames
      }, node) : h(NBaseClose, {
        clsPrefix: mergedClsPrefix,
        class: classNames,
        onClick: this.handleCloseClick
      });
    }) : null, showIcon && mergedIconPlacement === "top" ? h("div", {
      class: `${mergedClsPrefix}-dialog-icon-container`
    }, icon) : null, h("div", {
      class: [`${mergedClsPrefix}-dialog__title`, this.titleClass],
      style: this.titleStyle
    }, showIcon && mergedIconPlacement === "left" ? icon : null, resolveSlot(this.$slots.header, () => [render(title)])), h("div", {
      class: [`${mergedClsPrefix}-dialog__content`, actionNode ? "" : `${mergedClsPrefix}-dialog__content--last`, this.contentClass],
      style: this.contentStyle
    }, resolveSlot(this.$slots.default, () => [render(content)])), actionNode);
  }
});
function self$K(vars) {
  const {
    modalColor,
    textColor2,
    boxShadow3
  } = vars;
  return {
    color: modalColor,
    textColor: textColor2,
    boxShadow: boxShadow3
  };
}
const modalLight = createTheme({
  name: "Modal",
  common: derived,
  peers: {
    Scrollbar: scrollbarLight,
    Dialog: dialogLight,
    Card: cardLight
  },
  self: self$K
});
const modalDark = {
  name: "Modal",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarDark,
    Dialog: dialogDark,
    Card: cardDark
  },
  self: self$K
};
const presetProps = Object.assign(Object.assign({}, cardBaseProps), dialogProps);
const presetPropsKeys = keysOf(presetProps);
const NModalBodyWrapper = /* @__PURE__ */ defineComponent({
  name: "ModalBody",
  inheritAttrs: false,
  props: Object.assign(Object.assign({
    show: {
      type: Boolean,
      required: true
    },
    preset: String,
    displayDirective: {
      type: String,
      required: true
    },
    trapFocus: {
      type: Boolean,
      default: true
    },
    autoFocus: {
      type: Boolean,
      default: true
    },
    blockScroll: Boolean
  }, presetProps), {
    renderMask: Function,
    // events
    onClickoutside: Function,
    onBeforeLeave: {
      type: Function,
      required: true
    },
    onAfterLeave: {
      type: Function,
      required: true
    },
    onPositiveClick: {
      type: Function,
      required: true
    },
    onNegativeClick: {
      type: Function,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    },
    onAfterEnter: Function,
    onEsc: Function
  }),
  setup(props) {
    const bodyRef = ref(null);
    const scrollbarRef = ref(null);
    const displayedRef = ref(props.show);
    const transformOriginXRef = ref(null);
    const transformOriginYRef = ref(null);
    watch(toRef(props, "show"), (value) => {
      if (value) displayedRef.value = true;
    });
    useLockHtmlScroll(computed(() => props.blockScroll && displayedRef.value));
    const NModal = inject(modalInjectionKey);
    function styleTransformOrigin() {
      if (NModal.transformOriginRef.value === "center") {
        return "";
      }
      const {
        value: transformOriginX
      } = transformOriginXRef;
      const {
        value: transformOriginY
      } = transformOriginYRef;
      if (transformOriginX === null || transformOriginY === null) {
        return "";
      } else if (scrollbarRef.value) {
        const scrollTop = scrollbarRef.value.containerScrollTop;
        return `${transformOriginX}px ${transformOriginY + scrollTop}px`;
      }
      return "";
    }
    function syncTransformOrigin(el) {
      if (NModal.transformOriginRef.value === "center") {
        return;
      }
      const mousePosition = NModal.getMousePosition();
      if (!mousePosition) {
        return;
      }
      if (!scrollbarRef.value) return;
      const scrollTop = scrollbarRef.value.containerScrollTop;
      const {
        offsetLeft,
        offsetTop
      } = el;
      if (mousePosition) {
        const top = mousePosition.y;
        const left = mousePosition.x;
        transformOriginXRef.value = -(offsetLeft - left);
        transformOriginYRef.value = -(offsetTop - top - scrollTop);
      }
      el.style.transformOrigin = styleTransformOrigin();
    }
    function handleEnter(el) {
      void nextTick(() => {
        syncTransformOrigin(el);
      });
    }
    function handleBeforeLeave(el) {
      el.style.transformOrigin = styleTransformOrigin();
      props.onBeforeLeave();
    }
    function handleAfterLeave() {
      displayedRef.value = false;
      transformOriginXRef.value = null;
      transformOriginYRef.value = null;
      props.onAfterLeave();
    }
    function handleCloseClick() {
      const {
        onClose
      } = props;
      if (onClose) {
        onClose();
      }
    }
    function handleNegativeClick() {
      props.onNegativeClick();
    }
    function handlePositiveClick() {
      props.onPositiveClick();
    }
    const childNodeRef = ref(null);
    watch(childNodeRef, (node) => {
      if (node) {
        void nextTick(() => {
          const el = node.el;
          if (el && bodyRef.value !== el) {
            bodyRef.value = el;
          }
        });
      }
    });
    provide(modalBodyInjectionKey, bodyRef);
    provide(drawerBodyInjectionKey, null);
    provide(popoverBodyInjectionKey, null);
    return {
      mergedTheme: NModal.mergedThemeRef,
      appear: NModal.appearRef,
      isMounted: NModal.isMountedRef,
      mergedClsPrefix: NModal.mergedClsPrefixRef,
      bodyRef,
      scrollbarRef,
      displayed: displayedRef,
      childNodeRef,
      handlePositiveClick,
      handleNegativeClick,
      handleCloseClick,
      handleAfterLeave,
      handleBeforeLeave,
      handleEnter
    };
  },
  render() {
    const {
      $slots,
      $attrs,
      handleEnter,
      handleAfterLeave,
      handleBeforeLeave,
      preset,
      mergedClsPrefix
    } = this;
    let childNode = null;
    if (!preset) {
      childNode = getFirstSlotVNode($slots);
      if (!childNode) {
        warn("modal", "default slot is empty");
        return;
      }
      childNode = cloneVNode(childNode);
      childNode.props = mergeProps({
        class: `${mergedClsPrefix}-modal`
      }, $attrs, childNode.props || {});
    }
    return this.displayDirective === "show" || this.displayed || this.show ? withDirectives(h("div", {
      role: "none",
      class: `${mergedClsPrefix}-modal-body-wrapper`
    }, h(Scrollbar, {
      ref: "scrollbarRef",
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      contentClass: `${mergedClsPrefix}-modal-scroll-content`
    }, {
      default: () => {
        var _a;
        return [(_a = this.renderMask) === null || _a === void 0 ? void 0 : _a.call(this), h(FocusTrap, {
          disabled: !this.trapFocus,
          active: this.show,
          onEsc: this.onEsc,
          autoFocus: this.autoFocus
        }, {
          default: () => {
            var _a2;
            return h(Transition, {
              name: "fade-in-scale-up-transition",
              appear: (_a2 = this.appear) !== null && _a2 !== void 0 ? _a2 : this.isMounted,
              onEnter: handleEnter,
              onAfterEnter: this.onAfterEnter,
              onAfterLeave: handleAfterLeave,
              onBeforeLeave: handleBeforeLeave
            }, {
              default: () => {
                const dirs = [[vShow, this.show]];
                const {
                  onClickoutside
                } = this;
                if (onClickoutside) {
                  dirs.push([clickoutside, this.onClickoutside, void 0, {
                    capture: true
                  }]);
                }
                return withDirectives(this.preset === "confirm" || this.preset === "dialog" ? h(NDialog, Object.assign({}, this.$attrs, {
                  class: [`${mergedClsPrefix}-modal`, this.$attrs.class],
                  ref: "bodyRef",
                  theme: this.mergedTheme.peers.Dialog,
                  themeOverrides: this.mergedTheme.peerOverrides.Dialog
                }, keep(this.$props, dialogPropKeys), {
                  "aria-modal": "true"
                }), $slots) : this.preset === "card" ? h(__unplugin_components_2, Object.assign({}, this.$attrs, {
                  ref: "bodyRef",
                  class: [`${mergedClsPrefix}-modal`, this.$attrs.class],
                  theme: this.mergedTheme.peers.Card,
                  themeOverrides: this.mergedTheme.peerOverrides.Card
                }, keep(this.$props, cardBasePropKeys), {
                  "aria-modal": "true",
                  role: "dialog"
                }), $slots) : this.childNodeRef = childNode, dirs);
              }
            });
          }
        })];
      }
    })), [[vShow, this.displayDirective === "if" || this.displayed || this.show]]) : null;
  }
});
const style$1 = c([cB("modal-container", `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), cB("modal-mask", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [fadeInTransition({
  enterDuration: ".25s",
  leaveDuration: ".25s",
  enterCubicBezier: "var(--n-bezier-ease-out)",
  leaveCubicBezier: "var(--n-bezier-ease-out)"
})]), cB("modal-body-wrapper", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [cB("modal-scroll-content", `
 min-height: 100%;
 display: flex;
 position: relative;
 `)]), cB("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [fadeInScaleUpTransition({
  duration: ".25s",
  enterScale: ".5"
})])]);
const modalProps = Object.assign(Object.assign(Object.assign(Object.assign({}, useTheme.props), {
  show: Boolean,
  unstableShowMask: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  preset: String,
  to: [String, Object],
  displayDirective: {
    type: String,
    default: "if"
  },
  transformOrigin: {
    type: String,
    default: "mouse"
  },
  zIndex: Number,
  autoFocus: {
    type: Boolean,
    default: true
  },
  trapFocus: {
    type: Boolean,
    default: true
  },
  closeOnEsc: {
    type: Boolean,
    default: true
  },
  blockScroll: {
    type: Boolean,
    default: true
  }
}), presetProps), {
  // events
  onEsc: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  onAfterEnter: Function,
  onBeforeLeave: Function,
  onAfterLeave: Function,
  onClose: Function,
  onPositiveClick: Function,
  onNegativeClick: Function,
  onMaskClick: Function,
  // private
  internalDialog: Boolean,
  internalModal: Boolean,
  internalAppear: {
    type: Boolean,
    default: void 0
  },
  // deprecated
  overlayStyle: [String, Object],
  onBeforeHide: Function,
  onAfterHide: Function,
  onHide: Function
});
const __unplugin_components_3 = /* @__PURE__ */ defineComponent({
  name: "Modal",
  inheritAttrs: false,
  props: modalProps,
  setup(props) {
    const containerRef = ref(null);
    const {
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Modal", "-modal", style$1, modalLight, props, mergedClsPrefixRef);
    const clickedRef = useClicked(64);
    const clickedPositionRef = useClickPosition();
    const isMountedRef = isMounted();
    const NDialogProvider2 = props.internalDialog ? inject(dialogProviderInjectionKey, null) : null;
    const NModalProvider = props.internalModal ? inject(modalProviderInjectionKey, null) : null;
    const isComposingRef2 = useIsComposing();
    function doUpdateShow(show) {
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow,
        onHide
      } = props;
      if (onUpdateShow) call(onUpdateShow, show);
      if (_onUpdateShow) call(_onUpdateShow, show);
      if (onHide && !show) onHide(show);
    }
    function handleCloseClick() {
      const {
        onClose
      } = props;
      if (onClose) {
        void Promise.resolve(onClose()).then((value) => {
          if (value === false) return;
          doUpdateShow(false);
        });
      } else {
        doUpdateShow(false);
      }
    }
    function handlePositiveClick() {
      const {
        onPositiveClick
      } = props;
      if (onPositiveClick) {
        void Promise.resolve(onPositiveClick()).then((value) => {
          if (value === false) return;
          doUpdateShow(false);
        });
      } else {
        doUpdateShow(false);
      }
    }
    function handleNegativeClick() {
      const {
        onNegativeClick
      } = props;
      if (onNegativeClick) {
        void Promise.resolve(onNegativeClick()).then((value) => {
          if (value === false) return;
          doUpdateShow(false);
        });
      } else {
        doUpdateShow(false);
      }
    }
    function handleBeforeLeave() {
      const {
        onBeforeLeave,
        onBeforeHide
      } = props;
      if (onBeforeLeave) call(onBeforeLeave);
      if (onBeforeHide) onBeforeHide();
    }
    function handleAfterLeave() {
      const {
        onAfterLeave,
        onAfterHide
      } = props;
      if (onAfterLeave) call(onAfterLeave);
      if (onAfterHide) onAfterHide();
    }
    function handleClickoutside(e) {
      var _a;
      const {
        onMaskClick
      } = props;
      if (onMaskClick) {
        onMaskClick(e);
      }
      if (props.maskClosable) {
        if ((_a = containerRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e))) {
          doUpdateShow(false);
        }
      }
    }
    function handleEsc(e) {
      var _a;
      (_a = props.onEsc) === null || _a === void 0 ? void 0 : _a.call(props);
      if (props.show && props.closeOnEsc && eventEffectNotPerformed(e)) {
        if (!isComposingRef2.value) {
          doUpdateShow(false);
        }
      }
    }
    provide(modalInjectionKey, {
      getMousePosition: () => {
        const mergedProvider = NDialogProvider2 || NModalProvider;
        if (mergedProvider) {
          const {
            clickedRef: clickedRef2,
            clickedPositionRef: clickedPositionRef2
          } = mergedProvider;
          if (clickedRef2.value && clickedPositionRef2.value) {
            return clickedPositionRef2.value;
          }
        }
        if (clickedRef.value) {
          return clickedPositionRef.value;
        }
        return null;
      },
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      isMountedRef,
      appearRef: toRef(props, "internalAppear"),
      transformOriginRef: toRef(props, "transformOrigin")
    });
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseOut: cubicBezierEaseOut2
        },
        self: {
          boxShadow,
          color,
          textColor
        }
      } = themeRef.value;
      return {
        "--n-bezier-ease-out": cubicBezierEaseOut2,
        "--n-box-shadow": boxShadow,
        "--n-color": color,
        "--n-text-color": textColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("theme-class", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      isMounted: isMountedRef,
      containerRef,
      presetProps: computed(() => {
        const pickedProps = keep(props, presetPropsKeys);
        return pickedProps;
      }),
      handleEsc,
      handleAfterLeave,
      handleClickoutside,
      handleBeforeLeave,
      doUpdateShow,
      handleNegativeClick,
      handlePositiveClick,
      handleCloseClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h(LazyTeleport, {
      to: this.to,
      show: this.show
    }, {
      default: () => {
        var _a;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        const {
          unstableShowMask
        } = this;
        return withDirectives(h("div", {
          role: "none",
          ref: "containerRef",
          class: [`${mergedClsPrefix}-modal-container`, this.themeClass, this.namespace],
          style: this.cssVars
        }, h(NModalBodyWrapper, Object.assign({
          style: this.overlayStyle
        }, this.$attrs, {
          ref: "bodyWrapper",
          displayDirective: this.displayDirective,
          show: this.show,
          preset: this.preset,
          autoFocus: this.autoFocus,
          trapFocus: this.trapFocus,
          blockScroll: this.blockScroll
        }, this.presetProps, {
          onEsc: this.handleEsc,
          onClose: this.handleCloseClick,
          onNegativeClick: this.handleNegativeClick,
          onPositiveClick: this.handlePositiveClick,
          onBeforeLeave: this.handleBeforeLeave,
          onAfterEnter: this.onAfterEnter,
          onAfterLeave: this.handleAfterLeave,
          onClickoutside: unstableShowMask ? void 0 : this.handleClickoutside,
          renderMask: unstableShowMask ? () => {
            var _a2;
            return h(Transition, {
              name: "fade-in-transition",
              key: "mask",
              appear: (_a2 = this.internalAppear) !== null && _a2 !== void 0 ? _a2 : this.isMounted
            }, {
              default: () => {
                return this.show ? h("div", {
                  "aria-hidden": true,
                  ref: "containerRef",
                  class: `${mergedClsPrefix}-modal-mask`,
                  onClick: this.handleClickoutside
                }) : null;
              }
            });
          } : void 0
        }), this.$slots)), [[zindexable, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
});
const exposedDialogEnvProps = Object.assign(Object.assign({}, dialogProps), {
  onAfterEnter: Function,
  onAfterLeave: Function,
  transformOrigin: String,
  blockScroll: {
    type: Boolean,
    default: true
  },
  closeOnEsc: {
    type: Boolean,
    default: true
  },
  onEsc: Function,
  autoFocus: {
    type: Boolean,
    default: true
  },
  internalStyle: [String, Object],
  maskClosable: {
    type: Boolean,
    default: true
  },
  onPositiveClick: Function,
  onNegativeClick: Function,
  onClose: Function,
  onMaskClick: Function
});
const NDialogEnvironment = /* @__PURE__ */ defineComponent({
  name: "DialogEnvironment",
  props: Object.assign(Object.assign({}, exposedDialogEnvProps), {
    internalKey: {
      type: String,
      required: true
    },
    to: [String, Object],
    // private
    onInternalAfterLeave: {
      type: Function,
      required: true
    }
  }),
  setup(props) {
    const showRef = ref(true);
    function handleAfterLeave() {
      const {
        onInternalAfterLeave,
        internalKey,
        onAfterLeave
      } = props;
      if (onInternalAfterLeave) onInternalAfterLeave(internalKey);
      if (onAfterLeave) onAfterLeave();
    }
    function handlePositiveClick(e) {
      const {
        onPositiveClick
      } = props;
      if (onPositiveClick) {
        void Promise.resolve(onPositiveClick(e)).then((result) => {
          if (result === false) return;
          hide();
        });
      } else {
        hide();
      }
    }
    function handleNegativeClick(e) {
      const {
        onNegativeClick
      } = props;
      if (onNegativeClick) {
        void Promise.resolve(onNegativeClick(e)).then((result) => {
          if (result === false) return;
          hide();
        });
      } else {
        hide();
      }
    }
    function handleCloseClick() {
      const {
        onClose
      } = props;
      if (onClose) {
        void Promise.resolve(onClose()).then((result) => {
          if (result === false) return;
          hide();
        });
      } else {
        hide();
      }
    }
    function handleMaskClick(e) {
      const {
        onMaskClick,
        maskClosable
      } = props;
      if (onMaskClick) {
        onMaskClick(e);
        if (maskClosable) {
          hide();
        }
      }
    }
    function handleEsc() {
      const {
        onEsc
      } = props;
      if (onEsc) {
        onEsc();
      }
    }
    function hide() {
      showRef.value = false;
    }
    function handleUpdateShow(value) {
      showRef.value = value;
    }
    return {
      show: showRef,
      hide,
      handleUpdateShow,
      handleAfterLeave,
      handleCloseClick,
      handleNegativeClick,
      handlePositiveClick,
      handleMaskClick,
      handleEsc
    };
  },
  render() {
    const {
      handlePositiveClick,
      handleUpdateShow,
      handleNegativeClick,
      handleCloseClick,
      handleAfterLeave,
      handleMaskClick,
      handleEsc,
      to,
      maskClosable,
      show
    } = this;
    return h(__unplugin_components_3, {
      show,
      onUpdateShow: handleUpdateShow,
      onMaskClick: handleMaskClick,
      onEsc: handleEsc,
      to,
      maskClosable,
      onAfterEnter: this.onAfterEnter,
      onAfterLeave: handleAfterLeave,
      closeOnEsc: this.closeOnEsc,
      blockScroll: this.blockScroll,
      autoFocus: this.autoFocus,
      transformOrigin: this.transformOrigin,
      internalAppear: true,
      internalDialog: true
    }, {
      default: () => h(NDialog, Object.assign({}, keep(this.$props, dialogPropKeys), {
        style: this.internalStyle,
        onClose: handleCloseClick,
        onNegativeClick: handleNegativeClick,
        onPositiveClick: handlePositiveClick
      }))
    });
  }
});
const dialogProviderProps = {
  injectionKey: String,
  to: [String, Object]
};
const NDialogProvider = /* @__PURE__ */ defineComponent({
  name: "DialogProvider",
  props: dialogProviderProps,
  setup() {
    const dialogListRef = ref([]);
    const dialogInstRefs = {};
    function create(options = {}) {
      const key = createId();
      const dialogReactive = reactive(Object.assign(Object.assign({}, options), {
        key,
        destroy: () => {
          var _a;
          (_a = dialogInstRefs[`n-dialog-${key}`]) === null || _a === void 0 ? void 0 : _a.hide();
        }
      }));
      dialogListRef.value.push(dialogReactive);
      return dialogReactive;
    }
    const typedApi = ["info", "success", "warning", "error"].map((type) => (options) => {
      return create(Object.assign(Object.assign({}, options), {
        type
      }));
    });
    function handleAfterLeave(key) {
      const {
        value: dialogList
      } = dialogListRef;
      dialogList.splice(dialogList.findIndex((dialog) => dialog.key === key), 1);
    }
    function destroyAll() {
      Object.values(dialogInstRefs).forEach((dialogInstRef) => {
        dialogInstRef === null || dialogInstRef === void 0 ? void 0 : dialogInstRef.hide();
      });
    }
    const api2 = {
      create,
      destroyAll,
      info: typedApi[0],
      success: typedApi[1],
      warning: typedApi[2],
      error: typedApi[3]
    };
    provide(dialogApiInjectionKey, api2);
    provide(dialogProviderInjectionKey, {
      clickedRef: useClicked(64),
      clickedPositionRef: useClickPosition()
    });
    provide(dialogReactiveListInjectionKey, dialogListRef);
    return Object.assign(Object.assign({}, api2), {
      dialogList: dialogListRef,
      dialogInstRefs,
      handleAfterLeave
    });
  },
  render() {
    var _a, _b;
    return h(Fragment, null, [this.dialogList.map((dialog) => h(NDialogEnvironment, omit(dialog, ["destroy", "style"], {
      internalStyle: dialog.style,
      to: this.to,
      ref: (inst) => {
        if (inst === null) {
          delete this.dialogInstRefs[`n-dialog-${dialog.key}`];
        } else {
          this.dialogInstRefs[`n-dialog-${dialog.key}`] = inst;
        }
      },
      internalKey: dialog.key,
      onInternalAfterLeave: this.handleAfterLeave
    }))), (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)]);
  }
});
const loadingBarDark = {
  name: "LoadingBar",
  common: derived$1,
  self(vars) {
    const {
      primaryColor
    } = vars;
    return {
      colorError: "red",
      colorLoading: primaryColor,
      height: "2px"
    };
  }
};
function self$J(vars) {
  const {
    primaryColor,
    errorColor
  } = vars;
  return {
    colorError: errorColor,
    colorLoading: primaryColor,
    height: "2px"
  };
}
const loadingBarLight = {
  name: "LoadingBar",
  common: derived,
  self: self$J
};
const commonVariables$6 = {
  margin: "0 0 8px 0",
  padding: "10px 20px",
  maxWidth: "720px",
  minWidth: "420px",
  iconMargin: "0 10px 0 0",
  closeMargin: "0 0 0 10px",
  closeSize: "20px",
  closeIconSize: "16px",
  iconSize: "20px",
  fontSize: "14px"
};
function self$I(vars) {
  const {
    textColor2,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    infoColor,
    successColor,
    errorColor,
    warningColor,
    popoverColor,
    boxShadow2,
    primaryColor,
    lineHeight: lineHeight2,
    borderRadius,
    closeColorHover,
    closeColorPressed
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$6), {
    closeBorderRadius: borderRadius,
    textColor: textColor2,
    textColorInfo: textColor2,
    textColorSuccess: textColor2,
    textColorError: textColor2,
    textColorWarning: textColor2,
    textColorLoading: textColor2,
    color: popoverColor,
    colorInfo: popoverColor,
    colorSuccess: popoverColor,
    colorError: popoverColor,
    colorWarning: popoverColor,
    colorLoading: popoverColor,
    boxShadow: boxShadow2,
    boxShadowInfo: boxShadow2,
    boxShadowSuccess: boxShadow2,
    boxShadowError: boxShadow2,
    boxShadowWarning: boxShadow2,
    boxShadowLoading: boxShadow2,
    iconColor: textColor2,
    iconColorInfo: infoColor,
    iconColorSuccess: successColor,
    iconColorWarning: warningColor,
    iconColorError: errorColor,
    iconColorLoading: primaryColor,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHoverInfo: closeColorHover,
    closeColorPressedInfo: closeColorPressed,
    closeIconColorInfo: closeIconColor,
    closeIconColorHoverInfo: closeIconColorHover,
    closeIconColorPressedInfo: closeIconColorPressed,
    closeColorHoverSuccess: closeColorHover,
    closeColorPressedSuccess: closeColorPressed,
    closeIconColorSuccess: closeIconColor,
    closeIconColorHoverSuccess: closeIconColorHover,
    closeIconColorPressedSuccess: closeIconColorPressed,
    closeColorHoverError: closeColorHover,
    closeColorPressedError: closeColorPressed,
    closeIconColorError: closeIconColor,
    closeIconColorHoverError: closeIconColorHover,
    closeIconColorPressedError: closeIconColorPressed,
    closeColorHoverWarning: closeColorHover,
    closeColorPressedWarning: closeColorPressed,
    closeIconColorWarning: closeIconColor,
    closeIconColorHoverWarning: closeIconColorHover,
    closeIconColorPressedWarning: closeIconColorPressed,
    closeColorHoverLoading: closeColorHover,
    closeColorPressedLoading: closeColorPressed,
    closeIconColorLoading: closeIconColor,
    closeIconColorHoverLoading: closeIconColorHover,
    closeIconColorPressedLoading: closeIconColorPressed,
    loadingColor: primaryColor,
    lineHeight: lineHeight2,
    borderRadius
  });
}
const messageLight = {
  name: "Message",
  common: derived,
  self: self$I
};
const messageDark = {
  name: "Message",
  common: derived$1,
  self: self$I
};
const commonVars$5 = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px"
};
function self$H(vars) {
  const {
    textColor2,
    successColor,
    infoColor,
    warningColor,
    errorColor,
    popoverColor,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    textColor1,
    textColor3,
    borderRadius,
    fontWeightStrong,
    boxShadow2,
    lineHeight: lineHeight2,
    fontSize: fontSize2
  } = vars;
  return Object.assign(Object.assign({}, commonVars$5), {
    borderRadius,
    lineHeight: lineHeight2,
    fontSize: fontSize2,
    headerFontWeight: fontWeightStrong,
    iconColor: textColor2,
    iconColorSuccess: successColor,
    iconColorInfo: infoColor,
    iconColorWarning: warningColor,
    iconColorError: errorColor,
    color: popoverColor,
    textColor: textColor2,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeBorderRadius: borderRadius,
    closeColorHover,
    closeColorPressed,
    headerTextColor: textColor1,
    descriptionTextColor: textColor3,
    actionTextColor: textColor2,
    boxShadow: boxShadow2
  });
}
const notificationLight = createTheme({
  name: "Notification",
  common: derived,
  peers: {
    Scrollbar: scrollbarLight
  },
  self: self$H
});
const notificationDark = {
  name: "Notification",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarDark
  },
  self: self$H
};
const notificationProviderInjectionKey = createInjectionKey("n-notification-provider");
const NotificationContainer = /* @__PURE__ */ defineComponent({
  name: "NotificationContainer",
  props: {
    scrollable: {
      type: Boolean,
      required: true
    },
    placement: {
      type: String,
      required: true
    }
  },
  setup() {
    const {
      mergedThemeRef,
      mergedClsPrefixRef,
      wipTransitionCountRef
    } = inject(notificationProviderInjectionKey);
    const selfRef = ref(null);
    watchEffect(() => {
      var _a, _b;
      if (wipTransitionCountRef.value > 0) {
        (_a = selfRef === null || selfRef === void 0 ? void 0 : selfRef.value) === null || _a === void 0 ? void 0 : _a.classList.add("transitioning");
      } else {
        (_b = selfRef === null || selfRef === void 0 ? void 0 : selfRef.value) === null || _b === void 0 ? void 0 : _b.classList.remove("transitioning");
      }
    });
    return {
      selfRef,
      mergedTheme: mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      transitioning: wipTransitionCountRef
    };
  },
  render() {
    const {
      $slots,
      scrollable,
      mergedClsPrefix,
      mergedTheme,
      placement
    } = this;
    return h("div", {
      ref: "selfRef",
      class: [`${mergedClsPrefix}-notification-container`, scrollable && `${mergedClsPrefix}-notification-container--scrollable`, `${mergedClsPrefix}-notification-container--${placement}`]
    }, scrollable ? h(Scrollbar, {
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      contentStyle: {
        overflow: "hidden"
      }
    }, $slots) : $slots);
  }
});
const iconRenderMap = {
  info: () => h(InfoIcon, null),
  success: () => h(SuccessIcon, null),
  warning: () => h(WarningIcon, null),
  error: () => h(ErrorIcon, null),
  default: () => null
};
const notificationProps = {
  closable: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: "default"
  },
  avatar: Function,
  title: [String, Function],
  description: [String, Function],
  content: [String, Function],
  meta: [String, Function],
  action: [String, Function],
  onClose: {
    type: Function,
    required: true
  },
  keepAliveOnHover: Boolean,
  onMouseenter: Function,
  onMouseleave: Function
};
const notificationPropKeys = keysOf(notificationProps);
const Notification = /* @__PURE__ */ defineComponent({
  name: "Notification",
  props: notificationProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedThemeRef,
      props: providerProps
    } = inject(notificationProviderInjectionKey);
    const {
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig();
    const rtlEnabledRef = useRtl("Notification", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        type
      } = props;
      const {
        self: {
          color,
          textColor,
          closeIconColor,
          closeIconColorHover,
          closeIconColorPressed,
          headerTextColor,
          descriptionTextColor,
          actionTextColor,
          borderRadius,
          headerFontWeight,
          boxShadow,
          lineHeight: lineHeight2,
          fontSize: fontSize2,
          closeMargin,
          closeSize,
          width,
          padding,
          closeIconSize,
          closeBorderRadius,
          closeColorHover,
          closeColorPressed,
          titleFontSize,
          metaFontSize,
          descriptionFontSize,
          [createKey("iconColor", type)]: iconColor
        },
        common: {
          cubicBezierEaseOut: cubicBezierEaseOut2,
          cubicBezierEaseIn: cubicBezierEaseIn2,
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        }
      } = mergedThemeRef.value;
      const {
        left,
        right,
        top,
        bottom
      } = getMargin(padding);
      return {
        "--n-color": color,
        "--n-font-size": fontSize2,
        "--n-text-color": textColor,
        "--n-description-text-color": descriptionTextColor,
        "--n-action-text-color": actionTextColor,
        "--n-title-text-color": headerTextColor,
        "--n-title-font-weight": headerFontWeight,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-bezier-ease-out": cubicBezierEaseOut2,
        "--n-bezier-ease-in": cubicBezierEaseIn2,
        "--n-border-radius": borderRadius,
        "--n-box-shadow": boxShadow,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-line-height": lineHeight2,
        "--n-icon-color": iconColor,
        "--n-close-margin": closeMargin,
        "--n-close-size": closeSize,
        "--n-close-icon-size": closeIconSize,
        "--n-width": width,
        "--n-padding-left": left,
        "--n-padding-right": right,
        "--n-padding-top": top,
        "--n-padding-bottom": bottom,
        "--n-title-font-size": titleFontSize,
        "--n-meta-font-size": metaFontSize,
        "--n-description-font-size": descriptionFontSize
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("notification", computed(() => props.type[0]), cssVarsRef, providerProps) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      showAvatar: computed(() => {
        return props.avatar || props.type !== "default";
      }),
      handleCloseClick() {
        props.onClose();
      },
      rtlEnabled: rtlEnabledRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${mergedClsPrefix}-notification-wrapper`, this.themeClass],
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
      style: this.cssVars
    }, h("div", {
      class: [`${mergedClsPrefix}-notification`, this.rtlEnabled && `${mergedClsPrefix}-notification--rtl`, this.themeClass, {
        [`${mergedClsPrefix}-notification--closable`]: this.closable,
        [`${mergedClsPrefix}-notification--show-avatar`]: this.showAvatar
      }],
      style: this.cssVars
    }, this.showAvatar ? h("div", {
      class: `${mergedClsPrefix}-notification__avatar`
    }, this.avatar ? render(this.avatar) : this.type !== "default" ? h(NBaseIcon, {
      clsPrefix: mergedClsPrefix
    }, {
      default: () => iconRenderMap[this.type]()
    }) : null) : null, this.closable ? h(NBaseClose, {
      clsPrefix: mergedClsPrefix,
      class: `${mergedClsPrefix}-notification__close`,
      onClick: this.handleCloseClick
    }) : null, h("div", {
      ref: "bodyRef",
      class: `${mergedClsPrefix}-notification-main`
    }, this.title ? h("div", {
      class: `${mergedClsPrefix}-notification-main__header`
    }, render(this.title)) : null, this.description ? h("div", {
      class: `${mergedClsPrefix}-notification-main__description`
    }, render(this.description)) : null, this.content ? h("pre", {
      class: `${mergedClsPrefix}-notification-main__content`
    }, render(this.content)) : null, this.meta || this.action ? h("div", {
      class: `${mergedClsPrefix}-notification-main-footer`
    }, this.meta ? h("div", {
      class: `${mergedClsPrefix}-notification-main-footer__meta`
    }, render(this.meta)) : null, this.action ? h("div", {
      class: `${mergedClsPrefix}-notification-main-footer__action`
    }, render(this.action)) : null) : null)));
  }
});
const notificationEnvOptions = Object.assign(Object.assign({}, notificationProps), {
  duration: Number,
  onClose: Function,
  onLeave: Function,
  onAfterEnter: Function,
  onAfterLeave: Function,
  /** @deprecated */
  onHide: Function,
  /** @deprecated */
  onAfterShow: Function,
  /** @deprecated */
  onAfterHide: Function
});
const NotificationEnvironment = /* @__PURE__ */ defineComponent({
  name: "NotificationEnvironment",
  props: Object.assign(Object.assign({}, notificationEnvOptions), {
    // private
    internalKey: {
      type: String,
      required: true
    },
    onInternalAfterLeave: {
      type: Function,
      required: true
    }
  }),
  setup(props) {
    const {
      wipTransitionCountRef
    } = inject(notificationProviderInjectionKey);
    const showRef = ref(true);
    let timerId = null;
    function hide() {
      showRef.value = false;
      if (timerId) {
        window.clearTimeout(timerId);
      }
    }
    function handleBeforeEnter(el) {
      wipTransitionCountRef.value++;
      void nextTick(() => {
        el.style.height = `${el.offsetHeight}px`;
        el.style.maxHeight = "0";
        el.style.transition = "none";
        void el.offsetHeight;
        el.style.transition = "";
        el.style.maxHeight = el.style.height;
      });
    }
    function handleAfterEnter(el) {
      wipTransitionCountRef.value--;
      el.style.height = "";
      el.style.maxHeight = "";
      const {
        onAfterEnter,
        onAfterShow
      } = props;
      if (onAfterEnter) onAfterEnter();
      if (onAfterShow) onAfterShow();
    }
    function handleBeforeLeave(el) {
      wipTransitionCountRef.value++;
      el.style.maxHeight = `${el.offsetHeight}px`;
      el.style.height = `${el.offsetHeight}px`;
      void el.offsetHeight;
    }
    function handleLeave(el) {
      const {
        onHide
      } = props;
      if (onHide) onHide();
      el.style.maxHeight = "0";
      void el.offsetHeight;
    }
    function handleAfterLeave() {
      wipTransitionCountRef.value--;
      const {
        onAfterLeave,
        onInternalAfterLeave,
        onAfterHide,
        internalKey
      } = props;
      if (onAfterLeave) onAfterLeave();
      onInternalAfterLeave(internalKey);
      if (onAfterHide) onAfterHide();
    }
    function setHideTimeout() {
      const {
        duration: duration2
      } = props;
      if (duration2) {
        timerId = window.setTimeout(hide, duration2);
      }
    }
    function handleMouseenter(e) {
      if (e.currentTarget !== e.target) return;
      if (timerId !== null) {
        window.clearTimeout(timerId);
        timerId = null;
      }
    }
    function handleMouseleave(e) {
      if (e.currentTarget !== e.target) return;
      setHideTimeout();
    }
    function handleClose() {
      const {
        onClose
      } = props;
      if (onClose) {
        void Promise.resolve(onClose()).then((feedback) => {
          if (feedback === false) return;
          hide();
        });
      } else {
        hide();
      }
    }
    onMounted(() => {
      if (props.duration) {
        timerId = window.setTimeout(hide, props.duration);
      }
    });
    return {
      show: showRef,
      hide,
      handleClose,
      handleAfterLeave,
      handleLeave,
      handleBeforeLeave,
      handleAfterEnter,
      handleBeforeEnter,
      handleMouseenter,
      handleMouseleave
    };
  },
  render() {
    return h(Transition, {
      name: "notification-transition",
      appear: true,
      // convert to any since Element is not compatible with HTMLElement
      onBeforeEnter: this.handleBeforeEnter,
      onAfterEnter: this.handleAfterEnter,
      onBeforeLeave: this.handleBeforeLeave,
      onLeave: this.handleLeave,
      onAfterLeave: this.handleAfterLeave
    }, {
      default: () => {
        return this.show ? h(Notification, Object.assign({}, keep(this.$props, notificationPropKeys), {
          onClose: this.handleClose,
          onMouseenter: this.duration && this.keepAliveOnHover ? this.handleMouseenter : void 0,
          onMouseleave: this.duration && this.keepAliveOnHover ? this.handleMouseleave : void 0
        })) : null;
      }
    });
  }
});
const style = c([cB("notification-container", `
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `, [c(">", [cB("scrollbar", `
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [c(">", [cB("scrollbar-container", `
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [cB("scrollbar-content", `
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]), cM("top, top-right, top-left", `
 top: 12px;
 `, [c("&.transitioning >", [cB("scrollbar", [c(">", [cB("scrollbar-container", `
 min-height: 100vh !important;
 `)])])])]), cM("bottom, bottom-right, bottom-left", `
 bottom: 12px;
 `, [c(">", [cB("scrollbar", [c(">", [cB("scrollbar-container", [cB("scrollbar-content", `
 padding-bottom: 12px;
 `)])])])]), cB("notification-wrapper", `
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]), cM("top, bottom", `
 left: 50%;
 transform: translateX(-50%);
 `, [cB("notification-wrapper", [c("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: scale(0.85);
 `), c("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: scale(1);
 `)])]), cM("top", [cB("notification-wrapper", `
 transform-origin: top center;
 `)]), cM("bottom", [cB("notification-wrapper", `
 transform-origin: bottom center;
 `)]), cM("top-right, bottom-right", [cB("notification", `
 margin-left: 28px;
 margin-right: 16px;
 `)]), cM("top-left, bottom-left", [cB("notification", `
 margin-left: 16px;
 margin-right: 28px;
 `)]), cM("top-right", `
 right: 0;
 `, [placementTransformStyle("top-right")]), cM("top-left", `
 left: 0;
 `, [placementTransformStyle("top-left")]), cM("bottom-right", `
 right: 0;
 `, [placementTransformStyle("bottom-right")]), cM("bottom-left", `
 left: 0;
 `, [placementTransformStyle("bottom-left")]), cM("scrollable", [cM("top-right", `
 top: 0;
 `), cM("top-left", `
 top: 0;
 `), cM("bottom-right", `
 bottom: 0;
 `), cM("bottom-left", `
 bottom: 0;
 `)]), cB("notification-wrapper", `
 margin-bottom: 12px;
 `, [c("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `), c("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 opacity: 1;
 `), c("&.notification-transition-leave-active", `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `), c("&.notification-transition-enter-active", `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]), cB("notification", `
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 max-width: calc(100vw - 16px - 16px);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `, [cE("avatar", [cB("icon", `
 color: var(--n-icon-color);
 `), cB("base-icon", `
 color: var(--n-icon-color);
 `)]), cM("show-avatar", [cB("notification-main", `
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]), cM("closable", [cB("notification-main", [c("> *:first-child", `
 padding-right: 20px;
 `)]), cE("close", `
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), cE("avatar", `
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [cB("icon", "transition: color .3s var(--n-bezier);")]), cB("notification-main", `
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `, [cB("notification-main-footer", `
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `, [cE("meta", `
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `), cE("action", `
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]), cE("header", `
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `), cE("description", `
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `), cE("content", `
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `, [c("&:first-child", "margin: 0;")])])])])]);
function placementTransformStyle(placement) {
  const direction = placement.split("-")[1];
  const transformXEnter = direction === "left" ? "calc(-100%)" : "calc(100%)";
  const transformXLeave = "0";
  return cB("notification-wrapper", [c("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: translate(${transformXEnter}, 0);
 `), c("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: translate(${transformXLeave}, 0);
 `)]);
}
const notificationApiInjectionKey = createInjectionKey("n-notification-api");
const notificationProviderProps = Object.assign(Object.assign({}, useTheme.props), {
  containerClass: String,
  containerStyle: [String, Object],
  to: [String, Object],
  scrollable: {
    type: Boolean,
    default: true
  },
  max: Number,
  placement: {
    type: String,
    default: "top-right"
  },
  keepAliveOnHover: Boolean
});
const __unplugin_components_1 = /* @__PURE__ */ defineComponent({
  name: "NotificationProvider",
  props: notificationProviderProps,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const notificationListRef = ref([]);
    const notificationRefs = {};
    const leavingKeySet = /* @__PURE__ */ new Set();
    function create(options) {
      const key = createId();
      const destroy = () => {
        leavingKeySet.add(key);
        if (notificationRefs[key]) {
          notificationRefs[key].hide();
        }
      };
      const notificationReactive = reactive(Object.assign(Object.assign({}, options), {
        key,
        destroy,
        hide: destroy,
        deactivate: destroy
      }));
      const {
        max
      } = props;
      if (max && notificationListRef.value.length - leavingKeySet.size >= max) {
        let someoneMountedRemoved = false;
        let index = 0;
        for (const notification of notificationListRef.value) {
          if (!leavingKeySet.has(notification.key)) {
            if (notificationRefs[notification.key]) {
              notification.destroy();
              someoneMountedRemoved = true;
            }
            break;
          }
          index++;
        }
        if (!someoneMountedRemoved) {
          notificationListRef.value.splice(index, 1);
        }
      }
      notificationListRef.value.push(notificationReactive);
      return notificationReactive;
    }
    const apis = ["info", "success", "warning", "error"].map((type) => {
      return (options) => create(Object.assign(Object.assign({}, options), {
        type
      }));
    });
    function handleAfterLeave(key) {
      leavingKeySet.delete(key);
      notificationListRef.value.splice(notificationListRef.value.findIndex((notification) => notification.key === key), 1);
    }
    const themeRef = useTheme("Notification", "-notification", style, notificationLight, props, mergedClsPrefixRef);
    const api2 = {
      create,
      info: apis[0],
      success: apis[1],
      warning: apis[2],
      error: apis[3],
      open,
      destroyAll
    };
    const wipTransitionCountRef = ref(0);
    provide(notificationApiInjectionKey, api2);
    provide(notificationProviderInjectionKey, {
      props,
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      wipTransitionCountRef
    });
    function open(options) {
      return create(options);
    }
    function destroyAll() {
      Object.values(notificationListRef.value).forEach((notification) => {
        notification.hide();
      });
    }
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      notificationList: notificationListRef,
      notificationRefs,
      handleAfterLeave
    }, api2);
  },
  render() {
    var _a, _b, _c;
    const {
      placement
    } = this;
    return h(Fragment, null, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a), this.notificationList.length ? h(Teleport, {
      to: (_c = this.to) !== null && _c !== void 0 ? _c : "body"
    }, h(NotificationContainer, {
      class: this.containerClass,
      style: this.containerStyle,
      scrollable: this.scrollable && placement !== "top" && placement !== "bottom",
      placement
    }, {
      default: () => {
        return this.notificationList.map((notification) => {
          return h(NotificationEnvironment, Object.assign({
            ref: (inst) => {
              const refKey = notification.key;
              if (inst === null) {
                delete this.notificationRefs[refKey];
              } else {
                this.notificationRefs[refKey] = inst;
              }
            }
          }, omit(notification, ["destroy", "hide", "deactivate"]), {
            internalKey: notification.key,
            onInternalAfterLeave: this.handleAfterLeave,
            keepAliveOnHover: notification.keepAliveOnHover === void 0 ? this.keepAliveOnHover : notification.keepAliveOnHover
          }));
        });
      }
    })) : null);
  }
});
function self$G(vars) {
  const {
    textColor1,
    dividerColor,
    fontWeightStrong
  } = vars;
  return {
    textColor: textColor1,
    color: dividerColor,
    fontWeight: fontWeightStrong
  };
}
const dividerLight = {
  name: "Divider",
  common: derived,
  self: self$G
};
const dividerDark = {
  name: "Divider",
  common: derived$1,
  self: self$G
};
function self$F(vars) {
  const {
    modalColor,
    textColor1,
    textColor2,
    boxShadow3,
    lineHeight: lineHeight2,
    fontWeightStrong,
    dividerColor,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    borderRadius,
    primaryColorHover
  } = vars;
  return {
    bodyPadding: "16px 24px",
    borderRadius,
    headerPadding: "16px 24px",
    footerPadding: "16px 24px",
    color: modalColor,
    textColor: textColor2,
    titleTextColor: textColor1,
    titleFontSize: "18px",
    titleFontWeight: fontWeightStrong,
    boxShadow: boxShadow3,
    lineHeight: lineHeight2,
    headerBorderBottom: `1px solid ${dividerColor}`,
    footerBorderTop: `1px solid ${dividerColor}`,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeSize: "22px",
    closeIconSize: "18px",
    closeColorHover,
    closeColorPressed,
    closeBorderRadius: borderRadius,
    resizableTriggerColorHover: primaryColorHover
  };
}
const drawerLight = createTheme({
  name: "Drawer",
  common: derived,
  peers: {
    Scrollbar: scrollbarLight
  },
  self: self$F
});
const drawerDark = {
  name: "Drawer",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarDark
  },
  self: self$F
};
const commonVariables$5 = {
  actionMargin: "0 0 0 20px",
  actionMarginRtl: "0 20px 0 0"
};
const dynamicInputDark = {
  name: "DynamicInput",
  common: derived$1,
  peers: {
    Input: inputDark,
    Button: buttonDark
  },
  self() {
    return commonVariables$5;
  }
};
function self$E() {
  return commonVariables$5;
}
const dynamicInputLight = createTheme({
  name: "DynamicInput",
  common: derived,
  peers: {
    Input: inputLight,
    Button: buttonLight
  },
  self: self$E
});
const commonVars$4 = {
  gapSmall: "4px 8px",
  gapMedium: "8px 12px",
  gapLarge: "12px 16px"
};
const spaceDark = {
  name: "Space",
  self() {
    return commonVars$4;
  }
};
function self$D() {
  return commonVars$4;
}
const spaceLight = {
  name: "Space",
  self: self$D
};
const dynamicTagsDark = {
  name: "DynamicTags",
  common: derived$1,
  peers: {
    Input: inputDark,
    Button: buttonDark,
    Tag: tagDark,
    Space: spaceDark
  },
  self() {
    return {
      inputWidth: "64px"
    };
  }
};
const dynamicTagsLight = createTheme({
  name: "DynamicTags",
  common: derived,
  peers: {
    Input: inputLight,
    Button: buttonLight,
    Tag: tagLight,
    Space: spaceLight
  },
  self() {
    return {
      inputWidth: "64px"
    };
  }
});
const elementDark = {
  name: "Element",
  common: derived$1
};
const elementLight = {
  name: "Element",
  common: derived
};
const commonVars$3 = {
  gapSmall: "4px 8px",
  gapMedium: "8px 12px",
  gapLarge: "12px 16px"
};
const flexDark = {
  name: "Flex",
  self() {
    return commonVars$3;
  }
};
function self$C() {
  return commonVars$3;
}
const flexLight = {
  name: "Flex",
  self: self$C
};
const buttonGroupDark = {
  name: "ButtonGroup",
  common: derived$1
};
const buttonGroupLight = {
  name: "ButtonGroup",
  common: derived
};
const commonVariables$4 = {
  feedbackPadding: "4px 0 0 2px",
  feedbackHeightSmall: "24px",
  feedbackHeightMedium: "24px",
  feedbackHeightLarge: "26px",
  feedbackFontSizeSmall: "13px",
  feedbackFontSizeMedium: "14px",
  feedbackFontSizeLarge: "14px",
  labelFontSizeLeftSmall: "14px",
  labelFontSizeLeftMedium: "14px",
  labelFontSizeLeftLarge: "15px",
  labelFontSizeTopSmall: "13px",
  labelFontSizeTopMedium: "14px",
  labelFontSizeTopLarge: "14px",
  labelHeightSmall: "24px",
  labelHeightMedium: "26px",
  labelHeightLarge: "28px",
  labelPaddingVertical: "0 0 6px 2px",
  labelPaddingHorizontal: "0 12px 0 0",
  labelTextAlignVertical: "left",
  labelTextAlignHorizontal: "right",
  labelFontWeight: "400"
};
function self$B(vars) {
  const {
    heightSmall,
    heightMedium,
    heightLarge,
    textColor1,
    errorColor,
    warningColor,
    lineHeight: lineHeight2,
    textColor3
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$4), {
    blankHeightSmall: heightSmall,
    blankHeightMedium: heightMedium,
    blankHeightLarge: heightLarge,
    lineHeight: lineHeight2,
    labelTextColor: textColor1,
    asteriskColor: errorColor,
    feedbackTextColorError: errorColor,
    feedbackTextColorWarning: warningColor,
    feedbackTextColor: textColor3
  });
}
const formLight = {
  name: "Form",
  common: derived,
  self: self$B
};
const formItemDark = {
  name: "Form",
  common: derived$1,
  self: self$B
};
const gradientTextDark = {
  name: "GradientText",
  common: derived$1,
  self(vars) {
    const {
      primaryColor,
      successColor,
      warningColor,
      errorColor,
      infoColor,
      primaryColorSuppl,
      successColorSuppl,
      warningColorSuppl,
      errorColorSuppl,
      infoColorSuppl,
      fontWeightStrong
    } = vars;
    return {
      fontWeight: fontWeightStrong,
      rotate: "252deg",
      colorStartPrimary: primaryColor,
      colorEndPrimary: primaryColorSuppl,
      colorStartInfo: infoColor,
      colorEndInfo: infoColorSuppl,
      colorStartWarning: warningColor,
      colorEndWarning: warningColorSuppl,
      colorStartError: errorColor,
      colorEndError: errorColorSuppl,
      colorStartSuccess: successColor,
      colorEndSuccess: successColorSuppl
    };
  }
};
function self$A(vars) {
  const {
    primaryColor,
    successColor,
    warningColor,
    errorColor,
    infoColor,
    fontWeightStrong
  } = vars;
  return {
    fontWeight: fontWeightStrong,
    rotate: "252deg",
    colorStartPrimary: changeColor(primaryColor, {
      alpha: 0.6
    }),
    colorEndPrimary: primaryColor,
    colorStartInfo: changeColor(infoColor, {
      alpha: 0.6
    }),
    colorEndInfo: infoColor,
    colorStartWarning: changeColor(warningColor, {
      alpha: 0.6
    }),
    colorEndWarning: warningColor,
    colorStartError: changeColor(errorColor, {
      alpha: 0.6
    }),
    colorEndError: errorColor,
    colorStartSuccess: changeColor(successColor, {
      alpha: 0.6
    }),
    colorEndSuccess: successColor
  };
}
const gradientTextLight = {
  name: "GradientText",
  common: derived,
  self: self$A
};
const inputNumberDark = {
  name: "InputNumber",
  common: derived$1,
  peers: {
    Button: buttonDark,
    Input: inputDark
  },
  self(vars) {
    const {
      textColorDisabled
    } = vars;
    return {
      iconColorDisabled: textColorDisabled
    };
  }
};
function self$z(vars) {
  const {
    textColorDisabled
  } = vars;
  return {
    iconColorDisabled: textColorDisabled
  };
}
const inputNumberLight = createTheme({
  name: "InputNumber",
  common: derived,
  peers: {
    Button: buttonLight,
    Input: inputLight
  },
  self: self$z
});
const layoutDark = {
  name: "Layout",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarDark
  },
  self(vars) {
    const {
      textColor2,
      bodyColor,
      popoverColor,
      cardColor,
      dividerColor,
      scrollbarColor,
      scrollbarColorHover
    } = vars;
    return {
      textColor: textColor2,
      textColorInverted: textColor2,
      color: bodyColor,
      colorEmbedded: bodyColor,
      headerColor: cardColor,
      headerColorInverted: cardColor,
      footerColor: cardColor,
      footerColorInverted: cardColor,
      headerBorderColor: dividerColor,
      headerBorderColorInverted: dividerColor,
      footerBorderColor: dividerColor,
      footerBorderColorInverted: dividerColor,
      siderBorderColor: dividerColor,
      siderBorderColorInverted: dividerColor,
      siderColor: cardColor,
      siderColorInverted: cardColor,
      siderToggleButtonBorder: "1px solid transparent",
      siderToggleButtonColor: popoverColor,
      siderToggleButtonIconColor: textColor2,
      siderToggleButtonIconColorInverted: textColor2,
      siderToggleBarColor: composite(bodyColor, scrollbarColor),
      siderToggleBarColorHover: composite(bodyColor, scrollbarColorHover),
      __invertScrollbar: "false"
    };
  }
};
function self$y(vars) {
  const {
    baseColor,
    textColor2,
    bodyColor,
    cardColor,
    dividerColor,
    actionColor,
    scrollbarColor,
    scrollbarColorHover,
    invertedColor
  } = vars;
  return {
    textColor: textColor2,
    textColorInverted: "#FFF",
    color: bodyColor,
    colorEmbedded: actionColor,
    headerColor: cardColor,
    headerColorInverted: invertedColor,
    footerColor: actionColor,
    footerColorInverted: invertedColor,
    headerBorderColor: dividerColor,
    headerBorderColorInverted: invertedColor,
    footerBorderColor: dividerColor,
    footerBorderColorInverted: invertedColor,
    siderBorderColor: dividerColor,
    siderBorderColorInverted: invertedColor,
    siderColor: cardColor,
    siderColorInverted: invertedColor,
    siderToggleButtonBorder: `1px solid ${dividerColor}`,
    siderToggleButtonColor: baseColor,
    siderToggleButtonIconColor: textColor2,
    siderToggleButtonIconColorInverted: textColor2,
    siderToggleBarColor: composite(bodyColor, scrollbarColor),
    siderToggleBarColorHover: composite(bodyColor, scrollbarColorHover),
    // hack for inverted background
    __invertScrollbar: "true"
  };
}
const layoutLight = createTheme({
  name: "Layout",
  common: derived,
  peers: {
    Scrollbar: scrollbarLight
  },
  self: self$y
});
const rowDark = {
  name: "Row",
  common: derived$1
};
const rowLight = {
  name: "Row",
  common: derived
};
function self$x(vars) {
  const {
    textColor2,
    cardColor,
    modalColor,
    popoverColor,
    dividerColor,
    borderRadius,
    fontSize: fontSize2,
    hoverColor
  } = vars;
  return {
    textColor: textColor2,
    color: cardColor,
    colorHover: hoverColor,
    colorModal: modalColor,
    colorHoverModal: composite(modalColor, hoverColor),
    colorPopover: popoverColor,
    colorHoverPopover: composite(popoverColor, hoverColor),
    borderColor: dividerColor,
    borderColorModal: composite(modalColor, dividerColor),
    borderColorPopover: composite(popoverColor, dividerColor),
    borderRadius,
    fontSize: fontSize2
  };
}
const listLight = {
  name: "List",
  common: derived,
  self: self$x
};
const listDark$1 = {
  name: "List",
  common: derived$1,
  self: self$x
};
const logDark = {
  name: "Log",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarDark,
    Code: codeDark
  },
  self(vars) {
    const {
      textColor2,
      inputColor,
      fontSize: fontSize2,
      primaryColor
    } = vars;
    return {
      loaderFontSize: fontSize2,
      loaderTextColor: textColor2,
      loaderColor: inputColor,
      loaderBorder: "1px solid #0000",
      loadingColor: primaryColor
    };
  }
};
function self$w(vars) {
  const {
    textColor2,
    modalColor,
    borderColor,
    fontSize: fontSize2,
    primaryColor
  } = vars;
  return {
    loaderFontSize: fontSize2,
    loaderTextColor: textColor2,
    loaderColor: modalColor,
    loaderBorder: `1px solid ${borderColor}`,
    loadingColor: primaryColor
  };
}
const logLight = createTheme({
  name: "Log",
  common: derived,
  peers: {
    Scrollbar: scrollbarLight,
    Code: codeLight
  },
  self: self$w
});
const listDark = {
  name: "Mention",
  common: derived$1,
  peers: {
    InternalSelectMenu: internalSelectMenuDark,
    Input: inputDark
  },
  self(vars) {
    const {
      boxShadow2
    } = vars;
    return {
      menuBoxShadow: boxShadow2
    };
  }
};
function self$v(vars) {
  const {
    boxShadow2
  } = vars;
  return {
    menuBoxShadow: boxShadow2
  };
}
const mentionLight = createTheme({
  name: "Mention",
  common: derived,
  peers: {
    InternalSelectMenu: internalSelectMenuLight,
    Input: inputLight
  },
  self: self$v
});
function createPartialInvertedVars(color, activeItemColor, activeTextColor, groupTextColor) {
  return {
    itemColorHoverInverted: "#0000",
    itemColorActiveInverted: activeItemColor,
    itemColorActiveHoverInverted: activeItemColor,
    itemColorActiveCollapsedInverted: activeItemColor,
    itemTextColorInverted: color,
    itemTextColorHoverInverted: activeTextColor,
    itemTextColorChildActiveInverted: activeTextColor,
    itemTextColorChildActiveHoverInverted: activeTextColor,
    itemTextColorActiveInverted: activeTextColor,
    itemTextColorActiveHoverInverted: activeTextColor,
    itemTextColorHorizontalInverted: color,
    itemTextColorHoverHorizontalInverted: activeTextColor,
    itemTextColorChildActiveHorizontalInverted: activeTextColor,
    itemTextColorChildActiveHoverHorizontalInverted: activeTextColor,
    itemTextColorActiveHorizontalInverted: activeTextColor,
    itemTextColorActiveHoverHorizontalInverted: activeTextColor,
    itemIconColorInverted: color,
    itemIconColorHoverInverted: activeTextColor,
    itemIconColorActiveInverted: activeTextColor,
    itemIconColorActiveHoverInverted: activeTextColor,
    itemIconColorChildActiveInverted: activeTextColor,
    itemIconColorChildActiveHoverInverted: activeTextColor,
    itemIconColorCollapsedInverted: color,
    itemIconColorHorizontalInverted: color,
    itemIconColorHoverHorizontalInverted: activeTextColor,
    itemIconColorActiveHorizontalInverted: activeTextColor,
    itemIconColorActiveHoverHorizontalInverted: activeTextColor,
    itemIconColorChildActiveHorizontalInverted: activeTextColor,
    itemIconColorChildActiveHoverHorizontalInverted: activeTextColor,
    arrowColorInverted: color,
    arrowColorHoverInverted: activeTextColor,
    arrowColorActiveInverted: activeTextColor,
    arrowColorActiveHoverInverted: activeTextColor,
    arrowColorChildActiveInverted: activeTextColor,
    arrowColorChildActiveHoverInverted: activeTextColor,
    groupTextColorInverted: groupTextColor
  };
}
function self$u(vars) {
  const {
    borderRadius,
    textColor3,
    primaryColor,
    textColor2,
    textColor1,
    fontSize: fontSize2,
    dividerColor,
    hoverColor,
    primaryColorHover
  } = vars;
  return Object.assign({
    borderRadius,
    color: "#0000",
    groupTextColor: textColor3,
    itemColorHover: hoverColor,
    itemColorActive: changeColor(primaryColor, {
      alpha: 0.1
    }),
    itemColorActiveHover: changeColor(primaryColor, {
      alpha: 0.1
    }),
    itemColorActiveCollapsed: changeColor(primaryColor, {
      alpha: 0.1
    }),
    itemTextColor: textColor2,
    itemTextColorHover: textColor2,
    itemTextColorActive: primaryColor,
    itemTextColorActiveHover: primaryColor,
    itemTextColorChildActive: primaryColor,
    itemTextColorChildActiveHover: primaryColor,
    itemTextColorHorizontal: textColor2,
    itemTextColorHoverHorizontal: primaryColorHover,
    itemTextColorActiveHorizontal: primaryColor,
    itemTextColorActiveHoverHorizontal: primaryColor,
    itemTextColorChildActiveHorizontal: primaryColor,
    itemTextColorChildActiveHoverHorizontal: primaryColor,
    itemIconColor: textColor1,
    itemIconColorHover: textColor1,
    itemIconColorActive: primaryColor,
    itemIconColorActiveHover: primaryColor,
    itemIconColorChildActive: primaryColor,
    itemIconColorChildActiveHover: primaryColor,
    itemIconColorCollapsed: textColor1,
    itemIconColorHorizontal: textColor1,
    itemIconColorHoverHorizontal: primaryColorHover,
    itemIconColorActiveHorizontal: primaryColor,
    itemIconColorActiveHoverHorizontal: primaryColor,
    itemIconColorChildActiveHorizontal: primaryColor,
    itemIconColorChildActiveHoverHorizontal: primaryColor,
    itemHeight: "42px",
    arrowColor: textColor2,
    arrowColorHover: textColor2,
    arrowColorActive: primaryColor,
    arrowColorActiveHover: primaryColor,
    arrowColorChildActive: primaryColor,
    arrowColorChildActiveHover: primaryColor,
    colorInverted: "#0000",
    borderColorHorizontal: "#0000",
    fontSize: fontSize2,
    dividerColor
  }, createPartialInvertedVars("#BBB", primaryColor, "#FFF", "#AAA"));
}
const menuLight = createTheme({
  name: "Menu",
  common: derived,
  peers: {
    Tooltip: tooltipLight,
    Dropdown: dropdownLight
  },
  self: self$u
});
const menuDark = {
  name: "Menu",
  common: derived$1,
  peers: {
    Tooltip: tooltipDark,
    Dropdown: dropdownDark
  },
  self(vars) {
    const {
      primaryColor,
      primaryColorSuppl
    } = vars;
    const commonSelf = self$u(vars);
    commonSelf.itemColorActive = changeColor(primaryColor, {
      alpha: 0.15
    });
    commonSelf.itemColorActiveHover = changeColor(primaryColor, {
      alpha: 0.15
    });
    commonSelf.itemColorActiveCollapsed = changeColor(primaryColor, {
      alpha: 0.15
    });
    commonSelf.itemColorActiveInverted = primaryColorSuppl;
    commonSelf.itemColorActiveHoverInverted = primaryColorSuppl;
    commonSelf.itemColorActiveCollapsedInverted = primaryColorSuppl;
    return commonSelf;
  }
};
const common = {
  titleFontSize: "18px",
  backSize: "22px"
};
function self$t(vars) {
  const {
    textColor1,
    textColor2,
    textColor3,
    fontSize: fontSize2,
    fontWeightStrong,
    primaryColorHover,
    primaryColorPressed
  } = vars;
  return Object.assign(Object.assign({}, common), {
    titleFontWeight: fontWeightStrong,
    fontSize: fontSize2,
    titleTextColor: textColor1,
    backColor: textColor2,
    backColorHover: primaryColorHover,
    backColorPressed: primaryColorPressed,
    subtitleTextColor: textColor3
  });
}
const pageHeaderLight = createTheme({
  name: "PageHeader",
  common: derived,
  self: self$t
});
const pageHeaderDark = {
  name: "PageHeader",
  common: derived$1,
  self: self$t
};
const commonVars$2 = {
  iconSize: "22px"
};
function self$s(vars) {
  const {
    fontSize: fontSize2,
    warningColor
  } = vars;
  return Object.assign(Object.assign({}, commonVars$2), {
    fontSize: fontSize2,
    iconColor: warningColor
  });
}
const popconfirmLight = createTheme({
  name: "Popconfirm",
  common: derived,
  peers: {
    Button: buttonLight,
    Popover: popoverLight
  },
  self: self$s
});
const popconfirmDark = {
  name: "Popconfirm",
  common: derived$1,
  peers: {
    Button: buttonDark,
    Popover: popoverDark
  },
  self: self$s
};
function self$r(vars) {
  const {
    infoColor,
    successColor,
    warningColor,
    errorColor,
    textColor2,
    progressRailColor,
    fontSize: fontSize2,
    fontWeight
  } = vars;
  return {
    fontSize: fontSize2,
    fontSizeCircle: "28px",
    fontWeightCircle: fontWeight,
    railColor: progressRailColor,
    railHeight: "8px",
    iconSizeCircle: "36px",
    iconSizeLine: "18px",
    iconColor: infoColor,
    iconColorInfo: infoColor,
    iconColorSuccess: successColor,
    iconColorWarning: warningColor,
    iconColorError: errorColor,
    textColorCircle: textColor2,
    textColorLineInner: "rgb(255, 255, 255)",
    textColorLineOuter: textColor2,
    fillColor: infoColor,
    fillColorInfo: infoColor,
    fillColorSuccess: successColor,
    fillColorWarning: warningColor,
    fillColorError: errorColor,
    lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"
  };
}
const progressLight = {
  name: "Progress",
  common: derived,
  self: self$r
};
const progressDark = {
  name: "Progress",
  common: derived$1,
  self(vars) {
    const commonSelf = self$r(vars);
    commonSelf.textColorLineInner = "rgb(0, 0, 0)";
    commonSelf.lineBgProcessing = "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)";
    return commonSelf;
  }
};
const rateDark = {
  name: "Rate",
  common: derived$1,
  self(vars) {
    const {
      railColor
    } = vars;
    return {
      itemColor: railColor,
      itemColorActive: "#CCAA33",
      itemSize: "20px",
      sizeSmall: "16px",
      sizeMedium: "20px",
      sizeLarge: "24px"
    };
  }
};
function self$q(vars) {
  const {
    railColor
  } = vars;
  return {
    itemColor: railColor,
    itemColorActive: "#FFCC33",
    sizeSmall: "16px",
    sizeMedium: "20px",
    sizeLarge: "24px"
  };
}
const themeLight$4 = {
  name: "Rate",
  common: derived,
  self: self$q
};
const commonVariables$3 = {
  titleFontSizeSmall: "26px",
  titleFontSizeMedium: "32px",
  titleFontSizeLarge: "40px",
  titleFontSizeHuge: "48px",
  fontSizeSmall: "14px",
  fontSizeMedium: "14px",
  fontSizeLarge: "15px",
  fontSizeHuge: "16px",
  iconSizeSmall: "64px",
  iconSizeMedium: "80px",
  iconSizeLarge: "100px",
  iconSizeHuge: "125px",
  iconColor418: void 0,
  iconColor404: void 0,
  iconColor403: void 0,
  iconColor500: void 0
};
function self$p(vars) {
  const {
    textColor2,
    textColor1,
    errorColor,
    successColor,
    infoColor,
    warningColor,
    lineHeight: lineHeight2,
    fontWeightStrong
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$3), {
    lineHeight: lineHeight2,
    titleFontWeight: fontWeightStrong,
    titleTextColor: textColor1,
    textColor: textColor2,
    iconColorError: errorColor,
    iconColorSuccess: successColor,
    iconColorInfo: infoColor,
    iconColorWarning: warningColor
  });
}
const resultLight = {
  name: "Result",
  common: derived,
  self: self$p
};
const resultDark = {
  name: "Result",
  common: derived$1,
  self: self$p
};
const sizeVariables$3 = {
  railHeight: "4px",
  railWidthVertical: "4px",
  handleSize: "18px",
  dotHeight: "8px",
  dotWidth: "8px",
  dotBorderRadius: "4px"
};
const sliderDark = {
  name: "Slider",
  common: derived$1,
  self(vars) {
    const boxShadow = "0 2px 8px 0 rgba(0, 0, 0, 0.12)";
    const {
      railColor,
      modalColor,
      primaryColorSuppl,
      popoverColor,
      textColor2,
      cardColor,
      borderRadius,
      fontSize: fontSize2,
      opacityDisabled
    } = vars;
    return Object.assign(Object.assign({}, sizeVariables$3), {
      fontSize: fontSize2,
      markFontSize: fontSize2,
      railColor,
      railColorHover: railColor,
      fillColor: primaryColorSuppl,
      fillColorHover: primaryColorSuppl,
      opacityDisabled,
      handleColor: "#FFF",
      dotColor: cardColor,
      dotColorModal: modalColor,
      dotColorPopover: popoverColor,
      handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      indicatorColor: popoverColor,
      indicatorBoxShadow: boxShadow,
      indicatorTextColor: textColor2,
      indicatorBorderRadius: borderRadius,
      dotBorder: `2px solid ${railColor}`,
      dotBorderActive: `2px solid ${primaryColorSuppl}`,
      dotBoxShadow: ""
    });
  }
};
function self$o(vars) {
  const indicatorColor = "rgba(0, 0, 0, .85)";
  const boxShadow = "0 2px 8px 0 rgba(0, 0, 0, 0.12)";
  const {
    railColor,
    primaryColor,
    baseColor,
    cardColor,
    modalColor,
    popoverColor,
    borderRadius,
    fontSize: fontSize2,
    opacityDisabled
  } = vars;
  return Object.assign(Object.assign({}, sizeVariables$3), {
    fontSize: fontSize2,
    markFontSize: fontSize2,
    railColor,
    railColorHover: railColor,
    fillColor: primaryColor,
    fillColorHover: primaryColor,
    opacityDisabled,
    handleColor: "#FFF",
    dotColor: cardColor,
    dotColorModal: modalColor,
    dotColorPopover: popoverColor,
    handleBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
    handleBoxShadowHover: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
    handleBoxShadowActive: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
    handleBoxShadowFocus: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
    indicatorColor,
    indicatorBoxShadow: boxShadow,
    indicatorTextColor: baseColor,
    indicatorBorderRadius: borderRadius,
    dotBorder: `2px solid ${railColor}`,
    dotBorderActive: `2px solid ${primaryColor}`,
    dotBoxShadow: ""
  });
}
const sliderLight = {
  name: "Slider",
  common: derived,
  self: self$o
};
function self$n(vars) {
  const {
    opacityDisabled,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge,
    primaryColor,
    fontSize: fontSize2
  } = vars;
  return {
    fontSize: fontSize2,
    textColor: primaryColor,
    sizeTiny: heightTiny,
    sizeSmall: heightSmall,
    sizeMedium: heightMedium,
    sizeLarge: heightLarge,
    sizeHuge: heightHuge,
    color: primaryColor,
    opacitySpinning: opacityDisabled
  };
}
const spinLight = {
  name: "Spin",
  common: derived,
  self: self$n
};
const spinDark = {
  name: "Spin",
  common: derived$1,
  self: self$n
};
function self$m(vars) {
  const {
    textColor2,
    textColor3,
    fontSize: fontSize2,
    fontWeight
  } = vars;
  return {
    labelFontSize: fontSize2,
    labelFontWeight: fontWeight,
    valueFontWeight: fontWeight,
    valueFontSize: "24px",
    labelTextColor: textColor3,
    valuePrefixTextColor: textColor2,
    valueSuffixTextColor: textColor2,
    valueTextColor: textColor2
  };
}
const statisticLight = {
  name: "Statistic",
  common: derived,
  self: self$m
};
const statisticDark = {
  name: "Statistic",
  common: derived$1,
  self: self$m
};
const commonVariables$2 = {
  stepHeaderFontSizeSmall: "14px",
  stepHeaderFontSizeMedium: "16px",
  indicatorIndexFontSizeSmall: "14px",
  indicatorIndexFontSizeMedium: "16px",
  indicatorSizeSmall: "22px",
  indicatorSizeMedium: "28px",
  indicatorIconSizeSmall: "14px",
  indicatorIconSizeMedium: "18px"
};
function self$l(vars) {
  const {
    fontWeightStrong,
    baseColor,
    textColorDisabled,
    primaryColor,
    errorColor,
    textColor1,
    textColor2
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$2), {
    stepHeaderFontWeight: fontWeightStrong,
    indicatorTextColorProcess: baseColor,
    indicatorTextColorWait: textColorDisabled,
    indicatorTextColorFinish: primaryColor,
    indicatorTextColorError: errorColor,
    indicatorBorderColorProcess: primaryColor,
    indicatorBorderColorWait: textColorDisabled,
    indicatorBorderColorFinish: primaryColor,
    indicatorBorderColorError: errorColor,
    indicatorColorProcess: primaryColor,
    indicatorColorWait: "#0000",
    indicatorColorFinish: "#0000",
    indicatorColorError: "#0000",
    splitorColorProcess: textColorDisabled,
    splitorColorWait: textColorDisabled,
    splitorColorFinish: primaryColor,
    splitorColorError: textColorDisabled,
    headerTextColorProcess: textColor1,
    headerTextColorWait: textColorDisabled,
    headerTextColorFinish: textColorDisabled,
    headerTextColorError: errorColor,
    descriptionTextColorProcess: textColor2,
    descriptionTextColorWait: textColorDisabled,
    descriptionTextColorFinish: textColorDisabled,
    descriptionTextColorError: errorColor
  });
}
const stepsLight = {
  name: "Steps",
  common: derived,
  self: self$l
};
const stepsDark = {
  name: "Steps",
  common: derived$1,
  self: self$l
};
const commonVars$1 = {
  buttonHeightSmall: "14px",
  buttonHeightMedium: "18px",
  buttonHeightLarge: "22px",
  buttonWidthSmall: "14px",
  buttonWidthMedium: "18px",
  buttonWidthLarge: "22px",
  buttonWidthPressedSmall: "20px",
  buttonWidthPressedMedium: "24px",
  buttonWidthPressedLarge: "28px",
  railHeightSmall: "18px",
  railHeightMedium: "22px",
  railHeightLarge: "26px",
  railWidthSmall: "32px",
  railWidthMedium: "40px",
  railWidthLarge: "48px"
};
const switchDark = {
  name: "Switch",
  common: derived$1,
  self(vars) {
    const {
      primaryColorSuppl,
      opacityDisabled,
      borderRadius,
      primaryColor,
      textColor2,
      baseColor
    } = vars;
    const railOverlayColor = "rgba(255, 255, 255, .20)";
    return Object.assign(Object.assign({}, commonVars$1), {
      iconColor: baseColor,
      textColor: textColor2,
      loadingColor: primaryColorSuppl,
      opacityDisabled,
      railColor: railOverlayColor,
      railColorActive: primaryColorSuppl,
      buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      buttonColor: "#FFF",
      railBorderRadiusSmall: borderRadius,
      railBorderRadiusMedium: borderRadius,
      railBorderRadiusLarge: borderRadius,
      buttonBorderRadiusSmall: borderRadius,
      buttonBorderRadiusMedium: borderRadius,
      buttonBorderRadiusLarge: borderRadius,
      boxShadowFocus: `0 0 8px 0 ${changeColor(primaryColor, {
        alpha: 0.3
      })}`
    });
  }
};
function self$k(vars) {
  const {
    primaryColor,
    opacityDisabled,
    borderRadius,
    textColor3
  } = vars;
  const railOverlayColor = "rgba(0, 0, 0, .14)";
  return Object.assign(Object.assign({}, commonVars$1), {
    iconColor: textColor3,
    textColor: "white",
    loadingColor: primaryColor,
    opacityDisabled,
    railColor: railOverlayColor,
    railColorActive: primaryColor,
    buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
    buttonColor: "#FFF",
    railBorderRadiusSmall: borderRadius,
    railBorderRadiusMedium: borderRadius,
    railBorderRadiusLarge: borderRadius,
    buttonBorderRadiusSmall: borderRadius,
    buttonBorderRadiusMedium: borderRadius,
    buttonBorderRadiusLarge: borderRadius,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`
  });
}
const switchLight = {
  name: "Switch",
  common: derived,
  self: self$k
};
const sizeVariables$2 = {
  thPaddingSmall: "6px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "6px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px"
};
function self$j(vars) {
  const {
    dividerColor,
    cardColor,
    modalColor,
    popoverColor,
    tableHeaderColor,
    tableColorStriped,
    textColor1,
    textColor2,
    borderRadius,
    fontWeightStrong,
    lineHeight: lineHeight2,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge
  } = vars;
  return Object.assign(Object.assign({}, sizeVariables$2), {
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    lineHeight: lineHeight2,
    borderRadius,
    borderColor: composite(cardColor, dividerColor),
    borderColorModal: composite(modalColor, dividerColor),
    borderColorPopover: composite(popoverColor, dividerColor),
    tdColor: cardColor,
    tdColorModal: modalColor,
    tdColorPopover: popoverColor,
    tdColorStriped: composite(cardColor, tableColorStriped),
    tdColorStripedModal: composite(modalColor, tableColorStriped),
    tdColorStripedPopover: composite(popoverColor, tableColorStriped),
    thColor: composite(cardColor, tableHeaderColor),
    thColorModal: composite(modalColor, tableHeaderColor),
    thColorPopover: composite(popoverColor, tableHeaderColor),
    thTextColor: textColor1,
    tdTextColor: textColor2,
    thFontWeight: fontWeightStrong
  });
}
const tableLight = {
  name: "Table",
  common: derived,
  self: self$j
};
const tableDark = {
  name: "Table",
  common: derived$1,
  self: self$j
};
const sizeVariables$1 = {
  tabFontSizeSmall: "14px",
  tabFontSizeMedium: "14px",
  tabFontSizeLarge: "16px",
  tabGapSmallLine: "36px",
  tabGapMediumLine: "36px",
  tabGapLargeLine: "36px",
  tabGapSmallLineVertical: "8px",
  tabGapMediumLineVertical: "8px",
  tabGapLargeLineVertical: "8px",
  tabPaddingSmallLine: "6px 0",
  tabPaddingMediumLine: "10px 0",
  tabPaddingLargeLine: "14px 0",
  tabPaddingVerticalSmallLine: "6px 12px",
  tabPaddingVerticalMediumLine: "8px 16px",
  tabPaddingVerticalLargeLine: "10px 20px",
  tabGapSmallBar: "36px",
  tabGapMediumBar: "36px",
  tabGapLargeBar: "36px",
  tabGapSmallBarVertical: "8px",
  tabGapMediumBarVertical: "8px",
  tabGapLargeBarVertical: "8px",
  tabPaddingSmallBar: "4px 0",
  tabPaddingMediumBar: "6px 0",
  tabPaddingLargeBar: "10px 0",
  tabPaddingVerticalSmallBar: "6px 12px",
  tabPaddingVerticalMediumBar: "8px 16px",
  tabPaddingVerticalLargeBar: "10px 20px",
  tabGapSmallCard: "4px",
  tabGapMediumCard: "4px",
  tabGapLargeCard: "4px",
  tabGapSmallCardVertical: "4px",
  tabGapMediumCardVertical: "4px",
  tabGapLargeCardVertical: "4px",
  tabPaddingSmallCard: "8px 16px",
  tabPaddingMediumCard: "10px 20px",
  tabPaddingLargeCard: "12px 24px",
  tabPaddingSmallSegment: "4px 0",
  tabPaddingMediumSegment: "6px 0",
  tabPaddingLargeSegment: "8px 0",
  tabPaddingVerticalLargeSegment: "0 8px",
  tabPaddingVerticalSmallCard: "8px 12px",
  tabPaddingVerticalMediumCard: "10px 16px",
  tabPaddingVerticalLargeCard: "12px 20px",
  tabPaddingVerticalSmallSegment: "0 4px",
  tabPaddingVerticalMediumSegment: "0 6px",
  tabGapSmallSegment: "0",
  tabGapMediumSegment: "0",
  tabGapLargeSegment: "0",
  tabGapSmallSegmentVertical: "0",
  tabGapMediumSegmentVertical: "0",
  tabGapLargeSegmentVertical: "0",
  panePaddingSmall: "8px 0 0 0",
  panePaddingMedium: "12px 0 0 0",
  panePaddingLarge: "16px 0 0 0",
  closeSize: "18px",
  closeIconSize: "14px"
};
function self$i(vars) {
  const {
    textColor2,
    primaryColor,
    textColorDisabled,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    tabColor,
    baseColor,
    dividerColor,
    fontWeight,
    textColor1,
    borderRadius,
    fontSize: fontSize2,
    fontWeightStrong
  } = vars;
  return Object.assign(Object.assign({}, sizeVariables$1), {
    colorSegment: tabColor,
    tabFontSizeCard: fontSize2,
    tabTextColorLine: textColor1,
    tabTextColorActiveLine: primaryColor,
    tabTextColorHoverLine: primaryColor,
    tabTextColorDisabledLine: textColorDisabled,
    tabTextColorSegment: textColor1,
    tabTextColorActiveSegment: textColor2,
    tabTextColorHoverSegment: textColor2,
    tabTextColorDisabledSegment: textColorDisabled,
    tabTextColorBar: textColor1,
    tabTextColorActiveBar: primaryColor,
    tabTextColorHoverBar: primaryColor,
    tabTextColorDisabledBar: textColorDisabled,
    tabTextColorCard: textColor1,
    tabTextColorHoverCard: textColor1,
    tabTextColorActiveCard: primaryColor,
    tabTextColorDisabledCard: textColorDisabled,
    barColor: primaryColor,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    closeBorderRadius: borderRadius,
    tabColor,
    tabColorSegment: baseColor,
    tabBorderColor: dividerColor,
    tabFontWeightActive: fontWeight,
    tabFontWeight: fontWeight,
    tabBorderRadius: borderRadius,
    paneTextColor: textColor2,
    fontWeightStrong
  });
}
const tabsLight = {
  name: "Tabs",
  common: derived,
  self: self$i
};
const tabsDark = {
  name: "Tabs",
  common: derived$1,
  self(vars) {
    const commonSelf = self$i(vars);
    const {
      inputColor
    } = vars;
    commonSelf.colorSegment = inputColor;
    commonSelf.tabColorSegment = inputColor;
    return commonSelf;
  }
};
function self$h(vars) {
  const {
    textColor1,
    textColor2,
    fontWeightStrong,
    fontSize: fontSize2
  } = vars;
  return {
    fontSize: fontSize2,
    titleTextColor: textColor1,
    textColor: textColor2,
    titleFontWeight: fontWeightStrong
  };
}
const thingLight = {
  name: "Thing",
  common: derived,
  self: self$h
};
const thingDark = {
  name: "Thing",
  common: derived$1,
  self: self$h
};
const sizeVariables = {
  titleMarginMedium: "0 0 6px 0",
  titleMarginLarge: "-2px 0 6px 0",
  titleFontSizeMedium: "14px",
  titleFontSizeLarge: "16px",
  iconSizeMedium: "14px",
  iconSizeLarge: "14px"
};
const timelineDark = {
  name: "Timeline",
  common: derived$1,
  self(vars) {
    const {
      textColor3,
      infoColorSuppl,
      errorColorSuppl,
      successColorSuppl,
      warningColorSuppl,
      textColor1,
      textColor2,
      railColor,
      fontWeightStrong,
      fontSize: fontSize2
    } = vars;
    return Object.assign(Object.assign({}, sizeVariables), {
      contentFontSize: fontSize2,
      titleFontWeight: fontWeightStrong,
      circleBorder: `2px solid ${textColor3}`,
      circleBorderInfo: `2px solid ${infoColorSuppl}`,
      circleBorderError: `2px solid ${errorColorSuppl}`,
      circleBorderSuccess: `2px solid ${successColorSuppl}`,
      circleBorderWarning: `2px solid ${warningColorSuppl}`,
      iconColor: textColor3,
      iconColorInfo: infoColorSuppl,
      iconColorError: errorColorSuppl,
      iconColorSuccess: successColorSuppl,
      iconColorWarning: warningColorSuppl,
      titleTextColor: textColor1,
      contentTextColor: textColor2,
      metaTextColor: textColor3,
      lineColor: railColor
    });
  }
};
function self$g(vars) {
  const {
    textColor3,
    infoColor,
    errorColor,
    successColor,
    warningColor,
    textColor1,
    textColor2,
    railColor,
    fontWeightStrong,
    fontSize: fontSize2
  } = vars;
  return Object.assign(Object.assign({}, sizeVariables), {
    contentFontSize: fontSize2,
    titleFontWeight: fontWeightStrong,
    circleBorder: `2px solid ${textColor3}`,
    circleBorderInfo: `2px solid ${infoColor}`,
    circleBorderError: `2px solid ${errorColor}`,
    circleBorderSuccess: `2px solid ${successColor}`,
    circleBorderWarning: `2px solid ${warningColor}`,
    iconColor: textColor3,
    iconColorInfo: infoColor,
    iconColorError: errorColor,
    iconColorSuccess: successColor,
    iconColorWarning: warningColor,
    titleTextColor: textColor1,
    contentTextColor: textColor2,
    metaTextColor: textColor3,
    lineColor: railColor
  });
}
const timelineLight = {
  name: "Timeline",
  common: derived,
  self: self$g
};
const commonVariables$1 = {
  extraFontSizeSmall: "12px",
  extraFontSizeMedium: "12px",
  extraFontSizeLarge: "14px",
  titleFontSizeSmall: "14px",
  titleFontSizeMedium: "16px",
  titleFontSizeLarge: "16px",
  closeSize: "20px",
  closeIconSize: "16px",
  headerHeightSmall: "44px",
  headerHeightMedium: "44px",
  headerHeightLarge: "50px"
};
const transferDark$1 = {
  name: "Transfer",
  common: derived$1,
  peers: {
    Checkbox: checkboxDark,
    Scrollbar: scrollbarDark,
    Input: inputDark,
    Empty: emptyDark,
    Button: buttonDark
  },
  self(vars) {
    const {
      fontWeight,
      fontSizeLarge,
      fontSizeMedium,
      fontSizeSmall,
      heightLarge,
      heightMedium,
      borderRadius,
      inputColor,
      tableHeaderColor,
      textColor1,
      textColorDisabled,
      textColor2,
      textColor3,
      hoverColor,
      closeColorHover,
      closeColorPressed,
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed,
      dividerColor
    } = vars;
    return Object.assign(Object.assign({}, commonVariables$1), {
      itemHeightSmall: heightMedium,
      itemHeightMedium: heightMedium,
      itemHeightLarge: heightLarge,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      borderRadius,
      dividerColor,
      borderColor: "#0000",
      listColor: inputColor,
      headerColor: tableHeaderColor,
      titleTextColor: textColor1,
      titleTextColorDisabled: textColorDisabled,
      extraTextColor: textColor3,
      extraTextColorDisabled: textColorDisabled,
      itemTextColor: textColor2,
      itemTextColorDisabled: textColorDisabled,
      itemColorPending: hoverColor,
      titleFontWeight: fontWeight,
      closeColorHover,
      closeColorPressed,
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed
    });
  }
};
function self$f(vars) {
  const {
    fontWeight,
    fontSizeLarge,
    fontSizeMedium,
    fontSizeSmall,
    heightLarge,
    heightMedium,
    borderRadius,
    cardColor,
    tableHeaderColor,
    textColor1,
    textColorDisabled,
    textColor2,
    textColor3,
    borderColor,
    hoverColor,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$1), {
    itemHeightSmall: heightMedium,
    itemHeightMedium: heightMedium,
    itemHeightLarge: heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    borderRadius,
    dividerColor: borderColor,
    borderColor,
    listColor: cardColor,
    headerColor: composite(cardColor, tableHeaderColor),
    titleTextColor: textColor1,
    titleTextColorDisabled: textColorDisabled,
    extraTextColor: textColor3,
    extraTextColorDisabled: textColorDisabled,
    itemTextColor: textColor2,
    itemTextColorDisabled: textColorDisabled,
    itemColorPending: hoverColor,
    titleFontWeight: fontWeight,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed
  });
}
const transferLight$1 = createTheme({
  name: "Transfer",
  common: derived,
  peers: {
    Checkbox: checkboxLight,
    Scrollbar: scrollbarLight,
    Input: inputLight,
    Empty: emptyLight,
    Button: buttonLight
  },
  self: self$f
});
function self$e(vars) {
  const {
    borderRadiusSmall,
    dividerColor,
    hoverColor,
    pressedColor,
    primaryColor,
    textColor3,
    textColor2,
    textColorDisabled,
    fontSize: fontSize2
  } = vars;
  return {
    fontSize: fontSize2,
    lineHeight: "1.5",
    nodeHeight: "30px",
    nodeWrapperPadding: "3px 0",
    nodeBorderRadius: borderRadiusSmall,
    nodeColorHover: hoverColor,
    nodeColorPressed: pressedColor,
    nodeColorActive: changeColor(primaryColor, {
      alpha: 0.1
    }),
    arrowColor: textColor3,
    nodeTextColor: textColor2,
    nodeTextColorDisabled: textColorDisabled,
    loadingColor: primaryColor,
    dropMarkColor: primaryColor,
    lineColor: dividerColor
  };
}
const treeLight = createTheme({
  name: "Tree",
  common: derived,
  peers: {
    Checkbox: checkboxLight,
    Scrollbar: scrollbarLight,
    Empty: emptyLight
  },
  self: self$e
});
const treeDark = {
  name: "Tree",
  common: derived$1,
  peers: {
    Checkbox: checkboxDark,
    Scrollbar: scrollbarDark,
    Empty: emptyDark
  },
  self(vars) {
    const {
      primaryColor
    } = vars;
    const commonSelf = self$e(vars);
    commonSelf.nodeColorActive = changeColor(primaryColor, {
      alpha: 0.15
    });
    return commonSelf;
  }
};
const treeSelectDark = {
  name: "TreeSelect",
  common: derived$1,
  peers: {
    Tree: treeDark,
    Empty: emptyDark,
    InternalSelection: internalSelectionDark
  }
};
function self$d(vars) {
  const {
    popoverColor,
    boxShadow2,
    borderRadius,
    heightMedium,
    dividerColor,
    textColor2
  } = vars;
  return {
    menuPadding: "4px",
    menuColor: popoverColor,
    menuBoxShadow: boxShadow2,
    menuBorderRadius: borderRadius,
    menuHeight: `calc(${heightMedium} * 7.6)`,
    actionDividerColor: dividerColor,
    actionTextColor: textColor2,
    actionPadding: "8px 12px",
    headerDividerColor: dividerColor,
    headerTextColor: textColor2,
    headerPadding: "8px 12px"
  };
}
const treeSelectLight = createTheme({
  name: "TreeSelect",
  common: derived,
  peers: {
    Tree: treeLight,
    Empty: emptyLight,
    InternalSelection: internalSelectionLight
  },
  self: self$d
});
const commonVars = {
  headerFontSize1: "30px",
  headerFontSize2: "22px",
  headerFontSize3: "18px",
  headerFontSize4: "16px",
  headerFontSize5: "16px",
  headerFontSize6: "16px",
  headerMargin1: "28px 0 20px 0",
  headerMargin2: "28px 0 20px 0",
  headerMargin3: "28px 0 20px 0",
  headerMargin4: "28px 0 18px 0",
  headerMargin5: "28px 0 18px 0",
  headerMargin6: "28px 0 18px 0",
  headerPrefixWidth1: "16px",
  headerPrefixWidth2: "16px",
  headerPrefixWidth3: "12px",
  headerPrefixWidth4: "12px",
  headerPrefixWidth5: "12px",
  headerPrefixWidth6: "12px",
  headerBarWidth1: "4px",
  headerBarWidth2: "4px",
  headerBarWidth3: "3px",
  headerBarWidth4: "3px",
  headerBarWidth5: "3px",
  headerBarWidth6: "3px",
  pMargin: "16px 0 16px 0",
  liMargin: ".25em 0 0 0",
  olPadding: "0 0 0 2em",
  ulPadding: "0 0 0 2em"
};
function self$c(vars) {
  const {
    primaryColor,
    textColor2,
    borderColor,
    lineHeight: lineHeight2,
    fontSize: fontSize2,
    borderRadiusSmall,
    dividerColor,
    fontWeightStrong,
    textColor1,
    textColor3,
    infoColor,
    warningColor,
    errorColor,
    successColor,
    codeColor
  } = vars;
  return Object.assign(Object.assign({}, commonVars), {
    aTextColor: primaryColor,
    blockquoteTextColor: textColor2,
    blockquotePrefixColor: borderColor,
    blockquoteLineHeight: lineHeight2,
    blockquoteFontSize: fontSize2,
    codeBorderRadius: borderRadiusSmall,
    liTextColor: textColor2,
    liLineHeight: lineHeight2,
    liFontSize: fontSize2,
    hrColor: dividerColor,
    headerFontWeight: fontWeightStrong,
    headerTextColor: textColor1,
    pTextColor: textColor2,
    pTextColor1Depth: textColor1,
    pTextColor2Depth: textColor2,
    pTextColor3Depth: textColor3,
    pLineHeight: lineHeight2,
    pFontSize: fontSize2,
    headerBarColor: primaryColor,
    headerBarColorPrimary: primaryColor,
    headerBarColorInfo: infoColor,
    headerBarColorError: errorColor,
    headerBarColorWarning: warningColor,
    headerBarColorSuccess: successColor,
    textColor: textColor2,
    textColor1Depth: textColor1,
    textColor2Depth: textColor2,
    textColor3Depth: textColor3,
    textColorPrimary: primaryColor,
    textColorInfo: infoColor,
    textColorSuccess: successColor,
    textColorWarning: warningColor,
    textColorError: errorColor,
    codeTextColor: textColor2,
    codeColor,
    codeBorder: "1px solid #0000"
  });
}
const typographyLight = {
  name: "Typography",
  common: derived,
  self: self$c
};
const typographyDark = {
  name: "Typography",
  common: derived$1,
  self: self$c
};
function self$b(vars) {
  const {
    iconColor,
    primaryColor,
    errorColor,
    textColor2,
    successColor,
    opacityDisabled,
    actionColor,
    borderColor,
    hoverColor,
    lineHeight: lineHeight2,
    borderRadius,
    fontSize: fontSize2
  } = vars;
  return {
    fontSize: fontSize2,
    lineHeight: lineHeight2,
    borderRadius,
    draggerColor: actionColor,
    draggerBorder: `1px dashed ${borderColor}`,
    draggerBorderHover: `1px dashed ${primaryColor}`,
    itemColorHover: hoverColor,
    itemColorHoverError: changeColor(errorColor, {
      alpha: 0.06
    }),
    itemTextColor: textColor2,
    itemTextColorError: errorColor,
    itemTextColorSuccess: successColor,
    itemIconColor: iconColor,
    itemDisabledOpacity: opacityDisabled,
    itemBorderImageCardError: `1px solid ${errorColor}`,
    itemBorderImageCard: `1px solid ${borderColor}`
  };
}
const uploadLight = createTheme({
  name: "Upload",
  common: derived,
  peers: {
    Button: buttonLight,
    Progress: progressLight
  },
  self: self$b
});
const uploadDark = {
  name: "Upload",
  common: derived$1,
  peers: {
    Button: buttonDark,
    Progress: progressDark
  },
  self(vars) {
    const {
      errorColor
    } = vars;
    const commonSelf = self$b(vars);
    commonSelf.itemColorHoverError = changeColor(errorColor, {
      alpha: 0.09
    });
    return commonSelf;
  }
};
const watermarkDark = {
  name: "Watermark",
  common: derived$1,
  self(vars) {
    const {
      fontFamily: fontFamily2
    } = vars;
    return {
      fontFamily: fontFamily2
    };
  }
};
const watermarkLight = createTheme({
  name: "Watermark",
  common: derived,
  self(vars) {
    const {
      fontFamily: fontFamily2
    } = vars;
    return {
      fontFamily: fontFamily2
    };
  }
});
function self$a(vars) {
  const {
    popoverColor,
    dividerColor,
    borderRadius
  } = vars;
  return {
    color: popoverColor,
    buttonBorderColor: dividerColor,
    borderRadiusSquare: borderRadius,
    boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)"
  };
}
const themeLight$3 = {
  name: "FloatButtonGroup",
  common: derived,
  self: self$a
};
const floatButtonDark = {
  name: "FloatButton",
  common: derived$1,
  self(vars) {
    const {
      popoverColor,
      textColor2,
      buttonColor2Hover,
      buttonColor2Pressed,
      primaryColor,
      primaryColorHover,
      primaryColorPressed,
      baseColor,
      borderRadius
    } = vars;
    return {
      color: popoverColor,
      textColor: textColor2,
      boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
      boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
      boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)",
      colorHover: buttonColor2Hover,
      colorPressed: buttonColor2Pressed,
      colorPrimary: primaryColor,
      colorPrimaryHover: primaryColorHover,
      colorPrimaryPressed: primaryColorPressed,
      textColorPrimary: baseColor,
      borderRadiusSquare: borderRadius
    };
  }
};
function self$9(vars) {
  const {
    popoverColor,
    textColor2,
    buttonColor2Hover,
    buttonColor2Pressed,
    primaryColor,
    primaryColorHover,
    primaryColorPressed,
    borderRadius
  } = vars;
  return {
    color: popoverColor,
    colorHover: buttonColor2Hover,
    colorPressed: buttonColor2Pressed,
    colorPrimary: primaryColor,
    colorPrimaryHover: primaryColorHover,
    colorPrimaryPressed: primaryColorPressed,
    textColor: textColor2,
    boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .16)",
    boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .24)",
    boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .24)",
    textColorPrimary: "#fff",
    borderRadiusSquare: borderRadius
  };
}
const themeLight$2 = {
  name: "FloatButton",
  common: derived,
  self: self$9
};
function self$8(vars) {
  const {
    primaryColor,
    baseColor
  } = vars;
  return {
    color: primaryColor,
    iconColor: baseColor
  };
}
const iconWrapperLight = {
  name: "IconWrapper",
  common: derived,
  self: self$8
};
const iconDark = {
  name: "IconWrapper",
  common: derived$1,
  self: self$8
};
const imageDark = {
  name: "Image",
  common: derived$1,
  peers: {
    Tooltip: tooltipDark
  },
  self: (vars) => {
    const {
      textColor2
    } = vars;
    return {
      toolbarIconColor: textColor2,
      toolbarColor: "rgba(0, 0, 0, .35)",
      toolbarBoxShadow: "none",
      toolbarBorderRadius: "24px"
    };
  }
};
function self$7() {
  return {
    toolbarIconColor: "rgba(255, 255, 255, .9)",
    toolbarColor: "rgba(0, 0, 0, .35)",
    toolbarBoxShadow: "none",
    toolbarBorderRadius: "24px"
  };
}
const imageLight = createTheme({
  name: "Image",
  common: derived,
  peers: {
    Tooltip: tooltipLight
  },
  self: self$7
});
const commonVariables = {
  extraFontSize: "12px",
  width: "440px"
};
const transferDark = {
  name: "Transfer",
  common: derived$1,
  peers: {
    Checkbox: checkboxDark,
    Scrollbar: scrollbarDark,
    Input: inputDark,
    Empty: emptyDark,
    Button: buttonDark
  },
  self(vars) {
    const {
      iconColorDisabled,
      iconColor,
      fontWeight,
      fontSizeLarge,
      fontSizeMedium,
      fontSizeSmall,
      heightLarge,
      heightMedium,
      heightSmall,
      borderRadius,
      inputColor,
      tableHeaderColor,
      textColor1,
      textColorDisabled,
      textColor2,
      hoverColor
    } = vars;
    return Object.assign(Object.assign({}, commonVariables), {
      itemHeightSmall: heightSmall,
      itemHeightMedium: heightMedium,
      itemHeightLarge: heightLarge,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      borderRadius,
      borderColor: "#0000",
      listColor: inputColor,
      headerColor: tableHeaderColor,
      titleTextColor: textColor1,
      titleTextColorDisabled: textColorDisabled,
      extraTextColor: textColor2,
      filterDividerColor: "#0000",
      itemTextColor: textColor2,
      itemTextColorDisabled: textColorDisabled,
      itemColorPending: hoverColor,
      titleFontWeight: fontWeight,
      iconColor,
      iconColorDisabled
    });
  }
};
function self$6(vars) {
  const {
    fontWeight,
    iconColorDisabled,
    iconColor,
    fontSizeLarge,
    fontSizeMedium,
    fontSizeSmall,
    heightLarge,
    heightMedium,
    heightSmall,
    borderRadius,
    cardColor,
    tableHeaderColor,
    textColor1,
    textColorDisabled,
    textColor2,
    borderColor,
    hoverColor
  } = vars;
  return Object.assign(Object.assign({}, commonVariables), {
    itemHeightSmall: heightSmall,
    itemHeightMedium: heightMedium,
    itemHeightLarge: heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    borderRadius,
    borderColor,
    listColor: cardColor,
    headerColor: composite(cardColor, tableHeaderColor),
    titleTextColor: textColor1,
    titleTextColorDisabled: textColorDisabled,
    extraTextColor: textColor2,
    filterDividerColor: borderColor,
    itemTextColor: textColor2,
    itemTextColorDisabled: textColorDisabled,
    itemColorPending: hoverColor,
    titleFontWeight: fontWeight,
    iconColor,
    iconColorDisabled
  });
}
const transferLight = createTheme({
  name: "Transfer",
  common: derived,
  peers: {
    Checkbox: checkboxLight,
    Scrollbar: scrollbarLight,
    Input: inputLight,
    Empty: emptyLight,
    Button: buttonLight
  },
  self: self$6
});
function self$5() {
  return {};
}
const marqueeLight = {
  name: "Marquee",
  common: derived,
  self: self$5
};
const marqueeDark = {
  name: "Marquee",
  common: derived$1,
  self: self$5
};
const qrcodeDark = {
  name: "QrCode",
  common: derived$1,
  self: (vars) => {
    return {
      borderRadius: vars.borderRadius
    };
  }
};
function self$4(vars) {
  return {
    borderRadius: vars.borderRadius
  };
}
const themeLight$1 = {
  name: "QrCode",
  common: derived,
  self: self$4
};
const skeletonDark = {
  name: "Skeleton",
  common: derived$1,
  self(vars) {
    const {
      heightSmall,
      heightMedium,
      heightLarge,
      borderRadius
    } = vars;
    return {
      color: "rgba(255, 255, 255, 0.12)",
      colorEnd: "rgba(255, 255, 255, 0.18)",
      borderRadius,
      heightSmall,
      heightMedium,
      heightLarge
    };
  }
};
function self$3(vars) {
  const {
    heightSmall,
    heightMedium,
    heightLarge,
    borderRadius
  } = vars;
  return {
    color: "#eee",
    colorEnd: "#ddd",
    borderRadius,
    heightSmall,
    heightMedium,
    heightLarge
  };
}
const skeletonLight = {
  name: "Skeleton",
  common: derived,
  self: self$3
};
const splitDark = {
  name: "Split",
  common: derived$1
};
function self$2(vars) {
  const {
    primaryColorHover,
    borderColor
  } = vars;
  return {
    resizableTriggerColorHover: primaryColorHover,
    resizableTriggerColor: borderColor
  };
}
const themeLight = {
  name: "Split",
  common: derived,
  self: self$2
};
const self$1 = () => ({});
const equationLight = {
  name: "Equation",
  common: derived,
  self: self$1
};
const equationDark = {
  name: "Equation",
  common: derived$1,
  self: self$1
};
const floatButtonGroupDark = {
  name: "FloatButtonGroup",
  common: derived$1,
  self(vars) {
    const {
      popoverColor,
      dividerColor,
      borderRadius
    } = vars;
    return {
      color: popoverColor,
      buttonBorderColor: dividerColor,
      borderRadiusSquare: borderRadius,
      boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)"
    };
  }
};
const lightTheme = {
  name: "light",
  common: derived,
  Alert: alertLight,
  Anchor: anchorLight,
  AutoComplete: autoCompleteLight,
  Avatar: avatarLight,
  AvatarGroup: avatarGroupLight,
  BackTop: backTopLight,
  Badge: badgeLight,
  Breadcrumb: breadcrumbLight,
  Button: buttonLight,
  ButtonGroup: buttonGroupLight,
  Calendar: calendarLight,
  Card: cardLight,
  Carousel: carouselLight,
  Cascader: cascaderLight,
  Checkbox: checkboxLight,
  Code: codeLight,
  Collapse: collapseLight,
  CollapseTransition: collapseTransitionLight,
  ColorPicker: colorPickerLight,
  DataTable: dataTableLight,
  DatePicker: datePickerLight,
  Descriptions: descriptionsLight,
  Dialog: dialogLight,
  Divider: dividerLight,
  Drawer: drawerLight,
  Dropdown: dropdownLight,
  DynamicInput: dynamicInputLight,
  DynamicTags: dynamicTagsLight,
  Element: elementLight,
  Empty: emptyLight,
  Equation: equationLight,
  Ellipsis: ellipsisLight,
  Flex: flexLight,
  Form: formLight,
  GradientText: gradientTextLight,
  Icon: iconLight,
  IconWrapper: iconWrapperLight,
  Image: imageLight,
  Input: inputLight,
  InputNumber: inputNumberLight,
  Layout: layoutLight,
  LegacyTransfer: transferLight,
  List: listLight,
  LoadingBar: loadingBarLight,
  Log: logLight,
  Menu: menuLight,
  Mention: mentionLight,
  Message: messageLight,
  Modal: modalLight,
  Notification: notificationLight,
  PageHeader: pageHeaderLight,
  Pagination: paginationLight,
  Popconfirm: popconfirmLight,
  Popover: popoverLight,
  Popselect: popselectLight,
  Progress: progressLight,
  QrCode: themeLight$1,
  Radio: radioLight,
  Rate: themeLight$4,
  Row: rowLight,
  Result: resultLight,
  Scrollbar: scrollbarLight,
  Skeleton: skeletonLight,
  Select: selectLight,
  Slider: sliderLight,
  Space: spaceLight,
  Spin: spinLight,
  Statistic: statisticLight,
  Steps: stepsLight,
  Switch: switchLight,
  Table: tableLight,
  Tabs: tabsLight,
  Tag: tagLight,
  Thing: thingLight,
  TimePicker: timePickerLight,
  Timeline: timelineLight,
  Tooltip: tooltipLight,
  Transfer: transferLight$1,
  Tree: treeLight,
  TreeSelect: treeSelectLight,
  Typography: typographyLight,
  Upload: uploadLight,
  Watermark: watermarkLight,
  Split: themeLight,
  FloatButton: themeLight$2,
  FloatButtonGroup: themeLight$3,
  Marquee: marqueeLight
};
const darkTheme = {
  name: "dark",
  common: derived$1,
  Alert: alertDark,
  Anchor: anchorDark,
  AutoComplete: autoCompleteDark,
  Avatar: avatarDark,
  AvatarGroup: avatarGroupDark,
  BackTop: backTopDark,
  Badge: badgeDark,
  Breadcrumb: breadcrumbDark,
  Button: buttonDark,
  ButtonGroup: buttonGroupDark,
  Calendar: calendarDark,
  Card: cardDark,
  Carousel: carouselDark,
  Cascader: cascaderDark,
  Checkbox: checkboxDark,
  Code: codeDark,
  Collapse: collapseDark,
  CollapseTransition: collapseTransitionDark,
  ColorPicker: colorPickerDark,
  DataTable: dataTableDark,
  DatePicker: datePickerDark,
  Descriptions: descriptionsDark,
  Dialog: dialogDark,
  Divider: dividerDark,
  Drawer: drawerDark,
  Dropdown: dropdownDark,
  DynamicInput: dynamicInputDark,
  DynamicTags: dynamicTagsDark,
  Element: elementDark,
  Empty: emptyDark,
  Ellipsis: ellipsisDark,
  Equation: equationDark,
  Flex: flexDark,
  Form: formItemDark,
  GradientText: gradientTextDark,
  Icon: iconDark$1,
  IconWrapper: iconDark,
  Image: imageDark,
  Input: inputDark,
  InputNumber: inputNumberDark,
  LegacyTransfer: transferDark,
  Layout: layoutDark,
  List: listDark$1,
  LoadingBar: loadingBarDark,
  Log: logDark,
  Menu: menuDark,
  Mention: listDark,
  Message: messageDark,
  Modal: modalDark,
  Notification: notificationDark,
  PageHeader: pageHeaderDark,
  Pagination: paginationDark,
  Popconfirm: popconfirmDark,
  Popover: popoverDark,
  Popselect: popselect,
  Progress: progressDark,
  QrCode: qrcodeDark,
  Radio: radioDark,
  Rate: rateDark,
  Result: resultDark,
  Row: rowDark,
  Scrollbar: scrollbarDark,
  Select: selectDark,
  Skeleton: skeletonDark,
  Slider: sliderDark,
  Space: spaceDark,
  Spin: spinDark,
  Statistic: statisticDark,
  Steps: stepsDark,
  Switch: switchDark,
  Table: tableDark,
  Tabs: tabsDark,
  Tag: tagDark,
  Thing: thingDark,
  TimePicker: timePickerDark,
  Timeline: timelineDark,
  Tooltip: tooltipDark,
  Transfer: transferDark$1,
  Tree: treeDark,
  TreeSelect: treeSelectDark,
  Typography: typographyDark,
  Upload: uploadDark,
  Watermark: watermarkDark,
  Split: splitDark,
  FloatButton: floatButtonDark,
  FloatButtonGroup: floatButtonGroupDark,
  Marquee: marqueeDark
};
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser = typeof document !== "undefined";
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  obj.default && isRouteComponent(obj.default);
}
const assign$1 = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray$1(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop$2 = () => {
};
const isArray$1 = Array.isArray;
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path2) => path2.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path2, query = {}, searchString = "", hash = "";
  const hashPos = location2.indexOf("#");
  let searchPos = location2.indexOf("?");
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path2 = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path2 = path2 || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path2 = resolveRelativePath(path2 != null ? path2 : location2, currentLocation);
  return {
    fullPath: path2 + (searchString && "?") + searchString + hash,
    path: path2,
    query,
    hash: decode(hash)
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base2) {
  if (!base2 || !pathname.toLowerCase().startsWith(base2.toLowerCase()))
    return pathname;
  return pathname.slice(base2.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return isArray$1(a) ? isEquivalentArray(a, b) : isArray$1(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return isArray$1(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  const lastToSegment = toSegments[toSegments.length - 1];
  if (lastToSegment === ".." || lastToSegment === ".") {
    toSegments.push("");
  }
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base2) {
  if (!base2) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base2 = baseEl && baseEl.getAttribute("href") || "/";
      base2 = base2.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base2 = "/";
    }
  }
  if (base2[0] !== "/" && base2[0] !== "#")
    base2 = "/" + base2;
  return removeTrailingSlash(base2);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base2, location2) {
  return base2.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
  }
}
function getScrollKey(path2, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path2;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base2, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base2.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base2.slice(hashPos)) ? base2.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path2 = stripBase(pathname, base2);
  return path2 + search + hash;
}
function useHistoryListeners(base2, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base2, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index = listeners.indexOf(callback);
      if (index > -1)
        listeners.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign$1({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener, {
    passive: true
  });
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base2) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base2, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: history2.length - 1,
      replaced: true,
      // don't add a scroll as the user may have an anchor, and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base2.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base2 : base2.slice(hashIndex)) + to : createBaseLocation() + base2 + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state = assign$1({}, history2.state, buildState(
      historyState.value.back,
      // keep back and forward entries but override current position
      to,
      historyState.value.forward,
      true
    ), data, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign$1(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      historyState.value,
      history2.state,
      {
        forward: to,
        scroll: computeScrollPosition()
      }
    );
    changeLocation(currentState.current, currentState, true);
    const state = assign$1({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base2) {
  base2 = normalizeBase(base2);
  const historyNavigation = useHistoryStateNavigation(base2);
  const historyListeners = useHistoryListeners(base2, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign$1({
    // it's overridden right after
    location: "",
    base: base2,
    go,
    createHref: createHref.bind(null, base2)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function createWebHashHistory(base2) {
  base2 = location.host ? base2 || location.pathname + location.search : "";
  if (!base2.includes("#"))
    base2 += "#";
  return createWebHistory(base2);
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const NavigationFailureSymbol = Symbol("");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign$1(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign$1({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [
      90
      /* PathScore.Root */
    ];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict && !pattern.endsWith("/"))
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path2) {
    const match2 = path2.match(re);
    const params = {};
    if (!match2)
      return null;
    for (let i = 1; i < match2.length; i++) {
      const value = match2[i] || "";
      const key = keys[i - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path2 = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path2.endsWith("/"))
        path2 += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path2 += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray$1(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray$1(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path2.endsWith("/"))
                  path2 = path2.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path2 += text;
        }
      }
    }
    return path2 || "/";
  }
  return {
    re,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    const diff = b[i] - a[i];
    if (diff)
      return diff;
    i++;
  }
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b) {
  let i = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    if (comp)
      return comp;
    i++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path2) {
  if (!path2)
    return [[]];
  if (path2 === "/")
    return [[ROOT_TOKEN]];
  if (!path2.startsWith("/")) {
    throw new Error(`Invalid path "${path2}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer2}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i = 0;
  let char;
  let buffer2 = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer2)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer2
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer2}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer2,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer2 = "";
  }
  function addCharToBuffer() {
    buffer2 += char;
  }
  while (i < path2.length) {
    char = path2[i++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer2) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer2}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign$1(parser, {
    record,
    parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [mainNormalizedRecord];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          normalizeRouteRecord(assign$1({}, mainNormalizedRecord, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            // we might be the child of an alias
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path: path2 } = normalizedRecord;
      if (parent && path2[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path2 && connectingSlash + path2);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher)) {
          removeRoute(record.name);
        }
      }
      if (isMatchable(matcher)) {
        insertMatcher(matcher);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      originalRecord = originalRecord || matcher;
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$2;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    const index = findInsertionIndex(matcher, matchers);
    matchers.splice(index, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path2;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign$1(
        // paramsFromLocation is a new object
        paramsFromLocation(
          currentLocation.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        location2.params && paramsFromLocation(location2.params, matcher.keys.map((k) => k.name))
      );
      path2 = matcher.stringify(params);
    } else if (location2.path != null) {
      path2 = location2.path;
      matcher = matchers.find((m) => m.re.test(path2));
      if (matcher) {
        params = matcher.parse(path2);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign$1({}, currentLocation.params, location2.params);
      path2 = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path: path2,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  function clearRoutes() {
    matchers.length = 0;
    matcherMap.clear();
  }
  return {
    addRoute,
    resolve: resolve2,
    removeRoute,
    clearRoutes,
    getRoutes,
    getRecordMatcher
  };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  const normalized = {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: record.aliasOf,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
  Object.defineProperty(normalized, "mods", {
    value: {}
  });
  return normalized;
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "object" ? props[name] : props;
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign$1(meta, record.meta), {});
}
function mergeOptions(defaults2, partialOptions) {
  const options = {};
  for (const key in defaults2) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults2[key];
  }
  return options;
}
function findInsertionIndex(matcher, matchers) {
  let lower = 0;
  let upper = matchers.length;
  while (lower !== upper) {
    const mid = lower + upper >> 1;
    const sortOrder = comparePathParserScore(matcher, matchers[mid]);
    if (sortOrder < 0) {
      upper = mid;
    } else {
      lower = mid + 1;
    }
  }
  const insertionAncestor = getInsertionAncestor(matcher);
  if (insertionAncestor) {
    upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
  }
  return upper;
}
function getInsertionAncestor(matcher) {
  let ancestor = matcher;
  while (ancestor = ancestor.parent) {
    if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) {
      return ancestor;
    }
  }
  return;
}
function isMatchable({ record }) {
  return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray$1(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = isArray$1(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = isArray$1(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol("");
const viewDepthKey = Symbol("");
const routerKey = Symbol("");
const routeLocationKey = Symbol("");
const routerViewLocationKey = Symbol("");
function useCallbacks() {
  let handlers = [];
  function add(handler) {
    handlers.push(handler);
    return () => {
      const i = handlers.indexOf(handler);
      if (i > -1)
        handlers.splice(i, 1);
    };
  }
  function reset() {
    handlers = [];
  }
  return {
    add,
    list: () => handlers.slice(),
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
  const enterCallbackArray = record && // name is defined if record is because of the function overload
  (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false) {
        reject(createRouterError(4, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
        record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
          enterCallbackArray.push(valid);
        }
        resolve2();
      }
    };
    const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, next));
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.mods[name] = resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
        }));
      }
    }
  }
  return guards;
}
function useLink(props) {
  const router2 = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => {
    const to = unref(props.to);
    return router2.resolve(to);
  });
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
    );
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      const p2 = router2[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(noop$2);
      if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) {
        document.startViewTransition(() => p2);
      }
      return p2;
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
function preferSingleVNode(vnodes) {
  return vnodes.length === 1 ? vnodes[0] : vnodes;
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && preferSingleVNode(slots.default(link));
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray$1(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && // if there is no instance but to and from are the same this might be
      // the first visit
      (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign$1({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, { Component: component, route }) || component
      );
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = (
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode)
  );
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign$1({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign$1(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if (rawLocation.path != null) {
      matcherLocation = assign$1({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign$1({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign$1({}, rawLocation, {
        params: encodeParams(targetParams)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign$1({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign$1({
      fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      )
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign$1({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign$1(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
          // force empty params
          { path: newTargetLocation }
        );
        newTargetLocation.params = {};
      }
      return assign$1({
        query: to.query,
        hash: to.hash,
        // avoid transferring params if the redirect has a path
        params: newTargetLocation.path != null ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign$1(locationAsObject(shouldRedirect), {
          state: typeof shouldRedirect === "object" ? assign$1({}, data, shouldRedirect.state) : data,
          force,
          replace: replace2
        }),
        // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(
        from,
        from,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        true,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? (
      // navigation redirects still mark the router as ready
      isNavigationFailure(
        error,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? error : markAsReady(error)
    ) : (
      // reject any unknown error
      triggerError(error, toLocation, from)
    )).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(
          failure2,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          return pushWithRedirect(
            // keep options
            assign$1({
              // preserve an existing replacement but allow the redirect to override it
              replace: replace2
            }, locationAsObject(failure2.to), {
              state: typeof failure2.to === "object" ? assign$1({}, data, failure2.to.state) : data,
              force
            }),
            // preserve the original redirectedFrom if any
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function runWithContext(fn) {
    const app = installedApps.values().next().value;
    return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of enteringRecords) {
        if (record.beforeEnter) {
          if (isArray$1(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(
      err,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign$1({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router2.listening)
        return;
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign$1(shouldRedirect, { replace: true, force: true }), toLocation).catch(noop$2);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(
          error,
          4 | 8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        )) {
          return error;
        }
        if (isNavigationFailure(
          error,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          pushWithRedirect(
            assign$1(locationAsObject(error.to), {
              force: true
            }),
            toLocation
            // avoid an uncaught rejection, let push call triggerError
          ).then((failure) => {
            if (isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop$2);
          return Promise.reject();
        }
        if (info.delta) {
          routerHistory.go(-info.delta, false);
        }
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          // after navigation, all matched components are resolved
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !isNavigationFailure(
            failure,
            8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(
            failure,
            4 | 16
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          )) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$2);
    });
  }
  let readyHandlers = useCallbacks();
  let errorListeners = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorListeners.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve22, reject) => {
      readyHandlers.add([resolve22, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve22, reject]) => err ? reject(err) : resolve22());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router2 = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    clearRoutes: matcher.clearRoutes,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorListeners.add,
    isReady,
    install(app) {
      const router22 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router22;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        Object.defineProperty(reactiveRoute, key, {
          get: () => currentRoute.value[key],
          enumerable: true
        });
      }
      app.provide(routerKey, router22);
      app.provide(routeLocationKey, shallowReactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
  }
  return router2;
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute(_name) {
  return inject(routeLocationKey);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    const router2 = useRouter();
    const isWeb2 = computed(() => window.isWeb);
    if (!isWeb2.value) {
      router2.push({ name: "Home" });
    } else {
      const apiStorage = window.localStorage.getItem("api");
      const keyStorage = window.localStorage.getItem("key");
      if (apiStorage && keyStorage) ;
      else {
        router2.push({ name: "Login" });
      }
    }
    const instance = getCurrentInstance();
    if (instance) {
      console.log(instance.appContext.app);
      provide("currentApp", instance.appContext.app);
    }
    const osThemeRef = useOsTheme();
    const theme = computed(() => {
      if (osThemeRef.value === "dark") {
        return darkTheme;
      } else {
        return lightTheme;
      }
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      const _component_n_dialog_provider = NDialogProvider;
      const _component_n_notification_provider = __unplugin_components_1;
      const _component_n_config_provider = __unplugin_components_3$1;
      return openBlock(), createBlock(_component_n_config_provider, {
        theme: unref(theme),
        locale: unref(zhCN$1),
        "date-locale": unref(dateZhCN)
      }, {
        default: withCtx(() => [
          createVNode(_component_n_notification_provider, null, {
            default: withCtx(() => [
              createVNode(_component_n_dialog_provider, null, {
                default: withCtx(() => [
                  createVNode(_component_router_view)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["theme", "locale", "date-locale"]);
    };
  }
});
const scriptRel = function detectScriptRel() {
  const relList = typeof document !== "undefined" && document.createElement("link").relList;
  return relList && relList.supports && relList.supports("modulepreload") ? "modulepreload" : "preload";
}();
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep, importerUrl);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i = links.length - 1; i >= 0; i--) {
            const link2 = links[i];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => __vitePreload(() => import("./index-C38lObSt.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0, import.meta.url)
    },
    {
      path: "/",
      name: "Main",
      component: () => __vitePreload(() => import("./index-BJPScpvL.js"), true ? __vite__mapDeps([8,9,10,11,3,2,1,12,13,14,15,5,16,17,18,4,19,20,21,22,23,6,24,25,26,27,28,29,30]) : void 0, import.meta.url),
      children: [
        {
          path: "/home",
          name: "Home",
          component: () => __vitePreload(() => import("./index-BnkuEmeY.js"), true ? __vite__mapDeps([31,32,11,3,2,33,5,4,17,15,21,1,10,28,22,9,13,34,6,14,16,35,36,24,25,37,38,39,18,40,19,41,27,42,29,43]) : void 0, import.meta.url)
        },
        {
          path: "/dashboard",
          name: "Dashboard",
          component: () => __vitePreload(() => import("./index-jX_CUYw0.js"), true ? __vite__mapDeps([44,1,2,45]) : void 0, import.meta.url)
        },
        {
          path: "/upload",
          name: "Upload",
          component: () => __vitePreload(() => import("./index-B_0Pz29p.js"), true ? __vite__mapDeps([46,47,36,9,24,1,2,25,28,11,3,37,38,27,48,49,32,33,5,4,17,15,21,10,22,13,34,6,14,16,35]) : void 0, import.meta.url)
        },
        {
          path: "/danmakufactory",
          name: "DanmakuFactory",
          component: () => __vitePreload(() => import("./DanmuFactory-DzsDx7KU.js"), true ? __vite__mapDeps([50,47,36,9,24,1,2,25,28,11,3,37,38,27,48,49,51,39,10,34,6,18,5,4,13,17,15,21,40,20,16,22,52,26,53]) : void 0, import.meta.url)
        },
        {
          path: "/convert2mp4",
          name: "Convert2Mp4",
          component: () => __vitePreload(() => import("./File2Mp4-C6u6wUSD.js"), true ? __vite__mapDeps([54,22,11,3,2,47,36,9,24,1,25,28,37,38,27,48,49,26,14,15,5,16,34,6,4,55]) : void 0, import.meta.url)
        },
        {
          path: "/videoMerge",
          name: "VideoMerge",
          component: () => __vitePreload(() => import("./VideoMerge-gA6fU7r4.js"), true ? __vite__mapDeps([56,36,9,24,1,2,25,28,11,3,37,38,47,27,48,49,10,57]) : void 0, import.meta.url)
        },
        {
          path: "/biliDownload",
          name: "BiliDownload",
          component: () => __vitePreload(() => import("./VideoDownload-CvMZpmZ0.js"), true ? __vite__mapDeps([58,11,3,2,28,24,1,9,25,26,4,5,34,6,17,15,33,59]) : void 0, import.meta.url)
        },
        {
          path: "/recorder",
          name: "recorder",
          component: () => __vitePreload(() => import("./Index-daZtNYvV.js"), true ? __vite__mapDeps([60,22,11,3,2,10,4,5,13,12,18,17,15,41,27,42,1,9,61,62]) : void 0, import.meta.url)
        },
        {
          path: "/videoCut",
          name: "videoCut",
          component: () => __vitePreload(() => import("./Index-Cf_UgWWg.js"), true ? __vite__mapDeps([63,36,9,24,1,2,25,28,11,3,37,38,41,27,42,51,39,10,34,6,18,5,4,13,17,15,21,40,20,16,22,52,48,26,14,19,64]) : void 0, import.meta.url)
        },
        {
          path: "/queue",
          name: "Queue",
          component: () => __vitePreload(() => import("./index-B81iPRxA.js"), true ? __vite__mapDeps([65,22,11,3,2,28,23,37,17,15,5,66]) : void 0, import.meta.url)
        },
        {
          path: "/user",
          name: "User",
          component: () => __vitePreload(() => import("./index-f4shuDHx.js"), true ? __vite__mapDeps([67,11,3,2,33,22,61,68]) : void 0, import.meta.url)
        },
        {
          path: "/about",
          name: "About",
          component: () => __vitePreload(() => import("./About-b2vhW8LT.js"), true ? __vite__mapDeps([69,1,2]) : void 0, import.meta.url)
        }
      ]
    }
  ]
});
var isVue2 = false;
/*!
 * pinia v2.2.8
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject$1(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop$1 = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
const ACTION_MARKER = Symbol();
const ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  } else if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && true) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = { deep: true };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && true) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop$1
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  const action = (fn, name = "") => {
    if (ACTION_MARKER in fn) {
      fn[ACTION_NAME] = name;
      return fn;
    }
    const wrappedAction = function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME],
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = fn.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER] = true;
    wrappedAction[ACTION_NAME] = name;
    return wrappedAction;
  };
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = action(prop, key);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    pinia || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function storeToRefs(store) {
  {
    const rawStore = toRaw(store);
    const refs = {};
    for (const key in rawStore) {
      const value = rawStore[key];
      if (value.effect) {
        refs[key] = // ...
        computed({
          get: () => store[key],
          set(value2) {
            store[key] = value2;
          }
        });
      } else if (isRef(value) || isReactive(value)) {
        refs[key] = // ---
        toRef(store, key);
      }
    }
    return refs;
  }
}
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = /* @__PURE__ */ ((cache2) => (thing) => {
  const str = toString.call(thing);
  return cache2[str] || (cache2[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
const typeOfTest = (type) => (thing) => typeof thing === type;
const { isArray } = Array;
const isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString = typeOfTest("string");
const isFunction = typeOfTest("function");
const isNumber = typeOfTest("number");
const isObject = (thing) => thing !== null && typeof thing === "object";
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
const isDate = kindOfTest("Date");
const isFile = kindOfTest("File");
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (val) => isObject(val) && isFunction(val.pipe);
const isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
const trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue2 = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue2);
  }
  return result;
}
const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, { allOwnKeys });
  return a;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
const isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator2 = generator.call(obj);
  let result;
  while ((result = iterator2.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches2;
  const arr = [];
  while ((matches2 = regExp.exec(str)) !== null) {
    arr.push(matches2);
  }
  return arr;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer2(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {
};
const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size2 = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  while (size2--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj) => {
  const stack2 = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack2.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack2[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack2[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks2) => {
    _global.addEventListener("message", ({ source, data }) => {
      if (source === _global && data === token) {
        callbacks2.length && callbacks2.shift()();
      }
    }, false);
    return (cb) => {
      callbacks2.push(cb);
      _global.postMessage(token, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === "function",
  isFunction(_global.postMessage)
);
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
const utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
};
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}
utils$1.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const prototype$1 = AxiosError.prototype;
const descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);
  utils$1.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
const httpAdapter = null;
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}
function removeBrackets(key) {
  return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path2, key, dots) {
  if (!path2) return key;
  return path2.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new FormData();
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils$1.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null) return "";
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError("Blob is not supported. Use a Buffer instead.");
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path2) {
    let arr = value;
    if (value && !path2 && typeof value === "object") {
      if (utils$1.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path2, key, dots), convertValue(value));
    return false;
  }
  const stack2 = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path2) {
    if (utils$1.isUndefined(value)) return;
    if (stack2.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path2.join("."));
    }
    stack2.push(value);
    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils$1.isString(key) ? key.trim() : key,
        path2,
        exposedHelpers
      );
      if (result === true) {
        build(el, path2 ? path2.concat(key) : [key]);
      }
    });
    stack2.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
function encode$1(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer2(match2) {
    return charMap[match2];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  if (utils$1.isFunction(options)) {
    options = {
      serialize: options
    };
  }
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h2) {
      if (h2 !== null) {
        fn(h2);
      }
    });
  }
}
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
const platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
const _navigator = typeof navigator === "object" && navigator || void 0;
const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const origin = hasBrowserEnv && window.location.href || "http://localhost";
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv,
  hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin
}, Symbol.toStringTag, { value: "Module" }));
const platform = {
  ...utils,
  ...platform$1
};
function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path2, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}
function parsePropPath(name) {
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match2) => {
    return match2[0] === "[]" ? "" : match2[1] || match2[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path2, value, target, index) {
    let name = path2[index++];
    if (name === "__proto__") return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path2.length;
    name = !name && utils$1.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path2, value, target[name], index);
    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};
    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (0, JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils$1.isObject(data);
    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils$1.isFormData(data);
    if (isFormData2) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
const ignoreDuplicateOf = utils$1.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
const parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};
const $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match2;
  while (match2 = tokensRE.exec(str)) {
    tokens[match2[1]] = match2[2];
  }
  return tokens;
}
const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils$1.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
  if (utils$1.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils$1.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils$1.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils$1.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed2 = new this(first);
    targets.forEach((target) => computed2.set(target));
    return computed2;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders);
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}
function CanceledError(message, config, request) {
  AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils$1.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});
function settle(resolve2, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve2(response);
  } else {
    reject(new AxiosError(
      "Request failed with status code " + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}
function parseProtocol(url) {
  const match2 = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match2 && match2[1] || "";
}
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return throttle((e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));
const isURLSameOrigin = platform.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
  url = new URL(url, platform.origin);
  return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true;
const cookies = platform.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path2, domain, secure) {
      const cookie = [name + "=" + encodeURIComponent(value)];
      utils$1.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
      utils$1.isString(path2) && cookie.push("path=" + path2);
      utils$1.isString(domain) && cookie.push("domain=" + domain);
      secure === true && cookie.push("secure");
      document.cookie = cookie.join("; ");
    },
    read(name) {
      const match2 = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match2 ? decodeURIComponent(match2[3]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const headersToObject = (thing) => thing instanceof AxiosHeaders ? { ...thing } : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({ caseless }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a, prop, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
  };
  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}
const resolveConfig = (config) => {
  const newConfig = mergeConfig({}, config);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
  newConfig.headers = headers = AxiosHeaders.from(headers);
  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);
  if (auth) {
    headers.set(
      "Authorization",
      "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
    );
  }
  let contentType;
  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(void 0);
    } else if ((contentType = headers.getContentType()) !== false) {
      const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
    }
  }
  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve2, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve2(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError2() {
      reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener("progress", uploadThrottled);
      request.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};
const composeSignals = (signals, timeout) => {
  const { length } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError(`timeout ${timeout} of ms exceeded`, AxiosError.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils$1.asap(unsubscribe);
    return signal;
  }
};
const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (; ; ) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator2 = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const { done: done2, value } = await iterator2.next();
        if (done2) {
          _onFinish();
          controller.close();
          return;
        }
        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator2.return();
    }
  }, {
    highWaterMark: 2
  });
};
const isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;
  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      duplexAccessed = true;
      return "half";
    }
  }).headers.has("Content-Type");
  return duplexAccessed && !hasContentType;
});
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const supportsResponseStream = isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response("").body));
const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};
isFetchSupported && ((res) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
    !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res2) => res2[type]() : (_, config) => {
      throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config);
    });
  });
})(new Response());
const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }
  if (utils$1.isBlob(body)) {
    return body.size;
  }
  if (utils$1.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: "POST",
      body
    });
    return (await _request.arrayBuffer()).byteLength;
  }
  if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
    return body.byteLength;
  }
  if (utils$1.isURLSearchParams(body)) {
    body = body + "";
  }
  if (utils$1.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};
const resolveBodyLength = async (headers, body) => {
  const length = utils$1.toFiniteNumber(headers.getContentLength());
  return length == null ? getBodyLength(body) : length;
};
const fetchAdapter = isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = "same-origin",
    fetchOptions
  } = resolveConfig(config);
  responseType = responseType ? (responseType + "").toLowerCase() : "text";
  let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
  let request;
  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
    composedSignal.unsubscribe();
  });
  let requestContentLength;
  try {
    if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
      let _request = new Request(url, {
        method: "POST",
        body: data,
        duplex: "half"
      });
      let contentTypeHeader;
      if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
        headers.setContentType(contentTypeHeader);
      }
      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );
        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }
    if (!utils$1.isString(withCredentials)) {
      withCredentials = withCredentials ? "include" : "omit";
    }
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : void 0
    });
    let response = await fetch(request);
    const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
    if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
      const options = {};
      ["status", "statusText", "headers"].forEach((prop) => {
        options[prop] = response[prop];
      });
      const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];
      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }
    responseType = responseType || "text";
    let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](response, config);
    !isStreamResponse && unsubscribe && unsubscribe();
    return await new Promise((resolve2, reject) => {
      settle(resolve2, reject, {
        data: responseData,
        headers: AxiosHeaders.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    });
  } catch (err) {
    unsubscribe && unsubscribe();
    if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      );
    }
    throw AxiosError.from(err, err && err.code, config, request);
  }
});
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: fetchAdapter
};
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
const renderReason = (reason) => `- ${reason}`;
const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
const adapters = {
  getAdapter: (adapters2) => {
    adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
    const { length } = adapters2;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters2[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === void 0) {
          throw new AxiosError(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters.getAdapter(config.adapter || defaults.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}
const VERSION = "1.7.8";
const validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version2, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError(
        formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")),
        AxiosError.ERR_DEPRECATED
      );
    }
    if (version2 && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version2 + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator2 = schema[opt];
    if (validator2) {
      const value = options[opt];
      const result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
        const stack2 = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        try {
          if (!err.stack) {
            err.stack = stack2;
          } else if (stack2 && !String(err.stack).endsWith(stack2.replace(/^.+\n.+\n/, ""))) {
            err.stack += "\n" + stack2;
          }
        } catch (e) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator.assertOptions(transitional2, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }
    validator.assertOptions(config, {
      baseUrl: validators.spelling("baseURL"),
      withXsrfToken: validators.spelling("withXSRFToken")
    }, true);
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );
    headers && utils$1.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve2) {
      resolvePromise = resolve2;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve2) => {
        token.subscribe(resolve2);
        _resolve = resolve2;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c2) {
      cancel = c2;
    });
    return {
      token,
      cancel
    };
  }
}
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
function createInstance(defaultConfig) {
  const context = new Axios(defaultConfig);
  const instance = bind(Axios.prototype.request, context);
  utils$1.extend(instance, Axios.prototype, context, { allOwnKeys: true });
  utils$1.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
const axios = createInstance(defaults);
axios.Axios = Axios;
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;
axios.AxiosError = AxiosError;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders;
axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode;
axios.default = axios;
const api = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});
async function init$1() {
  if (window.isWeb) {
    const baseURL = window.localStorage.getItem("api");
    if (baseURL) {
      api.defaults.baseURL = baseURL;
    } else {
      api.defaults.baseURL = `http://127.0.0.1:18010`;
    }
  } else {
    const appConfig = await window.api.config.getAll();
    const protocol = appConfig.https ? "https" : "http";
    api.defaults.baseURL = `${protocol}://127.0.0.1:${appConfig.port}`;
    api.defaults.headers.Authorization = appConfig.passKey;
  }
}
api.interceptors.request.use(
  (config) => {
    const keyStorage = window.localStorage.getItem("key");
    if (keyStorage) {
      config.headers.Authorization = keyStorage;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error?.response?.status === 401) {
      window.localStorage.removeItem("key");
      window.location.href = "/login";
    }
    return Promise.reject(error?.response?.data);
  }
);
const isWindows = () => {
  if (typeof window === "object") {
    return (
      // @ts-expect-error some browsers support userAgentData.platform, not all though...
      window.navigator.userAgentData?.platform === "Windows" || window.navigator.userAgent.includes("Windows")
    );
  }
  return process?.platform === "win32";
};
const CHAR_UPPERCASE_A = 65;
const CHAR_LOWERCASE_A = 97;
const CHAR_UPPERCASE_Z = 90;
const CHAR_LOWERCASE_Z = 122;
const CHAR_DOT = 46;
const CHAR_FORWARD_SLASH = 47;
const CHAR_BACKWARD_SLASH = 92;
const CHAR_COLON = 58;
const CHAR_QUESTION_MARK = 63;
isWindows() ? "\r\n" : "\n";
function formatList(array, type = "and") {
  switch (array.length) {
    case 0:
      return "";
    case 1:
      return `${array[0]}`;
    case 2:
      return `${array[0]} ${type} ${array[1]}`;
    case 3:
      return `${array[0]}, ${array[1]}, ${type} ${array[2]}`;
    default:
      return `${array.slice(0, -1).join(", ")}, ${type} ${array[array.length - 1]}`;
  }
}
const kTypes = [
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
];
const classRegExp = /^[A-Z][a-zA-Z0-9]*$/;
function getMessage(name, expected, actual) {
  if (!Array.isArray(expected)) {
    expected = [expected];
  }
  let msg2 = "The ";
  if (name.endsWith(" argument")) {
    msg2 += `${name} `;
  } else {
    const type = name.includes(".") ? "property" : "argument";
    msg2 += `"${name}" ${type} `;
  }
  msg2 += "must be ";
  const types = [];
  const instances = [];
  const other = [];
  for (const value of expected) {
    if (kTypes.includes(value)) {
      types.push(value.toLowerCase());
    } else if (classRegExp.exec(value) !== null) {
      instances.push(value);
    } else {
      other.push(value);
    }
  }
  if (instances.length > 0) {
    const pos = types.indexOf("object");
    if (pos !== -1) {
      types.splice(pos, 1);
      instances.push("Object");
    }
  }
  if (types.length > 0) {
    msg2 += `${types.length > 1 ? "one of type" : "of type"} ${formatList(types, "or")}`;
    if (instances.length > 0 || other.length > 0) msg2 += " or ";
  }
  if (instances.length > 0) {
    msg2 += `an instance of ${formatList(instances, "or")}`;
    if (other.length > 0) msg2 += " or ";
  }
  if (other.length > 0) {
    if (other.length > 1) {
      msg2 += `one of ${formatList(other, "or")}`;
    } else {
      if (other[0].toLowerCase() !== other[0]) msg2 += "an ";
      msg2 += `${other[0]}`;
    }
  }
  msg2 += `. Received ${typeof actual}`;
  return msg2;
}
class ERR_INVALID_ARG_TYPE extends Error {
  /**
   * @param {string} name
   * @param {string|string[]} expected
   * @param {*} actual
   */
  constructor(name, expected, actual) {
    const msg2 = getMessage(name, expected, actual);
    super(msg2);
    this.name = "ERR_INVALID_ARG_TYPE";
  }
}
const kValidateObjectNone = 0;
const kValidateObjectAllowNullable = 1 << 0;
const kValidateObjectAllowArray = 1 << 1;
const kValidateObjectAllowFunction = 1 << 2;
const validateObject = (value, name, options = kValidateObjectNone) => {
  if (options === kValidateObjectNone) {
    if (value === null || Array.isArray(value)) {
      throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
    }
    if (typeof value !== "object") {
      throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
    }
  } else {
    const throwOnNullable = (kValidateObjectAllowNullable & options) === 0;
    if (throwOnNullable && value === null) {
      throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
    }
    const throwOnArray = (kValidateObjectAllowArray & options) === 0;
    if (throwOnArray && Array.isArray(value)) {
      throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
    }
    const throwOnFunction = (kValidateObjectAllowFunction & options) === 0;
    const typeofValue = typeof value;
    if (typeofValue !== "object" && (throwOnFunction || typeofValue !== "function")) {
      throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
    }
  }
};
const validateString = (value, name) => {
  if (typeof value !== "string") throw new ERR_INVALID_ARG_TYPE(name, "string", value);
};
if (typeof window === "object") {
  if (!window.process) {
    window.process = {};
  }
  window.process.cwd = () => "/";
}
const platformIsWin32$1 = isWindows();
function isPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}
function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH;
}
function isWindowsDeviceRoot(code) {
  return code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z || code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z;
}
function normalizeString(path2, allowAboveRoot, separator, isPathSeparator2) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code = 0;
  for (let i = 0; i <= path2.length; ++i) {
    if (i < path2.length) code = path2.charCodeAt(i);
    else if (isPathSeparator2(code)) break;
    else code = CHAR_FORWARD_SLASH;
    if (isPathSeparator2(code)) {
      if (lastSlash === i - 1 || dots === 1) ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length !== 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? `${separator}..` : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) res += `${separator}${path2.slice(lastSlash + 1, i)}`;
        else res = path2.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function formatExt(ext) {
  return ext ? `${ext[0] === "." ? "" : "."}${ext}` : "";
}
function _format(sep, pathObject) {
  validateObject(pathObject, "pathObject");
  const dir = pathObject.dir || pathObject.root;
  const base2 = pathObject.base || `${pathObject.name || ""}${formatExt(pathObject.ext)}`;
  if (!dir) {
    return base2;
  }
  return dir === pathObject.root ? `${dir}${base2}` : `${dir}${sep}${base2}`;
}
function winResolve(...args) {
  let resolvedDevice = "";
  let resolvedTail = "";
  let resolvedAbsolute = false;
  for (let i = args.length - 1; i >= -1; i--) {
    let path2;
    if (i >= 0) {
      path2 = args[i];
      validateString(path2, `paths[${i}]`);
      if (path2.length === 0) {
        continue;
      }
    } else if (resolvedDevice.length === 0) {
      path2 = process.cwd();
    } else {
      path2 = process?.env[`=${resolvedDevice}`] || process.cwd();
      if (path2 === void 0 || path2.slice(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() && path2.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
        path2 = `${resolvedDevice}\\`;
      }
    }
    const len = path2.length;
    let rootEnd = 0;
    let device = "";
    let isAbsolute = false;
    const code = path2.charCodeAt(0);
    if (len === 1) {
      if (isPathSeparator(code)) {
        rootEnd = 1;
        isAbsolute = true;
      }
    } else if (isPathSeparator(code)) {
      isAbsolute = true;
      if (isPathSeparator(path2.charCodeAt(1))) {
        let j = 2;
        let last = j;
        while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          const firstPart = path2.slice(last, j);
          last = j;
          while (j < len && isPathSeparator(path2.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            last = j;
            while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
              j++;
            }
            if (j === len || j !== last) {
              device = `\\\\${firstPart}\\${path2.slice(last, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code) && path2.charCodeAt(1) === CHAR_COLON) {
      device = path2.slice(0, 2);
      rootEnd = 2;
      if (len > 2 && isPathSeparator(path2.charCodeAt(2))) {
        isAbsolute = true;
        rootEnd = 3;
      }
    }
    if (device.length > 0) {
      if (resolvedDevice.length > 0) {
        if (device.toLowerCase() !== resolvedDevice.toLowerCase())
          continue;
      } else {
        resolvedDevice = device;
      }
    }
    if (resolvedAbsolute) {
      if (resolvedDevice.length > 0) break;
    } else {
      resolvedTail = `${path2.slice(rootEnd)}\\${resolvedTail}`;
      resolvedAbsolute = isAbsolute;
      if (isAbsolute && resolvedDevice.length > 0) {
        break;
      }
    }
  }
  resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator);
  return resolvedAbsolute ? `${resolvedDevice}\\${resolvedTail}` : `${resolvedDevice}${resolvedTail}` || ".";
}
function winNormalize(path2) {
  validateString(path2, "path");
  const len = path2.length;
  if (len === 0) return ".";
  let rootEnd = 0;
  let device;
  let isAbsolute = false;
  const code = path2.charCodeAt(0);
  if (len === 1) {
    return isPosixPathSeparator(code) ? "\\" : path2;
  }
  if (isPathSeparator(code)) {
    isAbsolute = true;
    if (isPathSeparator(path2.charCodeAt(1))) {
      let j = 2;
      let last = j;
      while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
        j++;
      }
      if (j < len && j !== last) {
        const firstPart = path2.slice(last, j);
        last = j;
        while (j < len && isPathSeparator(path2.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          last = j;
          while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
            j++;
          }
          if (j === len) {
            return `\\\\${firstPart}\\${path2.slice(last)}\\`;
          }
          if (j !== last) {
            device = `\\\\${firstPart}\\${path2.slice(last, j)}`;
            rootEnd = j;
          }
        }
      }
    } else {
      rootEnd = 1;
    }
  } else if (isWindowsDeviceRoot(code) && path2.charCodeAt(1) === CHAR_COLON) {
    device = path2.slice(0, 2);
    rootEnd = 2;
    if (len > 2 && isPathSeparator(path2.charCodeAt(2))) {
      isAbsolute = true;
      rootEnd = 3;
    }
  }
  let tail = rootEnd < len ? normalizeString(path2.slice(rootEnd), !isAbsolute, "\\", isPathSeparator) : "";
  if (tail.length === 0 && !isAbsolute) tail = ".";
  if (tail.length > 0 && isPathSeparator(path2.charCodeAt(len - 1))) tail += "\\";
  if (device === void 0) {
    return isAbsolute ? `\\${tail}` : tail;
  }
  return isAbsolute ? `${device}\\${tail}` : `${device}${tail}`;
}
function winIsAbsolute(path2) {
  validateString(path2, "path");
  const len = path2.length;
  if (len === 0) return false;
  const code = path2.charCodeAt(0);
  return isPathSeparator(code) || // Possible device root
  len > 2 && isWindowsDeviceRoot(code) && path2.charCodeAt(1) === CHAR_COLON && isPathSeparator(path2.charCodeAt(2));
}
function winJoin(...args) {
  if (args.length === 0) return ".";
  let joined;
  let firstPart;
  for (let i = 0; i < args.length; ++i) {
    const arg = args[i];
    validateString(arg, "path");
    if (arg.length > 0) {
      if (joined === void 0) joined = firstPart = arg;
      else joined += `\\${arg}`;
    }
  }
  if (joined === void 0) return ".";
  let needsReplace = true;
  let slashCount = 0;
  if (firstPart !== void 0 && isPathSeparator(firstPart.charCodeAt(0))) {
    ++slashCount;
    const firstLen = firstPart.length;
    if (firstLen > 1 && isPathSeparator(firstPart.charCodeAt(1))) {
      ++slashCount;
      if (firstLen > 2) {
        if (isPathSeparator(firstPart.charCodeAt(2))) ++slashCount;
        else {
          needsReplace = false;
        }
      }
    }
  }
  if (needsReplace) {
    while (slashCount < joined.length && isPathSeparator(joined.charCodeAt(slashCount))) {
      slashCount++;
    }
    if (slashCount >= 2) joined = `\\${joined.slice(slashCount)}`;
  }
  return winNormalize(joined);
}
function winRelative(from, to) {
  validateString(from, "from");
  validateString(to, "to");
  if (from === to) return "";
  const fromOrig = winResolve(from);
  const toOrig = winResolve(to);
  if (fromOrig === toOrig) return "";
  from = fromOrig.toLowerCase();
  to = toOrig.toLowerCase();
  if (from === to) return "";
  let fromStart = 0;
  while (fromStart < from.length && from.charCodeAt(fromStart) === CHAR_BACKWARD_SLASH) {
    fromStart++;
  }
  let fromEnd = from.length;
  while (fromEnd - 1 > fromStart && from.charCodeAt(fromEnd - 1) === CHAR_BACKWARD_SLASH) {
    fromEnd--;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 0;
  while (toStart < to.length && to.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
    toStart++;
  }
  let toEnd = to.length;
  while (toEnd - 1 > toStart && to.charCodeAt(toEnd - 1) === CHAR_BACKWARD_SLASH) {
    toEnd--;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i < length; i++) {
    const fromCode = from.charCodeAt(fromStart + i);
    if (fromCode !== to.charCodeAt(toStart + i)) break;
    else if (fromCode === CHAR_BACKWARD_SLASH) lastCommonSep = i;
  }
  if (i !== length) {
    if (lastCommonSep === -1) return toOrig;
  } else {
    if (toLen > length) {
      if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
        return toOrig.slice(toStart + i + 1);
      }
      if (i === 2) {
        return toOrig.slice(toStart + i);
      }
    }
    if (fromLen > length) {
      if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
        lastCommonSep = i;
      } else if (i === 2) {
        lastCommonSep = 3;
      }
    }
    if (lastCommonSep === -1) lastCommonSep = 0;
  }
  let out = "";
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
      out += out.length === 0 ? ".." : "\\..";
    }
  }
  toStart += lastCommonSep;
  if (out.length > 0) return `${out}${toOrig.slice(toStart, toEnd)}`;
  if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) ++toStart;
  return toOrig.slice(toStart, toEnd);
}
function winToNamespacedPath(path2) {
  if (typeof path2 !== "string" || path2.length === 0) return path2;
  const resolvedPath = winResolve(path2);
  if (resolvedPath.length <= 2) return path2;
  if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
    if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
      const code = resolvedPath.charCodeAt(2);
      if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
        return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
      }
    }
  } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) && resolvedPath.charCodeAt(1) === CHAR_COLON && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
    return `\\\\?\\${resolvedPath}`;
  }
  return path2;
}
function winDirname(path2) {
  validateString(path2, "path");
  const len = path2.length;
  if (len === 0) return ".";
  let rootEnd = -1;
  let offset = 0;
  const code = path2.charCodeAt(0);
  if (len === 1) {
    return isPathSeparator(code) ? path2 : ".";
  }
  if (isPathSeparator(code)) {
    rootEnd = offset = 1;
    if (isPathSeparator(path2.charCodeAt(1))) {
      let j = 2;
      let last = j;
      while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
        j++;
      }
      if (j < len && j !== last) {
        last = j;
        while (j < len && isPathSeparator(path2.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          last = j;
          while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
            j++;
          }
          if (j === len) {
            return path2;
          }
          if (j !== last) {
            rootEnd = offset = j + 1;
          }
        }
      }
    }
  } else if (isWindowsDeviceRoot(code) && path2.charCodeAt(1) === CHAR_COLON) {
    rootEnd = len > 2 && isPathSeparator(path2.charCodeAt(2)) ? 3 : 2;
    offset = rootEnd;
  }
  let end = -1;
  let matchedSlash = true;
  for (let i = len - 1; i >= offset; --i) {
    if (isPathSeparator(path2.charCodeAt(i))) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) {
    if (rootEnd === -1) return ".";
    end = rootEnd;
  }
  return path2.slice(0, end);
}
function winBasename(path2, suffix2) {
  if (suffix2 !== void 0) validateString(suffix2, "ext");
  validateString(path2, "path");
  let start = 0;
  let end = -1;
  let matchedSlash = true;
  if (path2.length >= 2 && isWindowsDeviceRoot(path2.charCodeAt(0)) && path2.charCodeAt(1) === CHAR_COLON) {
    start = 2;
  }
  if (suffix2 !== void 0 && suffix2.length > 0 && suffix2.length <= path2.length) {
    if (suffix2 === path2) return "";
    let extIdx = suffix2.length - 1;
    let firstNonSlashEnd = -1;
    for (let i = path2.length - 1; i >= start; --i) {
      const code = path2.charCodeAt(i);
      if (isPathSeparator(code)) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else {
        if (firstNonSlashEnd === -1) {
          matchedSlash = false;
          firstNonSlashEnd = i + 1;
        }
        if (extIdx >= 0) {
          if (code === suffix2.charCodeAt(extIdx)) {
            if (--extIdx === -1) {
              end = i;
            }
          } else {
            extIdx = -1;
            end = firstNonSlashEnd;
          }
        }
      }
    }
    if (start === end) end = firstNonSlashEnd;
    else if (end === -1) end = path2.length;
    return path2.slice(start, end);
  }
  for (let i = path2.length - 1; i >= start; --i) {
    if (isPathSeparator(path2.charCodeAt(i))) {
      if (!matchedSlash) {
        start = i + 1;
        break;
      }
    } else if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
  }
  if (end === -1) return "";
  return path2.slice(start, end);
}
function winExtname(path2) {
  validateString(path2, "path");
  let start = 0;
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  if (path2.length >= 2 && path2.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path2.charCodeAt(0))) {
    start = startPart = 2;
  }
  for (let i = path2.length - 1; i >= start; --i) {
    const code = path2.charCodeAt(i);
    if (isPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1) startDot = i;
      else if (preDotState !== 1) preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
const winFormat = _format.bind(null, "\\");
function winParse(path2) {
  validateString(path2, "path");
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  if (path2.length === 0) return ret;
  const len = path2.length;
  let rootEnd = 0;
  let code = path2.charCodeAt(0);
  if (len === 1) {
    if (isPathSeparator(code)) {
      ret.root = ret.dir = path2;
      return ret;
    }
    ret.base = ret.name = path2;
    return ret;
  }
  if (isPathSeparator(code)) {
    rootEnd = 1;
    if (isPathSeparator(path2.charCodeAt(1))) {
      let j = 2;
      let last = j;
      while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
        j++;
      }
      if (j < len && j !== last) {
        last = j;
        while (j < len && isPathSeparator(path2.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          last = j;
          while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
            j++;
          }
          if (j === len) {
            rootEnd = j;
          } else if (j !== last) {
            rootEnd = j + 1;
          }
        }
      }
    }
  } else if (isWindowsDeviceRoot(code) && path2.charCodeAt(1) === CHAR_COLON) {
    if (len <= 2) {
      ret.root = ret.dir = path2;
      return ret;
    }
    rootEnd = 2;
    if (isPathSeparator(path2.charCodeAt(2))) {
      if (len === 3) {
        ret.root = ret.dir = path2;
        return ret;
      }
      rootEnd = 3;
    }
  }
  if (rootEnd > 0) ret.root = path2.slice(0, rootEnd);
  let startDot = -1;
  let startPart = rootEnd;
  let end = -1;
  let matchedSlash = true;
  let i = path2.length - 1;
  let preDotState = 0;
  for (; i >= rootEnd; --i) {
    code = path2.charCodeAt(i);
    if (isPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1) startDot = i;
      else if (preDotState !== 1) preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (end !== -1) {
    if (startDot === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      ret.base = ret.name = path2.slice(startPart, end);
    } else {
      ret.name = path2.slice(startPart, startDot);
      ret.base = path2.slice(startPart, end);
      ret.ext = path2.slice(startDot, end);
    }
  }
  if (startPart > 0 && startPart !== rootEnd) ret.dir = path2.slice(0, startPart - 1);
  else ret.dir = ret.root;
  return ret;
}
const winSep = "\\";
const winDelimiter = ";";
const posixCwd = (() => {
  if (platformIsWin32$1) {
    const regexp = /\\/g;
    return () => {
      const cwd = process.cwd().replace(regexp, "/");
      return cwd.slice(cwd.indexOf("/"));
    };
  }
  return () => process.cwd();
})();
function posResolve(...args) {
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    const path2 = i >= 0 ? args[i] : posixCwd();
    validateString(path2, `paths[${i}]`);
    if (path2.length === 0) {
      continue;
    }
    resolvedPath = `${path2}/${resolvedPath}`;
    resolvedAbsolute = path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator);
  if (resolvedAbsolute) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
}
function posNormalize(path2) {
  validateString(path2, "path");
  if (path2.length === 0) return ".";
  const isAbsolute = path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
  const trailingSeparator = path2.charCodeAt(path2.length - 1) === CHAR_FORWARD_SLASH;
  path2 = normalizeString(path2, !isAbsolute, "/", isPosixPathSeparator);
  if (path2.length === 0) {
    if (isAbsolute) return "/";
    return trailingSeparator ? "./" : ".";
  }
  if (trailingSeparator) path2 += "/";
  return isAbsolute ? `/${path2}` : path2;
}
function posIsAbsolute(path2) {
  validateString(path2, "path");
  return path2.length > 0 && path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
}
function posJoin(...args) {
  if (args.length === 0) return ".";
  let joined;
  for (let i = 0; i < args.length; ++i) {
    const arg = args[i];
    validateString(arg, "path");
    if (arg.length > 0) {
      if (joined === void 0) joined = arg;
      else joined += `/${arg}`;
    }
  }
  if (joined === void 0) return ".";
  return posNormalize(joined);
}
function posRelative(from, to) {
  validateString(from, "from");
  validateString(to, "to");
  if (from === to) return "";
  from = posResolve(from);
  to = posResolve(to);
  if (from === to) return "";
  const fromStart = 1;
  const fromEnd = from.length;
  const fromLen = fromEnd - fromStart;
  const toStart = 1;
  const toLen = to.length - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i < length; i++) {
    const fromCode = from.charCodeAt(fromStart + i);
    if (fromCode !== to.charCodeAt(toStart + i)) break;
    else if (fromCode === CHAR_FORWARD_SLASH) lastCommonSep = i;
  }
  if (i === length) {
    if (toLen > length) {
      if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
        return to.slice(toStart + i + 1);
      }
      if (i === 0) {
        return to.slice(toStart + i);
      }
    } else if (fromLen > length) {
      if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
        lastCommonSep = i;
      } else if (i === 0) {
        lastCommonSep = 0;
      }
    }
  }
  let out = "";
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
      out += out.length === 0 ? ".." : "/..";
    }
  }
  return `${out}${to.slice(toStart + lastCommonSep)}`;
}
function posToNamespacedPath(path2) {
  return path2;
}
function posDirname(path2) {
  validateString(path2, "path");
  if (path2.length === 0) return ".";
  const hasRoot = path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let end = -1;
  let matchedSlash = true;
  for (let i = path2.length - 1; i >= 1; --i) {
    if (path2.charCodeAt(i) === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) return hasRoot ? "/" : ".";
  if (hasRoot && end === 1) return "//";
  return path2.slice(0, end);
}
function posBasename(path2, suffix2) {
  if (suffix2 !== void 0) validateString(suffix2, "ext");
  validateString(path2, "path");
  let start = 0;
  let end = -1;
  let matchedSlash = true;
  if (suffix2 !== void 0 && suffix2.length > 0 && suffix2.length <= path2.length) {
    if (suffix2 === path2) return "";
    let extIdx = suffix2.length - 1;
    let firstNonSlashEnd = -1;
    for (let i = path2.length - 1; i >= 0; --i) {
      const code = path2.charCodeAt(i);
      if (code === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else {
        if (firstNonSlashEnd === -1) {
          matchedSlash = false;
          firstNonSlashEnd = i + 1;
        }
        if (extIdx >= 0) {
          if (code === suffix2.charCodeAt(extIdx)) {
            if (--extIdx === -1) {
              end = i;
            }
          } else {
            extIdx = -1;
            end = firstNonSlashEnd;
          }
        }
      }
    }
    if (start === end) end = firstNonSlashEnd;
    else if (end === -1) end = path2.length;
    return path2.slice(start, end);
  }
  for (let i = path2.length - 1; i >= 0; --i) {
    if (path2.charCodeAt(i) === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        start = i + 1;
        break;
      }
    } else if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
  }
  if (end === -1) return "";
  return path2.slice(start, end);
}
function posExtname(path2) {
  validateString(path2, "path");
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  for (let i = path2.length - 1; i >= 0; --i) {
    const code = path2.charCodeAt(i);
    if (code === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1) startDot = i;
      else if (preDotState !== 1) preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
const posFormat = _format.bind(null, "/");
function posParse(path2) {
  validateString(path2, "path");
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  if (path2.length === 0) return ret;
  const isAbsolute = path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let start;
  if (isAbsolute) {
    ret.root = "/";
    start = 1;
  } else {
    start = 0;
  }
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let i = path2.length - 1;
  let preDotState = 0;
  for (; i >= start; --i) {
    const code = path2.charCodeAt(i);
    if (code === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1) startDot = i;
      else if (preDotState !== 1) preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (end !== -1) {
    const start2 = startPart === 0 && isAbsolute ? 1 : startPart;
    if (startDot === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      ret.base = ret.name = path2.slice(start2, end);
    } else {
      ret.name = path2.slice(start2, startDot);
      ret.base = path2.slice(start2, end);
      ret.ext = path2.slice(startDot, end);
    }
  }
  if (startPart > 0) ret.dir = path2.slice(0, startPart - 1);
  else if (isAbsolute) ret.dir = "/";
  return ret;
}
const posSep = "/";
const posDelimiter = ":";
const platformIsWin32 = isWindows();
const __win32 = {
  resolve: winResolve,
  normalize: winNormalize,
  isAbsolute: winIsAbsolute,
  join: winJoin,
  relative: winRelative,
  toNamespacedPath: winToNamespacedPath,
  dirname: winDirname,
  basename: winBasename,
  extname: winExtname,
  format: winFormat,
  parse: winParse,
  sep: winSep,
  delimiter: winDelimiter
};
const __posix = {
  resolve: posResolve,
  normalize: posNormalize,
  isAbsolute: posIsAbsolute,
  join: posJoin,
  relative: posRelative,
  toNamespacedPath: posToNamespacedPath,
  dirname: posDirname,
  basename: posBasename,
  extname: posExtname,
  format: posFormat,
  parse: posParse,
  sep: posSep,
  delimiter: posDelimiter
};
const win32 = {
  ...__win32,
  posix: __posix,
  // this makes it bad for treeshaking too since otherwise we'd only need to load posix stuff... but keeping it to support current path API
  win32: __win32
};
const posix = {
  ...__posix,
  posix: __posix,
  win32: __win32
  // this makes it bad for treeshaking too since otherwise we'd only need to load posix stuff... but keeping it to support current path API
};
const path = platformIsWin32 ? win32 : posix;
const isWeb = !window.api;
window.isWeb = isWeb;
if (isWeb) {
  window.path = path;
}
const init = async () => {
  await init$1();
  const pinia = createPinia();
  const app = createApp(_sfc_main);
  app.use(router).use(pinia).mount("#app");
};
init();
export {
  getPreciseEventTarget as $,
  useConfig as A,
  Button as B,
  onMounted as C,
  watch as D,
  toRef as E,
  Fragment as F,
  useTheme as G,
  codeLight as H,
  useThemeClass as I,
  tooltipLight as J,
  createInjectionKey as K,
  throwError as L,
  fadeInScaleUpTransition as M,
  cNotM as N,
  useFormItem as O,
  timePickerLight as P,
  nextTick as Q,
  provide as R,
  Scrollbar as S,
  isMounted as T,
  NBaseIcon as U,
  Transition as V,
  withDirectives as W,
  clickoutside as X,
  call as Y,
  markEventEffectPerformed as Z,
  __unplugin_components_2 as _,
  createVNode as a,
  Suspense as a$,
  layoutLight as a0,
  useReactivated as a1,
  NBaseLoading as a2,
  logLight as a3,
  warn as a4,
  render as a5,
  keysOf as a6,
  useMemo as a7,
  keep as a8,
  NFadeInExpandTransition as a9,
  isSymbol as aA,
  isObject$1 as aB,
  root as aC,
  NBaseClose as aD,
  omit as aE,
  flatten as aF,
  resolveWrappedSlot as aG,
  tabsLight as aH,
  depx as aI,
  createKey as aJ,
  getMargin as aK,
  vShow as aL,
  TransitionGroup as aM,
  cloneVNode as aN,
  popselectLight as aO,
  paginationLight as aP,
  useRtl as aQ,
  resolveSlot as aR,
  BaseTransition as aS,
  BaseTransitionPropsValidators as aT,
  Comment as aU,
  DeprecationTypes as aV,
  EffectScope as aW,
  ErrorCodes as aX,
  ErrorTypeStrings as aY,
  ReactiveEffect as aZ,
  Static as a_,
  menuLight as aa,
  watchEffect as ab,
  createId as ac,
  VResizeObserver as ad,
  mergeProps as ae,
  mergeModels as af,
  useModel as ag,
  storeToRefs as ah,
  createBlock as ai,
  createCommentVNode as aj,
  renderList as ak,
  normalizeClass as al,
  toDisplayString as am,
  __unplugin_components_3 as an,
  toRaw as ao,
  onUnmounted as ap,
  useRoute as aq,
  resolveComponent as ar,
  normalizeStyle as as,
  resolveDynamicComponent as at,
  KeepAlive as au,
  RouterLink as av,
  withKeys as aw,
  onActivated as ax,
  onDeactivated as ay,
  useSsrAdapter as az,
  createStaticVNode as b,
  onWatcherCleanup as b$,
  Teleport as b0,
  Text as b1,
  TrackOpTypes as b2,
  TriggerOpTypes as b3,
  VueElement as b4,
  assertNumber as b5,
  callWithAsyncErrorHandling as b6,
  callWithErrorHandling as b7,
  camelize as b8,
  capitalize as b9,
  hasInjectionContext as bA,
  hydrate as bB,
  hydrateOnIdle as bC,
  hydrateOnInteraction as bD,
  hydrateOnMediaQuery as bE,
  hydrateOnVisible as bF,
  initCustomFormatter as bG,
  initDirectivesForSSR as bH,
  isMemoSame as bI,
  isProxy as bJ,
  isReactive as bK,
  isReadonly as bL,
  isRuntimeOnly as bM,
  isShallow as bN,
  isVNode as bO,
  markRaw as bP,
  mergeDefaults as bQ,
  normalizeProps as bR,
  onBeforeMount as bS,
  onBeforeUnmount as bT,
  onBeforeUpdate as bU,
  onErrorCaptured as bV,
  onRenderTracked as bW,
  onRenderTriggered as bX,
  onScopeDispose as bY,
  onServerPrefetch as bZ,
  onUpdated as b_,
  compatUtils as ba,
  createApp as bb,
  createHydrationRenderer as bc,
  createPropsRestProxy as bd,
  createRenderer as be,
  createSSRApp as bf,
  createSlots as bg,
  customRef as bh,
  defineAsyncComponent as bi,
  defineCustomElement as bj,
  defineEmits as bk,
  defineExpose as bl,
  defineModel as bm,
  defineOptions as bn,
  defineProps as bo,
  defineSSRCustomElement as bp,
  defineSlots as bq,
  devtools as br,
  effect as bs,
  effectScope as bt,
  getCurrentInstance as bu,
  getCurrentScope as bv,
  getCurrentWatcher as bw,
  getTransitionRawChildren as bx,
  guardReactiveProps as by,
  handleError as bz,
  createElementBlock as c,
  baseUnary as c$,
  popScopeId as c0,
  proxyRefs as c1,
  pushScopeId as c2,
  queuePostFlushCb as c3,
  reactive as c4,
  readonly as c5,
  registerRuntimeCompiler as c6,
  render$2 as c7,
  renderSlot as c8,
  resolveDirective as c9,
  useTransitionState as cA,
  vModelCheckbox as cB,
  vModelDynamic as cC,
  vModelRadio as cD,
  vModelSelect as cE,
  vModelText as cF,
  version as cG,
  warn$3 as cH,
  watchPostEffect as cI,
  watchSyncEffect as cJ,
  withAsyncContext as cK,
  withDefaults as cL,
  withMemo as cM,
  withModifiers as cN,
  withScopeId as cO,
  fadeInTransition as cP,
  spinLight as cQ,
  pxfy as cR,
  iconSwitchTransition as cS,
  switchLight as cT,
  isSlotEmpty as cU,
  NIconSwitchTransition as cV,
  Symbol$1 as cW,
  isArray$2 as cX,
  isArguments as cY,
  arrayMap as cZ,
  identity as c_,
  resolveFilter as ca,
  resolveTransitionHooks as cb,
  setBlockTracking as cc,
  setDevtoolsHook as cd,
  setTransitionHooks as ce,
  shallowReactive as cf,
  shallowReadonly as cg,
  shallowRef as ch,
  ssrContextKey$1 as ci,
  ssrUtils as cj,
  stop as ck,
  toHandlerKey as cl,
  toHandlers as cm,
  toRefs as cn,
  toValue as co,
  transformVNodeArgs as cp,
  triggerRef as cq,
  useAttrs as cr,
  useCssModule as cs,
  useCssVars as ct,
  useHost as cu,
  useId as cv,
  useSSRContext as cw,
  useShadowRoot as cx,
  useSlots as cy,
  useTemplateRef as cz,
  defineComponent as d,
  dialogApiInjectionKey as d$,
  baseRest as d0,
  isIterateeCall as d1,
  XScrollbar as d2,
  useStyle as d3,
  toHexaString as d4,
  rgba as d5,
  toHslaString as d6,
  toHsvaString as d7,
  toRgbaString as d8,
  hsla as d9,
  lightTheme as dA,
  __unplugin_components_3$1 as dB,
  inputNumberLight as dC,
  XButton as dD,
  formLight as dE,
  formItemInjectionKey as dF,
  resolveSlotWithProps as dG,
  isSafari as dH,
  inputLight as dI,
  SuccessIcon as dJ,
  ErrorIcon as dK,
  WarningIcon as dL,
  InfoIcon as dM,
  progressLight as dN,
  selectLight as dO,
  resizeObserverManager as dP,
  emptyLight as dQ,
  internalSelectMenuLight as dR,
  tagLight as dS,
  color2Class as dT,
  internalSelectionLight as dU,
  Wrapper as dV,
  buildLocalizeFn as dW,
  buildMatchPatternFn as dX,
  buildMatchFn as dY,
  buildFormatLongFn as dZ,
  themeLight$1 as d_,
  hsva as da,
  on as db,
  off as dc,
  toHexString as dd,
  toHslString as de,
  toRgbString as df,
  toHsvString as dg,
  colorPickerLight as dh,
  hasInstance as di,
  popoverBodyInjectionKey as dj,
  modalBodyInjectionKey as dk,
  drawerBodyInjectionKey as dl,
  dropdownLight as dm,
  dividerLight as dn,
  cascaderLight as dp,
  changeColor as dq,
  typographyLight as dr,
  radioLight as ds,
  isBrowser$2 as dt,
  spaceLight as du,
  getGap as dv,
  useOsTheme as dw,
  zhCN$1 as dx,
  dateZhCN as dy,
  darkTheme as dz,
  unref as e,
  isBrowser$3 as e0,
  getSlot as e1,
  getFirstVNode as e2,
  CssRender as e3,
  zindexable as e4,
  LazyTeleport as e5,
  getNative as e6,
  overArg as e7,
  isPrototype as e8,
  isArrayLike as e9,
  popoverLight as eA,
  FocusTrap as eB,
  getFirstSlotVNode as eC,
  insideModal as eD,
  insidePopover as eE,
  checkboxLight as eF,
  iconLight as eG,
  defineStore as eH,
  notificationApiInjectionKey as eI,
  arrayLikeKeys as ea,
  MapCache as eb,
  toString$1 as ec,
  copyObject as ed,
  keysIn as ee,
  getPrototype as ef,
  toSource as eg,
  baseGetTag as eh,
  Map$1 as ei,
  cloneArrayBuffer as ej,
  cloneTypedArray as ek,
  isObjectLike as el,
  nodeUtil as em,
  copyArray as en,
  isBuffer$1 as eo,
  cloneBuffer as ep,
  initCloneObject as eq,
  Stack as er,
  assignValue as es,
  eq as et,
  Uint8Array$1 as eu,
  isTypedArray$1 as ev,
  isLength as ew,
  isIndex as ex,
  baseFor as ey,
  cCB as ez,
  createBaseVNode as f,
  createTextVNode as g,
  api as h,
  isRef as i,
  inject as j,
  configProviderInjectionKey as k,
  computed as l,
  h as m,
  replaceable as n,
  openBlock as o,
  c as p,
  commonVariables$n as q,
  ref as r,
  startOfWeek as s,
  toDate as t,
  useRouter as u,
  getDefaultOptions as v,
  withCtx as w,
  cB as x,
  cM as y,
  cE as z
};
