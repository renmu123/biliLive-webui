import { cb as replaceable, l as h, cc as toDate, D as createInjectionKey, S as inject, x as computed, r as ref, aq as nextTick, Y as watch, cd as startOfWeek, d as defineComponent, W as Scrollbar, aL as resolveWrappedSlot, ce as XButton, L as resolveSlotWithTypedProps, B as Button, ax as onMounted, U as Transition, H as withDirectives, bt as getPreciseEventTarget, $ as clickoutside, aG as resolveSlot, y as useTheme, p as c, m as cB, n as cM, br as fadeInScaleUpTransition, s as cNotM, q as cE, M as NBaseIcon, v as useConfig, bs as useFormItem, J as toRef, X as watchEffect, bq as warn, E as provide, C as useThemeClass, aO as createKey, a9 as isMounted, cf as datePickerLight, bF as markEventEffectPerformed, G as call } from "./index-CB8xvhFr.js";
import { s as setMonth, f as format, d as dateArray, m as monthArray, y as yearArray, q as quarterArray, g as getTime, a as addMonths, b as addYears, c as getMonth, e as getYear, h as setYear, i as strictParse, j as isValid, k as set, l as getDate, n as extractSingleDefaultTime, o as getDefaultTime, p as startOfSecond, r as startOfMonth, t as startOfYear, u as startOfQuarter, v as startOfDay, w as isSameMonth, x as getQuarterString, z as getMonthString, A as getYearString, B as pluckValueFromRange, C as extractRangeDefaultTime, _ as __unplugin_components_7, D as getHours, E as getMinutes, F as getSeconds } from "./TimePicker-WQrinlQm.js";
import { u as useKeyboard } from "./create-ref-setter-slkfdNqs.js";
import { b as VVirtualList, c as FocusDetector } from "./Select-CYnthXY-.js";
import { a as useLocale, _ as __unplugin_components_2, u as useMergedState } from "./Input-C3jgSm1V.js";
import { B as Binder, V as VTarget, e as VFollower, u as useAdjustedTo } from "./Popover-D4v8saSe.js";
import { F as FastBackwardIcon, B as BackwardIcon, a as ForwardIcon, b as FastForwardIcon } from "./Forward-C2N4dC5_.js";
import { h as happensIn } from "./create-DfXrl36C.js";
const DateIcon = replaceable("date", () => h("svg", {
  width: "28px",
  height: "28px",
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
  d: "M21.75,3 C23.5449254,3 25,4.45507456 25,6.25 L25,21.75 C25,23.5449254 23.5449254,25 21.75,25 L6.25,25 C4.45507456,25 3,23.5449254 3,21.75 L3,6.25 C3,4.45507456 4.45507456,3 6.25,3 L21.75,3 Z M23.5,9.503 L4.5,9.503 L4.5,21.75 C4.5,22.7164983 5.28350169,23.5 6.25,23.5 L21.75,23.5 C22.7164983,23.5 23.5,22.7164983 23.5,21.75 L23.5,9.503 Z M21.75,4.5 L6.25,4.5 C5.28350169,4.5 4.5,5.28350169 4.5,6.25 L4.5,8.003 L23.5,8.003 L23.5,6.25 C23.5,5.28350169 22.7164983,4.5 21.75,4.5 Z"
})))));
const ToIcon = replaceable("to", () => h("svg", {
  viewBox: "0 0 20 20",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h("path", {
  d: "M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
})))));
function setQuarter(date, quarter, options) {
  const date_ = toDate(date, options?.in);
  const oldQuarter = Math.trunc(date_.getMonth() / 3) + 1;
  const diff = quarter - oldQuarter;
  return setMonth(date_, date_.getMonth() + diff * 3);
}
const datePickerInjectionKey = createInjectionKey("n-date-picker");
const MONTH_ITEM_HEIGHT = 40;
const TIME_FORMAT = "HH:mm:ss";
const usePanelCommonProps = {
  active: Boolean,
  dateFormat: String,
  fastYearSelect: Boolean,
  fastMonthSelect: Boolean,
  calendarDayFormat: String,
  calendarHeaderYearFormat: String,
  calendarHeaderMonthFormat: String,
  calendarHeaderMonthYearSeparator: {
    type: String,
    required: true
  },
  calendarHeaderMonthBeforeYear: {
    type: Boolean,
    default: void 0
  },
  timePickerFormat: {
    type: String,
    value: TIME_FORMAT
  },
  value: {
    type: [Array, Number],
    default: null
  },
  shortcuts: Object,
  defaultTime: [Number, String, Array, Function],
  inputReadonly: Boolean,
  onClear: Function,
  onConfirm: Function,
  onClose: Function,
  onTabOut: Function,
  onKeydown: Function,
  actions: Array,
  onSelectYear: Function,
  onSelectMonth: Function,
  onUpdateValue: {
    type: Function,
    required: true
  },
  themeClass: String,
  onRender: Function,
  panel: Boolean,
  onNextMonth: Function,
  onPrevMonth: Function,
  onNextYear: Function,
  onPrevYear: Function
};
function usePanelCommon(props) {
  const {
    dateLocaleRef,
    timePickerSizeRef,
    timePickerPropsRef,
    localeRef,
    mergedClsPrefixRef,
    mergedThemeRef
  } = inject(datePickerInjectionKey);
  const dateFnsOptionsRef = computed(() => {
    return {
      locale: dateLocaleRef.value.locale
    };
  });
  const selfRef = ref(null);
  const keyboardState = useKeyboard();
  function doClear() {
    const {
      onClear
    } = props;
    if (onClear) onClear();
  }
  function doConfirm() {
    const {
      onConfirm,
      value
    } = props;
    if (onConfirm) onConfirm(value);
  }
  function doUpdateValue(value, doUpdate) {
    const {
      onUpdateValue
    } = props;
    onUpdateValue(value, doUpdate);
  }
  function doClose(disableUpdateOnClose = false) {
    const {
      onClose
    } = props;
    if (onClose) onClose(disableUpdateOnClose);
  }
  function doTabOut() {
    const {
      onTabOut
    } = props;
    if (onTabOut) onTabOut();
  }
  function handleClearClick() {
    doUpdateValue(null, true);
    doClose(true);
    doClear();
  }
  function handleFocusDetectorFocus() {
    doTabOut();
  }
  function disableTransitionOneTick() {
    if (props.active || props.panel) {
      void nextTick(() => {
        const {
          value: selfEl
        } = selfRef;
        if (!selfEl) return;
        const dateEls = selfEl.querySelectorAll("[data-n-date]");
        dateEls.forEach((el) => {
          el.classList.add("transition-disabled");
        });
        void selfEl.offsetWidth;
        dateEls.forEach((el) => {
          el.classList.remove("transition-disabled");
        });
      });
    }
  }
  function handlePanelKeyDown(e) {
    if (e.key === "Tab" && e.target === selfRef.value && keyboardState.shift) {
      e.preventDefault();
      doTabOut();
    }
  }
  function handlePanelFocus(e) {
    const {
      value: el
    } = selfRef;
    if (keyboardState.tab && e.target === el && (el === null || el === void 0 ? void 0 : el.contains(e.relatedTarget))) {
      doTabOut();
    }
  }
  let cachedValue = null;
  let cached = false;
  function cachePendingValue() {
    cachedValue = props.value;
    cached = true;
  }
  function clearPendingValue() {
    cached = false;
  }
  function restorePendingValue() {
    if (cached) {
      doUpdateValue(cachedValue, false);
      cached = false;
    }
  }
  function getShortcutValue(shortcut) {
    if (typeof shortcut === "function") {
      return shortcut();
    }
    return shortcut;
  }
  const showMonthYearPanel = ref(false);
  function handleOpenQuickSelectMonthPanel() {
    showMonthYearPanel.value = !showMonthYearPanel.value;
  }
  return {
    mergedTheme: mergedThemeRef,
    mergedClsPrefix: mergedClsPrefixRef,
    dateFnsOptions: dateFnsOptionsRef,
    timePickerSize: timePickerSizeRef,
    timePickerProps: timePickerPropsRef,
    selfRef,
    locale: localeRef,
    doConfirm,
    doClose,
    doUpdateValue,
    doTabOut,
    handleClearClick,
    handleFocusDetectorFocus,
    disableTransitionOneTick,
    handlePanelKeyDown,
    handlePanelFocus,
    cachePendingValue,
    clearPendingValue,
    restorePendingValue,
    getShortcutValue,
    handleShortcutMouseleave: restorePendingValue,
    showMonthYearPanel,
    handleOpenQuickSelectMonthPanel
  };
}
const useCalendarProps = Object.assign(Object.assign({}, usePanelCommonProps), {
  defaultCalendarStartTime: Number,
  actions: {
    type: Array,
    default: () => ["now", "clear", "confirm"]
  }
});
function useCalendar(props, type) {
  var _a;
  const panelCommon = usePanelCommon(props);
  const {
    isValueInvalidRef,
    isDateDisabledRef,
    isDateInvalidRef,
    isTimeInvalidRef,
    isDateTimeInvalidRef,
    isHourDisabledRef,
    isMinuteDisabledRef,
    isSecondDisabledRef,
    localeRef,
    firstDayOfWeekRef,
    datePickerSlots,
    yearFormatRef,
    monthFormatRef,
    quarterFormatRef,
    yearRangeRef
  } = inject(datePickerInjectionKey);
  const validation = {
    isValueInvalid: isValueInvalidRef,
    isDateDisabled: isDateDisabledRef,
    isDateInvalid: isDateInvalidRef,
    isTimeInvalid: isTimeInvalidRef,
    isDateTimeInvalid: isDateTimeInvalidRef,
    isHourDisabled: isHourDisabledRef,
    isMinuteDisabled: isMinuteDisabledRef,
    isSecondDisabled: isSecondDisabledRef
  };
  const mergedDateFormatRef = computed(() => props.dateFormat || localeRef.value.dateFormat);
  const mergedDayFormatRef = computed(() => props.calendarDayFormat || localeRef.value.dayFormat);
  const dateInputValueRef = ref(props.value === null || Array.isArray(props.value) ? "" : format(props.value, mergedDateFormatRef.value));
  const calendarValueRef = ref(props.value === null || Array.isArray(props.value) ? (_a = props.defaultCalendarStartTime) !== null && _a !== void 0 ? _a : Date.now() : props.value);
  const yearVlRef = ref(null);
  const yearScrollbarRef = ref(null);
  const monthScrollbarRef = ref(null);
  const nowRef = ref(Date.now());
  const dateArrayRef = computed(() => {
    var _a2;
    return dateArray(calendarValueRef.value, props.value, nowRef.value, (_a2 = firstDayOfWeekRef.value) !== null && _a2 !== void 0 ? _a2 : localeRef.value.firstDayOfWeek, false, type === "week");
  });
  const monthArrayRef = computed(() => {
    const {
      value
    } = props;
    return monthArray(calendarValueRef.value, Array.isArray(value) ? null : value, nowRef.value, {
      monthFormat: monthFormatRef.value
    });
  });
  const yearArrayRef = computed(() => {
    const {
      value
    } = props;
    return yearArray(Array.isArray(value) ? null : value, nowRef.value, {
      yearFormat: yearFormatRef.value
    }, yearRangeRef);
  });
  const quarterArrayRef = computed(() => {
    const {
      value
    } = props;
    return quarterArray(calendarValueRef.value, Array.isArray(value) ? null : value, nowRef.value, {
      quarterFormat: quarterFormatRef.value
    });
  });
  const weekdaysRef = computed(() => {
    return dateArrayRef.value.slice(0, 7).map((dateItem) => {
      const {
        ts
      } = dateItem;
      return format(ts, mergedDayFormatRef.value, panelCommon.dateFnsOptions.value);
    });
  });
  const calendarMonthRef = computed(() => {
    return format(calendarValueRef.value, props.calendarHeaderMonthFormat || localeRef.value.monthFormat, panelCommon.dateFnsOptions.value);
  });
  const calendarYearRef = computed(() => {
    return format(calendarValueRef.value, props.calendarHeaderYearFormat || localeRef.value.yearFormat, panelCommon.dateFnsOptions.value);
  });
  const calendarMonthBeforeYearRef = computed(() => {
    var _a2;
    return (_a2 = props.calendarHeaderMonthBeforeYear) !== null && _a2 !== void 0 ? _a2 : localeRef.value.monthBeforeYear;
  });
  watch(calendarValueRef, (value, oldValue) => {
    if (type === "date" || type === "datetime") {
      if (!isSameMonth(value, oldValue)) {
        panelCommon.disableTransitionOneTick();
      }
    }
  });
  watch(computed(() => props.value), (value) => {
    if (value !== null && !Array.isArray(value)) {
      dateInputValueRef.value = format(value, mergedDateFormatRef.value, panelCommon.dateFnsOptions.value);
      calendarValueRef.value = value;
    } else {
      dateInputValueRef.value = "";
    }
  });
  function sanitizeValue(value) {
    var _a2;
    if (type === "datetime") return getTime(startOfSecond(value));
    if (type === "month") return getTime(startOfMonth(value));
    if (type === "year") return getTime(startOfYear(value));
    if (type === "quarter") return getTime(startOfQuarter(value));
    if (type === "week") {
      const weekStartsOn = (((_a2 = firstDayOfWeekRef.value) !== null && _a2 !== void 0 ? _a2 : localeRef.value.firstDayOfWeek) + 1) % 7;
      return getTime(startOfWeek(value, {
        weekStartsOn
      }));
    }
    return getTime(startOfDay(value));
  }
  function mergedIsDateDisabled(ts, detail) {
    const {
      isDateDisabled: {
        value: isDateDisabled
      }
    } = validation;
    if (!isDateDisabled) return false;
    return isDateDisabled(ts, detail);
  }
  function handleDateInput(value) {
    const date = strictParse(value, mergedDateFormatRef.value, /* @__PURE__ */ new Date(), panelCommon.dateFnsOptions.value);
    if (isValid(date)) {
      if (props.value === null) {
        panelCommon.doUpdateValue(getTime(sanitizeValue(Date.now())), props.panel);
      } else if (!Array.isArray(props.value)) {
        const newDateTime = set(props.value, {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        panelCommon.doUpdateValue(getTime(sanitizeValue(getTime(newDateTime))), props.panel);
      }
    } else {
      dateInputValueRef.value = value;
    }
  }
  function handleDateInputBlur() {
    const date = strictParse(dateInputValueRef.value, mergedDateFormatRef.value, /* @__PURE__ */ new Date(), panelCommon.dateFnsOptions.value);
    if (isValid(date)) {
      if (props.value === null) {
        panelCommon.doUpdateValue(getTime(sanitizeValue(Date.now())), false);
      } else if (!Array.isArray(props.value)) {
        const newDateTime = set(props.value, {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        panelCommon.doUpdateValue(getTime(sanitizeValue(getTime(newDateTime))), false);
      }
    } else {
      deriveDateInputValue();
    }
  }
  function clearSelectedDateTime() {
    panelCommon.doUpdateValue(null, true);
    dateInputValueRef.value = "";
    panelCommon.doClose(true);
    panelCommon.handleClearClick();
  }
  function handleNowClick() {
    panelCommon.doUpdateValue(getTime(sanitizeValue(Date.now())), true);
    const now = Date.now();
    calendarValueRef.value = now;
    panelCommon.doClose(true);
    if (props.panel && (type === "month" || type === "quarter" || type === "year")) {
      panelCommon.disableTransitionOneTick();
      justifyColumnsScrollState(now);
    }
  }
  const hoveredWeekRef = ref(null);
  function handleDateMouseEnter(dateItem) {
    if (dateItem.type === "date" && type === "week") {
      hoveredWeekRef.value = sanitizeValue(getTime(dateItem.ts));
    }
  }
  function isWeekHovered(dateItem) {
    if (dateItem.type === "date" && type === "week") {
      return sanitizeValue(getTime(dateItem.ts)) === hoveredWeekRef.value;
    }
    return false;
  }
  function handleDateClick(dateItem) {
    if (mergedIsDateDisabled(dateItem.ts, dateItem.type === "date" ? {
      type: "date",
      year: dateItem.dateObject.year,
      month: dateItem.dateObject.month,
      date: dateItem.dateObject.date
    } : dateItem.type === "month" ? {
      type: "month",
      year: dateItem.dateObject.year,
      month: dateItem.dateObject.month
    } : dateItem.type === "year" ? {
      type: "year",
      year: dateItem.dateObject.year
    } : {
      type: "quarter",
      year: dateItem.dateObject.year,
      quarter: dateItem.dateObject.quarter
    })) {
      return;
    }
    let newValue;
    if (props.value !== null && !Array.isArray(props.value)) {
      newValue = props.value;
    } else {
      newValue = Date.now();
    }
    if (type === "datetime" && props.defaultTime !== null && !Array.isArray(props.defaultTime)) {
      let time;
      if (typeof props.defaultTime === "function") {
        time = extractSingleDefaultTime(dateItem.ts, props.defaultTime);
      } else {
        time = getDefaultTime(props.defaultTime);
      }
      if (time) {
        newValue = getTime(set(newValue, time));
      }
    }
    newValue = getTime(dateItem.type === "quarter" && dateItem.dateObject.quarter ? setQuarter(setYear(newValue, dateItem.dateObject.year), dateItem.dateObject.quarter) : set(newValue, dateItem.dateObject));
    panelCommon.doUpdateValue(sanitizeValue(newValue), props.panel || type === "date" || type === "week" || type === "year");
    switch (type) {
      case "date":
      case "week":
        panelCommon.doClose();
        break;
      case "year":
        if (props.panel) {
          panelCommon.disableTransitionOneTick();
        }
        panelCommon.doClose();
        break;
      case "month":
        panelCommon.disableTransitionOneTick();
        justifyColumnsScrollState(newValue);
        break;
      case "quarter":
        panelCommon.disableTransitionOneTick();
        justifyColumnsScrollState(newValue);
        break;
    }
  }
  function handleQuickMonthClick(dateItem, updatePanelValue) {
    let newValue;
    if (props.value !== null && !Array.isArray(props.value)) {
      newValue = props.value;
    } else {
      newValue = Date.now();
    }
    newValue = getTime(dateItem.type === "month" ? setMonth(newValue, dateItem.dateObject.month) : setYear(newValue, dateItem.dateObject.year));
    updatePanelValue(newValue);
    justifyColumnsScrollState(newValue);
  }
  function onUpdateCalendarValue(value) {
    calendarValueRef.value = value;
  }
  function deriveDateInputValue(time) {
    if (props.value === null || Array.isArray(props.value)) {
      dateInputValueRef.value = "";
      return;
    }
    if (time === void 0) {
      time = props.value;
    }
    dateInputValueRef.value = format(time, mergedDateFormatRef.value, panelCommon.dateFnsOptions.value);
  }
  function handleConfirmClick() {
    if (validation.isDateInvalid.value || validation.isTimeInvalid.value) {
      return;
    }
    panelCommon.doConfirm();
    closeCalendar();
  }
  function closeCalendar() {
    if (props.active) {
      panelCommon.doClose();
    }
  }
  function nextYear() {
    var _a2;
    calendarValueRef.value = getTime(addYears(calendarValueRef.value, 1));
    (_a2 = props.onNextYear) === null || _a2 === void 0 ? void 0 : _a2.call(props);
  }
  function prevYear() {
    var _a2;
    calendarValueRef.value = getTime(addYears(calendarValueRef.value, -1));
    (_a2 = props.onPrevYear) === null || _a2 === void 0 ? void 0 : _a2.call(props);
  }
  function nextMonth() {
    var _a2;
    calendarValueRef.value = getTime(addMonths(calendarValueRef.value, 1));
    (_a2 = props.onNextMonth) === null || _a2 === void 0 ? void 0 : _a2.call(props);
  }
  function prevMonth() {
    var _a2;
    calendarValueRef.value = getTime(addMonths(calendarValueRef.value, -1));
    (_a2 = props.onPrevMonth) === null || _a2 === void 0 ? void 0 : _a2.call(props);
  }
  function virtualListContainer() {
    const {
      value
    } = yearVlRef;
    return (value === null || value === void 0 ? void 0 : value.listElRef) || null;
  }
  function virtualListContent() {
    const {
      value
    } = yearVlRef;
    return (value === null || value === void 0 ? void 0 : value.itemsElRef) || null;
  }
  function handleVirtualListScroll() {
    var _a2;
    (_a2 = yearScrollbarRef.value) === null || _a2 === void 0 ? void 0 : _a2.sync();
  }
  function handleTimePickerChange(value) {
    if (value === null) return;
    panelCommon.doUpdateValue(value, props.panel);
  }
  function handleSingleShortcutMouseenter(shortcut) {
    panelCommon.cachePendingValue();
    const shortcutValue = panelCommon.getShortcutValue(shortcut);
    if (typeof shortcutValue !== "number") return;
    panelCommon.doUpdateValue(shortcutValue, false);
  }
  function handleSingleShortcutClick(shortcut) {
    const shortcutValue = panelCommon.getShortcutValue(shortcut);
    if (typeof shortcutValue !== "number") return;
    panelCommon.doUpdateValue(shortcutValue, props.panel);
    panelCommon.clearPendingValue();
    handleConfirmClick();
  }
  function justifyColumnsScrollState(value) {
    const {
      value: mergedValue
    } = props;
    if (monthScrollbarRef.value) {
      const monthIndex = value === void 0 ? mergedValue === null ? getMonth(Date.now()) : getMonth(mergedValue) : getMonth(value);
      monthScrollbarRef.value.scrollTo({
        top: monthIndex * MONTH_ITEM_HEIGHT
      });
    }
    if (yearVlRef.value) {
      const yearIndex = (value === void 0 ? mergedValue === null ? getYear(Date.now()) : getYear(mergedValue) : getYear(value)) - yearRangeRef.value[0];
      yearVlRef.value.scrollTo({
        top: yearIndex * MONTH_ITEM_HEIGHT
      });
    }
  }
  const childComponentRefs = {
    monthScrollbarRef,
    yearScrollbarRef,
    yearVlRef
  };
  return Object.assign(Object.assign(Object.assign(Object.assign({
    dateArray: dateArrayRef,
    monthArray: monthArrayRef,
    yearArray: yearArrayRef,
    quarterArray: quarterArrayRef,
    calendarYear: calendarYearRef,
    calendarMonth: calendarMonthRef,
    weekdays: weekdaysRef,
    calendarMonthBeforeYear: calendarMonthBeforeYearRef,
    mergedIsDateDisabled,
    nextYear,
    prevYear,
    nextMonth,
    prevMonth,
    handleNowClick,
    handleConfirmClick,
    handleSingleShortcutMouseenter,
    handleSingleShortcutClick
  }, validation), panelCommon), childComponentRefs), {
    // datetime only
    handleDateClick,
    handleDateInputBlur,
    handleDateInput,
    handleDateMouseEnter,
    isWeekHovered,
    handleTimePickerChange,
    clearSelectedDateTime,
    virtualListContainer,
    virtualListContent,
    handleVirtualListScroll,
    timePickerSize: panelCommon.timePickerSize,
    dateInputValue: dateInputValueRef,
    datePickerSlots,
    handleQuickMonthClick,
    justifyColumnsScrollState,
    calendarValue: calendarValueRef,
    onUpdateCalendarValue
  });
}
const MonthPanel = defineComponent({
  name: "MonthPanel",
  props: Object.assign(Object.assign({}, useCalendarProps), {
    type: {
      type: String,
      required: true
    },
    // panelHeader prop
    useAsQuickJump: Boolean
  }),
  setup(props) {
    const useCalendarRef = useCalendar(props, props.type);
    const {
      dateLocaleRef
    } = useLocale("DatePicker");
    const getRenderContent = (item) => {
      switch (item.type) {
        case "year":
          return getYearString(item.dateObject.year, item.yearFormat, dateLocaleRef.value.locale);
        case "month":
          return getMonthString(item.dateObject.month, item.monthFormat, dateLocaleRef.value.locale);
        case "quarter":
          return getQuarterString(item.dateObject.quarter, item.quarterFormat, dateLocaleRef.value.locale);
      }
    };
    const {
      useAsQuickJump
    } = props;
    const renderItem = (item, i, mergedClsPrefix) => {
      const {
        mergedIsDateDisabled,
        handleDateClick,
        handleQuickMonthClick
      } = useCalendarRef;
      return h("div", {
        "data-n-date": true,
        key: i,
        class: [`${mergedClsPrefix}-date-panel-month-calendar__picker-col-item`, item.isCurrent && `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--current`, item.selected && `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--selected`, !useAsQuickJump && mergedIsDateDisabled(item.ts, item.type === "year" ? {
          type: "year",
          year: item.dateObject.year
        } : item.type === "month" ? {
          type: "month",
          year: item.dateObject.year,
          month: item.dateObject.month
        } : item.type === "quarter" ? {
          type: "month",
          year: item.dateObject.year,
          month: item.dateObject.quarter
        } : null) && `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--disabled`],
        onClick: () => {
          var _a, _b;
          if (item.type === "year") {
            (_a = props.onSelectYear) === null || _a === void 0 ? void 0 : _a.call(props);
          } else if (item.type === "month") {
            (_b = props.onSelectMonth) === null || _b === void 0 ? void 0 : _b.call(props);
          }
          if (useAsQuickJump) {
            handleQuickMonthClick(item, (value) => {
              props.onUpdateValue(value, false);
            });
          } else {
            handleDateClick(item);
          }
        }
      }, getRenderContent(item));
    };
    onMounted(() => {
      useCalendarRef.justifyColumnsScrollState();
    });
    return Object.assign(Object.assign({}, useCalendarRef), {
      renderItem
    });
  },
  render() {
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      actions,
      renderItem,
      type,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${mergedClsPrefix}-date-panel`, `${mergedClsPrefix}-date-panel--month`, !this.panel && `${mergedClsPrefix}-date-panel--shadow`, this.themeClass],
      onFocus: this.handlePanelFocus,
      onKeydown: this.handlePanelKeyDown
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar`
    }, h(Scrollbar, {
      ref: "yearScrollbarRef",
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      container: this.virtualListContainer,
      content: this.virtualListContent,
      horizontalRailStyle: {
        zIndex: 1
      },
      verticalRailStyle: {
        zIndex: 1
      }
    }, {
      default: () => h(VVirtualList, {
        ref: "yearVlRef",
        items: this.yearArray,
        itemSize: MONTH_ITEM_HEIGHT,
        showScrollbar: false,
        keyField: "ts",
        onScroll: this.handleVirtualListScroll,
        paddingBottom: 4
      }, {
        default: ({
          item,
          index
        }) => {
          return renderItem(item, index, mergedClsPrefix);
        }
      })
    }), type === "month" || type === "quarter" ? h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`
    }, h(Scrollbar, {
      ref: "monthScrollbarRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [(type === "month" ? this.monthArray : this.quarterArray).map((item, i) => renderItem(item, i, mergedClsPrefix)), h("div", {
        class: `${mergedClsPrefix}-date-panel-${type}-calendar__padding`
      })]
    })) : null), resolveWrappedSlot(this.datePickerSlots.footer, (children) => {
      return children ? h("div", {
        class: `${mergedClsPrefix}-date-panel-footer`
      }, children) : null;
    }), (actions === null || actions === void 0 ? void 0 : actions.length) || shortcuts ? h("div", {
      class: `${mergedClsPrefix}-date-panel-actions`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__prefix`
    }, shortcuts && Object.keys(shortcuts).map((key) => {
      const shortcut = shortcuts[key];
      return Array.isArray(shortcut) ? null : h(XButton, {
        size: "tiny",
        onMouseenter: () => {
          this.handleSingleShortcutMouseenter(shortcut);
        },
        onClick: () => {
          this.handleSingleShortcutClick(shortcut);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => key
      });
    })), h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__suffix`
    }, (actions === null || actions === void 0 ? void 0 : actions.includes("clear")) ? resolveSlotWithTypedProps(this.datePickerSlots.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, (actions === null || actions === void 0 ? void 0 : actions.includes("now")) ? resolveSlotWithTypedProps(this.datePickerSlots.now, {
      onNow: this.handleNowClick,
      text: this.locale.now
    }, () => [h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    })]) : null, (actions === null || actions === void 0 ? void 0 : actions.includes("confirm")) ? resolveSlotWithTypedProps(this.datePickerSlots.confirm, {
      onConfirm: this.handleConfirmClick,
      disabled: this.isDateInvalid,
      text: this.locale.confirm
    }, () => [h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isDateInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, h(FocusDetector, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
const PanelHeader = defineComponent({
  props: {
    mergedClsPrefix: {
      type: String,
      required: true
    },
    value: Number,
    monthBeforeYear: {
      type: Boolean,
      required: true
    },
    monthYearSeparator: {
      type: String,
      required: true
    },
    fastYearSelect: Boolean,
    fastMonthSelect: Boolean,
    calendarMonth: {
      type: String,
      required: true
    },
    calendarYear: {
      type: String,
      required: true
    },
    onUpdateValue: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const triggerRef = ref(null);
    const monthPanelRef = ref(null);
    const showRef = ref(false);
    function toggleShow() {
      showRef.value = !showRef.value;
    }
    function handleSelectYear() {
      if (props.fastYearSelect) {
        toggleShow();
      }
    }
    function handleSelectMonth() {
      if (props.fastMonthSelect) {
        toggleShow();
      }
    }
    function handleClickOutside(e) {
      var _a;
      if (showRef.value && !((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e)))) {
        showRef.value = false;
      }
    }
    function handleHeaderClick() {
      toggleShow();
    }
    return {
      show: showRef,
      triggerRef,
      monthPanelRef,
      handleSelectYear,
      handleSelectMonth,
      handleHeaderClick,
      handleClickOutside
    };
  },
  render() {
    const {
      handleClickOutside,
      mergedClsPrefix
    } = this;
    return h("div", {
      class: `${mergedClsPrefix}-date-panel-month__month-year`,
      ref: "triggerRef"
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => h("div", {
          class: [`${mergedClsPrefix}-date-panel-month__text`, this.show && `${mergedClsPrefix}-date-panel-month__text--active`],
          onClick: this.handleHeaderClick
        }, this.monthBeforeYear ? [this.calendarMonth, this.monthYearSeparator, this.calendarYear] : [this.calendarYear, this.monthYearSeparator, this.calendarMonth])
      }), h(VFollower, {
        show: this.show,
        teleportDisabled: true
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: true
        }, {
          default: () => this.show ? withDirectives(h(MonthPanel, {
            ref: "monthPanelRef",
            onUpdateValue: this.onUpdateValue,
            onSelectYear: this.handleSelectYear,
            onSelectMonth: this.handleSelectMonth,
            actions: [],
            calendarHeaderMonthYearSeparator: this.monthYearSeparator,
            // month and year click show month type
            type: "month",
            key: "month",
            useAsQuickJump: true,
            value: this.value
          }), [[clickoutside, handleClickOutside, void 0, {
            capture: true
          }]]) : null
        })
      })]
    }));
  }
});
const DatePanel = defineComponent({
  name: "DatePanel",
  props: Object.assign(Object.assign({}, useCalendarProps), {
    type: {
      type: String,
      required: true
    }
  }),
  setup(props) {
    return useCalendar(props, props.type);
  },
  render() {
    var _a, _b, _c;
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      onRender,
      datePickerSlots,
      type
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${mergedClsPrefix}-date-panel`, `${mergedClsPrefix}-date-panel--${type}`, !this.panel && `${mergedClsPrefix}-date-panel--shadow`, this.themeClass],
      onFocus: this.handlePanelFocus,
      onKeydown: this.handlePanelKeyDown
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-calendar`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
      onClick: this.prevYear
    }, resolveSlot(datePickerSlots["prev-year"], () => [h(FastBackwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__prev`,
      onClick: this.prevMonth
    }, resolveSlot(datePickerSlots["prev-month"], () => [h(BackwardIcon, null)])), h(PanelHeader, {
      fastYearSelect: this.fastYearSelect,
      fastMonthSelect: this.fastMonthSelect,
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.calendarValue,
      onUpdateValue: this.onUpdateCalendarValue,
      mergedClsPrefix,
      calendarMonth: this.calendarMonth,
      calendarYear: this.calendarYear
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__next`,
      onClick: this.nextMonth
    }, resolveSlot(datePickerSlots["next-month"], () => [h(ForwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-next`,
      onClick: this.nextYear
    }, resolveSlot(datePickerSlots["next-year"], () => [h(FastForwardIcon, null)]))), h("div", {
      class: `${mergedClsPrefix}-date-panel-weekdays`
    }, this.weekdays.map((weekday) => h("div", {
      key: weekday,
      class: `${mergedClsPrefix}-date-panel-weekdays__day`
    }, weekday))), h("div", {
      class: `${mergedClsPrefix}-date-panel-dates`
    }, this.dateArray.map((dateItem, i) => h("div", {
      "data-n-date": true,
      key: i,
      class: [`${mergedClsPrefix}-date-panel-date`, {
        [`${mergedClsPrefix}-date-panel-date--current`]: dateItem.isCurrentDate,
        [`${mergedClsPrefix}-date-panel-date--selected`]: dateItem.selected,
        [`${mergedClsPrefix}-date-panel-date--excluded`]: !dateItem.inCurrentMonth,
        [`${mergedClsPrefix}-date-panel-date--disabled`]: this.mergedIsDateDisabled(dateItem.ts, {
          type: "date",
          year: dateItem.dateObject.year,
          month: dateItem.dateObject.month,
          date: dateItem.dateObject.date
        }),
        [`${mergedClsPrefix}-date-panel-date--week-hovered`]: this.isWeekHovered(dateItem),
        [`${mergedClsPrefix}-date-panel-date--week-selected`]: dateItem.inSelectedWeek
      }],
      onClick: () => {
        this.handleDateClick(dateItem);
      },
      onMouseenter: () => {
        this.handleDateMouseEnter(dateItem);
      }
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-date__trigger`
    }), dateItem.dateObject.date, dateItem.isCurrentDate ? h("div", {
      class: `${mergedClsPrefix}-date-panel-date__sup`
    }) : null)))), this.datePickerSlots.footer ? h("div", {
      class: `${mergedClsPrefix}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) || shortcuts ? h("div", {
      class: `${mergedClsPrefix}-date-panel-actions`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__prefix`
    }, shortcuts && Object.keys(shortcuts).map((key) => {
      const shortcut = shortcuts[key];
      return Array.isArray(shortcut) ? null : h(XButton, {
        size: "tiny",
        onMouseenter: () => {
          this.handleSingleShortcutMouseenter(shortcut);
        },
        onClick: () => {
          this.handleSingleShortcutClick(shortcut);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => key
      });
    })), h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__suffix`
    }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? resolveSlotWithTypedProps(this.$slots.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("now")) ? resolveSlotWithTypedProps(this.$slots.now, {
      onNow: this.handleNowClick,
      text: this.locale.now
    }, () => [h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    })]) : null)) : null, h(FocusDetector, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
const useDualCalendarProps = Object.assign(Object.assign({}, usePanelCommonProps), {
  defaultCalendarStartTime: Number,
  defaultCalendarEndTime: Number,
  bindCalendarMonths: Boolean,
  actions: {
    type: Array,
    default: () => ["clear", "confirm"]
  }
});
function useDualCalendar(props, type) {
  var _a, _b;
  const {
    isDateDisabledRef,
    isStartHourDisabledRef,
    isEndHourDisabledRef,
    isStartMinuteDisabledRef,
    isEndMinuteDisabledRef,
    isStartSecondDisabledRef,
    isEndSecondDisabledRef,
    isStartDateInvalidRef,
    isEndDateInvalidRef,
    isStartTimeInvalidRef,
    isEndTimeInvalidRef,
    isStartValueInvalidRef,
    isEndValueInvalidRef,
    isRangeInvalidRef,
    localeRef,
    rangesRef,
    closeOnSelectRef,
    updateValueOnCloseRef,
    firstDayOfWeekRef,
    datePickerSlots,
    monthFormatRef,
    yearFormatRef,
    quarterFormatRef,
    yearRangeRef
  } = inject(datePickerInjectionKey);
  const validation = {
    isDateDisabled: isDateDisabledRef,
    isStartHourDisabled: isStartHourDisabledRef,
    isEndHourDisabled: isEndHourDisabledRef,
    isStartMinuteDisabled: isStartMinuteDisabledRef,
    isEndMinuteDisabled: isEndMinuteDisabledRef,
    isStartSecondDisabled: isStartSecondDisabledRef,
    isEndSecondDisabled: isEndSecondDisabledRef,
    isStartDateInvalid: isStartDateInvalidRef,
    isEndDateInvalid: isEndDateInvalidRef,
    isStartTimeInvalid: isStartTimeInvalidRef,
    isEndTimeInvalid: isEndTimeInvalidRef,
    isStartValueInvalid: isStartValueInvalidRef,
    isEndValueInvalid: isEndValueInvalidRef,
    isRangeInvalid: isRangeInvalidRef
  };
  const panelCommon = usePanelCommon(props);
  const startDatesElRef = ref(null);
  const endDatesElRef = ref(null);
  const startYearScrollbarRef = ref(null);
  const endYearScrollbarRef = ref(null);
  const startYearVlRef = ref(null);
  const endYearVlRef = ref(null);
  const startMonthScrollbarRef = ref(null);
  const endMonthScrollbarRef = ref(null);
  const {
    value
  } = props;
  const defaultCalendarStartTime = (_a = props.defaultCalendarStartTime) !== null && _a !== void 0 ? _a : Array.isArray(value) && typeof value[0] === "number" ? value[0] : Date.now();
  const startCalendarDateTimeRef = ref(defaultCalendarStartTime);
  const endCalendarDateTimeRef = ref((_b = props.defaultCalendarEndTime) !== null && _b !== void 0 ? _b : Array.isArray(value) && typeof value[1] === "number" ? value[1] : getTime(addMonths(defaultCalendarStartTime, 1)));
  adjustCalendarTimes(true);
  const nowRef = ref(Date.now());
  const isSelectingRef = ref(false);
  const memorizedStartDateTimeRef = ref(0);
  const mergedDateFormatRef = computed(() => props.dateFormat || localeRef.value.dateFormat);
  const mergedDayFormatRef = computed(() => props.calendarDayFormat || localeRef.value.dayFormat);
  const startDateInput = ref(Array.isArray(value) ? format(value[0], mergedDateFormatRef.value, panelCommon.dateFnsOptions.value) : "");
  const endDateInputRef = ref(Array.isArray(value) ? format(value[1], mergedDateFormatRef.value, panelCommon.dateFnsOptions.value) : "");
  const selectingPhaseRef = computed(() => {
    if (isSelectingRef.value) return "end";
    else return "start";
  });
  const startDateArrayRef = computed(() => {
    var _a2;
    return dateArray(startCalendarDateTimeRef.value, props.value, nowRef.value, (_a2 = firstDayOfWeekRef.value) !== null && _a2 !== void 0 ? _a2 : localeRef.value.firstDayOfWeek);
  });
  const endDateArrayRef = computed(() => {
    var _a2;
    return dateArray(endCalendarDateTimeRef.value, props.value, nowRef.value, (_a2 = firstDayOfWeekRef.value) !== null && _a2 !== void 0 ? _a2 : localeRef.value.firstDayOfWeek);
  });
  const weekdaysRef = computed(() => {
    return startDateArrayRef.value.slice(0, 7).map((dateItem) => {
      const {
        ts
      } = dateItem;
      return format(ts, mergedDayFormatRef.value, panelCommon.dateFnsOptions.value);
    });
  });
  const startCalendarMonthRef = computed(() => {
    return format(startCalendarDateTimeRef.value, props.calendarHeaderMonthFormat || localeRef.value.monthFormat, panelCommon.dateFnsOptions.value);
  });
  const endCalendarMonthRef = computed(() => {
    return format(endCalendarDateTimeRef.value, props.calendarHeaderMonthFormat || localeRef.value.monthFormat, panelCommon.dateFnsOptions.value);
  });
  const startCalendarYearRef = computed(() => {
    return format(startCalendarDateTimeRef.value, props.calendarHeaderYearFormat || localeRef.value.yearFormat, panelCommon.dateFnsOptions.value);
  });
  const endCalendarYearRef = computed(() => {
    return format(endCalendarDateTimeRef.value, props.calendarHeaderYearFormat || localeRef.value.yearFormat, panelCommon.dateFnsOptions.value);
  });
  const startTimeValueRef = computed(() => {
    const {
      value: value2
    } = props;
    if (Array.isArray(value2)) return value2[0];
    return null;
  });
  const endTimeValueRef = computed(() => {
    const {
      value: value2
    } = props;
    if (Array.isArray(value2)) return value2[1];
    return null;
  });
  const shortcutsRef = computed(() => {
    const {
      shortcuts
    } = props;
    return shortcuts || rangesRef.value;
  });
  const startYearArrayRef = computed(() => {
    return yearArray(pluckValueFromRange(props.value, "start"), nowRef.value, {
      yearFormat: yearFormatRef.value
    }, yearRangeRef);
  });
  const endYearArrayRef = computed(() => {
    return yearArray(pluckValueFromRange(props.value, "end"), nowRef.value, {
      yearFormat: yearFormatRef.value
    }, yearRangeRef);
  });
  const startQuarterArrayRef = computed(() => {
    const startValue = pluckValueFromRange(props.value, "start");
    return quarterArray(startValue !== null && startValue !== void 0 ? startValue : Date.now(), startValue, nowRef.value, {
      quarterFormat: quarterFormatRef.value
    });
  });
  const endQuarterArrayRef = computed(() => {
    const endValue = pluckValueFromRange(props.value, "end");
    return quarterArray(endValue !== null && endValue !== void 0 ? endValue : Date.now(), endValue, nowRef.value, {
      quarterFormat: quarterFormatRef.value
    });
  });
  const startMonthArrayRef = computed(() => {
    const startValue = pluckValueFromRange(props.value, "start");
    return monthArray(startValue !== null && startValue !== void 0 ? startValue : Date.now(), startValue, nowRef.value, {
      monthFormat: monthFormatRef.value
    });
  });
  const endMonthArrayRef = computed(() => {
    const endValue = pluckValueFromRange(props.value, "end");
    return monthArray(endValue !== null && endValue !== void 0 ? endValue : Date.now(), endValue, nowRef.value, {
      monthFormat: monthFormatRef.value
    });
  });
  const calendarMonthBeforeYearRef = computed(() => {
    var _a2;
    return (_a2 = props.calendarHeaderMonthBeforeYear) !== null && _a2 !== void 0 ? _a2 : localeRef.value.monthBeforeYear;
  });
  watch(computed(() => props.value), (value2) => {
    if (value2 !== null && Array.isArray(value2)) {
      const [startMoment, endMoment] = value2;
      startDateInput.value = format(startMoment, mergedDateFormatRef.value, panelCommon.dateFnsOptions.value);
      endDateInputRef.value = format(endMoment, mergedDateFormatRef.value, panelCommon.dateFnsOptions.value);
      if (!isSelectingRef.value) {
        syncCalendarTimeWithValue(value2);
      }
    } else {
      startDateInput.value = "";
      endDateInputRef.value = "";
    }
  });
  function handleCalendarChange(value2, oldValue) {
    if (type === "daterange" || type === "datetimerange") {
      if (getYear(value2) !== getYear(oldValue) || getMonth(value2) !== getMonth(oldValue)) {
        panelCommon.disableTransitionOneTick();
      }
    }
  }
  watch(startCalendarDateTimeRef, handleCalendarChange);
  watch(endCalendarDateTimeRef, handleCalendarChange);
  function adjustCalendarTimes(byStartCalendarTime) {
    const startTime = startOfMonth(startCalendarDateTimeRef.value);
    const endTime = startOfMonth(endCalendarDateTimeRef.value);
    if (props.bindCalendarMonths || startTime >= endTime) {
      if (byStartCalendarTime) {
        endCalendarDateTimeRef.value = getTime(addMonths(startTime, 1));
      } else {
        startCalendarDateTimeRef.value = getTime(addMonths(endTime, -1));
      }
    }
  }
  function startCalendarNextYear() {
    startCalendarDateTimeRef.value = getTime(addMonths(startCalendarDateTimeRef.value, 12));
    adjustCalendarTimes(true);
  }
  function startCalendarPrevYear() {
    startCalendarDateTimeRef.value = getTime(addMonths(startCalendarDateTimeRef.value, -12));
    adjustCalendarTimes(true);
  }
  function startCalendarNextMonth() {
    startCalendarDateTimeRef.value = getTime(addMonths(startCalendarDateTimeRef.value, 1));
    adjustCalendarTimes(true);
  }
  function startCalendarPrevMonth() {
    startCalendarDateTimeRef.value = getTime(addMonths(startCalendarDateTimeRef.value, -1));
    adjustCalendarTimes(true);
  }
  function endCalendarNextYear() {
    endCalendarDateTimeRef.value = getTime(addMonths(endCalendarDateTimeRef.value, 12));
    adjustCalendarTimes(false);
  }
  function endCalendarPrevYear() {
    endCalendarDateTimeRef.value = getTime(addMonths(endCalendarDateTimeRef.value, -12));
    adjustCalendarTimes(false);
  }
  function endCalendarNextMonth() {
    endCalendarDateTimeRef.value = getTime(addMonths(endCalendarDateTimeRef.value, 1));
    adjustCalendarTimes(false);
  }
  function endCalendarPrevMonth() {
    endCalendarDateTimeRef.value = getTime(addMonths(endCalendarDateTimeRef.value, -1));
    adjustCalendarTimes(false);
  }
  function onUpdateStartCalendarValue(value2) {
    startCalendarDateTimeRef.value = value2;
    adjustCalendarTimes(true);
  }
  function onUpdateEndCalendarValue(value2) {
    endCalendarDateTimeRef.value = value2;
    adjustCalendarTimes(false);
  }
  function mergedIsDateDisabled(ts) {
    const isDateDisabled = isDateDisabledRef.value;
    if (!isDateDisabled) return false;
    if (!Array.isArray(props.value)) {
      return isDateDisabled(ts, "start", null);
    }
    if (selectingPhaseRef.value === "start") {
      return isDateDisabled(ts, "start", null);
    } else {
      const {
        value: memorizedStartDateTime
      } = memorizedStartDateTimeRef;
      if (ts < memorizedStartDateTimeRef.value) {
        return isDateDisabled(ts, "start", [memorizedStartDateTime, memorizedStartDateTime]);
      } else {
        return isDateDisabled(ts, "end", [memorizedStartDateTime, memorizedStartDateTime]);
      }
    }
  }
  function syncCalendarTimeWithValue(value2) {
    if (value2 === null) return;
    const [startMoment, endMoment] = value2;
    startCalendarDateTimeRef.value = startMoment;
    if (startOfMonth(endMoment) <= startOfMonth(startMoment)) {
      endCalendarDateTimeRef.value = getTime(startOfMonth(addMonths(startMoment, 1)));
    } else {
      endCalendarDateTimeRef.value = getTime(startOfMonth(endMoment));
    }
  }
  function handleDateClick(dateItem) {
    if (!isSelectingRef.value) {
      isSelectingRef.value = true;
      memorizedStartDateTimeRef.value = dateItem.ts;
      changeStartEndTime(dateItem.ts, dateItem.ts, "done");
    } else {
      isSelectingRef.value = false;
      const {
        value: value2
      } = props;
      if (props.panel && Array.isArray(value2)) {
        changeStartEndTime(value2[0], value2[1], "done");
      } else {
        if (closeOnSelectRef.value && type === "daterange") {
          if (updateValueOnCloseRef.value) {
            closeCalendar();
          } else {
            handleConfirmClick();
          }
        }
      }
    }
  }
  function handleDateMouseEnter(dateItem) {
    if (isSelectingRef.value) {
      if (mergedIsDateDisabled(dateItem.ts)) return;
      if (dateItem.ts >= memorizedStartDateTimeRef.value) {
        changeStartEndTime(memorizedStartDateTimeRef.value, dateItem.ts, "wipPreview");
      } else {
        changeStartEndTime(dateItem.ts, memorizedStartDateTimeRef.value, "wipPreview");
      }
    }
  }
  function handleConfirmClick() {
    if (isRangeInvalidRef.value) {
      return;
    }
    panelCommon.doConfirm();
    closeCalendar();
  }
  function closeCalendar() {
    isSelectingRef.value = false;
    if (props.active) {
      panelCommon.doClose();
    }
  }
  function changeStartDateTime(time) {
    if (typeof time !== "number") {
      time = getTime(time);
    }
    if (props.value === null) {
      panelCommon.doUpdateValue([time, time], props.panel);
    } else if (Array.isArray(props.value)) {
      panelCommon.doUpdateValue([time, Math.max(props.value[1], time)], props.panel);
    }
  }
  function changeEndDateTime(time) {
    if (typeof time !== "number") {
      time = getTime(time);
    }
    if (props.value === null) {
      panelCommon.doUpdateValue([time, time], props.panel);
    } else if (Array.isArray(props.value)) {
      panelCommon.doUpdateValue([Math.min(props.value[0], time), time], props.panel);
    }
  }
  function changeStartEndTime(startTime, endTime, source) {
    if (typeof startTime !== "number") {
      startTime = getTime(startTime);
    }
    if (source !== "shortcutPreview" && source !== "shortcutDone") {
      let startDefaultTime;
      let endDefaultTime;
      if (type === "datetimerange") {
        const {
          defaultTime
        } = props;
        if (typeof defaultTime === "function") {
          startDefaultTime = extractRangeDefaultTime(startTime, defaultTime, "start", [startTime, endTime]);
          endDefaultTime = extractRangeDefaultTime(endTime, defaultTime, "end", [startTime, endTime]);
        } else if (Array.isArray(defaultTime)) {
          startDefaultTime = getDefaultTime(defaultTime[0]);
          endDefaultTime = getDefaultTime(defaultTime[1]);
        } else {
          startDefaultTime = getDefaultTime(defaultTime);
          endDefaultTime = startDefaultTime;
        }
      }
      if (startDefaultTime) {
        startTime = getTime(set(startTime, startDefaultTime));
      }
      if (endDefaultTime) {
        endTime = getTime(set(endTime, endDefaultTime));
      }
    }
    panelCommon.doUpdateValue([startTime, endTime], props.panel && (source === "done" || source === "shortcutDone"));
  }
  function sanitizeValue(datetime) {
    if (type === "datetimerange") {
      return getTime(startOfSecond(datetime));
    } else if (type === "monthrange") {
      return getTime(startOfMonth(datetime));
    } else {
      return getTime(startOfDay(datetime));
    }
  }
  function handleStartDateInput(value2) {
    const date = strictParse(value2, mergedDateFormatRef.value, /* @__PURE__ */ new Date(), panelCommon.dateFnsOptions.value);
    if (isValid(date)) {
      if (!props.value) {
        const newValue = set(/* @__PURE__ */ new Date(), {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeStartDateTime(sanitizeValue(getTime(newValue)));
      } else if (Array.isArray(props.value)) {
        const newValue = set(props.value[0], {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeStartDateTime(sanitizeValue(getTime(newValue)));
      }
    } else {
      startDateInput.value = value2;
    }
  }
  function handleEndDateInput(value2) {
    const date = strictParse(value2, mergedDateFormatRef.value, /* @__PURE__ */ new Date(), panelCommon.dateFnsOptions.value);
    if (isValid(date)) {
      if (props.value === null) {
        const newValue = set(/* @__PURE__ */ new Date(), {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeEndDateTime(sanitizeValue(getTime(newValue)));
      } else if (Array.isArray(props.value)) {
        const newValue = set(props.value[1], {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeEndDateTime(sanitizeValue(getTime(newValue)));
      }
    } else {
      endDateInputRef.value = value2;
    }
  }
  function handleStartDateInputBlur() {
    const date = strictParse(startDateInput.value, mergedDateFormatRef.value, /* @__PURE__ */ new Date(), panelCommon.dateFnsOptions.value);
    const {
      value: value2
    } = props;
    if (isValid(date)) {
      if (value2 === null) {
        const newValue = set(/* @__PURE__ */ new Date(), {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeStartDateTime(sanitizeValue(getTime(newValue)));
      } else if (Array.isArray(value2)) {
        const newValue = set(value2[0], {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeStartDateTime(sanitizeValue(getTime(newValue)));
      }
    } else {
      refreshDisplayDateString();
    }
  }
  function handleEndDateInputBlur() {
    const date = strictParse(endDateInputRef.value, mergedDateFormatRef.value, /* @__PURE__ */ new Date(), panelCommon.dateFnsOptions.value);
    const {
      value: value2
    } = props;
    if (isValid(date)) {
      if (value2 === null) {
        const newValue = set(/* @__PURE__ */ new Date(), {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeEndDateTime(sanitizeValue(getTime(newValue)));
      } else if (Array.isArray(value2)) {
        const newValue = set(value2[1], {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeEndDateTime(sanitizeValue(getTime(newValue)));
      }
    } else {
      refreshDisplayDateString();
    }
  }
  function refreshDisplayDateString(times) {
    const {
      value: value2
    } = props;
    if (value2 === null || !Array.isArray(value2)) {
      startDateInput.value = "";
      endDateInputRef.value = "";
      return;
    }
    if (times === void 0) {
      times = value2;
    }
    startDateInput.value = format(times[0], mergedDateFormatRef.value, panelCommon.dateFnsOptions.value);
    endDateInputRef.value = format(times[1], mergedDateFormatRef.value, panelCommon.dateFnsOptions.value);
  }
  function handleStartTimePickerChange(value2) {
    if (value2 === null) return;
    changeStartDateTime(value2);
  }
  function handleEndTimePickerChange(value2) {
    if (value2 === null) return;
    changeEndDateTime(value2);
  }
  function handleRangeShortcutMouseenter(shortcut) {
    panelCommon.cachePendingValue();
    const shortcutValue = panelCommon.getShortcutValue(shortcut);
    if (!Array.isArray(shortcutValue)) return;
    changeStartEndTime(shortcutValue[0], shortcutValue[1], "shortcutPreview");
  }
  function handleRangeShortcutClick(shortcut) {
    const shortcutValue = panelCommon.getShortcutValue(shortcut);
    if (!Array.isArray(shortcutValue)) return;
    changeStartEndTime(shortcutValue[0], shortcutValue[1], "shortcutDone");
    panelCommon.clearPendingValue();
    handleConfirmClick();
  }
  function justifyColumnsScrollState(value2, type2) {
    const mergedValue = value2 === void 0 ? props.value : value2;
    if (value2 === void 0 || type2 === "start") {
      if (startMonthScrollbarRef.value) {
        const monthIndex = !Array.isArray(mergedValue) ? getMonth(Date.now()) : getMonth(mergedValue[0]);
        startMonthScrollbarRef.value.scrollTo({
          debounce: false,
          index: monthIndex,
          elSize: MONTH_ITEM_HEIGHT
        });
      }
      if (startYearVlRef.value) {
        const yearIndex = (!Array.isArray(mergedValue) ? getYear(Date.now()) : getYear(mergedValue[0])) - yearRangeRef.value[0];
        startYearVlRef.value.scrollTo({
          index: yearIndex,
          debounce: false
        });
      }
    }
    if (value2 === void 0 || type2 === "end") {
      if (endMonthScrollbarRef.value) {
        const monthIndex = !Array.isArray(mergedValue) ? getMonth(Date.now()) : getMonth(mergedValue[1]);
        endMonthScrollbarRef.value.scrollTo({
          debounce: false,
          index: monthIndex,
          elSize: MONTH_ITEM_HEIGHT
        });
      }
      if (endYearVlRef.value) {
        const yearIndex = (!Array.isArray(mergedValue) ? getYear(Date.now()) : getYear(mergedValue[1])) - yearRangeRef.value[0];
        endYearVlRef.value.scrollTo({
          index: yearIndex,
          debounce: false
        });
      }
    }
  }
  function handleColItemClick(dateItem, clickType) {
    const {
      value: value2
    } = props;
    const noCurrentValue = !Array.isArray(value2);
    const itemTs = dateItem.type === "year" && type !== "yearrange" ? noCurrentValue ? set(dateItem.ts, {
      month: getMonth(type === "quarterrange" ? startOfQuarter(/* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date())
    }).valueOf() : set(dateItem.ts, {
      month: getMonth(type === "quarterrange" ? startOfQuarter(value2[clickType === "start" ? 0 : 1]) : value2[clickType === "start" ? 0 : 1])
    }).valueOf() : dateItem.ts;
    if (noCurrentValue) {
      const partialValue = sanitizeValue(itemTs);
      const nextValue2 = [partialValue, partialValue];
      panelCommon.doUpdateValue(nextValue2, props.panel);
      justifyColumnsScrollState(nextValue2, "start");
      justifyColumnsScrollState(nextValue2, "end");
      panelCommon.disableTransitionOneTick();
      return;
    }
    const nextValue = [value2[0], value2[1]];
    let otherPartsChanged = false;
    if (clickType === "start") {
      nextValue[0] = sanitizeValue(itemTs);
      if (nextValue[0] > nextValue[1]) {
        nextValue[1] = nextValue[0];
        otherPartsChanged = true;
      }
    } else {
      nextValue[1] = sanitizeValue(itemTs);
      if (nextValue[0] > nextValue[1]) {
        nextValue[0] = nextValue[1];
        otherPartsChanged = true;
      }
    }
    panelCommon.doUpdateValue(nextValue, props.panel);
    switch (type) {
      case "monthrange":
      case "quarterrange":
        panelCommon.disableTransitionOneTick();
        if (otherPartsChanged) {
          justifyColumnsScrollState(nextValue, "start");
          justifyColumnsScrollState(nextValue, "end");
        } else {
          justifyColumnsScrollState(nextValue, clickType);
        }
        break;
      case "yearrange":
        panelCommon.disableTransitionOneTick();
        justifyColumnsScrollState(nextValue, "start");
        justifyColumnsScrollState(nextValue, "end");
    }
  }
  function handleStartYearVlScroll() {
    var _a2;
    (_a2 = startYearScrollbarRef.value) === null || _a2 === void 0 ? void 0 : _a2.sync();
  }
  function handleEndYearVlScroll() {
    var _a2;
    (_a2 = endYearScrollbarRef.value) === null || _a2 === void 0 ? void 0 : _a2.sync();
  }
  function virtualListContainer(type2) {
    var _a2, _b2;
    if (type2 === "start") {
      return ((_a2 = startYearVlRef.value) === null || _a2 === void 0 ? void 0 : _a2.listElRef) || null;
    } else {
      return ((_b2 = endYearVlRef.value) === null || _b2 === void 0 ? void 0 : _b2.listElRef) || null;
    }
  }
  function virtualListContent(type2) {
    var _a2, _b2;
    if (type2 === "start") {
      return ((_a2 = startYearVlRef.value) === null || _a2 === void 0 ? void 0 : _a2.itemsElRef) || null;
    } else {
      return ((_b2 = endYearVlRef.value) === null || _b2 === void 0 ? void 0 : _b2.itemsElRef) || null;
    }
  }
  const childComponentRefs = {
    startYearVlRef,
    endYearVlRef,
    startMonthScrollbarRef,
    endMonthScrollbarRef,
    startYearScrollbarRef,
    endYearScrollbarRef
  };
  return Object.assign(Object.assign(Object.assign(Object.assign({
    startDatesElRef,
    endDatesElRef,
    handleDateClick,
    handleColItemClick,
    handleDateMouseEnter,
    handleConfirmClick,
    startCalendarPrevYear,
    startCalendarPrevMonth,
    startCalendarNextYear,
    startCalendarNextMonth,
    endCalendarPrevYear,
    endCalendarPrevMonth,
    endCalendarNextMonth,
    endCalendarNextYear,
    mergedIsDateDisabled,
    changeStartEndTime,
    ranges: rangesRef,
    calendarMonthBeforeYear: calendarMonthBeforeYearRef,
    startCalendarMonth: startCalendarMonthRef,
    startCalendarYear: startCalendarYearRef,
    endCalendarMonth: endCalendarMonthRef,
    endCalendarYear: endCalendarYearRef,
    weekdays: weekdaysRef,
    startDateArray: startDateArrayRef,
    endDateArray: endDateArrayRef,
    startYearArray: startYearArrayRef,
    startMonthArray: startMonthArrayRef,
    startQuarterArray: startQuarterArrayRef,
    endYearArray: endYearArrayRef,
    endMonthArray: endMonthArrayRef,
    endQuarterArray: endQuarterArrayRef,
    isSelecting: isSelectingRef,
    handleRangeShortcutMouseenter,
    handleRangeShortcutClick
  }, panelCommon), validation), childComponentRefs), {
    // datetimerangeonly
    startDateDisplayString: startDateInput,
    endDateInput: endDateInputRef,
    timePickerSize: panelCommon.timePickerSize,
    startTimeValue: startTimeValueRef,
    endTimeValue: endTimeValueRef,
    datePickerSlots,
    shortcuts: shortcutsRef,
    startCalendarDateTime: startCalendarDateTimeRef,
    endCalendarDateTime: endCalendarDateTimeRef,
    justifyColumnsScrollState,
    handleFocusDetectorFocus: panelCommon.handleFocusDetectorFocus,
    handleStartTimePickerChange,
    handleEndTimePickerChange,
    handleStartDateInput,
    handleStartDateInputBlur,
    handleEndDateInput,
    handleEndDateInputBlur,
    handleStartYearVlScroll,
    handleEndYearVlScroll,
    virtualListContainer,
    virtualListContent,
    onUpdateStartCalendarValue,
    onUpdateEndCalendarValue
  });
}
const DaterangePanel = defineComponent({
  name: "DateRangePanel",
  props: useDualCalendarProps,
  setup(props) {
    return useDualCalendar(props, "daterange");
  },
  render() {
    var _a, _b, _c;
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      onRender,
      datePickerSlots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${mergedClsPrefix}-date-panel`, `${mergedClsPrefix}-date-panel--daterange`, !this.panel && `${mergedClsPrefix}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, h("div", {
      ref: "startDatesElRef",
      class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--start`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
      onClick: this.startCalendarPrevYear
    }, resolveSlot(datePickerSlots["prev-year"], () => [h(FastBackwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__prev`,
      onClick: this.startCalendarPrevMonth
    }, resolveSlot(datePickerSlots["prev-month"], () => [h(BackwardIcon, null)])), h(PanelHeader, {
      fastYearSelect: this.fastYearSelect,
      fastMonthSelect: this.fastMonthSelect,
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.startCalendarDateTime,
      onUpdateValue: this.onUpdateStartCalendarValue,
      mergedClsPrefix,
      calendarMonth: this.startCalendarMonth,
      calendarYear: this.startCalendarYear
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__next`,
      onClick: this.startCalendarNextMonth
    }, resolveSlot(datePickerSlots["next-month"], () => [h(ForwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-next`,
      onClick: this.startCalendarNextYear
    }, resolveSlot(datePickerSlots["next-year"], () => [h(FastForwardIcon, null)]))), h("div", {
      class: `${mergedClsPrefix}-date-panel-weekdays`
    }, this.weekdays.map((weekday) => h("div", {
      key: weekday,
      class: `${mergedClsPrefix}-date-panel-weekdays__day`
    }, weekday))), h("div", {
      class: `${mergedClsPrefix}-date-panel__divider`
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-dates`
    }, this.startDateArray.map((dateItem, i) => h("div", {
      "data-n-date": true,
      key: i,
      class: [`${mergedClsPrefix}-date-panel-date`, {
        [`${mergedClsPrefix}-date-panel-date--excluded`]: !dateItem.inCurrentMonth,
        [`${mergedClsPrefix}-date-panel-date--current`]: dateItem.isCurrentDate,
        [`${mergedClsPrefix}-date-panel-date--selected`]: dateItem.selected,
        [`${mergedClsPrefix}-date-panel-date--covered`]: dateItem.inSpan,
        [`${mergedClsPrefix}-date-panel-date--start`]: dateItem.startOfSpan,
        [`${mergedClsPrefix}-date-panel-date--end`]: dateItem.endOfSpan,
        [`${mergedClsPrefix}-date-panel-date--disabled`]: this.mergedIsDateDisabled(dateItem.ts)
      }],
      onClick: () => {
        this.handleDateClick(dateItem);
      },
      onMouseenter: () => {
        this.handleDateMouseEnter(dateItem);
      }
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-date__trigger`
    }), dateItem.dateObject.date, dateItem.isCurrentDate ? h("div", {
      class: `${mergedClsPrefix}-date-panel-date__sup`
    }) : null)))), h("div", {
      class: `${mergedClsPrefix}-date-panel__vertical-divider`
    }), h("div", {
      ref: "endDatesElRef",
      class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--end`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
      onClick: this.endCalendarPrevYear
    }, resolveSlot(datePickerSlots["prev-year"], () => [h(FastBackwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__prev`,
      onClick: this.endCalendarPrevMonth
    }, resolveSlot(datePickerSlots["prev-month"], () => [h(BackwardIcon, null)])), h(PanelHeader, {
      fastYearSelect: this.fastYearSelect,
      fastMonthSelect: this.fastMonthSelect,
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.endCalendarDateTime,
      onUpdateValue: this.onUpdateEndCalendarValue,
      mergedClsPrefix,
      calendarMonth: this.endCalendarMonth,
      calendarYear: this.endCalendarYear
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__next`,
      onClick: this.endCalendarNextMonth
    }, resolveSlot(datePickerSlots["next-month"], () => [h(ForwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-next`,
      onClick: this.endCalendarNextYear
    }, resolveSlot(datePickerSlots["next-year"], () => [h(FastForwardIcon, null)]))), h("div", {
      class: `${mergedClsPrefix}-date-panel-weekdays`
    }, this.weekdays.map((weekday) => h("div", {
      key: weekday,
      class: `${mergedClsPrefix}-date-panel-weekdays__day`
    }, weekday))), h("div", {
      class: `${mergedClsPrefix}-date-panel__divider`
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-dates`
    }, this.endDateArray.map((dateItem, i) => h("div", {
      "data-n-date": true,
      key: i,
      class: [`${mergedClsPrefix}-date-panel-date`, {
        [`${mergedClsPrefix}-date-panel-date--excluded`]: !dateItem.inCurrentMonth,
        [`${mergedClsPrefix}-date-panel-date--current`]: dateItem.isCurrentDate,
        [`${mergedClsPrefix}-date-panel-date--selected`]: dateItem.selected,
        [`${mergedClsPrefix}-date-panel-date--covered`]: dateItem.inSpan,
        [`${mergedClsPrefix}-date-panel-date--start`]: dateItem.startOfSpan,
        [`${mergedClsPrefix}-date-panel-date--end`]: dateItem.endOfSpan,
        [`${mergedClsPrefix}-date-panel-date--disabled`]: this.mergedIsDateDisabled(dateItem.ts)
      }],
      onClick: () => {
        this.handleDateClick(dateItem);
      },
      onMouseenter: () => {
        this.handleDateMouseEnter(dateItem);
      }
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-date__trigger`
    }), dateItem.dateObject.date, dateItem.isCurrentDate ? h("div", {
      class: `${mergedClsPrefix}-date-panel-date__sup`
    }) : null)))), this.datePickerSlots.footer ? h("div", {
      class: `${mergedClsPrefix}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) || shortcuts ? h("div", {
      class: `${mergedClsPrefix}-date-panel-actions`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__prefix`
    }, shortcuts && Object.keys(shortcuts).map((key) => {
      const shortcut = shortcuts[key];
      return Array.isArray(shortcut) || typeof shortcut === "function" ? h(XButton, {
        size: "tiny",
        onMouseenter: () => {
          this.handleRangeShortcutMouseenter(shortcut);
        },
        onClick: () => {
          this.handleRangeShortcutClick(shortcut);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => key
      }) : null;
    })), h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__suffix`
    }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? resolveSlotWithTypedProps(datePickerSlots.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("confirm")) ? resolveSlotWithTypedProps(datePickerSlots.confirm, {
      onConfirm: this.handleConfirmClick,
      disabled: this.isRangeInvalid || this.isSelecting,
      text: this.locale.confirm
    }, () => [h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isRangeInvalid || this.isSelecting,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, h(FocusDetector, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
const DatetimePanel = defineComponent({
  name: "DateTimePanel",
  props: useCalendarProps,
  setup(props) {
    return useCalendar(props, "datetime");
  },
  render() {
    var _a, _b, _c, _d;
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      timePickerProps,
      datePickerSlots,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${mergedClsPrefix}-date-panel`, `${mergedClsPrefix}-date-panel--datetime`, !this.panel && `${mergedClsPrefix}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-header`
    }, h(__unplugin_components_2, {
      value: this.dateInputValue,
      theme: mergedTheme.peers.Input,
      themeOverrides: mergedTheme.peerOverrides.Input,
      stateful: false,
      size: this.timePickerSize,
      readonly: this.inputReadonly,
      class: `${mergedClsPrefix}-date-panel-date-input`,
      textDecoration: this.isDateInvalid ? "line-through" : "",
      placeholder: this.locale.selectDate,
      onBlur: this.handleDateInputBlur,
      onUpdateValue: this.handleDateInput
    }), h(__unplugin_components_7, Object.assign({
      size: this.timePickerSize,
      placeholder: this.locale.selectTime,
      format: this.timePickerFormat
    }, Array.isArray(timePickerProps) ? void 0 : timePickerProps, {
      showIcon: false,
      to: false,
      theme: mergedTheme.peers.TimePicker,
      themeOverrides: mergedTheme.peerOverrides.TimePicker,
      value: Array.isArray(this.value) ? null : this.value,
      isHourDisabled: this.isHourDisabled,
      isMinuteDisabled: this.isMinuteDisabled,
      isSecondDisabled: this.isSecondDisabled,
      onUpdateValue: this.handleTimePickerChange,
      stateful: false
    }))), h("div", {
      class: `${mergedClsPrefix}-date-panel-calendar`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
      onClick: this.prevYear
    }, resolveSlot(datePickerSlots["prev-year"], () => [h(FastBackwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__prev`,
      onClick: this.prevMonth
    }, resolveSlot(datePickerSlots["prev-month"], () => [h(BackwardIcon, null)])), h(PanelHeader, {
      fastYearSelect: this.fastYearSelect,
      fastMonthSelect: this.fastMonthSelect,
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.calendarValue,
      onUpdateValue: this.onUpdateCalendarValue,
      mergedClsPrefix,
      calendarMonth: this.calendarMonth,
      calendarYear: this.calendarYear
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__next`,
      onClick: this.nextMonth
    }, resolveSlot(datePickerSlots["next-month"], () => [h(ForwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-next`,
      onClick: this.nextYear
    }, resolveSlot(datePickerSlots["next-year"], () => [h(FastForwardIcon, null)]))), h("div", {
      class: `${mergedClsPrefix}-date-panel-weekdays`
    }, this.weekdays.map((weekday) => h("div", {
      key: weekday,
      class: `${mergedClsPrefix}-date-panel-weekdays__day`
    }, weekday))), h("div", {
      class: `${mergedClsPrefix}-date-panel-dates`
    }, this.dateArray.map((dateItem, i) => h("div", {
      "data-n-date": true,
      key: i,
      class: [`${mergedClsPrefix}-date-panel-date`, {
        [`${mergedClsPrefix}-date-panel-date--current`]: dateItem.isCurrentDate,
        [`${mergedClsPrefix}-date-panel-date--selected`]: dateItem.selected,
        [`${mergedClsPrefix}-date-panel-date--excluded`]: !dateItem.inCurrentMonth,
        [`${mergedClsPrefix}-date-panel-date--disabled`]: this.mergedIsDateDisabled(dateItem.ts, {
          type: "date",
          year: dateItem.dateObject.year,
          month: dateItem.dateObject.month,
          date: dateItem.dateObject.date
        })
      }],
      onClick: () => {
        this.handleDateClick(dateItem);
      }
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-date__trigger`
    }), dateItem.dateObject.date, dateItem.isCurrentDate ? h("div", {
      class: `${mergedClsPrefix}-date-panel-date__sup`
    }) : null)))), this.datePickerSlots.footer ? h("div", {
      class: `${mergedClsPrefix}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) || shortcuts ? h("div", {
      class: `${mergedClsPrefix}-date-panel-actions`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__prefix`
    }, shortcuts && Object.keys(shortcuts).map((key) => {
      const shortcut = shortcuts[key];
      return Array.isArray(shortcut) ? null : h(XButton, {
        size: "tiny",
        onMouseenter: () => {
          this.handleSingleShortcutMouseenter(shortcut);
        },
        onClick: () => {
          this.handleSingleShortcutClick(shortcut);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => key
      });
    })), h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__suffix`
    }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? resolveSlotWithTypedProps(this.datePickerSlots.clear, {
      onClear: this.clearSelectedDateTime,
      text: this.locale.clear
    }, () => [h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.clearSelectedDateTime
    }, {
      default: () => this.locale.clear
    })]) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("now")) ? resolveSlotWithTypedProps(datePickerSlots.now, {
      onNow: this.handleNowClick,
      text: this.locale.now
    }, () => [h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    })]) : null, ((_d = this.actions) === null || _d === void 0 ? void 0 : _d.includes("confirm")) ? resolveSlotWithTypedProps(datePickerSlots.confirm, {
      onConfirm: this.handleConfirmClick,
      disabled: this.isDateInvalid,
      text: this.locale.confirm
    }, () => [h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isDateInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, h(FocusDetector, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
const DatetimerangePanel = defineComponent({
  name: "DateTimeRangePanel",
  props: useDualCalendarProps,
  setup(props) {
    return useDualCalendar(props, "datetimerange");
  },
  render() {
    var _a, _b, _c;
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      timePickerProps,
      onRender,
      datePickerSlots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${mergedClsPrefix}-date-panel`, `${mergedClsPrefix}-date-panel--datetimerange`, !this.panel && `${mergedClsPrefix}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-header`
    }, h(__unplugin_components_2, {
      value: this.startDateDisplayString,
      theme: mergedTheme.peers.Input,
      themeOverrides: mergedTheme.peerOverrides.Input,
      size: this.timePickerSize,
      stateful: false,
      readonly: this.inputReadonly,
      class: `${mergedClsPrefix}-date-panel-date-input`,
      textDecoration: this.isStartValueInvalid ? "line-through" : "",
      placeholder: this.locale.selectDate,
      onBlur: this.handleStartDateInputBlur,
      onUpdateValue: this.handleStartDateInput
    }), h(__unplugin_components_7, Object.assign({
      placeholder: this.locale.selectTime,
      format: this.timePickerFormat,
      size: this.timePickerSize
    }, Array.isArray(timePickerProps) ? timePickerProps[0] : timePickerProps, {
      value: this.startTimeValue,
      to: false,
      showIcon: false,
      disabled: this.isSelecting,
      theme: mergedTheme.peers.TimePicker,
      themeOverrides: mergedTheme.peerOverrides.TimePicker,
      stateful: false,
      isHourDisabled: this.isStartHourDisabled,
      isMinuteDisabled: this.isStartMinuteDisabled,
      isSecondDisabled: this.isStartSecondDisabled,
      onUpdateValue: this.handleStartTimePickerChange
    })), h(__unplugin_components_2, {
      value: this.endDateInput,
      theme: mergedTheme.peers.Input,
      themeOverrides: mergedTheme.peerOverrides.Input,
      stateful: false,
      size: this.timePickerSize,
      readonly: this.inputReadonly,
      class: `${mergedClsPrefix}-date-panel-date-input`,
      textDecoration: this.isEndValueInvalid ? "line-through" : "",
      placeholder: this.locale.selectDate,
      onBlur: this.handleEndDateInputBlur,
      onUpdateValue: this.handleEndDateInput
    }), h(__unplugin_components_7, Object.assign({
      placeholder: this.locale.selectTime,
      format: this.timePickerFormat,
      size: this.timePickerSize
    }, Array.isArray(timePickerProps) ? timePickerProps[1] : timePickerProps, {
      disabled: this.isSelecting,
      showIcon: false,
      theme: mergedTheme.peers.TimePicker,
      themeOverrides: mergedTheme.peerOverrides.TimePicker,
      to: false,
      stateful: false,
      value: this.endTimeValue,
      isHourDisabled: this.isEndHourDisabled,
      isMinuteDisabled: this.isEndMinuteDisabled,
      isSecondDisabled: this.isEndSecondDisabled,
      onUpdateValue: this.handleEndTimePickerChange
    }))), h("div", {
      ref: "startDatesElRef",
      class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--start`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
      onClick: this.startCalendarPrevYear
    }, resolveSlot(datePickerSlots["prev-year"], () => [h(FastBackwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__prev`,
      onClick: this.startCalendarPrevMonth
    }, resolveSlot(datePickerSlots["prev-month"], () => [h(BackwardIcon, null)])), h(PanelHeader, {
      fastYearSelect: this.fastYearSelect,
      fastMonthSelect: this.fastMonthSelect,
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.startCalendarDateTime,
      onUpdateValue: this.onUpdateStartCalendarValue,
      mergedClsPrefix,
      calendarMonth: this.startCalendarMonth,
      calendarYear: this.startCalendarYear
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__next`,
      onClick: this.startCalendarNextMonth
    }, resolveSlot(datePickerSlots["next-month"], () => [h(ForwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-next`,
      onClick: this.startCalendarNextYear
    }, resolveSlot(datePickerSlots["next-year"], () => [h(FastForwardIcon, null)]))), h("div", {
      class: `${mergedClsPrefix}-date-panel-weekdays`
    }, this.weekdays.map((weekday) => h("div", {
      key: weekday,
      class: `${mergedClsPrefix}-date-panel-weekdays__day`
    }, weekday))), h("div", {
      class: `${mergedClsPrefix}-date-panel__divider`
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-dates`
    }, this.startDateArray.map((dateItem, i) => {
      const disabled = this.mergedIsDateDisabled(dateItem.ts);
      return h("div", {
        "data-n-date": true,
        key: i,
        class: [`${mergedClsPrefix}-date-panel-date`, {
          [`${mergedClsPrefix}-date-panel-date--excluded`]: !dateItem.inCurrentMonth,
          [`${mergedClsPrefix}-date-panel-date--current`]: dateItem.isCurrentDate,
          [`${mergedClsPrefix}-date-panel-date--selected`]: dateItem.selected,
          [`${mergedClsPrefix}-date-panel-date--covered`]: dateItem.inSpan,
          [`${mergedClsPrefix}-date-panel-date--start`]: dateItem.startOfSpan,
          [`${mergedClsPrefix}-date-panel-date--end`]: dateItem.endOfSpan,
          [`${mergedClsPrefix}-date-panel-date--disabled`]: disabled
        }],
        onClick: disabled ? void 0 : () => {
          this.handleDateClick(dateItem);
        },
        onMouseenter: disabled ? void 0 : () => {
          this.handleDateMouseEnter(dateItem);
        }
      }, h("div", {
        class: `${mergedClsPrefix}-date-panel-date__trigger`
      }), dateItem.dateObject.date, dateItem.isCurrentDate ? h("div", {
        class: `${mergedClsPrefix}-date-panel-date__sup`
      }) : null);
    }))), h("div", {
      class: `${mergedClsPrefix}-date-panel__vertical-divider`
    }), h("div", {
      ref: "endDatesElRef",
      class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--end`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
      onClick: this.endCalendarPrevYear
    }, resolveSlot(datePickerSlots["prev-year"], () => [h(FastBackwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__prev`,
      onClick: this.endCalendarPrevMonth
    }, resolveSlot(datePickerSlots["prev-month"], () => [h(BackwardIcon, null)])), h(PanelHeader, {
      fastYearSelect: this.fastYearSelect,
      fastMonthSelect: this.fastMonthSelect,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.endCalendarDateTime,
      onUpdateValue: this.onUpdateEndCalendarValue,
      mergedClsPrefix,
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      calendarMonth: this.endCalendarMonth,
      calendarYear: this.endCalendarYear
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__next`,
      onClick: this.endCalendarNextMonth
    }, resolveSlot(datePickerSlots["next-month"], () => [h(ForwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-next`,
      onClick: this.endCalendarNextYear
    }, resolveSlot(datePickerSlots["next-year"], () => [h(FastForwardIcon, null)]))), h("div", {
      class: `${mergedClsPrefix}-date-panel-weekdays`
    }, this.weekdays.map((weekday) => h("div", {
      key: weekday,
      class: `${mergedClsPrefix}-date-panel-weekdays__day`
    }, weekday))), h("div", {
      class: `${mergedClsPrefix}-date-panel__divider`
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-dates`
    }, this.endDateArray.map((dateItem, i) => {
      const disabled = this.mergedIsDateDisabled(dateItem.ts);
      return h("div", {
        "data-n-date": true,
        key: i,
        class: [`${mergedClsPrefix}-date-panel-date`, {
          [`${mergedClsPrefix}-date-panel-date--excluded`]: !dateItem.inCurrentMonth,
          [`${mergedClsPrefix}-date-panel-date--current`]: dateItem.isCurrentDate,
          [`${mergedClsPrefix}-date-panel-date--selected`]: dateItem.selected,
          [`${mergedClsPrefix}-date-panel-date--covered`]: dateItem.inSpan,
          [`${mergedClsPrefix}-date-panel-date--start`]: dateItem.startOfSpan,
          [`${mergedClsPrefix}-date-panel-date--end`]: dateItem.endOfSpan,
          [`${mergedClsPrefix}-date-panel-date--disabled`]: disabled
        }],
        onClick: disabled ? void 0 : () => {
          this.handleDateClick(dateItem);
        },
        onMouseenter: disabled ? void 0 : () => {
          this.handleDateMouseEnter(dateItem);
        }
      }, h("div", {
        class: `${mergedClsPrefix}-date-panel-date__trigger`
      }), dateItem.dateObject.date, dateItem.isCurrentDate ? h("div", {
        class: `${mergedClsPrefix}-date-panel-date__sup`
      }) : null);
    }))), this.datePickerSlots.footer ? h("div", {
      class: `${mergedClsPrefix}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) || shortcuts ? h("div", {
      class: `${mergedClsPrefix}-date-panel-actions`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__prefix`
    }, shortcuts && Object.keys(shortcuts).map((key) => {
      const shortcut = shortcuts[key];
      return Array.isArray(shortcut) || typeof shortcut === "function" ? h(XButton, {
        size: "tiny",
        onMouseenter: () => {
          this.handleRangeShortcutMouseenter(shortcut);
        },
        onClick: () => {
          this.handleRangeShortcutClick(shortcut);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => key
      }) : null;
    })), h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__suffix`
    }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? resolveSlotWithTypedProps(datePickerSlots.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("confirm")) ? resolveSlotWithTypedProps(datePickerSlots.confirm, {
      onConfirm: this.handleConfirmClick,
      disabled: this.isRangeInvalid || this.isSelecting,
      text: this.locale.confirm
    }, () => [h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isRangeInvalid || this.isSelecting,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, h(FocusDetector, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
const MonthRangePanel = defineComponent({
  name: "MonthRangePanel",
  props: Object.assign(Object.assign({}, useDualCalendarProps), {
    type: {
      type: String,
      required: true
    }
  }),
  setup(props) {
    const useCalendarRef = useDualCalendar(props, props.type);
    const {
      dateLocaleRef
    } = useLocale("DatePicker");
    const renderItem = (item, i, mergedClsPrefix, type) => {
      const {
        handleColItemClick
      } = useCalendarRef;
      const disabled = false;
      return h("div", {
        "data-n-date": true,
        key: i,
        class: [`${mergedClsPrefix}-date-panel-month-calendar__picker-col-item`, item.isCurrent && `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--current`, item.selected && `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--selected`, disabled],
        onClick: () => {
          handleColItemClick(item, type);
        }
      }, item.type === "month" ? getMonthString(item.dateObject.month, item.monthFormat, dateLocaleRef.value.locale) : item.type === "quarter" ? getQuarterString(item.dateObject.quarter, item.quarterFormat, dateLocaleRef.value.locale) : getYearString(item.dateObject.year, item.yearFormat, dateLocaleRef.value.locale));
    };
    onMounted(() => {
      useCalendarRef.justifyColumnsScrollState();
    });
    return Object.assign(Object.assign({}, useCalendarRef), {
      renderItem
    });
  },
  render() {
    var _a, _b, _c;
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      type,
      renderItem,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${mergedClsPrefix}-date-panel`, `${mergedClsPrefix}-date-panel--daterange`, !this.panel && `${mergedClsPrefix}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, h("div", {
      ref: "startDatesElRef",
      class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--start`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar`
    }, h(Scrollbar, {
      ref: "startYearScrollbarRef",
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      container: () => this.virtualListContainer("start"),
      content: () => this.virtualListContent("start"),
      horizontalRailStyle: {
        zIndex: 1
      },
      verticalRailStyle: {
        zIndex: 1
      }
    }, {
      default: () => h(VVirtualList, {
        ref: "startYearVlRef",
        items: this.startYearArray,
        itemSize: MONTH_ITEM_HEIGHT,
        showScrollbar: false,
        keyField: "ts",
        onScroll: this.handleStartYearVlScroll,
        paddingBottom: 4
      }, {
        default: ({
          item,
          index
        }) => {
          return renderItem(item, index, mergedClsPrefix, "start");
        }
      })
    }), type === "monthrange" || type === "quarterrange" ? h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`
    }, h(Scrollbar, {
      ref: "startMonthScrollbarRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [(type === "monthrange" ? this.startMonthArray : this.startQuarterArray).map((item, i) => renderItem(item, i, mergedClsPrefix, "start")), type === "monthrange" && h("div", {
        class: `${mergedClsPrefix}-date-panel-month-calendar__padding`
      })]
    })) : null)), h("div", {
      class: `${mergedClsPrefix}-date-panel__vertical-divider`
    }), h("div", {
      ref: "endDatesElRef",
      class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--end`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar`
    }, h(Scrollbar, {
      ref: "endYearScrollbarRef",
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      container: () => this.virtualListContainer("end"),
      content: () => this.virtualListContent("end"),
      horizontalRailStyle: {
        zIndex: 1
      },
      verticalRailStyle: {
        zIndex: 1
      }
    }, {
      default: () => h(VVirtualList, {
        ref: "endYearVlRef",
        items: this.endYearArray,
        itemSize: MONTH_ITEM_HEIGHT,
        showScrollbar: false,
        keyField: "ts",
        onScroll: this.handleEndYearVlScroll,
        paddingBottom: 4
      }, {
        default: ({
          item,
          index
        }) => {
          return renderItem(item, index, mergedClsPrefix, "end");
        }
      })
    }), type === "monthrange" || type === "quarterrange" ? h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`
    }, h(Scrollbar, {
      ref: "endMonthScrollbarRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [(type === "monthrange" ? this.endMonthArray : this.endQuarterArray).map((item, i) => renderItem(item, i, mergedClsPrefix, "end")), type === "monthrange" && h("div", {
        class: `${mergedClsPrefix}-date-panel-month-calendar__padding`
      })]
    })) : null)), resolveWrappedSlot(this.datePickerSlots.footer, (children) => {
      return children ? h("div", {
        class: `${mergedClsPrefix}-date-panel-footer`
      }, children) : null;
    }), ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) || shortcuts ? h("div", {
      class: `${mergedClsPrefix}-date-panel-actions`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__prefix`
    }, shortcuts && Object.keys(shortcuts).map((key) => {
      const shortcut = shortcuts[key];
      return Array.isArray(shortcut) || typeof shortcut === "function" ? h(XButton, {
        size: "tiny",
        onMouseenter: () => {
          this.handleRangeShortcutMouseenter(shortcut);
        },
        onClick: () => {
          this.handleRangeShortcutClick(shortcut);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => key
      }) : null;
    })), h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__suffix`
    }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? resolveSlotWithTypedProps(this.datePickerSlots.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [h(XButton, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("confirm")) ? resolveSlotWithTypedProps(this.datePickerSlots.confirm, {
      disabled: this.isRangeInvalid,
      onConfirm: this.handleConfirmClick,
      text: this.locale.confirm
    }, () => [h(XButton, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isRangeInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, h(FocusDetector, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
const datePickerProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clearable: Boolean,
  fastYearSelect: Boolean,
  fastMonthSelect: Boolean,
  updateValueOnClose: Boolean,
  calendarDayFormat: String,
  calendarHeaderYearFormat: String,
  calendarHeaderMonthFormat: String,
  calendarHeaderMonthYearSeparator: {
    type: String,
    default: " "
  },
  calendarHeaderMonthBeforeYear: {
    type: Boolean,
    default: void 0
  },
  defaultValue: [Number, Array],
  defaultFormattedValue: [String, Array],
  defaultTime: [Number, String, Array, Function],
  disabled: {
    type: Boolean,
    default: void 0
  },
  placement: {
    type: String,
    default: "bottom-start"
  },
  value: [Number, Array],
  formattedValue: [String, Array],
  size: String,
  type: {
    type: String,
    default: "date"
  },
  valueFormat: String,
  separator: String,
  placeholder: String,
  startPlaceholder: String,
  endPlaceholder: String,
  format: String,
  dateFormat: String,
  timePickerFormat: String,
  actions: Array,
  shortcuts: Object,
  isDateDisabled: Function,
  isTimeDisabled: Function,
  show: {
    type: Boolean,
    default: void 0
  },
  panel: Boolean,
  ranges: Object,
  firstDayOfWeek: Number,
  inputReadonly: Boolean,
  closeOnSelect: Boolean,
  status: String,
  timePickerProps: [Object, Array],
  onClear: Function,
  onConfirm: Function,
  defaultCalendarStartTime: Number,
  defaultCalendarEndTime: Number,
  bindCalendarMonths: Boolean,
  monthFormat: {
    type: String,
    default: "M"
  },
  yearFormat: {
    type: String,
    default: "y"
  },
  quarterFormat: {
    type: String,
    default: "'Q'Q"
  },
  yearRange: {
    type: Array,
    default: () => [1901, 2100]
  },
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  "onUpdate:formattedValue": [Function, Array],
  onUpdateFormattedValue: [Function, Array],
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onFocus: [Function, Array],
  onBlur: [Function, Array],
  onNextMonth: Function,
  onPrevMonth: Function,
  onNextYear: Function,
  onPrevYear: Function,
  // deprecated
  onChange: [Function, Array]
});
const style = c([cB("date-picker", `
 position: relative;
 z-index: auto;
 `, [cB("date-picker-icon", `
 color: var(--n-icon-color-override);
 transition: color .3s var(--n-bezier);
 `), cB("icon", `
 color: var(--n-icon-color-override);
 transition: color .3s var(--n-bezier);
 `), cM("disabled", [cB("date-picker-icon", `
 color: var(--n-icon-color-disabled-override);
 `), cB("icon", `
 color: var(--n-icon-color-disabled-override);
 `)])]), cB("date-panel", `
 width: fit-content;
 outline: none;
 margin: 4px 0;
 display: grid;
 grid-template-columns: 0fr;
 border-radius: var(--n-panel-border-radius);
 background-color: var(--n-panel-color);
 color: var(--n-panel-text-color);
 user-select: none;
 `, [fadeInScaleUpTransition(), cM("shadow", `
 box-shadow: var(--n-panel-box-shadow);
 `), cB("date-panel-calendar", {
  padding: "var(--n-calendar-left-padding)",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridArea: "left-calendar"
}, [cM("end", {
  padding: "var(--n-calendar-right-padding)",
  gridArea: "right-calendar"
})]), cB("date-panel-month-calendar", {
  display: "flex",
  gridArea: "left-calendar"
}, [cE("picker-col", `
 min-width: var(--n-scroll-item-width);
 height: calc(var(--n-scroll-item-height) * 6);
 user-select: none;
 -webkit-user-select: none;
 `, [c("&:first-child", `
 min-width: calc(var(--n-scroll-item-width) + 4px);
 `, [cE("picker-col-item", [c("&::before", "left: 4px;")])]), cE("padding", `
 height: calc(var(--n-scroll-item-height) * 5)
 `)]), cE("picker-col-item", `
 z-index: 0;
 cursor: pointer;
 height: var(--n-scroll-item-height);
 box-sizing: border-box;
 padding-top: 4px;
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background: #0000;
 color: var(--n-item-text-color);
 `, [c("&::before", `
 z-index: -1;
 content: "";
 position: absolute;
 left: 0;
 right: 4px;
 top: 4px;
 bottom: 0;
 border-radius: var(--n-scroll-item-border-radius);
 transition: 
 background-color .3s var(--n-bezier);
 `), cNotM("disabled", [c("&:hover::before", `
 background-color: var(--n-item-color-hover);
 `), cM("selected", `
 color: var(--n-item-color-active);
 `, [c("&::before", "background-color: var(--n-item-color-hover);")])]), cM("disabled", `
 color: var(--n-item-text-color-disabled);
 cursor: not-allowed;
 `, [cM("selected", [c("&::before", `
 background-color: var(--n-item-color-disabled);
 `)])])])]), cM("date", {
  gridTemplateAreas: `
 "left-calendar"
 "footer"
 "action"
 `
}), cM("week", {
  gridTemplateAreas: `
 "left-calendar"
 "footer"
 "action"
 `
}), cM("daterange", {
  gridTemplateAreas: `
 "left-calendar divider right-calendar"
 "footer footer footer"
 "action action action"
 `
}), cM("datetime", {
  gridTemplateAreas: `
 "header"
 "left-calendar"
 "footer"
 "action"
 `
}), cM("datetimerange", {
  gridTemplateAreas: `
 "header header header"
 "left-calendar divider right-calendar"
 "footer footer footer"
 "action action action"
 `
}), cM("month", {
  gridTemplateAreas: `
 "left-calendar"
 "footer"
 "action"
 `
}), cB("date-panel-footer", {
  gridArea: "footer"
}), cB("date-panel-actions", {
  gridArea: "action"
}), cB("date-panel-header", {
  gridArea: "header"
}), cB("date-panel-header", `
 box-sizing: border-box;
 width: 100%;
 align-items: center;
 padding: var(--n-panel-header-padding);
 display: flex;
 justify-content: space-between;
 border-bottom: 1px solid var(--n-panel-header-divider-color);
 `, [c(">", [c("*:not(:last-child)", {
  marginRight: "10px"
}), c("*", {
  flex: 1,
  width: 0
}), cB("time-picker", {
  zIndex: 1
})])]), cB("date-panel-month", `
 box-sizing: border-box;
 display: grid;
 grid-template-columns: var(--n-calendar-title-grid-template-columns);
 align-items: center;
 justify-items: center;
 padding: var(--n-calendar-title-padding);
 height: var(--n-calendar-title-height);
 `, [cE("prev, next, fast-prev, fast-next", `
 line-height: 0;
 cursor: pointer;
 width: var(--n-arrow-size);
 height: var(--n-arrow-size);
 color: var(--n-arrow-color);
 `), cE("month-year", `
 user-select: none;
 -webkit-user-select: none;
 flex-grow: 1;
 position: relative;
 `, [cE("text", `
 font-size: var(--n-calendar-title-font-size);
 line-height: var(--n-calendar-title-font-size);
 font-weight: var(--n-calendar-title-font-weight);
 padding: 6px 8px;
 text-align: center;
 color: var(--n-calendar-title-text-color);
 cursor: pointer;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-panel-border-radius);
 `, [cM("active", `
 background-color: var(--n-calendar-title-color-hover);
 `), c("&:hover", `
 background-color: var(--n-calendar-title-color-hover);
 `)])])]), cB("date-panel-weekdays", `
 display: grid;
 margin: auto;
 grid-template-columns: repeat(7, var(--n-item-cell-width));
 grid-template-rows: repeat(1, var(--n-item-cell-height));
 align-items: center;
 justify-items: center;
 margin-bottom: 4px;
 border-bottom: 1px solid var(--n-calendar-days-divider-color);
 `, [cE("day", `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 line-height: 15px;
 width: var(--n-item-size);
 text-align: center;
 font-size: var(--n-calendar-days-font-size);
 color: var(--n-item-text-color);
 display: flex;
 align-items: center;
 justify-content: center;
 `)]), cB("date-panel-dates", `
 margin: auto;
 display: grid;
 grid-template-columns: repeat(7, var(--n-item-cell-width));
 grid-template-rows: repeat(6, var(--n-item-cell-height));
 align-items: center;
 justify-items: center;
 flex-wrap: wrap;
 `, [cB("date-panel-date", `
 user-select: none;
 -webkit-user-select: none;
 position: relative;
 width: var(--n-item-size);
 height: var(--n-item-size);
 line-height: var(--n-item-size);
 text-align: center;
 font-size: var(--n-item-font-size);
 border-radius: var(--n-item-border-radius);
 z-index: 0;
 cursor: pointer;
 transition:
 background-color .2s var(--n-bezier),
 color .2s var(--n-bezier);
 `, [cE("trigger", `
 position: absolute;
 left: calc(var(--n-item-size) / 2 - var(--n-item-cell-width) / 2);
 top: calc(var(--n-item-size) / 2 - var(--n-item-cell-height) / 2);
 width: var(--n-item-cell-width);
 height: var(--n-item-cell-height);
 `), cM("current", [cE("sup", `
 position: absolute;
 top: 2px;
 right: 2px;
 content: "";
 height: 4px;
 width: 4px;
 border-radius: 2px;
 background-color: var(--n-item-color-active);
 transition:
 background-color .2s var(--n-bezier);
 `)]), c("&::after", `
 content: "";
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 transition: background-color .3s var(--n-bezier);
 `), cM("covered, start, end", [cNotM("excluded", [c("&::before", `
 content: "";
 z-index: -2;
 position: absolute;
 left: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 right: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 top: 0;
 bottom: 0;
 background-color: var(--n-item-color-included);
 `), c("&:nth-child(7n + 1)::before", {
  borderTopLeftRadius: "var(--n-item-border-radius)",
  borderBottomLeftRadius: "var(--n-item-border-radius)"
}), c("&:nth-child(7n + 7)::before", {
  borderTopRightRadius: "var(--n-item-border-radius)",
  borderBottomRightRadius: "var(--n-item-border-radius)"
})])]), cM("selected", {
  color: "var(--n-item-text-color-active)"
}, [c("&::after", {
  backgroundColor: "var(--n-item-color-active)"
}), cM("start", [c("&::before", {
  left: "50%"
})]), cM("end", [c("&::before", {
  right: "50%"
})]), cE("sup", {
  backgroundColor: "var(--n-panel-color)"
})]), cM("excluded", {
  color: "var(--n-item-text-color-disabled)"
}, [cM("selected", [c("&::after", {
  backgroundColor: "var(--n-item-color-disabled)"
})])]), cM("disabled", {
  cursor: "not-allowed",
  color: "var(--n-item-text-color-disabled)"
}, [cM("covered", [c("&::before", {
  backgroundColor: "var(--n-item-color-disabled)"
})]), cM("selected", [c("&::before", {
  backgroundColor: "var(--n-item-color-disabled)"
}), c("&::after", {
  backgroundColor: "var(--n-item-color-disabled)"
})])]), cM("week-hovered", [c("&::before", `
 background-color: var(--n-item-color-included);
 `), c("&:nth-child(7n + 1)::before", `
 border-top-left-radius: var(--n-item-border-radius);
 border-bottom-left-radius: var(--n-item-border-radius);
 `), c("&:nth-child(7n + 7)::before", `
 border-top-right-radius: var(--n-item-border-radius);
 border-bottom-right-radius: var(--n-item-border-radius);
 `)]), cM("week-selected", `
 color: var(--n-item-text-color-active)
 `, [c("&::before", `
 background-color: var(--n-item-color-active);
 `), c("&:nth-child(7n + 1)::before", `
 border-top-left-radius: var(--n-item-border-radius);
 border-bottom-left-radius: var(--n-item-border-radius);
 `), c("&:nth-child(7n + 7)::before", `
 border-top-right-radius: var(--n-item-border-radius);
 border-bottom-right-radius: var(--n-item-border-radius);
 `)])])]), cNotM("week", [cB("date-panel-dates", [cB("date-panel-date", [cNotM("disabled", [cNotM("selected", [c("&:hover", `
 background-color: var(--n-item-color-hover);
 `)])])])])]), cM("week", [cB("date-panel-dates", [cB("date-panel-date", [c("&::before", `
 content: "";
 z-index: -2;
 position: absolute;
 left: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 right: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 top: 0;
 bottom: 0;
 transition: background-color .3s var(--n-bezier);
 `)])])]), cE("vertical-divider", `
 grid-area: divider;
 height: 100%;
 width: 1px;
 background-color: var(--n-calendar-divider-color);
 `), cB("date-panel-footer", `
 border-top: 1px solid var(--n-panel-action-divider-color);
 padding: var(--n-panel-extra-footer-padding);
 `), cB("date-panel-actions", `
 flex: 1;
 padding: var(--n-panel-action-padding);
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-top: 1px solid var(--n-panel-action-divider-color);
 `, [cE("prefix, suffix", `
 display: flex;
 margin-bottom: -8px;
 `), cE("suffix", `
 align-self: flex-end;
 `), cE("prefix", `
 flex-wrap: wrap;
 `), cB("button", `
 margin-bottom: 8px;
 `, [c("&:not(:last-child)", `
 margin-right: 8px;
 `)])])]), c("[data-n-date].transition-disabled", {
  transition: "none !important"
}, [c("&::before, &::after", {
  transition: "none !important"
})])]);
function uniCalendarValidation(props, mergedValueRef) {
  const timePickerValidatorRef = computed(() => {
    const {
      isTimeDisabled
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || Array.isArray(value)) return void 0;
    return isTimeDisabled === null || isTimeDisabled === void 0 ? void 0 : isTimeDisabled(value);
  });
  const isHourDisabledRef = computed(() => {
    var _a;
    return (_a = timePickerValidatorRef.value) === null || _a === void 0 ? void 0 : _a.isHourDisabled;
  });
  const isMinuteDisabledRef = computed(() => {
    var _a;
    return (_a = timePickerValidatorRef.value) === null || _a === void 0 ? void 0 : _a.isMinuteDisabled;
  });
  const isSecondDisabledRef = computed(() => {
    var _a;
    return (_a = timePickerValidatorRef.value) === null || _a === void 0 ? void 0 : _a.isSecondDisabled;
  });
  const isDateInvalidRef = computed(() => {
    const {
      type,
      isDateDisabled
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || Array.isArray(value) || !["date", "datetime"].includes(type) || !isDateDisabled) {
      return false;
    }
    return isDateDisabled(value, {
      type: "input"
    });
  });
  const isTimeInvalidRef = computed(() => {
    const {
      type
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || !(type !== "datetime") || Array.isArray(value)) {
      return false;
    }
    const time = new Date(value);
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getMinutes();
    return (isHourDisabledRef.value ? isHourDisabledRef.value(hour) : false) || (isMinuteDisabledRef.value ? isMinuteDisabledRef.value(minute, hour) : false) || (isSecondDisabledRef.value ? isSecondDisabledRef.value(second, minute, hour) : false);
  });
  const isDateTimeInvalidRef = computed(() => {
    return isDateInvalidRef.value || isTimeInvalidRef.value;
  });
  const isValueInvalidRef = computed(() => {
    const {
      type
    } = props;
    if (type === "date") return isDateInvalidRef.value;
    if (type === "datetime") return isDateTimeInvalidRef.value;
    return false;
  });
  return {
    // date & datetime
    isValueInvalidRef,
    isDateInvalidRef,
    // datetime only
    isTimeInvalidRef,
    isDateTimeInvalidRef,
    isHourDisabledRef,
    isMinuteDisabledRef,
    isSecondDisabledRef
  };
}
function dualCalendarValidation(props, mergedValueRef) {
  const timePickerValidatorRef = computed(() => {
    const {
      isTimeDisabled
    } = props;
    const {
      value
    } = mergedValueRef;
    if (!Array.isArray(value) || !isTimeDisabled) {
      return [void 0, void 0];
    }
    return [isTimeDisabled === null || isTimeDisabled === void 0 ? void 0 : isTimeDisabled(value[0], "start", value), isTimeDisabled === null || isTimeDisabled === void 0 ? void 0 : isTimeDisabled(value[1], "end", value)];
  });
  const timeValidator = {
    isStartHourDisabledRef: computed(() => {
      var _a;
      return (_a = timePickerValidatorRef.value[0]) === null || _a === void 0 ? void 0 : _a.isHourDisabled;
    }),
    isEndHourDisabledRef: computed(() => {
      var _a;
      return (_a = timePickerValidatorRef.value[1]) === null || _a === void 0 ? void 0 : _a.isHourDisabled;
    }),
    isStartMinuteDisabledRef: computed(() => {
      var _a;
      return (_a = timePickerValidatorRef.value[0]) === null || _a === void 0 ? void 0 : _a.isMinuteDisabled;
    }),
    isEndMinuteDisabledRef: computed(() => {
      var _a;
      return (_a = timePickerValidatorRef.value[1]) === null || _a === void 0 ? void 0 : _a.isMinuteDisabled;
    }),
    isStartSecondDisabledRef: computed(() => {
      var _a;
      return (_a = timePickerValidatorRef.value[0]) === null || _a === void 0 ? void 0 : _a.isSecondDisabled;
    }),
    isEndSecondDisabledRef: computed(() => {
      var _a;
      return (_a = timePickerValidatorRef.value[1]) === null || _a === void 0 ? void 0 : _a.isSecondDisabled;
    })
  };
  const isStartDateInvalidRef = computed(() => {
    const {
      type,
      isDateDisabled
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || !Array.isArray(value) || !["daterange", "datetimerange"].includes(type) || !isDateDisabled) {
      return false;
    }
    return isDateDisabled(value[0], "start", value);
  });
  const isEndDateInvalidRef = computed(() => {
    const {
      type,
      isDateDisabled
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || !Array.isArray(value) || !["daterange", "datetimerange"].includes(type) || !isDateDisabled) {
      return false;
    }
    return isDateDisabled(value[1], "end", value);
  });
  const isStartTimeInvalidRef = computed(() => {
    const {
      type
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || !Array.isArray(value) || type !== "datetimerange") {
      return false;
    }
    const startHours = getHours(value[0]);
    const startMinutes = getMinutes(value[0]);
    const startSeconds = getSeconds(value[0]);
    const {
      isStartHourDisabledRef,
      isStartMinuteDisabledRef,
      isStartSecondDisabledRef
    } = timeValidator;
    const startTimeInvalid = (isStartHourDisabledRef.value ? isStartHourDisabledRef.value(startHours) : false) || (isStartMinuteDisabledRef.value ? isStartMinuteDisabledRef.value(startMinutes, startHours) : false) || (isStartSecondDisabledRef.value ? isStartSecondDisabledRef.value(startSeconds, startMinutes, startHours) : false);
    return startTimeInvalid;
  });
  const isEndTimeInvalidRef = computed(() => {
    const {
      type
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || !Array.isArray(value) || type !== "datetimerange") {
      return false;
    }
    const endHours = getHours(value[1]);
    const endMinutes = getMinutes(value[1]);
    const endSeconds = getSeconds(value[1]);
    const {
      isEndHourDisabledRef,
      isEndMinuteDisabledRef,
      isEndSecondDisabledRef
    } = timeValidator;
    const endTimeInvalid = (isEndHourDisabledRef.value ? isEndHourDisabledRef.value(endHours) : false) || (isEndMinuteDisabledRef.value ? isEndMinuteDisabledRef.value(endMinutes, endHours) : false) || (isEndSecondDisabledRef.value ? isEndSecondDisabledRef.value(endSeconds, endMinutes, endHours) : false);
    return endTimeInvalid;
  });
  const isStartValueInvalidRef = computed(() => {
    return isStartDateInvalidRef.value || isStartTimeInvalidRef.value;
  });
  const isEndValueInvalidRef = computed(() => {
    return isEndDateInvalidRef.value || isEndTimeInvalidRef.value;
  });
  const isRangeInvalidRef = computed(() => {
    return isStartValueInvalidRef.value || isEndValueInvalidRef.value;
  });
  return Object.assign(Object.assign({}, timeValidator), {
    isStartDateInvalidRef,
    isEndDateInvalidRef,
    isStartTimeInvalidRef,
    isEndTimeInvalidRef,
    isStartValueInvalidRef,
    isEndValueInvalidRef,
    isRangeInvalidRef
  });
}
const __unplugin_components_0 = defineComponent({
  name: "DatePicker",
  props: datePickerProps,
  slots: Object,
  setup(props, {
    slots
  }) {
    var _a;
    const {
      localeRef,
      dateLocaleRef
    } = useLocale("DatePicker");
    const {
      mergedComponentPropsRef,
      mergedClsPrefixRef,
      mergedBorderedRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const formItem = useFormItem(props, {
      mergedSize: (NFormItem) => {
        var _a2, _b;
        const {
          size
        } = props;
        if (size) return size;
        const {
          mergedSize: formItemSize
        } = NFormItem || {};
        if (formItemSize === null || formItemSize === void 0 ? void 0 : formItemSize.value) return formItemSize.value;
        const configSize = (_b = (_a2 = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a2 === void 0 ? void 0 : _a2.DatePicker) === null || _b === void 0 ? void 0 : _b.size;
        if (configSize) return configSize;
        return "medium";
      }
    });
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    const panelInstRef = ref(null);
    const triggerElRef = ref(null);
    const inputInstRef = ref(null);
    const uncontrolledShowRef = ref(false);
    const controlledShowRef = toRef(props, "show");
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    const dateFnsOptionsRef = computed(() => {
      return {
        locale: dateLocaleRef.value.locale,
        useAdditionalWeekYearTokens: true
      };
    });
    const mergedFormatRef = computed(() => {
      const {
        format: format2
      } = props;
      if (format2) return format2;
      switch (props.type) {
        case "date":
        case "daterange":
          return localeRef.value.dateFormat;
        case "datetime":
        case "datetimerange":
          return localeRef.value.dateTimeFormat;
        case "year":
        case "yearrange":
          return localeRef.value.yearTypeFormat;
        case "month":
        case "monthrange":
          return localeRef.value.monthTypeFormat;
        case "quarter":
        case "quarterrange":
          return localeRef.value.quarterFormat;
        case "week":
          return localeRef.value.weekFormat;
      }
    });
    const mergedValueFormatRef = computed(() => {
      var _a2;
      return (_a2 = props.valueFormat) !== null && _a2 !== void 0 ? _a2 : mergedFormatRef.value;
    });
    function getTimestampValue(value) {
      if (value === null) return null;
      const {
        value: mergedValueFormat
      } = mergedValueFormatRef;
      const {
        value: dateFnsOptions
      } = dateFnsOptionsRef;
      if (Array.isArray(value)) {
        return [strictParse(value[0], mergedValueFormat, /* @__PURE__ */ new Date(), dateFnsOptions).getTime(), strictParse(value[1], mergedValueFormat, /* @__PURE__ */ new Date(), dateFnsOptions).getTime()];
      }
      return strictParse(value, mergedValueFormat, /* @__PURE__ */ new Date(), dateFnsOptions).getTime();
    }
    const {
      defaultFormattedValue,
      defaultValue
    } = props;
    const uncontrolledValueRef = ref((_a = defaultFormattedValue !== void 0 ? getTimestampValue(defaultFormattedValue) : defaultValue) !== null && _a !== void 0 ? _a : null);
    const controlledValueRef = computed(() => {
      const {
        formattedValue
      } = props;
      if (formattedValue !== void 0) {
        return getTimestampValue(formattedValue);
      }
      return props.value;
    });
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const pendingValueRef = ref(null);
    watchEffect(() => {
      pendingValueRef.value = mergedValueRef.value;
    });
    const singleInputValueRef = ref("");
    const rangeStartInputValueRef = ref("");
    const rangeEndInputValueRef = ref("");
    const themeRef = useTheme("DatePicker", "-date-picker", style, datePickerLight, props, mergedClsPrefixRef);
    const timePickerSizeRef = computed(() => {
      var _a2, _b;
      return ((_b = (_a2 = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a2 === void 0 ? void 0 : _a2.DatePicker) === null || _b === void 0 ? void 0 : _b.timePickerSize) || "small";
    });
    const isRangeRef = computed(() => {
      return ["daterange", "datetimerange", "monthrange", "quarterrange", "yearrange"].includes(props.type);
    });
    const localizedPlacehoderRef = computed(() => {
      const {
        placeholder
      } = props;
      if (placeholder === void 0) {
        const {
          type
        } = props;
        switch (type) {
          case "date":
            return localeRef.value.datePlaceholder;
          case "datetime":
            return localeRef.value.datetimePlaceholder;
          case "month":
            return localeRef.value.monthPlaceholder;
          case "year":
            return localeRef.value.yearPlaceholder;
          case "quarter":
            return localeRef.value.quarterPlaceholder;
          case "week":
            return localeRef.value.weekPlaceholder;
          default:
            return "";
        }
      } else {
        return placeholder;
      }
    });
    const localizedStartPlaceholderRef = computed(() => {
      if (props.startPlaceholder === void 0) {
        if (props.type === "daterange") {
          return localeRef.value.startDatePlaceholder;
        } else if (props.type === "datetimerange") {
          return localeRef.value.startDatetimePlaceholder;
        } else if (props.type === "monthrange") {
          return localeRef.value.startMonthPlaceholder;
        }
        return "";
      } else {
        return props.startPlaceholder;
      }
    });
    const localizedEndPlaceholderRef = computed(() => {
      if (props.endPlaceholder === void 0) {
        if (props.type === "daterange") {
          return localeRef.value.endDatePlaceholder;
        } else if (props.type === "datetimerange") {
          return localeRef.value.endDatetimePlaceholder;
        } else if (props.type === "monthrange") {
          return localeRef.value.endMonthPlaceholder;
        }
        return "";
      } else {
        return props.endPlaceholder;
      }
    });
    const mergedActionsRef = computed(() => {
      const {
        actions,
        type,
        clearable
      } = props;
      if (actions === null) return [];
      if (actions !== void 0) return actions;
      const result = clearable ? ["clear"] : [];
      switch (type) {
        case "date":
        case "week": {
          result.push("now");
          return result;
        }
        case "datetime": {
          result.push("now", "confirm");
          return result;
        }
        case "daterange": {
          result.push("confirm");
          return result;
        }
        case "datetimerange": {
          result.push("confirm");
          return result;
        }
        case "month": {
          result.push("now", "confirm");
          return result;
        }
        case "year": {
          result.push("now");
          return result;
        }
        case "quarter": {
          result.push("now", "confirm");
          return result;
        }
        case "monthrange":
        case "yearrange":
        case "quarterrange": {
          result.push("confirm");
          return result;
        }
        default: {
          warn("date-picker", "The type is wrong, n-date-picker's type only supports `date`, `datetime`, `daterange` and `datetimerange`.");
          break;
        }
      }
    });
    function getFormattedValue(value) {
      if (value === null) return null;
      if (Array.isArray(value)) {
        const {
          value: mergedValueFormat
        } = mergedValueFormatRef;
        const {
          value: dateFnsOptions
        } = dateFnsOptionsRef;
        return [format(value[0], mergedValueFormat, dateFnsOptions), format(value[1], mergedValueFormat, dateFnsOptionsRef.value)];
      } else {
        return format(value, mergedValueFormatRef.value, dateFnsOptionsRef.value);
      }
    }
    function doUpdatePendingValue(value) {
      pendingValueRef.value = value;
    }
    function doUpdateFormattedValue(value, timestampValue) {
      const {
        "onUpdate:formattedValue": _onUpdateFormattedValue,
        onUpdateFormattedValue
      } = props;
      if (_onUpdateFormattedValue) {
        call(_onUpdateFormattedValue, value, timestampValue);
      }
      if (onUpdateFormattedValue) {
        call(onUpdateFormattedValue, value, timestampValue);
      }
    }
    function doUpdateValue(value, options) {
      const {
        "onUpdate:value": _onUpdateValue,
        onUpdateValue,
        onChange
      } = props;
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      const formattedValue = getFormattedValue(value);
      if (options.doConfirm) {
        doConfirm(value, formattedValue);
      }
      if (onUpdateValue) {
        call(onUpdateValue, value, formattedValue);
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value, formattedValue);
      }
      if (onChange) call(onChange, value, formattedValue);
      uncontrolledValueRef.value = value;
      doUpdateFormattedValue(formattedValue, value);
      nTriggerFormChange();
      nTriggerFormInput();
    }
    function doClear() {
      const {
        onClear
      } = props;
      onClear === null || onClear === void 0 ? void 0 : onClear();
    }
    function doConfirm(value, formattedValue) {
      const {
        onConfirm
      } = props;
      if (onConfirm) onConfirm(value, formattedValue);
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
    function doUpdateShow(show) {
      const {
        "onUpdate:show": _onUpdateShow,
        onUpdateShow
      } = props;
      if (_onUpdateShow) call(_onUpdateShow, show);
      if (onUpdateShow) call(onUpdateShow, show);
      uncontrolledShowRef.value = show;
    }
    function handleKeydown(e) {
      if (e.key === "Escape") {
        if (mergedShowRef.value) {
          markEventEffectPerformed(e);
          closeCalendar({
            returnFocus: true
          });
        }
      }
    }
    function handleInputKeydown(e) {
      if (e.key === "Escape" && mergedShowRef.value) {
        markEventEffectPerformed(e);
      }
    }
    function handleClear() {
      var _a2;
      doUpdateShow(false);
      (_a2 = inputInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.deactivate();
      doClear();
    }
    function handlePanelClear() {
      var _a2;
      (_a2 = inputInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.deactivate();
      doClear();
    }
    function handlePanelTabOut() {
      closeCalendar({
        returnFocus: true
      });
    }
    function handleClickOutside(e) {
      var _a2;
      if (mergedShowRef.value && !((_a2 = triggerElRef.value) === null || _a2 === void 0 ? void 0 : _a2.contains(getPreciseEventTarget(e)))) {
        closeCalendar({
          returnFocus: false
        });
      }
    }
    function handlePanelClose(disableUpdateOnClose) {
      closeCalendar({
        returnFocus: true,
        disableUpdateOnClose
      });
    }
    function handlePanelUpdateValue(value, doUpdate) {
      if (doUpdate) {
        doUpdateValue(value, {
          doConfirm: false
        });
      } else {
        doUpdatePendingValue(value);
      }
    }
    function handlePanelConfirm() {
      const pendingValue = pendingValueRef.value;
      doUpdateValue(Array.isArray(pendingValue) ? [pendingValue[0], pendingValue[1]] : pendingValue, {
        doConfirm: true
      });
    }
    function deriveInputState() {
      const {
        value
      } = pendingValueRef;
      if (isRangeRef.value) {
        if (Array.isArray(value) || value === null) {
          deriveRangeInputState(value);
        }
      } else {
        if (!Array.isArray(value)) {
          deriveSingleInputState(value);
        }
      }
    }
    function deriveSingleInputState(value) {
      if (value === null) {
        singleInputValueRef.value = "";
      } else {
        singleInputValueRef.value = format(value, mergedFormatRef.value, dateFnsOptionsRef.value);
      }
    }
    function deriveRangeInputState(values) {
      if (values === null) {
        rangeStartInputValueRef.value = "";
        rangeEndInputValueRef.value = "";
      } else {
        const dateFnsOptions = dateFnsOptionsRef.value;
        rangeStartInputValueRef.value = format(values[0], mergedFormatRef.value, dateFnsOptions);
        rangeEndInputValueRef.value = format(values[1], mergedFormatRef.value, dateFnsOptions);
      }
    }
    function handleInputActivate() {
      if (!mergedShowRef.value) {
        openCalendar();
      }
    }
    function handleInputBlur(e) {
      var _a2;
      if (!((_a2 = panelInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.$el.contains(e.relatedTarget))) {
        doBlur(e);
        deriveInputState();
        closeCalendar({
          returnFocus: false
        });
      }
    }
    function handleInputDeactivate() {
      if (mergedDisabledRef.value) return;
      deriveInputState();
      closeCalendar({
        returnFocus: false
      });
    }
    function handleSingleUpdateValue(v) {
      if (v === "") {
        doUpdateValue(null, {
          doConfirm: false
        });
        pendingValueRef.value = null;
        singleInputValueRef.value = "";
        return;
      }
      const newSelectedDateTime = strictParse(v, mergedFormatRef.value, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value);
      if (isValid(newSelectedDateTime)) {
        doUpdateValue(getTime(newSelectedDateTime), {
          doConfirm: false
        });
        deriveInputState();
      } else {
        singleInputValueRef.value = v;
      }
    }
    function handleRangeUpdateValue(v, {
      source
    }) {
      if (v[0] === "" && v[1] === "") {
        doUpdateValue(null, {
          doConfirm: false
        });
        pendingValueRef.value = null;
        rangeStartInputValueRef.value = "";
        rangeEndInputValueRef.value = "";
        return;
      }
      const [startTime, endTime] = v;
      const newStartTime = strictParse(startTime, mergedFormatRef.value, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value);
      const newEndTime = strictParse(endTime, mergedFormatRef.value, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value);
      if (isValid(newStartTime) && isValid(newEndTime)) {
        let newStartTs = getTime(newStartTime);
        let newEndTs = getTime(newEndTime);
        if (newEndTime < newStartTime) {
          if (source === 0) {
            newEndTs = newStartTs;
          } else {
            newStartTs = newEndTs;
          }
        }
        doUpdateValue([newStartTs, newEndTs], {
          doConfirm: false
        });
        deriveInputState();
      } else {
        [rangeStartInputValueRef.value, rangeEndInputValueRef.value] = v;
      }
    }
    function handleTriggerClick(e) {
      if (mergedDisabledRef.value) return;
      if (happensIn(e, "clear")) return;
      if (!mergedShowRef.value) {
        openCalendar();
      }
    }
    function handleInputFocus(e) {
      if (mergedDisabledRef.value) return;
      doFocus(e);
    }
    function openCalendar() {
      if (mergedDisabledRef.value || mergedShowRef.value) return;
      doUpdateShow(true);
    }
    function closeCalendar({
      returnFocus,
      disableUpdateOnClose
    }) {
      var _a2;
      if (mergedShowRef.value) {
        doUpdateShow(false);
        if (props.type !== "date" && props.updateValueOnClose && !disableUpdateOnClose) {
          handlePanelConfirm();
        }
        if (returnFocus) {
          (_a2 = inputInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.focus();
        }
      }
    }
    watch(pendingValueRef, () => {
      deriveInputState();
    });
    deriveInputState();
    watch(mergedShowRef, (value) => {
      if (!value) {
        pendingValueRef.value = mergedValueRef.value;
      }
    });
    const uniVaidation = uniCalendarValidation(props, pendingValueRef);
    const dualValidation = dualCalendarValidation(props, pendingValueRef);
    provide(datePickerInjectionKey, Object.assign(Object.assign(Object.assign({
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      timePickerSizeRef,
      localeRef,
      dateLocaleRef,
      firstDayOfWeekRef: toRef(props, "firstDayOfWeek"),
      isDateDisabledRef: toRef(props, "isDateDisabled"),
      rangesRef: toRef(props, "ranges"),
      timePickerPropsRef: toRef(props, "timePickerProps"),
      closeOnSelectRef: toRef(props, "closeOnSelect"),
      updateValueOnCloseRef: toRef(props, "updateValueOnClose"),
      monthFormatRef: toRef(props, "monthFormat"),
      yearFormatRef: toRef(props, "yearFormat"),
      quarterFormatRef: toRef(props, "quarterFormat"),
      yearRangeRef: toRef(props, "yearRange")
    }, uniVaidation), dualValidation), {
      datePickerSlots: slots
    }));
    const exposedMethods = {
      focus: () => {
        var _a2;
        (_a2 = inputInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.focus();
      },
      blur: () => {
        var _a2;
        (_a2 = inputInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.blur();
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
        "--n-bezier": cubicBezierEaseInOut,
        "--n-icon-color-override": iconColor,
        "--n-icon-color-disabled-override": iconColorDisabled
      };
    });
    const triggerThemeClassHandle = inlineThemeDisabled ? useThemeClass("date-picker-trigger", void 0, triggerCssVarsRef, props) : void 0;
    const cssVarsRef = computed(() => {
      const {
        type
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          calendarTitleFontSize,
          calendarDaysFontSize,
          itemFontSize,
          itemTextColor,
          itemColorDisabled,
          itemColorIncluded,
          itemColorHover,
          itemColorActive,
          itemBorderRadius,
          itemTextColorDisabled,
          itemTextColorActive,
          panelColor,
          panelTextColor,
          arrowColor,
          calendarTitleTextColor,
          panelActionDividerColor,
          panelHeaderDividerColor,
          calendarDaysDividerColor,
          panelBoxShadow,
          panelBorderRadius,
          calendarTitleFontWeight,
          panelExtraFooterPadding,
          panelActionPadding,
          itemSize,
          itemCellWidth,
          itemCellHeight,
          scrollItemWidth,
          scrollItemHeight,
          calendarTitlePadding,
          calendarTitleHeight,
          calendarDaysHeight,
          calendarDaysTextColor,
          arrowSize,
          panelHeaderPadding,
          calendarDividerColor,
          calendarTitleGridTempateColumns,
          iconColor,
          iconColorDisabled,
          scrollItemBorderRadius,
          calendarTitleColorHover,
          [createKey("calendarLeftPadding", type)]: calendarLeftPadding,
          [createKey("calendarRightPadding", type)]: calendarRightPadding
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-panel-border-radius": panelBorderRadius,
        "--n-panel-color": panelColor,
        "--n-panel-box-shadow": panelBoxShadow,
        "--n-panel-text-color": panelTextColor,
        // panel header
        "--n-panel-header-padding": panelHeaderPadding,
        "--n-panel-header-divider-color": panelHeaderDividerColor,
        // panel calendar
        "--n-calendar-left-padding": calendarLeftPadding,
        "--n-calendar-right-padding": calendarRightPadding,
        "--n-calendar-title-color-hover": calendarTitleColorHover,
        "--n-calendar-title-height": calendarTitleHeight,
        "--n-calendar-title-padding": calendarTitlePadding,
        "--n-calendar-title-font-size": calendarTitleFontSize,
        "--n-calendar-title-font-weight": calendarTitleFontWeight,
        "--n-calendar-title-text-color": calendarTitleTextColor,
        "--n-calendar-title-grid-template-columns": calendarTitleGridTempateColumns,
        "--n-calendar-days-height": calendarDaysHeight,
        "--n-calendar-days-divider-color": calendarDaysDividerColor,
        "--n-calendar-days-font-size": calendarDaysFontSize,
        "--n-calendar-days-text-color": calendarDaysTextColor,
        "--n-calendar-divider-color": calendarDividerColor,
        // panel action
        "--n-panel-action-padding": panelActionPadding,
        "--n-panel-extra-footer-padding": panelExtraFooterPadding,
        "--n-panel-action-divider-color": panelActionDividerColor,
        // panel item
        "--n-item-font-size": itemFontSize,
        "--n-item-border-radius": itemBorderRadius,
        "--n-item-size": itemSize,
        "--n-item-cell-width": itemCellWidth,
        "--n-item-cell-height": itemCellHeight,
        "--n-item-text-color": itemTextColor,
        "--n-item-color-included": itemColorIncluded,
        "--n-item-color-disabled": itemColorDisabled,
        "--n-item-color-hover": itemColorHover,
        "--n-item-color-active": itemColorActive,
        "--n-item-text-color-disabled": itemTextColorDisabled,
        "--n-item-text-color-active": itemTextColorActive,
        // scroll item
        "--n-scroll-item-width": scrollItemWidth,
        "--n-scroll-item-height": scrollItemHeight,
        "--n-scroll-item-border-radius": scrollItemBorderRadius,
        // panel arrow
        "--n-arrow-size": arrowSize,
        "--n-arrow-color": arrowColor,
        // icon in trigger
        "--n-icon-color": iconColor,
        "--n-icon-color-disabled": iconColorDisabled
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("date-picker", computed(() => {
      return props.type;
    }), cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, exposedMethods), {
      mergedStatus: mergedStatusRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      namespace: namespaceRef,
      uncontrolledValue: uncontrolledValueRef,
      pendingValue: pendingValueRef,
      panelInstRef,
      triggerElRef,
      inputInstRef,
      isMounted: isMounted(),
      displayTime: singleInputValueRef,
      displayStartTime: rangeStartInputValueRef,
      displayEndTime: rangeEndInputValueRef,
      mergedShow: mergedShowRef,
      adjustedTo: useAdjustedTo(props),
      isRange: isRangeRef,
      localizedStartPlaceholder: localizedStartPlaceholderRef,
      localizedEndPlaceholder: localizedEndPlaceholderRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      localizedPlacehoder: localizedPlacehoderRef,
      isValueInvalid: uniVaidation.isValueInvalidRef,
      isStartValueInvalid: dualValidation.isStartValueInvalidRef,
      isEndValueInvalid: dualValidation.isEndValueInvalidRef,
      handleInputKeydown,
      handleClickOutside,
      handleKeydown,
      handleClear,
      handlePanelClear,
      handleTriggerClick,
      handleInputActivate,
      handleInputDeactivate,
      handleInputFocus,
      handleInputBlur,
      handlePanelTabOut,
      handlePanelClose,
      handleRangeUpdateValue,
      handleSingleUpdateValue,
      handlePanelUpdateValue,
      handlePanelConfirm,
      mergedTheme: themeRef,
      actions: mergedActionsRef,
      triggerCssVars: inlineThemeDisabled ? void 0 : triggerCssVarsRef,
      triggerThemeClass: triggerThemeClassHandle === null || triggerThemeClassHandle === void 0 ? void 0 : triggerThemeClassHandle.themeClass,
      triggerOnRender: triggerThemeClassHandle === null || triggerThemeClassHandle === void 0 ? void 0 : triggerThemeClassHandle.onRender,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      onNextMonth: props.onNextMonth,
      onPrevMonth: props.onPrevMonth,
      onNextYear: props.onNextYear,
      onPrevYear: props.onPrevYear
    });
  },
  render() {
    const {
      clearable,
      triggerOnRender,
      mergedClsPrefix,
      $slots
    } = this;
    const commonPanelProps = {
      onUpdateValue: this.handlePanelUpdateValue,
      onTabOut: this.handlePanelTabOut,
      onClose: this.handlePanelClose,
      onClear: this.handlePanelClear,
      onKeydown: this.handleKeydown,
      onConfirm: this.handlePanelConfirm,
      ref: "panelInstRef",
      value: this.pendingValue,
      active: this.mergedShow,
      actions: this.actions,
      shortcuts: this.shortcuts,
      style: this.cssVars,
      defaultTime: this.defaultTime,
      themeClass: this.themeClass,
      panel: this.panel,
      inputReadonly: this.inputReadonly || this.mergedDisabled,
      onRender: this.onRender,
      onNextMonth: this.onNextMonth,
      onPrevMonth: this.onPrevMonth,
      onNextYear: this.onNextYear,
      onPrevYear: this.onPrevYear,
      timePickerFormat: this.timePickerFormat,
      dateFormat: this.dateFormat,
      fastYearSelect: this.fastYearSelect,
      fastMonthSelect: this.fastMonthSelect,
      calendarDayFormat: this.calendarDayFormat,
      calendarHeaderYearFormat: this.calendarHeaderYearFormat,
      calendarHeaderMonthFormat: this.calendarHeaderMonthFormat,
      calendarHeaderMonthYearSeparator: this.calendarHeaderMonthYearSeparator,
      calendarHeaderMonthBeforeYear: this.calendarHeaderMonthBeforeYear
    };
    const renderPanel = () => {
      const {
        type
      } = this;
      return type === "datetime" ? h(DatetimePanel, Object.assign({}, commonPanelProps, {
        defaultCalendarStartTime: this.defaultCalendarStartTime
      }), $slots) : type === "daterange" ? h(DaterangePanel, Object.assign({}, commonPanelProps, {
        defaultCalendarStartTime: this.defaultCalendarStartTime,
        defaultCalendarEndTime: this.defaultCalendarEndTime,
        bindCalendarMonths: this.bindCalendarMonths
      }), $slots) : type === "datetimerange" ? h(DatetimerangePanel, Object.assign({}, commonPanelProps, {
        defaultCalendarStartTime: this.defaultCalendarStartTime,
        defaultCalendarEndTime: this.defaultCalendarEndTime,
        bindCalendarMonths: this.bindCalendarMonths
      }), $slots) : type === "month" || type === "year" || type === "quarter" ? h(MonthPanel, Object.assign({}, commonPanelProps, {
        type,
        key: type
      })) : type === "monthrange" || type === "yearrange" || type === "quarterrange" ? h(MonthRangePanel, Object.assign({}, commonPanelProps, {
        type
      })) : h(DatePanel, Object.assign({}, commonPanelProps, {
        type,
        defaultCalendarStartTime: this.defaultCalendarStartTime
      }), $slots);
    };
    if (this.panel) {
      return renderPanel();
    }
    triggerOnRender === null || triggerOnRender === void 0 ? void 0 : triggerOnRender();
    const commonInputProps = {
      bordered: this.mergedBordered,
      size: this.mergedSize,
      passivelyActivated: true,
      disabled: this.mergedDisabled,
      readonly: this.inputReadonly || this.mergedDisabled,
      clearable,
      onClear: this.handleClear,
      onClick: this.handleTriggerClick,
      onKeydown: this.handleInputKeydown,
      onActivate: this.handleInputActivate,
      onDeactivate: this.handleInputDeactivate,
      onFocus: this.handleInputFocus,
      onBlur: this.handleInputBlur
    };
    return h("div", {
      ref: "triggerElRef",
      class: [`${mergedClsPrefix}-date-picker`, this.mergedDisabled && `${mergedClsPrefix}-date-picker--disabled`, this.isRange && `${mergedClsPrefix}-date-picker--range`, this.triggerThemeClass],
      style: this.triggerCssVars,
      onKeydown: this.handleKeydown
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => this.isRange ? h(__unplugin_components_2, Object.assign({
          ref: "inputInstRef",
          status: this.mergedStatus,
          value: [this.displayStartTime, this.displayEndTime],
          placeholder: [this.localizedStartPlaceholder, this.localizedEndPlaceholder],
          textDecoration: [this.isStartValueInvalid ? "line-through" : "", this.isEndValueInvalid ? "line-through" : ""],
          pair: true,
          onUpdateValue: this.handleRangeUpdateValue,
          theme: this.mergedTheme.peers.Input,
          themeOverrides: this.mergedTheme.peerOverrides.Input,
          internalForceFocus: this.mergedShow,
          internalDeactivateOnEnter: true
        }, commonInputProps), {
          separator: () => this.separator === void 0 ? resolveSlot($slots.separator, () => [h(NBaseIcon, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-date-picker-icon`
          }, {
            default: () => h(ToIcon, null)
          })]) : this.separator,
          [clearable ? "clear-icon-placeholder" : "suffix"]: () => resolveSlot($slots["date-icon"], () => [h(NBaseIcon, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-date-picker-icon`
          }, {
            default: () => h(DateIcon, null)
          })])
        }) : h(__unplugin_components_2, Object.assign({
          ref: "inputInstRef",
          status: this.mergedStatus,
          value: this.displayTime,
          placeholder: this.localizedPlacehoder,
          textDecoration: this.isValueInvalid && !this.isRange ? "line-through" : "",
          onUpdateValue: this.handleSingleUpdateValue,
          theme: this.mergedTheme.peers.Input,
          themeOverrides: this.mergedTheme.peerOverrides.Input,
          internalForceFocus: this.mergedShow,
          internalDeactivateOnEnter: true
        }, commonInputProps), {
          [clearable ? "clear-icon-placeholder" : "suffix"]: () => h(NBaseIcon, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-date-picker-icon`
          }, {
            default: () => resolveSlot($slots["date-icon"], () => [h(DateIcon, null)])
          })
        })
      }), h(VFollower, {
        show: this.mergedShow,
        containerClass: this.namespace,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        placement: this.placement
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => {
            if (!this.mergedShow) return null;
            return withDirectives(renderPanel(), [[clickoutside, this.handleClickOutside, void 0, {
              capture: true
            }]]);
          }
        })
      })]
    }));
  }
});
export {
  __unplugin_components_0 as _
};
