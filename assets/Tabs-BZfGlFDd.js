import { d as defineComponent, r as ref, aC as useSsrAdapter, v as h, aD as isSymbol, aE as isObject, aF as root, aG as toHexaString, aH as rgba, aI as toHslaString, aJ as toHsvaString, aK as toRgbaString, aL as hsla, aM as hsva, aN as on, aO as off, p as computed, N as createInjectionKey, m as inject, ae as watchEffect, aP as toHexString, aQ as toHslString, aR as toRgbString, aS as toHsvString, a6 as warn, x as c$1, z as cB, O as fadeInScaleUpTransition, C as cE, A as cM, Q as useFormItem, D as useConfig, H as useTheme, aT as colorPickerLight, U as provide, G as toRef, F as watch, aU as createKey, J as useThemeClass, V as isMounted, a1 as getPreciseEventTarget, X as Transition, Y as withDirectives, Z as clickoutside, $ as call, B as Button, T as nextTick, M as throwError, aV as mergeProps, a8 as Fragment, W as NBaseIcon, a7 as render, aW as NBaseClose, aX as omit, P as cNotM, aY as flatten, E as onMounted, aZ as resolveWrappedSlot, ag as VResizeObserver, a_ as tabsLight, a$ as depx, b0 as getMargin, b1 as vShow, b2 as TransitionGroup, b3 as cloneVNode } from "./index-BdK_bIY-.js";
import { _ as __unplugin_components_2 } from "./Input-B9R9uvsi.js";
import { _ as __unplugin_components_2$1 } from "./InputGroup-BED7yoFa.js";
import { u as useLocale } from "./Suffix-BPiqXR0G.js";
import { a as useMergedState } from "./use-notification-Bd6vXVK5.js";
import { n as cssrAnchorMetaName, o as c, u as useAdjustedTo, B as Binder, V as VTarget, a as VFollower, b as useCompitable, q as onFontsReady } from "./index-C4u8aLk_.js";
import { A as AddIcon } from "./FormItem-CCWUUqVZ.js";
function hsl2hsv(h2, s, l) {
  s /= 100;
  l /= 100;
  const v = s * Math.min(l, 1 - l) + l;
  return [h2, v ? (2 - 2 * l / v) * 100 : 0, v * 100];
}
function hsv2hsl(h2, s, v) {
  s /= 100;
  v /= 100;
  const l = v - v * s / 2;
  const m = Math.min(l, 1 - l);
  return [h2, m ? (v - l) / m * 100 : 0, l * 100];
}
function hsv2rgb(h2, s, v) {
  s /= 100;
  v /= 100;
  let f = (n, k = (n + h2 / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  return [f(5) * 255, f(3) * 255, f(1) * 255];
}
function rgb2hsv(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  let v = Math.max(r, g, b), c2 = v - Math.min(r, g, b);
  let h2 = c2 && (v == r ? (g - b) / c2 : v == g ? 2 + (b - r) / c2 : 4 + (r - g) / c2);
  return [60 * (h2 < 0 ? h2 + 6 : h2), v && c2 / v * 100, v * 100];
}
function rgb2hsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  let v = Math.max(r, g, b), c2 = v - Math.min(r, g, b), f = 1 - Math.abs(v + v - c2 - 1);
  let h2 = c2 && (v == r ? (g - b) / c2 : v == g ? 2 + (b - r) / c2 : 4 + (r - g) / c2);
  return [60 * (h2 < 0 ? h2 + 6 : h2), f ? c2 / f * 100 : 0, (v + v - c2) * 50];
}
function hsl2rgb(h2, s, l) {
  s /= 100;
  l /= 100;
  let a = s * Math.min(l, 1 - l);
  let f = (n, k = (n + h2 / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0) * 255, f(8) * 255, f(4) * 255];
}
const styles = c(".v-x-scroll", {
  overflow: "auto",
  scrollbarWidth: "none"
}, [
  c("&::-webkit-scrollbar", {
    width: 0,
    height: 0
  })
]);
const VXScroll = defineComponent({
  name: "XScroll",
  props: {
    disabled: Boolean,
    onScroll: Function
  },
  setup() {
    const selfRef = ref(null);
    function handleWheel(e) {
      const preventYWheel = e.currentTarget.offsetWidth < e.currentTarget.scrollWidth;
      if (!preventYWheel || e.deltaY === 0)
        return;
      e.currentTarget.scrollLeft += e.deltaY + e.deltaX;
      e.preventDefault();
    }
    const ssrAdapter = useSsrAdapter();
    styles.mount({
      id: "vueuc/x-scroll",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    const exposedMethods = {
      scrollTo(...args) {
        var _a;
        (_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(...args);
      }
    };
    return Object.assign({
      selfRef,
      handleWheel
    }, exposedMethods);
  },
  render() {
    return h("div", {
      ref: "selfRef",
      onScroll: this.onScroll,
      onWheel: this.disabled ? void 0 : this.handleWheel,
      class: "v-x-scroll"
    }, this.$slots);
  }
});
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root.Date.now();
};
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
function deriveDefaultValue(modes, showAlpha) {
  const mode = modes[0];
  switch (mode) {
    case "hex":
      return showAlpha ? "#000000FF" : "#000000";
    case "rgb":
      return showAlpha ? "rgba(0, 0, 0, 1)" : "rgb(0, 0, 0)";
    case "hsl":
      return showAlpha ? "hsla(0, 0%, 0%, 1)" : "hsl(0, 0%, 0%)";
    case "hsv":
      return showAlpha ? "hsva(0, 0%, 0%, 1)" : "hsv(0, 0%, 0%)";
  }
  return "#000000";
}
function getModeFromValue(color) {
  if (color === null) return null;
  if (/^ *#/.test(color)) return "hex";
  if (color.includes("rgb")) return "rgb";
  if (color.includes("hsl")) return "hsl";
  if (color.includes("hsv")) return "hsv";
  return null;
}
function normalizeHue(hue) {
  hue = Math.round(hue);
  return hue >= 360 ? 359 : hue < 0 ? 0 : hue;
}
function normalizeAlpha(alpha) {
  alpha = Math.round(alpha * 100) / 100;
  return alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
}
const convert = {
  rgb: {
    hex(value) {
      return toHexaString(rgba(value));
    },
    hsl(value) {
      const [r, g, b, a] = rgba(value);
      return toHslaString([...rgb2hsl(r, g, b), a]);
    },
    hsv(value) {
      const [r, g, b, a] = rgba(value);
      return toHsvaString([...rgb2hsv(r, g, b), a]);
    }
  },
  hex: {
    rgb(value) {
      return toRgbaString(rgba(value));
    },
    hsl(value) {
      const [r, g, b, a] = rgba(value);
      return toHslaString([...rgb2hsl(r, g, b), a]);
    },
    hsv(value) {
      const [r, g, b, a] = rgba(value);
      return toHsvaString([...rgb2hsv(r, g, b), a]);
    }
  },
  hsl: {
    hex(value) {
      const [h2, s, l, a] = hsla(value);
      return toHexaString([...hsl2rgb(h2, s, l), a]);
    },
    rgb(value) {
      const [h2, s, l, a] = hsla(value);
      return toRgbaString([...hsl2rgb(h2, s, l), a]);
    },
    hsv(value) {
      const [h2, s, l, a] = hsla(value);
      return toHsvaString([...hsl2hsv(h2, s, l), a]);
    }
  },
  hsv: {
    hex(value) {
      const [h2, s, v, a] = hsva(value);
      return toHexaString([...hsv2rgb(h2, s, v), a]);
    },
    rgb(value) {
      const [h2, s, v, a] = hsva(value);
      return toRgbaString([...hsv2rgb(h2, s, v), a]);
    },
    hsl(value) {
      const [h2, s, v, a] = hsva(value);
      return toHslaString([...hsv2hsl(h2, s, v), a]);
    }
  }
};
function convertColor(value, mode, originalMode) {
  originalMode = originalMode || getModeFromValue(value);
  if (!originalMode) return null;
  if (originalMode === mode) return value;
  const conversions = convert[originalMode];
  return conversions[mode](value);
}
const HANDLE_SIZE$2 = "12px";
const HANDLE_SIZE_NUM$1 = 12;
const RADIUS$2 = "6px";
const RADIUS_NUM = 6;
const GRADIENT = "linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";
const HueSlider = defineComponent({
  name: "HueSlider",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    hue: {
      type: Number,
      required: true
    },
    onUpdateHue: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const railRef = ref(null);
    function handleMouseDown(e) {
      if (!railRef.value) return;
      on("mousemove", document, handleMouseMove);
      on("mouseup", document, handleMouseUp);
      handleMouseMove(e);
    }
    function handleMouseMove(e) {
      const {
        value: railEl
      } = railRef;
      if (!railEl) return;
      const {
        width,
        left
      } = railEl.getBoundingClientRect();
      const newHue = normalizeHue((e.clientX - left - RADIUS_NUM) / (width - HANDLE_SIZE_NUM$1) * 360);
      props.onUpdateHue(newHue);
    }
    function handleMouseUp() {
      var _a;
      off("mousemove", document, handleMouseMove);
      off("mouseup", document, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      railRef,
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-slider`,
      style: {
        height: HANDLE_SIZE$2,
        borderRadius: RADIUS$2
      }
    }, h("div", {
      ref: "railRef",
      style: {
        boxShadow: "inset 0 0 2px 0 rgba(0, 0, 0, .24)",
        boxSizing: "border-box",
        backgroundImage: GRADIENT,
        height: HANDLE_SIZE$2,
        borderRadius: RADIUS$2,
        position: "relative"
      },
      onMousedown: this.handleMouseDown
    }, h("div", {
      style: {
        position: "absolute",
        left: RADIUS$2,
        right: RADIUS$2,
        top: 0,
        bottom: 0
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        left: `calc((${this.hue}%) / 359 * 100 - ${RADIUS$2})`,
        borderRadius: RADIUS$2,
        width: HANDLE_SIZE$2,
        height: HANDLE_SIZE$2
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: `hsl(${this.hue}, 100%, 50%)`,
        borderRadius: RADIUS$2,
        width: HANDLE_SIZE$2,
        height: HANDLE_SIZE$2
      }
    })))));
  }
});
const HANDLE_SIZE$1 = "12px";
const HANDLE_SIZE_NUM = 12;
const RADIUS$1 = "6px";
const AlphaSlider = defineComponent({
  name: "AlphaSlider",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    rgba: {
      type: Array,
      default: null
    },
    alpha: {
      type: Number,
      default: 0
    },
    onUpdateAlpha: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const railRef = ref(null);
    function handleMouseDown(e) {
      if (!railRef.value || !props.rgba) return;
      on("mousemove", document, handleMouseMove);
      on("mouseup", document, handleMouseUp);
      handleMouseMove(e);
    }
    function handleMouseMove(e) {
      const {
        value: railEl
      } = railRef;
      if (!railEl) return;
      const {
        width,
        left
      } = railEl.getBoundingClientRect();
      const newAlpha = (e.clientX - left) / (width - HANDLE_SIZE_NUM);
      props.onUpdateAlpha(normalizeAlpha(newAlpha));
    }
    function handleMouseUp() {
      var _a;
      off("mousemove", document, handleMouseMove);
      off("mouseup", document, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      railRef,
      railBackgroundImage: computed(() => {
        const {
          rgba: rgba2
        } = props;
        if (!rgba2) return "";
        return `linear-gradient(to right, rgba(${rgba2[0]}, ${rgba2[1]}, ${rgba2[2]}, 0) 0%, rgba(${rgba2[0]}, ${rgba2[1]}, ${rgba2[2]}, 1) 100%)`;
      }),
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-slider`,
      ref: "railRef",
      style: {
        height: HANDLE_SIZE$1,
        borderRadius: RADIUS$1
      },
      onMousedown: this.handleMouseDown
    }, h("div", {
      style: {
        borderRadius: RADIUS$1,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: "hidden"
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-checkboard`
    }), h("div", {
      class: `${clsPrefix}-color-picker-slider__image`,
      style: {
        backgroundImage: this.railBackgroundImage
      }
    })), this.rgba && h("div", {
      style: {
        position: "absolute",
        left: RADIUS$1,
        right: RADIUS$1,
        top: 0,
        bottom: 0
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        left: `calc(${this.alpha * 100}% - ${RADIUS$1})`,
        borderRadius: RADIUS$1,
        width: HANDLE_SIZE$1,
        height: HANDLE_SIZE$1
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: toRgbaString(this.rgba),
        borderRadius: RADIUS$1,
        width: HANDLE_SIZE$1,
        height: HANDLE_SIZE$1
      }
    }))));
  }
});
const HANDLE_SIZE = "12px";
const RADIUS = "6px";
const Pallete = defineComponent({
  name: "Pallete",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    rgba: {
      type: Array,
      default: null
    },
    // 0 - 360
    displayedHue: {
      type: Number,
      required: true
    },
    displayedSv: {
      type: Array,
      required: true
    },
    onUpdateSV: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const palleteRef = ref(null);
    function handleMouseDown(e) {
      if (!palleteRef.value) return;
      on("mousemove", document, handleMouseMove);
      on("mouseup", document, handleMouseUp);
      handleMouseMove(e);
    }
    function handleMouseMove(e) {
      const {
        value: palleteEl
      } = palleteRef;
      if (!palleteEl) return;
      const {
        width,
        height,
        left,
        bottom
      } = palleteEl.getBoundingClientRect();
      const newV = (bottom - e.clientY) / height;
      const newS = (e.clientX - left) / width;
      const normalizedNewS = 100 * (newS > 1 ? 1 : newS < 0 ? 0 : newS);
      const normalizedNewV = 100 * (newV > 1 ? 1 : newV < 0 ? 0 : newV);
      props.onUpdateSV(normalizedNewS, normalizedNewV);
    }
    function handleMouseUp() {
      var _a;
      off("mousemove", document, handleMouseMove);
      off("mouseup", document, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      palleteRef,
      handleColor: computed(() => {
        const {
          rgba: rgba2
        } = props;
        if (!rgba2) return "";
        return `rgb(${rgba2[0]}, ${rgba2[1]}, ${rgba2[2]})`;
      }),
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-pallete`,
      onMousedown: this.handleMouseDown,
      ref: "palleteRef"
    }, h("div", {
      class: `${clsPrefix}-color-picker-pallete__layer`,
      style: {
        backgroundImage: `linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`
      }
    }), h("div", {
      class: `${clsPrefix}-color-picker-pallete__layer ${clsPrefix}-color-picker-pallete__layer--shadowed`,
      style: {
        backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"
      }
    }), this.rgba && h("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        width: HANDLE_SIZE,
        height: HANDLE_SIZE,
        borderRadius: RADIUS,
        left: `calc(${this.displayedSv[0]}% - ${RADIUS})`,
        bottom: `calc(${this.displayedSv[1]}% - ${RADIUS})`
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: this.handleColor,
        borderRadius: RADIUS,
        width: HANDLE_SIZE,
        height: HANDLE_SIZE
      }
    })));
  }
});
const colorPickerInjectionKey = createInjectionKey("n-color-picker");
function normalizeRgbUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value), 255));
  }
  return false;
}
function normalizeHueUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value), 360));
  }
  return false;
}
function normalizeSlvUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value), 100));
  }
  return false;
}
function normalizeHexaUnit(value) {
  const trimmedValue = value.trim();
  if (/^#[0-9a-fA-F]+$/.test(trimmedValue)) {
    return [4, 5, 7, 9].includes(trimmedValue.length);
  }
  return false;
}
function normalizeAlphaUnit(value) {
  if (/^\d{1,3}\.?\d*%$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value) / 100, 100));
  }
  return false;
}
const inputThemeOverrides = {
  paddingSmall: "0 4px"
};
const ColorInputUnit = defineComponent({
  name: "ColorInputUnit",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      default: null
    },
    showAlpha: Boolean,
    onUpdateValue: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const inputValueRef = ref("");
    const {
      themeRef
    } = inject(colorPickerInjectionKey, null);
    watchEffect(() => {
      inputValueRef.value = getInputString();
    });
    function getInputString() {
      const {
        value
      } = props;
      if (value === null) return "";
      const {
        label
      } = props;
      if (label === "HEX") {
        return value;
      }
      if (label === "A") {
        return `${Math.floor(value * 100)}%`;
      }
      return String(Math.floor(value));
    }
    function handleInputUpdateValue(value) {
      inputValueRef.value = value;
    }
    function handleInputChange(value) {
      let unit;
      let valid;
      switch (props.label) {
        case "HEX":
          valid = normalizeHexaUnit(value);
          if (valid) {
            props.onUpdateValue(value);
          }
          inputValueRef.value = getInputString();
          break;
        case "H":
          unit = normalizeHueUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case "S":
        case "L":
        case "V":
          unit = normalizeSlvUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case "A":
          unit = normalizeAlphaUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case "R":
        case "G":
        case "B":
          unit = normalizeRgbUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
      }
    }
    return {
      mergedTheme: themeRef,
      inputValue: inputValueRef,
      handleInputChange,
      handleInputUpdateValue
    };
  },
  render() {
    const {
      mergedTheme
    } = this;
    return h(__unplugin_components_2, {
      size: "small",
      placeholder: this.label,
      theme: mergedTheme.peers.Input,
      themeOverrides: mergedTheme.peerOverrides.Input,
      builtinThemeOverrides: inputThemeOverrides,
      value: this.inputValue,
      onUpdateValue: this.handleInputUpdateValue,
      onChange: this.handleInputChange,
      // add more space for xxx% input
      style: this.label === "A" ? "flex-grow: 1.25;" : ""
    });
  }
});
const ColorInput = defineComponent({
  name: "ColorInput",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    modes: {
      type: Array,
      required: true
    },
    showAlpha: {
      type: Boolean,
      required: true
    },
    value: {
      // for hex to get percise value
      type: String,
      default: null
    },
    valueArr: {
      type: Array,
      default: null
    },
    onUpdateValue: {
      type: Function,
      required: true
    },
    onUpdateMode: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    return {
      handleUnitUpdateValue(index, value) {
        const {
          showAlpha
        } = props;
        if (props.mode === "hex") {
          props.onUpdateValue((showAlpha ? toHexaString : toHexString)(value));
          return;
        }
        let nextValueArr;
        if (props.valueArr === null) {
          nextValueArr = [0, 0, 0, 0];
        } else {
          nextValueArr = Array.from(props.valueArr);
        }
        switch (props.mode) {
          case "hsv":
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toHsvaString : toHsvString)(nextValueArr));
            break;
          case "rgb":
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toRgbaString : toRgbString)(nextValueArr));
            break;
          case "hsl":
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toHslaString : toHslString)(nextValueArr));
            break;
        }
      }
    };
  },
  render() {
    const {
      clsPrefix,
      modes
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-input`
    }, h("div", {
      class: `${clsPrefix}-color-picker-input__mode`,
      onClick: this.onUpdateMode,
      style: {
        cursor: modes.length === 1 ? "" : "pointer"
      }
    }, this.mode.toUpperCase() + (this.showAlpha ? "A" : "")), h(__unplugin_components_2$1, null, {
      default: () => {
        const {
          mode,
          valueArr,
          showAlpha
        } = this;
        if (mode === "hex") {
          let hexValue = null;
          try {
            hexValue = valueArr === null ? null : (showAlpha ? toHexaString : toHexString)(valueArr);
          } catch (_a) {
          }
          return h(ColorInputUnit, {
            label: "HEX",
            showAlpha,
            value: hexValue,
            onUpdateValue: (unitValue) => {
              this.handleUnitUpdateValue(0, unitValue);
            }
          });
        }
        return (mode + (showAlpha ? "a" : "")).split("").map((v, i) => h(ColorInputUnit, {
          label: v.toUpperCase(),
          value: valueArr === null ? null : valueArr[i],
          onUpdateValue: (unitValue) => {
            this.handleUnitUpdateValue(i, unitValue);
          }
        }));
      }
    }));
  }
});
const ColorPickerTrigger = defineComponent({
  name: "ColorPickerTrigger",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: null
    },
    hsla: {
      type: Array,
      default: null
    },
    disabled: Boolean,
    onClick: Function
  },
  setup(props) {
    const {
      colorPickerSlots,
      renderLabelRef
    } = inject(colorPickerInjectionKey, null);
    return () => {
      const {
        hsla: hsla2,
        value,
        clsPrefix,
        onClick,
        disabled
      } = props;
      const renderLabel = colorPickerSlots.label || renderLabelRef.value;
      return h("div", {
        class: [`${clsPrefix}-color-picker-trigger`, disabled && `${clsPrefix}-color-picker-trigger--disabled`],
        onClick: disabled ? void 0 : onClick
      }, h("div", {
        class: `${clsPrefix}-color-picker-trigger__fill`
      }, h("div", {
        class: `${clsPrefix}-color-picker-checkboard`
      }), h("div", {
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: hsla2 ? toHslaString(hsla2) : ""
        }
      }), value && hsla2 ? h("div", {
        class: `${clsPrefix}-color-picker-trigger__value`,
        style: {
          color: hsla2[2] > 50 || hsla2[3] < 0.5 ? "black" : "white"
        }
      }, renderLabel ? renderLabel(value) : value) : null));
    };
  }
});
function normalizeColor(color, mode) {
  if (mode === "hsv") {
    const [h2, s, v, a] = hsva(color);
    return toRgbaString([...hsv2rgb(h2, s, v), a]);
  }
  return color;
}
function getHexFromName(color) {
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) {
    return "#000000";
  }
  ctx.fillStyle = color;
  return ctx.fillStyle;
}
const ColorPickerSwatches = defineComponent({
  name: "ColorPickerSwatches",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    swatches: {
      type: Array,
      required: true
    },
    onUpdateColor: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const parsedSwatchesRef = computed(() => props.swatches.map((value) => {
      const mode = getModeFromValue(value);
      return {
        value,
        mode,
        legalValue: normalizeColor(value, mode)
      };
    }));
    function normalizeOutput(parsed) {
      const {
        mode: modeProp
      } = props;
      let {
        value,
        mode: swatchColorMode
      } = parsed;
      if (!swatchColorMode) {
        swatchColorMode = "hex";
        if (/^[a-zA-Z]+$/.test(value)) {
          value = getHexFromName(value);
        } else {
          warn("color-picker", `color ${value} in swatches is invalid.`);
          value = "#000000";
        }
      }
      if (swatchColorMode === modeProp) return value;
      return convertColor(value, modeProp, swatchColorMode);
    }
    function handleSwatchSelect(parsed) {
      props.onUpdateColor(normalizeOutput(parsed));
    }
    function handleSwatchKeyDown(e, parsed) {
      if (e.key === "Enter") handleSwatchSelect(parsed);
    }
    return {
      parsedSwatchesRef,
      handleSwatchSelect,
      handleSwatchKeyDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-swatches`
    }, this.parsedSwatchesRef.map((swatch) => h("div", {
      class: `${clsPrefix}-color-picker-swatch`,
      tabindex: 0,
      onClick: () => {
        this.handleSwatchSelect(swatch);
      },
      onKeydown: (e) => {
        this.handleSwatchKeyDown(e, swatch);
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-swatch__fill`,
      style: {
        background: swatch.legalValue
      }
    }))));
  }
});
const ColorPreview = defineComponent({
  name: "ColorPreview",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: null,
      validator: (value) => {
        const mode = getModeFromValue(value);
        return Boolean(!value || mode && mode !== "hsv");
      }
    },
    onUpdateColor: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    function handleChange(e) {
      var _a;
      const value = e.target.value;
      (_a = props.onUpdateColor) === null || _a === void 0 ? void 0 : _a.call(props, convertColor(value.toUpperCase(), props.mode, "hex"));
      e.stopPropagation();
    }
    return {
      handleChange
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-preview__preview`
    }, h("span", {
      class: `${clsPrefix}-color-picker-preview__fill`,
      style: {
        background: this.color || "#000000"
      }
    }), h("input", {
      class: `${clsPrefix}-color-picker-preview__input`,
      type: "color",
      value: this.color,
      onChange: this.handleChange
    }));
  }
});
const style$1 = c$1([cB("color-picker", `
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `), cB("color-picker-panel", `
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `, [fadeInScaleUpTransition(), cB("input", `
 text-align: center;
 `)]), cB("color-picker-checkboard", `
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [c$1("&::after", `
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cB("color-picker-slider", `
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `, [cE("image", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `), c$1("&::after", `
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]), cB("color-picker-handle", `
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `, [cE("fill", `
 box-sizing: border-box;
 border: 2px solid white;
 `)]), cB("color-picker-pallete", `
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `, [cE("layer", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [cM("shadowed", `
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]), cB("color-picker-preview", `
 display: flex;
 `, [cE("sliders", `
 flex: 1 0 auto;
 `), cE("preview", `
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `), cE("fill", `
 display: block;
 width: 30px;
 height: 30px;
 `), cE("input", `
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]), cB("color-picker-input", `
 display: flex;
 align-items: center;
 `, [cB("input", `
 flex-grow: 1;
 flex-basis: 0;
 `), cE("mode", `
 width: 72px;
 text-align: center;
 `)]), cB("color-picker-control", `
 padding: 12px;
 `), cB("color-picker-action", `
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `, [cB("button", "margin-left: 8px;")]), cB("color-picker-trigger", `
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `, [cE("value", `
 white-space: nowrap;
 position: relative;
 `), cE("fill", `
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `), cM("disabled", "cursor: not-allowed"), cB("color-picker-checkboard", `
 border-radius: var(--n-border-radius);
 `, [c$1("&::after", `
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]), cB("color-picker-swatches", `
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `, [cB("color-picker-swatch", `
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `, [cE("fill", `
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `), c$1("&:focus", `
 outline: none;
 `, [cE("fill", [c$1("&::after", `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);
const colorPickerProps = Object.assign(Object.assign({}, useTheme.props), {
  value: String,
  show: {
    type: Boolean,
    default: void 0
  },
  defaultShow: Boolean,
  defaultValue: String,
  modes: {
    type: Array,
    // no hsva by default since browser doesn't support it
    default: () => ["rgb", "hex", "hsl"]
  },
  placement: {
    type: String,
    default: "bottom-start"
  },
  to: useAdjustedTo.propTo,
  showAlpha: {
    type: Boolean,
    default: true
  },
  showPreview: Boolean,
  swatches: Array,
  disabled: {
    type: Boolean,
    default: void 0
  },
  actions: {
    type: Array,
    default: null
  },
  internalActions: Array,
  size: String,
  renderLabel: Function,
  onComplete: Function,
  onConfirm: Function,
  onClear: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array]
});
const __unplugin_components_3 = defineComponent({
  name: "ColorPicker",
  props: colorPickerProps,
  setup(props, {
    slots
  }) {
    const selfRef = ref(null);
    let upcomingValue = null;
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef
    } = formItem;
    const {
      localeRef
    } = useLocale("global");
    const {
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("ColorPicker", "-color-picker", style$1, colorPickerLight, props, mergedClsPrefixRef);
    provide(colorPickerInjectionKey, {
      themeRef,
      renderLabelRef: toRef(props, "renderLabel"),
      colorPickerSlots: slots
    });
    const uncontrolledShowRef = ref(props.defaultShow);
    const mergedShowRef = useMergedState(toRef(props, "show"), uncontrolledShowRef);
    function doUpdateShow(value) {
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow
      } = props;
      if (onUpdateShow) call(onUpdateShow, value);
      if (_onUpdateShow) call(_onUpdateShow, value);
      uncontrolledShowRef.value = value;
    }
    const {
      defaultValue
    } = props;
    const uncontrolledValueRef = ref(defaultValue === void 0 ? deriveDefaultValue(props.modes, props.showAlpha) : defaultValue);
    const mergedValueRef = useMergedState(toRef(props, "value"), uncontrolledValueRef);
    const undoStackRef = ref([mergedValueRef.value]);
    const valueIndexRef = ref(0);
    const valueModeRef = computed(() => getModeFromValue(mergedValueRef.value));
    const {
      modes
    } = props;
    const displayedModeRef = ref(getModeFromValue(mergedValueRef.value) || modes[0] || "rgb");
    function handleUpdateDisplayedMode() {
      const {
        modes: modes2
      } = props;
      const {
        value: displayedMode
      } = displayedModeRef;
      const currentModeIndex = modes2.findIndex((mode) => mode === displayedMode);
      if (~currentModeIndex) {
        displayedModeRef.value = modes2[(currentModeIndex + 1) % modes2.length];
      } else {
        displayedModeRef.value = "rgb";
      }
    }
    let _h, s, l, v, r, g, b, a;
    const hsvaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue) return null;
      switch (valueModeRef.value) {
        case "hsv":
          return hsva(mergedValue);
        case "hsl":
          [_h, s, l, a] = hsla(mergedValue);
          return [...hsl2hsv(_h, s, l), a];
        case "rgb":
        case "hex":
          [r, g, b, a] = rgba(mergedValue);
          return [...rgb2hsv(r, g, b), a];
      }
    });
    const rgbaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue) return null;
      switch (valueModeRef.value) {
        case "rgb":
        case "hex":
          return rgba(mergedValue);
        case "hsv":
          [_h, s, v, a] = hsva(mergedValue);
          return [...hsv2rgb(_h, s, v), a];
        case "hsl":
          [_h, s, l, a] = hsla(mergedValue);
          return [...hsl2rgb(_h, s, l), a];
      }
    });
    const hslaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue) return null;
      switch (valueModeRef.value) {
        case "hsl":
          return hsla(mergedValue);
        case "hsv":
          [_h, s, v, a] = hsva(mergedValue);
          return [...hsv2hsl(_h, s, v), a];
        case "rgb":
        case "hex":
          [r, g, b, a] = rgba(mergedValue);
          return [...rgb2hsl(r, g, b), a];
      }
    });
    const mergedValueArrRef = computed(() => {
      switch (displayedModeRef.value) {
        case "rgb":
        case "hex":
          return rgbaRef.value;
        case "hsv":
          return hsvaRef.value;
        case "hsl":
          return hslaRef.value;
      }
    });
    const displayedHueRef = ref(0);
    const displayedAlphaRef = ref(1);
    const displayedSvRef = ref([0, 0]);
    function handleUpdateSv(s2, v2) {
      const {
        value: hsvaArr
      } = hsvaRef;
      const hue = displayedHueRef.value;
      const alpha = hsvaArr ? hsvaArr[3] : 1;
      displayedSvRef.value = [s2, v2];
      const {
        showAlpha
      } = props;
      switch (displayedModeRef.value) {
        case "hsv":
          doUpdateValue((showAlpha ? toHsvaString : toHsvString)([hue, s2, v2, alpha]), "cursor");
          break;
        case "hsl":
          doUpdateValue((showAlpha ? toHslaString : toHslString)([...hsv2hsl(hue, s2, v2), alpha]), "cursor");
          break;
        case "rgb":
          doUpdateValue((showAlpha ? toRgbaString : toRgbString)([...hsv2rgb(hue, s2, v2), alpha]), "cursor");
          break;
        case "hex":
          doUpdateValue((showAlpha ? toHexaString : toHexString)([...hsv2rgb(hue, s2, v2), alpha]), "cursor");
          break;
      }
    }
    function handleUpdateHue(hue) {
      displayedHueRef.value = hue;
      const {
        value: hsvaArr
      } = hsvaRef;
      if (!hsvaArr) {
        return;
      }
      const [, s2, v2, a2] = hsvaArr;
      const {
        showAlpha
      } = props;
      switch (displayedModeRef.value) {
        case "hsv":
          doUpdateValue((showAlpha ? toHsvaString : toHsvString)([hue, s2, v2, a2]), "cursor");
          break;
        case "rgb":
          doUpdateValue((showAlpha ? toRgbaString : toRgbString)([...hsv2rgb(hue, s2, v2), a2]), "cursor");
          break;
        case "hex":
          doUpdateValue((showAlpha ? toHexaString : toHexString)([...hsv2rgb(hue, s2, v2), a2]), "cursor");
          break;
        case "hsl":
          doUpdateValue((showAlpha ? toHslaString : toHslString)([...hsv2hsl(hue, s2, v2), a2]), "cursor");
          break;
      }
    }
    function handleUpdateAlpha(alpha) {
      switch (displayedModeRef.value) {
        case "hsv":
          [_h, s, v] = hsvaRef.value;
          doUpdateValue(toHsvaString([_h, s, v, alpha]), "cursor");
          break;
        case "rgb":
          [r, g, b] = rgbaRef.value;
          doUpdateValue(toRgbaString([r, g, b, alpha]), "cursor");
          break;
        case "hex":
          [r, g, b] = rgbaRef.value;
          doUpdateValue(toHexaString([r, g, b, alpha]), "cursor");
          break;
        case "hsl":
          [_h, s, l] = hslaRef.value;
          doUpdateValue(toHslaString([_h, s, l, alpha]), "cursor");
          break;
      }
      displayedAlphaRef.value = alpha;
    }
    function doUpdateValue(value, updateSource) {
      if (updateSource === "cursor") {
        upcomingValue = value;
      } else {
        upcomingValue = null;
      }
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue
      } = props;
      if (onUpdateValue) call(onUpdateValue, value);
      if (_onUpdateValue) call(_onUpdateValue, value);
      nTriggerFormChange();
      nTriggerFormInput();
      uncontrolledValueRef.value = value;
    }
    function handleInputUpdateValue(value) {
      doUpdateValue(value, "input");
      void nextTick(handleComplete);
    }
    function handleComplete(pushStack = true) {
      const {
        value
      } = mergedValueRef;
      if (value) {
        const {
          nTriggerFormChange,
          nTriggerFormInput
        } = formItem;
        const {
          onComplete
        } = props;
        if (onComplete) {
          onComplete(value);
        }
        const {
          value: undoStack
        } = undoStackRef;
        const {
          value: valueIndex
        } = valueIndexRef;
        if (pushStack) {
          undoStack.splice(valueIndex + 1, undoStack.length, value);
          valueIndexRef.value = valueIndex + 1;
        }
        nTriggerFormChange();
        nTriggerFormInput();
      }
    }
    function undo() {
      const {
        value: valueIndex
      } = valueIndexRef;
      if (valueIndex - 1 < 0) return;
      doUpdateValue(undoStackRef.value[valueIndex - 1], "input");
      handleComplete(false);
      valueIndexRef.value = valueIndex - 1;
    }
    function redo() {
      const {
        value: valueIndex
      } = valueIndexRef;
      if (valueIndex < 0 || valueIndex + 1 >= undoStackRef.value.length) return;
      doUpdateValue(undoStackRef.value[valueIndex + 1], "input");
      handleComplete(false);
      valueIndexRef.value = valueIndex + 1;
    }
    function handleClear() {
      doUpdateValue(null, "input");
      const {
        onClear
      } = props;
      if (onClear) {
        onClear();
      }
      doUpdateShow(false);
    }
    function handleConfirm() {
      const {
        value
      } = mergedValueRef;
      const {
        onConfirm
      } = props;
      if (onConfirm) {
        onConfirm(value);
      }
      doUpdateShow(false);
    }
    const undoableRef = computed(() => valueIndexRef.value >= 1);
    const redoableRef = computed(() => {
      const {
        value: undoStack
      } = undoStackRef;
      return undoStack.length > 1 && valueIndexRef.value < undoStack.length - 1;
    });
    watch(mergedShowRef, (value) => {
      if (!value) {
        undoStackRef.value = [mergedValueRef.value];
        valueIndexRef.value = 0;
      }
    });
    watchEffect(() => {
      if (upcomingValue && upcomingValue === mergedValueRef.value) ;
      else {
        const {
          value
        } = hsvaRef;
        if (value) {
          displayedHueRef.value = value[0];
          displayedAlphaRef.value = value[3];
          displayedSvRef.value = [value[1], value[2]];
        }
      }
      upcomingValue = null;
    });
    const cssVarsRef = computed(() => {
      const {
        value: mergedSize
      } = mergedSizeRef;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          textColor,
          color,
          panelFontSize,
          boxShadow,
          border,
          borderRadius,
          dividerColor,
          [createKey("height", mergedSize)]: height,
          [createKey("fontSize", mergedSize)]: fontSize
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-color": color,
        "--n-panel-font-size": panelFontSize,
        "--n-font-size": fontSize,
        "--n-box-shadow": boxShadow,
        "--n-border": border,
        "--n-border-radius": borderRadius,
        "--n-height": height,
        "--n-divider-color": dividerColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("color-picker", computed(() => {
      return mergedSizeRef.value[0];
    }), cssVarsRef, props) : void 0;
    function renderPanel() {
      var _a;
      const {
        value: rgba2
      } = rgbaRef;
      const {
        value: displayedHue
      } = displayedHueRef;
      const {
        internalActions,
        modes: modes2,
        actions
      } = props;
      const {
        value: mergedTheme
      } = themeRef;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      return h("div", {
        class: [`${mergedClsPrefix}-color-picker-panel`, themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value],
        onDragstart: (e) => {
          e.preventDefault();
        },
        style: inlineThemeDisabled ? void 0 : cssVarsRef.value
      }, h("div", {
        class: `${mergedClsPrefix}-color-picker-control`
      }, h(Pallete, {
        clsPrefix: mergedClsPrefix,
        rgba: rgba2,
        displayedHue,
        displayedSv: displayedSvRef.value,
        onUpdateSV: handleUpdateSv,
        onComplete: handleComplete
      }), h("div", {
        class: `${mergedClsPrefix}-color-picker-preview`
      }, h("div", {
        class: `${mergedClsPrefix}-color-picker-preview__sliders`
      }, h(HueSlider, {
        clsPrefix: mergedClsPrefix,
        hue: displayedHue,
        onUpdateHue: handleUpdateHue,
        onComplete: handleComplete
      }), props.showAlpha ? h(AlphaSlider, {
        clsPrefix: mergedClsPrefix,
        rgba: rgba2,
        alpha: displayedAlphaRef.value,
        onUpdateAlpha: handleUpdateAlpha,
        onComplete: handleComplete
      }) : null), props.showPreview ? h(ColorPreview, {
        clsPrefix: mergedClsPrefix,
        mode: displayedModeRef.value,
        color: rgbaRef.value && toHexString(rgbaRef.value),
        onUpdateColor: (color) => {
          doUpdateValue(color, "input");
        }
      }) : null), h(ColorInput, {
        clsPrefix: mergedClsPrefix,
        showAlpha: props.showAlpha,
        mode: displayedModeRef.value,
        modes: modes2,
        onUpdateMode: handleUpdateDisplayedMode,
        value: mergedValueRef.value,
        valueArr: mergedValueArrRef.value,
        onUpdateValue: handleInputUpdateValue
      }), ((_a = props.swatches) === null || _a === void 0 ? void 0 : _a.length) && h(ColorPickerSwatches, {
        clsPrefix: mergedClsPrefix,
        mode: displayedModeRef.value,
        swatches: props.swatches,
        onUpdateColor: (color) => {
          doUpdateValue(color, "input");
        }
      })), (actions === null || actions === void 0 ? void 0 : actions.length) ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, actions.includes("confirm") && h(Button, {
        size: "small",
        onClick: handleConfirm,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.confirm
      }), actions.includes("clear") && h(Button, {
        size: "small",
        onClick: handleClear,
        disabled: !mergedValueRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.clear
      })) : null, slots.action ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, {
        default: slots.action
      }) : internalActions ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, internalActions.includes("undo") && h(Button, {
        size: "small",
        onClick: undo,
        disabled: !undoableRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.undo
      }), internalActions.includes("redo") && h(Button, {
        size: "small",
        onClick: redo,
        disabled: !redoableRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.redo
      })) : null);
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      selfRef,
      hsla: hslaRef,
      rgba: rgbaRef,
      mergedShow: mergedShowRef,
      mergedDisabled: mergedDisabledRef,
      isMounted: isMounted(),
      adjustedTo: useAdjustedTo(props),
      mergedValue: mergedValueRef,
      handleTriggerClick() {
        doUpdateShow(true);
      },
      handleClickOutside(e) {
        var _a;
        if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e))) {
          return;
        }
        doUpdateShow(false);
      },
      renderPanel,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      $slots,
      mergedClsPrefix,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [this.themeClass, `${mergedClsPrefix}-color-picker`],
      ref: "selfRef",
      style: this.cssVars
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => h(ColorPickerTrigger, {
          clsPrefix: mergedClsPrefix,
          value: this.mergedValue,
          hsla: this.hsla,
          disabled: this.mergedDisabled,
          onClick: this.handleTriggerClick
        }, {
          label: $slots.label
        })
      }), h(VFollower, {
        placement: this.placement,
        show: this.mergedShow,
        containerClass: this.namespace,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        to: this.adjustedTo
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => this.mergedShow ? withDirectives(this.renderPanel(), [[clickoutside, this.handleClickOutside, void 0, {
            capture: true
          }]]) : null
        })
      })]
    }));
  }
});
const tabsInjectionKey = createInjectionKey("n-tabs");
const tabPaneProps = {
  tab: [String, Number, Object, Function],
  name: {
    type: [String, Number],
    required: true
  },
  disabled: Boolean,
  displayDirective: {
    type: String,
    default: "if"
  },
  closable: {
    type: Boolean,
    default: void 0
  },
  tabProps: Object,
  /** @deprecated */
  label: [String, Number, Object, Function]
};
const __unplugin_components_4 = defineComponent({
  __TAB_PANE__: true,
  name: "TabPane",
  alias: ["TabPanel"],
  props: tabPaneProps,
  setup(props) {
    const NTab = inject(tabsInjectionKey, null);
    if (!NTab) {
      throwError("tab-pane", "`n-tab-pane` must be placed inside `n-tabs`.");
    }
    return {
      style: NTab.paneStyleRef,
      class: NTab.paneClassRef,
      mergedClsPrefix: NTab.mergedClsPrefixRef
    };
  },
  render() {
    return h("div", {
      class: [`${this.mergedClsPrefix}-tab-pane`, this.class],
      style: this.style
    }, this.$slots);
  }
});
const tabProps = Object.assign({
  internalLeftPadded: Boolean,
  internalAddable: Boolean,
  internalCreatedByPane: Boolean
}, omit(tabPaneProps, ["displayDirective"]));
const Tab = defineComponent({
  __TAB__: true,
  inheritAttrs: false,
  name: "Tab",
  props: tabProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      valueRef,
      typeRef,
      closableRef,
      tabStyleRef,
      addTabStyleRef,
      tabClassRef,
      addTabClassRef,
      tabChangeIdRef,
      onBeforeLeaveRef,
      triggerRef,
      handleAdd,
      activateTab,
      handleClose
    } = inject(tabsInjectionKey);
    return {
      trigger: triggerRef,
      mergedClosable: computed(() => {
        if (props.internalAddable) return false;
        const {
          closable
        } = props;
        if (closable === void 0) return closableRef.value;
        return closable;
      }),
      style: tabStyleRef,
      addStyle: addTabStyleRef,
      tabClass: tabClassRef,
      addTabClass: addTabClassRef,
      clsPrefix: mergedClsPrefixRef,
      value: valueRef,
      type: typeRef,
      handleClose(e) {
        e.stopPropagation();
        if (props.disabled) return;
        handleClose(props.name);
      },
      activateTab() {
        if (props.disabled) return;
        if (props.internalAddable) {
          handleAdd();
          return;
        }
        const {
          name: nameProp
        } = props;
        const id = ++tabChangeIdRef.id;
        if (nameProp !== valueRef.value) {
          const {
            value: onBeforeLeave
          } = onBeforeLeaveRef;
          if (!onBeforeLeave) {
            activateTab(nameProp);
          } else {
            void Promise.resolve(onBeforeLeave(props.name, valueRef.value)).then((allowLeave) => {
              if (allowLeave && tabChangeIdRef.id === id) {
                activateTab(nameProp);
              }
            });
          }
        }
      }
    };
  },
  render() {
    const {
      internalAddable,
      clsPrefix,
      name,
      disabled,
      label,
      tab,
      value,
      mergedClosable,
      trigger,
      $slots: {
        default: defaultSlot
      }
    } = this;
    const mergedTab = label !== null && label !== void 0 ? label : tab;
    return h("div", {
      class: `${clsPrefix}-tabs-tab-wrapper`
    }, this.internalLeftPadded ? h("div", {
      class: `${clsPrefix}-tabs-tab-pad`
    }) : null, h("div", Object.assign({
      key: name,
      "data-name": name,
      "data-disabled": disabled ? true : void 0
    }, mergeProps({
      class: [`${clsPrefix}-tabs-tab`, value === name && `${clsPrefix}-tabs-tab--active`, disabled && `${clsPrefix}-tabs-tab--disabled`, mergedClosable && `${clsPrefix}-tabs-tab--closable`, internalAddable && `${clsPrefix}-tabs-tab--addable`, internalAddable ? this.addTabClass : this.tabClass],
      onClick: trigger === "click" ? this.activateTab : void 0,
      onMouseenter: trigger === "hover" ? this.activateTab : void 0,
      style: internalAddable ? this.addStyle : this.style
    }, this.internalCreatedByPane ? this.tabProps || {} : this.$attrs)), h("span", {
      class: `${clsPrefix}-tabs-tab__label`
    }, internalAddable ? h(Fragment, null, h("div", {
      class: `${clsPrefix}-tabs-tab__height-placeholder`
    }, " "), h(NBaseIcon, {
      clsPrefix
    }, {
      default: () => h(AddIcon, null)
    })) : defaultSlot ? defaultSlot() : typeof mergedTab === "object" ? mergedTab : render(mergedTab !== null && mergedTab !== void 0 ? mergedTab : name)), mergedClosable && this.type === "card" ? h(NBaseClose, {
      clsPrefix,
      class: `${clsPrefix}-tabs-tab__close`,
      onClick: this.handleClose,
      disabled
    }) : null));
  }
});
const style = cB("tabs", `
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`, [cM("segment-type", [cB("tabs-rail", [c$1("&.transition-disabled", [cB("tabs-capsule", `
 transition: none;
 `)])])]), cM("top", [cB("tab-pane", `
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]), cM("left", [cB("tab-pane", `
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]), cM("left, right", `
 flex-direction: row;
 `, [cB("tabs-bar", `
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cB("tabs-tab", `
 padding: var(--n-tab-padding-vertical); 
 `)]), cM("right", `
 flex-direction: row-reverse;
 `, [cB("tab-pane", `
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `), cB("tabs-bar", `
 left: 0;
 `)]), cM("bottom", `
 flex-direction: column-reverse;
 justify-content: flex-end;
 `, [cB("tab-pane", `
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `), cB("tabs-bar", `
 top: 0;
 `)]), cB("tabs-rail", `
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [cB("tabs-capsule", `
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `), cB("tabs-tab-wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [cB("tabs-tab", `
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [cM("active", `
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `), c$1("&:hover", `
 color: var(--n-tab-text-color-hover);
 `)])])]), cM("flex", [cB("tabs-nav", `
 width: 100%;
 position: relative;
 `, [cB("tabs-wrapper", `
 width: 100%;
 `, [cB("tabs-tab", `
 margin-right: 0;
 `)])])]), cB("tabs-nav", `
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `, [cE("prefix, suffix", `
 display: flex;
 align-items: center;
 `), cE("prefix", "padding-right: 16px;"), cE("suffix", "padding-left: 16px;")]), cM("top, bottom", [cB("tabs-nav-scroll-wrapper", [c$1("&::before", `
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `), c$1("&::after", `
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `), cM("shadow-start", [c$1("&::before", `
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]), cM("shadow-end", [c$1("&::after", `
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]), cM("left, right", [cB("tabs-nav-scroll-content", `
 flex-direction: column;
 `), cB("tabs-nav-scroll-wrapper", [c$1("&::before", `
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), c$1("&::after", `
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), cM("shadow-start", [c$1("&::before", `
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]), cM("shadow-end", [c$1("&::after", `
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]), cB("tabs-nav-scroll-wrapper", `
 flex: 1;
 position: relative;
 overflow: hidden;
 `, [cB("tabs-nav-y-scroll", `
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `, [c$1("&::-webkit-scrollbar", `
 width: 0;
 height: 0;
 `)]), c$1("&::before, &::after", `
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]), cB("tabs-nav-scroll-content", `
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `), cB("tabs-wrapper", `
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `), cB("tabs-tab-wrapper", `
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `), cB("tabs-tab", `
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cM("disabled", {
  cursor: "not-allowed"
}), cE("close", `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), cE("label", `
 display: flex;
 align-items: center;
 z-index: 1;
 `)]), cB("tabs-bar", `
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [c$1("&.transition-disabled", `
 transition: none;
 `), cM("disabled", `
 background-color: var(--n-tab-text-color-disabled)
 `)]), cB("tabs-pane-wrapper", `
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `), cB("tab-pane", `
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `, [c$1("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `), c$1("&.next-transition-leave-active, &.prev-transition-leave-active", `
 position: absolute;
 `), c$1("&.next-transition-enter-from, &.prev-transition-leave-to", `
 transform: translateX(32px);
 opacity: 0;
 `), c$1("&.next-transition-leave-to, &.prev-transition-enter-from", `
 transform: translateX(-32px);
 opacity: 0;
 `), c$1("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to", `
 transform: translateX(0);
 opacity: 1;
 `)]), cB("tabs-tab-pad", `
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `), cM("line-type, bar-type", [cB("tabs-tab", `
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `, [c$1("&:hover", {
  color: "var(--n-tab-text-color-hover)"
}), cM("active", `
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `), cM("disabled", {
  color: "var(--n-tab-text-color-disabled)"
})])]), cB("tabs-nav", [cM("line-type", [cM("top", [cE("prefix, suffix", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 bottom: -1px;
 `)]), cM("left", [cE("prefix, suffix", `
 border-right: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-right: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 right: -1px;
 `)]), cM("right", [cE("prefix, suffix", `
 border-left: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-left: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 left: -1px;
 `)]), cM("bottom", [cE("prefix, suffix", `
 border-top: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-top: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 top: -1px;
 `)]), cE("prefix, suffix", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-nav-scroll-content", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-bar", `
 border-radius: 0;
 `)]), cM("card-type", [cE("prefix, suffix", `
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-tab-pad", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-tab", `
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `, [cM("addable", `
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `, [cE("height-placeholder", `
 width: 0;
 font-size: var(--n-tab-font-size);
 `), cNotM("disabled", [c$1("&:hover", `
 color: var(--n-tab-text-color-hover);
 `)])]), cM("closable", "padding-right: 8px;"), cM("active", `
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `), cM("disabled", "color: var(--n-tab-text-color-disabled);")]), cB("tabs-scroll-padding", "border-bottom: 1px solid var(--n-tab-border-color);")]), cM("left, right", [cB("tabs-wrapper", `
 flex-direction: column;
 `, [cB("tabs-tab-wrapper", `
 flex-direction: column;
 `, [cB("tabs-tab-pad", `
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]), cM("top", [cM("card-type", [cB("tabs-tab", `
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-bottom: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]), cM("left", [cM("card-type", [cB("tabs-tab", `
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-right: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-right: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 border-right: 1px solid var(--n-tab-border-color);
 `)])]), cM("right", [cM("card-type", [cB("tabs-tab", `
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-left: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-left: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 border-left: 1px solid var(--n-tab-border-color);
 `)])]), cM("bottom", [cM("card-type", [cB("tabs-tab", `
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-top: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-top: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]);
const tabsProps = Object.assign(Object.assign({}, useTheme.props), {
  value: [String, Number],
  defaultValue: [String, Number],
  trigger: {
    type: String,
    default: "click"
  },
  type: {
    type: String,
    default: "bar"
  },
  closable: Boolean,
  justifyContent: String,
  size: {
    type: String,
    default: "medium"
  },
  placement: {
    type: String,
    default: "top"
  },
  tabStyle: [String, Object],
  tabClass: String,
  addTabStyle: [String, Object],
  addTabClass: String,
  barWidth: Number,
  paneClass: String,
  paneStyle: [String, Object],
  paneWrapperClass: String,
  paneWrapperStyle: [String, Object],
  addable: [Boolean, Object],
  tabsPadding: {
    type: Number,
    default: 0
  },
  animated: Boolean,
  onBeforeLeave: Function,
  onAdd: Function,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onClose: [Function, Array],
  // deprecated
  labelSize: String,
  activeName: [String, Number],
  onActiveNameChange: [Function, Array]
});
const __unplugin_components_6 = defineComponent({
  name: "Tabs",
  props: tabsProps,
  setup(props, {
    slots
  }) {
    var _a, _b, _c, _d;
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Tabs", "-tabs", style, tabsLight, props, mergedClsPrefixRef);
    const tabsElRef = ref(null);
    const barElRef = ref(null);
    const scrollWrapperElRef = ref(null);
    const addTabInstRef = ref(null);
    const xScrollInstRef = ref(null);
    const yScrollElRef = ref(null);
    const startReachedRef = ref(true);
    const endReachedRef = ref(true);
    const compitableSizeRef = useCompitable(props, ["labelSize", "size"]);
    const compitableValueRef = useCompitable(props, ["activeName", "value"]);
    const uncontrolledValueRef = ref((_b = (_a = compitableValueRef.value) !== null && _a !== void 0 ? _a : props.defaultValue) !== null && _b !== void 0 ? _b : slots.default ? (_d = (_c = flatten(slots.default())[0]) === null || _c === void 0 ? void 0 : _c.props) === null || _d === void 0 ? void 0 : _d.name : null);
    const mergedValueRef = useMergedState(compitableValueRef, uncontrolledValueRef);
    const tabChangeIdRef = {
      id: 0
    };
    const tabWrapperStyleRef = computed(() => {
      if (!props.justifyContent || props.type === "card") return void 0;
      return {
        display: "flex",
        justifyContent: props.justifyContent
      };
    });
    watch(mergedValueRef, () => {
      tabChangeIdRef.id = 0;
      updateCurrentBarStyle();
      updateCurrentScrollPosition();
    });
    function getCurrentEl() {
      var _a2;
      const {
        value
      } = mergedValueRef;
      if (value === null) return null;
      const tabEl = (_a2 = tabsElRef.value) === null || _a2 === void 0 ? void 0 : _a2.querySelector(`[data-name="${value}"]`);
      return tabEl;
    }
    function updateBarStyle(tabEl) {
      if (props.type === "card") return;
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      const barIsHide = barEl.style.opacity === "0";
      if (tabEl) {
        const disabledClassName = `${mergedClsPrefixRef.value}-tabs-bar--disabled`;
        const {
          barWidth,
          placement
        } = props;
        if (tabEl.dataset.disabled === "true") {
          barEl.classList.add(disabledClassName);
        } else {
          barEl.classList.remove(disabledClassName);
        }
        if (["top", "bottom"].includes(placement)) {
          clearBarStyle(["top", "maxHeight", "height"]);
          if (typeof barWidth === "number" && tabEl.offsetWidth >= barWidth) {
            const offsetDiffLeft = Math.floor((tabEl.offsetWidth - barWidth) / 2) + tabEl.offsetLeft;
            barEl.style.left = `${offsetDiffLeft}px`;
            barEl.style.maxWidth = `${barWidth}px`;
          } else {
            barEl.style.left = `${tabEl.offsetLeft}px`;
            barEl.style.maxWidth = `${tabEl.offsetWidth}px`;
          }
          barEl.style.width = "8192px";
          if (barIsHide) {
            barEl.style.transition = "none";
          }
          void barEl.offsetWidth;
          if (barIsHide) {
            barEl.style.transition = "";
            barEl.style.opacity = "1";
          }
        } else {
          clearBarStyle(["left", "maxWidth", "width"]);
          if (typeof barWidth === "number" && tabEl.offsetHeight >= barWidth) {
            const offsetDiffTop = Math.floor((tabEl.offsetHeight - barWidth) / 2) + tabEl.offsetTop;
            barEl.style.top = `${offsetDiffTop}px`;
            barEl.style.maxHeight = `${barWidth}px`;
          } else {
            barEl.style.top = `${tabEl.offsetTop}px`;
            barEl.style.maxHeight = `${tabEl.offsetHeight}px`;
          }
          barEl.style.height = "8192px";
          if (barIsHide) {
            barEl.style.transition = "none";
          }
          void barEl.offsetHeight;
          if (barIsHide) {
            barEl.style.transition = "";
            barEl.style.opacity = "1";
          }
        }
      }
    }
    function hideBarStyle() {
      if (props.type === "card") return;
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      barEl.style.opacity = "0";
    }
    function clearBarStyle(styleProps) {
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      for (const prop of styleProps) {
        barEl.style[prop] = "";
      }
    }
    function updateCurrentBarStyle() {
      if (props.type === "card") return;
      const tabEl = getCurrentEl();
      if (tabEl) {
        updateBarStyle(tabEl);
      } else {
        hideBarStyle();
      }
    }
    function updateCurrentScrollPosition() {
      var _a2;
      const scrollWrapperEl = (_a2 = xScrollInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.$el;
      if (!scrollWrapperEl) return;
      const tabEl = getCurrentEl();
      if (!tabEl) return;
      const {
        scrollLeft: scrollWrapperElScrollLeft,
        offsetWidth: scrollWrapperElOffsetWidth
      } = scrollWrapperEl;
      const {
        offsetLeft: tabElOffsetLeft,
        offsetWidth: tabElOffsetWidth
      } = tabEl;
      if (scrollWrapperElScrollLeft > tabElOffsetLeft) {
        scrollWrapperEl.scrollTo({
          top: 0,
          left: tabElOffsetLeft,
          behavior: "smooth"
        });
      } else if (tabElOffsetLeft + tabElOffsetWidth > scrollWrapperElScrollLeft + scrollWrapperElOffsetWidth) {
        scrollWrapperEl.scrollTo({
          top: 0,
          left: tabElOffsetLeft + tabElOffsetWidth - scrollWrapperElOffsetWidth,
          behavior: "smooth"
        });
      }
    }
    const tabsPaneWrapperRef = ref(null);
    let fromHeight = 0;
    let hangingTransition = null;
    function onAnimationBeforeLeave(el) {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        fromHeight = el.getBoundingClientRect().height;
        const fromHeightPx = `${fromHeight}px`;
        const applyFromStyle = () => {
          tabsPaneWrapperEl.style.height = fromHeightPx;
          tabsPaneWrapperEl.style.maxHeight = fromHeightPx;
        };
        if (!hangingTransition) {
          hangingTransition = applyFromStyle;
        } else {
          applyFromStyle();
          hangingTransition();
          hangingTransition = null;
        }
      }
    }
    function onAnimationEnter(el) {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        const targetHeight = el.getBoundingClientRect().height;
        const applyTargetStyle = () => {
          void document.body.offsetHeight;
          tabsPaneWrapperEl.style.maxHeight = `${targetHeight}px`;
          tabsPaneWrapperEl.style.height = `${Math.max(fromHeight, targetHeight)}px`;
        };
        if (!hangingTransition) {
          hangingTransition = applyTargetStyle;
        } else {
          hangingTransition();
          hangingTransition = null;
          applyTargetStyle();
        }
      }
    }
    function onAnimationAfterEnter() {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        tabsPaneWrapperEl.style.maxHeight = "";
        tabsPaneWrapperEl.style.height = "";
        const {
          paneWrapperStyle
        } = props;
        if (typeof paneWrapperStyle === "string") {
          tabsPaneWrapperEl.style.cssText = paneWrapperStyle;
        } else if (paneWrapperStyle) {
          const {
            maxHeight,
            height
          } = paneWrapperStyle;
          if (maxHeight !== void 0) {
            tabsPaneWrapperEl.style.maxHeight = maxHeight;
          }
          if (height !== void 0) {
            tabsPaneWrapperEl.style.height = height;
          }
        }
      }
    }
    const renderNameListRef = {
      value: []
    };
    const animationDirectionRef = ref("next");
    function activateTab(panelName) {
      const currentValue = mergedValueRef.value;
      let dir = "next";
      for (const name of renderNameListRef.value) {
        if (name === currentValue) {
          break;
        }
        if (name === panelName) {
          dir = "prev";
          break;
        }
      }
      animationDirectionRef.value = dir;
      doUpdateValue(panelName);
    }
    function doUpdateValue(panelName) {
      const {
        onActiveNameChange,
        onUpdateValue,
        "onUpdate:value": _onUpdateValue
      } = props;
      if (onActiveNameChange) {
        call(onActiveNameChange, panelName);
      }
      if (onUpdateValue) call(onUpdateValue, panelName);
      if (_onUpdateValue) call(_onUpdateValue, panelName);
      uncontrolledValueRef.value = panelName;
    }
    function handleClose(panelName) {
      const {
        onClose
      } = props;
      if (onClose) call(onClose, panelName);
    }
    function updateBarPositionInstantly() {
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      const disableTransitionClassName = "transition-disabled";
      barEl.classList.add(disableTransitionClassName);
      updateCurrentBarStyle();
      barEl.classList.remove(disableTransitionClassName);
    }
    const segmentCapsuleElRef = ref(null);
    function updateSegmentPosition({
      transitionDisabled
    }) {
      const tabsEl = tabsElRef.value;
      if (!tabsEl) return;
      if (transitionDisabled) tabsEl.classList.add("transition-disabled");
      const activeTabEl = getCurrentEl();
      if (activeTabEl && segmentCapsuleElRef.value) {
        segmentCapsuleElRef.value.style.width = `${activeTabEl.offsetWidth}px`;
        segmentCapsuleElRef.value.style.height = `${activeTabEl.offsetHeight}px`;
        segmentCapsuleElRef.value.style.transform = `translateX(${activeTabEl.offsetLeft - depx(getComputedStyle(tabsEl).paddingLeft)}px)`;
        if (transitionDisabled) {
          void segmentCapsuleElRef.value.offsetWidth;
        }
      }
      if (transitionDisabled) {
        tabsEl.classList.remove("transition-disabled");
      }
    }
    watch([mergedValueRef], () => {
      if (props.type === "segment") {
        void nextTick(() => {
          updateSegmentPosition({
            transitionDisabled: false
          });
        });
      }
    });
    onMounted(() => {
      if (props.type === "segment") {
        updateSegmentPosition({
          transitionDisabled: true
        });
      }
    });
    let memorizedWidth = 0;
    function _handleNavResize(entry) {
      var _b2;
      if (entry.contentRect.width === 0 && entry.contentRect.height === 0) {
        return;
      }
      if (memorizedWidth === entry.contentRect.width) {
        return;
      }
      memorizedWidth = entry.contentRect.width;
      const {
        type
      } = props;
      if (type === "line" || type === "bar") {
        {
          updateBarPositionInstantly();
        }
      }
      if (type !== "segment") {
        const {
          placement
        } = props;
        deriveScrollShadow((placement === "top" || placement === "bottom" ? (_b2 = xScrollInstRef.value) === null || _b2 === void 0 ? void 0 : _b2.$el : yScrollElRef.value) || null);
      }
    }
    const handleNavResize = throttle(_handleNavResize, 64);
    watch([() => props.justifyContent, () => props.size], () => {
      void nextTick(() => {
        const {
          type
        } = props;
        if (type === "line" || type === "bar") {
          updateBarPositionInstantly();
        }
      });
    });
    const addTabFixedRef = ref(false);
    function _handleTabsResize(entry) {
      var _a2;
      const {
        target,
        contentRect: {
          width
        }
      } = entry;
      const containerWidth = target.parentElement.offsetWidth;
      if (!addTabFixedRef.value) {
        if (containerWidth < width) {
          addTabFixedRef.value = true;
        }
      } else {
        const {
          value: addTabInst
        } = addTabInstRef;
        if (!addTabInst) return;
        if (containerWidth - width > addTabInst.$el.offsetWidth) {
          addTabFixedRef.value = false;
        }
      }
      deriveScrollShadow(((_a2 = xScrollInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.$el) || null);
    }
    const handleTabsResize = throttle(_handleTabsResize, 64);
    function handleAdd() {
      const {
        onAdd
      } = props;
      if (onAdd) onAdd();
      void nextTick(() => {
        const currentEl = getCurrentEl();
        const {
          value: xScrollInst
        } = xScrollInstRef;
        if (!currentEl || !xScrollInst) return;
        xScrollInst.scrollTo({
          left: currentEl.offsetLeft,
          top: 0,
          behavior: "smooth"
        });
      });
    }
    function deriveScrollShadow(el) {
      if (!el) return;
      const {
        placement
      } = props;
      if (placement === "top" || placement === "bottom") {
        const {
          scrollLeft,
          scrollWidth,
          offsetWidth
        } = el;
        startReachedRef.value = scrollLeft <= 0;
        endReachedRef.value = scrollLeft + offsetWidth >= scrollWidth;
      } else {
        const {
          scrollTop,
          scrollHeight,
          offsetHeight
        } = el;
        startReachedRef.value = scrollTop <= 0;
        endReachedRef.value = scrollTop + offsetHeight >= scrollHeight;
      }
    }
    const handleScroll = throttle((e) => {
      deriveScrollShadow(e.target);
    }, 64);
    provide(tabsInjectionKey, {
      triggerRef: toRef(props, "trigger"),
      tabStyleRef: toRef(props, "tabStyle"),
      tabClassRef: toRef(props, "tabClass"),
      addTabStyleRef: toRef(props, "addTabStyle"),
      addTabClassRef: toRef(props, "addTabClass"),
      paneClassRef: toRef(props, "paneClass"),
      paneStyleRef: toRef(props, "paneStyle"),
      mergedClsPrefixRef,
      typeRef: toRef(props, "type"),
      closableRef: toRef(props, "closable"),
      valueRef: mergedValueRef,
      tabChangeIdRef,
      onBeforeLeaveRef: toRef(props, "onBeforeLeave"),
      activateTab,
      handleClose,
      handleAdd
    });
    onFontsReady(() => {
      updateCurrentBarStyle();
      updateCurrentScrollPosition();
    });
    watchEffect(() => {
      const {
        value: el
      } = scrollWrapperElRef;
      if (!el) return;
      const {
        value: clsPrefix
      } = mergedClsPrefixRef;
      const shadowStartClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-start`;
      const shadowEndClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-end`;
      if (startReachedRef.value) {
        el.classList.remove(shadowStartClass);
      } else {
        el.classList.add(shadowStartClass);
      }
      if (endReachedRef.value) {
        el.classList.remove(shadowEndClass);
      } else {
        el.classList.add(shadowEndClass);
      }
    });
    const exposedMethods = {
      syncBarPosition: () => {
        updateCurrentBarStyle();
      }
    };
    const handleSegmentResize = () => {
      updateSegmentPosition({
        transitionDisabled: true
      });
    };
    const cssVarsRef = computed(() => {
      const {
        value: size
      } = compitableSizeRef;
      const {
        type
      } = props;
      const typeSuffix = {
        card: "Card",
        bar: "Bar",
        line: "Line",
        segment: "Segment"
      }[type];
      const sizeType = `${size}${typeSuffix}`;
      const {
        self: {
          barColor,
          closeIconColor,
          closeIconColorHover,
          closeIconColorPressed,
          tabColor,
          tabBorderColor,
          paneTextColor,
          tabFontWeight,
          tabBorderRadius,
          tabFontWeightActive,
          colorSegment,
          fontWeightStrong,
          tabColorSegment,
          closeSize,
          closeIconSize,
          closeColorHover,
          closeColorPressed,
          closeBorderRadius,
          [createKey("panePadding", size)]: panePadding,
          [createKey("tabPadding", sizeType)]: tabPadding,
          [createKey("tabPaddingVertical", sizeType)]: tabPaddingVertical,
          [createKey("tabGap", sizeType)]: tabGap,
          [createKey("tabGap", `${sizeType}Vertical`)]: tabGapVertical,
          [createKey("tabTextColor", type)]: tabTextColor,
          [createKey("tabTextColorActive", type)]: tabTextColorActive,
          [createKey("tabTextColorHover", type)]: tabTextColorHover,
          [createKey("tabTextColorDisabled", type)]: tabTextColorDisabled,
          [createKey("tabFontSize", size)]: tabFontSize
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-color-segment": colorSegment,
        "--n-bar-color": barColor,
        "--n-tab-font-size": tabFontSize,
        "--n-tab-text-color": tabTextColor,
        "--n-tab-text-color-active": tabTextColorActive,
        "--n-tab-text-color-disabled": tabTextColorDisabled,
        "--n-tab-text-color-hover": tabTextColorHover,
        "--n-pane-text-color": paneTextColor,
        "--n-tab-border-color": tabBorderColor,
        "--n-tab-border-radius": tabBorderRadius,
        "--n-close-size": closeSize,
        "--n-close-icon-size": closeIconSize,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-tab-color": tabColor,
        "--n-tab-font-weight": tabFontWeight,
        "--n-tab-font-weight-active": tabFontWeightActive,
        "--n-tab-padding": tabPadding,
        "--n-tab-padding-vertical": tabPaddingVertical,
        "--n-tab-gap": tabGap,
        "--n-tab-gap-vertical": tabGapVertical,
        "--n-pane-padding-left": getMargin(panePadding, "left"),
        "--n-pane-padding-right": getMargin(panePadding, "right"),
        "--n-pane-padding-top": getMargin(panePadding, "top"),
        "--n-pane-padding-bottom": getMargin(panePadding, "bottom"),
        "--n-font-weight-strong": fontWeightStrong,
        "--n-tab-color-segment": tabColorSegment
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("tabs", computed(() => {
      return `${compitableSizeRef.value[0]}${props.type[0]}`;
    }), cssVarsRef, props) : void 0;
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: mergedValueRef,
      renderedNames: /* @__PURE__ */ new Set(),
      segmentCapsuleElRef,
      tabsPaneWrapperRef,
      tabsElRef,
      barElRef,
      addTabInstRef,
      xScrollInstRef,
      scrollWrapperElRef,
      addTabFixed: addTabFixedRef,
      tabWrapperStyle: tabWrapperStyleRef,
      handleNavResize,
      mergedSize: compitableSizeRef,
      handleScroll,
      handleTabsResize,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      animationDirection: animationDirectionRef,
      renderNameListRef,
      yScrollElRef,
      handleSegmentResize,
      onAnimationBeforeLeave,
      onAnimationEnter,
      onAnimationAfterEnter,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedMethods);
  },
  render() {
    const {
      mergedClsPrefix,
      type,
      placement,
      addTabFixed,
      addable,
      mergedSize,
      renderNameListRef,
      onRender,
      paneWrapperClass,
      paneWrapperStyle,
      $slots: {
        default: defaultSlot,
        prefix: prefixSlot,
        suffix: suffixSlot
      }
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const tabPaneChildren = defaultSlot ? flatten(defaultSlot()).filter((v) => {
      return v.type.__TAB_PANE__ === true;
    }) : [];
    const tabChildren = defaultSlot ? flatten(defaultSlot()).filter((v) => {
      return v.type.__TAB__ === true;
    }) : [];
    const showPane = !tabChildren.length;
    const isCard = type === "card";
    const isSegment = type === "segment";
    const mergedJustifyContent = !isCard && !isSegment && this.justifyContent;
    renderNameListRef.value = [];
    const scrollContent = () => {
      const tabs = h("div", {
        style: this.tabWrapperStyle,
        class: [`${mergedClsPrefix}-tabs-wrapper`]
      }, mergedJustifyContent ? null : h("div", {
        class: `${mergedClsPrefix}-tabs-scroll-padding`,
        style: {
          width: `${this.tabsPadding}px`
        }
      }), showPane ? tabPaneChildren.map((tabPaneVNode, index) => {
        renderNameListRef.value.push(tabPaneVNode.props.name);
        return justifyTabDynamicProps(h(Tab, Object.assign({}, tabPaneVNode.props, {
          internalCreatedByPane: true,
          internalLeftPadded: index !== 0 && (!mergedJustifyContent || mergedJustifyContent === "center" || mergedJustifyContent === "start" || mergedJustifyContent === "end")
        }), tabPaneVNode.children ? {
          default: tabPaneVNode.children.tab
        } : void 0));
      }) : tabChildren.map((tabVNode, index) => {
        renderNameListRef.value.push(tabVNode.props.name);
        if (index !== 0 && !mergedJustifyContent) {
          return justifyTabDynamicProps(createLeftPaddedTabVNode(tabVNode));
        } else {
          return justifyTabDynamicProps(tabVNode);
        }
      }), !addTabFixed && addable && isCard ? createAddTag(addable, (showPane ? tabPaneChildren.length : tabChildren.length) !== 0) : null, mergedJustifyContent ? null : h("div", {
        class: `${mergedClsPrefix}-tabs-scroll-padding`,
        style: {
          width: `${this.tabsPadding}px`
        }
      }));
      return h("div", {
        ref: "tabsElRef",
        class: `${mergedClsPrefix}-tabs-nav-scroll-content`
      }, isCard && addable ? h(VResizeObserver, {
        onResize: this.handleTabsResize
      }, {
        default: () => tabs
      }) : tabs, isCard ? h("div", {
        class: `${mergedClsPrefix}-tabs-pad`
      }) : null, isCard ? null : h("div", {
        ref: "barElRef",
        class: `${mergedClsPrefix}-tabs-bar`
      }));
    };
    const resolvedPlacement = isSegment ? "top" : placement;
    return h("div", {
      class: [`${mergedClsPrefix}-tabs`, this.themeClass, `${mergedClsPrefix}-tabs--${type}-type`, `${mergedClsPrefix}-tabs--${mergedSize}-size`, mergedJustifyContent && `${mergedClsPrefix}-tabs--flex`, `${mergedClsPrefix}-tabs--${resolvedPlacement}`],
      style: this.cssVars
    }, h("div", {
      class: [
        // the class should be applied here since it's possible
        // to make tabs nested in tabs, style may influence each
        // other. adding a class will make it easy to write the
        // style.
        `${mergedClsPrefix}-tabs-nav--${type}-type`,
        `${mergedClsPrefix}-tabs-nav--${resolvedPlacement}`,
        `${mergedClsPrefix}-tabs-nav`
      ]
    }, resolveWrappedSlot(prefixSlot, (children) => children && h("div", {
      class: `${mergedClsPrefix}-tabs-nav__prefix`
    }, children)), isSegment ? h(VResizeObserver, {
      onResize: this.handleSegmentResize
    }, {
      default: () => h("div", {
        class: `${mergedClsPrefix}-tabs-rail`,
        ref: "tabsElRef"
      }, h("div", {
        class: `${mergedClsPrefix}-tabs-capsule`,
        ref: "segmentCapsuleElRef"
      }, h("div", {
        class: `${mergedClsPrefix}-tabs-wrapper`
      }, h("div", {
        class: `${mergedClsPrefix}-tabs-tab`
      }))), showPane ? tabPaneChildren.map((tabPaneVNode, index) => {
        renderNameListRef.value.push(tabPaneVNode.props.name);
        return h(Tab, Object.assign({}, tabPaneVNode.props, {
          internalCreatedByPane: true,
          internalLeftPadded: index !== 0
        }), tabPaneVNode.children ? {
          default: tabPaneVNode.children.tab
        } : void 0);
      }) : tabChildren.map((tabVNode, index) => {
        renderNameListRef.value.push(tabVNode.props.name);
        if (index === 0) {
          return tabVNode;
        } else {
          return createLeftPaddedTabVNode(tabVNode);
        }
      }))
    }) : h(VResizeObserver, {
      onResize: this.handleNavResize
    }, {
      default: () => h("div", {
        class: `${mergedClsPrefix}-tabs-nav-scroll-wrapper`,
        ref: "scrollWrapperElRef"
      }, ["top", "bottom"].includes(resolvedPlacement) ? h(VXScroll, {
        ref: "xScrollInstRef",
        onScroll: this.handleScroll
      }, {
        default: scrollContent
      }) : h("div", {
        class: `${mergedClsPrefix}-tabs-nav-y-scroll`,
        onScroll: this.handleScroll,
        ref: "yScrollElRef"
      }, scrollContent()))
    }), addTabFixed && addable && isCard ? createAddTag(addable, true) : null, resolveWrappedSlot(suffixSlot, (children) => children && h("div", {
      class: `${mergedClsPrefix}-tabs-nav__suffix`
    }, children))), showPane && (this.animated && (resolvedPlacement === "top" || resolvedPlacement === "bottom") ? h("div", {
      ref: "tabsPaneWrapperRef",
      style: paneWrapperStyle,
      class: [`${mergedClsPrefix}-tabs-pane-wrapper`, paneWrapperClass]
    }, filterMapTabPanes(tabPaneChildren, this.mergedValue, this.renderedNames, this.onAnimationBeforeLeave, this.onAnimationEnter, this.onAnimationAfterEnter, this.animationDirection)) : filterMapTabPanes(tabPaneChildren, this.mergedValue, this.renderedNames)));
  }
});
function filterMapTabPanes(tabPaneVNodes, value, renderedNames, onBeforeLeave, onEnter, onAfterEnter, animationDirection) {
  const children = [];
  tabPaneVNodes.forEach((vNode) => {
    const {
      name,
      displayDirective,
      "display-directive": _displayDirective
    } = vNode.props;
    const matchDisplayDirective = (directive) => displayDirective === directive || _displayDirective === directive;
    const show = value === name;
    if (vNode.key !== void 0) {
      vNode.key = name;
    }
    if (show || matchDisplayDirective("show") || matchDisplayDirective("show:lazy") && renderedNames.has(name)) {
      if (!renderedNames.has(name)) {
        renderedNames.add(name);
      }
      const useVShow = !matchDisplayDirective("if");
      children.push(useVShow ? withDirectives(vNode, [[vShow, show]]) : vNode);
    }
  });
  if (!animationDirection) {
    return children;
  }
  return h(TransitionGroup, {
    name: `${animationDirection}-transition`,
    onBeforeLeave,
    onEnter,
    onAfterEnter
  }, {
    default: () => children
  });
}
function createAddTag(addable, internalLeftPadded) {
  return h(Tab, {
    ref: "addTabInstRef",
    key: "__addable",
    name: "__addable",
    internalCreatedByPane: true,
    internalAddable: true,
    internalLeftPadded,
    disabled: typeof addable === "object" && addable.disabled
  });
}
function createLeftPaddedTabVNode(tabVNode) {
  const modifiedVNode = cloneVNode(tabVNode);
  if (modifiedVNode.props) {
    modifiedVNode.props.internalLeftPadded = true;
  } else {
    modifiedVNode.props = {
      internalLeftPadded: true
    };
  }
  return modifiedVNode;
}
function justifyTabDynamicProps(tabVNode) {
  if (Array.isArray(tabVNode.dynamicProps)) {
    if (!tabVNode.dynamicProps.includes("internalLeftPadded")) {
      tabVNode.dynamicProps.push("internalLeftPadded");
    }
  } else {
    tabVNode.dynamicProps = ["internalLeftPadded"];
  }
  return tabVNode;
}
export {
  __unplugin_components_3 as _,
  __unplugin_components_4 as a,
  __unplugin_components_6 as b,
  throttle as t
};
