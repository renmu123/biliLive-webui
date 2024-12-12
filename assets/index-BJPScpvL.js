import { t as templateRef, u as useFileDialog, a as useStorage } from "./index-CNQhkSN1.js";
import { j as inject, k as configProviderInjectionKey, l as computed, d as defineComponent, m as h, n as replaceable, p as c, q as commonVariables, t as toDate$1, s as startOfWeek, v as getDefaultOptions$1, x as cB, y as cM, z as cE, A as useConfig, r as ref, C as onMounted, D as watch, E as toRef, G as useTheme, H as codeLight, I as useThemeClass, J as tooltipLight, K as createInjectionKey, L as throwError, B as Button, S as Scrollbar, M as fadeInScaleUpTransition, N as cNotM, O as useFormItem, P as timePickerLight, Q as nextTick, R as provide, T as isMounted, U as NBaseIcon, V as Transition, W as withDirectives, X as clickoutside, Y as call, Z as markEventEffectPerformed, $ as getPreciseEventTarget, a0 as layoutLight, a1 as useReactivated, a2 as NBaseLoading, a3 as logLight, a4 as warn, a5 as render, a6 as keysOf, a7 as useMemo, F as Fragment, a8 as keep, a9 as NFadeInExpandTransition, aa as menuLight, ab as watchEffect, ac as createId, ad as VResizeObserver, ae as mergeProps, o as openBlock, c as createElementBlock, f as createBaseVNode, b as createStaticVNode, af as mergeModels, ag as useModel, ah as storeToRefs, a as createVNode, w as withCtx, g as createTextVNode, e as unref, ai as createBlock, aj as createCommentVNode, ak as renderList, al as normalizeClass, am as toDisplayString, an as __unplugin_components_3$2, _ as __unplugin_components_2$6, i as isRef, ao as toRaw, ap as onUnmounted, aq as useRoute, ar as resolveComponent, as as normalizeStyle, at as resolveDynamicComponent, au as KeepAlive, av as RouterLink } from "./index-B3txP6HV.js";
import { _ as _sfc_main$a } from "./Tip.vue_vue_type_script_setup_true_lang-DFBPcEmQ.js";
import { _ as __unplugin_components_2$1, p as popoverBaseProps, u as useAdjustedTo, B as Binder, V as VTarget, a as VFollower, f as formatLength, b as useCompitable, c as useDanmuPreset, d as useUserInfoStore, e as __unplugin_components_1$1, g as cloneDeep, h as __unplugin_components_2$7, N as NIcon, i as useAppConfig, v as videoPreset, j as ffmpegPreset, k as useQueueStore } from "./index-Be9rHucp.js";
import { p as previewWebhookTitle, c as common, e as exportLogs, g as getStreamLogs } from "./common-BAA1HpBD.js";
import { _ as __unplugin_components_2$4 } from "./Switch-C2-01-AM.js";
import { _ as __unplugin_components_1$2, a as __unplugin_components_7 } from "./FormItem-Cdzklzq2.js";
import { _ as __unplugin_components_0$2 } from "./Cascader-BstE6L4T.js";
import { _ as __unplugin_components_0$3 } from "./Select-cKie_tgm.js";
import { _ as __unplugin_components_2$5 } from "./InputNumber-Bz27Zlni.js";
import { _ as __unplugin_components_3$1 } from "./ColorPicker-ItU6N3yR.js";
import { e as enUS, u as useLocale } from "./Suffix-DS84fk-A.js";
import { F as FocusDetector, h as happensIn, c as createTreeMate, V as VOverflow } from "./utils-CpJTLUg0.js";
import { u as useKeyboard, _ as __unplugin_components_2$3 } from "./Dropdown-E85TqFlF.js";
import { a as useMergedState, u as useNotification } from "./use-notification-_uZSor1V.js";
import { _ as __unplugin_components_2$2 } from "./Input-B6k2JVGe.js";
import { _ as __unplugin_components_1$3 } from "./Divider-Dg2O_dra.js";
import { _ as _export_sfc, c as config } from "./_plugin-vue_export-helper-BI19-qja.js";
import { u as useConfirm } from "./index-CQuQXiXy.js";
import { N as NotificationType } from "./enum-B3GYHe30.js";
import { _ as __unplugin_components_4 } from "./Space-C3OZuoMs.js";
import { s as showDirectoryDialog } from "./showDirectoryDialog-CW96unRZ.js";
import { F as FolderOpenOutline } from "./FolderOpenOutline-0U4FjUFl.js";
import { c as commonjsGlobal } from "./_commonjsHelpers-BxmBWJD2.js";
import { d as deepRaw } from "./index-Cfb3FODH.js";
import { t as throttle, _ as __unplugin_components_4$1, a as __unplugin_components_6 } from "./Tabs-DWIxJL6H.js";
import { C as ChevronRightIcon } from "./ChevronRight-RAl1ruKH.js";
function useHljs(props, shouldHighlightRef) {
  const NConfigProvider = inject(configProviderInjectionKey, null);
  return computed(() => {
    return props.hljs || (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedHljsRef.value);
  });
}
const ChevronDownFilledIcon = defineComponent({
  name: "ChevronDownFilled",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",
      fill: "currentColor"
    }));
  }
});
const TimeIcon = replaceable("time", h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, h("path", {
  d: "M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z",
  style: "\n        fill: none;\n        stroke: currentColor;\n        stroke-miterlimit: 10;\n        stroke-width: 32px;\n      "
}), h("polyline", {
  points: "256 128 256 272 352 272",
  style: "\n        fill: none;\n        stroke: currentColor;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 32px;\n      "
})));
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
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}
function addDays(date, amount) {
  const _date = toDate$1(date);
  if (isNaN(amount)) return constructFrom(date, NaN);
  if (!amount) {
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}
const millisecondsInWeek = 6048e5;
const millisecondsInDay = 864e5;
const millisecondsInMinute = 6e4;
const millisecondsInHour = 36e5;
const millisecondsInSecond = 1e3;
function startOfISOWeek(date) {
  return startOfWeek(date, { weekStartsOn: 1 });
}
function getISOWeekYear(date) {
  const _date = toDate$1(date);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfDay(date) {
  const _date = toDate$1(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function getTimezoneOffsetInMilliseconds$1(date) {
  const _date = toDate$1(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = startOfDay(dateLeft);
  const startOfDayRight = startOfDay(dateRight);
  const timestampLeft = +startOfDayLeft - getTimezoneOffsetInMilliseconds$1(startOfDayLeft);
  const timestampRight = +startOfDayRight - getTimezoneOffsetInMilliseconds$1(startOfDayRight);
  return Math.round((timestampLeft - timestampRight) / millisecondsInDay);
}
function startOfISOWeekYear(date) {
  const year = getISOWeekYear(date);
  const fourthOfJanuary = constructFrom(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(date) {
  if (!isDate(date) && typeof date !== "number") {
    return false;
  }
  const _date = toDate$1(date);
  return !isNaN(Number(_date));
}
function startOfMinute(date) {
  const _date = toDate$1(date);
  _date.setSeconds(0, 0);
  return _date;
}
function startOfYear(date) {
  const cleanDate = toDate$1(date);
  const _date = constructFrom(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function getDayOfYear(date) {
  const _date = toDate$1(date);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}
function getISOWeek(date) {
  const _date = toDate$1(date);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function getWeekYear(date, options) {
  const _date = toDate$1(date);
  const year = _date.getFullYear();
  const defaultOptions = getDefaultOptions$1();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear(date, options) {
  const defaultOptions = getDefaultOptions$1();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}
function getWeek(date, options) {
  const _date = toDate$1(date);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function addLeadingZeros$1(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}
const lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros$1(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros$1(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros$1(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros$1(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros$1(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros$1(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros$1(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros$1(fractionalSeconds, token.length);
  }
};
const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
const formatters$1 = {
  // Era
  G: function(date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros$1(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros$1(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros$1(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros$1(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros$1(quarter, 2);
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros$1(quarter, 2);
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros$1(month + 1, 2);
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros$1(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros$1(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros$1(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros$1(localDayOfWeek, 2);
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros$1(localDayOfWeek, token.length);
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros$1(isoDayOfWeek, token.length);
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros$1(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros$1(hours, token.length);
  },
  // Minute
  m: function(date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes$1(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone$1(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes$1(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone$1(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort$1(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort$1(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1e3);
    return addLeadingZeros$1(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    const timestamp = date.getTime();
    return addLeadingZeros$1(timestamp, token.length);
  }
};
function formatTimezoneShort$1(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros$1(minutes, 2);
}
function formatTimezoneWithOptionalMinutes$1(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros$1(Math.abs(offset) / 60, 2);
  }
  return formatTimezone$1(offset, delimiter);
}
function formatTimezone$1(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros$1(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros$1(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};
const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};
const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
  const _message = message(token, format2, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp$1 = /^'([^]*?)'?$/;
const doubleQuoteRegExp$1 = /''/g;
const unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
function format$1(date, formatStr, options) {
  const defaultOptions = getDefaultOptions$1();
  const locale = options?.locale ?? defaultOptions.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate$1(date);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp$1).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp$1).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString$1(substring) };
    }
    if (formatters$1[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters$1[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString$1(input) {
  const matched = input.match(escapedStringRegExp$1);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp$1, "'");
}
function getDaysInMonth(date) {
  const _date = toDate$1(date);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = constructFrom(date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}
function getDefaultOptions() {
  return Object.assign({}, getDefaultOptions$1());
}
function getHours(date) {
  const _date = toDate$1(date);
  const hours = _date.getHours();
  return hours;
}
function getISODay(date) {
  const _date = toDate$1(date);
  let day = _date.getDay();
  if (day === 0) {
    day = 7;
  }
  return day;
}
function getMilliseconds(date) {
  const _date = toDate$1(date);
  const milliseconds = _date.getMilliseconds();
  return milliseconds;
}
function getMinutes(date) {
  const _date = toDate$1(date);
  const minutes = _date.getMinutes();
  return minutes;
}
function getSeconds(date) {
  const _date = toDate$1(date);
  const seconds = _date.getSeconds();
  return seconds;
}
function getTime(date) {
  const _date = toDate$1(date);
  const timestamp = _date.getTime();
  return timestamp;
}
function transpose(fromDate, constructor) {
  const date = constructor instanceof Date ? constructFrom(constructor, 0) : new constructor(0);
  date.setFullYear(
    fromDate.getFullYear(),
    fromDate.getMonth(),
    fromDate.getDate()
  );
  date.setHours(
    fromDate.getHours(),
    fromDate.getMinutes(),
    fromDate.getSeconds(),
    fromDate.getMilliseconds()
  );
  return date;
}
const TIMEZONE_UNIT_PRIORITY = 10;
class Setter {
  subPriority = 0;
  validate(_utcDate, _options) {
    return true;
  }
}
class ValueSetter extends Setter {
  constructor(value, validateValue, setValue, priority, subPriority) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }
  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }
  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
  }
}
class DateToSystemTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;
  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return constructFrom(date, transpose(date, Date));
  }
}
class Parser {
  run(dateString, token, match, options) {
    const result = this.parse(dateString, token, match, options);
    if (!result) {
      return null;
    }
    return {
      setter: new ValueSetter(
        result.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: result.rest
    };
  }
  validate(_utcDate, _value, _options) {
    return true;
  }
}
class EraParser extends Parser {
  priority = 140;
  parse(dateString, token, match) {
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
      case "GGGGG":
        return match.era(dateString, { width: "narrow" });
      case "GGGG":
      default:
        return match.era(dateString, { width: "wide" }) || match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
    }
  }
  set(date, flags, value) {
    flags.era = value;
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["R", "u", "t", "T"];
}
const numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
};
const timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  const sign = matchResult[1] === "+" ? 1 : -1;
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  const isCommonEra = currentYear > 0;
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  let result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    const rangeEnd = absCurrentYear + 50;
    const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex$1(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
class YearParser extends Parser {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "yy"
    });
    switch (token) {
      case "y":
        return mapValue(parseNDigits(4, dateString), valueCallback);
      case "yo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "year"
          }),
          valueCallback
        );
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value) {
    const currentYear = date.getFullYear();
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      );
      date.setFullYear(normalizedTwoDigitYear, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}
class LocalWeekYearParser extends Parser {
  priority = 130;
  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "YY"
    });
    switch (token) {
      case "Y":
        return mapValue(parseNDigits(4, dateString), valueCallback);
      case "Yo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "year"
          }),
          valueCallback
        );
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value, options) {
    const currentYear = getWeekYear(date, options);
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      );
      date.setFullYear(
        normalizedTwoDigitYear,
        0,
        options.firstWeekContainsDate
      );
      date.setHours(0, 0, 0, 0);
      return startOfWeek(date, options);
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return startOfWeek(date, options);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
}
class ISOWeekYearParser extends Parser {
  priority = 130;
  parse(dateString, token) {
    if (token === "R") {
      return parseNDigitsSigned(4, dateString);
    }
    return parseNDigitsSigned(token.length, dateString);
  }
  set(date, _flags, value) {
    const firstWeekOfYear = constructFrom(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return startOfISOWeek(firstWeekOfYear);
  }
  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
}
class ExtendedYearParser extends Parser {
  priority = 130;
  parse(dateString, token) {
    if (token === "u") {
      return parseNDigitsSigned(4, dateString);
    }
    return parseNDigitsSigned(token.length, dateString);
  }
  set(date, _flags, value) {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
class QuarterParser extends Parser {
  priority = 120;
  parse(dateString, token, match) {
    switch (token) {
      case "Q":
      case "QQ":
        return parseNDigits(token.length, dateString);
      case "Qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      case "QQQ":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return match.quarter(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class StandAloneQuarterParser extends Parser {
  priority = 120;
  parse(dateString, token, match) {
    switch (token) {
      case "q":
      case "qq":
        return parseNDigits(token.length, dateString);
      case "qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      case "qqq":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return match.quarter(dateString, {
          width: "wide",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class MonthParser extends Parser {
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "L",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
  priority = 110;
  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;
    switch (token) {
      case "M":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        );
      case "MM":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      case "Mo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "month"
          }),
          valueCallback
        );
      case "MMM":
        return match.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.month(dateString, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return match.month(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return match.month(dateString, { width: "wide", context: "formatting" }) || match.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.month(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}
class StandAloneMonthParser extends Parser {
  priority = 110;
  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;
    switch (token) {
      case "L":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        );
      case "LL":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      case "Lo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "month"
          }),
          valueCallback
        );
      case "LLL":
        return match.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.month(dateString, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return match.month(dateString, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return match.month(dateString, { width: "wide", context: "standalone" }) || match.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.month(dateString, { width: "narrow", context: "standalone" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
function setWeek(date, week, options) {
  const _date = toDate$1(date);
  const diff = getWeek(_date, options) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}
class LocalWeekParser extends Parser {
  priority = 100;
  parse(dateString, token, match) {
    switch (token) {
      case "w":
        return parseNumericPattern(numericPatterns.week, dateString);
      case "wo":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value, options) {
    return startOfWeek(setWeek(date, value, options), options);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
}
function setISOWeek(date, week) {
  const _date = toDate$1(date);
  const diff = getISOWeek(_date) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}
class ISOWeekParser extends Parser {
  priority = 100;
  parse(dateString, token, match) {
    switch (token) {
      case "I":
        return parseNumericPattern(numericPatterns.week, dateString);
      case "Io":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value) {
    return startOfISOWeek(setISOWeek(date, value));
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
}
const DAYS_IN_MONTH$1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR$1 = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class DateParser extends Parser {
  priority = 90;
  subPriority = 1;
  parse(dateString, token, match) {
    switch (token) {
      case "d":
        return parseNumericPattern(numericPatterns.date, dateString);
      case "do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = isLeapYearIndex$1(year);
    const month = date.getMonth();
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR$1[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH$1[month];
    }
  }
  set(date, _flags, value) {
    date.setDate(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class DayOfYearParser extends Parser {
  priority = 90;
  subpriority = 1;
  parse(dateString, token, match) {
    switch (token) {
      case "D":
      case "DD":
        return parseNumericPattern(numericPatterns.dayOfYear, dateString);
      case "Do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = isLeapYearIndex$1(year);
    if (isLeapYear) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }
  set(date, _flags, value) {
    date.setMonth(0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
function setDay(date, day, options) {
  const defaultOptions = getDefaultOptions$1();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate$1(date);
  const currentDay = _date.getDay();
  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;
  const delta = 7 - weekStartsOn;
  const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return addDays(_date, diff);
}
class DayParser extends Parser {
  priority = 90;
  parse(dateString, token, match) {
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return match.day(dateString, { width: "wide", context: "formatting" }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}
class LocalDayParser extends Parser {
  priority = 90;
  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      case "e":
      case "ee":
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      case "eo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "day"
          }),
          valueCallback
        );
      case "eee":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      case "eeeee":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return match.day(dateString, { width: "wide", context: "formatting" }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "c",
    "t",
    "T"
  ];
}
class StandAloneLocalDayParser extends Parser {
  priority = 90;
  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      case "c":
      case "cc":
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      case "co":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "day"
          }),
          valueCallback
        );
      case "ccc":
        return match.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
      case "ccccc":
        return match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return match.day(dateString, { width: "wide", context: "standalone" }) || match.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "e",
    "t",
    "T"
  ];
}
function setISODay(date, day) {
  const _date = toDate$1(date);
  const currentDay = getISODay(_date);
  const diff = day - currentDay;
  return addDays(_date, diff);
}
class ISODayParser extends Parser {
  priority = 90;
  parse(dateString, token, match) {
    const valueCallback = (value) => {
      if (value === 0) {
        return 7;
      }
      return value;
    };
    switch (token) {
      case "i":
      case "ii":
        return parseNDigits(token.length, dateString);
      case "io":
        return match.ordinalNumber(dateString, { unit: "day" });
      case "iii":
        return mapValue(
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      case "iiiii":
        return mapValue(
          match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      case "iiiiii":
        return mapValue(
          match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      case "iiii":
      default:
        return mapValue(
          match.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 7;
  }
  set(date, _flags, value) {
    date = setISODay(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "E",
    "e",
    "c",
    "t",
    "T"
  ];
}
class AMPMParser extends Parser {
  priority = 80;
  parse(dateString, token, match) {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}
class AMPMMidnightParser extends Parser {
  priority = 80;
  parse(dateString, token, match) {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}
class DayPeriodParser extends Parser {
  priority = 80;
  parse(dateString, token, match) {
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
}
class Hour1to12Parser extends Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "h":
        return parseNumericPattern(numericPatterns.hour12h, dateString);
      case "ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 12;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
  incompatibleTokens = ["H", "K", "k", "t", "T"];
}
class Hour0to23Parser extends Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "H":
        return parseNumericPattern(numericPatterns.hour23h, dateString);
      case "Ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 23;
  }
  set(date, _flags, value) {
    date.setHours(value, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}
class Hour0To11Parser extends Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "K":
        return parseNumericPattern(numericPatterns.hour11h, dateString);
      case "Ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
  incompatibleTokens = ["h", "H", "k", "t", "T"];
}
class Hour1To24Parser extends Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "k":
        return parseNumericPattern(numericPatterns.hour24h, dateString);
      case "ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 24;
  }
  set(date, _flags, value) {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}
class MinuteParser extends Parser {
  priority = 60;
  parse(dateString, token, match) {
    switch (token) {
      case "m":
        return parseNumericPattern(numericPatterns.minute, dateString);
      case "mo":
        return match.ordinalNumber(dateString, { unit: "minute" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }
  incompatibleTokens = ["t", "T"];
}
class SecondParser extends Parser {
  priority = 50;
  parse(dateString, token, match) {
    switch (token) {
      case "s":
        return parseNumericPattern(numericPatterns.second, dateString);
      case "so":
        return match.ordinalNumber(dateString, { unit: "second" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }
  incompatibleTokens = ["t", "T"];
}
class FractionOfSecondParser extends Parser {
  priority = 30;
  parse(dateString, token) {
    const valueCallback = (value) => Math.trunc(value * Math.pow(10, -token.length + 3));
    return mapValue(parseNDigits(token.length, dateString), valueCallback);
  }
  set(date, _flags, value) {
    date.setMilliseconds(value);
    return date;
  }
  incompatibleTokens = ["t", "T"];
}
class ISOTimezoneWithZParser extends Parser {
  priority = 10;
  parse(dateString, token) {
    switch (token) {
      case "X":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString
        );
      case "XX":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "XXXX":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString
        );
      case "XXXXX":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString
        );
      case "XXX":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds$1(date) - value
    );
  }
  incompatibleTokens = ["t", "T", "x"];
}
class ISOTimezoneParser extends Parser {
  priority = 10;
  parse(dateString, token) {
    switch (token) {
      case "x":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString
        );
      case "xx":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "xxxx":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString
        );
      case "xxxxx":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString
        );
      case "xxx":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds$1(date) - value
    );
  }
  incompatibleTokens = ["t", "T", "X"];
}
class TimestampSecondsParser extends Parser {
  priority = 40;
  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }
  set(date, _flags, value) {
    return [constructFrom(date, value * 1e3), { timestampIsSet: true }];
  }
  incompatibleTokens = "*";
}
class TimestampMillisecondsParser extends Parser {
  priority = 20;
  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }
  set(date, _flags, value) {
    return [constructFrom(date, value), { timestampIsSet: true }];
  }
  incompatibleTokens = "*";
}
const parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const notWhitespaceRegExp = /\S/;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function parse(dateStr, formatStr, referenceDate, options) {
  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  if (formatStr === "") {
    if (dateStr === "") {
      return toDate$1(referenceDate);
    } else {
      return constructFrom(referenceDate, NaN);
    }
  }
  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  const setters = [new DateToSystemTimezoneSetter()];
  const tokens = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter in longFormatters) {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp);
  const usedTokens = [];
  for (let token of tokens) {
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, dateStr);
    }
    if (!options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, dateStr);
    }
    const firstCharacter = token[0];
    const parser = parsers[firstCharacter];
    if (parser) {
      const { incompatibleTokens } = parser;
      if (Array.isArray(incompatibleTokens)) {
        const incompatibleToken = usedTokens.find(
          (usedToken) => incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter
        );
        if (incompatibleToken) {
          throw new RangeError(
            `The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`
          );
        }
      } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
        throw new RangeError(
          `The format string mustn't contain \`${token}\` and any other token at the same time`
        );
      }
      usedTokens.push({ token: firstCharacter, fullToken: token });
      const parseResult = parser.run(
        dateStr,
        token,
        locale.match,
        subFnOptions
      );
      if (!parseResult) {
        return constructFrom(referenceDate, NaN);
      }
      setters.push(parseResult.setter);
      dateStr = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
        );
      }
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      }
      if (dateStr.indexOf(token) === 0) {
        dateStr = dateStr.slice(token.length);
      } else {
        return constructFrom(referenceDate, NaN);
      }
    }
  }
  if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
    return constructFrom(referenceDate, NaN);
  }
  const uniquePrioritySetters = setters.map((setter) => setter.priority).sort((a, b) => b - a).filter((priority, index, array) => array.indexOf(priority) === index).map(
    (priority) => setters.filter((setter) => setter.priority === priority).sort((a, b) => b.subPriority - a.subPriority)
  ).map((setterArray) => setterArray[0]);
  let date = toDate$1(referenceDate);
  if (isNaN(date.getTime())) {
    return constructFrom(referenceDate, NaN);
  }
  const flags = {};
  for (const setter of uniquePrioritySetters) {
    if (!setter.validate(date, subFnOptions)) {
      return constructFrom(referenceDate, NaN);
    }
    const result = setter.set(date, flags, subFnOptions);
    if (Array.isArray(result)) {
      date = result[0];
      Object.assign(flags, result[1]);
    } else {
      date = result;
    }
  }
  return constructFrom(referenceDate, date);
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
function startOfHour(date) {
  const _date = toDate$1(date);
  _date.setMinutes(0, 0, 0);
  return _date;
}
function startOfSecond(date) {
  const _date = toDate$1(date);
  _date.setMilliseconds(0);
  return _date;
}
function setMonth(date, month) {
  const _date = toDate$1(date);
  const year = _date.getFullYear();
  const day = _date.getDate();
  const dateWithDesiredMonth = constructFrom(date, 0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}
function set(date, values) {
  let _date = toDate$1(date);
  if (isNaN(+_date)) {
    return constructFrom(date, NaN);
  }
  if (values.year != null) {
    _date.setFullYear(values.year);
  }
  if (values.month != null) {
    _date = setMonth(_date, values.month);
  }
  if (values.date != null) {
    _date.setDate(values.date);
  }
  if (values.hours != null) {
    _date.setHours(values.hours);
  }
  if (values.minutes != null) {
    _date.setMinutes(values.minutes);
  }
  if (values.seconds != null) {
    _date.setSeconds(values.seconds);
  }
  if (values.milliseconds != null) {
    _date.setMilliseconds(values.milliseconds);
  }
  return _date;
}
function setHours(date, hours) {
  const _date = toDate$1(date);
  _date.setHours(hours);
  return _date;
}
function setMinutes(date, minutes) {
  const _date = toDate$1(date);
  _date.setMinutes(minutes);
  return _date;
}
function setSeconds(date, seconds) {
  const _date = toDate$1(date);
  _date.setSeconds(seconds);
  return _date;
}
function strictParse(string, pattern, backup, option) {
  const result = parse(string, pattern, backup, option);
  if (!isValid(result)) return result;
  else if (format$1(result, pattern, option) === string) return result;
  else return new Date(Number.NaN);
}
const style$6 = c([cB("code", `
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `, [cM("show-line-numbers", `
 display: flex;
 `), cE("line-numbers", `
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `), cM("word-wrap", [c("pre", `
 white-space: pre-wrap;
 word-break: break-all;
 `)]), c("pre", `
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `), c("[class^=hljs]", `
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]), ({
  props
}) => {
  const codeClass = `${props.bPrefix}code`;
  return [`${codeClass} .hljs-comment,
 ${codeClass} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`, `${codeClass} .hljs-doctag,
 ${codeClass} .hljs-keyword,
 ${codeClass} .hljs-formula {
 color: var(--n-hue-3);
 }`, `${codeClass} .hljs-section,
 ${codeClass} .hljs-name,
 ${codeClass} .hljs-selector-tag,
 ${codeClass} .hljs-deletion,
 ${codeClass} .hljs-subst {
 color: var(--n-hue-5);
 }`, `${codeClass} .hljs-literal {
 color: var(--n-hue-1);
 }`, `${codeClass} .hljs-string,
 ${codeClass} .hljs-regexp,
 ${codeClass} .hljs-addition,
 ${codeClass} .hljs-attribute,
 ${codeClass} .hljs-meta-string {
 color: var(--n-hue-4);
 }`, `${codeClass} .hljs-built_in,
 ${codeClass} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`, `${codeClass} .hljs-attr,
 ${codeClass} .hljs-variable,
 ${codeClass} .hljs-template-variable,
 ${codeClass} .hljs-type,
 ${codeClass} .hljs-selector-class,
 ${codeClass} .hljs-selector-attr,
 ${codeClass} .hljs-selector-pseudo,
 ${codeClass} .hljs-number {
 color: var(--n-hue-6);
 }`, `${codeClass} .hljs-symbol,
 ${codeClass} .hljs-bullet,
 ${codeClass} .hljs-link,
 ${codeClass} .hljs-meta,
 ${codeClass} .hljs-selector-id,
 ${codeClass} .hljs-title {
 color: var(--n-hue-2);
 }`, `${codeClass} .hljs-emphasis {
 font-style: italic;
 }`, `${codeClass} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`, `${codeClass} .hljs-link {
 text-decoration: underline;
 }`];
}]);
const codeProps = Object.assign(Object.assign({}, useTheme.props), {
  language: String,
  code: {
    type: String,
    default: ""
  },
  trim: {
    type: Boolean,
    default: true
  },
  hljs: Object,
  uri: Boolean,
  inline: Boolean,
  wordWrap: Boolean,
  showLineNumbers: Boolean,
  // In n-log, we only need to mount code's style for highlight
  internalFontSize: Number,
  internalNoHighlight: Boolean
});
const NCode = defineComponent({
  name: "Code",
  props: codeProps,
  setup(props, {
    slots
  }) {
    const {
      internalNoHighlight
    } = props;
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig();
    const codeRef = ref(null);
    const hljsRef = internalNoHighlight ? {
      value: void 0
    } : useHljs(props);
    const createCodeHtml = (language, code, trim) => {
      const {
        value: hljs
      } = hljsRef;
      if (!hljs) {
        return null;
      }
      if (!(language && hljs.getLanguage(language))) {
        return null;
      }
      return hljs.highlight(trim ? code.trim() : code, {
        language
      }).value;
    };
    const mergedShowLineNumbersRef = computed(() => {
      if (props.inline || props.wordWrap) return false;
      return props.showLineNumbers;
    });
    const setCode = () => {
      if (slots.default) return;
      const {
        value: codeEl
      } = codeRef;
      if (!codeEl) return;
      const {
        language
      } = props;
      const code = props.uri ? window.decodeURIComponent(props.code) : props.code;
      if (language) {
        const html2 = createCodeHtml(language, code, props.trim);
        if (html2 !== null) {
          if (props.inline) {
            codeEl.innerHTML = html2;
          } else {
            const prevPreEl = codeEl.querySelector(".__code__");
            if (prevPreEl) codeEl.removeChild(prevPreEl);
            const preEl = document.createElement("pre");
            preEl.className = "__code__";
            preEl.innerHTML = html2;
            codeEl.appendChild(preEl);
          }
          return;
        }
      }
      if (props.inline) {
        codeEl.textContent = code;
        return;
      }
      const maybePreEl = codeEl.querySelector(".__code__");
      if (maybePreEl) {
        maybePreEl.textContent = code;
      } else {
        const wrap = document.createElement("pre");
        wrap.className = "__code__";
        wrap.textContent = code;
        codeEl.innerHTML = "";
        codeEl.appendChild(wrap);
      }
    };
    onMounted(setCode);
    watch(toRef(props, "language"), setCode);
    watch(toRef(props, "code"), setCode);
    if (!internalNoHighlight) watch(hljsRef, setCode);
    const themeRef = useTheme("Code", "-code", style$6, codeLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2,
          fontFamilyMono
        },
        self: {
          textColor,
          fontSize,
          fontWeightStrong,
          lineNumberTextColor,
          // extracted from hljs atom-one-light.scss
          "mono-3": $1,
          "hue-1": $2,
          "hue-2": $3,
          "hue-3": $4,
          "hue-4": $5,
          "hue-5": $6,
          "hue-5-2": $7,
          "hue-6": $8,
          "hue-6-2": $9
        }
      } = themeRef.value;
      const {
        internalFontSize
      } = props;
      return {
        "--n-font-size": internalFontSize ? `${internalFontSize}px` : fontSize,
        "--n-font-family": fontFamilyMono,
        "--n-font-weight-strong": fontWeightStrong,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-text-color": textColor,
        "--n-mono-3": $1,
        "--n-hue-1": $2,
        "--n-hue-2": $3,
        "--n-hue-3": $4,
        "--n-hue-4": $5,
        "--n-hue-5": $6,
        "--n-hue-5-2": $7,
        "--n-hue-6": $8,
        "--n-hue-6-2": $9,
        "--n-line-number-text-color": lineNumberTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("code", computed(() => {
      return `${props.internalFontSize || "a"}`;
    }), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      codeRef,
      mergedShowLineNumbers: mergedShowLineNumbersRef,
      lineNumbers: computed(() => {
        let number = 1;
        const numbers = [];
        let lastIsLineWrap = false;
        for (const char of props.code) {
          if (char === "\n") {
            lastIsLineWrap = true;
            numbers.push(number++);
          } else {
            lastIsLineWrap = false;
          }
        }
        if (!lastIsLineWrap) {
          numbers.push(number++);
        }
        return numbers.join("\n");
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a, _b;
    const {
      mergedClsPrefix,
      wordWrap,
      mergedShowLineNumbers,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("code", {
      class: [`${mergedClsPrefix}-code`, this.themeClass, wordWrap && `${mergedClsPrefix}-code--word-wrap`, mergedShowLineNumbers && `${mergedClsPrefix}-code--show-line-numbers`],
      style: this.cssVars,
      ref: "codeRef"
    }, mergedShowLineNumbers ? h("pre", {
      class: `${mergedClsPrefix}-code__line-numbers`
    }, this.lineNumbers) : null, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a));
  }
});
const tooltipProps = Object.assign(Object.assign({}, popoverBaseProps), useTheme.props);
const NTooltip = defineComponent({
  name: "Tooltip",
  props: tooltipProps,
  __popover__: true,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const themeRef = useTheme("Tooltip", "-tooltip", void 0, tooltipLight, props, mergedClsPrefixRef);
    const popoverRef = ref(null);
    const tooltipExposedMethod = {
      syncPosition() {
        popoverRef.value.syncPosition();
      },
      setShow(show) {
        popoverRef.value.setShow(show);
      }
    };
    return Object.assign(Object.assign({}, tooltipExposedMethod), {
      popoverRef,
      mergedTheme: themeRef,
      popoverThemeOverrides: computed(() => {
        return themeRef.value.self;
      })
    });
  },
  render() {
    const {
      mergedTheme,
      internalExtraClass
    } = this;
    return h(__unplugin_components_2$1, Object.assign(Object.assign({}, this.$props), {
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: internalExtraClass.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
});
function tzIntlTimeZoneName(length, date, options) {
  const defaultOptions = getDefaultOptions();
  const dtf = getDTF(length, options.timeZone, options.locale ?? defaultOptions.locale);
  return "formatToParts" in dtf ? partsTimeZone(dtf, date) : hackyTimeZone(dtf, date);
}
function partsTimeZone(dtf, date) {
  const formatted = dtf.formatToParts(date);
  for (let i = formatted.length - 1; i >= 0; --i) {
    if (formatted[i].type === "timeZoneName") {
      return formatted[i].value;
    }
  }
  return void 0;
}
function hackyTimeZone(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, "");
  const tzNameMatch = / [\w-+ ]+$/.exec(formatted);
  return tzNameMatch ? tzNameMatch[0].substr(1) : "";
}
function getDTF(length, timeZone, locale) {
  return new Intl.DateTimeFormat(locale ? [locale.code, "en-US"] : void 0, {
    timeZone,
    timeZoneName: length
  });
}
function tzTokenizeDate(date, timeZone) {
  const dtf = getDateTimeFormat(timeZone);
  return "formatToParts" in dtf ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function partsOffset(dtf, date) {
  try {
    const formatted = dtf.formatToParts(date);
    const filled = [];
    for (let i = 0; i < formatted.length; i++) {
      const pos = typeToPos[formatted[i].type];
      if (pos !== void 0) {
        filled[pos] = parseInt(formatted[i].value, 10);
      }
    }
    return filled;
  } catch (error) {
    if (error instanceof RangeError) {
      return [NaN];
    }
    throw error;
  }
}
function hackyOffset(dtf, date) {
  const formatted = dtf.format(date);
  const parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
  return [
    parseInt(parsed[3], 10),
    parseInt(parsed[1], 10),
    parseInt(parsed[2], 10),
    parseInt(parsed[4], 10),
    parseInt(parsed[5], 10),
    parseInt(parsed[6], 10)
  ];
}
const dtfCache = {};
const testDateFormatted = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z"));
const hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[timeZone];
}
function newDateUTC(fullYear, month, day, hour, minute, second, millisecond) {
  const utcDate = /* @__PURE__ */ new Date(0);
  utcDate.setUTCFullYear(fullYear, month, day);
  utcDate.setUTCHours(hour, minute, second, millisecond);
  return utcDate;
}
const MILLISECONDS_IN_HOUR$1 = 36e5;
const MILLISECONDS_IN_MINUTE$2 = 6e4;
const patterns$1 = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function tzParseTimezone(timezoneString, date, isUtcDate) {
  if (!timezoneString) {
    return 0;
  }
  let token = patterns$1.timezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }
  let hours;
  let absoluteOffset;
  token = patterns$1.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[1], 10);
    if (!validateTimezone(hours)) {
      return NaN;
    }
    return -(hours * MILLISECONDS_IN_HOUR$1);
  }
  token = patterns$1.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);
    const minutes = parseInt(token[3], 10);
    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }
    absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$2;
    return token[1] === "+" ? -absoluteOffset : absoluteOffset;
  }
  if (isValidTimezoneIANAString(timezoneString)) {
    date = new Date(date || Date.now());
    const utcDate = isUtcDate ? date : toUtcDate(date);
    const offset = calcOffset(utcDate, timezoneString);
    const fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString);
    return -fixedOffset;
  }
  return NaN;
}
function toUtcDate(date) {
  return newDateUTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
}
function calcOffset(date, timezoneString) {
  const tokens = tzTokenizeDate(date, timezoneString);
  const asUTC = newDateUTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3] % 24, tokens[4], tokens[5], 0).getTime();
  let asTS = date.getTime();
  const over = asTS % 1e3;
  asTS -= over >= 0 ? over : 1e3 + over;
  return asUTC - asTS;
}
function fixOffset(date, offset, timezoneString) {
  const localTS = date.getTime();
  let utcGuess = localTS - offset;
  const o2 = calcOffset(new Date(utcGuess), timezoneString);
  if (offset === o2) {
    return offset;
  }
  utcGuess -= o2 - offset;
  const o3 = calcOffset(new Date(utcGuess), timezoneString);
  if (o2 === o3) {
    return o2;
  }
  return Math.max(o2, o3);
}
function validateTimezone(hours, minutes) {
  return -23 <= hours && hours <= 23 && (minutes == null || 0 <= minutes && minutes <= 59);
}
const validIANATimezoneCache = {};
function isValidTimezoneIANAString(timeZoneString) {
  if (validIANATimezoneCache[timeZoneString])
    return true;
  try {
    new Intl.DateTimeFormat(void 0, { timeZone: timeZoneString });
    validIANATimezoneCache[timeZoneString] = true;
    return true;
  } catch (error) {
    return false;
  }
}
const MILLISECONDS_IN_MINUTE$1 = 60 * 1e3;
const formatters = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, options) {
    const timezoneOffset = getTimeZoneOffset(options.timeZone, date);
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, options) {
    const timezoneOffset = getTimeZoneOffset(options.timeZone, date);
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, options) {
    const timezoneOffset = getTimeZoneOffset(options.timeZone, date);
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, options) {
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return tzIntlTimeZoneName("short", date, options);
      case "zzzz":
      default:
        return tzIntlTimeZoneName("long", date, options);
    }
  }
};
function getTimeZoneOffset(timeZone, originalDate) {
  const timeZoneOffset = timeZone ? tzParseTimezone(timeZone, originalDate, true) / MILLISECONDS_IN_MINUTE$1 : originalDate?.getTimezoneOffset() ?? 0;
  if (Number.isNaN(timeZoneOffset)) {
    throw new RangeError("Invalid time zone specified: " + timeZone);
  }
  return timeZoneOffset;
}
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  let output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  const minutes = addLeadingZeros(Math.floor(absOffset % 60), 2);
  return sign + hours + delimiter + minutes;
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.floor(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function getTimezoneOffsetInMilliseconds(date) {
  const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return +date - +utcDate;
}
const tzPattern = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const MILLISECONDS_IN_HOUR = 36e5;
const MILLISECONDS_IN_MINUTE = 6e4;
const DEFAULT_ADDITIONAL_DIGITS = 2;
const patterns = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: tzPattern
};
function toDate(argument, options = {}) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  if (argument === null) {
    return /* @__PURE__ */ new Date(NaN);
  }
  const additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") {
    return new Date(argument);
  } else if (!(Object.prototype.toString.call(argument) === "[object String]")) {
    return /* @__PURE__ */ new Date(NaN);
  }
  const dateStrings = splitDateString(argument);
  const { year, restDateString } = parseYear(dateStrings.date, additionalDigits);
  const date = parseDate(restDateString, year);
  if (date === null || isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (date) {
    const timestamp = date.getTime();
    let time2 = 0;
    let offset;
    if (dateStrings.time) {
      time2 = parseTime(dateStrings.time);
      if (time2 === null || isNaN(time2)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    }
    if (dateStrings.timeZone || options.timeZone) {
      offset = tzParseTimezone(dateStrings.timeZone || options.timeZone, new Date(timestamp + time2));
      if (isNaN(offset)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    } else {
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time2));
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time2 + offset));
    }
    return new Date(timestamp + time2 + offset);
  } else {
    return /* @__PURE__ */ new Date(NaN);
  }
}
function splitDateString(dateString) {
  const dateStrings = {};
  let parts = patterns.dateTimePattern.exec(dateString);
  let timeString;
  if (!parts) {
    parts = patterns.datePattern.exec(dateString);
    if (parts) {
      dateStrings.date = parts[1];
      timeString = parts[2];
    } else {
      dateStrings.date = null;
      timeString = dateString;
    }
  } else {
    dateStrings.date = parts[1];
    timeString = parts[3];
  }
  if (timeString) {
    const token = patterns.timeZone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timeZone = token[1].trim();
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  if (dateString) {
    const patternYYY = patterns.YYY[additionalDigits];
    const patternYYYYY = patterns.YYYYY[additionalDigits];
    let token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
    if (token) {
      const yearString = token[1];
      return {
        year: parseInt(yearString, 10),
        restDateString: dateString.slice(yearString.length)
      };
    }
    token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
    if (token) {
      const centuryString = token[1];
      return {
        year: parseInt(centuryString, 10) * 100,
        restDateString: dateString.slice(centuryString.length)
      };
    }
  }
  return {
    year: null
  };
}
function parseDate(dateString, year) {
  if (year === null) {
    return null;
  }
  let date;
  let month;
  let week;
  if (!dateString || !dateString.length) {
    date = /* @__PURE__ */ new Date(0);
    date.setUTCFullYear(year);
    return date;
  }
  let token = patterns.MM.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    if (!validateDate(year, month)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month);
    return date;
  }
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    const dayOfYear = parseInt(token[1], 10);
    if (!validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    const day = parseInt(token[2], 10);
    if (!validateDate(year, month, day)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, day);
    return date;
  }
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    if (!validateWeekDate(week)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week);
  }
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    const dayOfWeek = parseInt(token[2], 10) - 1;
    if (!validateWeekDate(week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  }
  return null;
}
function parseTime(timeString) {
  let hours;
  let minutes;
  let token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(",", "."));
    if (!validateTime(hours)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR;
  }
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(",", "."));
    if (!validateTime(hours, minutes)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  }
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    const seconds = parseFloat(token[3].replace(",", "."));
    if (!validateTime(hours, minutes, seconds)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1e3;
  }
  return null;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  const date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }
  if (date != null) {
    if (date < 1) {
      return false;
    }
    const isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }
  return true;
}
function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }
  const isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false;
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }
  return true;
}
function validateWeekDate(week, day) {
  if (week < 0 || week > 52) {
    return false;
  }
  if (day != null && (day < 0 || day > 6)) {
    return false;
  }
  return true;
}
function validateTime(hours, minutes, seconds) {
  if (hours < 0 || hours >= 25) {
    return false;
  }
  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }
  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }
  return true;
}
const tzFormattingTokensRegExp = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function format(date, formatStr, options = {}) {
  formatStr = String(formatStr);
  const matches = formatStr.match(tzFormattingTokensRegExp);
  if (matches) {
    const d = toDate(options.originalDate || date, options);
    formatStr = matches.reduce(function(result, token) {
      if (token[0] === "'") {
        return result;
      }
      const pos = result.indexOf(token);
      const precededByQuotedSection = result[pos - 1] === "'";
      const replaced = result.replace(token, "'" + formatters[token[0]](d, token, options) + "'");
      return precededByQuotedSection ? replaced.substring(0, pos - 1) + replaced.substring(pos + 1) : replaced;
    }, formatStr);
  }
  return format$1(date, formatStr, options);
}
function toZonedTime(date, timeZone, options) {
  date = toDate(date, options);
  const offsetMilliseconds = tzParseTimezone(timeZone, date, true);
  const d = new Date(date.getTime() - offsetMilliseconds);
  const resultDate = /* @__PURE__ */ new Date(0);
  resultDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  resultDate.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
  return resultDate;
}
function formatInTimeZone(date, timeZone, formatStr, options) {
  options = {
    ...options,
    timeZone,
    originalDate: date
  };
  return format(toZonedTime(date, timeZone, { timeZone: options.timeZone }), formatStr, options);
}
const timePickerInjectionKey = createInjectionKey("n-time-picker");
const PanelCol = defineComponent({
  name: "TimePickerPanelCol",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    activeValue: {
      type: [Number, String],
      default: null
    },
    // It should be required but vue's type seems to have bugs
    onItemClick: Function
  },
  render() {
    const {
      activeValue,
      onItemClick,
      clsPrefix
    } = this;
    return this.data.map((item) => {
      const {
        label,
        disabled,
        value
      } = item;
      const active = activeValue === value;
      return h("div", {
        key: label,
        "data-active": active ? "" : null,
        class: [`${clsPrefix}-time-picker-col__item`, active && `${clsPrefix}-time-picker-col__item--active`, disabled && `${clsPrefix}-time-picker-col__item--disabled`],
        onClick: onItemClick && !disabled ? () => {
          onItemClick(value);
        } : void 0
      }, label);
    });
  }
});
const time = {
  amHours: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
  pmHours: ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
  hours: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
  minutes: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  seconds: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  period: ["AM", "PM"]
};
function getFixValue(value) {
  return `00${value}`.slice(-2);
}
function getTimeUnits(defaultValue, stepOrList, isHourWithAmPm) {
  if (Array.isArray(stepOrList)) {
    return (isHourWithAmPm === "am" ? stepOrList.filter((v) => v < 12) : isHourWithAmPm === "pm" ? stepOrList.filter((v) => v >= 12).map((v) => v === 12 ? 12 : v - 12) : stepOrList).map((v) => getFixValue(v));
  } else if (typeof stepOrList === "number") {
    if (isHourWithAmPm === "am") {
      return defaultValue.filter((hour) => {
        const hourAsNumber = Number(hour);
        return hourAsNumber < 12 && hourAsNumber % stepOrList === 0;
      });
    } else if (isHourWithAmPm === "pm") {
      return defaultValue.filter((hour) => {
        const hourAsNumber = Number(hour);
        return hourAsNumber >= 12 && hourAsNumber % stepOrList === 0;
      }).map((hour) => {
        const hourAsNumber = Number(hour);
        return getFixValue(hourAsNumber === 12 ? 12 : hourAsNumber - 12);
      });
    }
    return defaultValue.filter((hour) => {
      return Number(hour) % stepOrList === 0;
    });
  } else {
    return isHourWithAmPm === "am" ? defaultValue.filter((hour) => Number(hour) < 12) : isHourWithAmPm === "pm" ? defaultValue.map((hour) => Number(hour)).filter((hour) => Number(hour) >= 12).map((v) => getFixValue(v === 12 ? 12 : v - 12)) : defaultValue;
  }
}
function isTimeInStep(value, type, stepOrList) {
  if (!stepOrList) {
    return true;
  } else if (typeof stepOrList === "number") {
    return value % stepOrList === 0;
  } else {
    return stepOrList.includes(value);
  }
}
function findSimilarTime(value, type, stepOrList) {
  const list2 = getTimeUnits(time[type], stepOrList).map(Number);
  let lowerBound, upperBound;
  for (let i = 0; i < list2.length; ++i) {
    const v = list2[i];
    if (v === value) {
      return v;
    } else if (v > value) {
      upperBound = v;
      break;
    }
    lowerBound = v;
  }
  if (lowerBound === void 0) {
    if (!upperBound) {
      throwError("time-picker", "Please set 'hours' or 'minutes' or 'seconds' props");
    }
    return upperBound;
  }
  if (upperBound === void 0) {
    return lowerBound;
  }
  return upperBound - value > value - lowerBound ? lowerBound : upperBound;
}
function getAmPm(value) {
  return getHours(value) < 12 ? "am" : "pm";
}
const timePickerPanelProps = {
  actions: {
    type: Array,
    default: () => ["now", "confirm"]
  },
  showHour: {
    type: Boolean,
    default: true
  },
  showMinute: {
    type: Boolean,
    default: true
  },
  showSecond: {
    type: Boolean,
    default: true
  },
  showPeriod: {
    type: Boolean,
    default: true
  },
  isHourInvalid: Boolean,
  isMinuteInvalid: Boolean,
  isSecondInvalid: Boolean,
  isAmPmInvalid: Boolean,
  isValueInvalid: Boolean,
  hourValue: {
    type: Number,
    default: null
  },
  minuteValue: {
    type: Number,
    default: null
  },
  secondValue: {
    type: Number,
    default: null
  },
  amPmValue: {
    type: String,
    default: null
  },
  isHourDisabled: Function,
  isMinuteDisabled: Function,
  isSecondDisabled: Function,
  onHourClick: {
    type: Function,
    required: true
  },
  onMinuteClick: {
    type: Function,
    required: true
  },
  onSecondClick: {
    type: Function,
    required: true
  },
  onAmPmClick: {
    type: Function,
    required: true
  },
  onNowClick: Function,
  clearText: String,
  nowText: String,
  confirmText: String,
  transitionDisabled: Boolean,
  onClearClick: Function,
  onConfirmClick: Function,
  onFocusin: Function,
  onFocusout: Function,
  onFocusDetectorFocus: Function,
  onKeydown: Function,
  hours: [Number, Array],
  minutes: [Number, Array],
  seconds: [Number, Array],
  use12Hours: Boolean
};
const Panel = defineComponent({
  name: "TimePickerPanel",
  props: timePickerPanelProps,
  setup(props) {
    const {
      mergedThemeRef,
      mergedClsPrefixRef
    } = inject(timePickerInjectionKey);
    const hoursRef = computed(() => {
      const {
        isHourDisabled,
        hours,
        use12Hours,
        amPmValue
      } = props;
      if (!use12Hours) {
        return getTimeUnits(time.hours, hours).map((hour) => {
          return {
            label: hour,
            value: Number(hour),
            disabled: isHourDisabled ? isHourDisabled(Number(hour)) : false
          };
        });
      } else {
        const mergedAmPmValue = amPmValue !== null && amPmValue !== void 0 ? amPmValue : getAmPm(Date.now());
        return getTimeUnits(time.hours, hours, mergedAmPmValue).map((hour) => {
          const hourAs12FormattedNumber = Number(hour);
          const hourAs24FormattedNumber = mergedAmPmValue === "pm" && hourAs12FormattedNumber !== 12 ? hourAs12FormattedNumber + 12 : hourAs12FormattedNumber;
          return {
            label: hour,
            value: hourAs24FormattedNumber,
            disabled: isHourDisabled ? isHourDisabled(hourAs24FormattedNumber) : false
          };
        });
      }
    });
    const minutesRef = computed(() => {
      const {
        isMinuteDisabled,
        minutes
      } = props;
      return getTimeUnits(time.minutes, minutes).map((minute) => {
        return {
          label: minute,
          value: Number(minute),
          disabled: isMinuteDisabled ? isMinuteDisabled(Number(minute), props.hourValue) : false
        };
      });
    });
    const secondsRef = computed(() => {
      const {
        isSecondDisabled,
        seconds
      } = props;
      return getTimeUnits(time.seconds, seconds).map((second) => {
        return {
          label: second,
          value: Number(second),
          disabled: isSecondDisabled ? isSecondDisabled(Number(second), props.minuteValue, props.hourValue) : false
        };
      });
    });
    const amPmRef = computed(() => {
      const {
        isHourDisabled
      } = props;
      let amDisabled = true;
      let pmDisabled = true;
      for (let i = 0; i < 12; ++i) {
        if (!(isHourDisabled === null || isHourDisabled === void 0 ? void 0 : isHourDisabled(i))) {
          amDisabled = false;
          break;
        }
      }
      for (let i = 12; i < 24; ++i) {
        if (!(isHourDisabled === null || isHourDisabled === void 0 ? void 0 : isHourDisabled(i))) {
          pmDisabled = false;
          break;
        }
      }
      return [{
        label: "AM",
        value: "am",
        disabled: amDisabled
      }, {
        label: "PM",
        value: "pm",
        disabled: pmDisabled
      }];
    });
    return {
      mergedTheme: mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      hours: hoursRef,
      minutes: minutesRef,
      seconds: secondsRef,
      amPm: amPmRef,
      hourScrollRef: ref(null),
      minuteScrollRef: ref(null),
      secondScrollRef: ref(null),
      amPmScrollRef: ref(null)
    };
  },
  render() {
    var _a, _b, _c, _d;
    const {
      mergedClsPrefix,
      mergedTheme
    } = this;
    return h("div", {
      tabindex: 0,
      class: `${mergedClsPrefix}-time-picker-panel`,
      onFocusin: this.onFocusin,
      onFocusout: this.onFocusout,
      onKeydown: this.onKeydown
    }, h("div", {
      class: `${mergedClsPrefix}-time-picker-cols`
    }, this.showHour ? h("div", {
      class: [`${mergedClsPrefix}-time-picker-col`, this.isHourInvalid && `${mergedClsPrefix}-time-picker-col--invalid`, this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`]
    }, h(Scrollbar, {
      ref: "hourScrollRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [h(PanelCol, {
        clsPrefix: mergedClsPrefix,
        data: this.hours,
        activeValue: this.hourValue,
        onItemClick: this.onHourClick
      }), h("div", {
        class: `${mergedClsPrefix}-time-picker-col__padding`
      })]
    })) : null, this.showMinute ? h("div", {
      class: [`${mergedClsPrefix}-time-picker-col`, this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`, this.isMinuteInvalid && `${mergedClsPrefix}-time-picker-col--invalid`]
    }, h(Scrollbar, {
      ref: "minuteScrollRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [h(PanelCol, {
        clsPrefix: mergedClsPrefix,
        data: this.minutes,
        activeValue: this.minuteValue,
        onItemClick: this.onMinuteClick
      }), h("div", {
        class: `${mergedClsPrefix}-time-picker-col__padding`
      })]
    })) : null, this.showSecond ? h("div", {
      class: [`${mergedClsPrefix}-time-picker-col`, this.isSecondInvalid && `${mergedClsPrefix}-time-picker-col--invalid`, this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`]
    }, h(Scrollbar, {
      ref: "secondScrollRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [h(PanelCol, {
        clsPrefix: mergedClsPrefix,
        data: this.seconds,
        activeValue: this.secondValue,
        onItemClick: this.onSecondClick
      }), h("div", {
        class: `${mergedClsPrefix}-time-picker-col__padding`
      })]
    })) : null, this.use12Hours ? h("div", {
      class: [`${mergedClsPrefix}-time-picker-col`, this.isAmPmInvalid && `${mergedClsPrefix}-time-picker-col--invalid`, this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`]
    }, h(Scrollbar, {
      ref: "amPmScrollRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [h(PanelCol, {
        clsPrefix: mergedClsPrefix,
        data: this.amPm,
        activeValue: this.amPmValue,
        onItemClick: this.onAmPmClick
      }), h("div", {
        class: `${mergedClsPrefix}-time-picker-col__padding`
      })]
    })) : null), ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) ? h("div", {
      class: `${mergedClsPrefix}-time-picker-actions`
    }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.onClearClick
    }, {
      default: () => this.clearText
    }) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("now")) ? h(Button, {
      size: "tiny",
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      onClick: this.onNowClick
    }, {
      default: () => this.nowText
    }) : null, ((_d = this.actions) === null || _d === void 0 ? void 0 : _d.includes("confirm")) ? h(Button, {
      size: "tiny",
      type: "primary",
      class: `${mergedClsPrefix}-time-picker-actions__confirm`,
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      disabled: this.isValueInvalid,
      onClick: this.onConfirmClick
    }, {
      default: () => this.confirmText
    }) : null) : null, h(FocusDetector, {
      onFocus: this.onFocusDetectorFocus
    }));
  }
});
const style$5 = c([cB("time-picker", `
 z-index: auto;
 position: relative;
 `, [cB("time-picker-icon", `
 color: var(--n-icon-color-override);
 transition: color .3s var(--n-bezier);
 `), cM("disabled", [cB("time-picker-icon", `
 color: var(--n-icon-color-disabled-override);
 `)])]), cB("time-picker-panel", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 font-size: var(--n-item-font-size);
 border-radius: var(--n-border-radius);
 margin: 4px 0;
 min-width: 104px;
 overflow: hidden;
 background-color: var(--n-panel-color);
 box-shadow: var(--n-panel-box-shadow);
 `, [fadeInScaleUpTransition(), cB("time-picker-actions", `
 padding: var(--n-panel-action-padding);
 align-items: center;
 display: flex;
 justify-content: space-evenly;
 `), cB("time-picker-cols", `
 height: calc(var(--n-item-height) * 6);
 display: flex;
 position: relative;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-panel-divider-color);
 `), cB("time-picker-col", `
 flex-grow: 1;
 min-width: var(--n-item-width);
 height: calc(var(--n-item-height) * 6);
 flex-direction: column;
 transition: box-shadow .3s var(--n-bezier);
 `, [cM("transition-disabled", [cE("item", "transition: none;", [c("&::before", "transition: none;")])]), cE("padding", `
 height: calc(var(--n-item-height) * 5);
 `), c("&:first-child", "min-width: calc(var(--n-item-width) + 4px);", [cE("item", [c("&::before", "left: 4px;")])]), cE("item", `
 cursor: pointer;
 height: var(--n-item-height);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 background: #0000;
 text-decoration-color: #0000;
 color: var(--n-item-text-color);
 z-index: 0;
 box-sizing: border-box;
 padding-top: 4px;
 position: relative;
 `, [c("&::before", `
 content: "";
 transition: background-color .3s var(--n-bezier);
 z-index: -1;
 position: absolute;
 left: 0;
 right: 4px;
 top: 4px;
 bottom: 0;
 border-radius: var(--n-item-border-radius);
 `), cNotM("disabled", [c("&:hover::before", `
 background-color: var(--n-item-color-hover);
 `)]), cM("active", `
 color: var(--n-item-text-color-active);
 `, [c("&::before", `
 background-color: var(--n-item-color-hover);
 `)]), cM("disabled", `
 opacity: var(--n-item-opacity-disabled);
 cursor: not-allowed;
 `)]), cM("invalid", [cE("item", [cM("active", `
 text-decoration: line-through;
 text-decoration-color: var(--n-item-text-color-active);
 `)])])])])]);
function validateUnits(value, max) {
  if (value === void 0) {
    return true;
  }
  if (Array.isArray(value)) {
    return value.every((v) => v >= 0 && v <= max);
  } else {
    return value >= 0 && value <= max;
  }
}
const timePickerProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  actions: Array,
  defaultValue: {
    type: Number,
    default: null
  },
  defaultFormattedValue: String,
  placeholder: String,
  placement: {
    type: String,
    default: "bottom-start"
  },
  value: Number,
  format: {
    type: String,
    default: "HH:mm:ss"
  },
  valueFormat: String,
  formattedValue: String,
  isHourDisabled: Function,
  size: String,
  isMinuteDisabled: Function,
  isSecondDisabled: Function,
  inputReadonly: Boolean,
  clearable: Boolean,
  status: String,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  onUpdateFormattedValue: [Function, Array],
  "onUpdate:formattedValue": [Function, Array],
  onBlur: [Function, Array],
  onConfirm: [Function, Array],
  onClear: Function,
  onFocus: [Function, Array],
  // https://www.iana.org/time-zones
  timeZone: String,
  showIcon: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  show: {
    type: Boolean,
    default: void 0
  },
  hours: {
    type: [Number, Array],
    validator: (value) => validateUnits(value, 23)
  },
  minutes: {
    type: [Number, Array],
    validator: (value) => validateUnits(value, 59)
  },
  seconds: {
    type: [Number, Array],
    validator: (value) => validateUnits(value, 59)
  },
  use12Hours: Boolean,
  // private
  stateful: {
    type: Boolean,
    default: true
  },
  // deprecated
  onChange: [Function, Array]
});
const __unplugin_components_8 = defineComponent({
  name: "TimePicker",
  props: timePickerProps,
  setup(props) {
    const {
      mergedBorderedRef,
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const {
      localeRef,
      dateLocaleRef
    } = useLocale("TimePicker");
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    const themeRef = useTheme("TimePicker", "-time-picker", style$5, timePickerLight, props, mergedClsPrefixRef);
    const keyboardState = useKeyboard();
    const inputInstRef = ref(null);
    const panelInstRef = ref(null);
    const dateFnsOptionsRef = computed(() => {
      return {
        locale: dateLocaleRef.value.locale
      };
    });
    function getTimestampFromFormattedValue(value) {
      if (value === null) return null;
      return strictParse(value, props.valueFormat || props.format, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value).getTime();
    }
    const {
      defaultValue,
      defaultFormattedValue
    } = props;
    const uncontrolledValueRef = ref(defaultFormattedValue !== void 0 ? getTimestampFromFormattedValue(defaultFormattedValue) : defaultValue);
    const mergedValueRef = computed(() => {
      const {
        formattedValue
      } = props;
      if (formattedValue !== void 0) {
        return getTimestampFromFormattedValue(formattedValue);
      }
      const {
        value
      } = props;
      if (value !== void 0) {
        return value;
      }
      return uncontrolledValueRef.value;
    });
    const mergedFormatRef = computed(() => {
      const {
        timeZone
      } = props;
      if (timeZone) {
        return (date, format2, options) => {
          return formatInTimeZone(date, timeZone, format2, options);
        };
      } else {
        return (date, _format, options) => {
          return format$1(date, _format, options);
        };
      }
    });
    const displayTimeStringRef = ref("");
    watch(() => props.timeZone, () => {
      const mergedValue = mergedValueRef.value;
      displayTimeStringRef.value = mergedValue === null ? "" : mergedFormatRef.value(mergedValue, props.format, dateFnsOptionsRef.value);
    }, {
      immediate: true
    });
    const uncontrolledShowRef = ref(false);
    const controlledShowRef = toRef(props, "show");
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    const memorizedValueRef = ref(mergedValueRef.value);
    const transitionDisabledRef = ref(false);
    const localizedClearRef = computed(() => {
      return localeRef.value.clear;
    });
    const localizedNowRef = computed(() => {
      return localeRef.value.now;
    });
    const localizedPlaceholderRef = computed(() => {
      if (props.placeholder !== void 0) return props.placeholder;
      return localeRef.value.placeholder;
    });
    const localizedNegativeTextRef = computed(() => {
      return localeRef.value.negativeText;
    });
    const localizedPositiveTextRef = computed(() => {
      return localeRef.value.positiveText;
    });
    const hourInFormatRef = computed(() => {
      return /H|h|K|k/.test(props.format);
    });
    const minuteInFormatRef = computed(() => {
      return props.format.includes("m");
    });
    const secondInFormatRef = computed(() => {
      return props.format.includes("s");
    });
    const hourValueRef = computed(() => {
      const {
        value
      } = mergedValueRef;
      if (value === null) return null;
      return Number(mergedFormatRef.value(value, "HH", dateFnsOptionsRef.value));
    });
    const minuteValueRef = computed(() => {
      const {
        value
      } = mergedValueRef;
      if (value === null) return null;
      return Number(mergedFormatRef.value(value, "mm", dateFnsOptionsRef.value));
    });
    const secondValueRef = computed(() => {
      const {
        value
      } = mergedValueRef;
      if (value === null) return null;
      return Number(mergedFormatRef.value(value, "ss", dateFnsOptionsRef.value));
    });
    const isHourInvalidRef = computed(() => {
      const {
        isHourDisabled
      } = props;
      if (hourValueRef.value === null) return false;
      if (!isTimeInStep(hourValueRef.value, "hours", props.hours)) return true;
      if (!isHourDisabled) return false;
      return isHourDisabled(hourValueRef.value);
    });
    const isMinuteInvalidRef = computed(() => {
      const {
        value: minuteValue
      } = minuteValueRef;
      const {
        value: hourValue
      } = hourValueRef;
      if (minuteValue === null || hourValue === null) return false;
      if (!isTimeInStep(minuteValue, "minutes", props.minutes)) return true;
      const {
        isMinuteDisabled
      } = props;
      if (!isMinuteDisabled) return false;
      return isMinuteDisabled(minuteValue, hourValue);
    });
    const isSecondInvalidRef = computed(() => {
      const {
        value: minuteValue
      } = minuteValueRef;
      const {
        value: hourValue
      } = hourValueRef;
      const {
        value: secondValue
      } = secondValueRef;
      if (secondValue === null || minuteValue === null || hourValue === null) {
        return false;
      }
      if (!isTimeInStep(secondValue, "seconds", props.seconds)) return true;
      const {
        isSecondDisabled
      } = props;
      if (!isSecondDisabled) return false;
      return isSecondDisabled(secondValue, minuteValue, hourValue);
    });
    const isValueInvalidRef = computed(() => {
      return isHourInvalidRef.value || isMinuteInvalidRef.value || isSecondInvalidRef.value;
    });
    const mergedAttrSizeRef = computed(() => {
      return props.format.length + 4;
    });
    const amPmValueRef = computed(() => {
      const {
        value
      } = mergedValueRef;
      if (value === null) return null;
      return getHours(value) < 12 ? "am" : "pm";
    });
    function doUpdateFormattedValue(value, timestampValue) {
      const {
        onUpdateFormattedValue,
        "onUpdate:formattedValue": _onUpdateFormattedValue
      } = props;
      if (onUpdateFormattedValue) {
        call(onUpdateFormattedValue, value, timestampValue);
      }
      if (_onUpdateFormattedValue) {
        call(_onUpdateFormattedValue, value, timestampValue);
      }
    }
    function createFormattedValue(value) {
      return value === null ? null : mergedFormatRef.value(value, props.valueFormat || props.format);
    }
    function doUpdateValue(value) {
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue,
        onChange
      } = props;
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      const formattedValue = createFormattedValue(value);
      if (onUpdateValue) {
        call(onUpdateValue, value, formattedValue);
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value, formattedValue);
      }
      if (onChange) call(onChange, value, formattedValue);
      doUpdateFormattedValue(formattedValue, value);
      uncontrolledValueRef.value = value;
      nTriggerFormChange();
      nTriggerFormInput();
    }
    function doFocus(e) {
      const {
        onFocus
      } = props;
      const {
        nTriggerFormFocus
      } = formItem;
      if (onFocus) call(onFocus, e);
      nTriggerFormFocus();
    }
    function doBlur(e) {
      const {
        onBlur
      } = props;
      const {
        nTriggerFormBlur
      } = formItem;
      if (onBlur) call(onBlur, e);
      nTriggerFormBlur();
    }
    function doConfirm() {
      const {
        onConfirm
      } = props;
      if (onConfirm) {
        call(onConfirm, mergedValueRef.value, createFormattedValue(mergedValueRef.value));
      }
    }
    function handleTimeInputClear(e) {
      var _a;
      e.stopPropagation();
      doUpdateValue(null);
      deriveInputValue(null);
      (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    function handleFocusDetectorFocus() {
      closePanel({
        returnFocus: true
      });
    }
    function clearSelectedValue() {
      doUpdateValue(null);
      deriveInputValue(null);
      closePanel({
        returnFocus: true
      });
    }
    function handleInputKeydown(e) {
      if (e.key === "Escape" && mergedShowRef.value) {
        markEventEffectPerformed(e);
      }
    }
    function handleMenuKeydown(e) {
      var _a;
      switch (e.key) {
        case "Escape":
          if (mergedShowRef.value) {
            markEventEffectPerformed(e);
            closePanel({
              returnFocus: true
            });
          }
          break;
        case "Tab":
          if (keyboardState.shift && e.target === ((_a = panelInstRef.value) === null || _a === void 0 ? void 0 : _a.$el)) {
            e.preventDefault();
            closePanel({
              returnFocus: true
            });
          }
          break;
      }
    }
    function disableTransitionOneTick() {
      transitionDisabledRef.value = true;
      void nextTick(() => {
        transitionDisabledRef.value = false;
      });
    }
    function handleTriggerClick(e) {
      if (mergedDisabledRef.value || happensIn(e, "clear")) return;
      if (!mergedShowRef.value) {
        openPanel();
      }
    }
    function handleHourClick(hour) {
      if (typeof hour === "string") return;
      if (mergedValueRef.value === null) {
        doUpdateValue(getTime(setHours(startOfHour(/* @__PURE__ */ new Date()), hour)));
      } else {
        doUpdateValue(getTime(setHours(mergedValueRef.value, hour)));
      }
    }
    function handleMinuteClick(minute) {
      if (typeof minute === "string") return;
      if (mergedValueRef.value === null) {
        doUpdateValue(getTime(setMinutes(startOfMinute(/* @__PURE__ */ new Date()), minute)));
      } else {
        doUpdateValue(getTime(setMinutes(mergedValueRef.value, minute)));
      }
    }
    function handleSecondClick(second) {
      if (typeof second === "string") return;
      if (mergedValueRef.value === null) {
        doUpdateValue(getTime(setSeconds(startOfSecond(/* @__PURE__ */ new Date()), second)));
      } else {
        doUpdateValue(getTime(setSeconds(mergedValueRef.value, second)));
      }
    }
    function handleAmPmClick(amPm) {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (mergedValue === null) {
        const now = /* @__PURE__ */ new Date();
        const hours = getHours(now);
        if (amPm === "pm" && hours < 12) {
          doUpdateValue(getTime(setHours(now, hours + 12)));
        } else if (amPm === "am" && hours >= 12) {
          doUpdateValue(getTime(setHours(now, hours - 12)));
        }
        doUpdateValue(getTime(now));
      } else {
        const hours = getHours(mergedValue);
        if (amPm === "pm" && hours < 12) {
          doUpdateValue(getTime(setHours(mergedValue, hours + 12)));
        } else if (amPm === "am" && hours >= 12) {
          doUpdateValue(getTime(setHours(mergedValue, hours - 12)));
        }
      }
    }
    function deriveInputValue(time2) {
      if (time2 === void 0) time2 = mergedValueRef.value;
      if (time2 === null) {
        displayTimeStringRef.value = "";
      } else {
        displayTimeStringRef.value = mergedFormatRef.value(time2, props.format, dateFnsOptionsRef.value);
      }
    }
    function handleTimeInputFocus(e) {
      if (isInternalFocusSwitch(e)) return;
      doFocus(e);
    }
    function handleTimeInputBlur(e) {
      var _a;
      if (isInternalFocusSwitch(e)) return;
      if (mergedShowRef.value) {
        const panelEl = (_a = panelInstRef.value) === null || _a === void 0 ? void 0 : _a.$el;
        if (!(panelEl === null || panelEl === void 0 ? void 0 : panelEl.contains(e.relatedTarget))) {
          deriveInputValue();
          doBlur(e);
          closePanel({
            returnFocus: false
          });
        }
      } else {
        deriveInputValue();
        doBlur(e);
      }
    }
    function handleTimeInputActivate() {
      if (mergedDisabledRef.value) return;
      if (!mergedShowRef.value) {
        openPanel();
      }
    }
    function handleTimeInputDeactivate() {
      if (mergedDisabledRef.value) return;
      deriveInputValue();
      closePanel({
        returnFocus: false
      });
    }
    function scrollTimer() {
      if (!panelInstRef.value) return;
      const {
        hourScrollRef,
        minuteScrollRef,
        secondScrollRef,
        amPmScrollRef
      } = panelInstRef.value;
      [hourScrollRef, minuteScrollRef, secondScrollRef, amPmScrollRef].forEach((itemScrollRef) => {
        var _a;
        if (!itemScrollRef) return;
        const activeItemEl = (_a = itemScrollRef.contentRef) === null || _a === void 0 ? void 0 : _a.querySelector("[data-active]");
        if (activeItemEl) {
          itemScrollRef.scrollTo({
            top: activeItemEl.offsetTop
          });
        }
      });
    }
    function doUpdateShow(value) {
      uncontrolledShowRef.value = value;
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow
      } = props;
      if (onUpdateShow) call(onUpdateShow, value);
      if (_onUpdateShow) call(_onUpdateShow, value);
    }
    function isInternalFocusSwitch(e) {
      var _a, _b, _c;
      return !!(((_b = (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef) === null || _b === void 0 ? void 0 : _b.contains(e.relatedTarget)) || ((_c = panelInstRef.value) === null || _c === void 0 ? void 0 : _c.$el.contains(e.relatedTarget)));
    }
    function openPanel() {
      memorizedValueRef.value = mergedValueRef.value;
      doUpdateShow(true);
      void nextTick(scrollTimer);
    }
    function handleClickOutside(e) {
      var _a, _b;
      if (mergedShowRef.value && !((_b = (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef) === null || _b === void 0 ? void 0 : _b.contains(getPreciseEventTarget(e)))) {
        closePanel({
          returnFocus: false
        });
      }
    }
    function closePanel({
      returnFocus
    }) {
      var _a;
      if (mergedShowRef.value) {
        doUpdateShow(false);
        if (returnFocus) {
          (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        }
      }
    }
    function handleTimeInputUpdateValue(v) {
      if (v === "") {
        doUpdateValue(null);
        return;
      }
      const time2 = strictParse(v, props.format, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value);
      displayTimeStringRef.value = v;
      if (isValid(time2)) {
        const {
          value: mergedValue
        } = mergedValueRef;
        if (mergedValue !== null) {
          const newTime = set(mergedValue, {
            hours: getHours(time2),
            minutes: getMinutes(time2),
            seconds: getSeconds(time2),
            milliseconds: getMilliseconds(time2)
          });
          doUpdateValue(getTime(newTime));
        } else {
          doUpdateValue(getTime(time2));
        }
      }
    }
    function handleCancelClick() {
      doUpdateValue(memorizedValueRef.value);
      doUpdateShow(false);
    }
    function handleNowClick() {
      const now = /* @__PURE__ */ new Date();
      const getNowTime = {
        hours: getHours,
        minutes: getMinutes,
        seconds: getSeconds
      };
      const [mergeHours, mergeMinutes, mergeSeconds] = ["hours", "minutes", "seconds"].map((i) => !props[i] || isTimeInStep(getNowTime[i](now), i, props[i]) ? getNowTime[i](now) : findSimilarTime(getNowTime[i](now), i, props[i]));
      const newValue = setSeconds(setMinutes(setHours(mergedValueRef.value ? mergedValueRef.value : getTime(now), mergeHours), mergeMinutes), mergeSeconds);
      doUpdateValue(getTime(newValue));
    }
    function handleConfirmClick() {
      deriveInputValue();
      doConfirm();
      closePanel({
        returnFocus: true
      });
    }
    function handleMenuFocusOut(e) {
      if (isInternalFocusSwitch(e)) return;
      deriveInputValue();
      doBlur(e);
      closePanel({
        returnFocus: false
      });
    }
    watch(mergedValueRef, (value) => {
      deriveInputValue(value);
      disableTransitionOneTick();
      void nextTick(scrollTimer);
    });
    watch(mergedShowRef, () => {
      if (isValueInvalidRef.value) {
        doUpdateValue(memorizedValueRef.value);
      }
    });
    provide(timePickerInjectionKey, {
      mergedThemeRef: themeRef,
      mergedClsPrefixRef
    });
    const exposedMethods = {
      focus: () => {
        var _a;
        (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: () => {
        var _a;
        (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
    const triggerCssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: {
          iconColor,
          iconColorDisabled
        }
      } = themeRef.value;
      return {
        "--n-icon-color-override": iconColor,
        "--n-icon-color-disabled-override": iconColorDisabled,
        "--n-bezier": cubicBezierEaseInOut2
      };
    });
    const triggerThemeClassHandle = inlineThemeDisabled ? useThemeClass("time-picker-trigger", void 0, triggerCssVarsRef, props) : void 0;
    const cssVarsRef = computed(() => {
      const {
        self: {
          panelColor,
          itemTextColor,
          itemTextColorActive,
          itemColorHover,
          panelDividerColor,
          panelBoxShadow,
          itemOpacityDisabled,
          borderRadius,
          itemFontSize,
          itemWidth,
          itemHeight,
          panelActionPadding,
          itemBorderRadius
        },
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-border-radius": borderRadius,
        "--n-item-color-hover": itemColorHover,
        "--n-item-font-size": itemFontSize,
        "--n-item-height": itemHeight,
        "--n-item-opacity-disabled": itemOpacityDisabled,
        "--n-item-text-color": itemTextColor,
        "--n-item-text-color-active": itemTextColorActive,
        "--n-item-width": itemWidth,
        "--n-panel-action-padding": panelActionPadding,
        "--n-panel-box-shadow": panelBoxShadow,
        "--n-panel-color": panelColor,
        "--n-panel-divider-color": panelDividerColor,
        "--n-item-border-radius": itemBorderRadius
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("time-picker", void 0, cssVarsRef, props) : void 0;
    return {
      focus: exposedMethods.focus,
      blur: exposedMethods.blur,
      mergedStatus: mergedStatusRef,
      mergedBordered: mergedBorderedRef,
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      isMounted: isMounted(),
      inputInstRef,
      panelInstRef,
      adjustedTo: useAdjustedTo(props),
      mergedShow: mergedShowRef,
      localizedClear: localizedClearRef,
      localizedNow: localizedNowRef,
      localizedPlaceholder: localizedPlaceholderRef,
      localizedNegativeText: localizedNegativeTextRef,
      localizedPositiveText: localizedPositiveTextRef,
      hourInFormat: hourInFormatRef,
      minuteInFormat: minuteInFormatRef,
      secondInFormat: secondInFormatRef,
      mergedAttrSize: mergedAttrSizeRef,
      displayTimeString: displayTimeStringRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      isValueInvalid: isValueInvalidRef,
      isHourInvalid: isHourInvalidRef,
      isMinuteInvalid: isMinuteInvalidRef,
      isSecondInvalid: isSecondInvalidRef,
      transitionDisabled: transitionDisabledRef,
      hourValue: hourValueRef,
      minuteValue: minuteValueRef,
      secondValue: secondValueRef,
      amPmValue: amPmValueRef,
      handleInputKeydown,
      handleTimeInputFocus,
      handleTimeInputBlur,
      handleNowClick,
      handleConfirmClick,
      handleTimeInputUpdateValue,
      handleMenuFocusOut,
      handleCancelClick,
      handleClickOutside,
      handleTimeInputActivate,
      handleTimeInputDeactivate,
      handleHourClick,
      handleMinuteClick,
      handleSecondClick,
      handleAmPmClick,
      handleTimeInputClear,
      handleFocusDetectorFocus,
      handleMenuKeydown,
      handleTriggerClick,
      mergedTheme: themeRef,
      triggerCssVars: inlineThemeDisabled ? void 0 : triggerCssVarsRef,
      triggerThemeClass: triggerThemeClassHandle === null || triggerThemeClassHandle === void 0 ? void 0 : triggerThemeClassHandle.themeClass,
      triggerOnRender: triggerThemeClassHandle === null || triggerThemeClassHandle === void 0 ? void 0 : triggerThemeClassHandle.onRender,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      clearSelectedValue
    };
  },
  render() {
    const {
      mergedClsPrefix,
      $slots,
      triggerOnRender
    } = this;
    triggerOnRender === null || triggerOnRender === void 0 ? void 0 : triggerOnRender();
    return h("div", {
      class: [`${mergedClsPrefix}-time-picker`, this.triggerThemeClass],
      style: this.triggerCssVars
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => h(__unplugin_components_2$2, {
          ref: "inputInstRef",
          status: this.mergedStatus,
          value: this.displayTimeString,
          bordered: this.mergedBordered,
          passivelyActivated: true,
          attrSize: this.mergedAttrSize,
          theme: this.mergedTheme.peers.Input,
          themeOverrides: this.mergedTheme.peerOverrides.Input,
          stateful: this.stateful,
          size: this.mergedSize,
          placeholder: this.localizedPlaceholder,
          clearable: this.clearable,
          disabled: this.mergedDisabled,
          textDecoration: this.isValueInvalid ? "line-through" : void 0,
          onFocus: this.handleTimeInputFocus,
          onBlur: this.handleTimeInputBlur,
          onActivate: this.handleTimeInputActivate,
          onDeactivate: this.handleTimeInputDeactivate,
          onUpdateValue: this.handleTimeInputUpdateValue,
          onClear: this.handleTimeInputClear,
          internalDeactivateOnEnter: true,
          internalForceFocus: this.mergedShow,
          readonly: this.inputReadonly || this.mergedDisabled,
          onClick: this.handleTriggerClick,
          onKeydown: this.handleInputKeydown
        }, this.showIcon ? {
          [this.clearable ? "clear-icon-placeholder" : "suffix"]: () => h(NBaseIcon, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-time-picker-icon`
          }, {
            default: () => $slots.icon ? $slots.icon() : h(TimeIcon, null)
          })
        } : null)
      }), h(VFollower, {
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        show: this.mergedShow,
        to: this.adjustedTo,
        containerClass: this.namespace,
        placement: this.placement
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => {
            var _a;
            if (this.mergedShow) {
              (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
              return withDirectives(h(Panel, {
                ref: "panelInstRef",
                actions: this.actions,
                class: this.themeClass,
                style: this.cssVars,
                seconds: this.seconds,
                minutes: this.minutes,
                hours: this.hours,
                transitionDisabled: this.transitionDisabled,
                hourValue: this.hourValue,
                showHour: this.hourInFormat,
                isHourInvalid: this.isHourInvalid,
                isHourDisabled: this.isHourDisabled,
                minuteValue: this.minuteValue,
                showMinute: this.minuteInFormat,
                isMinuteInvalid: this.isMinuteInvalid,
                isMinuteDisabled: this.isMinuteDisabled,
                secondValue: this.secondValue,
                amPmValue: this.amPmValue,
                showSecond: this.secondInFormat,
                isSecondInvalid: this.isSecondInvalid,
                isSecondDisabled: this.isSecondDisabled,
                isValueInvalid: this.isValueInvalid,
                clearText: this.localizedClear,
                nowText: this.localizedNow,
                confirmText: this.localizedPositiveText,
                use12Hours: this.use12Hours,
                onFocusout: this.handleMenuFocusOut,
                onKeydown: this.handleMenuKeydown,
                onHourClick: this.handleHourClick,
                onMinuteClick: this.handleMinuteClick,
                onSecondClick: this.handleSecondClick,
                onAmPmClick: this.handleAmPmClick,
                onNowClick: this.handleNowClick,
                onConfirmClick: this.handleConfirmClick,
                onClearClick: this.clearSelectedValue,
                onFocusDetectorFocus: this.handleFocusDetectorFocus
              }), [[clickoutside, this.handleClickOutside, void 0, {
                capture: true
              }]]);
            }
            return null;
          }
        })
      })]
    }));
  }
});
const layoutSiderInjectionKey = createInjectionKey("n-layout-sider");
const positionProp = {
  type: String,
  default: "static"
};
const style$4 = cB("layout", `
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`, [cB("layout-scroll-container", `
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `), cM("absolute-positioned", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);
const layoutProps = {
  embedded: Boolean,
  position: positionProp,
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  scrollbarProps: Object,
  onScroll: Function,
  contentClass: String,
  contentStyle: {
    type: [String, Object],
    default: ""
  },
  hasSider: Boolean,
  siderPlacement: {
    type: String,
    default: "left"
  }
};
const layoutInjectionKey = createInjectionKey("n-layout");
function createLayoutComponent(isContent) {
  return defineComponent({
    name: "Layout",
    props: Object.assign(Object.assign({}, useTheme.props), layoutProps),
    setup(props) {
      const scrollableElRef = ref(null);
      const scrollbarInstRef = ref(null);
      const {
        mergedClsPrefixRef,
        inlineThemeDisabled
      } = useConfig(props);
      const themeRef = useTheme("Layout", "-layout", style$4, layoutLight, props, mergedClsPrefixRef);
      function scrollTo(options, y) {
        if (props.nativeScrollbar) {
          const {
            value: scrollableEl
          } = scrollableElRef;
          if (scrollableEl) {
            if (y === void 0) {
              scrollableEl.scrollTo(options);
            } else {
              scrollableEl.scrollTo(options, y);
            }
          }
        } else {
          const {
            value: scrollbarInst
          } = scrollbarInstRef;
          if (scrollbarInst) {
            scrollbarInst.scrollTo(options, y);
          }
        }
      }
      provide(layoutInjectionKey, props);
      let scrollX = 0;
      let scrollY = 0;
      const handleNativeElScroll = (e) => {
        var _a;
        const target = e.target;
        scrollX = target.scrollLeft;
        scrollY = target.scrollTop;
        (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
      };
      useReactivated(() => {
        if (props.nativeScrollbar) {
          const el = scrollableElRef.value;
          if (el) {
            el.scrollTop = scrollY;
            el.scrollLeft = scrollX;
          }
        }
      });
      const hasSiderStyle = {
        display: "flex",
        flexWrap: "nowrap",
        width: "100%",
        flexDirection: "row"
      };
      const exposedMethods = {
        scrollTo
      };
      const cssVarsRef = computed(() => {
        const {
          common: {
            cubicBezierEaseInOut: cubicBezierEaseInOut2
          },
          self: self2
        } = themeRef.value;
        return {
          "--n-bezier": cubicBezierEaseInOut2,
          "--n-color": props.embedded ? self2.colorEmbedded : self2.color,
          "--n-text-color": self2.textColor
        };
      });
      const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout", computed(() => {
        return props.embedded ? "e" : "";
      }), cssVarsRef, props) : void 0;
      return Object.assign({
        mergedClsPrefix: mergedClsPrefixRef,
        scrollableElRef,
        scrollbarInstRef,
        hasSiderStyle,
        mergedTheme: themeRef,
        handleNativeElScroll,
        cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
        themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
        onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
      }, exposedMethods);
    },
    render() {
      var _a;
      const {
        mergedClsPrefix,
        hasSider
      } = this;
      (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
      const hasSiderStyle = hasSider ? this.hasSiderStyle : void 0;
      const layoutClass = [this.themeClass, isContent, `${mergedClsPrefix}-layout`, `${mergedClsPrefix}-layout--${this.position}-positioned`];
      return h("div", {
        class: layoutClass,
        style: this.cssVars
      }, this.nativeScrollbar ? h("div", {
        ref: "scrollableElRef",
        class: [`${mergedClsPrefix}-layout-scroll-container`, this.contentClass],
        style: [this.contentStyle, hasSiderStyle],
        onScroll: this.handleNativeElScroll
      }, this.$slots) : h(Scrollbar, Object.assign({}, this.scrollbarProps, {
        onScroll: this.onScroll,
        ref: "scrollbarInstRef",
        theme: this.mergedTheme.peers.Scrollbar,
        themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
        contentClass: this.contentClass,
        contentStyle: [this.contentStyle, hasSiderStyle]
      }), this.$slots));
    }
  });
}
const __unplugin_components_3 = createLayoutComponent(false);
const style$3 = cB("layout-footer", `
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`, [cM("absolute-positioned", `
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `), cM("bordered", `
 border-top: solid 1px var(--n-border-color);
 `)]);
const layoutFooterProps = Object.assign(Object.assign({}, useTheme.props), {
  inverted: Boolean,
  position: positionProp,
  bordered: Boolean
});
const __unplugin_components_1 = defineComponent({
  name: "LayoutFooter",
  props: layoutFooterProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Layout", "-layout-footer", style$3, layoutLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: self2
      } = themeRef.value;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut2
      };
      if (props.inverted) {
        vars["--n-color"] = self2.footerColorInverted;
        vars["--n-text-color"] = self2.textColorInverted;
        vars["--n-border-color"] = self2.footerBorderColorInverted;
      } else {
        vars["--n-color"] = self2.footerColor;
        vars["--n-text-color"] = self2.textColor;
        vars["--n-border-color"] = self2.footerBorderColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout-footer", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
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
      class: [`${mergedClsPrefix}-layout-footer`, this.themeClass, this.position && `${mergedClsPrefix}-layout-footer--${this.position}-positioned`, this.bordered && `${mergedClsPrefix}-layout-footer--bordered`],
      style: this.cssVars
    }, this.$slots);
  }
});
const style$2 = cB("layout-sider", `
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`, [cM("bordered", [cE("border", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]), cE("left-placement", [cM("bordered", [cE("border", `
 right: 0;
 `)])]), cM("right-placement", `
 justify-content: flex-start;
 `, [cM("bordered", [cE("border", `
 left: 0;
 `)]), cM("collapsed", [cB("layout-toggle-button", [cB("base-icon", `
 transform: rotate(180deg);
 `)]), cB("layout-toggle-bar", [c("&:hover", [cE("top", {
  transform: "rotate(-12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(12deg) scale(1.15) translateY(2px)"
})])])]), cB("layout-toggle-button", `
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `, [cB("base-icon", `
 transform: rotate(0);
 `)]), cB("layout-toggle-bar", `
 left: -28px;
 transform: rotate(180deg);
 `, [c("&:hover", [cE("top", {
  transform: "rotate(12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(-12deg) scale(1.15) translateY(2px)"
})])])]), cM("collapsed", [cB("layout-toggle-bar", [c("&:hover", [cE("top", {
  transform: "rotate(-12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(12deg) scale(1.15) translateY(2px)"
})])]), cB("layout-toggle-button", [cB("base-icon", `
 transform: rotate(0);
 `)])]), cB("layout-toggle-button", `
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `, [cB("base-icon", `
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]), cB("layout-toggle-bar", `
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `, [cE("top, bottom", `
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `), cE("bottom", `
 position: absolute;
 top: 34px;
 `), c("&:hover", [cE("top", {
  transform: "rotate(12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(-12deg) scale(1.15) translateY(2px)"
})]), cE("top, bottom", {
  backgroundColor: "var(--n-toggle-bar-color)"
}), c("&:hover", [cE("top, bottom", {
  backgroundColor: "var(--n-toggle-bar-color-hover)"
})])]), cE("border", `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `), cB("layout-sider-scroll-container", `
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `), cM("show-content", [cB("layout-sider-scroll-container", {
  opacity: 1
})]), cM("absolute-positioned", `
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]);
const ToggleBar = defineComponent({
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      onClick: this.onClick,
      class: `${clsPrefix}-layout-toggle-bar`
    }, h("div", {
      class: `${clsPrefix}-layout-toggle-bar__top`
    }), h("div", {
      class: `${clsPrefix}-layout-toggle-bar__bottom`
    }));
  }
});
const ToggleButton = defineComponent({
  name: "LayoutToggleButton",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-layout-toggle-button`,
      onClick: this.onClick
    }, h(NBaseIcon, {
      clsPrefix
    }, {
      default: () => h(ChevronRightIcon, null)
    }));
  }
});
const layoutSiderProps = {
  position: positionProp,
  bordered: Boolean,
  collapsedWidth: {
    type: Number,
    default: 48
  },
  width: {
    type: [Number, String],
    default: 272
  },
  contentClass: String,
  contentStyle: {
    type: [String, Object],
    default: ""
  },
  collapseMode: {
    type: String,
    default: "transform"
  },
  collapsed: {
    type: Boolean,
    default: void 0
  },
  defaultCollapsed: Boolean,
  showCollapsedContent: {
    type: Boolean,
    default: true
  },
  showTrigger: {
    type: [Boolean, String],
    default: false
  },
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  inverted: Boolean,
  scrollbarProps: Object,
  triggerClass: String,
  triggerStyle: [String, Object],
  collapsedTriggerClass: String,
  collapsedTriggerStyle: [String, Object],
  "onUpdate:collapsed": [Function, Array],
  onUpdateCollapsed: [Function, Array],
  onAfterEnter: Function,
  onAfterLeave: Function,
  // deprecated
  onExpand: [Function, Array],
  onCollapse: [Function, Array],
  onScroll: Function
};
const __unplugin_components_2 = defineComponent({
  name: "LayoutSider",
  props: Object.assign(Object.assign({}, useTheme.props), layoutSiderProps),
  setup(props) {
    const layoutProps2 = inject(layoutInjectionKey);
    const scrollableElRef = ref(null);
    const scrollbarInstRef = ref(null);
    const uncontrolledCollapsedRef = ref(props.defaultCollapsed);
    const mergedCollapsedRef = useMergedState(toRef(props, "collapsed"), uncontrolledCollapsedRef);
    const styleMaxWidthRef = computed(() => {
      return formatLength(mergedCollapsedRef.value ? props.collapsedWidth : props.width);
    });
    const scrollContainerStyleRef = computed(() => {
      if (props.collapseMode !== "transform") return {};
      return {
        minWidth: formatLength(props.width)
      };
    });
    const siderPlacementRef = computed(() => {
      return layoutProps2 ? layoutProps2.siderPlacement : "left";
    });
    function scrollTo(options, y) {
      if (props.nativeScrollbar) {
        const {
          value: scrollableEl
        } = scrollableElRef;
        if (scrollableEl) {
          if (y === void 0) {
            scrollableEl.scrollTo(options);
          } else {
            scrollableEl.scrollTo(options, y);
          }
        }
      } else {
        const {
          value: scrollbarInst
        } = scrollbarInstRef;
        if (scrollbarInst) {
          scrollbarInst.scrollTo(options, y);
        }
      }
    }
    function handleTriggerClick() {
      const {
        "onUpdate:collapsed": _onUpdateCollapsed,
        onUpdateCollapsed,
        // deprecated
        onExpand,
        onCollapse
      } = props;
      const {
        value: collapsed
      } = mergedCollapsedRef;
      if (onUpdateCollapsed) {
        call(onUpdateCollapsed, !collapsed);
      }
      if (_onUpdateCollapsed) {
        call(_onUpdateCollapsed, !collapsed);
      }
      uncontrolledCollapsedRef.value = !collapsed;
      if (collapsed) {
        if (onExpand) call(onExpand);
      } else {
        if (onCollapse) call(onCollapse);
      }
    }
    let scrollX = 0;
    let scrollY = 0;
    const handleNativeElScroll = (e) => {
      var _a;
      const target = e.target;
      scrollX = target.scrollLeft;
      scrollY = target.scrollTop;
      (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    useReactivated(() => {
      if (props.nativeScrollbar) {
        const el = scrollableElRef.value;
        if (el) {
          el.scrollTop = scrollY;
          el.scrollLeft = scrollX;
        }
      }
    });
    provide(layoutSiderInjectionKey, {
      collapsedRef: mergedCollapsedRef,
      collapseModeRef: toRef(props, "collapseMode")
    });
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Layout", "-layout-sider", style$2, layoutLight, props, mergedClsPrefixRef);
    function handleTransitionend(e) {
      var _a, _b;
      if (e.propertyName === "max-width") {
        if (mergedCollapsedRef.value) {
          (_a = props.onAfterLeave) === null || _a === void 0 ? void 0 : _a.call(props);
        } else {
          (_b = props.onAfterEnter) === null || _b === void 0 ? void 0 : _b.call(props);
        }
      }
    }
    const exposedMethods = {
      scrollTo
    };
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: self2
      } = themeRef.value;
      const {
        siderToggleButtonColor,
        siderToggleButtonBorder,
        siderToggleBarColor,
        siderToggleBarColorHover
      } = self2;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-toggle-button-color": siderToggleButtonColor,
        "--n-toggle-button-border": siderToggleButtonBorder,
        "--n-toggle-bar-color": siderToggleBarColor,
        "--n-toggle-bar-color-hover": siderToggleBarColorHover
      };
      if (props.inverted) {
        vars["--n-color"] = self2.siderColorInverted;
        vars["--n-text-color"] = self2.textColorInverted;
        vars["--n-border-color"] = self2.siderBorderColorInverted;
        vars["--n-toggle-button-icon-color"] = self2.siderToggleButtonIconColorInverted;
        vars.__invertScrollbar = self2.__invertScrollbar;
      } else {
        vars["--n-color"] = self2.siderColor;
        vars["--n-text-color"] = self2.textColor;
        vars["--n-border-color"] = self2.siderBorderColor;
        vars["--n-toggle-button-icon-color"] = self2.siderToggleButtonIconColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout-sider", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
    return Object.assign({
      scrollableElRef,
      scrollbarInstRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      styleMaxWidth: styleMaxWidthRef,
      mergedCollapsed: mergedCollapsedRef,
      scrollContainerStyle: scrollContainerStyleRef,
      siderPlacement: siderPlacementRef,
      handleNativeElScroll,
      handleTransitionend,
      handleTriggerClick,
      inlineThemeDisabled,
      cssVars: cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedMethods);
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      mergedCollapsed,
      showTrigger
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("aside", {
      class: [`${mergedClsPrefix}-layout-sider`, this.themeClass, `${mergedClsPrefix}-layout-sider--${this.position}-positioned`, `${mergedClsPrefix}-layout-sider--${this.siderPlacement}-placement`, this.bordered && `${mergedClsPrefix}-layout-sider--bordered`, mergedCollapsed && `${mergedClsPrefix}-layout-sider--collapsed`, (!mergedCollapsed || this.showCollapsedContent) && `${mergedClsPrefix}-layout-sider--show-content`],
      onTransitionend: this.handleTransitionend,
      style: [this.inlineThemeDisabled ? void 0 : this.cssVars, {
        maxWidth: this.styleMaxWidth,
        width: formatLength(this.width)
      }]
    }, !this.nativeScrollbar ? h(Scrollbar, Object.assign({}, this.scrollbarProps, {
      onScroll: this.onScroll,
      ref: "scrollbarInstRef",
      style: this.scrollContainerStyle,
      contentStyle: this.contentStyle,
      contentClass: this.contentClass,
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      // here is a hack, since in light theme the scrollbar color is dark,
      // we need to invert it in light color...
      builtinThemeOverrides: this.inverted && this.cssVars.__invertScrollbar === "true" ? {
        colorHover: "rgba(255, 255, 255, .4)",
        color: "rgba(255, 255, 255, .3)"
      } : void 0
    }), this.$slots) : h("div", {
      class: [`${mergedClsPrefix}-layout-sider-scroll-container`, this.contentClass],
      onScroll: this.handleNativeElScroll,
      style: [this.scrollContainerStyle, {
        overflow: "auto"
      }, this.contentStyle],
      ref: "scrollableElRef"
    }, this.$slots), showTrigger ? showTrigger === "bar" ? h(ToggleBar, {
      clsPrefix: mergedClsPrefix,
      class: mergedCollapsed ? this.collapsedTriggerClass : this.triggerClass,
      style: mergedCollapsed ? this.collapsedTriggerStyle : this.triggerStyle,
      onClick: this.handleTriggerClick
    }) : h(ToggleButton, {
      clsPrefix: mergedClsPrefix,
      class: mergedCollapsed ? this.collapsedTriggerClass : this.triggerClass,
      style: mergedCollapsed ? this.collapsedTriggerStyle : this.triggerStyle,
      onClick: this.handleTriggerClick
    }) : null, this.bordered ? h("div", {
      class: `${mergedClsPrefix}-layout-sider__border`
    }) : null);
  }
});
const logInjectionKey = createInjectionKey("n-log");
const NLogLine = defineComponent({
  props: {
    line: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const {
      trimRef,
      highlightRef,
      languageRef,
      mergedHljsRef
    } = inject(logInjectionKey);
    const selfRef = ref(null);
    const maybeTrimmedLinesRef = computed(() => {
      return trimRef.value ? props.line.trim() : props.line;
    });
    function setInnerHTML() {
      if (selfRef.value) {
        selfRef.value.innerHTML = generateCodeHTML(languageRef.value, maybeTrimmedLinesRef.value);
      }
    }
    function generateCodeHTML(language, code) {
      const {
        value: hljs
      } = mergedHljsRef;
      if (hljs) {
        if (language && hljs.getLanguage(language)) {
          return hljs.highlight(code, {
            language
          }).value;
        }
      }
      return code;
    }
    onMounted(() => {
      if (highlightRef.value) {
        setInnerHTML();
      }
    });
    watch(toRef(props, "line"), () => {
      if (highlightRef.value) {
        setInnerHTML();
      }
    });
    return {
      highlight: highlightRef,
      selfRef,
      maybeTrimmedLines: maybeTrimmedLinesRef
    };
  },
  render() {
    const {
      highlight,
      maybeTrimmedLines
    } = this;
    return h("pre", {
      ref: "selfRef"
    }, highlight ? null : maybeTrimmedLines);
  }
});
const NLogLoader = defineComponent({
  name: "LogLoader",
  props: {
    clsPrefix: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      locale: useLocale("Log").localeRef
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-log-loader`
    }, h(NBaseLoading, {
      clsPrefix,
      strokeWidth: 24,
      scale: 0.85
    }), h("span", {
      class: `${clsPrefix}-log-loader__content`
    }, this.locale.loading));
  }
});
const style$1 = cB("log", `
 position: relative;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
`, [c("pre", `
 white-space: pre-wrap;
 word-break: break-word;
 margin: 0;
 `), cB("log-loader", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 position: absolute;
 right: 16px;
 top: 8px;
 height: 34px;
 border-radius: 17px;
 line-height: 34px;
 white-space: nowrap;
 overflow: hidden;
 border: var(--n-loader-border);
 color: var(--n-loader-text-color);
 background-color: var(--n-loader-color);
 font-size: var(--n-loader-font-size);
 `, [fadeInScaleUpTransition(), cE("content", `
 display: inline-block;
 vertical-align: bottom;
 line-height: 34px;
 padding-left: 40px;
 padding-right: 20px;
 white-space: nowrap;
 `), cB("base-loading", `
 color: var(--n-loading-color);
 position: absolute;
 left: 12px;
 top: calc(50% - 10px);
 font-size: 20px;
 width: 20px;
 height: 20px;
 display: inline-block;
 `)])]);
const logProps = Object.assign(Object.assign({}, useTheme.props), {
  loading: Boolean,
  trim: Boolean,
  log: String,
  fontSize: {
    type: Number,
    default: 14
  },
  lines: {
    type: Array,
    default: () => []
  },
  lineHeight: {
    type: Number,
    default: 1.25
  },
  language: String,
  rows: {
    type: Number,
    default: 15
  },
  offsetTop: {
    type: Number,
    default: 0
  },
  offsetBottom: {
    type: Number,
    default: 0
  },
  hljs: Object,
  onReachTop: Function,
  onReachBottom: Function,
  onRequireMore: Function
});
const __unplugin_components_0$1 = defineComponent({
  name: "Log",
  props: logProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const silentRef = ref(false);
    const highlightRef = computed(() => {
      return props.language !== void 0;
    });
    const styleHeightRef = computed(() => {
      return `calc(${Math.round(props.rows * props.lineHeight * props.fontSize)}px)`;
    });
    const mergedLinesRef = computed(() => {
      const {
        log
      } = props;
      if (log) {
        return log.split("\n");
      }
      return props.lines;
    });
    const scrollbarRef = ref(null);
    const themeRef = useTheme("Log", "-log", style$1, logLight, props, mergedClsPrefixRef);
    function handleScroll(e) {
      const container = e.target;
      const content = container.firstElementChild;
      if (silentRef.value) {
        void nextTick(() => {
          silentRef.value = false;
        });
        return;
      }
      const containerHeight = container.offsetHeight;
      const containerScrollTop = container.scrollTop;
      const contentHeight = content.offsetHeight;
      const scrollTop = containerScrollTop;
      const scrollBottom = contentHeight - containerScrollTop - containerHeight;
      if (scrollTop <= props.offsetTop) {
        const {
          onReachTop,
          onRequireMore
        } = props;
        if (onRequireMore) onRequireMore("top");
        if (onReachTop) onReachTop();
      }
      if (scrollBottom <= props.offsetBottom) {
        const {
          onReachBottom,
          onRequireMore
        } = props;
        if (onRequireMore) onRequireMore("bottom");
        if (onReachBottom) onReachBottom();
      }
    }
    const handleWheel = throttle(_handleWheel, 300);
    function _handleWheel(e) {
      if (silentRef.value) {
        void nextTick(() => {
          silentRef.value = false;
        });
        return;
      }
      if (scrollbarRef.value) {
        const {
          containerRef,
          contentRef
        } = scrollbarRef.value;
        if (containerRef && contentRef) {
          const containerHeight = containerRef.offsetHeight;
          const containerScrollTop = containerRef.scrollTop;
          const contentHeight = contentRef.offsetHeight;
          const scrollTop = containerScrollTop;
          const scrollBottom = contentHeight - containerScrollTop - containerHeight;
          const deltaY = e.deltaY;
          if (scrollTop === 0 && deltaY < 0) {
            const {
              onRequireMore
            } = props;
            if (onRequireMore) onRequireMore("top");
          }
          if (scrollBottom <= 0 && deltaY > 0) {
            const {
              onRequireMore
            } = props;
            if (onRequireMore) onRequireMore("bottom");
          }
        }
      }
    }
    function scrollTo(options) {
      const {
        value: scrollbarInst
      } = scrollbarRef;
      if (!scrollbarInst) return;
      const {
        silent,
        top,
        position
      } = options;
      if (silent) {
        silentRef.value = true;
      }
      if (top !== void 0) {
        scrollbarInst.scrollTo({
          left: 0,
          top
        });
      } else if (position === "bottom" || position === "top") {
        scrollbarInst.scrollTo({
          position
        });
      }
    }
    function scrollToTop(silent = false) {
      warn("log", "`scrollToTop` is deprecated, please use `scrollTo({ position: 'top'})` instead.");
      scrollTo({
        position: "top",
        silent
      });
    }
    function scrollToBottom(silent = false) {
      warn("log", "`scrollToTop` is deprecated, please use `scrollTo({ position: 'bottom'})` instead.");
      scrollTo({
        position: "bottom",
        silent
      });
    }
    provide(logInjectionKey, {
      languageRef: toRef(props, "language"),
      mergedHljsRef: useHljs(props),
      trimRef: toRef(props, "trim"),
      highlightRef
    });
    const exportedMethods = {
      scrollTo
    };
    const cssVarsRef = computed(() => {
      const {
        self: {
          loaderFontSize,
          loaderTextColor,
          loaderColor,
          loaderBorder,
          loadingColor
        },
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-loader-font-size": loaderFontSize,
        "--n-loader-border": loaderBorder,
        "--n-loader-color": loaderColor,
        "--n-loader-text-color": loaderTextColor,
        "--n-loading-color": loadingColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("log", void 0, cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, exportedMethods), {
      mergedClsPrefix: mergedClsPrefixRef,
      scrollbarRef,
      mergedTheme: themeRef,
      styleHeight: styleHeightRef,
      mergedLines: mergedLinesRef,
      scrollToTop,
      scrollToBottom,
      handleWheel,
      handleScroll,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    const {
      mergedClsPrefix,
      mergedTheme,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [`${mergedClsPrefix}-log`, this.themeClass],
      style: [{
        lineHeight: this.lineHeight,
        height: this.styleHeight
      }, this.cssVars],
      onWheelPassive: this.handleWheel
    }, [h(Scrollbar, {
      ref: "scrollbarRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      onScroll: this.handleScroll
    }, {
      default: () => h(NCode, {
        internalNoHighlight: true,
        internalFontSize: this.fontSize,
        theme: mergedTheme.peers.Code,
        themeOverrides: mergedTheme.peerOverrides.Code
      }, {
        default: () => this.mergedLines.map((line, index) => {
          return h(NLogLine, {
            key: index,
            line
          });
        })
      })
    }), h(Transition, {
      name: "fade-in-scale-up-transition"
    }, {
      default: () => this.loading ? h(NLogLoader, {
        clsPrefix: mergedClsPrefix
      }) : null
    })]);
  }
});
const menuInjectionKey = createInjectionKey("n-menu");
const submenuInjectionKey = createInjectionKey("n-submenu");
const menuItemGroupInjectionKey = createInjectionKey("n-menu-item-group");
const hoverStyleChildren = [c("&::before", "background-color: var(--n-item-color-hover);"), cE("arrow", `
 color: var(--n-arrow-color-hover);
 `), cE("icon", `
 color: var(--n-item-icon-color-hover);
 `), cB("menu-item-content-header", `
 color: var(--n-item-text-color-hover);
 `, [c("a", `
 color: var(--n-item-text-color-hover);
 `), cE("extra", `
 color: var(--n-item-text-color-hover);
 `)])];
const horizontalHoverStyleChildren = [cE("icon", `
 color: var(--n-item-icon-color-hover-horizontal);
 `), cB("menu-item-content-header", `
 color: var(--n-item-text-color-hover-horizontal);
 `, [c("a", `
 color: var(--n-item-text-color-hover-horizontal);
 `), cE("extra", `
 color: var(--n-item-text-color-hover-horizontal);
 `)])];
const style = c([cB("menu", `
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `, [cM("horizontal", `
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `, [cB("submenu", "margin: 0;"), cB("menu-item", "margin: 0;"), cB("menu-item-content", `
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `, [c("&::before", "display: none;"), cM("selected", "border-bottom: 2px solid var(--n-border-color-horizontal)")]), cB("menu-item-content", [cM("selected", [cE("icon", "color: var(--n-item-icon-color-active-horizontal);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active-horizontal);
 `, [c("a", "color: var(--n-item-text-color-active-horizontal);"), cE("extra", "color: var(--n-item-text-color-active-horizontal);")])]), cM("child-active", `
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `, [cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-horizontal);
 `, [c("a", `
 color: var(--n-item-text-color-child-active-horizontal);
 `), cE("extra", `
 color: var(--n-item-text-color-child-active-horizontal);
 `)]), cE("icon", `
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]), cNotM("disabled", [cNotM("selected, child-active", [c("&:focus-within", horizontalHoverStyleChildren)]), cM("selected", [hoverStyle(null, [cE("icon", "color: var(--n-item-icon-color-active-hover-horizontal);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover-horizontal);
 `, [c("a", "color: var(--n-item-text-color-active-hover-horizontal);"), cE("extra", "color: var(--n-item-text-color-active-hover-horizontal);")])])]), cM("child-active", [hoverStyle(null, [cE("icon", "color: var(--n-item-icon-color-child-active-hover-horizontal);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `, [c("a", "color: var(--n-item-text-color-child-active-hover-horizontal);"), cE("extra", "color: var(--n-item-text-color-child-active-hover-horizontal);")])])]), hoverStyle("border-bottom: 2px solid var(--n-border-color-horizontal);", horizontalHoverStyleChildren)]), cB("menu-item-content-header", [c("a", "color: var(--n-item-text-color-horizontal);")])])]), cNotM("responsive", [cB("menu-item-content-header", `
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), cM("collapsed", [cB("menu-item-content", [cM("selected", [c("&::before", `
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]), cB("menu-item-content-header", "opacity: 0;"), cE("arrow", "opacity: 0;"), cE("icon", "color: var(--n-item-icon-color-collapsed);")])]), cB("menu-item", `
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `), cB("menu-item-content", `
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [c("> *", "z-index: 1;"), c("&::before", `
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), cM("disabled", `
 opacity: .45;
 cursor: not-allowed;
 `), cM("collapsed", [cE("arrow", "transform: rotate(0);")]), cM("selected", [c("&::before", "background-color: var(--n-item-color-active);"), cE("arrow", "color: var(--n-arrow-color-active);"), cE("icon", "color: var(--n-item-icon-color-active);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active);
 `, [c("a", "color: var(--n-item-text-color-active);"), cE("extra", "color: var(--n-item-text-color-active);")])]), cM("child-active", [cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active);
 `, [c("a", `
 color: var(--n-item-text-color-child-active);
 `), cE("extra", `
 color: var(--n-item-text-color-child-active);
 `)]), cE("arrow", `
 color: var(--n-arrow-color-child-active);
 `), cE("icon", `
 color: var(--n-item-icon-color-child-active);
 `)]), cNotM("disabled", [cNotM("selected, child-active", [c("&:focus-within", hoverStyleChildren)]), cM("selected", [hoverStyle(null, [cE("arrow", "color: var(--n-arrow-color-active-hover);"), cE("icon", "color: var(--n-item-icon-color-active-hover);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover);
 `, [c("a", "color: var(--n-item-text-color-active-hover);"), cE("extra", "color: var(--n-item-text-color-active-hover);")])])]), cM("child-active", [hoverStyle(null, [cE("arrow", "color: var(--n-arrow-color-child-active-hover);"), cE("icon", "color: var(--n-item-icon-color-child-active-hover);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover);
 `, [c("a", "color: var(--n-item-text-color-child-active-hover);"), cE("extra", "color: var(--n-item-text-color-child-active-hover);")])])]), cM("selected", [hoverStyle(null, [c("&::before", "background-color: var(--n-item-color-active-hover);")])]), hoverStyle(null, hoverStyleChildren)]), cE("icon", `
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `), cE("arrow", `
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `), cB("menu-item-content-header", `
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `, [c("a", `
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `, [c("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cE("extra", `
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]), cB("submenu", `
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `, [cB("menu-item-content", `
 height: var(--n-item-height);
 `), cB("submenu-children", `
 overflow: hidden;
 padding: 0;
 `, [fadeInHeightExpandTransition({
  duration: ".2s"
})])]), cB("menu-item-group", [cB("menu-item-group-title", `
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]), cB("menu-tooltip", [c("a", `
 color: inherit;
 text-decoration: none;
 `)]), cB("menu-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);
function hoverStyle(props, children) {
  return [cM("hover", props, children), c("&:hover", props, children)];
}
const NMenuOptionContent = defineComponent({
  name: "MenuOptionContent",
  props: {
    collapsed: Boolean,
    disabled: Boolean,
    title: [String, Function],
    icon: Function,
    extra: [String, Function],
    showArrow: Boolean,
    childActive: Boolean,
    hover: Boolean,
    paddingLeft: Number,
    selected: Boolean,
    maxIconSize: {
      type: Number,
      required: true
    },
    activeIconSize: {
      type: Number,
      required: true
    },
    iconMarginRight: {
      type: Number,
      required: true
    },
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function,
    tmNode: {
      type: Object,
      required: true
    },
    isEllipsisPlaceholder: Boolean
  },
  setup(props) {
    const {
      props: menuProps2
    } = inject(menuInjectionKey);
    return {
      menuProps: menuProps2,
      style: computed(() => {
        const {
          paddingLeft
        } = props;
        return {
          paddingLeft: paddingLeft && `${paddingLeft}px`
        };
      }),
      iconStyle: computed(() => {
        const {
          maxIconSize,
          activeIconSize,
          iconMarginRight
        } = props;
        return {
          width: `${maxIconSize}px`,
          height: `${maxIconSize}px`,
          fontSize: `${activeIconSize}px`,
          marginRight: `${iconMarginRight}px`
        };
      })
    };
  },
  render() {
    const {
      clsPrefix,
      tmNode,
      menuProps: {
        renderIcon,
        renderLabel,
        renderExtra,
        expandIcon
      }
    } = this;
    const icon = renderIcon ? renderIcon(tmNode.rawNode) : render(this.icon);
    return h("div", {
      onClick: (e) => {
        var _a;
        (_a = this.onClick) === null || _a === void 0 ? void 0 : _a.call(this, e);
      },
      role: "none",
      class: [`${clsPrefix}-menu-item-content`, {
        [`${clsPrefix}-menu-item-content--selected`]: this.selected,
        [`${clsPrefix}-menu-item-content--collapsed`]: this.collapsed,
        [`${clsPrefix}-menu-item-content--child-active`]: this.childActive,
        [`${clsPrefix}-menu-item-content--disabled`]: this.disabled,
        [`${clsPrefix}-menu-item-content--hover`]: this.hover
      }],
      style: this.style
    }, icon && h("div", {
      class: `${clsPrefix}-menu-item-content__icon`,
      style: this.iconStyle,
      role: "none"
    }, [icon]), h("div", {
      class: `${clsPrefix}-menu-item-content-header`,
      role: "none"
    }, this.isEllipsisPlaceholder ? this.title : renderLabel ? renderLabel(tmNode.rawNode) : render(this.title), this.extra || renderExtra ? h("span", {
      class: `${clsPrefix}-menu-item-content-header__extra`
    }, " ", renderExtra ? renderExtra(tmNode.rawNode) : render(this.extra)) : null), this.showArrow ? h(NBaseIcon, {
      ariaHidden: true,
      class: `${clsPrefix}-menu-item-content__arrow`,
      clsPrefix
    }, {
      default: () => expandIcon ? expandIcon(tmNode.rawNode) : h(ChevronDownFilledIcon, null)
    }) : null);
  }
});
const ICON_MARGIN_RIGHT = 8;
function useMenuChild(props) {
  const NMenu = inject(menuInjectionKey);
  const {
    props: menuProps2,
    mergedCollapsedRef
  } = NMenu;
  const NSubmenu2 = inject(submenuInjectionKey, null);
  const NMenuOptionGroup2 = inject(menuItemGroupInjectionKey, null);
  const horizontalRef = computed(() => {
    return menuProps2.mode === "horizontal";
  });
  const dropdownPlacementRef = computed(() => {
    if (horizontalRef.value) {
      return menuProps2.dropdownPlacement;
    }
    if ("tmNodes" in props) return "right-start";
    return "right";
  });
  const maxIconSizeRef = computed(() => {
    var _a;
    return Math.max((_a = menuProps2.collapsedIconSize) !== null && _a !== void 0 ? _a : menuProps2.iconSize, menuProps2.iconSize);
  });
  const activeIconSizeRef = computed(() => {
    var _a;
    if (!horizontalRef.value && props.root && mergedCollapsedRef.value) {
      return (_a = menuProps2.collapsedIconSize) !== null && _a !== void 0 ? _a : menuProps2.iconSize;
    } else {
      return menuProps2.iconSize;
    }
  });
  const paddingLeftRef = computed(() => {
    if (horizontalRef.value) return void 0;
    const {
      collapsedWidth,
      indent,
      rootIndent
    } = menuProps2;
    const {
      root,
      isGroup
    } = props;
    const mergedRootIndent = rootIndent === void 0 ? indent : rootIndent;
    if (root) {
      if (mergedCollapsedRef.value) {
        return collapsedWidth / 2 - maxIconSizeRef.value / 2;
      }
      return mergedRootIndent;
    }
    if (NMenuOptionGroup2 && typeof NMenuOptionGroup2.paddingLeftRef.value === "number") {
      return indent / 2 + NMenuOptionGroup2.paddingLeftRef.value;
    }
    if (NSubmenu2 && typeof NSubmenu2.paddingLeftRef.value === "number") {
      return (isGroup ? indent / 2 : indent) + NSubmenu2.paddingLeftRef.value;
    }
    return 0;
  });
  const iconMarginRightRef = computed(() => {
    const {
      collapsedWidth,
      indent,
      rootIndent
    } = menuProps2;
    const {
      value: maxIconSize
    } = maxIconSizeRef;
    const {
      root
    } = props;
    if (horizontalRef.value) return ICON_MARGIN_RIGHT;
    if (!root) return ICON_MARGIN_RIGHT;
    if (!mergedCollapsedRef.value) return ICON_MARGIN_RIGHT;
    const mergedRootIndent = rootIndent === void 0 ? indent : rootIndent;
    return mergedRootIndent + maxIconSize + ICON_MARGIN_RIGHT - (collapsedWidth + maxIconSize) / 2;
  });
  return {
    dropdownPlacement: dropdownPlacementRef,
    activeIconSize: activeIconSizeRef,
    maxIconSize: maxIconSizeRef,
    paddingLeft: paddingLeftRef,
    iconMarginRight: iconMarginRightRef,
    NMenu,
    NSubmenu: NSubmenu2
  };
}
const useMenuChildProps = {
  internalKey: {
    type: [String, Number],
    required: true
  },
  root: Boolean,
  isGroup: Boolean,
  level: {
    type: Number,
    required: true
  },
  title: [String, Function],
  extra: [String, Function]
};
const NMenuDivider = defineComponent({
  name: "MenuDivider",
  setup() {
    const NMenu = inject(menuInjectionKey);
    const {
      mergedClsPrefixRef,
      isHorizontalRef
    } = NMenu;
    return () => isHorizontalRef.value ? null : h("div", {
      class: `${mergedClsPrefixRef.value}-menu-divider`
    });
  }
});
const menuItemProps = Object.assign(Object.assign({}, useMenuChildProps), {
  tmNode: {
    type: Object,
    required: true
  },
  disabled: Boolean,
  icon: Function,
  onClick: Function
});
const menuItemPropKeys = keysOf(menuItemProps);
const NMenuOption = defineComponent({
  name: "MenuOption",
  props: menuItemProps,
  setup(props) {
    const MenuChild = useMenuChild(props);
    const {
      NSubmenu: NSubmenu2,
      NMenu
    } = MenuChild;
    const {
      props: menuProps2,
      mergedClsPrefixRef,
      mergedCollapsedRef
    } = NMenu;
    const submenuDisabledRef = NSubmenu2 ? NSubmenu2.mergedDisabledRef : {
      value: false
    };
    const mergedDisabledRef = computed(() => {
      return submenuDisabledRef.value || props.disabled;
    });
    function doClick(e) {
      const {
        onClick
      } = props;
      if (onClick) onClick(e);
    }
    function handleClick(e) {
      if (!mergedDisabledRef.value) {
        NMenu.doSelect(props.internalKey, props.tmNode.rawNode);
        doClick(e);
      }
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      dropdownPlacement: MenuChild.dropdownPlacement,
      paddingLeft: MenuChild.paddingLeft,
      iconMarginRight: MenuChild.iconMarginRight,
      maxIconSize: MenuChild.maxIconSize,
      activeIconSize: MenuChild.activeIconSize,
      mergedTheme: NMenu.mergedThemeRef,
      menuProps: menuProps2,
      dropdownEnabled: useMemo(() => {
        return props.root && mergedCollapsedRef.value && menuProps2.mode !== "horizontal" && !mergedDisabledRef.value;
      }),
      selected: useMemo(() => {
        if (NMenu.mergedValueRef.value === props.internalKey) return true;
        return false;
      }),
      mergedDisabled: mergedDisabledRef,
      handleClick
    };
  },
  render() {
    const {
      mergedClsPrefix,
      mergedTheme,
      tmNode,
      menuProps: {
        renderLabel,
        nodeProps
      }
    } = this;
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(tmNode.rawNode);
    return h("div", Object.assign({}, attrs, {
      role: "menuitem",
      class: [`${mergedClsPrefix}-menu-item`, attrs === null || attrs === void 0 ? void 0 : attrs.class]
    }), h(NTooltip, {
      theme: mergedTheme.peers.Tooltip,
      themeOverrides: mergedTheme.peerOverrides.Tooltip,
      trigger: "hover",
      placement: this.dropdownPlacement,
      disabled: !this.dropdownEnabled || this.title === void 0,
      internalExtraClass: ["menu-tooltip"]
    }, {
      default: () => renderLabel ? renderLabel(tmNode.rawNode) : render(this.title),
      trigger: () => h(NMenuOptionContent, {
        tmNode,
        clsPrefix: mergedClsPrefix,
        paddingLeft: this.paddingLeft,
        iconMarginRight: this.iconMarginRight,
        maxIconSize: this.maxIconSize,
        activeIconSize: this.activeIconSize,
        selected: this.selected,
        title: this.title,
        extra: this.extra,
        disabled: this.mergedDisabled,
        icon: this.icon,
        onClick: this.handleClick
      })
    }));
  }
});
const menuItemGroupProps = Object.assign(Object.assign({}, useMenuChildProps), {
  tmNode: {
    type: Object,
    required: true
  },
  tmNodes: {
    type: Array,
    required: true
  }
});
const menuItemGroupPropKeys = keysOf(menuItemGroupProps);
const NMenuOptionGroup = defineComponent({
  name: "MenuOptionGroup",
  props: menuItemGroupProps,
  setup(props) {
    provide(submenuInjectionKey, null);
    const MenuChild = useMenuChild(props);
    provide(menuItemGroupInjectionKey, {
      paddingLeftRef: MenuChild.paddingLeft
    });
    const {
      mergedClsPrefixRef,
      props: menuProps2
    } = inject(menuInjectionKey);
    return function() {
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      const paddingLeft = MenuChild.paddingLeft.value;
      const {
        nodeProps
      } = menuProps2;
      const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(props.tmNode.rawNode);
      return h("div", {
        class: `${mergedClsPrefix}-menu-item-group`,
        role: "group"
      }, h("div", Object.assign({}, attrs, {
        class: [`${mergedClsPrefix}-menu-item-group-title`, attrs === null || attrs === void 0 ? void 0 : attrs.class],
        style: [(attrs === null || attrs === void 0 ? void 0 : attrs.style) || "", paddingLeft !== void 0 ? `padding-left: ${paddingLeft}px;` : ""]
      }), render(props.title), props.extra ? h(Fragment, null, " ", render(props.extra)) : null), h("div", null, props.tmNodes.map((tmNode) => itemRenderer(tmNode, menuProps2))));
    };
  }
});
function isIgnoredNode(rawNode) {
  return rawNode.type === "divider" || rawNode.type === "render";
}
function isDividerNode(rawNode) {
  return rawNode.type === "divider";
}
function itemRenderer(tmNode, menuProps2) {
  const {
    rawNode
  } = tmNode;
  const {
    show
  } = rawNode;
  if (show === false) {
    return null;
  }
  if (isIgnoredNode(rawNode)) {
    if (isDividerNode(rawNode)) {
      return h(NMenuDivider, Object.assign({
        key: tmNode.key
      }, rawNode.props));
    }
    return null;
  }
  const {
    labelField
  } = menuProps2;
  const {
    key,
    level,
    isGroup
  } = tmNode;
  const props = Object.assign(Object.assign({}, rawNode), {
    title: rawNode.title || rawNode[labelField],
    extra: rawNode.titleExtra || rawNode.extra,
    key,
    internalKey: key,
    // since key can't be used as a prop
    level,
    root: level === 0,
    isGroup
  });
  if (tmNode.children) {
    if (tmNode.isGroup) {
      return h(NMenuOptionGroup, keep(props, menuItemGroupPropKeys, {
        tmNode,
        tmNodes: tmNode.children,
        key
      }));
    }
    return h(NSubmenu, keep(props, submenuPropKeys, {
      key,
      rawNodes: rawNode[menuProps2.childrenField],
      tmNodes: tmNode.children,
      tmNode
    }));
  } else {
    return h(NMenuOption, keep(props, menuItemPropKeys, {
      key,
      tmNode
    }));
  }
}
const submenuProps = Object.assign(Object.assign({}, useMenuChildProps), {
  rawNodes: {
    type: Array,
    default: () => []
  },
  tmNodes: {
    type: Array,
    default: () => []
  },
  tmNode: {
    type: Object,
    required: true
  },
  disabled: Boolean,
  icon: Function,
  onClick: Function,
  domId: String,
  virtualChildActive: {
    type: Boolean,
    default: void 0
  },
  isEllipsisPlaceholder: Boolean
});
const submenuPropKeys = keysOf(submenuProps);
const NSubmenu = defineComponent({
  name: "Submenu",
  props: submenuProps,
  setup(props) {
    const MenuChild = useMenuChild(props);
    const {
      NMenu,
      NSubmenu: NSubmenu2
    } = MenuChild;
    const {
      props: menuProps2,
      mergedCollapsedRef,
      mergedThemeRef
    } = NMenu;
    const mergedDisabledRef = computed(() => {
      const {
        disabled
      } = props;
      if (NSubmenu2 === null || NSubmenu2 === void 0 ? void 0 : NSubmenu2.mergedDisabledRef.value) return true;
      if (menuProps2.disabled) return true;
      return disabled;
    });
    const dropdownShowRef = ref(false);
    provide(submenuInjectionKey, {
      paddingLeftRef: MenuChild.paddingLeft,
      mergedDisabledRef
    });
    provide(menuItemGroupInjectionKey, null);
    function doClick() {
      const {
        onClick
      } = props;
      if (onClick) onClick();
    }
    function handleClick() {
      if (!mergedDisabledRef.value) {
        if (!mergedCollapsedRef.value) {
          NMenu.toggleExpand(props.internalKey);
        }
        doClick();
      }
    }
    function handlePopoverShowChange(value) {
      dropdownShowRef.value = value;
    }
    return {
      menuProps: menuProps2,
      mergedTheme: mergedThemeRef,
      doSelect: NMenu.doSelect,
      inverted: NMenu.invertedRef,
      isHorizontal: NMenu.isHorizontalRef,
      mergedClsPrefix: NMenu.mergedClsPrefixRef,
      maxIconSize: MenuChild.maxIconSize,
      activeIconSize: MenuChild.activeIconSize,
      iconMarginRight: MenuChild.iconMarginRight,
      dropdownPlacement: MenuChild.dropdownPlacement,
      dropdownShow: dropdownShowRef,
      paddingLeft: MenuChild.paddingLeft,
      mergedDisabled: mergedDisabledRef,
      mergedValue: NMenu.mergedValueRef,
      childActive: useMemo(() => {
        var _a;
        return (_a = props.virtualChildActive) !== null && _a !== void 0 ? _a : NMenu.activePathRef.value.includes(props.internalKey);
      }),
      collapsed: computed(() => {
        if (menuProps2.mode === "horizontal") return false;
        if (mergedCollapsedRef.value) {
          return true;
        }
        return !NMenu.mergedExpandedKeysRef.value.includes(props.internalKey);
      }),
      dropdownEnabled: computed(() => {
        return !mergedDisabledRef.value && (menuProps2.mode === "horizontal" || mergedCollapsedRef.value);
      }),
      handlePopoverShowChange,
      handleClick
    };
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      menuProps: {
        renderIcon,
        renderLabel
      }
    } = this;
    const createSubmenuItem = () => {
      const {
        isHorizontal,
        paddingLeft,
        collapsed,
        mergedDisabled,
        maxIconSize,
        activeIconSize,
        title,
        childActive,
        icon,
        handleClick,
        menuProps: {
          nodeProps
        },
        dropdownShow,
        iconMarginRight,
        tmNode,
        mergedClsPrefix: mergedClsPrefix2,
        isEllipsisPlaceholder,
        extra
      } = this;
      const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(tmNode.rawNode);
      return h("div", Object.assign({}, attrs, {
        class: [`${mergedClsPrefix2}-menu-item`, attrs === null || attrs === void 0 ? void 0 : attrs.class],
        role: "menuitem"
      }), h(NMenuOptionContent, {
        tmNode,
        paddingLeft,
        collapsed,
        disabled: mergedDisabled,
        iconMarginRight,
        maxIconSize,
        activeIconSize,
        title,
        extra,
        showArrow: !isHorizontal,
        childActive,
        clsPrefix: mergedClsPrefix2,
        icon,
        hover: dropdownShow,
        onClick: handleClick,
        isEllipsisPlaceholder
      }));
    };
    const createSubmenuChildren = () => {
      return h(NFadeInExpandTransition, null, {
        default: () => {
          const {
            tmNodes,
            collapsed
          } = this;
          return !collapsed ? h("div", {
            class: `${mergedClsPrefix}-submenu-children`,
            role: "menu"
          }, tmNodes.map((item) => itemRenderer(item, this.menuProps))) : null;
        }
      });
    };
    return this.root ? h(__unplugin_components_2$3, Object.assign({
      size: "large",
      trigger: "hover"
    }, (_a = this.menuProps) === null || _a === void 0 ? void 0 : _a.dropdownProps, {
      themeOverrides: this.mergedTheme.peerOverrides.Dropdown,
      theme: this.mergedTheme.peers.Dropdown,
      builtinThemeOverrides: {
        fontSizeLarge: "14px",
        optionIconSizeLarge: "18px"
      },
      value: this.mergedValue,
      disabled: !this.dropdownEnabled,
      placement: this.dropdownPlacement,
      keyField: this.menuProps.keyField,
      labelField: this.menuProps.labelField,
      childrenField: this.menuProps.childrenField,
      onUpdateShow: this.handlePopoverShowChange,
      options: this.rawNodes,
      onSelect: this.doSelect,
      inverted: this.inverted,
      renderIcon,
      renderLabel
    }), {
      default: () => h("div", {
        class: `${mergedClsPrefix}-submenu`,
        role: "menu",
        "aria-expanded": !this.collapsed,
        id: this.domId
      }, createSubmenuItem(), this.isHorizontal ? null : createSubmenuChildren())
    }) : h("div", {
      class: `${mergedClsPrefix}-submenu`,
      role: "menu",
      "aria-expanded": !this.collapsed,
      id: this.domId
    }, createSubmenuItem(), createSubmenuChildren());
  }
});
const menuProps = Object.assign(Object.assign({}, useTheme.props), {
  options: {
    type: Array,
    default: () => []
  },
  collapsed: {
    type: Boolean,
    default: void 0
  },
  collapsedWidth: {
    type: Number,
    default: 48
  },
  iconSize: {
    type: Number,
    default: 20
  },
  collapsedIconSize: {
    type: Number,
    default: 24
  },
  rootIndent: Number,
  indent: {
    type: Number,
    default: 32
  },
  labelField: {
    type: String,
    default: "label"
  },
  keyField: {
    type: String,
    default: "key"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  disabledField: {
    type: String,
    default: "disabled"
  },
  defaultExpandAll: Boolean,
  defaultExpandedKeys: Array,
  expandedKeys: Array,
  value: [String, Number],
  defaultValue: {
    type: [String, Number],
    default: null
  },
  mode: {
    type: String,
    default: "vertical"
  },
  watchProps: {
    type: Array,
    default: void 0
  },
  disabled: Boolean,
  show: {
    type: Boolean,
    default: true
  },
  inverted: Boolean,
  "onUpdate:expandedKeys": [Function, Array],
  onUpdateExpandedKeys: [Function, Array],
  onUpdateValue: [Function, Array],
  "onUpdate:value": [Function, Array],
  expandIcon: Function,
  renderIcon: Function,
  renderLabel: Function,
  renderExtra: Function,
  dropdownProps: Object,
  accordion: Boolean,
  nodeProps: Function,
  dropdownPlacement: {
    type: String,
    default: "bottom"
  },
  responsive: Boolean,
  // deprecated
  items: Array,
  onOpenNamesChange: [Function, Array],
  onSelect: [Function, Array],
  onExpandedNamesChange: [Function, Array],
  expandedNames: Array,
  defaultExpandedNames: Array
});
const __unplugin_components_0 = defineComponent({
  name: "Menu",
  inheritAttrs: false,
  props: menuProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Menu", "-menu", style, menuLight, props, mergedClsPrefixRef);
    const layoutSider = inject(layoutSiderInjectionKey, null);
    const mergedCollapsedRef = computed(() => {
      var _a;
      const {
        collapsed
      } = props;
      if (collapsed !== void 0) return collapsed;
      if (layoutSider) {
        const {
          collapseModeRef,
          collapsedRef
        } = layoutSider;
        if (collapseModeRef.value === "width") {
          return (_a = collapsedRef.value) !== null && _a !== void 0 ? _a : false;
        }
      }
      return false;
    });
    const treeMateRef = computed(() => {
      const {
        keyField,
        childrenField,
        disabledField
      } = props;
      return createTreeMate(props.items || props.options, {
        getIgnored(node) {
          return isIgnoredNode(node);
        },
        getChildren(node) {
          return node[childrenField];
        },
        getDisabled(node) {
          return node[disabledField];
        },
        getKey(node) {
          var _a;
          return (_a = node[keyField]) !== null && _a !== void 0 ? _a : node.name;
        }
      });
    });
    const treeKeysLevelOneRef = computed(() => new Set(treeMateRef.value.treeNodes.map((e) => e.key)));
    const {
      watchProps
    } = props;
    const uncontrolledValueRef = ref(null);
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultValue")) {
      watchEffect(() => {
        uncontrolledValueRef.value = props.defaultValue;
      });
    } else {
      uncontrolledValueRef.value = props.defaultValue;
    }
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const uncontrolledExpandedKeysRef = ref([]);
    const initUncontrolledExpandedKeys = () => {
      uncontrolledExpandedKeysRef.value = props.defaultExpandAll ? treeMateRef.value.getNonLeafKeys() : props.defaultExpandedNames || props.defaultExpandedKeys || treeMateRef.value.getPath(mergedValueRef.value, {
        includeSelf: false
      }).keyPath;
    };
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultExpandedKeys")) {
      watchEffect(initUncontrolledExpandedKeys);
    } else {
      initUncontrolledExpandedKeys();
    }
    const controlledExpandedKeysRef = useCompitable(props, ["expandedNames", "expandedKeys"]);
    const mergedExpandedKeysRef = useMergedState(controlledExpandedKeysRef, uncontrolledExpandedKeysRef);
    const tmNodesRef = computed(() => treeMateRef.value.treeNodes);
    const activePathRef = computed(() => {
      return treeMateRef.value.getPath(mergedValueRef.value).keyPath;
    });
    provide(menuInjectionKey, {
      props,
      mergedCollapsedRef,
      mergedThemeRef: themeRef,
      mergedValueRef,
      mergedExpandedKeysRef,
      activePathRef,
      mergedClsPrefixRef,
      isHorizontalRef: computed(() => props.mode === "horizontal"),
      invertedRef: toRef(props, "inverted"),
      doSelect,
      toggleExpand
    });
    function doSelect(value, item) {
      const {
        "onUpdate:value": _onUpdateValue,
        onUpdateValue,
        onSelect
      } = props;
      if (onUpdateValue) {
        call(onUpdateValue, value, item);
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value, item);
      }
      if (onSelect) {
        call(onSelect, value, item);
      }
      uncontrolledValueRef.value = value;
    }
    function doUpdateExpandedKeys(value) {
      const {
        "onUpdate:expandedKeys": _onUpdateExpandedKeys,
        onUpdateExpandedKeys,
        onExpandedNamesChange,
        onOpenNamesChange
      } = props;
      if (_onUpdateExpandedKeys) {
        call(_onUpdateExpandedKeys, value);
      }
      if (onUpdateExpandedKeys) {
        call(onUpdateExpandedKeys, value);
      }
      if (onExpandedNamesChange) {
        call(onExpandedNamesChange, value);
      }
      if (onOpenNamesChange) {
        call(onOpenNamesChange, value);
      }
      uncontrolledExpandedKeysRef.value = value;
    }
    function toggleExpand(key) {
      const currentExpandedKeys = Array.from(mergedExpandedKeysRef.value);
      const index = currentExpandedKeys.findIndex((expanededKey) => expanededKey === key);
      if (~index) {
        currentExpandedKeys.splice(index, 1);
      } else {
        if (props.accordion) {
          if (treeKeysLevelOneRef.value.has(key)) {
            const closeKeyIndex = currentExpandedKeys.findIndex((e) => treeKeysLevelOneRef.value.has(e));
            if (closeKeyIndex > -1) {
              currentExpandedKeys.splice(closeKeyIndex, 1);
            }
          }
        }
        currentExpandedKeys.push(key);
      }
      doUpdateExpandedKeys(currentExpandedKeys);
    }
    const showOption = (key) => {
      const selectedKeyPath = treeMateRef.value.getPath(key !== null && key !== void 0 ? key : mergedValueRef.value, {
        includeSelf: false
      }).keyPath;
      if (!selectedKeyPath.length) return;
      const currentExpandedKeys = Array.from(mergedExpandedKeysRef.value);
      const nextExpandedKeys = /* @__PURE__ */ new Set([...currentExpandedKeys, ...selectedKeyPath]);
      if (props.accordion) {
        treeKeysLevelOneRef.value.forEach((firstLevelKey) => {
          if (nextExpandedKeys.has(firstLevelKey) && !selectedKeyPath.includes(firstLevelKey)) {
            nextExpandedKeys.delete(firstLevelKey);
          }
        });
      }
      doUpdateExpandedKeys(Array.from(nextExpandedKeys));
    };
    const cssVarsRef = computed(() => {
      const {
        inverted
      } = props;
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: self2
      } = themeRef.value;
      const {
        borderRadius,
        borderColorHorizontal,
        fontSize,
        itemHeight,
        dividerColor
      } = self2;
      const vars = {
        "--n-divider-color": dividerColor,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-font-size": fontSize,
        "--n-border-color-horizontal": borderColorHorizontal,
        "--n-border-radius": borderRadius,
        "--n-item-height": itemHeight
      };
      if (inverted) {
        vars["--n-group-text-color"] = self2.groupTextColorInverted;
        vars["--n-color"] = self2.colorInverted;
        vars["--n-item-text-color"] = self2.itemTextColorInverted;
        vars["--n-item-text-color-hover"] = self2.itemTextColorHoverInverted;
        vars["--n-item-text-color-active"] = self2.itemTextColorActiveInverted;
        vars["--n-item-text-color-child-active"] = self2.itemTextColorChildActiveInverted;
        vars["--n-item-text-color-child-active-hover"] = self2.itemTextColorChildActiveInverted;
        vars["--n-item-text-color-active-hover"] = self2.itemTextColorActiveHoverInverted;
        vars["--n-item-icon-color"] = self2.itemIconColorInverted;
        vars["--n-item-icon-color-hover"] = self2.itemIconColorHoverInverted;
        vars["--n-item-icon-color-active"] = self2.itemIconColorActiveInverted;
        vars["--n-item-icon-color-active-hover"] = self2.itemIconColorActiveHoverInverted;
        vars["--n-item-icon-color-child-active"] = self2.itemIconColorChildActiveInverted;
        vars["--n-item-icon-color-child-active-hover"] = self2.itemIconColorChildActiveHoverInverted;
        vars["--n-item-icon-color-collapsed"] = self2.itemIconColorCollapsedInverted;
        vars["--n-item-text-color-horizontal"] = self2.itemTextColorHorizontalInverted;
        vars["--n-item-text-color-hover-horizontal"] = self2.itemTextColorHoverHorizontalInverted;
        vars["--n-item-text-color-active-horizontal"] = self2.itemTextColorActiveHorizontalInverted;
        vars["--n-item-text-color-child-active-horizontal"] = self2.itemTextColorChildActiveHorizontalInverted;
        vars["--n-item-text-color-child-active-hover-horizontal"] = self2.itemTextColorChildActiveHoverHorizontalInverted;
        vars["--n-item-text-color-active-hover-horizontal"] = self2.itemTextColorActiveHoverHorizontalInverted;
        vars["--n-item-icon-color-horizontal"] = self2.itemIconColorHorizontalInverted;
        vars["--n-item-icon-color-hover-horizontal"] = self2.itemIconColorHoverHorizontalInverted;
        vars["--n-item-icon-color-active-horizontal"] = self2.itemIconColorActiveHorizontalInverted;
        vars["--n-item-icon-color-active-hover-horizontal"] = self2.itemIconColorActiveHoverHorizontalInverted;
        vars["--n-item-icon-color-child-active-horizontal"] = self2.itemIconColorChildActiveHorizontalInverted;
        vars["--n-item-icon-color-child-active-hover-horizontal"] = self2.itemIconColorChildActiveHoverHorizontalInverted;
        vars["--n-arrow-color"] = self2.arrowColorInverted;
        vars["--n-arrow-color-hover"] = self2.arrowColorHoverInverted;
        vars["--n-arrow-color-active"] = self2.arrowColorActiveInverted;
        vars["--n-arrow-color-active-hover"] = self2.arrowColorActiveHoverInverted;
        vars["--n-arrow-color-child-active"] = self2.arrowColorChildActiveInverted;
        vars["--n-arrow-color-child-active-hover"] = self2.arrowColorChildActiveHoverInverted;
        vars["--n-item-color-hover"] = self2.itemColorHoverInverted;
        vars["--n-item-color-active"] = self2.itemColorActiveInverted;
        vars["--n-item-color-active-hover"] = self2.itemColorActiveHoverInverted;
        vars["--n-item-color-active-collapsed"] = self2.itemColorActiveCollapsedInverted;
      } else {
        vars["--n-group-text-color"] = self2.groupTextColor;
        vars["--n-color"] = self2.color;
        vars["--n-item-text-color"] = self2.itemTextColor;
        vars["--n-item-text-color-hover"] = self2.itemTextColorHover;
        vars["--n-item-text-color-active"] = self2.itemTextColorActive;
        vars["--n-item-text-color-child-active"] = self2.itemTextColorChildActive;
        vars["--n-item-text-color-child-active-hover"] = self2.itemTextColorChildActiveHover;
        vars["--n-item-text-color-active-hover"] = self2.itemTextColorActiveHover;
        vars["--n-item-icon-color"] = self2.itemIconColor;
        vars["--n-item-icon-color-hover"] = self2.itemIconColorHover;
        vars["--n-item-icon-color-active"] = self2.itemIconColorActive;
        vars["--n-item-icon-color-active-hover"] = self2.itemIconColorActiveHover;
        vars["--n-item-icon-color-child-active"] = self2.itemIconColorChildActive;
        vars["--n-item-icon-color-child-active-hover"] = self2.itemIconColorChildActiveHover;
        vars["--n-item-icon-color-collapsed"] = self2.itemIconColorCollapsed;
        vars["--n-item-text-color-horizontal"] = self2.itemTextColorHorizontal;
        vars["--n-item-text-color-hover-horizontal"] = self2.itemTextColorHoverHorizontal;
        vars["--n-item-text-color-active-horizontal"] = self2.itemTextColorActiveHorizontal;
        vars["--n-item-text-color-child-active-horizontal"] = self2.itemTextColorChildActiveHorizontal;
        vars["--n-item-text-color-child-active-hover-horizontal"] = self2.itemTextColorChildActiveHoverHorizontal;
        vars["--n-item-text-color-active-hover-horizontal"] = self2.itemTextColorActiveHoverHorizontal;
        vars["--n-item-icon-color-horizontal"] = self2.itemIconColorHorizontal;
        vars["--n-item-icon-color-hover-horizontal"] = self2.itemIconColorHoverHorizontal;
        vars["--n-item-icon-color-active-horizontal"] = self2.itemIconColorActiveHorizontal;
        vars["--n-item-icon-color-active-hover-horizontal"] = self2.itemIconColorActiveHoverHorizontal;
        vars["--n-item-icon-color-child-active-horizontal"] = self2.itemIconColorChildActiveHorizontal;
        vars["--n-item-icon-color-child-active-hover-horizontal"] = self2.itemIconColorChildActiveHoverHorizontal;
        vars["--n-arrow-color"] = self2.arrowColor;
        vars["--n-arrow-color-hover"] = self2.arrowColorHover;
        vars["--n-arrow-color-active"] = self2.arrowColorActive;
        vars["--n-arrow-color-active-hover"] = self2.arrowColorActiveHover;
        vars["--n-arrow-color-child-active"] = self2.arrowColorChildActive;
        vars["--n-arrow-color-child-active-hover"] = self2.arrowColorChildActiveHover;
        vars["--n-item-color-hover"] = self2.itemColorHover;
        vars["--n-item-color-active"] = self2.itemColorActive;
        vars["--n-item-color-active-hover"] = self2.itemColorActiveHover;
        vars["--n-item-color-active-collapsed"] = self2.itemColorActiveCollapsed;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("menu", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
    const ellipsisNodeId = createId();
    const overflowRef = ref(null);
    const counterRef = ref(null);
    let isFirstResize = true;
    const onResize = () => {
      var _a;
      if (isFirstResize) {
        isFirstResize = false;
      } else {
        (_a = overflowRef.value) === null || _a === void 0 ? void 0 : _a.sync({
          showAllItemsBeforeCalculate: true
        });
      }
    };
    function getCounter() {
      return document.getElementById(ellipsisNodeId);
    }
    const ellipsisFromIndexRef = ref(-1);
    function onUpdateCount(count) {
      ellipsisFromIndexRef.value = props.options.length - count;
    }
    function onUpdateOverflow(overflow) {
      if (!overflow) {
        ellipsisFromIndexRef.value = -1;
      }
    }
    const ellipsisOptionRef = computed(() => {
      const ellipsisFromIndex = ellipsisFromIndexRef.value;
      const option = {
        children: ellipsisFromIndex === -1 ? [] : props.options.slice(ellipsisFromIndex)
      };
      return option;
    });
    const ellipsisTreeMateRef = computed(() => {
      const {
        childrenField,
        disabledField,
        keyField
      } = props;
      return createTreeMate([ellipsisOptionRef.value], {
        getIgnored(node) {
          return isIgnoredNode(node);
        },
        getChildren(node) {
          return node[childrenField];
        },
        getDisabled(node) {
          return node[disabledField];
        },
        getKey(node) {
          var _a;
          return (_a = node[keyField]) !== null && _a !== void 0 ? _a : node.name;
        }
      });
    });
    const emptyTmNodeRef = computed(() => {
      return createTreeMate([{}]).treeNodes[0];
    });
    function renderCounter() {
      var _a;
      if (ellipsisFromIndexRef.value === -1) {
        return h(NSubmenu, {
          root: true,
          level: 0,
          key: "__ellpisisGroupPlaceholder__",
          internalKey: "__ellpisisGroupPlaceholder__",
          title: "···",
          tmNode: emptyTmNodeRef.value,
          domId: ellipsisNodeId,
          isEllipsisPlaceholder: true
        });
      }
      const tmNode = ellipsisTreeMateRef.value.treeNodes[0];
      const activePath = activePathRef.value;
      const childActive = !!((_a = tmNode.children) === null || _a === void 0 ? void 0 : _a.some((tmNode2) => {
        return activePath.includes(tmNode2.key);
      }));
      return h(NSubmenu, {
        level: 0,
        root: true,
        key: "__ellpisisGroup__",
        internalKey: "__ellpisisGroup__",
        title: "···",
        virtualChildActive: childActive,
        tmNode,
        domId: ellipsisNodeId,
        rawNodes: tmNode.rawNode.children || [],
        tmNodes: tmNode.children || [],
        isEllipsisPlaceholder: true
      });
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      controlledExpandedKeys: controlledExpandedKeysRef,
      uncontrolledExpanededKeys: uncontrolledExpandedKeysRef,
      mergedExpandedKeys: mergedExpandedKeysRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      activePath: activePathRef,
      tmNodes: tmNodesRef,
      mergedTheme: themeRef,
      mergedCollapsed: mergedCollapsedRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      overflowRef,
      counterRef,
      updateCounter: () => {
      },
      onResize,
      onUpdateOverflow,
      onUpdateCount,
      renderCounter,
      getCounter,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      showOption,
      deriveResponsiveState: onResize
    };
  },
  render() {
    const {
      mergedClsPrefix,
      mode,
      themeClass,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const renderMenuItemNodes = () => this.tmNodes.map((tmNode) => itemRenderer(tmNode, this.$props));
    const horizontal = mode === "horizontal";
    const finalResponsive = horizontal && this.responsive;
    const renderMainNode = () => h("div", mergeProps(this.$attrs, {
      role: mode === "horizontal" ? "menubar" : "menu",
      class: [`${mergedClsPrefix}-menu`, themeClass, `${mergedClsPrefix}-menu--${mode}`, finalResponsive && `${mergedClsPrefix}-menu--responsive`, this.mergedCollapsed && `${mergedClsPrefix}-menu--collapsed`],
      style: this.cssVars
    }), finalResponsive ? h(VOverflow, {
      ref: "overflowRef",
      onUpdateOverflow: this.onUpdateOverflow,
      getCounter: this.getCounter,
      onUpdateCount: this.onUpdateCount,
      updateCounter: this.updateCounter,
      style: {
        width: "100%",
        display: "flex",
        overflow: "hidden"
      }
    }, {
      default: renderMenuItemNodes,
      counter: this.renderCounter
    }) : renderMenuItemNodes());
    return finalResponsive ? h(VResizeObserver, {
      onResize: this.onResize
    }, {
      default: renderMainNode
    }) : renderMainNode();
  }
});
const _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$e = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M393.87 190a32.1 32.1 0 0 1-45.25 0l-26.57-26.57a32.09 32.09 0 0 1 0-45.26L382.19 58a1 1 0 0 0-.3-1.64c-38.82-16.64-89.15-8.16-121.11 23.57c-30.58 30.35-32.32 76-21.12 115.84a31.93 31.93 0 0 1-9.06 32.08L64 380a48.17 48.17 0 1 0 68 68l153.86-167a31.93 31.93 0 0 1 31.6-9.13c39.54 10.59 84.54 8.6 114.72-21.19c32.49-32 39.5-88.56 23.75-120.93a1 1 0 0 0-1.6-.26z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$c = /* @__PURE__ */ createBaseVNode(
  "circle",
  {
    cx: "96",
    cy: "416",
    r: "16",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$8 = [_hoisted_2$e, _hoisted_3$c];
const BookIcon = defineComponent({
  name: "BuildOutline",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_4$8);
  }
});
const _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$d = /* @__PURE__ */ createStaticVNode('<circle cx="128" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 144v224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M288 160l-64-64l64-64"></path><circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="384" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path d="M240 96h84a60 60 0 0 1 60 60v212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>', 6);
const _hoisted_8$2 = [_hoisted_2$d];
const QueueIcon = defineComponent({
  name: "GitPullRequestOutline",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_8$2);
  }
});
const _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$c = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$b = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$7 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M400 179V64h-48v69"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$4 = [_hoisted_2$c, _hoisted_3$b, _hoisted_4$7];
const HomeIcon = defineComponent({
  name: "HomeOutline",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_5$4);
  }
});
const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$b = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184s184-82.39 184-184S349.61 64 248 64z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$a = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M220 220h32v116"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$6 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32",
    d: "M208 340h88"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M248 130a26 26 0 1 0 26 26a26 26 0 0 0-26-26z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$2 = [_hoisted_2$b, _hoisted_3$a, _hoisted_4$6, _hoisted_5$3];
const InfoIcon = defineComponent({
  name: "InformationCircleOutline",
  render: function render5(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_6$2);
  }
});
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$a = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M320 146s24.36-12-64-12a160 160 0 1 0 160 160",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$9 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M256 58l80 80l-80 80"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$5 = [_hoisted_2$a, _hoisted_3$9];
const Refresh = defineComponent({
  name: "Refresh",
  render: function render6(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_4$5);
  }
});
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$8 = [_hoisted_2$9];
const SettingIcon = defineComponent({
  name: "SettingsOutline",
  render: function render7(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$8);
  }
});
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$7 = [_hoisted_2$8];
const DashboardIcon = defineComponent({
  name: "DashboardOutlined",
  render: function render8(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$7);
  }
});
const defaultUserAvatar = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcwMjFENDNFRDI5NzExRTVCNzAyODZCQTI5MDE1NkEyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcwMjFENDNERDI5NzExRTVCNzAyODZCQTI5MDE1NkEyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJCNTQzREM0QjY5NDk5MDdDQjMzQjk0Qzc2RTkzQUFEQyIgc3RSZWY6ZG9jdW1lbnRJRD0iQjU0M0RDNEI2OTQ5OTA3Q0IzM0I5NEM3NkU5M0FBREMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCABAAEADASIAAhEBAxEB/8QAaAAAAwEBAQAAAAAAAAAAAAAAAAMEAgEHAQEAAAAAAAAAAAAAAAAAAAAAEAACAgEDAgMIAgMAAAAAAAABAgADESESBDETQVEiYXGBoTJCQxRiJHKSMxEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9Air+RTxwrXOEV2CKT03N0EbJx2xzm0fuNUPV+ParHT/AC9UCick78TBd+M/69lrq9rgb923Q4VvSCR44mjw+MzXM6b/ANgAWhyWDBdANrEgD3QHTsT+pR3VuVdtiIa0KkgBT4bfp+Uyq8uoUpuHIGSLrXOx8fawVV2k+fSBRCTWctqajbbRYAHCYQCwkE7Q+EJO3z8ZRA7J73C8rjL3u2WLgU4z3cLn4besoiTvPKXVO2qE7fybiRgj+OAYDoQhAIQhAi7rcjlHi2FuO9LC1FVhuuqGm5sDRS3hnOmstkvJrWy0ItbLc9boOWgGalbH3E5yTjAEfWhStELFyqhSzdWwMZMDcRt/ulu1+IDv5/l9GPnHybjtXZfyLUZzhhSytooNYydn+2pgUwhCAQhCBPWEHMvID7yte4n/AJ49eNnt8/hKIhX/ALj1m0HNastONVwWBfPt0Hwj4GLLK6q2tsYJWgLMx6ADUmZ4y2rQgus7tmMtZjbnOvSc5a2txrBSiW2Eemuz6G9hjoBCEIBCEICH3ryamWtSjKy2WkgOvQoB5g6x8n5qqaA7VNea3R0RPq3KwwR7pRA//9k=";
const _hoisted_1$7 = { class: "inline-flex" };
const _hoisted_2$7 = { class: "inline-flex" };
const _hoisted_3$6 = { class: "inline-flex" };
const _hoisted_4$4 = { class: "inline-flex" };
const _hoisted_5$2 = { class: "inline-flex" };
const _hoisted_6$1 = { class: "inline-flex" };
const _hoisted_7$1 = { class: "inline-flex" };
const _hoisted_8$1 = { class: "inline-flex" };
const _hoisted_9$1 = ["title", "onClick"];
const _hoisted_10$1 = { class: "inline-flex" };
const _hoisted_11$1 = { class: "inline-flex" };
const _hoisted_12$1 = { class: "inline-flex" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CommonWebhookSetting",
  props: /* @__PURE__ */ mergeModels({
    biliupPresetsOptions: {},
    ffmpegOptions: {},
    type: {},
    globalValue: {}
  }, {
    "data": {
      default: () => {
      }
    },
    "dataModifiers": {},
    "globalFieldsObj": {
      type: Object,
      default: () => {
      }
    },
    "globalFieldsObjModifiers": {}
  }),
  emits: ["update:data", "update:globalFieldsObj"],
  setup(__props) {
    const props = __props;
    const data = useModel(__props, "data");
    const globalFieldsObj = useModel(__props, "globalFieldsObj");
    const notice = useNotification();
    const { danmuPresetsOptions } = storeToRefs(useDanmuPreset());
    const { userList } = storeToRefs(useUserInfoStore());
    const userOptins = computed(() => {
      return [
        {
          value: "",
          label: "无"
        },
        ...userList.value.map((user) => ({
          value: user.uid,
          label: `${user.name}(${user.uid})`
        }))
      ];
    });
    const titleList = ref([
      {
        value: "{{title}}",
        label: "视频标题"
      },
      {
        value: "{{user}}",
        label: "主播名"
      },
      {
        value: "{{roomId}}",
        label: "房间号"
      },
      {
        value: "{{now}}",
        label: "当前时间（示例：2024.01.24）"
      },
      {
        value: "{{yyyy}}",
        label: "年"
      },
      {
        value: "{{MM}}",
        label: "月（补零）"
      },
      {
        value: "{{dd}}",
        label: "日（补零）"
      },
      {
        value: "{{HH}}",
        label: "时（补零）"
      },
      {
        value: "{{mm}}",
        label: "分（补零）"
      },
      {
        value: "{{ss}}",
        label: "秒（补零）"
      }
    ]);
    const titleTip = computed(() => {
      const base = `推荐在上传预设设置模板标题，但如果预设标题中不存在占位符，为了兼容性考虑，依然使用webhook配置。<br/>
  <b>预计后续版本中会移除此字段，请使用者尽快迁移。</b><br/>
  支持{{title}},{{user}},{{now}}等占位符，如【{{user}}】{{title}}-{{now}}<br/>
  不要在直播开始后修改字段，本场直播不会生效，更多模板引擎等高级用法见文档<br/>`;
      return titleList.value.map((item) => {
        return `${item.label}：${item.value}<br/>`;
      }).reduce((prev, cur) => prev + cur, base);
    });
    const titleInput = templateRef("titleInput");
    const setTitleVar = async (value) => {
      if (globalFieldsObj.value.title) return;
      const input = titleInput.value?.inputElRef;
      if (input) {
        const start = input.selectionStart ?? data.value.title.length;
        const end = input.selectionEnd ?? data.value.title.length;
        const oldValue = data.value.title;
        data.value.title = oldValue.slice(0, start) + value + oldValue.slice(end);
        input.focus();
        await nextTick();
        input.setSelectionRange(start + value.length, start + value.length);
      } else {
        data.value.title += value;
      }
    };
    const isRoom = computed(() => props.type === "room");
    watch(
      () => globalFieldsObj.value,
      () => {
        for (const key in globalFieldsObj.value) {
          const value = globalFieldsObj.value[key];
          if (value) {
            data.value[key] = props.globalValue[key];
          }
        }
      },
      {
        deep: true
      }
    );
    const previewTitle = async (template) => {
      const data2 = await previewWebhookTitle(template);
      notice.warning({
        title: data2,
        duration: 3e3
      });
    };
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$a;
      const _component_n_switch = __unplugin_components_2$4;
      const _component_n_checkbox = __unplugin_components_1$1;
      const _component_n_form_item = __unplugin_components_1$2;
      const _component_n_cascader = __unplugin_components_0$2;
      const _component_n_select = __unplugin_components_0$3;
      const _component_n_input_number = __unplugin_components_2$5;
      const _component_n_color_picker = __unplugin_components_3$1;
      const _component_n_time_picker = __unplugin_components_8;
      const _component_n_input = __unplugin_components_2$2;
      const _component_n_button = Button;
      const _component_n_divider = __unplugin_components_1$3;
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[98] || (_cache[98] = createBaseVNode("h2", null, "压制配置", -1)),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createBaseVNode("span", _hoisted_1$7, [
              _cache[50] || (_cache[50] = createTextVNode(" 弹幕压制 ")),
              createVNode(_component_Tip, { tip: "将弹幕文件硬编码到视频中" })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.danmu,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => data.value.danmu = $event),
              disabled: globalFieldsObj.value.danmu
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.danmu,
              "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => globalFieldsObj.value.danmu = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[51] || (_cache[51] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        !data.value.danmu ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
          label: withCtx(() => [
            createBaseVNode("span", _hoisted_2$7, [
              _cache[52] || (_cache[52] = createTextVNode(" 不压制后处理 ")),
              createVNode(_component_Tip, { tip: "关闭弹幕压制但仍对视频调用ffmepg进行处理" })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.noConvertHandleVideo,
              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => data.value.noConvertHandleVideo = $event),
              disabled: globalFieldsObj.value.noConvertHandleVideo
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.noConvertHandleVideo,
              "onUpdate:checked": _cache[3] || (_cache[3] = ($event) => globalFieldsObj.value.noConvertHandleVideo = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[53] || (_cache[53] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        data.value.danmu || !data.value.danmu && data.value.noConvertHandleVideo ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
          label: withCtx(() => _cache[54] || (_cache[54] = [
            createBaseVNode("span", { class: "inline-flex" }, " 视频预设 ", -1)
          ])),
          default: withCtx(() => [
            createVNode(_component_n_cascader, {
              value: data.value.ffmpegPreset,
              "onUpdate:value": _cache[4] || (_cache[4] = ($event) => data.value.ffmpegPreset = $event),
              placeholder: "请选择预设",
              "expand-trigger": "click",
              options: _ctx.ffmpegOptions,
              "check-strategy": "child",
              "show-path": false,
              filterable: true,
              disabled: globalFieldsObj.value.ffmpegPreset,
              style: { "margin-right": "10px" }
            }, null, 8, ["value", "options", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.ffmpegPreset,
              "onUpdate:checked": _cache[5] || (_cache[5] = ($event) => globalFieldsObj.value.ffmpegPreset = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[55] || (_cache[55] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        data.value.danmu ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          createVNode(_component_n_form_item, { label: "弹幕预设" }, {
            default: withCtx(() => [
              createVNode(_component_n_select, {
                value: data.value.danmuPreset,
                "onUpdate:value": _cache[6] || (_cache[6] = ($event) => data.value.danmuPreset = $event),
                options: unref(danmuPresetsOptions),
                placeholder: "选择预设",
                disabled: globalFieldsObj.value.danmuPreset,
                style: { "margin-right": "10px" }
              }, null, 8, ["value", "options", "disabled"]),
              unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                key: 0,
                checked: globalFieldsObj.value.danmuPreset,
                "onUpdate:checked": _cache[7] || (_cache[7] = ($event) => globalFieldsObj.value.danmuPreset = $event),
                class: "global-checkbox"
              }, {
                default: withCtx(() => _cache[56] || (_cache[56] = [
                  createTextVNode("全局")
                ])),
                _: 1
              }, 8, ["checked"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(_component_n_form_item, { label: "高能进度条" }, {
            default: withCtx(() => [
              createVNode(_component_n_switch, {
                value: data.value.hotProgress,
                "onUpdate:value": _cache[8] || (_cache[8] = ($event) => data.value.hotProgress = $event),
                disabled: globalFieldsObj.value.hotProgress
              }, null, 8, ["value", "disabled"]),
              unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                key: 0,
                checked: globalFieldsObj.value.hotProgress,
                "onUpdate:checked": _cache[9] || (_cache[9] = ($event) => globalFieldsObj.value.hotProgress = $event),
                class: "global-checkbox"
              }, {
                default: withCtx(() => _cache[57] || (_cache[57] = [
                  createTextVNode("全局")
                ])),
                _: 1
              }, 8, ["checked"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          data.value.hotProgress ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_3$6, [
                  _cache[58] || (_cache[58] = createTextVNode(" 采样间隔 ")),
                  createVNode(_component_Tip, { tip: "每隔一段时间对弹幕进行一次汇总计算，影响波峰" })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: data.value.hotProgressSample,
                  "onUpdate:value": _cache[10] || (_cache[10] = ($event) => data.value.hotProgressSample = $event),
                  placeholder: "单位秒",
                  min: "1",
                  disabled: globalFieldsObj.value.hotProgressSample
                }, {
                  suffix: withCtx(() => _cache[59] || (_cache[59] = [
                    createTextVNode(" 秒 ")
                  ])),
                  _: 1
                }, 8, ["value", "disabled"]),
                unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                  key: 0,
                  checked: globalFieldsObj.value.hotProgressSample,
                  "onUpdate:checked": _cache[11] || (_cache[11] = ($event) => globalFieldsObj.value.hotProgressSample = $event),
                  class: "global-checkbox"
                }, {
                  default: withCtx(() => _cache[60] || (_cache[60] = [
                    createTextVNode("全局")
                  ])),
                  _: 1
                }, 8, ["checked"])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[61] || (_cache[61] = [
                createBaseVNode("span", { class: "inline-flex" }, " 高度 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: data.value.hotProgressHeight,
                  "onUpdate:value": _cache[12] || (_cache[12] = ($event) => data.value.hotProgressHeight = $event),
                  placeholder: "单位像素",
                  min: "10",
                  disabled: globalFieldsObj.value.hotProgressHeight
                }, {
                  suffix: withCtx(() => _cache[62] || (_cache[62] = [
                    createTextVNode(" 像素 ")
                  ])),
                  _: 1
                }, 8, ["value", "disabled"]),
                unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                  key: 0,
                  checked: globalFieldsObj.value.hotProgressHeight,
                  "onUpdate:checked": _cache[13] || (_cache[13] = ($event) => globalFieldsObj.value.hotProgressHeight = $event),
                  class: "global-checkbox"
                }, {
                  default: withCtx(() => _cache[63] || (_cache[63] = [
                    createTextVNode("全局")
                  ])),
                  _: 1
                }, 8, ["checked"])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[64] || (_cache[64] = [
                createBaseVNode("span", { class: "inline-flex" }, " 默认颜色 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_color_picker, {
                  value: data.value.hotProgressColor,
                  "onUpdate:value": _cache[14] || (_cache[14] = ($event) => data.value.hotProgressColor = $event),
                  disabled: globalFieldsObj.value.hotProgressColor,
                  style: { "margin-right": "10px" }
                }, null, 8, ["value", "disabled"]),
                unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                  key: 0,
                  checked: globalFieldsObj.value.hotProgressColor,
                  "onUpdate:checked": _cache[15] || (_cache[15] = ($event) => globalFieldsObj.value.hotProgressColor = $event),
                  class: "global-checkbox"
                }, {
                  default: withCtx(() => _cache[65] || (_cache[65] = [
                    createTextVNode("全局")
                  ])),
                  _: 1
                }, 8, ["checked"])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[66] || (_cache[66] = [
                createBaseVNode("span", { class: "inline-flex" }, " 覆盖颜色 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_color_picker, {
                  value: data.value.hotProgressFillColor,
                  "onUpdate:value": _cache[16] || (_cache[16] = ($event) => data.value.hotProgressFillColor = $event),
                  disabled: globalFieldsObj.value.hotProgressFillColor,
                  style: { "margin-right": "10px" }
                }, null, 8, ["value", "disabled"]),
                unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                  key: 0,
                  checked: globalFieldsObj.value.hotProgressFillColor,
                  "onUpdate:checked": _cache[17] || (_cache[17] = ($event) => globalFieldsObj.value.hotProgressFillColor = $event),
                  class: "global-checkbox"
                }, {
                  default: withCtx(() => _cache[67] || (_cache[67] = [
                    createTextVNode("全局")
                  ])),
                  _: 1
                }, 8, ["checked"])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ], 64)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        data.value.danmu || !data.value.danmu && data.value.noConvertHandleVideo ? (openBlock(), createBlock(_component_n_form_item, { key: 3 }, {
          label: withCtx(() => _cache[68] || (_cache[68] = [
            createBaseVNode("span", { class: "inline-flex" }, " 完成后删除源文件 ", -1)
          ])),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.removeOriginAfterConvert,
              "onUpdate:value": _cache[18] || (_cache[18] = ($event) => data.value.removeOriginAfterConvert = $event),
              disabled: globalFieldsObj.value.removeOriginAfterConvert
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.removeOriginAfterConvert,
              "onUpdate:checked": _cache[19] || (_cache[19] = ($event) => globalFieldsObj.value.removeOriginAfterConvert = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[69] || (_cache[69] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createBaseVNode("span", _hoisted_4$4, [
              _cache[70] || (_cache[70] = createTextVNode(" 转封装为mp4 ")),
              createVNode(_component_Tip, { tip: "将视频文件转换为mp4封装格式，转换完毕后会删除原始视频文件" })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.convert2Mp4,
              "onUpdate:value": _cache[20] || (_cache[20] = ($event) => data.value.convert2Mp4 = $event),
              disabled: globalFieldsObj.value.convert2Mp4
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.convert2Mp4,
              "onUpdate:checked": _cache[21] || (_cache[21] = ($event) => globalFieldsObj.value.convert2Mp4 = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[71] || (_cache[71] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        _cache[99] || (_cache[99] = createBaseVNode("h2", null, "上传配置", -1)),
        createVNode(_component_n_form_item, { label: "上传账号" }, {
          default: withCtx(() => [
            createVNode(_component_n_select, {
              value: data.value.uid,
              "onUpdate:value": _cache[22] || (_cache[22] = ($event) => data.value.uid = $event),
              options: unref(userOptins),
              placeholder: "请选择账号",
              disabled: globalFieldsObj.value.uid,
              style: { "margin-right": "10px" }
            }, null, 8, ["value", "options", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.uid,
              "onUpdate:checked": _cache[23] || (_cache[23] = ($event) => globalFieldsObj.value.uid = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[72] || (_cache[72] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, { label: "上传预设" }, {
          default: withCtx(() => [
            createVNode(_component_n_select, {
              value: data.value.uploadPresetId,
              "onUpdate:value": _cache[24] || (_cache[24] = ($event) => data.value.uploadPresetId = $event),
              options: props.biliupPresetsOptions,
              placeholder: "请选择",
              disabled: globalFieldsObj.value.uploadPresetId,
              style: { "margin-right": "10px" }
            }, null, 8, ["value", "options", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.uploadPresetId,
              "onUpdate:checked": _cache[25] || (_cache[25] = ($event) => globalFieldsObj.value.uploadPresetId = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[73] || (_cache[73] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createBaseVNode("span", _hoisted_5$2, [
              _cache[74] || (_cache[74] = createTextVNode(" 限制上传时间 ")),
              createVNode(_component_Tip, { tip: "开启后，支持只在某段时间执行上传操作" })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.limitUploadTime,
              "onUpdate:value": _cache[26] || (_cache[26] = ($event) => data.value.limitUploadTime = $event),
              disabled: globalFieldsObj.value.limitUploadTime
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.limitUploadTime,
              "onUpdate:checked": _cache[27] || (_cache[27] = ($event) => globalFieldsObj.value.limitUploadTime = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[75] || (_cache[75] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        data.value.limitUploadTime ? (openBlock(), createBlock(_component_n_form_item, { key: 4 }, {
          label: withCtx(() => _cache[76] || (_cache[76] = [
            createBaseVNode("span", { class: "inline-flex" }, " 允许上传的时间段 ", -1)
          ])),
          default: withCtx(() => [
            createVNode(_component_n_time_picker, {
              "formatted-value": data.value.uploadHandleTime[0],
              "onUpdate:formattedValue": _cache[28] || (_cache[28] = ($event) => data.value.uploadHandleTime[0] = $event),
              disabled: globalFieldsObj.value.uploadHandleTime
            }, null, 8, ["formatted-value", "disabled"]),
            _cache[78] || (_cache[78] = createTextVNode(" ~ ")),
            createVNode(_component_n_time_picker, {
              "formatted-value": data.value.uploadHandleTime[1],
              "onUpdate:formattedValue": _cache[29] || (_cache[29] = ($event) => data.value.uploadHandleTime[1] = $event),
              disabled: globalFieldsObj.value.uploadHandleTime
            }, null, 8, ["formatted-value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.uploadHandleTime,
              "onUpdate:checked": _cache[30] || (_cache[30] = ($event) => globalFieldsObj.value.uploadHandleTime = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[77] || (_cache[77] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => _cache[79] || (_cache[79] = [
            createBaseVNode("span", { class: "inline-flex" }, " 完成后删除源文件 ", -1)
          ])),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.removeOriginAfterUpload,
              "onUpdate:value": _cache[31] || (_cache[31] = ($event) => data.value.removeOriginAfterUpload = $event),
              disabled: globalFieldsObj.value.removeOriginAfterUpload
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.removeOriginAfterUpload,
              "onUpdate:checked": _cache[32] || (_cache[32] = ($event) => globalFieldsObj.value.removeOriginAfterUpload = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[80] || (_cache[80] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createBaseVNode("span", _hoisted_6$1, [
              _cache[81] || (_cache[81] = createTextVNode(" 最小上传大小 ")),
              createVNode(_component_Tip, { tip: "小于这个大小的视频不会上传，用于过滤因网络问题导致的分段录播" })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_n_input_number, {
              value: data.value.minSize,
              "onUpdate:value": _cache[33] || (_cache[33] = ($event) => data.value.minSize = $event),
              placeholder: "单位MB",
              min: "0",
              disabled: globalFieldsObj.value.minSize
            }, {
              suffix: withCtx(() => _cache[82] || (_cache[82] = [
                createTextVNode(" M ")
              ])),
              _: 1
            }, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.minSize,
              "onUpdate:checked": _cache[34] || (_cache[34] = ($event) => globalFieldsObj.value.minSize = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[83] || (_cache[83] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createBaseVNode("span", _hoisted_7$1, [
              _cache[84] || (_cache[84] = createTextVNode(" 使用直播封面 ")),
              createVNode(_component_Tip, { tip: "使用直播封面作为视频封面，默认寻找视频目录下文件名为'视频文件名+.cover.jpg|.jpg的文件" })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.useLiveCover,
              "onUpdate:value": _cache[35] || (_cache[35] = ($event) => data.value.useLiveCover = $event),
              disabled: globalFieldsObj.value.useLiveCover
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.useLiveCover,
              "onUpdate:checked": _cache[36] || (_cache[36] = ($event) => globalFieldsObj.value.useLiveCover = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[85] || (_cache[85] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createBaseVNode("span", _hoisted_8$1, [
              _cache[86] || (_cache[86] = createTextVNode(" 使用视频文件名 ")),
              createVNode(_component_Tip, { tip: "使用本地视频文件名作为视频标题" })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.useVideoAsTitle,
              "onUpdate:value": _cache[37] || (_cache[37] = ($event) => data.value.useVideoAsTitle = $event),
              disabled: globalFieldsObj.value.useVideoAsTitle
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.useVideoAsTitle,
              "onUpdate:checked": _cache[38] || (_cache[38] = ($event) => globalFieldsObj.value.useVideoAsTitle = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[87] || (_cache[87] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        !data.value.useVideoAsTitle ? (openBlock(), createBlock(_component_n_form_item, { key: 5 }, {
          label: withCtx(() => [
            createVNode(_component_Tip, {
              tip: unref(titleTip),
              text: "视频标题"
            }, null, 8, ["tip"])
          ]),
          feedback: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(titleList), (item) => {
              return openBlock(), createElementBlock("span", {
                key: item.value,
                title: item.label,
                class: normalizeClass(["title-var", {
                  disabled: globalFieldsObj.value.title
                }]),
                onClick: ($event) => setTitleVar(item.value)
              }, toDisplayString(item.value), 11, _hoisted_9$1);
            }), 128))
          ]),
          default: withCtx(() => [
            createVNode(_component_n_input, {
              ref_key: "titleInput",
              ref: titleInput,
              value: data.value.title,
              "onUpdate:value": _cache[39] || (_cache[39] = ($event) => data.value.title = $event),
              placeholder: "请输入视频标题,支持{{title}},{{user}},{{now}}等占位符",
              clearable: "",
              disabled: globalFieldsObj.value.title,
              style: { "margin-right": "10px" },
              spellcheck: "false"
            }, null, 8, ["value", "disabled"]),
            createVNode(_component_n_button, {
              style: { "margin-right": "10px" },
              onClick: _cache[40] || (_cache[40] = ($event) => previewTitle(data.value.title))
            }, {
              default: withCtx(() => _cache[88] || (_cache[88] = [
                createTextVNode("预览")
              ])),
              _: 1
            }),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.title,
              "onUpdate:checked": _cache[41] || (_cache[41] = ($event) => globalFieldsObj.value.title = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[89] || (_cache[89] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(_component_n_form_item, null, {
          label: withCtx(() => [
            createBaseVNode("span", _hoisted_10$1, [
              _cache[90] || (_cache[90] = createTextVNode(" 断播续传 ")),
              createVNode(_component_Tip, { tip: "开启后，会将某主播一场直播上传到同一个视频中" })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: data.value.autoPartMerge,
              "onUpdate:value": _cache[42] || (_cache[42] = ($event) => data.value.autoPartMerge = $event),
              disabled: globalFieldsObj.value.autoPartMerge
            }, null, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.autoPartMerge,
              "onUpdate:checked": _cache[43] || (_cache[43] = ($event) => globalFieldsObj.value.autoPartMerge = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[91] || (_cache[91] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        data.value.autoPartMerge ? (openBlock(), createBlock(_component_n_form_item, { key: 6 }, {
          label: withCtx(() => [
            createBaseVNode("span", _hoisted_11$1, [
              _cache[92] || (_cache[92] = createTextVNode(" 上传到同分p间隔时间 ")),
              createVNode(_component_Tip, { tip: "检测直播是否为同一场的时间间隔" })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_n_input_number, {
              value: data.value.partMergeMinute,
              "onUpdate:value": _cache[44] || (_cache[44] = ($event) => data.value.partMergeMinute = $event),
              placeholder: "请输入分钟",
              min: "0.1",
              disabled: globalFieldsObj.value.partMergeMinute
            }, {
              suffix: withCtx(() => _cache[93] || (_cache[93] = [
                createTextVNode(" 分钟 ")
              ])),
              _: 1
            }, 8, ["value", "disabled"]),
            unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
              key: 0,
              checked: globalFieldsObj.value.partMergeMinute,
              "onUpdate:checked": _cache[45] || (_cache[45] = ($event) => globalFieldsObj.value.partMergeMinute = $event),
              class: "global-checkbox"
            }, {
              default: withCtx(() => _cache[94] || (_cache[94] = [
                createTextVNode("全局")
              ])),
              _: 1
            }, 8, ["checked"])) : createCommentVNode("", true)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        data.value.uid && !data.value.removeOriginAfterConvert ? (openBlock(), createElementBlock(Fragment, { key: 7 }, [
          createVNode(_component_n_divider),
          createVNode(_component_n_form_item, null, {
            label: withCtx(() => [
              createBaseVNode("span", _hoisted_12$1, [
                _cache[95] || (_cache[95] = createTextVNode(" 上传非弹幕版 ")),
                createVNode(_component_Tip, { tip: "用于在上传弹幕版后同时上传一份非弹幕版本，大部分配置与上面的共用，不含包“完成后删除源文件”选项\n            <br/>视频标题去上传预设中配置，标题模板不要与弹幕版完全一致，不然b站可能会上传错误" })
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n_switch, {
                value: data.value.uploadNoDanmu,
                "onUpdate:value": _cache[46] || (_cache[46] = ($event) => data.value.uploadNoDanmu = $event),
                disabled: globalFieldsObj.value.uploadNoDanmu
              }, null, 8, ["value", "disabled"]),
              unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                key: 0,
                checked: globalFieldsObj.value.uploadNoDanmu,
                "onUpdate:checked": _cache[47] || (_cache[47] = ($event) => globalFieldsObj.value.uploadNoDanmu = $event),
                class: "global-checkbox"
              }, {
                default: withCtx(() => _cache[96] || (_cache[96] = [
                  createTextVNode("全局")
                ])),
                _: 1
              }, 8, ["checked"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          data.value.uploadNoDanmu ? (openBlock(), createBlock(_component_n_form_item, {
            key: 0,
            label: "非弹幕版上传预设"
          }, {
            default: withCtx(() => [
              createVNode(_component_n_select, {
                value: data.value.noDanmuVideoPreset,
                "onUpdate:value": _cache[48] || (_cache[48] = ($event) => data.value.noDanmuVideoPreset = $event),
                options: props.biliupPresetsOptions,
                placeholder: "请选择",
                disabled: globalFieldsObj.value.noDanmuVideoPreset,
                style: { "margin-right": "10px" }
              }, null, 8, ["value", "options", "disabled"]),
              unref(isRoom) ? (openBlock(), createBlock(_component_n_checkbox, {
                key: 0,
                checked: globalFieldsObj.value.noDanmuVideoPreset,
                "onUpdate:checked": _cache[49] || (_cache[49] = ($event) => globalFieldsObj.value.noDanmuVideoPreset = $event),
                class: "global-checkbox"
              }, {
                default: withCtx(() => _cache[97] || (_cache[97] = [
                  createTextVNode("全局")
                ])),
                _: 1
              }, 8, ["checked"])) : createCommentVNode("", true)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const CommonSetting = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-1a918d8b"]]);
const _hoisted_1$6 = { class: "inline-flex" };
const _hoisted_2$6 = { class: "inline-flex" };
const _hoisted_3$5 = { class: "footer" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "RoomSettingDialog",
  props: /* @__PURE__ */ mergeModels({
    type: {},
    biliupPresetsOptions: {},
    ffmpegOptions: {},
    globalValue: {}
  }, {
    "visible": {
      type: Boolean,
      default: false
    },
    "visibleModifiers": {},
    "data": {
      default: () => {
      }
    },
    "dataModifiers": {},
    "globalFieldsObj": {
      type: Object,
      default: () => {
      }
    },
    "globalFieldsObjModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["save", "delete"], ["update:visible", "update:data", "update:globalFieldsObj"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const roomDetailVisible = useModel(__props, "visible");
    const data = useModel(__props, "data");
    const globalFieldsObj = useModel(__props, "globalFieldsObj");
    const emits = __emit;
    const notice = useNotification();
    const saveRoomDetail = () => {
      if (!data.value.id) {
        notice.error({
          title: "请输入房间号",
          duration: 1e3
        });
        return;
      }
      data.value.noGlobal = Object.entries(globalFieldsObj.value).filter(([, value]) => {
        return !value;
      }).map(([key]) => key);
      console.log(data.value.noGlobal);
      emits("save", data.value);
      roomDetailVisible.value = false;
    };
    const confirm = useConfirm();
    const deleteRoom = async () => {
      const [status] = await confirm.warning({
        content: "是否确认删除？"
      });
      if (!status) return;
      emits("delete", data.value.id);
      roomDetailVisible.value = false;
    };
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_2$2;
      const _component_n_form_item = __unplugin_components_1$2;
      const _component_Tip = _sfc_main$a;
      const _component_n_switch = __unplugin_components_2$4;
      const _component_n_form = __unplugin_components_7;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_2$6;
      const _component_n_modal = __unplugin_components_3$2;
      return openBlock(), createBlock(_component_n_modal, {
        show: roomDetailVisible.value,
        "onUpdate:show": _cache[6] || (_cache[6] = ($event) => roomDetailVisible.value = $event),
        "mask-closable": false
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            bordered: false,
            size: "small",
            role: "dialog",
            "aria-modal": "true",
            style: { "width": "800px" }
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_3$5, [
                props.type === "edit" ? (openBlock(), createBlock(_component_n_button, {
                  key: 0,
                  ghost: "",
                  quaternary: "",
                  type: "error",
                  class: "btn",
                  onClick: deleteRoom
                }, {
                  default: withCtx(() => _cache[9] || (_cache[9] = [
                    createTextVNode(" 删除 ")
                  ])),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_n_button, {
                  class: "btn",
                  onClick: _cache[5] || (_cache[5] = ($event) => roomDetailVisible.value = false)
                }, {
                  default: withCtx(() => _cache[10] || (_cache[10] = [
                    createTextVNode("取消")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "primary",
                  class: "btn",
                  onClick: saveRoomDetail
                }, {
                  default: withCtx(() => _cache[11] || (_cache[11] = [
                    createTextVNode(" 确认 ")
                  ])),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n_form, {
                "label-placement": "left",
                "label-width": 130
              }, {
                default: withCtx(() => [
                  props.type === "add" ? (openBlock(), createBlock(_component_n_form_item, {
                    key: 0,
                    label: "房间号"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_n_input, {
                        value: data.value.id,
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => data.value.id = $event),
                        placeholder: "请输入房间号"
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_n_form_item, null, {
                    label: withCtx(() => [
                      createBaseVNode("span", _hoisted_1$6, [
                        _cache[7] || (_cache[7] = createTextVNode(" 开启 ")),
                        createVNode(_component_Tip, { tip: "直播间是否开启webhook，覆盖黑名单配置" })
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n_switch, {
                        value: data.value.open,
                        "onUpdate:value": _cache[1] || (_cache[1] = ($event) => data.value.open = $event)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_n_form_item, null, {
                    label: withCtx(() => [
                      createBaseVNode("span", _hoisted_2$6, [
                        _cache[8] || (_cache[8] = createTextVNode(" 备注 ")),
                        createVNode(_component_Tip, { tip: "仅用于提示" })
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n_input, {
                        value: data.value.remark,
                        "onUpdate:value": _cache[2] || (_cache[2] = ($event) => data.value.remark = $event),
                        placeholder: "请输入备注",
                        clearable: ""
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  createVNode(CommonSetting, {
                    data: data.value,
                    "onUpdate:data": _cache[3] || (_cache[3] = ($event) => data.value = $event),
                    "global-fields-obj": globalFieldsObj.value,
                    "onUpdate:globalFieldsObj": _cache[4] || (_cache[4] = ($event) => globalFieldsObj.value = $event),
                    "biliup-presets-options": props.biliupPresetsOptions,
                    "ffmpeg-options": props.ffmpegOptions,
                    "global-value": props.globalValue,
                    type: "room"
                  }, null, 8, ["data", "global-fields-obj", "biliup-presets-options", "ffmpeg-options", "global-value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const RoomSettingDialog = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-bae4025c"]]);
const _hoisted_1$5 = { class: "" };
const _hoisted_2$5 = { class: "inline-flex" };
const _hoisted_3$4 = { class: "inline-flex" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NotificationSetting",
  props: {
    "data": {
      default: () => {
      }
    },
    "dataModifiers": {}
  },
  emits: ["update:data"],
  setup(__props) {
    const config$1 = useModel(__props, "data");
    const typeOptions = [
      { value: NotificationType.system, label: "系统通知" },
      { value: NotificationType.mail, label: "邮箱" },
      { value: NotificationType.tg, label: "tg bot" },
      { value: NotificationType.server, label: "server酱" },
      { value: NotificationType.ntfy, label: "ntfy" },
      { value: NotificationType.allInOne, label: "push all in cloud" }
    ];
    const notice = useNotification();
    const notifyTest = async () => {
      await config.notifyTest("我是一条测试信息", "我是一条测试信息", cloneDeep(config$1.value));
      notice.info({
        title: "已尝试发送测试信息，请注意查收",
        duration: 2e3
      });
    };
    return (_ctx, _cache) => {
      const _component_n_select = __unplugin_components_0$3;
      const _component_n_button = Button;
      const _component_n_form_item = __unplugin_components_1$2;
      const _component_Tip = _sfc_main$a;
      const _component_n_input = __unplugin_components_2$2;
      const _component_n_switch = __unplugin_components_2$4;
      const _component_n_checkbox = __unplugin_components_1$1;
      const _component_n_space = __unplugin_components_4;
      const _component_n_checkbox_group = __unplugin_components_2$7;
      const _component_n_form = __unplugin_components_7;
      const _component_n_input_number = __unplugin_components_2$5;
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createVNode(_component_n_form, {
          "label-placement": "left",
          "label-width": 120
        }, {
          default: withCtx(() => [
            _cache[36] || (_cache[36] = createBaseVNode("h2", null, "通知", -1)),
            createVNode(_component_n_form_item, { label: "通知类型" }, {
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: config$1.value.notification.setting.type,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => config$1.value.notification.setting.type = $event),
                  options: typeOptions,
                  placeholder: "请选择通知类型",
                  clearable: ""
                }, null, 8, ["value"]),
                config$1.value.notification.setting.type ? (openBlock(), createBlock(_component_n_button, {
                  key: 0,
                  type: "primary",
                  style: { "margin-left": "10px" },
                  onClick: notifyTest
                }, {
                  default: withCtx(() => _cache[23] || (_cache[23] = [
                    createTextVNode(" 测试 ")
                  ])),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            config$1.value.notification.setting.type === unref(NotificationType).mail ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createVNode(_component_n_form_item, null, {
                label: withCtx(() => [
                  createBaseVNode("span", _hoisted_2$5, [
                    _cache[24] || (_cache[24] = createBaseVNode("span", null, " 服务器地址 ", -1)),
                    createVNode(_component_Tip, { tip: "请自行查询并配置服务商的smtp服务器" })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: config$1.value.notification.setting.mail.host,
                    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => config$1.value.notification.setting.mail.host = $event),
                    placeholder: "请输入服务器地址"
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, null, {
                label: withCtx(() => _cache[25] || (_cache[25] = [
                  createBaseVNode("span", { class: "inline-flex" }, " 端口号 ", -1)
                ])),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: config$1.value.notification.setting.mail.port,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => config$1.value.notification.setting.mail.port = $event),
                    placeholder: "请输入端口号"
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, null, {
                label: withCtx(() => _cache[26] || (_cache[26] = [
                  createBaseVNode("span", { class: "inline-flex" }, " TLS ", -1)
                ])),
                default: withCtx(() => [
                  createVNode(_component_n_switch, {
                    value: config$1.value.notification.setting.mail.secure,
                    "onUpdate:value": _cache[3] || (_cache[3] = ($event) => config$1.value.notification.setting.mail.secure = $event)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, null, {
                label: withCtx(() => _cache[27] || (_cache[27] = [
                  createBaseVNode("span", { class: "inline-flex" }, " 邮箱账户 ", -1)
                ])),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: config$1.value.notification.setting.mail.user,
                    "onUpdate:value": _cache[4] || (_cache[4] = ($event) => config$1.value.notification.setting.mail.user = $event),
                    placeholder: "请输入邮箱账户"
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, null, {
                label: withCtx(() => _cache[28] || (_cache[28] = [
                  createBaseVNode("span", { class: "inline-flex" }, " 授权码 ", -1)
                ])),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: config$1.value.notification.setting.mail.pass,
                    "onUpdate:value": _cache[5] || (_cache[5] = ($event) => config$1.value.notification.setting.mail.pass = $event),
                    placeholder: "请输入授权码",
                    type: "password",
                    "show-password-on": "click"
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, null, {
                label: withCtx(() => _cache[29] || (_cache[29] = [
                  createBaseVNode("span", { class: "inline-flex" }, " 收件人邮箱 ", -1)
                ])),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: config$1.value.notification.setting.mail.to,
                    "onUpdate:value": _cache[6] || (_cache[6] = ($event) => config$1.value.notification.setting.mail.to = $event),
                    placeholder: "请输入收件人邮箱"
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ], 64)) : config$1.value.notification.setting.type === unref(NotificationType).server ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_3$4, [
                  _cache[30] || (_cache[30] = createTextVNode(" key ")),
                  createVNode(_component_Tip, { tip: "详情请参考官网：https://sct.ftqq.com/" })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config$1.value.notification.setting.server.key,
                  "onUpdate:value": _cache[7] || (_cache[7] = ($event) => config$1.value.notification.setting.server.key = $event),
                  type: "password",
                  placeholder: "请输入server酱key",
                  "show-password-on": "click"
                }, null, 8, ["value"])
              ]),
              _: 1
            })) : config$1.value.notification.setting.type === unref(NotificationType).tg ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createVNode(_component_n_form_item, null, {
                label: withCtx(() => _cache[31] || (_cache[31] = [
                  createBaseVNode("span", { class: "inline-flex" }, " token ", -1)
                ])),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: config$1.value.notification.setting.tg.key,
                    "onUpdate:value": _cache[8] || (_cache[8] = ($event) => config$1.value.notification.setting.tg.key = $event),
                    placeholder: "请输入tg bot的token",
                    type: "password",
                    "show-password-on": "click"
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, null, {
                label: withCtx(() => _cache[32] || (_cache[32] = [
                  createBaseVNode("span", { class: "inline-flex" }, " chat_id ", -1)
                ])),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: config$1.value.notification.setting.tg.chat_id,
                    "onUpdate:value": _cache[9] || (_cache[9] = ($event) => config$1.value.notification.setting.tg.chat_id = $event),
                    placeholder: "请输入chat_id"
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ], 64)) : config$1.value.notification.setting.type === unref(NotificationType).ntfy ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
              createVNode(_component_n_form_item, null, {
                label: withCtx(() => _cache[33] || (_cache[33] = [
                  createBaseVNode("span", { class: "inline-flex" }, " 服务器地址 ", -1)
                ])),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: config$1.value.notification.setting.ntfy.url,
                    "onUpdate:value": _cache[10] || (_cache[10] = ($event) => config$1.value.notification.setting.ntfy.url = $event),
                    placeholder: "请输入服务器地址"
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, null, {
                label: withCtx(() => _cache[34] || (_cache[34] = [
                  createBaseVNode("span", { class: "inline-flex" }, " topic ", -1)
                ])),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: config$1.value.notification.setting.ntfy.topic,
                    "onUpdate:value": _cache[11] || (_cache[11] = ($event) => config$1.value.notification.setting.ntfy.topic = $event),
                    placeholder: "请输入topic"
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ], 64)) : config$1.value.notification.setting.type === unref(NotificationType).allInOne ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
              createVNode(_component_n_form_item, null, {
                label: withCtx(() => [
                  createVNode(_component_Tip, {
                    tip: "项目：https://github.com/CaoMeiYouRen/push-all-in-cloud，包含/push",
                    text: "服务器地址"
                  })
                ]),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: config$1.value.notification.setting.allInOne.server,
                    "onUpdate:value": _cache[12] || (_cache[12] = ($event) => config$1.value.notification.setting.allInOne.server = $event),
                    placeholder: "请输入服务器地址"
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, null, {
                label: withCtx(() => _cache[35] || (_cache[35] = [
                  createBaseVNode("span", { class: "inline-flex" }, " Push Key ", -1)
                ])),
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: config$1.value.notification.setting.allInOne.key,
                    "onUpdate:value": _cache[13] || (_cache[13] = ($event) => config$1.value.notification.setting.allInOne.key = $event),
                    placeholder: "请输入push key",
                    type: "password",
                    "show-password-on": "click"
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ], 64)) : createCommentVNode("", true),
            _cache[37] || (_cache[37] = createBaseVNode("h3", null, "通知任务", -1)),
            createVNode(_component_n_form_item, { label: "ffmpeg任务" }, {
              default: withCtx(() => [
                createVNode(_component_n_checkbox_group, {
                  value: config$1.value.notification.task.ffmpeg,
                  "onUpdate:value": _cache[14] || (_cache[14] = ($event) => config$1.value.notification.task.ffmpeg = $event)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_checkbox, {
                          value: "success",
                          label: "成功"
                        }),
                        createVNode(_component_n_checkbox, {
                          value: "failure",
                          label: "失败"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "弹幕转换任务" }, {
              default: withCtx(() => [
                createVNode(_component_n_checkbox_group, {
                  value: config$1.value.notification.task.danmu,
                  "onUpdate:value": _cache[15] || (_cache[15] = ($event) => config$1.value.notification.task.danmu = $event)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_checkbox, {
                          value: "success",
                          label: "成功"
                        }),
                        createVNode(_component_n_checkbox, {
                          value: "failure",
                          label: "失败"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "上传任务" }, {
              default: withCtx(() => [
                createVNode(_component_n_checkbox_group, {
                  value: config$1.value.notification.task.upload,
                  "onUpdate:value": _cache[16] || (_cache[16] = ($event) => config$1.value.notification.task.upload = $event)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_checkbox, {
                          value: "success",
                          label: "成功"
                        }),
                        createVNode(_component_n_checkbox, {
                          value: "failure",
                          label: "失败"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "B站下载任务" }, {
              default: withCtx(() => [
                createVNode(_component_n_checkbox_group, {
                  value: config$1.value.notification.task.download,
                  "onUpdate:value": _cache[17] || (_cache[17] = ($event) => config$1.value.notification.task.download = $event)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_checkbox, {
                          value: "success",
                          label: "成功"
                        }),
                        createVNode(_component_n_checkbox, {
                          value: "failure",
                          label: "失败"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "斗鱼下载任务" }, {
              default: withCtx(() => [
                createVNode(_component_n_checkbox_group, {
                  value: config$1.value.notification.task.douyuDownload,
                  "onUpdate:value": _cache[18] || (_cache[18] = ($event) => config$1.value.notification.task.douyuDownload = $event)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_checkbox, {
                          value: "success",
                          label: "成功"
                        }),
                        createVNode(_component_n_checkbox, {
                          value: "failure",
                          label: "失败"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "稿件审核状态" }, {
              default: withCtx(() => [
                createVNode(_component_n_checkbox_group, {
                  value: config$1.value.notification.task.mediaStatusCheck,
                  "onUpdate:value": _cache[19] || (_cache[19] = ($event) => config$1.value.notification.task.mediaStatusCheck = $event)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_space, { "item-style": "display: flex;" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_checkbox, {
                          value: "success",
                          label: "通过"
                        }),
                        createVNode(_component_n_checkbox, {
                          value: "failure",
                          label: "失败"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createBaseVNode("h2", null, [
          _cache[38] || (_cache[38] = createTextVNode("最大任务处理数")),
          createVNode(_component_Tip, { tip: `-1为无限` })
        ]),
        createVNode(_component_n_form, {
          "label-placement": "left",
          "label-width": 140
        }, {
          default: withCtx(() => [
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[39] || (_cache[39] = [
                createBaseVNode("span", { class: "inline-flex" }, " ffmpeg任务 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config$1.value.task.ffmpegMaxNum,
                  "onUpdate:value": _cache[20] || (_cache[20] = ($event) => config$1.value.task.ffmpegMaxNum = $event),
                  min: "-1",
                  max: "65535"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[40] || (_cache[40] = [
                createBaseVNode("span", { class: "inline-flex" }, " 斗鱼下载", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config$1.value.task.douyuDownloadMaxNum,
                  "onUpdate:value": _cache[21] || (_cache[21] = ($event) => config$1.value.task.douyuDownloadMaxNum = $event),
                  min: "-1",
                  max: "65535"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[41] || (_cache[41] = [
                createBaseVNode("span", { class: "inline-flex" }, " Bilibili上传 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config$1.value.task.biliUploadMaxNum,
                  "onUpdate:value": _cache[22] || (_cache[22] = ($event) => config$1.value.task.biliUploadMaxNum = $event),
                  min: "-1",
                  max: "65535"
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const NotificationSetting = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-8f45694d"]]);
const _hoisted_1$4 = { class: "" };
const _hoisted_2$4 = { class: "inline-flex" };
const _hoisted_3$3 = { class: "inline-flex" };
const _hoisted_4$3 = { class: "inline-flex" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BiliSetting",
  props: {
    "data": {
      default: () => {
      }
    },
    "dataModifiers": {}
  },
  emits: ["update:data"],
  setup(__props) {
    const config2 = useModel(__props, "data");
    const lineOptions = [
      { label: "自动", value: "auto" },
      { label: "cs-bda2", value: "cs-bda2" },
      { label: "cs-bldsa", value: "cs-bldsa" },
      { label: "cs-tx", value: "cs-tx" },
      { label: "cs-txa", value: "cs-txa" },
      { label: "cs-alia", value: "cs-alia" },
      { label: "jd-bldsa", value: "jd-bldsa" },
      { label: "jd-bd", value: "jd-bd" },
      { label: "jd-tx", value: "jd-tx" },
      { label: "jd-txa", value: "jd-txa" },
      { label: "jd-alia", value: "jd-alia" }
    ];
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$a;
      const _component_n_select = __unplugin_components_0$3;
      const _component_n_form_item = __unplugin_components_1$2;
      const _component_n_input_number = __unplugin_components_2$5;
      const _component_n_form = __unplugin_components_7;
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _cache[12] || (_cache[12] = createBaseVNode("h2", null, "Bilibili上传配置", -1)),
        createVNode(_component_n_form, {
          "label-placement": "left",
          "label-width": 140
        }, {
          default: withCtx(() => [
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_2$4, [
                  _cache[5] || (_cache[5] = createTextVNode(" 线路 ")),
                  createVNode(_component_Tip, { tip: `上传线路，自动会根据网络情况选择最优线路，如果上传失败请手动选择线路，切换后请上传测试线路能否实际使用。<br/>访问查询：<a href='https://member.bilibili.com/preupload?r=ping' target='_blank'>https://member.bilibili.com/preupload?r=ping</a>` })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: config2.value.biliUpload.line,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => config2.value.biliUpload.line = $event),
                  options: lineOptions
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[6] || (_cache[6] = [
                createBaseVNode("span", { class: "inline-flex" }, " 重试次数 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.biliUpload.retryTimes,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => config2.value.biliUpload.retryTimes = $event),
                  min: "0",
                  max: "20"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[7] || (_cache[7] = [
                createBaseVNode("span", { class: "inline-flex" }, " 重试延迟 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.biliUpload.retryDelay,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => config2.value.biliUpload.retryDelay = $event),
                  min: "0",
                  max: "10000",
                  step: "1000"
                }, {
                  suffix: withCtx(() => _cache[8] || (_cache[8] = [
                    createTextVNode("毫秒")
                  ])),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_3$3, [
                  _cache[9] || (_cache[9] = createTextVNode(" 并发 ")),
                  createVNode(_component_Tip, { tip: "单个分P上传并发数，并非全局最大上传数" })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.biliUpload.concurrency,
                  "onUpdate:value": _cache[3] || (_cache[3] = ($event) => config2.value.biliUpload.concurrency = $event),
                  min: "1",
                  max: "128"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_4$3, [
                  _cache[10] || (_cache[10] = createTextVNode(" 检查间隔 ")),
                  createVNode(_component_Tip, { tip: "用于自动评论及上传审核的检查稿件间隔时间，请勿设置过短以免触发风控" })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.biliUpload.checkInterval,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => config2.value.biliUpload.checkInterval = $event),
                  min: "60",
                  step: "60",
                  placeholder: "请输入检查间隔"
                }, {
                  suffix: withCtx(() => _cache[11] || (_cache[11] = [
                    createTextVNode("秒")
                  ])),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const BiliSetting = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0ae7d3f7"]]);
const _hoisted_1$3 = { class: "" };
const _hoisted_2$3 = ["title", "onClick"];
const _hoisted_3$2 = { class: "inline-flex" };
const _hoisted_4$2 = { class: "inline-flex" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RecordSetting",
  props: {
    "data": {
      default: () => {
      }
    },
    "dataModifiers": {}
  },
  emits: ["update:data"],
  setup(__props) {
    const config2 = useModel(__props, "data");
    const { userList } = storeToRefs(useUserInfoStore());
    const qualityOptions = [
      { value: "highest", label: "最高" },
      { value: "high", label: "高" },
      { value: "medium", label: "中" },
      { value: "low", label: "低" },
      { value: "lowest", label: "最低" }
    ];
    const selectFolder = async (type) => {
      let file;
      if (window.isWeb) {
        file = await showDirectoryDialog({
          type: "directory"
        })[0];
      } else {
        file = await window.api.openDirectory({
          defaultPath: config2.value.webhook.recoderFolder
        });
      }
      if (!file) return;
      {
        config2.value.recorder.savePath = file;
      }
    };
    const titleList = ref([
      {
        value: "{platform}",
        label: "平台"
      },
      {
        value: "{channelId}",
        label: "房间号"
      },
      {
        value: "{remarks}",
        label: "备注"
      },
      {
        value: "{owner}",
        label: "主播名"
      },
      {
        value: "{title}",
        label: "标题"
      },
      {
        value: "{year}",
        label: "年"
      },
      {
        value: "{month}",
        label: "月"
      },
      {
        value: "{date}",
        label: "日"
      },
      {
        value: "{hour}",
        label: "时"
      },
      {
        value: "{min}",
        label: "分"
      },
      {
        value: "{sec}",
        label: "秒"
      }
    ]);
    const titleTip = computed(() => {
      const base = `请带上时间相关参数，避免文件被覆盖`;
      return titleList.value.map((item) => {
        return `${item.label}：${item.value}<br/>`;
      }).reduce((prev, cur) => prev + cur, base);
    });
    const titleInput = templateRef("titleInput");
    const setTitleVar = async (value) => {
      const input = titleInput.value?.inputElRef;
      if (input) {
        const start = input.selectionStart ?? config2.value.recorder.nameRule.length;
        const end = input.selectionEnd ?? config2.value.recorder.nameRule.length;
        const oldValue = config2.value.recorder.nameRule;
        config2.value.recorder.nameRule = oldValue.slice(0, start) + value + oldValue.slice(end);
        input.focus();
        await nextTick();
        input.setSelectionRange(start + value.length, start + value.length);
      } else {
        config2.value.recorder.nameRule += value;
      }
    };
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_2$2;
      const _component_n_icon = NIcon;
      const _component_n_form_item = __unplugin_components_1$2;
      const _component_Tip = _sfc_main$a;
      const _component_n_switch = __unplugin_components_2$4;
      const _component_n_input_number = __unplugin_components_2$5;
      const _component_n_select = __unplugin_components_0$3;
      const _component_n_form = __unplugin_components_7;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        _cache[27] || (_cache[27] = createBaseVNode("div", { style: { "display": "flex", "gap": "10px", "align-items": "center" } }, [
          createBaseVNode("h2", null, "录制配置"),
          createBaseVNode("p", null, "此项大部分配置不即时生效，需重新开始一个录制方可生效")
        ], -1)),
        createVNode(_component_n_form, {
          "label-placement": "left",
          "label-width": 140
        }, {
          default: withCtx(() => [
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[13] || (_cache[13] = [
                createBaseVNode("span", { class: "inline-flex" }, " 保存文件夹 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: config2.value.recorder.savePath,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => config2.value.recorder.savePath = $event),
                  placeholder: "请选择要保存的文件夹"
                }, null, 8, ["value"]),
                createVNode(_component_n_icon, {
                  style: { "margin-left": "10px" },
                  size: "26",
                  class: "pointer",
                  onClick: _cache[1] || (_cache[1] = ($event) => selectFolder("recorder"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(FolderOpenOutline))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: unref(titleTip),
                  text: "文件命名规则"
                }, null, 8, ["tip"])
              ]),
              feedback: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(titleList), (item) => {
                  return openBlock(), createElementBlock("span", {
                    key: item.value,
                    title: item.label,
                    class: "title-var",
                    onClick: ($event) => setTitleVar(item.value)
                  }, toDisplayString(item.value), 9, _hoisted_2$3);
                }), 128))
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  ref_key: "titleInput",
                  ref: titleInput,
                  value: config2.value.recorder.nameRule,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => config2.value.recorder.nameRule = $event),
                  placeholder: "请输入文件命名规则",
                  clearable: "",
                  spellcheck: "false"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { style: { "display": "none" } }, {
              label: withCtx(() => _cache[14] || (_cache[14] = [
                createBaseVNode("span", { class: "inline-flex" }, " 自动录制 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_switch, {
                  value: config2.value.recorder.autoRecord,
                  "onUpdate:value": _cache[3] || (_cache[3] = ($event) => config2.value.recorder.autoRecord = $event)
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_3$2, [
                  _cache[15] || (_cache[15] = createTextVNode(" 检查间隔 ")),
                  createVNode(_component_Tip, { tip: "直播状态检查，注意风控" })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.recorder.checkInterval,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => config2.value.recorder.checkInterval = $event),
                  min: "10",
                  step: "10"
                }, {
                  suffix: withCtx(() => _cache[16] || (_cache[16] = [
                    createTextVNode("秒")
                  ])),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_4$2, [
                  _cache[17] || (_cache[17] = createTextVNode(" 分段录制 ")),
                  createVNode(_component_Tip, { tip: "0为不分段" })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input_number, {
                  value: config2.value.recorder.segment,
                  "onUpdate:value": _cache[5] || (_cache[5] = ($event) => config2.value.recorder.segment = $event),
                  min: "0",
                  step: "10"
                }, {
                  suffix: withCtx(() => _cache[18] || (_cache[18] = [
                    createTextVNode("分钟")
                  ])),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[19] || (_cache[19] = [
                createBaseVNode("span", { class: "inline-flex" }, " 画质 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: config2.value.recorder.quality,
                  "onUpdate:value": _cache[6] || (_cache[6] = ($event) => config2.value.recorder.quality = $event),
                  options: qualityOptions
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, { text: "B站录制账号" }, {
                  default: withCtx(() => _cache[20] || (_cache[20] = [
                    createTextVNode("登录才能录制高清画质")
                  ])),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: config2.value.recorder.uid,
                  "onUpdate:value": _cache[7] || (_cache[7] = ($event) => config2.value.recorder.uid = $event),
                  options: unref(userList),
                  "label-field": "name",
                  "value-field": "uid",
                  clearable: ""
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[21] || (_cache[21] = [
                createBaseVNode("span", null, " 保存封面 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_switch, {
                  value: config2.value.recorder.saveCover,
                  "onUpdate:value": _cache[8] || (_cache[8] = ($event) => config2.value.recorder.saveCover = $event)
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[22] || (_cache[22] = [
                createBaseVNode("span", null, " 调试模式 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_switch, {
                  value: config2.value.recorder.debugMode,
                  "onUpdate:value": _cache[9] || (_cache[9] = ($event) => config2.value.recorder.debugMode = $event)
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            _cache[26] || (_cache[26] = createBaseVNode("h2", null, "弹幕录制", -1)),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => _cache[23] || (_cache[23] = [
                createBaseVNode("span", { class: "inline-flex" }, " 弹幕录制 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_switch, {
                  value: config2.value.recorder.disableProvideCommentsWhenRecording,
                  "onUpdate:value": _cache[10] || (_cache[10] = ($event) => config2.value.recorder.disableProvideCommentsWhenRecording = $event),
                  "checked-value": false,
                  "unchecked-value": true
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            !config2.value.recorder.disableProvideCommentsWhenRecording ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
              label: withCtx(() => _cache[24] || (_cache[24] = [
                createBaseVNode("span", { class: "inline-flex" }, " 保存礼物 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_switch, {
                  value: config2.value.recorder.saveGiftDanma,
                  "onUpdate:value": _cache[11] || (_cache[11] = ($event) => config2.value.recorder.saveGiftDanma = $event)
                }, null, 8, ["value"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            !config2.value.recorder.disableProvideCommentsWhenRecording ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
              label: withCtx(() => _cache[25] || (_cache[25] = [
                createBaseVNode("span", { class: "inline-flex" }, " 保存高能弹幕 ", -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_switch, {
                  value: config2.value.recorder.saveSCDanma,
                  "onUpdate:value": _cache[12] || (_cache[12] = ($event) => config2.value.recorder.saveSCDanma = $event)
                }, null, 8, ["value"])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const RecordSetting = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d8c8a91d"]]);
var FileSaver_min = { exports: {} };
(function(module, exports) {
  (function(a, b) {
    b();
  })(commonjsGlobal, function() {
    function b(a2, b2) {
      return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
    }
    function c2(a2, b2, c3) {
      var d2 = new XMLHttpRequest();
      d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
        g(d2.response, b2, c3);
      }, d2.onerror = function() {
        console.error("could not download file");
      }, d2.send();
    }
    function d(a2) {
      var b2 = new XMLHttpRequest();
      b2.open("HEAD", a2, false);
      try {
        b2.send();
      } catch (a3) {
      }
      return 200 <= b2.status && 299 >= b2.status;
    }
    function e(a2) {
      try {
        a2.dispatchEvent(new MouseEvent("click"));
      } catch (c3) {
        var b2 = document.createEvent("MouseEvents");
        b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
      }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
    } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h2) {
      var i = f.URL || f.webkitURL, j = document.createElement("a");
      g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c2(b2, g2, h2) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
        i.revokeObjectURL(j.href);
      }, 4e4), setTimeout(function() {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h2) {
      if (g2 = g2 || f2.name || "download", "string" != typeof f2) navigator.msSaveOrOpenBlob(b(f2, h2), g2);
      else if (d(f2)) c2(f2, g2, h2);
      else {
        var i = document.createElement("a");
        i.href = f2, i.target = "_blank", setTimeout(function() {
          e(i);
        });
      }
    } : function(b2, d2, e2, g2) {
      if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2) return c2(b2, d2, e2);
      var h2 = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h2 && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function() {
          var a2 = k.result;
          a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
        }, k.readAsDataURL(b2);
      } else {
        var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
        g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
          l.revokeObjectURL(m);
        }, 4e4);
      }
    });
    f.saveAs = g.saveAs = g, module.exports = g;
  });
})(FileSaver_min);
var FileSaver_minExports = FileSaver_min.exports;
const _hoisted_1$2 = { class: "inline-flex" };
const _hoisted_2$2 = { class: "inline-flex" };
const _hoisted_3$1 = { class: "inline-flex" };
const _hoisted_4$1 = { class: "inline-flex" };
const _hoisted_5$1 = { class: "inline-flex" };
const _hoisted_6 = { class: "inline-flex" };
const _hoisted_7 = { class: "inline-flex" };
const _hoisted_8 = { class: "inline-flex" };
const _hoisted_9 = { class: "inline-flex" };
const _hoisted_10 = { class: "room-list" };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = { key: 0 };
const _hoisted_13 = { class: "footer" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    "modelValue": { type: Boolean, ...{ required: true, default: false } },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const notice = useNotification();
    const appConfigStore = useAppConfig();
    const showModal = useModel(__props, "modelValue");
    const isWeb = computed(() => window.isWeb);
    const config$1 = ref({
      task: {
        ffmpegMaxNum: -1,
        douyuDownloadMaxNum: -1,
        biliUploadMaxNum: -1
      }
    });
    const initConfig = ref({});
    const logLevelOptions = ref([
      { label: "debug", value: "debug" },
      { label: "info", value: "info" },
      { label: "warn", value: "warn" },
      { label: "error", value: "error" }
    ]);
    const themeOptions = ref([
      { label: "自动", value: "system" },
      { label: "浅色", value: "light" },
      { label: "深色", value: "dark" }
    ]);
    const confirm = useConfirm();
    const saveConfig = async () => {
      if (!isWeb.value && initConfig.value.webhook.recoderFolder && initConfig.value.webhook.recoderFolder !== config$1.value.webhook.recoderFolder) {
        const isExits = await window.api.exits(
          window.path.join(config$1.value.webhook.recoderFolder, "config.json")
        );
        if (!isExits) {
          const [status] = await confirm.warning({
            content: "录播姬目录下应该有一个名为config.json的文件，请确认选择的目录是否正确？"
          });
          if (!status) return;
        }
      }
      if (!config$1.value.passKey) {
        notice.error({
          title: "鉴权密钥不能为空",
          duration: 1e3
        });
        return;
      }
      await config.save(deepRaw(config$1.value));
      window?.api?.common?.setTheme(config$1.value.theme);
      window?.api?.common?.setOpenAtLogin(config$1.value.autoLaunch || false);
      close();
      appConfigStore.getAppConfig();
    };
    const close = () => {
      showModal.value = false;
    };
    const getConfig = async () => {
      const data = await config.get();
      config$1.value = data;
      initConfig.value = cloneDeep(data);
    };
    const selectFile = async (type, defaultPath) => {
      const files = await window.api.openFile({
        multi: false,
        defaultPath
      });
      if (!files) return;
      if (type === "ffmpeg") {
        config$1.value.ffmpegPath = files[0];
      } else if (type === "ffprobe") {
        config$1.value.ffprobePath = files[0];
      } else if (type === "danmakuFactory") {
        config$1.value.danmuFactoryPath = files[0];
      } else if (type === "losslessCut") {
        config$1.value.losslessCutPath = files[0];
      } else {
        console.error("未知文件类型");
      }
    };
    const resetBin = async (type) => {
      if (type === "ffmpeg") {
        config$1.value.ffmpegPath = await config.resetBin(type);
      } else if (type === "ffprobe") {
        config$1.value.ffprobePath = await config.resetBin(type);
      } else if (type === "danmakuFactory") {
        config$1.value.danmuFactoryPath = await config.resetBin(type);
      } else {
        console.error("未知文件类型");
      }
    };
    const selectFolder = async (type) => {
      let file;
      if (window.isWeb) {
        file = await showDirectoryDialog({
          type: "directory"
        })[0];
      } else {
        file = await window.api.openDirectory({
          defaultPath: config$1.value.webhook.recoderFolder
        });
      }
      if (!file) return;
      {
        config$1.value.webhook.recoderFolder = file;
      }
    };
    const handleOpen = async () => {
      await Promise.all([getPresets(), getPresetOptions()]);
      await getConfig();
    };
    const presets = ref([]);
    const getPresets = async () => {
      presets.value = await videoPreset.list();
    };
    const presetsOptions = computed(() => {
      return presets.value.map((item) => {
        return {
          label: item.name,
          value: item.id
        };
      });
    });
    const roomList = computed(() => {
      return Object.entries(config$1.value.webhook.rooms).map(([id, value]) => {
        return {
          id,
          ...value
        };
      });
    });
    const roomType = ref("add");
    const roomDetailVisible = ref(false);
    const roomGlobalCheckObj = ref({});
    const globalFields = ref([
      "uid",
      "minSize",
      "title",
      "uploadPresetId",
      "danmu",
      "ffmpegPreset",
      "danmuPreset",
      "autoPartMerge",
      "partMergeMinute",
      "hotProgressSample",
      "hotProgressHeight",
      "hotProgressColor",
      "hotProgressFillColor",
      "hotProgress",
      "useLiveCover",
      "convert2Mp4",
      "useVideoAsTitle",
      "removeOriginAfterConvert",
      "removeOriginAfterUpload",
      "noConvertHandleVideo",
      "uploadHandleTime",
      "limitUploadTime",
      "uploadNoDanmu",
      "noDanmuVideoPreset"
    ]);
    const webhookDefaultValue = computed(() => {
      if (!config$1.value.webhook) return {};
      const data = cloneDeep(config$1.value.webhook);
      delete data.rooms;
      delete data.blacklist;
      delete data.recoderFolder;
      return data;
    });
    const handleRoomDetail = (roomId) => {
      roomType.value = "edit";
      const room = config$1.value.webhook.rooms[roomId];
      tempRoomDetail.value = {
        id: roomId,
        ...room
      };
      const noGlobalFields = room.noGlobal ?? [];
      for (const key of globalFields.value) {
        roomGlobalCheckObj.value[key] = !noGlobalFields.includes(key);
        if (roomGlobalCheckObj.value[key]) {
          tempRoomDetail.value[key] = webhookDefaultValue.value[key];
        }
      }
      console.log(roomGlobalCheckObj.value, room);
      roomDetailVisible.value = true;
    };
    const tempRoomDetail = ref({
      id: void 0,
      uid: void 0,
      open: true,
      minSize: 0,
      title: "",
      uploadPresetId: "",
      remark: "",
      danmu: false,
      ffmpegPreset: void 0,
      danmuPreset: void 0,
      autoPartMerge: false,
      partMergeMinute: 10,
      hotProgress: false,
      useLiveCover: false,
      hotProgressSample: 30,
      hotProgressHeight: 60,
      hotProgressColor: "#f9f5f3",
      hotProgressFillColor: "#333333",
      useVideoAsTitle: false,
      convert2Mp4: false,
      removeOriginAfterConvert: false,
      removeOriginAfterUpload: false,
      noConvertHandleVideo: false,
      uploadHandleTime: ["00:00:00", "23:59:59"],
      limitUploadTime: false,
      uploadNoDanmu: false,
      noDanmuVideoPreset: void 0
    });
    const saveRoomDetail = ({ id }) => {
      config$1.value.webhook.rooms[id] = tempRoomDetail.value;
    };
    const deleteRoom = (roomId) => {
      delete config$1.value.webhook.rooms[roomId];
      roomDetailVisible.value = false;
    };
    const ffmpegOptions = ref([]);
    const getPresetOptions = async () => {
      ffmpegOptions.value = await ffmpegPreset.options();
    };
    const addRoom = () => {
      roomType.value = "add";
      tempRoomDetail.value = {
        id: void 0,
        open: true,
        remark: "",
        ...toRaw(webhookDefaultValue.value)
      };
      console.log("tempRoomDetail", tempRoomDetail.value);
      roomDetailVisible.value = true;
      for (const key of globalFields.value) {
        roomGlobalCheckObj.value[key] = true;
      }
      console.log(roomGlobalCheckObj.value);
    };
    const exportSettingZip = async () => {
      const version = await common.version();
      const name = `biliLive-tools-${version}-${(/* @__PURE__ */ new Date()).getTime()}-配置备份.zip`;
      const blob = await config.exportConfig();
      FileSaver_minExports.saveAs(blob, name);
    };
    const { open: openImportFile, onChange: onImportFileChange } = useFileDialog({
      accept: ".zip",
      directory: false,
      multiple: false
    });
    onImportFileChange((files) => {
      if (!files) return;
      if (files.length === 0) return;
      console.log(files[0]);
      confirmImportSettingZip(files[0]);
    });
    const importSettingZip = async () => {
      const [status] = await confirm.warning({
        content: "导入后所有配置都将被替换，是否继续？"
      });
      if (!status) return;
      openImportFile();
    };
    const confirmImportSettingZip = async (file) => {
      await config.importConfig(file);
      await confirm.warning({
        content: "导入成功，重启应用后生效"
      });
      showModal.value = false;
    };
    return (_ctx, _cache) => {
      const _component_Tip = _sfc_main$a;
      const _component_n_switch = __unplugin_components_2$4;
      const _component_n_form_item = __unplugin_components_1$2;
      const _component_n_select = __unplugin_components_0$3;
      const _component_n_input = __unplugin_components_2$2;
      const _component_n_input_number = __unplugin_components_2$5;
      const _component_n_icon = NIcon;
      const _component_n_button = Button;
      const _component_n_form = __unplugin_components_7;
      const _component_n_tab_pane = __unplugin_components_4$1;
      const _component_n_tabs = __unplugin_components_6;
      const _component_n_card = __unplugin_components_2$6;
      const _component_n_modal = __unplugin_components_3$2;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_n_modal, {
          show: showModal.value,
          "onUpdate:show": _cache[30] || (_cache[30] = ($event) => showModal.value = $event),
          "mask-closable": false,
          "auto-focus": "",
          "on-after-enter": handleOpen
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "calc(100% - 60px)" },
              bordered: false,
              size: "huge",
              role: "dialog",
              "aria-modal": "true",
              class: "card"
            }, {
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_13, [
                  createVNode(_component_n_button, {
                    class: "btn",
                    onClick: close
                  }, {
                    default: withCtx(() => _cache[50] || (_cache[50] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    class: "btn",
                    onClick: saveConfig
                  }, {
                    default: withCtx(() => _cache[51] || (_cache[51] = [
                      createTextVNode(" 确认 ")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_tabs, {
                  type: "bar",
                  animated: "",
                  placement: "left",
                  class: "setting-tab"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_tab_pane, {
                      name: "common",
                      tab: "基本"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_form, {
                          ref: "formRef",
                          "label-placement": "left",
                          "label-width": 160
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createBaseVNode("span", _hoisted_1$2, [
                                  _cache[33] || (_cache[33] = createTextVNode(" 删除至回收站 ")),
                                  createVNode(_component_Tip, { tip: "关闭后若使用“删除源文件”等选项，文件将被直接删除，不会进入回收站，如果使用的文件为smb等远程协议挂载，可能会删除失败" })
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: unref(config$1).trash,
                                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(config$1).trash = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            !unref(isWeb) ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
                              label: withCtx(() => _cache[34] || (_cache[34] = [
                                createBaseVNode("span", { class: "inline-flex" }, " 启动时检查更新 ", -1)
                              ])),
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: unref(config$1).autoUpdate,
                                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(config$1).autoUpdate = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !unref(isWeb) ? (openBlock(), createBlock(_component_n_form_item, { key: 1 }, {
                              label: withCtx(() => _cache[35] || (_cache[35] = [
                                createBaseVNode("span", { class: "inline-flex" }, " 开启自启动 ", -1)
                              ])),
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: unref(config$1).autoLaunch,
                                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(config$1).autoLaunch = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !unref(isWeb) ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
                              label: withCtx(() => _cache[36] || (_cache[36] = [
                                createBaseVNode("span", { class: "inline-flex" }, " 最小化到任务栏 ", -1)
                              ])),
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: unref(config$1).minimizeToTray,
                                  "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(config$1).minimizeToTray = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !unref(isWeb) ? (openBlock(), createBlock(_component_n_form_item, { key: 3 }, {
                              label: withCtx(() => _cache[37] || (_cache[37] = [
                                createBaseVNode("span", { class: "inline-flex" }, " 关闭到任务栏 ", -1)
                              ])),
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: unref(config$1).closeToTray,
                                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(config$1).closeToTray = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(_component_n_form_item, { label: "log等级" }, {
                              default: withCtx(() => [
                                createVNode(_component_n_select, {
                                  value: unref(config$1).logLevel,
                                  "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(config$1).logLevel = $event),
                                  options: unref(logLevelOptions)
                                }, null, 8, ["value", "options"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createBaseVNode("span", _hoisted_2$2, [
                                  _cache[38] || (_cache[38] = createTextVNode(" host ")),
                                  createVNode(_component_Tip, { tip: `修改后需重启生效` })
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_input, {
                                  value: unref(config$1).host,
                                  "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(config$1).host = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createBaseVNode("span", _hoisted_3$1, [
                                  _cache[39] || (_cache[39] = createTextVNode(" port ")),
                                  createVNode(_component_Tip, {
                                    tip: `你可以在浏览器访问 http://127.0.0.1:${unref(config$1).port} 查询是否启动成功<br/><b>修改后需重启生效</b>`
                                  }, null, 8, ["tip"])
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_input_number, {
                                  value: unref(config$1).port,
                                  "onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(config$1).port = $event),
                                  min: "1",
                                  max: "65535"
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createBaseVNode("span", _hoisted_4$1, [
                                  _cache[40] || (_cache[40] = createTextVNode(" 鉴权密钥 ")),
                                  createVNode(_component_Tip, { tip: "用于webui鉴权，修改后需重启生效" })
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_input, {
                                  value: unref(config$1).passKey,
                                  "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(config$1).passKey = $event),
                                  type: "password",
                                  "show-password-on": "click"
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, { label: "主题" }, {
                              default: withCtx(() => [
                                createVNode(_component_n_select, {
                                  value: unref(config$1).theme,
                                  "onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(config$1).theme = $event),
                                  options: unref(themeOptions)
                                }, null, 8, ["value", "options"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createBaseVNode("span", _hoisted_5$1, [
                                  _cache[41] || (_cache[41] = createTextVNode(" 自定义二进制文件 ")),
                                  createVNode(_component_Tip, { tip: `开启后，将无法自动使用项目内二进制文件，可能导致应用无法使用，请谨慎开启` })
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: unref(config$1).customExecPath,
                                  "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(config$1).customExecPath = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            unref(config$1).customExecPath ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                              createVNode(_component_n_form_item, { label: "ffmpeg路径" }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_input, {
                                    value: unref(config$1).ffmpegPath,
                                    "onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(config$1).ffmpegPath = $event),
                                    placeholder: "请输入ffmpeg可执行文件路径，需要重启软件"
                                  }, null, 8, ["value"]),
                                  !unref(isWeb) ? (openBlock(), createBlock(_component_n_icon, {
                                    key: 0,
                                    style: { "margin-left": "10px" },
                                    size: "24",
                                    class: "pointer",
                                    title: "选择文件",
                                    onClick: _cache[12] || (_cache[12] = ($event) => selectFile("ffmpeg", unref(config$1).ffmpegPath))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(FolderOpenOutline))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_n_icon, {
                                    style: { "margin-left": "10px" },
                                    size: "24",
                                    class: "pointer",
                                    title: "重置",
                                    onClick: _cache[13] || (_cache[13] = ($event) => resetBin("ffmpeg"))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Refresh))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_form_item, { label: "ffprobe路径" }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_input, {
                                    value: unref(config$1).ffprobePath,
                                    "onUpdate:value": _cache[14] || (_cache[14] = ($event) => unref(config$1).ffprobePath = $event),
                                    placeholder: "请输入ffprobe可执行文件路径，需要重启软件"
                                  }, null, 8, ["value"]),
                                  !unref(isWeb) ? (openBlock(), createBlock(_component_n_icon, {
                                    key: 0,
                                    style: { "margin-left": "10px" },
                                    size: "24",
                                    class: "pointer",
                                    onClick: _cache[15] || (_cache[15] = ($event) => selectFile("ffprobe", unref(config$1).ffprobePath))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(FolderOpenOutline))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_n_icon, {
                                    style: { "margin-left": "10px" },
                                    size: "24",
                                    class: "pointer",
                                    title: "重置",
                                    onClick: _cache[16] || (_cache[16] = ($event) => resetBin("ffprobe"))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Refresh))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_form_item, { label: "danmakuFactory路径" }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_input, {
                                    value: unref(config$1).danmuFactoryPath,
                                    "onUpdate:value": _cache[17] || (_cache[17] = ($event) => unref(config$1).danmuFactoryPath = $event),
                                    placeholder: "请输入danmakuFactory可执行文件路径，需要重启软件"
                                  }, null, 8, ["value"]),
                                  !unref(isWeb) ? (openBlock(), createBlock(_component_n_icon, {
                                    key: 0,
                                    style: { "margin-left": "10px" },
                                    size: "24",
                                    class: "pointer",
                                    onClick: _cache[18] || (_cache[18] = ($event) => selectFile("danmakuFactory", unref(config$1).danmuFactoryPath))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(FolderOpenOutline))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_n_icon, {
                                    style: { "margin-left": "10px" },
                                    size: "24",
                                    class: "pointer",
                                    title: "重置",
                                    onClick: _cache[19] || (_cache[19] = ($event) => resetBin("danmakuFactory"))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Refresh))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ], 64)) : createCommentVNode("", true),
                            createVNode(_component_n_form_item, { label: "lossless-cut路径" }, {
                              default: withCtx(() => [
                                createVNode(_component_n_input, {
                                  value: unref(config$1).losslessCutPath,
                                  "onUpdate:value": _cache[20] || (_cache[20] = ($event) => unref(config$1).losslessCutPath = $event),
                                  placeholder: "请输入lossless-cut可执行文件路径，设置为空使用默认桌面程序"
                                }, null, 8, ["value"]),
                                !unref(isWeb) ? (openBlock(), createBlock(_component_n_icon, {
                                  key: 0,
                                  style: { "margin-left": "10px" },
                                  size: "26",
                                  class: "pointer",
                                  onClick: _cache[21] || (_cache[21] = ($event) => selectFile("losslessCut", unref(config$1).losslessCutPath))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(FolderOpenOutline))
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createBaseVNode("span", _hoisted_6, [
                                  _cache[42] || (_cache[42] = createTextVNode(" 配置 ")),
                                  createVNode(_component_Tip, { tip: "导出配置文件，导入后重启应用生效，尽量保持版本一致，如果按钮无法使用，请参照常见问题进行手动备份" })
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_button, {
                                  type: "primary",
                                  onClick: exportSettingZip
                                }, {
                                  default: withCtx(() => _cache[43] || (_cache[43] = [
                                    createTextVNode("导出配置")
                                  ])),
                                  _: 1
                                }),
                                createVNode(_component_n_button, {
                                  type: "primary",
                                  style: { "margin-left": "10px" },
                                  onClick: importSettingZip
                                }, {
                                  default: withCtx(() => _cache[44] || (_cache[44] = [
                                    createTextVNode("导入配置")
                                  ])),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 512)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "webhook",
                      tab: "webhook"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_form, {
                          "label-placement": "left",
                          "label-width": 130
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createBaseVNode("span", _hoisted_7, [
                                  _cache[45] || (_cache[45] = createTextVNode(" webhook ")),
                                  createVNode(_component_Tip, {
                                    tip: `webhook路径：<br/>B站录播姬：http://127.0.0.1:${unref(config$1).port}/webhook/bililiverecorder<br/>blrec：http://127.0.0.1:${unref(config$1).port}/webhook/blrec<br/>DDTV：http://127.0.0.1:${unref(config$1).port}/webhook/ddtv<br/>自定义：http://127.0.0.1:${unref(config$1).port}/webhook/custom <br/>`
                                  }, null, 8, ["tip"])
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: unref(config$1).webhook.open,
                                  "onUpdate:value": _cache[22] || (_cache[22] = ($event) => unref(config$1).webhook.open = $event)
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, null, {
                              label: withCtx(() => [
                                createBaseVNode("span", _hoisted_8, [
                                  _cache[46] || (_cache[46] = createTextVNode(" 黑名单 ")),
                                  createVNode(_component_Tip, { tip: "设置后相应直播间的视频不会被处理，用英文逗号分隔，如: 123456,1234567，也可以使用*，代表所有房间号" })
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_input, {
                                  value: unref(config$1).webhook.blacklist,
                                  "onUpdate:value": _cache[23] || (_cache[23] = ($event) => unref(config$1).webhook.blacklist = $event),
                                  placeholder: "设置需要屏蔽的房间号，用英文逗号分隔"
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_form_item, { label: "录播姬工作目录" }, {
                              label: withCtx(() => [
                                createBaseVNode("span", _hoisted_9, [
                                  _cache[47] || (_cache[47] = createTextVNode(" 录播姬工作目录 ")),
                                  createVNode(_component_Tip, { tip: "仅当你使用录播姬的webhook时，需要配置此选项" })
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_n_input, {
                                  value: unref(config$1).webhook.recoderFolder,
                                  "onUpdate:value": _cache[24] || (_cache[24] = ($event) => unref(config$1).webhook.recoderFolder = $event),
                                  placeholder: "请输入录播姬工作目录，docker版本不用配置"
                                }, null, 8, ["value"]),
                                createVNode(_component_n_icon, {
                                  style: { "margin-left": "10px" },
                                  size: "26",
                                  class: "pointer",
                                  onClick: _cache[25] || (_cache[25] = ($event) => selectFolder("recorder"))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(FolderOpenOutline))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(CommonSetting, {
                              data: unref(config$1).webhook,
                              "onUpdate:data": _cache[26] || (_cache[26] = ($event) => unref(config$1).webhook = $event),
                              "biliup-presets-options": unref(presetsOptions),
                              "ffmpeg-options": unref(ffmpegOptions),
                              "global-value": unref(webhookDefaultValue),
                              "global-fields-obj": {},
                              type: "global"
                            }, null, 8, ["data", "biliup-presets-options", "ffmpeg-options", "global-value"]),
                            createBaseVNode("h2", null, [
                              _cache[48] || (_cache[48] = createTextVNode("独立配置")),
                              createVNode(_component_Tip, { tip: "单独设置房间号的上传配置，会覆盖全局配置" })
                            ]),
                            createBaseVNode("div", _hoisted_10, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(roomList), (room) => {
                                return openBlock(), createElementBlock("span", {
                                  key: room.id,
                                  class: "room",
                                  onClick: ($event) => handleRoomDetail(room.id)
                                }, [
                                  createTextVNode(toDisplayString(room.id), 1),
                                  room.remark ? (openBlock(), createElementBlock("span", _hoisted_12, "(" + toDisplayString(room.remark) + ")", 1)) : createCommentVNode("", true)
                                ], 8, _hoisted_11);
                              }), 128)),
                              createVNode(_component_n_button, {
                                type: "primary",
                                onClick: addRoom
                              }, {
                                default: withCtx(() => _cache[49] || (_cache[49] = [
                                  createTextVNode(" 添加 ")
                                ])),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "upload",
                      tab: "B站上传"
                    }, {
                      default: withCtx(() => [
                        createVNode(BiliSetting, {
                          data: unref(config$1),
                          "onUpdate:data": _cache[27] || (_cache[27] = ($event) => isRef(config$1) ? config$1.value = $event : null)
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "recorder",
                      tab: "直播录制"
                    }, {
                      default: withCtx(() => [
                        createVNode(RecordSetting, {
                          data: unref(config$1),
                          "onUpdate:data": _cache[28] || (_cache[28] = ($event) => isRef(config$1) ? config$1.value = $event : null)
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_tab_pane, {
                      name: "notification",
                      tab: "任务"
                    }, {
                      default: withCtx(() => [
                        createVNode(NotificationSetting, {
                          data: unref(config$1),
                          "onUpdate:data": _cache[29] || (_cache[29] = ($event) => isRef(config$1) ? config$1.value = $event : null)
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(RoomSettingDialog, {
          visible: unref(roomDetailVisible),
          "onUpdate:visible": _cache[31] || (_cache[31] = ($event) => isRef(roomDetailVisible) ? roomDetailVisible.value = $event : null),
          data: unref(tempRoomDetail),
          "onUpdate:data": _cache[32] || (_cache[32] = ($event) => isRef(tempRoomDetail) ? tempRoomDetail.value = $event : null),
          type: unref(roomType),
          "biliup-presets-options": unref(presetsOptions),
          "ffmpeg-options": unref(ffmpegOptions),
          "global-fields-obj": unref(roomGlobalCheckObj),
          "global-value": unref(webhookDefaultValue),
          onSave: saveRoomDetail,
          onDelete: deleteRoom
        }, null, 8, ["visible", "data", "type", "biliup-presets-options", "ffmpeg-options", "global-fields-obj", "global-value"])
      ], 64);
    };
  }
});
const AppSettingDialog = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-c1339908"]]);
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
let _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
const escapeTest = /[&<>"']/;
const escapeReplace = new RegExp(escapeTest.source, "g");
const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
const escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape$1(html2, encode) {
  if (encode) {
    if (escapeTest.test(html2)) {
      return html2.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html2)) {
      return html2.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  let source = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return href;
}
const noopTest = { exec: () => null };
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false;
    let curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count)
        cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c2, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c2 && !invert) {
      suffLen++;
    } else if (currChar !== c2 && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function outputLink(cap, link2, raw, lexer) {
  const href = link2.href;
  const title = link2.title ? escape$1(link2.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text)
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape$1(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
class _Tokenizer {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(options) {
    this.options = options || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^(?: {1,4}| {0,3}\t)/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: rtrim(cap[0], "\n")
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let lines = rtrim(cap[0], "\n").split("\n");
      let raw = "";
      let text = "";
      const tokens = [];
      while (lines.length > 0) {
        let inBlockquote = false;
        const currentLines = [];
        let i;
        for (i = 0; i < lines.length; i++) {
          if (/^ {0,3}>/.test(lines[i])) {
            currentLines.push(lines[i]);
            inBlockquote = true;
          } else if (!inBlockquote) {
            currentLines.push(lines[i]);
          } else {
            break;
          }
        }
        lines = lines.slice(i);
        const currentRaw = currentLines.join("\n");
        const currentText = currentRaw.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, "\n    $1").replace(/^ {0,3}>[ \t]?/gm, "");
        raw = raw ? `${raw}
${currentRaw}` : currentRaw;
        text = text ? `${text}
${currentText}` : currentText;
        const top = this.lexer.state.top;
        this.lexer.state.top = true;
        this.lexer.blockTokens(currentText, tokens, true);
        this.lexer.state.top = top;
        if (lines.length === 0) {
          break;
        }
        const lastToken = tokens[tokens.length - 1];
        if (lastToken?.type === "code") {
          break;
        } else if (lastToken?.type === "blockquote") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.blockquote(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
          break;
        } else if (lastToken?.type === "list") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.list(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
          lines = newText.substring(tokens[tokens.length - 1].raw.length).split("\n");
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        let raw = "";
        let itemContents = "";
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
        let nextLine = src.split("\n", 1)[0];
        let blankLine = !line.trim();
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else if (blankLine) {
          indent = cap[1].length + 1;
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        if (blankLine && /^[ \t]*$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          const htmlBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}<(?:[a-z].*>|!--)`, "i");
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            let nextLineWithoutTabs;
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
              nextLineWithoutTabs = nextLine;
            } else {
              nextLineWithoutTabs = nextLine.replace(/\t/g, "    ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (htmlBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(nextLine)) {
              break;
            }
            if (nextLineWithoutTabs.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLineWithoutTabs.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.replace(/\t/g, "    ").search(/[^ ]/) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLineWithoutTabs.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (/\n[ \t]*\n[ \t]*$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      list2.items[list2.items.length - 1].raw = list2.items[list2.items.length - 1].raw.trimEnd();
      list2.items[list2.items.length - 1].text = list2.items[list2.items.length - 1].text.trimEnd();
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i = 0; i < list2.items.length; i++) {
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (!cap) {
      return;
    }
    if (!/[:|]/.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(/^\||\| *$/g, "").split("|");
    const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (/^ *-+: *$/.test(align)) {
        item.align.push("right");
      } else if (/^ *:-+: *$/.test(align)) {
        item.align.push("center");
      } else if (/^ *:-+ *$/.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (let i = 0; i < headers.length; i++) {
      item.header.push({
        text: headers[i],
        tokens: this.lexer.inline(headers[i]),
        header: true,
        align: item.align[i]
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell),
          header: false,
          align: item.align[i]
        };
      }));
    }
    return item;
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape$1(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      const linkString = (cap[2] || cap[1]).replace(/\s+/g, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match[0]].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape$1(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape$1(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
        } while (prevCapZero !== cap[0]);
        text = escape$1(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = cap[0];
      } else {
        text = escape$1(cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
}
const newline = /^(?:[ \t]*(?:\n|$))+/;
const blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
const fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
const hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
const heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
const bullet = /(?:[*+-]|\d{1,9}[.)])/;
const lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex();
const _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
const blockText = /^[^\n]+/;
const _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
const def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
const list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
const _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
const _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
const html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
const paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
const blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
const blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
const gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
const blockGfm = {
  ...blockNormal,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
};
const blockPedantic = {
  ...blockNormal,
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
};
const escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
const inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
const br = /^( {2,}|\\)\n(?!\s*$)/;
const inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
const _punctuation = "\\p{P}\\p{S}";
const punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex();
const blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
const emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex();
const emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex();
const emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex();
const anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex();
const autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
const _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
const tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
const _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
const link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
const reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
const nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
const reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
const inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
const inlinePedantic = {
  ...inlineNormal,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
};
const inlineGfm = {
  ...inlineNormal,
  escape: edit(escape).replace("])", "~|])").getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
const inlineBreaks = {
  ...inlineGfm,
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
const block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
const inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
class _Lexer {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(options) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new _Lexer(options);
    return lexer.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new _Lexer(options);
    return lexer.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = [], lastParagraphClipped = false) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    }
    let token;
    let lastToken;
    let cutSrc;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken?.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
}
class _Renderer {
  options;
  parser;
  // set by the parser
  constructor(options) {
    this.options = options || _defaults;
  }
  space(token) {
    return "";
  }
  code({ text, lang, escaped }) {
    const langString = (lang || "").match(/^\S*/)?.[0];
    const code = text.replace(/\n$/, "") + "\n";
    if (!langString) {
      return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape$1(langString) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
  }
  blockquote({ tokens }) {
    const body = this.parser.parse(tokens);
    return `<blockquote>
${body}</blockquote>
`;
  }
  html({ text }) {
    return text;
  }
  heading({ tokens, depth }) {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
  }
  hr(token) {
    return "<hr>\n";
  }
  list(token) {
    const ordered = token.ordered;
    const start = token.start;
    let body = "";
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j];
      body += this.listitem(item);
    }
    const type = ordered ? "ol" : "ul";
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
  }
  listitem(item) {
    let itemBody = "";
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked });
      if (item.loose) {
        if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
            item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
          }
        } else {
          item.tokens.unshift({
            type: "text",
            raw: checkbox + " ",
            text: checkbox + " "
          });
        }
      } else {
        itemBody += checkbox + " ";
      }
    }
    itemBody += this.parser.parse(item.tokens, !!item.loose);
    return `<li>${itemBody}</li>
`;
  }
  checkbox({ checked }) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens }) {
    return `<p>${this.parser.parseInline(tokens)}</p>
`;
  }
  table(token) {
    let header = "";
    let cell = "";
    for (let j = 0; j < token.header.length; j++) {
      cell += this.tablecell(token.header[j]);
    }
    header += this.tablerow({ text: cell });
    let body = "";
    for (let j = 0; j < token.rows.length; j++) {
      const row = token.rows[j];
      cell = "";
      for (let k = 0; k < row.length; k++) {
        cell += this.tablecell(row[k]);
      }
      body += this.tablerow({ text: cell });
    }
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow({ text }) {
    return `<tr>
${text}</tr>
`;
  }
  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type = token.header ? "th" : "td";
    const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens }) {
    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
  }
  em({ tokens }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }
  codespan({ text }) {
    return `<code>${text}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({ tokens }) {
    return `<del>${this.parser.parseInline(tokens)}</del>`;
  }
  link({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image({ href, title, text }) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += ">";
    return out;
  }
  text(token) {
    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : token.text;
  }
}
class _TextRenderer {
  // no need for block level renderers
  strong({ text }) {
    return text;
  }
  em({ text }) {
    return text;
  }
  codespan({ text }) {
    return text;
  }
  del({ text }) {
    return text;
  }
  html({ text }) {
    return text;
  }
  text({ text }) {
    return text;
  }
  link({ text }) {
    return "" + text;
  }
  image({ text }) {
    return "" + text;
  }
  br() {
    return "";
  }
}
class _Parser {
  options;
  renderer;
  textRenderer;
  constructor(options) {
    this.options = options || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new _Parser(options);
    return parser.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new _Parser(options);
    return parser.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
        const genericToken = anyToken;
        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "space": {
          out += this.renderer.space(token);
          continue;
        }
        case "hr": {
          out += this.renderer.hr(token);
          continue;
        }
        case "heading": {
          out += this.renderer.heading(token);
          continue;
        }
        case "code": {
          out += this.renderer.code(token);
          continue;
        }
        case "table": {
          out += this.renderer.table(token);
          continue;
        }
        case "blockquote": {
          out += this.renderer.blockquote(token);
          continue;
        }
        case "list": {
          out += this.renderer.list(token);
          continue;
        }
        case "html": {
          out += this.renderer.html(token);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(token);
          continue;
        }
        case "text": {
          let textToken = token;
          let body = this.renderer.text(textToken);
          while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
            textToken = tokens[++i];
            body += "\n" + this.renderer.text(textToken);
          }
          if (top) {
            out += this.renderer.paragraph({
              type: "paragraph",
              raw: body,
              text: body,
              tokens: [{ type: "text", raw: body, text: body }]
            });
          } else {
            out += body;
          }
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
        const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "escape": {
          out += renderer.text(token);
          break;
        }
        case "html": {
          out += renderer.html(token);
          break;
        }
        case "link": {
          out += renderer.link(token);
          break;
        }
        case "image": {
          out += renderer.image(token);
          break;
        }
        case "strong": {
          out += renderer.strong(token);
          break;
        }
        case "em": {
          out += renderer.em(token);
          break;
        }
        case "codespan": {
          out += renderer.codespan(token);
          break;
        }
        case "br": {
          out += renderer.br(token);
          break;
        }
        case "del": {
          out += renderer.del(token);
          break;
        }
        case "text": {
          out += renderer.text(token);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}
class _Hooks {
  options;
  block;
  constructor(options) {
    this.options = options || _defaults;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? _Lexer.lex : _Lexer.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? _Parser.parse : _Parser.parseInline;
  }
}
class Marked {
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = _Parser;
  Renderer = _Renderer;
  TextRenderer = _TextRenderer;
  Lexer = _Lexer;
  Tokenizer = _Tokenizer;
  Hooks = _Hooks;
  constructor(...args) {
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
              const tokens2 = genericToken[childTokens].flat(Infinity);
              values = values.concat(this.walkTokens(tokens2, callback));
            });
          } else if (genericToken.tokens) {
            values = values.concat(this.walkTokens(genericToken.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = { ...pack };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (["options", "parser"].includes(prop)) {
            continue;
          }
          const rendererProp = prop;
          const rendererFunc = pack.renderer[rendererProp];
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (["options", "block"].includes(prop)) {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens) {
            values = values.concat(walkTokens.call(this, token));
          }
          return values;
        };
      }
      this.defaults = { ...this.defaults, ...opts };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = { ...this.defaults, ...opt };
    return this;
  }
  lexer(src, options) {
    return _Lexer.lex(src, options ?? this.defaults);
  }
  parser(tokens, options) {
    return _Parser.parse(tokens, options ?? this.defaults);
  }
  parseMarkdown(blockType) {
    const parse2 = (src, options) => {
      const origOpt = { ...options };
      const opt = { ...this.defaults, ...origOpt };
      const throwError2 = this.onError(!!opt.silent, !!opt.async);
      if (this.defaults.async === true && origOpt.async === false) {
        return throwError2(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      }
      if (typeof src === "undefined" || src === null) {
        return throwError2(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError2(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
        opt.hooks.block = blockType;
      }
      const lexer = opt.hooks ? opt.hooks.provideLexer() : blockType ? _Lexer.lex : _Lexer.lexInline;
      const parser = opt.hooks ? opt.hooks.provideParser() : blockType ? _Parser.parse : _Parser.parseInline;
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError2);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        let tokens = lexer(src, opt);
        if (opt.hooks) {
          tokens = opt.hooks.processAllTokens(tokens);
        }
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html2 = parser(tokens, opt);
        if (opt.hooks) {
          html2 = opt.hooks.postprocess(html2);
        }
        return html2;
      } catch (e) {
        return throwError2(e);
      }
    };
    return parse2;
  }
  onError(silent, async) {
    return (e) => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      throw e;
    };
  }
}
const markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function(options) {
  markedInstance.setOptions(options);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
_Parser.parse;
_Lexer.lex;
const changelog = '# 1.7.0\n\n## 破坏性更新\n\n1. **~~为了多端兼容性考虑，字体的获取不再使用浏览器特有的api，此项更新后可能出现字体显示错误的情况。~~ 为了兼容性考虑，客户端仍使用web api，web端将使用新api，两者可能并不兼容**\n2. **封面将统一保存在文件夹下，一来为了多端兼容性、二来更方便的进行配置迁移，大概不会破坏目前的兼容性，还请自查，如果是web版本，只有本版本上传的才能预览**\n\n## 功能\n\n1. 支持斗鱼、虎牙、B站直播录制，感谢[LiveAutoRecord](https://github.com/WhiteMinds/LiveAutoRecord)，绝大部分录制代码都来自该项目\n2. web版本支持，现在可以使用web来管理cli或者远程本地，并非有所有客户端功能都会被支持，**如果你的接口是http协议，由于浏览器安全措施，需要关闭https和http混合的安全选项，或者选择[自部署](https://github.com/renmu123/biliLive-webui/tree/webui)**，线上地址：https://bililive.irenmu.com\n3. ffmpeg预设中的"时间戳"功能支持字体跟随弹幕预设，自定义内容格式（具体见[strftime](https://strftime.org/)，`:`需要转义），额外自定义参数（见[ffmpeg文档](https://ffmpeg.org/ffmpeg-filters.html#drawtext-1)） [#38](https://github.com/renmu123/biliLive-tools/issues/38)\n4. 增加了看板页面\n5. 支持 [push-all-in-cloud](https://github.com/CaoMeiYouRen/push-all-in-cloud) 推送\n6. 更新额外的上传线路，**设置自定义上传先线路的可能需要手动更新，虽然也做了兼容**\n7. 压制时ass支持高能进度条\n8. 预览支持高能进度条\n9. 重写切片部分UI，主要是高能进度条与弹幕搜索，目标是减少会导致中断的操作，新增`ctrl+k`和`ctrl+shift+k`快捷键，移除sc视图\n\n## 优化\n\n1. 修改弹幕预设默认值，字体大小：38->40、阴影：1->0、描边：0->1、滚动显示区域：1->0.7、显示礼物框：显示->不显示、默认字体：微软雅黑->黑体\n2. 修改英伟达默认ffmpeg参数：medium->fast\n3. 配置备份支持封面\n4. log查看页面支持导出，移除任务栏菜单的“打开log文件夹”选项\n5. 优化任务查询接口\n6. **为自动评论添加提示，谨慎使用，可能会导致评论被shadowban，以及可能的风控等级上升**\n7. ffmpeg依赖版本升级\n8. 转码支持相对文件夹、完成后删除源文件选项\n\n## Bug修复\n\n1. 修复访问不存在的接口时错误返回信息\n2. 修复CLI有概率错误退出的bug（蜜汁这个版本就没有了）\n\n# 1.6.2(2024.12.5)\n\n## CLI\n\n修复无法使用的bug\n\n# 1.6.1(2024.12.1)\n\n## 优化\n\n1. 增加web版本不一致提示\n\n## Bug修复\n\n1. 修复某些情况下客户端页面可能空白的情况\n2. 修复webhook开启“转换后移除源文件”选项后弹幕未被删除的bug\n3. 修复弹幕黑名单用户名的描述错误\n4. 修复转码功能中对预设“视频分辨率”无效的bug [#37](https://github.com/renmu123/biliLive-tools/issues/37)\n5. 修复续传时无法选择在合集中稿件的bug\n6. 修复编码器为copy时显示滤镜输入框的bug\n7. 修复某些情况下 CLI 写入日志失败\n\n# 1.6.0(2024.11.12)\n\n历时两个多月的大版本来了，虽然主要的几个功能（如直播录制、docker版本）这个版本都没有发布，但是地基已经打好，下个版本见。\n\n但是还是实现了一些有意思的功能，我其中最喜欢的还是添加了B站审核状态的通知，不需要再为关注状态而心累。  \nffmpeg支持滤镜给了更大的操作空间来处理视频，硬编码时间到视频中能给切片man更大的便利，不必再根据时间来反推精彩的点。\n\n## 破坏性变更\n\n1. **上传预设标题支持模板用于替代webhook中的标题模板，目前如果预设标题中不存在占位符，为了兼容性考虑，依然使用webhook配置，预计后续版本中会移除此字段，请使用者尽快迁移**\n2. **B站登录信息加密保存，也可以使用环境变量`BILILIVE_TOOLS_BILIKEY`自定义密钥，web版本用户尤其推荐，自定义前请先退出原有全部账号，windows下环境变量修改后可能需要重启电脑方能生效**\n\n## 功能\n\n1. B站视频审核状态检测通知\n2. 支持DDTV webhook，**需要将DDTV的软件“设置-文件与路径设置-录制文件保存路径”设置为绝对路径**\n3. 弹幕转换新增“时间偏移”参数\n4. 斗鱼下载支持清晰度选择、不下载弹幕、覆盖控制选项\n5. B站下载支持覆盖控制选项\n6. ffmpeg参数支持视频滤镜选项\n7. 支持硬编码时间参数到视频中，优先从webhook中读取、其次是弹幕元数据（支持录播姬、blrec、本软件下载的录播）、最后是视频元数据（如录播姬注释），即使你开启此选项，也是有可能不被渲染的\n8. amf相关编码支持硬件解码\n9. 在上传弹幕版本时同时支持上传非弹幕版\n\n## 优化\n\n1. 优化标题变量名插入时的位置\n2. 优化任务的持续时间计算\n3. 弹幕配置的简易模式默认为false\n4. 为部分UI增加右键菜单 [#26](https://github.com/renmu123/biliLive-tools/issues/26)\n5. 为已有的ffmpeg配置部分参数添加默认值\n6. 标题模板支持 `{{roomId}}` 房间号参数\n7. 队列增加暂停按钮\n8. 上传预设中标签修改为不得超过十个\n9. 重构上传预设标签输入框\n10. 切片时支持不选中弹幕分割\n11. window下cli支持ffmpeg任务暂停以及高能进度条\n12. 将B站重试次数的默认值设置为7，时间为7秒\n\n## Bug修复\n\n1. 修复任务队列错误显示B站稿件提交后的“打开文件”按钮\n2. 修复webhook从未设置上传者修改为有上传者时，将过去的稿件一并上传的bug\n3. 修复windows下cli的打包错误\n4. 修复上传重试次数设置未生效的bug，[上游修复](https://github.com/renmu123/biliAPI/commit/ee5611b8ffe2f8c49aba972ed9aa85b44a498bc9)\n5. 修复导出切片出“跳过存在文件”失效的bug\n\n## 其他\n\n**将部分函数使用http协议重构，如果有bug请反馈，为之后的web版做准备**\n\n# 1.5.3(2024.11.5)\n\n## 优化\n\n1. 由于简介好像统一为2000字了，移除额外的请求\n2. 多p视频支持加入合集 [#33](https://github.com/renmu123/biliLive-tools/issues/33)\n\n## Bug修复\n\n1. 修复某些情况下无法导入配置文件的bug\n\n# 1.5.2(2024.10.11)\n\n## 功能\n\n1. server酱<sup>3</sup>支持\n2. 弹幕转换支持不保存屏蔽弹幕（仅支持部分，不支持主动屏蔽的弹幕） [#31](https://github.com/renmu123/biliLive-tools/issues/31)\n3. B站上传选项支持可见范围参数\n\n## 优化\n\n1. 弹幕转换设置时的分辨率参数在开启“自适应分辨率”参数时仍可修改\n\n## Bug修复\n\n1. 修复某些情况下上传视频时任务状态持续为运行中 [#30](https://github.com/renmu123/biliLive-tools/issues/30)\n2. 修复下载视频时默认视频标题中非法字符串未被过滤的bug\n3. 修复上传时部分错误未被重试\n\n# 1.5.1\n\n## Bug修复\n\n1. 修复host为0.0.0.0情况请求错误的bug [#23](https://github.com/renmu123/biliLive-tools/issues/23)\n\n# 1.5.0\n\n## CLI\n\n由于我对CLI功能的不重视，~~大概也没人用~~，导致年久失修~~之后我一定好好测试~~，请升级的用户按照最新[文档](https://github.com/renmu123/biliLive-tools/tree/master/packages/CLI)重新进行配置并测试\n\n**`binFolder`参数已被移除，请为可执行文件单独配置**\n\n## 功能\n\n1. B站上传优化，分P分开上传，支持上传重试、重试延迟、线路、并发、同时上传限制、自动评论检查间隔选项，暂时没有添加如手动重试等更多控制功能，如果有bug请反馈\n2. webhook标题支持ejs模板引擎，具体使用见文档 ([#21](https://github.com/renmu123/biliLive-tools/issues/21))\n3. 新增log直接查看功能\n4. ffmpeg配置增加缩放算法，分辨率默认值修改为2880x1620\n5. 缩放支持先缩放后渲染和先渲染后缩放两种模式\n6. 用户页增加B站帐号过期时间\n7. 弹幕过滤\n   - 目前支持三种屏蔽方式，分别是弹幕内容，uid，用户名，需以**英文逗号**分隔\n   - 弹幕内容：部分匹配，包含sc内容\n   - uid：全匹配，格式为<10995238>，弹幕姬用户注意，即是你开启了记录raw，出于性能原因，此过滤也是无法使用的，请使用用户名替代\n   - 用户名：全匹配，格式为[暮色312]\n\n## 优化\n\n1. 应用关闭时，对临时数据进行清理\n   ~~切片时支持不选中弹幕分割~~忘记做了\n2. 手动取消任务时不会触发错误事件\n3. 斗鱼弹幕元数据增加`video_start_time`参数\n4. webhook标题支持预览输出\n5. 移除完成后删除源文件和完成后打开文件夹功能，由于这两个选项在各个页面中或无效或存在问题\n6. 增加设置栏目\n7. 移除弹幕转换的"同一用户相同礼物自动合并的时间窗"功能，上游[移除](https://github.com/hihkm/DanmakuFactory/pull/89)\n8. 优化弹幕判空函数\n\n## 其他\n\n**将部分函数使用http协议重构，如果有bug请反馈，为之后的web版做准备**\n\n## Bug修复\n\n1. 修复断播续传设置关闭失效的bug\n2. 修复弹幕姬未保存raw的sc价格，[上游修复](https://github.com/hihkm/DanmakuFactory/pull/91)\n3. 修复某些情况下的缓冲区溢出，[上游修复](https://github.com/hihkm/DanmakuFactory/pull/94)\n\n# 1.4.0\n\n## 功能\n\n1. 上传配置支持话题\n2. webhook支持只在某段时间执行上传操作\n3. 为首页增加预览窗弹框，**预览仅供参考，以实际渲染为主！**\n4. 切片功能页支持高能弹幕以及sc分析，xml和ass均支持高能进度条，但是两者在不同的配置下会不同，两者的解析有不少区别\n5. 为工具页面的确认按钮提供快捷键“ctrl+enter”快捷键操作\n6. 优化设置中的可执行文件路径设置，增加选项是否开启自定义，默认为关，关了则使用软件默认路径，**之前有过自定义的需要手动启动**\n7. 支持压缩包便携模式，数据保存在可执行文件路径下，在可执行文件所在文件夹创建一个`portable`文件，无拓展名如`.txt`\n8. 支持斗鱼录播下载\n9. 切片支持弹幕搜索\n\n## 优化\n\n1. 续传支持翻页\n2. 优化文件拖拽栏拖拽\n3. 错误推送事件会返回错误信息了\n4. 当设置任务数量限制后，每当有任务暂停时，未开始任务会自动开始\n5. 优化部分函数下读取视频时长失败时的错误处理\n6. 优化弹幕姬弹幕大文件下高能弹幕的性能\n7. 优化B站上传的重试机制\n\n## Bug修复\n\n1. 修复某些xml文件高能弹幕解析错误的bug\n2. 修复DanmakuFactory的blrec价格解析错误，[由上游修复](https://github.com/hihkm/DanmakuFactory/pull/85)\n3. 修复DanmakuFactory某些情况下转换ass内容错误，[由上游修复](https://github.com/hihkm/DanmakuFactory/pull/87)\n4. 修复DanmakuFactory sc文本存在`\\n`时，渲染ass错误，由[上游修复](https://github.com/renmu123/DanmakuFactory/commit/0df54629b382b3398bcea2be8a06e6e45f241ba3)\n5. 修复推送成功事件被错误设置为开始事件的bug\n6. 修复登录二维码第二次使用时错误使用上一个的bug\n\n# 1.3.0\n\n## DanmakuFactory性能优化\n\n**win版本的DanmakuFactory并非使用官方项目，而是使用[自编译版本](https://github.com/renmu123/DanmakuFactory/tree/test)，大幅优化录播姬弹幕的转换速度**\n\n## 切片工具页\n\n很高兴给大家带来这个功能，这个功能是在软件一开始就被定下来制作的功能，由于某些原因~~懒~~一直被拖到了现在，这个版本终于和大家见面了，功能本身并不复杂，一些UI如何实现比较费我的脑子。\n\n支持[lossless-cut](https://github.com/mifi/lossless-cut)项目导入直接读取~~使用该软件的用户有福了~~\n，读取后可以针对视频和弹幕来进行局部渲染，如果你不使用该软件，我们页支持在软件中直接增加片段，以及支持ass在视频中渲染，本来不想做这个功能的，因为losslese-cut的体验已经非常优秀了，但写着写着就写完了，该工具页也带来了快捷键的支持。\n\n你也可以在本软件中编辑后保存到llc项目，便于你进行二次编辑。\n\n### 我们支持哪些快捷键\n\n- `ctrl+s` 保存到llc项目\n- `ctrl+shift+s` 另存为llc项目\n- `ctrl+enter` 导出\n- `ctrl+z` 撤销\n- `ctrl+shift+z` 重做\n- `I` 在当前时间开始当前片段\n- `O` 在当前时间结束当前片段\n- `up` 上一个片段\n- `down` 下一个片段\n- `del` 删除片段\n- `space` 播放/暂停\n- `ctrl+left` 后退1秒\n- `ctrl+right` 前进1秒\n\n## 功能\n\n1. 首页工具栏支持续传\n2. 增加切片工具页\n   1. 支持导入lossless-cut项目文件\n   2. 支持ctrl+s,ctrl+shift+s,ctrl+z,ctrl+shif+z,f2等快捷键，更多见文档\n   3. 支持编辑后保存lossless-cut项目文件\n   4. 支持局部渲染\n3. qsv支持预设参数\n4. 弹幕设置-不透明度设置修改为百分比参数，原参数弃用，**请使用者进行手动迁移修改**\n5. 支持配置导入和导出\n6. 弹幕转换支持“显示用户名”参数\n\n## 优化\n\n1. 优化弹幕黑名单使用原生实现\n2. 优化webhook视频标题输入变量优化\n3. 为应用添加最小宽高\n4. 重构webhook方便写单元测试\n5. 队列页面更好的错误显示\n\n## Bug修复\n\n1. 修复另存为ffmepg的cpu默认预设后切换其他部分编码器会转换失败的bug\n2. 修复ffmpeg批量添加时最大任务设置可能失败的bug\n3. 修复工具页切换时页面未被缓存的bug\n4. 修复某些情况下无法修改稿件简介的[bug](https://github.com/renmu123/biliLive-tools/issues/4#issuecomment-2233626419)\n5. 修复多P上传的暂停错误，由[上游修复](https://github.com/renmu123/biliAPI/commit/b07b25a2a7c61177abdc0d5b893e610d96b56ef1)\n6. 修复上传暂停后进度计算错误，由[上游修复](https://github.com/renmu123/biliAPI/commit/c5106bc8710d950590878f3874323673414c5055)\n7. 修复DanmakuFactory可执行路径存在空格时无法处理的bug\n8. 修复文件拖拽栏可以选择任意文件的bug\n\n# 1.2.0\n\n## 功能\n\n1. 弹幕密度增加按条数配置\n2. 转封装页面升级为转码页面，支持对视频进行重编码\n3. 版本更新后首次进入出现更新日志\n\n## 优化\n\n1. 工具页UI优化\n2. ffmpeg预设增加copy预设\n3. 弹幕压制时如果视频编码器为copy则报错\n4. 弹幕配置的“简易模式”可以被记住\n\n## Bug修复\n\n1. 修复多个b站账户同时操作时cookie有概率混淆 [#16](https://github.com/renmu123/biliLive-tools/issues/16)\n2. 修复“断播续传”与“使用直播间封面”功能同时使用时，“使用直播间封面”功能失效的bug [#17](https://github.com/renmu123/biliLive-tools/issues/17)\n3. 修复webhook增加房间时保存了额外不必要数据的bug\n4. 修复“打开稿件”按钮错误的bug\n\n# 1.1.0\n\n## 功能\n\n1. ntfy推送支持\n2. 系统推送支持，仅限app,CLI无法使用\n3. webhook支持"不压制后处理"\n4. 新增对ffmepg 编码器copy参数的支持\n5. 新增对ffmepg audio参数的支持\n6. webhook上传标题支持`{{HH}}``{{mm}}``{{ss}}`小时，分钟，秒格式化字段\n7. Linux下的zip包支持\n\n## 优化\n\n1. 弹幕转换&转封装保存到特定文件夹时验证文件夹是否存在\n2. 修改菜单栏展开时占据的空间，展开状态可以被记住\n\n## Bug修复\n\n1. 修复webhook弹幕转换后未清理临时ass文件的Bug\n2. 修复webhook中“使用文件作为文件名”失效的bug\n\n# 1.0.0\n\n**整体架构调整，为支持CLI以及网页版做准备，如果有任何bug请及时反馈**\n\n## 开发者的屁话\n\n经过的大半年的开发，这个软件总算进入了1.0版本，时间是过得真快啊，我推得某些V都因为某些原因不看了，我也用不着传录播了，自己用得次数反而变少（笑），只是偶尔传传自己的录播，都怪B站屎一样的上传系统。\n\n感谢那些帮助软件迭代开发的用户，我也希望这个软件可以帮助到部分有需要的人，减少一点做录播的门槛，，节约些许时间，但请让我知道你们正在使用本软件，无论是B站带上软件tag还是赞助我[爱发电](https://afdian.net/a/renmu123) 、[B站充电](https://space.bilibili.com/10995238)还是关注[我](https://space.bilibili.com/10995238)\n\n接下来谈一下这个项目之后可能的需求，优先会做我自己的需求~~已经没啥需求了~~，如果你有什么需求，可以提issue，如果你不提那我肯定看不到  \n~~1. 我一直很想做的是根据弹幕出现频次做切片功能，但是因为我不切片了，所以这个功能被鸽了~~\n~~2. web版的支持以及cli的扩充，这个需求不有趣，所以看心情~~\n\n1. 批量压制转码工具页，UI已经脑补完了\n2. 斗鱼录播下载，很奇怪市面上竟然没有类似的工具\n3. srt ai翻译，单纯是为我自己偶尔的烤肉\n\n## webhook端点修改\n\n**webhook的请求端点修改，请使用者进行迁移**\nB站录播姬：`/webhook`修改为`/webhook/bililiverecorder`  \nblrec：`/blrec`修改为`/webhook/blrec`  \n自定义：`/custom`修改为`/webhook/custom`\n\n## CLI的使用\n\nCLI是GUI的拓展，使用前需要设置相关目录，由于配置文件很多且复杂，推荐在GUI中生成并进行修改配置后复制到CLI所配置的目录，或直接将目录设置为GUI的配置目录。  \n暂时只支持webhook相关的指令，也即启动webhook server，可以避免启动electron带来的消耗。\n\n**CLI版本暂时不支持删除到回收站，高能进度条功能**\n\n## 最大任务数的相关说明\n\n1. 目前只支持ffmepg任务最大任务数，可以在“设置-任务-ffmpeg最大任务数”中进行设置，默认为不限制\n2. 手动暂停的任务不会被自动启动\n3. 当任务暂停时，不会有任务被自动启动，也就是说只有当任务完成或者失败时才会自动启用下一个未开始的任务\n4. 高能进度条任务会自动进行，因为速度会很快\n\n## 特性\n\n1. 为文件选择栏增加更多功能\n2. 暗色模式支持\n3. 视频预设增加“高级选项”参数，支持自定义ffmpeg输出参数，libsvtav1高级参数默认为`-svtav1-params tune=0`，libsvtav1支持10bit参数，qsv支持ICQ模式\n4. cli支持\n5. ffmpeg任务支持设置最大任务数\n6. 为ffmpeg任务在“中止”操作时添加“保存进度”选项， **默认不保存，之前行为为默认保存**\n7. 为弹幕转换增加屏蔽词功能，如果出现开启后无法转换的情况请反馈\n8. 弹幕转换任务支持取消操作\n9. 新增 `danmakuFactory路径`、`port`、`host`配置，webhook服务器自启动，默认为18010端口\n10. 新增 `/webhook/bililiverecorder` 、`/webhook/blrec`、`/webhook/custom` webhook端点，移除`/webhook`、`/blrec`、`/custom`端点\n\n## 优化\n\n1. ffmpeg 版本升级至7.0\n2. 登录优化（退出账号后默认使用第一个账号）\n3. 修改ffmpeg预设中cbr名称为“平均比特率”\n4. server酱的key输入框type设置为password\n5. 修改视频合并的进度条计算，现改为使用时间长度计算，由于ffmpeg7.0中合并时frame参数不见了\n6. 修改上传参数的排序，尽量与B站web端保持一致\n7. 优化webhook上传后aid查询\n8. 交换“中止”和“删除记录”的icon\n9. 为部分弹框增加“不再提示”按钮\n10. 在webhook弹幕转换时复制输入文件到临时文件夹来避免某些情况下danmafactory读取文件失败，比如文件名有emoji\n11. hvenc下cq**默认值修改为28**，**使用的是-rc vbr而非-rc constqp**\n\n## Bug修复\n\n1. 修复hvenc下cq失效的bug\n2. 修复hvenc下预设名称错误的bug [#13](https://github.com/renmu123/biliLive-tools/pull/13)\n3. 修复libsvtav1 预设展示错误，**默认值修改为6**\n4. 修复某些情况下登录后获取信息失败\n5. 修改弹幕为空的判断逻辑，如果文件中存在`</d>`, `</gift>`, `</sc>`, `</guard>`任意标签则认为不为空\n6. 修复blrec的webhook无法使用的bug [#15](https://github.com/renmu123/biliLive-tools/issues/15)\n\n# 1.0.0-aplha.1\n\n**上个版本的host设置有误，可能导致webhook无法访问，请修改为127.0.0.1（仅对本机开放），或0.0.0.0（其他机器可访问）**  \n**整体架构调整，为支持CLI以及网页版做准备，如果有任何bug请及时反馈**  \n**webhook的请求端点修改，请使用者尽快进行迁移，将会在1.0.0正式版中被移除**\n\nB站录播姬：`/webhook`修改为`/webhook/bililiverecorder`  \nblrec：`/blrec`修改为`/webhook/blrec`  \n自定义：`/custom`修改为`/webhook/custom`\n\n## 最大任务数的相关说明\n\n1. 目前只支持ffmepg任务最大任务数，可以在“设置-任务-ffmpeg最大任务数”中进行设置，默认为不限制\n2. 手动暂停的任务不会被自动启动\n3. 当任务暂停时，不会有任务被自动启动，也就是说只有当任务完成或者失败时才会自动启用下一个未开始的任务\n4. 高能进度条任务会自动进行，因为速度会很快\n5. webhook中的mp4转码任务不会受限制\n\n## CLI的使用\n\nCLI是GUI的拓展，使用前需要设置相关目录，由于配置文件很多且复杂，推荐在GUI中生成并进行修改配置后复制到CLI所配置的目录，或直接将目录设置为GUI的配置目录。  \n暂时只支持webhook相关的指令，也即启动webhook server，可以避免启动electron带来的消耗。\n\n**CLI版本暂时不支持删除到回收站，高能进度条功能**\n\n### 配置\n\n使用前通过 `biliLive config gen` 生成默认配置文件，如果你已经安装客户端，相关配置会被自动设置（仅限win）\n\n```js\n{\n  port: 18010, // 启动端口，如果不希望与客户端的冲突，请修改为其他端口号\n  host: "127.0.0.1",  // host\n  configFolder: "", // 配置文件夹，推荐在GUI中生成并进行修改配置后复制到CLI所配置的目录，可在“打开log文件夹”上一层文件夹找到\n  binFolder: "",  // 二进制文件夹，如果你配置了选项，那么默认会从这个文件夹读取相关二进制文件\n  ffmpegPath: "ffmpeg.exe", // 覆盖binFolder中的ffmpeg二进制路径\n  ffprobePath: "ffprobe.exe",  // 覆盖binFolder中的ffprobe二进制路径\n  danmakuFactoryPath: "DanmakuFactory.exe",  // 覆盖binFolder中的DanmakuFactory二进制路径\n  logPath: "main.log",  // log文件路径\n}\n```\n\n## 特性\n\n1. cli支持\n2. ffmpeg任务支持设置最大任务数\n3. 为ffmpeg任务重在“中止”操作时添加“保存进度”选项， **默认不保存，之前行为为默认保存**\n4. 主题现在可以跟着系统主题自动变化了\n5. 为文件选择框增加“清空”操作\n\n## 其他\n\n1. 修改host默认值为 127.0.0.1\n2. 修改部分深色模式的UI\n3. 修改视频合并的进度条计算，现改为使用时间长度计算，由于ffmpeg7.0中合并时frame参数不见了\n4. 修改上传参数的排序，尽量与B站web端保持一致\n\n## Bug修复\n\n1. 修复未正确记录任务相关的log\n2. 修复log level未正确初始化的bug\n3. 修复某些文件选择栏无法添加文件的bug\n4. 修复ffmpeg 7.0版本下无法进行合并的 bug [#1265](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg/pull/1265)\n\n# 1.0.0-alpha\n\n**本版本的host设置有误，可能导致webhook无法访问，请修改为127.0.0.1（仅对本机开放），或0.0.0.0（其他机器可访问）**\n\n**这个版本有时间就把架构改了，经过大半年的开发，终于要进入1.0.0版本了，虽然还有好几个想做的需求没做**  \n**整体架构调整，为支持CLI以及网页版做准备，如果有任何bug请及时反馈**  \n**webhook的请求端点修改，请使用者尽快进行迁移，将会在1.0.0正式版中被移除**\n\nB站录播姬：`/webhook`修改为`/webhook/bililiverecorder`  \nblrec：`/blrec`修改为`/webhook/blrec`  \n自定义：`/custom`修改为`/webhook/custom`\n\n## 特性\n\n1. 新增 `danmakuFactory路径`、`port`、`host`配置，webhook服务器自启动，默认为18010端口\n2. 新增 `/webhook/bililiverecorder` 、`/webhook/blrec`、`/webhook/custom` webhook端点\n3. 优化工具页的文件选择栏&部分组件UI优化\n4. 暗色模式支持\n5. 视频预设增加“高级选项”参数，支持自定义ffmpeg输出参数，libsvtav1高级参数默认为`-svtav1-params tune=0`，libsvtav1支持10bit参数，qsv支持ICQ模式\n6. 为部分弹框增加“不再提示”按钮\n\n## 其他\n\n1. ffmpeg 版本升级至7.0\n2. 登录优化（退出账号后默认使用第一个账号）\n3. 修改ffmpeg预设中cbr名称为“平均比特率”\n4. server酱的key输入框type设置为password\n\n## Bug 修复\n\n1. 修复hvenc下cq失效的bug，**默认值修改为28**，**使用的是-rc vbr而非-rc constqp**\n2. 修复hvenc下预设名称错误的bug [#13](https://github.com/renmu123/biliLive-tools/pull/13)\n3. 修复libsvtav1 预设展示错误，默认值修改为6\n4. 修复某些情况下登录后获取信息失败\n\n## 开发\n\n1. 使用pnpm包管理器，修改架构为mono repo\n\n# 0.13.0\n\n**移除biliup支持**\n\n## 特性\n\n1. 移除biliup支持\n2. 支持上传任务审核后自动评论\n3. 优化下载任务选择\n4. 新增最小化任务栏和关闭到任务栏选项，支持记住窗口位置和大小\n\n## Bug修复\n\n1. 修复某些情况下无法保存配置的bug\n\n## 其他\n\n1. electron 依赖升级至30版本\n\n# 0.12.0\n\n**预计之后的版本会移除biliup的支持，如果有还在使用的用户且认为有保留必要的，请发issue**\n\n## 特性\n\n1. 为通知增加测试按钮\n2. 为webhook增加完成后删除文件选项\n3. 支持开机自启动\n4. 投稿分区修改为动态获取，支持不同分区的简介字数不同\n5. 优化上传UI，支持修改分P名称以及拖动排序\n\n## Bug fix\n\n1. 修复高能进度配置项设置为全局失败的bug\n2. 修复`nvenc`相关编码错误的默认预设参数\n\n# 0.11.0\n\n**预计之后的版本会移除biliup的支持，如果有还在使用的用户且认为有保留必要的，请发issue**\n\n## 特性\n\n1. 修改任务队列为在首页请求\n2. 为不同任务增加不同的自定义参数，如下载速度，比特率，速度\n3. webhook支持转封装为mp4选项\n4. 弹幕压制支持文件名中带有空格的弹幕文件\n5. 鼠标悬浮于进度条之上显示百分比进度\n6. 上传预设合集增加“小节”，“此稿件不生成更新推送”选项、增加“二创声明”选项\n7. webhook标题支持“使用文件名”选项\n8. 为文件选择栏，统一增加“所有文件”选项\n9. 为压制任务页面增加m4s支持\n10. 房间号为空保存时增加提示\n\n## Bug fix\n\n1. 修复webhook中压制任务错误后状态未进行流转\n2. 修复上传暂停后无法继续开始的bug\n3. 修复弹幕为空时，压制失败的bug\n4. 修复上传失败时，触发两次错误通知的bug\n\n# 0.10.0\n\n## 特性\n\n1. 增加通知功能，支持邮件，server酱，tg bot\n2. 弹幕压制支持分辨率缩放，可用于激活b站4k档位保证更高码率\n3. nvidia相关编码增加cq和preset参数，以及支持硬件解码\n4. 检查更新使用Chromium原生网络库，支持系统代理\n5. “下载页”解析链接时增加加载过渡效果\n6. 续传时添加提醒：已在合集中的稿件无法添加分P\n\n## Bug fix\n\n1. 修复ffmpeg设置中libsvtav1错误的预设参数\n2. 修复无法为审核中的稿件续传的bug\n3. 修复高能进度配置项设置为全局失败的bug\n\n# 0.9.0\n\n## 特性\n\n1. 下载视频功能\n2. 支持自定义webhook\n3. webhook账号支持设置为无\n4. 为视频合并增加默认标题\n5. 部分按钮UI修改为图标\n6. “打开文件夹”功能在打开时会尽可能选中文件\n\n## Bug修复\n\n1. 修复“弹幕转换”页面的“完成后打开文件夹”功能失效\n2. 修复ffmpeg任务在暂停后删除任务后，ffmpeg进程未被释放的bug\n3. 修复设置了房间号的情况下，全局上传预设为空时，不使用房间号内设置的预设的bug\n\n# 0.8.2\n\n## 特性\n\n1. “压制任务”输出文件添加默认文件名\n2. “压制任务”添加到队列后删除文件列表\n3. 为队列添加名称筛选\n\n## Bug fix\n\n1. 删除“压制任务”时使用xml生成的中间临时ass文件\n2. 修复“压制任务”的“移除源文件”选项为只有完成全部步骤后才会执行\n\n# 0.8.1\n\n**修复兼容性导致的新用户配置生成错误** 新用户请勿使用0.8.0版本\n\n## Bug fix\n\n1. 修复未勾选“高能进度条”时，ass文件无法用于压制的bug\n2. 修复兼容性导致的新用户配置生成错误\n\n## 特性\n\n1. 为上传预设增加重命名操作\n2. 为另存为与重命名操作增加回车快捷方式\n3. 修改检查更新的代理github域名，我不D了\n4. 取消ffmpeg任务的中断操作，中断操作的行为更换为中止操作\n\n# 0.8.0\n\n## Breaking change\n\nwebhook配置黑名单支持通配符，配置从黑名单优先修改为房间优先。  \n之前为：黑名单优先，如果配置了黑名单，那么房间配置为开启也是没有效果的。  \n现在修改为：房间配置优先，即如果房间配置了开启，那么即使配置黑名单也是无效的\n\n## Bug fix\n\n1. 修复某些情况下主页“完成后打开文件夹”选项失效\n2. 修复主页弹幕预设没有“保存预设”选项\n3. 修复webhook中弹幕自适应分辨率bug\n4. 修复某些情况下上传预设设置错误的bug\n\n## 特性\n\n1. webhook支持使用直播间封面\n2. 支持高能进度条\n3. webhook标题支持更多参数\n4. 上传预设支持合集参数\n5. 优化房间配置\n6. 增加录播姬工作目录可用性检查\n7. 中断任务不再被认为完成状态，不会执行后续操作\n8. UI优化\n9. 为主页面的部分配置添加持久化\n\n## 其他\n\n依赖升级\nUI优化\n\n# 0.7.0\n\n支持了非biliup上传，如需使用biliup上传，请在设置修改\n房间支持单独开启关闭，已有数据默认为关，请手动开启\n\n## 特性\n\n1. 多账号支持\n2. 移除biliup登录选项\n3. 房间支持单独开启关闭，与黑名单共存\n4. “断播续传”支持自定义时间间隔\n5. 上传支持更多配置项，如关闭弹幕，关闭评论，开启精选评论，自制声明，开启充电面板\n6. **支持非biliup上传**\n7. 简介增加艾特用户功能\n8. 增加赞赏功能\n9. 退出时如果有任务存在增加提醒\n10. 如果检测到webhook server从关闭更改为开启状态，提醒用户重启\n11. 弹幕分辨率支持自适应视频分辨率\n\n## 其他\n\n1. 重构webhook房间配置\n2. 重构配置项相关代码\n3. 依赖升级\n\n## Bug修复\n\n1. 修复上传视频验证失效的bug\n\n# 0.6.0\n\n1. 支持同场直播上传到同一投稿\n2. 如果预设正在被使用，删除时增加额外提醒\n3. 重构弹幕预设的实现\n4. 修复登录时未保存cookie的bug\n\n# 0.5.0\n\n1. 优化webhook，支持弹幕压制后上传\n2. electron升级到28.0.0\n3. 修复更换b站账号后cookie未刷新的问题\n4. 增加非biliup实现的登录\n5. 增加ffmpeg的预设设置\n6. ffmpeg任务区分中断和中止操作\n7. 修复弹幕密度默认设置错误\n8. 修复续传视频后不提醒的bug\n\n# 0.4.0\n\n新增blrec的webhook支持  \n增加队列页面，所有任务移入队列执行  \n修复合并功能的ffmpeg参数错误  \n优化压制功能  \n优化合并功能的进度条计算\n\n# 0.3.1\n\n修复“弹幕设置-画面设置-调试”选项无法使用  \n卸载时删除用户数据  \n增加弹幕的预设功能  \n修改ffmpeg中断信号  \n修复上传预设不同步bug  \n修复confirm组件的bug  \n增加压制时预计剩余时间的显示\n\n# 0.3.0\n\n支持上传视频至b站  \n支持合并视频工具  \n支持选择删除文件或者删除至回收站  \n增加自动更新检测\n\n# 0.2.0\n\n1. 打包自动化\n2. 修复找不到 ffprobe 的 bug\n3. 修复弹幕文件无法覆盖的 bug\n4. 支持修改 ffmpeg 和 ffprobe 的可执行文件路径\n5. 打包了没有 ffmpeg 和 ffprobe 可执行文件的安装包\n\n# 0.1.0\n\n1. 支持 Danmufactory GUI\n2. 支持 ffmpeg 转封装\n3. 支持视频与弹幕压制\n4. 支持压制时修改 ffmpeg 部分配置项\n';
const _hoisted_1$1 = ["innerHTML"];
const _hoisted_2$1 = { style: { "text-align": "right" } };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChangelogModal",
  props: {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  },
  emits: ["update:visible"],
  setup(__props) {
    const showModal = useModel(__props, "visible");
    const renderer = {
      link({ href, text }) {
        return `<a href="${href}" target="_blank">${text}</a>`;
      }
    };
    marked.use({ renderer });
    const content = marked.parse(changelog);
    const confirm = async () => {
      const data = JSON.parse(localStorage.getItem("changelog") || "{}");
      const version = await common.version();
      data[version] = true;
      localStorage.setItem("changelog", JSON.stringify(data));
    };
    const close = async () => {
      await confirm();
      showModal.value = false;
    };
    watch(
      () => showModal.value,
      (value) => {
        if (!value) {
          confirm();
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_2$6;
      const _component_n_modal = __unplugin_components_3$2;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showModal.value = $event),
        "transform-origin": "center",
        "auto-focus": false
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "800px" },
            title: "更新日志",
            bordered: false
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_2$1, [
                createVNode(_component_n_button, {
                  type: "primary",
                  style: { "margin-left": "10px" },
                  onClick: close
                }, {
                  default: withCtx(() => _cache[1] || (_cache[1] = [
                    createTextVNode("我知道了(〃∀〃)")
                  ])),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              _cache[2] || (_cache[2] = createBaseVNode("div", null, [
                createBaseVNode("p", null, [
                  createBaseVNode("b", null, [
                    createTextVNode("如果你不知道如何使用本软件，请优先查看"),
                    createBaseVNode("a", {
                      href: "https://www.bilibili.com/video/BV1Hs421M755/",
                      class: "external",
                      target: "_blank"
                    }, "帮助教程"),
                    createTextVNode("，你也可以在关于页面找到链接")
                  ])
                ]),
                createBaseVNode("p", null, "如果你觉得本软件对你有帮助："),
                createBaseVNode("p", null, [
                  createTextVNode(" 请我喝瓶快乐水："),
                  createBaseVNode("a", {
                    href: "https://afdian.com/a/renmu123",
                    class: "external",
                    target: "_blank"
                  }, "https://afdian.com/a/renmu123")
                ]),
                createBaseVNode("p", null, [
                  createTextVNode(" 如果你是大会员，也可以用免费的B币给我充电："),
                  createBaseVNode("a", {
                    href: "https://space.bilibili.com/10995238",
                    class: "external",
                    target: "_blank"
                  }, "https://space.bilibili.com/10995238")
                ]),
                createBaseVNode("p", null, [
                  createTextVNode(" 弹幕转换功能底层来自："),
                  createBaseVNode("a", {
                    href: "https://github.com/hihkm/DanmakuFactory",
                    class: "external",
                    target: "_blank"
                  }, "DanmakuFactory")
                ]),
                createBaseVNode("p", null, [
                  createTextVNode(" 直播录制绝大部分代码来自："),
                  createBaseVNode("a", {
                    href: "https://github.com/WhiteMinds/LiveAutoRecord",
                    class: "external",
                    target: "_blank"
                  }, "LiveAutoRecord")
                ])
              ], -1)),
              createBaseVNode("div", { innerHTML: unref(content) }, null, 8, _hoisted_1$1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "logModal",
  props: {
    "visible": { type: Boolean, ...{ required: true, default: false } },
    "visibleModifiers": {}
  },
  emits: ["update:visible"],
  setup(__props) {
    const showModal = useModel(__props, "visible");
    const logs = ref("");
    const logInst = ref(null);
    let eventSource = null;
    async function streamLogs() {
      eventSource = await getStreamLogs();
      eventSource.onmessage = function(event) {
        logs.value += event.data;
        nextTick(() => {
          logInst.value?.scrollTo({ position: "bottom", silent: true });
        });
      };
      eventSource.onerror = function() {
        logs.value = "";
      };
    }
    watch(
      () => showModal.value,
      (value) => {
        if (value) {
          streamLogs();
        } else {
          logs.value = "";
          eventSource?.close();
        }
      }
    );
    const exportLogFile = async () => {
      const blob = await exportLogs();
      FileSaver_minExports.saveAs(blob, "main.log");
    };
    return (_ctx, _cache) => {
      const _component_n_log = __unplugin_components_0$1;
      const _component_n_card = __unplugin_components_2$6;
      const _component_n_modal = __unplugin_components_3$2;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showModal.value = $event),
        "transform-origin": "center",
        "auto-focus": false
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "800px" },
            bordered: false
          }, {
            header: withCtx(() => [
              _cache[1] || (_cache[1] = createBaseVNode("span", null, "日志", -1)),
              createBaseVNode("span", {
                style: { "color": "skyblue", "font-size": "12px", "margin-left": "10px", "cursor": "pointer" },
                onClick: exportLogFile
              }, "导出")
            ]),
            default: withCtx(() => [
              createVNode(_component_n_log, {
                ref_key: "logInst",
                ref: logInst,
                style: { "height": "calc(100vh - 200px)" },
                rows: 40,
                log: unref(logs)
              }, null, 8, ["log"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const _sfc_main$1 = {
  name: "SvgIcon",
  props: {
    width: {
      type: [String, Number],
      default: 24
    },
    height: {
      type: [String, Number],
      default: 24
    },
    strokeColor: {
      type: String,
      default: "#000"
    }
  }
};
const _hoisted_1 = ["width", "height"];
const _hoisted_2 = ["stroke"];
const _hoisted_3 = ["stroke"];
const _hoisted_4 = ["stroke"];
const _hoisted_5 = ["stroke"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    width: $props.width,
    height: $props.height,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    createBaseVNode("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "2",
      ry: "2",
      stroke: $props.strokeColor,
      "stroke-width": "1",
      fill: "none"
    }, null, 8, _hoisted_2),
    createBaseVNode("line", {
      x1: "6",
      y1: "7",
      x2: "18",
      y2: "7",
      stroke: $props.strokeColor,
      "stroke-width": "1"
    }, null, 8, _hoisted_3),
    createBaseVNode("line", {
      x1: "6",
      y1: "11",
      x2: "18",
      y2: "11",
      stroke: $props.strokeColor,
      "stroke-width": "1"
    }, null, 8, _hoisted_4),
    createBaseVNode("line", {
      x1: "6",
      y1: "15",
      x2: "14",
      y2: "15",
      stroke: $props.strokeColor,
      "stroke-width": "1"
    }, null, 8, _hoisted_5)
  ], 8, _hoisted_1);
}
const logSvg = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-905ccd94"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const quenuStore = useQueueStore();
    const appConfig = useAppConfig();
    const { userInfo } = storeToRefs(useUserInfoStore());
    const route = useRoute();
    const activeKey = ref("Home");
    activeKey.value = route.name;
    const collapsed = useStorage("collapsed", true);
    appConfig.getAppConfig();
    function renderIcon(icon) {
      return () => h(NIcon, null, { default: () => h(icon) });
    }
    const isWeb = computed(() => window?.isWeb);
    function renderQueueIcon(icon) {
      return () => h(
        "div",
        {
          style: { position: "relative" }
        },
        [
          h(
            "span",
            {
              style: {
                color: "red",
                position: "absolute",
                right: "-4px",
                top: "-4px",
                fontSize: "12px"
              }
            },
            quenuStore.runningTaskNum || ""
          ),
          h(NIcon, null, { default: () => h(icon) })
        ]
      );
    }
    function renderImg(src) {
      return () => h("img", { src, style: { height: "30px", width: "30px" }, referrerpolicy: "no-referrer" });
    }
    const footerMenuOptions = computed(() => {
      const menus = [];
      if (isWeb.value) {
        menus.push({
          label: () => h(
            "a",
            {
              onClick: () => {
                logVisible.value = true;
              }
              // style: {
              //   marginLeft: "25px",
              // },
            },
            { default: () => "日志" }
          ),
          key: "log",
          icon: renderIcon(logSvg)
        });
      }
      menus.push(
        ...[
          {
            label: () => h(
              RouterLink,
              {
                to: {
                  name: "About"
                }
              },
              { default: () => "关于" }
            ),
            key: "About",
            icon: renderIcon(InfoIcon)
          },
          {
            label: () => h(
              "a",
              {
                onClick: () => {
                  settingVisible.value = true;
                }
              },
              { default: () => "设置" }
            ),
            key: "setting",
            icon: renderIcon(SettingIcon)
          }
        ]
      );
      return menus;
    });
    const menuOptions = computed(() => {
      const toolsSubMenus = [
        {
          key: "Upload",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "Upload"
              }
            },
            { default: () => "上传" }
          )
        },
        {
          key: "DanmakuFactory",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "DanmakuFactory"
              }
            },
            { default: () => "弹幕转换" }
          )
        },
        {
          key: "recorder",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "recorder"
              }
            },
            { default: () => "直播录制" }
          )
        },
        {
          key: "videoCut",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "videoCut"
              }
            },
            { default: () => "切片" }
          )
        },
        {
          key: "Convert2Mp4",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "Convert2Mp4"
              }
            },
            { default: () => "转码" }
          )
        },
        {
          key: "VideoMerge",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "VideoMerge"
              }
            },
            { default: () => "视频合并" }
          )
        },
        {
          key: "BiliDownload",
          label: () => h(
            RouterLink,
            {
              to: {
                name: "BiliDownload"
              }
            },
            { default: () => "视频下载" }
          )
        }
      ];
      if (isWeb.value) {
        const index = toolsSubMenus.findIndex((item) => item.key === "videoCut");
        if (index !== -1) {
          toolsSubMenus.splice(index, 1);
        }
      }
      const menus = [
        {
          label: () => h(
            RouterLink,
            {
              to: {
                name: "Home"
              }
            },
            { default: () => "主页" }
          ),
          key: "Home",
          icon: renderIcon(HomeIcon)
        },
        {
          label: () => h(
            RouterLink,
            {
              to: {
                name: "Dashboard"
              }
            },
            { default: () => "看板" }
          ),
          key: "Dashboard",
          icon: renderIcon(DashboardIcon)
        },
        {
          label: () => h("span", "工具页"),
          key: "tools",
          icon: renderIcon(BookIcon),
          children: toolsSubMenus
        },
        {
          label: () => h(
            RouterLink,
            {
              to: {
                name: "Queue"
              }
            },
            { default: () => "队列" }
          ),
          key: "Queue",
          icon: renderQueueIcon(QueueIcon)
        },
        {
          label: () => h(
            RouterLink,
            {
              to: {
                name: "User"
              }
            },
            { default: () => "用户" }
          ),
          key: "User",
          icon: renderImg(userInfo.value?.profile?.face || defaultUserAvatar)
        }
      ];
      return menus;
    });
    const settingVisible = ref(false);
    window?.api?.openSetting(() => {
      settingVisible.value = true;
    });
    const logVisible = ref(false);
    window?.api?.openLog(() => {
      logVisible.value = true;
    });
    window?.api?.openChangelog(() => {
      changelogVisible.value = true;
    });
    const notification = useNotification();
    window.addEventListener("unhandledrejection", (error) => {
      notification.error({
        title: String(error.reason).replace("Error: ", ""),
        duration: 3e3
      });
    });
    const interval = isWeb.value ? 2e3 : 1e3;
    const intervalId = setInterval(() => {
      quenuStore.getQuenu();
    }, interval);
    onUnmounted(() => {
      clearInterval(intervalId);
    });
    const changelogVisible = ref(false);
    const initChanglog = async () => {
      const data = JSON.parse(localStorage.getItem("changelog") || "{}");
      const version = await common.version();
      if (!data[version]) {
        changelogVisible.value = true;
      }
    };
    initChanglog();
    return (_ctx, _cache) => {
      const _component_n_menu = __unplugin_components_0;
      const _component_n_layout_footer = __unplugin_components_1;
      const _component_n_layout_sider = __unplugin_components_2;
      const _component_router_view = resolveComponent("router-view");
      const _component_n_layout = __unplugin_components_3;
      const _component_n_space = __unplugin_components_4;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_n_space, { vertical: "" }, {
          default: withCtx(() => [
            createVNode(_component_n_layout, {
              "has-sider": "",
              class: "layout",
              position: "absolute"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_layout_sider, {
                  bordered: "",
                  "collapse-mode": "width",
                  "collapsed-width": 64,
                  width: 160,
                  collapsed: unref(collapsed),
                  "show-trigger": "",
                  onCollapse: _cache[2] || (_cache[2] = ($event) => collapsed.value = true),
                  onExpand: _cache[3] || (_cache[3] = ($event) => collapsed.value = false)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_menu, {
                      value: unref(activeKey),
                      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(activeKey) ? activeKey.value = $event : null),
                      class: "main-menu",
                      style: normalizeStyle({ marginBottom: `${unref(footerMenuOptions).length * 50}px` }),
                      collapsed: unref(collapsed),
                      "collapsed-width": 64,
                      "collapsed-icon-size": 22,
                      options: unref(menuOptions),
                      "default-expand-all": ""
                    }, null, 8, ["value", "style", "collapsed", "options"]),
                    createVNode(_component_n_layout_footer, { position: "absolute" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_menu, {
                          value: unref(activeKey),
                          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(activeKey) ? activeKey.value = $event : null),
                          class: "footer-menu",
                          collapsed: unref(collapsed),
                          "collapsed-width": 64,
                          "collapsed-icon-size": 22,
                          options: unref(footerMenuOptions),
                          "default-expand-all": ""
                        }, null, 8, ["value", "collapsed", "options"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["collapsed"]),
                createVNode(_component_n_layout, { class: "main-container" }, {
                  default: withCtx(() => [
                    createVNode(_component_router_view, null, {
                      default: withCtx(({ Component }) => [
                        (openBlock(), createBlock(KeepAlive, null, [
                          (openBlock(), createBlock(resolveDynamicComponent(Component)))
                        ], 1024))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(AppSettingDialog, {
          modelValue: unref(settingVisible),
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(settingVisible) ? settingVisible.value = $event : null)
        }, null, 8, ["modelValue"]),
        createVNode(_sfc_main$3, {
          visible: unref(changelogVisible),
          "onUpdate:visible": _cache[5] || (_cache[5] = ($event) => isRef(changelogVisible) ? changelogVisible.value = $event : null)
        }, null, 8, ["visible"]),
        createVNode(_sfc_main$2, {
          visible: unref(logVisible),
          "onUpdate:visible": _cache[6] || (_cache[6] = ($event) => isRef(logVisible) ? logVisible.value = $event : null)
        }, null, 8, ["visible"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
