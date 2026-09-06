import { cb as replaceable, l as h, cc as toDate$1, cK as constructFrom, cd as startOfWeek, cL as normalizeDates, cM as millisecondsInDay, cN as millisecondsInWeek, cO as getDefaultOptions$1, cP as millisecondsInHour, cQ as millisecondsInMinute, cR as millisecondsInSecond, cS as isSameWeek, D as createInjectionKey, d as defineComponent, R as throwError, W as Scrollbar, B as Button, S as inject, x as computed, r as ref, p as c, m as cB, n as cM, br as fadeInScaleUpTransition, q as cE, s as cNotM, M as NBaseIcon, U as Transition, H as withDirectives, $ as clickoutside, v as useConfig, bs as useFormItem, y as useTheme, cT as timePickerLight, Y as watch, J as toRef, C as useThemeClass, a9 as isMounted, bF as markEventEffectPerformed, aq as nextTick, bt as getPreciseEventTarget, G as call, E as provide } from "./index-CB8xvhFr.js";
import { e as enUS, _ as __unplugin_components_2, a as useLocale, u as useMergedState } from "./Input-C3jgSm1V.js";
import { c as FocusDetector } from "./Select-CYnthXY-.js";
import { B as Binder, V as VTarget, e as VFollower, u as useAdjustedTo } from "./Popover-D4v8saSe.js";
import { u as useKeyboard } from "./create-ref-setter-slkfdNqs.js";
import { h as happensIn } from "./create-DfXrl36C.js";
const TimeIcon = replaceable("time", () => h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, h("path", {
  d: "M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z",
  style: "\n        fill: none;\n        stroke: currentColor;\n        stroke-miterlimit: 10;\n        stroke-width: 32px;\n      "
}), h("polyline", {
  points: "256 128 256 272 352 272",
  style: "\n        fill: none;\n        stroke: currentColor;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 32px;\n      "
})));
function addDays(date, amount, options) {
  const _date = toDate$1(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}
function addMonths(date, amount, options) {
  const _date = toDate$1(date, options?.in);
  if (isNaN(amount)) return constructFrom(date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}
function startOfISOWeek(date, options) {
  return startOfWeek(date, { ...options, weekStartsOn: 1 });
}
function getISOWeekYear(date, options) {
  const _date = toDate$1(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
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
function startOfDay(date, options) {
  const _date = toDate$1(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds$1(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds$1(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}
function addQuarters(date, amount, options) {
  return addMonths(date, amount * 3, options);
}
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
}
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate$1(date)));
}
function getQuarter(date, options) {
  const _date = toDate$1(date, options?.in);
  const quarter = Math.trunc(_date.getMonth() / 3) + 1;
  return quarter;
}
function startOfQuarter(date, options) {
  const _date = toDate$1(date, options?.in);
  const currentMonth = _date.getMonth();
  const month = currentMonth - currentMonth % 3;
  _date.setMonth(month, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function startOfMonth(date, options) {
  const _date = toDate$1(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function startOfYear(date, options) {
  const date_ = toDate$1(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}
function getDayOfYear(date, options) {
  const _date = toDate$1(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}
function getISOWeek(date, options) {
  const _date = toDate$1(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function getWeekYear(date, options) {
  const _date = toDate$1(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions = getDefaultOptions$1();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear(date, options) {
  const defaultOptions = getDefaultOptions$1();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}
function getWeek(date, options) {
  const _date = toDate$1(date, options?.in);
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
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
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
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros$1(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
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
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros$1(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
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
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros$1(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
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
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
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
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros$1(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
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
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros$1(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
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
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros$1(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
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
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes$1(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone$1(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes$1(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone$1(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort$1(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort$1(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros$1(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros$1(+date, token.length);
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
  const originalDate = toDate$1(date, options?.in);
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
function getDate(date, options) {
  return toDate$1(date, options?.in).getDate();
}
function getDay(date, options) {
  return toDate$1(date, options?.in).getDay();
}
function getDaysInMonth(date, options) {
  const _date = toDate$1(date, options?.in);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = constructFrom(_date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}
function getDefaultOptions() {
  return Object.assign({}, getDefaultOptions$1());
}
function getHours(date, options) {
  return toDate$1(date, options?.in).getHours();
}
function getISODay(date, options) {
  const day = toDate$1(date, options?.in).getDay();
  return day === 0 ? 7 : day;
}
function getMilliseconds(date) {
  return toDate$1(date).getMilliseconds();
}
function getMinutes(date, options) {
  return toDate$1(date, options?.in).getMinutes();
}
function getMonth(date, options) {
  return toDate$1(date, options?.in).getMonth();
}
function getSeconds(date) {
  return toDate$1(date).getSeconds();
}
function getTime(date) {
  return +toDate$1(date);
}
function getYear(date, options) {
  return toDate$1(date, options?.in).getFullYear();
}
function transpose(date, constructor) {
  const date_ = isConstructor(constructor) ? new constructor(0) : constructFrom(constructor, 0);
  date_.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  date_.setHours(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
  return date_;
}
function isConstructor(constructor) {
  return typeof constructor === "function" && constructor.prototype?.constructor === constructor;
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
class DateTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;
  constructor(context, reference) {
    super();
    this.context = context || ((date) => constructFrom(reference, date));
  }
  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return constructFrom(date, transpose(date, this.context));
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
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
      // A, B
      case "GGGGG":
        return match.era(dateString, { width: "narrow" });
      // Anno Domini, Before Christ
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
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
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
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
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
      // 1, 2, ..., 12
      case "M":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        );
      // 01, 02, ..., 12
      case "MM":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "month"
          }),
          valueCallback
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return match.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.month(dateString, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return match.month(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
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
      // 1, 2, ..., 12
      case "L":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        );
      // 01, 02, ..., 12
      case "LL":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "month"
          }),
          valueCallback
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return match.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.month(dateString, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return match.month(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
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
  const date_ = toDate$1(date, options?.in);
  const diff = getWeek(date_, options) - week;
  date_.setDate(date_.getDate() - diff * 7);
  return toDate$1(date_, options?.in);
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
function setISOWeek(date, week, options) {
  const _date = toDate$1(date, options?.in);
  const diff = getISOWeek(_date, options) - week;
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
  const date_ = toDate$1(date, options?.in);
  const currentDay = date_.getDay();
  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;
  const delta = 7 - weekStartsOn;
  const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return addDays(date_, diff, options);
}
class DayParser extends Parser {
  priority = 90;
  parse(dateString, token, match) {
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      // Tuesday
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
      // 3
      case "e":
      case "ee":
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd
      case "eo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "day"
          }),
          valueCallback
        );
      // Tue
      case "eee":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      // Tuesday
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
      // 3
      case "c":
      case "cc":
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd
      case "co":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "day"
          }),
          valueCallback
        );
      // Tue
      case "ccc":
        return match.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
      // Tuesday
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
function setISODay(date, day, options) {
  const date_ = toDate$1(date, options?.in);
  const currentDay = getISODay(date_, options);
  const diff = day - currentDay;
  return addDays(date_, diff, options);
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
      // 2
      case "i":
      case "ii":
        return parseNDigits(token.length, dateString);
      // 2nd
      case "io":
        return match.ordinalNumber(dateString, { unit: "day" });
      // Tue
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
      // T
      case "iiiii":
        return mapValue(
          match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      // Tu
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
      // Tuesday
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
  const invalidDate = () => constructFrom(options?.in || referenceDate, NaN);
  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  if (!formatStr)
    return dateStr ? invalidDate() : toDate$1(referenceDate, options?.in);
  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  const setters = [new DateTimezoneSetter(options?.in, referenceDate)];
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
        return invalidDate();
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
        return invalidDate();
      }
    }
  }
  if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
    return invalidDate();
  }
  const uniquePrioritySetters = setters.map((setter) => setter.priority).sort((a, b) => b - a).filter((priority, index, array) => array.indexOf(priority) === index).map(
    (priority) => setters.filter((setter) => setter.priority === priority).sort((a, b) => b.subPriority - a.subPriority)
  ).map((setterArray) => setterArray[0]);
  let date = toDate$1(referenceDate, options?.in);
  if (isNaN(+date)) return invalidDate();
  const flags = {};
  for (const setter of uniquePrioritySetters) {
    if (!setter.validate(date, subFnOptions)) {
      return invalidDate();
    }
    const result = setter.set(date, flags, subFnOptions);
    if (Array.isArray(result)) {
      date = result[0];
      Object.assign(flags, result[1]);
    } else {
      date = result;
    }
  }
  return date;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
function startOfHour(date, options) {
  const _date = toDate$1(date, options?.in);
  _date.setMinutes(0, 0, 0);
  return _date;
}
function startOfMinute(date, options) {
  const date_ = toDate$1(date, options?.in);
  date_.setSeconds(0, 0);
  return date_;
}
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
function isSameQuarter(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfQuarter(dateLeft_) === +startOfQuarter(dateRight_);
}
function startOfSecond(date, options) {
  const date_ = toDate$1(date, options?.in);
  date_.setMilliseconds(0);
  return date_;
}
function isSameYear(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear();
}
function setMonth(date, month, options) {
  const _date = toDate$1(date, options?.in);
  const year = _date.getFullYear();
  const day = _date.getDate();
  const midMonth = constructFrom(date, 0);
  midMonth.setFullYear(year, month, 15);
  midMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(midMonth);
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}
function set(date, values, options) {
  let _date = toDate$1(date, options?.in);
  if (isNaN(+_date)) return constructFrom(date, NaN);
  if (values.year != null) _date.setFullYear(values.year);
  if (values.month != null) _date = setMonth(_date, values.month);
  if (values.date != null) _date.setDate(values.date);
  if (values.hours != null) _date.setHours(values.hours);
  if (values.minutes != null) _date.setMinutes(values.minutes);
  if (values.seconds != null) _date.setSeconds(values.seconds);
  if (values.milliseconds != null) _date.setMilliseconds(values.milliseconds);
  return _date;
}
function setHours(date, hours, options) {
  const _date = toDate$1(date, options?.in);
  _date.setHours(hours);
  return _date;
}
function setMinutes(date, minutes, options) {
  const date_ = toDate$1(date, options?.in);
  date_.setMinutes(minutes);
  return date_;
}
function setSeconds(date, seconds, options) {
  const _date = toDate$1(date, options?.in);
  _date.setSeconds(seconds);
  return _date;
}
function setYear(date, year, options) {
  const date_ = toDate$1(date, options?.in);
  if (isNaN(+date_)) return constructFrom(date, NaN);
  date_.setFullYear(year);
  return date_;
}
const matcherMap = {
  date: isSameDay,
  month: isSameMonth,
  year: isSameYear,
  quarter: isSameQuarter
};
function makeWeekMatcher(firstDayOfWeek) {
  return (sourceTime, patternTime) => {
    const weekStartsOn = transformNaiveFirstDayOfWeekToDateFns(firstDayOfWeek);
    return isSameWeek(sourceTime, patternTime, {
      weekStartsOn
    });
  };
}
function transformNaiveFirstDayOfWeekToDateFns(firstDayOfWeek) {
  return (firstDayOfWeek + 1) % 7;
}
function matchDate(sourceTime, patternTime, type, firstDayOfWeek = 0) {
  const matcher = type === "week" ? makeWeekMatcher(firstDayOfWeek) : matcherMap[type];
  return matcher(sourceTime, patternTime);
}
function dateOrWeekItem(time2, monthTs, valueTs, currentTs, mode, firstDayOfWeek) {
  if (mode === "date") {
    return dateItem(time2, monthTs, valueTs, currentTs);
  } else {
    return weekItem(time2, monthTs, valueTs, currentTs, firstDayOfWeek);
  }
}
function dateItem(time2, monthTs, valueTs, currentTs) {
  let inSpan = false;
  let startOfSpan = false;
  let endOfSpan = false;
  if (Array.isArray(valueTs)) {
    if (valueTs[0] < time2 && time2 < valueTs[1]) {
      inSpan = true;
    }
    if (matchDate(valueTs[0], time2, "date")) startOfSpan = true;
    if (matchDate(valueTs[1], time2, "date")) endOfSpan = true;
  }
  const selected = valueTs !== null && (Array.isArray(valueTs) ? matchDate(valueTs[0], time2, "date") || matchDate(valueTs[1], time2, "date") : matchDate(valueTs, time2, "date"));
  return {
    type: "date",
    dateObject: {
      date: getDate(time2),
      month: getMonth(time2),
      year: getYear(time2)
    },
    inCurrentMonth: isSameMonth(time2, monthTs),
    isCurrentDate: matchDate(currentTs, time2, "date"),
    inSpan,
    inSelectedWeek: false,
    startOfSpan,
    endOfSpan,
    selected,
    ts: getTime(time2)
  };
}
function getMonthString(month, monthFormat, locale) {
  const date = new Date(2e3, month, 1).getTime();
  return format$1(date, monthFormat, {
    locale
  });
}
function getYearString(year, yearFormat, locale) {
  const date = new Date(year, 1, 1).getTime();
  return format$1(date, yearFormat, {
    locale
  });
}
function getQuarterString(quarter, quarterFormat, locale) {
  const date = new Date(2e3, quarter * 3 - 2, 1).getTime();
  return format$1(date, quarterFormat, {
    locale
  });
}
function weekItem(time2, monthTs, valueTs, currentTs, firstDayOfWeek) {
  let inSpan = false;
  let startOfSpan = false;
  let endOfSpan = false;
  if (Array.isArray(valueTs)) {
    if (valueTs[0] < time2 && time2 < valueTs[1]) {
      inSpan = true;
    }
    if (matchDate(valueTs[0], time2, "week", firstDayOfWeek)) startOfSpan = true;
    if (matchDate(valueTs[1], time2, "week", firstDayOfWeek)) endOfSpan = true;
  }
  const inSelectedWeek = valueTs !== null && (Array.isArray(valueTs) ? matchDate(valueTs[0], time2, "week", firstDayOfWeek) || matchDate(valueTs[1], time2, "week", firstDayOfWeek) : matchDate(valueTs, time2, "week", firstDayOfWeek));
  return {
    type: "date",
    dateObject: {
      date: getDate(time2),
      month: getMonth(time2),
      year: getYear(time2)
    },
    inCurrentMonth: isSameMonth(time2, monthTs),
    isCurrentDate: matchDate(currentTs, time2, "date"),
    inSpan,
    startOfSpan,
    endOfSpan,
    selected: false,
    inSelectedWeek,
    ts: getTime(time2)
  };
}
function monthItem(monthTs, valueTs, currentTs, {
  monthFormat
}) {
  return {
    type: "month",
    monthFormat,
    dateObject: {
      month: getMonth(monthTs),
      year: getYear(monthTs)
    },
    isCurrent: isSameMonth(currentTs, monthTs),
    selected: valueTs !== null && matchDate(valueTs, monthTs, "month"),
    ts: getTime(monthTs)
  };
}
function yearItem(yearTs, valueTs, currentTs, {
  yearFormat
}) {
  return {
    type: "year",
    yearFormat,
    dateObject: {
      year: getYear(yearTs)
    },
    isCurrent: isSameYear(currentTs, yearTs),
    selected: valueTs !== null && matchDate(valueTs, yearTs, "year"),
    ts: getTime(yearTs)
  };
}
function quarterItem(quarterTs, valueTs, currentTs, {
  quarterFormat
}) {
  return {
    type: "quarter",
    quarterFormat,
    dateObject: {
      quarter: getQuarter(quarterTs),
      year: getYear(quarterTs)
    },
    isCurrent: isSameQuarter(currentTs, quarterTs),
    selected: valueTs !== null && matchDate(valueTs, quarterTs, "quarter"),
    ts: getTime(quarterTs)
  };
}
function dateArray(monthTs, valueTs, currentTs, startDay, strip = false, weekMode = false) {
  const granularity = weekMode ? "week" : "date";
  const displayMonth = getMonth(monthTs);
  let displayMonthIterator = getTime(startOfMonth(monthTs));
  let lastMonthIterator = getTime(addDays(displayMonthIterator, -1));
  const calendarDays = [];
  let protectLastMonthDateIsShownFlag = !strip;
  while (getDay(lastMonthIterator) !== startDay || protectLastMonthDateIsShownFlag) {
    calendarDays.unshift(dateOrWeekItem(lastMonthIterator, monthTs, valueTs, currentTs, granularity, startDay));
    lastMonthIterator = getTime(addDays(lastMonthIterator, -1));
    protectLastMonthDateIsShownFlag = false;
  }
  while (getMonth(displayMonthIterator) === displayMonth) {
    calendarDays.push(dateOrWeekItem(displayMonthIterator, monthTs, valueTs, currentTs, granularity, startDay));
    displayMonthIterator = getTime(addDays(displayMonthIterator, 1));
  }
  const endIndex = strip ? calendarDays.length <= 28 ? 28 : calendarDays.length <= 35 ? 35 : 42 : 42;
  while (calendarDays.length < endIndex) {
    calendarDays.push(dateOrWeekItem(displayMonthIterator, monthTs, valueTs, currentTs, granularity, startDay));
    displayMonthIterator = getTime(addDays(displayMonthIterator, 1));
  }
  return calendarDays;
}
function monthArray(yearAnchorTs, valueTs, currentTs, format2) {
  const calendarMonths = [];
  const yearStart = startOfYear(yearAnchorTs);
  for (let i = 0; i < 12; i++) {
    calendarMonths.push(monthItem(getTime(addMonths(yearStart, i)), valueTs, currentTs, format2));
  }
  return calendarMonths;
}
function quarterArray(yearAnchorTs, valueTs, currentTs, format2) {
  const calendarQuarters = [];
  const yearStart = startOfYear(yearAnchorTs);
  for (let i = 0; i < 4; i++) {
    calendarQuarters.push(quarterItem(getTime(addQuarters(yearStart, i)), valueTs, currentTs, format2));
  }
  return calendarQuarters;
}
function yearArray(valueTs, currentTs, format2, rangeRef) {
  const range = rangeRef.value;
  const calendarYears = [];
  const startTime = startOfYear(setYear(/* @__PURE__ */ new Date(), range[0]));
  for (let i = 0; i < range[1] - range[0]; i++) {
    calendarYears.push(yearItem(getTime(addYears(startTime, i)), valueTs, currentTs, format2));
  }
  return calendarYears;
}
function strictParse(string, pattern, backup, option) {
  const result = parse(string, pattern, backup, option);
  if (!isValid(result)) return result;
  else if (format$1(result, pattern, option) === string) return result;
  else return new Date(Number.NaN);
}
function extractSingleDefaultTime(timestamp, defaultTimeExtractor) {
  const extractedTime = defaultTimeExtractor(timestamp);
  return getDefaultTime(extractedTime);
}
function extractRangeDefaultTime(timestamp, defaultTimeExtractor, position, value) {
  const extractedTime = defaultTimeExtractor(timestamp, position, value);
  return getDefaultTime(extractedTime);
}
function getDefaultTime(timeValue) {
  if (timeValue === void 0) {
    return void 0;
  }
  if (typeof timeValue === "number") {
    return timeValue;
  }
  const [hour, minute, second] = timeValue.split(":");
  return {
    hours: Number(hour),
    minutes: Number(minute),
    seconds: Number(second)
  };
}
function pluckValueFromRange(value, type) {
  return Array.isArray(value) ? value[type === "start" ? 0 : 1] : null;
}
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
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, options) {
    const timezoneOffset = getTimeZoneOffset(options.timeZone, date);
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, options) {
    const timezoneOffset = getTimeZoneOffset(options.timeZone, date);
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, options) {
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return tzIntlTimeZoneName("short", date, options);
      // Long
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
  const list = getTimeUnits(time[type], stepOrList).map(Number);
  let lowerBound, upperBound;
  for (let i = 0; i < list.length; ++i) {
    const v = list[i];
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
const style = c([cB("time-picker", `
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
const __unplugin_components_7 = defineComponent({
  name: "TimePicker",
  props: timePickerProps,
  setup(props) {
    const {
      mergedBorderedRef,
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled,
      mergedComponentPropsRef
    } = useConfig(props);
    const {
      localeRef,
      dateLocaleRef
    } = useLocale("TimePicker");
    const formItem = useFormItem(props, {
      mergedSize: (NFormItem) => {
        var _a, _b;
        const {
          size
        } = props;
        if (size) return size;
        const {
          mergedSize: formItemSize
        } = NFormItem || {};
        if (formItemSize === null || formItemSize === void 0 ? void 0 : formItemSize.value) return formItemSize.value;
        const configSize = (_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.TimePicker) === null || _b === void 0 ? void 0 : _b.size;
        if (configSize) return configSize;
        return "medium";
      }
    });
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    const themeRef = useTheme("TimePicker", "-time-picker", style, timePickerLight, props, mergedClsPrefixRef);
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
          cubicBezierEaseInOut
        },
        self: {
          iconColor,
          iconColorDisabled
        }
      } = themeRef.value;
      return {
        "--n-icon-color-override": iconColor,
        "--n-icon-color-disabled-override": iconColorDisabled,
        "--n-bezier": cubicBezierEaseInOut
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
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
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
        default: () => h(__unplugin_components_2, {
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
export {
  getYearString as A,
  pluckValueFromRange as B,
  extractRangeDefaultTime as C,
  getHours as D,
  getMinutes as E,
  getSeconds as F,
  __unplugin_components_7 as _,
  addMonths as a,
  addYears as b,
  getMonth as c,
  dateArray as d,
  getYear as e,
  format$1 as f,
  getTime as g,
  setYear as h,
  strictParse as i,
  isValid as j,
  set as k,
  getDate as l,
  monthArray as m,
  extractSingleDefaultTime as n,
  getDefaultTime as o,
  startOfSecond as p,
  quarterArray as q,
  startOfMonth as r,
  setMonth as s,
  startOfYear as t,
  startOfQuarter as u,
  startOfDay as v,
  isSameMonth as w,
  getQuarterString as x,
  yearArray as y,
  getMonthString as z
};
